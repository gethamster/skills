---
name: hamster-react
description: "Hamster-specific React and Next.js patterns. Use when creating pages, components, forms, server actions, or data fetching in apps/web. Complements the react-best-practices skill."
---

# Hamster React Patterns

## Overview

React and Next.js conventions specific to the Hamster Studio monorepo. Covers page creation, server actions, data fetching, forms, and UI components. For general React performance patterns, see the `react-best-practices` skill.

## When to Apply

- Creating new pages or layouts in apps/web
- Writing server actions or route handlers
- Building forms with validation
- Fetching data in server or client components
- Using @kit/ui components

## Quick Reference

| Task | Pattern | Reference |
| --- | --- | --- |
| Create page | `withI18n`, `generateMetadata`, `PageBody` | `references/rules/page-creation.md` |
| Server action | `enhanceAction` with schema, `'use server'` | `references/rules/server-actions.md` |
| Fetch data | Server: direct Supabase, Client: React Query | `references/rules/data-fetching.md` |
| Build form | react-hook-form + Zod + server action | `references/rules/forms.md` |
| UI components | Import from `@kit/ui/*` | `references/rules/ui-components.md` |

## Architecture Overview

```
app/home/
├── (user)/           # Personal account context
│   ├── _components/  # Route-specific components
│   ├── _lib/server/  # Loaders, actions
│   └── page.tsx
└── [account]/        # Team account context (slug, not UUID)
    ├── _components/
    ├── _lib/server/
    └── page.tsx
```

## Key Patterns

### Page Structure

```tsx
import { PageBody } from '@kit/ui/page';
import { Trans } from '@kit/ui/trans';
import { withI18n } from '~/lib/i18n/with-i18n';

export const generateMetadata = async () => {
  const i18n = await createI18nServerInstance();
  return { title: i18n.t('feature:pageTitle') };
};

function FeaturePage() {
  return (
    <>
      <FeatureHeader title={<Trans i18nKey="common:routes.feature" />} />
      <PageBody>{/* Content */}</PageBody>
    </>
  );
}

export default withI18n(FeaturePage);
```

### Server Action Pattern

```tsx
'use server';

import { enhanceAction } from '@kit/next/actions';
import { CreateItemSchema } from '../schema/create-item.schema';

export const createItemAction = enhanceAction(
  async (data, user) => {
    // data validated, user authenticated
    const client = getSupabaseServerClient();
    const { data: item } = await client.from('items').insert(data).select().single();
    return { success: true, item };
  },
  { auth: true, schema: CreateItemSchema }
);
```

### Data Fetching Decision

| Context | Use | Example |
| --- | --- | --- |
| Server Component | Direct Supabase | `await client.from('items').select()` |
| Client Component | React Query + `useSupabase` | `useQuery({ queryFn: ... })` |
| Admin bypass | `getSupabaseServerAdminClient` | Rare, requires manual auth |

### Form Pattern

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormControl, FormMessage } from '@kit/ui/form';
import { toast } from '@kit/ui/sonner';

