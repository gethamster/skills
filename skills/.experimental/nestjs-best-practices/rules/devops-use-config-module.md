---
title: Use ConfigModule with Zod Validation
impact: LOW-MEDIUM
impactDescription: Proper configuration prevents deployment failures and catches misconfigurations at startup
tags: devops, configuration, environment, validation, zod
---

## Use ConfigModule with Zod Validation

Use `@nestjs/config` with Zod schema validation for environment-based configuration. Define a factory function that loads environment files in precedence order, validates with `safeParse`, and registers the ConfigModule globally. This catches misconfigurations at startup instead of at runtime.

### Why It Matters

Invalid environment variables cause silent runtime failures that are difficult to diagnose in production. Zod validation at startup fails fast with structured error messages, making deployment issues immediately visible. The multi-file `.env` loading pattern supports environment-specific overrides without code changes.

**Incorrect (Joi validation or direct process.env access):**

```typescript
// Anti-pattern 1: Joi validation schema (wrong library)
import * as Joi from 'joi';

const validationSchema = Joi.object({
  SITE_URL: Joi.string().uri().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432),
});

ConfigModule.forRoot({
  validationSchema, // Joi is not used in Hamster Studio
});

// Anti-pattern 2: Inline validation in forRoot
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config) => {
        if (!config.SITE_URL) throw new Error('SITE_URL required');
        return config;
      },
    }),
  ],
})
export class AppModule {}

// Anti-pattern 3: Direct process.env access
@Injectable()
export class MyService {
  constructor() {
    const url = process.env.SITE_URL; // No validation, no type safety
    const port = parseInt(process.env.PORT); // NaN if missing
  }
}
```

**Correct (Zod schema in config factory function):**

```typescript
// config/env.config.ts
import { ConfigModuleOptions } from '@nestjs/config';
import { z } from 'zod';

const envSchema = z.object({
  SITE_URL: z.url({
    error: 'SITE_URL must be a valid URL',
    protocol: /https?/,
  }),
  PORT: z.coerce.number().default(3001),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  REDIS_HOST: z.string().min(1),
  REDIS_PORT: z.coerce.number().default(6379),
});

export function getEnvConfig(): ConfigModuleOptions {
  const envFiles = ['.env'];

  // Add environment-specific files
  if (process.env.NODE_ENV) {
    envFiles.push(`.env.${process.env.NODE_ENV}`);
  }

  // Always include .env.local for local overrides
  envFiles.push('.env.local');

  return {
    envFilePath: envFiles,
    isGlobal: true,
    validate: (config: Record<string, unknown>) => {
      const result = envSchema.safeParse(config);
      if (!result.success) {
        const errors = result.error.issues
          .map((e) => `${e.path.join('.')}: ${e.message}`)
          .join(', ');
        throw new Error(`Environment validation failed: ${errors}`);
      }
      return result.data;
    },
  };
}

// app.module.ts
import { getEnvConfig } from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot(getEnvConfig()),
    // Other modules...
  ],
})
export class AppModule {}

// Type-safe access via ConfigService
@Injectable()
export class MyService {
  constructor(private readonly config: ConfigService) {}

  getSiteUrl(): string {
    return this.config.get<string>('SITE_URL');
  }
}
```

### Key Guidelines

1. **Define the schema in `config/env.config.ts`** using `z.object()` with descriptive error messages
2. **Export a `getEnvConfig()` factory** that returns `ConfigModuleOptions` with `isGlobal: true`
3. **Load `.env` files in precedence order**: `.env` (base), `.env.${NODE_ENV}` (environment), `.env.local` (local overrides)
4. **Use `safeParse`** with structured error reporting that maps issues to `path: message` format
5. **Access values via `ConfigService.get<T>()`** instead of `process.env` directly
6. **Use `z.coerce.number()`** for numeric env vars instead of manual `parseInt`
7. **Use `z.url()`** with protocol constraints for URL validation

Reference: [NestJS Configuration](https://docs.nestjs.com/techniques/configuration)