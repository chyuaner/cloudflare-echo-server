function generateHtml(data) {

    function css() {
        const baseCss = `
            /* 1️⃣ 設定父容器為 Grid */
            .container {
                display: grid;                     /* 啟用 Grid */
                grid-template-columns: repeat(12, 1fr);   /* 12 等分的欄 */
                gap: 16px;                         /* 欄位之間的間距 */
            }

            /* 2️⃣ 子項目使用 span 來跨欄 */
            .col-1   { grid-column: span 12; }
            .col-2   { grid-column: span 12; }
            .col-3   { grid-column: span 12; }
            .col-4   { grid-column: span 12; }
            .col-5   { grid-column: span 12; }
            .col-6   { grid-column: span 12; }

            @media (min-width: 640px) {
                .col-1 { grid-column: span 1; }   /* 1 欄 */
                .col-2 { grid-column: span 2; }   /* 2 欄 */
                .col-3 { grid-column: span 3; }   /* 3 欄 */
                .col-4 { grid-column: span 4; }   /* 4 欄 */
                .col-5 { grid-column: span 5; }   /* 5 欄 */
                .col-6 { grid-column: span 6; }   /* 6 欄 */
            }

            body{font-family:system-ui,sans-serif;padding:2em;background:#fafafa;}
            pre{background:#fff;padding:1em;border:1px solid #ddd;overflow:auto;}
            h1{color:#f6821f;}
        `;

        const highlight = `
            <script src="./prism.js"></script>
            <link rel="stylesheet" href="./prism.css">
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

    function main(responseBody) {
        return `
        <div class="col-6">
            <h1>Echo Server</h1>
            <pre><code class="language-json">${JSON.stringify(responseBody, null, 2)}</code></pre>
        </div>
        `;
    }

    function curl(data) {
        return `<div class="col-3">
            <h2>curl</h2>
            <pre><code class="language-bash">${data}</code></pre>
        </div>`;
    }
    function wget(data) {
        return `<div class="col-3">
            <h2>wget</h2>
            <pre><code class="language-bash">${data}</code></pre>
        </div>`;
    }

    const output = pageA()
                    +main(data.responseBody)
                    +'<div class="container">'
                    +curl(data.curlText)
                    +wget(data.wgetText)
                    +'</div>'
                    +pageB();
    return output;
}

export { generateHtml };
