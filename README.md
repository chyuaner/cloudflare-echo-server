Yuan 的 HTTP Echo Server
===
本專案是提供CDN Edge層級的http回音鸚鵡伺服器（也提供本機端獨立運作的方式）

就如字面上所說的，你對我發出的Request後，我的伺服器就會把我從你這邊接到的資訊：以什麼網址字串、帶了什麼Post Body、Request Header，一五一實的以ResponseBody方式回應給你。

同時也可以當作MyIP查詢使用，會顯示在「Host」區塊。

Demo <https://echo.yuaner.tw/assets/text/dict/textpar.html?ref=tablericons&utm_source=tablericons-mainsite&utm_medium=partner&utm_campaign=250k-more-icons&tab=all>

![screenshot](.readme/screenshot.png)

## 專案特色
* 主要針對Cloudflare Workers設計，**直接在CDN Edge層級提供完整服務**，理論上極致效能低延遲，不需在自有主機架設
    * 亦有提供傳統獨立啟動本後端程式的功能（`npm run start`），可掛上pm2或systemd，供內部或特殊情況使用。
* 預設以JSON格式作為Response Body輸出（主要由Header `accept`控制輸出格式），可用於Postman、Paw、Insomnia、Hoppscotch等HTTP API調試客戶端使用。
* **有設計精美的網頁UI界面**（當Header為 `accept: text/html` 就會以網頁顯示，一般瀏覽器預設會帶入），降低辨識判讀的負擔
    * 有特別為 **「URL Params」、「URL Query」區塊特別設計友善文字複製** 。界面乍看下是ul li項目清單，但圈選文字後，會直接複製成可直接貼上網址列的字串
    * 本網頁兼顧美觀與效能考量，未使用前端框架，100%原生CSS排版撰寫、無額外多餘複雜的JavaScript執行邏輯（Syntax Highlight用的除外）。
    * **網頁版不會產生額外Request載入其他資源！**（像是圖片、CSS、JS等等）
        * 所有外部資源如Icons與Syntax Highlight JS都已直接內嵌在單一這個Request。


## 部署方式
### 部署到Cloudflare Worker
待補

### 當作傳統後端程式獨立啟動
```
npm run start
```

---

## 📂 目錄結構

- **主要入口**: `src/index.js`（在 `wrangler.jsonc` 中指定）
- **HTML 產生器**: `src/generateHtml.js`
- **TypeScript 設定**: `tsconfig.json`
- **部署設定**: `wrangler.jsonc`

```
.
├─ src/
│   ├─ index.js          # Workers 主程式入口
│   └─ generateHtml.js   # 產生 HTML 的輔助函式
├─ tsconfig.json         # TypeScript 編譯選項（允許 .js、.json）
└─ wrangler.jsonc        # Wrangler 部署與環境設定
```

## 🛠️ 前置條件
- **Node.js** (v18 以上)
- **npm** 或 **yarn**
- **Wrangler CLI**（安裝方式：`npm i -g @cloudflare/wrangler`）

## 📦 安裝套件
```bash
npm install
```

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


## 📚 參考文件
- **Wrangler 設定**: <https://developers.cloudflare.com/workers/wrangler/configuration/>
- **Cloudflare Workers Runtime API**: <https://developers.cloudflare.com/workers/runtime-apis/>
- **TypeScript `tsconfig.json` 說明**: <https://aka.ms/tsconfig.json>


