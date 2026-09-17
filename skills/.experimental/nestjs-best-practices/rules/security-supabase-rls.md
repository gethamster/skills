---
title: Enforce Supabase RLS via Request-Scoped Clients
impact: CRITICAL
impactDescription: Prevents data leaks between tenants by ensuring every query runs with the authenticated user's JWT
tags:

- security
- supabase
- rls
- multi-tenant

---

# Enforce Supabase RLS via Request-Scoped Clients

## Why It Matters

Row Level Security (RLS) is the primary data isolation mechanism in a multi-tenant Supabase application. RLS policies evaluate against the JWT of the current request. If a singleton Supabase client is used, or an admin client is used unnecessarily, RLS is bypassed and any user can access any tenant's data.

## Anti-Pattern: Singleton or Admin Client for User Queries

```typescript
// ❌ WRONG: Singleton client — no user JWT, RLS sees anon role
@Injectable()
export class TasksService {
  private readonly client: SupabaseClient;

  constructor() {
    this.client = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!,
    );
  }

  async getTasks(accountId: string) {
    // RLS cannot identify the user — returns nothing or wrong data
    return this.client.from('tasks').select('*').eq('account_id', accountId);
  }
}

// ❌ WRONG: Admin client for regular queries — bypasses all RLS
@Injectable()
export class TasksService {
  constructor(private readonly supabase: SupabaseService) {}

  async getTasks(accountId: string) {
    const client = this.supabase.getAdminClient(); // Bypasses RLS!
    return client.from('tasks').select('*').eq('account_id', accountId);
  }
}
```

## Correct Pattern: REQUEST-Scoped SupabaseService

```typescript
// ✅ CORRECT: SupabaseService is REQUEST-scoped, creates client with user JWT
@Injectable({ scope: Scope.REQUEST })
export class SupabaseService {
  private supabaseClient: SupabaseClient<Database>;

  constructor(@Inject(REQUEST) private request: Request) {
    const token = request.headers.authorization?.replace('Bearer ', '');

    // Client created with user's JWT — RLS policies enforced automatically
    this.supabaseClient = createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        headers: {
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      },
    });
  }

  getClient(): SupabaseClient<Database> {
    return this.supabaseClient;
  }

  /**
   * Admin client bypasses RLS — use ONLY for system operations
   * where you manually validate auth and authorization.
   */
  getAdminClient(): SupabaseClient<Database> {
    // Creates client with service_role key
    // ...
  }
}
```

```typescript
// ✅ CORRECT: Service uses user-scoped client — RLS enforced
@Injectable()
export class TasksService {
  constructor(private readonly supabase: SupabaseService) {}

  async getTasks(accountId: string) {
    const client = this.supabase.getClient(); // User JWT attached
    const { data, error } = await client
      .from('tasks')
      .select('id, title, status')
      .eq('account_id', accountId);

    if (error) throw error;
    return data;
  }
}
```

## Background Processing: AIUserSessionManager (CRITICAL)

`SupabaseService` is REQUEST-scoped — it requires an HTTP request with an `Authorization` header. This means it **cannot be used** in BullMQ queue processors, scheduled jobs, or any background context without a user request.

**Do NOT use `getAdminClient()` as a workaround.** The admin client bypasses all RLS, defeating the purpose of tenant isolation. Instead, use `AIUserSessionManager` to authenticate as the team's dedicated AI agent user — a real user subject to all RLS policies.

### Anti-Pattern: Admin Client in Background Jobs

```typescript
// ❌ WRONG: Admin client in queue processor — bypasses RLS entirely
@Processor('orchestration-flow')
export class OrchestrationFlowConsumer extends WorkerHost {
  constructor(private readonly supabase: SupabaseService) {
    super();
  }

  async process(job: Job<{ accountId: string }>) {
    // Admin client has service_role — no RLS, no tenant isolation
    const client = this.supabase.getAdminClient();
    const { data } = await client.from('tasks').select('*')
      .eq('account_id', job.data.accountId);
  }
}

// ❌ WRONG: Injecting SupabaseService into a singleton processor
// SupabaseService is REQUEST-scoped — there IS no request in a queue processor
// NestJS will throw a scope mismatch error or create a broken instance
```

