---
title: Use ZodValidationPipe and Custom Pipes for Input Transformation
impact: MEDIUM
impactDescription: Pipes ensure clean, validated, and transformed data reaches your handlers
tags: api, pipes, validation, transformation, zod, nestjs-zod
---

## Use ZodValidationPipe and Custom Pipes for Input Transformation

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