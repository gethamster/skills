# Feature Flag Patterns

## Architecture Overview

Feature flags in Hamster Studio use a Zod-validated configuration pattern with 1Password integration for secure, environment-specific values.

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   1Password     │────▶│    .env.1p       │────▶│  feature-flags  │
│   (per vault)   │     │  (op:// refs)    │     │   .config.ts    │
└─────────────────┘     └──────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
                                                ┌─────────────────┐
                                                │   Components    │
                                                │   (import)      │
                                                └─────────────────┘
```

## Complete Example: Adding a Connector Flag

### Step 1: Schema Definition

```typescript
// apps/web/config/feature-flags.config.ts

const FeatureFlagsSchema = z.object({
  // ... existing flags ...
  
  enableConnectorJira: z.boolean({
    error: (issue) =>
      issue.input === undefined
        ? 'Provide the variable NEXT_PUBLIC_CONNECTOR_JIRA_ENABLED'
        : 'Value must be a boolean',
  }).describe('Enable the Jira connector in context settings.'),
});
```

### Step 2: Config Parsing

```typescript
// apps/web/config/feature-flags.config.ts

const featuresFlagConfig = FeatureFlagsSchema.parse({
  // ... existing flags ...
  
  enableConnectorJira: getBoolean(
    process.env.NEXT_PUBLIC_CONNECTOR_JIRA_ENABLED,
    false,  // Safe default: disabled
  ),
} satisfies z.infer<typeof FeatureFlagsSchema>);
```

### Step 3: Environment Configuration

```bash
# apps/web/.env.1p
NEXT_PUBLIC_CONNECTOR_JIRA_ENABLED=op://${VAULT_NAME}/features/next-public-connector-jira-enabled
```

### Step 4: 1Password Setup

Create the secret in each environment vault:

- **Development**: `hamster-dev/features/next-public-connector-jira-enabled` → `true`
- **Staging**: `hamster-staging/features/next-public-connector-jira-enabled` → `true`
- **Production**: `hamster-prod/features/next-public-connector-jira-enabled` → `false`

### Step 5: Component Usage

```typescript
// apps/web/app/home/[account]/context-settings/_components/service-grid.tsx
'use client';

import featuresFlagConfig from '~/config/feature-flags.config';

// Filter services based on feature flags
const sortedServices = sortServicesByAvailability(
  AVAILABLE_SERVICES
    .filter((service) => !connectedSingleServices.has(service.id))
    .filter((service) =>
      service.id === 'cursor'
        ? featuresFlagConfig.enableBackgroundAgents
        : true,
    )
    .filter((service) =>
      service.id === 'jira' ? featuresFlagConfig.enableConnectorJira : true,
    ),
);
```

## Common Patterns

### Boolean Feature Toggle

```typescript
// Simple conditional rendering
{featuresFlagConfig.enableNotifications && (
  <NotificationBell />
)}
```

### Array Filtering

```typescript
// Filter items based on multiple flags
const enabledFeatures = allFeatures.filter((feature) => {
  switch (feature.id) {
    case 'cursor':
      return featuresFlagConfig.enableBackgroundAgents;
    case 'jira':
      return featuresFlagConfig.enableConnectorJira;
    default:
      return true;
  }
});
```

### Conditional Logic

```typescript
// Use in business logic
const getAuthConfig = () => {
  if (featuresFlagConfig.enableWaitlist) {
    return { redirectTo: '/waitlist' };
  }
  return { redirectTo: '/dashboard' };
};
```

## Default Value Guidelines

| Scenario | Default | Reasoning |
| --- | --- | --- |
| New experimental feature | `false` | Safe rollout |
| Core functionality | `true` | Should work out of box |
| Billing features | `false` | Explicit opt-in |
| Background/agent features | `false` | Resource-intensive |

## Existing Feature Flags

| Flag | Env Variable | Default | Purpose |
| --- | --- | --- | --- |
| `enableThemeToggle` | `NEXT_PUBLIC_ENABLE_THEME_TOGGLE` | `true` | UI theme switching |
| `enableTeamAccounts` | `NEXT_PUBLIC_ENABLE_TEAM_ACCOUNTS` | `true` | Team functionality |
| `enableNotifications` | `NEXT_PUBLIC_ENABLE_NOTIFICATIONS` | `true` | Notification system |
| `enableBackgroundAgents` | `NEXT_PUBLIC_ENABLE_BACKGROUND_AGENTS` | `false` | Cursor agent connector |
| `enableConnectorJira` | `NEXT_PUBLIC_CONNECTOR_JIRA_ENABLED` | `false` | Jira connector |
| `enableWaitlist` | `NEXT_PUBLIC_ENABLE_WAITLIST` | `true` | Waitlist mode |
| `enableMonitoring` | `NEXT_PUBLIC_ENABLE_MONITORING` | `false` | Error tracking |

## Testing Feature Flags

For local development, override in `.env.local`:

```bash
# .env.local (not committed)
NEXT_PUBLIC_CONNECTOR_JIRA_ENABLED=true
NEXT_PUBLIC_ENABLE_BACKGROUND_AGENTS=true
```

For E2E tests, set environment variables in test configuration.