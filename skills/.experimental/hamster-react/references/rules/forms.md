---
title: Forms
tags: forms, react-hook-form, zod, validation
---

# Form Implementation

## Required Stack

- **react-hook-form** - Form state management
- **Zod** - Validation schemas
- **@kit/ui/form** - Form components
- **Server Actions** - Backend handling
- **Sonner** - Toast notifications

## Complete Form Pattern

### 1. Define Schema

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

### 2. Create Server Action

```tsx
// _lib/server/server-actions.ts
'use server';

import { enhanceAction } from '@kit/next/actions';
import { CreateNoteSchema } from '../schema/create-note.schema';

export const createNoteAction = enhanceAction(
  async (data, user) => {
    const client = getSupabaseServerClient();
    const { data: note, error } = await client
      .from('notes')
      .insert({ ...data, user_id: user.id })
      .select()
      .single();

    if (error) throw error;
    return { success: true, note };
  },
  { auth: true, schema: CreateNoteSchema }
);
```

### 3. Build Form Component

```tsx
// _components/create-note-form.tsx
'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

import { Input } from '@kit/ui/input';
import { Textarea } from '@kit/ui/textarea';
import { Button } from '@kit/ui/button';
import { toast } from '@kit/ui/sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@kit/ui/form';

import { CreateNoteSchema } from '../_lib/schema/create-note.schema';
import { createNoteAction } from '../_lib/server/server-actions';

export function CreateNoteForm() {
  const [pending, startTransition] = useTransition();
  const { t } = useTranslation();

  const form = useForm({
    resolver: zodResolver(CreateNoteSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit = (data) => {
    startTransition(async () => {
      await toast.promise(createNoteAction(data), {
        loading: t('notes:creatingNote'),
        success: t('notes:createNoteSuccess'),
        error: t('notes:createNoteError'),
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Note title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="content"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Note content" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={pending}>
          {pending ? 'Creating...' : 'Create Note'}
        </Button>
      </form>
    </Form>
  );
}
```

## Key Rules

1. **Never add generics to `useForm`** - Use Zod resolver for type inference
2. **Always use `zodResolver`** - Connects Zod schema to form
3. **Share schema** - Same file for form and server action
4. **Use `useTransition`** - For pending state during submission
5. **Use `toast.promise`** - For loading/success/error feedback
6. **Always use `@kit/ui`** - For consistent form styling

## Form Components

| Component | Purpose |
| --- | --- |
| `Form` | Form provider wrapper |
| `FormField` | Field wrapper with control |
| `FormItem` | Field container |
| `FormLabel` | Field label |
| `FormControl` | Input wrapper |
| `FormMessage` | Error message display |
| `FormDescription` | Help text |

## Common Field Types

### Text Input

```tsx
<FormField
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input type="email" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

### Select

```tsx
<FormField
  name="status"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Status</FormLabel>
      <Select onValueChange={field.onChange} value={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="draft">Draft</SelectItem>
          <SelectItem value="active">Active</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )}
/>
```

### Checkbox

```tsx
<FormField
  name="agreed"
  render={({ field }) => (
    <FormItem className="flex items-center space-x-2">
      <FormControl>
        <Checkbox
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </FormControl>
      <FormLabel>I agree to the terms</FormLabel>
      <FormMessage />
    </FormItem>
  )}
/>
```

## Validation Patterns

### Basic Validation

```tsx
const Schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Min 8 characters'),
  name: z.string().min(1, 'Required'),
});
```

### Conditional Validation

```tsx
const Schema = z.object({
  type: z.enum(['personal', 'business']),
  companyName: z.string().optional(),
}).refine(
  (data) => data.type !== 'business' || data.companyName,
  { message: 'Company name required for business', path: ['companyName'] }
);
```

### Password Confirmation

```tsx
const Schema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string(),
}).refine(
  (data) => data.password === data.confirmPassword,
  { message: 'Passwords must match', path: ['confirmPassword'] }
);
```