---
title: React Patterns
tags: react, components, hooks, patterns
---

# React Component Patterns

## Core Principles

1. **Component-Driven** - Build as composition of isolated components
2. **One-Way Data Flow** - Follow React's unidirectional pattern
3. **Single Responsibility** - Each component has one purpose
4. **TypeScript First** - Type safety and better DX
5. **i18n By Default** - All user-facing text is translatable

## Component Structure

```tsx
// Always functional components with TypeScript
// Named exports, not default exports
// PascalCase naming

export function UserProfile({ user, onEdit }: UserProfileProps) {
  // Destructure props at start
  // Component implementation
}
```

## Props Pattern

```tsx
type ButtonProps = {
  variant: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

function Button({
  variant,
  size = 'md',  // Default values
  children,
  disabled = false,
  onClick
}: ButtonProps) {
  // Implementation
}
```

## Container/Presenter Pattern

```tsx
// Container - manages data
function UserProfileContainer() {
  const userData = useUserData();

  if (userData.isLoading) return <LoadingSpinner />;
  if (userData.error) return <ErrorMessage error={userData.error} />;

  return <UserProfilePresenter data={userData.data} />;
}

// Presenter - renders UI
function UserProfilePresenter({ data }: { data: UserData }) {
  return (
    <div>
      <h1>{data.name}</h1>
      {/* Rest of UI */}
    </div>
  );
}
```

## Server Components

**Use by default** - No `'use client'` needed.

```tsx
// Server Component (default)
async function NotesPage() {
  const client = getSupabaseServerClient();
  const { data } = await client.from('notes').select('*');

  return <NotesList notes={data} />;
}
```

**Server Component Rules:**

- No hooks (`useState`, `useEffect`, etc.)
- No browser APIs
- No event handlers
- Can fetch data directly with async/await
- Can render Client Components

## Client Components

**Use when needed** - Add `'use client'` at top.

```tsx
'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}
```

**Use Client Components for:**

- Interactivity (onClick, onChange)
- Browser APIs
- React hooks
- Real-time listeners

## Hooks Best Practices

```tsx
// Custom hooks for reusable logic
function useUserData(userId: string) {
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser(userId).then(user => {
      setData(user);
      setLoading(false);
    });
  }, [userId]); // Complete dependencies

  return { data, loading };
}
```

**Hook Rules:**

- Call only at top level
- Call only from React functions
- Name with `use` prefix
- Provide complete dependencies array

## Performance Optimization

```tsx
// Memoize expensive calculations
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b),
  [a, b]
);

// Memoize callbacks passed as props
const memoizedCallback = useCallback(
  () => doSomething(a, b),
  [a, b]
);

// Memoize components
const MemoizedComponent = React.memo(function Component(props: Props) {
  // Only re-renders when props change
});
```

## State Management

```tsx
// Keep state local when possible
function LocalStateComponent() {
  const [value, setValue] = useState('');
  // State stays here
}

// Lift state when multiple components need it
function Parent() {
  const [shared, setShared] = useState('');

  return (
    <>
      <ChildA value={shared} onChange={setShared} />
      <ChildB value={shared} />
    </>
  );
}

// Use Context sparingly for truly global state
```

## Error Boundaries

```tsx
'use client';

import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export function FeatureWithErrorHandling() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset application state
      }}
    >
      <FeatureComponent />
    </ErrorBoundary>
  );
}
```

## File Organization

```
_components/
├── user-profile.tsx      # kebab-case files
├── user-avatar.tsx       # Match component name
└── index.ts              # Barrel exports (avoid in hot paths)

// Component naming
function UserProfile() {}     // PascalCase
function useUserData() {}     // camelCase with 'use' prefix
const MAX_ITEMS = 10;         // SCREAMING_SNAKE for constants
```

## Internationalization

```tsx
import { Trans } from '@kit/ui/trans';

// All user-facing text via Trans
<Trans i18nKey="user:welcomeMessage" values={{ name: user.name }} />

// NEVER hardcode strings
<p>Welcome, {user.name}!</p>  // Wrong
```