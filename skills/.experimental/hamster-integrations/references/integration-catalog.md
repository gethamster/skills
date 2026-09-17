---
title: Integration Catalog
tags: integrations, oauth, connectors
---

# Integration Catalog

## Communication & Collaboration

| Integration | OAuth Type | Scopes |
| --- | --- | --- |
| **Slack** | `access_only` | `search:read` (user_scope) |
| **Microsoft Teams** | `with_rotating_refresh` | `offline_access`, `User.Read`, `Team.ReadBasic.All`, `Channel.ReadBasic.All`, `ChannelMessage.Read.All`, `Chat.Read`, `ChatMessage.Read`, `Group.Read.All` |
| **Gmail** | `with_refresh` | `gmail.readonly` |
| **Outlook Mail** | `with_rotating_refresh` | `offline_access`, `User.Read`, `MailboxFolder.Read`, `Mail.Read` |
| **Intercom** | `access_only` | `read write` |

## Knowledge Base & Documentation

| Integration | OAuth Type | Scopes |
| --- | --- | --- |
| **Confluence** | `with_rotating_refresh` | `offline_access`, `read:content:confluence`, `read:page:confluence`, `read:space:confluence`, `read:user:confluence`, `read:comment:confluence`, `read:attachment:confluence`, `read:configuration:confluence` |
| **Notion** | `access_only` | Capabilities set in integration settings |

## Project Management

| Integration | OAuth Type | Scopes |
| --- | --- | --- |
| **Jira** | `with_rotating_refresh` | `read`, `offline_access`, `manage:jira-configuration`, `manage:jira-project`, `read:jira-user`, `read:jira-work`, etc. |
| **Linear** | `access_only` | `read` |
| **Asana** | `with_refresh` | No scope needed |
| **Monday** | `access_only` | `me:read`, `boards:read`, `docs:read`, `workspaces:read`, `users:read`, `account:read`, `updates:read`, `assets:read`, `tags:read`, `teams:read` |
| **Trello** | `oauth1` | `read,write` |
| **ClickUp** | `access_only` | `public`, `data:read`, `team:read`, `space:read`, `list:read`, `folder:read`, `task:read`, `comment:read` |
| **Todoist** | `access_only` | `data:read` |

## File Storage

| Integration | OAuth Type | Scopes |
| --- | --- | --- |
| **Google Drive** | `with_refresh` | `drive.readonly` |
| **OneDrive** | `with_refresh` | `offline_access`, `User.Read`, `Files.Read.All` |
| **SharePoint** | `with_rotating_refresh` | `offline_access`, `User.Read.All`, `Group.Read.All`, `Sites.Read.All`, `Files.Read.All` |
| **Dropbox** | `with_refresh` | None (token_access_type: offline) |
| **Box** | `with_refresh` | `root_readwrite` |

## Office Documents

| Integration | OAuth Type | Scopes |
| --- | --- | --- |
| **Google Docs** | `with_refresh` | `documents.readonly`, `drive.readonly` |
| **Google Slides** | `with_refresh` | `presentations.readonly`, `drive.readonly` |
| **Microsoft Word** | `with_rotating_refresh` | `offline_access`, `User.Read`, `Files.Read.All` |
| **Microsoft Excel** | `with_rotating_refresh` | `offline_access`, `User.Read`, `Files.Read.All` |
| **OneNote** | `with_rotating_refresh` | `offline_access`, `User.Read`, `Notes.Read` |

## Calendar

| Integration | OAuth Type | Scopes |
| --- | --- | --- |
| **Google Calendar** | `with_refresh` | `calendar.readonly`, `calendar.events.readonly`, `calendar.calendars.readonly`, `calendar.freebusy` |
| **Outlook Calendar** | `with_rotating_refresh` | `offline_access`, `User.Read`, `Calendars.Read`, `Calendars.Read.Shared` |

## CRM & Sales

| Integration | OAuth Type | Scopes |
| --- | --- | --- |
| **HubSpot** | `with_refresh` | `crm.objects.companies.read`, `crm.objects.contacts.read`, `crm.objects.deals.read`, `oauth`, `tickets` |
| **Salesforce** | `with_refresh` | `api`, `refresh_token` |
| **Attio** | Direct (API Key) | N/A |
| **Pipedrive** | — | — |

