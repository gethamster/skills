---
title: Use Supabase Guard Architecture with Decorator-Based Auth Control
impact: HIGH
impactDescription: Global SupabaseAuthGuard protects every endpoint by default — decorators opt out, not in
tags:

- security
- guards
- authentication
- authorization
- decorators

---

# Use Supabase Guard Architecture with Decorator-Based Auth Control

## Why It Matters

A globally registered guard ensures no endpoint is accidentally left unprotected. In this stack, `SupabaseAuthGuard` is registered via `APP_GUARD` so every route requires a valid JWT by default. Endpoints that need different behavior use declarative decorators: `@Public()` to skip auth entirely, `@SkipAccountValidation()` to skip multi-tenant membership checks, and `@WebhookSignatureAuth()` for provider webhook verification. This eliminates manual auth checks in controllers and makes the security posture auditable at a glance.

## Anti-Pattern: Passport-Based Guards with Per-Route Opt-In

```typescript
// ❌ WRONG: Passport strategy — replaced by Supabase Auth
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}

// ❌ WRONG: Manual JWT extraction in a custom guard
@Injectable()
export class CustomAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    if (!token) throw new UnauthorizedException();

    try {
      request.user = await this.jwtService.verifyAsync(token);
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}

// ❌ WRONG: Applying guards per controller — easy to forget
@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  @Get()
  findAll() { /* ... */ }
}

// This controller is unprotected because someone forgot @UseGuards!
@Controller('documents')
export class DocumentsController {
  @Get()
  findAll() { /* ... */ }
}
```

## Correct Pattern: Global SupabaseAuthGuard with Decorator Opt-Outs

### Registration in app.module.ts

```typescript
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
import { SentryGlobalFilter } from '@sentry/nestjs/setup';
import { ZodValidationPipe } from 'nestjs-zod';

import { SupabaseExceptionFilter, ZodValidationExceptionFilter } from '@kit/api-core/filters';
import { SupabaseAuthGuard } from '@kit/api-core/guards';
import { SupabaseModule } from '@kit/api-core/supabase';

@Module({
  imports: [SupabaseModule /* ... */],
  providers: [
    { provide: APP_PIPE, useClass: ZodValidationPipe },
    // Exception filters — order matters (Sentry first)
    { provide: APP_FILTER, useClass: SentryGlobalFilter },
    { provide: APP_FILTER, useClass: SupabaseExceptionFilter },
    { provide: APP_FILTER, useClass: ZodValidationExceptionFilter },
    // Global guard — every endpoint protected by default
    { provide: APP_GUARD, useClass: SupabaseAuthGuard },
  ],
})
export class AppModule {}
```

### Decorator Definitions

```typescript
// @Public() — skip authentication entirely
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

// @SkipAccountValidation() — auth required, but skip account membership check
export const SKIP_ACCOUNT_VALIDATION_KEY = 'skipAccountValidation';
export const SkipAccountValidation = () =>
  SetMetadata(SKIP_ACCOUNT_VALIDATION_KEY, true);

// @WebhookSignatureAuth() — provider-specific signature verification
export const WebhookSignatureAuth = (
  provider: string,
  options?: { accountIdParam?: string; connectionIdParam?: string },
) =>
  SetMetadata(WEBHOOK_AUTH_KEY, {
    provider,
    accountIdParam: options?.accountIdParam ?? 'accountId',
    connectionIdParam: options?.connectionIdParam ?? 'connectionId',
  } satisfies WebhookAuthMetadata);
```

### Parameter Decorators

