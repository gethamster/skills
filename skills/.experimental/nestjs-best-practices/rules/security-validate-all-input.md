---
title: Validate All Input with Zod Schemas and nestjs-zod
impact: HIGH
impactDescription: First line of defense against injection attacks, malformed data, and type coercion bugs
tags: security, validation, zod, dto, nestjs-zod
---

## Validate All Input with Zod Schemas and nestjs-zod

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