### Correct Pattern: AIUserSessionManager

`AIUserSessionManager` provides a Supabase client authenticated as the team's AI agent user. This AI user:

- Is a real `auth.users` entry with its own UUID and JWT
- Is automatically provisioned when a team is created (via `kit.handle_new_team_ai_agent()` trigger)
- Has `auth.uid()` visible to RLS policies — all policies apply normally
- Has its session cached in Redis (30-min TTL) with distributed locking to prevent race conditions

```typescript
// ✅ CORRECT: Use AIUserSessionManager for background processing
@Processor('orchestration-flow')
export class OrchestrationFlowConsumer extends WorkerHost {
  constructor(
    private readonly aiUserSessionManager: AiUserSessionManager,
  ) {
    super();
  }

  async process(job: Job<{ accountId: string; briefId: string }>) {
    const { accountId, briefId } = job.data;

    // Get a Supabase client authenticated as the team's AI agent
    // RLS is fully enforced — the AI user can only access this team's data
    const client = await this.aiUserSessionManager
      .getTeamAiUserSessionClient(accountId);

    const { data: tasks, error } = await client
      .from('tasks')
      .select('id, title, status')
      .eq('account_id', accountId)
      .eq('brief_id', briefId);

    if (error) throw error;
    // Process tasks...
  }
}
```

### Getting Repositories via AIUserSessionManager

For operations that need repository instances, use `getTeamAiUserSession()` to get the `AiUserService` which can provide an authenticated client:

```typescript
// ✅ CORRECT: Get AI user service for repository creation
const aiUserService = await this.aiUserSessionManager
  .getTeamAiUserSession(accountId);
const client = aiUserService.getClient();

// Pass the authenticated client to repository factory functions
const taskRepo = createTaskRepository(client, this.logger);
await taskRepo.createTasksBulk(accountId, tasks, aiUserId);
```

### Thread-Scoped Sessions

For chat/thread operations, resolve the AI session from the thread ID:

```typescript
// ✅ CORRECT: Resolve team from thread, then get AI client
const aiUserService = await this.aiUserSessionManager
  .getThreadAiUserSession(threadId);
const client = aiUserService.getClient();
```

### How It Works Under the Hood

1. **Fast path (99% of calls)**: Check Redis cache for valid JWT → return immediately
2. **Cache miss**: Acquire distributed lock → call `public.get_team_ai_agent(account_id)` RPC → authenticate via magic link → cache session in Redis (30-min TTL)
3. **Concurrent safety**: `redlock` ensures only one job per team performs the expensive auth operation

## When Admin Client Is Acceptable

Use `getAdminClient()` only for narrow system-level operations where no user identity makes sense:

- **AI user provisioning itself** — `get_team_ai_agent` RPC (bootstrapping the AI user)
- **Cross-tenant admin queries** — with manual authorization checks in application code
- **Schema introspection** — reading database metadata

**Never** use admin client for reading or writing tenant data in background jobs. Use `AIUserSessionManager` instead.

## Key Guidelines

1. **HTTP requests → `SupabaseService.getClient()`** — user JWT from Authorization header, RLS enforced
2. **Background jobs → `AIUserSessionManager.getTeamAiUserSessionClient()`** — AI user JWT from Redis cache, RLS enforced
3. **Admin client → last resort** — only for operations that genuinely need to bypass RLS, always document why
4. **SupabaseService is REQUEST-scoped** — cannot be injected into singleton services or queue processors
5. **Scope bubbles up** — any service injecting SupabaseService also becomes request-scoped; be aware of the performance implications
6. **Repository pattern helps** — pass the client into factory functions so repositories don't manage scope themselves
7. **Never store Supabase client in module-level variables** — this creates a singleton that ignores per-request JWTs