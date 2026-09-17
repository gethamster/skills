---
title: Use Structured Logging
impact: MEDIUM-HIGH
impactDescription: Structured logging enables effective debugging and monitoring
tags:

- devops
- logging
- structured-logs

---

# Use Structured Logging

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