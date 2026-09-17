---
title: Trace Correlation
tags: tracing, sentry, opentelemetry, posthog, observability, debugging
---

# Trace Correlation

PostHog events, Sentry traces, OpenTelemetry spans, and session replay clips are stitched together by a small set of correlated IDs. Every event the platform emits *should* arrive in PostHog with all four populated.

## The Correlated IDs

| ID | Source | PostHog property | Use |
| --- | --- | --- | --- |
| `distinct_id` | userId or anonymous cookie | (built-in) | Per-user analysis, replay lookup |
| `$session_id` | `x-session-id` header from browser | `$session_id` | Stitches event ↔ replay clip |
| `$ai_trace_id` | Sentry / OTel active span | `$ai_trace_id` | Stitches event ↔ trace ↔ logs |
| `page_trace_id` | `x-page-trace-id` header | `page_trace_id` | Per-page-load grouping |
| `$groups.account` | RequestContext `accountId` | `$groups.account` | Group-level aggregation |

## Browser → Server Stitching

The browser injects two headers on every `fetch()` (via the global interceptor in `apps/web/instrumentation-client.ts`):

```
x-session-id: <PostHog session ID>
x-page-trace-id: <stable per page load>
```

The server reads them in `RequestContextMiddleware` and binds them into AsyncLocalStorage. `trackServerEvent` then auto-stamps `$session_id` and `page_trace_id` on every event.

The server's response includes `x-trace-id: <Sentry/OTel trace ID>`. The browser captures it into `window.__hamsterLastTraceId__`. The next outbound PostHog event from the browser stamps it as `$ai_trace_id`, completing the loop.

```
Browser                                   Server
  │                                          │
  │  fetch() ── x-session-id, page-trace ──► │
  │                                          │ RequestContextMiddleware binds
  │                                          │   userId, accountId, sessionId
  │                                          │ trackServerEvent →
  │                                          │   { $session_id, $groups.account,
  │                                          │     $ai_trace_id (from Sentry span) }
  │  ◄── x-trace-id ────────── response ──── │
  │                                          │
  │ window.__hamsterLastTraceId__ = ...      │
  │                                          │
  │ posthog.capture(...)  ── $ai_trace_id ──►│
  │                                          │
```

## What Plans Must Verify

For any new code path, answer:

- [ ] **Server-side**: does `RequestContextMiddleware` cover this route? (Default: yes for `/ai/*` and Next.js routes.)
- [ ] **BullMQ jobs**: are correlation IDs persisted in the job payload? (See [multi-tenant-context.md](multi-tenant-context.md).)
- [ ] **Background processes / cron**: are IDs bound manually via `runWithRequestContext`?
- [ ] **Custom fetch wrappers**: do they preserve `x-session-id` and `x-page-trace-id`?
- [ ] **Event-driven flows** (webhooks, queues): is the originating session ID propagated through, or accepted as lost?

## Common Failure Modes

### Replay clip with no events

Symptom: a session replay shows the user clicking a button, but no events fire in PostHog around that timestamp.

Cause: `trackServerEvent` was called outside RequestContext (e.g. in a job, or after the request finished) and `$session_id` was not stamped.

Fix: bind context, or pass `$session_id` explicitly:

```typescript
trackServerEvent('Job Outcome', {
  ...,
  $session_id: originalSessionId,  // persisted from the producer
}, userId);
```

### Events with `$ai_trace_id` undefined

Symptom: events arrive but cannot be linked to Sentry traces.

Cause: code path runs outside an OTel span. Common in BullMQ jobs and one-off scripts.

Fix: wrap the unit of work in a span, or accept the loss for non-request paths.

### Sampling skew

Symptom: most production events have `$ai_trace_id`, but some do not.

Cause: Sentry's sampling kept the trace, but the surrounding span context was lost (e.g. across an `await` that does not preserve AsyncLocalStorage).

Fix: ensure `await` chains are unbroken, or stamp trace IDs explicitly.

### Cross-tab session collision

Symptom: two browser tabs from the same user share a `$session_id` — one tab's events appear in another's replay.

Cause: PostHog `$session_id` is per-tab by default. Confirm `instrumentation-client.ts` is initializing session per-tab, not globally.

## Querying Across Systems

When debugging in production, use these IDs as join keys:

| You have | Find related data via |
| --- | --- |
| PostHog event | `$session_id` → Mixpanel session replay; `$ai_trace_id` → Sentry trace |
| Sentry error | trace ID → `$ai_trace_id` filter in PostHog |
| User support ticket | user email → PostHog Persons → recent `$session_id` → replay |
| BullMQ job ID | `job_id` property in PostHog events; `$ai_trace_id` if span was active |

## Adding New Trace Properties

If your feature produces a new ID worth correlating (e.g. `routine_run_id`), add it as a normal event property — do not invent a new top-level `$xxx` field. The reserved `$xxx` namespace belongs to PostHog.

```typescript
// Good
trackServerEvent('Routine Run Completed', {
  routine_run_id, routine_id, account_id, user_id,
  duration_ms,
}, userId);
```

Then in PostHog you can filter or group by `routine_run_id` like any other property.