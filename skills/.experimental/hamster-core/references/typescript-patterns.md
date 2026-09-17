---
title: TypeScript Patterns
tags: typescript, types, coding-standards
---

# TypeScript Patterns

## Core Principles

1. **Strict Mode Always** - No `any` without explicit justification
2. **Implicit Inference** - Only annotate when inference fails
3. **Single Responsibility** - One reason to change per module
4. **Composition over Inheritance** - Favor composition
5. **Short Functions** - Extract when > 50 lines

## Type Usage

**Incorrect:**

```typescript
// Using any
function processData(data: any) {
  return data.value;
}

// Over-annotating
const name: string = "test";
const items: string[] = ["a", "b"];
```

**Correct:**

```typescript
// Use unknown if truly unknown
function processData(data: unknown) {
  if (isValidData(data)) {
    return data.value;
  }
}

// Let inference work
const name = "test";
const items = ["a", "b"];
```

## Service Pattern

Export factory functions, not classes:

**Incorrect:**

```typescript
export class UserService {
  getUser(id: string) { /* ... */ }
}
```

**Correct:**

```typescript
class UserService {
  getUser(id: string) { /* ... */ }
}

export function createUserService() {
  return new UserService();
}
```

## Enums vs Union Types

Prefer union types for simple cases:

**Incorrect:**

```typescript
enum Status {
  Active = 'active',
  Inactive = 'inactive',
}
```

**Correct:**

```typescript
type Status = 'active' | 'inactive';
```

Use enums only when you need:

- Reverse mapping
- Iteration over values
- Numeric auto-increment

## Error Handling

```typescript
try {
  await riskyOperation();
} catch (error) {
  if (error instanceof SpecificError) {
    // Handle specific case
  }
  throw error; // Re-throw unknown errors
}
```

## Naming Conventions

| Element | Convention | Example |
| --- | --- | --- |
| Variables | camelCase | `userName` |
| Functions | camelCase | `getUserById` |
| Classes | PascalCase | `UserService` |
| Interfaces | PascalCase | `UserProfile` |
| Types | PascalCase | `UserStatus` |
| Constants | SCREAMING_SNAKE | `MAX_RETRIES` |
| Files | kebab-case | `user-service.ts` |

## Database Types

Always use generated types from Supabase:

```typescript
import type { Database } from '~/lib/database.types';

type User = Database['public']['Tables']['users']['Row'];
type UserInsert = Database['public']['Tables']['users']['Insert'];
```

## Zod Schemas

Colocate schemas with their usage:

```typescript
// _lib/schema/create-note.schema.ts
import { z } from 'zod';

export const CreateNoteSchema = z.object({
  title: z.string().min(1).max(255),
  content: z.string().optional(),
  accountId: z.string().uuid(),
});

export type CreateNoteInput = z.infer<typeof CreateNoteSchema>;
```