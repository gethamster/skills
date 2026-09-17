---
title: User Traits Management
tags: analytics, user-properties, feature-adoption, engagement
---

# User Traits Management

## Overview

When implementing NEW user-facing features, you MUST add:

1. **Feature Adoption Flag** - Boolean marking first-time usage
2. **Engagement Counter** - Numeric counter tracking total usage

## Feature Adoption Flags

Track when users discover and use features for the first time.

### When to Add

- Any new user-facing feature that represents a meaningful product capability
- Actions that indicate product adoption (creating content, using AI, inviting team members)

### Implementation Steps

#### 1. Update UserTraitManager

In `packages/analytics/src/user-trait-manager.ts`:

```typescript
static async markFeatureAdoption(
  userId: string,
  feature: 'brief' | 'task' | 'ai' | 'team_invite' | 'referral'
    | 'plan' | 'task_complete' | 'alignment_vote' | 'your_new_feature'  // Add here
): Promise<void> {
  const traitMap: Record<typeof feature, keyof PartialUserProperties> = {
    // ... existing mappings ...
    your_new_feature: 'has_used_new_feature',  // Add mapping
  };
  // ...
}
```

#### 2. Add to UserProperties

In `packages/analytics/src/user-properties.ts`:

```typescript
// FEATURE ADOPTION section
/** Whether user has used the new feature */
has_used_new_feature?: boolean;
```

#### 3. Implement First-Time Detection

In the feature's server action/controller:

```typescript
// After successful action, check if first time
const { count: userActionCount } = await client
  .from('your_table')
  .select('*', { count: 'exact', head: true })
  .eq('created_by', user.id);

const isFirstTime = userActionCount === 1;

if (isFirstTime) {
  // Mark feature adoption
  await UserTraitManager.markFeatureAdoption(user.id, 'your_new_feature');

  // Track milestone event
  const { data: userAccount } = await client
    .from('accounts')
    .select('created_at')
    .eq('id', user.id)
    .single();

  const timeSinceSignupHours = userAccount?.created_at
    ? Math.floor((Date.now() - new Date(userAccount.created_at).getTime()) / (1000 * 60 * 60))
    : undefined;

  trackServerEvent(
    'First New Feature Used',
    {
      user_id: user.id,
      feature_id: 'new_feature',
      time_since_signup_hours: timeSinceSignupHours,
    },
    user.id,
  );
}
```

### Current Feature Adoption Flags

| Flag | Description |
| --- | --- |
| `has_created_brief` | User created their first brief |
| `has_created_task` | User created their first task |
| `has_used_ai` | User sent their first AI chat message |
| `has_invited_team` | User sent their first team invitation |
| `has_shared_referral` | User shared their referral link |
| `has_generated_plan` | User generated their first plan |
| `has_completed_task` | User marked their first task complete |
| `has_voted_alignment` | User submitted their first alignment vote |

## Engagement Counters

Track cumulative feature usage for cohort analysis and power user identification.

### When to Add

- Any repeatable user action that indicates engagement
- Actions that can be counted (created, completed, sent, etc.)

### Implementation Steps

#### 1. Update UserTraitManager

In `packages/analytics/src/user-trait-manager.ts`:

```typescript
static async incrementEngagementCounter(
  userId: string,
  counter:
    | 'brief_count'
    | 'task_count'
    | 'ai_interaction_count'
    | 'tasks_completed_count'
    | 'alignment_votes_count'
    | 'team_invites_count'
    | 'teams_created_count'
    | 'session_count'
    | 'new_feature_usage_count',  // Add here
  currentCount: number
): Promise<void>
```

#### 2. Add to UserProperties

In `packages/analytics/src/user-properties.ts`:

```typescript
// ENGAGEMENT METRICS section
/** Total number of times new feature was used */
new_feature_usage_count?: number;
```

#### 3. Implement Counter Increment

```typescript
// After successful action, get current count
const { count: currentCount } = await client
  .from('your_table')
  .select('*', { count: 'exact', head: true })
  .eq('created_by', user.id);

// Increment counter (subtract 1 since count includes just-created item)
await UserTraitManager.incrementEngagementCounter(
  user.id,
  'new_feature_usage_count',
  (currentCount || 1) - 1,
);
```

### Current Engagement Counters

| Counter | Description |
| --- | --- |
| `brief_count` | Total briefs created by user |
| `task_count` | Total tasks created (manual and AI-generated) |
| `ai_interaction_count` | Total AI chat messages sent |
| `tasks_completed_count` | Total tasks marked complete |
| `alignment_votes_count` | Total alignment votes submitted |
| `team_invites_count` | Total team invitations sent |
| `teams_created_count` | Total teams created by user |
| `session_count` | Total login sessions |

## Complete Implementation Checklist

When adding a new feature:

- [ ] Add feature name to `markFeatureAdoption()` union type
- [ ] Add `has_used_feature` boolean to UserProperties
- [ ] Add mapping in `markFeatureAdoption()` traitMap
- [ ] Add counter name to `incrementEngagementCounter()` union type
- [ ] Add `feature_usage_count` number to UserProperties
- [ ] Implement first-time detection with count query
- [ ] Call `markFeatureAdoption()` on first use
- [ ] Track milestone event (e.g., "First Feature Used") with `time_since_signup_hours`
- [ ] Implement counter increment on every use
- [ ] Call `incrementEngagementCounter()` on every use
- [ ] Wrap all analytics in try-catch blocks
- [ ] Test that traits appear in Segment user profile

## User Properties Reference

Key enums from `packages/analytics/src/user-properties.ts`:

```typescript
enum UserAccessStatus {
  WAITING = 'waiting',
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  CHURNED = 'churned',
}

enum ActivationSource {
  BATCH = 'batch',
  REFERRAL = 'referral',
  INVITE = 'invite',
}

enum SubscriptionTier {
  FREE = 'free',
  PRO = 'pro',
  ENTERPRISE = 'enterprise',
}

enum SubscriptionStatus {
  ACTIVE = 'active',
  TRIALING = 'trialing',
  PAST_DUE = 'past_due',
  CANCELED = 'canceled',
  INCOMPLETE = 'incomplete',
}

enum AccountType {
  PERSONAL = 'personal',
  TEAM = 'team',
}
```