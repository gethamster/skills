# Linear GraphQL Queries

All queries use the Linear API at `https://api.linear.app/graphql`.
Set `LINEAR_TOKEN` and `API` shell variables first (see [auth-setup.md](auth-setup.md)).

## Teams

```bash
curl -s "$API" \
  -H "Authorization: Bearer $LINEAR_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"query":"query { teams { nodes { id key name } } }"}'
```

## Webhooks

```bash
curl -s "$API" \
  -H "Authorization: Bearer $LINEAR_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"query":"query { webhooks { nodes { id url enabled team { id key name } } } }"}'
```

## One Issue

```bash
curl -s "$API" \
  -H "Authorization: Bearer $LINEAR_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"query":"query { issue(id: \"ISSUE_UUID\") { id identifier title state { id name type } project { id name } parent { id identifier } } }"}'
```

## One Project

```bash
curl -s "$API" \
  -H "Authorization: Bearer $LINEAR_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"query":"query { project(id: \"PROJECT_UUID\") { id name state status { id name type } archivedAt targetDate updatedAt } }"}'
```

## One Initiative

```bash
curl -s "$API" \
  -H "Authorization: Bearer $LINEAR_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"query":"query { initiative(id: \"INITIATIVE_UUID\") { id name status description content targetDate projects(first: 10) { nodes { id name teams(first: 5) { nodes { id key name } } } } }"}'
```