# Sync API Commands

All commands use the proxy at `http://127.0.0.1:8080`. Set shell variables first
(see [auth-setup.md](auth-setup.md)).

## Trigger Deterministic Resync

```bash
curl -s -X POST \
  "http://127.0.0.1:8080/sync/v1/connections/$SYNC_CONNECTION_ID/resync" \
  -H "Authorization: Bearer $JWT" \
  -H "x-account-id: $ACCOUNT_ID"
```

## Switch to Another Linear Team (Linear only)

```bash
curl -s -X PATCH \
  "http://127.0.0.1:8080/sync/v1/connections/$SYNC_CONNECTION_ID" \
  -H "Authorization: Bearer $JWT" \
  -H "x-account-id: $ACCOUNT_ID" \
  -H "Content-Type: application/json" \
  -d '{
    "sync_enabled": true,
    "provider_config": {
      "provider": "linear",
      "config": {
        "workspace_id": "WORKSPACE_UUID",
        "workspace_name": "WORKSPACE_NAME",
        "team_id": "NEW_TEAM_UUID"
      }
    }
  }'
```

## Delete a Sync-Only Connection

```bash
curl -i -X DELETE \
  "http://127.0.0.1:8080/sync/v1/connections/$SYNC_CONNECTION_ID" \
  -H "Authorization: Bearer $JWT" \
  -H "x-account-id: $ACCOUNT_ID"
```

## Enable Sync

```bash
curl -s -X POST \
  "http://127.0.0.1:8080/sync/v1/connections/$SYNC_CONNECTION_ID/enable" \
  -H "Authorization: Bearer $JWT" \
  -H "x-account-id: $ACCOUNT_ID"
```

## Disable Sync

```bash
curl -s -X POST \
  "http://127.0.0.1:8080/sync/v1/connections/$SYNC_CONNECTION_ID/disable" \
  -H "Authorization: Bearer $JWT" \
  -H "x-account-id: $ACCOUNT_ID"
```

## Simulate Linear Webhook

```bash
curl -s -X POST \
  "http://127.0.0.1:8080/sync/v1/webhooks/linear/$ACCOUNT_ID/$SYNC_CONNECTION_ID" \
  -H "Content-Type: application/json" \
  -d '<webhook-payload>'
```

## Trigger Confluence Reconciliation

Confluence has no webhook channel. The periodic schedule (default 10 min, controlled by
`SYNC_CONFLUENCE_RECONCILIATION_INTERVAL_MS`) eventually picks up provider mutations, but
during local testing you want a deterministic trigger.

The resync route works for Confluence connections too:

```bash
curl -s -X POST \
  "http://127.0.0.1:8080/sync/v1/connections/$SYNC_CONNECTION_ID/resync" \
  -H "Authorization: Bearer $JWT" \
  -H "x-account-id: $ACCOUNT_ID"
```

For a fanout across every active Confluence connection (the same job the schedule fires),
enqueue directly via Redis — see the Node snippet in [confluence-queries.md](confluence-queries.md).

## Simulate Jira Webhook

Jira ingress uses the static route plus the stored webhook token query param.
Minimum payload requirements for local simulation:

- a fresh webhook timestamp
- `issue.fields.project.id` for project routing
- `issue.self` or `user.self` so the controller can derive the Jira site origin
- `x-atlassian-webhook-identifier` for ingress idempotency

```bash
curl -s -X POST \
  "http://127.0.0.1:8080/sync/v1/webhooks/jira?token=$JIRA_WEBHOOK_TOKEN" \
  -H "Content-Type: application/json" \
  -H "x-atlassian-webhook-identifier: jira-local-test-$(uuidgen)" \
  -d '<jira-webhook-payload>'
```