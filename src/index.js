import { generateHtml } from "./generateHtml.js";   // ← 新增此行
import { generateCurl } from "./generateCurl.js";   // ← 新增此行
import { generateWget } from "./generateWget.js";   // ← 新增此行

// ----------------------------------------------------
// 讀取環境偵測
// ----------------------------------------------------
let isWorker = false;   // 是否在 Cloudflare Workers
let isDocker = false;   // 是否在 Docker (只在 Node 會有意義)

(() => {
  // Cloudflare Workers 沒有 `process`，且 `globalThis.fetch` 為函式
  if (typeof process === "undefined" && typeof globalThis.fetch === "function") {
    isWorker = true;
    // 在 Workers 裡面不需要也不能檢查 Docker，直接返回
    return;
  }

  // 若走到這裡，代表程式在 Node（本機或 Docker）
  isWorker = false;

  // 1. 先檢查常見的 Docker 環境變數
  if (process.env.DOCKER || process.env.container) {
    isDocker = true;
    return;
  }

  // 2. 再檢查是否有 /.dockerenv 這個檔案（Docker 會自動掛載）
  try {
    const fs = require("node:fs");
    if (fs.existsSync("/.dockerenv")) {
      isDocker = true;
      return;
    }
  } catch (_) {
    /* ignore */
  }

  // 3. 最後檢查 Linux cgroup 資訊 (多數 Docker 會在此留下痕跡)
  try {
    const fs = require("node:fs");
    const cgroup = fs.readFileSync("/proc/1/cgroup", "utf8");
    if (/docker|containerd/.test(cgroup)) {
      isDocker = true;
      return;
    }
  } catch (_) {
    /* ignore */
  }
})();

