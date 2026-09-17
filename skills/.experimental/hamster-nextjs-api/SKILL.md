---
name: hamster-nextjs-api
description: "Next.js API route handlers in apps/web. Use when building CRUD endpoints, data-serving API routes (app/api/), webhooks, or OAuth callbacks in the Next.js frontend. NOT for background jobs or AI pipelines (use hamster-nest-api instead)."
version: "1.1.0"
category: "Development"
---

# Next.js API Patterns

## Overview

Patterns for building API endpoints within the Next.js frontend (`apps/web`). This is the home for **application-level CRUD and data-serving routes** — the standard request/response API surface that powers the UI and external integrations. It also covers webhook receivers and OAuth callbacks.

**Boundary**: The NestJS services (`apps/ai`, `apps/sync`) handle background jobs, AI pipelines, queues, and sync processing. If the work involves those, use `hamster-nest-api` instead. If it's a synchronous API route that reads/writes data in response to a request, it belongs here.

## When to Apply

- Building CRUD endpoints for application data in `apps/web/app/api/`
- Creating data-serving API routes consumed by the frontend or external clients
- Building webhook endpoints (OAuth callbacks, external service webhooks)
- Handling OAuth authorization/callback flows in the web app

## When NOT to Apply

| Scenario | Use instead |
| --- | --- |
| Background jobs, queues, AI pipelines | `hamster-nest-api` |
| Server actions (mutations from UI) | `hamster-react` (server-actions rule) |
| NestJS controllers/services | `hamster-nest-api` |
| Data fetching in server components | `hamster-react` (data-fetching rule) |

## Quick Reference

| Task | Pattern | Reference |
| --- | --- | --- |
| API route handler | `enhanceRouteHandler` with auth + schema | `references/rules/route-handlers.md` |

## Route Handler Pattern

Use `enhanceRouteHandler` from `@kit/next/routes` for all API routes:

```typescript
// app/api/users/route.ts
import { z } from 'zod';
import { NextResponse } from 'next/server';
import { enhanceRouteHandler } from '@kit/next/routes';

const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
});

export const POST = enhanceRouteHandler(
  async ({ body, user, request }) => {
    // body: validated against schema
    // user: authenticated user
    // request: NextRequest
    const result = await createUser(body, user.id);
    return NextResponse.json({ success: true, data: result });
  },
  {
    auth: true,
    schema: CreateUserSchema,
  }
);
```

## Common Use Cases in This Codebase

| Directory | Purpose |
| --- | --- |
| `app/api/oauth/*/callback/` | OAuth callback handlers (Linear, Notion, Slack, Jira, etc.) |
| `app/api/auth/cli/` | CLI authentication flow |
| `app/api/blueprints/` | Blueprint data endpoints |
| `app/api/methods/` | Method data endpoints |

## Server Actions vs Route Handlers

| Use Case | Solution |
| --- | --- |
| Data mutation from client component | Server Actions (`enhanceAction`) - see `hamster-react` |
| CRUD endpoints for app data | Route Handlers (`enhanceRouteHandler`) |
| Data-serving APIs for external clients | Route Handlers |
| Webhook endpoints | Route Handlers |
| OAuth callbacks | Route Handlers |
| CLI authentication flows | Route Handlers |

## Best Practices

1. **Prefer server actions** for mutations triggered by the UI
2. **Use route handlers** for webhooks, OAuth callbacks, and external-facing endpoints
3. **Always validate** request body with Zod schema
4. **Handle errors** gracefully - log internally, return generic messages
5. **Use proper HTTP status codes**

## References

- `references/rules/route-handlers.md` - Complete route handler patterns and options
