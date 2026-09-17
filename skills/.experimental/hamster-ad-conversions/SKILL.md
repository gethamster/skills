---
name: hamster-ad-conversions
description: "Ad platform pixel and conversion tracking for LinkedIn and Reddit. Use when adding conversion events, modifying tracking pixels, or working with ad platform integrations."
version: "1.0.0"
---

# Ad Platform Conversion Tracking

## Architecture

Three layers of tracking across LinkedIn and Reddit:

| Layer | Purpose | Implementation | Fires |
| --- | --- | --- | --- |
| **Pixel / Insight Tag** | Page visits, retargeting audiences | Inline scripts in root layout | Every page load |
| **Enhanced matching** | Match visitors to ad platform accounts | `identifyLinkedIn()` / `identifyReddit()` | On sign-in |
| **Conversion events** | Track specific actions for campaign optimization | Client-side (SignUp) + Server CAPI (Brief Created, Team Invite) | On event |

## File Map

### Client-Side (Pixel + Enhanced Matching)

| File | Purpose |
| --- | --- |
| `apps/web/app/layout.tsx` | LinkedIn Insight Tag + Reddit Pixel scripts in `<body>` / `<head>` |
| `apps/web/lib/linkedin.ts` | `identifyLinkedIn(email)` — enhanced matching; `trackLinkedInConversion(conversionId)` — client-side event tracking |
| `apps/web/lib/reddit.ts` | `identifyReddit(userId, email)` — advanced matching; `trackRedditConversion(event)` — client-side event tracking |
| `apps/web/components/auth-provider.tsx` | Calls `identifyLinkedIn` + `identifyReddit` on `INITIAL_SESSION` and `SIGNED_IN` |
| `apps/web/components/analytics-provider.tsx` | Fires client-side SignUp conversions on `user.signedUp` event |

### Server-Side (Conversions API / CAPI)

| File | Purpose |
| --- | --- |
| `packages/analytics/src/shared/ad-conversions.ts` | `trackAdConversion()` — fires to both LinkedIn and Reddit CAPIs |
| `packages/analytics/src/shared/index.ts` | Re-exports `trackAdConversion` and `AdConversionEvent` |
| `apps/web/app/home/[account]/_lib/briefs/brief.actions.ts` | Fires `BRIEF_CREATED` conversion |
| `apps/web/app/brief/new/_lib/server/server-actions.ts` | Fires `BRIEF_CREATED` conversion (alternate creation path) |
| `packages/features/team-accounts/src/server/actions/team-invitations-server-actions.ts` | Fires `TEAM_INVITE` conversion |

## How to Add a New Conversion Event

### 1. Define the event

In `packages/analytics/src/shared/ad-conversions.ts`, add to `CONVERSION_EVENTS`:

```typescript
const CONVERSION_EVENTS: Record<string, ConversionEvent> = {
  // ... existing events
  YOUR_EVENT: {
    linkedInConversionIdEnv: 'LINKEDIN_CONVERSION_ID_YOUR_EVENT',
    redditTrackingType: 'CUSTOM', // or a standard type like 'PURCHASE', 'LEAD'
    redditCustomEventName: 'Your Event Name', // only when tracking_type is CUSTOM
  },
};
```

Add the key to the `AdConversionEvent` union type:

```typescript
export type AdConversionEvent = 'SIGNUP' | 'TEAM_INVITE' | 'BRIEF_CREATED' | 'YOUR_EVENT';
```

### 2. Create LinkedIn conversion rule

In LinkedIn Campaign Manager → Measurement → Conversion Tracking:

- Create a new conversion with method **Conversions API**
- Note the conversion rule ID
- Add to 1Password as `linkedin/conversion-id-your-event`

### 3. Add env vars

In `apps/web/.env.1p`:

```
LINKEDIN_CONVERSION_ID_YOUR_EVENT=op://${VAULT_NAME}/linkedin/conversion-id-your-event
```

### 4. Fire the conversion