## Code & Development

| Integration | OAuth Type | Scopes |
| --- | --- | --- |
| **GitHub** | — | — |
| **GitLab** | `with_refresh` | `read_api`, `read_user`, `read_repository`, `openid`, `profile`, `email` |
| **Bitbucket** | Direct (API Key) | N/A |

## Support

| Integration | OAuth Type | Scopes |
| --- | --- | --- |
| **Zendesk** | `with_refresh` | `read write` (template URLs) |

## Database

| Integration | OAuth Type | Scopes |
| --- | --- | --- |
| **Airtable** | `with_refresh` (PKCE) | `schema.bases:read`, `data.records:read`, `data.recordComments:read` |
| **PostgreSQL** | Direct | N/A |

## Payments

| Integration | OAuth Type | Scopes |
| --- | --- | --- |
| **Stripe** | Direct (API Key) | N/A |

---

## OAuth URL Templates

### Google Services

```yaml
url: "https://accounts.google.com/o/oauth2/auth"
backend_url: "https://oauth2.googleapis.com/token"
grant_type: "authorization_code"
content_type: "application/x-www-form-urlencoded"
client_credential_location: "body"
additional_frontend_params:
  access_type: "offline"
  prompt: "consent"
```

### Microsoft Services

```yaml
url: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize"
backend_url: "https://login.microsoftonline.com/common/oauth2/v2.0/token"
grant_type: "authorization_code"
content_type: "application/x-www-form-urlencoded"
client_credential_location: "body"
additional_frontend_params:
  response_type: "code"
  response_mode: "query"
```

### Atlassian Services (Jira, Confluence)

```yaml
url: "https://auth.atlassian.com/authorize"
backend_url: "https://auth.atlassian.com/oauth/token"
grant_type: "authorization_code"
content_type: "application/x-www-form-urlencoded"
client_credential_location: "body"
additional_frontend_params:
  audience: "api.atlassian.com"
  prompt: "consent"
  response_mode: "query"
  state: "YOUR_USER_BOUND_VALUE"
```

### Slack

```yaml
url: "https://slack.com/oauth/v2/authorize"
backend_url: "https://slack.com/api/oauth.v2.access"
grant_type: "authorization_code"
content_type: "application/x-www-form-urlencoded"
client_credential_location: "body"
user_scope: "search:read"  # Note: user_scope, not scope
```

### Linear

```yaml
url: "https://linear.app/oauth/authorize"
backend_url: "https://api.linear.app/oauth/token"
grant_type: "authorization_code"
content_type: "application/x-www-form-urlencoded"
client_credential_location: "body"
scope: "read"
```

### Notion

```yaml
url: "https://api.notion.com/v1/oauth/authorize"
backend_url: "https://api.notion.com/v1/oauth/token"
grant_type: "authorization_code"
content_type: "application/x-www-form-urlencoded"
client_credential_location: "header"  # Basic auth in header
additional_frontend_params:
  owner: "user"
```

---

## Special Requirements

### BYOC (Bring Your Own Credentials)

These require users to create their own OAuth app:

- Gmail
- Google Drive
- Google Docs
- Google Slides
- Salesforce
- Zendesk

### Template URLs

These require user input (subdomain, instance URL):

- Zendesk: `https://{subdomain}.zendesk.com/...`
- Salesforce: Requires `instance_url` for API calls

### PKCE Required

- Airtable

### OAuth 1.0a

- Trello

### Federated Search (No Full Sync)

- Slack (searches at query time)

---

## Rate Limits

| Level | Integrations |
| --- | --- |
| **Organization-level** | Most integrations |
| **Connection-level** | Notion (2-3 req/sec) |
| **Per-user** | Some Google services |

## Sync Types

| Type | Description | Integrations |
| --- | --- | --- |
| **Full sync** | Initial full sync, then incremental | Most |
| **Federated search** | Search at query time | Slack |
| **Incremental** | Cursor-based pagination | Google Drive |