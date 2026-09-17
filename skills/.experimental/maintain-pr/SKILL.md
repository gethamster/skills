---
name: maintain-pr
description: "Maintain an open pull request in a fast-moving repository. Keeps the branch up to date, fixes CI failures, responds to review comments, and enforces code-quality gates (lint, typecheck, format, lockfile). Use when asked to \\\"maintain\\\", \\\"fix\\\", \\\"update\\\", or \\\"tend to\\\" a PR, or when a PR needs attention."
version: "1.0.0"
metadata:
  category: "Development"
---

You are a pull-request maintenance specialist. Your job is to take an open PR
from its current state to "ready to merge" by resolving every issue that blocks
it. Work through the checklist below **in order** — each phase may reveal work
for the next.

---

## Phase 0 — Gather Context

1. **Identify the PR.**
  If the user gave a PR number, use it. Otherwise detect the current branch
  and find its open PR:

```bash
gh pr view --json number,title,baseRefName,headRefName,state,mergeable,mergeStateStatus,statusCheckRollup,reviewDecision,url
```

2. **Record key facts** you will reference throughout:

- PR number, head branch, base branch (usually `dev`).
- Current merge-state (`BEHIND`, `DIRTY`, `BLOCKED`, `CLEAN`, …).
- List of failing / pending status checks.
- Review decision (`APPROVED`, `CHANGES_REQUESTED`, `REVIEW_REQUIRED`).

3. **Fetch review threads** so you can address them later:

```bash
gh pr view <number> --json reviews,comments,reviewRequests
   gh api graphql -f query='
     query($owner:String!,$repo:String!,$pr:Int!) {
       repository(owner:$owner,name:$repo) {
         pullRequest(number:$pr) {
           reviewThreads(first:100) {
             nodes {
               isResolved
               comments(first:20) {
                 nodes { author{login} body path position originalPosition diffHunk }
               }
             }
           }
         }
       }
     }' -f owner=OWNER -f repo=REPO -F pr=<number>
```

   Replace `OWNER`, `REPO`, and `<number>` with the real values.

---

## Phase 1 — Up To Date (rebase / merge)

A PR that is behind its base branch will fail CI or produce merge conflicts.
Fix this **first** so every later step runs against the true merged state.

### Decision: Rebase vs Merge

| Condition | Action |
| --- | --- |
| Linear history preferred & no shared branch | `git fetch origin && git rebase origin/<base>` |
| Merge commits are acceptable / branch is shared | `git fetch origin && git merge origin/<base>` |
| Conflicts exist | Resolve manually, then continue rebase/merge |

### Steps

```bash
# Ensure we are on the PR branch
git checkout <head-branch>

# Preferred: rebase onto base
git fetch origin
git rebase origin/<base-branch>

# If conflicts arise, resolve them file-by-file, then:
git add <resolved-files>
git rebase --continue

# Push the updated branch (force-with-lease is safe for rebased branches)
git push --force-with-lease origin <head-branch>
```

> **After rebase/merge, re-sign all commits:**
> 
> ```bash
> git rebase --exec 'git commit --amend --no-edit -S' origin/<base-branch>
> ```

If the merge is clean, move on. If new conflicts surfaced, resolve them now —
you will need the code to compile for the next phases.

---

## Phase 2 — Passing CI

Diagnose and fix every failing status check. The project's CI pipeline has the
following required checks (see `.github/workflows/`):

| Workflow | What it checks | Local equivalent |
| --- | --- | --- |
| **01 — Lint** | `pnpm format`, `pnpm lint`, `pnpm typecheck` | same commands |
| **02 — Test** | Unit tests, build, sync tests, schema tests, Go tests | `pnpm test`, `pnpm build` |
| **03 — PR Commits** | Conventional-commit format on title + all commits | manual review |
| **04 — Env Vars** | 1Password vault references in `.env.1p` files | `pnpm get-env` |
| **05 — Migration Order** | New migration timestamps > latest on base branch | check filenames |
| **06 — CLI** | Go build for `apps/cli` | `go build ./...` in `apps/cli` |
| **07 — MCP** | Go vet/test for `apps/mcp` | `go vet ./...` in `apps/mcp` |

### Diagnosis Workflow

1. **List failing checks:**

```bash
gh pr checks <number> --fail
```

2. **Fetch logs for a specific failed run:**

```bash
gh run view <run-id> --log-failed
```

3. **Reproduce locally** before pushing a fix:

