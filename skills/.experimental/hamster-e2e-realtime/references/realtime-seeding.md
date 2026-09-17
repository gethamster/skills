---
title: Deterministic Realtime Seeding Pattern
tags: e2e, realtime, supabase, postgres_changes
---

# Deterministic Realtime Seeding Pattern

## The Problem

When E2E tests insert data directly into the DB and expect it to appear in the browser via Supabase Realtime, there's a race condition: if data is written before the browser's WebSocket subscription is ready, the `postgres_changes` event fires but nobody is listening. The browser never sees the data, causing flaky test failures.

## The Solution: Pre-Subscribe, Then Write, Then Verify

```
Browser (Supabase Client)          Test Harness                 Database
───────────────────────────────────────────────────────────────────────
      │                                  │                           │
      ├─ Subscribe to channel ──────────>│                           │
      │  (WebSocket phx_join)            │                           │
      │                                  │                           │
      │<─ phx_reply (status="ok") ───────│                           │
      │  (channel SUBSCRIBED)            │                           │
      │                                  │<─ Subscribe to table ─────┤
      │                                  │  (postgres_changes)       │
      │                                  ├─ Wait for SUBSCRIBED ────>│
      │                                  │                           │
      │                                  │<─ SUBSCRIBED ─────────────┤
      │                                  │                           │
      │                                  ├─ INSERT/UPDATE row ──────>│
      │                                  │                           │
      │<─ postgres_changes event ───────────────────────────────────┤
      │  (payload with new row)          │                           │
      │                                  │<─ postgres_changes event ─┤
      │                                  │                           │
      └─ Renders in UI ─────────────────┴─ Test asserts ────────────>
```

## Implementation in a Page Object

```typescript
import { waitForRealtimeEvent } from '../../utils/realtime';

export class MyFeaturePageObject extends BriefsPageObject {
  private readonly supabaseAdmin: SupabaseClient;

  async waitForDocumentChannelSubscribed(documentId: string, timeoutMs = 15_000) {
    await this.realtimeInterceptor.waitForChannel(
      `realtime:yjs:doc:${documentId}`,
      timeoutMs,
    );
  }

  async insertDataWithRealtimeSync(documentId: string, newState: string) {
    // 1. Wait for browser subscription
    await this.waitForDocumentChannelSubscribed(documentId);

    // 2. Server-side listener
    const rt = waitForRealtimeEvent({
      table: 'document',
      filter: `id=eq.${documentId}`,
      event: 'UPDATE',
    });
    await rt.subscribed;

    // 3. Write to DB
    await this.supabaseAdmin
      .from('document')
      .update({ yjs_state: newState })
      .eq('id', documentId);

    // 4. Confirm delivery
    await rt.event;
  }
}
```

## Usage in Tests

```typescript
test('data should appear via realtime', async ({ page }) => {
  // ... create brief, get documentId ...

  // Insert data — PO handles all realtime coordination
  await pageObject.insertDataWithRealtimeSync(documentId, newState);

  // Assert — data is guaranteed to have been delivered
  await expect(page.locator('[data-test="my-element"]')).toBeVisible();
});
```

## Reference Implementation: Thread Seed Utility

The canonical implementation lives in `apps/e2e/tests/chat/utils/thread-seed-utils.ts`:

```typescript
async seedMessage(threadId: string, messages: ThreadSeedMessage[]): Promise<string[]> {
  // 1. Wait for browser's realtime channel to be subscribed
  await this.chat.waitForRealtimeConnected(threadId);

  // 2. Set up server-side realtime listener
  const rt = waitForRealtimeEvent({
    table: 'thread_items',
    filter: `thread_id=eq.${threadId}`,
    event: 'INSERT',
  });
  await rt.subscribed;

  // 3. Insert data into DB via service role client
  const ids = await this.seeder.addThreadMessages(threadId, messages);

  // 4. Wait for realtime event to propagate
  await rt.event;

  return ids;
}
```

## Self-Save Filter (Y.js Provider)

The `SupabaseCollabProvider` skips `postgres_changes` events received within 2 seconds of its last save (to avoid reloading its own writes). After editor initialization triggers a save, external DB writes within that 2s window are silently dropped.

The deterministic pattern handles subscription timing, but for Y.js tests you may still need a brief wait after editor init to clear the self-save window:

```typescript
await pageObject.waitForEditor();
await page.waitForTimeout(3000); // Clear self-save filter window

// Now use deterministic pattern
await pageObject.insertImageNodeIntoDocument(documentId, src);
```

The self-save filter is at `packages/y-supabase/src/provider.ts` in `handleExternalDatabaseUpdate()`.