---
title: Multi-Tenant Context
tags: posthog, group-analytics, request-context, bullmq, multi-tenant
---

# Multi-Tenant Context Propagation

Hamster Studio is multi-tenant: every event must be attributable to a **user** and (if applicable) a **workspace** (`account_id`). Most queries in PostHog and Mixpanel are sliced by account.

## The Three Identity Axes

| Axis | What it identifies | PostHog field | Set via |
| --- | --- | --- | --- |
| User | Individual person | `distinct_id` | `userId` arg to `trackServerEvent` / `identify()` |
| Account | Workspace (personal or team) | `$groups.account` | Auto-injected from RequestContext, or explicit prop |
| Session | Browser session | `$session_id` | Auto-injected from `x-session-id` header |

## RequestContext (apps/web + apps/ai)

`RequestContextMiddleware` binds `userId` and `accountId` into AsyncLocalStorage at the top of every request. Any `trackServerEvent` inside that request automatically picks them up.

### Verify a route is covered

- **Next.js** — every route handler and server action is covered by default via `app/middleware.ts` ingress.
- **NestJS (apps/ai)** — `RequestContextMiddleware` is registered globally. Custom guards or non-HTTP entry points (e.g. WebSocket gateways) need explicit binding.
- **Test it**: in dev, log `getRequestCorrelation()` at the top of your handler. If `userId` is undefined, the middleware is missing.

### Manual binding (rare)

If you have a code path that runs outside an HTTP request (cron, one-off script) but inside the same Node process, you can bind context manually:

```typescript
import { runWithRequestContext } from '@kit/api-core/context';

await runWithRequestContext(
  { userId, accountId, workflowType: 'cron' },
  async () => {
    // trackServerEvent inside this block auto-injects
  },
);
```

## BullMQ Jobs (CRITICAL)

**Jobs run outside any HTTP request.** RequestContext is empty inside a worker. You MUST pass identity explicitly.

### Pattern: persist IDs in the job payload

```typescript
// Producer (inside an HTTP request)
await routinesQueue.add('run-routine', {
  routineId: routine.id,
  accountId: accountCtx.accountId,   // persist!
  userId: user.id,                   // persist!
  triggeredAt: new Date().toISOString(),
});

// Consumer (no request context)
async process(job: Job<RunRoutinePayload>) {
  const { routineId, accountId, userId } = job.data;

  // Option A: bind context for the job duration
  await runWithRequestContext(
    { userId, accountId, workflowType: 'job' },
    async () => {
      await this.runRoutine(routineId);
      trackServerEvent('Routine Run Completed', {
        routine_id: routineId, account_id: accountId, user_id: userId,
        duration_ms: Date.now() - startedAt,
      }, userId);
    },
  );

  // Option B: pass explicit IDs to every track call
  trackServerEvent('Routine Run Completed', {
    routine_id: routineId,
    account_id: accountId,
    user_id: userId,
    duration_ms,
  }, userId);
}
```

Prefer **Option A** when the job spans many functions — it propagates correlation transparently. Use **Option B** for short, single-function jobs.

### Failure handling

Track failures in the BullMQ `failed` event handler, not just inside the consumer:

```typescript
worker.on('failed', (job, err) => {
  if (!job?.data) return;
  const { routineId, accountId, userId } = job.data;
  trackServerEvent('Routine Failed', {
    routine_id: routineId,
    account_id: accountId,
    user_id: userId,
    error_code: err.name,
    attempt_count: job.attemptsMade,
  }, userId);
});
```

Otherwise transient retries swallow errors that PostHog never sees.

## Group Identification (account properties)

Account-level traits — subscription tier, member count, plan — go on the **group**, not the user. Set them with `groupServerUser`:

```typescript
import { groupServerUser } from '@kit/analytics/server';

await groupServerUser(userId, accountId, {
  account_name: account.name,
  account_slug: account.slug,
  subscription_tier: 'pro',
  member_count: members.length,
});
```

After this call, every event with `$groups.account = accountId` (auto-injected) inherits these traits in PostHog/Mixpanel queries.

### When to call `groupServerUser`

- After account creation
- After role / member changes
- After subscription changes
- On scheduled rollups (member counts, etc.) — don't try to keep these perfectly real-time

### When NOT to call it

- On every event — that is what `$groups.account` injection is for.
- For per-user properties (use `identifyServerUser` or `$set` on an event).

## Personal vs Team Accounts

| Account type | `account_id` | Group calls? |
| --- | --- | --- |
| **Personal** (`accounts.id` = `auth.users.id`) | The user's own UUID | Yes — Mixpanel/PostHog still groups by it. Personal workspaces are still queryable as a cohort. |
| **Team** | Shared UUID across members | Yes — primary use case. |

Both flow through the same `groupServerUser` and `$groups.account` machinery. Do not branch on account type at the analytics layer.

## Cross-account actions (admin tools, internal scripts)

When an action affects an account other than the actor's own (e.g. a Hamster operator running an ops script), pass the **target account** as `account_id` in properties and the **operator** as `userId`. Include a `workflow_type: 'ops'` or `triggered_by: 'system'` property so these can be filtered out of product metrics.

## Quick checklist for any new code path

- [ ] `userId` available? If not — why? (anonymous events are valid but rare)
- [ ] `accountId` available? If not — is this truly account-agnostic, or am I missing context?
- [ ] Inside a request? If yes, RequestContext handles it.
- [ ] Inside a job? If yes, persist IDs in the payload OR bind manually.
- [ ] Affecting account-level traits? If yes, call `groupServerUser`.