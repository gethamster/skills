---
title: Data Fetching
tags: data-fetching, supabase, react-query
---

# Data Fetching Patterns

## Decision Framework

| Context | Pattern | RLS |
| --- | --- | --- |
| Server Component | Direct Supabase query | Automatic |
| Client Component | React Query + `useSupabase` | Automatic |
| Admin bypass (rare) | Admin client + manual auth | Manual |

## Server Components (Preferred)

```tsx
import { getSupabaseServerClient } from '@kit/supabase/server-client';

async function NotesPage() {
  const client = getSupabaseServerClient();
  const { data, error } = await client.from('notes').select('*');

  if (error) return <ErrorMessage error={error} />;
  return <NotesList notes={data} />;
}
```

**Key insight**: Server Components automatically inherit RLS protection.

## Client Components

```tsx
'use client';

import { useSupabase } from '@kit/supabase/hooks/use-supabase';
import { useQuery } from '@tanstack/react-query';

function InteractiveNotes() {
  const supabase = useSupabase();

  const { data, isLoading, error } = useQuery({
    queryKey: ['notes'],
    queryFn: async () => {
      const { data, error } = await supabase.from('notes').select('*');
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  return <NotesList notes={data} />;
}
```

## Parallel Data Fetching (Critical)

```tsx
// SLOW - Sequential (avoid)
async function SlowDashboard() {
  const userData = await loadUserData();
  const notifications = await loadNotifications();
  const metrics = await loadMetrics();
  // Total time: sum of all requests
}

// FAST - Parallel (preferred)
async function FastDashboard() {
  const [userData, notifications, metrics] = await Promise.all([
    loadUserData(),
    loadNotifications(),
    loadMetrics(),
  ]);
  // Total time: longest single request
}
```

**Performance impact**: Parallel fetching can reduce load time by 60-80%.

## Supabase Clients

| Client | Import | Use Case |
| --- | --- | --- |
| Server | `@kit/supabase/server-client` | Server Components, actions |
| Client | `@kit/supabase/hooks/use-supabase` | Client Components |
| Admin | `@kit/supabase/server-admin-client` | Bypass RLS (rare!) |

## Admin Client (Dangerous)

Only use when bypassing RLS is absolutely necessary:

```tsx
import { getSupabaseServerAdminClient } from '@kit/supabase/server-admin-client';

// MUST validate manually!
const currentUser = await getCurrentUser();
if (!(await isSuperAdmin(currentUser))) {
  throw new Error('Unauthorized');
}

const adminClient = getSupabaseServerAdminClient();
// Now safe to use...
```

## Error Handling

```tsx
import { getLogger } from '@kit/shared/logger';

async function loadData() {
  const logger = await getLogger();

  try {
    const client = getSupabaseServerClient();
    const { data, error } = await client.from('items').select('*');

    if (error) {
      logger.error({ error }, 'Failed to load items');
      throw error;
    }

    return data;
  } catch (error) {
    logger.error({ error }, 'Unexpected error loading items');
    throw error;
  }
}
```

## React Query Patterns

### Custom Data Hook

```tsx
// hooks/use-notes.ts
export function useNotes(accountId: string) {
  const supabase = useSupabase();

  return useQuery({
    queryKey: ['notes', accountId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('account_id', accountId);
      if (error) throw error;
      return data;
    },
  });
}
```

### With Mutation

```tsx
function useCreateNote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNoteAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });
}
```

## Data Provider Pattern

```tsx
// Fetch data
function NotesDataProvider({ children }) {
  const { data, isLoading, error } = useNotes();

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;

  return <NotesPresenter notes={data}>{children}</NotesPresenter>;
}

// Display data
function NotesPresenter({ notes }) {
  return <ul>{notes.map(note => <NoteItem key={note.id} note={note} />)}</ul>;
}
```

## Best Practices

1. **Prefer Server Components** for initial data loading
2. **Use React Query** for client-side data with caching
3. **Always handle errors** - don't swallow them
4. **Use parallel fetching** with `Promise.all()`
5. **RLS handles authorization** - trust it in most cases
6. **Log errors** with `@kit/shared/logger`