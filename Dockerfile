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

# 4️⃣ 安裝 **production** 相依（不包含開發工具）
ENV NODE_ENV=production
RUN npm ci --only=production --omit=dev && npm cache clean --force

# ✅ 加入 Docker 標記（保證 env 判斷通過）
ENV DOCKER=true

# 5️⃣ 暴露埠號（依照 server.js 的監聽埠調整，這裡預設 8080）
EXPOSE 3000

# 6️⃣ 設定容器啟動時執行的指令
CMD ["npm", "run", "start"]
