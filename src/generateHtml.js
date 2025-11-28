function generateHtml(data) {

    function objectToTable(data) {
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
            /* 1️⃣ 設定父容器為 Grid */
            body{padding:0.5rem;}
            ul {padding-left:1em;}
            li {padding: 0.5em 0;}
            .container {
                display: grid;                     /* 啟用 Grid */
                grid-template-columns: repeat(12, 1fr);   /* 12 等分的欄 */
                gap: 0.5rem;                         /* 欄位之間的間距 */
            }
            .card{margin:0.5rem;padding:1rem;}
            .card-border{background:#fff;border:1px solid #ddd;}
            td,li {word-break: break-all;}

            /* 2️⃣ 子項目使用 span 來跨欄 */
            .col-1   { grid-column: span 12; }
            .col-2   { grid-column: span 12; }
            .col-3   { grid-column: span 12; }
            .col-lg-3 { grid-column: span 12; }
            .col-4   { grid-column: span 12; }
            .col-5   { grid-column: span 12; }
            .col-6   { grid-column: span 12; }
            .col-8   { grid-column: span 12; }
            .col-9   { grid-column: span 12; }
            .col-lg-9 { grid-column: span 12; }
            .col-12   { grid-column: span 12; }

            @media (min-width: 640px) {
                .card{margin:0.5rem;padding:1rem;}

                .col-1 { grid-column: span 1; }
                .col-2 { grid-column: span 2; }
                .col-3 { grid-column: span 3; }
                .col-lg-3 { grid-column: span 12; }
                .col-4 { grid-column: span 4; }
                .col-5 { grid-column: span 5; }
                .col-6 { grid-column: span 6; }
                .col-8 { grid-column: span 8; }
                .col-9 { grid-column: span 9; }
                .col-lg-9 { grid-column: span 12; }
                .col-12 { grid-column: span 12; }
            }
            @media (min-width: 1024px) {
                body{padding:2em;}
                ul {padding-left:2.5em;}
                .col-1 { grid-column: span 1; }
                .col-2 { grid-column: span 2; }
                .col-3 { grid-column: span 3; }
                .col-lg-3 { grid-column: span 3; }
                .col-4 { grid-column: span 4; }
                .col-5 { grid-column: span 5; }
                .col-6 { grid-column: span 6; }
                .col-8 { grid-column: span 8; }
                .col-9 { grid-column: span 9; }
                .col-lg-9 { grid-column: span 9; }
                .col-12 { grid-column: span 12; }
            }

            body{font-family:system-ui,sans-serif;background:#fafafa;}
            pre{background:#fff;padding:1em;border:1px solid #ddd;overflow:auto;}
            h2,h3 {margin-top:0;}

            .table-container {
                background: light-dark(#fff, #000);
                overflow: auto;
                border: 1px solid color-mix(in oklch, canvas, canvasText 15%);
                border-radius: 6px;

            }
            table {
                width: 100%;
                border-collapse: collapse;
                background: #0000;
                color: color-mix(in hsl, canvasText, #0000 30%);
            }
            thead {
                background: light-dark(hsl(0 0% 95%), canvas);
            }
            tr {
                transition-property: filter, background, opacity;
                transition-duration: 0.2s;
                transition-timing-function: ease-out;

                &:not(:last-of-type) {
                border-bottom: 1px solid light-dark(hsl(0 0% 80%), canvas);
                }
            }
            th {background: light-dark(hsl(0 0% 95%), canvas);}
            @media (min-width: 640px) {
                th {background: none;}
            }
            td {
                font-weight: 300;
            }
            tbody tr:hover {
                background: light-dark(hsl(0 0% 90%), canvas);;
            }

            thead {display:none;}
            th,td {
                padding: 0.5rem;
                display: block;
                // width: 100%;
            }
            @media (min-width: 640px) {
                thead {display:table-header-group;}
                th,td {
                    display: table-cell;
                    // width: inherit;
                }
            }

            table th {
                text-align: left;
                font-weight: 500;
                color: color-mix(in hsl, canvasText, #0000 5%);
            }

            tbody tr {

            }

            h1{color:#f6821f;}

            /* urltext網址結構項目化 */
            .urltext {margin-left:1em;margin-bottom:-1em;}
            .urltext .li {
            display: inline-block;
            vertical-align: middle;
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
                background: #dbeafe;
                border: 1px solid #bfdbfe;
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
            .endpoint-bar.GET { background: rgba(97, 175, 254, 0.1); border-color: #61affe; }
            .endpoint-bar.POST { background: rgba(73, 204, 144, 0.1); border-color: #49cc90; }
            .endpoint-bar.PUT { background: rgba(252, 161, 48, 0.1); border-color: #fca130; }
            .endpoint-bar.DELETE { background: rgba(249, 62, 62, 0.1); border-color: #f93e3e; }
            .endpoint-bar.PATCH { background: rgba(80, 227, 194, 0.1); border-color: #50e3c2; }
            .endpoint-bar.HEAD { background: rgba(144, 18, 254, 0.1); border-color: #9012fe; }
            .endpoint-bar.OPTIONS { background: rgba(13, 90, 167, 0.1); border-color: #0d5aa7; }

            .method-badge.GET { background: #61affe; }
            .method-badge.POST { background: #49cc90; }
            .method-badge.PUT { background: #fca130; }
            .method-badge.DELETE { background: #f93e3e; }
            .method-badge.PATCH { background: #50e3c2; }
            .method-badge.HEAD { background: #9012fe; }
            .method-badge.OPTIONS { background: #0d5aa7; }
            .url-path {
                color: #1e293b;
                font-weight: 600;
                font-size: 1rem;
                word-break: break-all;
            }
            `;

        const highlight = `
            <script src="/prism.js"></script>
            <link rel="stylesheet" href="/prism.css">
        `;
        return '<style>'
                +baseCss
                +'</style>'
                +highlight;
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

    function host({hostname, ip, ips, colo, country, city, continent, latitude, longitude, postalCode, metroCode, region, regionCode, timezone} = {}) {

        const outputhtml = `
                    <h2>host</h2>

                    <ul>
                        <li>hostname: ${hostname}</li>
                        <li>IP: ${ip}</li>
                        ${ips      ? `<li>ips: ${ips}</li>`           : ""}
                    </ul>

                    <ul>
                    ${colo      ? `<li>Colo: ${colo}</li>`           : ""}
                    ${country   ? `<li>Country: ${country}</li>`     : ""}
                    ${city      ? `<li>City: ${city}</li>`           : ""}
                    ${continent ? `<li>Continent: ${continent}</li>` : ""}
                    ${latitude  ? `<li>Latitude: ${latitude}</li>`   : ""}
                    ${longitude ? `<li>Longitude: ${longitude}</li>` : ""}
                    ${postalCode? `<li>Postal Code: ${postalCode}</li>` : ""}
                    ${metroCode ? `<li>Metro Code: ${metroCode}</li>` : ""}
                    ${region    ? `<li>Region: ${region}</li>`       : ""}
                    ${regionCode? `<li>Region Code: ${regionCode}</li>` : ""}
                    ${timezone  ? `<li>Timezone: ${timezone}</li>`   : ""}
                    </ul>
                `;

        return outputhtml;

    }

    function main(responseBody) {
        return `
            <div class="endpoint-bar ${responseBody.http.method}">
                    <span class="method-badge ${responseBody.http.method}">${responseBody.http.method}</span>
                    <span class="url-path">${responseBody.http.protocol}://${responseBody.host.hostname}${responseBody.http.originalUrl}</span>
            </div>
            <div class="card-border">
                <div class="table-container">
                <table>
                    <tbody>
                    <tr><th>Method</th><td>${responseBody.http.method}</td></tr>
                        <tr><th>BaseUrl</th><td>${responseBody.http.baseUrl}</td></tr>
                        <tr><th>OriginalUrl</th><td>${responseBody.http.originalUrl}</td></tr>
                        <tr><th>Protocol</th><td>${responseBody.http.protocol}</td></tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div class="container">
                <div class="col-8">
                <h2>request</h2>

                    <div class="container">
                        <div class="col-6 card card-border">
                            <h3>params</h3>
                            <div class="urltext">
                            <span class="firstchar">/</span>${Object.entries(responseBody.request.params).map(([key, value]) => `<span class="li" style="list-style-type: symbols;"><span class="part">${value}</span>`).join(`<span class="split">/</span></span>`)}
                            </div>
                        </div>
                        <div class="col-6 card card-border">
                            <h3>query</h3>
                            <div class="urltext">
                            <span class="firstchar">?</span>${Object.entries(responseBody.request.query).map(([key, value]) => `<span class="li"><span class="part"><span class="key">${key}</span><span class="kvsplit">=</span>${value}</span>`).join(`<span class="split">&</span></span>`)}
                            </div>
                        </div>
                    </div>

                    <div class="card card-border">
                        <h3>Body</h3>

                        ${responseBody.request.bodyRaw      ? `
                            <pre><code class="language-json">${responseBody.request.bodyRaw}</code></pre>
                            `: "none"}

                    </div>
                    <div class="card card-border">
                        <h3>Cookies</h3>
                        ${objectToTable(responseBody.request.cookies)}

                    </div>
                    <div class="card card-border">
                        <h3>Header</h3>
                        ${objectToTable(responseBody.request.headers)}
                    </div>
                </div>

                <div class="col-4 card card-border">
                    ${host(responseBody.host)}
                </div>
            </div>

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
                    +'<h1>Echo Server</h1>'
        // +'<div class="card">'+main(data.responseBody)+'</div>'

                    +'<div class="container">'
        // +'<div class="col-lg-9">'
                        +'<div class="col-12">'
                            +main(data.responseBody)
                        +'</div>'

        // 顯示Form測試區
        // +'<div class="col-lg-3">'
                        +'<div class="col-12">'
                            +'<div class="card card-border">'
                            +'<h2>Input</h2>'
                            +'</div>'
                        +'</div>'

        // 輸出shell範例
        // +'<div class="col-6 card card-border">'+curl(data.curlText)+'</div>'
        // +'<div class="col-6 card card-border">'+wget(data.wgetText)+'</div>'
                    +'</div>'

                    +'<div class="card card-border">'
                    +'<h3>Raw Response Body</h3>'
                    +`<pre><code class="language-json">${JSON.stringify(data.responseBody, null, 2)}</code></pre>`

                    +'</div>'

                    +pageB();
    return output;
}

export { generateHtml };
