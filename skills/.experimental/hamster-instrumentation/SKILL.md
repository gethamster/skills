---
name: hamster-instrumentation
description: "Plan-time observability for new features in Hamster Studio. Use PROACTIVELY during plan/brief generation, feature scoping, architectural design, or anytime a new endpoint, server action, BullMQ job, page route, or user-facing surface is being designed. Forces every plan to declare PostHog events, user/account properties, group context, feature flags, session-replay/PII posture, and trace correlation BEFORE code is written. Complements `hamster-analytics` (the implementation API) by making instrumentation a first-class output of planning."
version: "1.0.0"
---

# Hamster Instrumentation Planning

## Purpose

Make observability a **first-class output of plan generation**, not an afterthought caught in PR review.

Hamster Studio dual-writes to **PostHog + Segment** server-side, with **Mixpanel** session replay client-side. The infrastructure is already there. The failure mode this skill prevents is *shipping a feature with no signal in PostHog* — a feature that ships but cannot be measured, A/B tested, or debugged in production.

`hamster-analytics` covers *how* to call the tracking functions. **This skill covers* what *and* why *to track** — the decisions a plan must make before implementation begins.

## When to Apply

Load this skill when any of these are true:

- Drafting an implementation plan for a brief, task, or feature
- Designing a new API endpoint, server action, BullMQ job, or page route
- Reviewing a plan that does not yet have an "Instrumentation" section
- Adding a user-facing surface (modal, flow, button, route, form)
- Scoping a "we should be able to see if this is working" intent
- Refactoring a code path that currently emits analytics

## The Plan-Time Checklist

Every plan that ships behavior must answer these. If a row is "N/A," say so explicitly — do not omit.

| Question | Answer must include |
| --- | --- |
| What outcome do we want to observe? | One PostHog event in Title Case (e.g. `'Routine Triggered'`) |
| What is the **failure** signal? | A separate event (e.g. `'Routine Failed'`) with `error_code`, `attempt_count` |
| Who is acting? | `user_id` (third arg to `trackServerEvent`) |
| Which workspace? | `account_id` in properties — drives Mixpanel/PostHog group analytics |
| Which session/trace? | Auto-injected via `RequestContext`. Confirm code path runs inside a request OR pass IDs explicitly |
| Any new **user property** (e.g. `has_used_routines`, `routine_count`)? | Add to `UserProperties`, wire `markFeatureAdoption` and/or `incrementEngagementCounter` |
| Any new **account property**? | Group trait via `groupServerUser(userId, accountId, traits)` |
| Should this be **flag-gated**? | Either an `apps/web/config/feature-flags.config.ts` entry or a documented "ship to all" decision |
| Does it touch sensitive content? | Apply `mp-mask-pii` / `mp-sensitive` selectors and document any `*_pii` properties |
| Is this in a **BullMQ job** or cron? | Pass `userId` and `account_id` **explicitly** — request context does not propagate into workers |
| What dashboard will we look at? | Name the funnel/metric — if no dashboard would be built, the event is probably not worth firing |

## Plan Output: The "Instrumentation" Section

Every implementation plan should include a section like this. Use [plan-instrumentation-template.md](references/plan-instrumentation-template.md) as a drop-in template.

```markdown
## Instrumentation

### Events
- `Routine Triggered` (server, on successful job enqueue)
  - Props: `routine_id`, `account_id`, `trigger_source` ('manual' | 'webhook' | 'schedule'), `user_id`
- `Routine Failed` (BullMQ failure handler — pass userId/account_id explicitly)
  - Props: `routine_id`, `account_id`, `error_code`, `attempt_count`, `user_id`
- `Routine Run Page Viewed` — relies on PostHog autocapture; verify post-deploy

### User properties (set on first run)
- `has_used_routines: true` via `markFeatureAdoption(userId, 'routines')`
- `routine_count` incremented via `incrementEngagementCounter(userId, 'routine_count')`

### Feature flag
- `enableRoutines` in `apps/web/config/feature-flags.config.ts`. Default `false` in prod; flip via 1Password.

### PII / Session replay
- Routine input may contain user secrets — wrap textarea container with `className="mp-sensitive"`.
- No `*_pii` properties needed. Error messages truncated to first 200 chars.

### Success criteria (the dashboard we will build)
- DAU of `Routine Triggered` per account, sliced by `trigger_source`
- Funnel: `Routine Created` → `Routine Triggered` → `Routine Run Completed`
- p95 of `duration_ms` on `Routine Run Completed`
```

If the plan does not produce this section, the plan is incomplete.

## Decision Tree by Surface

