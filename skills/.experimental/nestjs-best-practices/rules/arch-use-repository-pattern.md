---
title: Use Supabase Repository Pattern for Data Access
impact: HIGH
impactDescription: Decouples business logic from database queries, enforces multi-tenant isolation, and enables testable data access
tags:

- architecture
- repository
- data-access
- supabase

---

# Use Supabase Repository Pattern for Data Access

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