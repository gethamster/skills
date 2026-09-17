---
title: TDD Workflow
tags: testing, tdd, workflow
---

# Test-Driven Development Workflow

## Core TDD Cycle

```
┌─────────────────────────────────────────────────────┐
│                  TDD Cycle                          │
│                                                     │
│   1. RED      →   Write failing test               │
│   2. GREEN    →   Implement minimum code to pass   │
│   3. REFACTOR →   Improve code, keep tests green   │
│                                                     │
│   Repeat for each requirement                       │
└─────────────────────────────────────────────────────┘
```

## Starting Development

```bash
# 1. Start with watch mode
pnpm --filter hamster-ai test:watch

# 2. Write failing test first
# 3. Implement minimum code to pass
# 4. Refactor while keeping tests green
# 5. Add edge cases and error scenarios
```

## Step-by-Step Example

### Step 1: Write Failing Test

```typescript
// users.service.test.ts
describe('UsersService', () => {
  describe('create', () => {
    it('should create user with valid data', async () => {
      const userData = { email: 'test@example.com', name: 'Test' };

      const result = await service.create(userData);

      expect(result).toMatchObject({
        id: expect.any(String),
        email: userData.email,
        name: userData.name,
      });
    });
  });
});
```

Run test → **RED** (fails because `create` method doesn't exist)

### Step 2: Implement Minimum Code

```typescript
// users.service.ts
@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async create(data: CreateUserDto): Promise<User> {
    return this.repository.save(data);
  }
}
```

Run test → **GREEN** (passes)

### Step 3: Refactor

```typescript
// Add validation, logging, etc. while keeping tests green
async create(data: CreateUserDto): Promise<User> {
  const existing = await this.repository.findByEmail(data.email);
  if (existing) {
    throw new ConflictException('Email already exists');
  }

  const user = await this.repository.save(data);
  this.logger.log(`Created user: ${user.id}`);
  return user;
}
```

### Step 4: Add Edge Cases

```typescript
describe('create', () => {
  it('should create user with valid data', async () => { /* ... */ });

  it('should throw ConflictException for duplicate email', async () => {
    repository.findByEmail.mockResolvedValue({ id: '1' });

    await expect(service.create({ email: 'duplicate@test.com' }))
      .rejects.toThrow(ConflictException);
  });

  it('should throw ValidationError for invalid email', async () => {
    await expect(service.create({ email: 'invalid' }))
      .rejects.toThrow(ValidationError);
  });
});
```

## TDD with Taskmaster

```bash
# When starting a new subtask
task-master set-status --id=4.1 --status=in-progress

# Begin TDD cycle
pnpm --filter hamster-ai test:watch

# Document progress
task-master update-subtask --id=4.1 --prompt="TDD Progress:
- Written 3 failing tests for core functionality
- Implemented basic feature, tests now passing
- Adding edge case tests for error handling"

# Complete subtask with test summary
task-master update-subtask --id=4.1 --prompt="Implementation complete:
- 12 unit tests with full coverage
- All edge cases covered
- Ready for integration testing"
```

## Pre-Commit Workflow

```bash
# Before committing
pnpm --filter hamster-ai test:cov    # Verify coverage
pnpm --filter hamster-ai test        # Final verification

# Commit with test context
git add .
git commit -m "feat(users): add user creation

- Implement UsersService.create() with validation
- Add duplicate email detection
- 8 unit tests with 95% coverage"
```

## Coverage-Driven Development

```bash
# Check coverage after implementing
pnpm --filter hamster-ai test:cov

# View detailed HTML report
open coverage/lcov-report/index.html

# Identify uncovered paths
# Add tests for uncovered branches
```

## Integration Testing Phase

```bash
# After unit tests pass, add integration tests
pnpm --filter hamster-ai test:integration

# Update templates with real endpoints
# Test database interactions
# Verify HTTP responses

task-master update-subtask --id=4.1 --prompt="Integration tests:
- Updated endpoint tests
- Database integration verified
- All HTTP status codes tested"
```

## Common TDD Patterns

### Testing Errors First

```typescript
// Start with error cases - they're simpler
describe('validate', () => {
  it('should throw for null input', () => {
    expect(() => validate(null)).toThrow('Input required');
  });

  it('should throw for empty string', () => {
    expect(() => validate('')).toThrow('Input required');
  });

  // Then add success cases
  it('should return true for valid input', () => {
    expect(validate('valid')).toBe(true);
  });
});
```

### Testing Async Operations

```typescript
describe('fetchData', () => {
  it('should return data on success', async () => {
    api.get.mockResolvedValue({ data: 'value' });

    const result = await service.fetchData();

    expect(result).toEqual({ data: 'value' });
  });

  it('should throw on network error', async () => {
    api.get.mockRejectedValue(new NetworkError());

    await expect(service.fetchData())
      .rejects.toThrow(ServiceError);
  });
});
```

### Testing State Changes

```typescript
describe('StatefulService', () => {
  it('should update state after operation', async () => {
    expect(service.isProcessing).toBe(false);

    const promise = service.process();
    expect(service.isProcessing).toBe(true);

    await promise;
    expect(service.isProcessing).toBe(false);
  });
});
```

## Benefits of TDD

1. **Design First** - Tests drive better API design
2. **Confidence** - Refactor fearlessly
3. **Documentation** - Tests explain expected behavior
4. **Fewer Bugs** - Catch issues early
5. **Focus** - Work on one thing at a time

## Anti-Patterns to Avoid

1. **Writing tests after code** - Loses design benefits
2. **Testing implementation** - Test behavior, not internals
3. **Skipping refactor step** - Code quality degrades
4. **Large test steps** - Keep cycles small and fast
5. **Ignoring failing tests** - Fix immediately or delete