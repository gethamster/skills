---
name: feature-flag-questions
description: "Use whenever creating a brief for a NEW feature. This will add feature flag requirements into the brief"
version: "1.0.0"
metadata:
  category: "Experience"
---

Ask a question to the user to ascertain whether or not this new feature should be feature gated. Provide a feature name example. 

For user facing features, it lives in apps/web/config/feature-flags.config.ts and follows a schema like: 

```
const FeatureFlagsSchema = z.object({
  enableBackgroundAgents: z
    .boolean({
      error: (issue) =>
        issue.input === undefined
          ? 'Provide the variable NEXT_PUBLIC_ENABLE_BACKGROUND_AGENTS'
          : 'Value must be a boolean',
    })
    .describe('Enable background agent features (Cursor, etc.).'),
  enableMonitoring: z
    .boolean({
      error: (issue) =>
        issue.input === undefined
          ? 'Provide the variable NEXT_PUBLIC_ENABLE_MONITORING'
          : 'Value must be a boolean',
    })
    .describe('Enable monitoring/error tracking with the configured provider.'),
  enableGoogleDriveConnector: z
    .boolean({
      error: (issue) =>
        issue.input === undefined
          ? 'Provide the variable NEXT_PUBLIC_ENABLE_CONNECTOR_GOOGLE_DRIVE'
          : 'Value must be a boolean',
    })
    .describe('Enable Google Drive connector integration.'),
  enableConnectorJira: z
    .boolean({
      error: (issue) =>
        issue.input === undefined
          ? 'Provide the variable NEXT_PUBLIC_ENABLE_CONNECTOR_JIRA'
          : 'Value must be a boolean',
    })
    .describe('Enable the Jira connector in context settings.'),
  enableLiveVoice: z
    .boolean({
      error: (issue) =>
        issue.input === undefined
          ? 'Provide the variable NEXT_PUBLIC_ENABLE_LIVE_VOICE'
          : 'Value must be a boolean',
    })
    .describe('Enable live voice (push-to-talk) via Gemini Live.'),
} satisfies z.infer<typeof FeatureFlagsSchema>);

export default featuresFlagConfig;

function getBoolean(value: unknown, defaultValue: boolean) {
  if (typeof value === 'string') {
    return value === 'true';
  }

  return defaultValue;
}
```

For NestJS applications, a simple: 

```
this.configService.get<string>('ENABLE_LINEAR_TWO_WAY_SYNC') !== 'true'
```

Is used. If the user answers yes, add this as a requirement to the brief
