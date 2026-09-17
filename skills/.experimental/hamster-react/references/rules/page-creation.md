---
title: Page Creation
tags: pages, layouts, next.js, routing
---

# Creating Pages

## Route Structure

```
app/
├── (marketing)/          # Public pages
├── (auth)/               # Auth pages
├── home/
│   ├── (user)/           # Personal account (home/(user)/*)
│   └── [account]/        # Team account (home/[account]/*)
├── admin/                # Super admin
└── api/                  # Webhooks
```

**Note**: `[account]` is the account slug, NOT the UUID.

## Standard Page Template

```tsx
// app/home/(user)/my-feature/page.tsx
import { PageBody } from '@kit/ui/page';
import { Trans } from '@kit/ui/trans';
import { createI18nServerInstance } from '~/lib/i18n/i18n.server';
import { withI18n } from '~/lib/i18n/with-i18n';
import { MyFeatureHeader } from './_components/my-feature-header';

export const generateMetadata = async () => {
  const i18n = await createI18nServerInstance();
  return { title: i18n.t('account:myFeaturePage') };
};

function MyFeaturePage() {
  return (
    <>
      <MyFeatureHeader
        title={<Trans i18nKey="common:routes.myFeature" />}
        description={<Trans i18nKey="common:myFeatureDescription" />}
      />
      <PageBody>
        {/* Main page content */}
      </PageBody>
    </>
  );
}

export default withI18n(MyFeaturePage);
```

## Loading State

```tsx
// app/home/(user)/my-feature/loading.tsx
import { GlobalLoader } from '@kit/ui/global-loader';

export default GlobalLoader;
```

## Async Params (Next.js 16)

```tsx
// CORRECT - await params in async functions
async function Page({ params }: Props) {
  const { account } = await params;
}

// CORRECT - use() in non-async functions
function Page({ params }: Props) {
  const { account } = use(params);
}

// WRONG - Don't use React.use() in async functions
async function Page({ params }: Props) {
  const { account } = use(params); // Don't do this
}
```

## User Workspace Layout

```tsx
// app/home/(user)/my-feature/layout.tsx
import { use } from 'react';
import { UserWorkspaceContextProvider } from '@kit/accounts/components';
import { Page } from '@kit/ui/page';
import { withI18n } from '~/lib/i18n/with-i18n';
import { loadUserWorkspace } from '../_lib/server/load-user-workspace';

function MyFeatureLayout({ children }: React.PropsWithChildren) {
  const workspace = use(loadUserWorkspace());

  return (
    <UserWorkspaceContextProvider value={workspace}>
      <Page>{children}</Page>
    </UserWorkspaceContextProvider>
  );
}

export default withI18n(MyFeatureLayout);
```

## Team Workspace Layout

```tsx
// app/home/[account]/my-feature/layout.tsx
import { use } from 'react';
import { TeamAccountWorkspaceContextProvider } from '@kit/team-accounts/components';
import { Page } from '@kit/ui/page';
import { withI18n } from '~/lib/i18n/with-i18n';
import { loadTeamWorkspace } from '../_lib/server/load-team-workspace';

function TeamLayout({ children, params }: LayoutParams) {
  const workspace = use(loadTeamWorkspace(params.account));

  return (
    <TeamAccountWorkspaceContextProvider value={workspace}>
      <Page>{children}</Page>
    </TeamAccountWorkspaceContextProvider>
  );
}

export default withI18n(TeamLayout);
```

## Header Component Pattern

```tsx
// _components/my-feature-header.tsx
import { PageHeader } from '@kit/ui/page-header';

export function MyFeatureHeader({
  title,
  description
}: {
  title: React.ReactNode;
  description: React.ReactNode;
}) {
  return <PageHeader title={title} description={description} />;
}
```

## Navigation Configuration

### Add Path

```typescript
// config/paths.config.ts
app: {
  yourFeaturePath: '/home/your-feature',
  yourTeamFeaturePath: '/home/[account]/your-feature',
}
```

### Add Personal Sidebar Item

```tsx
// config/personal-account-navigation.config.tsx
{
  label: 'common:routes.yourFeature',
  path: pathsConfig.app.yourFeaturePath,
  Icon: <YourIcon className="w-4" />,
  end: true,
}
```

### Add Team Sidebar Item

```tsx
// config/team-account-navigation.config.tsx
{
  label: 'common:routes.yourTeamFeature',
  path: createPath(pathsConfig.app.yourTeamFeaturePath, account),
  Icon: <YourIcon className="w-4" />,
}
```

## Best Practices

1. **Always use `withI18n` HOC** for pages and layouts
2. **Always include `generateMetadata`** for SEO
3. **Always provide `loading.tsx`** for routes
4. **Use Server Components by default** - only add `'use client'` when needed
5. **Place components in `_components/`** folder
6. **Place server utilities in `_lib/server/`** folder
7. **Authentication is handled by middleware** - no need for manual checks
8. **Authorization is handled by RLS** - no need for manual checks in most cases