// ----------------------------------------------------
// 主程式主要流程
// ----------------------------------------------------
export default {
  async fetch(request, env, ctx) {
    /* ----------------------------------------------------
       ① 直接回傳 raw body（測試檔案傳輸用）
       ---------------------------------------------------- */
    const rawBodyHeader = request.headers.get('x-raw-body');
    // const wantRawBody   = rawBodyHeader && rawBodyHeader.toLowerCase() === 'true';
    const wantRawBody = (() => {
      if (!rawBodyHeader) return false;                     // 沒有此 Header
      const normalized = rawBodyHeader.trim().toLowerCase(); // 去除前後空白、統一小寫
      // 空字串、'0'、'false' 皆視為 false，其他皆視為 true
      return !(normalized === '' || normalized === '0' || normalized === 'false');
    })();

    if (wantRawBody && request.method === 'POST' && request.body && !request.bodyUsed) {
      // 直接把 request 的 ReadableStream 回傳，避免二次讀取
      const bodyStream = request.clone().body;   // 需要 clone，因為 body 只能讀一次

      // 依原始 Content‑Type 回傳，若沒有則以二進位流為 fallback
      const rawContentType = request.headers.get('content-type') || 'application/octet-stream';

      // 若想讓瀏覽器下載，可自行提供檔名（若無則使用 "upload.bin"）
      const filename = request.headers.get('x-filename') || 'upload.bin';

      const rawHeaders = new Headers();
      rawHeaders.set('content-type', rawContentType);
      rawHeaders.set('content-disposition', `attachment; filename="${filename}"`);
      // 仍保留原始 Request headers，若需要可全部 copy：
      // request.headers.forEach((v, k) => rawHeaders.set(k, v));

      return new Response(bodyStream, { headers: rawHeaders });
    }

    /* ----------------------------------------------------
       ② 正常流程 – 解析 body 為文字/JSON 等（保留原有邏輯）
       ---------------------------------------------------- */
    // ------------------- Body -------------------
    let bodyRaw = "";
    let body    = {};

    // 如果請求本身帶有 body（ReadableStream）且尚未被消費，就讀取並解析
    if (request.body && !request.bodyUsed) {
      try {
        const cloned = request.clone();               // 複製可讀的 Request
        bodyRaw = await cloned.text();                // ---- raw 文字 ----

        const contentType = request.headers.get("content-type") || "";

        // ---------- 依 Content-Type 解析 ----------
        if (contentType.includes("application/json")) {
          // JSON → 直接回傳物件
          body = JSON.parse(bodyRaw);
        } else if (contentType.includes("application/x-www-form-urlencoded")) {
          // URL‑encoded → 轉成 key/value 物件
          body = Object.fromEntries(new URLSearchParams(bodyRaw));
        } else {
          // 其他類型（純文字、XML…）保留原始字串
          body = bodyRaw;
        }
        // ----------------------------------------
      } catch (_) {
        // 任何解析錯誤都回傳空物件，且保留 raw（若有）仍是空字串
        body = {};
        bodyRaw = "";
      }
    }

    // 解析 URL 與查詢字串
    const url = new URL(request.url);
    const query = Object.fromEntries(url.searchParams.entries());

    // 解析路徑參數（這裡簡單把第一段作為 0 號參數）
    const pathSegments = url.pathname.split("/").filter(Boolean);
    const params = pathSegments.length ? pathSegments : [];

    // 取得 request headers
    const headers = {};
    for (const [k, v] of request.headers.entries()) {
      headers[k] = v;
    }

    // // ------------------- HeadersRaw -------------------
    // // 每一筆 header 以 "key: value" 形式組成，行與行之間用 \r\n 分隔
    // const headersRaw = Array.from(request.headers.entries())
    //   .map(([k, v]) => `${k}: ${v}`)
    //   .join("\r\n");

    // ------------------- Cookies -------------------
    // 1. 直接取得原始 Cookie 標頭字串
    const cookiesRaw = request.headers.get("cookie") ?? "";

    // 2. 依 ; 分割並轉成 key/value 物件
    const cookies = {};
    if (cookiesRaw) {
      cookiesRaw.split(";").forEach(pair => {
        const [rawKey, ...rawVal] = pair.trim().split("=");
        const key = decodeURIComponent(rawKey);
        const val = decodeURIComponent(rawVal.join("="));
        cookies[key] = val;
      });
    }

    // 取得 client IP（Cloudflare 會在 cf 中提供）
    const cf = request.cf || {};
    const clientIp = cf.ip || request.headers.get("x-real-ip") || "";   // fallback for local testing
    const httpProtocol = cf.httpProtocol || url.protocol.replace(":", "") || "";

    // 建立回傳的 JSON 物件
    const responseBody = {
      request: {
        params,
        query,
        cookies,
        cookiesRaw,
        body,
        bodyRaw,
        headers,
        // headersRaw
      },
      http: {
        method                     : request.method,
        baseUrl                    : `${url.protocol}//${url.host}`,
        originalUrl                : url.pathname + url.search,
        protocol                   : url.protocol.replace(":", ""),
        httpProtocol               : httpProtocol,
        hostMetadata               : cf.hostMetadata,
        requestPriority            : cf.requestPriority,
        tls: {
          tlsCipher                : cf.tlsCipher,
          tlsClientAuth            : cf.tlsClientAuth,
          tlsClientCiphersSha1     : cf.tlsClientCiphersSha1,
          tlsClientExtensionsSha1  : cf.tlsClientExtensionsSha1,
          tlsClientExtensionsSha1Le: cf.tlsClientExtensionsSha1Le,
          tlsClientHelloLength     : cf.tlsClientHelloLength,
          tlsClientRandom          : cf.tlsClientRandom,
          tlsVersion               : cf.tlsVersion,
        }
      },
      host: {
        ip: clientIp,
        // ips: [],                   // Cloudflare 只提供單一 IP，若有多個可自行填入
        hostname: url.hostname,

        // ── CF 資訊 ───────────────────────
        colo          : cf.colo,
        country       : cf.country,
        city          : cf.city,
        continent     : cf.continent,
        latitude      : cf.latitude,
        longitude     : cf.longitude,
        asn           : cf.asn,
        asOrganization: cf.asOrganization,
        isEUCountry   : cf.isEUCountry,
        postalCode    : cf.postalCode,
        metroCode     : cf.metroCode,
        region        : cf.region,
        regionCode    : cf.regionCode,
        timezone      : cf.timezone
      },
      botManagement: {
        score               : cf.botManagement?.score ?? null,
        verifiedBot         : cf.botManagement?.verifiedBot ?? null,
        staticResource      : cf.botManagement?.staticResource ?? null,
        ja3Hash             : cf.botManagement?.ja3Hash ?? null,
        ja4                 : cf.botManagement?.ja4 ?? null,
        jsDetectionPassed   : cf.botManagement?.jsDetection?.passed ?? null,
        detectionIds        : cf.botManagement?.detectionIds ?? null,
        verifiedBotCategory : cf.verifiedBotCategory ?? null
      },
      environment: {
        mode: isWorker
          ? "Cloudflare Workers"
          : isDocker
            ? "Docker"
            : "NodeJS"
      }
    };

    const curlText = generateCurl(responseBody);
    const wgetText = generateWget(responseBody);

    // -------------------------------------------------
    // 最後輸出
    // -------------------------------------------------
    const acceptHeader = request.headers.get("accept") || "";
    const wantsHTML = acceptHeader.includes("text/html");

    // 先設定要回傳的 Header（先寫好，之後會放入 responseBody）
    const responseHeaders = new Headers();
    responseHeaders.set(
      "content-type",
      wantsHTML ? "text/html;charset=UTF-8" : "application/json;charset=UTF-8"
    );

    if (wantsHTML) {
      const html = generateHtml({responseBody, curlText, wgetText});
      return new Response(html, {
        headers: responseHeaders
      });
    }

    // 回傳
    return new Response(JSON.stringify(responseBody, null, 2), {
      headers: responseHeaders
    });
  },
};
