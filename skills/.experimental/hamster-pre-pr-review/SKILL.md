---
name: hamster-pre-pr-review
description: "Self-review checklist run before opening a PR. Validates skill compliance, Supabase admin client usage, migration discipline, dead code, DRY, HA suitability, and NestJS DI hygiene. Apply right before `gh pr create`, after staging the final diff."
version: "1.0.0"
---

# Hamster Pre-PR Review

Self-audit pass to run **before** opening a PR. Catch the things a reviewer would otherwise flag, and fix them in the same branch.

## When to Use

- Right before running `gh pr create` (or pushing a branch you intend to PR).
- After fixup commits while the branch is still open and unsubmitted.
- When converting a draft PR to ready-for-review.

If the diff is **>1000 lines**, also run `/dev:pr-review` and merge its findings with this checklist.

## Core Workflow

1. Load and apply `.agents/skills/git-branch-safety/SKILL.md`. Confirm the work
  is on a feature branch, the push target and PR base/head are explicit, and
  any supplied Hamster brief is linked in the PR body. Require its suffix in
  the branch name only when the brief was available before the first push; a
  missing, declined, or late brief is not a blocker.
2. Get the full diff against the base branch:

```bash
git diff origin/dev...HEAD
   git diff origin/dev...HEAD --stat
```

3. Walk the checklist below against that diff.
4. **Fix every blocker yourself** in this branch before opening the PR. Don't defer to reviewer feedback.
5. For non-blockers (style nits, advisory improvements), either fix them or note them explicitly in the PR description so the reviewer knows they're acknowledged.
6. Open the PR only once the blocker list is empty.

## Checklist

### 1. Skill Compliance

For each app/area touched, validate against its skill:

| Area touched | Skill to validate against |
| --- | --- |
| `apps/ai/`, `apps/sync/`, `@kit/api-core` | `.agents/skills/hamster-nest-api/SKILL.md` |
| `apps/web/` server actions, route handlers, RSC | `.agents/skills/hamster-nextjs-api/SKILL.md` |
| React components (`apps/web/`, `packages/ui`) | `.agents/skills/vercel-react-best-practices/SKILL.md` |
| Clickable table rows (`<tr>`-based) | `.agents/skills/hamster-react/references/rules/cross-browser-events.md` — never stretched-`<Link>` overlay; use `<tr onClick>` + real `<Link>` in title cell |
| Schema, migrations, RLS, SQL functions | `.agents/skills/hamster-database/SKILL.md` |
| Context graph columns/tables/RPCs/indexes/RLS (`context_nodes`, `context_node_segments`, `context_edges`, `context_graph_*`, `search_fts_only`, `search_semantic_only`, `match_context_node_segments`, `search_with_neighbors`, `hybrid_search_context_node_segments`, `get_context_graph_neighborhood`, `idx_context_*`) | `.agents/skills/hamster-context-graph-perf/SKILL.md` — run full validation suite. Quick grep: `git diff origin/dev...HEAD -- '*.sql' \ |
| Any change writing/refactoring code | `.agents/skills/karpathy-guidelines/SKILL.md` |

If the diff touches a domain with a more specific skill (analytics, feature-flags, integrations, instrumentation, etc.), validate against that one too.

### 2. Supabase Admin Client (BLOCKER)

Cite: `.agents/skills/hamster-nest-api/references/rules/supabase-client.md`

`SupabaseAdminClient` is reserved for **Vault ops, cross-tenant bootstrap, and service-role-only RLS writes**. Everywhere else, use `AiUserSessionProvider` (or the equivalent server client in Next.js) so RLS is enforced and writes carry an audit trail.

A post-load `accountId` comparison is **not** sufficient justification — the read has already crossed the trust boundary. Manual auth must run **before** any privileged data access, and must cover **every** admin call site in the handler, not just one.

### 3. Database & Migrations (BLOCKER for multi-migration)

Cite: `.agents/skills/hamster-database/references/rules/migration-workflow.md`

- **One migration per PR.** Exception: a transaction must commit before the core migration can run. If `supabase:db:diff` produced a second timestamped file because of an iteration, fold the new changes into the original migration and delete the duplicate.
- Migrations created via `pnpm --filter web supabase:db:diff -f <name>`, never hand-copied.
- New tables have RLS enabled and policies covering both personal and team account paths where applicable.
- No SQL injection vectors (parameterized queries / `format()` with `%I`/`%L`).
- Generated types regenerated (`pnpm supabase:web:typegen`) and committed.

### 4. NestJS Module Hygiene (BLOCKER for forwardRef)

If a NestJS service is modified:

- **`forwardRef` is not used as a workaround for circular DI.** It's a code smell for poor module boundaries — refactor service location, extract a shared module, or split the service rather than reaching for `forwardRef`. Event emitters are also preferred over circular dependencies.
- Modules expose only what other modules need; no leaking internal services through `exports` unnecessarily.

### 5. Dead Code Sweep

Walk the diff and confirm:

- No unused exports, methods, types, or constants left behind.
- No commented-out code blocks.
- No dangling SQL: removed columns/tables aren't still referenced in queries, views, functions, triggers, or RLS policies.
- No orphan files (e.g., a removed feature's helper module).
- Removed feature flags pruned from `feature-flags.config.ts` and call sites.

`grep` the codebase for every removed/renamed symbol before declaring it dead.

### 6. DRY & Library Reuse

- Flag duplication of logic that already exists in `@kit/*`. Reuse before reinventing.
- Large hand-rolled blocks that an existing dependency would replace cleanly:
- Date/time math → **`date-fns`**
- Deep equality / cloning / object utilities → **`radash`** (already present in `apps/ai`; preferred over lodash)
- Schema validation → **`zod`**
- HTTP clients → existing `@kit/*` wrappers
- Logging → **`@kit/shared/logger`**

If the duplication is tiny (≤3 similar lines), leave it — premature abstraction is worse.

### 7. High-Availability Suitability

Flag patterns that break in a multi-instance deployment:

- **In-memory caches / Maps / Sets** holding state that other instances need to see → extract to Redis (the codebase has Redis infra; use it).
- **In-process timers / `setInterval`** for scheduled work → use BullMQ.
- **In-process locks / mutexes** → use the distributed locking helpers in `@kit/api-core`.
- **Module-scoped mutable state** in serverless/Next.js paths → it won't survive cold starts; move to durable storage.

Apply judgment: per-request memoization inside a handler is fine, in-memory rate limiting across requests is not.

### 8. Karpathy Guidelines

Cite: `.agents/skills/karpathy-guidelines/SKILL.md`

- No speculative abstraction (designing for hypothetical future requirements).
- No defensive error handling for impossible scenarios.
- Comments only where the **why** is non-obvious — no narration of what the code does.
- Surgical changes — no drive-by refactors mixed into a feature/fix PR.

### 9. Tests & Quality Gates

- New non-trivial logic has tests.
- Critical auth/data/payment paths must have coverage — if they don't and this PR adds untested surface there, add tests before opening.
- `pnpm typecheck && pnpm lint && pnpm test` passes locally (or via `pnpm workflow:pre-pr`).

## Severity Triage

When walking the checklist, classify each finding:

| Severity | Examples | Action |
| --- | --- | --- |
| **Blocker** | Admin client used without manual auth; multi-migration without transaction dependency; broken/missing RLS on new tables; secrets in code; SQL injection; XSS; `forwardRef` workaround; `--no-verify` to skip a real failure | **Fix before opening PR** |
| **Should-fix** | Dead code; DRY violations against `@kit/*`; in-memory state that should be Redis; missing tests on non-critical paths; manual logic replaceable by an existing dependency | **Fix in this branch** if cheap; otherwise note in PR description |
| **Nit** | Naming, comment phrasing, minor style | **Just fix it** — don't waste a reviewer cycle |

When in doubt, prefer fixing over deferring. The cost of a fixup commit is lower than a review round-trip.

## Output

After running the checklist, before `gh pr create`, summarise to the user:

- Findings grouped by severity.
- What was auto-fixed vs. what's outstanding.
- A one-line confirmation that the PR is ready to open, or a list of blockers still outstanding.

Do not open the PR while blockers remain.
