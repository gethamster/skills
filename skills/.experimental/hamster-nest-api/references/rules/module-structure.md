---
title: Module Structure
tags: nestjs, modules, architecture
---

# NestJS Module Structure

## Feature-Based Organization

```typescript
// CORRECT - Feature-based
modules/
├── users/
├── authentication/
├── payments/
└── notifications/

// WRONG - Layer-based
src/
├── controllers/
├── services/
├── repositories/
└── dto/
```

## Module File Structure

```
modules/users/
├── dto/
│   ├── create-user.dto.ts
│   ├── update-user.dto.ts
│   └── user-response.dto.ts
├── interfaces/
│   ├── user.interface.ts
│   └── user-repository.interface.ts
├── __tests__/
│   ├── users.controller.spec.ts
│   └── users.service.spec.ts
├── users.controller.ts
├── users.service.ts
└── users.module.ts
```

## Module Definition

```typescript
@Module({
  imports: [
    // External modules first
    TypeOrmModule.forFeature([UserEntity]),

    // Internal modules second
    SharedModule,
    EmailModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService], // Only export what other modules need
})
export class UsersModule {}
```

## Common vs Shared

### Common Folder (Framework Concerns)

```
common/
├── adapters/           # External service adapters
│   ├── redis-cache.adapter.ts
│   └── email-provider.adapter.ts
├── decorators/         # Custom decorators
│   ├── roles.decorator.ts
│   └── current-user.decorator.ts
├── guards/             # Auth guards
│   ├── auth.guard.ts
│   └── roles.guard.ts
├── filters/            # Exception filters
│   └── http-exception.filter.ts
├── pipes/              # Validation pipes
│   └── validation.pipe.ts
└── interceptors/       # Request/response interceptors
```

### Shared Folder (Business Concerns)

```
shared/
├── repositories/       # Data access
│   ├── base.repository.ts
│   └── user.repository.ts
├── services/           # Shared business services
│   ├── email.service.ts
│   └── cache.service.ts
├── providers/          # Infrastructure
│   └── database.provider.ts
└── interfaces/         # Business interfaces
```

## File Naming Conventions

| Type | Pattern | Example |
| --- | --- | --- |
| Controller | `[feature].controller.ts` | `users.controller.ts` |
| Service | `[feature].service.ts` | `users.service.ts` |
| Module | `[feature].module.ts` | `users.module.ts` |
| DTO | `[action]-[entity].dto.ts` | `create-user.dto.ts` |
| Interface | `[entity].interface.ts` | `user.interface.ts` |

## Module Dependencies

```typescript
// Proper import order
@Module({
  imports: [
    // 1. External/framework modules
    ConfigModule,
    TypeOrmModule.forFeature([Entity]),

    // 2. Shared infrastructure
    SharedModule,

    // 3. Feature modules this depends on
    AuthModule,
  ],
})
```

## Export Rules

```typescript
@Module({
  // ...
  exports: [
    UsersService,  // Only export what other modules actually need
    // Don't export: UsersRepository (internal implementation)
    // Don't export: UsersController (bound to this module's routes)
  ],
})
```

## Key Principles

1. **Single Responsibility** - Each module owns one domain
2. **Encapsulation** - Hide internal implementation
3. **Minimal Exports** - Only export what's needed
4. **Clear Dependencies** - Import order matters
5. **Domain-Driven** - Organize by business domain