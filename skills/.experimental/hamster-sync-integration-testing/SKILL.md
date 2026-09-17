---
name: hamster-sync-integration-testing
description: "Deterministic integration testing patterns for `apps/sync`. Use this whenever you need to add, modify, review, or debug sync integration tests, especially if the work involves MSW mocks, Linear webhooks, queue consumers, reconciliation, connection lifecycle HTTP flows, or bidirectional task/brief/initiative sync. This skill should win over generic testing advice whenever the user mentions `apps/sync`, `.integration.spec.ts`, Linear mocking, webhook tests, or sync runtime canaries."
---

# Hamster Sync Integration Testing

## Overview

`apps/sync` integration tests are **not** generic NestJS integration tests. The established repo pattern is:

- use **real Redis + real local Supabase**
- boot a **real `SyncEngineModule` test app**
- replace BullMQ workers with **UUID-suffixed test queues**
- mock **Linear only** with MSW
- drain queue jobs **deterministically inside the test** instead of relying on live workers

This skill exists to keep new sync integration tests aligned with that architecture.

## Use This Skill When

- Adding or editing `apps/sync/src/**/*.integration.spec.ts`
- Writing tests for Linear webhook ingress, inbound sync, outbound sync, reconciliation, or connection lifecycle flows
- Adding MSW handlers or Linear GraphQL overrides for sync tests
- Debugging a flaky or incomplete sync integration test
- Choosing the right sync test harness or spec family for a runtime change

## Core Rules

1. **Keep the boundary honest**

- Integration tests trust DB contracts from `apps/web` and focus on the sync runtime: controller -> queue -> consumer -> orchestrator -> DB state.
- Do not replace Supabase or Redis with mocks in sync integration specs.
- If the behavior under test depends on RLS, triggers, outbox RPCs, or DB constraints, inspect the matching `apps/web/test/database/**` or pgTAP files instead of re-testing the same contract indirectly.

2. **Mock only Linear**

- Use `setupMswTestServer()` from `test/msw/server.ts`.
- Default mode is `strict-linear`: unexpected Linear calls fail, local traffic is allowed through.
- Add shared handlers to `linearBaseHandlers` only when the operation is broadly reused. Use `testServer.use(...)` for one-off behavior.

3. **Use the right harness** (see Quick Reference table below)

- `createInboundAppHarness()` for webhook + inbound queue tests
- `createOutboxHarness()` for outbound event and provider mutation tests (disables background polling automatically)
- `createSyncAppHarness()` for controller, reconciliation, and general multi-queue flows

4. **Process queues manually**

- Use `processWebhookAndInboundJobs`, `processOutboundJobs`, or `processReconciliationAndInboundJobs`.
- Do not rely on background BullMQ workers starting inside the tests.

5. **Preserve deterministic cleanup**

- Use `runIntegrationSpecAfterEach(...)` in full-runtime/MSW specs so cleanup failures do not hide MSW unhandled-request failures.
- Focused ingress or worker specs may use bespoke cleanup instead when they do not boot the shared runtime harness.
- Never reuse a BullMQ queue across tests.

6. **Assert runtime side effects, not only HTTP status**

- Check domain rows (`tasks`, `brief`, `initiatives`)
- Check `sync_entity_mappings`
- Check `sync_logs`
- Check `sync_outbound_events` when relevant

## Quick Reference

| Runtime area changed | Start from | Harness / helpers |
| --- | --- | --- |
| `webhooks/linear-webhook.controller.ts` | `webhooks/linear-webhook.controller.integration.spec.ts` | focused test module + `createTestQueue`, `cleanupQueue` |
| `queues/webhook.consumer.ts`, `queues/inbound-sync.consumer.ts` | `integration/bidirectional-*.integration.spec.ts` | `createInboundAppHarness`, `postLinearWebhook`, `setWebhookSecret`, `processWebhookAndInboundJobs` |
| `queues/outbound-sync.consumer.ts`, `services/outbox-worker.service.ts` | `integration/outbound-operational.integration.spec.ts` or outbound sections in `bidirectional-*.integration.spec.ts` | `createOutboxHarness`, `clearOutboundEvents`, `insertOutboundEvent`, `processOutboundJobs` |
| Outbox claiming, lease handling, dedupe, job-ID generation | `services/outbound-event-worker.integration.spec.ts` or `services/outbox-worker.integration.spec.ts` | focused worker/service setup, direct service invocation, queue assertions |
| `queues/reconciliation.consumer.ts` | `integration/reconciliation-operational.integration.spec.ts` | `createSyncAppHarness`, `createHeaders`, `processReconciliationAndInboundJobs` |
| `controllers/sync-connections.controller.ts` | `controllers/sync-connections.controller.integration.spec.ts` | `createSyncAppHarness({ useTestAuthGuard: true, useValidationPipe: true })`, `request(...)`, queue assertions |
| `adapters/linear/*` | `providers/linear-provider.integration.spec.ts` or adapter-specific integration specs | direct adapter tests + `testServer.use(...)` overrides |
| Document polling / retry / user mapping refresh / retention cleanup | matching `queues/*.integration.spec.ts` | `createSyncAppHarness` and the specific queue under test |
| Orchestration of task / brief / initiative entities | relevant `bidirectional-*.integration.spec.ts` | `createInboundAppHarness` or `createOutboxHarness` depending on direction |

