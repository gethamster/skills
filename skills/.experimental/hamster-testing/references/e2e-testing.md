---
title: E2E Testing with Playwright
tags: testing, e2e, playwright
---

# E2E Testing with Playwright

## Directory Structure

```
apps/e2e/tests/
├── auth.setup.ts             # Global auth setup
├── authentication/           # Auth tests
│   ├── sign-in.spec.ts
│   └── sign-up.spec.ts
├── briefs/                   # Feature tests
├── page-objects/             # Page Object classes
│   ├── auth.po.ts
│   └── briefs.po.ts
├── fixtures/                 # Test data
└── utils/                    # Shared utilities
```

## Page Object Pattern (Required)

**ALWAYS** use Page Objects for test organization:

```typescript
// page-objects/auth.po.ts
import { Page, expect } from '@playwright/test';

export class AuthPageObject {
  constructor(private readonly page: Page) {}

  // Navigation
  async goto() {
    await this.page.goto('/sign-in');
  }

  // Actions
  async signIn(params: { email: string; password: string }) {
    await this.page.fill('[data-test="email-input"]', params.email);
    await this.page.fill('[data-test="password-input"]', params.password);
    await this.page.click('[data-test="sign-in-button"]');
  }

  async signOut() {
    await this.page.click('[data-test="account-selector-trigger"]');
    await this.page.click('[data-test="account-dropdown-sign-out"]');
  }

  // Assertions
  async expectSignedIn() {
    await expect(this.page).toHaveURL(/\/home/);
    await expect(this.page.locator('[data-test="user-avatar"]')).toBeVisible();
  }

  async expectSignedOut() {
    await expect(this.page).toHaveURL('/sign-in');
  }

  async expectError(message: string) {
    await expect(this.page.locator('[data-test="error-message"]'))
      .toContainText(message);
  }
}
```

## Using Page Objects in Tests

```typescript
// tests/authentication/sign-in.spec.ts
import { test, expect } from '@playwright/test';
import { AuthPageObject } from '../page-objects/auth.po';

test.describe('Sign In', () => {
  let auth: AuthPageObject;

  test.beforeEach(async ({ page }) => {
    auth = new AuthPageObject(page);
    await auth.goto();
  });

  test('user can sign in with valid credentials', async () => {
    await auth.signIn({
      email: 'test@example.com',
      password: 'testpassword',
    });
    await auth.expectSignedIn();
  });

  test('shows error with invalid credentials', async () => {
    await auth.signIn({
      email: 'wrong@example.com',
      password: 'wrongpassword',
    });
    await auth.expectError('Invalid credentials');
  });
});
```

## Reliable Async Operations with toPass()

**ALWAYS** use `toPass()` for flaky operations:

```typescript
// Network requests
await expect(async () => {
  const response = await this.page.waitForResponse((resp) =>
    resp.url().includes('/api/data'),
  );
  expect(response.status()).toBe(200);
}).toPass();

// Email/OTP verification
await expect(async () => {
  const otpCode = await this.getOtpCodeFromEmail(email);
  expect(otpCode).not.toBeNull();
  await this.enterOtpCode(otpCode);
}).toPass();

// Custom retry intervals for slow operations
await expect(async () => {
  await auth.submitMFAVerification(mfaKey);
}).toPass({
  intervals: [500, 2500, 5000, 7500, 10_000],
});
```

## Wait Strategies

```typescript
// Wait for element to be hidden
await page.waitForSelector('[data-test="loading"]', { state: 'hidden' });

// Wait for navigation
await Promise.all([
  page.waitForNavigation(),
  page.click('[data-test="submit-button"]'),
]);

// Wait for network idle
await page.waitForLoadState('networkidle');

// Wait for specific URL
await page.waitForURL('/dashboard');

// WRONG - Never use arbitrary timeouts
await page.waitForTimeout(5000); // Don't do this!
```

## Test Selectors

```typescript
// CORRECT - data-test attributes
await page.click('[data-test="submit-button"]');
await page.fill('[data-test="email-input"]', email);

// CORRECT - getByTestId
await page.getByTestId('submit-button').click();

// CORRECT - Accessible selectors
await page.getByRole('button', { name: 'Submit' }).click();
await page.getByLabel('Email').fill(email);

// WRONG - Fragile selectors
await page.click('.btn-primary');           // Class names change
await page.click('button:nth-child(2)');    // Order changes
await page.click('div > span > button');    // Structure changes
```

## Adding data-test to Components

```tsx
// In React components
<Button data-test="submit-button">Submit</Button>
<Input data-test="email-input" name="email" />
<div data-test="user-avatar">{/* content */}</div>
```

## Authentication Setup

```typescript
// auth.setup.ts
import { test as setup } from '@playwright/test';

setup('authenticate', async ({ page }) => {
  await page.goto('/sign-in');
  await page.fill('[data-test="email-input"]', process.env.TEST_USER_EMAIL!);
  await page.fill('[data-test="password-input"]', process.env.TEST_USER_PASSWORD!);
  await page.click('[data-test="sign-in-button"]');
  await page.waitForURL('/home');

  // Save signed-in state
  await page.context().storageState({ path: '.auth/user.json' });
});
```

## Test Data

```typescript
// fixtures/users.ts
export const testUsers = {
  standard: {
    email: 'standard@test.com',
    password: 'testpassword123',
    name: 'Standard User',
  },
  admin: {
    email: 'admin@test.com',
    password: 'adminpassword123',
    name: 'Admin User',
  },
};

// utils/helpers.ts
export function createRandomEmail(): string {
  const value = Math.random() * 10000000000000;
  return `${value.toFixed(0)}@tryhamster.com`;
}
```

## Complete Workflow Test

```typescript
test.describe('Brief Creation Workflow', () => {
  let briefsPage: BriefsPageObject;

  test.beforeEach(async ({ page }) => {
    briefsPage = new BriefsPageObject(page);
    await briefsPage.goto();
  });

  test('user can create, edit, and delete brief', async () => {
    // Create
    const briefId = await briefsPage.createBrief({
      title: 'Test Brief',
      description: 'Test description',
    });
    await briefsPage.expectBriefVisible(briefId);

    // Edit
    await briefsPage.editBrief(briefId, {
      title: 'Updated Brief',
    });
    await briefsPage.expectBriefTitle(briefId, 'Updated Brief');

    // Delete
    await briefsPage.deleteBrief(briefId);
    await briefsPage.expectBriefNotVisible(briefId);
  });
});
```

## Commands

```bash
# Run all E2E tests
pnpm --filter e2e test

# Interactive UI mode
pnpm --filter e2e test:ui

# Headed browser
pnpm --filter e2e test:headed

# Debug mode
pnpm --filter e2e test:debug
PWDEBUG=1 pnpm --filter e2e test

# Specific test file
pnpm --filter e2e test tests/auth.spec.ts

# Specific test by name
pnpm --filter e2e test -g "user can sign in"
```

## Best Practices

1. **Page Objects** - Encapsulate all selectors and actions
2. **data-test Attributes** - Stable, semantic selectors
3. **toPass() for Flaky Ops** - Network, email, external services
4. **No Arbitrary Waits** - Use proper wait strategies
5. **Independent Tests** - Each test should work in isolation
6. **Descriptive Names** - Describe the behavior being tested
7. **CI Integration** - Run on every PR with proper timeouts