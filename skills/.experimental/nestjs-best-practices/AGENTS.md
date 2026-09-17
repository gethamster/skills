# NestJS Best Practices

**Version 2.0.0**
Hamster Studio
2026-02-20

> **Note:**
> This document is mainly for agents and LLMs to follow when maintaining,
> generating, or refactoring NestJS codebases. Humans may also find it
> useful, but guidance here is optimized for automation and consistency
> by AI-assisted workflows.

---

## Abstract

A comprehensive, stack-aligned guide for building production-ready NestJS applications with nestjs-zod, Supabase, Vitest, and BullMQ. Contains 35 rules across 9 categories, prioritized by impact. Each rule provides rationale, anti-patterns, and correct implementations based on real codebase patterns. Complements the hamster-nest-api skill which provides project-specific templates.

---

## Table of Contents

1. [Architecture](#1-architecture) — **CRITICAL**

- 1.1 [Avoid Circular Dependencies](#11-avoid-circular-dependencies)
- 1.2 [Organize by Feature Modules](#12-organize-by-feature-modules)
- 1.3 [Use Proper Module Sharing Patterns](#13-use-proper-module-sharing-patterns)
- 1.4 [Single Responsibility for Services](#14-single-responsibility-for-services)
- 1.5 [Use Event-Driven Architecture for Decoupling](#15-use-event-driven-architecture-for-decoupling)
- 1.6 [Use Supabase Repository Pattern for Data Access](#16-use-supabase-repository-pattern-for-data-access)
- 1.7 [Use RouterModule for Route Organization](#17-use-routermodule-for-route-organization)

1. [Dependency Injection](#2-dependency-injection) — **CRITICAL**

- 2.1 [Avoid Service Locator Anti-Pattern](#21-avoid-service-locator-anti-pattern)
- 2.2 [Apply Interface Segregation Principle](#22-apply-interface-segregation-principle)
- 2.3 [Prefer Constructor Injection](#23-prefer-constructor-injection)
- 2.4 [Understand Provider Scopes](#24-understand-provider-scopes)
- 2.5 [Use Injection Tokens for Interfaces](#25-use-injection-tokens-for-interfaces)

1. [Error Handling](#3-error-handling) — **HIGH**

- 3.1 [Handle Async Errors Properly](#31-handle-async-errors-properly)
- 3.2 [Throw HTTP Exceptions from Services](#32-throw-http-exceptions-from-services)
- 3.3 [Use Exception Filters for Centralized Error Handling](#33-use-exception-filters-for-centralized-error-handling)

1. [Security](#4-security) — **HIGH**

- 4.1 [Use Supabase Auth for JWT Authentication](#41-use-supabase-auth-for-jwt-authentication)
- 4.2 [Implement Rate Limiting](#42-implement-rate-limiting)
- 4.3 [Use Zod Response Schemas and Exception Filter Chain for Output Sanitization](#43-use-zod-response-schemas-and-exception-filter-chain-for-output-sanitization)
- 4.4 [Enforce Supabase RLS via Request-Scoped Clients](#44-enforce-supabase-rls-via-request-scoped-clients)
- 4.5 [Use Supabase Guard Architecture with Decorator-Based Auth Control](#45-use-supabase-guard-architecture-with-decorator-based-auth-control)
- 4.6 [Validate All Input with Zod Schemas and nestjs-zod](#46-validate-all-input-with-zod-schemas-and-nestjs-zod)

1. [Performance](#5-performance) — **HIGH**

- 5.1 [Use Lazy Loading for Large Modules](#51-use-lazy-loading-for-large-modules)
- 5.2 [Optimize Supabase Database Queries](#52-optimize-supabase-database-queries)
- 5.3 [Use Caching Strategically](#53-use-caching-strategically)

1. [Testing](#6-testing) — **MEDIUM-HIGH**

- 6.1 [Use Supertest with Vitest for E2E Testing](#61-use-supertest-with-vitest-for-e2e-testing)
- 6.2 [Mock External Services with Vitest](#62-mock-external-services-with-vitest)
- 6.3 [Use Testing Module with Vitest for Unit Tests](#63-use-testing-module-with-vitest-for-unit-tests)

1. [API Design](#7-api-design) — **MEDIUM**

- 7.1 [Use Zod Schemas for Response Serialization](#71-use-zod-schemas-for-response-serialization)
- 7.2 [Use Interceptors for Cross-Cutting Concerns](#72-use-interceptors-for-cross-cutting-concerns)
- 7.3 [Use ZodValidationPipe and Custom Pipes for Input Transformation](#73-use-zodvalidationpipe-and-custom-pipes-for-input-transformation)

1. [Microservices](#8-microservices) — **MEDIUM**

- 8.1 [Implement Health Checks for Microservices](#81-implement-health-checks-for-microservices)
- 8.2 [Use Message Queues for Background Jobs](#82-use-message-queues-for-background-jobs)

1. [DevOps & Deployment](#9-devops-deployment) — **LOW-MEDIUM**

- 9.1 [Implement Graceful Shutdown](#91-implement-graceful-shutdown)
- 9.2 [Use ConfigModule with Zod Validation](#92-use-configmodule-with-zod-validation)
- 9.3 [Use Structured Logging](#93-use-structured-logging)

---

## 1. Architecture

**Section Impact: CRITICAL**

### 1.1 Avoid Circular Dependencies

**Impact: CRITICAL** — "#1 cause of runtime crashes"

Circular dependencies occur when Module A imports Module B, and Module B imports Module A (directly or transitively). NestJS can sometimes resolve these through forward references, but they indicate architectural problems and should be avoided. This is the #1 cause of runtime crashes in NestJS applications.

**Incorrect (circular module imports):**

```typescript
// users.module.ts
@Module({
  imports: [OrdersModule], // Orders needs Users, Users needs Orders = circular
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

// orders.module.ts
@Module({
  imports: [UsersModule], // Circular dependency!
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
```

**Correct (extract shared logic or use events):**

```typescript
// Option 1: Extract shared logic to a third module
// shared.module.ts
@Module({
  providers: [SharedService],
  exports: [SharedService],
})
export class SharedModule {}

// users.module.ts
@Module({
  imports: [SharedModule],
  providers: [UsersService],
})
export class UsersModule {}

// orders.module.ts
@Module({
  imports: [SharedModule],
  providers: [OrdersService],
})
export class OrdersModule {}

// Option 2: Use events for decoupled communication
// users.service.ts
@Injectable()
export class UsersService {
  constructor(private eventEmitter: EventEmitter2) {}

  async createUser(data: CreateUserDto) {
    const user = await this.userRepo.save(data);
    this.eventEmitter.emit('user.created', user);
    return user;
  }
}

// orders.service.ts
@Injectable()
export class OrdersService {
  @OnEvent('user.created')
  handleUserCreated(user: User) {
    // React to user creation without direct dependency
  }
}
```

Reference: [NestJS Circular Dependency](https://docs.nestjs.com/fundamentals/circular-dependency)

---

### 1.2 Organize by Feature Modules

**Impact: CRITICAL** — "3-5x faster onboarding and development"

Organize your application into feature modules that encapsulate related functionality. Each feature module should be self-contained with its own controllers, services, entities, and DTOs. Avoid organizing by technical layer (all controllers together, all services together). This enables 3-5x faster onboarding and feature development.

**Incorrect (technical layer organization):**

```typescript
// Technical layer organization (anti-pattern)
src/
├── controllers/
│   ├── users.controller.ts
│   ├── orders.controller.ts
│   └── products.controller.ts
├── services/
│   ├── users.service.ts
│   ├── orders.service.ts
│   └── products.service.ts
├── entities/
│   ├── user.entity.ts
│   ├── order.entity.ts
│   └── product.entity.ts
└── app.module.ts  // Imports everything directly
```

**Correct (feature module organization):**

```typescript
// Feature module organization
src/
├── users/
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   ├── entities/
│   │   └── user.entity.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.repository.ts
│   └── users.module.ts
├── orders/
│   ├── dto/
│   ├── entities/
│   ├── orders.controller.ts
│   ├── orders.service.ts
│   └── orders.module.ts
├── shared/
│   ├── guards/
│   ├── interceptors/
│   ├── filters/
│   └── shared.module.ts
└── app.module.ts

// users.module.ts
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService], // Only export what others need
})
export class UsersModule {}

// app.module.ts
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    UsersModule,
    OrdersModule,
    SharedModule,
  ],
})
export class AppModule {}
```

Reference: [NestJS Modules](https://docs.nestjs.com/modules)

---

### 1.3 Use Proper Module Sharing Patterns

**Impact: CRITICAL** — Prevents duplicate instances, memory leaks, and state inconsistency

NestJS modules are singletons by default. When a service is properly exported from a module and that module is imported elsewhere, the same instance is shared. However, providing a service in multiple modules creates separate instances, leading to memory waste, state inconsistency, and confusing behavior. Always encapsulate services in dedicated modules, export them explicitly, and import the module where needed.

**Incorrect (service provided in multiple modules):**

```typescript
// StorageService provided directly in multiple modules - WRONG
// storage.service.ts
@Injectable()
export class StorageService {
  private cache = new Map(); // Each instance has separate state!

  store(key: string, value: any) {
    this.cache.set(key, value);
  }
}

// app.module.ts
@Module({
  providers: [StorageService], // Instance #1
  controllers: [AppController],
})
export class AppModule {}

// videos.module.ts
@Module({
  providers: [StorageService], // Instance #2 - different from AppModule!
  controllers: [VideosController],
})
export class VideosModule {}

// Problems:
// 1. Two separate StorageService instances exist
// 2. cache.set() in VideosModule doesn't affect AppModule's cache
// 3. Memory wasted on duplicate instances
// 4. Debugging nightmares when state doesn't sync
```

**Correct (dedicated module with exports):**

```typescript
// storage/storage.module.ts
@Module({
  providers: [StorageService],
  exports: [StorageService], // Make available to importers
})
export class StorageModule {}

// videos/videos.module.ts
@Module({
  imports: [StorageModule], // Import the module, not the service
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule {}

// channels/channels.module.ts
@Module({
  imports: [StorageModule], // Same instance shared
  controllers: [ChannelsController],
  providers: [ChannelsService],
})
export class ChannelsModule {}

// app.module.ts
@Module({
  imports: [
    StorageModule, // Only if AppModule itself needs StorageService
    VideosModule,
    ChannelsModule,
  ],
})
export class AppModule {}

// Now all modules share the SAME StorageService instance
```

**When to use @Global() (sparingly):**

```typescript
// ONLY for truly cross-cutting concerns
@Global()
@Module({
  providers: [ConfigService, LoggerService],
  exports: [ConfigService, LoggerService],
})
export class CoreModule {}

// Import once in AppModule
@Module({
  imports: [CoreModule], // Registered globally, available everywhere
})
export class AppModule {}

// Other modules don't need to import CoreModule
@Module({
  controllers: [UsersController],
  providers: [UsersService], // Can inject ConfigService without importing
})
export class UsersModule {}

// WARNING: Don't make everything global!
// - Hides dependencies (can't see what a module needs from imports)
// - Makes testing harder
// - Reserve for: config, logging, database connections
```

**Module re-exporting pattern:**

```typescript
// common.module.ts - shared utilities
@Module({
  providers: [DateService, ValidationService],
  exports: [DateService, ValidationService],
})
export class CommonModule {}

// core.module.ts - re-exports common for convenience
@Module({
  imports: [CommonModule, DatabaseModule],
  exports: [CommonModule, DatabaseModule], // Re-export for consumers
})
export class CoreModule {}

// feature.module.ts - imports CoreModule, gets both
@Module({
  imports: [CoreModule], // Gets CommonModule + DatabaseModule
  controllers: [FeatureController],
})
export class FeatureModule {}
```

Reference: [NestJS Modules](https://docs.nestjs.com/modules#shared-modules)

---

### 1.4 Single Responsibility for Services

**Impact: CRITICAL** — "40%+ improvement in testability"

Each service should have a single, well-defined responsibility. Avoid "god services" that handle multiple unrelated concerns. If a service name includes "And" or handles more than one domain concept, it likely violates single responsibility. This reduces complexity and improves testability by 40%+.

**Incorrect (god service anti-pattern):**

```typescript
// God service anti-pattern
@Injectable()
export class UserAndOrderService {
  constructor(
    private userRepo: UserRepository,
    private orderRepo: OrderRepository,
    private mailer: MailService,
    private payment: PaymentService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepo.save(dto);
    await this.mailer.sendWelcome(user);
    return user;
  }

  async createOrder(userId: string, dto: CreateOrderDto) {
    const order = await this.orderRepo.save({ userId, ...dto });
    await this.payment.charge(order);
    await this.mailer.sendOrderConfirmation(order);
    return order;
  }

  async calculateOrderStats(userId: string) {
    // Stats logic mixed in
  }

  async validatePayment(orderId: string) {
    // Payment logic mixed in
  }
}
```

**Correct (focused services with single responsibility):**

```typescript
// Focused services with single responsibility
@Injectable()
export class UsersService {
  constructor(private userRepo: UserRepository) {}

  async create(dto: CreateUserDto): Promise<User> {
    return this.userRepo.save(dto);
  }

  async findById(id: string): Promise<User> {
    return this.userRepo.findOneOrFail({ where: { id } });
  }
}

@Injectable()
export class OrdersService {
  constructor(private orderRepo: OrderRepository) {}

  async create(userId: string, dto: CreateOrderDto): Promise<Order> {
    return this.orderRepo.save({ userId, ...dto });
  }

  async findByUser(userId: string): Promise<Order[]> {
    return this.orderRepo.find({ where: { userId } });
  }
}

@Injectable()
export class OrderStatsService {
  constructor(private orderRepo: OrderRepository) {}

  async calculateForUser(userId: string): Promise<OrderStats> {
    // Focused stats calculation
  }
}

// Orchestration in controller or dedicated orchestrator
@Controller('orders')
export class OrdersController {
  constructor(
    private orders: OrdersService,
    private payment: PaymentService,
    private notifications: NotificationService,
  ) {}

  @Post()
  async create(@CurrentUser() user: User, @Body() dto: CreateOrderDto) {
    const order = await this.orders.create(user.id, dto);
    await this.payment.charge(order);
    await this.notifications.sendOrderConfirmation(order);
    return order;
  }
}
```

Reference: [NestJS Providers](https://docs.nestjs.com/providers)

---

### 1.5 Use Event-Driven Architecture for Decoupling

**Impact: MEDIUM-HIGH** — Enables async processing and modularity

Use `@nestjs/event-emitter` for intra-service events and message brokers for inter-service communication. Events allow modules to react to changes without direct dependencies, improving modularity and enabling async processing.

**Incorrect (direct service coupling):**

```typescript
// Direct service coupling
@Injectable()
export class OrdersService {
  constructor(
    private inventoryService: InventoryService,
    private emailService: EmailService,
    private analyticsService: AnalyticsService,
    private notificationService: NotificationService,
    private loyaltyService: LoyaltyService,
  ) {}

  async createOrder(dto: CreateOrderDto): Promise<Order> {
    const order = await this.repo.save(dto);

    // Tight coupling - OrdersService knows about all consumers
    await this.inventoryService.reserve(order.items);
    await this.emailService.sendConfirmation(order);
    await this.analyticsService.track('order_created', order);
    await this.notificationService.push(order.userId, 'Order placed');
    await this.loyaltyService.addPoints(order.userId, order.total);

    // Adding new behavior requires modifying this service
    return order;
  }
}
```

**Correct (event-driven decoupling):**

```typescript
// Use EventEmitter for decoupling
import { EventEmitter2 } from '@nestjs/event-emitter';

// Define event
export class OrderCreatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly userId: string,
    public readonly items: OrderItem[],
    public readonly total: number,
  ) {}
}

// Service emits events
@Injectable()
export class OrdersService {
  constructor(
    private eventEmitter: EventEmitter2,
    private repo: Repository<Order>,
  ) {}

  async createOrder(dto: CreateOrderDto): Promise<Order> {
    const order = await this.repo.save(dto);

    // Emit event - no knowledge of consumers
    this.eventEmitter.emit(
      'order.created',
      new OrderCreatedEvent(order.id, order.userId, order.items, order.total),
    );

    return order;
  }
}

// Listeners in separate modules
@Injectable()
export class InventoryListener {
  @OnEvent('order.created')
  async handleOrderCreated(event: OrderCreatedEvent): Promise<void> {
    await this.inventoryService.reserve(event.items);
  }
}

@Injectable()
export class EmailListener {
  @OnEvent('order.created')
  async handleOrderCreated(event: OrderCreatedEvent): Promise<void> {
    await this.emailService.sendConfirmation(event.orderId);
  }
}

@Injectable()
export class AnalyticsListener {
  @OnEvent('order.created')
  async handleOrderCreated(event: OrderCreatedEvent): Promise<void> {
    await this.analyticsService.track('order_created', {
      orderId: event.orderId,
      total: event.total,
    });
  }
}
```

Reference: [NestJS Events](https://docs.nestjs.com/techniques/events)

---

### 1.6 Use Supabase Repository Pattern for Data Access

**Impact: HIGH** — Decouples business logic from database queries, enforces multi-tenant isolation, and enables testable data access

## Why It Matters

Repositories encapsulate all Supabase query logic, keeping services focused on business rules. In a multi-tenant application, repositories enforce `account_id` scoping on every query, preventing cross-tenant data leaks. They also provide a clean seam for testing -- mock the repository, not the Supabase client.

## Anti-Pattern: TypeORM Repositories or Raw Queries in Services

```typescript
// ❌ WRONG: TypeORM decorators and ORM abstractions
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private repo: Repository<Task>,
  ) {}

  async findActive(accountId: string): Promise<Task[]> {
    return this.repo
      .createQueryBuilder('task')
      .leftJoinAndSelect('task.subtasks', 'subtask')
      .where('task.accountId = :accountId', { accountId })
      .andWhere('task.status != :status', { status: 'done' })
      .orderBy('task.createdAt', 'DESC')
      .getMany();
  }
}

// ❌ WRONG: Raw Supabase queries scattered in services
@Injectable()
export class TasksService {
  constructor(private readonly supabase: SupabaseService) {}

  async findActive(accountId: string) {
    const client = this.supabase.getClient();
    // Query logic mixed with business logic
    const { data, error } = await client
      .from('tasks')
      .select('*')
      .eq('account_id', accountId)
      .neq('status', 'done');

    if (error) throw error;
    return data;
  }
}
```

## Correct Pattern: Supabase Repository with Factory Function

### Repository Class

```typescript
// shared/repositories/task.repository.ts
import { SupabaseClient } from '@supabase/supabase-js';
import { Inject, Injectable, Logger } from '@nestjs/common';

import { SUPABASE_CLIENT } from '@kit/api-core/constants';
import { Database } from '@kit/supabase/database';

// Derive types from the generated database schema
type TaskRow = Database['public']['Tables']['tasks']['Row'];
type TaskInsert = Database['public']['Tables']['tasks']['Insert'];
type TaskUpdate = Database['public']['Tables']['tasks']['Update'];

@Injectable()
export class TaskRepository {
  private readonly logger = new Logger(TaskRepository.name);

  constructor(
    @Inject(SUPABASE_CLIENT)
    private readonly supabase: SupabaseClient<Database>,
  ) {}

  async findMany(accountId: string, filters: TaskFilters = {}): Promise<TaskRow[]> {
    let query = this.supabase
      .from('tasks')
      .select('id, title, status, priority, created_at')
      .eq('account_id', accountId);

    if (filters.status?.length) {
      query = query.in('status', filters.status);
    }

    if (filters.search) {
      query = query.or(
        `title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`,
      );
    }

    // Pagination
    if (filters.offset !== undefined) {
      query = query.range(
        filters.offset,
        filters.offset + (filters.limit || 100) - 1,
      );
    }

    query = query.order('created_at', { ascending: false });

    const { data, error } = await query;

    if (error) {
      this.logger.error({ error, accountId }, 'Failed to fetch tasks');
      throw error;
    }

    return data ?? [];
  }

  async findOne(accountId: string, taskId: string): Promise<TaskRow | null> {
    const { data, error } = await this.supabase
      .from('tasks')
      .select('*')
      .eq('account_id', accountId)
      .eq('id', taskId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // No rows returned
      throw error;
    }

    return data;
  }

  async create(task: TaskInsert): Promise<TaskRow> {
    const { data, error } = await this.supabase
      .from('tasks')
      .insert(task)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async update(
    accountId: string,
    taskId: string,
    updates: TaskUpdate,
  ): Promise<TaskRow> {
    const { data, error } = await this.supabase
      .from('tasks')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('account_id', accountId)
      .eq('id', taskId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async delete(accountId: string, taskId: string): Promise<void> {
    const { error } = await this.supabase
      .from('tasks')
      .delete()
      .eq('account_id', accountId)
      .eq('id', taskId);

    if (error) throw error;
  }
}
```

### Alternative: Factory Function Pattern

When repositories are used outside the DI container (e.g., AI tools, scripts), expose a factory function:

```typescript
// Factory function for non-DI contexts
export function createTaskRepository(
  client: SupabaseClient<Database>,
): TaskRepository {
  return new TaskRepository(client);
}

export class TaskRepository {
  constructor(private readonly supabase: SupabaseClient<Database>) {}
  // ... same methods
}
```

### Service Consumes Repository

```typescript
// modules/tasks/services/task-operations.service.ts
@Injectable()
export class TaskOperationsService {
  private readonly logger = new Logger(TaskOperationsService.name);

  constructor(private readonly taskRepo: TaskRepository) {}

  async markComplete(accountId: string, taskId: string, userId: string): Promise<TaskRow> {
    const task = await this.taskRepo.findOne(accountId, taskId);

    if (!task) {
      throw new NotFoundException(`Task ${taskId} not found`);
    }

    if (task.status === 'done') {
      throw new BadRequestException('Task is already complete');
    }

    return this.taskRepo.update(accountId, taskId, {
      status: 'done',
      updated_by: userId,
    });
  }
}
```

### Explicit Joins for Related Data

```typescript
// Explicit join syntax for related tables
async findWithDocument(accountId: string, taskId: string) {
  const { data, error } = await this.supabase
    .from('tasks')
    .select(`
      id, title, status,
      document:document_id (
        id, title, description, document_name
      )
    `)
    .eq('account_id', accountId)
    .eq('id', taskId)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw error;
  }

  return data;
}
```

## Key Guidelines

1. **Always scope queries by `account_id`** -- every `findMany`, `findOne`, `update`, and `delete` must include `.eq('account_id', accountId)` for multi-tenant isolation
2. **Derive types from `@kit/supabase/database`** -- use `Database['public']['Tables']['tasks']['Row']`, `['Insert']`, and `['Update']` instead of manual interfaces
3. **Use `satisfies` for insert payloads** -- `const task = { ... } satisfies TaskInsert` catches type mismatches at compile time
4. **Handle `PGRST116` for single-row queries** -- when `.single()` finds no rows, Supabase returns error code `PGRST116`; return `null` instead of throwing
5. **Use `@Injectable()` with DI** for module-scoped repositories; use **factory functions** for AI tools and scripts that receive the client externally
6. **Never import TypeORM** -- no `@InjectRepository()`, `Repository<T>`, `QueryBuilder`, or `EntityManager`
7. **Log with structured context** -- include `{ accountId, operation }` in error logs for traceability

---

### 1.7 Use RouterModule for Route Organization

**Impact: HIGH** — Centralizes route hierarchy, eliminates scattered path prefixes, and simplifies versioned API structure

## Why It Matters

NestJS `RouterModule.register()` provides declarative, centralized route nesting. Without it, route paths scatter across individual controllers, making it hard to understand the full API surface. RouterModule groups feature modules under versioned path prefixes in a single location.

## Anti-Pattern: Scattered Path Prefixes

```typescript
// ❌ WRONG: Every controller manages its own full path
@Controller('api/v1/briefs')
export class BriefsController { ... }

@Controller('api/v1/tasks')
export class TasksController { ... }

@Controller('api/v1/documents')
export class DocumentsController { ... }

// ❌ WRONG: Using NestJS versioning API
app.enableVersioning({
  type: VersioningType.URI,
  defaultVersion: '1',
});

@Controller('briefs')
@Version('1')
export class BriefsController { ... }
```

**Problems:**

- Path structure duplicated across every controller
- Changing the version prefix requires editing every controller
- No centralized view of the API surface
- NestJS versioning API adds complexity without benefit when you have a single version

## Correct Pattern: Centralized RouterModule

```typescript
// ✅ CORRECT: Centralized route hierarchy in app.module.ts
@Module({
  imports: [
    SupabaseModule,
    BriefsModule,
    TasksModule,
    DocumentsModule,
    CodingAgentModule,
    RouterModule.register([
      {
        path: 'v1',
        children: [
          { path: 'briefs', module: BriefsModule },
          { path: 'tasks', module: TasksModule },
          { path: 'documents', module: DocumentsModule },
          {
            // Empty path - module controllers define their own sub-paths
            // e.g., TaskAgentController: 'tasks/:taskId/agent'
            //   → /api/v1/tasks/:taskId/agent
            path: '',
            module: CodingAgentModule,
          },
        ],
      },
    ]),
  ],
})
export class AppModule {}

// Controllers use simple, relative paths
@Controller('briefs')
export class BriefsController {
  @Get()
  findAll() { ... }  // GET /api/v1/briefs

  @Get(':id')
  findOne() { ... }  // GET /api/v1/briefs/:id
}
```

## Key Guidelines

1. **Single RouterModule in AppModule** — Define the full route tree in one place
2. **Controllers use relative paths** — No version prefixes in `@Controller()` decorators
3. **Empty path for cross-cutting modules** — Use `path: ''` when a module's controllers define their own full sub-paths
4. **Global prefix in main.ts** — Set `app.setGlobalPrefix('api')` once, combine with RouterModule's `v1` path

## When to Add a New Route

1. Create the feature module with a controller using a simple relative path
2. Add the module to `AppModule.imports`
3. Add a `{ path: 'feature-name', module: FeatureModule }` entry under the `v1` children

---

## 2. Dependency Injection

**Section Impact: CRITICAL**

### 2.1 Avoid Service Locator Anti-Pattern

**Impact: HIGH** — Hides dependencies and breaks testability

Avoid using `ModuleRef.get()` or global containers to resolve dependencies at runtime. This hides dependencies, makes code harder to test, and breaks the benefits of dependency injection. Use constructor injection instead.

**Incorrect (service locator anti-pattern):**

```typescript
// Use ModuleRef to get dependencies dynamically
@Injectable()
export class OrdersService {
  constructor(private moduleRef: ModuleRef) {}

  async createOrder(dto: CreateOrderDto): Promise<Order> {
    // Dependencies are hidden - not visible in constructor
    const usersService = this.moduleRef.get(UsersService);
    const inventoryService = this.moduleRef.get(InventoryService);
    const paymentService = this.moduleRef.get(PaymentService);

    const user = await usersService.findOne(dto.userId);
    // ... rest of logic
  }
}

// Global singleton container
class ServiceContainer {
  private static instance: ServiceContainer;
  private services = new Map<string, any>();

  static getInstance(): ServiceContainer {
    if (!this.instance) {
      this.instance = new ServiceContainer();
    }
    return this.instance;
  }

  get<T>(key: string): T {
    return this.services.get(key);
  }
}
```

**Correct (constructor injection with explicit dependencies):**

```typescript
// Use constructor injection - dependencies are explicit
@Injectable()
export class OrdersService {
  constructor(
    private usersService: UsersService,
    private inventoryService: InventoryService,
    private paymentService: PaymentService,
  ) {}

  async createOrder(dto: CreateOrderDto): Promise<Order> {
    const user = await this.usersService.findOne(dto.userId);
    const inventory = await this.inventoryService.check(dto.items);
    // Dependencies are clear and testable
  }
}

// Easy to test with mocks
describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        OrdersService,
        { provide: UsersService, useValue: mockUsersService },
        { provide: InventoryService, useValue: mockInventoryService },
        { provide: PaymentService, useValue: mockPaymentService },
      ],
    }).compile();

    service = module.get(OrdersService);
  });
});

// VALID: Factory pattern for dynamic instantiation
@Injectable()
export class HandlerFactory {
  constructor(private moduleRef: ModuleRef) {}

  getHandler(type: string): Handler {
    switch (type) {
      case 'email':
        return this.moduleRef.get(EmailHandler);
      case 'sms':
        return this.moduleRef.get(SmsHandler);
      default:
        return this.moduleRef.get(DefaultHandler);
    }
  }
}
```

Reference: [NestJS Module Reference](https://docs.nestjs.com/fundamentals/module-ref)

---

### 2.2 Apply Interface Segregation Principle

**Impact: HIGH** — Reduces coupling and improves testability by 30-50%

Clients should not be forced to depend on interfaces they don't use. In NestJS, this means keeping interfaces small and focused on specific capabilities rather than creating "fat" interfaces that bundle unrelated methods. When a service only needs to send emails, it shouldn't depend on an interface that also includes SMS, push notifications, and logging. Split large interfaces into role-based ones.

**Incorrect (fat interface forcing unused dependencies):**

```typescript
// Fat interface - forces all consumers to depend on everything
interface NotificationService {
  sendEmail(to: string, subject: string, body: string): Promise<void>;
  sendSms(phone: string, message: string): Promise<void>;
  sendPush(userId: string, notification: PushPayload): Promise<void>;
  sendSlack(channel: string, message: string): Promise<void>;
  logNotification(type: string, payload: any): Promise<void>;
  getDeliveryStatus(id: string): Promise<DeliveryStatus>;
  retryFailed(id: string): Promise<void>;
  scheduleNotification(dto: ScheduleDto): Promise<string>;
}

// Consumer only needs email, but must mock everything for tests
@Injectable()
export class OrdersService {
  constructor(
    private notifications: NotificationService, // Depends on 8 methods, uses 1
  ) {}

  async confirmOrder(order: Order): Promise<void> {
    await this.notifications.sendEmail(
      order.customer.email,
      'Order Confirmed',
      `Your order ${order.id} has been confirmed.`,
    );
  }
}

// Testing is painful - must mock unused methods
const mockNotificationService = {
  sendEmail: jest.fn(),
  sendSms: jest.fn(),           // Never used, but required
  sendPush: jest.fn(),          // Never used, but required
  sendSlack: jest.fn(),         // Never used, but required
  logNotification: jest.fn(),   // Never used, but required
  getDeliveryStatus: jest.fn(), // Never used, but required
  retryFailed: jest.fn(),       // Never used, but required
  scheduleNotification: jest.fn(), // Never used, but required
};
```

**Correct (segregated interfaces by capability):**

```typescript
// Segregated interfaces - each focused on one capability
interface EmailSender {
  sendEmail(to: string, subject: string, body: string): Promise<void>;
}

interface SmsSender {
  sendSms(phone: string, message: string): Promise<void>;
}

interface PushSender {
  sendPush(userId: string, notification: PushPayload): Promise<void>;
}

interface NotificationLogger {
  logNotification(type: string, payload: any): Promise<void>;
}

interface NotificationScheduler {
  scheduleNotification(dto: ScheduleDto): Promise<string>;
}

// Implementation can implement multiple interfaces
@Injectable()
export class NotificationService implements EmailSender, SmsSender, PushSender {
  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    // Email implementation
  }

  async sendSms(phone: string, message: string): Promise<void> {
    // SMS implementation
  }

  async sendPush(userId: string, notification: PushPayload): Promise<void> {
    // Push implementation
  }
}

// Or separate implementations
@Injectable()
export class SendGridEmailService implements EmailSender {
  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    // SendGrid-specific implementation
  }
}

// Consumer depends only on what it needs
@Injectable()
export class OrdersService {
  constructor(
    @Inject(EMAIL_SENDER) private emailSender: EmailSender, // Minimal dependency
  ) {}

  async confirmOrder(order: Order): Promise<void> {
    await this.emailSender.sendEmail(
      order.customer.email,
      'Order Confirmed',
      `Your order ${order.id} has been confirmed.`,
    );
  }
}

// Testing is simple - only mock what's used
const mockEmailSender: EmailSender = {
  sendEmail: jest.fn(),
};

// Module registration with tokens
export const EMAIL_SENDER = Symbol('EMAIL_SENDER');
export const SMS_SENDER = Symbol('SMS_SENDER');

@Module({
  providers: [
    { provide: EMAIL_SENDER, useClass: SendGridEmailService },
    { provide: SMS_SENDER, useClass: TwilioSmsService },
  ],
  exports: [EMAIL_SENDER, SMS_SENDER],
})
export class NotificationModule {}
```

**Combining interfaces when needed:**

```typescript
// Sometimes a consumer legitimately needs multiple capabilities
interface EmailAndSmsSender extends EmailSender, SmsSender {}

// Or use intersection types
type MultiChannelSender = EmailSender & SmsSender & PushSender;

// Consumer that genuinely needs multiple channels
@Injectable()
export class AlertService {
  constructor(
    @Inject(MULTI_CHANNEL_SENDER)
    private sender: EmailSender & SmsSender,
  ) {}

  async sendCriticalAlert(user: User, message: string): Promise<void> {
    await Promise.all([
      this.sender.sendEmail(user.email, 'Critical Alert', message),
      this.sender.sendSms(user.phone, message),
    ]);
  }
}
```

Reference: [Interface Segregation Principle](https://en.wikipedia.org/wiki/Interface_segregation_principle)

---

### 2.3 Prefer Constructor Injection

**Impact: CRITICAL** — Required for proper DI and testing

Always use constructor injection over property injection. Constructor injection makes dependencies explicit, enables TypeScript type checking, ensures dependencies are available when the class is instantiated, and improves testability. This is required for proper DI, testing, and TypeScript support.

**Incorrect (property injection with hidden dependencies):**

```typescript
// Property injection - avoid unless necessary
@Injectable()
export class UsersService {
  @Inject()
  private userRepo: UserRepository; // Hidden dependency

  @Inject('CONFIG')
  private config: ConfigType; // Also hidden

  async findAll() {
    return this.userRepo.find();
  }
}

// Problems:
// 1. Dependencies not visible in constructor
// 2. Service can be instantiated without dependencies in tests
// 3. TypeScript can't enforce dependency types at instantiation
```

**Correct (constructor injection with explicit dependencies):**

```typescript
// Constructor injection - explicit and testable
@Injectable()
export class UsersService {
  constructor(
    private readonly userRepo: UserRepository,
    @Inject('CONFIG') private readonly config: ConfigType,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }
}

// Testing is straightforward
describe('UsersService', () => {
  let service: UsersService;
  let mockRepo: jest.Mocked<UserRepository>;

  beforeEach(() => {
    mockRepo = {
      find: jest.fn(),
      save: jest.fn(),
    } as any;

    service = new UsersService(mockRepo, { dbUrl: 'test' });
  });

  it('should find all users', async () => {
    mockRepo.find.mockResolvedValue([{ id: '1', name: 'Test' }]);
    const result = await service.findAll();
    expect(result).toHaveLength(1);
  });
});

// Only use property injection for optional dependencies
@Injectable()
export class LoggingService {
  @Optional()
  @Inject('ANALYTICS')
  private analytics?: AnalyticsService;

  log(message: string) {
    console.log(message);
    this.analytics?.track('log', message); // Optional enhancement
  }
}
```

Reference: [NestJS Providers](https://docs.nestjs.com/providers)

---

### 2.4 Understand Provider Scopes

**Impact: CRITICAL** — Prevents data leaks and performance issues

NestJS has three provider scopes: DEFAULT (singleton), REQUEST (per-request instance), and TRANSIENT (new instance for each injection). Most providers should be singletons. Request-scoped providers have performance implications as they bubble up through the dependency tree. Understanding scopes prevents memory leaks and incorrect data sharing.

**Incorrect (wrong scope usage):**

```typescript
// Request-scoped when not needed (performance hit)
@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  // This creates a new instance for EVERY request
  // All dependencies also become request-scoped
  async findAll() {
    return this.userRepo.find();
  }
}

// Singleton with mutable request state
@Injectable() // Default: singleton
export class RequestContextService {
  private userId: string; // DANGER: Shared across all requests!

  setUser(userId: string) {
    this.userId = userId; // Overwrites for all concurrent requests
  }

  getUser() {
    return this.userId; // Returns wrong user!
  }
}
```

**Correct (appropriate scope for each use case):**

```typescript
// Singleton for stateless services (default, most common)
@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepository) {}

  async findById(id: string): Promise<User> {
    return this.userRepo.findOne({ where: { id } });
  }
}

// Request-scoped ONLY when you need request context
@Injectable({ scope: Scope.REQUEST })
export class RequestContextService {
  private userId: string;

  setUser(userId: string) {
    this.userId = userId;
  }

  getUser(): string {
    return this.userId;
  }
}

// Better: Use NestJS built-in request context
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class AuditService {
  constructor(@Inject(REQUEST) private request: Request) {}

  log(action: string) {
    console.log(`User ${this.request.user?.id} performed ${action}`);
  }
}

// Best: Use ClsModule for async context (no scope bubble-up)
import { ClsService } from 'nestjs-cls';

@Injectable() // Stays singleton!
export class AuditService {
  constructor(private cls: ClsService) {}

  log(action: string) {
    const userId = this.cls.get('userId');
    console.log(`User ${userId} performed ${action}`);
  }
}
```

Reference: [NestJS Injection Scopes](https://docs.nestjs.com/fundamentals/injection-scopes)

---

### 2.5 Use Injection Tokens for Interfaces

**Impact: HIGH** — Enables interface-based DI at runtime

TypeScript interfaces are erased at compile time and can't be used as injection tokens. Use string tokens, symbols, or abstract classes when you want to inject implementations of interfaces. This enables swapping implementations for testing or different environments.

**Incorrect (interface can't be used as token):**

```typescript
// Interface can't be used as injection token
interface PaymentGateway {
  charge(amount: number): Promise<PaymentResult>;
}

@Injectable()
export class StripeService implements PaymentGateway {
  charge(amount: number) { /* ... */ }
}

@Injectable()
export class OrdersService {
  // This WON'T work - PaymentGateway doesn't exist at runtime
  constructor(private payment: PaymentGateway) {}
}
```

**Correct (symbol tokens or abstract classes):**

```typescript
// Option 1: String/Symbol tokens (most flexible)
export const PAYMENT_GATEWAY = Symbol('PAYMENT_GATEWAY');

export interface PaymentGateway {
  charge(amount: number): Promise<PaymentResult>;
}

@Injectable()
export class StripeService implements PaymentGateway {
  async charge(amount: number): Promise<PaymentResult> {
    // Stripe implementation
  }
}

@Injectable()
export class MockPaymentService implements PaymentGateway {
  async charge(amount: number): Promise<PaymentResult> {
    return { success: true, id: 'mock-id' };
  }
}

// Module registration
@Module({
  providers: [
    {
      provide: PAYMENT_GATEWAY,
      useClass: process.env.NODE_ENV === 'test'
        ? MockPaymentService
        : StripeService,
    },
  ],
  exports: [PAYMENT_GATEWAY],
})
export class PaymentModule {}

// Injection
@Injectable()
export class OrdersService {
  constructor(
    @Inject(PAYMENT_GATEWAY) private payment: PaymentGateway,
  ) {}

  async createOrder(dto: CreateOrderDto) {
    await this.payment.charge(dto.amount);
  }
}

// Option 2: Abstract class (carries runtime type info)
export abstract class PaymentGateway {
  abstract charge(amount: number): Promise<PaymentResult>;
}

@Injectable()
export class StripeService extends PaymentGateway {
  async charge(amount: number): Promise<PaymentResult> {
    // Implementation
  }
}

// No @Inject needed with abstract class
@Injectable()
export class OrdersService {
  constructor(private payment: PaymentGateway) {}
}
```

Reference: [NestJS Custom Providers](https://docs.nestjs.com/fundamentals/custom-providers)

---

## 3. Error Handling

**Section Impact: HIGH**

### 3.1 Handle Async Errors Properly

**Impact: HIGH** — Prevents process crashes from unhandled rejections

NestJS automatically catches errors from async route handlers, but errors from background tasks, event handlers, and manually created promises can crash your application. Always handle async errors explicitly and use global handlers as a safety net.

**Incorrect (fire-and-forget without error handling):**

```typescript
// Fire-and-forget without error handling
@Injectable()
export class UsersService {
  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.repo.save(dto);

    // Fire and forget - if this fails, error is unhandled!
    this.emailService.sendWelcome(user.email);

    return user;
  }
}

// Unhandled promise in event handler
@Injectable()
export class OrdersService {
  @OnEvent('order.created')
  handleOrderCreated(event: OrderCreatedEvent) {
    // This returns a promise but it's not awaited!
    this.processOrder(event);
    // Errors will crash the process
  }

  private async processOrder(event: OrderCreatedEvent): Promise<void> {
    await this.inventoryService.reserve(event.items);
    await this.notificationService.send(event.userId);
  }
}

// Missing try-catch in scheduled tasks
@Cron('0 0 * * *')
async dailyCleanup(): Promise<void> {
  await this.cleanupService.run();
  // If this throws, no error handling
}
```

**Correct (explicit async error handling):**

```typescript
// Handle fire-and-forget with explicit catch
@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.repo.save(dto);

    // Explicitly catch and log errors
    this.emailService.sendWelcome(user.email).catch((error) => {
      this.logger.error('Failed to send welcome email', error.stack);
      // Optionally queue for retry
    });

    return user;
  }
}

// Properly handle async event handlers
@Injectable()
export class OrdersService {
  private readonly logger = new Logger(OrdersService.name);

  @OnEvent('order.created')
  async handleOrderCreated(event: OrderCreatedEvent): Promise<void> {
    try {
      await this.processOrder(event);
    } catch (error) {
      this.logger.error('Failed to process order', { event, error });
      // Don't rethrow - would crash the process
      await this.deadLetterQueue.add('order.created', event);
    }
  }
}

// Safe scheduled tasks
@Injectable()
export class CleanupService {
  private readonly logger = new Logger(CleanupService.name);

  @Cron('0 0 * * *')
  async dailyCleanup(): Promise<void> {
    try {
      await this.cleanupService.run();
      this.logger.log('Daily cleanup completed');
    } catch (error) {
      this.logger.error('Daily cleanup failed', error.stack);
      // Alert or retry logic
    }
  }
}

// Global unhandled rejection handler in main.ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  process.on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
  });

  process.on('uncaughtException', (error) => {
    logger.error('Uncaught Exception:', error);
    process.exit(1);
  });

  await app.listen(3000);
}
```

Reference: [Node.js Unhandled Rejections](https://nodejs.org/api/process.html#event-unhandledrejection)

---

### 3.2 Throw HTTP Exceptions from Services

**Impact: HIGH** — Keeps controllers thin and simplifies error handling

It's acceptable (and often preferable) to throw `HttpException` subclasses from services in HTTP applications. This keeps controllers thin and allows services to communicate appropriate error states. For truly layer-agnostic services, use domain exceptions that map to HTTP status codes.

**Incorrect (return error objects instead of throwing):**

```typescript
// Return error objects instead of throwing
@Injectable()
export class UsersService {
  async findById(id: string): Promise<{ user?: User; error?: string }> {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      return { error: 'User not found' }; // Controller must check this
    }
    return { user };
  }
}

@Controller('users')
export class UsersController {
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.usersService.findById(id);
    if (result.error) {
      throw new NotFoundException(result.error);
    }
    return result.user;
  }
}
```

**Correct (throw exceptions directly from service):**

```typescript
// Throw exceptions directly from service
@Injectable()
export class UsersService {
  constructor(private readonly repo: UserRepository) {}

  async findById(id: string): Promise<User> {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async create(dto: CreateUserDto): Promise<User> {
    const existing = await this.repo.findOne({
      where: { email: dto.email },
    });
    if (existing) {
      throw new ConflictException('Email already registered');
    }
    return this.repo.save(dto);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    const user = await this.findById(id); // Throws if not found
    Object.assign(user, dto);
    return this.repo.save(user);
  }
}

// Controller stays thin
@Controller('users')
export class UsersController {
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findById(id);
  }

  @Post()
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.usersService.create(dto);
  }
}

// For layer-agnostic services, use domain exceptions
export class EntityNotFoundException extends Error {
  constructor(
    public readonly entity: string,
    public readonly id: string,
  ) {
    super(`${entity} with ID "${id}" not found`);
  }
}

// Map to HTTP in exception filter
@Catch(EntityNotFoundException)
export class EntityNotFoundFilter implements ExceptionFilter {
  catch(exception: EntityNotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(404).json({
      statusCode: 404,
      message: exception.message,
      entity: exception.entity,
      id: exception.id,
    });
  }
}
```

Reference: [NestJS Exception Filters](https://docs.nestjs.com/exception-filters)

---

### 3.3 Use Exception Filters for Centralized Error Handling

**Impact: HIGH** — Consistent, centralized error handling across the entire API

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

---

## 4. Security

**Section Impact: HIGH**

### 4.1 Use Supabase Auth for JWT Authentication

**Impact: CRITICAL** — Supabase Auth handles JWT issuance, JWKS rotation, and token verification — replacing Passport and manual JWT management entirely

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

---

### 4.2 Implement Rate Limiting

**Impact: HIGH** — Protects against abuse and ensures fair resource usage

Use `@nestjs/throttler` to limit request rates per client. Apply different limits for different endpoints - stricter for auth endpoints, more relaxed for read operations. Consider using Redis for distributed rate limiting in clustered deployments.

**Incorrect (no rate limiting on sensitive endpoints):**

```typescript
// No rate limiting on sensitive endpoints
@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Body() dto: LoginDto): Promise<TokenResponse> {
    // Attackers can brute-force credentials
    return this.authService.login(dto);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() dto: ForgotPasswordDto): Promise<void> {
    // Can be abused to spam users with emails
    return this.authService.sendResetEmail(dto.email);
  }
}

// Same limits for all endpoints
@UseGuards(ThrottlerGuard)
@Controller('api')
export class ApiController {
  @Get('public-data')
  async getPublic() {} // Should allow more requests

  @Post('process-payment')
  async payment() {} // Should be more restrictive
}
```

**Correct (configured throttler with endpoint-specific limits):**

```typescript
// Configure throttler globally with multiple limits
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000, // 1 second
        limit: 3, // 3 requests per second
      },
      {
        name: 'medium',
        ttl: 10000, // 10 seconds
        limit: 20, // 20 requests per 10 seconds
      },
      {
        name: 'long',
        ttl: 60000, // 1 minute
        limit: 100, // 100 requests per minute
      },
    ]),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}

// Override limits per endpoint
@Controller('auth')
export class AuthController {
  @Post('login')
  @Throttle({ short: { limit: 5, ttl: 60000 } }) // 5 attempts per minute
  async login(@Body() dto: LoginDto): Promise<TokenResponse> {
    return this.authService.login(dto);
  }

  @Post('forgot-password')
  @Throttle({ short: { limit: 3, ttl: 3600000 } }) // 3 per hour
  async forgotPassword(@Body() dto: ForgotPasswordDto): Promise<void> {
    return this.authService.sendResetEmail(dto.email);
  }
}

// Skip throttling for certain routes
@Controller('health')
export class HealthController {
  @Get()
  @SkipThrottle()
  check(): string {
    return 'OK';
  }
}

// Custom throttle per user type
@Injectable()
export class CustomThrottlerGuard extends ThrottlerGuard {
  protected async getTracker(req: Request): Promise<string> {
    // Use user ID if authenticated, IP otherwise
    return req.user?.id || req.ip;
  }

  protected async getLimit(context: ExecutionContext): Promise<number> {
    const request = context.switchToHttp().getRequest();

    // Higher limits for authenticated users
    if (request.user) {
      return request.user.isPremium ? 1000 : 200;
    }

    return 50; // Anonymous users
  }
}
```

Reference: [NestJS Throttler](https://docs.nestjs.com/security/rate-limiting)

---

### 4.3 Use Zod Response Schemas and Exception Filter Chain for Output Sanitization

**Impact: HIGH** — Prevents internal data leaks through response shaping and structured error handling instead of class-transformer serialization

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

### Multi-Layer Exception Filter Chain

The filter chain is registered in `app.module.ts` via `APP_FILTER`. Registration order determines execution order:

```typescript
// app.module.ts — order matters
providers: [
  // 1. SentryGlobalFilter — captures ALL exceptions for monitoring
  { provide: APP_FILTER, useClass: SentryGlobalFilter },
  // 2. SupabaseExceptionFilter — maps Supabase/DB errors to safe responses
  { provide: APP_FILTER, useClass: SupabaseExceptionFilter },
  // 3. ZodValidationExceptionFilter — structured validation error responses
  { provide: APP_FILTER, useClass: ZodValidationExceptionFilter },
],
```

### SupabaseExceptionFilter: Database and JWT Error Mapping

```typescript
// ✅ CORRECT: Maps Supabase error codes to user-friendly HTTP responses
@Catch()
export class SupabaseExceptionFilter extends BaseExceptionFilter {
  private readonly logger = new Logger(SupabaseExceptionFilter.name);

  @SentryExceptionCaptured()
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
  @SentryExceptionCaptured()
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

1. **All filters extend `BaseExceptionFilter`** — this ensures unhandled exceptions are delegated via `super.catch()` to the next filter in the chain rather than being swallowed
2. **Registration order matters** — `SentryGlobalFilter` must be first (captures for monitoring), then `SupabaseExceptionFilter` (database/auth errors), then `ZodValidationExceptionFilter` (validation errors)
3. **Use `@SentryExceptionCaptured()` on catch methods** — this decorator ensures each handled exception is still reported to Sentry for monitoring, even when the filter returns a custom response
4. **Never expose raw Supabase/PostgreSQL error messages** — map error codes to generic messages; `PGRST301` becomes "Forbidden", not "new row violates row-level security policy"
5. **Zod response schemas are the allowlist** — define exactly which fields are returned; any field not in the schema is excluded, preventing accidental exposure of internal data
6. **Zod serialization failures return 500 with generic message** — the detailed Zod issues are logged server-side but never sent to the client, since they could reveal internal schema details
7. **Validation failures return structured `details` array** — each issue includes `path`, `message`, and `code` so the client can map errors to specific form fields

---

### 4.4 Enforce Supabase RLS via Request-Scoped Clients

**Impact: CRITICAL** — Prevents data leaks between tenants by ensuring every query runs with the authenticated user's JWT

## Why It Matters

Row Level Security (RLS) is the primary data isolation mechanism in a multi-tenant Supabase application. RLS policies evaluate against the JWT of the current request. If a singleton Supabase client is used, or an admin client is used unnecessarily, RLS is bypassed and any user can access any tenant's data.

## Anti-Pattern: Singleton or Admin Client for User Queries

```typescript
// ❌ WRONG: Singleton client — no user JWT, RLS sees anon role
@Injectable()
export class TasksService {
  private readonly client: SupabaseClient;

  constructor() {
    this.client = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!,
    );
  }

  async getTasks(accountId: string) {
    // RLS cannot identify the user — returns nothing or wrong data
    return this.client.from('tasks').select('*').eq('account_id', accountId);
  }
}

// ❌ WRONG: Admin client for regular queries — bypasses all RLS
@Injectable()
export class TasksService {
  constructor(private readonly supabase: SupabaseService) {}

  async getTasks(accountId: string) {
    const client = this.supabase.getAdminClient(); // Bypasses RLS!
    return client.from('tasks').select('*').eq('account_id', accountId);
  }
}
```

## Correct Pattern: REQUEST-Scoped SupabaseService

```typescript
// ✅ CORRECT: SupabaseService is REQUEST-scoped, creates client with user JWT
@Injectable({ scope: Scope.REQUEST })
export class SupabaseService {
  private supabaseClient: SupabaseClient<Database>;

  constructor(@Inject(REQUEST) private request: Request) {
    const token = request.headers.authorization?.replace('Bearer ', '');

    // Client created with user's JWT — RLS policies enforced automatically
    this.supabaseClient = createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        headers: {
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      },
    });
  }

  getClient(): SupabaseClient<Database> {
    return this.supabaseClient;
  }

  /**
   * Admin client bypasses RLS — use ONLY for system operations
   * where you manually validate auth and authorization.
   */
  getAdminClient(): SupabaseClient<Database> {
    // Creates client with service_role key
    // ...
  }
}
```

```typescript
// ✅ CORRECT: Service uses user-scoped client — RLS enforced
@Injectable()
export class TasksService {
  constructor(private readonly supabase: SupabaseService) {}

  async getTasks(accountId: string) {
    const client = this.supabase.getClient(); // User JWT attached
    const { data, error } = await client
      .from('tasks')
      .select('id, title, status')
      .eq('account_id', accountId);

    if (error) throw error;
    return data;
  }
}
```

## Background Processing: AIUserSessionManager (CRITICAL)

`SupabaseService` is REQUEST-scoped — it requires an HTTP request with an `Authorization` header. This means it **cannot be used** in BullMQ queue processors, scheduled jobs, or any background context without a user request.

**Do NOT use `getAdminClient()` as a workaround.** The admin client bypasses all RLS, defeating the purpose of tenant isolation. Instead, use `AIUserSessionManager` to authenticate as the team's dedicated AI agent user — a real user subject to all RLS policies.

### Anti-Pattern: Admin Client in Background Jobs

```typescript
// ❌ WRONG: Admin client in queue processor — bypasses RLS entirely
@Processor('orchestration-flow')
export class OrchestrationFlowConsumer extends WorkerHost {
  constructor(private readonly supabase: SupabaseService) {
    super();
  }

  async process(job: Job<{ accountId: string }>) {
    // Admin client has service_role — no RLS, no tenant isolation
    const client = this.supabase.getAdminClient();
    const { data } = await client.from('tasks').select('*')
      .eq('account_id', job.data.accountId);
  }
}

// ❌ WRONG: Injecting SupabaseService into a singleton processor
// SupabaseService is REQUEST-scoped — there IS no request in a queue processor
// NestJS will throw a scope mismatch error or create a broken instance
```

### Correct Pattern: AIUserSessionManager

`AIUserSessionManager` provides a Supabase client authenticated as the team's AI agent user. This AI user:

- Is a real `auth.users` entry with its own UUID and JWT
- Is automatically provisioned when a team is created (via `kit.handle_new_team_ai_agent()` trigger)
- Has `auth.uid()` visible to RLS policies — all policies apply normally
- Has its session cached in Redis (30-min TTL) with distributed locking to prevent race conditions

```typescript
// ✅ CORRECT: Use AIUserSessionManager for background processing
@Processor('orchestration-flow')
export class OrchestrationFlowConsumer extends WorkerHost {
  constructor(
    private readonly aiUserSessionManager: AiUserSessionManager,
  ) {
    super();
  }

  async process(job: Job<{ accountId: string; briefId: string }>) {
    const { accountId, briefId } = job.data;

    // Get a Supabase client authenticated as the team's AI agent
    // RLS is fully enforced — the AI user can only access this team's data
    const client = await this.aiUserSessionManager
      .getTeamAiUserSessionClient(accountId);

    const { data: tasks, error } = await client
      .from('tasks')
      .select('id, title, status')
      .eq('account_id', accountId)
      .eq('brief_id', briefId);

    if (error) throw error;
    // Process tasks...
  }
}
```

### Getting Repositories via AIUserSessionManager

For operations that need repository instances, use `getTeamAiUserSession()` to get the `AiUserService` which can provide an authenticated client:

```typescript
// ✅ CORRECT: Get AI user service for repository creation
const aiUserService = await this.aiUserSessionManager
  .getTeamAiUserSession(accountId);
const client = aiUserService.getClient();

// Pass the authenticated client to repository factory functions
const taskRepo = createTaskRepository(client, this.logger);
await taskRepo.createTasksBulk(accountId, tasks, aiUserId);
```

### Thread-Scoped Sessions

For chat/thread operations, resolve the AI session from the thread ID:

```typescript
// ✅ CORRECT: Resolve team from thread, then get AI client
const aiUserService = await this.aiUserSessionManager
  .getThreadAiUserSession(threadId);
const client = aiUserService.getClient();
```

### How It Works Under the Hood

1. **Fast path (99% of calls)**: Check Redis cache for valid JWT → return immediately
2. **Cache miss**: Acquire distributed lock → call `public.get_team_ai_agent(account_id)` RPC → authenticate via magic link → cache session in Redis (30-min TTL)
3. **Concurrent safety**: `redlock` ensures only one job per team performs the expensive auth operation

## When Admin Client Is Acceptable

Use `getAdminClient()` only for narrow system-level operations where no user identity makes sense:

- **AI user provisioning itself** — `get_team_ai_agent` RPC (bootstrapping the AI user)
- **Cross-tenant admin queries** — with manual authorization checks in application code
- **Schema introspection** — reading database metadata

**Never** use admin client for reading or writing tenant data in background jobs. Use `AIUserSessionManager` instead.

## Key Guidelines

1. **HTTP requests → `SupabaseService.getClient()`** — user JWT from Authorization header, RLS enforced
2. **Background jobs → `AIUserSessionManager.getTeamAiUserSessionClient()`** — AI user JWT from Redis cache, RLS enforced
3. **Admin client → last resort** — only for operations that genuinely need to bypass RLS, always document why
4. **SupabaseService is REQUEST-scoped** — cannot be injected into singleton services or queue processors
5. **Scope bubbles up** — any service injecting SupabaseService also becomes request-scoped; be aware of the performance implications
6. **Repository pattern helps** — pass the client into factory functions so repositories don't manage scope themselves
7. **Never store Supabase client in module-level variables** — this creates a singleton that ignores per-request JWTs

---

### 4.5 Use Supabase Guard Architecture with Decorator-Based Auth Control

**Impact: HIGH** — Global SupabaseAuthGuard protects every endpoint by default — decorators opt out, not in

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

---

### 4.6 Validate All Input with Zod Schemas and nestjs-zod

**Impact: HIGH** — First line of defense against injection attacks, malformed data, and type coercion bugs

Always validate incoming data using Zod schemas with `createZodDto()` from `nestjs-zod`. The global `ZodValidationPipe` (registered via `APP_PIPE`) automatically validates all `@Body()`, `@Query()`, and `@Param()` parameters against their Zod schemas. Never trust user input. Define schemas close to the domain they describe and share them between frontend and API via `@kit/shared/`.

### Why It Matters

Unvalidated input is the root cause of SQL injection, XSS, type confusion, and data corruption. Zod provides runtime type safety that TypeScript alone cannot enforce at API boundaries. The `nestjs-zod` integration ensures every request is validated before reaching your handler, with zero boilerplate in controllers.

### Anti-Pattern: class-validator decorators or unvalidated input

```typescript
// WRONG: class-validator decorators (not used in this codebase)
import { IsString, IsEmail, IsInt, Min, Max, IsOptional } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @Transform(({ value }) => value?.toLowerCase().trim())
  email: string;

  @IsInt()
  @Min(0)
  @Max(150)
  age: number;
}

// WRONG: ValidationPipe with whitelist/forbidNonWhitelisted
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
  }),
);

// WRONG: Trusting raw input without any validation
@Post()
create(@Body() body: any) {
  return this.service.create(body); // body could contain anything
}
```

### Correct Pattern: Zod schemas with createZodDto()

#### Step 1: Define a Zod schema

```typescript
// dto/run-ai.dto.ts
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const ChatMessageSchema = z.object({
  role: z.enum(['system', 'user', 'assistant']).describe('Chat message role'),
  content: z.string().min(1, 'content is required').describe('Message content'),
});

export const RunAiSchema = z.object({
  model: z.string().min(1),
  temperature: z.number().min(0).max(2).optional().default(0.7),
  stream: z.boolean().optional().default(false),
  messages: z.array(ChatMessageSchema).min(1),
});

export class RunAiDto extends createZodDto(RunAiSchema) {}
```

#### Step 2: Share schemas from `@kit/shared/` when used by both frontend and API

```typescript
// dto/update-task.dto.ts
import { createZodDto } from 'nestjs-zod';

import { UpdateTaskSchema } from '@kit/shared/task-master';

export class UpdateTaskDto extends createZodDto(UpdateTaskSchema) {}
```

```typescript
// dto/task-filters.dto.ts
import { createZodDto } from 'nestjs-zod';

import { TaskFiltersSchema } from '@kit/shared/task-master';

export class TaskFiltersDto extends createZodDto(TaskFiltersSchema) {}
```

#### Step 3: Use DTOs in controllers -- validation is automatic

```typescript
@Controller('tasks')
export class TasksController {
  @Post()
  async create(@Body() dto: CreateTaskDto): Promise<Task> {
    // dto is guaranteed valid by ZodValidationPipe
    return this.tasksService.create(dto);
  }

  @Get()
  async findAll(@Query() filters: TaskFiltersDto): Promise<Task[]> {
    // query params are parsed and validated via Zod schema
    return this.tasksService.findAll(filters);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.update(id, dto);
  }
}
```

#### Step 4: Global ZodValidationPipe is already registered in app.module.ts

```typescript
// app.module.ts -- already configured, no action needed
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
```

### Key Guidelines

- **Define schemas with `z.object()`**, then wrap with `createZodDto()` for NestJS integration
- **Share schemas** via `@kit/shared/` packages when the same shape is needed in frontend and API
- **Use `.describe()`** on schema fields to generate better error messages and OpenAPI docs
- **Use `.optional().default()`** for fields with sensible defaults (e.g., `temperature: z.number().optional().default(0.7)`)
- **Never use `class-validator`** (`@IsString()`, `@IsEmail()`, `@IsInt()`) or `class-transformer` (`@Transform`, `@Type`) -- these are not part of this stack
- **Never use `ValidationPipe`** from `@nestjs/common` -- use `ZodValidationPipe` from `nestjs-zod` instead
- **Keep DTO files small** -- one schema + one DTO class per file
- **Validation errors** are caught by `ZodValidationExceptionFilter` and returned as structured 400 responses with per-field details

Reference: [nestjs-zod](https://github.com/risen228/nestjs-zod)

---

## 5. Performance

**Section Impact: HIGH**

### 5.1 Use Lazy Loading for Large Modules

**Impact: MEDIUM** — Improves startup time for large applications

NestJS supports lazy-loading modules, which defers initialization until first use. This is valuable for large applications where some features are rarely used, serverless deployments where cold start time matters, or when certain modules have heavy initialization costs.

**Incorrect (loading everything eagerly):**

```typescript
// Load everything eagerly in a large app
@Module({
  imports: [
    UsersModule,
    OrdersModule,
    PaymentsModule,
    ReportsModule, // Heavy, rarely used
    AnalyticsModule, // Heavy, rarely used
    AdminModule, // Only admins use this
    LegacyModule, // Migration module, rarely used
    BulkImportModule, // Used once a month
  ],
})
export class AppModule {}

// All modules initialize at startup, even if never used
// Slow cold starts in serverless
// Memory wasted on unused modules
```

**Correct (lazy load rarely-used modules):**

```typescript
// Use LazyModuleLoader for optional modules
import { LazyModuleLoader } from '@nestjs/core';

@Injectable()
export class ReportsService {
  constructor(private lazyModuleLoader: LazyModuleLoader) {}

  async generateReport(type: string): Promise<Report> {
    // Load module only when needed
    const { ReportsModule } = await import('./reports/reports.module');
    const moduleRef = await this.lazyModuleLoader.load(() => ReportsModule);

    const reportsService = moduleRef.get(ReportsGeneratorService);
    return reportsService.generate(type);
  }
}

// Lazy load admin features with caching
@Injectable()
export class AdminService {
  private adminModule: ModuleRef | null = null;

  constructor(private lazyModuleLoader: LazyModuleLoader) {}

  private async getAdminModule(): Promise<ModuleRef> {
    if (!this.adminModule) {
      const { AdminModule } = await import('./admin/admin.module');
      this.adminModule = await this.lazyModuleLoader.load(() => AdminModule);
    }
    return this.adminModule;
  }

  async runAdminTask(task: string): Promise<void> {
    const moduleRef = await this.getAdminModule();
    const taskRunner = moduleRef.get(AdminTaskRunner);
    await taskRunner.run(task);
  }
}

// Reusable lazy loader service
@Injectable()
export class ModuleLoaderService {
  private loadedModules = new Map<string, ModuleRef>();

  constructor(private lazyModuleLoader: LazyModuleLoader) {}

  async load<T>(
    key: string,
    importFn: () => Promise<{ default: Type<T> } | Type<T>>,
  ): Promise<ModuleRef> {
    if (!this.loadedModules.has(key)) {
      const module = await importFn();
      const moduleType = 'default' in module ? module.default : module;
      const moduleRef = await this.lazyModuleLoader.load(() => moduleType);
      this.loadedModules.set(key, moduleRef);
    }
    return this.loadedModules.get(key)!;
  }
}

// Preload modules in background after startup
@Injectable()
export class ModulePreloader implements OnApplicationBootstrap {
  constructor(private lazyModuleLoader: LazyModuleLoader) {}

  async onApplicationBootstrap(): Promise<void> {
    setTimeout(async () => {
      await this.preloadModule(() => import('./reports/reports.module'));
    }, 5000); // 5 seconds after startup
  }

  private async preloadModule(importFn: () => Promise<any>): Promise<void> {
    try {
      const module = await importFn();
      const moduleType = module.default || Object.values(module)[0];
      await this.lazyModuleLoader.load(() => moduleType);
    } catch (error) {
      console.warn('Failed to preload module', error);
    }
  }
}
```

Reference: [NestJS Lazy Loading Modules](https://docs.nestjs.com/fundamentals/lazy-loading-modules)

---

### 5.2 Optimize Supabase Database Queries

**Impact: HIGH** — Database queries are typically the largest source of latency; inefficient queries compound in multi-tenant systems

## Why It Matters

Most API latency traces back to database queries. In a multi-tenant Supabase application, every query already filters through RLS policies, so poorly written queries compound the cost. Selecting all columns, lazy-loading relations, querying in loops, and skipping pagination are the most common performance killers.

## Anti-Pattern: Over-Fetching and N+1 Queries

```typescript
// ❌ WRONG: TypeORM select and QueryBuilder
const users = await this.repo.find();
const summary = await this.repo
  .createQueryBuilder('user')
  .select('user.name', 'name')
  .addSelect('COUNT(post.id)', 'postCount')
  .leftJoin('user.posts', 'post')
  .groupBy('user.id')
  .getRawOne();

// ❌ WRONG: TypeORM index decorators
@Entity()
@Index(['userId'])
@Index(['status'])
export class Order {
  @Column()
  userId: string;
}

// ❌ WRONG: select('*') when only a few columns are needed
const { data } = await client
  .from('tasks')
  .select('*')  // Fetches all 20+ columns
  .eq('account_id', accountId);
// Only uses data.map(t => t.title)

// ❌ WRONG: N+1 queries — fetching related data in a loop
const tasks = await client.from('tasks').select('id').eq('account_id', accountId);
for (const task of tasks.data) {
  // One query per task — O(n) database round-trips
  const { data: deps } = await client
    .from('task_dependencies')
    .select('*')
    .eq('task_id', task.id);
  task.dependencies = deps;
}

// ❌ WRONG: No pagination on unbounded queries
const { data } = await client
  .from('tasks')
  .select('*')
  .eq('account_id', accountId);
// Returns ALL tasks — could be thousands
```

## Correct Pattern: Supabase Query Optimization

### Select Only Needed Columns

```typescript
// ✅ CORRECT: Request only the columns you need
const { data, error } = await this.supabase
  .from('tasks')
  .select('id, title, status, priority')
  .eq('account_id', accountId);

// ✅ CORRECT: Existence checks — select minimal data
async exists(accountId: string, taskId: string): Promise<boolean> {
  const { data, error } = await this.supabase
    .from('tasks')
    .select('id')
    .eq('account_id', accountId)
    .eq('id', taskId)
    .single();

  if (error && error.code !== 'PGRST116') throw error;
  return !!data;
}
```

### Use Explicit Joins Instead of Lazy Loading

```typescript
// ✅ CORRECT: Fetch related data in a single query via joins
const { data, error } = await this.supabase
  .from('tasks')
  .select(`
    id, title, status,
    document:document_id (
      id, title, document_name
    )
  `)
  .eq('account_id', accountId)
  .eq('id', taskId)
  .single();

// ✅ CORRECT: Foreign key disambiguation with explicit key reference
const { data } = await this.supabase
  .from('task_dependencies')
  .select(`
    depends_on_task_id,
    tasks!task_dependencies_depends_on_task_id_fkey (
      id, title, status
    )
  `)
  .eq('account_id', accountId)
  .eq('task_id', taskId);
```

### Prevent N+1 with Bulk Operations

```typescript
// ✅ CORRECT: Use .in() for bulk lookups instead of looping
async findByTaskIds(
  accountId: string,
  taskIds: string[],
): Promise<TaskDependency[]> {
  if (taskIds.length === 0) return [];

  const { data, error } = await this.supabase
    .from('task_dependencies')
    .select('*')
    .eq('account_id', accountId)
    .in('task_id', taskIds);

  if (error) throw error;
  return data ?? [];
}

// ✅ CORRECT: Batch insert instead of individual inserts
async createMany(tasks: TaskInsert[]): Promise<TaskRow[]> {
  const { data, error } = await this.supabase
    .from('tasks')
    .insert(tasks)
    .select();

  if (error) throw error;
  return data;
}
```

### Always Paginate Large Datasets

```typescript
// ✅ CORRECT: Use .range() for offset-based pagination
async findMany(
  accountId: string,
  filters: TaskFilters = {},
): Promise<TaskRow[]> {
  let query = this.supabase
    .from('tasks')
    .select('id, title, status, priority, created_at')
    .eq('account_id', accountId);

  // Server-side filtering — reduce result set before it leaves the DB
  if (filters.status?.length) {
    query = query.in('status', filters.status);
  }

  if (filters.priority?.length) {
    query = query.in('priority', filters.priority);
  }

  if (filters.search) {
    query = query.or(
      `title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`,
    );
  }

  if (filters.is_overdue) {
    query = query.lt('due_date', new Date().toISOString());
  }

  // Sorting
  query = query.order('created_at', { ascending: false });

  // Pagination with .range() — first 10 rows: .range(0, 9)
  const offset = filters.offset ?? 0;
  const limit = filters.limit ?? 100;
  query = query.range(offset, offset + limit - 1);

  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}
```

### Parallelize Independent Queries

```typescript
// ✅ CORRECT: Use Promise.all() for independent queries
async getTaskWithContext(accountId: string, taskId: string) {
  const [task, dependencies, subtasks] = await Promise.all([
    this.findOne(accountId, taskId),
    this.dependencyRepo.findByTaskId(accountId, taskId),
    this.findSubtasks(accountId, taskId),
  ]);

  return { ...task, dependencies, subtasks };
}

// ❌ WRONG: Sequential when queries are independent
async getTaskWithContext(accountId: string, taskId: string) {
  const task = await this.findOne(accountId, taskId);
  const dependencies = await this.dependencyRepo.findByTaskId(accountId, taskId);
  const subtasks = await this.findSubtasks(accountId, taskId);
  return { ...task, dependencies, subtasks };
}
```

### Filter Server-Side, Not Client-Side

```typescript
// ✅ CORRECT: Apply all filters in the query chain
const { data } = await this.supabase
  .from('tasks')
  .select('id, title, status')
  .eq('account_id', accountId)
  .eq('status', 'todo')
  .gte('created_at', startDate)
  .is('parent_task_id', null)
  .order('priority', { ascending: false })
  .limit(10);

// ❌ WRONG: Fetch all, then filter in JavaScript
const { data } = await this.supabase
  .from('tasks')
  .select('*')
  .eq('account_id', accountId);

const filtered = data
  .filter(t => t.status === 'todo')
  .filter(t => t.created_at >= startDate)
  .filter(t => !t.parent_task_id)
  .sort((a, b) => b.priority - a.priority)
  .slice(0, 10);
```

## Key Guidelines

1. **Select only needed columns** -- `.select('id, title, status')` not `.select('*')`; reduces I/O and serialization cost
2. **Use explicit joins** -- `.select('*, document:document_id (id, title)')` fetches related data in a single round-trip
3. **Prevent N+1 with `.in()`** -- never query inside a `for` loop; collect IDs and use `.in('column', ids)` for bulk lookups
4. **Always paginate** -- use `.range(offset, offset + limit - 1)` or `.limit(n)` on every list query
5. **Filter server-side** -- chain `.eq()`, `.in()`, `.gte()`, `.ilike()`, `.is()` before the query executes; never fetch all rows and filter in JavaScript
6. **Parallelize independent queries** -- use `Promise.all()` when multiple queries do not depend on each other
7. **Define indexes in schema files** -- add indexes in `apps/web/supabase/schemas/` alongside the table definition; use partial indexes for filtered columns (e.g., `WHERE assignee_id IS NOT NULL`)
8. **Never use TypeORM query patterns** -- no `createQueryBuilder`, `.find({ select })`, or `@Index()` decorators

---

### 5.3 Use Caching Strategically

**Impact: HIGH** — Dramatically reduces database load and response times

Implement caching for expensive operations, frequently accessed data, and external API calls. Use NestJS CacheModule with appropriate TTLs and cache invalidation strategies. Don't cache everything - focus on high-impact areas.

**Incorrect (no caching or caching everything):**

```typescript
// No caching for expensive, repeated queries
@Injectable()
export class ProductsService {
  async getPopular(): Promise<Product[]> {
    // Runs complex aggregation query EVERY request
    return this.productsRepo
      .createQueryBuilder('p')
      .leftJoin('p.orders', 'o')
      .select('p.*, COUNT(o.id) as orderCount')
      .groupBy('p.id')
      .orderBy('orderCount', 'DESC')
      .limit(20)
      .getMany();
  }
}

// Cache everything without thought
@Injectable()
export class UsersService {
  @CacheKey('users')
  @CacheTTL(3600)
  @UseInterceptors(CacheInterceptor)
  async findAll(): Promise<User[]> {
    // Caching user list for 1 hour is wrong if data changes frequently
    return this.usersRepo.find();
  }
}
```

**Correct (strategic caching with proper invalidation):**

```typescript
// Setup caching module
@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        stores: [
          new KeyvRedis(config.get('REDIS_URL')),
        ],
        ttl: 60 * 1000, // Default 60s
      }),
    }),
  ],
})
export class AppModule {}

// Manual caching for granular control
@Injectable()
export class ProductsService {
  constructor(
    @Inject(CACHE_MANAGER) private cache: Cache,
    private productsRepo: ProductRepository,
  ) {}

  async getPopular(): Promise<Product[]> {
    const cacheKey = 'products:popular';

    // Try cache first
    const cached = await this.cache.get<Product[]>(cacheKey);
    if (cached) return cached;

    // Cache miss - fetch and cache
    const products = await this.fetchPopularProducts();
    await this.cache.set(cacheKey, products, 5 * 60 * 1000); // 5 min TTL
    return products;
  }

  // Invalidate cache on changes
  async updateProduct(id: string, dto: UpdateProductDto): Promise<Product> {
    const product = await this.productsRepo.save({ id, ...dto });
    await this.cache.del('products:popular'); // Invalidate
    return product;
  }
}

// Decorator-based caching with auto-interceptor
@Controller('categories')
@UseInterceptors(CacheInterceptor)
export class CategoriesController {
  @Get()
  @CacheTTL(30 * 60 * 1000) // 30 minutes - categories rarely change
  findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @CacheTTL(60 * 1000) // 1 minute
  @CacheKey('category')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.findOne(id);
  }
}

// Event-based cache invalidation
@Injectable()
export class CacheInvalidationService {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) {}

  @OnEvent('product.created')
  @OnEvent('product.updated')
  @OnEvent('product.deleted')
  async invalidateProductCaches(event: ProductEvent) {
    await Promise.all([
      this.cache.del('products:popular'),
      this.cache.del(`product:${event.productId}`),
    ]);
  }
}
```

Reference: [NestJS Caching](https://docs.nestjs.com/techniques/caching)

---

## 6. Testing

**Section Impact: MEDIUM-HIGH**

### 6.1 Use Supertest with Vitest for E2E Testing

**Impact: HIGH** — Validates the full request/response cycle including middleware, guards, and pipes

End-to-end tests use Supertest with Vitest to make real HTTP requests against the NestJS application. They test the full stack including middleware, guards, pipes, and interceptors. Use `Test.createTestingModule({ imports: [AppModule] })` to bootstrap the app, and authenticate via Supabase auth tokens or guard overrides.

### Why It Matters

Unit tests verify isolated logic, but E2E tests catch integration issues across the full request pipeline. Testing with Supertest against a real NestJS application ensures that routes, guards, validation pipes, and serialization work together correctly. In Hamster Studio, Supabase handles schema management so there is no ORM synchronization step.

**Incorrect (Jest lifecycle or TypeORM patterns):**

```typescript
// Anti-pattern 1: TypeORM database synchronization
describe('Orders API (e2e)', () => {
  let dataSource: DataSource;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    dataSource = moduleFixture.get(DataSource);
    await app.init();
  });

  beforeEach(async () => {
    await dataSource.synchronize(true); // Wrong: no TypeORM in Hamster Studio
  });

  afterAll(async () => {
    await dataSource.destroy();   // Wrong: no DataSource
    await getConnection().close(); // Wrong: TypeORM pattern
  });
});

// Anti-pattern 2: No proper cleanup
describe('Users API', () => {
  it('should create user', async () => {
    const app = await NestFactory.create(AppModule);
    // No initialization, no cleanup, resource leak
  });
});
```

**Correct (Vitest E2E with Supertest and Supabase auth):**

```typescript
// test/app.e2e-spec.ts
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';

import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app?.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

// test/tasks.e2e-spec.ts -- Full E2E with Supabase authentication
import { INestApplication } from '@nestjs/common';
import request from 'supertest';

import { cleanupTestData, createTestApp, getAuthToken } from './test-setup';

describe('Tasks (e2e)', () => {
  let app: INestApplication;
  let authToken: string;
  let testUserId: string;
  const testAccountId = '5deaa894-2094-4da3-b4fd-1fada0809d1c';

  beforeAll(async () => {
    app = await createTestApp();

    const authData = await getAuthToken();
    authToken = authData.access_token;
    testUserId = authData.user.id as string;
  });

  afterAll(async () => {
    await cleanupTestData();
    await app.close();
  });

  describe('Authentication', () => {
    it('should reject requests without auth token', () => {
      return request(app.getHttpServer()).get('/tm/tasks').expect(401);
    });

    it('should accept requests with valid auth token', () => {
      return request(app.getHttpServer())
        .get('/tm/tasks')
        .set('Authorization', `Bearer ${authToken}`)
        .set('x-account-id', testAccountId)
        .set('x-user-id', testUserId)
        .expect(200);
    });
  });

  describe('Task CRUD', () => {
    it('should create and retrieve a task', async () => {
      const createResponse = await request(app.getHttpServer())
        .post('/tm/tasks')
        .set('Authorization', `Bearer ${authToken}`)
        .set('x-account-id', testAccountId)
        .set('x-user-id', testUserId)
        .send({
          title: 'Test Task',
          description: 'E2E test task',
          priority: 'medium',
          status: 'todo',
        })
        .expect(201);

      expect(createResponse.body).toMatchObject({
        title: 'Test Task',
        priority: 'medium',
      });
    });
  });
});

// test/test-setup.ts -- Shared E2E test utilities
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { AppModule } from '../src/app.module';

export async function createTestApp(): Promise<INestApplication> {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const app = moduleFixture.createNestApplication();
  await app.init();

  return app;
}

export async function getAuthToken(): Promise<{
  access_token: string;
  user: Record<string, unknown>;
}> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !anonKey) {
    throw new Error('Supabase environment variables required for E2E tests');
  }

  const response = await fetch(
    `${supabaseUrl}/auth/v1/token?grant_type=password`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: anonKey,
      },
      body: JSON.stringify({
        email: 'test@tryhamster.com',
        password: 'testingpassword',
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Authentication failed: ${response.status}`);
  }

  const data = await response.json();
  return { access_token: data.access_token, user: data.user };
}
```

### Key Guidelines

1. **Use Vitest lifecycle hooks** (`beforeEach`/`afterEach` or `beforeAll`/`afterAll`) with async cleanup
2. **Always close the app** in teardown: `afterEach(async () => { await app?.close(); })`
3. **Import supertest as default**: `import request from 'supertest'` (not `* as request`)
4. **Authenticate via Supabase** using `getAuthToken()` helper or override the `SupabaseAuthGuard` for isolated tests
5. **No database synchronization** -- Supabase manages schema via migrations, not TypeORM
6. **Set required headers** for multi-tenant routes: `Authorization`, `x-account-id`, `x-user-id`
7. **Extract test utilities** into `test/test-setup.ts` for shared bootstrap and auth logic
8. **Apply global config in test setup** (validation pipe, global prefix) to match production behavior

Reference: [NestJS E2E Testing](https://docs.nestjs.com/fundamentals/testing#end-to-end-testing)

---

### 6.2 Mock External Services with Vitest

**Impact: HIGH** — Ensures fast, reliable, deterministic tests without external dependencies

Never call real external services (Supabase, Redis, BullMQ, AI providers) in unit tests. Use `vi.fn()` for all mocks, `provide`/`useValue` in `Test.createTestingModule()` for DI overrides, and chain mock methods for Supabase query builders. Import mock types from `@kit/testing/types`.

### Why It Matters

Unit tests must be fast, deterministic, and free from external side effects. Mocking external services via NestJS dependency injection ensures tests run in milliseconds without network calls, database writes, or queue dispatches. Properly typed mocks using `MockedFunction` and `Mocked` catch interface drift at compile time.

**Incorrect (Jest APIs or real service calls):**

```typescript
// Anti-pattern 1: Jest mocking APIs
const mockHttpService = {
  get: jest.fn().mockResolvedValue({ data: {} }), // Wrong: jest.fn()
};

jest.spyOn(service, 'method');      // Wrong: jest.spyOn()
jest.useFakeTimers();               // Wrong: jest.useFakeTimers()
jest.mock('module');                 // Wrong: jest.mock()

// Anti-pattern 2: TypeORM repository tokens
const module = await Test.createTestingModule({
  providers: [
    UsersService,
    { provide: getRepositoryToken(User), useValue: mockRepo }, // Wrong: TypeORM
  ],
}).compile();

// Anti-pattern 3: Real API calls in tests
const service = new PaymentService(new StripeClient(realApiKey));
const result = await service.charge('tok_visa', 1000); // Hits real API
```

**Correct (Vitest mocks with DI overrides):**

```typescript
// Mock SupabaseService with chained query builder
import { Test, TestingModule } from '@nestjs/testing';

import type { Mocked, MockedFunction } from '@kit/testing/types';

describe('YjsDocumentService', () => {
  let service: YjsDocumentService;
  let mockAiUserSessionManager: {
    getTeamAiUserSessionClient: ReturnType<typeof vi.fn>;
  };

  const createMockSupabaseClient = (options: {
    selectData?: Record<string, unknown> | null;
    selectError?: { message: string } | null;
    updateError?: { message: string } | null;
  }) => {
    const { selectData, selectError, updateError } = options;
    return {
      from: vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            eq: vi.fn().mockReturnValue({
              single: vi
                .fn()
                .mockResolvedValue({ data: selectData, error: selectError }),
            }),
          }),
        }),
        update: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            eq: vi
              .fn()
              .mockResolvedValue({ error: updateError, count: 1 }),
          }),
        }),
      }),
    };
  };

  beforeEach(async () => {
    mockAiUserSessionManager = { getTeamAiUserSessionClient: vi.fn() };

    const testingModule = await Test.createTestingModule({
      providers: [
        YjsDocumentService,
        {
          provide: AiUserSessionManager,
          useValue: mockAiUserSessionManager,
        },
      ],
    }).compile();

    service = testingModule.get(YjsDocumentService);
  });

  it('should fetch document data', async () => {
    const mockClient = createMockSupabaseClient({
      selectData: { id: 'doc-123', content: 'test' },
    });
    mockAiUserSessionManager.getTeamAiUserSessionClient.mockReturnValue(
      mockClient,
    );

    const result = await service.getDocument('doc-123', 'account-456');

    expect(result).toEqual({ id: 'doc-123', content: 'test' });
    expect(mockClient.from).toHaveBeenCalledWith('documents');
  });
});

// Mock BullMQ queues
import { getQueueToken } from '@nestjs/bullmq';
import type { Queue } from 'bullmq';

describe('OnboardingService', () => {
  let service: OnboardingService;
  let mockQueue: Mocked<Queue>;
  let mockUrlPersistenceService: {
    extractAndPersist: MockedFunction<
      URLPersistenceService['extractAndPersist']
    >;
  };

  beforeEach(async () => {
    mockQueue = {
      add: vi.fn(),
      getJob: vi.fn(),
    } as unknown as Mocked<Queue>;

    mockUrlPersistenceService = {
      extractAndPersist: vi.fn().mockResolvedValue({ success: true }),
    };

    const moduleRef = await Test.createTestingModule({
      providers: [
        OnboardingService,
        {
          provide: getQueueToken(QUEUE_NAMES.ONBOARDING_CONTEXT_PROCESSING),
          useValue: mockQueue,
        },
        {
          provide: URLPersistenceService,
          useValue: mockUrlPersistenceService,
        },
      ],
    }).compile();

    service = moduleRef.get(OnboardingService);
  });

  it('should enqueue onboarding job', async () => {
    await service.startOnboarding('account-123', 'user-456');

    expect(mockQueue.add).toHaveBeenCalledWith(
      'process-context',
      expect.objectContaining({ accountId: 'account-123' }),
    );
  });
});

// Mock circular dependencies with vi.mock()
vi.mock('../ai-session', () => ({
  AiUserSessionManager: class AiUserSessionManager {},
}));

vi.mock('../ai-agent/tools/file-extraction', () => ({
  FilePersistenceService: class FilePersistenceService {},
}));
```

### Key Guidelines

1. **Use `vi.fn()`** for all mock functions, never `jest.fn()` or `jest.spyOn()`
2. **Type mocks with `MockedFunction<Service['method']>`** for individual methods from `@kit/testing/types`
3. **Type full service mocks with `Mocked<T>`** from `@kit/testing/types` (e.g., `Mocked<Queue>`)
4. **Chain Supabase query mocks**: `from -> select -> eq -> single` with `vi.fn().mockReturnValue()` at each level
5. **Mock BullMQ queues** via `getQueueToken(QUEUE_NAMES.X)` with `{ add: vi.fn(), getJob: vi.fn() }`
6. **Use `vi.mock()` for module-level mocks** when breaking circular dependencies
7. **Inject mocks via `provide`/`useValue`** in `Test.createTestingModule()` providers array
8. **Extract mock factories** (like `createMockSupabaseClient`) for reuse across test files
9. **Use `vi.useFakeTimers()`** and `vi.advanceTimersByTime()` for time-dependent tests

Reference: [Vitest Mocking](https://vitest.dev/guide/mocking)

---

### 6.3 Use Testing Module with Vitest for Unit Tests

**Impact: HIGH** — Enables proper isolated testing with mocked dependencies via NestJS DI

Use `@nestjs/testing` with Vitest to create isolated test environments with mocked dependencies. Use `vi.fn()` for mocks, `MockedFunction` from `@kit/testing/types` for typed mock references, and `Test.createTestingModule()` with `provide`/`useValue` for dependency injection overrides.

### Why It Matters

Proper unit testing requires isolating the system under test from its dependencies. Using `Test.createTestingModule()` mirrors the real NestJS DI container while substituting mock implementations, ensuring tests verify business logic without hitting external services. Vitest is the test runner used across Hamster Studio.

**Incorrect (Jest APIs or manual instantiation):**

```typescript
// Anti-pattern 1: Jest mocking functions
describe('UsersService', () => {
  let repo: jest.Mocked<UserRepository>; // Wrong type

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UserRepository,
          useValue: {
            save: jest.fn(),     // Wrong: jest.fn()
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    repo = module.get(UserRepository);
  });

  afterEach(() => {
    jest.clearAllMocks(); // Wrong: jest.clearAllMocks()
  });

  it('should call service', () => {
    jest.spyOn(reflector, 'get').mockReturnValue(true); // Wrong: jest.spyOn()
  });
});

// Anti-pattern 2: Manual instantiation bypassing DI
const repo = new UserRepository(); // Real repo, hits database
const service = new UsersService(repo);
```

**Correct (Vitest with Test.createTestingModule):**

```typescript
import { Test, TestingModule } from '@nestjs/testing';

import type { MockedFunction } from '@kit/testing/types';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HamsterGlsbRouterService } from './modules/ai-agent/orchestration/services/hamster-glsb-router.service';

describe('AppController', () => {
  let appController: AppController;
  let app: TestingModule;
  let glsbRouterService: {
    checkHealth: MockedFunction<HamsterGlsbRouterService['checkHealth']>;
  };

  beforeEach(async () => {
    const mockGlsbRouterService = {
      checkHealth: vi.fn().mockResolvedValue({
        status: 'disabled',
        enabled: false,
        timestamp: new Date().toISOString(),
      }),
    };

    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: HamsterGlsbRouterService,
          useValue: mockGlsbRouterService,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    glsbRouterService = app.get(HamsterGlsbRouterService);
  });

  afterEach(async () => {
    await app?.close();
  });

  describe('getGlsbRouterHealth', () => {
    it('should return health status from service', async () => {
      const mockHealth = {
        status: 'healthy' as const,
        enabled: true,
        model_version: 'test-version',
        latency_ms: 50,
        timestamp: new Date().toISOString(),
      };

      glsbRouterService.checkHealth.mockResolvedValue(mockHealth);

      const result = await appController.getGlsbRouterHealth();

      expect(result).toEqual(mockHealth);
      expect(glsbRouterService.checkHealth).toHaveBeenCalledTimes(1);
    });

    it('should handle errors gracefully', async () => {
      glsbRouterService.checkHealth.mockRejectedValue(
        new Error('Health check failed'),
      );

      const result = await appController.getGlsbRouterHealth();

      expect(result).toEqual({
        status: 'error',
        enabled: false,
        error: 'Health check failed',
        timestamp: expect.any(String),
      });
    });
  });
});
```

### Key Guidelines

1. **Use `vi.fn()`** for all mock functions, never `jest.fn()`
2. **Type mocks with `MockedFunction<Service['method']>`** from `@kit/testing/types` for typed mock references
3. **Use `Mocked<T>`** from `@kit/testing/types` when mocking an entire service interface
4. **Build mock services as plain objects** with `vi.fn()` methods and inject via `provide`/`useValue`
5. **Always clean up** with `afterEach(async () => { await app?.close(); })` to avoid resource leaks
6. **Use `vi.mock()`** for module-level mocking of circular dependencies
7. **Use `vi.spyOn()`** instead of `jest.spyOn()` for spying on existing methods
8. **Never use `jest.clearAllMocks()`** -- Vitest handles cleanup per-test or use `vi.clearAllMocks()`

Reference: [NestJS Testing](https://docs.nestjs.com/fundamentals/testing)

---

## 7. API Design

**Section Impact: MEDIUM**

### 7.1 Use Zod Schemas for Response Serialization

**Impact: MEDIUM** — Response DTOs prevent accidental data exposure and provide a stable, typed API contract

Define Zod response schemas alongside request schemas. Use `createZodDto()` for both input validation and output shape definition. This replaces `class-transformer` serialization (`@Exclude()`, `@Expose()`, `ClassSerializerInterceptor`, `plainToInstance()`) with a single Zod-based approach. The `ZodValidationExceptionFilter` catches `ZodSerializationException` errors when response data does not match the expected schema.

### Why It Matters

Without response schemas, controllers can accidentally leak sensitive data (password hashes, internal IDs, PII) or return inconsistent shapes across endpoints. Zod response DTOs provide compile-time type safety for what gets serialized and runtime validation that catches shape mismatches during development. Sharing the same schema language (Zod) for both input and output eliminates the cognitive overhead of learning two different serialization systems.

### Anti-Pattern: class-transformer serialization

```typescript
// WRONG: @Exclude/@Expose decorators with class-transformer
import { Exclude, Expose, plainToInstance } from 'class-transformer';

export class UserResponseDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Exclude()
  passwordHash: string;

  @Expose({ groups: ['admin'] })
  internalNotes: string;

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial); // mutation
  }
}

// WRONG: ClassSerializerInterceptor
app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

// WRONG: plainToInstance for response mapping
@Get(':id')
async findOne(@Param('id') id: string): Promise<UserResponseDto> {
  const user = await this.usersService.findById(id);
  return plainToInstance(UserResponseDto, user, {
    excludeExtraneousValues: true,
  });
}

// WRONG: @SerializeOptions with groups
@Get('admin')
@UseGuards(AdminGuard)
@SerializeOptions({ groups: ['admin'] })
async findAllAdmin(): Promise<UserDto[]> { ... }
```

### Correct Pattern: Zod response schemas with createZodDto()

#### Define response schemas as Zod objects

```typescript
// dto/dispatch-brief-response.dto.ts
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const DispatchBriefResponseSchema = z.object({
  success: z.boolean(),
  executionId: z.string(),
  briefId: z.string(),
  taskCount: z.number(),
  status: z.literal('queued'),
  message: z.string().optional(),
});

export class DispatchBriefResponseDto extends createZodDto(
  DispatchBriefResponseSchema,
) {}
```

#### Use response DTOs as return types in controllers

```typescript
@Controller('briefs')
export class BriefsController {
  @Post(':briefId/dispatch')
  @HttpCode(HttpStatus.ACCEPTED)
  async dispatchBrief(
    @Body() request: DispatchBriefRequestDto,
    @CurrentAccount() accountId: string,
    @CurrentUser() user: AuthUser,
  ): Promise<DispatchBriefResponseDto> {
    const result = await this.briefPlanService.dispatch(
      request,
      accountId,
      user,
    );

    // Return a plain object matching the Zod schema shape
    return {
      success: true,
      executionId: result.executionId,
      briefId: result.briefId,
      taskCount: result.taskCount,
      status: 'queued' as const,
    };
  }
}
```

#### Share schemas between request and response

```typescript
// In @kit/shared/task-master
export const TaskSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  status: z.enum(['pending', 'in-progress', 'done']),
  description: z.string().optional(),
  accountId: z.string().uuid(),
});

export type Task = z.infer<typeof TaskSchema>;

// Request: pick/omit fields for input
export const CreateTaskSchema = TaskSchema.pick({
  title: true,
  description: true,
});

// Response: full shape for output
export const TaskResponseSchema = TaskSchema;
```

```typescript
// dto/create-task.dto.ts (API side)
import { createZodDto } from 'nestjs-zod';
import { CreateTaskSchema, TaskResponseSchema } from '@kit/shared/task-master';

export class CreateTaskDto extends createZodDto(CreateTaskSchema) {}
export class TaskResponseDto extends createZodDto(TaskResponseSchema) {}
```

#### ZodValidationExceptionFilter catches serialization errors

The `ZodValidationExceptionFilter` (registered globally via `APP_FILTER`) handles both request validation errors (`ZodValidationException`) and response serialization errors (`ZodSerializationException`):

```typescript
// From @kit/api-core/filters -- already configured in app.module.ts
@Catch(HttpException, ZodSerializationException, ZodValidationException)
export class ZodValidationExceptionFilter extends BaseExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // ZodSerializationException -> 500 (response shape mismatch)
    // ZodValidationException -> 400 (request validation failed)
    // Other HttpException -> delegates to default NestJS handler
  }
}
```

### Key Guidelines

- **Use `createZodDto()`** for both request and response DTOs -- same pattern, same library
- **Never use `class-transformer`** (`@Exclude()`, `@Expose()`, `plainToInstance()`, `ClassSerializerInterceptor`) -- not part of this stack
- **Return plain objects** from controllers that match the Zod schema shape -- no class instantiation needed
- **Derive request schemas from base schemas** using `.pick()`, `.omit()`, `.partial()`, or `.extend()` to keep shapes consistent
- **Use `z.infer<typeof Schema>`** to extract TypeScript types when you need the type without the DTO class wrapper
- **Response serialization errors** (`ZodSerializationException`) result in 500 errors and are logged -- fix the response shape, not the schema
- **Share schemas** between frontend and API via `@kit/shared/` to maintain a single source of truth for data shapes

Reference: [nestjs-zod](https://github.com/risen228/nestjs-zod)

---

### 7.2 Use Interceptors for Cross-Cutting Concerns

**Impact: MEDIUM-HIGH** — Interceptors provide clean separation for cross-cutting logic

Interceptors can transform responses, add logging, handle caching, and measure performance without polluting your business logic. They wrap the route handler execution, giving you access to both the request and response streams.

**Incorrect (logging and transformation in every method):**

```typescript
// Logging in every controller method
@Controller('users')
export class UsersController {
  @Get()
  async findAll(): Promise<User[]> {
    const start = Date.now();
    this.logger.log('findAll called');

    const users = await this.usersService.findAll();

    this.logger.log(`findAll completed in ${Date.now() - start}ms`);
    return users;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    const start = Date.now();
    this.logger.log(`findOne called with id: ${id}`);

    const user = await this.usersService.findOne(id);

    this.logger.log(`findOne completed in ${Date.now() - start}ms`);
    return user;
  }
  // Repeated in every method!
}

// Manual response wrapping
@Get()
async findAll(): Promise<{ data: User[]; meta: Meta }> {
  const users = await this.usersService.findAll();
  return {
    data: users,
    meta: { timestamp: new Date(), count: users.length },
  };
}
```

**Correct (use interceptors for cross-cutting concerns):**

```typescript
// Logging interceptor
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, body } = request;
    const now = Date.now();

    return next.handle().pipe(
      tap({
        next: (data) => {
          const response = context.switchToHttp().getResponse();
          this.logger.log(
            `${method} ${url} ${response.statusCode} - ${Date.now() - now}ms`,
          );
        },
        error: (error) => {
          this.logger.error(
            `${method} ${url} ${error.status || 500} - ${Date.now() - now}ms`,
            error.stack,
          );
        },
      }),
    );
  }
}

// Response transformation interceptor
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        data,
        meta: {
          timestamp: new Date().toISOString(),
          path: context.switchToHttp().getRequest().url,
        },
      })),
    );
  }
}

// Timeout interceptor
@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(5000),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          throw new RequestTimeoutException('Request timed out');
        }
        throw err;
      }),
    );
  }
}

// Apply globally or per-controller
@Module({
  providers: [
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
  ],
})
export class AppModule {}

// Or per-controller
@Controller('users')
@UseInterceptors(LoggingInterceptor)
export class UsersController {
  @Get()
  async findAll(): Promise<User[]> {
    // Clean business logic only
    return this.usersService.findAll();
  }
}

// Custom cache interceptor with TTL
@Injectable()
export class HttpCacheInterceptor implements NestInterceptor {
  constructor(
    private cacheManager: Cache,
    private reflector: Reflector,
  ) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();

    // Only cache GET requests
    if (request.method !== 'GET') {
      return next.handle();
    }

    const cacheKey = this.generateKey(request);
    const ttl = this.reflector.get<number>('cacheTTL', context.getHandler()) || 300;

    const cached = await this.cacheManager.get(cacheKey);
    if (cached) {
      return of(cached);
    }

    return next.handle().pipe(
      tap((response) => {
        this.cacheManager.set(cacheKey, response, ttl);
      }),
    );
  }

  private generateKey(request: Request): string {
    return `cache:${request.url}:${JSON.stringify(request.query)}`;
  }
}

// Usage with custom TTL
@Get()
@SetMetadata('cacheTTL', 600)
@UseInterceptors(HttpCacheInterceptor)
async findAll(): Promise<User[]> {
  return this.usersService.findAll();
}

// Error mapping interceptor
@Injectable()
export class ErrorMappingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof EntityNotFoundError) {
          throw new NotFoundException(error.message);
        }
        if (error instanceof QueryFailedError) {
          if (error.message.includes('duplicate')) {
            throw new ConflictException('Resource already exists');
          }
        }
        throw error;
      }),
    );
  }
}
```

Reference: [NestJS Interceptors](https://docs.nestjs.com/interceptors)

---

### 7.3 Use ZodValidationPipe and Custom Pipes for Input Transformation

**Impact: MEDIUM** — Pipes ensure clean, validated, and transformed data reaches your handlers

The global `ZodValidationPipe` (registered as `APP_PIPE` in `app.module.ts`) handles all Zod DTO validation automatically. For parameter-level transformations, use built-in NestJS pipes like `ParseUUIDPipe` and `ParseBoolPipe`, or create custom pipes for domain-specific logic. Custom pipes implement `PipeTransform` and can inject services when scoped to `Scope.REQUEST`.

### Why It Matters

Pipes separate validation and transformation logic from controller business logic. The global `ZodValidationPipe` eliminates boilerplate by automatically validating any parameter typed as a `createZodDto()` class. Custom pipes handle transformations that go beyond schema validation -- like resolving display IDs to UUIDs, looking up resources, or enriching input with context from the request.

### Anti-Pattern: ValidationPipe or manual parsing in handlers

```typescript
// WRONG: ValidationPipe with class-validator options
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
  }),
);

// WRONG: Manual type parsing inside handlers
@Controller('tasks')
export class TasksController {
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    const uuid = id.trim();
    if (!isUUID(uuid)) {
      throw new BadRequestException('Invalid UUID');
    }
    return this.tasksService.findOne(uuid);
  }

  @Get()
  async findAll(
    @Query('page') page: string,
    @Query('limit') limit: string,
  ): Promise<Task[]> {
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 10;
    return this.tasksService.findAll(pageNum, limitNum);
  }
}

// WRONG: class-validator decorators with @Type transformation
export class FindTasksDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;
}
```

### Correct Pattern: ZodValidationPipe + built-in + custom pipes

#### Global ZodValidationPipe is already registered

```typescript
// app.module.ts -- already configured, no per-endpoint setup needed
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
```

#### Use built-in pipes for parameter-level validation

```typescript
import { ParseUUIDPipe, ParseBoolPipe } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Task> {
    // id is guaranteed to be a valid UUID
    return this.tasksService.findOne(id);
  }

  @Get(':taskId/agent/:runId')
  async getAgentRunStatus(
    @Param('taskId', ParseTaskIdPipe) _task: ResolvedTaskId,
    @Param('runId', ParseUUIDPipe) runId: string,
    @Query('sync', new ParseBoolPipe({ optional: true })) sync?: boolean,
  ) {
    return this.agentService.getRunStatus(runId, sync);
  }
}
```

#### Create custom pipes for domain-specific transformations

The `ParseTaskIdPipe` is a real example from the codebase. It accepts either a UUID or a display ID (like "HAM-123"), resolves it to the actual task UUID, and verifies the task belongs to the current account:

```typescript
// common/pipes/parse-task-id.pipe.ts
import {
  ArgumentMetadata,
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  PipeTransform,
  Scope,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import type { Request } from 'express';
import { z } from 'zod';

import { SupabaseService } from '@kit/api-core/supabase';

export interface ResolvedTaskId {
  taskId: string;
  originalInput: string;
  wasDisplayId: boolean;
}

@Injectable({ scope: Scope.REQUEST })
export class ParseTaskIdPipe
  implements PipeTransform<string, Promise<ResolvedTaskId>>
{
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    private readonly supabaseService: SupabaseService,
  ) {}

  async transform(
    value: string,
    metadata: ArgumentMetadata,
  ): Promise<ResolvedTaskId> {
    const accountId = (this.request as Request & { accountId?: string })
      .accountId;

    if (!accountId) {
      throw new BadRequestException(
        'Account context required. Provide x-account-id header.',
      );
    }

    if (!value || typeof value !== 'string') {
      throw new BadRequestException(
        `Invalid task identifier: ${metadata.data || 'taskId'} is required`,
      );
    }

    const trimmedValue = value.trim();
    const isUuid = z.uuid().safeParse(trimmedValue).success;

    if (isUuid) {
      const taskId = await this.resolveTaskIdentifier(
        accountId,
        'id',
        trimmedValue,
      );
      if (!taskId) {
        throw new NotFoundException(`Task not found: ${trimmedValue}`);
      }
      return { taskId, originalInput: value, wasDisplayId: false };
    }

    // Display ID (e.g., "HAM-123") -- resolve to UUID
    const taskId = await this.resolveTaskIdentifier(
      accountId,
      'display_id',
      trimmedValue.toUpperCase(),
    );
    if (!taskId) {
      throw new NotFoundException(`Task not found: ${trimmedValue}`);
    }
    return { taskId, originalInput: value, wasDisplayId: true };
  }

  private async resolveTaskIdentifier(
    accountId: string,
    field: 'id' | 'display_id',
    value: string,
  ): Promise<string | null> {
    const client = this.supabaseService.getAdminClient();
    const { data, error } = await client
      .from('tasks')
      .select('id')
      .eq('account_id', accountId)
      .eq(field, value)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null;
      throw new BadRequestException('Failed to resolve task identifier');
    }
    return data?.id ?? null;
  }
}
```

#### Use the custom pipe in controllers via destructuring

```typescript
@Controller('tasks/:taskId/agent')
export class TaskAgentController {
  @Post('launch')
  async launchAgent(
    @CurrentAccount() accountId: string,
    @CurrentUser() user: AuthUser,
    @Param('taskId', ParseTaskIdPipe) { taskId, originalInput }: ResolvedTaskId,
    @Body() dto: LaunchAgentDto,
  ): Promise<LaunchAgentResultDto> {
    return this.agentService.launch(taskId, dto, accountId, user);
  }

  @Get('runs')
  async listAgentRuns(
    @CurrentAccount() accountId: string,
    @Param('taskId', ParseTaskIdPipe) { taskId }: ResolvedTaskId,
    @Query() query: ListAgentRunsQueryDto,
  ): Promise<AgentRunDto[]> {
    return this.agentService.listRuns(taskId, query, accountId);
  }
}
```

### Key Guidelines

- **Global `ZodValidationPipe`** handles all DTO validation automatically -- do not register `ValidationPipe` from `@nestjs/common`
- **Built-in pipes** (`ParseUUIDPipe`, `ParseIntPipe`, `ParseBoolPipe`, `ParseEnumPipe`, `DefaultValuePipe`) are still useful for individual route parameters
- **Custom pipes** implement `PipeTransform<InputType, OutputType>` for domain-specific transformations
- **Use `Scope.REQUEST`** when a pipe needs access to the current request (e.g., for `accountId` from auth context) by injecting `REQUEST`
- **Use Zod inside custom pipes** (e.g., `z.uuid().safeParse()`) for validation logic rather than regex or manual checks
- **Throw `BadRequestException`** for invalid input and `NotFoundException` for missing resources in pipes
- **Return rich result objects** from custom pipes (like `ResolvedTaskId`) that provide both the resolved value and metadata about the transformation
- **Place custom pipes** in `src/common/pipes/` and export via barrel file

Reference: [NestJS Pipes](https://docs.nestjs.com/pipes) | [nestjs-zod](https://github.com/risen228/nestjs-zod)

---

## 8. Microservices

**Section Impact: MEDIUM**

### 8.1 Implement Health Checks for Microservices

**Impact: MEDIUM-HIGH** — Health checks enable orchestrators to manage service lifecycle

Implement liveness and readiness probes using `@nestjs/terminus`. Liveness checks determine if the service should be restarted. Readiness checks determine if the service can accept traffic. Proper health checks enable Kubernetes and load balancers to route traffic correctly.

**Incorrect (simple ping that doesn't check dependencies):**

```typescript
// Simple ping that doesn't check dependencies
@Controller('health')
export class HealthController {
  @Get()
  check(): string {
    return 'OK'; // Service might be unhealthy but returns OK
  }
}

// Health check that blocks on slow dependencies
@Controller('health')
export class HealthController {
  @Get()
  async check(): Promise<string> {
    // If database is slow, health check times out
    await this.userRepo.findOne({ where: { id: '1' } });
    await this.redis.ping();
    await this.externalApi.healthCheck();
    return 'OK';
  }
}
```

**Correct (use @nestjs/terminus for comprehensive health checks):**

```typescript
// Use @nestjs/terminus for comprehensive health checks
import {
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
  HealthCheck,
  DiskHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: TypeOrmHealthIndicator,
    private disk: DiskHealthIndicator,
    private memory: MemoryHealthIndicator,
  ) {}

  // Liveness probe - is the service alive?
  @Get('live')
  @HealthCheck()
  liveness() {
    return this.health.check([
      // Basic checks only
      () => this.memory.checkHeap('memory_heap', 200 * 1024 * 1024), // 200MB
    ]);
  }

  // Readiness probe - can the service handle traffic?
  @Get('ready')
  @HealthCheck()
  readiness() {
    return this.health.check([
      () => this.db.pingCheck('database'),
      () =>
        this.http.pingCheck('redis', 'http://redis:6379', { timeout: 1000 }),
      () =>
        this.disk.checkStorage('disk', { path: '/', thresholdPercent: 0.9 }),
    ]);
  }

  // Deep health check for debugging
  @Get('deep')
  @HealthCheck()
  deepCheck() {
    return this.health.check([
      () => this.db.pingCheck('database'),
      () => this.memory.checkHeap('memory_heap', 200 * 1024 * 1024),
      () => this.memory.checkRSS('memory_rss', 300 * 1024 * 1024),
      () =>
        this.disk.checkStorage('disk', { path: '/', thresholdPercent: 0.9 }),
      () =>
        this.http.pingCheck('external-api', 'https://api.example.com/health'),
    ]);
  }
}

// Custom indicator for business-specific health
@Injectable()
export class QueueHealthIndicator extends HealthIndicator {
  constructor(private queueService: QueueService) {
    super();
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    const queueStats = await this.queueService.getStats();

    const isHealthy = queueStats.failedCount < 100;
    const result = this.getStatus(key, isHealthy, {
      waiting: queueStats.waitingCount,
      active: queueStats.activeCount,
      failed: queueStats.failedCount,
    });

    if (!isHealthy) {
      throw new HealthCheckError('Queue unhealthy', result);
    }

    return result;
  }
}

// Redis health indicator
@Injectable()
export class RedisHealthIndicator extends HealthIndicator {
  constructor(@InjectRedis() private redis: Redis) {
    super();
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    try {
      const pong = await this.redis.ping();
      return this.getStatus(key, pong === 'PONG');
    } catch (error) {
      throw new HealthCheckError('Redis check failed', this.getStatus(key, false));
    }
  }
}

// Use custom indicators
@Get('ready')
@HealthCheck()
readiness() {
  return this.health.check([
    () => this.db.pingCheck('database'),
    () => this.redis.isHealthy('redis'),
    () => this.queue.isHealthy('job-queue'),
  ]);
}

// Graceful shutdown handling
@Injectable()
export class GracefulShutdownService implements OnApplicationShutdown {
  private isShuttingDown = false;

  isShutdown(): boolean {
    return this.isShuttingDown;
  }

  async onApplicationShutdown(signal: string): Promise<void> {
    this.isShuttingDown = true;
    console.log(`Shutting down on ${signal}`);

    // Wait for in-flight requests
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
}

// Health check respects shutdown state
@Get('ready')
@HealthCheck()
readiness() {
  if (this.shutdownService.isShutdown()) {
    throw new ServiceUnavailableException('Shutting down');
  }

  return this.health.check([
    () => this.db.pingCheck('database'),
  ]);
}
```

### Kubernetes Configuration

```yaml
# Kubernetes deployment with probes
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-service
spec:
  template:
    spec:
      containers:
        - name: api
          image: api-service:latest
          ports:
            - containerPort: 3000
          livenessProbe:
            httpGet:
              path: /health/live
              port: 3000
            initialDelaySeconds: 30
            periodSeconds: 10
            timeoutSeconds: 5
            failureThreshold: 3
          readinessProbe:
            httpGet:
              path: /health/ready
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 5
            timeoutSeconds: 3
            failureThreshold: 3
          startupProbe:
            httpGet:
              path: /health/live
              port: 3000
            initialDelaySeconds: 0
            periodSeconds: 5
            failureThreshold: 30
```

Reference: [NestJS Terminus](https://docs.nestjs.com/recipes/terminus)

---

### 8.2 Use Message Queues for Background Jobs

**Impact: MEDIUM-HIGH** — Queues enable reliable background processing with retry logic and distributed workload

Use `@nestjs/bullmq` for background job processing. Queues decouple long-running tasks from HTTP requests, enable retry logic, and distribute workload across workers. Use them for AI orchestration, file processing, notifications, and any task that shouldn't block user requests.

## Anti-Pattern: Long-Running Tasks in HTTP Handlers

```typescript
// ❌ WRONG: Blocking the HTTP request for a long-running operation
@Controller('plans')
export class PlansController {
  @Post()
  async generate(@Body() dto: GeneratePlanDto): Promise<Plan> {
    const brief = await this.briefsService.fetch(dto.briefId);
    const plan = await this.aiService.generatePlan(brief);   // Minutes!
    const tasks = await this.taskService.createBulk(plan);   // More time!
    return { plan, tasks };  // Client times out
  }
}

// ❌ WRONG: setInterval for scheduled tasks
setInterval(async () => {
  await cleanupOldRecords();
}, 60000);  // No error handling, memory leaks, no visibility
```

## Correct Pattern: BullMQ with Redis

### Queue Configuration

Configure BullMQ in the root module with Redis connection from ConfigService:

```typescript
// app.module.ts
@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        connection: getRedisConfig(configService),
      }),
      inject: [ConfigService],
    }),
    BullMQModule,  // Feature module that registers queues
  ],
})
export class AppModule {}
```

### Producer: Add Jobs to Queue

Return immediately to the client, process in background:

```typescript
@Injectable()
export class PlanGenerationService {
  constructor(
    @InjectQueue('orchestration-flow') private readonly queue: Queue,
  ) {}

  async requestPlanGeneration(briefId: string, accountId: string) {
    const job = await this.queue.add(
      'generate-plan',
      { briefId, accountId },
      {
        attempts: 3,
        backoff: { type: 'exponential', delay: 5000 },
        // Deterministic job ID prevents duplicate processing
        jobId: `plan-${briefId}`,
      },
    );

    return { jobId: job.id };
  }
}
```

### Consumer: Process Jobs with WorkerHost

Extend `WorkerHost` for the processor class. Use `@Processor()` with concurrency and stalled job settings:

```typescript
@Processor('orchestration-flow', {
  concurrency: 5,
  maxStalledCount: 2,
  stalledInterval: 30000,
})
export class OrchestrationFlowConsumer extends WorkerHost {
  private readonly logger = new Logger(OrchestrationFlowConsumer.name);

  constructor(
    private readonly planService: PlanGenerationService,
    // ✅ Use AIUserSessionManager — NOT SupabaseService
    // SupabaseService is REQUEST-scoped and has no request context in queue processors.
    // AIUserSessionManager authenticates as the team's AI agent (subject to RLS).
    private readonly aiUserSessionManager: AiUserSessionManager,
  ) {
    super();
  }

  async process(job: Job<OrchestrationFlowJob>): Promise<void> {
    const ctx = { operation: 'processOrchestrationFlow', jobId: job.id };
    this.logger.log(ctx, 'Processing orchestration flow job');

    try {
      // Get RLS-enforced client for this team's AI agent
      const client = await this.aiUserSessionManager
        .getTeamAiUserSessionClient(job.data.accountId);

      await this.planService.execute(job.data, client);
      this.logger.log(ctx, 'Orchestration flow job completed');
    } catch (error) {
      this.logger.error({ ...ctx, error }, 'Orchestration flow job failed');
      throw error;  // BullMQ retries based on job options
    }
  }

  @OnWorkerEvent('active')
  onActive(job: Job) {
    this.logger.debug({ jobId: job.id }, 'Job started processing');
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job) {
    this.logger.log({ jobId: job.id }, 'Job completed');
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job, error: Error) {
    this.logger.error({ jobId: job.id, error: error.message }, 'Job failed');
  }
}
```

### Scheduled Jobs

Use repeatable jobs with deterministic IDs to prevent duplicates:

```typescript
@Injectable()
export class ScheduledJobsService implements OnModuleInit {
  constructor(@InjectQueue('maintenance') private queue: Queue) {}

  async onModuleInit(): Promise<void> {
    await this.queue.add(
      'cleanup',
      {},
      {
        repeat: { cron: '0 0 * * *' },
        jobId: 'daily-cleanup',  // Prevents duplicate schedules
      },
    );
  }
}
```

## Key Guidelines

1. **Return immediately from HTTP handlers** — add a job and return the job ID for status polling
2. **Use `AIUserSessionManager` for database access** — NOT `SupabaseService` (which is REQUEST-scoped and has no request context in queue processors). The AI user session provides an RLS-enforced client. See `security-supabase-rls` rule for details
3. **Use deterministic job IDs** — prevents duplicate processing when the same request is retried
4. **Configure retry with exponential backoff** — `{ attempts: 3, backoff: { type: 'exponential', delay: 5000 } }`
5. **Extend `WorkerHost`** — not the deprecated `@Process()` decorator pattern
6. **Use `@OnWorkerEvent()`** — not the deprecated `@OnQueueActive/Completed/Failed` decorators
7. **Log with structured context** — include job ID, operation name, and relevant data in every log
8. **Jobs must be idempotent** — safe to retry without side effects if partially completed

Reference: [NestJS Queues](https://docs.nestjs.com/techniques/queues)

---

## 9. DevOps & Deployment

**Section Impact: LOW-MEDIUM**

### 9.1 Implement Graceful Shutdown

**Impact: MEDIUM-HIGH** — Proper shutdown handling ensures zero-downtime deployments

Handle SIGTERM and SIGINT signals to gracefully shutdown your NestJS application. Stop accepting new requests, wait for in-flight requests to complete, close database connections, and clean up resources. This prevents data loss and connection errors during deployments.

**Incorrect (ignoring shutdown signals):**

```typescript
// Ignore shutdown signals
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  // App crashes immediately on SIGTERM
  // In-flight requests fail
  // Database connections are abruptly closed
}

// Long-running tasks without cancellation
@Injectable()
export class ProcessingService {
  async processLargeFile(file: File): Promise<void> {
    // No way to interrupt this during shutdown
    for (let i = 0; i < file.chunks.length; i++) {
      await this.processChunk(file.chunks[i]);
      // May run for minutes, blocking shutdown
    }
  }
}
```

**Correct (enable shutdown hooks and handle cleanup):**

```typescript
// Enable shutdown hooks in main.ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable shutdown hooks
  app.enableShutdownHooks();

  // Optional: Add timeout for forced shutdown
  const server = await app.listen(3000);
  server.setTimeout(30000); // 30 second timeout

  // Handle graceful shutdown
  const signals = ['SIGTERM', 'SIGINT'];
  signals.forEach((signal) => {
    process.on(signal, async () => {
      console.log(`Received ${signal}, starting graceful shutdown...`);

      // Stop accepting new connections
      server.close(async () => {
        console.log('HTTP server closed');
        await app.close();
        process.exit(0);
      });

      // Force exit after timeout
      setTimeout(() => {
        console.error('Forced shutdown after timeout');
        process.exit(1);
      }, 30000);
    });
  });
}

// Lifecycle hooks for cleanup
@Injectable()
export class DatabaseService implements OnApplicationShutdown {
  private readonly connections: Connection[] = [];

  async onApplicationShutdown(signal?: string): Promise<void> {
    console.log(`Database service shutting down on ${signal}`);

    // Close all connections gracefully
    await Promise.all(
      this.connections.map((conn) => conn.close()),
    );

    console.log('All database connections closed');
  }
}

// Queue processor with graceful shutdown
@Injectable()
export class QueueService implements OnApplicationShutdown, OnModuleDestroy {
  private isShuttingDown = false;

  onModuleDestroy(): void {
    this.isShuttingDown = true;
  }

  async onApplicationShutdown(): Promise<void> {
    // Wait for current jobs to complete
    await this.queue.close();
  }

  async processJob(job: Job): Promise<void> {
    if (this.isShuttingDown) {
      throw new Error('Service is shutting down');
    }
    await this.doWork(job);
  }
}

// WebSocket gateway cleanup
@WebSocketGateway()
export class EventsGateway implements OnApplicationShutdown {
  @WebSocketServer()
  server: Server;

  async onApplicationShutdown(): Promise<void> {
    // Notify all connected clients
    this.server.emit('shutdown', { message: 'Server is shutting down' });

    // Close all connections
    this.server.disconnectSockets();
  }
}

// Health check integration
@Injectable()
export class ShutdownService {
  private isShuttingDown = false;

  startShutdown(): void {
    this.isShuttingDown = true;
  }

  isShutdown(): boolean {
    return this.isShuttingDown;
  }
}

@Controller('health')
export class HealthController {
  constructor(private shutdownService: ShutdownService) {}

  @Get('ready')
  @HealthCheck()
  readiness(): Promise<HealthCheckResult> {
    // Return 503 during shutdown - k8s stops sending traffic
    if (this.shutdownService.isShutdown()) {
      throw new ServiceUnavailableException('Shutting down');
    }

    return this.health.check([
      () => this.db.pingCheck('database'),
    ]);
  }
}

// Integrate with shutdown
@Injectable()
export class AppShutdownService implements OnApplicationShutdown {
  constructor(private shutdownService: ShutdownService) {}

  async onApplicationShutdown(): Promise<void> {
    // Mark as unhealthy first
    this.shutdownService.startShutdown();

    // Wait for k8s to update endpoints
    await this.sleep(5000);

    // Then proceed with cleanup
  }
}

// Request tracking for in-flight requests
@Injectable()
export class RequestTracker implements NestMiddleware, OnApplicationShutdown {
  private activeRequests = 0;
  private isShuttingDown = false;
  private shutdownPromise: Promise<void> | null = null;
  private resolveShutdown: (() => void) | null = null;

  use(req: Request, res: Response, next: NextFunction): void {
    if (this.isShuttingDown) {
      res.status(503).send('Service Unavailable');
      return;
    }

    this.activeRequests++;

    res.on('finish', () => {
      this.activeRequests--;
      if (this.isShuttingDown && this.activeRequests === 0 && this.resolveShutdown) {
        this.resolveShutdown();
      }
    });

    next();
  }

  async onApplicationShutdown(): Promise<void> {
    this.isShuttingDown = true;

    if (this.activeRequests > 0) {
      console.log(`Waiting for ${this.activeRequests} requests to complete`);
      this.shutdownPromise = new Promise((resolve) => {
        this.resolveShutdown = resolve;
      });

      // Wait with timeout
      await Promise.race([
        this.shutdownPromise,
        new Promise((resolve) => setTimeout(resolve, 30000)),
      ]);
    }

    console.log('All requests completed');
  }
}
```

Reference: [NestJS Lifecycle Events](https://docs.nestjs.com/fundamentals/lifecycle-events)

---

### 9.2 Use ConfigModule with Zod Validation

**Impact: LOW-MEDIUM** — Proper configuration prevents deployment failures and catches misconfigurations at startup

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

---

### 9.3 Use Structured Logging

**Impact: MEDIUM-HIGH** — Structured logging enables effective debugging and monitoring

Use the NestJS built-in `Logger` class with structured context objects. Include contextual information (operation name, entity IDs, relevant state) to make logs searchable and meaningful. Avoid `console.log` and use proper log levels.

## Anti-Pattern: Unstructured Logging

```typescript
// ❌ WRONG: console.log in production
@Injectable()
export class TasksService {
  async createTask(dto: CreateTaskDto): Promise<Task> {
    console.log('Creating task:', dto);  // No levels, no structure

    try {
      const task = await this.repo.create(dto);
      console.log('Task created:', task.id);  // Lost in noise
      return task;
    } catch (error) {
      console.log('Error:', error);  // Using .log for errors!
      throw error;
    }
  }
}

// ❌ WRONG: String concatenation, no structure
logger.log('User ' + userId + ' created task ' + taskId + ' at ' + new Date());

// ❌ WRONG: Logging sensitive data
console.log('Login attempt:', { email, password });
```

## Correct Pattern: NestJS Logger with Context Objects

```typescript
import { Logger } from '@nestjs/common';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  async createTask(dto: CreateTaskDto): Promise<Task> {
    const ctx = { operation: 'createTask', accountId: dto.accountId };
    this.logger.log(ctx, 'Creating task');

    try {
      const task = await this.repo.create(dto);
      this.logger.log({ ...ctx, taskId: task.id }, 'Task created');
      return task;
    } catch (error) {
      this.logger.error({ ...ctx, error }, 'Failed to create task');
      throw error;
    }
  }
}
```

### Pattern: Operation Context

Pass a context object as the first argument with the operation name and relevant IDs. Add fields as the operation progresses:

```typescript
async processJob(jobId: string, accountId: string) {
  const ctx = { operation: 'processJob', jobId, accountId };

  this.logger.log(ctx, 'Starting job processing');

  const tasks = await this.fetchTasks(accountId);
  this.logger.log({ ...ctx, taskCount: tasks.length }, 'Tasks fetched');

  for (const task of tasks) {
    this.logger.debug({ ...ctx, taskId: task.id }, 'Processing task');
    await this.process(task);
  }

  this.logger.log({ ...ctx, processed: tasks.length }, 'Job processing complete');
}
```

### Pattern: Sentry Logger Integration

For production monitoring, extend the NestJS `ConsoleLogger` with Sentry integration:

```typescript
// The SentryGlobalFilter captures exceptions automatically.
// Use the @SentryExceptionCaptured() decorator on exception filter catch methods
// to ensure exceptions are forwarded to Sentry for alerting.
```

## Log Level Guidelines

| Level | When to Use | Example |
| --- | --- | --- |
| `error` | Operation failed, requires attention | Database connection lost, unhandled exception |
| `warn` | Unexpected but handled, potential issue | Rate limit approached, deprecated API called |
| `log` | Important business events | Task created, job completed, user authenticated |
| `debug` | Detailed operational info | Query executed, cache hit/miss, step completion |
| `verbose` | Trace-level, development only | Full request/response bodies, internal state |

## Key Guidelines

1. **Use `new Logger(ClassName.name)`** — class name appears as context in every log line
2. **Context object first, message string second** — `this.logger.log({ id }, 'Created')` not `this.logger.log('Created ' + id)`
3. **Never log sensitive data** — no passwords, tokens, PII, or full request bodies in production
4. **Use appropriate levels** — `.error()` for failures, `.warn()` for recoverable issues, `.log()` for business events
5. **Include operation name** — `{ operation: 'createTask' }` makes logs filterable by business action
6. **Log at boundaries** — entry, exit, and error points of significant operations

Reference: [NestJS Logger](https://docs.nestjs.com/techniques/logger)

---

## References

- [NestJS Documentation](https://docs.nestjs.com)
- [nestjs-zod](https://github.com/risen228/nestjs-zod)
- [Supabase Documentation](https://supabase.com/docs)
- [BullMQ Documentation](https://docs.bullmq.io)
- [Vitest Documentation](https://vitest.dev)
- [Sentry NestJS SDK](https://docs.sentry.io/platforms/javascript/guides/nestjs/)

---

*Generated by build-agents.ts on 2026-02-19*