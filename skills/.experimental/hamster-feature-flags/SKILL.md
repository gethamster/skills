---
name: hamster-feature-flags
description: "Add and manage feature flags for gating features in Hamster Studio across environments and integrations."
---

# Feature Flags Skill

Add and manage feature flags for gating features in Hamster Studio.

## When to Use

- Adding a new feature that should be gated behind a flag
- Enabling/disabling features per environment (dev, staging, production)
- Rolling out features gradually with environment-specific toggles
- Adding new connector integrations that need to be gated

## Quick Reference

### Files Involved

| File | Purpose |
| --- | --- |
| `apps/web/config/feature-flags.config.ts` | Schema definition and parsing |
| `apps/web/.env.1p` | 1Password references for each environment |
| Component files | Import and use `featuresFlagConfig` |

### Adding a New Feature Flag

1. **Add to schema** in `feature-flags.config.ts`:

```typescript
enableMyFeature: z.boolean({
  error: (issue) =>
    issue.input === undefined
      ? 'Provide the variable NEXT_PUBLIC_ENABLE_MY_FEATURE'
      : 'Value must be a boolean',
}).describe('Enable my new feature.'),
```

1. **Add to config parsing** in the same file:

```typescript
enableMyFeature: getBoolean(
  process.env.NEXT_PUBLIC_ENABLE_MY_FEATURE,
  false,  // default value when not set
),
```

1. **Add to `.env.1p`** with 1Password reference:

```
NEXT_PUBLIC_ENABLE_MY_FEATURE=op://${VAULT_NAME}/features/next-public-enable-my-feature
```

1. **Create in 1Password** for each environment vault:

- Path: `/features/next-public-enable-my-feature`
- Value: `true` or `false`

### Using Feature Flags

```typescript
import featuresFlagConfig from '~/config/feature-flags.config';

// In component logic
if (featuresFlagConfig.enableMyFeature) {
  // Feature-specific code
}

// Filtering arrays (e.g., services)
const filteredItems = items.filter((item) =>
  item.id === 'my-feature' ? featuresFlagConfig.enableMyFeature : true,
);
```

## Naming Conventions

| Convention | Example |
| --- | --- |
| Env variable | `NEXT_PUBLIC_ENABLE_*` or `NEXT_PUBLIC_*_ENABLED` |
| Config key | `enableMyFeature` (camelCase, starts with `enable`) |
| 1Password path | `/features/next-public-enable-my-feature` |

## References

- [Feature Flag Patterns](references/feature-flag-patterns.md) - Detailed patterns and examples
