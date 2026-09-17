---
name: hamster-core
description: "Core Hamster Studio conventions for TypeScript, security, and project structure. Always-on essentials that apply across all development tasks. Reference when writing any code in the monorepo."
version: "1.1.0"
---

# Hamster Core Conventions

## Overview

Essential patterns for the Hamster Studio monorepo covering TypeScript standards, security practices, and project organization. These apply to all development work.

## When to Apply

These patterns apply to ALL code in the monorepo:

- Writing any TypeScript code
- Creating new files or modules
- Implementing security-sensitive features
- Working with authentication or authorization

## Monorepo Structure

| Area | Purpose | Key Pattern |
| --- | --- | --- |
| `apps/web` | Next.js frontend | Server Components + Supabase loaders |
| `apps/ai` | NestJS backend | Modules expose contracts, not internals |
| `packages/*` | Shared code | Import via `@kit/*`, don't duplicate |
| `apps/web/supabase/schemas` | Database | RLS policies, migrations |

**Key Rules:**

- UI surfaces in `apps/web`, business logic in `apps/ai` or packages
- Reuse `@kit/ui` before creating bespoke components
- Use `@kit/repositories` over raw Supabase queries
- New code starts in route `_lib/`, graduates to package when reused

## TypeScript Standards

| Rule | Rationale |
| --- | --- |
| No `any` without justification | Use `unknown` if type truly unknown |
| Implicit inference preferred | Only annotate when inference fails |
| Functions over classes for exports | `export function createService()` |
| Single Responsibility Principle | One reason to change per module |
| Short, focused functions | Extract when > 50 lines |

**Service Pattern:**

```typescript
class UserService {
  getUser(id: string) { /* ... */ }
}
export function createUserService() {
  return new UserService();
}
```

## Security Checklist

### Server Actions (MUST)

- Always use `enhanceAction` wrapper
- Always include `'use server'` directive
- Always validate with Zod schema
- Set `auth: true` for authenticated actions

### Client Components (MUST NOT)

- Never pass sensitive data to client
- Never expose server env vars (only `NEXT_PUBLIC_*`)
- Never hardcode placeholder secrets, JWTs, or service-role keys in code, scripts, tests, or examples
- Never use secret fallbacks like `process.env.SECRET || 'placeholder'`; validate required secret env vars explicitly and fail fast instead
- Never trust client-side permission checks alone

### RLS & Database

- Always enable RLS on tables
- Use `has_role_on_account()` for team data
- Use `has_permission()` for granular checks
- Avoid SECURITY DEFINER functions

## Permissions Model

| Function | Use Case |
| --- | --- |
| `has_role_on_account(account_id)` | Check team membership |
| `has_permission(user_id, account_id, permission)` | Check specific capability |
| `is_account_owner(account_id)` | Check primary owner |
| `can_action_account_member(account_id, target_user_id)` | Check can act on member |

**Role Hierarchy:** `owner` (1) > `admin` > `member` (lower number = higher privilege)

## Logging

```typescript
import { getLogger } from '@kit/shared/logger';
import { toErrorContext } from '@kit/shared';

const logger = await getLogger();
logger.info({ name: 'operation', userId, msg: 'Starting operation' });
logger.error({ name: 'operation', userId, ...toErrorContext(error), msg: 'Operation failed' });
```

**Rules:**

- **MUST** use single-object pattern — pass `msg` inside the object, not as a second argument
- **MUST** use `toErrorContext(error)` in catch blocks — never pass raw `error` objects
- **MUST NOT** end `msg` strings with colons

## Commit Conventions

**ALL commits MUST be GPG-signed (`-S`) and use conventional format.**

```
<type>(<scope>): <description>
```

| Type | Use |
| --- | --- |
| `feat:` | New feature |
| `fix:` | Bug fix |
| `refactor:` | Neither fix nor feature |
| `chore:` | Build, tooling, CI, maintenance |
| `docs:` | Documentation only |
| `test:` | Adding or updating tests |

**Scope** — short noun: `auth`, `db`, `ui`, `api`, `sync`, `billing`, etc.

**PR operations** (conflict resolution, re-signing after rebase, amend, cherry-pick, review fixups) follow the same rules — signed and conventional. Never produce generic messages like "resolve conflicts" or "fix review comments".

```bash
# Re-sign after rebase (rebase strips GPG signatures)
git rebase --exec 'git commit --amend --no-edit -S' origin/dev
```

**Anti-patterns:** unsigned commits, non-conventional messages, AI attribution, emojis.

### Branch Safety (MUST)

- Never push directly to `dev` or `main` for feature/debug work.
- Before any push, run:
- `git branch --show-current`
- `git status -sb`
- Push with explicit destination refs only:
- `git push origin HEAD:<feature-branch>`
- Dispatch workflows on feature branch refs:
- `gh workflow run <workflow> --ref <feature-branch>`
- For full protocol and accident response steps, use `git-branch-safety`.

## Quick Decision Tree

```
Creating new code?
├── UI component? → apps/web route `_components/`
├── Reusable logic? → packages/@kit/*
├── Business process? → apps/ai module
└── Database change? → apps/web/supabase/schemas

Need data access?
├── Read data? → @kit/repositories or server loader
├── Mutate data? → Server action with enhanceAction
└── Cross-cutting? → NestJS service in apps/ai

Checking permissions?
├── Team member? → has_role_on_account()
├── Specific action? → has_permission()
└── Owner-only? → is_account_owner()
```

## References

Detailed patterns available in:

- `references/project-structure.md` - Full monorepo layout
- `references/typescript-patterns.md` - TypeScript conventions
- `references/security-checklist.md` - Security requirements
