---
title: DTOs
tags: dto, validation, zod, nestjs-zod
---

# Data Transfer Objects

## Architecture

1. **Define schemas** in `packages/shared` using Zod
2. **Convert to DTOs** using `nestjs-zod` in API
3. **Share types** across frontend and backend
4. **Maintain consistency** between DB and validation

## Shared Schema Definition

```typescript
// packages/shared/src/users/schemas.ts
import { z } from 'zod';

export const CreateUserSchema = z
  .object({
    email: z
      .string({ required_error: 'Email is required' })
      .email('Please enter a valid email'),
    name: z
      .string({ required_error: 'Name is required' })
      .min(1, 'Name cannot be empty')
      .max(255, 'Name must be less than 255 characters'),
    role: z.enum(['user', 'admin']).optional().default('user'),
  })
  .describe('Create a new user');

export type CreateUserInput = z.infer<typeof CreateUserSchema>;
```

## NestJS DTO Conversion

```typescript
// apps/ai/src/modules/users/dto/create-user.dto.ts
import { createZodDto } from 'nestjs-zod';
import { CreateUserSchema } from '@kit/shared/users';

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
```

## Controller Usage

```typescript
import { Body, Controller, Post, Param, Query } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  async create(@Body() dto: CreateUserDto) {
    // dto is automatically validated
    return this.usersService.create(dto);
  }

  @Post(':id/role')
  async updateRole(
    @Param() params: UserParamsDto,
    @Body() body: UpdateRoleDto,
    @Query() query: QueryDto,
  ) {
    return this.usersService.updateRole(params.id, body, query);
  }
}
```

## Schema Patterns

### Database Enum Integration

```typescript
import { Constants } from '@kit/supabase/database';

export const TaskStatusSchema = z.enum(
  Constants['public']['Enums']['task_status'],
  {
    errorMap: () => ({
      message: 'Status must be one of: pending, in_progress, done',
    }),
  }
);
```

### Complex Validation

```typescript
export const UpdatePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(1, 'Confirmation is required'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
```

### Pagination Schema

```typescript
export const PaginationSchema = z.object({
  page: z.coerce.number().int().positive().optional().default(1),
  pageSize: z.coerce.number().int().positive().max(100).optional().default(20),
});

export const TaskFiltersSchema = z.object({
  status: z.array(TaskStatusSchema).optional(),
  search: z.string().optional(),
}).merge(PaginationSchema);
```

### Update as Partial

```typescript
export const UpdateTaskSchema = CreateTaskSchema.partial().extend({
  updated_at: z.date().optional(),
});
```

## Naming Conventions

| Type | Pattern | Example |
| --- | --- | --- |
| Schema | `[Action][Entity]Schema` | `CreateTaskSchema` |
| DTO | `[Action][Entity]Dto` | `CreateTaskDto` |
| Type | `[Action][Entity]Input` | `CreateTaskInput` |

## Frontend Integration

```typescript
// Type generation
import type { z } from 'zod';
import { CreateTaskSchema } from '@kit/shared/tasks';

export type CreateTaskInput = z.infer<typeof CreateTaskSchema>;

// Form integration
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const form = useForm({
  resolver: zodResolver(CreateTaskSchema),
});
```

## Anti-Patterns

```typescript
// WRONG - Duplicate validation
// In API
export class CreateTaskDto {
  @IsString()
  @MinLength(1)
  title: string;
}

// In frontend
const schema = z.object({
  title: z.string().min(1),
});

// WRONG - Use class-validator directly
import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;
}
```

## Best Practices

1. **Define once** - Schema in `packages/shared`
2. **Use Zod** - Not class-validator
3. **Include descriptions** - `.describe('...')`
4. **Clear error messages** - Custom error strings
5. **Use database enums** - From `@kit/supabase/database`
6. **Type everything** - `z.infer<typeof Schema>`