function MyForm() {
  const form = useForm({ resolver: zodResolver(Schema) });

  const onSubmit = (data) => {
    startTransition(async () => {
      await toast.promise(myAction(data), {
        loading: t('creating'),
        success: t('created'),
        error: t('error')
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* FormFields */}
      </form>
    </Form>
  );
}
```

## useEffect Rules (CRITICAL)

**MUST** follow [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect). Before writing any `useEffect`, ask: _"Is this synchronizing with an external system?"_ If not, you probably don't need it.

### When useEffect is WRONG

#### 1. Derived state — compute during render instead

```tsx
// 🔴 WRONG: redundant state + unnecessary Effect
const [fullName, setFullName] = useState('');
useEffect(() => {
  setFullName(firstName + ' ' + lastName);
}, [firstName, lastName]);

// ✅ CORRECT: calculate during render
const fullName = firstName + ' ' + lastName;

// ✅ CORRECT: memoize if expensive
const filtered = useMemo(() => getFilteredTodos(todos, filter), [todos, filter]);
```

#### 2. State reset on prop change — use `key` or render-time adjustment

```tsx
// 🔴 WRONG: resetting state in an Effect
useEffect(() => {
  setComment('');
}, [userId]);

// ✅ BEST: use key to reset entire component
<Profile userId={userId} key={userId} />

// ✅ OK: render-time adjustment when only partial reset needed
const [prevItems, setPrevItems] = useState(items);
if (items !== prevItems) {
  setPrevItems(items);
  setSelection(null);
}

// ✅ BEST: derive instead of resetting
const selection = items.find(item => item.id === selectedId) ?? null;
```

#### 3. Event-specific logic — put it in the event handler

```tsx
// 🔴 WRONG: event logic in an Effect
useEffect(() => {
  if (product.isInCart) {
    showNotification(`Added ${product.name}!`);
  }
}, [product]);

// ✅ CORRECT: call from the event handler
function handleBuyClick() {
  addToCart(product);
  showNotification(`Added ${product.name}!`);
}
```

#### 4. Notifying parent about state changes — call in the event handler

```tsx
// 🔴 WRONG: notifying parent via Effect
useEffect(() => {
  onChange(isOn);
}, [isOn, onChange]);

// ✅ CORRECT: notify during the event that caused the change
function updateToggle(nextIsOn) {
  setIsOn(nextIsOn);
  onChange(nextIsOn);
}
```

#### 5. Passing data to parent — lift the fetch up instead

```tsx
// 🔴 WRONG: child fetches, passes to parent via Effect
function Child({ onFetched }) {
  const data = useSomeAPI();
  useEffect(() => {
    if (data) onFetched(data);
  }, [data, onFetched]);
}

// ✅ CORRECT: parent fetches, passes down
function Parent() {
  const data = useSomeAPI();
  return <Child data={data} />;
}
```

#### 6. Effect chains — compute in render, update in event handlers

```tsx
// 🔴 WRONG: chain of Effects triggering each other
useEffect(() => { if (card?.gold) setGoldCount(c => c + 1); }, [card]);
useEffect(() => { if (goldCount > 3) { setRound(r => r + 1); setGoldCount(0); } }, [goldCount]);
useEffect(() => { if (round > 5) setGameOver(true); }, [round]);

// ✅ CORRECT: derive what you can, update in event handler
const isGameOver = round > 5;
function handlePlaceCard(nextCard) {
  setCard(nextCard);
  if (nextCard.gold) {
    if (goldCount < 3) setGoldCount(goldCount + 1);
    else { setGoldCount(0); setRound(round + 1); }
  }
}
```

### When useEffect IS correct

| Pattern | Why it's correct |
| --- | --- |
| Subscriptions with cleanup | Synchronizing with external system (realtime channels, WebSocket, event listeners) |
| Data fetching with cleanup | Synchronizing with network (add `ignore` flag for race conditions) |
| DOM manipulation via refs | Synchronizing with browser DOM (focus, scroll, ResizeObserver) |
| Analytics on mount | Side effect because component was _displayed_ |
| Ref syncs for stale closures | Keeping refs current for callbacks used in subscriptions |
| External store mutations | Synchronizing React state with Zustand/external stores |

### Key principle

> **"If this logic is caused by a particular interaction, keep it in the event handler. If it's caused by the user _seeing_ the component on the screen, keep it in the Effect."**

### Lint enforcement

The codebase enforces these patterns via:

- `react-hooks/set-state-in-effect` — flags synchronous setState inside effects (use `useEffectEvent` wrapper for legitimate cases like hydration detection)
- `react-hooks/refs` — flags ref access during render (keep ref syncs in `useEffect`, not render body)
- Consider a community “you might not need an effect” lint plugin for broader detection of redundant effects

## Component Guidelines

### Server vs Client Components

| Use Server Components | Use Client Components |
| --- | --- |
| Data fetching | Interactivity (onClick, onChange) |
| Authenticated queries | Browser APIs |
| Static rendering | React hooks (useState, useEffect) |
| No hooks needed | Real-time listeners |

### Workspace Contexts

```tsx
// Personal account
import { useUserWorkspace } from '@kit/accounts/hooks/use-user-workspace';
const { user, account } = useUserWorkspace();

// Team account
import { useTeamAccountWorkspace } from '@kit/team-accounts/hooks/use-team-account-workspace';
const { account, user, accounts } = useTeamAccountWorkspace();
```

### JSX Patterns

```tsx
// Class merging
import { cn } from '@kit/ui/utils';
<div className={cn('base', { 'active': isActive }, className)} />

// Conditional rendering
import { If } from '@kit/ui/if';
<If condition={isLoading} fallback={<Content />}>
  <Spinner />
</If>

// Translations (no hardcoded strings)
import { Trans } from '@kit/ui/trans';
<Trans i18nKey="feature:message" values={{ name }} />
```

## File Organization

| File | Purpose |
| --- | --- |
| `page.tsx` | Route page component |
| `layout.tsx` | Shared layout |
| `loading.tsx` | Loading state |
| `error.tsx` | Error boundary |
| `_components/` | Route-specific components |
| `_lib/server/` | Loaders, actions, queries |
| `_lib/schema/` | Zod validation schemas |

## References

- `references/rules/page-creation.md` - Creating pages and layouts
- `references/rules/server-actions.md` - Server action patterns
- `references/rules/data-fetching.md` - Data fetching strategies
- `references/rules/forms.md` - Form implementation
- `references/rules/ui-components.md` - UI component usage
- `references/rules/react-patterns.md` - React component patterns
- `references/rules/translations.md` - i18n implementation
