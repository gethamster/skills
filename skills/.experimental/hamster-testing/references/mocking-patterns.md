---
title: Mocking Patterns
tags: testing, jest, mocking
---

# Jest Mocking Patterns

## Basic Mocking

```typescript
// Mock a module
jest.mock('./dependency');
import { dependency } from './dependency';

// Mock implementation
const mockDependency = dependency as jest.Mocked<typeof dependency>;
mockDependency.method.mockReturnValue('mocked value');
```

## Mocking External Libraries

### bcrypt

```typescript
jest.mock('bcrypt');
import bcrypt from 'bcrypt';

const mockHash = bcrypt.hash as jest.MockedFunction<typeof bcrypt.hash>;
const mockCompare = bcrypt.compare as jest.MockedFunction<typeof bcrypt.compare>;

beforeEach(() => {
  mockHash.mockResolvedValue('hashed_password');
  mockCompare.mockResolvedValue(true);
});

it('should hash password', async () => {
  await service.createUser({ password: 'test123' });

  expect(mockHash).toHaveBeenCalledWith('test123', 10);
});
```

### Prisma Client

```typescript
jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    user: {
      create: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    $connect: jest.fn(),
    $disconnect: jest.fn(),
  })),
}));

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
```

### Supabase Client

```typescript
const mockSupabaseClient = {
  from: jest.fn().mockReturnThis(),
  select: jest.fn().mockReturnThis(),
  insert: jest.fn().mockReturnThis(),
  update: jest.fn().mockReturnThis(),
  delete: jest.fn().mockReturnThis(),
  eq: jest.fn().mockReturnThis(),
  single: jest.fn(),
};

jest.mock('@kit/supabase/server-client', () => ({
  getSupabaseServerClient: jest.fn(() => mockSupabaseClient),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

it('should fetch user', async () => {
  mockSupabaseClient.single.mockResolvedValue({
    data: { id: '1', name: 'Test' },
    error: null,
  });

  const result = await service.getUser('1');

  expect(mockSupabaseClient.from).toHaveBeenCalledWith('users');
  expect(result).toEqual({ id: '1', name: 'Test' });
});
```

## NestJS Service Mocking

```typescript
import { Test, TestingModule } from '@nestjs/testing';

describe('UsersService', () => {
  let service: UsersService;
  let repository: jest.Mocked<UsersRepository>;
  let emailService: jest.Mocked<EmailService>;

  beforeEach(async () => {
    const mockRepository = {
      findById: jest.fn(),
      save: jest.fn(),
      delete: jest.fn(),
    };

    const mockEmailService = {
      sendWelcome: jest.fn(),
      sendPasswordReset: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: UsersRepository, useValue: mockRepository },
        { provide: EmailService, useValue: mockEmailService },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get(UsersRepository);
    emailService = module.get(EmailService);
  });

  it('should send welcome email after creating user', async () => {
    const user = { id: '1', email: 'test@example.com' };
    repository.save.mockResolvedValue(user);
    emailService.sendWelcome.mockResolvedValue(undefined);

    await service.create({ email: 'test@example.com', name: 'Test' });

    expect(emailService.sendWelcome).toHaveBeenCalledWith('test@example.com');
  });
});
```

## Mock Return Values

```typescript
// Return value once
mockFn.mockReturnValueOnce('first call');
mockFn.mockReturnValueOnce('second call');

// Always return
mockFn.mockReturnValue('default');

// Async return
mockFn.mockResolvedValue({ data: 'value' });
mockFn.mockResolvedValueOnce({ data: 'first' });

// Async reject
mockFn.mockRejectedValue(new Error('Failed'));
mockFn.mockRejectedValueOnce(new Error('First failure'));

// Custom implementation
mockFn.mockImplementation((arg) => {
  if (arg === 'special') return 'special result';
  return 'default result';
});
```

## Assertions on Mocks

```typescript
// Called
expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledTimes(2);

// Called with specific args
expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
expect(mockFn).toHaveBeenLastCalledWith('last arg');
expect(mockFn).toHaveBeenNthCalledWith(1, 'first arg');

// Not called
expect(mockFn).not.toHaveBeenCalled();

// Check all calls
expect(mockFn.mock.calls).toEqual([
  ['first call arg'],
  ['second call arg'],
]);
```

## Spying on Methods

```typescript
// Spy on object method
const spy = jest.spyOn(object, 'method');
spy.mockReturnValue('mocked');

// Spy on prototype
const spy = jest.spyOn(Date, 'now');
spy.mockReturnValue(1234567890);

// Restore original
spy.mockRestore();

// Spy without mocking (just track calls)
const spy = jest.spyOn(console, 'log');
// After test
expect(spy).toHaveBeenCalledWith('expected log');
spy.mockRestore();
```

## Mocking Timers

```typescript
describe('Timer-based functionality', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should call function after delay', () => {
    const callback = jest.fn();

    service.scheduleTask(callback, 1000);

    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);

    expect(callback).toHaveBeenCalled();
  });

  it('should handle intervals', () => {
    const callback = jest.fn();

    service.startPolling(callback, 500);

    jest.advanceTimersByTime(1500);

    expect(callback).toHaveBeenCalledTimes(3);
  });
});
```

## Test Fixtures

```typescript
// fixtures/users.ts
export const createTestUser = (overrides = {}) => ({
  id: 'test-user-id',
  email: 'test@example.com',
  name: 'Test User',
  createdAt: new Date('2024-01-01'),
  ...overrides,
});

export const adminUser = createTestUser({
  id: 'admin-user-id',
  email: 'admin@example.com',
  role: 'admin',
});

export const invalidUser = {
  email: 'invalid-email',
  name: '',
};

// Usage in tests
import { createTestUser, adminUser } from '../fixtures/users';

it('should handle admin user', async () => {
  repository.findById.mockResolvedValue(adminUser);

  const result = await service.getUser('admin-user-id');

  expect(result.role).toBe('admin');
});
```

## Clearing Mocks

```typescript
beforeEach(() => {
  // Clear call history, keep implementation
  jest.clearAllMocks();
});

afterEach(() => {
  // Reset to original implementation
  jest.resetAllMocks();

  // Or restore all spies
  jest.restoreAllMocks();
});
```

## Best Practices

1. **Clear mocks in beforeEach** - Prevent test pollution
2. **Type your mocks** - Use `jest.Mocked<T>` for type safety
3. **Mock at boundaries** - Mock external services, not internal code
4. **Minimal mocking** - Only mock what's necessary
5. **Verify mock calls** - Assert mocks were called correctly
6. **Use fixtures** - Centralize test data
7. **Restore after tests** - Clean up spies and timers