---
title: Mixpanel Session Replay
tags: analytics, mixpanel, session-replay, privacy
---

# Mixpanel Session Replay

## Configuration

Session Replay settings are configured in `apps/web/config/analytics.config.ts`:

```typescript
mixpanel: {
  token: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
  debug: process.env.NODE_ENV === 'development',
  recordSessionsPercent: process.env.NEXT_PUBLIC_MIXPANEL_RECORDING_PERCENTAGE
    ? Math.max(0, Math.min(100, parseInt(process.env.NEXT_PUBLIC_MIXPANEL_RECORDING_PERCENTAGE, 10)))
    : 100,  // Default to 100% if not specified
  recordBlockClass: 'mp-sensitive',      // Blocks entire element
  recordMaskTextClass: 'mp-mask-pii',    // Masks text only
}
```

## Environment Variables

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_MIXPANEL_TOKEN` | Mixpanel project token | Required |
| `NEXT_PUBLIC_MIXPANEL_RECORDING_PERCENTAGE` | 0-100 recording percentage | 100 |

## Privacy Controls

By default, **all content is visible** in replays. Only elements with specific CSS classes are blocked or masked.

### Block Entire Element

Use `mp-sensitive` to completely hide an element from recording:

```tsx
<div className="mp-sensitive">
  <input type="text" name="credit_card" />
  <input type="text" name="ssn" />
</div>
```

**Use for:**

- Credit card inputs
- SSN/government ID fields
- API keys
- Admin-only data

### Mask Text Only

Use `mp-mask-pii` to show structure but mask the text (displays as `*****`):

```tsx
<input type="password" className="mp-mask-pii" />
<input type="email" className="mp-mask-pii" />
<span className="mp-mask-pii">{user.phoneNumber}</span>
```

**Use for:**

- Email addresses
- Names
- Phone numbers
- Passwords

## Manual Recording Controls

Use `useSessionReplay()` hook to programmatically control recording:

```tsx
'use client';

import { useSessionReplay } from '@kit/analytics';

export function SensitiveWorkflow() {
  const { startRecording, stopRecording } = useSessionReplay();

  const handleEnterPayment = () => {
    stopRecording();  // Stop recording before payment
  };

  const handlePaymentComplete = () => {
    startRecording();  // Resume recording after payment
  };

  return (
    <div>
      <button onClick={handleEnterPayment}>Enter Payment</button>
      {/* Payment form */}
      <button onClick={handlePaymentComplete}>Complete Payment</button>
    </div>
  );
}
```

### Use Cases for Manual Control

- Stop recording in payment workflows
- Stop during admin/sensitive areas
- Force start for high-value user actions
- Conditional recording (premium users only)

## Integration with Segment

Events flow through Segment to Mixpanel with replay properties automatically attached:

```
User Action → Segment Event → Middleware injects $mp_replay_id → Mixpanel
              ↓
        Mixpanel SDK captures session video
              ↓
        Replay linked to events via $mp_replay_id
```

No changes needed to existing analytics tracking code - replays are automatically linked to events.

## Best Practices

### Protect Sensitive Data

```tsx
// Payment information - block entirely
<div className="mp-sensitive">
  <CreditCardForm />
</div>

// Personal info - mask text
<form>
  <input type="email" className="mp-mask-pii" placeholder="Email" />
  <input type="text" className="mp-mask-pii" placeholder="Full name" />
  <input type="tel" className="mp-mask-pii" placeholder="Phone" />
</form>
```

### Admin Areas

```tsx
// Stop recording in admin areas
useEffect(() => {
  if (isAdminRoute) {
    stopRecording();
  }
  return () => {
    if (isAdminRoute) {
      startRecording();
    }
  };
}, [isAdminRoute]);
```

### Form Fields Checklist

| Field Type | Class | Behavior |
| --- | --- | --- |
| Password | `mp-mask-pii` | Masked |
| Email | `mp-mask-pii` | Masked |
| Phone | `mp-mask-pii` | Masked |
| Full name | `mp-mask-pii` | Masked |
| Credit card | `mp-sensitive` | Hidden |
| CVV | `mp-sensitive` | Hidden |
| SSN | `mp-sensitive` | Hidden |
| API keys | `mp-sensitive` | Hidden |

## Debugging

### Verify Recording Status

```tsx
import { useSessionReplay } from '@kit/analytics';

function DebugPanel() {
  const { isRecording } = useSessionReplay();

  return (
    <div>
      Recording: {isRecording ? 'Yes' : 'No'}
    </div>
  );
}
```

### Check Replay in Mixpanel

1. Open Mixpanel
2. Go to an event in the event feed
3. Click "Watch Session" to view the replay
4. Verify sensitive areas are blocked/masked