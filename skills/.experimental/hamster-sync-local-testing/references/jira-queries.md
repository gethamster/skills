# Jira REST Queries

All queries use the Atlassian API gateway. Set `JIRA_TOKEN`, `JIRA_CLOUD_ID`,
`JIRA_PROJECT_ID`, and `JIRA_API_BASE` first (see [auth-setup.md](auth-setup.md)).

## One Issue or Epic

```bash
curl -s "$JIRA_API_BASE/issue/JIRA-123" \
  -H "Authorization: Bearer $JIRA_TOKEN" \
  -H "Accept: application/json"
```

## Hamster-Labeled Epics in the Selected Project

```bash
curl -s -X POST "$JIRA_API_BASE/search/jql" \
  -H "Authorization: Bearer $JIRA_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "jql": "project = "'"$JIRA_PROJECT_ID"'" AND issuetype = Epic AND labels = \"hamster\"",
    "maxResults": 50,
    "fields": ["summary", "labels", "issuetype", "project", "parent", "status", "updated"]
  }'
```

## Issues and Subtasks in the Selected Project

This is a provider inventory query, not the exact in-scope sync set. Actual sync scope is
stricter: top-level Jira issues must still resolve to a hamster-labeled epic through parentage
or epic-link custom fields before they should import as Hamster tasks.

```bash
curl -s -X POST "$JIRA_API_BASE/search/jql" \
  -H "Authorization: Bearer $JIRA_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "jql": "project = "'"$JIRA_PROJECT_ID"'" AND issuetype != Epic ORDER BY updated DESC",
    "maxResults": 25,
    "fields": ["summary", "issuetype", "project", "parent", "status", "updated"]
  }'
```

## Registered Jira Webhooks

```bash
curl -s "$JIRA_API_BASE/webhook" \
  -H "Authorization: Bearer $JIRA_TOKEN" \
  -H "Accept: application/json"
```