# Confluence REST V2 Queries

All Confluence calls go through the Atlassian gateway at
`https://api.atlassian.com/ex/confluence/{cloud_id}/wiki/api/v2/...` for V2 endpoints, and
`https://api.atlassian.com/ex/confluence/{cloud_id}/wiki/rest/api/...` for the V1 label
endpoint. The adapter uses both — V2 for pages and properties, V1 for labels.

Set these shell variables first (see [auth-setup.md](auth-setup.md)):

```bash
CONFLUENCE_TOKEN='<confluence-oauth-access-token>'
CONFLUENCE_CLOUD_ID='<atlassian-cloud-id>'
CONFLUENCE_SPACE_ID='<numeric-space-id>'
CONFLUENCE_SPACE_KEY='<short-space-key-eg-HAM>'
CONFLUENCE_SITE_URL='https://your-site.atlassian.net/wiki'
CONFLUENCE_API_BASE="https://api.atlassian.com/ex/confluence/$CONFLUENCE_CLOUD_ID"
```

The OAuth token must carry the full scope set:
`read:page:confluence write:page:confluence delete:page:confluence read:space:confluence read:content.metadata:confluence offline_access`.
Partial scopes are the most common cause of local 401/403s.

## One Page (with body in storage format)

```bash
curl -s "$CONFLUENCE_API_BASE/wiki/api/v2/pages/$PAGE_ID?body-format=storage" \
  -H "Authorization: Bearer $CONFLUENCE_TOKEN" \
  -H "Accept: application/json" | jq .
```

The relevant fields for sync verification are: `id`, `status`, `title`,
`version.number`, `parentId`, `spaceId`, `_links.webui`, and `body.storage.value`.

## All Pages in the Selected Space (paginated)

```bash
curl -s "$CONFLUENCE_API_BASE/wiki/api/v2/spaces/$CONFLUENCE_SPACE_ID/pages?limit=50&body-format=storage" \
  -H "Authorization: Bearer $CONFLUENCE_TOKEN" \
  -H "Accept: application/json" | jq '.results[] | {id, title, parentId, status, version: .version.number}'
```

Follow `_links.next` to walk pagination. The Confluence adapter uses this same listing
endpoint during reconciliation.

## Page Ancestors (root-membership check)

```bash
curl -s "$CONFLUENCE_API_BASE/wiki/api/v2/pages/$PAGE_ID/ancestors" \
  -H "Authorization: Bearer $CONFLUENCE_TOKEN" \
  -H "Accept: application/json" | jq .
```

If the ancestor chain does not contain `provider_config.config.root_page_id`, the page is
out of scope by ancestry. This is the same check `confluence-provider-scope-evaluator` runs.

## Page Labels (hamster scope check)

```bash
curl -s "$CONFLUENCE_API_BASE/wiki/api/v2/pages/$PAGE_ID/labels" \
  -H "Authorization: Bearer $CONFLUENCE_TOKEN" \
  -H "Accept: application/json" | jq '.results[].name'
```

A page must include the `hamster` label to enter scope.

## Page App Properties (managed-state check)

```bash
curl -s "$CONFLUENCE_API_BASE/wiki/api/v2/pages/$PAGE_ID/properties" \
  -H "Authorization: Bearer $CONFLUENCE_TOKEN" \
  -H "Accept: application/json" | jq '.results[] | {key, value}'
```

Hamster stamps these app property keys:
`hamster.managed`, `hamster.account_id`, `hamster.document_id`, `hamster.sync_connection_id`,
`hamster.document_type`, `hamster.source`. `managed=true` is what the scope evaluator looks
for; the others are diagnostic.

## Add the Hamster Label Manually (V1 endpoint)

When the adapter applied the V2 page write but the V1 label write failed, the page is on
Confluence but not yet "managed". Reproduce the recovery path manually:

```bash
curl -s -X POST \
  "$CONFLUENCE_API_BASE/wiki/rest/api/content/$PAGE_ID/label" \
  -H "Authorization: Bearer $CONFLUENCE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '[{"name":"hamster"}]'
```

