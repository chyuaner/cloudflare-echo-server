# README.md

## 🚀 專案概述
本專案是一個 **Cloudflare Workers** 的 Echo 伺服器，示範如何使用 **Wrangler** 部署。

- **主要入口**: `src/index.js`（在 `wrangler.jsonc` 中指定）
- **HTML 產生器**: `src/generateHtml.js`
- **TypeScript 設定**: `tsconfig.json`
- **部署設定**: `wrangler.jsonc`

---

## 📂 目錄結構
```
.
├─ src/
│   ├─ index.js          # Workers 主程式入口
│   └─ generateHtml.js   # 產生 HTML 的輔助函式
├─ tsconfig.json         # TypeScript 編譯選項（允許 .js、.json）
└─ wrangler.jsonc        # Wrangler 部署與環境設定
```

---

## 🛠️ 前置條件
- **Node.js** (v18 以上)
- **npm** 或 **yarn**
- **Wrangler CLI**（安裝方式：`npm i -g @cloudflare/wrangler`）

---

## 📦 安裝套件
```bash
npm install
```

---

## 🚀 部署到 Cloudflare Workers
1. **登入 Cloudflare**（如果尚未登入）
   ```bash
   npx wrangler login
   ```

2. **發布到預設環境**
   ```bash
   npx wrangler publish
   ```

   - `wrangler.jsonc` 中的 `name: "cloudflare-echo-server"` 會成為 Workers 的子域名或路由。
   - `compatibility_date` 設為 `2025-04-03`，確保使用最新的 Workers Runtime。

3. **若要使用 Smart Placement（可選）**
   - 移除 `wrangler.jsonc` 中 `// "placement": { "mode": "smart" },` 前的註解，然後再次發布。

---

## 📄 `generateHtml.js` 簡介
`src/generateHtml.js` 內的 `generateHtml(data)` 函式接受任意資料物件，回傳一段 HTML 文字，可直接在 Workers 回應中使用。

```javascript src/generateHtml.js
function generateHtml(data) {
  // 依需求產生 HTML，例如：
  // return `<html><body>${JSON.stringify(data)}</body></html>`;
  // 具體實作請自行補齊
}
```

> **提示**：若需要在 Workers 中回傳 HTML，請在 `src/index.js` 中這樣使用：

```javascript src/index.js
import { generateHtml } from './generateHtml.js';

export default {
  async fetch(request, env, ctx) {
    const data = { message: 'Hello from Cloudflare Workers!' };
    return new Response(generateHtml(data), {
      headers: { 'Content-Type': 'text/html' },
    });
  },
};
```

---

## 📚 參考文件
- **Wrangler 設定**: <https://developers.cloudflare.com/workers/wrangler/configuration/>
- **Cloudflare Workers Runtime API**: <https://developers.cloudflare.com/workers/runtime-apis/>
- **TypeScript `tsconfig.json` 說明**: <https://aka.ms/tsconfig.json>

---

## 📧 聯絡資訊
若有任何問題或建議，歡迎在 GitHub Issue 中提出，或直接聯繫專案維護者。

---

*Happy coding!* 🎉
