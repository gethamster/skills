---
title: Use Zod Response Schemas and Exception Filter Chain for Output Sanitization
impact: HIGH
impactDescription: Prevents internal data leaks through response shaping and structured error handling instead of class-transformer serialization
tags:

- security
- output-sanitization
- zod
- exception-filters
- error-handling

---

# Use Zod Response Schemas and Exception Filter Chain for Output Sanitization

## Why It Matters

API responses can accidentally expose internal fields (database IDs, metadata, timestamps, soft-delete flags) and raw error details (stack traces, SQL queries, internal service names). In this stack, output sanitization is handled at two layers: **Zod response schemas** strip unintended fields from successful responses, and a **multi-layer exception filter chain** transforms errors into safe, user-friendly messages. This replaces `class-transformer` serialization (`@Exclude()`, `ClassSerializerInterceptor`) and `sanitize-html` patterns.

## Anti-Pattern: Class-Transformer Serialization and Raw Errors

```typescript
// ❌ WRONG: class-transformer for output filtering — not used in this stack
import { Exclude, Expose } from 'class-transformer';

export class UserResponse {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Exclude()
  passwordHash: string; // Relies on decorator not being forgotten

  @Exclude()
  internalNotes: string;
}

// ❌ WRONG: ClassSerializerInterceptor — replaced by Zod response schemas
@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
}

// ❌ WRONG: Raw error messages leak internals
@Get(':id')
async findOne(@Param('id') id: string) {
  const { data, error } = await client.from('tasks').select('*').eq('id', id).single();
  if (error) {
    // Exposes: "JSON object requested, multiple (or no) rows returned"
    // Or: "new row violates row-level security policy for table tasks"
    throw new InternalServerErrorException(error.message);
  }
  return data; // Returns ALL columns including internal fields
}

// ❌ WRONG: sanitize-html for JSON API responses
import * as sanitizeHtml from 'sanitize-html';

@Post()
async create(@Body() dto: CreateCommentDto) {
  return this.repo.save({
    content: sanitizeHtml(dto.content, { allowedTags: [] }),
  });
}
```

## Correct Pattern: Zod Response Schemas + Exception Filter Chain

### Zod Response Schemas for Output Shaping

```typescript
// ✅ CORRECT: Zod schema defines the exact response shape
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const TaskResponseSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  status: z.enum(['todo', 'in_progress', 'done']),
  assignee_id: z.string().uuid().nullable(),
  created_at: z.string(),
});

// Fields NOT in the schema (internal_notes, deleted_at, etc.) are excluded
export class TaskResponseDto extends createZodDto(TaskResponseSchema) {}

const TaskListResponseSchema = z.object({
  data: z.array(TaskResponseSchema),
  count: z.number(),
});

export class TaskListResponseDto extends createZodDto(TaskListResponseSchema) {}
```

```typescript
// ✅ CORRECT: Controller returns shaped response
@Controller()
export class TasksController {
  @Get()
  async findAll(
    @CurrentAccount() accountId: string,
  ): Promise<TaskListResponseDto> {
    const { data, count } = await this.tasksService.findAll(accountId);
    return { data, count: count ?? 0 };
  }
}
```

### Layered Exception Filter Chain

The filter chain is registered in `app.module.ts` via `APP_FILTER`. Registration order determines execution order:

```typescript
// app.module.ts — order matters
providers: [
  // 1. SupabaseExceptionFilter — maps Supabase/DB errors to safe responses
  { provide: APP_FILTER, useClass: SupabaseExceptionFilter },
  // 2. ZodValidationExceptionFilter — structured validation error responses
  { provide: APP_FILTER, useClass: ZodValidationExceptionFilter },
],
```

Monitoring is wired through `@kit/monitoring/posthog` and called explicitly from services (see [error-use-exception-filters](./error-use-exception-filters.md)) — there is no `@Catch` filter for monitoring.

### SupabaseExceptionFilter: Database and JWT Error Mapping

