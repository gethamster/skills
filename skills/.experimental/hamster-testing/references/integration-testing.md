---
title: Integration Testing
tags: testing, integration, supertest
---

# Integration Testing

## Overview

Integration tests verify component interactions with real dependencies (database, external services).

## NestJS E2E/Integration Pattern

```typescript
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('UsersController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    // Clean up test data before each test
    await cleanupTestData();
  });

  describe('POST /users', () => {
    it('should create a user', async () => {
      const userData = {
        email: 'test@example.com',
        name: 'Test User',
      };

      const response = await request(app.getHttpServer())
        .post('/users')
        .send(userData)
        .expect(201);

      expect(response.body).toMatchObject({
        id: expect.any(String),
        email: userData.email,
        name: userData.name,
      });
    });

    it('should return 400 for invalid email', async () => {
      const response = await request(app.getHttpServer())
        .post('/users')
        .send({ email: 'invalid', name: 'Test' })
        .expect(400);

      expect(response.body.message).toContain('email');
    });

    it('should return 409 for duplicate email', async () => {
      const userData = { email: 'duplicate@example.com', name: 'User' };

      // Create first user
      await request(app.getHttpServer())
        .post('/users')
        .send(userData)
        .expect(201);

      // Try to create duplicate
      await request(app.getHttpServer())
        .post('/users')
        .send(userData)
        .expect(409);
    });
  });

  describe('GET /users/:id', () => {
    it('should return user by id', async () => {
      // Create user first
      const createResponse = await request(app.getHttpServer())
        .post('/users')
        .send({ email: 'get@example.com', name: 'Get User' });

      const userId = createResponse.body.id;

      // Get user
      const response = await request(app.getHttpServer())
        .get(`/users/${userId}`)
        .expect(200);

      expect(response.body.id).toBe(userId);
    });

    it('should return 404 for non-existent user', async () => {
      await request(app.getHttpServer())
        .get('/users/non-existent-id')
        .expect(404);
    });
  });
});
```

## Authenticated Requests

```typescript
describe('Protected Routes', () => {
  let authToken: string;

  beforeAll(async () => {
    // Get auth token
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password123',
      });

    authToken = response.body.token;
  });

  it('should access protected route with token', async () => {
    await request(app.getHttpServer())
      .get('/protected/resource')
      .set('Authorization', `Bearer ${authToken}`)
      .expect(200);
  });

  it('should return 401 without token', async () => {
    await request(app.getHttpServer())
      .get('/protected/resource')
      .expect(401);
  });
});
```

## Database Integration

```typescript
import { PrismaClient } from '@prisma/client';

describe('Database Integration', () => {
  let prisma: PrismaClient;

  beforeAll(async () => {
    prisma = new PrismaClient();
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    // Clean tables in correct order (respect foreign keys)
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.user.deleteMany();
  });

  it('should create user in database', async () => {
    const response = await request(app.getHttpServer())
      .post('/users')
      .send({ email: 'db@test.com', name: 'DB User' })
      .expect(201);

    // Verify in database
    const user = await prisma.user.findUnique({
      where: { email: 'db@test.com' },
    });

    expect(user).toBeTruthy();
    expect(user?.id).toBe(response.body.id);
  });
});
```

## Complete Workflow Testing

```typescript
describe('Order Workflow (e2e)', () => {
  it('should complete full order workflow', async () => {
    // Step 1: Create user
    const userResponse = await request(app.getHttpServer())
      .post('/users')
      .send({ email: 'order@test.com', name: 'Order User' })
      .expect(201);

    const userId = userResponse.body.id;

    // Step 2: Add item to cart
    await request(app.getHttpServer())
      .post('/cart/items')
      .set('Authorization', `Bearer ${getToken(userId)}`)
      .send({ productId: 'product-1', quantity: 2 })
      .expect(201);

    // Step 3: Create order from cart
    const orderResponse = await request(app.getHttpServer())
      .post('/orders')
      .set('Authorization', `Bearer ${getToken(userId)}`)
      .expect(201);

    expect(orderResponse.body.status).toBe('pending');

    // Step 4: Verify cart is empty
    const cartResponse = await request(app.getHttpServer())
      .get('/cart')
      .set('Authorization', `Bearer ${getToken(userId)}`)
      .expect(200);

    expect(cartResponse.body.items).toHaveLength(0);
  }, 30000); // Extended timeout for workflow tests
});
```

## Test Setup File

```typescript
// tests/setup/integration.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.$connect();
});

afterAll(async () => {
  await prisma.$disconnect();
});

// Export for use in tests
export { prisma };

// Utility function for cleanup
export async function cleanupTestData() {
  const tables = ['order_items', 'orders', 'users'];

  for (const table of tables) {
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${table}" CASCADE`);
  }
}
```

## Best Practices

1. **Real Database** - Use a test database, not mocks
2. **Clean State** - Reset data between tests
3. **Full Requests** - Test through HTTP layer
4. **Verify Side Effects** - Check database state after operations
5. **Test Workflows** - Test complete user journeys
6. **Extended Timeouts** - Use longer timeouts for integration tests
7. **Respect Foreign Keys** - Clean up in correct order

## Commands

```bash
# Run integration tests
pnpm --filter hamster-ai test:integration

# With open handles detection (debug hanging tests)
pnpm --filter hamster-ai test:integration -- --detectOpenHandles

# Extended timeout
pnpm --filter hamster-ai test:integration -- --testTimeout=30000
```