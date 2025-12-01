function generateHtml(data) {
    const tabler_icons_html = {
        "variable_off": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-variable-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.675 4.68c-2.17 4.776 -2.062 9.592 .325 15.32" /><path d="M19 4c1.959 3.917 2.383 7.834 1.272 12.232m-.983 3.051c-.093 .238 -.189 .477 -.289 .717" /><path d="M11.696 11.696c.095 .257 .2 .533 .32 .831c.984 2.473 .984 3.473 1.984 3.473h1" /><path d="M8 16c1.5 0 3 -2 4 -3.5m2.022 -2.514c.629 -.582 1.304 -.986 1.978 -.986" /><path d="M3 3l18 18" /></svg>`,
        "link": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>`,
        "http_head": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-http-head"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 16v-8" /><path d="M7 8v8" /><path d="M3 12h4" /><path d="M14 8h-4v8h4" /><path d="M10 12h2.5" /><path d="M17 16v-6a2 2 0 1 1 4 0v6" /><path d="M17 13h4" /></svg>`,
        "file": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /></svg>`,
        "cookie": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cookie"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path stroke="none" d="M0 0h24v24H0z" /><path d="M8 13v.01" /><path d="M12 17v.01" /><path d="M12 12v.01" /><path d="M16 14v.01" /><path d="M11 8v.01" /><path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296q -.745 1.18 -1.024 1.852q -.283 .684 -.66 2.216a3 3 0 0 1 -1.624 1.623q -1.572 .394 -2.216 .661q -.712 .295 -1.852 1.024a3 3 0 0 1 -2.296 0q -1.203 -.754 -1.852 -1.024q -.707 -.292 -2.216 -.66a3 3 0 0 1 -1.623 -1.624q -.397 -1.577 -.661 -2.216q -.298 -.718 -1.024 -1.852a3 3 0 0 1 0 -2.296q .719 -1.116 1.024 -1.852q .257 -.62 .66 -2.216a3 3 0 0 1 1.624 -1.623q 1.547 -.384 2.216 -.661q .687 -.285 1.852 -1.024a3 3 0 0 1 2.296 0" /></svg>`,
        "cloud_network": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cloud-network"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 20h7" /><path d="M14 20h7" /><path d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12 16v2" /><path d="M8 16.004h-1.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-2.535" /></svg>`,
        "code": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>`,
        "send": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>`,
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
                <th>${key}</th>
                <td>${data[key]}</td>
                </tr>
            `).join('')}
            </tbody>
            </table>
            </div>
        `;
    }

    function css() {
        const baseCss = `
            /* ------------------------------------------------
            // 顏色相關
            // ------------------------------------------------ */
            body { background: #fafafa; }
            .card-border{background: #fff;border-color: #ddd;}
            pre{background: #fff;border-color: #ddd;}
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
            h1{color: #f6821f;}

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

        @media (prefers-color-scheme: dark) {
            body { background: #303341; color: white;}
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
        }



            /* ------------------------------------------------
            // 排版相關
            // ------------------------------------------------ */
            /* 1️⃣ 設定父容器為 Grid */
            body{padding:0.5rem;}
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
            form.form-example {
            display: table;
            }

            div.form-example {
            display: table-row;
            }

            label,
            input {
            display: table-cell;
            margin-bottom: 10px;
            }

            label {
            padding-right: 10px;
            }
            #main {margin-top: 1rem;}

            .hide{display:none;}
            body{font-family:system-ui,sans-serif;}
            pre{padding:1em;border-width:1px;border-style:solid;overflow:auto;}
            h2,h3 {margin-top:0;}
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
            }

            table th {
                text-align: left;
                font-weight: 500;
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
            `;

        const prismJsContent = `/* PrismJS 1.30.0
https://prismjs.com/download#themes=prism-tomorrow&languages=bash+json */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var n=/(?:^|\\s)lang(?:uage)?-([\\w-]+)(?=\\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var l in r={},t[i]=r,n)n.hasOwnProperty(l)&&(r[l]=e(n[l],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if(document.currentScript&&"SCRIPT"===document.currentScript.tagName)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\\r\\n]*\\((.*):[^:]+:[^:]+\\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=i[o])}var u=r[e];return r[e]=l,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=l)})),l},DFS:function e(n,t,r,i){i=i||{};var l=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||i[l(s)]?"Array"!==u||i[l(s)]||(i[l(s)]=!0,e(s,t,o,i)):(i[l(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,l=0;i=r.elements[l++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),l=a.languages[i];a.util.setLanguage(n,i);var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&a.util.setLanguage(o,i);var s={element:n,language:i,grammar:l,code:n.textContent};function u(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(o=s.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(a.highlight(s.code,s.grammar,s.language));else u(a.util.encode(s.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new s;return u(a,a.head,e),o(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function l(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,n,t,r,s,g){for(var f in t)if(t.hasOwnProperty(f)&&t[f]){var h=t[f];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(g&&g.cause==f+","+d)return;var v=h[d],p=v.inside,m=!!v.lookbehind,y=!!v.greedy,k=v.alias;if(y&&!v.pattern.global){var x=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,x+"g")}for(var b=v.pattern||v,w=r.next,A=s;w!==n.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var P=w.value;if(n.length>e.length)return;if(!(P instanceof i)){var E,S=1;if(y){if(!(E=l(b,A,e,m))||E.index>=e.length)break;var L=E.index,O=E.index+E[0].length,C=A;for(C+=w.value.length;L>=C;)C+=(w=w.next).value.length;if(A=C-=w.value.length,w.value instanceof i)continue;for(var j=w;j!==n.tail&&(C<O||"string"==typeof j.value);j=j.next)S++,C+=j.value.length;S--,P=e.slice(A,C),E.index-=A}else if(!(E=l(b,0,P,m)))continue;L=E.index;var N=E[0],_=P.slice(0,L),M=P.slice(L+N.length),W=A+P.length;g&&W>g.reach&&(g.reach=W);var I=w.prev;if(_&&(I=u(n,I,_),A+=_.length),c(n,I,S),w=u(n,I,new i(f,p?a.tokenize(N,p):N,k,N)),M&&u(n,w,M),S>1){var T={cause:f+","+d,reach:W};o(e,n,t,w.prev,A,T),g&&T.reach>g.reach&&(g.reach=T.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),a.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,l=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),l&&e.close()}),!1),a):a;var g=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&g&&g.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
!function(e){var t="\\\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\\\b",a={pattern:/(^(["']?)\\w+\\2)[ \\t]+\\S.*/,lookbehind:!0,alias:"punctuation",inside:null},n={bash:a,environment:{pattern:RegExp("\\\\$"+t),alias:"constant"},variable:[{pattern:/\\$?\\(\\([\\s\\S]+?\\)\\)/,greedy:!0,inside:{variable:[{pattern:/(^\\$\\(\\([\\s\\S]+)\\)\\)/,lookbehind:!0},/^\\$\\(\\(/],number:/\\b0x[\\dA-Fa-f]+\\b|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:[Ee]-?\\d+)?/,operator:/--|\\+\\+|\\*\\*=?|<<=?|>>=?|&&|\\|\\||[=!+\\-*/%<>^&|]=?|[?~:]/,punctuation:/\\(\\(?|\\)\\)?|,|;/}},{pattern:/\\$\\((?:\\([^)]+\\)|[^()])+\\)|\`[^\`]+\`/,greedy:!0,inside:{variable:/^\\$\\(|^\`|\\)$|\`$/}},{pattern:/\\$\\{[^}]+\\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\\/]|##?|%%?|\\^\\^?|,,?/,punctuation:/[\\[\\]]/,environment:{pattern:RegExp("(\\\\{)"+t),lookbehind:!0,alias:"constant"}}},/\\$(?:\\w+|[#?*!@$])/],entity:/\\\\(?:[abceEfnrtv\\\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\\s*\\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\\bfunction\\s+)[\\w-]+(?=(?:\\s*\\(?:\\s*\\))?\\s*\\{)/,lookbehind:!0,alias:"function"},{pattern:/\\b[\\w-]+(?=\\s*\\(\\s*\\)\\s*\\{)/,alias:"function"}],"for-or-select":{pattern:/(\\b(?:for|select)\\s+)\\w+(?=\\s+in\\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\\s;|&]|[<>]\\()\\w+(?:\\.\\w+)*(?=\\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\\\s;|&]|[<>]\\\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\\s)-{1,2}(?:\\w+:[+-]?)?\\w+(?:\\.\\w+)*(?=[=\\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\\s*)(\\w+)\\s[\\s\\S]*?(?:\\r?\\n|\\r)\\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\\s*)(["'])(\\w+)\\2\\s[\\s\\S]*?(?:\\r?\\n|\\r)\\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\\\](?:\\\\\\\\)*)"(?:\\\\[\\s\\S]|\\$\\([^)]+\\)|\\$(?!\\()|\`[^\`]+\`|[^"\\\\\`$])*"/,lookbehind:!0,greedy:!0,inside:n},{pattern:/(^|[^$\\\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\\$'(?:[^'\\\\]|\\\\[\\s\\S])*'/,greedy:!0,inside:{entity:n.entity}}],environment:{pattern:RegExp("\\\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\\s;|&]|[<>]\\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\\s;|&]|[<>]\\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\\s;|&]|[<>]\\()(?:\\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\\s;|&]|[<>]\\()(?:false|true)(?=$|[)\\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\\B&\\d\\b/,alias:"important"},operator:{pattern:/\\d?<>|>\\||\\+=|=[=~]?|!=?|<<[<-]?|[&\\d]?>>|\\d[<>]&?|[<>][&=]?|&[>&]?|\\|[&|]?/,inside:{"file-descriptor":{pattern:/^\\d/,alias:"important"}}},punctuation:/\\$?\\(\\(?|\\)\\)?|\\.\\.|[{}[\\];\\\\]/,number:{pattern:/(^|\\s)(?:[1-9]\\d*|0)(?:[.,]\\d+)?\\b/,lookbehind:!0}},a.inside=e.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],o=n.variable[1].inside,i=0;i<s.length;i++)o[s[i]]=e.languages.bash[s[i]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash}(Prism);
Prism.languages.json={property:{pattern:/(^|[^\\\\])"(?:\\\\.|[^\\\\"\\r\\n])*"(?=\\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\\\])"(?:\\\\.|[^\\\\"\\r\\n])*"(?!\\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\\/\\/.*|\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,greedy:!0},number:/-?\\b\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?\\b/i,punctuation:/[{}[\\],]/,operator:/:/,boolean:/\\b(?:false|true)\\b/,null:{pattern:/\\bnull\\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json;
`;
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

        const highlight = ''
            +`<script>${prismJsContent}</script>`
            +`<style>${prismCssContent}</style>`
            // +`<style>${purecssContent}</style>`
        ;
        return '<style>'
                +baseCss
                +'</style>'
                +highlight;
    }

    function none() {
        return `
            <div class="none">
                ${tabler_icons_html.variable_off}&nbsp;&lt;none&gt;
            </div>
        `;
    }

    function pageA() {
        return `
        <!DOCTYPE html>
        <html lang="zh-Hant">
        <head>
            <meta charset="UTF-8">
            <title>Echo Server</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            `+css()+`
        </head>
        <body>
        `
    }

    function pageB() {
        return `
        </div>
        </body>
        </html>
        `;
    }

    function footer() {
        return `
        <div>
            <p>Icons: https://tabler.io/icons</p>
            <p>本網頁是以 Yuan Chiu 構建的，並部署在Cloudflare Workers</p>
        </div>
        `
    }

    function host({hostname, ip, ips, colo, country, city, continent, latitude, longitude, asn, asOrganization, isEUCountry, postalCode, metroCode, region, regionCode, timezone} = {}) {

        const outputhtml = `
                    <h2>${tabler_icons_html.cloud_network} Host</h2>

                    <ul>
                        <li>IP: ${ip}</li>
                        ${ips      ? `<li>ips: ${ips}</li>`           : ""}
                        <li>hostname: ${hostname}</li>
                    </ul>

                    <ul>
                    ${colo          ? `<li>Colo: ${colo}</li>`           : ""}
                    ${country       ? `<li>Country: ${country}</li>`     : ""}
                    ${city          ? `<li>City: ${city}</li>`           : ""}
                    ${continent     ? `<li>Continent: ${continent}</li>` : ""}
                    ${latitude      ? `<li>Latitude: ${latitude}</li>`   : ""}
                    ${longitude     ? `<li>Longitude: ${longitude}</li>` : ""}
                    ${asn           ? `<li>ASN: ${asn}</li>` : ""}
                    ${asOrganization? `<li>As Organization: ${asOrganization}</li>` : ""}
                    ${isEUCountry   ? `<li>Is EU Country: ${isEUCountry}</li>` : ""}
                    ${postalCode    ? `<li>Postal Code: ${postalCode}</li>` : ""}
                    ${metroCode     ? `<li>Metro Code: ${metroCode}</li>` : ""}
                    ${region        ? `<li>Region: ${region}</li>`       : ""}
                    ${regionCode    ? `<li>Region Code: ${regionCode}</li>` : ""}
                    ${timezone      ? `<li>Timezone: ${timezone}</li>`   : ""}
                    </ul>
                `;

        return outputhtml;

    }

    function endpointBar(responseBody) {
        return `<div class="endpoint-bar ${responseBody.http.method}">
                        <span class="method-badge ${responseBody.http.method}">${responseBody.http.method}</span>
                        <span class="url-path">${responseBody.http.protocol}://${responseBody.host.hostname}${responseBody.http.originalUrl}</span>
                </div>
                <div id="url-table">
                    <div class="table-container">
                    <table>
                        <tbody>
                        <tr><th>Method</th><td><span class="method-badge ${responseBody.http.method}">${responseBody.http.method}</span></td></tr>
                            <tr><th>BaseUrl</th><td>${responseBody.http.baseUrl}</td></tr>
                            <tr><th>OriginalUrl</th><td>${responseBody.http.originalUrl}</td></tr>
                            <tr><th>Protocol</th><td>${responseBody.http.protocol}</td></tr>
                        </tbody>
                    </table>
                    </div>
                </div>`;
    }

    function main(responseBody) {
        return `
            <div class="container">
                <div class="col-lg-8">
                <h2 class="hide">Request</h2>

                    <div class="container">
                        <div class="col-6 card card-border">
                            <h3>${tabler_icons_html.link} URL Params</h3>
                            ${Object.keys(responseBody.request.params).length === 0 ? none() : `
                            <div class="urltext">
                            <span class="firstchar">/</span>${Object.entries(responseBody.request.params).map(([key, value]) => `<span class="li" style="list-style-type: symbols;"><span class="part">${value}</span>`).join(`<span class="split">/</span></span>`)}
                            </div>`}
                        </div>
                        <div class="col-6 card card-border">
                            <h3>${tabler_icons_html.link} URL Query</h3>
                            ${Object.keys(responseBody.request.query).length === 0 ? none() : `
                            <div class="urltext">
                            <span class="firstchar">?</span>${Object.entries(responseBody.request.query).map(([key, value]) => `<span class="li"><span class="part"><span class="key">${key}</span><span class="kvsplit">=</span>${value}</span>`).join(`<span class="split">&</span></span>`)}
                            </div>`}
                        </div>
                    </div>

                    <div class="card card-border">
                        <h3>${tabler_icons_html.file} Post Body</h3>

                        ${responseBody.request.bodyRaw      ? `
                            <pre><code class="language-json">${responseBody.request.bodyRaw}</code></pre>
                            `: none()}

                    </div>
                    <div class="card card-border">
                        <h3>${tabler_icons_html.cookie} Cookies</h3>
                        ${objectToTable(responseBody.request.cookies)}

                    </div>
                    <div class="card card-border">
                        <h3>${tabler_icons_html.http_head} Header</h3>
                        ${objectToTable(responseBody.request.headers)}
                    </div>
                </div>

                <div class="col-lg-4 card card-border">
                    <div class="">
                        ${host(responseBody.host)}
                    </div>`+
                    // '<div class="card card-border">'+
                    //     '<h2>'+tabler_icons_html.send+' Test POST Request</h2>'+
                    //     form()+
                    // '</div>'+
                `</div>

            </div>

        `;
    }

    function form() {
        return `
            <form method="post" class="pure-form">
                <h4>Payment form</h4>
                <section>
                <h5>Contact information</h5>
                <fieldset>
                    <legend>Title</legend>
                    <ul>
                    <li>
                        <label for="title_1">
                        <input type="radio" id="title_1" name="title" value="A" />
                        Ace
                        </label>
                    </li>
                    <li>
                        <label for="title_2">
                        <input type="radio" id="title_2" name="title" value="K" />
                        King
                        </label>
                    </li>
                    <li>
                        <label for="title_3">
                        <input type="radio" id="title_3" name="title" value="Q" />
                        Queen
                        </label>
                    </li>
                    </ul>
                </fieldset>
                <p>
                    <label for="name">Name *:</label>
                    <input type="text" id="name" name="username" />
                </p>
                <p>
                    <label for="mail">Email *:</label>
                    <input type="email" id="mail" name="user-mail" />
                </p>
                <p>
                    <label for="pwd">Password *:</label>
                    <input type="password" id="pwd" name="password" />
                </p>
                </section>
                <section>
                <h5>Payment information</h5>
                <p>
                    <label for="card">
                    <span>Card type:</span>
                    </label>
                    <select id="card" name="user-card">
                    <option value="visa">Visa</option>
                    <option value="mc">Mastercard</option>
                    <option value="amex">American Express</option>
                    </select>
                </p>
                <p>
                    <label for="number">Card number *:</label>
                    <input type="tel" id="number" name="card-number" />
                </p>
                <p>
                    <label for="expiration">Expiration date *:</label>
                    <input
                    type="text"
                    id="expiration"
                    name="expiration"
                    placeholder="MM/YY"
                    pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
                </p>

                <fieldset class="pure-group">
                    <input type="text" class="pure-input-1-2" placeholder="A title" />
                    <textarea class="pure-input-1-2" placeholder="Textareas work too"></textarea>
                </fieldset>
                </section>
                <section>
                <p>
                    <button class="pure-button pure-button-primary" type="submit">Validate the payment</button>
                </p>
                </section>
            </form>
        `;
    }

    function curl(data) {
        return `<h2>curl</h2>
            <pre><code class="language-bash">${data}</code></pre>`;
    }
    function wget(data) {
        return `<h2>wget</h2>
            <pre><code class="language-bash">${data}</code></pre>`;
    }

    const output = pageA()
        +'<h1>Yuan 的 HTTP Echo Server</h1>'
        // +'<div class="card">'+main(data.responseBody)+'</div>'

        +endpointBar(data.responseBody)

        +'<div id="main">'
        +'<div class="container">'
            +'<div class="col-12">'
                +main(data.responseBody)
            +'</div>'

            // 輸出shell範例
            // +'<div class="col-6 card card-border">'+curl(data.curlText)+'</div>'
            // +'<div class="col-6 card card-border">'+wget(data.wgetText)+'</div>'
            +'</div>'

            +'<div class="card card-border">'
            +`<h2>${tabler_icons_html.code} Raw Response Body</h2>`
            +`<pre><code class="language-json">${JSON.stringify(data.responseBody, null, 2)}</code></pre>`
        +'</div>'
        +'</div>'

        +`<div id="footer">
            ${footer()}
        </div>`
        +pageB();
    return output;
}

export { generateHtml };
