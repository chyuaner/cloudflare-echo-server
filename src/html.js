import { reorderObject } from "./core.js";
import { generateCurl } from "./snippets.js";

export const tabler_icons_html = {
    "info_circle": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>`,
    "info_square_rounded": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-info-square-rounded"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2l.642 .005l.616 .017l.299 .013l.579 .034l.553 .046c4.687 .455 6.65 2.333 7.166 6.906l.03 .29l.046 .553l.041 .727l.006 .15l.017 .617l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.455 4.687 -2.333 6.65 -6.906 7.166l-.29 .03l-.553 .046l-.727 .041l-.15 .006l-.617 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.687 -.455 -6.65 -2.333 -7.166 -6.906l-.03 -.29l-.046 -.553l-.041 -.727l-.006 -.15l-.017 -.617l-.004 -.318v-.648l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.455 -4.687 2.333 -6.65 6.906 -7.166l.29 -.03l.553 -.046l.727 -.041l.15 -.006l.617 -.017c.21 -.003 .424 -.005 .642 -.005zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /></svg>`,
    "variable_off": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-variable-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.675 4.68c-2.17 4.776 -2.062 9.592 .325 15.32" /><path d="M19 4c1.959 3.917 2.383 7.834 1.272 12.232m-.983 3.051c-.093 .238 -.189 .477 -.289 .717" /><path d="M11.696 11.696c.095 .257 .2 .533 .32 .831c.984 2.473 .984 3.473 1.984 3.473h1" /><path d="M8 16c1.5 0 3 -2 4 -3.5m2.022 -2.514c.629 -.582 1.304 -.986 1.978 -.986" /><path d="M3 3l18 18" /></svg>`,
    "link": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>`,
    "lock_password": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-lock-password"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" /><path d="M8 11v-4a4 4 0 1 1 8 0v4" /><path d="M15 16h.01" /><path d="M12.01 16h.01" /><path d="M9.02 16h.01" /></svg>`,
    "http_head": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-http-head"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 16v-8" /><path d="M7 8v8" /><path d="M3 12h4" /><path d="M14 8h-4v8h4" /><path d="M10 12h2.5" /><path d="M17 16v-6a2 2 0 1 1 4 0v6" /><path d="M17 13h4" /></svg>`,
    "file": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /></svg>`,
    "cookie": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cookie"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path stroke="none" d="M0 0h24v24H0z" /><path d="M8 13v.01" /><path d="M12 17v.01" /><path d="M12 12v.01" /><path d="M16 14v.01" /><path d="M11 8v.01" /><path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296q -.745 1.18 -1.024 1.852q -.283 .684 -.66 2.216a3 3 0 0 1 -1.624 1.623q -1.572 .394 -2.216 .661q -.712 .295 -1.852 1.024a3 3 0 0 1 -2.296 0q -1.203 -.754 -1.852 -1.024q -.707 -.292 -2.216 -.66a3 3 0 0 1 -1.623 -1.624q -.397 -1.577 -.661 -2.216q -.298 -.718 -1.024 -1.852a3 3 0 0 1 0 -2.296q .719 -1.116 1.024 -1.852q .257 -.62 .66 -2.216a3 3 0 0 1 1.624 -1.623q 1.547 -.384 2.216 -.661q .687 -.285 1.852 -1.024a3 3 0 0 1 2.296 0" /></svg>`,
    "device_desktop": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-desktop"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10" /><path d="M7 20h10" /><path d="M9 16v4" /><path d="M15 16v4" /></svg>`,
    "device_mobile": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14" /><path d="M11 4h2" /><path d="M12 17v.01" /></svg>`,
    "device_tablet": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-tablet"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16" /><path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /></svg>`,
    "cloud_network": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cloud-network"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 20h7" /><path d="M14 20h7" /><path d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12 16v2" /><path d="M8 16.004h-1.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-2.535" /></svg>`,
    "terminal": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-terminal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 7l5 5l-5 5" /><path d="M12 19l7 0" /></svg>`,
    "code": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>`,
    "file_code": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" /><path d="M10 13l-1 2l1 2" /><path d="M14 13l1 2l-1 2" /></svg>`,
    "send": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>`,
    "upload": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 9l5 -5l5 5" /><path d="M12 4l0 12" /></svg>`,
}

