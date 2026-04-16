# ---------- STAGE 1: React Build ----------
FROM node:22-alpine AS client-build

WORKDIR /usr/src/app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# ---------- STAGE 2: Express Server ----------
FROM node:22-alpine

WORKDIR /usr/src/app
# Copy backend dependencies
COPY package*.json ./
RUN npm install --production

# Copy backend source
COPY src/ ./src/

# Copy compiled React app from STAGE 1
COPY --from=client-build /usr/src/app/client/dist ./client/dist

# Expose the API port
EXPOSE 3000

# Start the Express server
CMD ["node", "src/server.js"]
