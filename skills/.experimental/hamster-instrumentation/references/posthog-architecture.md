---
title: PostHog Architecture
tags: posthog, architecture, env, configuration
---

# PostHog Architecture

## Stack

```
┌──────────────────────┐
                    │   PostHog (cloud)    │
                    └──────────▲───────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
   posthog-js            posthog-node          posthog-node
   (browser)             (apps/web SSR)        (apps/ai, jobs)
        │                      │                      │
        ▼                      ▼                      ▼
   instrumentation-client   trackServerEvent()   trackServerEvent()
                            (auto-injects ctx)   (explicit IDs)

   Parallel pipeline:
   posthog-js / posthog-node ─┐
   segment analytics-node    ─┴─► Segment ─► Mixpanel (+ session replay)
```

Every server-side capture writes to **both PostHog and Segment** via `Promise.allSettled` so a Segment outage does not lose PostHog data and vice versa.

## File Map

| File | Responsibility |
| --- | --- |
| `apps/web/instrumentation-client.ts` | Pre-hydration browser init: `posthog.init()`, exception autocapture, fetch interceptor that injects `x-session-id` + `x-page-trace-id`, `beforeSendEvent` that stamps `$ai_trace_id` from active Sentry span |
| `apps/web/components/analytics-provider.tsx` | Subscribes to `@kit/shared/events` AppEvents and maps them to `analytics.identify` / `analytics.group` / `analytics.track` calls |
| `apps/web/config/analytics.config.ts` | Zod-validated env-var parsing (PostHog, Segment, Mixpanel toggles + sample rates) |
| `packages/analytics/src/posthog-analytics-service.ts` | Browser PostHog wrapper (init flags, replay config, page-view capture mode) |
| `packages/analytics/src/shared/server-analytics.ts` | `trackServerEvent`, `identifyServerUser`, `groupServerUser`, `flushServerAnalytics`, `getServerPostHogClient` |
| `packages/analytics/src/event-types.ts` | Source of truth for the typed event catalog (`EventPropertiesMap`) |
| `packages/analytics/src/property-types.ts` | PII boundary: `PersonProperties`, `GroupProperties`, forbidden-keys list |
| `packages/analytics/src/user-trait-manager.ts` | `markFeatureAdoption`, `incrementEngagementCounter` |
| `packages/analytics/src/tracking-utils.ts` | `createAnalyticsTracker` typed factory |
| `apps/web/middleware.ts` (or NestJS `RequestContextMiddleware`) | Binds `userId`, `accountId`, `$session_id` into AsyncLocalStorage for the request |

## Environment Variables

### Frontend (NEXT_PUBLIC_*)

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project key (required to init) | — |
| `NEXT_PUBLIC_POSTHOG_HOST` | Ingestion host | `https://us.i.posthog.com` |
| `NEXT_PUBLIC_POSTHOG_UI_HOST` | UI host for deep links | `https://us.posthog.com` |
| `NEXT_PUBLIC_POSTHOG_DEBUG` | `'true'` enables debug logs | `false` |
| `NEXT_PUBLIC_POSTHOG_ENABLE_SESSION_REPLAY` | Enable PostHog replay | `false` |
| `NEXT_PUBLIC_POSTHOG_SESSION_REPLAY_SAMPLE_RATE` | 0.0–1.0 | `0` |
| `NEXT_PUBLIC_POSTHOG_ENABLE_HEATMAPS` | Enable heatmap capture | `false` |
| `NEXT_PUBLIC_POSTHOG_ENABLE_EXCEPTIONS` | Exception autocapture | `true` |
| `NEXT_PUBLIC_SEGMENT_WRITE_KEY` | Segment client key | — |
| `NEXT_PUBLIC_MIXPANEL_TOKEN` | Mixpanel token (prod only) | — |
| `NEXT_PUBLIC_MIXPANEL_RECORDING_PERCENTAGE` | 0–100 | `0` |

### Backend

| Variable | Purpose |
| --- | --- |
| `POSTHOG_API_KEY` | PostHog Node SDK key (falls back to `NEXT_PUBLIC_POSTHOG_KEY`) |
| `POSTHOG_HOST` | PostHog ingestion host |
| `SEGMENT_WRITE_KEY` | Segment Node write key |
| `POSTHOG_ANALYTICS_DEBUG` | `'true'` enables debug logs |

### Disabling locally

PostHog initializes whenever its key is set. To suppress noise in local dev, leave `NEXT_PUBLIC_POSTHOG_KEY` unset in `.env.local`. Mixpanel is automatically gated on `NODE_ENV === 'production'`. Do **not** rely on `NODE_ENV` checks for any other gating — see CLAUDE.md "Feature Flags Over NODE_ENV".

## Initialization Order

1. **Server cold start**: `getServerPostHogClient()` lazily initializes singleton on first call.
2. **Browser load**: Next.js 16 runs `instrumentation-client.ts` *before* React hydration. PostHog `init` is fire-and-forget so it does not block paint.
3. **Auth resolves**: `analytics-provider.tsx` receives `user.signedIn` AppEvent → calls `analytics.identify(user_id, traits)` then `analytics.group(account_id, traits)` if a team workspace.
4. **Subsequent fetches**: Global fetch interceptor injects `x-session-id` and `x-page-trace-id` headers. The server's `RequestContextMiddleware` reads them and binds them into AsyncLocalStorage. Any `trackServerEvent` inside that request auto-stamps `$session_id` and `$groups.account`.

## Auto-Injected Properties

`trackServerEvent` reads `RequestContext` (AsyncLocalStorage) and stamps the event with:

| Property | Source |
| --- | --- |
| `$session_id` | `x-session-id` header from browser |
| `$groups.account` | `accountId` bound by middleware |
| `$ai_trace_id` | Active Sentry span trace ID, or `window.__hamsterLastTraceId__`, or page-load trace ID |
| `workflow_type` | Set by ingress middleware (e.g. `api`, `action`, `webhook`) |
| `user_id` | Bound by middleware (anonymous if absent) |

**Caller-supplied props always win.** Auto-injection only fills gaps.

## Dual-Write Behavior

```typescript
await Promise.allSettled([
  posthog.capture({ distinctId, event, properties }),
  segment.track({ userId, event, properties }),
]);
```

Both providers receive the same event with the same property names. Segment then forwards to Mixpanel via warehouse pipe + session-replay middleware (`packages/analytics/src/segment-mixpanel-middleware.ts`).

## Health & Validation

- `validateAnalyticsConfig()` — Zod-validates env vars; logs warnings for invalid combinations.
- `checkAnalyticsHealth()` — verifies provider init succeeded.
- Falls back to `NullAnalyticsService` (no-op) if no providers are configured.

## Operational Notes

- PostHog cloud has its own ingestion limits — events that exceed property size are silently dropped. Keep payloads under ~5KB.
- `flushServerAnalytics()` should be called from any short-lived process (one-off scripts, BullMQ shutdown) so events flush before exit.
- The full architectural reference is `.cursor/rules/analytics.mdc` (1,324 lines) — read it for edge cases not covered here.