```typescript
// ✅ CORRECT: Maps Supabase error codes to user-friendly HTTP responses
@Catch()
export class SupabaseExceptionFilter extends BaseExceptionFilter {
  private readonly logger = new Logger(SupabaseExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // JWT errors get user-friendly messages
    if (this.isJWTError(exception)) {
      response.status(HttpStatus.UNAUTHORIZED).json({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: this.getJWTErrorMessage(exception),
        error: 'Unauthorized',
      });
      return;
    }

    // Supabase/PostgreSQL errors mapped to appropriate HTTP status
    if (this.isSupabaseError(exception)) {
      const status = this.getSupabaseErrorStatus(exception);
      response.status(status).json({
        statusCode: status,
        message: getMessage(exception), // Safe message from error object
        error: this.getSupabaseErrorName(status),
      });
      return;
    }

    // Delegate unhandled exceptions to next filter via BaseExceptionFilter
    super.catch(exception, host);
  }

  // Supabase error code → HTTP status mapping
  private getSupabaseErrorStatus(exception: unknown): number {
    const code = getCode(exception);
    switch (code) {
      case 'PGRST116': return HttpStatus.NOT_FOUND;         // No rows returned
      case 'PGRST301': return HttpStatus.FORBIDDEN;          // RLS violation
      case '23505':    return HttpStatus.CONFLICT;            // Unique constraint
      case '23503':    return HttpStatus.BAD_REQUEST;         // Foreign key violation
      default:         return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }

  // JWT error → user-friendly message (never expose raw JWT error details)
  private getJWTErrorMessage(exception: unknown): string {
    const message = getMessage(exception).toLowerCase();
    if (message.includes('expired'))
      return 'Token has expired. Please log in again.';
    if (message.includes('invalid') || message.includes('malformed'))
      return 'Invalid authentication token.';
    return 'Authentication failed. Please log in again.';
  }
}
```

### ZodValidationExceptionFilter: Structured Validation Errors

```typescript
// ✅ CORRECT: Returns structured validation errors with path, message, code
@Catch(HttpException, ZodSerializationException, ZodValidationException)
export class ZodValidationExceptionFilter extends BaseExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();

    // Response serialization failures — log but don't expose details
    if (exception instanceof ZodSerializationException) {
      const zodError = exception.getZodError();
      if (zodError instanceof ZodError) {
        this.logger.error('Zod serialization failed', {
          issues: zodError.issues.map((i) => ({
            path: i.path.join('.'),
            message: i.message,
            code: i.code,
          })),
        });
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Response serialization failed',
          error: 'Internal Server Error',
        });
        return;
      }
    }

    // Request validation errors — return actionable details to the client
    if (exception instanceof ZodValidationException) {
      const zodError = exception.getZodError();
      if (zodError instanceof ZodError) {
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Validation failed',
          error: 'Bad Request',
          details: zodError.issues.map((issue) => ({
            path: issue.path.join('.') || 'root',
            message: issue.message,
            code: issue.code,
          })),
        });
        return;
      }
    }

    // Non-Zod HttpExceptions delegate to NestJS defaults
    super.catch(exception, host);
  }
}
```

### Exception Helper Utilities

```typescript
// ✅ CORRECT: Type-safe property extraction from unknown exceptions
export function getMessage(exception: unknown): string {
  if (hasMessage(exception)) return exception.message;
  return '';
}

export function getCode(exception: unknown): string | undefined {
  if (hasCode(exception)) return exception.code;
  return undefined;
}

function hasMessage(obj: unknown): obj is { message: string } {
  return typeof obj === 'object' && obj !== null &&
    'message' in obj && typeof (obj as Record<string, unknown>).message === 'string';
}

function hasCode(obj: unknown): obj is { code: string } {
  return typeof obj === 'object' && obj !== null &&
    'code' in obj && typeof (obj as Record<string, unknown>).code === 'string';
}
```

## Key Guidelines

1. **All filters extend ****`BaseExceptionFilter`** — this ensures unhandled exceptions are delegated via `super.catch()` to the next filter in the chain rather than being swallowed
2. **Registration order matters** — `SupabaseExceptionFilter` (database/auth errors) runs first, then `ZodValidationExceptionFilter` (validation errors); each delegates unhandled cases via `super.catch()`
3. **Monitoring is explicit, not decorator-driven** — call `MonitoringService.captureException` from the service layer when an error is a genuine incident; do not auto-capture every HTTP exception that the filter chain handles
4. **Never expose raw Supabase/PostgreSQL error messages** — map error codes to generic messages; `PGRST301` becomes "Forbidden", not "new row violates row-level security policy"
5. **Zod response schemas are the allowlist** — define exactly which fields are returned; any field not in the schema is excluded, preventing accidental exposure of internal data
6. **Zod serialization failures return 500 with generic message** — the detailed Zod issues are logged server-side but never sent to the client, since they could reveal internal schema details
7. **Validation failures return structured ****`details`**** array** — each issue includes `path`, `message`, and `code` so the client can map errors to specific form fields