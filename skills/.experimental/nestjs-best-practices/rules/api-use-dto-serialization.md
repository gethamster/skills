---
title: Use Zod Schemas for Response Serialization
impact: MEDIUM
impactDescription: Response DTOs prevent accidental data exposure and provide a stable, typed API contract
tags: api, dto, serialization, zod, nestjs-zod
---

## Use Zod Schemas for Response Serialization

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