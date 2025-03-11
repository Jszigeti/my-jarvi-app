FROM node:22.13.0-alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app

FROM base AS deps

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_NHOST_SUBDOMAIN
ENV NEXT_PUBLIC_NHOST_SUBDOMAIN=${NEXT_PUBLIC_NHOST_SUBDOMAIN}

ARG NEXT_PUBLIC_NHOST_REGION
ENV NEXT_PUBLIC_NHOST_REGION=${NEXT_PUBLIC_NHOST_REGION}

ARG NEXT_PUBLIC_NHOST_AUTH_EMAIL
ENV NEXT_PUBLIC_NHOST_AUTH_EMAIL=${NEXT_PUBLIC_NHOST_AUTH_EMAIL}

ARG NEXT_PUBLIC_NHOST_AUTH_PASSWORD
ENV NEXT_PUBLIC_NHOST_AUTH_PASSWORD=${NEXT_PUBLIC_NHOST_AUTH_PASSWORD}

ARG NEXT_PUBLIC_NHOST_GRAPHQL_URL
ENV NEXT_PUBLIC_NHOST_GRAPHQL_URL=${NEXT_PUBLIC_NHOST_GRAPHQL_URL}

RUN npm run build

FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
