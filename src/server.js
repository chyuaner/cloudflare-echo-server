import { createServer } from "node:http";
import { URL } from "node:url";
import { promises as fs } from "node:fs";
import path from "node:path";

// 匯入我們在 Workers 中寫好的 handler
import worker from "./index.js";

// 取得埠號（預設 3000，可透過環境變數覆寫）
const PORT = process.env.PORT || 3000;

// ----------------------------------------------------
// 1. 建立 HTTP Server
// ----------------------------------------------------
const server = createServer(async (req, res) => {
  try {
    // ------------------------------------------------
    // 2. 把 Node 原生的 Request 轉成 Workers 可接受的 Request 物件
    // ------------------------------------------------
    const requestUrl = new URL(req.url, `http://${req.headers.host}`);
    // const pathname = requestUrl.pathname;

    // 因為已經沒有額外的靜態資源檔，此邏輯就不需要，先註解封存
    // // ------------------------------------------------
    // // ① 靜態檔案直接映射到根路徑（/public/* => /）
    // // ------------------------------------------------
    // // 只要檔案在 public 目錄中且 URL 沒有前綴 /public，直接從 public 讀取
    // // 例如: /index.html => public/index.html
    // //          /style.css  => public/style.css
    // // 若找不到檔案，fallback 到 Worker 處理
    // const safePath = path.normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, "");
    // const filePath = path.join(process.cwd(), "public", safePath);

    // try {
    //   const data = await fs.readFile(filePath);
    //   const ext = path.extname(filePath).toLowerCase();
    //   const mimeMap = {
    //     ".html": "text/html",
    //     ".htm": "text/html",
    //     ".js": "application/javascript",
    //     ".mjs": "application/javascript",
    //     ".css": "text/css",
    //     ".json": "application/json",
    //     ".png": "image/png",
    //     ".jpg": "image/jpeg",
    //     ".jpeg": "image/jpeg",
    //     ".gif": "image/gif",
    //     ".svg": "image/svg+xml",
    //     ".ico": "image/x-icon",
    //     ".txt": "text/plain"
    //   };
    //   const contentType = mimeMap[ext] || "application/octet-stream";

    //   res.writeHead(200, { "Content-Type": contentType });
    //   res.end(data);
    //   return; // 已回傳靜態檔案，結束處理
    // } catch (e) {
    //   // 若檔案不存在或讀取失敗，就交給 Worker 處理
    //   // （此時會拋出 404，讓下面的 Worker 程式自行決定回傳內容）
    // }

    // ------------------------------------------------
    // ② 其餘請求交給 Worker（保持原有 API 邏輯）
    // ------------------------------------------------
    const requestInit = {
      method: req.method,
      // Node 的 headers 是 plain object； Workers 需要 Headers 物件
      headers: new Headers(req.headers),
      // 將 body 轉成 ReadableStream（Node 直接提供的就是 stream）
      body: req.method === "GET" || req.method === "HEAD" ? undefined : req,
      // 當 body 存在時必須指定 duplex，才能在 Node 中使用 stream 作為 request body
      ...(req.method !== "GET" && req.method !== "HEAD" ? { duplex: "half" } : {}),
      // cf 物件在本機測試沒意義，給個空物件即可
      cf: {}
    };
    const workerRequest = new Request(requestUrl, requestInit);

    // ------------------------------------------------
    // 3. 呼叫 Worker handler（保持單一業務邏輯）
    // ------------------------------------------------
    const workerResponse = await worker.fetch(workerRequest, {}, {});

    // ------------------------------------------------
    // 4. 把 Worker Response 轉回 Node 回應
    // ------------------------------------------------
    // 設定狀態碼與標頭
    res.writeHead(workerResponse.status, Object.fromEntries(workerResponse.headers));

    // 取得回應內容（可能是文字、HTML、JSON、或二進位流）
    const arrayBuffer = await workerResponse.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (e) {
    // 只要出現未捕獲的例外，就回傳 500
    console.error(e);
    res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    res.end("Internal Server Error");
  }
});

// ----------------------------------------------------
// 5. 啟動 Server
// ----------------------------------------------------
server.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
