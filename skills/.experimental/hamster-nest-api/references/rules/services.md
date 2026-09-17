---
title: Services
tags: nestjs, services, business-logic
---

# NestJS Services

## Basic Service

```typescript
@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly emailService: EmailService,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    // Business logic here
    const user = await this.usersRepository.save(dto);
    await this.emailService.sendWelcome(user.email);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findOne(id); // Verify exists
    return this.usersRepository.update(id, dto);
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id); // Verify exists
    await this.usersRepository.delete(id);
  }
}
```

## Dependency Injection

```typescript
// CORRECT - Constructor injection
@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly emailService: EmailService,
  ) {}
}

// AVOID - Property injection (unless necessary)
@Injectable()
export class UsersService {
  @Inject(UsersRepository)
  private usersRepository: UsersRepository;
}
```

## Service Layer Pattern

```
Controller → Service → Repository
    ↓           ↓          ↓
  HTTP    Business    Data Access
```

```typescript
// Controller - HTTP layer
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }
}

// Service - Business logic layer
@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(dto: CreateUserDto): Promise<User> {
    // Business logic, validation, orchestration
    return this.usersRepository.save(dto);
  }
}

// Repository - Data access layer
@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async save(user: CreateUserDto): Promise<User> {
    return this.repository.save(user);
  }
}
```

## Error Handling

```typescript
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';

@Injectable()
export class UsersService {
  async findOne(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async create(dto: CreateUserDto): Promise<User> {
    const existing = await this.usersRepository.findByEmail(dto.email);
    if (existing) {
      throw new ConflictException('Email already exists');
    }

    if (!this.isValidEmail(dto.email)) {
      throw new BadRequestException('Invalid email format');
    }

    return this.usersRepository.save(dto);
  }
}
```

## Logging

```typescript
import { Injectable, Logger } from '@nestjs/common';
import { toErrorContext } from '@kit/shared';

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);

  async processOrder(userId: string, dto: CreateOrderDto): Promise<Order> {
    this.logger.log({ userId, msg: 'Processing order' });

    try {
      const order = await this.orderRepository.create(dto);

      this.logger.log({ userId, orderId: order.id, msg: 'Order processed' });

      return order;
    } catch (error) {
      this.logger.error({
        userId,
        ...toErrorContext(error),
        msg: 'Order processing failed',
      });

      throw error;
    }
  }
}
```

1. **MUST** use single-object pattern with `msg` key — `this.logger.log({ msg: 'Starting', id })`, not `this.logger.log('Starting', id)`
2. **MUST** use `toErrorContext(error)` in catch blocks — never pass raw `error` objects to the logger
3. **MUST NOT** end `msg` strings with colons — `'Order failed'` not `'Order failed:'`

## Async Operations

```typescript
@Injectable()
export class OrderService {
  async processOrder(dto: CreateOrderDto): Promise<Order> {
    // Parallel operations
    const [inventory, pricing] = await Promise.all([
      this.inventoryService.check(dto.items),
      this.pricingService.calculate(dto.items),
    ]);

    // Sequential operations (when dependent)
    const order = await this.orderRepository.create({
      ...dto,
      total: pricing.total,
    });

    await this.notificationService.sendOrderConfirmation(order);

    return order;
  }
}
```

## Service Composition

```typescript
@Injectable()
export class CheckoutService {
  constructor(
    private readonly cartService: CartService,
    private readonly paymentService: PaymentService,
    private readonly orderService: OrderService,
    private readonly notificationService: NotificationService,
  ) {}

  async checkout(userId: string, paymentDetails: PaymentDto): Promise<Order> {
    // Orchestrate multiple services
    const cart = await this.cartService.getCart(userId);

    const payment = await this.paymentService.process(paymentDetails, cart.total);

    const order = await this.orderService.create({
      userId,
      items: cart.items,
      paymentId: payment.id,
    });

    await this.notificationService.sendReceipt(order);

    await this.cartService.clear(userId);

    return order;
  }
}
```

## Best Practices

1. **Single Responsibility** - One concern per service
2. **Constructor Injection** - For dependencies
3. **Proper Error Handling** - Use NestJS exceptions
4. **Type Everything** - Return types, parameters
5. **No HTTP Concerns** - Leave to controllers
6. **Testable Design** - Easy to mock dependencies