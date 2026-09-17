---
title: Use Supabase Auth for JWT Authentication
impact: CRITICAL
impactDescription: Supabase Auth handles JWT issuance, JWKS rotation, and token verification — replacing Passport and manual JWT management entirely
tags:

- security
- jwt
- authentication
- supabase

---

# Use Supabase Auth for JWT Authentication

## Why It Matters

Supabase Auth manages the full authentication lifecycle: user sign-up, login, JWT issuance, JWKS key rotation, and token refresh. The API server only needs to *verify* incoming JWTs, never issue or rotate them. Using Passport, `@nestjs/jwt`, or manual secret management adds unnecessary complexity, introduces secret-rotation risk, and duplicates logic that Supabase already handles.

In this stack, the `SupabaseService` is REQUEST-scoped. It extracts the JWT from the `Authorization` header, creates a user-scoped Supabase client (enforcing RLS), and exposes `getClaims()` for efficient JWT verification via cached JWKS — no round-trip to the auth server after the initial key fetch.

## Anti-Pattern: Passport + Manual JWT Management

```typescript
// ❌ WRONG: Installing Passport and @nestjs/jwt alongside Supabase Auth
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'), // Supabase manages this
        signOptions: { expiresIn: '15m' },
      }),
    }),
  ],
})
export class AuthModule {}

// ❌ WRONG: Passport strategy duplicating Supabase verification
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: any): Promise<any> {
    return payload; // No user existence check
  }
}

// ❌ WRONG: Manual token refresh in the API
async refreshToken(refreshToken: string) {
  const decoded = this.jwtService.verify(refreshToken);
  return this.jwtService.sign({ sub: decoded.sub });
}
```

## Correct Pattern: SupabaseService with getClaims()

```typescript
// ✅ CORRECT: REQUEST-scoped SupabaseService creates user-scoped client from JWT
@Injectable({ scope: Scope.REQUEST })
export class SupabaseService {
  private supabaseClient: SupabaseClient<Database>;
  private readonly token: string | undefined;

  constructor(@Inject(REQUEST) private request: Request) {
    const authHeader = this.request.headers.authorization;
    this.token = authHeader?.replace('Bearer ', '');

    // Client created with user's JWT — RLS enforced automatically
    this.supabaseClient = createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
      global: {
        headers: {
          ...(this.token && { Authorization: `Bearer ${this.token}` }),
        },
      },
    });
  }

  /**
   * Verify JWT using cached JWKS — no auth server round-trip after initial fetch.
   * Returns claims (sub, email, role, app_metadata, user_metadata) or null.
   */
  async getClaims() {
    if (!this.token) return null;

    const { data, error } = await this.supabaseClient.auth.getClaims(
      this.token,
    );
    if (error) throw error;
    return data?.claims ?? null;
  }

  /**
   * Require an authenticated user. Throws UnauthorizedException if no valid JWT.
   */
  async requireUser() {
    const claims = await this.getClaims();
    if (!claims) {
      throw new UnauthorizedException('Authentication required');
    }
    return {
      id: claims.sub,
      email: claims.email ?? '',
      phone: claims.phone ?? '',
      app_metadata: claims.app_metadata ?? {},
      user_metadata: claims.user_metadata ?? {},
    };
  }
}
```

```typescript
// ✅ CORRECT: Guard uses getClaims() for efficient JWT verification
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
      isPublic: this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ]) ?? false,
      getClaims: () => this.supabaseService.getClaims(),
      checkAccountMembership: (accountId) =>
        checkAccountMembership(accountId, (id) =>
          this.supabaseService.getClient().rpc('has_role_on_account', {
            account_id: id,
          }),
        ),
      // ... other params
    });

    if (result.ok) return true;
    this.throwForFailure(request, result);
  }
}
```

```typescript
// ✅ CORRECT: Account membership checked via Supabase RPC
export async function checkAccountMembership(
  accountId: string,
  rpcHasRoleOnAccount: (accountId: string) => PromiseLike<RpcResponse>,
): Promise<AccountAccessResult> {
  const { data, error } = await rpcHasRoleOnAccount(accountId);
  if (error) return { hasAccess: false, error };
  return { hasAccess: !!data };
}
```

## Key Guidelines

1. **Never install `@nestjs/passport` or `@nestjs/jwt`** — Supabase Auth handles JWT issuance, JWKS rotation, and the client SDK handles verification
2. **Use `getClaims()` over `getUser()`** — `getClaims()` verifies the JWT locally using cached JWKS keys, avoiding a network round-trip to the auth server on every request
3. **Use `requireUser()` in services** — when a service method requires authentication, call `requireUser()` which throws `UnauthorizedException` automatically
4. **Never manage JWT secrets in app code** — Supabase rotates JWKS keys transparently; there is no `JWT_SECRET` env var to configure
5. **Token refresh happens on the client** — the frontend Supabase SDK handles `refreshToken` flows; the API never issues or refreshes tokens
6. **Account membership uses `has_role_on_account` RPC** — this is a Supabase SQL function that checks the `account_memberships` table with the authenticated user's JWT context