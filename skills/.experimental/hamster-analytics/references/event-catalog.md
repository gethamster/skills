---
title: Event Catalog
tags: analytics, events, tracking
---

# Event Catalog

All events are defined in `packages/analytics/src/event-types.ts` with full TypeScript types.

## Event Categories

### Acquisition Events

Waitlist, referrals, invitations.

| Event | Method | Key Properties |
| --- | --- | --- |
| Waitlist Joined | `trackWaitlistJoined()` | `email`, `source`, `utm_*` |
| Referral Successful | `trackReferralSuccessful()` | `referrer_id`, `referred_user_id` |
| Invite Sent | `trackInviteSent()` | `account_id`, `invitee_email` |
| Invite Accepted | `trackInviteAccepted()` | `account_id`, `inviter_id` |
| Referral Link Shared | `trackReferralLinkShared()` | `user_id`, `share_method` |

### Activation Events

Onboarding, first actions, milestones.

| Event | Method | Key Properties |
| --- | --- | --- |
| User Activated | `trackUserActivated()` | `user_id`, `activation_source` |
| Account Created | `trackAccountCreated()` | `account_id`, `account_type` |
| Milestone Reached | `trackMilestoneReached()` | `milestone_type`, `days_since_signup` |
| Onboarding Started | `trackOnboardingStarted()` | `user_id` |
| Onboarding Step Completed | `trackOnboardingStepCompleted()` | `step_name`, `step_number` |
| Onboarding Completed | `trackOnboardingCompleted()` | `user_id`, `completion_time_hours` |
| First Brief Created | `trackFirstBriefCreated()` | `user_id`, `time_since_signup_hours` |
| First Task Created | `trackFirstTaskCreated()` | `user_id`, `time_since_signup_hours` |
| First AI Interaction | `trackFirstAIInteraction()` | `user_id`, `time_since_signup_hours` |

### Brief Management Events

CRUD operations on briefs.

| Event | Method | Key Properties |
| --- | --- | --- |
| Brief Created | `trackBriefCreated()` | `brief_id`, `account_id`, `has_initial_content` |
| Brief Updated | `trackBriefUpdated()` | `brief_id`, `account_id`, `fields_changed` |
| Brief Deleted | `trackBriefDeleted()` | `brief_id`, `account_id` |
| Brief Shared | `trackBriefShared()` | `brief_id`, `account_id`, `share_method` |
| Brief Duplicated | `trackBriefDuplicated()` | `brief_id`, `account_id` |
| Brief Exported | `trackBriefExported()` | `brief_id`, `account_id`, `export_format` |

### Task Management Events

Task lifecycle.

| Event | Method | Key Properties |
| --- | --- | --- |
| Task Created | `trackTaskCreated()` | `task_id`, `brief_id`, `account_id`, `creation_method` |
| Task Updated | `trackTaskUpdated()` | `task_id`, `brief_id`, `account_id` |
| Task Completed | `trackTaskCompleted()` | `task_id`, `brief_id`, `completion_time_hours` |
| Task Deleted | `trackTaskDeleted()` | `task_id`, `brief_id`, `account_id` |
| Task Assigned | `trackTaskAssigned()` | `task_id`, `assignee_id` |
| Task Status Changed | `trackTaskStatusChanged()` | `task_id`, `old_status`, `new_status` |
| Subtask Created | `trackSubtaskCreated()` | `subtask_id`, `parent_task_id` |

### AI Interaction Events

AI feature usage.

| Event | Method | Key Properties |
| --- | --- | --- |
| AI Chat Started | `trackAIChatStarted()` | `chat_id`, `account_id` |
| AI Chat Message Sent | `trackAIChatMessageSent()` | `chat_id`, `message_length` |
| AI Response Received | `trackAIResponseReceived()` | `chat_id`, `response_time_ms` |
| AI Suggestion Accepted | `trackAISuggestionAccepted()` | `suggestion_type` |
| AI Suggestion Rejected | `trackAISuggestionRejected()` | `suggestion_type`, `rejection_reason` |
| AI Task Generated | `trackAITaskGenerated()` | `task_count`, `brief_id` |
| AI Content Enhanced | `trackAIContentEnhanced()` | `content_type`, `enhancement_type` |
| AI Edit Applied | `trackAIEditApplied()` | `edit_type`, `document_id` |
| Context Retrieved | `trackContextRetrieved()` | `source_type`, `chunk_count` |

### Team Collaboration Events

Team interactions.

| Event | Method | Key Properties |
| --- | --- | --- |
| Account Switched | `trackAccountSwitched()` | `from_account_id`, `to_account_id` |
| Team Member Invited | `trackTeamMemberInvited()` | `account_id`, `invitee_email` |
| Team Member Joined | `trackTeamMemberJoined()` | `account_id`, `role` |
| Team Member Removed | `trackTeamMemberRemoved()` | `account_id`, `removed_user_id` |
| Comment Added | `trackCommentAdded()` | `entity_type`, `entity_id` |
| Mention Created | `trackMentionCreated()` | `mentioned_user_id` |

### Session Events

Authentication and sessions.

| Event | Method | Key Properties |
| --- | --- | --- |
| Session Started | `trackSessionStarted()` | `user_id` |
| Session Ended | `trackSessionEnded()` | `session_duration_minutes` |
| User Logged In | `trackUserLoggedIn()` | `auth_method` |
| User Logged Out | `trackUserLoggedOut()` | `user_id` |

## Naming Conventions

### Event Names

- Use **Title Case**: `'Brief Created'`, `'Task Completed'`
- Follow **Object Action** pattern: `'Brief Created'` not `'Create Brief'`

### Property Names

- Use **snake_case**: `account_id`, `user_id`, `completion_time_hours`
- Include IDs for entities: `brief_id`, `task_id`, `user_id`
- Include context: `account_id`, `account_type`

## Type Safety

Use typed methods from the tracker:

```typescript
import { analytics, createAnalyticsTracker } from '@kit/analytics';
import type { EventPropertiesMap } from '@kit/analytics';

// Type-safe tracking
const tracker = createAnalyticsTracker(analytics, { account_id: accountId });

// Properties are fully typed
const properties: EventPropertiesMap['Brief Created'] = {
  brief_id: brief.id,
  account_id: accountId,
  has_initial_content: true,
  content_length: 500,
};

await tracker.trackBriefCreated(properties);
```

## Required vs Optional Properties

Check `packages/analytics/src/event-types.ts` for the exact interface of each event:

```typescript
// Example: Brief Created event
interface BriefCreatedProperties {
  brief_id: string;           // Required
  account_id: string;         // Required
  has_initial_content: boolean;  // Required
  content_length?: number;    // Optional
  template_used?: string;     // Optional
}
```

## Common Mistakes

### Wrong Case

```typescript
// Wrong - camelCase
{ briefId: brief.id, accountId: accountId }

// Correct - snake_case
{ brief_id: brief.id, account_id: accountId }
```

### Missing Context

```typescript
// Wrong - missing account_id
trackServerEvent('Task Created', { task_id: task.id }, userId);

// Correct - includes account_id
trackServerEvent('Task Created', {
  task_id: task.id,
  account_id: accountId,
  user_id: userId,
}, userId);
```

### Wrong Event Name

```typescript
// Wrong - verb first
await tracker.trackEvent('Create Brief', props);

// Correct - object first
await tracker.trackBriefCreated(props);
```