## Canonical Source Files

All paths in this section are relative to `apps/sync/`. Read these before editing tests:

| File | What to look for |
| --- | --- |
| `apps/sync/TESTING.md` | Authoritative test guide — prerequisites, architecture, MSW harness, fixtures, troubleshooting |
| `test/helpers/bidirectional-integration-helpers.ts` | All harness factories, job-processing helpers, actor management, cleanup, auth headers |
| `test/helpers/supabase-helpers.ts` | Seed functions, query helpers, outbox management, admin client factory |
| `test/helpers/bullmq-helpers.ts` | Queue creation with UUID suffix, job completion waiting, cleanup |
| `test/msw/server.ts` | MSW server factory with `strict-linear` mode |
| `test/msw/linear-handlers.ts` | Base handlers for all Linear operations, override factories, error fixtures |
| `test/fixtures/linear-responses.ts` | Factory functions for Linear response shapes, webhook payloads, `signLinearWebhook` |

Representative specs (read the one closest to your change before writing new tests):

- `integration/bidirectional-task-sync.integration.spec.ts`
- `integration/bidirectional-brief-sync.integration.spec.ts`
- `integration/bidirectional-initiative-sync.integration.spec.ts`
- `integration/outbound-operational.integration.spec.ts`
- `integration/reconciliation-operational.integration.spec.ts`
- `controllers/sync-connections.controller.integration.spec.ts`
- `webhooks/linear-webhook.controller.integration.spec.ts`
- `services/outbound-event-worker.integration.spec.ts`
- `services/outbox-worker.integration.spec.ts`
- `msw-interception.integration.spec.ts`

Related DB contract tests to consult when the runtime change depends on DB behavior:

- `apps/web/test/database/**`
- `apps/web/supabase/tests/database/**`

## Test Selection Workflow

1. **Find the matching row** in the Quick Reference table above.
2. **Clone the nearest existing test shape** — do not invent a fresh test harness if the target entity already has a matching bidirectional or operational spec.
3. **Choose the narrowest seam** that proves the behavior:

- Need webhook ingress + HMAC + queue enqueue? test the controller.
- Need provider -> local convergence? use inbound webhook + inbound queue.
- Need local -> provider mutation? seed outbox state and drive outbound processing.
- Need resync / page walking behavior? use reconciliation HTTP flow.
- Need exact GraphQL variable shape? test the adapter directly or capture variables via MSW in an outbound canary.

## New Test Skeleton

Use this as the starting template for a new bidirectional integration spec.

