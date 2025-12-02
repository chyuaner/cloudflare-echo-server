# 1️⃣ 使用最小的 Node.js 映像 (Alpine Linux)
FROM node:20-alpine AS runner

# 2️⃣ 設定工作目錄
WORKDIR /app

# 3️⃣ 只拷貝需要的檔案
#    - package*.json 用來安裝相依
#    - src/ 以及其他執行時需要的檔案
COPY package*.json ./
COPY src/ ./src/
# 如有其他靜態資源 (public、config 等) 也一起 copy
# COPY public/ ./public/
# COPY ./*.json ./

# -------------------------------------------------
# 4️⃣ 安裝 production 相依（只安裝正式依賴）
# -------------------------------------------------
ENV NODE_ENV=production

# ① 先安裝編譯原生模組所需的工具 (若你的套件不需要可自行省略)
#    alpine 中最常需要的：python3、make、g++、pkgconfig
RUN apk add --no-cache python3 make g++ pkgconfig

# ② 只執行一次 npm ci，省掉 devDependencies
#    為了避免前一個 RUN 中的 && 失效，分成兩行寫比較好閱讀
RUN npm ci --omit=dev && \
    npm cache clean --force

# ✅ 加入 Docker 標記（保證 env 判斷通過）
ENV DOCKER=true

# 5️⃣ 暴露埠號（依照 server.js 的監聽埠調整，這裡預設 8080）
EXPOSE 3000

# 6️⃣ 設定容器啟動時執行的指令
CMD ["npm", "run", "start"]
