export function generateCurl(response) {
  // 取得 http、request（含 headers、bodyRaw）資訊
  const { http, request } = response;
  const headersObj = request?.headers || {};

  // 產生 `--header='key: value' \\` 的字串（每筆以換行分隔）
  const headers = Object.entries(headersObj)
    .map(([key, value]) => `--header='${key}: ${value}' \\`)
    .join('\n  ');

  // 若有 bodyRaw 才加入 `--data-raw`，同樣在行尾加上 `\\`
  const body = request?.bodyRaw ? `--data-raw '${request.bodyRaw}' \\` : '';

  // 若 body 為空，移除最後多餘的換行與空格
  const bodySection = body ? `  ${body}\n` : '';

  return `curl --request ${http.method} \\
  --url '${http.originalUrl}' \\
  ${headers}
${bodySection}`;
}
