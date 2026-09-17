---
name: proxy-sync
description: "Keeps the Cloudflare Worker (worker.js) and Node.js dev proxy (dev-proxy.mjs) in sync. MUST activate when editing either proxy file."
version: "1.1.0"
---

# Proxy Sync

## Overview

The core-proxy package has two proxy implementations that MUST stay in sync:

| File | Runtime | Used In |
| --- | --- | --- |
| `worker.js` | Cloudflare Workers (workerd) | Production, staging, remote dev |
| `dev-proxy.mjs` | Node.js (native `node:http`) | Local development (`pnpm dev`) |

The Node.js proxy exists because workerd's single-threaded local runtime bottlenecks at ~3 concurrent requests. The production Cloudflare Worker has no such limit.

## CRITICAL: What Must Stay in Sync

When editing **either** file, you MUST update the other to match:

### 1. Route Definitions

Both files define the same route arrays. Any path added/removed/reordered in one MUST be mirrored:

| Route Group | worker.js variable | dev-proxy.mjs variable |
| --- | --- | --- |
| Supabase paths | `supabasePaths` | `SUPABASE_PATHS` |
| Service paths (NestJS) | `servicePaths` | `SERVICE_PATHS` |
| Studio app paths | `studioAppPaths` | `STUDIO_APP_PATHS` |
| Studio public paths | `studioPublicPaths` | `STUDIO_PUBLIC_PATHS` |

### 2. Routing Priority

The evaluation order MUST be identical:

1. Root path `/` -> website
2. Supabase paths -> Supabase (MUST come before studio to avoid `/auth/v1/` matching `/auth/`)
3. Service paths (`/ai/*`) -> NestJS (strip `/ai` prefix)
4. Studio app paths -> Next.js
5. `/_site/*` -> Website (strip `/_site` prefix)
6. `/_next/*` -> Next.js
7. Studio public paths -> Next.js
8. Default -> Website

### 3. Header Forwarding

Both proxies set these headers identically:

- `host` -> target host
- `x-forwarded-host` -> original request host
- `x-forwarded-proto` -> original protocol
- `x-forwarded-for` -> client IP (pass-through)
- `x-forwarded-origin` -> original origin (for Server Actions CSRF)

### 4. Redirect Rewriting

Both proxies rewrite `Location` headers on 3xx responses for these routes:

- Root path (`/`)
- Studio app paths
- Default website fallback

Internal service URLs in Location headers are rewritten to the public proxy origin.

### 5. WebSocket Upgrade Handling

Both proxies forward WebSocket upgrades for:

- `/realtime/v1/` -> Supabase
- `/ai/` -> NestJS (voice gateway)
- `/_site/` -> Website (HMR)
- `/_next/` -> Next.js (HMR)

### 6. Environment Variables

Both use the same four upstream URLs:

| Variable | worker.js source | dev-proxy.mjs source |
| --- | --- | --- |
| Supabase URL | `env.SUPABASE_URL_ENV` | `process.env.SUPABASE_URL_ENV` |
| NestJS URL | `env.NEST_URL_ENV` | `process.env.NEST_URL_ENV` |
| Next.js URL | `env.NEXT_URL_ENV` | `process.env.NEXT_URL_ENV` |
| Website URL | `env.WEBSITE_URL_ENV` | `process.env.WEBSITE_URL_ENV` |

Default values for local dev are defined in:

- `wrangler.toml` `[env.local.vars]` for worker.js
- Inline defaults in dev-proxy.mjs
- `package.json` `dev` script env vars for dev-proxy.mjs

### 7. Error Responses

Both return the same error shape:

- Network errors: `503 Service Unavailable` with `{ "error": "<ServiceName> unavailable" }`
- WebSocket failures: `502 Bad Gateway`
- Catch-all: `500 Internal Server Error` with `{ "error": "Internal server error" }`

## Verification Checklist

After editing either proxy file, verify:

- [ ] All route path arrays contain the same entries in the same order
- [ ] Routing priority (evaluation order) is identical
- [ ] All forwarded headers are set identically
- [ ] Redirect rewriting applies to the same routes
- [ ] WebSocket upgrade paths match
- [ ] Error responses use the same status codes and JSON shape
- [ ] Any new upstream URL is added to both files