| Surface | Capture in | Critical thing to remember |
| --- | --- | --- |
| Server Action (`enhanceAction`) | `trackServerEvent()` from `@kit/analytics/server` | Runs inside RequestContext. `account_id` and `$session_id` auto-inject when context is bound. |
| Next.js API route (`enhanceRouteHandler`) | `trackServerEvent()` | Same as above. |
| NestJS controller / service (`apps/ai`) | `trackServerEvent()` | Verify the route is covered by `RequestContextMiddleware` (default for `/ai/*`). |
| BullMQ job consumer | `trackServerEvent()` with **explicit** `userId` + `account_id` | Jobs run **outside** RequestContext. Persist IDs in the job payload at enqueue time. |
| RSC / page | PostHog autocaptures route navigation | If conversion-critical, fire an explicit event from a Client Component. |
| Client form / interaction | `createAnalyticsTracker(analytics, ctx).trackXxx(props)` | Use the typed factory; never call `posthog.capture` directly. |
| Auth state change | App event → `analytics-provider.tsx` mapping | Add the AppEvent and let the provider call `identify` / `group`. Do not call them inline. |
| Cron / scheduled task | Same as BullMQ — explicit IDs | Add `trigger_source: 'cron'` to disambiguate. |
| Webhook receiver | `trackServerEvent()` with explicit IDs | Resolve user/account from the webhook payload before tracking. |

## Critical Rules

1. **Never block on analytics.** Every capture is fire-and-forget. Wrap in try/catch where the call site is hot, but rely on the SDK's `Promise.allSettled` for normal use.
2. **`account_id` is non-optional** for any event tied to workspace data. Group analytics breaks without it.
3. **PII boundary is grep-able.** Property keys without the `_pii` suffix must not contain user-identifiable strings. See [pii-and-replay.md](references/pii-and-replay.md).
4. **`session_id` propagation.** Server events must run inside RequestContext OR explicitly pass `session_id` from the originating request. Otherwise replay-to-event linkage breaks.
5. **State-sync goes on the triggering event.** Use `$set` / `$set_once` on the *same* event that mutates the property — do not fire a separate identify round-trip.
6. **Do not introduce a new flagging system.** PostHog feature flags are not currently wired up. Use `apps/web/config/feature-flags.config.ts` (1Password-backed). If a plan genuinely needs runtime flag flipping, call it out as a separate piece of work — see [feature-flags.md](references/feature-flags.md).
7. **Typed events live in one place.** Add new events to `packages/analytics/src/event-types.ts` *as part of the plan*, not as a follow-up. Untyped `trackServerEvent('My Event', ...)` calls should not pass review.
8. **Do not call `posthog-js` or `posthog-node` directly** outside `packages/analytics/`. Always go through `@kit/analytics`.

## Architecture (one-screen view)

```
Browser (apps/web)
├── instrumentation-client.ts   → posthog.init() before hydration; Sentry trace stamping
├── analytics-provider.tsx      → identify + group on auth events
├── createAnalyticsTracker(ctx) → typed client-side capture
└── fetch interceptor           → injects x-session-id, x-page-trace-id on every request

Server (apps/web RSC + actions, apps/ai NestJS)
├── RequestContextMiddleware    → reads x-session-id, binds userId/accountId
├── trackServerEvent()          → dual-writes PostHog + Segment
│                                  auto-injects $session_id, $groups.account, $ai_trace_id
└── identifyServerUser / groupServerUser → user + account traits

BullMQ workers (apps/ai, apps/horde-v2)
└── trackServerEvent() with EXPLICIT userId + account_id (no request context here)
```

Full file map and env-var inventory: [posthog-architecture.md](references/posthog-architecture.md).

## References

| Reference | When to read |
| --- | --- |
| [plan-instrumentation-template.md](references/plan-instrumentation-template.md) | Drop-in template for the "Instrumentation" plan section |
| [posthog-architecture.md](references/posthog-architecture.md) | File map, env vars, init order, dual-write internals |
| [event-design.md](references/event-design.md) | Naming, properties, `$set` / `$set_once`, feature-adoption pattern |
| [multi-tenant-context.md](references/multi-tenant-context.md) | Group analytics, RequestContext, BullMQ propagation |
| [feature-flags.md](references/feature-flags.md) | Current flag system + when to consider PostHog flags |
| [pii-and-replay.md](references/pii-and-replay.md) | Privacy boundary, `*_pii` suffix, replay masking selectors |
| [trace-correlation.md](references/trace-correlation.md) | session_id, `$ai_trace_id`, Sentry/OTel stitching |

## Companion Skills

- **hamster-analytics** — implementation reference (function signatures, full event catalog)
- **hamster-feature-flags** — config-flag mechanics
- **hamster-nest-api**, **hamster-nextjs-api** — where in the request lifecycle to place capture calls
