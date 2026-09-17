---
title: Mixpanel Group Analytics
tags: analytics, mixpanel, account, b2b
---

# Mixpanel Group Analytics

## Overview

Mixpanel Group Analytics allows behavioral data analysis at the **account level** rather than individual users. Critical for B2B SaaS where account health matters more than individual metrics.

**Key Rule**: Every event MUST have `account_id` to be attributed to an account in Mixpanel.

## Implementation Strategy

### Client-Side (Browser)

`account_id` is set as a super property via Segment middleware, automatically injected into ALL client-side events.

```typescript
import { analytics } from '@kit/analytics';

// Set account_id for automatic injection into all events
analytics.setAccountId(accountId);

// Also call group() to set up Group Analytics in Mixpanel
await analytics.group(accountId, {
  account_name: 'Acme Corp',
  account_type: 'team',
  plan: 'enterprise',
  created_at: '2025-01-15T00:00:00Z',
});

// Now all subsequent events automatically include account_id
await tracker.trackBriefCreated({
  brief_id: briefId,
  account_id: accountId,  // Still include explicitly for type safety
  has_initial_content: true,
});
```

### Server-Side (NestJS/API)

`account_id` MUST be explicitly included in EVERY `trackServerEvent()` call:

```typescript
import { trackServerEvent } from '@kit/analytics';

// Good - Includes account_id
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

// Bad - Missing account_id (event won't be attributed to account)
trackServerEvent(
  'Task Created',
  {
    task_id: task.id,
    brief_id: briefId,
    user_id: userId,
  },
  userId,
);
```

## When to Set Account Context

**Call `setAccountId()` and `group()`:**

- When user logs in and account context is available
- When user switches between accounts
- When creating a new account

**Clear on logout:**

```typescript
analytics.setAccountId(null);
```

## User Profile Group Association

Add `account_id` to user profiles as an array (users can belong to multiple accounts):

```typescript
import { identifyServerUser } from '@kit/analytics';

// When user joins or creates an account
identifyServerUser(userId, {
  account_id: [accountId],  // Array format for multiple group membership
  primary_account_id: accountId,
  account_type: 'team',
});

// When user joins additional accounts
identifyServerUser(userId, {
  account_id: [account1Id, account2Id, account3Id],
  primary_account_id: account1Id,
});
```

## Account Properties (Group Traits)

Track account-level properties using `group()`:

```typescript
await analytics.group(accountId, {
  // Identity
  account_name: 'Acme Corporation',
  account_slug: 'acme-corp',

  // Type & Status
  account_type: 'team',  // 'personal' | 'team'
  subscription_tier: 'enterprise',
  subscription_status: 'active',

  // Dates
  created_at: '2025-01-15T00:00:00Z',
  activated_at: '2025-01-16T00:00:00Z',

  // Engagement
  member_count: 15,
  brief_count: 42,
  task_count: 156,
  ai_interaction_count: 289,

  // Business
  plan_renewal_date: '2025-12-31',
  monthly_active_users: 12,
});
```

## Events Without account_id

Some events legitimately occur before account context is available:

- **Waitlist Joined** - User hasn't signed up yet
- **User Activated** - May occur during onboarding
- **Session Started/Ended** - Session-level tracking
- **User Logged In/Out** - Authentication events

For these events, `account_id` can be optional, but they won't be attributed to a group.

## Middleware Architecture

The Segment service includes middleware that automatically injects `account_id` into all client-side events:

```typescript
// In segment-analytics-service.ts initialization
window.analytics.addSourceMiddleware((args) => {
  if (this.currentAccountId && args.payload.obj.type === 'track') {
    args.payload.obj.properties = {
      ...args.payload.obj.properties,
      account_id: this.currentAccountId,
    };
  }
  args.next(args.payload);
});
```

## Testing Group Analytics

### In Mixpanel

1. Go to Users → Click "Analyze Uniques by" dropdown
2. Select "account_id" to view by accounts instead of users
3. Click on an account to see its Group Profile
4. Verify events show up in the account's activity feed

### In Segment Debugger

1. Send a test event from your app
2. Verify `account_id` appears in the event properties
3. Check that `group()` calls are being sent to Segment

## Common Issues

| Issue | Cause | Solution |
| --- | --- | --- |
| Events not in Group Profile | Missing `account_id` | Add `account_id` to all events |
| User events not linked to group | No `group()` call | Call `analytics.group(accountId, traits)` |
| Multiple accounts per user | Account_id not an array | Store as `account_id: ["acc1", "acc2"]` |

## Best Practices

1. **Set account_id early** - Call immediately after authentication
2. **Update on account switch** - Always update when user changes accounts
3. **Include explicitly on server** - Never rely on automatic injection for server-side
4. **Use consistent IDs** - Always use database UUID, never slugs
5. **Track account properties** - Keep group traits updated
6. **Test thoroughly** - Verify in Mixpanel debugger before production