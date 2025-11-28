import { createServer } from "node:http";
import { URL } from "node:url";

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
    const requestInit = {
      method: req.method,
      // Node 的 headers 是 plain object； Workers 需要 Headers 物件
      headers: new Headers(req.headers),
      // 將 body 轉成 ReadableStream（Node 直接提供的就是 stream）
      body: req.method === "GET" || req.method === "HEAD" ? undefined : req,
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
