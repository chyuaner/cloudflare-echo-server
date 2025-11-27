import { generateHtml } from "./generateHtml.js";   // ← 新增此行
import { generateCurl } from "./generateCurl.js";   // ← 新增此行
import { generateWget } from "./generateWget.js";   // ← 新增此行

export default {
  async fetch(request, env, ctx) {
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

    // 取得 client IP（Cloudflare 會在 cf 中提供）
    const cf = request.cf || {};
    const clientIp = cf.ip || request.headers.get("x-real-ip") || "";   // fallback for local testing

    // 建立回傳的 JSON 物件
    const responseBody = {
      http: {
        method: request.method,
        baseUrl: `${url.protocol}//${url.host}`,
        originalUrl: url.pathname + url.search,
        protocol: url.protocol.replace(":", "")
      },
      request: {
        params,
        query,
        cookies,               // Workers 預設不會自動解析 cookie，可自行擴充
        cookiesRaw,
        body,                  // 若需要解析 body，請額外加入 request.clone().json() 等
        bodyRaw,            // 原始文字
        headers,
        // headersRaw
      },
      host: {
        hostname: url.hostname,
        ip: clientIp,
        ips: [],                   // Cloudflare 只提供單一 IP，若有多個可自行填入

        // ── CF 資訊 ───────────────────────
        colo: cf.colo,
        country: cf.country,
        city: cf.city,
        continent: cf.continent,
        latitude: cf.latitude,
        longitude: cf.longitude,
        postalCode: cf.postalCode,
        metroCode: cf.metroCode,
        region: cf.region,
        regionCode: cf.regionCode,
        timezone: cf.timezone
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
