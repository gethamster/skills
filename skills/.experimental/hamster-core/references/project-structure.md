---
title: Project Structure
tags: monorepo, architecture, organization
---

# Hamster Studio Project Structure

## Monorepo Overview

| Area | Purpose | Contents |
| --- | --- | --- |
| `apps/web` | Next.js frontend | Routes, loaders, server actions |
| `apps/ai` | NestJS backend | AI, queues, orchestration |
| `apps/dev-tool` | Internal tools | Email previews, dev surfaces |
| `apps/e2e` | Playwright tests | E2E test suites |
| `packages/*` | Shared code | `@kit/ui`, `@kit/features/*`, etc. |
| `tooling/*` | Build infrastructure | TypeScript base config, scripts |

## Key Packages (`@kit/*`)

| Package | Purpose | Import Example |
| --- | --- | --- |
| `@kit/ui` | Shadcn/MakerKit components | `import { Button } from '@kit/ui/button'` |
| `@kit/supabase` | Database clients & types | `import { getSupabaseServerClient } from '@kit/supabase/server-client'` |
| `@kit/next` | Server action utilities | `import { enhanceAction } from '@kit/next/actions'` |
| `@kit/shared` | Logger, utils | `import { getLogger } from '@kit/shared/logger'` |
| `@kit/repositories` | Data access layer | `import { DocumentRepository } from '@kit/repositories'` |
| `@kit/features/*` | Domain features | `@kit/accounts`, `@kit/team-accounts` |

## Route Organization (`apps/web/app/`)

```
app/
├── (marketing)/          # Public pages
├── (auth)/               # Auth pages
├── home/
│   ├── (user)/           # Personal account (home/(user)/*)
│   └── [account]/        # Team account (home/[account]/*)
├── admin/                # Super admin
└── api/                  # Webhooks
```

**Route Patterns:**

- `(group)` - Route groups (no URL segment)
- `[param]` - Dynamic routes
- `_components/` - Route-local components
- `_lib/server/` - Loaders and actions

## Special Files

| File | Purpose |
| --- | --- |
| `page.tsx` | Page component |
| `layout.tsx` | Shared layout |
| `loading.tsx` | Loading UI |
| `error.tsx` | Error boundary |
| `route.ts` | API endpoint |

## Evolution Pattern

1. New code starts in route `_lib/`
2. When reused, graduates to `packages/@kit/*`
3. Infrastructure changes go to `tooling/*`

## App Responsibilities

**Next.js (`apps/web`):**

- Request/response UI
- Authenticated Supabase access
- Short-lived workflows
- Delegate complex processes to API

**NestJS (`apps/ai`):**

- AI tasks and orchestration
- Queue processing
- Long-running workflows
- External integrations

**Supabase:**

- Primary database
- Realtime backend
- RLS policies in `apps/web/supabase/schemas`