---
title: Browser-Side WebSocket Interception
tags: e2e, realtime, websocket, playwright
---

# Browser-Side WebSocket Interception

## Overview

`createRealtimeInterceptor` intercepts the browser's Supabase Realtime WebSocket and tracks which Phoenix channels have successfully joined. This lets tests wait until the browser is actually subscribed before seeding data.

**Location**: `apps/e2e/tests/utils/realtime-interception.ts`

## How It Works

1. Listens for `page.on('websocket')` events targeting Realtime URLs
2. Parses Phoenix protocol frames (JSON arrays: `[joinRef, ref, topic, event, payload]`)
3. Tracks successful joins (`phx_reply` with `status: "ok"`)
4. Removes channels on `phx_leave`, `phx_close`, or `phx_error`
5. Clears all channels on WebSocket close

## Usage

```typescript
import { createRealtimeInterceptor } from '../../utils/realtime-interception';

// MUST be created before first page navigation
const interceptor = createRealtimeInterceptor(page);

// Navigate — components mount and subscribe to channels
await page.goto('/home/my-team/briefs/abc-123');

// Wait for a specific channel to be subscribed
await interceptor.waitForChannel('realtime:yjs:doc:abc-123', 15_000);

// Check if a channel has joined (non-blocking)
if (interceptor.hasJoined('realtime:yjs:doc:abc-123')) {
  // Already subscribed
}
```

## Integration with ChatPageObject

`ChatPageObject` creates the interceptor in its constructor and exposes it as `protected`:

```typescript
export class ChatPageObject {
  protected readonly realtimeInterceptor;

  constructor(page: Page) {
    this.realtimeInterceptor = createRealtimeInterceptor(page);
  }

  async waitForRealtimeConnected(threadId: string, timeoutMs = 15000) {
    await this.realtimeInterceptor.waitForChannel(
      `realtime:thread:${threadId}:items`,
      timeoutMs,
    );
  }
}
```

All POs extending `ChatPageObject` (including `BriefsPageObject` and its subclasses) can access `this.realtimeInterceptor` to define custom channel waiters.

## Channel Topic Naming Convention

Supabase Realtime prefixes channel names with `realtime:`. The topic format is:

```
realtime:<channel-name-from-code>
```

Where `<channel-name-from-code>` is the string passed to `supabase.channel(name)`.

Examples:

- Code: `supabase.channel('yjs:doc:abc-123')` → Topic: `realtime:yjs:doc:abc-123`
- Code: `supabase.channel('thread:xyz:items')` → Topic: `realtime:thread:xyz:items`