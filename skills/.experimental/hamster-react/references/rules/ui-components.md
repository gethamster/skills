---
title: UI Components
tags: ui, shadcn, makerkit, components
---

# UI Component Usage

## Import Patterns

```tsx
// Shadcn UI components
import { Button } from '@kit/ui/button';
import { Card } from '@kit/ui/card';
import { Input } from '@kit/ui/input';
import { toast } from '@kit/ui/sonner';

// MakerKit components
import { If } from '@kit/ui/if';
import { Trans } from '@kit/ui/trans';
import { ProfileAvatar } from '@kit/ui/profile-avatar';
import { EmptyState } from '@kit/ui/empty-state';

// Marketing components
import { Hero, FeatureCard } from '@kit/ui/marketing';
```

## Styling Rules

```tsx
// CORRECT - Semantic tokens
<div className="bg-background text-foreground border-border">
<button className="bg-primary text-primary-foreground">

// WRONG - Hardcoded colors
<div className="bg-gray-100 text-gray-900 border-gray-300">
<button className="bg-blue-500 text-white">
```

### Prose Styling (Tailwind Typography)

**Always include `dark:prose-invert`** when using `prose` classes. Without it, the `@tailwindcss/typography` plugin applies the default gray color (`tw-prose-body`) which makes text difficult to read in dark mode.

```tsx
// CORRECT - Includes dark mode support
<div className="prose prose-sm dark:prose-invert max-w-none">

// WRONG - Missing dark:prose-invert (text will be hard to read in dark mode)
<div className="prose prose-sm max-w-none">
```

## Class Name Merging

```tsx
import { cn } from '@kit/ui/utils';

// Simple usage
<button className={cn('btn', className)}>Submit</button>

// Conditional classes
<div className={cn('base-class', {
  'text-lg': isLarge,
  'bg-primary': isPrimary,
  'opacity-50': isDisabled
})}>
  Content
</div>

// Array syntax
<span className={cn([
  'badge',
  variant === 'success' && 'badge-success',
  variant === 'error' && 'badge-error'
])}>
  {label}
</span>
```

## Core Shadcn Components

| Component | Import | Purpose |
| --- | --- | --- |
| `Button` | `@kit/ui/button` | Clickable actions |
| `Card` | `@kit/ui/card` | Content containers |
| `Dialog` | `@kit/ui/dialog` | Modal windows |
| `DropdownMenu` | `@kit/ui/dropdown-menu` | Menu dropdowns |
| `Form` | `@kit/ui/form` | Form components |
| `Input` | `@kit/ui/input` | Text inputs |
| `Select` | `@kit/ui/select` | Dropdown selection |
| `Tabs` | `@kit/ui/tabs` | Tab navigation |
| `Toast` | `@kit/ui/sonner` | Notifications |
| `Tooltip` | `@kit/ui/tooltip` | Hover info |

## MakerKit Components

| Component | Import | Purpose |
| --- | --- | --- |
| `If` | `@kit/ui/if` | Conditional rendering |
| `Trans` | `@kit/ui/trans` | Translations |
| `Page` | `@kit/ui/page` | Page layout |
| `PageHeader` | `@kit/ui/page-header` | Page headers |
| `GlobalLoader` | `@kit/ui/global-loader` | Loading states |
| `EmptyState` | `@kit/ui/empty-state` | Empty placeholders |
| `ProfileAvatar` | `@kit/ui/profile-avatar` | User avatars |
| `DataTable` | `@kit/ui/enhanced-data-table` | Data tables |

## Conditional Rendering

```tsx
import { If } from '@kit/ui/if';

// Basic usage
<If condition={isLoading}>
  <Spinner />
</If>

// With fallback
<If condition={isLoading} fallback={<Content />}>
  <Spinner />
</If>

// With type inference
<If condition={user}>
  {(userData) => <UserProfile data={userData} />}
</If>
```

## Error and Loading States

```tsx
// Loading state
<If condition={isLoading}>
  <div className="flex justify-center p-8">
    <Spinner />
  </div>
</If>

// Error state with type inference
<If condition={error}>
  {(err) => (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle><Trans i18nKey="common:errorTitle" /></AlertTitle>
      <AlertDescription>{err.message}</AlertDescription>
    </Alert>
  )}
</If>

// Empty state
<If condition={items.length === 0}>
  <EmptyState
    icon={<FileIcon />}
    title={<Trans i18nKey="common:noData" />}
    description={<Trans i18nKey="common:noDataDescription" />}
  />
</If>
```

## Toast Notifications

```tsx
import { toast } from '@kit/ui/sonner';

// Promise-based (recommended)
toast.promise(asyncOperation(), {
  loading: 'Saving...',
  success: 'Saved!',
  error: 'Failed to save'
});

// Manual
toast.success('Operation completed');
toast.error('Something went wrong');
toast.info('Note: This is informational');
```

## Testing Attributes

```tsx
<button data-test="submit-button">Submit</button>
<div data-test="user-profile" data-user-id={user.id}>
  {/* Content */}
</div>
```

## Marketing Components

```tsx
import {
  Hero,
  HeroTitle,
  GradientText,
  FeatureCard,
  FeatureGrid,
  Footer,
  Header,
} from '@kit/ui/marketing';

<Hero>
  <HeroTitle>
    Welcome to <GradientText>Hamster</GradientText>
  </HeroTitle>
</Hero>
```

## Best Practices

1. **Always use `@kit/ui`** - Don't create duplicate components
2. **Use semantic tokens** - Not hardcoded colors
3. **Use `cn()` for merging** - Handles Tailwind conflicts
4. **Use `If` over ternaries** - More readable
5. **Use `Trans` for text** - No hardcoded strings
6. **Add `data-test` attributes** - For E2E testing