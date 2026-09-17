---
title: Server Actions
tags: server-actions, mutations, next.js
---

# Server Actions

## Core Pattern

```tsx
'use server';

import { enhanceAction } from '@kit/next/actions';
import { CreateNoteSchema } from '../schema/create-note.schema';

export const createNoteAction = enhanceAction(
  async (data, user) => {
    // 1. "data" is validated against schema
    // 2. "user" is the authenticated user
    const client = getSupabaseServerClient();

    const { data: note, error } = await client
      .from('notes')
      .insert({ ...data, user_id: user.id })
      .select()
      .single();

    if (error) throw error;
    return { success: true, note };
  },
  {
    auth: true,           // Require authentication
    schema: CreateNoteSchema,  // Validate input
  }
);
```

## Required Elements

1. **`'use server'` directive** - Always at top of file
2. **`enhanceAction` wrapper** - Always use for security
3. **Zod schema validation** - Always validate input
4. **Separate schema file** - For reuse with react-hook-form

## File Naming

- **Action file**: `_lib/server/server-actions.ts`
- **Schema file**: `_lib/schema/[action-name].schema.ts`
- **Action naming**: Suffix with `Action` (e.g., `createNoteAction`)

## Schema Definition

```tsx
// _lib/schema/create-note.schema.ts
import { z } from 'zod';

export const CreateNoteSchema = z.object({
  title: z.string().min(1, 'Title required').max(255),
  content: z.string().optional(),
  accountId: z.string().uuid(),
});

export type CreateNoteInput = z.infer<typeof CreateNoteSchema>;
```

## Calling from Client Components

```tsx
'use client';

import { useTransition } from 'react';
import { toast } from '@kit/ui/sonner';
import { createNoteAction } from '../_lib/server/server-actions';

function CreateNoteButton() {
  const [pending, startTransition] = useTransition();

  const handleCreate = () => {
    startTransition(async () => {
      await toast.promise(createNoteAction(data), {
        loading: 'Creating...',
        success: 'Note created!',
        error: 'Failed to create note'
      });
    });
  };

  return (
    <button onClick={handleCreate} disabled={pending}>
      Create Note
    </button>
  );
}
```

## Options Reference

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `auth` | `boolean` | `true` | Require authentication |
| `schema` | `ZodSchema` | - | Input validation schema |

## Error Handling

```tsx
export const myAction = enhanceAction(
  async (data, user) => {
    try {
      // operation
      return { success: true };
    } catch (error) {
      // Log internally
      const logger = await getLogger();
      logger.error({ error, userId: user.id }, 'Action failed');

      // Return generic message to client
      throw new Error('Unable to complete operation');
    }
  },
  { auth: true, schema: MySchema }
);
```

## Common Patterns

### With Supabase Query

```tsx
export const updateItemAction = enhanceAction(
  async (data, user) => {
    const client = getSupabaseServerClient();

    const { error } = await client
      .from('items')
      .update({ title: data.title })
      .eq('id', data.id)
      .eq('account_id', data.accountId); // RLS handles auth

    if (error) throw error;
    return { success: true };
  },
  { auth: true, schema: UpdateItemSchema }
);
```

### Unauthenticated Action (Rare)

```tsx
export const publicAction = enhanceAction(
  async (data) => {
    // No user parameter - auth is false
    return { success: true };
  },
  { auth: false, schema: PublicSchema }
);
```

## Security Rules

1. **Never skip `enhanceAction`** - Provides validation and auth
2. **Never skip schema validation** - Always validate input
3. **Never trust client data** - Always validate on server
4. **Use RLS for authorization** - Database enforces permissions
5. **Log errors internally** - Don't expose details to client