function generateHtml(data) {
    function copyAText(text, tooltipText="複製這段文字") {
        const escapedText = String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        return `<a href="#" hidden class="js-only" onclick="copy(${JSON.stringify(text).replace(/"/g, '&quot;')}, this); return false;" data-tooltip aria-haspopup="true" data-tooltip-title="${tooltipText}">${escapedText}</a><span class="noscript-only">${escapedText}</span>`;
    }

    function infoTooltip(tooltipText) {
        return `<small><a href="javascript:sfalse;" data-tooltip aria-haspopup="true" data-tooltip-title="${tooltipText}">🛈</a></small>`;
    }

    function objectToTable(data) {
        if (Object.keys(data).length === 0) {
            return none();
        }

        return `
            <div class="table-container">
            <table>
            <thead>
                <th>Key</th>
                <th>Value</th>
            </thead>
            <tbody>
            ${Object.keys(data).map(key => `
                <tr>
                <th>${copyAText(key, "複製標題文字")}</th>
                <td>${copyAText(data[key], "複製這個值")}</td>
                </tr>
            `).join('')}
            </tbody>
            </table>
            </div>
        `;
    }

    function renderObjectAsList(obj) {
        if (!obj || typeof obj !== 'object') return '';
        // 只保留有值的屬性 (保留空字串以輸出原始資料)
        const entries = Object.entries(obj).filter(([, v]) => v !== null && v !== undefined);
        if (entries.length === 0) return '';

        // 產生 <li>，若值仍是物件則遞迴呼叫自身，否則直接顯示文字
        const items = entries.map(([k, v]) => {
            if (typeof v === 'object' && v !== null) {
                return `<li>${copyAText(k, "複製標題文字")}: ${renderObjectAsList(v)}</li>`;
            }
            return `<li>${copyAText(k, "複製標題文字")}: ${copyAText(v, "複製這個值")}</li>`;
        });

        // 包成 <ul>（外層已在呼叫處包覆，這裡只回傳內部的 <li> 組合）
        return `<ul>${items.join('')}</ul>`;
    }

    function objectToText(obj) {
        // 只保留有值的屬性
        const entries = Object.entries(obj).filter(([, v]) => v !== null && v !== undefined);
        if (entries.length === 0) return '';

        const items = entries.map(([k, v]) => {
            const keyHtml = k;
            if (typeof v === 'object' && v !== null) {
            // 子物件 → 再包一層 <ul>
            return `${keyHtml}: ${objectToText(v)}`;
            }
            const valHtml = v;
            return `${keyHtml}：${valHtml}`;
        });

        return `${items.join('｜')}`;
    }

    function css() {
        const baseCss = `
            /* ------------------------------------------------
            // 顏色相關
            // ------------------------------------------------ */
            body { background: #fafafa; }
            a { color: black;}
            .card-border{background: #fff;border-color: #ddd;}
            pre{background: #fff;border-color: #ddd;}
            a {text-decoration: none;}
            a:hover {text-decoration: underline;}
            .table-container {
                background: light-dark( #fff, #000);
                border-color: color-mix(in oklch, canvas, canvasText 15%);
            }
            #url-table .table-container {
                border-color: color-mix(in oklch, canvas, canvasText 15%) !important;
            }

            table {
                background: #0000;
                color: color-mix(in hsl, canvasText, #0000 30%);
            }
            thead { background: light-dark(hsl(0 0% 95%), canvas); }
            tr {
                &:not(:last-of-type) {border-bottom-color:light-dark(hsl(0 0% 80%), canvas);}
                border-color:color-mix(in oklch, canvas, canvasText 15%)
            }
            th {
                background: light-dark(hsl(0 0% 95%), canvas);
                color: color-mix(in hsl, canvasText, #0000 5%);
            }
            tbody tr:hover {
                background: light-dark(hsl(0 0% 90%), canvas);;
            }
            .urltext .li:hover {
                background: gainsboro;
            }
            h1 {color: #f6821f;}
            h4,h5 { color: light-dark(#1f2937, #f9fafb); }

            .endpoint-bar {
                background: #dbeafe;
                border-color: #bfdbfe;
            }
            .endpoint-bar.GET     { background: rgba(97, 175, 254, 0.1); border-color: #61affe; }
            .endpoint-bar.POST    { background: rgba(73, 204, 144, 0.1); border-color: #49cc90; }
            .endpoint-bar.PUT     { background: rgba(252, 161, 48, 0.1); border-color: #fca130; }
            .endpoint-bar.DELETE  { background: rgba(249, 62, 62, 0.1);  border-color: #f93e3e; }
            .endpoint-bar.PATCH   { background: rgba(80, 227, 194, 0.1); border-color: #50e3c2; }
            .endpoint-bar.HEAD    { background: rgba(144, 18, 254, 0.1); border-color: #9012fe; }
            .endpoint-bar.OPTIONS { background: rgba(13, 90, 167, 0.1);  border-color: #0d5aa7; }

            .method-badge.GET     { background: #61affe; }
            .method-badge.POST    { background: #49cc90; }
            .method-badge.PUT     { background: #fca130; }
            .method-badge.DELETE  { background: #f93e3e; }
            .method-badge.PATCH   { background: #50e3c2; }
            .method-badge.HEAD    { background: #9012fe; }
            .method-badge.OPTIONS { background: #0d5aa7; }
            .url-path {
                color: #1e293b;
            }
            hr { border: 0.5px solid light-dark(hsl(0 0% 80%), canvas); }
            #footer { border-top: 1px solid light-dark(hsl(0 0% 80%), canvas); }
            pre {
                background: #2d2d2d;
            }

        @media (prefers-color-scheme: dark) {
            body { background: #303341; color: white;}
            a { color: white;}
            .card-border{background: #282a36;border-color: oklch(43.9% 0 0);}
            pre{background: #14151bff;border-color: #ddd;}
            .table-container {
                background: #282a36;
                border-color:color-mix(in oklch, canvas, canvasText 15%)
            }
            table {
                color: white;
            }
            thead { background: light-dark(hsl(245.2, 17.6%, 25.7%), canvas); }
            tr {
                &:not(:last-of-type) {border-bottom-color:light-dark(hsl(0 0% 80%), canvas);}
            }
            th {
                background: light-dark(hsl(245.2, 17.6%, 25.7%), canvas);
                color: white;
            }
            tbody tr:hover {
                background: light-dark(hsl(0 0% 10%), canvas);
            }
            .urltext .li:hover {
                background: light-dark(hsl(0 0% 10%), canvas);
            }

            .endpoint-bar {
                background: #2b2f36;
                border-color: #444;
            }
            .endpoint-bar.GET     { background: rgba(97, 175, 254, 0.1); border-color: #61affe; }
            .endpoint-bar.POST    { background: rgba(73, 204, 144, 0.1); border-color: #49cc90; }
            .endpoint-bar.PUT     { background: rgba(252, 161, 48, 0.1); border-color: #fca130; }
            .endpoint-bar.DELETE  { background: rgba(249, 62, 62, 0.1);  border-color: #f93e3e; }
            .endpoint-bar.PATCH   { background: rgba(80, 227, 194, 0.1); border-color: #50e3c2; }
            .endpoint-bar.HEAD    { background: rgba(144, 18, 254, 0.1); border-color: #9012fe; }
            .endpoint-bar.OPTIONS { background: rgba(13, 90, 167, 0.1);  border-color: #0d5aa7; }
            .url-path {
                color: #d1d5db;                     /* 暗色背景下的文字顏色，較亮以確保可讀性 */
            }
            #footer .d { fill: #ddd; }
            #footer #path22 { fill: #ddd !important; }
            #footer #path12 { stroke: #ddd !important; }
        }
/* ------------------------------------------------
            // PrismJS Line Numbers & Wrapping
            // ------------------------------------------------ */
            .js pre.line-numbers {
                position: relative !important;
                padding-left: 3.8em !important;
                counter-reset: linenumber;
            }
            .js pre.line-numbers > code {
                white-space: pre-wrap !important;       /* Force wrap */
                word-break: break-all !important;       /* Break anywhere */
            }
            .line-numbers .line-numbers-rows {
                position: absolute;
                pointer-events: none;
                top: 0;
                font-size: 100%;
                left: 0 !important;
                width: 3em !important; /* works for line-numbers cells - Displayed line numbers width */
                letter-spacing: -1px;
                border-right: 1px solid #999;

                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;

                padding: 1em 0; /* Match pre padding */
                /* Adjust top to match pre padding if necessary, but pre has padding:1em by default */
                top: 0;
            }
            .line-numbers-rows > span {
                display: block;
                counter-increment: linenumber;
            }
            .line-numbers-rows > span:before {
                content: counter(linenumber);
                color: #999;
                display: block;
                padding-right: 0.8em;
                text-align: right;
            }



            /* ------------------------------------------------
            // 排版相關
            // ------------------------------------------------ */
            /* 1️⃣ 設定父容器為 Grid */
            body{padding:0.5rem; color-scheme: light dark;}
            ul {padding-left:1em;}
            li {padding: 0.5em 0;}
            .icon {
                position: relative;
                top: 0.2em;
            }
            .container {
                display: grid;                     /* 啟用 Grid */
                grid-template-columns: repeat(12, 1fr);   /* 12 等分的欄 */
                gap: 0.5rem;                         /* 欄位之間的間距 */
            }
            .card{margin:0.5rem 0;padding:1rem;word-break: break-all;}
            .card-border{border-width:1px;border-style:solid;}
            @keyframes widget-title-icon-animation {
                0%   { transform: rotate(0deg); }
                15%  { transform: rotate(-15deg); }
                30%  { transform: rotate(15deg); }
                45%  { transform: rotate(-10deg); }
                60%  { transform: rotate(10deg); }
                75%  { transform: rotate(-5deg); }
                90%  { transform: rotate(5deg); }
                100% { transform: rotate(0deg); }
            }
            .card:hover h2 .icon, .card:hover h3 .icon {
                animation: widget-title-icon-animation 0.5s linear forwards;
            }
            td,li {word-break: break-all;}
            hr { margin-bottom: 1.5em;}

            /* 2️⃣ 子項目使用 span 來跨欄 */
            .col-1     { grid-column: span 12; }
            .col-2     { grid-column: span 12; }
            .col-3     { grid-column: span 12; }
            .col-lg-3  { grid-column: span 12; }
            .col-4     { grid-column: span 12; }
            .col-lg-4  { grid-column: span 12; }
            .col-5     { grid-column: span 12; }
            .col-6     { grid-column: span 12; }
            .col-8     { grid-column: span 12; }
            .col-lg-8  { grid-column: span 12; }
            .col-9     { grid-column: span 12; }
            .col-lg-9  { grid-column: span 12; }
            .col-12    { grid-column: span 12; }

            @media (min-width: 640px) {

                .col-1    { grid-column: span 1; }
                .col-2    { grid-column: span 2; }
                .col-3    { grid-column: span 3; }
                .col-lg-3 { grid-column: span 12; }
                .col-4    { grid-column: span 4; }
                .col-lg-4 { grid-column: span 12; }
                .col-5    { grid-column: span 5; }
                .col-6    { grid-column: span 6; }
                .col-8    { grid-column: span 8; }
                .col-lg-8 { grid-column: span 12; }
                .col-9    { grid-column: span 9; }
                .col-lg-9 { grid-column: span 12; }
                .col-12   { grid-column: span 12; }
            }
            @media (min-width: 1024px) {
                body{padding:2em;}
                ul {padding-left:2.5em;}
                .col-1    { grid-column: span 1; }
                .col-2    { grid-column: span 2; }
                .col-3    { grid-column: span 3; }
                .col-lg-3 { grid-column: span 3; }
                .col-4    { grid-column: span 4; }
                .col-lg-4 { grid-column: span 4; }
                .col-5    { grid-column: span 5; }
                .col-6    { grid-column: span 6; }
                .col-lg-8 { grid-column: span 8; }
                .col-8    { grid-column: span 8; }
                .col-9    { grid-column: span 9; }
                .col-lg-9 { grid-column: span 9; }
                .col-12   { grid-column: span 12; }
            }

            /* Tooltip */
            /* http://muki.tw/tech/pure-css-tooltip-data-tag/ */
            /* Tooltip */
            span[data-tooltip],
            a[data-tooltip] {
                position: relative;
                display: inline-block;
                max-width: 100%;
                word-break: break-all;
                vertical-align: baseline;
            }

            /* Tooltip base state */
            span[data-tooltip]:before,
            span[data-tooltip]:after,
            a[data-tooltip]:before,
            a[data-tooltip]:after {
                position: absolute;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.4s ease-out, visibility 0.4s ease-out;
                pointer-events: none;
                z-index: 100;
                left: 50%;
            }

            /* Show on hover OR active status */
            span[data-tooltip]:hover:before,
            span[data-tooltip]:hover:after,
            a[data-tooltip]:hover:before,
            a[data-tooltip]:hover:after,
            [data-tooltip].tooltip-active:before,
            [data-tooltip].tooltip-active:after {
                opacity: 1;
                visibility: visible;
            }

            /* Tooltip box - Positioned ABOVE */
            span[data-tooltip]:before,
            a[data-tooltip]:before {
                content: attr(data-tooltip-title);
                background: #4d4d4d;
                border-radius: 8px;
                color: #fff;
                width: max-content;
                max-width: 200px;
                padding: .5em .8em;
                bottom: calc(100% + 8px);
                transform: translateX(-50%);
                text-align: center;
                line-height: 1.2;
                font-size: 0.85rem;
                font-weight: normal;
                white-space: normal;
            }

            /* Tooltip arrow - Pointing DOWN */
            span[data-tooltip]:after,
            a[data-tooltip]:after {
                content: "";
                width: 0;
                height: 0;
                border-width: 8px 6px 0 6px;
                border-style: solid;
                border-color: #4d4d4d transparent transparent transparent;
                bottom: 100%;
                margin-left: -6px;
                margin-bottom: 1px;
            }

            /* ------------------------------------------------
            // 表單相關
            // ------------------------------------------------ */
            fieldset {
                border: 1px solid light-dark(#ddd, #444);
                border-radius: 8px;
                padding: 1rem;
                margin-bottom: 1rem;
            }
            legend {
                font-weight: 600;
                padding: 0 0.5rem;
                color: light-dark(#666, #aaa);
            }
            label {
                display: block;
                margin-bottom: 0.25rem;
                font-size: 0.9rem;
                font-weight: 500;
                color: light-dark(#4b5563, #d1d5db);
            }
            input[type="text"],
            input[type="email"],
            input[type="password"],
            input[type="tel"],
            input[type="url"],
            input[type="search"],
            input[type="number"],
            input[type="date"],
            input[type="datetime-local"],
            input[type="month"],
            input[type="week"],
            input[type="time"],
            select,
            textarea {
                width: 100%;
                padding: 0.5rem 0.75rem;
                border: 1px solid light-dark(#ccc, #4b5563);
                border-radius: 6px;
                background: light-dark(#fff, #1e2128);
                color: light-dark(#111, #eee);
                transition: border-color 0.2s, box-shadow 0.2s;
                font-family: inherit;
                font-size: 1rem;
                box-sizing: border-box;
            }
            input[type="color"] {
                height: 2.5rem;
                padding: 0.2rem;
            }
            input[type="range"] {
                width: 100%;
                margin: 0.5rem 0;
            }
            input:focus, select:focus, textarea:focus {
                outline: none;
                border-color: #f6821f;
                box-shadow: 0 0 0 3px rgba(246, 130, 31, 0.2);
            }
            .pure-button {
                display: inline-block;
                padding: 0.5rem 1rem;
                font-weight: 600;
                border-radius: 6px;
                border: none;
                cursor: pointer;
                transition: all 0.2s;
                background: light-dark(#e5e7eb, #374151);
                color: light-dark(#374151, #e5e7eb);
                text-decoration: none;
                line-height: normal;
                white-space: nowrap;
                vertical-align: middle;
                text-align: center;
            }
            .pure-button:hover {
                background: light-dark(#d1d5db, #4b5563);
                text-decoration: none;
            }
            .pure-button-primary {
                background: #f6821f;
                color: white;
            }
            .pure-button-primary:hover {
                background: #e67610;
            }
            input[type="radio"], input[type="checkbox"] {
                width: auto;
                margin-right: 0.5rem;
                accent-color: #f6821f;
                vertical-align: middle;
            }
            .pure-group input, .pure-group textarea {
                border-radius: 0;
                margin-top: -1px;
            }
            .pure-group input:first-child {
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
                margin-top: 0;
            }
            .pure-group input:last-child, .pure-group textarea:last-child {
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 6px;
            }

            /* ------------------------------------------------
            // Upload UI
            // ------------------------------------------------ */
            .drop-zone {
                border: 2px dashed light-dark(#ccc, #4b5563);
                border-radius: 8px;
                padding: 1.5rem;
                text-align: center;
                cursor: pointer;
                transition: all 0.2s;
                background: light-dark(#f9fafb, #2b2f36);
                color: light-dark(#6b7280, #9ca3af);
            }
            .drop-zone:hover, .drop-zone.dragover {
                border-color: #f6821f;
                background: light-dark(#fff7ed, #3f3532);
                color: #f6821f;
            }
            .drop-zone .icon {
                width: 32px;
                height: 32px;
                margin-bottom: 0.5rem;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
            .drop-zone p {
                margin: 0.5rem 0;
                font-size: 0.9rem;
            }
            .file-list {
                margin-top: 1rem;
                list-style: none;
                padding: 0;
                max-height: 200px;
                overflow-y: auto;
            }
            .file-item {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem;
                border-bottom: 1px solid light-dark(#eee, #374151);
                font-size: 0.85rem;
            }
            .file-item:last-child {
                border-bottom: none;
            }
            .file-info {
                flex: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .file-name {
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .file-size {
                color: #999;
                font-size: 0.75rem;
                flex-shrink: 0;
                margin-left: 0.5rem;
            }
            /* ------------------------------------------------
            // noscript Fallback & Logic
            // ------------------------------------------------ */
            #file_upload {
                display: block;
                margin-bottom: 0.5rem;
                width: 100%;
            }
            .js-only {
                display: none !important;
            }

            .js .js-only {
                display: block !important;
            }
            .js a.js-only, .js span.js-only {
                display: inline-block !important;
            }
            .noscript-only {
                display: inline-block !important;
                max-width: 100%;
                word-break: break-all;
                vertical-align: baseline;
            }
            .js .noscript-only {
                display: none !important;
            }
            .js #file_upload {
                display: none !important;
            }

            .upload-actions {
                display: block;
                gap: 0.5rem;
                margin-top: 0.5rem;
            }
            .js .upload-actions {
                display: flex;
            }
            .upload-actions > * {
                flex: 1;
            }
            .pure-input-1 { width: 100%; }
            .pure-input-1-2 { width: 50%; }
            .pure-input-1-3 { width: 33.3333%; }
            .pure-input-2-3 { width: 66.6666%; }
            .pure-input-1-4 { width: 25%; }
            .pure-input-3-4 { width: 75%; }

            #main {margin-top: 1rem;}

            .hide{display:none;}
            body{font-family:system-ui,sans-serif;}
            pre{padding:1em;border-width:1px;border-style:solid;overflow:auto;}
            h2,h3,h4,h5 {margin-top:0;}
            h4,h5 {margin-bottom: 1em;}
            small {
                font-size: 0.6em;
            }
            .none {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1em 0;
                color: gray;
            }

            .table-container {
                overflow: auto;
                border-radius: 6px;

            }
            #url-table .table-container { border: 1px solid; }
            table {
                width: 100%;
                border-collapse: collapse;
            }

            tr {
                transition-property: filter, background, opacity;
                transition-duration: 0.2s;
                transition-timing-function: ease-out;

                &:not(:last-of-type) {
                    border-bottom-width:1px;border-bottom-style:solid;
                }

                display: block;
                margin: 1rem 0;
                border-width:1px;border-style:solid;
                border-radius: 6px;

            }
            #url-table tr {
                display: table-row;
            }
            th {
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
            }
            @media (min-width: 640px) {
                .table-container {
                    border-width:1px;border-style:solid;
                }
                tr { display: table-row; border-width:0;}
                th {background: none;}
            }
            td {
                font-weight: 300;
            }

            thead {display:none;}
            th,td {
                padding: 0.5rem;
                display: block;
            }
            @media (min-width: 640px) {
                thead {display:table-header-group;}
                th,td {
                    display: table-cell;
                }
                th {
                    width: 20%;
                    min-width: 100px;
                }
                td {
                    width: 80%;
                }
            }

            table th {
                text-align: left;
                font-weight: 500;
            }

            form ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            form li {
                padding: 0.25rem 0;
            }



            /* urltext網址結構項目化 */
            .urltext {margin-left:1em;margin-bottom:-1em;}
            .urltext .li {
                display: inline-block;
                vertical-align: middle;
                padding-left: 0.5em;
                border-radius: 5px;
                transition-property: filter, background, opacity;
                transition-duration: 0.2s;
                transition-timing-function: ease-out;
            }
            .urltext .firstchar{padding-left:1em;}
            .urltext .firstchar,.urltext .split, .urltext .kvsplit{
                opacity: 0;
            }
            .urltext .li {
            display: list-item;
            margin-left: 1em;
            position: relative;
            top: -2em;
            line-height: 2em;
            }
            .urltext .key{
            font-weight: bold;
            }
            .urltext .key::after {
            content: ": ";
            position: absolute;
            }

            /* Endpoint Bar Styles */
            .endpoint-bar {
                border-width:2px;border-style:solid;
                border-radius: 0.5rem;
                padding: 1rem;
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 1rem;
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            }
            .method-badge {
                color: white;
                padding: 0.25rem 0.75rem;
                border-radius: 0.375rem;
                font-weight: 700;
                font-size: 0.875rem;
                text-transform: uppercase;
                line-height: 1;
            }
            .url-path {
                font-weight: 600;
                font-size: 1rem;
                word-break: break-all;
            }

            #footer {
                margin-top: 2.5rem;
            }
            #footer li {padding: 0;}
            #footer .container div {
                align-self: end;
            }
            #footer .logo svg {
                height: 3.5rem;
                width: 100%;
            }
            @media (min-width: 640px) {
                #footer div.right {
                    text-align: right;
                }
            }
            `;

        const prismJsContent = `/* PrismJS 1.30.0
https://prismjs.com/download#themes=prism-tomorrow&languages=bash+json */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var n=/(?:^|\\s)lang(?:uage)?-([\\w-]+)(?=\\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var l in r={},t[i]=r,n)n.hasOwnProperty(l)&&(r[l]=e(n[l],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if(document.currentScript&&"SCRIPT"===document.currentScript.tagName)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\\r\\n]*\\((.*):[^:]+:[^:]+\\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=i[o])}var u=r[e];return r[e]=l,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=l)})),l},DFS:function e(n,t,r,i){i=i||{};var l=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||i[l(s)]?"Array"!==u||i[l(s)]||(i[l(s)]=!0,e(s,t,o,i)):(i[l(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,l=0;i=r.elements[l++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),l=a.languages[i];a.util.setLanguage(n,i);var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&a.util.setLanguage(o,i);var s={element:n,language:i,grammar:l,code:n.textContent};function u(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(o=s.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(a.highlight(s.code,s.grammar,s.language));else u(a.util.encode(s.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new s;return u(a,a.head,e),o(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function l(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,n,t,r,s,g){for(var f in t)if(t.hasOwnProperty(f)&&t[f]){var h=t[f];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(g&&g.cause==f+","+d)return;var v=h[d],p=v.inside,m=!!v.lookbehind,y=!!v.greedy,k=v.alias;if(y&&!v.pattern.global){var x=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,x+"g")}for(var b=v.pattern||v,w=r.next,A=s;w!==n.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var P=w.value;if(n.length>e.length)return;if(!(P instanceof i)){var E,S=1;if(y){if(!(E=l(b,A,e,m))||E.index>=e.length)break;var L=E.index,O=E.index+E[0].length,C=A;for(C+=w.value.length;L>=C;)C+=(w=w.next).value.length;if(A=C-=w.value.length,w.value instanceof i)continue;for(var j=w;j!==n.tail&&(C<O||"string"==typeof j.value);j=j.next)S++,C+=j.value.length;S--,P=e.slice(A,C),E.index-=A}else if(!(E=l(b,0,P,m)))continue;L=E.index;var N=E[0],_=P.slice(0,L),M=P.slice(L+N.length),W=A+P.length;g&&W>g.reach&&(g.reach=W);var I=w.prev;if(_&&(I=u(n,I,_),A+=_.length),c(n,I,S),w=u(n,I,new i(f,p?a.tokenize(N,p):N,k,N)),M&&u(n,w,M),S>1){var T={cause:f+","+d,reach:W};o(e,n,t,w.prev,A,T),g&&T.reach>g.reach&&(g.reach=T.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),a.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,l=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),l&&e.close()}),!1),a):a;var g=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&g&&g.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
!function(e){var t="\\\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\\\b",a={pattern:/(^(["']?)\\w+\\2)[ \\t]+\\S.*/,lookbehind:!0,alias:"punctuation",inside:null},n={bash:a,environment:{pattern:RegExp("\\\\$"+t),alias:"constant"},variable:[{pattern:/\\$?\\(\\([\\s\\S]+?\\)\\)/,greedy:!0,inside:{variable:[{pattern:/(^\\$\\(\\([\\s\\S]+)\\)\\)/,lookbehind:!0},/^\\$\\(\\(/],number:/\\b0x[\\dA-Fa-f]+\\b|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:[Ee]-?\\d+)?/,operator:/--|\\+\\+|\\*\\*=?|<<=?|>>=?|&&|\\|\\||[=!+\\-*/%<>^&|]=?|[?~:]/,punctuation:/\\(\\(?|\\)\\)?|,|;/}},{pattern:/\\$\\((?:\\([^)]+\\)|[^()])+\\)|\`[^\`]+\`/,greedy:!0,inside:{variable:/^\\$\\(|^\`|\\)$|\`$/}},{pattern:/\\$\\{[^}]+\\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\\/]|##?|%%?|\\^\\^?|,,?/,punctuation:/[\\[\\]]/,environment:{pattern:RegExp("(\\\\{)"+t),lookbehind:!0,alias:"constant"}}},/\\$(?:\\w+|[#?*!@$])/],entity:/\\\\(?:[abceEfnrtv\\\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\\s*\\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\\bfunction\\s+)[\\w-]+(?=(?:\\s*\\(?:\\s*\\))?\\s*\\{)/,lookbehind:!0,alias:"function"},{pattern:/\\b[\\w-]+(?=\\s*\\(\\s*\\)\\s*\\{)/,alias:"function"}],"for-or-select":{pattern:/(\\b(?:for|select)\\s+)\\w+(?=\\s+in\\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\\s;|&]|[<>]\\()\\w+(?:\\.\\w+)*(?=\\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\\\s;|&]|[<>]\\\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\\s)-{1,2}(?:\\w+:[+-]?)?\\w+(?:\\.\\w+)*(?=[=\\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\\s*)(\\w+)\\s[\\s\\S]*?(?:\\r?\\n|\\r)\\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\\s*)(["'])(\\w+)\\2\\s[\\s\\S]*?(?:\\r?\\n|\\r)\\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\\\](?:\\\\\\\\)*)"(?:\\\\[\\s\\S]|\\$\\([^)]+\\)|\\$(?!\\()|\`[^\`]+\`|[^"\\\\\`$])*"/,lookbehind:!0,greedy:!0,inside:n},{pattern:/(^|[^$\\\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\\$'(?:[^'\\\\]|\\\\[\\s\\S])*'/,greedy:!0,inside:{entity:n.entity}}],environment:{pattern:RegExp("\\\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\\s;|&]|[<>]\\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\\s;|&]|[<>]\\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\\s;|&]|[<>]\\()(?:\\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\\s;|&]|[<>]\\()(?:false|true)(?=$|[)\\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\\B&\\d\\b/,alias:"important"},operator:{pattern:/\\d?<>|>\\||\\+=|=[=~]?|!=?|<<[<-]?|[&\\d]?>>|\\d[<>]&?|[<>][&=]?|&[>&]?|\\|[&|]?/,inside:{"file-descriptor":{pattern:/^\\d/,alias:"important"}}},punctuation:/\\$?\\(\\(?|\\)\\)?|\\.\\.|[{}[\\];\\\\]/,number:{pattern:/(^|\\s)(?:[1-9]\\d*|0)(?:[.,]\\d+)?\\b/,lookbehind:!0}},a.inside=e.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],o=n.variable[1].inside,i=0;i<s.length;i++)o[s[i]]=e.languages.bash[s[i]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash}(Prism);
Prism.languages.json={property:{pattern:/(^|[^\\\\])"(?:\\\\.|[^\\\\"\\r\\n])*"(?=\\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\\\])"(?:\\\\.|[^\\\\"\\r\\n])*"(?!\\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\\/\\/.*|\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,greedy:!0},number:/-?\\b\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?\\b/i,punctuation:/[{}[\\],]/,operator:/:/,boolean:/\\b(?:false|true)\\b/,null:{pattern:/\\bnull\\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json;
`;

        // Append Line Numbers Plugin (Minified-ish)
        const prismLineNumbersPlugin = `
        (function() {
            if (typeof Prism === 'undefined' || typeof document === 'undefined') return;

            Prism.hooks.add('complete', function(env) {
                if (!env.code) return;
                var code = env.element;
                var pre = code.parentNode;

                if (!pre || !/pre/i.test(pre.nodeName)) return;
                if (code.querySelector('.line-numbers-rows')) code.querySelector('.line-numbers-rows').remove();
                if (!Prism.util.isActive(code, 'line-numbers')) return;

                code.classList.remove('line-numbers');
                pre.classList.add('line-numbers');

                // Ensure code white-space is pre-wrap via inline style if CSS failed (double safety)
                code.style.whiteSpace = 'pre-wrap';
                code.style.wordBreak = 'break-all';

                var match = env.code.match(/\\n(?!$)/g);
                var linesNum = match ? match.length + 1 : 1;
                var lineNumbersWrapper = document.createElement('span');
                lineNumbersWrapper.setAttribute('aria-hidden', 'true');
                lineNumbersWrapper.className = 'line-numbers-rows';

                // Create strict empty spans for line numbers
                var spans = '';
                for (var i = 0; i < linesNum; i++) {
                    spans += '<span></span>';
                }
                lineNumbersWrapper.innerHTML = spans;

                if (pre.hasAttribute('data-start')) {
                    pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1);
                }

                env.element.appendChild(lineNumbersWrapper);
            });
        })();
        `;

        const combinedPrismJs = prismJsContent + prismLineNumbersPlugin;
        const prismCssContent = `/* PrismJS 1.30.0
https://prismjs.com/download#themes=prism-tomorrow&languages=bash+json */
code[class*=language-],pre[class*=language-]{color:#ccc;background:0 0;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999}.token.punctuation{color:#ccc}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.function,.token.number{color:#f08d49}.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699}.token.entity,.token.operator,.token.url{color:#67cdcc}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}
`;

        const purecssContent = `/*!
Pure v3.0.0
Copyright 2013 Yahoo!
Licensed under the BSD License.
https://github.com/pure-css/pure/blob/master/LICENSE
*/
.pure-button{display:inline-block;line-height:normal;white-space:nowrap;vertical-align:middle;text-align:center;cursor:pointer;-webkit-user-drag:none;-webkit-user-select:none;user-select:none;box-sizing:border-box}.pure-button::-moz-focus-inner{padding:0;border:0}.pure-button-group{letter-spacing:-.31em;text-rendering:optimizespeed}.opera-only :-o-prefocus,.pure-button-group{word-spacing:-0.43em}.pure-button-group .pure-button{letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-button{font-family:inherit;font-size:100%;padding:.5em 1em;color:rgba(0,0,0,.8);border:none transparent;background-color:#e6e6e6;text-decoration:none;border-radius:2px}.pure-button-hover,.pure-button:focus,.pure-button:hover{background-image:linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1))}.pure-button:focus{outline:0}.pure-button-active,.pure-button:active{box-shadow:0 0 0 1px rgba(0,0,0,.15) inset,0 0 6px rgba(0,0,0,.2) inset;border-color:#000}.pure-button-disabled,.pure-button-disabled:active,.pure-button-disabled:focus,.pure-button-disabled:hover,.pure-button[disabled]{border:none;background-image:none;opacity:.4;cursor:not-allowed;box-shadow:none;pointer-events:none}.pure-button-hidden{display:none}.pure-button-primary,.pure-button-selected,a.pure-button-primary,a.pure-button-selected{background-color:#0078e7;color:#fff}.pure-button-group .pure-button{margin:0;border-radius:0;border-right:1px solid rgba(0,0,0,.2)}.pure-button-group .pure-button:first-child{border-top-left-radius:2px;border-bottom-left-radius:2px}.pure-button-group .pure-button:last-child{border-top-right-radius:2px;border-bottom-right-radius:2px;border-right:none}

/*!
Pure v3.0.0
Copyright 2013 Yahoo!
Licensed under the BSD License.
https://github.com/pure-css/pure/blob/master/LICENSE
*/
.pure-form input[type=color],.pure-form input[type=date],.pure-form input[type=datetime-local],.pure-form input[type=datetime],.pure-form input[type=email],.pure-form input[type=month],.pure-form input[type=number],.pure-form input[type=password],.pure-form input[type=search],.pure-form input[type=tel],.pure-form input[type=text],.pure-form input[type=time],.pure-form input[type=url],.pure-form input[type=week],.pure-form select,.pure-form textarea{padding:.5em .6em;display:inline-block;border:1px solid #ccc;box-shadow:inset 0 1px 3px #ddd;border-radius:4px;vertical-align:middle;box-sizing:border-box}.pure-form input:not([type]){padding:.5em .6em;display:inline-block;border:1px solid #ccc;box-shadow:inset 0 1px 3px #ddd;border-radius:4px;box-sizing:border-box}.pure-form input[type=color]{padding:.2em .5em}.pure-form input[type=color]:focus,.pure-form input[type=date]:focus,.pure-form input[type=datetime-local]:focus,.pure-form input[type=datetime]:focus,.pure-form input[type=email]:focus,.pure-form input[type=month]:focus,.pure-form input[type=number]:focus,.pure-form input[type=password]:focus,.pure-form input[type=search]:focus,.pure-form input[type=tel]:focus,.pure-form input[type=text]:focus,.pure-form input[type=time]:focus,.pure-form input[type=url]:focus,.pure-form input[type=week]:focus,.pure-form select:focus,.pure-form textarea:focus{outline:0;border-color:#129fea}.pure-form input:not([type]):focus{outline:0;border-color:#129fea}.pure-form input[type=checkbox]:focus,.pure-form input[type=file]:focus,.pure-form input[type=radio]:focus{outline:thin solid #129FEA;outline:1px auto #129FEA}.pure-form .pure-checkbox,.pure-form .pure-radio{margin:.5em 0;display:block}.pure-form input[type=color][disabled],.pure-form input[type=date][disabled],.pure-form input[type=datetime-local][disabled],.pure-form input[type=datetime][disabled],.pure-form input[type=email][disabled],.pure-form input[type=month][disabled],.pure-form input[type=number][disabled],.pure-form input[type=password][disabled],.pure-form input[type=search][disabled],.pure-form input[type=tel][disabled],.pure-form input[type=text][disabled],.pure-form input[type=time][disabled],.pure-form input[type=url][disabled],.pure-form input[type=week][disabled],.pure-form select[disabled],.pure-form textarea[disabled]{cursor:not-allowed;background-color:#eaeded;color:#cad2d3}.pure-form input:not([type])[disabled]{cursor:not-allowed;background-color:#eaeded;color:#cad2d3}.pure-form input[readonly],.pure-form select[readonly],.pure-form textarea[readonly]{background-color:#eee;color:#777;border-color:#ccc}.pure-form input:focus:invalid,.pure-form select:focus:invalid,.pure-form textarea:focus:invalid{color:#b94a48;border-color:#e9322d}.pure-form input[type=checkbox]:focus:invalid:focus,.pure-form input[type=file]:focus:invalid:focus,.pure-form input[type=radio]:focus:invalid:focus{outline-color:#e9322d}.pure-form select{height:2.25em;border:1px solid #ccc;background-color:#fff}.pure-form select[multiple]{height:auto}.pure-form label{margin:.5em 0 .2em}.pure-form fieldset{margin:0;padding:.35em 0 .75em;border:0}.pure-form legend{display:block;width:100%;padding:.3em 0;margin-bottom:.3em;color:#333;border-bottom:1px solid #e5e5e5}.pure-form-stacked input[type=color],.pure-form-stacked input[type=date],.pure-form-stacked input[type=datetime-local],.pure-form-stacked input[type=datetime],.pure-form-stacked input[type=email],.pure-form-stacked input[type=file],.pure-form-stacked input[type=month],.pure-form-stacked input[type=number],.pure-form-stacked input[type=password],.pure-form-stacked input[type=search],.pure-form-stacked input[type=tel],.pure-form-stacked input[type=text],.pure-form-stacked input[type=time],.pure-form-stacked input[type=url],.pure-form-stacked input[type=week],.pure-form-stacked label,.pure-form-stacked select,.pure-form-stacked textarea{display:block;margin:.25em 0}.pure-form-stacked input:not([type]){display:block;margin:.25em 0}.pure-form-aligned input,.pure-form-aligned select,.pure-form-aligned textarea,.pure-form-message-inline{display:inline-block;vertical-align:middle}.pure-form-aligned textarea{vertical-align:top}.pure-form-aligned .pure-control-group{margin-bottom:.5em}.pure-form-aligned .pure-control-group label{text-align:right;display:inline-block;vertical-align:middle;width:10em;margin:0 1em 0 0}.pure-form-aligned .pure-controls{margin:1.5em 0 0 11em}.pure-form .pure-input-rounded,.pure-form input.pure-input-rounded{border-radius:2em;padding:.5em 1em}.pure-form .pure-group fieldset{margin-bottom:10px}.pure-form .pure-group input,.pure-form .pure-group textarea{display:block;padding:10px;margin:0 0 -1px;border-radius:0;position:relative;top:-1px}.pure-form .pure-group input:focus,.pure-form .pure-group textarea:focus{z-index:3}.pure-form .pure-group input:first-child,.pure-form .pure-group textarea:first-child{top:1px;border-radius:4px 4px 0 0;margin:0}.pure-form .pure-group input:first-child:last-child,.pure-form .pure-group textarea:first-child:last-child{top:1px;border-radius:4px;margin:0}.pure-form .pure-group input:last-child,.pure-form .pure-group textarea:last-child{top:-2px;border-radius:0 0 4px 4px;margin:0}.pure-form .pure-group button{margin:.35em 0}.pure-form .pure-input-1{width:100%}.pure-form .pure-input-3-4{width:75%}.pure-form .pure-input-2-3{width:66%}.pure-form .pure-input-1-2{width:50%}.pure-form .pure-input-1-3{width:33%}.pure-form .pure-input-1-4{width:25%}.pure-form-message-inline{display:inline-block;padding-left:.3em;color:#666;vertical-align:middle;font-size:.875em}.pure-form-message{display:block;color:#666;font-size:.875em}

`;

        // node_modules/copy-to-clipboard/dist/index.global.js
        const copyJsContent = `
        var copyToClipboard = (() => {
          var __create = Object.create;
          var __defProp = Object.defineProperty;
          var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
          var __getOwnPropNames = Object.getOwnPropertyNames;
          var __getProtoOf = Object.getPrototypeOf;
          var __hasOwnProp = Object.prototype.hasOwnProperty;
          var __commonJS = (cb, mod) => function __require() {
            return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
          };
          var __export = (target, all) => {
            for (var name in all)
              __defProp(target, name, { get: all[name], enumerable: true });
          };
          var __copyProps = (to, from, except, desc) => {
            if (from && typeof from === "object" || typeof from === "function") {
              for (let key of __getOwnPropNames(from))
                if (!__hasOwnProp.call(to, key) && key !== except)
                  __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
            }
            return to;
          };
          var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
            isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
            mod
          ));
          var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
          var require_toggle_selection = __commonJS({
            "node_modules/toggle-selection/index.js"(exports, module) {
              "use strict";
              module.exports = function() {
                var selection = document.getSelection();
                if (!selection.rangeCount) {
                  return function() {
                  };
                }
                var active = document.activeElement;
                var ranges = [];
                for (var i = 0; i < selection.rangeCount; i++) {
                  ranges.push(selection.getRangeAt(i));
                }
                switch (active.tagName.toUpperCase()) {
                  case "INPUT":
                  case "TEXTAREA":
                    active.blur();
                    break;
                  default:
                    active = null;
                    break;
                }
                selection.removeAllRanges();
                return function() {
                  selection.type === "Caret" && selection.removeAllRanges();
                  if (!selection.rangeCount) {
                    ranges.forEach(function(range) {
                      selection.addRange(range);
                    });
                  }
                  active && active.focus();
                };
              };
            }
          });
          var index_exports = {};
          __export(index_exports, {
            default: () => index_default
          });
          var import_index = __toESM(require_toggle_selection(), 1);
          var toggle_selection_default = import_index.default;
          var defaultMessage = "Copy to clipboard: #{key}, Enter";
          function formatPromptMessage(message) {
            var isMac = navigator.userAgentData ? /mac/i.test(navigator.userAgentData.platform) : /mac os x/i.test(navigator.userAgent);
            var copyKey = (isMac ? "\u2318" : "Ctrl") + "+C";
            return message.replace(/#{\s*key\s*}/g, copyKey);
          }
          function buildClipboardItem(text, format) {
            var items = {};
            items["text/plain"] = new Blob([text], { type: "text/plain" });
            if (format && format !== "text/plain") {
              items[format] = new Blob([text], { type: format });
            }
            return new ClipboardItem(items);
          }
          async function copyViaClipboardAPI(text, options) {
            if (!options.format && !options.onCopy) {
              await navigator.clipboard.writeText(text);
              return true;
            }
            var item = buildClipboardItem(text, options.format);
            if (options.onCopy) {
              item = options.onCopy(item) || item;
            }
            await navigator.clipboard.write([item]);
            return true;
          }
          function createHiddenSpan(text, options) {
            var mark = document.createElement("span");
            mark.textContent = text;
            mark.ariaHidden = "true";
            mark.style.all = "unset";
            mark.style.position = "fixed";
            mark.style.top = "0";
            mark.style.clip = "rect(0, 0, 0, 0)";
            mark.style.whiteSpace = "pre";
            mark.style.webkitUserSelect = "text";
            mark.style.MozUserSelect = "text";
            mark.style.msUserSelect = "text";
            mark.style.userSelect = "text";
            mark.addEventListener("copy", function(e) {
              e.stopPropagation();
              if (options.format) {
                e.preventDefault();
                if (e.clipboardData) {
                  e.clipboardData.setData(options.format, text);
                }
              }
              if (options.onCopy && e.clipboardData) {
                options.onCopy(e.clipboardData);
              }
            });
            return mark;
          }
          function findOpenedModalDialog() {
            let element = document.activeElement;
            while (element) {
              if (element.tagName === "DIALOG" && element.open) {
                return element;
              }
              element = element.parentElement;
            }
            return null;
          }
          function copyViaExecCommand(text, options) {
            var reselectPrevious = toggle_selection_default();
            var range = document.createRange();
            var selection = document.getSelection();
            var mark = createHiddenSpan(text, options);
            var root = findOpenedModalDialog() || document.fullscreenElement || document.body;
            var success = false;
            try {
              root.appendChild(mark);
              range.selectNodeContents(mark);
              selection.removeAllRanges();
              selection.addRange(range);
              var successful = document.execCommand("copy");
              if (!successful) {
                throw new Error("copy command was unsuccessful");
              }
              success = true;
            } finally {
              if (typeof selection.removeRange == "function") {
                selection.removeRange(range);
              } else {
                selection.removeAllRanges();
              }
              root.removeChild(mark);
              reselectPrevious();
            }
            return success;
          }
          async function copy(text, options = {}) {
            var debug = options.debug || false;
            if (window.isSecureContext && navigator.clipboard) {
              try {
                return await copyViaClipboardAPI(text, options);
              } catch (err) {
                debug && console.error("unable to copy using navigator.clipboard: ", err);
              }
            }
            try {
              return copyViaExecCommand(text, options);
            } catch (err) {
              if (options.fallbackToPrompt) {
                var message = formatPromptMessage("message" in options ? options.message : defaultMessage);
                window.prompt(message, text);
              }
            }
            return false;
          }
          var index_default = copy;
          return __toCommonJS(index_exports);
        })();
        window._copy = copyToClipboard.default;
        window.copy = function(text, el) {
            const success = window._copy(text);
            if (success && el && el.hasAttribute('data-tooltip')) {
                if (el._tooltipTimeout) clearTimeout(el._tooltipTimeout);
                if (el._tooltipRestoreTimeout) clearTimeout(el._tooltipRestoreTimeout);

                const originalTitle = el.getAttribute('data-original-title') || el.getAttribute('data-tooltip-title');
                if (!el.hasAttribute('data-original-title')) {
                    el.setAttribute('data-original-title', originalTitle);
                }

                el.setAttribute('data-tooltip-title', '已複製');
                el.classList.add('tooltip-active');

                el._tooltipTimeout = setTimeout(() => {
                    el.classList.remove('tooltip-active');
                    el._tooltipRestoreTimeout = setTimeout(() => {
                        el.setAttribute('data-tooltip-title', originalTitle);
                        el.removeAttribute('data-original-title');
                        el._tooltipRestoreTimeout = null;
                    }, 400); // Wait for fade out transition (0.4s)
                    el._tooltipTimeout = null;
                }, 1500);
            }
            return success;
        };
        `;

        const highlight = ''
            +`<script>${combinedPrismJs}</script>`
            +`<script>${copyJsContent}</script>`
            +`<style>${prismCssContent}</style>`
            // +`<style>${purecssContent}</style>`
        ;
        return '<style>'
                +baseCss
                +'</style>'
                +highlight;
    }

    const forkGithub = `<style>#forkongithub a{background:#000;color:#fff;text-decoration:none;font-family:arial,sans-serif;text-align:center;font-weight:bold;padding:5px 40px;font-size:1rem;line-height:2rem;position:relative;transition:0.5s;}#forkongithub a:hover{background:#c11;color:#fff;}#forkongithub a::before,#forkongithub a::after{content:"";width:100%;display:block;position:absolute;top:1px;left:0;height:1px;background:#fff;}#forkongithub a::after{bottom:1px;top:auto;}@media screen and (min-width:1024px){#forkongithub{position:absolute;display:block;top:0;right:0;width:200px;overflow:hidden;height:200px;z-index:9999;}#forkongithub a{width:200px;position:absolute;top:60px;right:-60px;transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);box-shadow:4px 4px 10px rgba(0,0,0,0.8);}}</style><span id="forkongithub"><a href="https://github.com/chyuaner/cloudflare-echo-server">Fork me on GitHub</a></span>`;

    function none() {
        return `
            <div class="none">
                ${tabler_icons_html.variable_off}&nbsp;&lt;none&gt;
            </div>
        `;
    }

    function pageA(responseBody) {
        return `
        <!DOCTYPE html>
        <html lang="zh-Hant">
        <head>
            <meta charset="UTF-8">
            <title>Echo Server</title>
            `+meta(responseBody)+`
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgo=">
            <meta name="color-scheme" content="light dark" />
            <meta name="theme-color" content="#f2f2f2" media="(prefers-color-scheme: light)" />
            <meta name="theme-color" content="#2b2a3c" media="(prefers-color-scheme: dark)" />
            <script>document.documentElement.classList.add('js')</script>
            `+css()+`
            `+forkGithub+`
        </head>
        <body>
        `
    }

    function pageB() {
        return `
        </body>
        </html>
        `;
    }

    function footer(mode) {
        return `
        <div>
            <div class="container">
                <div class="col-5">
                    <p>本頁面有使用以下資源</p>
                    <ul>
                        <li><a href="https://tabler.io/icons" target="_blank">Icons: tabler.io</a></li>
                        <li><a href="https://prismjs.com/" target="_blank">Highlight: prismjs</a></li>
                        <li><a href="https://codepo8.github.io/css-fork-on-github-ribbon/" target="_blank">"Fork me on GitHub" ribbon</a></li>
                    </ul>
                </div>
                <div class="col-3">
                    <p>本後端執行環境：</p>
                    <div class="logo">
                    ${(() => {
                        switch (mode) {
                            case 'Cloudflare Workers':
                                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.4 33.5"><defs><style>.a {fill: #fff;}.b {fill: #f48120;}.c {fill: #faad3f;}.d {fill: #404041;}</style></defs><title>Cloudflare</title><path class="a" d="M94.7,10.6,89.1,9.3l-1-.4-25.7.2V21.5l32.3.1Z"/><path class="b" d="M84.2,20.4a2.85546,2.85546,0,0,0-.3-2.6,3.09428,3.09428,0,0,0-2.1-1.1l-17.4-.2c-.1,0-.2-.1-.3-.1a.1875.1875,0,0,1,0-.3c.1-.2.2-.3.4-.3L82,15.6a6.29223,6.29223,0,0,0,5.1-3.8l1-2.6c0-.1.1-.2,0-.3A11.39646,11.39646,0,0,0,66.2,7.7a5.45941,5.45941,0,0,0-3.6-1A5.20936,5.20936,0,0,0,58,11.3a5.46262,5.46262,0,0,0,.1,1.8A7.30177,7.30177,0,0,0,51,20.4a4.102,4.102,0,0,0,.1,1.1.3193.3193,0,0,0,.3.3H83.5c.2,0,.4-.1.4-.3Z"/><path class="c" d="M89.7,9.2h-.5c-.1,0-.2.1-.3.2l-.7,2.4a2.85546,2.85546,0,0,0,.3,2.6,3.09428,3.09428,0,0,0,2.1,1.1l3.7.2c.1,0,.2.1.3.1a.1875.1875,0,0,1,0,.3c-.1.2-.2.3-.4.3l-3.8.2a6.29223,6.29223,0,0,0-5.1,3.8l-.2.9c-.1.1,0,.3.2.3H98.5a.26517.26517,0,0,0,.3-.3,10.87184,10.87184,0,0,0,.4-2.6,9.56045,9.56045,0,0,0-9.5-9.5"/><path class="d" d="M100.5,27.2a.9.9,0,1,1,.9-.9.89626.89626,0,0,1-.9.9m0-1.6a.7.7,0,1,0,.7.7.68354.68354,0,0,0-.7-.7m.4,1.2h-.2l-.2-.3h-.2v.3h-.2v-.9h.5a.26517.26517,0,0,1,.3.3c0,.1-.1.2-.2.3l.2.3Zm-.3-.5c.1,0,.1,0,.1-.1a.09794.09794,0,0,0-.1-.1h-.3v.3h.3Zm-89.7-.9h2.2v6h3.8v1.9h-6Zm8.3,3.9a4.10491,4.10491,0,0,1,4.3-4.1,4.02,4.02,0,0,1,4.2,4.1,4.10491,4.10491,0,0,1-4.3,4.1,4.07888,4.07888,0,0,1-4.2-4.1m6.3,0a2.05565,2.05565,0,0,0-2-2.2,2.1025,2.1025,0,0,0,0,4.2c1.2.2,2-.8,2-2m4.9.5V25.4h2.2v4.4c0,1.1.6,1.7,1.5,1.7a1.39926,1.39926,0,0,0,1.5-1.6V25.4h2.2v4.4c0,2.6-1.5,3.7-3.7,3.7-2.3-.1-3.7-1.2-3.7-3.7m10.7-4.4h3.1c2.8,0,4.5,1.6,4.5,3.9s-1.7,4-4.5,4h-3V25.4Zm3.1,5.9a2.00909,2.00909,0,1,0,0-4h-.9v4Zm7.6-5.9h6.3v1.9H54v1.3h3.7v1.8H54v2.9H51.8Zm9.4,0h2.2v6h3.8v1.9h-6Zm11.7-.1h2.2l3.4,8H76.1l-.6-1.4H72.4l-.6,1.4H69.5Zm2,4.9L74,28l-.9,2.2Zm6.4-4.8H85a3.41818,3.41818,0,0,1,2.6.9,2.62373,2.62373,0,0,1-.9,4.2l1.9,2.8H86.1l-1.6-2.4h-1v2.4H81.3Zm3.6,3.8c.7,0,1.2-.4,1.2-.9,0-.6-.5-.9-1.2-.9H83.5v1.9h1.4Zm6.5-3.8h6.4v1.8H93.6v1.2h3.8v1.8H93.6v1.2h4.3v1.9H91.4ZM6.1,30.3a1.97548,1.97548,0,0,1-1.8,1.2,2.1025,2.1025,0,0,1,0-4.2,2.0977,2.0977,0,0,1,1.9,1.3H8.5a4.13459,4.13459,0,0,0-4.2-3.3A4.1651,4.1651,0,0,0,0,29.4a4.07888,4.07888,0,0,0,4.2,4.1,4.31812,4.31812,0,0,0,4.2-3.2Z"/></svg>`;

                            case 'Docker':
                                return `<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="610" height="145" viewBox="0 0 610 145" id="svg2"><metadata id="metadata4"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs id="defs6"><clipPath id="clipPath8"><path d="m 76,2 0,46 -22,0 0,23 -18.419263,0 c -0.07818,0.665694 -0.141485,1.332869 -0.205737,2 -1.151162,12.530963 1.036422,24.087546 6.0625,33.96875 L 43.125,110 c 1.011403,1.81678 2.191241,3.52297 3.4375,5.1875 1.244725,1.66248 1.685716,2.58262 2.46875,3.6875 C 62.319911,133.81083 82.129473,141 105,141 155.64836,141 198.63299,118.56201 217.65625,68.15625 231.15302,69.54122 244.09968,66.080358 250,54.5625 240.60137,49.138835 228.52163,50.877226 221.5625,54.375 L 240,2 168,48 145,48 145,2 z" id="path10" /></clipPath></defs><path d="m 467.82,113.24092 -0.0422,-25.557862 -0.12687,-45.65718 m 25.85406,19.67617 -25.72712,25.98101 25.85407,25.642492 M 321.28547,88.021573 c 0.12417,-5.480933 -1.46904,-11.08143 -4.69689,-15.613994 -4.65126,-6.53132 -12.17919,-10.9904 -20.43783,-11.08636 -0.55059,0 -1.09558,0 -1.65026,0.04225 -3.26481,0.2017 -6.42662,0.655378 -9.22453,1.819517 -18.40057,7.656 -21.66082,33.207962 -6.13558,44.768575 13.44474,10.01139 33.00155,5.92365 39.77549,-9.351466 1.43144,-3.227887 2.3696,-7.297132 2.3696,-10.578554 l 0,-46.207236 M 445.437,64.367851 c -3.80993,-2.4618 -8.25456,-3.349942 -12.65199,-3.342833 -0.47683,0 -0.96708,0.02383 -1.39637,0.04225 -12.71288,0.54677 -24.50001,9.530355 -24.50001,26.95424 0,20.6003 22.08809,31.71844 38.59069,22.00346 m 74.13473,-2.24266 c 13.00207,-11.1375 39.05614,-33.47058 39.05614,-33.47058 0,0 -0.94989,-1.797148 -1.56563,-2.623492 -5.25739,-7.055515 -13.28929,-10.5786 -21.74957,-10.578627 -20.90871,0 -36.58155,27.0365 -15.74094,46.6727 1.44301,1.35961 3.42523,2.42453 5.62781,3.34283 7.64747,3.18836 18.11655,2.92685 23.78066,-1.26943 M 364.02,61.194275 c -0.59271,0.01083 -1.18194,0.07366 -1.7772,0.08463 -15.85475,0.291353 -27.28615,16.759178 -23.82298,32.031962 3.37478,14.882963 19.63403,23.695883 33.68222,18.829883 16.35859,-4.28927 23.03061,-24.888756 14.04836,-38.802254 -4.9126,-7.60964 -13.23925,-12.3132 -22.1304,-12.14422 z m 240.72631,0.507772 c -6.42012,0.0172 -12.67273,2.265815 -17.30656,6.601038 -7.30767,6.03132 -8.89448,13.64741 -8.80139,23.2729 l 0.21157,21.876522" id="path12" style="fill:none;stroke:#394d54;stroke-width:10.5;stroke-linecap:round;stroke-linejoin:round" /><path d="m 147.4876,45.732 22.866,0 0,23.37473 11.56177,0 c 5.33905,0 10.83073,-0.95117 15.887,-2.66444 2.48448,-0.84244 5.27317,-2.01479 7.72392,-3.4892 -3.22785,-4.21436 -4.87579,-9.53574 -5.36101,-14.78106 -0.65874,-7.13426 0.78032,-16.42042 5.60897,-22.004216 l 2.40362,-2.780117 2.8642,2.302393 c 7.21138,5.79374 13.27612,13.88934 14.3451,23.11819 8.68312,-2.55411 18.87759,-1.95 26.53135,2.46735 l 3.14002,1.81182 -1.65276,3.2257 C 246.93289,68.946524 233.40077,72.859896 220.17071,72.167411 200.37356,121.4758 157.2729,144.82 105.01356,144.82 c -26.998899,0 -51.769845,-10.09272 -65.875552,-34.04693 -0.827018,-1.48798 -1.535233,-3.0439 -2.286326,-4.57212 C 32.083548,95.656747 30.499883,84.105687 31.574226,72.564267 l 0.32241,-3.457072 19.552937,0 0,-23.37473 22.866,0 0,-22.866 45.732,0 0,-22.866 27.43967,0 0,45.732" id="path14" style="fill:#394d54" /><g clip-path="url(#clipPath8)" id="g16"><g id="g18"><g transform="translate(0,-22.866)" id="g20"><path d="m 123.85901,3.8110794 19.81751,0 0,19.8169706 -19.81751,0 z" id="path22" style="fill:#00acd3" /><path d="m 123.85901,26.676485 19.81751,0 0,19.818043 -19.81751,0 z" id="path24" style="fill:#20c2ef" /><path d="m 126.29235,21.976904 0,-16.5157492 m 2.97185,16.5157492 0,-16.5157492 m 3.00184,16.5157492 0,-16.5157492 m 3.00344,16.5157492 0,-16.5157492 m 3.00292,16.5157492 0,-16.5157492 m 2.97131,16.5157492 0,-16.5157492" id="path26" style="stroke:#394d54;stroke-width:1.56" /><use transform="translate(0,22.866)" id="use28" xlink:href="#path26" /></g><use transform="matrix(1,0,0,-1,22.866,4.572651)" id="use30" xlink:href="#g20" /></g><use transform="translate(-91.464,45.732)" id="use32" xlink:href="#g18" /><use transform="translate(-45.732,45.732)" id="use34" xlink:href="#g18" /><use transform="translate(0,45.732)" id="use36" xlink:href="#g18" /></g><path d="m 221.57014,54.379649 c 1.53332,-11.915247 -7.38383,-21.274779 -12.91407,-25.71836 -6.37269,7.367765 -7.36295,26.677556 2.63498,34.807431 -5.57952,4.956117 -17.33731,9.448435 -29.37574,9.448435 L 34,72.917155 C 32.829255,85.484184 34,146 34,146 l 217,0 -0.98657,-91.424 c -9.39863,-5.423665 -21.48419,-3.694326 -28.44332,-0.196552" clip-path="url(#clipPath8)" id="path38" style="fill:#17b5eb" /><path d="m 34,89 0,57 217,0 0,-57" clip-path="url(#clipPath8)" id="path40" style="fill-opacity:0.17" /><path d="M 111.23736,140.88997 C 97.697741,134.4648 90.265707,125.73081 86.130611,116.19562 L 45,118 l 21,28 45.23736,-5.11003" clip-path="url(#clipPath8)" id="path42" style="fill:#d4edf1" /><path d="m 222.5,53.9375 0,0.03125 c -20.86119,26.889144 -50.78312,50.37872 -82.90625,62.71875 -28.65478,11.00767 -53.638381,11.06039 -70.875,2.21875 -1.85607,-1.04832 -3.675701,-2.21152 -5.5,-3.3125 C 50.582097,106.76175 43.464274,92.152308 44.0625,72.90625 L 34,72.90625 34,146 l 217,0 0,-96 -25,0 z" clip-path="url(#clipPath8)" id="path44" style="fill-opacity:0.085" /><path d="m 45.625,117.03125 c 14.165153,0.77531 29.28245,0.91433 42.46875,-3.21875" id="path46" style="fill:none;stroke:#394d54;stroke-width:3.4;stroke-linecap:round" /><path d="m 102.17024,106.95926 c 0,3.01898 -2.447529,5.46651 -5.466508,5.46651 -3.019514,0 -5.467581,-2.44753 -5.467581,-5.46651 0,-3.01897 2.448067,-5.46758 5.467581,-5.46758 3.018979,0 5.466508,2.44861 5.466508,5.46758 z" id="path48" style="fill:#d4edf1" /><path d="m 98.121372,103.30778 c -0.477188,0.27582 -0.800133,0.79264 -0.800133,1.3839 0,0.88261 0.715514,1.59706 1.598125,1.59706 0.604653,0 1.130046,-0.3358 1.401576,-0.83174 0.19173,0.4622 0.29831,0.96991 0.29831,1.50226 0,2.16208 -1.752907,3.91498 -3.915518,3.91498 -2.162075,0 -3.91605,-1.7529 -3.91605,-3.91498 0,-2.16314 1.753975,-3.91658 3.91605,-3.91658 0.500218,0 0.977406,0.0943 1.41764,0.2651 z" id="path50" style="fill:#394d54" /><path d="m 0,90.162343 254.32743,0 c -5.53774,-1.404786 -17.521,-3.302293 -15.54477,-10.559732 -10.06915,11.651749 -34.35274,8.174326 -40.4812,2.428786 -6.82471,9.89831 -46.55451,6.135967 -49.32553,-1.575096 -8.55565,10.04077 -35.06718,10.04077 -43.62336,0 -2.77209,7.711063 -42.501357,11.473406 -49.326595,1.575096 C 49.897506,87.776937 25.616067,91.25436 15.545841,79.602611 17.522075,86.86005 5.5388117,88.757557 0,90.162343" id="path52" style="fill:#394d54" /></svg>`;

                            case 'NodeJS':
                            default:
                                return `<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 590.96881 159.0246" id="svg3030"><defs id="defs3032" /><g transform="translate(-115.94417,-501.42131)" id="layer1"><path d="m 414.48046,501.42155 c -0.40947,0.005 -0.82364,0.10273 -1.18907,0.31708 -0.72963,0.42837 -1.18908,1.21508 -1.18908,2.06106 l 0,60.64254 c 0,0.59586 -0.27746,1.12831 -0.79271,1.42714 -0.51655,0.29958 -1.14689,0.29958 -1.6647,0 l -9.90893,-5.70755 c -1.47635,-0.85131 -3.27961,-0.8508 -4.75629,0 L 355.42323,582.992 c -1.47889,0.85309 -2.37815,2.49432 -2.37815,4.20126 l 0,45.66036 c 0,1.70566 0.90053,3.2675 2.37815,4.12211 l 39.55645,22.83018 c 1.47889,0.85334 3.2774,0.85334 4.75629,0 l 39.55645,-22.83018 c 1.47762,-0.85461 2.37815,-2.41645 2.37815,-4.12211 l 0,-113.83381 c 0,-1.73162 -0.94492,-3.35667 -2.45742,-4.20139 l -23.54362,-13.15906 c -0.36972,-0.20623 -0.7796,-0.24225 -1.18907,-0.23768 z M 160.0191,558.4176 c -0.75434,0.0304 -1.46304,0.16234 -2.14033,0.55502 l -39.55646,22.83018 c -1.47394,0.85207 -2.37814,2.40402 -2.37814,4.12212 l 0.0791,61.2767 c 0,0.85233 0.43971,1.64377 1.18908,2.06131 0.73449,0.43961 1.64613,0.43961 2.37814,0 l 23.46435,-13.4764 c 1.48635,-0.88302 2.45741,-2.41898 2.45741,-4.12211 l 0,-28.61687 c 0,-1.70694 0.89794,-3.27359 2.37815,-4.12212 l 9.9882,-5.78668 c 0.74548,-0.43099 1.54581,-0.63418 2.37814,-0.63418 0.81525,0 1.65329,0.20294 2.37815,0.63418 l 9.9882,5.78668 c 1.48016,0.84853 2.37814,2.41518 2.37814,4.12212 l 0,28.61687 c 0,1.70313 0.98076,3.24899 2.45742,4.12211 l 23.46435,13.4764 c 0.73691,0.43961 1.64727,0.43961 2.37814,0 0.72836,-0.41754 1.18907,-1.20898 1.18907,-2.06131 l 0.0791,-61.2767 c 0,-1.7181 -0.89418,-3.27005 -2.37814,-4.12212 L 162.6348,558.97262 c -0.66905,-0.39268 -1.38089,-0.52408 -2.14033,-0.55502 l -0.47563,0 z m 355.45319,0.55502 c -0.8264,-10e-4 -1.63617,0.20801 -2.37815,0.63417 l -39.55645,22.83018 c -1.47762,0.85334 -2.37814,2.41518 -2.37814,4.12212 l 0,45.66035 c 0,1.71683 0.96711,3.2736 2.45741,4.12212 l 39.23937,22.35455 c 1.44908,0.82747 3.21842,0.88936 4.67701,0.0786 l 23.78144,-13.23846 c 0.75466,-0.41856 1.26517,-1.20036 1.26834,-2.06106 0.005,-0.86095 -0.44392,-1.63261 -1.18907,-2.06106 l -39.79427,-22.83018 c -0.74515,-0.42489 -1.26834,-1.28584 -1.26834,-2.14045 l 0,-14.26886 c 0,-0.85309 0.52953,-1.6349 1.26834,-2.06081 l 12.36635,-7.13468 c 0.73564,-0.42566 1.63933,-0.42566 2.37814,0 l 12.36635,7.13468 c 0.73881,0.42591 1.18907,1.20772 1.18907,2.06081 l 0,11.2568 c 0,0.85435 0.45026,1.63489 1.18907,2.0608 0.74198,0.42718 1.63934,0.42895 2.37815,0 l 23.70216,-13.79298 c 1.47128,-0.85461 2.37814,-2.42051 2.37814,-4.12211 l 0,-11.01886 c 0,-1.70187 -0.90369,-3.26751 -2.37814,-4.12212 l -39.31864,-22.83018 c -0.74041,-0.4292 -1.55174,-0.63315 -2.37814,-0.63417 z m -118.27301,34.08673 c 0.20623,0 0.44899,0.0507 0.63417,0.15727 l 13.55542,7.848 c 0.36782,0.21308 0.63417,0.60551 0.63417,1.0304 l 0,15.69575 c 0,0.42616 -0.26381,0.81884 -0.63417,1.03066 l -13.55542,7.84774 c -0.36909,0.21055 -0.81998,0.21055 -1.18907,0 l -13.55542,-7.84774 c -0.36909,-0.21308 -0.63417,-0.6045 -0.63417,-1.03066 l 0,-15.69575 c 0,-0.42489 0.26635,-0.8163 0.63417,-1.0304 l 13.55542,-7.84673 c 0.18518,-0.10654 0.34864,-0.15727 0.5549,-0.15727 z" id="path22" style="fill:#404137;fill-opacity:1;fill-rule:evenodd;stroke:none" /><path d="m 633.98311,557.86282 c -1.37141,0 -2.70474,0.2836 -3.8843,0.95126 l -37.33686,21.56183 c -2.41619,1.39112 -3.8843,4.02065 -3.8843,6.81735 l 0,43.04452 c 0,2.79518 1.46811,5.42166 3.8843,6.8171 l 9.75039,5.6284 c 4.73726,2.33476 6.48441,2.29874 8.64059,2.29874 7.01394,0 11.01873,-4.2558 11.01873,-11.65278 l 0,-42.48949 c 0,-0.60069 -0.52002,-1.03066 -1.1098,-1.03066 l -4.67701,0 c -0.5993,0 -1.10981,0.42997 -1.10981,1.03066 l 0,42.48949 c 0,3.27867 -3.41501,6.57586 -8.95767,3.80503 l -10.14674,-5.94523 c -0.35831,-0.19532 -0.63418,-0.54006 -0.63418,-0.95126 l 0,-43.04452 c 0,-0.40866 0.2727,-0.82366 0.63418,-1.0304 l 37.25758,-21.48269 c 0.34879,-0.2004 0.76417,-0.2004 1.1098,0 l 37.25758,21.48269 c 0.35514,0.21308 0.63417,0.60931 0.63417,1.0304 l 0,43.04452 c 0,0.4112 -0.20623,0.83229 -0.5549,1.03041 l -37.33685,21.48269 c -0.32026,0.19025 -0.76101,0.19025 -1.1098,0 l -9.59185,-5.70755 c -0.28538,-0.16742 -0.67539,-0.15474 -0.95126,0 -2.64766,1.50096 -3.14549,1.67548 -5.62827,2.53669 -0.61197,0.21308 -1.54104,0.54463 0.31709,1.58543 l 12.52489,7.37212 c 1.19224,0.68997 2.52083,1.0304 3.8843,1.0304 1.38249,0 2.69206,-0.34043 3.8843,-1.0304 l 37.33685,-21.48269 c 2.4162,-1.40533 3.8843,-4.02192 3.8843,-6.8171 l 0,-43.04452 c 0,-2.7967 -1.4681,-5.42039 -3.8843,-6.81735 l -37.33685,-21.56183 c -1.17005,-0.66766 -2.51289,-0.95126 -3.8843,-0.95126 z M 278.847,558.73468 c -0.82427,0 -1.63996,0.20801 -2.37814,0.63417 l -39.55645,22.75104 c -1.47889,0.85232 -2.37815,2.49584 -2.37815,4.20126 l 0,45.66035 c 0,1.70745 0.90022,3.26802 2.37815,4.12212 l 39.55645,22.83018 c 1.47889,0.8541 3.2774,0.8541 4.75629,0 l 39.55645,-22.83018 c 1.47635,-0.8541 2.37815,-2.41467 2.37815,-4.12212 l 0,-45.66035 c 0,-1.70795 -0.89926,-3.34894 -2.37815,-4.20126 l -39.55645,-22.75104 c -0.73818,-0.42616 -1.55388,-0.63417 -2.37815,-0.63417 z m 410.54685,0.23845 0,1.1098 3.09159,0 0,8.16483 1.26834,0 0,-8.16483 3.17086,0 0,-1.1098 -7.53079,0 z m 8.64059,0 0,9.27463 1.18907,0 0,-5.4696 c 0,-0.22323 0.0101,-0.56847 0,-1.0304 -0.0152,-0.47056 0,-0.88074 0,-1.11006 l 0,-0.23844 2.61596,7.84774 1.26834,0 2.69523,-7.84774 c 0,0.49922 -0.0667,0.98119 -0.0791,1.42688 -0.005,0.43377 0,0.75949 0,0.95126 l 0,5.4696 1.18907,0 0,-9.27463 -1.74397,0 -2.69523,7.848 -2.61596,-7.848 -1.82324,0 z m -54.06313,29.64752 c -10.63189,0 -16.96409,4.52469 -16.96409,12.04926 0,8.16281 6.28464,10.40549 16.48846,11.41509 12.20781,1.19504 13.15906,2.98746 13.15906,5.39046 0,4.16803 -3.32306,5.94523 -11.17727,5.94523 -9.86771,0 -12.03658,-2.46337 -12.76271,-7.37211 -0.0855,-0.52637 -0.49148,-0.95126 -1.03052,-0.95126 l -4.83556,0 c -0.59612,0 -1.1098,0.51266 -1.1098,1.1098 0,6.28337 3.41818,13.71409 19.73859,13.71409 11.81462,0 18.62879,-4.63757 18.62879,-12.76283 0,-8.055 -5.50461,-10.21702 -16.96409,-11.73218 -11.57998,-1.53216 -12.68343,-2.282 -12.68343,-4.99397 0,-2.23863 0.9354,-5.23217 9.51257,-5.23217 7.66079,0 10.49237,1.65214 11.6529,6.8176 0.10147,0.48552 0.52954,0.87185 1.03053,0.87185 l 4.83556,0 c 0.29806,0 0.58661,-0.18264 0.79272,-0.39648 0.20293,-0.2283 0.34562,-0.48552 0.31708,-0.79246 -0.74832,-8.89591 -6.681,-13.07992 -18.62879,-13.07992 z m -128.57829,10.86032 c -0.15804,0 -0.33294,0 -0.47563,0.0786 l -7.61006,4.4392 c -0.28538,0.16235 -0.47563,0.46446 -0.47563,0.79271 l 0,8.71986 c 0,0.32825 0.19025,0.6291 0.47563,0.79272 l 7.61006,4.3598 c 0.28537,0.16488 0.58978,0.16488 0.87198,0 l 7.61006,-4.3598 c 0.28221,-0.16235 0.47563,-0.46447 0.47563,-0.79272 l 0,-8.71986 c 0,-0.32825 -0.19329,-0.62935 -0.47563,-0.79271 l -7.61006,-4.4392 c -0.14104,-0.0837 -0.23819,-0.0786 -0.39635,-0.0786 z" id="path28" style="fill:#83cd29;fill-opacity:1;fill-rule:evenodd;stroke:none" /></g></svg>`;
                        }
                    })()}
                    </div>
                    <p>本網頁可在無JS的環境運行</p>
                </div>
                <div class="col-4 right">
                    <p>© 2026 由 <a href="https://yuaner.tw" target="_blank">Yuan Chiu</a> 製作</p>
                    <p>採用 <a href="https://github.com/chyuaner/cloudflare-echo-server/blob/master/LICENSE" target="_blank">Apache License 2.0</a> 授權</p>
                    <p><a href="https://github.com/chyuaner/cloudflare-echo-server" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                        View on Github
                    </a></p>
                </div>
            </div>
        </div>
        `
    }

    function meta(responseBody) {

        const methodText = responseBody.http.method;
        const filteredUrl = filterUrl(responseBody.http.originalUrl);
        const urlText = `${responseBody.http.baseUrl}${filteredUrl}`;
        const originalUrl = filteredUrl;

        const bodyRaw = responseBody.request.bodyRaw;
        const bodyRawText = bodyRaw.replace(/&/g, "&amp;")
                             .replace(/</g, "&lt;")
                             .replace(/>/g, "&gt;")
                             .replace(/"/g, "&quot;")
                             .replace(/'/g, "&#039;");
        const headers = reorderObject(responseBody.request.headers,
            ['user-agent', 'cache-control', 'accept', 'accept-encoding', 'accept-language'],
            ['host', 'x-real-ip', 'cf-ipcountry']
        );
        const headersText = objectToText(headers);
        const host = reorderObject(responseBody.host,
            ['ip', 'country', 'city', 'hostname']
        );
        const hostText = objectToText(host);


        const title = 'HTTP Echo Server ➤ '+methodText+' '+originalUrl;
        const description = (bodyRawText ? bodyRawText + '; ' : '') +'◆header▶ '+headersText+'; '+'◆host▶ '+hostText;

        // 使用 URL API 處理 Query 字串相接與編碼問題
        const ogUrlObj = new URL(filteredUrl, responseBody.http.baseUrl);
        ogUrlObj.searchParams.set("echo_png", "1");
        ogUrlObj.searchParams.set("echo_method", methodText);
        if (bodyRaw) {
            ogUrlObj.searchParams.set("echo_postbody", bodyRaw);
        }
        const ogImgUrl = ogUrlObj.toString();

        const outputHtml = `
        <meta name="description" content="${description}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="${ogImgUrl}" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="${title}" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${description}" />
        <meta name="twitter:image" content="${ogImgUrl}" />
        `;

        return outputHtml;
    }

    function filterUrl(originalUrl) {
        if (!originalUrl) return "";
        try {
            const url = new URL(originalUrl, "http://localhost");
            url.searchParams.delete("echo_method");
            url.searchParams.delete("echo_postbody");
            let target = url.pathname + url.search;
            if (target === "/?") target = "/";
            return target;
        } catch (e) {
            return originalUrl;
        }
    }

    function host({hostname, ip, ips, colo, country, city, continent, latitude, longitude, asn, asOrganization, isEUCountry, postalCode, metroCode, region, regionCode, timezone} = {}) {

        const obj = {colo, country, city, continent, latitude, longitude, asn, asOrganization, isEUCountry, postalCode, metroCode, region, regionCode, timezone};

        const outputhtml = `
                    <h2>${tabler_icons_html.cloud_network} Host  <small><a href="https://myip.yuaner.tw" target="_blank">[Go to myip.yuaner.tw]</a></small></h2>
                    ${renderObjectAsList({ip, ips, hostname})}
                    ${renderObjectAsList(obj)}
                `;

        return outputhtml;

    }

    function endpointBar(responseBody) {
        const displayUrl = filterUrl(responseBody.http.originalUrl);
        return `<div class="endpoint-bar ${responseBody.http.method}">
                        <span class="method-badge ${responseBody.http.method}">${responseBody.http.method}</span>
                        <span class="url-path">${responseBody.http.baseUrl}${displayUrl}</span>
                </div>`;
    }
    function endpointBarInfo(responseBody) {
        return `<div id="url-table">
                    <div class="table-container">
                    <table>
                        <tbody>
                            <tr><th>BaseUrl</th><td>${responseBody.http.baseUrl}</td></tr>
                            <tr><th>OriginalUrl</th><td>${filterUrl(responseBody.http.originalUrl)}</td></tr>
                            <tr><th>Protocol</th><td>${responseBody.http.httpProtocol}</td></tr>
                        </tbody>
                    </table>
                    </div>
                </div>`;
    }

    function main(responseBody) {
        const container = `
            <div class="container">
                <div class="col-lg-8">
                <h2 class="hide">Request</h2>

                    <div class="container">
                        <div class="col-6 card card-border">
                            <h3>${tabler_icons_html.link} URL Params ${infoTooltip("可以一次圈選多項目文字複製，有特殊做複製接字串處理")}</h3>
                            ${Object.keys(responseBody.request.params).length === 0 ? none() : `
                            <div class="urltext">
                                <span class="firstchar">/</span>
                                ${Object.entries(responseBody.request.params).map(([key, value], i, arr) => `
                                    <span class="li" style="list-style-type: symbols;">
                                        <span class="part">${value}</span>
                                        ${i < arr.length - 1 ? '<span class="split">/</span>' : ''}
                                    </span>
                                `).join('')}
                            </div>`}
                        </div>
                        <div class="col-6 card card-border">
                            <h3>${tabler_icons_html.link} URL Query ${infoTooltip("可以一次圈選多項目文字複製，有特殊做複製接字串處理")}</h3>
                            ${Object.keys(responseBody.request.query).length === 0 ? none() : `
                            <div class="urltext">
                                <span class="firstchar">?</span>
                                ${Object.entries(responseBody.request.query).map(([key, value], i, arr) => `
                                    <span class="li">
                                        <span class="part">
                                            <span class="key">${key}</span>
                                            <span class="kvsplit">=</span>
                                            ${value}
                                        </span>
                                        ${i < arr.length - 1 ? '<span class="split">&</span>' : ''}
                                    </span>
                                `).join('')}
                            </div>`}
                        </div>
                    </div>

                    ${(() => {
                        // 取得當前請求的方法與原始 body 文字
                        const method   = responseBody.http.method;   // e.g. "GET", "POST", "HEAD", ...
                        const bodyRaw  = responseBody.request.bodyRaw;
                        const body     = responseBody.request.body;  // Parsed body (JSON object or Form object)

                        // 條件：GET / HEAD 且 body 為空 → 不顯示任何內容
                        if ((method === 'GET' || method === 'HEAD') && (!bodyRaw || bodyRaw.trim() === '')) {
                            return '';   // 直接返回空字串，整塊 <div> 不會產生
                        }

                        // 其餘情況（POST、PUT、PATCH、DELETE … 或 GET/HEAD 有 body） -> 正常顯示
                        return `
                            <div class="card card-border">
                                <h3>${tabler_icons_html.file} Post Body</h3>
                                ${/* 1. 若 body 為物件且非空 (代表 Form 或 JSON 已解析)，先顯示表格 */
                                  (typeof body === 'object' && body !== null && Object.keys(body).length > 0)
                                    ? objectToTable(body) + `<p></p><h3>${tabler_icons_html.file_code} Post Body Raw</h3>`
                                    : ''
                                }
                                ${/* 2. 顯示原始 Raw Body (含行號) */
                                  (() => {
                                      if (!bodyRaw) return none();

                                      // 1. Truncate if too long (to prevent DOM performance issues)
                                      const MAX_LENGTH = 10000;
                                      let displayContent = bodyRaw;
                                      let truncated = false;
                                    //   if (displayContent.length > MAX_LENGTH) {
                                    //       displayContent = displayContent.substring(0, MAX_LENGTH);
                                    //       truncated = true;
                                    //   }

                                      // 2. Escape HTML (CRITICAL for preventing DOM breakage)
                                      displayContent = displayContent
                                          .replace(/&/g, "&amp;")
                                          .replace(/</g, "&lt;")
                                          .replace(/>/g, "&gt;")
                                          .replace(/"/g, "&quot;")
                                          .replace(/'/g, "&#039;");

                                      if (truncated) {
                                          displayContent += `\n\n... [Content Truncated: Original size ${bodyRaw.length} bytes] ...`;
                                      }

                                      return `<pre class="line-numbers"><code class="language-url">${displayContent}</code></pre>`;
                                  })()
                                }
                            </div>`;
                    })()}

                    ${Object.keys(responseBody.request.cookies).length === 0 ? `` : `
                        <div class="card card-border">
                            <h3>${tabler_icons_html.cookie} Cookies</h3>
                            ${objectToTable(responseBody.request.cookies)}
                        </div>
                    `}

                    ${Object.entries(responseBody.request.clientHint)
                        .some(([_, val]) => val && Object.values(val).some(v => v !== null && v !== undefined))
                    ? `
                        <div class="card card-border">
                            <h3>
                                ${responseBody.request.clientHint.mobile == true ? tabler_icons_html.device_mobile : tabler_icons_html.device_desktop} Client Hints User-Agent ${infoTooltip("以現代Header: sec-ch-ua 內容來判定")}
                                <small>Power by: <a href="https://www.npmjs.com/package/ua-client-hints-js" target="_blank">ua-client-hints-js</a></small>
                            </h3>
                            <div class="container">
                                <div class="col-9">
                                    <h4 style="margin-bottom: 0em;">Brands</h4>
                                    <div class="container">
                                    ${Object.entries(responseBody.request.clientHint.brands).map(([key, value], i, arr) => `
                                        <div class="col-4">
                                            ${renderObjectAsList(value)}
                                        </div>
                                    `).join('')}
                                    </div>
                                </div>
                                <div class="col-3">
                                    <h4 style="margin-bottom: 0em;">Other</h4>
                                    <div class="container">
                                        <div class="col-12">
                                            ${renderObjectAsList((({ brands, ...rest }) => rest)(responseBody.request.clientHint))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ` : ``
                    }


                    ${Object.entries(responseBody.request.userAgent)
                        .filter(([key]) => key !== 'ua')
                        .some(([_, val]) => val && Object.values(val).some(v => v !== null && v !== undefined))
                    ? `
                        <div class="card card-border">
                            <h3>${responseBody.request.userAgent.device.type=="mobile"?tabler_icons_html.device_mobile:(responseBody.request.userAgent.device.type=="tablet"?tabler_icons_html.device_tablet:tabler_icons_html.device_desktop)} User-Agent ${infoTooltip("以傳統Header: user-agent 字串內容來判定")}
                                <small>Power by: <a href="https://www.npmjs.com/package/ua-parser-js/v/${require('ua-parser-js/package.json').version}" target="_blank">ua-parser-js ${require('ua-parser-js/package.json').version}</a></small>
                            </h3>
                            <p>${copyAText(responseBody.request.userAgent.ua)}</p>
                            <hr>
                            <div class="container">
                                <div class="col-4">
                                    ${Object.values(responseBody.request.userAgent.browser).some(v => v !== null && v !== undefined) ? `
                                        <h4>Browser</h4>
                                        ${renderObjectAsList(responseBody.request.userAgent.browser)}
                                    ` : ``}
                                </div>
                                <div class="col-4">
                                    ${Object.values(responseBody.request.userAgent.engine).some(v => v !== null && v !== undefined) ? `
                                        <h4>Engine</h4>
                                        ${renderObjectAsList(responseBody.request.userAgent.engine)}
                                    ` : ``}
                                </div>
                                <div class="col-4">
                                    ${Object.values(responseBody.request.userAgent.os).some(v => v !== null && v !== undefined) ? `
                                        <h4>OS</h4>
                                        ${renderObjectAsList(responseBody.request.userAgent.os)}
                                    ` : ``}

                                    ${Object.values(responseBody.request.userAgent.device).some(v => v !== null && v !== undefined) ? `
                                        <h4>Device</h4>
                                        ${renderObjectAsList(responseBody.request.userAgent.device)}
                                    ` : ``}

                                    ${Object.values(responseBody.request.userAgent.cpu).some(v => v !== null && v !== undefined) ? `
                                        <h4>CPU</h4>
                                        ${renderObjectAsList(responseBody.request.userAgent.cpu)}
                                    ` : ``}

                                </div>
                            </div>
                        </div>
                        ` : ``
                    }

                    <div class="card card-border">
                        <h3>${tabler_icons_html.http_head} Header</h3>
                        ${objectToTable(responseBody.request.headers)}
                    </div>

                    <div class="card card-border">${curl(responseBody)}</div>

                </div>

                <div class="col-lg-4">

                    ${(() => {
                        const tls = { ...responseBody.http.tls };
                        const tlsClientAuth = tls.tlsClientAuth;
                        delete tls.tlsClientAuth;
                        if (tls.tlsClientHelloLength === 0 || tls.tlsClientHelloLength === '0') delete tls.tlsClientHelloLength;

                        const tlsHtml = renderObjectAsList(tls);

                        // 判定是否含有實質的 TLS 資料
                        const isMeaningful = Object.values(tls).some(v => v !== null && v !== undefined && v !== "" && v !== 0 && v !== "0" && v !== "NONE");

                        // 判定是否含有實質的客戶端證書資料 (mTLS)
                        const isCAMeaningful = tlsClientAuth && Object.values(tlsClientAuth).some(v =>
                            v !== null && v !== undefined && v !== "" && v !== 0 && v !== "0" && v !== "NONE" && v !== false
                        );

                        if (!tlsHtml || !isMeaningful) return '';

                        const tlsCAHtml = isCAMeaningful ? renderObjectAsList(tlsClientAuth) : '';

                        return `
                            <div class="card card-border">
                                <h3>${tabler_icons_html.lock_password} TLS</h3>
                                ${tlsHtml}
                                ${tlsCAHtml ? `<h4>tlsClientAuth</h4>${tlsCAHtml}` : ''}
                            </div>`;
                    })()}

                    <div style="position: sticky;top: 5px;">
                        <div class="card card-border">
                            ${host(responseBody.host)}
                        </div>
                        <div class="card card-border">
                            <h2>${tabler_icons_html.send} Test POST Request</h2>
                            ${form(responseBody)}
                        </div>
                    </div>
                </div>
            </div>
        `;

        const output = endpointBar(data.responseBody)
            +endpointBarInfo(data.responseBody)
            +'<div id="main">'
                +container

                // 輸出shell範例
                // +'<div class="col-6 card card-border">'+wget(data.wgetText)+'</div>'

                +'<div class="card card-border">'
                    +`<h2>${tabler_icons_html.code} Raw Response Body ${infoTooltip("若以curl或Postman方式，將會以下面JSON的內容輸出")}</h2>`
                    +`<pre><code class="language-json">${JSON.stringify(data.responseBody, null, 2).replace(/</g, '&lt;')}</code></pre>`
                +'</div>'
            +'</div>';

        return output;
    }

    function simpleMain(responseBody) {
        const container = `
            <div class="container">
                <div class="col-lg-9 card card-border" style="column-count: 2;">
                <h2 class="hide">Request</h2>

                    ${(() => {
                        // 取得當前請求的方法與原始 body 文字
                        const method   = responseBody.http.method;   // e.g. "GET", "POST", "HEAD", ...
                        const bodyRaw  = responseBody.request.bodyRaw;
                        const body     = responseBody.request.body;  // Parsed body (JSON object or Form object)

                        // 條件：GET / HEAD 且 body 為空 → 不顯示任何內容
                        if ((method === 'GET' || method === 'HEAD') && (!bodyRaw || bodyRaw.trim() === '')) {
                            return '';   // 直接返回空字串，整塊 <div> 不會產生
                        }

                        // 其餘情況（POST、PUT、PATCH、DELETE … 或 GET/HEAD 有 body） -> 正常顯示
                        return `
                            <div class="">
                                <h3>${tabler_icons_html.file} Post Body</h3>
                                ${/* 2. 顯示原始 Raw Body (含行號) */
                                  (() => {
                                      if (!bodyRaw) return none();

                                      // 1. Truncate if too long (to prevent DOM performance issues)
                                      const MAX_LENGTH = 10000;
                                      let displayContent = bodyRaw;
                                      let truncated = false;
                                    //   if (displayContent.length > MAX_LENGTH) {
                                    //       displayContent = displayContent.substring(0, MAX_LENGTH);
                                    //       truncated = true;
                                    //   }

                                      // 2. Escape HTML (CRITICAL for preventing DOM breakage)
                                      displayContent = displayContent
                                          .replace(/&/g, "&amp;")
                                          .replace(/</g, "&lt;")
                                          .replace(/>/g, "&gt;")
                                          .replace(/"/g, "&quot;")
                                          .replace(/'/g, "&#039;");

                                      if (truncated) {
                                          displayContent += `\n\n... [Content Truncated: Original size ${bodyRaw.length} bytes] ...`;
                                      }

                                      return `<span class="" style="white-space: pre-wrap;word-break: break-all;">${displayContent}</span>`;
                                  })()
                                }
                            </div>`;
                    })()}

                    <div class="">
                        <h3>${tabler_icons_html.http_head} Header</h3>
                        ${renderObjectAsList(responseBody.request.headers)}
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="card card-border">
                        ${host(responseBody.host)}
                    </div>
                </div>
            </div>
        `;

        const output = endpointBar(data.responseBody)
            +'<div id="main">'
                +container
            +'</div>';

        return output;
    }

    function form(responseBody) {
        const reqBody = (typeof responseBody?.request?.body === 'object' && responseBody?.request?.body !== null)
            ? responseBody.request.body
            : {};
        const isReqEmpty = Object.keys(reqBody).length === 0;

        const getV = (name, def = '') => isReqEmpty ? def : (reqBody[name] ?? '');
        const getC = (name, val, def = false) => {
            if (isReqEmpty) return def ? 'checked' : '';
            return reqBody[name] === val ? 'checked' : '';
        };
        const getS = (name, val, def = false) => {
            if (isReqEmpty) return def ? 'selected' : '';
            return reqBody[name] === val ? 'selected' : '';
        };

        return `
        <style>
