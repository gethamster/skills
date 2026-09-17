---
name: hamster-nest-module-pr-check
description: "PR checklist for NestJS module and dependency-injection changes in apps/ai, apps/sync, and packages/api/core. MUST USE when a PR changes *.module.ts, AppModule, module imports/providers/controllers/exports, @Injectable constructor dependencies, custom provider tokens, dynamic modules, or @Global modules."
metadata:
  category: "Review"
---

# NestJS Module PR Check

Use this skill conditionally during PR review. It targets the failure mode where TypeScript and unit tests pass but Nest cannot construct the application because a provider is missing from the runtime module graph.

## Trigger

Apply when the PR diff contains any of the following:

- `apps/ai/src/**/*.module.ts`
- `apps/sync/src/**/*.module.ts`
- `packages/api/core/src/**/*.module.ts`
- `app.module.ts` or module barrel exports in those services/packages
- `@Module({ ... })` metadata: `imports`, `providers`, `controllers`, or `exports`
- `@Injectable()` constructor parameters, `@Inject(...)` tokens, factory `inject` arrays, `useExisting`, `useFactory`, `@Global()`, or dynamic-module registration
- A provider, controller, consumer, guard, filter, interceptor, pipe, or repository moved between modules

Determine this from the PR diff against its actual base branch, not from the current working tree alone:

```bash
git diff <base>...HEAD --name-only
git diff <base>...HEAD -- 'apps/ai/**/*.ts' 'apps/sync/**/*.ts' 'packages/api/core/**/*.ts'
```

If none of the trigger conditions match, record `N/A — no NestJS module or DI surface changed` and stop.

## Review checklist

### 1. Build the module graph

For every changed module, record a small table of:

| Module | Imports | Providers | Exports | Controllers |
|---|---|---|---|---|

Read the complete `@Module` metadata, including dynamic registrations such as `BullModule.registerQueue(...)`, `ConfigModule.forRoot(...)`, and `CacheModule.register(...)`. Follow imported module definitions far enough to verify exported tokens; do not treat an import as automatically exposing all of its providers.

### 2. Verify every injected token

For each changed or newly reachable class, inspect:

- constructor-injected classes and `@Inject(TOKEN)` parameters;
- factory provider `inject` arrays;
- `useExisting` aliases and exported injection tokens;
- queue names consumed by `@Processor`/`WorkerHost` providers.

Every token must be visible from the declaring module through one of these paths:

1. declared in that module's `providers`;
2. exported by an imported module;
3. provided by a deliberately global module; or
4. registered by the relevant dynamic module.

A provider being imported as a TypeScript symbol is not sufficient. A unit test that manually lists providers is not proof that the production module graph resolves them.

### 3. Validate module metadata

- Every item in `exports` is declared locally or is re-exported from an imported module.
- Export only the public API needed by consuming modules; do not export implementation-only services.
- Providers moved to another module have their consumers updated and the owning module is imported where needed.
- Factory providers list all runtime dependencies in `inject` and use the correct token, not merely a matching TypeScript type.
- `@Global()` is used only for genuinely application-wide infrastructure; prefer explicit imports for feature dependencies. The AI session layer is a feature dependency, not infrastructure — do **not** mark it `@Global()`.
- Shared session access uses the ordinary DI path: import `AiUserSessionModule` from `@kit/api-core/session` and constructor-inject `AiUserSessionManager` (as `RepoSyncService`, `MeasuresService`, and the GitLab credential resolver do). Do **not** invent a dynamic-module session token (`Module.register({ sessionManager })`, `useExisting` alias, or a package-local session interface) to hand the manager across a module boundary — a static module import shares one instance and needs no token.
- Dynamic module configuration is present in the application path that instantiates the feature.
- BullMQ queue registration names match the consumer/producer constants exactly.

### 4. Reject circular-DI workarounds

Treat new or expanded `forwardRef(...)` usage as a **Blocker**. Fix the module boundary instead: extract shared infrastructure, move the provider to its owning feature, use an injection token, or decouple through an event/queue. Also inspect the module import graph for cycles that do not use `forwardRef`; they are still a design and startup risk.

### 5. Check test quality

For changed module wiring, require a focused Nest testing module or application smoke test that exercises the real metadata. The test should:

- import the production module(s), rather than reproducing them by manually listing providers;
- stub only external infrastructure such as Redis, Supabase, Vault, or provider HTTP clients;
- call `.compile()` and, where lifecycle hooks matter, `.init()`;
- assert the newly exposed provider/token can be resolved.

Do not accept a test that only checks a class in isolation when the change is in `imports`, `exports`, or provider registration.

### 6. Run proportional validation

Run the package checks for each affected NestJS service:

```bash
pnpm --filter hamster-ai typecheck
pnpm --filter sync typecheck
```

Run the focused module tests first, then the affected package test suite. Build the affected service when module metadata or path aliases changed:

```bash
pnpm --filter hamster-ai test -- <focused-spec>
pnpm --filter sync test -- <focused-spec>
pnpm --filter hamster-ai build
pnpm --filter sync build
```

When local environment files are available, perform the runtime check through the normal development command. Do **not** substitute `start:prod` for this check:

```bash
pnpm dev:full-stack
```

Confirm in the development logs that the affected Nest application reaches `Nest application successfully started` and that the changed module/provider is initialized. For Sync, verify the proxied endpoint `http://localhost:8080/sync/health`; for AI, use the proxied API path under `http://localhost:8080/ai/`. Access services through the Cloudflare dev proxy, not their direct ports.

If `dev:full-stack` is stopped by an unrelated sibling process (for example, an API worker heap failure), report the Sync/AI startup evidence separately and mark full-stack validation partial. Never call the PR fully validated solely because a different worktree's process is already listening on the service port.

## Findings and severity

- **Blocker:** unresolved production DI token; invalid `exports`; missing imported module/export; broken dynamic registration; new `forwardRef` workaround; changed application module cannot boot.
- **Should-fix:** unnecessary export or `@Global`; duplicated stateful provider; missing real-module wiring test; module cycle without an immediate boot failure.
- **Nit:** ordering or naming that does not affect resolution.

## Required review output

Report:

1. which trigger matched and which modules were inspected;
2. unresolved tokens, invalid exports, cycles, or unnecessary exports;
3. focused tests and typechecks/builds run;
4. development startup and health evidence, including any unrelated sibling-process failure;
5. a final `PASS`, `PASS WITH PARTIAL RUNTIME VALIDATION`, or `NEEDS FIXES` verdict.

Do not call the PR ready when a Blocker remains.
