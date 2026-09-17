---
name: hamster-analytics
description: "Analytics tracking patterns for Segment, Mixpanel, and user engagement metrics. Use when implementing event tracking, user properties, or engagement counters."
---

# Hamster Analytics Patterns

## Quick Reference

| Task | Pattern | Reference |
| --- | --- | --- |
| Track server event (NestJS) | `trackServerEvent('Event Name', props, userId)` | [server-tracking.md](references/server-tracking.md) |
| Track client event | `createAnalyticsTracker(analytics, context)` | [client-tracking.md](references/client-tracking.md) |
| Set account context | `analytics.setAccountId(accountId)` | [group-analytics.md](references/group-analytics.md) |
| Update user properties | `identifyServerUser(userId, traits)` | [user-traits.md](references/user-traits.md) |
| Mark feature adoption | `UserTraitManager.markFeatureAdoption(userId, 'feature')` | [user-traits.md](references/user-traits.md) |
| Increment engagement | `UserTraitManager.incrementEngagementCounter(userId, 'counter', count)` | [user-traits.md](references/user-traits.md) |

## When to Apply

- Adding event tracking to new features
- Implementing user property updates
- Adding feature adoption flags or engagement counters
- Working with Mixpanel Group Analytics (account_id)
- Implementing session replay privacy controls

## Architecture Overview

**Dual-mode system:**

1. **Server-side** (NestJS): `trackServerEvent()` with `SEGMENT_WRITE_KEY`
2. **Client-side** (Browser/Server Actions): `createAnalyticsTracker()` with `NEXT_PUBLIC_SEGMENT_WRITE_KEY`

```
┌─────────────────────────────────────────────────────────────────┐
│                    Analytics Architecture                        │
├─────────────────────────────────────────────────────────────────┤
│ NestJS Services/API     →  trackServerEvent()    →  Segment     │
│ Next.js Server Actions  →  createAnalyticsTracker() → Segment   │
│ Client Components       →  createAnalyticsTracker() → Segment   │
│                                                         ↓       │
│                                                    Mixpanel     │
│                                                    (+ Session   │
│                                                     Replay)     │
└─────────────────────────────────────────────────────────────────┘
```

## Critical Rules

1. **Always include `account_id`** - Required for Mixpanel Group Analytics
2. **Use snake_case** for property names: `account_id`, `user_id`, `brief_id`
3. **Use Title Case** for event names: `'Brief Created'`, `'Task Completed'`
4. **Never block operations** - Wrap analytics in try-catch
5. **Add feature adoption** - New features need `has_used_*` flag + engagement counter

## Key Patterns

### Server-Side Tracking (NestJS)

```typescript
import { trackServerEvent } from '@kit/analytics';

trackServerEvent(
  'Task Created',
  {
    task_id: task.id,
    brief_id: briefId,
    account_id: accountId,  // REQUIRED for Group Analytics
    user_id: userId,
    creation_method: 'ai_generated',
  },
  userId,
);
```

### Client/Server Action Tracking

```typescript
import { analytics, createAnalyticsTracker } from '@kit/analytics';

const tracker = createAnalyticsTracker(analytics, {
  user_id: user.id,
  account_id: accountId,
});

await tracker.trackBriefCreated({
  brief_id: brief.id,
  account_id: accountId,
  has_initial_content: true,
});
```

### New Feature Checklist

When adding a new user-facing feature:

- [ ] Add tracking event with `account_id`
- [ ] Add `has_used_feature` boolean to UserProperties
- [ ] Add `feature_usage_count` number to UserProperties
- [ ] Add to `markFeatureAdoption()` union type
- [ ] Add to `incrementEngagementCounter()` union type
- [ ] Implement first-time detection
- [ ] Track milestone event with `time_since_signup_hours`

## References

- [server-tracking.md](references/server-tracking.md) - NestJS/API tracking patterns
- [client-tracking.md](references/client-tracking.md) - Client and server action tracking
- [group-analytics.md](references/group-analytics.md) - Mixpanel Group Analytics (account_id)
- [session-replay.md](references/session-replay.md) - Mixpanel Session Replay privacy
- [user-traits.md](references/user-traits.md) - Feature adoption and engagement counters
- [event-catalog.md](references/event-catalog.md) - Event dictionary and user properties

## Key Files

| File | Purpose |
| --- | --- |
| `packages/analytics/src/event-types.ts` | Event dictionary with TypeScript types |
| `packages/analytics/src/user-properties.ts` | User trait definitions and enums |
| `packages/analytics/src/user-trait-manager.ts` | Feature adoption and engagement |
| `packages/analytics/src/server-analytics.ts` | Server-side tracking functions |
| `packages/analytics/src/tracking-utils.ts` | AnalyticsTracker class |
