---
title: Server-Side Tracking
tags: analytics, segment, nestjs, server
---

# Server-Side Analytics Tracking

## When to Use

Use `trackServerEvent()` directly in:

- NestJS services
- NestJS controllers
- API modules
- Background jobs

## Basic Pattern

```typescript
import { trackServerEvent, identifyServerUser } from '@kit/analytics';

@Injectable()
export class PlanGenerationService {
  async generatePlan(briefId: string, userId: string, accountId: string) {
    // ... business logic ...

    try {
      trackServerEvent(
        'Task Created',
        {
          task_id: task.id,
          brief_id: briefId,
          account_id: accountId,  // REQUIRED for Group Analytics
          user_id: userId,
          creation_method: 'ai_generated',
          has_subtasks: false,
        },
        userId,
      );
    } catch (error) {
      this.logger.error('Failed to track analytics:', error);
      // Don't fail the operation if analytics fails
    }

    return result;
  }
}
```

## Function Signatures

### trackServerEvent

```typescript
function trackServerEvent(
  eventName: string,
  properties: Record<string, unknown>,
  userId?: string  // Defaults to 'anonymous'
): void;
```

**Key Points:**

- Third parameter is `userId` (optional, defaults to 'anonymous')
- Include `user_id` in properties AND as third parameter
- No need to initialize - singleton auto-initializes with `SEGMENT_WRITE_KEY`

### identifyServerUser

```typescript
function identifyServerUser(
  userId: string,
  traits: Partial<UserProperties>
): void;
```

**Example:**

```typescript
identifyServerUser(userId, {
  email: 'user@example.com',
  name: 'John Doe',
  access_status: 'active',
  activation_source: 'invite',
  account_type: 'team',
});
```

## Required Properties

Every server-side event MUST include:

| Property | Type | Description |
| --- | --- | --- |
| `account_id` | `string` | Account UUID for Group Analytics |
| `user_id` | `string` | User UUID |

## Common Patterns

### Track Multiple Items

```typescript
// Track each task in a batch
createdTasks.forEach((task) => {
  trackServerEvent(
    'Task Created',
    {
      task_id: task.id,
      brief_id: briefId,
      account_id: accountId,
      user_id: userId,
      creation_method: 'ai_generated',
    },
    userId,
  );
});
```

### With Time Calculations

```typescript
const createdAt = new Date(task.created_at);
const completedAt = new Date();
const completionTimeHours =
  (completedAt.getTime() - createdAt.getTime()) / (1000 * 60 * 60);

trackServerEvent(
  'Task Completed',
  {
    task_id: taskId,
    brief_id: briefId,
    account_id: accountId,
    user_id: userId,
    completion_time_hours: Math.round(completionTimeHours * 100) / 100,
  },
  userId,
);
```

### First-Time Detection with Milestone

```typescript
// Check if first time
const { count } = await client
  .from('tasks')
  .select('*', { count: 'exact', head: true })
  .eq('created_by', userId);

if (count === 1) {
  // Track milestone event
  const { data: user } = await client
    .from('accounts')
    .select('created_at')
    .eq('id', userId)
    .single();

  const timeSinceSignupHours = user?.created_at
    ? Math.floor((Date.now() - new Date(user.created_at).getTime()) / (1000 * 60 * 60))
    : undefined;

  trackServerEvent(
    'First Task Created',
    {
      user_id: userId,
      feature_id: 'task',
      time_since_signup_hours: timeSinceSignupHours,
    },
    userId,
  );
}
```

## Error Handling

```typescript
try {
  trackServerEvent('Event Name', properties, userId);
} catch (error) {
  // Log but don't throw - analytics should never break operations
  this.logger.error('Failed to track event:', error);
}
```

## Environment Variables

```bash
# Server-side tracking (NestJS, API modules)
SEGMENT_WRITE_KEY=your_server_segment_write_key
```

## Troubleshooting

### Events Not Firing

1. Check `SEGMENT_WRITE_KEY` is set in environment
2. Verify events are wrapped in try-catch
3. Check server logs for initialization errors
4. Enable `NODE_ENV=development` for debug logs

### Missing User Context

Always include both:

- `user_id` in properties
- `userId` as third parameter

```typescript
// Correct
trackServerEvent('Event', { user_id: userId, ... }, userId);

// Wrong - missing third parameter
trackServerEvent('Event', { user_id: userId, ... });
```