/* The Modal (background) - JS ONLY */
.modal-js {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 10000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  -webkit-animation-name: fadeIn; /* Fade in the background */
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s
}

/* Modal Content - JS ONLY */
.modal-content-js {
    position: fixed;
    bottom: 0;
    max-height: 85vh;
    background-color: light-dark(#fff, #282a36);
    width: 100%;
    overflow: auto;
    border-top: 1px solid light-dark(#ddd, #444);
    box-shadow: 0 -4px 12px rgba(0,0,0,0.15);
    -webkit-animation: slideIn 0.4s;
    animation: slideIn 0.4s;
    }

.modal-js.closing {
  -webkit-animation: fadeOut 0.4s;
  animation: fadeOut 0.4s;
}

.modal-content-js.closing {
  -webkit-animation: slideOut 0.4s;
  animation: slideOut 0.4s;
}

/* For showing the modal */
.modal-js.modal-show {
  display: block;
}

/* The Close Button */
.close {
  color: white, #000;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000, white;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 0.75rem 1rem;
  background-color: light-dark(hsl(0 0% 95%), hsl(245, 18%, 20%));
  color: light-dark(#333, #fff);
  border-bottom: 1px solid light-dark(#ddd, #444);
}

.modal-header h2 {
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 0;
}

.modal-body {padding: 1.5rem 1rem;padding-bottom: 0;}

.modal-footer {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

/* Add Animation */
@-webkit-keyframes slideIn {
  from {bottom: -300px; opacity: 0}
  to {bottom: 0; opacity: 1}
}

@keyframes slideIn {
  from {bottom: -300px; opacity: 0}
  to {bottom: 0; opacity: 1}
}

@-webkit-keyframes slideOut {
  from {bottom: 0; opacity: 1}
  to {bottom: -300px; opacity: 0}
}

@keyframes slideOut {
  from {bottom: 0; opacity: 1}
  to {bottom: -300px; opacity: 0}
}

@-webkit-keyframes fadeIn {
  from {opacity: 0}
  to {opacity: 1}
}

@keyframes fadeIn {
  from {opacity: 0}
  to {opacity: 1}
}

@-webkit-keyframes fadeOut {
  from {opacity: 1}
  to {opacity: 0}
}

@keyframes fadeOut {
  from {opacity: 1}
  to {opacity: 0}
}
        </style>

        <!-- Trigger/Open The Modal -->
        <button id="myBtn" class="pure-button pure-button-primary" style="display:none; margin-left: 2em;">Open POST Form Dialog</button>
        <!-- The Modal -->
        <div id="myFormModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header" style="display:none">
                    <span class="close">&times;</span>
                    <h2>Test POST Request</h2>
                </div>


                <div class="modal-body">
                    <div class="pre-container">
                        <div class="col-lg-8">
                            <fieldset>
                                <legend>HTML5 表單各類型測試</legend>
                                <form method="post" action="form-test" class="pure-form pure-form-stacked">
                                    <div class="pre-container">
                                        <div class="col-6">
                                            <p>
                                                <label for="t_text">Text</label>
                                                <input type="text" id="t_text" name="t_text" placeholder="文字輸入" value="${getV('t_text')}" />
                                            </p>
                                            <p>
                                                <label for="t_password">Password</label>
                                                <input type="password" id="t_password" name="t_password" placeholder="密碼輸入" value="${getV('t_password')}" />
                                            </p>
                                            <p>
                                                <label for="t_email">Email</label>
                                                <input type="email" id="t_email" name="t_email" placeholder="email@example.com" value="${getV('t_email')}" />
                                            </p>
                                            <p>
                                                <label for="t_url">URL</label>
                                                <input type="url" id="t_url" name="t_url" placeholder="https://example.com" value="${getV('t_url')}" />
                                            </p>
                                            <p>
                                                <label for="t_tel">Tel</label>
                                                <input type="tel" id="t_tel" name="t_tel" placeholder="0911-222-333" value="${getV('t_tel')}" />
                                            </p>
                                            <p>
                                                <label for="t_search">Search</label>
                                                <input type="search" id="t_search" name="t_search" placeholder="搜尋關鍵字" value="${getV('t_search')}" />
                                            </p>
                                            <p>
                                                <label for="t_number">Number</label>
                                                <input type="number" id="t_number" name="t_number" placeholder="123" value="${getV('t_number')}" />
                                            </p>
                                            <p>
                                                <label for="t_range">Range (0-100)</label>
                                                <input type="range" id="t_range" name="t_range" min="0" max="100" value="${getV('t_range', '50')}" />
                                            </p>
                                            <p>
                                                <label for="t_color">Color</label>
                                                <input type="color" id="t_color" name="t_color" value="${getV('t_color', '#f6821f')}" />
                                            </p>
                                        </div>
                                        <div class="col-6">
                                            <p>
                                                <label for="t_date">Date</label>
                                                <input type="date" id="t_date" name="t_date" value="${getV('t_date')}" />
                                            </p>
                                            <p>
                                                <label for="t_datetime">Datetime Local</label>
                                                <input type="datetime-local" id="t_datetime" name="t_datetime" value="${getV('t_datetime')}" />
                                            </p>
                                            <p>
                                                <label for="t_month">Month</label>
                                                <input type="month" id="t_month" name="t_month" value="${getV('t_month')}" />
                                            </p>
                                            <p>
                                                <label for="t_week">Week</label>
                                                <input type="week" id="t_week" name="t_week" value="${getV('t_week')}" />
                                            </p>
                                            <p>
                                                <label for="t_time">Time</label>
                                                <input type="time" id="t_time" name="t_time" value="${getV('t_time')}" />
                                            </p>
                                            <p>
                                                <label for="t_select">Select</label>
                                                <select id="t_select" name="t_select" style="width:100%">
                                                    <option value="opt1" ${getS('t_select', 'opt1', true)}>選項一</option>
                                                    <option value="opt2" ${getS('t_select', 'opt2')}>選項二</option>
                                                </select>
                                            </p>

                                            <div class="pre-container">
                                            <div class="col-6">
                                                <p>
                                                    <label>Radio</label>
                                                    <label for="r1" style="display:inline-block; margin-right: 1em;">
                                                        <input type="radio" id="r1" name="t_radio" value="R1" ${getC('t_radio', 'R1', true)} /> R1
                                                    </label>
                                                    <label for="r2" style="display:inline-block;">
                                                        <input type="radio" id="r2" name="t_radio" value="R2" ${getC('t_radio', 'R2')} /> R2
                                                    </label>
                                                </p>
                                            </div>
                                            <div class="col-6">
                                                <p>
                                                    <label>Checkbox</label>
                                                    <label for="c1" style="display:inline-block; margin-right: 1em;">
                                                        <input type="checkbox" id="c1" name="t_checkbox" value="C1" ${getC('t_checkbox', 'C1', true)} /> C1
                                                    </label>
                                                    <label for="c2" style="display:inline-block;">
                                                        <input type="checkbox" id="c2" name="t_checkbox" value="C2" ${getC('t_checkbox', 'C2')} /> C2
                                                    </label>
                                                </p>
                                            </div>
                                            </div>

                                            <p>
                                                <label for="t_textarea">Textarea</label>
                                                <textarea id="t_textarea" name="t_textarea" rows="2" placeholder="多行文字輸入">${getV('t_textarea')}</textarea>
                                            </p>
                                            <p>
                                                <label for="t_file">File</label>
                                                <input type="file" id="t_file" name="t_file" />
                                            </p>
                                        </div>
                                    </div>
                                    <div style="text-align: center; margin-top: 1rem;">
                                        <input type="hidden" name="t_hidden" value="${getV('t_hidden', 'Hidden Value')}" />
                                        <button type="submit" class="pure-button pure-button-primary">Submit POST Echo</button>
                                        <button type="reset" class="pure-button">Reset</button>
                                    </div>
                                </form>
                            </fieldset>

                        </div>
                        <div class="col-lg-4" style="display: flex; flex-direction: column; gap: 0.5rem;">
                            <fieldset>
                                <legend>檔案上傳測試</legend>
                                <form id="uploadForm" method="post" action="upload-test" enctype="multipart/form-data" class="pure-form">
                                    <div id="dropZone" class="drop-zone js-only">
                                        ${tabler_icons_html.upload}
                                        <p>Drag & drop files here</p>
                                    </div>
                                    <div class="upload-actions">
                                        <label for="file_upload" class="pure-button js-only" style="margin: 0; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                                            ${tabler_icons_html.file} 選擇檔案...
                                        </label>
                                        <input type="file" id="file_upload" name="file" multiple />
                                        <button type="submit" class="pure-button pure-button-primary">開始上傳</button>
                                    </div>
                                    <ul id="fileList" class="file-list js-only"></ul>
                                </form>
                            </fieldset>

                            <fieldset style="flex: 1; display: flex; flex-direction: column;">
                                <legend>RAW Body文字測試</legend>
                                <form id="rawForm" method="post" action="raw-test" enctype="multipart/form-data" class="pure-form" style="flex: 1; display: flex; flex-direction: column;">
                                    <div class="js-only">
                                        <p>
                                            <label for="rt_select">類型 (Content-Type)</label>
                                            <select id="rt_select" name="rt_select" style="width:100%">
                                                <option value="text/plain" ${getS('rt_select', 'text/plain', true)}>text/plain</option>
                                                <option value="application/json" ${getS('rt_select', 'application/json')}>application/json</option>
                                                <option value="application/xml" ${getS('rt_select', 'application/xml')}>application/xml</option>
                                                <option value="text/xml" ${getS('rt_select', 'text/xml')}>text/xml</option>
                                                <option value="multipart/form-data" ${getS('rt_select', 'multipart/form-data')}>multipart/form-data</option>
                                                <option value="application/x-www-form-urlencoded" ${getS('rt_select', 'application/x-www-form-urlencoded')}>application/x-www-form-urlencoded</option>
                                                <option value="custom" ${getS('rt_select', 'custom')}>其他 (輸入文字)</option>
                                            </select>
                                        </p>
                                        <p id="rt_custom_wrapper" style="display:none">
                                            <label for="rt_custom">自訂類型</label>
                                            <input type="text" id="rt_custom" name="rt_custom" placeholder="例如: application/xml" value="${getV('rt_custom')}" />
                                        </p>
                                    </div>
                                    <p style="flex: 1; display: flex; flex-direction: column;">
                                        <label for="rt_textarea">內容</label>
                                        <textarea id="rt_textarea" name="rt_textarea" placeholder="多行文字輸入" style="flex: 1; min-height: 100px;">${getV('rt_textarea')}</textarea>
                                    </p>
                                    <div style="text-align: center; margin-top: 1rem;">
                                        <button type="submit" class="pure-button pure-button-primary">Submit POST Echo</button>
                                        <button type="reset" class="pure-button">Reset</button>
                                    </div>
                                </form>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>

        </div>
<script>
// Get the modal elements
var modal = document.getElementById("myFormModal");
var modalContent = modal ? modal.querySelector(".modal-content") : null;
var modalGrid = modal ? modal.querySelector(".modal-body > div") : null;
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var modalHeader = document.querySelector(".modal-header");
var modalFooter = document.querySelector(".modal-footer");

// If JS is enabled, enable modal behavior and show the trigger button
if (modal && modalContent && btn) {
    // 關鍵修復：將 Modal 移到 body 最底層，避免被其他卡片的層疊上下文 (Stacking Context) 遮擋
    document.body.appendChild(modal);
    modal.classList.add("modal-js");
    modalContent.classList.add("modal-content-js");
    // Promote pre-container to container for grid layout
    modal.querySelectorAll(".pre-container").forEach(function(el) {
        el.classList.remove("pre-container");
        el.classList.add("container");
    });

    // Since we want traditional layout when JS is off, we hide/show elements
    btn.style.display = "block";
    if (modalHeader) modalHeader.style.display = "block";
    if (modalFooter) modalFooter.style.display = "block";
}

// function to close modal with animation
function closeModal() {
  if (modal.classList.contains("modal-show")) {
    modal.classList.add("closing");
    modalContent.classList.add("closing");
    // Wait for animation to finish then hide
    setTimeout(function() {
      modal.classList.remove("modal-show");
      modal.classList.remove("closing");
      modalContent.classList.remove("closing");
    }, 380); // Slightly less than 0.4s to avoid flicker
  }
}

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.classList.remove("closing");
  modalContent.classList.remove("closing");
  modal.classList.add("modal-show");
}

// When the user clicks on <span> (x), close the modal
if (span) {
    span.onclick = closeModal;
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if (modal && event.target == modal) {
        closeModal();
    }
});

// File Upload Logic
(function() {
    var dropZone = document.getElementById('dropZone');
    var fileInput = document.getElementById('file_upload');
    var fileList = document.getElementById('fileList');
    var fileIcon = ${JSON.stringify(tabler_icons_html.file)};

    // Global drag event prevention (CRITICAL for Firefox)
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function(eventName) {
        window.addEventListener(eventName, function(e) {
            e.preventDefault();
            e.stopPropagation();
        }, false);
    });

    if (dropZone && fileInput) {
        // Drop zone local event prevention & highlight
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function(eventName) {
            dropZone.addEventListener(eventName, function(e) {
                e.preventDefault();
                e.stopPropagation();
            }, false);
        });

        ['dragenter', 'dragover'].forEach(function(eventName) {
            dropZone.addEventListener(eventName, function() {
                dropZone.classList.add('dragover');
            }, false);
        });

        ['dragleave', 'drop'].forEach(function(eventName) {
            dropZone.addEventListener(eventName, function() {
                dropZone.classList.remove('dragover');
            }, false);
        });

        // Handle drop specifically on the zone
        dropZone.addEventListener('drop', function(e) {
            var dt = e.dataTransfer;
            var files = dt.files;
            if (files && files.length > 0) {
                // Use DataTransfer object to safely update file input
                var dataTransfer = new DataTransfer();
                for (var i = 0; i < files.length; i++) {
                    dataTransfer.items.add(files[i]);
                }
                fileInput.files = dataTransfer.files;
                updateFileList(fileInput.files);
            }
        }, false);

        fileInput.onchange = function() {
            updateFileList(fileInput.files);
        };
    }

    function updateFileList(files) {
        if (!fileList) return;
        fileList.innerHTML = '';
        if (files.length === 0) return;

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var li = document.createElement('li');
            li.className = 'file-item';
            li.innerHTML = fileIcon + '<div class="file-info"><span class="file-name">' + file.name + '</span><span class="file-size">' + formatBytes(file.size) + '</span></div>';
            fileList.appendChild(li);
        }
    }

    function formatBytes(bytes, decimals) {
        if (bytes === 0) return '0 Bytes';
        decimals = decimals || 2;
        var k = 1024;
        var dm = decimals < 0 ? 0 : decimals;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    // RAW Body Form Logic
    (function() {
        var rawForm = document.getElementById('rawForm');
        var rtSelect = document.getElementById('rt_select');
        var rtCustomWrapper = document.getElementById('rt_custom_wrapper');
        var rtCustom = document.getElementById('rt_custom');
        var rtTextarea = document.getElementById('rt_textarea');

        if (!rawForm || !rtSelect) return;

        rtSelect.onchange = function() {
            rtCustomWrapper.style.display = (rtSelect.value === 'custom') ? 'block' : 'none';
        };
        // Initial check
        if (rtSelect.value === 'custom') rtCustomWrapper.style.display = 'block';

        rawForm.onsubmit = function(e) {
            e.preventDefault();
            var contentType = rtSelect.value;
            if (contentType === 'custom') contentType = rtCustom.value;
            var body = rtTextarea.value;

            fetch(rawForm.action, {
                method: 'POST',
                headers: {
                    'Content-Type': contentType,
                    'Accept': 'text/html'
                },
                body: body
            }).then(function(response) {
                return response.text();
            }).then(function(html) {
                // 1. 手動更新網址列，並產生歷史紀錄 (就像真實換頁一樣)
                history.pushState({}, '', rawForm.action);

                // 2. 覆寫整個頁面內容
                document.open();
                document.write(html);
                document.close();
            }).catch(function(err) {
                alert('Error: ' + err);
            });
        };
    })();
})();
</script>

        `;
    }

    function curl(responseBody) {
        return `<h3>${tabler_icons_html.terminal} curl ${infoTooltip("若想在終端機輸出文字結果，請移除 accept-encoding: br, gzip")} <small>Power by: <a href="https://www.npmjs.com/package/curl-generator" target="_blank">curl-generator ${require('curl-generator/package.json').version}</a></small></h3>
            <pre><code class="language-bash">${generateCurl(responseBody)}</code></pre>`;
    }
    function wget(data) {
        return `<h2>wget</h2>
            <pre><code class="language-bash">${data}</code></pre>`;
    }

    const output = pageA(data.responseBody)
        +'<h1>HTTP Echo Server</h1>'
        +main(data.responseBody)
        // +simpleMain(data.responseBody)
        +`<div id="footer">
            ${footer(data.responseBody.environment.mode)}
        </div>`
        +pageB();
    return output;
}

export { generateHtml };
