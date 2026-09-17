---
title: Feature Flags
tags: feature-flags, posthog, configuration, rollout
---

# Feature Flags & Instrumentation

## Current State (Read This First)

Hamster Studio **does not currently use PostHog feature flags**. All feature flags are config-based:

- Defined in `apps/web/config/feature-flags.config.ts` (Zod schema)
- Backed by `NEXT_PUBLIC_ENABLE_*` env vars
- Resolved per environment via 1Password references in `apps/web/.env.1p`
- Evaluated at build/runtime, not by user

**Practical consequence**: a flag flip currently requires a 1Password change + redeploy (or a local `.env.local` override). There is no per-user, per-account, or percentage-rollout flagging in production today.

If a plan calls for "we want to gradually roll this out to 10% of teams" — flag this as a real piece of work, not a one-line addition. Either:

1. Ship config-flagged and gradually flip whole environments, OR
2. Propose introducing PostHog feature flags as a separate brief.

Do not silently introduce a new flag system inside a feature plan.

## Plan-Time Decision Tree

| Situation | Recommendation |
| --- | --- |
| Internal-only feature, low blast radius | Ship without a flag. Document the decision. |
| New surface, all users, but want a kill switch | Config flag, default `true` in dev, `false` in prod, flip on launch. |
| Schema change with backfill | Config flag for the read path; ship write path immediately so new data accumulates. |
| Risky change to a hot path | Config flag, dark-launched (default `false`), flip in prod after validation. |
| "Roll out to 10% of users / opt-in beta" | **Stop**. PostHog flags not wired up — call out as separate work. |
| A/B experiment with metric comparison | Same — needs PostHog flag infra first. |
| Per-account override (one team gets early access) | Use a database column on `accounts`, not a flag. |

## Adding a Config Flag (the supported path)

### 1. Schema entry in `apps/web/config/feature-flags.config.ts`

```typescript
enableRoutines: z.boolean({
  error: (issue) =>
    issue.input === undefined
      ? 'Provide the variable NEXT_PUBLIC_ENABLE_ROUTINES'
      : 'Value must be a boolean',
}).describe('Enable the Routines feature surface.'),
```

### 2. Parsing block (same file)

```typescript
enableRoutines: getBoolean(
  process.env.NEXT_PUBLIC_ENABLE_ROUTINES,
  false,
),
```

### 3. 1Password reference in `.env.1p`

```
NEXT_PUBLIC_ENABLE_ROUTINES=op://${VAULT_NAME}/features/next-public-enable-routines
```

### 4. Create the 1Password item per environment vault

- Path: `/features/next-public-enable-routines`
- Value: `true` or `false` per environment

### 5. Use the flag

```typescript
import featuresFlagConfig from '~/config/feature-flags.config';

if (featuresFlagConfig.enableRoutines) {
  // gated path
}
```

See `hamster-feature-flags` skill for full mechanics.

## Instrumentation Implications of Flags

When a flag exists, **every event from the flagged feature should also stamp the flag value**:

```typescript
trackServerEvent('Routine Triggered', {
  routine_id, account_id, user_id,
  feature_flag_enable_routines: featuresFlagConfig.enableRoutines,
  // ... other props
}, userId);
```

This sounds redundant for config flags (they are the same per-environment), but:

- It makes A/B comparison trivial in PostHog if you later split rollout.
- It documents the launch state in the event stream — useful when investigating "did this event fire before or after the flip?"
- It establishes the convention so adding PostHog flags later is mechanical.

## When to Propose Adopting PostHog Feature Flags

If multiple plans in the same quarter need any of these capabilities, propose a dedicated brief to wire up `posthog-js` flag bootstrap + `posthog-node` server-side evaluation:

- Per-account opt-in beta
- Percentage rollout
- A/B experiments with native PostHog reporting
- Multivariate flag values (string variants, not just boolean)
- Killing a feature without redeploying

The cost is real — the integration touches initialization, RSC streaming (flags must arrive before render), middleware, and the analytics layer. A standalone brief, not a smuggled addition.

## Anti-Patterns

- **Reading `process.env` directly in a component** — always go through `featuresFlagConfig`.
- **`if (process.env.NODE_ENV === 'development')`** — use a feature flag instead. Deployed environments may have `NODE_ENV=development` via 1Password.
- **Hardcoded boolean defaults that disagree with `.env.1p`** — always set the env var explicitly per environment.
- **Removing a flag before its corresponding events are removed** — clean up the events first, then the flag, in separate PRs.