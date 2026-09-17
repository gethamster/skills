---
title: Optimize Supabase Database Queries
impact: HIGH
impactDescription: Database queries are typically the largest source of latency; inefficient queries compound in multi-tenant systems
tags:

- performance
- database
- queries
- supabase
- optimization

---

# Optimize Supabase Database Queries

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