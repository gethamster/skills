---
name: slack-bot
description: "Slack bot integration patterns using the Chat SDK. Use when working with Slack webhook handling, message processing, slash commands, OAuth installation, identity verification, or markdown-to-Slack conversion. Triggers on files in apps/ai/src/modules/slack-bot/."
version: "1.1.0"
---

# Slack Bot Integration

Slack bot module built on the [Chat SDK](https://www.npmjs.com/package/chat) (`chat` + `@chat-adapter/slack`). Handles DMs, slash commands, OAuth installation, and identity verification.

## Quick Reference

| Task | File | Notes |
| --- | --- | --- |
| Add a sub-command | `slack-slash-commands.service.ts` | Add to `SubCommand` type + `getSubCommandMap()` |
| Change message processing | `slack-chat-handler.service.ts` | `handleMessage()` → `processIncomingText()` is the shared flow |
| Modify webhook behavior | `slack-webhook.controller.ts` | Single `POST /webhooks/slack/events` endpoint |
| Update OAuth flow | `slack-bot-install.controller.ts` | `GET /webhooks/slack/install/callback`; `stateParam` typed as `unknown` with runtime string guard |
| Start OAuth install flow | `slack-bot-install.controller.ts` | `GET /webhooks/slack/install` redirects to Slack authorize |
| Change account linking | `slack-bot-verify.controller.ts` | `POST /v1/slack-bot/verify` (authenticated) |
| Verify page (frontend) | `apps/web/app/auth/slack/verify/` | Scoped to installation's account via cookie hint |
| Modify verification logic | `slack-bot-verify.service.ts` | Token redemption + Slack confirmation message |
| Feature-flag the connector | `feature-flags.config.ts` | `enableConnectorSlackBot` / `NEXT_PUBLIC_ENABLE_CONNECTOR_SLACK_BOT` |
| Edit markdown conversion | `utils/markdown-to-slack.ts` | Preserve code blocks first, then transform |
| Manage identities/threads | `external-bot.repository.ts` | Shared with `external-bot` module |

## Architecture

```
apps/ai/src/modules/slack-bot/
├── chat-bot.provider.ts              # Chat SDK singleton (SlackAdapter + Redis state)
├── slack-webhook.controller.ts       # Webhook: POST /webhooks/slack/events
├── slack-webhook.service.ts          # Webhook validation, payload size limits, signature verification
├── slack-chat-handler.service.ts     # SDK event handlers, message + file attachment processing
├── slack-slash-commands.service.ts   # Slash command registry
├── linear-feedback.service.ts        # Submits feedback as Linear issues via @kit/shared/linear-feedback
├── slack-bot-install.controller.ts   # OAuth install callback
├── slack-bot-verify.controller.ts    # Account linking verification
├── slack-bot-verify.service.ts       # Token redemption + Slack confirmation
├── slack-bot.module.ts
├── dto/
│   ├── slack-verify.dto.ts
│   └── slack-verify-response.dto.ts
└── utils/
    ├── markdown-to-slack.ts          # Markdown -> Slack mrkdwn
    ├── progressive-status.ts         # Progressive status messages during AI processing (timer chain + cleanup)
    ├── slack-api.ts                  # Slack API helpers (postMessage, postEphemeral, update, delete, reactions, token resolution)
    ├── slack-thread-context.ts       # Thread context fetch + synthetic attachment builder
    └── to-web-request.ts             # Express -> Web API Request

apps/ai/src/modules/external-bot/    # Shared identity/installation layer
├── external-bot.repository.ts           # DB: identities, threads, installations + bot token fallback
├── external-bot.service.ts              # Business logic: verification, thread orchestration, polling
└── external-bot.module.ts
```

**Dependencies**: `ExternalBotModule` (identity/threads), `AiAgentModule` (AI processing), `DocumentsModule` (file extraction via `ChatFileProcessorService`), `ConfigModule`, `RedisModule`.

## Feature Flag

The Slack Bot connector tile in the web UI is gated behind:

```
NEXT_PUBLIC_ENABLE_CONNECTOR_SLACK_BOT=true|false
```

Schema key: `enableConnectorSlackBot` in `apps/web/config/feature-flags.config.ts`. When disabled, the tile is hidden from the context-settings service grid.

**Env vars**: `SLACK_BOT_SIGNING_SECRET`, `SLACK_BOT_CLIENT_ID`, `SLACK_BOT_CLIENT_SECRET`, `SLACK_BOT_ENCRYPTION_KEY` (encrypts OAuth state in Redis). All required per environment — each env (local, tux, prod) has its own Slack bot app.

## Token Storage: Redis + DB Fallback

Bot OAuth tokens live in **two places** — Redis (primary, fast) and the database (durable fallback). This means a Redis flush doesn't force workspaces to reinstall the Slack app.

- **On OAuth install**: The install flow is kicked off from the team context-settings "Add Connection" page via an install dialog. It hits `GET /webhooks/slack/install`, which redirects to Slack's authorize URL with a `state` param encoding the installing `accountId`. On callback, the SDK stores the encrypted token in Redis. The install callback stores the token in Supabase Vault via `store_external_bot_token()` and saves the vault reference in `external_bot_installations.bot_token_secret_id`. If `accountId` was present in the state, it is bound to the installation (`account_id` column) via `bindInstallationAccount()` (first-writer-wins: only sets when NULL). **Note**: `verifyAndDecodeState` accepts `unknown` and rejects non-string values (e.g. array from repeated query params) before calling string methods.
- **On token resolution**: `resolveSlackBotToken()` tries Redis first. On miss (flush, key corruption, encryption key rotation), it reads from the Vault via `get_external_bot_token()`, returns the token, and re-syncs it to Redis so subsequent requests are fast again. Vault persistence ensures that the user doesn't have to reinstall the app into the workspace on cache miss.
- **On webhook**: `SlackWebhookController.ensureInstallation()` calls `resolveSlackBotToken()` before the SDK processes the request, transparently restoring Redis from DB if needed
- **On Redis flush**: Token is restored from DB automatically — no user action required

## Threading Model

In Slack's API, `ts` (timestamp) is the unique identifier for a message — a string like `"1234567890.123456"` that doubles as both ID and timestamp. Replying to a thread means passing the parent message's `ts` as `thread_ts`.

**Variable naming in `slack-chat-handler.service.ts`**:

- `incomingMessageTs` — the ts of the message the user just sent (Slack's `ts`)
- `threadTs` — the thread root ts, only present for replies (Slack's `thread_ts`)
- `threadAnchorTs` — resolved thread identifier: `threadTs ?? incomingMessageTs`

Each Slack thread (`channel:thread_ts`) maps 1:1 to a Hamster thread. The `platformChannelId` stored in `external_bot_threads` encodes this as `{channelId}:{threadAnchorTs}`.

### DMs

- **Top-level DM**: Each new message starts a brand-new Hamster thread. The bot replies as a Slack thread reply (using `postSlackThreadReply` with the message's own `ts` as `thread_ts`), which anchors the conversation. The handler does NOT call `thread.subscribe()` — subscribing at the channel level would capture all future DMs instead of letting each start a new thread.
- **DM thread reply**: Continues the existing Hamster thread mapped to that Slack thread. Uses `thread.subscribe()` so follow-ups route to `onSubscribedMessage`. Replies via SDK `thread.post()`.

### Channels

- **Top-level @mention**: Starts a brand-new Hamster thread, same as a top-level DM. The bot replies as a Slack thread reply (using `postSlackThreadReply` with the message's own `ts` as `thread_ts`), anchoring a new thread. Does NOT call `thread.subscribe()` — subscribing at the channel level would capture all future @mentions instead of letting each start a new thread. The SDK's `onNewMention` handler only fires on actual @mentions, so regular channel messages are ignored.
- **Thread @mention**: Processes normally. Thread context (prior messages) is fetched via `fetchSlackThreadContext` and attached as a synthetic `slack-thread-context.md` file so the AI agent has full conversation context.

## Message Processing Flow

`onNewMention` and `onSubscribedMessage` both delegate to `handleMessage` → `processIncomingText`. The SDK treats DMs as mentions, so `onNewMention` is the correct handler for both DMs and channel @mentions:

```
1. Strip bot mention from raw event text (<@UBOTID> → empty) to get actual user content
2. Early exit: no text + no attachments → silent return
3. Parse Slack IDs (channel via decodeThreadId, teamId from raw event)
4. Reject file-only messages (no text after mention stripping) → ephemeral hint to user
5. Identity resolution (findIdentity)
   ├── Not found → check installation has account binding
   │   ├── No installation or no account_id → silent rejection (fail-closed), stop
   │   └── Has account binding → send verification link with account_id hint via ephemeral message
   └── Found → continue
6. Subscribe to thread (skipped for top-level messages)
7. Determine platformChannelId = {channelId}:{threadAnchorTs}
8. Get or create Hamster thread (aiClient for auth, human userId as created_by)
9. Download + extract file attachments and fetch thread context
10. Create user message (human userId as created_by, source: 'slack', chat_state: 'getting_started')
11. Add hourglass reaction to user's message (fire-and-forget processing indicator)
12. Start progressive status messages (fire-and-forget timer chain, posts + updates a threaded message)
13. Process AI inline via aiAgentService.processThreadMessage()
14. Deliver replies:
    ├── Top-level message (DM or channel @mention) → postSlackThreadReply (anchors Slack thread)
    └── Thread reply → thread.post() via SDK
15. Cancel status messages + delete status message (in finally block)
16. Remove hourglass reaction (fire-and-forget, in finally block — removed on both success and failure)
```

### File Attachments

File attachments are downloaded from Slack, extracted via `ChatFileProcessorService`, and passed to the AI as `syntheticAttachments` in message metadata.

**Flow**: `processSlackAttachments` → `getEligibleAttachments` → `processInBatches` (bounded concurrency) → `processOneAttachment` (download + extract).

**Download strategies** (tried in order):

1. SDK `attachment.fetchData()` — primary
2. Slack `files.info` API — fallback (inline `content` for text, `url_private_download` for binary)

**Size enforcement** (three layers):

1. `getEligibleAttachments` — pre-filters by `attachment.size` metadata before downloading
2. `downloadFromUrl` — checks `Content-Length` header before reading the response body
3. `downloadFromUrl` — checks `arrayBuffer.byteLength` after download (catches missing/inaccurate `Content-Length`)

**Limits**: `MAX_FILE_SIZE_BYTES` (50 MB per file), `MAX_ATTACHMENTS_PER_MESSAGE` (8 per message), `MAX_CONCURRENT_DOWNLOADS` (3 parallel).

**Webhook payload limit**: 1 MB (`MAX_PAYLOAD_BYTES`) for all events. File content is downloaded separately via `fetchData()` / `files.info` — the webhook payload only contains JSON metadata.

**Oversized file feedback**: When files exceed the size limit, an ephemeral message lists the skipped file names so the user knows why they were dropped.

### Processing Indicator

Two fire-and-forget feedback mechanisms run during AI processing:

1. **Hourglass reaction** (`PROCESSING_REACTION` in `slack-chat-handler.service.ts`) — added at start, removed in `finally` block. Requires `reactions:write` scope.
2. **Progressive status messages** (`utils/progressive-status.ts`) — threaded reply posted at 1s, updated in-place at 10s/20s with randomly selected messages (5 per stage), then **deleted** on completion.

```
0s → hourglass reaction added
1s → status message posted (randomly picked from bank)
10s/20s → status message updated in place
AI responds → status message deleted, reaction removed
```

### RLS Ownership Pattern

All DB writes use the **AI user client** (`aiClient` where `auth.uid() = aiUserId`) for authentication. However, `created_by` is set to the **human user's** ID (the actual message author). This means `created_by ≠ auth.uid()` — the repository intentionally avoids `INSERT...RETURNING` (no `.select()` after insert) because the RLS creator-shortcut SELECT policy would not match.

The human user is tracked in thread metadata (`human_user_id`). The AI client passes `is_thread_owner` checks for participant and thread_item INSERT operations.

## Key Patterns

### Express to Web Request

The Chat SDK expects Web API `Request` objects:

```typescript
const webRequest = toWebRequest(req, { includeBody: true });
const sdkResponse = await this.bot.webhooks.slack(webRequest, {
  waitUntil: (task) => backgroundTasks.push(task),
});
```

### Sending Messages Outside Webhook Context

Use the shared helpers in `utils/slack-api.ts`. They handle the HTTP call, response parsing, and error formatting.

| Helper | Slack API | Visibility | Use case |
| --- | --- | --- | --- |
| `postSlackMessage` | `chat.postMessage` | Everyone in the channel | Public notifications |
| `postSlackThreadReply` | `chat.postMessage` (with `thread_ts`) | Everyone in the thread | AI replies to top-level messages — DMs and channel @mentions (anchors a Slack thread) |
| `postSlackEphemeral` | `chat.postEphemeral` | Only the target user | Verification links, confirmations, errors |
| `updateSlackMessage` | `chat.update` | Everyone in the channel | Edit a message in place (best-effort, swallows `message_not_found` / `cant_update_message`) |
| `deleteSlackMessage` | `chat.delete` | N/A (message removed) | Delete a message (best-effort, swallows `message_not_found`) |
| `addSlackReaction` | `reactions.add` | Everyone (emoji on message) | Processing indicator (best-effort, swallows `already_reacted`) |
| `removeSlackReaction` | `reactions.remove` | Everyone (removes emoji) | Clear processing indicator (best-effort, swallows `no_reaction`) |

Resolve the bot token first with `resolveSlackBotToken` (tries Redis, falls back to DB, re-syncs):

```typescript
import { postSlackEphemeral, postSlackMessage, resolveSlackBotToken } from './utils/slack-api';

const slackAdapter = this.bot.getAdapter('slack');
const botToken = await resolveSlackBotToken(slackAdapter, teamId, this.externalBotRepo);

// Visible only to the target user
await postSlackEphemeral(botToken, channelId, userId, 'Only you can see this');

// Visible to everyone in the channel
await postSlackMessage(botToken, channelId, 'Everyone can see this');
```

**Security**: Prefer `postSlackEphemeral` for anything containing tokens, links, or user-specific state. Never post verification URLs via `postSlackMessage` or `thread.post()` — they leak one-time tokens to other channel members.

### ID Extraction

Always extract `team_id` from raw events, not SDK abstractions. The Chat SDK normalizes messages into a generic shape, but workspace/guild/tenant IDs are platform-specific (`team_id` in Slack, `guild_id` in Discord, `tenantId` in Teams). The `external-bot` layer supports all three, so we read from `message.raw` to get the untouched platform payload. Use `decodeThreadId` for channel:

```typescript
// Team ID from raw event
const parsed = RawEventSchema.safeParse(message.raw);
const teamId = parsed.success ? (parsed.data.team ?? parsed.data.team_id) : undefined;

// Channel ID from thread
const decoded = this.bot.getAdapter('slack').decodeThreadId(thread.id);
const channelId = decoded.channel;
```

### Slash Commands (Per-Environment with Sub-Commands)

Each environment has its own Slack app and slash command: `/hamster` (prod), `/hamster-tux` (staging), `/hamster-local` (local). All route through the same sub-command system — the first word after the command is the sub-command (e.g. `/hamster logout`). Running the command with no arguments shows help.

**Available sub-commands**: `help`, `logout`, `feedback`

**Adding a new sub-command**:

```typescript
// 1. Add to SubCommand type
type SubCommand = 'help' | 'logout' | 'feedback' | 'mycommand';

// 2. Add handler method
private async handleMyCommand(event: SlashCommandEvent): Promise<void> {
  await this.replyEphemeral(event, 'Response text here.');
}

// 3. Register in getSubCommandMap()
['mycommand', { handler: (event) => this.handleMyCommand(event), description: 'Description shown in help' }],
```

**Important**: Register sub-commands in `getSubCommandMap()`, not `getCommandMap()`. The top-level app commands (`/hamster`, etc.) are registered automatically from `APP_COMMANDS`.

## Session Expiry (30-Day)

Identity sessions expire after 30 days of inactivity. The `last_active_at` column on `external_bot_identities` tracks the last message timestamp. On each incoming message, `resolveIdentity()` checks if `Date.now() - lastActiveAt > 30 days`. If expired, the identity is deleted and the user must re-verify. The expiry constant is `SESSION_EXPIRY_MS` in `slack-chat-handler.service.ts`.

## Membership Cleanup

When a user is removed from a team account (`accounts_memberships` DELETE), a trigger (`cleanup_bot_identities_on_membership_delete`) automatically deletes their `external_bot_identities` rows for that account. This prevents orphaned identities from letting removed users continue posting via the bot.

## Documentation

- **This file** (`SKILL.md`) — Update when adding/changing sub-commands, services, architecture, or internal patterns.
- **`docs/features/slack-bot.md`** — Update when changes affect users (new commands, changed behavior, new capabilities).

## Critical Rules

1. **Set `chat_state: 'getting_started'`** — Slack messages must use the getting_started chat state so the orchestrator handles them correctly
2. **Disable inline ask questions** — Slack does not support interactive ask_questions; the agent must respond with plain text only
3. **Fail closed on missing account binding** — If the installation has no `account_id`, do NOT mint a verification token. Send an ephemeral "not fully connected" message and return early. The install flow must bind an account first.
4. **Never subscribe top-level messages** — Calling `thread.subscribe()` on a top-level message (DM or channel @mention) captures all future messages in the channel, breaking new-thread creation. Only subscribe thread replies (`raw.thread_ts` present).

## Verification Flow (Frontend)

The verify page at `apps/web/app/auth/slack/verify/` is scoped to the installation's account:

```
promptVerification() builds URL: /auth/slack/verify/auth?token=xxx&account_id=yyy
  → auth/route.ts sets two cookies: slack_verify_token + slack_verify_account_id
  → page.tsx reads account hint cookie, queries external_bot_installations filtered to that account_id
  → VerifyForm auto-selects the single account (no multi-select shown)
  → linkSlackAccountAction clears both cookies on success
```

- The `account_id` in the URL is the installation's bound account — the only one `redeemVerificationToken` will accept
- `loadTeamAccounts(expectedAccountId?)` queries `external_bot_installations` with RLS (`has_role_on_account`), optionally filtered by the hint
- Falls back to showing all installed accounts if the cookie hint is missing (e.g. old verification links)

## Testing

```bash
pnpm --filter hamster-ai test -- --run apps/ai/src/modules/slack-bot/
```

Mock the Chat SDK bot with handler capture:

```typescript
const mockBot = { onNewMention: vi.fn(), onSubscribedMessage: vi.fn(), onSlashCommand: vi.fn() };
service.onModuleInit();
// onNewMention takes a single callback arg (the SDK treats DMs as mentions)
const handler = mockBot.onNewMention.mock.calls[0]![0];
await handler(mockThread, mockMessage);
```

## Local Development

Slack delivers webhooks via server-to-server HTTPS requests and verifies endpoint certificates, so `localhost` (plain HTTP, no public DNS) can't receive them. A Cloudflare Tunnel exposes the local API on a public HTTPS URL that Slack can reach.

1. **Start the dev server with tunnel**:

```bash
pnpm dev:with-slack
```

1. **Copy the `TUNNEL_URL`** printed in the terminal output (e.g. `https://fork-margin-hitting-disks.trycloudflare.com`)
2. **Update the Slack app manifest** at https://app.slack.com/app-settings/T0962GGFR3R/A0AK7LG9RC5/app-manifest — replace all URL prefixes with the tunnel URL
3. **Verify the URL** by clicking `Click here to verify` in the banner at the top of the screen
4. **Add Slack bot connection** by going to context-settings and installing `Slack Bot` for your team.
5. **Open the App in Slack** and message the Hamster Bot. It will send a verification link. Once completed you'll be able to have a conversation with Hamster.
