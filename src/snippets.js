import { CurlGenerator } from "curl-generator";

function generateCurl(response) {
  // 1. 完整 URL（protocol + hostname + originalUrl）
  const url = `${response.http.protocol}://${response.host.hostname}${response.http.originalUrl}`;

  // 2. HTTP 方法（若有 echo_method 會在 core.js 內部改寫，直接使用最終 method）
  const method = response.http.method?.toUpperCase() ?? "GET";

  // 3. 請求 Header（保留原始 Header，若有需要可自行過濾）
  const headers = Object.entries(response.request.headers).reduce((acc, [k, v]) => {
    // cURL 只接受字串型別的 Header
    acc[k] = String(v);
    return acc;
  }, {});

  // 4. Body 內容
  //    - 若 body 為物件（JSON）直接 JSON.stringify
  //    - 若為字串則直接使用
  //    - 若為空則不加入 body 參數
  // let body = null;
  // if (typeof response.request.body === "object" && response.request.body !== null) {
  //   try {
  //     body = JSON.stringify(response.request.body);
  //   } catch (_) {
  //     body = null;
  //   }
  // } else if (typeof response.request.body === "string") {
  //   body = response.request.body;
  // }
  let body = null;
  if (response.request.bodyRaw !== null && response.request.bodyRaw != '' ) {
    body = response.request.bodyRaw;
  }

  // 5. 使用 CurlGenerator（或自行組合字串）產生 cURL 指令
  //    若專案沒有外部 CurlGenerator 套件，可改成直接組字串。
  const curlSnippet = CurlGenerator({
    url: url,
    method: method,
    headers: headers,
    // 只在有 body 時才加入
    ...(body !== null && {
      body: {
        type: "raw",
        content: body,
      },
    }),
  });

  return curlSnippet;
}

export function generateWget(response) {
  const { http, request } = response;
  const headersObj = request?.headers || {};

  // 產生 --header='key: value' 的字串，項目間以空格分隔
  const headers = Object.entries(headersObj)
    .map(([key, value]) => `--header='${key}: ${value}'`)
    .join(' ');

  const body = request?.bodyRaw ? `--body-data='${request.bodyRaw}'` : '';

  return `wget --method=${http.method} \\
  ${headers}
  ${body}
  '${http.originalUrl}'
`;
}


export {generateCurl};
