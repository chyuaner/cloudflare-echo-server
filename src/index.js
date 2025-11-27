export default {
  async fetch(request) {
    // 解析 URL 與查詢字串
    const url = new URL(request.url);
    const query = Object.fromEntries(url.searchParams.entries());

    // 解析路徑參數（這裡簡單把第一段作為 0 號參數）
    const params = { "0": url.pathname.split("/").filter(Boolean)[0] ?? "" };

    // 取得 request headers
    const headers = {};
    for (const [k, v] of request.headers.entries()) {
      headers[k] = v;
    }

    // 取得 client IP（Cloudflare 會在 cf 中提供）
    const cf = request.cf || {};
    const clientIp = cf.ip || cf.colo || "";   // fallback for local testing

    // 建立回傳的 JSON 物件
    const responseBody = {
      http: {
        method: request.method,
        baseUrl: `${url.protocol}//${url.host}`,
        originalUrl: url.pathname + url.search,
        protocol: url.protocol.replace(":", "")
      },
      request: {
        params,
        query,
        cookies: {},               // Workers 預設不會自動解析 cookie，可自行擴充
        body: {},                  // 若需要解析 body，請額外加入 request.clone().json() 等
        headers
      },
      host: {
        hostname: url.hostname,
        ip: clientIp,
        ips: [],                   // Cloudflare 只提供單一 IP，若有多個可自行填入
        // ── 搬移的 CF 資訊 ───────────────────────
        colo: cf.colo,
        country: cf.country,
        city: cf.city,
        continent: cf.continent,
        latitude: cf.latitude,
        longitude: cf.longitude,
        postalCode: cf.postalCode,
        metroCode: cf.metroCode,
        region: cf.region,
        regionCode: cf.regionCode,
        timezone: cf.timezone
        // ───────────────────────────────────────
      }
    };

    // 回傳 JSON
    return new Response(JSON.stringify(responseBody, null, 2), {
      headers: { "content-type": "application/json;charset=UTF-8" },
    });
  },
};