```bash
# TypeScript quality gates
   pnpm typecheck        # type errors
   pnpm lint             # oxlint + manypkg
   pnpm format           # oxfmt formatting
   pnpm test             # vitest unit tests

   # Full pre-PR sweep (runs all of the above)
   pnpm workflow:pre-pr

   # Go
   (cd apps/horde && go build ./...)
   (cd apps/mcp && go vet ./...)
```

### Common Failure Patterns & Fixes

| Failure | Typical fix |
| --- | --- |
| **Format** | `pnpm format:fix` then commit |
| **Lint** | `pnpm lint:fix` for auto-fixable; manual for the rest |
| **Typecheck** | Read the `tsc` error, fix the type issue, `pnpm typecheck` again |
| **Unit test** | Read failure output, fix the code or update the test |
| **Build** | Often a type error or missing env var — check error output |
| **Conventional commits** | Fix commit messages: `git rebase -x 'git commit --amend --no-edit -S' origin/<base>` or rename the PR title |
| **Migration order** | Rename migration file with a fresh UTC timestamp: `git mv <old> apps/web/supabase/migrations/$(date -u +%Y%m%d%H%M%S)_<name>.sql` |
| **Env var check** | Ensure `.env.1p` references valid 1Password items |
| **Lock out of sync** | `pnpm install` to regenerate `pnpm-lock.yaml`, then commit |

### After Fixing

```bash
git add -A
git commit -S -m "fix(<scope>): <describe what was fixed>"
git push --force-with-lease origin <head-branch>
```

Wait for CI to re-run. Re-check:

```bash
gh pr checks <number> --watch
```

---

## Phase 3 — Responsive (review comments)

Address every **unresolved review thread**. Work through them one by one.

### For each unresolved thread:

1. **Read the comment** — understand what the reviewer is asking.
2. **Read the referenced code** — use the file path and diff hunk from the
  thread to find the exact location.
3. **Investigate** — check related code, tests, types, and usages to
  understand the full picture.
4. **Propose or apply a fix:**

- If the fix is clear and unambiguous, implement it directly.
- If there is genuine ambiguity or a design disagreement, explain your
  reasoning and ask the user what they prefer.

5. **Commit the fix** with a descriptive conventional-commit message:

```bash
git commit -S -m "fix(<scope>): address review — <what changed>"
```

> **Do not** use generic messages like "address review comments" or "PR
> feedback". Each commit should describe the actual change.

After addressing all threads, push and re-verify CI:

```bash
git push --force-with-lease origin <head-branch>
```

---

## Phase 4 — Tidy (quality gates)

Even after CI is green, do a final cleanliness pass to catch anything CI
might miss or that was introduced while fixing earlier phases.

### Checklist

| Check | Command | Auto-fix |
| --- | --- | --- |
| Typecheck | `pnpm typecheck` | — (manual) |
| Lint | `pnpm lint` | `pnpm lint:fix` |
| Format | `pnpm format` | `pnpm format:fix` |
| Tests | `pnpm test` | — (manual) |
| Lock integrity | `pnpm install --frozen-lockfile` | `pnpm install` if stale |

### Dependency Lock

If **any** `package.json` was changed (new deps, version bumps, removals),
the lockfile must be updated:

```bash
pnpm install
git add pnpm-lock.yaml
git commit -S -m "chore(deps): update pnpm lockfile"
```

### Supabase Types

If **any** migration files were added or changed, regenerate types:

```bash
pnpm supabase:web:reset
pnpm supabase:web:typegen
pnpm typecheck
```

### Full Pre-PR Sweep

Run the complete quality gate before the final push:

```bash
pnpm workflow:pre-pr
```

If everything passes, push:

```bash
git push --force-with-lease origin <head-branch>
```

---

## Phase 5 — Final Verification

1. Confirm CI is green:

```bash
gh pr checks <number> --watch
```

2. Confirm the branch is up to date with base:

```bash
gh pr view <number> --json mergeStateStatus -q '.mergeStateStatus'
```

   Expected: `CLEAN` or `HAS_HOOKS`.

3. Summarize what you did — list each change, commit, and the phase it
  belongs to.

---

## Rules

- **All commits MUST be GPG-signed (**`**-S**`**) and use conventional commit format.**
- **Never force-push to** `**dev**` **or** `**main**`**.** Only force-push the feature branch.
- **Never push without verifying locally first.** Always run `pnpm workflow:pre-pr` or the relevant subset before pushing.
- **One logical change per commit.** Don't lump unrelated fixes together.
- **Prefer rebase** for keeping up to date unless the branch is shared with other contributors.
- After rebase, re-sign all commits: `git rebase --exec 'git commit --amend --no-edit -S' origin/<base>`.
- If a fix is ambiguous or involves a design decision, ask the user instead of guessing.
