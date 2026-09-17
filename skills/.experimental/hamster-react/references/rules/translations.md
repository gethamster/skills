---
title: Translations (i18n)
tags: i18n, translations, internationalization
---

# Internationalization

## Architecture

1. **Core Package**: `packages/i18n`
2. **App Implementation**: `apps/web/lib/i18n`
3. **Translation Files**: `apps/web/public/locales/[language]/[namespace].json`

## Page/Layout Setup

Always wrap with `withI18n` HOC:

```tsx
import { withI18n } from '~/lib/i18n/with-i18n';

function HomePage() {
  // Component code
}

export default withI18n(HomePage);
```

## Using Trans Component

```tsx
import { Trans } from '@kit/ui/trans';

// Basic usage
<Trans i18nKey="common:welcomeMessage" defaults="Welcome!" />

// With variables
<Trans
  i18nKey="user:lastLogin"
  values={{ date: formatDate(lastLogin) }}
  defaults="Last login: {date}"
/>

// With HTML elements
<Trans
  i18nKey="terms:agreement"
  components={{
    TermsLink: <a href="/terms" className="underline" />,
    PrivacyLink: <a href="/privacy" className="underline" />
  }}
  defaults="I agree to the <TermsLink>Terms</TermsLink> and <PrivacyLink>Privacy Policy</PrivacyLink>."
/>

// Pluralization
<Trans
  i18nKey="notifications:count"
  count={notifications.length}
  defaults="{count, plural, =0 {No notifications} one {# notification} other {# notifications}}"
/>
```

## Using useTranslation Hook

```tsx
'use client';

import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t } = useTranslation('common');

  return <h1>{t('homeTabLabel')}</h1>;
}
```

## Available Namespaces

| Namespace | Purpose | File |
| --- | --- | --- |
| `common` | General UI, navigation, errors | `common.json` |
| `auth` | Authentication text | `auth.json` |
| `account` | Account settings | `account.json` |
| `teams` | Team management | `teams.json` |
| `billing` | Subscription/payment | `billing.json` |
| `marketing` | Landing pages, blog | `marketing.json` |

## Adding Translations

1. **Add key** to `apps/web/public/locales/[lang]/[namespace].json`:

```json
{
  "existingKey": "Existing translation",
  "newKey": "New translation text"
}
```

1. **Add namespace** if new - update `lib/i18n/i18n.settings.ts`:

```typescript
export const defaultI18nNamespaces = [
  'common',
  'auth',
  'your-new-namespace', // Add here
];
```

## Adding New Language

1. Add language code to `languages` array in `i18n.settings.ts`
2. Create translation files in `apps/web/public/locales/[new-language]/`
3. Copy structure from English files as template

## Key Naming Conventions

```json
{
  "routes": {
    "dashboard": "Dashboard",
    "settings": "Settings"
  },
  "actions": {
    "save": "Save",
    "cancel": "Cancel",
    "delete": "Delete"
  },
  "messages": {
    "saveSuccess": "Changes saved successfully",
    "deleteConfirm": "Are you sure you want to delete?"
  }
}
```

## Rules

1. **Always use `Trans` or `t()`** - No hardcoded strings
2. **Always provide `defaults`** - Fallback for missing translations
3. **Use namespaces** - Organize logically
4. **Keep HTML minimal** - In translations
5. **Test with different languages** - Check for text overflow

## Language Selector

```tsx
import { LanguageSelector } from '@kit/ui/language-selector';

export function SettingsPage() {
  return (
    <div>
      <h2>Language Settings</h2>
      <LanguageSelector />
    </div>
  );
}
```

## Language Priority

1. User-selected language (from cookie)
2. Browser language (if priority is set to 'user')
3. Default language from environment variable

## Common Issues

- **Translation not showing**: Check namespace is correct
- **Variables not interpolated**: Use `values` prop with Trans
- **Key not found**: Verify key exists in JSON file