## Create a Page Directly (simulate inbound source state)

Use this to seed a test page that Confluence -> Local reconciliation should pick up.

```bash
curl -s -X POST "$CONFLUENCE_API_BASE/wiki/api/v2/pages" \
  -H "Authorization: Bearer $CONFLUENCE_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{
    \"spaceId\": \"$CONFLUENCE_SPACE_ID\",
    \"parentId\": \"$ROOT_PAGE_ID\",
    \"status\": \"current\",
    \"title\": \"Inbound test page $(date +%s)\",
    \"body\": {
      \"representation\": \"storage\",
      \"value\": \"<p>Inbound test body.</p>\"
    }
  }"
```

Then add the `hamster` label via the V1 endpoint above. Without the label, the page stays
out of scope by design.

## Update a Page Directly (simulate inbound mutation)

The version must be the current page version + 1, or the API returns 409.

```bash
CURRENT_VERSION=$(curl -s "$CONFLUENCE_API_BASE/wiki/api/v2/pages/$PAGE_ID" \
  -H "Authorization: Bearer $CONFLUENCE_TOKEN" | jq -r '.version.number')

curl -s -X PUT "$CONFLUENCE_API_BASE/wiki/api/v2/pages/$PAGE_ID" \
  -H "Authorization: Bearer $CONFLUENCE_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{
    \"id\": \"$PAGE_ID\",
    \"status\": \"current\",
    \"title\": \"Renamed by REST $(date +%s)\",
    \"body\": {
      \"representation\": \"storage\",
      \"value\": \"<p>Body updated by REST.</p>\"
    },
    \"version\": { \"number\": $((CURRENT_VERSION + 1)) }
  }"
```

## Delete a Page Directly

```bash
curl -i -X DELETE "$CONFLUENCE_API_BASE/wiki/api/v2/pages/$PAGE_ID" \
  -H "Authorization: Bearer $CONFLUENCE_TOKEN"
```

## Force a Confluence Reconciliation Now

There is no public sync API for "run reconciliation now" — the schedule is managed inside
`SyncEngineService`. Two ways to trigger it without waiting:

### Option A: enqueue a one-shot reconciliation job

Use a short Node snippet against the local Redis. From the repo root:

```bash
node --input-type=module -e "
import { Queue } from 'bullmq';
import { SYNC_QUEUE_NAMES } from '@kit/shared/sync/queue-names';

const queue = new Queue(SYNC_QUEUE_NAMES.FULL_RECONCILIATION, {
  connection: { host: '127.0.0.1', port: 6379 },
});

await queue.add('one-shot-confluence-fanout', {
  provider: 'confluence',
  fullSync: false,
});

await queue.close();
console.log('Enqueued one-shot Confluence reconciliation fanout');
"
```

### Option B: hit the standard resync route

The resync route works for Confluence too. It runs the reconciliation path against the
single connection rather than fanning out from the periodic schedule.

```bash
curl -s -X POST \
  "http://127.0.0.1:8080/sync/v1/connections/$SYNC_CONNECTION_ID/resync" \
  -H "Authorization: Bearer $JWT" \
  -H "x-account-id: $ACCOUNT_ID"
```

Watch tmux for `ReconciliationConsumer` + `ConfluenceAdapter.fetchEntities` log lines and
for `sync_logs` rows with `direction='inbound'` for the entity ids you mutated.

## Listing Spaces (OAuth scope sanity check)

```bash
curl -s "$CONFLUENCE_API_BASE/wiki/api/v2/spaces?limit=50" \
  -H "Authorization: Bearer $CONFLUENCE_TOKEN" \
  -H "Accept: application/json" | jq '.results[] | {id, key, name, type}'
```

If this returns 401/403, the OAuth token is missing `read:space:confluence` or the token
is revoked. This is the cleanest scope-drift smoke test before running scenario 16.