```typescript
import { HttpResponse } from 'msw';

import {
  createLinearIssue, // or createLinearProject, createLinearInitiative
  createLinearWebhookPayload,
} from '../../../../test/fixtures/linear-responses';
import {
  TEST_WEBHOOK_SECRET,
  type TestActor,
  createActor,
  createInboundAppHarness,
  linearProviderConfig,
  postLinearWebhook,
  processWebhookAndInboundJobs,
  runIntegrationSpecAfterEach,
  setWebhookSecret,
} from '../../../../test/helpers/bidirectional-integration-helpers';
import {
  createTestSupabaseAdmin,
  querySyncLogs,
  seedSyncConnection,
} from '../../../../test/helpers/supabase-helpers';
import {
  createLinearQueryOverride,
} from '../../../../test/msw/linear-handlers';
import { setupMswTestServer, testServer } from '../../../../test/msw/server';

import { randomUUID } from 'crypto';

// vi.hoisted runs before module loading — required because the sync engine
// calls getConnectionProviderCredentials at runtime to resolve both webhook
// secrets (inbound) and provider access tokens (outbound/reconciliation).
const vaultCredentialsMock = vi.hoisted(() => vi.fn());

vi.mock('@kit/supabase/vault-connection-credentials', async () => {
  const actual = await vi.importActual<
    typeof import('@kit/supabase/vault-connection-credentials')
  >('@kit/supabase/vault-connection-credentials');

  return {
    ...actual,
    getConnectionProviderCredentials: vaultCredentialsMock,
  };
});

const msw = setupMswTestServer();
const ACTOR_EMAIL_PREFIX = 'my-entity-sync'; // keep unique across spec files

describe('My entity sync (integration)', () => {
  const supabase = createTestSupabaseAdmin();
  const actorsForCleanup: TestActor[] = [];
  const accountIdsForSyncCleanup = new Set<string>();

  beforeAll(msw.beforeAll);

  beforeEach(() => {
    vi.stubEnv('SYNC_ENGINE_ENABLED', 'true');
    vi.stubEnv('SYNC_OUTBOUND_ENABLED', 'true');
    vi.stubEnv(
      'NEXT_PUBLIC_SUPABASE_URL',
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? '',
    );

    // For inbound specs use TEST_WEBHOOK_SECRET; for outbound/reconciliation
    // specs use serializeStoredProviderCredentials({access_token: ...}).
    vaultCredentialsMock.mockResolvedValue(TEST_WEBHOOK_SECRET);
    msw.beforeEach();
  });

  afterEach(async () => {
    vi.unstubAllEnvs();

    await runIntegrationSpecAfterEach({
      supabase,
      actors: actorsForCleanup,
      accountIdsForSyncCleanup,
      msw,
    });
  });

  afterAll(msw.afterAll);

  it('Inbound: creates entity from webhook', async () => {
    const actor = await createActor(ACTOR_EMAIL_PREFIX);
    actorsForCleanup.push(actor);
    accountIdsForSyncCleanup.add(actor.accountId);

    const { connection } = await seedSyncConnection(
      {
        accountId: actor.accountId,
        createdBy: actor.userId,
        syncEnabled: true,
        providerConfig: linearProviderConfig,
      },
      supabase,
    );
    const connectionId = String(connection.id);
    await setWebhookSecret(connectionId);

    const harness = await createInboundAppHarness();
    try {
      testServer.use(
        createLinearQueryOverride('IssueById', async ({ variables }) => {
          return HttpResponse.json({
            data: {
              issue: createLinearIssue({
                id: (variables.id as string) ?? 'linear-issue-1',
                title: 'Expected title',
              }),
            },
          });
        }),
      );

      const payload = createLinearWebhookPayload(
        'Issue',
        'create',
        createLinearIssue({ id: 'linear-issue-1', title: 'Expected title' }),
      );

      const response = await postLinearWebhook({
        app: harness.app,
        accountId: actor.accountId,
        connectionId,
        payload,
        deliveryId: `delivery-${randomUUID()}`,
      });

      expect(response.status).toBe(200);

      await processWebhookAndInboundJobs({
        moduleRef: harness.moduleRef,
        webhookQueue: harness.webhookQueue,
        inboundQueue: harness.inboundQueue,
      });

      // Assert domain row
      const { data: rows } = await supabase
        .from('tasks')
        .select('id,title,status')
        .eq('account_id', actor.accountId)
        .eq('title', 'Expected title')
        .limit(1);

      expect(rows).toHaveLength(1);

      // Assert mapping
      const { data: mapping } = await supabase
        .from('sync_entity_mappings')
        .select('external_entity_type,external_id,hamster_entity_type,hamster_id')
        .eq('sync_connection_id', connectionId)
        .eq('external_id', 'linear-issue-1')
        .single();

      expect(mapping?.hamster_entity_type).toBe('task');
      expect(mapping?.hamster_id).toBe(rows?.[0]?.id);

      // Assert sync log
      const logs = await querySyncLogs(
        connectionId,
        { direction: 'inbound', entityType: 'issue' },
        supabase,
      );

      expect(
        logs.filter((l) => l.operation === 'create' && l.status === 'success'),
      ).toHaveLength(1);
    } finally {
      await harness.cleanup();
    }
  });
});
```

### Skeleton conventions

- **Vault mock with `vi.hoisted`**: every bidirectional spec needs this. For outbound/reconciliation specs, mock with `serializeStoredProviderCredentials({access_token: ...})` instead of `TEST_WEBHOOK_SECRET`.
- **`linearProviderConfig`**: canonical Linear config from `bidirectional-integration-helpers.ts`. Use it so status mapping, team ID, and workspace config match what MSW base handlers expect.
- **Actor tracking**: push every actor to `actorsForCleanup` and add the account ID to `accountIdsForSyncCleanup` immediately after creation.
- **`try / finally` around harness**: always clean up even if the test throws — leaked Redis connections cause "Connection is closed" errors in subsequent tests.
- **`String(connection.id)`**: connection IDs from Supabase are typed `string | number`. Cast once at the top.

