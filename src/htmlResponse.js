/**
 * 產生 HTML 版的回應。
 *
 * @param {object} responseBody   - 先前組好的 JSON 物件（要顯示在 <pre> 裡）。
 * @param {Headers} responseHeaders - 已建立好的回傳 Header（至少包含 content‑type）。
 * @returns {Response}  - 完整的 Response 物件。
 */
export function renderHTMLResponse(responseBody, responseHeaders) {
  const html = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>Echo Server – JSON 資料</title>
  <style>
    body{font-family:system-ui,sans-serif;padding:2em;background:#fafafa;}
    pre{background:#fff;padding:1em;border:1px solid #ddd;overflow:auto;}
    h1{color:#f6821f;}
  </style>
</head>
<body>
  <h1>Echo Server – JSON 資料</h1>
  <pre>${JSON.stringify(responseBody, null, 2)}</pre>
</body>
</html>`;

  // 必要的 Header 已在 responseHeaders 中，這裡直接傳入
  return new Response(html, { headers: responseHeaders });
}