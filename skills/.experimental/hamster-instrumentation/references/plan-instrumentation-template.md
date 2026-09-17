---
title: Plan Instrumentation Template
tags: posthog, planning, observability, brief, plan
---

# Plan Instrumentation Template

Paste this section into every implementation plan. Fill in or mark explicitly N/A. Do not delete rows.

## Instrumentation

### Events

List every event the feature will emit. One row per event.

| Event name (Title Case) | Where it fires | Trigger | Required props | Optional props |
| --- | --- | --- | --- | --- |
| `Thing Created` | server action / NestJS / job | success path of create | `thing_id`, `account_id`, `user_id`, `creation_method` | `template_used`, `source` |
| `Thing Failed` | server / job failure handler | catch block / BullMQ `failed` event | `account_id`, `user_id`, `error_code`, `attempt_count` | `error_message_pii` |
| `Thing Page Viewed` | client / autocapture | route navigation | (autocaptured) | — |

Naming rules: Title Case, "Object Action" pattern. snake_case props. See [event-design.md](event-design.md).

### User properties (`$set`)

Properties that should be **updated on every relevant event** (e.g. `last_routine_run_at`).

```typescript
trackServerEvent('Routine Triggered', {
  routine_id, account_id, user_id,
  $set: { last_routine_run_at: new Date().toISOString() },
}, userId);
```

### User properties (`$set_once`)

Properties set **only the first time** (e.g. `first_routine_run_at`).

```typescript
$set_once: { first_routine_run_at: new Date().toISOString() }
```

### Feature adoption

If this is a new feature surface:

- [ ] Add `has_used_<feature>: boolean` to `UserProperties` in `packages/analytics/src/user-properties.ts`
- [ ] Add `<feature>_count: number` to `UserProperties`
- [ ] Add `'<feature>'` to the union in `markFeatureAdoption()`
- [ ] Add `'<feature>_count'` to the union in `incrementEngagementCounter()`
- [ ] Wire `markFeatureAdoption(userId, '<feature>')` on first use
- [ ] Wire `incrementEngagementCounter(userId, '<feature>_count')` on every use
- [ ] Fire a one-time `'First <Thing> Created'` milestone event with `time_since_signup_hours`

### Account / group properties

Set via `groupServerUser(userId, accountId, traits)`. Use for properties that describe the workspace, not the individual user.

| Property | When updated | Example |
| --- | --- | --- |
| `routine_count` | on `Routine Created` | `groupServerUser(userId, accountId, { routine_count: count })` |
| `has_active_routine` | on first activation | one-time |

### Feature flag

- [ ] Will this ship behind a flag? **Yes / No**

- If yes:
- Flag key: `enableXxx`
- File: `apps/web/config/feature-flags.config.ts`
- 1Password path: `op://${VAULT_NAME}/features/next-public-enable-xxx`
- Default: `false` in prod, `true` in dev
- If no: state the decision explicitly (e.g. "low blast radius, ship to all").

### PII / session replay

- [ ] Identify any UI element that may render user secrets, PII, or third-party tokens.
- [ ] Mark its container with `className="mp-sensitive"` (block from recording) or `mp-mask-pii` (mask text).
- [ ] If PII must be sent in an event property, name it with `_pii` suffix (e.g. `error_message_pii`).
- [ ] If the entire flow is sensitive, call `useSessionReplay().stopRecording()` on entry and `startRecording()` on exit.

### Trace correlation

- [ ] If this code path crosses a request boundary, confirm `RequestContextMiddleware` covers the route.
- [ ] If this is a BullMQ job, confirm `userId` and `account_id` are persisted in the job payload at enqueue time.
- [ ] Confirm any `fetch()` from the browser goes through the global interceptor (it does by default — only relevant if you replace the global fetch).

### Success criteria — the dashboard we will build

State the **questions a PM will ask in 30 days** that this instrumentation answers. If you cannot name a question, the events probably are not worth firing.

Examples:

- "What % of teams that activated a routine ran it more than once?" → funnel `Routine Created → Routine Triggered → Routine Triggered (count > 1)`
- "Is `auto-trigger` more reliable than `manual`?" → `Routine Failed` rate by `trigger_source`
- "Are big teams using this more?" → `Routine Triggered` per group sliced by `account_member_count`

### Pre-merge verification

- [ ] Trigger the happy path locally; verify event in PostHog with correct `account_id`, `$session_id`, `$ai_trace_id`
- [ ] Trigger the failure path; verify failure event fires
- [ ] Verify in PostHog that the event appears under the correct **group** (account)
- [ ] If a user property was added, verify it appears on the user in PostHog Persons