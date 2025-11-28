function generateHtml(data) {

    function css() {
        const baseCss = `
            /* 1️⃣ 設定父容器為 Grid */
            body{padding:0.5rem;}
            .container {
                display: grid;                     /* 啟用 Grid */
                grid-template-columns: repeat(12, 1fr);   /* 12 等分的欄 */
                gap: 0.5rem;                         /* 欄位之間的間距 */
            }
            .card{margin:0.5rem;padding:1rem;}
            .card-border{background:#fff;border:1px solid #ddd;}

            /* 2️⃣ 子項目使用 span 來跨欄 */
            .col-1   { grid-column: span 12; }
            .col-2   { grid-column: span 12; }
            .col-3   { grid-column: span 12; }
            .col-4   { grid-column: span 12; }
            .col-5   { grid-column: span 12; }
            .col-6   { grid-column: span 12; }
            .col-9   { grid-column: span 12; }

            @media (min-width: 640px) {
                body{padding:2em;}
                .card{margin:0.5rem;padding:1rem;}

                .col-1 { grid-column: span 1; }
                .col-2 { grid-column: span 2; }
                .col-3 { grid-column: span 3; }
                .col-4 { grid-column: span 4; }
                .col-5 { grid-column: span 5; }
                .col-6 { grid-column: span 6; }
                .col-9 { grid-column: span 9; }
            }

            body{font-family:system-ui,sans-serif;background:#fafafa;}
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
        <div>
            <pre><code class="language-json">${JSON.stringify(responseBody, null, 2)}</code></pre>
        </div>
        `;
    }
    function mainTpl(responseBody) {
        return `
            <div class="card card-border">
                    <h2>http</h2>
                    "method": "GET", <br>
                    "baseUrl": "https://cloudflare-echo-server.chyuaner.workers.dev",<br>
                    "originalUrl": "/",<br>
                    "protocol": "https"<br>
            </div>

            <div class="container">
                <div class="col-6 card card-border">
                <h2>request</h2>

                    <div class="container">
                        <div class="col-6 card-border">
                            <h3>params</h3>
                        </div>
                        <div class="col-6 card-border">
                            <h3>query</h3>
                        </div>
                    </div>

                    <div class="card-border">
                        <h3>Body</h3>
                    </div>
                    <div class="card-border">
                        <h3>Cookies</h3>
                    </div>
                    <div class="card-border">
                        <h3>Header</h3>
                    </div>
                </div>
                <div class="col-6 card card-border">
                    <h2>host</h2>
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
                        +'<div class="col-9">'
                        +mainTpl(data.responseBody)
                        +'</div>'
                        +'<div class="col-3">'
                        +'<div class="card card-border">'
                        +'<h2>Input</h2>'
                        +'</div>'
                        +'</div>'
                        // +'<div class="col-6 card card-border">'+curl(data.curlText)+'</div>'
                        // +'<div class="col-6 card card-border">'+wget(data.wgetText)+'</div>'
                    +'</div>'

                    +'<div class="card card-border">'
                    +'<h3>Raw Data</h3>'
                    +`<pre><code class="language-json">${JSON.stringify(data.responseBody, null, 2)}</code></pre>`

                    +'</div>'

                    +pageB();
    return output;
}

export { generateHtml };
