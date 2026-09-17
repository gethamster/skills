---
title: Client-Side Tracking
tags: analytics, segment, react, server-actions
---

# Client-Side Analytics Tracking

## When to Use

Use `createAnalyticsTracker()` in:

- Next.js server actions
- React client components
- Client-side hooks

## AnalyticsTracker Pattern

```typescript
import { analytics, createAnalyticsTracker } from '@kit/analytics';

// Create tracker with context
const tracker = createAnalyticsTracker(analytics, {
  user_id: user.id,
  account_id: accountId,
  account_type: 'team',
});

// Track typed events
await tracker.trackBriefCreated({
  brief_id: brief.id,
  account_id: accountId,
  has_initial_content: true,
  content_length: 500,
});
```

## Server Actions

```typescript
'use server';

import { enhanceAction } from '@kit/next/actions';
import { analytics, createAnalyticsTracker } from '@kit/analytics';

export const createBriefAction = enhanceAction(
  async (data, user) => {
    // ... create brief logic ...

    try {
      const tracker = createAnalyticsTracker(analytics, {
        user_id: user.id,
        account_id: data.accountId,
      });

      await tracker.trackBriefCreated({
        brief_id: result.brief.id,
        account_id: data.accountId,
        has_initial_content: !!data.description,
        content_length: data.description?.length || 0,
      });
    } catch (error) {
      console.error('Failed to track brief creation:', error);
      // Don't fail the operation if analytics fails
    }

    return result;
  },
  { auth: true, schema: CreateBriefSchema },
);
```

## Client Components

```tsx
'use client';

import { analytics, createAnalyticsTracker } from '@kit/analytics';

export function ShareButton({ briefId, accountId }: Props) {
  const handleShare = async () => {
    try {
      const tracker = createAnalyticsTracker(analytics, {
        account_id: accountId,
      });

      await tracker.trackBriefShared({
        brief_id: briefId,
        account_id: accountId,
        share_method: 'link',
      });
    } catch (error) {
      console.error('Failed to track share:', error);
    }
  };

  return <button onClick={handleShare}>Share</button>;
}
```

## Tracker Methods

The tracker provides type-safe methods for all events:

```typescript
// Brief events
await tracker.trackBriefCreated({ ... });
await tracker.trackBriefUpdated({ ... });
await tracker.trackBriefShared({ ... });

// Task events
await tracker.trackTaskCreated({ ... });
await tracker.trackTaskCompleted({ ... });
await tracker.trackTaskStatusChanged({ ... });

// AI events
await tracker.trackAIChatMessageSent({ ... });
await tracker.trackAISuggestionAccepted({ ... });

// User lifecycle
await tracker.trackUserActivated({ ... });
await tracker.identifyUser(userId, traits);
```

## Update Context

```typescript
// Update context when switching accounts
tracker.updateContext({
  account_id: newAccountId,
  account_type: 'personal',
});
```

## Identify User

```typescript
import { UserAccessStatus, SubscriptionTier } from '@kit/analytics';

await tracker.identifyUser(userId, {
  email: user.email,
  access_status: UserAccessStatus.ACTIVE,
  subscription_tier: SubscriptionTier.PRO,
  activated_at: new Date().toISOString(),
});
```

## Track Page Views

```tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { analytics } from '@kit/analytics';

export function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    analytics.trackPageView(pathname);
  }, [pathname]);

  return null;
}
```

## Waitlist Signup with UTM

```typescript
'use client';

import { analytics, createAnalyticsTracker } from '@kit/analytics';
import { useSearchParams, usePathname } from 'next/navigation';

export function WaitlistSignupForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSubmit = async (data: { email: string; inviteToken?: string }) => {
    const tracker = createAnalyticsTracker(analytics);

    const source = pathname?.includes('/waitlist')
      ? 'waitlist_page'
      : 'landing_page';

    await tracker.trackWaitlistJoined({
      email: data.email,
      referred_by_code: data.inviteToken ?? undefined,
      source,
      utm_source: searchParams?.get('utm_source') ?? undefined,
      utm_medium: searchParams?.get('utm_medium') ?? undefined,
      utm_campaign: searchParams?.get('utm_campaign') ?? undefined,
    }).catch((error) => {
      console.error('[Analytics] Failed to track waitlist signup:', error);
    });
  };
}
```

## Nullish Coalescing

Handle optional values properly:

```typescript
// Good - Use nullish coalescing for optional strings
analytics.trackEvent('Brief Link Copied', {
  brief_id: briefId ?? '',
  account_id: workspace?.account?.id ?? '',
  share_method: 'copy_link',
});

// Bad - Can cause TypeScript errors
analytics.trackEvent('Brief Link Copied', {
  brief_id: briefId,  // Error if briefId is undefined
  account_id: workspace?.account?.id,  // Error if undefined
});
```

## Environment Variables

```bash
# Client-side tracking (browser, Next.js server actions)
NEXT_PUBLIC_SEGMENT_WRITE_KEY=your_client_segment_write_key
```

## Troubleshooting

### Events Not Firing

1. Check `NEXT_PUBLIC_SEGMENT_WRITE_KEY` is set
2. Verify provider is initialized before tracking
3. Check browser console for errors
4. Check network tab for requests to `api.segment.io`

### TypeScript Errors

- Import types from `@kit/analytics` event-types.ts
- Use nullish coalescing (`?? ''`) for optional strings
- Ensure event properties match EventPropertiesMap types