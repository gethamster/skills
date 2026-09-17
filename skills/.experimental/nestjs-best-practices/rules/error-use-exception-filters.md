---
title: Use Exception Filters for Centralized Error Handling
impact: HIGH
impactDescription: Consistent, centralized error handling across the entire API
tags:

- error-handling
- exception-filters
- consistency

---

# Use Exception Filters for Centralized Error Handling

Never catch exceptions and manually format error responses in controllers. Use NestJS exception filters to handle errors consistently across your application. Register filters globally via `APP_FILTER` to ensure every exception is caught and formatted.

## Anti-Pattern: Manual Error Handling in Controllers

```typescript
// ❌ WRONG: Manual try/catch with response formatting in controllers
@Controller('users')
export class UsersController {
  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const user = await this.usersService.findById(id);
      if (!user) {
        return res.status(404).json({
          statusCode: 404,
          message: 'User not found',
        });
      }
      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        statusCode: 500,
        message: 'Internal server error',
      });
    }
  }
}
```

## Correct Pattern: Multi-Layer Exception Filter Chain

Register multiple exception filters via `APP_FILTER` in the root module. Order matters — filters listed first take priority. Each filter handles specific error types and delegates unhandled exceptions to the next filter via `super.catch()`.

```typescript
// app.module.ts — Register filter chain globally
@Module({
  providers: [
    // Exception filters - order matters! SentryGlobalFilter MUST be first
    {
      provide: APP_FILTER,
      useClass: SentryGlobalFilter,
    },
    {
      provide: APP_FILTER,
      useClass: SupabaseExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: ZodValidationExceptionFilter,
    },
  ],
})
export class AppModule {}
```

### Layer 1: Sentry Global Filter (Monitoring)

Captures all exceptions for monitoring. Registered first so it sees every error.

### Layer 2: Supabase Exception Filter (Database/Auth Errors)

Maps Supabase and JWT errors to user-friendly HTTP responses:

```typescript
@Catch()
export class SupabaseExceptionFilter extends BaseExceptionFilter {
  private readonly logger = new Logger(SupabaseExceptionFilter.name);

  @SentryExceptionCaptured()
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // Handle JWT/Authentication errors
    if (this.isJWTError(exception)) {
      this.logger.warn('JWT authentication error', {
        message: getMessage(exception),
        code: getCode(exception),
      });
      response.status(HttpStatus.UNAUTHORIZED).json({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: this.getJWTErrorMessage(exception),
        error: 'Unauthorized',
      });
      return;
    }

    // Map Supabase error codes to HTTP statuses
    if (this.isSupabaseError(exception)) {
      const status = this.getSupabaseErrorStatus(exception);
      // PGRST116 → 404, PGRST301 → 403, 23505 → 409, 23503 → 400
      response.status(status).json({
        statusCode: status,
        message: getMessage(exception),
        error: this.getSupabaseErrorName(status),
      });
      return;
    }

    // Delegate everything else to the next filter
    super.catch(exception, host);
  }
}
```

### Layer 3: Zod Validation Exception Filter (Input Validation)

Returns structured validation errors:

```typescript
@Catch(HttpException, ZodSerializationException, ZodValidationException)
export class ZodValidationExceptionFilter extends BaseExceptionFilter {
  @SentryExceptionCaptured()
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();

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

    // Delegate non-Zod exceptions to default NestJS behavior
    super.catch(exception, host);
  }
}
```

## Key Guidelines

1. **Extend `BaseExceptionFilter`** — always call `super.catch()` for unhandled exceptions to preserve the NestJS default behavior
2. **Use `@SentryExceptionCaptured()` decorator** — ensures Sentry captures the exception for monitoring
3. **Register via `APP_FILTER`, not `main.ts`** — DI resolution works correctly, filters can inject services
4. **Never expose internal details** — map database error codes to user-friendly messages
5. **Controllers should throw, not catch** — let the filter chain handle formatting

```typescript
// ✅ Controller just throws — filters handle the rest
@Get(':id')
async findOne(@Param('id') id: string): Promise<User> {
  const user = await this.usersService.findById(id);
  if (!user) {
    throw new NotFoundException(`User #${id} not found`);
  }
  return user;
}
```

Reference: [NestJS Exception Filters](https://docs.nestjs.com/exception-filters)