## Full-runtime harnesses vs focused worker specs

- **Full-runtime sync specs** boot `SyncEngineModule`, use real Supabase + Redis, and often use MSW at the Linear boundary. These are the `bidirectional-*.integration.spec.ts`, `outbound-operational`, `reconciliation-operational`, and `sync-connections.controller` specs.
- **Focused worker/service integration specs** exercise one worker or service with real queue/storage seams but without the full shared app harness. These are `outbound-event-worker.integration.spec.ts`, `outbox-worker.integration.spec.ts`, etc.

Use the focused specs when the behavior under test is primarily about outbox claiming, lease handling, dedupe, or deterministic job construction. Do not force those cases into the larger operational canary shape.

## Loop suppression and sync markers

This repo uses `sync_entity_mappings.last_sync_origin` and `last_sync_applied_at` to suppress immediate echo loops. When testing follow-up inbound or outbound behavior:

- prefer directly nulling or backdating those fields in test setup
- avoid `sleep` or arbitrary timeouts to wait out the suppression window

```typescript
// Deactivate suppression for a follow-up inbound update test
await supabase
  .from('sync_entity_mappings')
  .update({ last_sync_origin: null, last_sync_applied_at: null })
  .eq('sync_connection_id', connectionId)
  .eq('external_id', 'linear-issue-1');
```

`NULL` values in both fields bypass the check entirely.

## MSW and Fixtures

See `apps/sync/TESTING.md` for the full MSW setup reference, fixture factory list, and error helper catalog.

Key decision rules:

- Add to `linearBaseHandlers` when the same Linear operation will be used across several tests.
- Use `createLinearQueryOverride` or `createLinearMutationOverride` when the behavior is specific to one test.
- Base handlers intentionally validate minimal required inputs (e.g. `IssueCreate` rejects missing `title` or `teamId`). Do not weaken them to make a test pass — override the operation instead.
- Service-level integration tests use MSW. Lower-level adapter or service unit specs use direct `vi.stubGlobal('fetch', ...)`. Default to MSW + harness for sync integration tests.

## Assertions That Matter

Prefer these repo-native assertions over shallow status checks:

- domain row updated in the correct table
- mapping row exists and points to the expected `hamster_id` / `external_id`
- `sync_logs` contains the expected `direction`, `entity_type`, `operation`, and `status`
- `sync_outbound_events.processed_at` changed when testing outbound completion
- relevant queue received the right job name when testing HTTP flows

For initiative-related sync, remember that `initiative_briefs` is the canonical relationship set. When a change affects initiative/project linkage, assert the canonical link rows instead of treating `brief.initiative_id` as the primary contract.

## Anti-Patterns

- Do **not** mock Supabase or Redis in sync integration tests.
- Do **not** put new sync integration tests outside `apps/sync/src/**/*.integration.spec.ts`.
- Do **not** use arbitrary sleeps for queue or suppression timing.
- Do **not** reuse a queue after cleanup; create fresh queues in `beforeEach`.
- Do **not** bypass unexpected Linear requests with `'bypass'` unless the test explicitly needs it.
- Do **not** assert only the local entity row when mappings or sync logs are the real contract.
- Do **not** forget `clearOutboundEvents(...)` before asserting update/delete outbox events for an entity that was just inserted.
- Do **not** pass `accountId` where a real auth user ID is required (for example `initiatives.owner_id` references `auth.users.id`).
- Do **not** forget `vi.unstubAllEnvs()` in afterEach — env stubs leak across tests without it.
- Do **not** skip the vault credentials mock — the sync engine calls `getConnectionProviderCredentials` to resolve both webhook secrets and provider tokens.
- Do **not** forget `try / finally` around harness usage — leaked Redis connections cause "Connection is closed" errors in subsequent tests.

## Verification

Run the smallest useful test first:

```bash
pnpm --filter sync exec vitest run --config vitest.config.integration.ts \
  apps/sync/src/modules/sync-engine/<path-to-spec>.integration.spec.ts
```

Then run the full integration suite when the change affects shared helpers, MSW setup, queue wiring, or multiple spec families:

```bash
pnpm --filter sync test:integration
```

If runtime code changed alongside tests, also run:

```bash
pnpm --filter sync typecheck
```

If the change touches shared helpers, queue wiring, or sync runtime code beyond a narrow test-only edit, also run:

```bash
pnpm --filter sync build
```
