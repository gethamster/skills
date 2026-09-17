---
title: Route Handlers
tags: next.js, route-handlers, api-routes
---

# Next.js Route Handlers

For Next.js API routes in `apps/web/app/api/`, use `enhanceRouteHandler`.

## Basic Pattern

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
    // 1. "body" is validated against schema
    // 2. "user" is the authenticated user
    // 3. "request" is NextRequest

    const result = await createUser(body, user.id);

    return NextResponse.json({
      success: true,
      data: result,
    });
  },
  {
    auth: true,           // Require authentication (default)
    schema: CreateUserSchema,  // Validate body
  }
);
```

## Unauthenticated Route

```typescript
export const GET = enhanceRouteHandler(
  async ({ request }) => {
    // user is null when auth: false

    return NextResponse.json({
      success: true,
      data: publicData,
    });
  },
  {
    auth: false,  // No authentication required
  }
);
```

## Options Reference

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `auth` | `boolean` | `true` | Require authentication |
| `schema` | `ZodSchema` | - | Body validation schema |

## Handler Parameters

```typescript
async ({ body, user, request }) => {
  // body: Validated request body (from schema)
  // user: Authenticated user (null if auth: false)
  // request: NextRequest object
}
```

## With Query Parameters

```typescript
export const GET = enhanceRouteHandler(
  async ({ request }) => {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '10';

    const data = await fetchData({
      page: parseInt(page),
      limit: parseInt(limit),
    });

    return NextResponse.json({ data });
  },
  { auth: true }
);
```

## With Route Parameters

```typescript
// app/api/users/[id]/route.ts
export const GET = enhanceRouteHandler(
  async ({ request, user }) => {
    // Extract ID from URL
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    const userData = await getUser(id);

    return NextResponse.json({ data: userData });
  },
  { auth: true }
);
```

## Error Handling

```typescript
export const POST = enhanceRouteHandler(
  async ({ body, user }) => {
    try {
      const result = await riskyOperation(body);
      return NextResponse.json({ success: true, data: result });
    } catch (error) {
      // Log internally
      const logger = await getLogger();
      logger.error({ error, userId: user.id }, 'Operation failed');

      // Return generic error
      return NextResponse.json(
        { success: false, error: 'Operation failed' },
        { status: 500 }
      );
    }
  },
  { auth: true, schema: OperationSchema }
);
```

## When to Use

| Use Case | Solution |
| --- | --- |
| Data mutation from client | Server Actions (preferred) |
| Webhook endpoints | Route Handlers |
| External API integrations | Route Handlers |
| Client-side data fetching | Route Handlers or Server Components |

## Best Practices

1. **Prefer Server Actions** for mutations from client components
2. **Use route handlers** for webhooks and external integrations
3. **Always validate** with schema
4. **Handle errors** gracefully
5. **Log errors** internally, return generic messages
6. **Use proper HTTP status codes**