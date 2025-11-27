export function generateWget(response) {
  const { http, request } = response;
  const headersObj = request?.headers || {};

  // 產生 --header='key: value' 的字串，項目間以空格分隔
  const headers = Object.entries(headersObj)
    .map(([key, value]) => `--header='${key}: ${value}'`)
    .join(' ');

  const body = request?.bodyRaw ? `--body-data='${request.bodyRaw}'` : '';

  return `
wget --method=${http.method} \\
  ${headers}
  ${body}
  '${http.originalUrl}'
`;
}
