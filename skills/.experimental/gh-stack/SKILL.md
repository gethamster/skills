---
name: gh-stack
description: "Stacked pull requests with GitHub's native gh-stack CLI: when to stack, how to build/submit/sync a stack, responding to mid-stack review feedback, and Hamster-specific rules (dev base, one migration per PR, merge commits). Use when a change is too big for one reviewable PR or when planning multi-wave delivery."
version: "1.0.0"
category: "Development"
---

# gh-stack — Stacked Pull Requests

Break one large change into a chain of small, dependent PRs — each reviewable on its own, all merging atomically. `gh stack` is GitHub's native stacked-PR tool (private preview): the bottom PR targets the trunk, each PR above targets the branch below it, and GitHub renders a stack map on every PR in the chain.

## When to Use

- A change would land as a >1k-line PR that decomposes into ordered layers (schema → services → UI → tests).
- Multi-wave plan/ship work where waves are independently reviewable but sequentially dependent.
- You want reviewers to see only the delta of one layer, not the cumulative diff.

**When NOT to stack**: independent changes (separate normal PRs), single-layer changes, or hotfixes. A stack whose PRs don't genuinely depend on each other is just review overhead.

## Prerequisites

- `gh` CLI ≥ 2.0 (authenticated) and git ≥ 2.20.
- Private-preview access enabled on the repo (sign-up: https://gh.io/stacksbeta). Exit code 9 = feature not enabled.
- Install: `gh extension install github/gh-stack`

## Core Workflow

```bash
gh stack init my-feature-schema     # first branch — bottoms onto the trunk
# ...code, git commit...
gh stack add my-feature-services    # next layer on top
# ...code, git commit...
gh stack add my-feature-ui
# ...code, git commit...
gh stack submit                     # push all branches + create linked PRs
gh stack view                       # branches, PR links, statuses
```

Fast loop (alias + auto-commit): `gh stack alias` once, then `gs add -Am "message"` per layer.

Merging: click **Merge on the highest PR you want to land** — it and every unmerged PR below merge together atomically. All PRs in the stack are evaluated against the bottom PR's merge requirements.

## Review Feedback Mid-Stack

Never patch a lower layer's problem from a higher branch. Go to the layer that owns it:

```bash
gh stack checkout my-feature-schema   # navigate to the flagged layer
# ...fix, git add, git commit...
gh stack rebase                       # cascade the fix through layers above
gh stack push                         # force-with-lease push of all branches
```

After lower PRs merge on GitHub: `gh stack sync` (fetch + reconcile + rebase remaining layers onto trunk + push + prune merged branches).

Conflicts during rebase: resolve markers, `git add`, then `gh stack rebase --continue` (or `--abort` to restore).

## Restructuring

`gh stack modify` (interactive TUI): reorder, fold (absorb a branch into a neighbor), drop, insert, rename. Needs a clean tree and linear history; it cannot split a branch. Stage with `Ctrl+S`, then `gh stack submit`. `?` shows keybindings.

## Hamster Repo Rules for Stacks

- **Base is `dev`** — the bottom PR targets `dev`, never `main`. Release PRs are not stacked.
- **One migration per PR still applies per layer.** A stack is the clean way to ship multi-migration work: one migration in the bottom (schema) PR only; upper layers carry no migrations. Migration timestamps must still sort after dev's latest — a long-lived stack is exposed to the same timestamp-ordering races as a long-lived branch, at every layer. Land stacks promptly.
- **Merge commits only** (squash/rebase disabled repo-wide). gh-stack's cascade handles this, but note the FAQ caveat: web-UI-triggered rebases don't sign commits; CLI rebases preserve your signing config.
- **Conventional Commit titles on every PR in the stack** — the title check runs per PR, not per stack.
- **CI runs per layer** against the merged ref; the bottom PR's requirements gate the whole stack's merge.
- Layer boundaries should follow the wave structure the plan already has: DB/schema → engine/services → web UI → docs/tests-polish.

## Escalation

- Exit code 3 = rebase conflict (resolve + `--continue`), 7 = rebase already in progress, 8 = stack locked (a merge is queued), 9 = preview not enabled on this repo.
- Divergent local/remote stacks: `gh stack sync` prompts (use remote / delete remote / cancel) — prefer *use remote* unless you know local is ahead.
- Full command table, flags, and exit codes: see [REFERENCE.md](./REFERENCE.md).
