# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Production stage — Express serves the Vite build and /api/discovery-call
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4011

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY server.js ./
COPY server ./server

EXPOSE 4011

CMD ["node", "server.js"]
