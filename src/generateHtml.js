function generateHtml(data) {

    function css() {
        const baseCss = `
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

    function header() {
        return `
        <!DOCTYPE html>
        <html lang="zh-Hant">
        <head>
            <meta charset="UTF-8">
            <title>Echo Server – JSON 資料</title>
            `+css()+`
        </head>
        <body>
        `
    }

    function main(responseBody) {
        return `
            <h1>Echo Server – JSON 資料</h1>
            <pre><code class="language-json">${JSON.stringify(responseBody, null, 2)}</code></pre>
        `;
    }

    function curl(data) {
        return `
            <h2>curl</h2>
            <pre><code class="language-bash">${data}</code></pre>
        `;
    }
    function wget(data) {
        return `
            <h2>wget</h2>
            <pre><code class="language-bash">${data}</code></pre>
        `;
    }

    function footer() {
        return `
        </body>
        </html>
        `;
    }

    const output = header()
                    +main(data.responseBody)
                    +curl(data.curlText)
                    +wget(data.wgetText)
                    +footer();
    return output;
}

export { generateHtml };
