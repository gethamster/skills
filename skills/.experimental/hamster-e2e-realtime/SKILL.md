---
name: hamster-e2e-realtime
description: "Deterministic realtime E2E testing patterns for Supabase postgres_changes. Use when writing E2E tests that seed data via DB and expect it to appear in the browser via Supabase Realtime."
version: "1.0.0"
---

# Hamster E2E Realtime Testing Patterns

## Overview

Deterministic patterns for E2E tests that seed data via Supabase admin client and expect it to appear in the browser via `postgres_changes`. Eliminates flaky timeouts by guaranteeing subscription readiness before writing.

## When to Apply

- Writing E2E tests that insert/update data via admin client and expect realtime propagation
- Testing features that use `postgres_changes` (chat threads, Y.js document sync, live updates)
- Any test where the browser receives data via Supabase Realtime WebSocket

## Quick Reference

| Task | Pattern | Reference |
| --- | --- | --- |
| Seed data via DB with realtime delivery | Pre-subscribe → write → wait | [realtime-seeding.md](references/realtime-seeding.md) |
| Wait for browser channel subscription | WebSocket interception | [browser-interception.md](references/browser-interception.md) |
| Wait for server-side event delivery | `waitForRealtimeEvent` | [server-listener.md](references/server-listener.md) |

## Core Pattern

```typescript
// 1. Wait for browser's realtime channel to be subscribed
await pageObject.waitForDocumentChannelSubscribed(documentId);

// 2. Set up server-side listener
const rt = waitForRealtimeEvent({
  table: 'document',
  filter: `id=eq.${documentId}`,
  event: 'UPDATE',
});
await rt.subscribed;

// 3. Write to DB — both browser and test harness are listening
await adminClient.from('document').update({ ... }).eq('id', documentId);

// 4. Wait for event delivery confirmation
await rt.event;

// 5. Assert UI updated
await expect(page.locator('[data-test="tiptap-editor"] img')).toHaveCount(1);
```

## Anti-Patterns (MUST NOT)

```typescript
// WRONG — arbitrary timeout, no subscription guarantee
await page.waitForTimeout(3000);
await adminClient.from('documents').update({ ... });

// WRONG — polling without subscription guarantee
await expect(async () => {
  const count = await page.locator('img').count();
  expect(count).toBeGreaterThanOrEqual(1);
}).toPass({ timeout: 30000 });
```

## Known Channel Names

| Feature | Channel Topic | Table | Event |
| --- | --- | --- | --- |
| Chat thread items | `realtime:thread:${threadId}:items` | `thread_items` | `INSERT` |
| Thread summary/metadata | `realtime:thread-summary:${threadId}` | `threads` | `UPDATE` |
| Y.js document sync | `realtime:yjs:doc:${documentId}` | `document` | `UPDATE` |

## Page Object Integration

POs that extend `ChatPageObject` have access to `this.realtimeInterceptor` (`protected`):

```typescript
export class MyFeaturePageObject extends BriefsPageObject {
  async waitForDocumentChannelSubscribed(documentId: string, timeoutMs = 15_000) {
    await this.realtimeInterceptor.waitForChannel(
      `realtime:yjs:doc:${documentId}`,
      timeoutMs,
    );
  }
}
```

## References

- [realtime-seeding.md](references/realtime-seeding.md) - Full deterministic seeding pattern with sequence diagram
- [browser-interception.md](references/browser-interception.md) - Browser-side WebSocket interception
- [server-listener.md](references/server-listener.md) - Server-side `waitForRealtimeEvent` utility

## Key Files

| File | Purpose |
| --- | --- |
| `apps/e2e/tests/utils/realtime.ts` | `waitForRealtimeEvent` — server-side listener |
| `apps/e2e/tests/utils/realtime-interception.ts` | `createRealtimeInterceptor` — browser WebSocket tracking |
| `apps/e2e/tests/chat/chat.po.ts` | `ChatPageObject` — base PO with realtime interceptor |
| `apps/e2e/tests/chat/utils/thread-seed-utils.ts` | Reference implementation (threads) |
| `packages/y-supabase/src/provider.ts` | `SupabaseCollabProvider` — channel naming, self-save filter |
