# syntax=docker/dockerfile:1

# ── Stage 1: Install all dependencies ──────────────────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# ── Stage 2: Build (runs tests, then builds Next.js standalone) ────────────────
FROM node:20-alpine AS builder
ARG SKIP_UNIT_TESTS=false
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
# COPY deploy.next.config.mjs next.config.mjs

RUN if [ "$SKIP_UNIT_TESTS" = "true" ]; then \
      echo "WARNING: unit tests skipped — do not deploy a skipped-test build"; \
    else \
      echo "--- Running unit tests ---" && npm run test:unit; \
    fi

RUN npm run build

# ── Stage 3: Runtime image (Next.js standalone) ────────────────────────────────
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Copy standalone server bundle
COPY --from=builder /app/.next/standalone ./
# Copy static assets (CSS, JS, fonts) — standalone does not include these
COPY --from=builder /app/.next/static ./.next/static
# Copy public directory (robots.txt, favicon, etc.)
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
