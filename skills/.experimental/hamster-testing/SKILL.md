---
name: hamster-testing
description: "Testing patterns for unit tests (Jest), integration tests, E2E tests (Playwright). Use when writing app-level tests, setting up test infrastructure, or implementing TDD workflows. For database testing (RLS, constraints, triggers, schema), use hamster-database-testing instead."
---

# Hamster Testing Patterns

## Quick Reference

| Task | Pattern | Reference |
| --- | --- | --- |
| Write unit test (NestJS) | Jest with mocking | [unit-testing.md](references/unit-testing.md) |
| Write integration test | Supertest + real DB | [integration-testing.md](references/integration-testing.md) |
| Write E2E test | Playwright + Page Objects | [e2e-testing.md](references/e2e-testing.md) |
| Follow TDD workflow | Red → Green → Refactor | [tdd-workflow.md](references/tdd-workflow.md) |
| Mock dependencies | Jest mocking patterns | [mocking-patterns.md](references/mocking-patterns.md) |
| **Database testing** | **See** [**hamster-database-testing**](../hamster-database-testing/SKILL.md) | Vitest (RLS/constraints) + pgTAP (triggers/schema) |

## When to Apply

- Writing new tests for features
- Setting up test infrastructure
- Debugging failing tests
- Implementing TDD workflow
- Adding E2E tests for critical paths

> **Database testing?** Use the [hamster-database-testing](../hamster-database-testing/SKILL.md) skill instead — it covers both Vitest and pgTAP with a decision guide.

## Test Types Overview

| Type | Location | Purpose | Tools |
| --- | --- | --- | --- |
| Unit | `*.test.ts` next to source | Test isolated functions | Jest |
| Integration | `tests/integration/` | Test component interactions | Jest + Supertest |
| E2E | `apps/e2e/tests/` | Test user journeys | Playwright |

## Coverage Standards

| Scope | Lines | Branches | Functions |
| --- | --- | --- | --- |
| Global minimum | 80% | 70% | 80% |
| Critical code (utils) | 90% | 85% | 90% |
| New features | Must meet global | Must meet global | Must meet global |

## Commands

```bash
# Unit tests
pnpm test                          # All tests
pnpm --filter hamster-ai test             # API unit tests
pnpm --filter hamster-ai test:watch       # Watch mode

# E2E tests
pnpm --filter e2e test             # All E2E tests
pnpm --filter e2e test:ui          # Interactive UI mode
pnpm --filter e2e test:debug       # Debug mode

# Coverage
pnpm --filter hamster-ai test:cov         # Coverage report
```

## Key Patterns

### Unit Test Structure

```typescript
describe('ServiceName', () => {
  let service: ServiceName;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new ServiceName(mockDependency);
  });

  describe('methodName', () => {
    it('should handle normal case', () => {
      const result = service.methodName(validInput);
      expect(result).toBe(expected);
    });

    it('should throw for invalid input', () => {
      expect(() => service.methodName(invalidInput))
        .toThrow('Expected error');
    });
  });
});
```

### E2E Test with Page Object

```typescript
test.describe('Feature', () => {
  let pageObject: FeaturePageObject;

  test.beforeEach(async ({ page }) => {
    pageObject = new FeaturePageObject(page);
    await pageObject.goto();
  });

  test('user can complete action', async () => {
    await pageObject.performAction();
    await pageObject.expectSuccess();
  });
});
```

### Reliable Async Operations

```typescript
// Use toPass() for flaky operations (network, email, OTP)
await expect(async () => {
  const response = await page.waitForResponse(r => r.url().includes('/api'));
  expect(response.status()).toBe(200);
}).toPass();
```

## Critical Rules

1. **AAA Pattern** - Arrange, Act, Assert in every test
2. **Test Independence** - Each test must work in isolation
3. **No Arbitrary Waits** - Use proper wait strategies, never `waitForTimeout()`
4. **Page Objects for E2E** - Encapsulate selectors and actions
5. **data-test Selectors** - Use `data-test="..."` attributes for stability
6. **Mock External Deps** - Never hit real external services in unit tests
7. **Clean Up** - Use `afterEach`/`afterAll` for cleanup

## References

- [unit-testing.md](references/unit-testing.md) - Jest unit testing patterns
- [integration-testing.md](references/integration-testing.md) - Integration testing with real DB
- [e2e-testing.md](references/e2e-testing.md) - Playwright E2E patterns
- [tdd-workflow.md](references/tdd-workflow.md) - TDD development workflow
- [mocking-patterns.md](references/mocking-patterns.md) - Jest mocking patterns
- [hamster-database-testing](../hamster-database-testing/SKILL.md) - Database testing (Vitest + pgTAP)

## Key Files

| File | Purpose |
| --- | --- |
| `apps/ai/jest.config.ts` | API Jest configuration |
| `apps/e2e/playwright.config.ts` | Playwright configuration |
| `apps/e2e/tests/` | E2E test files |
| `apps/e2e/tests/page-objects/` | Page Object classes |
