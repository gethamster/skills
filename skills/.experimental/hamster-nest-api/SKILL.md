---
name: hamster-nest-api
description: "NestJS backend patterns for apps/ai and apps/sync. Use when building background jobs, AI pipelines, sync processing, queues, or working with the shared @kit/api-core package."
metadata:
  category: "Development"
---

# Hamster NestJS API Patterns

## Overview

NestJS conventions for the Hamster Studio backend services. The monorepo has **two NestJS services** that handle background processing the Next.js frontend cannot:

| Service | Path | Purpose |
| --- | --- | --- |
| **AI** | `apps/ai/` | AI pipelines, agent orchestration, chat, research, voice, coding agents, background jobs |
| **Sync** | `apps/sync/` | Integration sync engine, OAuth flows, data synchronization processing |

Both services share cross-cutting infrastructure via the **`@kit/api-core`** package.

## When to Apply

- Building background jobs or queue processors (BullMQ)
- Creating AI pipelines or agent orchestration
- Working on sync engine or integration processing
- Adding new NestJS modules to either service
- Writing controllers, services, or DTOs
- Using shared infrastructure from `@kit/api-core`

## Shared Infrastructure: `@kit/api-core`

Both services are built on a common foundation in `packages/api/core/`:

| Module | Import | Purpose |
| --- | --- | --- |
| `bootstrap` | `@kit/api-core/bootstrap` | App bootstrap utilities |
| `config` | `@kit/api-core/config` | Cache and Redis configuration |
| `guards` | `@kit/api-core/guards` | `SupabaseAuthGuard` |
| `filters` | `@kit/api-core/filters` | `SupabaseExceptionFilter`, `ZodValidationExceptionFilter` |
| `supabase` | `@kit/api-core/supabase` | `SupabaseModule` for DI |
| `redis` | `@kit/api-core/redis` | `RedisModule` |
| `decorators` | `@kit/api-core/decorators` | Shared decorators |
| `session` | `@kit/api-core/session` | Session management |
| `logger` | `@kit/api-core/logger` | Structured logging |
| `types` | `@kit/api-core/types` | Shared type definitions |
| `utils` | `@kit/api-core/utils` | Common utilities |

When adding cross-cutting concerns (guards, filters, config), add them to `@kit/api-core` so both services benefit.

## Service Architectures

### AI Service (`apps/ai/`)

```
apps/ai/src/
├── modules/           # Feature modules (domain-driven)
│   ├── ai-agent/      # Agent orchestration
│   ├── ai-session/    # Session management
│   ├── briefs/        # Brief processing
│   ├── bullmq/        # Queue infrastructure
│   ├── chat/          # Chat pipelines
│   ├── coding-agent/  # Coding agent workflows
│   ├── context-connections/  # Context integrations
│   ├── documents/     # Document processing
│   ├── external-bot/  # External bot integration
│   ├── research/      # Research pipelines
│   ├── slack-bot/     # Slack integration
│   ├── tasks/         # Task processing
│   ├── voice/         # Voice processing
│   └── ...
├── common/            # Framework components (decorators, pipes, utils)
├── shared/            # Business logic (services, repositories, clients)
├── config/            # Configuration
├── app.module.ts
└── main.ts
```

### Sync Service (`apps/sync/`)

```
apps/sync/src/
├── modules/
│   ├── oauth/         # OAuth flow handling
│   └── sync-engine/   # Integration sync processing
├── shared/            # Shared services
├── monitoring/        # Health checks, metrics
├── config/            # Configuration
├── app.module.ts
└── main.ts
```

## Quick Reference

| Task | Pattern | Reference |
| --- | --- | --- |
| Create module | Feature-based, single responsibility | `references/rules/module-structure.md` |
| Add endpoint | Controller + decorators | `references/rules/controllers.md` |
| Business logic | Injectable service | `references/rules/services.md` |
| Validation | Zod + nestjs-zod DTOs | `references/rules/dtos.md` |
| Supabase client | `AiUserSessionProvider` over admin client | `references/rules/supabase-client.md` |

## Key Patterns

### Module Structure

```typescript
@Module({
  imports: [
    // Shared infrastructure from @kit/api-core
    SupabaseModule,
    // Internal modules
    SharedModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService], // Only export what's needed
})
export class UsersModule {}
```

### Controller Pattern

```typescript
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<User> {
    return this.usersService.create(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }
}
```

### Service Pattern

```typescript
@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly emailService: EmailService,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = await this.usersRepository.save(dto);
    await this.emailService.sendWelcome(user.email);
    return user;
  }
}
```

### DTO Pattern (Zod + nestjs-zod)

```typescript
// packages/shared/src/users/schemas.ts
export const CreateUserSchema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string().min(1, 'Name required'),
});

// apps/ai/src/modules/users/dto/create-user.dto.ts
import { createZodDto } from 'nestjs-zod';
import { CreateUserSchema } from '@kit/shared/users';

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
```

## Common vs Shared

| Folder | Purpose | Examples |
| --- | --- | --- |
| `common/` | Framework concerns | Guards, pipes, decorators, adapters |
| `shared/` | Business concerns | Services, repositories, domain interfaces |

## Best Practices

1. **Feature-based modules** - Not layer-based
2. **Constructor injection** - For dependencies
3. **Single responsibility** - One reason to change per class
4. **Minimal exports** - Only export what others need
5. **Zod for validation** - Shared with frontend
6. **Proper layering** - Controller -> Service -> Repository
7. **Cross-cutting in `@kit/api-core`** - Guards, filters, config shared across services

## Security

- Enable CORS with proper configuration
- Use `SupabaseAuthGuard` from `@kit/api-core/guards`
- Validate all inputs with DTOs
- Implement rate limiting
- Never expose internal errors
- Use environment variables for config

## References

- `references/rules/module-structure.md` - Module organization
- `references/rules/controllers.md` - Controller patterns
- `references/rules/services.md` - Service patterns
- `references/rules/dtos.md` - DTO and validation
- `references/rules/supabase-client.md` - AiUserSessionProvider for background jobs