In the server action where the event occurs:

```typescript
import { trackAdConversion } from '@kit/analytics/server';

// After the action succeeds
if (user.email) {
  trackAdConversion('YOUR_EVENT', {
    email: user.email,
    userId: user.id,
  });
}
```

## Conversion Event Reference

| Event | Key | LinkedIn | Reddit | Where |
| --- | --- | --- | --- | --- |
| Sign up | `SIGNUP` | Event-specific (client) | `SignUp` standard (client) | `analytics-provider.tsx` |
| Brief created | `BRIEF_CREATED` | CAPI | CAPI custom | `brief.actions.ts` |
| Team invite | `TEAM_INVITE` | CAPI | CAPI custom | `team-invitations-server-actions.ts` |

## Environment Variables

### Client-side (NEXT_PUBLIC_)

| Variable | Purpose | 1Password |
| --- | --- | --- |
| `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` | Insight Tag partner ID | `linkedin/partner-id` |
| `NEXT_PUBLIC_LINKEDIN_CONVERSION_SIGNUP` | SignUp conversion rule ID (client-side) | `linkedin/conversion-id-signup` |
| `NEXT_PUBLIC_REDDIT_PIXEL_ID` | Reddit Pixel ID | `reddit/pixel-id` |

### Server-side

| Variable | Purpose | 1Password |
| --- | --- | --- |
| `LINKEDIN_CAPI_ACCESS_TOKEN` | LinkedIn CAPI OAuth token | `linkedin/capi-access-token` |
| `LINKEDIN_AD_ACCOUNT_ID` | LinkedIn ad account ID | `linkedin/ad-account-id` |
| `LINKEDIN_CONVERSION_ID_SIGNUP` | SignUp conversion rule ID | `linkedin/conversion-id-signup` |
| `LINKEDIN_CONVERSION_ID_TEAM_INVITE` | Team Invite conversion rule ID | `linkedin/conversion-id-team-invite` |
| `LINKEDIN_CONVERSION_ID_BRIEF_CREATED` | Brief Created conversion rule ID | `linkedin/conversion-id-brief-created` |
| `REDDIT_PIXEL_ID` | Reddit Pixel ID (server-side) | `reddit/pixel-id` |
| `REDDIT_CAPI_ACCESS_TOKEN` | Reddit CAPI access token | `reddit/capi-access-token` |

## API Reference

### LinkedIn Conversions API

- **Endpoint**: `POST https://api.linkedin.com/rest/conversionEvents`
- **Auth**: Bearer token with `rw_conversions` + `r_ads` scopes
- **Headers**: `LinkedIn-Version: 202603`, `X-Restli-Protocol-Version: 2.0.0`
- **User matching**: SHA-256 hashed email (`idType: SHA256_EMAIL`)
- **Docs**: https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/conversions-api

### Reddit Conversions API (v3)

- **Endpoint**: `POST https://ads-api.reddit.com/api/v3/pixels/{pixel_id}/conversion_events`
- **Auth**: Bearer token (generated in Events Manager)
- **Standard tracking types**: `SIGN_UP`, `PURCHASE`, `LEAD`, `ADD_TO_CART`, `VIEW_CONTENT`, `SEARCH`, `CUSTOM`
- **User matching**: SHA-256 hashed email + external_id
- **Rate limit**: 1000 req/s, events within 7 days
- **Docs**: https://ads-api.reddit.com/docs/v3/capi-direct-integration

## Important Notes

- `trackAdConversion()` is fire-and-forget — errors are logged, never thrown. Ad tracking must never break the app.
- LinkedIn CAPI access tokens expire and may need refresh (3-legged OAuth).
- Reddit CAPI tokens are static once generated.
- All PII is SHA-256 hashed before transmission to both platforms.
- Reddit requires event deduplication if using both Pixel and CAPI for the same event. SignUp currently fires client-side only, so no dedup needed. If you add server-side SignUp tracking, implement dedup via `conversion_id`.
