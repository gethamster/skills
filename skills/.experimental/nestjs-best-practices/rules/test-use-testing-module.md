---
title: Use Testing Module with Vitest for Unit Tests
impact: HIGH
impactDescription: Enables proper isolated testing with mocked dependencies via NestJS DI
tags: testing, unit-tests, mocking, vitest
---

## Use Testing Module with Vitest for Unit Tests

Use `@nestjs/testing` with Vitest to create isolated test environments with mocked dependencies. Use `vi.fn()` for mocks, `MockedFunction` from `@kit/testing/types` for typed mock references, and `Test.createTestingModule()` with `provide`/`useValue` for dependency injection overrides.

### Why It Matters

Proper unit testing requires isolating the system under test from its dependencies. Using `Test.createTestingModule()` mirrors the real NestJS DI container while substituting mock implementations, ensuring tests verify business logic without hitting external services. Vitest is the test runner used across Hamster Studio.

**Incorrect (Jest APIs or manual instantiation):**

```typescript
// Anti-pattern 1: Jest mocking functions
describe('UsersService', () => {
  let repo: jest.Mocked<UserRepository>; // Wrong type

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UserRepository,
          useValue: {
            save: jest.fn(),     // Wrong: jest.fn()
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    repo = module.get(UserRepository);
  });

  afterEach(() => {
    jest.clearAllMocks(); // Wrong: jest.clearAllMocks()
  });

  it('should call service', () => {
    jest.spyOn(reflector, 'get').mockReturnValue(true); // Wrong: jest.spyOn()
  });
});

// Anti-pattern 2: Manual instantiation bypassing DI
const repo = new UserRepository(); // Real repo, hits database
const service = new UsersService(repo);
```

**Correct (Vitest with Test.createTestingModule):**

```typescript
import { Test, TestingModule } from '@nestjs/testing';

import type { MockedFunction } from '@kit/testing/types';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HamsterGlsbRouterService } from './modules/ai-agent/orchestration/services/hamster-glsb-router.service';

describe('AppController', () => {
  let appController: AppController;
  let app: TestingModule;
  let glsbRouterService: {
    checkHealth: MockedFunction<HamsterGlsbRouterService['checkHealth']>;
  };

  beforeEach(async () => {
    const mockGlsbRouterService = {
      checkHealth: vi.fn().mockResolvedValue({
        status: 'disabled',
        enabled: false,
        timestamp: new Date().toISOString(),
      }),
    };

    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: HamsterGlsbRouterService,
          useValue: mockGlsbRouterService,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    glsbRouterService = app.get(HamsterGlsbRouterService);
  });

  afterEach(async () => {
    await app?.close();
  });

  describe('getGlsbRouterHealth', () => {
    it('should return health status from service', async () => {
      const mockHealth = {
        status: 'healthy' as const,
        enabled: true,
        model_version: 'test-version',
        latency_ms: 50,
        timestamp: new Date().toISOString(),
      };

      glsbRouterService.checkHealth.mockResolvedValue(mockHealth);

      const result = await appController.getGlsbRouterHealth();

      expect(result).toEqual(mockHealth);
      expect(glsbRouterService.checkHealth).toHaveBeenCalledTimes(1);
    });

    it('should handle errors gracefully', async () => {
      glsbRouterService.checkHealth.mockRejectedValue(
        new Error('Health check failed'),
      );

      const result = await appController.getGlsbRouterHealth();

      expect(result).toEqual({
        status: 'error',
        enabled: false,
        error: 'Health check failed',
        timestamp: expect.any(String),
      });
    });
  });
});
```

### Key Guidelines

1. **Use `vi.fn()`** for all mock functions, never `jest.fn()`
2. **Type mocks with `MockedFunction<Service['method']>`** from `@kit/testing/types` for typed mock references
3. **Use `Mocked<T>`** from `@kit/testing/types` when mocking an entire service interface
4. **Build mock services as plain objects** with `vi.fn()` methods and inject via `provide`/`useValue`
5. **Always clean up** with `afterEach(async () => { await app?.close(); })` to avoid resource leaks
6. **Use `vi.mock()`** for module-level mocking of circular dependencies
7. **Use `vi.spyOn()`** instead of `jest.spyOn()` for spying on existing methods
8. **Never use `jest.clearAllMocks()`** -- Vitest handles cleanup per-test or use `vi.clearAllMocks()`

Reference: [NestJS Testing](https://docs.nestjs.com/fundamentals/testing)