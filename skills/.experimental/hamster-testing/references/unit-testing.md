---
title: Unit Testing
tags: testing, jest, unit-tests
---

# Unit Testing with Jest

## File Structure

- Place test files next to source: `service.ts` → `service.test.ts`
- Use `.test.ts` or `.spec.ts` extension
- Mirror source structure in test organization

## Basic Test Structure

```typescript
import { ServiceName } from './service-name';

describe('ServiceName', () => {
  let service: ServiceName;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new ServiceName();
  });

  afterEach(() => {
    // Cleanup if needed
  });

  describe('methodName', () => {
    it('should return expected result for valid input', () => {
      // Arrange
      const input = { value: 'test' };

      // Act
      const result = service.methodName(input);

      // Assert
      expect(result).toBe('expected');
    });

    it('should throw error for invalid input', () => {
      expect(() => service.methodName(null))
        .toThrow('Input is required');
    });
  });
});
```

## NestJS Service Testing

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';

describe('UsersService', () => {
  let service: UsersService;
  let repository: jest.Mocked<UsersRepository>;

  beforeEach(async () => {
    const mockRepository = {
      findById: jest.fn(),
      save: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: UsersRepository, useValue: mockRepository },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get(UsersRepository);
  });

  describe('findOne', () => {
    it('should return user when found', async () => {
      const mockUser = { id: '1', name: 'Test' };
      repository.findById.mockResolvedValue(mockUser);

      const result = await service.findOne('1');

      expect(result).toEqual(mockUser);
      expect(repository.findById).toHaveBeenCalledWith('1');
    });

    it('should throw NotFoundException when not found', async () => {
      repository.findById.mockResolvedValue(null);

      await expect(service.findOne('1'))
        .rejects.toThrow(NotFoundException);
    });
  });
});
```

## Async Testing

```typescript
describe('AsyncService', () => {
  it('should resolve with data', async () => {
    const result = await service.fetchData();
    expect(result).toEqual({ data: 'value' });
  });

  it('should reject with error', async () => {
    await expect(service.failingMethod())
      .rejects.toThrow('Expected error');
  });

  it('should handle promises correctly', async () => {
    const promise = service.asyncOperation();

    // Test intermediate state
    expect(service.isLoading).toBe(true);

    const result = await promise;

    expect(result).toBeDefined();
    expect(service.isLoading).toBe(false);
  });
});
```

## Testing Error Scenarios

```typescript
describe('Error Handling', () => {
  it('should throw for null input', () => {
    expect(() => service.process(null))
      .toThrow('Input cannot be null');
  });

  it('should throw specific error type', () => {
    expect(() => service.validate(invalidData))
      .toThrow(ValidationError);
  });

  it('should throw with specific message', async () => {
    await expect(service.create(duplicate))
      .rejects.toThrow('Email already exists');
  });

  it('should handle and transform errors', async () => {
    repository.save.mockRejectedValue(new DatabaseError());

    await expect(service.create(data))
      .rejects.toThrow(ServiceError);
  });
});
```

## Test Coverage

```typescript
// Cover all code paths
describe('validateInput', () => {
  it('should return true for valid input', () => {
    expect(validateInput('valid')).toBe(true);
  });

  it('should return false for empty string', () => {
    expect(validateInput('')).toBe(false);
  });

  it('should return false for null', () => {
    expect(validateInput(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(validateInput(undefined)).toBe(false);
  });

  it('should throw for unexpected input types', () => {
    expect(() => validateInput(123 as any))
      .toThrow('Invalid input type');
  });
});
```

## Best Practices

1. **Descriptive Names** - Test names should explain expected behavior
2. **AAA Pattern** - Arrange, Act, Assert structure
3. **One Assertion Focus** - Each test should verify one behavior
4. **Independent Tests** - Tests should not depend on each other
5. **Clear Setup** - Use `beforeEach` for common setup
6. **Mock External Deps** - Never hit real external services
7. **Test Edge Cases** - Include boundary conditions and error cases

## Commands

```bash
# Run all unit tests
pnpm --filter hamster-ai test

# Watch mode
pnpm --filter hamster-ai test:watch

# Specific file
pnpm --filter hamster-ai test -- users.service.test.ts

# Specific test name
pnpm --filter hamster-ai test -- -t "should create user"

# Coverage report
pnpm --filter hamster-ai test:cov
```