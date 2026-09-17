---
title: Controllers
tags: nestjs, controllers, http
---

# NestJS Controllers

## Basic Controller

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

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto
  ): Promise<User> {
    return this.usersService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
```

## Route Decorators

| Decorator | HTTP Method | Usage |
| --- | --- | --- |
| `@Get()` | GET | Retrieve resources |
| `@Post()` | POST | Create resources |
| `@Put()` | PUT | Replace resources |
| `@Patch()` | PATCH | Partial update |
| `@Delete()` | DELETE | Remove resources |

## Parameter Decorators

```typescript
@Get(':id')
async findOne(
  @Param('id') id: string,           // Route parameter
  @Query('include') include: string, // Query string
  @Headers('x-api-key') apiKey: string, // Header
  @Body() body: CreateDto,           // Request body
) {}
```

## Multiple Validation Points

```typescript
@Controller('tasks')
export class TaskController {
  @Post(':id/dependencies')
  async addDependency(
    @Param() params: TaskParamsDto,    // Validate route params
    @Body() body: AddDependencyDto,    // Validate body
    @Query() query: TaskQueryDto,      // Validate query
  ) {
    return this.taskService.addDependency(params.id, body, query);
  }
}
```

## Controller Responsibilities

Controllers should ONLY handle HTTP concerns:

```typescript
// CORRECT - Controller handles HTTP, delegates business logic
@Controller('users')
export class UsersController {
  @Post()
  async create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }
}

// WRONG - Business logic in controller
@Controller('users')
export class UsersController {
  @Post()
  async create(@Body() dto: CreateUserDto) {
    // Don't do business logic here
    const user = await this.repository.save(dto);
    await this.emailService.sendWelcome(user);
    return user;
  }
}
```

## Response Handling

```typescript
import { HttpStatus, HttpCode } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  @HttpCode(HttpStatus.CREATED) // Custom status code
  async create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204 for delete
  async remove(@Param('id') id: string) {
    await this.usersService.remove(id);
  }
}
```

## Guards and Decorators

```typescript
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../common/guards/auth.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('admin')
@UseGuards(AuthGuard) // Apply to all routes
export class AdminController {
  @Get('users')
  @Roles('admin') // Custom decorator
  async getUsers() {
    return this.adminService.getUsers();
  }
}
```

## Best Practices

1. **Thin controllers** - Delegate to services
2. **Use DTOs** - For validation
3. **Proper HTTP codes** - 201 for create, 204 for delete
4. **Guard at controller level** - For auth
5. **Type return values** - Use interfaces/types