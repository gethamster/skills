---
name: hamster-mcp-cli-parity
description: "Keep MCP (apps/mcp) and CLI (apps/cli) in sync with web when a new Studio artifact/entity or agent-facing operation is added. Use when web (apps/web) gains an entity/table/capability agents should reach, or when editing packages/go/ops, apps/mcp, apps/cli, or parity_manifest.json. Triggers: 'new entity/artifact in web', 'expose X to agents/MCP/CLI', 'add an MCP tool', 'add a CLI command', 'parity_manifest', 'parity test failing'."
---

# MCP ↔ CLI ↔ Web Parity

**web** (`apps/web`) is the source of truth for what entities exist. **MCP**
(`apps/mcp`, agent tools) and **CLI** (`apps/cli`, terminal) are thin adapters
over one shared domain layer, `packages/go/ops`.

**Rule:** when web adds an artifact/entity — or a new operation on one — that
agents or the CLI should reach, propagate it to `ops` → MCP → CLI and record
the decision in `apps/mcp/parity_manifest.json`. CI-enforced: both
`apps/mcp/internal/tools/parity_test.go` and `apps/cli/cmd/parity_test.go`
fail on any tool/command missing a manifest entry.

## Checklist

1. **Ops** — add `func Xxx(ctx, *ops.Session, XxxInput) (XxxOutput, error)` to
  `packages/go/ops/<domain>.go`. Structs need `json` + `jsonschema` tags;
  account-scope every query with `s.AccountID`. Add ops tests.
2. **MCP** — thin `mcp.AddTool(...)` adapter in `apps/mcp/internal/tools/<domain>.go`
  (wired via `register.go`). Bump the tool count in `apps/mcp/CLAUDE.md`.
3. **CLI** — cobra command in `apps/cli/cmd/<domain>.go`: flags → ops input →
  `buildOpsSession()` → same ops func. See `cmd/goal.go`. Resolve refs
  server-side via `ops` (like `ops.GetTask` on UUID-or-display-ID) — never a
  local `.hamster` sync-state scan (drifts from MCP, breaks outside a synced repo).
4. **Manifest** — add a `pairs` entry (MCP tool ↔ CLI command) or a documented
  `mcp_only` / `cli_only` exemption with a reason.
5. **Verify** — `cd apps/mcp && go test ./... && cd ../cli && go test ./...`

## Exemptions (still a manifest entry)

Asymmetry is allowed but never implicit. `mcp_only` = MCP tool with no CLI
counterpart, or a tracked gap (currently empty — all tools are paired).
`cli_only` = CLI command with no MCP tool (local concerns `init`/`sync`/`status`,
shortcuts `brief status`/`task assign`, authoring `method create`).

## Anti-patterns

- Tool/command with no `parity_manifest.json` entry → parity test fails.
- Query/validation logic in the adapter instead of `ops` → the other frontend
  can't reuse it and they drift.
- CLI resolving entities via local `.hamster` scans instead of an `ops`
  server-side lookup (the `task get` bug fixed in this PR).
- New web entity exposed to one frontend but not the other — reach parity or
  record the exemption.
