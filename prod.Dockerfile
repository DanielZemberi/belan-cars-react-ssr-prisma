FROM node:16-alpine AS deps


RUN apk add –no-cache libc6-compat

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock*  ./
RUN yarn

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY –from=deps /app/node_modules ./node_modules
COPY . .


RUN yarn build



FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup –system –gid 1001 nodejs
RUN adduser –system –uid 1001 nextjs

COPY –from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY –from=builder –chown=nextjs:nodejs /app/.next/standalone ./
COPY –from=builder –chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD [“node”, “server.js”]