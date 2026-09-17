# Session Management for Background Jobs

## Rule: Prefer AiUserSessionProvider over SupabaseAdminClient

Background jobs and queue consumers **MUST** use `AiUserSessionProvider` to obtain an authenticated Supabase client instead of using `SupabaseAdminClient` directly. The session provider returns a client scoped to the team's AI user, which means **RLS policies are enforced** and all writes carry a proper audit trail.

Reserve `SupabaseAdminClient` for the narrow cases where RLS must be bypassed (e.g., Vault operations, cross-tenant lookups during bootstrap).

## Architecture

```
@kit/api-core/session
  AiUserSessionManager          # Shared: token caching, distributed locking, client creation
    - getTeamAiUserSession()    # Returns cached session (tokens) for a team
    - getTeamAiUserSessionClient()  # Returns authenticated SupabaseClient<Database>
    - withLock()                # Distributed lock via redlock-universal

apps/ai/src/modules/ai-session/
  AiUserSessionProvider         # App-level wrapper: converts sessions into AiUserService instances
    - getTeamAiUserSession()    # Returns AiUserService for an account
    - getThreadAiUserSession()  # Returns AiUserService resolved from a thread ID
    - getTeamAiUserSessionClient()  # Returns raw SupabaseClient<Database>
    - getThreadAiUserSessionClient() # Returns raw client resolved from thread
```

### When to use which method

| Need | Method | Returns |
| --- | --- | --- |
| Full service with repositories | `getTeamAiUserSession(accountId)` / `getThreadAiUserSession(threadId)` | `AiUserService` |
| Raw Supabase client only | `getTeamAiUserSessionClient(accountId)` / `getThreadAiUserSessionClient(threadId)` | `SupabaseClient<Database>` |

## Usage in BullMQ Consumers

Inject `AiUserSessionProvider` and resolve the session at the start of job processing:

```typescript
@Processor(QUEUE_NAMES.MY_QUEUE)
@Injectable()
export class MyConsumer extends WorkerHost {
  constructor(
    private readonly aiUserSessionProvider: AiUserSessionProvider,
  ) {
    super();
  }

  async process(job: Job<MyJobData>): Promise<void> {
    // Resolve authenticated AI user from thread or account
    const aiUserService =
      await this.aiUserSessionProvider.getThreadAiUserSession(job.data.threadId);

    // Get typed Supabase client (RLS enforced as AI user)
    const supabase = await aiUserService.getClient();

    // All queries run as the team's AI user with RLS
    const { data } = await supabase
      .from('thread_items')
      .select('*')
      .eq('thread_id', job.data.threadId);

    // Or use built-in repositories
    const chatRepository = await aiUserService.getChatRepository();
    await chatRepository.setAiAgentActivityStatus(job.data.threadId, true);
  }
}
```

## Usage in Services

Services that run in background contexts (called from consumers, not HTTP requests) follow the same pattern:

```typescript
@Injectable()
export class MyBackgroundService {
  constructor(
    private readonly aiUserSessionProvider: AiUserSessionProvider,
  ) {}

  async processForAccount(accountId: string): Promise<void> {
    // Get client scoped to team's AI user
    const client =
      await this.aiUserSessionProvider.getTeamAiUserSessionClient(accountId);

    const { data } = await client
      .from('briefs')
      .select('*')
      .eq('account_id', accountId);
  }
}
```

## When SupabaseAdminClient IS Appropriate

Only use admin client when you genuinely need to bypass RLS:

- **Vault operations**: Storing/retrieving encrypted secrets (API keys, tokens)
- **Cross-tenant lookups during bootstrap**: e.g., resolving which team owns a thread before the session is established
- **System-level operations**: Operations that span multiple tenants or have no user context

```typescript
// Example from AiUserService.createForThread - admin needed to resolve team BEFORE session exists
static async createForThread(threadId: string, sessionManager: AiUserSessionManager) {
  const adminClient = this.createAdminClient();

  // Admin client needed: no session yet, need to look up which team owns this thread
  const { data: thread } = await adminClient
    .from('threads')
    .select('account_id')
    .eq('id', threadId)
    .maybeSingle();

  // Now create the session-scoped service
  return new AiUserService(thread.account_id, sessionManager);
}
```

## Module Setup

To use `AiUserSessionProvider`, import `AiSessionModule`:

```typescript
@Module({
  imports: [AiSessionModule],
  providers: [MyConsumer],
})
export class MyModule {}
```

The `AiSessionModule` provides:

- `AiUserSessionManager` (from `@kit/api-core/session`) - handles token caching + distributed locking via Redis
- `AiUserSessionProvider` - app-level composition wrapper
- Bootstrap function wired to `SupabaseAdminService` for initial token generation

## Key Properties

- **RLS enforced**: All queries respect row-level security as the AI user
- **Cached tokens**: Sessions are cached in Redis (30-min TTL) with distributed locking to prevent thundering herd
- **Audit trail**: Writes are attributed to the AI user, not an anonymous admin
- **Thread-safe**: `withLock()` uses redlock-universal for safe concurrent access across service instances