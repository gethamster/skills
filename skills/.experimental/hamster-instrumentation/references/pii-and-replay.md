---
title: PII & Session Replay
tags: pii, privacy, session-replay, masking, gdpr
---

# PII & Session Replay

## The Boundary

Hamster Studio enforces a **grep-able PII boundary**: any property that may contain user-identifiable data must be named with a `_pii` suffix. Properties without the suffix must not contain PII.

Defined in `packages/analytics/src/property-types.ts`. Forbidden raw keys (no suffix variants allowed):

```
email, full_name, first_name, last_name, phone, ip_address,
credit_card, card_number, ssn, dob, address, postal_code
```

Allowed `_pii` variants when explicitly justified:

```
email_pii, phone_pii, error_message_pii
```

The TypeScript types refuse to accept forbidden keys at compile time. The convention also makes it possible to grep for PII flow:

```bash
rg "_pii\b" packages/analytics/ apps/
```

## When to Add a `*_pii` Property

**Default to omitting PII.** Only add a `*_pii` property if there is a concrete operational need:

| Need | Property | Justification |
| --- | --- | --- |
| Support routing | `email_pii` | Sales/CS uses email to look up the user in PostHog |
| Error correlation | `error_message_pii` | Sentry has the trace; truncate to first 200 chars |
| Webhook debugging | `webhook_payload_pii` | Truncate; redact tokens |

If the data is in another system already (Sentry trace, application DB), do not duplicate it into PostHog.

## Truncation & Redaction

```typescript
// Bad — full payload, may contain tokens
trackServerEvent('Webhook Received', {
  webhook_payload_pii: JSON.stringify(req.body),
});

// Good — truncated and key-stripped
trackServerEvent('Webhook Received', {
  webhook_keys: Object.keys(req.body).slice(0, 20),
  webhook_payload_size_bytes: JSON.stringify(req.body).length,
  webhook_payload_pii: JSON.stringify(req.body).slice(0, 500),
});
```

Standard truncation budget: 200 chars for error messages, 500 for payloads. Anything longer goes to Sentry/logs, not PostHog.

## Session Replay (Mixpanel + optional PostHog)

Session replay is **enabled in production via Mixpanel** and **disabled by default for PostHog** (toggleable via `NEXT_PUBLIC_POSTHOG_ENABLE_SESSION_REPLAY`).

### Default masking (already wired up)

- All `<input type="password">` elements are masked
- All `<input type="email">` elements are masked
- Inputs with `name`/`id` matching `credit|card|ssn` are masked
- Block selector: `.mp-sensitive` or `[data-sensitive="true"]` — element is hidden from recording
- Mask-text selector: `.mp-mask-pii` — text content replaced with `*****`

### Marking sensitive UI

```tsx
// Block an entire section from recording
<div className="mp-sensitive">
  <CredentialsForm />
</div>

// Mask text but keep layout visible
<p className="mp-mask-pii">{user.email}</p>

// Data attribute equivalent
<div data-sensitive="true">
  <SecretViewer />
</div>
```

**When in doubt, block.** Layout reveal is better than text leak.

### Manually pausing recording for a sensitive flow

```tsx
'use client';
import { useSessionReplay } from '@kit/analytics';
import { useEffect } from 'react';

export function SensitiveFlow() {
  const { stopRecording, startRecording } = useSessionReplay();

  useEffect(() => {
    stopRecording();
    return () => startRecording();
  }, [stopRecording, startRecording]);

  return <CredentialsCapture />;
}
```

Use this pattern for credential entry, payment forms, and any flow where the entire DOM tree is sensitive.

### Sample rate

`NEXT_PUBLIC_MIXPANEL_RECORDING_PERCENTAGE` (0–100) and `NEXT_PUBLIC_POSTHOG_SESSION_REPLAY_SAMPLE_RATE` (0.0–1.0) control sampling. Lower sample rates = lower privacy surface area + lower cost.

## Plan-Time Privacy Checklist

For every plan, answer:

- [ ] Does any input field accept secrets, tokens, API keys, or PII?

- If yes: wrap container with `mp-sensitive` (block) or `mp-mask-pii` (mask).

- [ ] Does the rendered output contain other users' data, customer info, or third-party content?

- If yes: same — mark the container.

- [ ] Will any event property contain user-supplied free text?

- If yes: truncate, and use `_pii` suffix if the field is identifiable.

- [ ] Does the feature involve a credential entry / payment / secret reveal flow?

- If yes: use `useSessionReplay` to pause recording during the flow.

- [ ] Do any error paths log raw user input?

- If yes: truncate to 200 chars and rename to `error_message_pii`.

## What to Tell Users

Hamster's privacy policy disclosure already covers product analytics + session replay. New features do **not** need additional consent UI unless:

- They process special-category data (health, financial, biometric)
- They cross a regulatory boundary (HIPAA, PCI scope)
- The feature is a free-form "paste anything here" surface where users may submit content the policy did not anticipate

If you hit any of those, surface it in the plan and route to legal/privacy review **before** implementation.

## Operational Notes

- Session replay storage cost is real. If you are turning the sample rate up, model the cost.
- Mixpanel and PostHog are independent — masking config must be set on both.
- Recording is **client-only**; server events are unaffected by replay settings.