```typescript
// @CurrentAccount() — extracts account ID from request context
// Priority: x-account-id header > x-default-account header > body.accountId > user.accountId
export const CurrentAccount = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest<AuthenticatedRequest>();
    const headerAccountId = normalizeHeaderValue(
      request.headers['x-account-id'] ?? request.headers['x-default-account'],
    );
    const bodyAccountId = request.body?.accountId ?? request.body?.account_id;
    const accountId = headerAccountId ?? bodyAccountId ?? request.user?.accountId;

    if (!accountId) {
      throw new BadRequestException(
        'Account ID is required. Provide via x-account-id header or request body.',
      );
    }
    return accountId;
  },
);

// @CurrentUser() — returns the full AuthUser from the authenticated request
export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): AuthUser => {
    const request = ctx.switchToHttp().getRequest<AuthenticatedRequest>();
    if (!request.user) {
      throw new BadRequestException('User not set by authentication guard.');
    }
    return request.user;
  },
);
```

### Controller Usage

```typescript
// ✅ CORRECT: No @UseGuards needed — SupabaseAuthGuard runs globally
@Controller()
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  // Protected by default — JWT verified, account membership checked
  @Post(':threadId/messages')
  async sendMessage(
    @Param() params: ThreadParamsDto,
    @Body() body: SendMessageDto,
    @CurrentUser() user: AuthUser,
    @CurrentAccount() accountId: string,
  ) {
    return this.chatService.createThreadMessage({ /* ... */ });
  }
}

// ✅ CORRECT: Public endpoints opt out explicitly
@Controller()
export class AppController {
  @Public()
  @Get('health')
  getHealth() {
    return { status: 'ok' };
  }
}

// ✅ CORRECT: Webhooks use signature verification instead of JWT
@Controller('webhooks/coding-agent')
export class CodingAgentWebhookController {
  @Public()
  @Post(':provider')
  async handleWebhook(
    @Param('provider') provider: string,
    @Headers('x-webhook-signature') signature: string | undefined,
    @Body() payload: CursorWebhookPayloadDto,
  ) {
    // Webhook secret looked up from agent_run metadata
    // Signature verified with timing-safe HMAC-SHA256 comparison
  }
}

// ✅ CORRECT: Auth required but account context handled manually
@Controller('onboarding')
export class OnboardingController {
  @SkipAccountValidation()
  @Post('setup')
  async setupAccount(@CurrentUser() user: AuthUser) {
    // User is authenticated but doesn't have an account yet
  }
}
```

### How the Guard Reads Decorators

```typescript
@Injectable({ scope: Scope.REQUEST })
export class SupabaseAuthGuard implements CanActivate {
  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const result = await runSupabaseAuthFlow({
      request,
      // Reflector reads decorator metadata from handler and class
      isPublic: this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ]) ?? false,
      webhookAuth: this.reflector.getAllAndOverride<WebhookAuthMetadata>(
        WEBHOOK_AUTH_KEY,
        [context.getHandler(), context.getClass()],
      ) ?? undefined,
      shouldValidateAccount: !this.reflector.getAllAndOverride<boolean>(
        SKIP_ACCOUNT_VALIDATION_KEY,
        [context.getHandler(), context.getClass()],
      ),
      getClaims: () => this.supabaseService.getClaims(),
      // ...
    });

    if (result.ok) return true;
    this.throwForFailure(request, result);
  }
}
```

## Key Guidelines

1. **Never use `@UseGuards()` for standard auth** — the global `APP_GUARD` registration handles it; adding `@UseGuards(SupabaseAuthGuard)` per controller is redundant and can cause double-execution
2. **Use `@Public()` sparingly** — every public endpoint is a potential attack surface; audit `@Public()` usage during code review
3. **Use `@SkipAccountValidation()` when account context is not yet established** — onboarding flows, user profile endpoints, or admin operations that handle authorization independently
4. **Use `@WebhookSignatureAuth()` for inbound webhooks** — the guard checks for the provider-specific signature header; the controller performs the actual HMAC verification with per-run secrets
5. **Prefer `@CurrentAccount()` over manual header extraction** — the decorator centralizes the priority logic (header, body, user default) and throws `BadRequestException` with a clear message if missing
6. **Prefer `@CurrentUser()` over `@Req()` access** — it returns a typed `AuthUser` and guarantees the guard has run, avoiding accidental access to an unauthenticated request