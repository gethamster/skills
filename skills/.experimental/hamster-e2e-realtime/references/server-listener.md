---
title: Server-Side Realtime Event Listener
tags: e2e, realtime, supabase, postgres_changes
---

# Server-Side Realtime Event Listener

## Overview

`waitForRealtimeEvent` creates a temporary Supabase Realtime subscription from the test harness (Node.js side, not browser) to deterministically confirm that a `postgres_changes` event was delivered.

**Location**: `apps/e2e/tests/utils/realtime.ts`

## API

```typescript
function waitForRealtimeEvent<T = Record<string, unknown>>(
  opts: WaitForRealtimeEventOptions,
): { subscribed: Promise<void>; event: Promise<T> }
```

### Parameters

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `table` | `string` | required | Table to listen on |
| `filter` | `string` | required | Supabase filter (e.g., `id=eq.abc-123`) |
| `event` | `'INSERT' \ | 'UPDATE' \ | 'DELETE' \ |
| `timeout` | `number` | `30_000` | Timeout in ms |

### Return Value

| Property | Type | Description |
| --- | --- | --- |
| `subscribed` | `Promise<void>` | Resolves when channel reaches SUBSCRIBED |
| `event` | `Promise<T>` | Resolves with first matching event payload |

## Usage

```typescript
import { waitForRealtimeEvent } from '../../utils/realtime';

// 1. Set up listener BEFORE writing
const rt = waitForRealtimeEvent<{ id: string; yjs_state: string }>({
  table: 'document',
  filter: `id=eq.${documentId}`,
  event: 'UPDATE',
  timeout: 30_000,
});

// 2. Wait for subscription to be ready
await rt.subscribed;

// 3. Perform the DB write
await adminClient.from('document').update({ ... }).eq('id', documentId);

// 4. Wait for the event to be delivered
const payload = await rt.event;
// payload contains the new row data
```

## How It Works

1. Creates a new Supabase client using `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`
2. Subscribes to `postgres_changes` on the specified table/filter
3. `subscribed` resolves when channel status is `SUBSCRIBED`
4. `event` resolves with `payload.new` from the first matching event
5. Auto-cleans up (removes channel) after event or timeout

## Error Handling

- If channel never subscribes within `timeout`, `subscribed` rejects
- If event never arrives within `timeout`, `event` rejects
- If channel errors (`CHANNEL_ERROR` or `TIMED_OUT`), both promises reject

## Common Patterns

### INSERT events (chat messages)

```typescript
const rt = waitForRealtimeEvent({
  table: 'thread_items',
  filter: `thread_id=eq.${threadId}`,
  event: 'INSERT',
});
```

### UPDATE events (document state, thread metadata)

```typescript
const rt = waitForRealtimeEvent({
  table: 'document',
  filter: `id=eq.${documentId}`,
  event: 'UPDATE',
});
```

### Any event

```typescript
const rt = waitForRealtimeEvent({
  table: 'threads',
  filter: `id=eq.${threadId}`,
  // event defaults to '*' — catches INSERT, UPDATE, DELETE
});
```