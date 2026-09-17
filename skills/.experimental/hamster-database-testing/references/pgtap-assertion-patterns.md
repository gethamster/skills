# pgTAP Assertion Patterns

## Test Planning

```sql
select plan(N);     -- Declare exactly N assertions
select no_plan();   -- Unlimited assertions (preferred for exploratory tests)
select * from finish();  -- Must be last assertion call
```

## Equality Assertions

### is / isnt

```sql
select is(actual, expected, description);
select isnt(actual, expected, description);
```

```sql
select is(
    (select count(*) from public.threads where account_id = '...'),
    3::bigint,
    'Should have 3 threads'
);
```

### row_eq

Compare a query result to a single expected row:

```sql
select row_eq(
    $$ SELECT name, status FROM public.threads WHERE id = '...' $$,
    row('My Thread'::varchar, 'active'::public.thread_status),
    'Thread should have expected name and status'
);
```

### results_eq

Compare full result sets:

```sql
select results_eq(
    $$ SELECT id FROM public.threads ORDER BY id $$,
    $$ VALUES ('id-1'::uuid), ('id-2'::uuid) $$,
    'Should return exactly these threads'
);
```

## Emptiness Assertions

### is_empty / isnt_empty

```sql
-- RLS denies access
select is_empty(
    $$ SELECT * FROM public.threads WHERE account_id = '...' $$,
    'Outsider should not see any threads'
);

-- RLS allows access
select isnt_empty(
    $$ SELECT * FROM public.threads WHERE account_id = '...' $$,
    'Team member should see threads'
);
```

## Success/Failure Assertions

### lives_ok

Assert that a query executes without error:

```sql
select lives_ok(
    $$ INSERT INTO public.thread_items (thread_id, content, item_type, created_by)
       VALUES ('...', 'hello', 'message', auth.uid()) $$,
    'Participant should be able to insert thread items'
);
```

### throws_ok

Assert that a query raises a specific error:

```sql
-- Match by error code (RLS violation = 42501)
select throws_ok(
    $$ INSERT INTO public.threads (title, account_id, created_by)
       VALUES ('hack', '...', auth.uid()) $$,
    '42501',
    'new row violates row-level security policy',
    'Non-member should be blocked by RLS INSERT policy'
);

-- Match by error message only (for custom RAISE EXCEPTION)
select throws_ok(
    $$ SELECT public.add_thread_participant('...', auth.uid()) $$,
    'Permission denied: cannot add participants to this thread',
    'Unauthorized user gets custom exception'
);
```

### RLS Error Codes

| Code | Meaning |
| --- | --- |
| `42501` | RLS policy violation (INSERT/SELECT with restrictive policy) |
| `P0001` | Custom `RAISE EXCEPTION` from function |
| `23503` | Foreign key violation |
| `23505` | Unique constraint violation |

## Boolean Assertions

### ok

```sql
select ok(
    public.is_thread_participant('thread-id'),
    'User should be a participant'
);

select ok(
    NOT public.is_thread_participant('thread-id'),
    'User should NOT be a participant'
);
```

## Schema Assertions

### has_table / has_column / has_function

```sql
select has_table('public', 'threads', 'threads table should exist');
select has_column('public', 'threads', 'status', 'threads should have status column');
select has_function('public', 'create_thread_item', 'create_thread_item function should exist');
```

### policies_are

```sql
select policies_are(
    'public', 'threads',
    ARRAY[
        'Threads can be viewed by participants and account members',
        'Threads can be created by account members',
        'Threads can be updated by owners admins or participants',
        'Threads can be deleted by owners'
    ]
);
```

## Testing Pattern: RPC Under Different User Contexts

```sql
-- 1. Test authorized user succeeds
select makerkit.authenticate_as('owner');
select lives_ok(
    $$ SELECT public.create_thread_item(
        'thread-id', 'message', 'hello', 'text', 'public', null, '{}'
    ) $$,
    'Thread participant can create items via RPC'
);

-- 2. Test unauthorized user fails
select makerkit.authenticate_as('outsider');
select throws_ok(
    $$ SELECT public.create_thread_item(
        'thread-id', 'message', 'hello', 'text', 'public', null, '{}'
    ) $$,
    'Access denied: not a thread participant',
    'Non-participant cannot create items via RPC'
);

-- 3. Compare direct insert vs RPC (debugging RLS issues)
select makerkit.authenticate_as('member');

-- Direct insert (tests INSERT RLS policy only)
select lives_ok(
    $$ INSERT INTO public.thread_items (thread_id, content, item_type, created_by)
       VALUES ('thread-id', 'direct', 'message', auth.uid()) $$,
    'Direct insert works for participant'
);

-- RPC call (tests function logic + INSERT RLS policy)
select lives_ok(
    $$ SELECT public.create_thread_item(
        'thread-id', 'message', 'via rpc', 'text', 'public', null, '{}'
    ) $$,
    'RPC insert works for participant'
);
```