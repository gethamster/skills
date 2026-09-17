# gh-stack Reference

Full command surface for GitHub's stacked-PR CLI (`gh stack`). Docs: https://github.github.com/gh-stack/ (private preview; sign-up https://gh.io/stacksbeta).

## Installation

```bash
gh extension install github/gh-stack   # requires gh >= 2.0, uses existing gh auth
gh skill install github/gh-stack       # optional: GitHub's official agent skill
gh stack alias                         # create shorthand alias (default: gs)
```

## Stack Management

| Command | Purpose |
|---|---|
| `gh stack init [branches...]` | Initialize a new stack in the current repository |
| `gh stack add [branch]` | Add a new branch on top of the current stack (`-Am "msg"` stages + commits) |
| `gh stack view [flags]` | View the current stack: branches, PR links, statuses, recent commits |
| `gh stack checkout [stack-number\|pr-number\|url\|branch]` | Check out a stack (or a specific layer) by identifier |
| `gh stack modify [flags]` | Interactive TUI to restructure the stack (see below) |
| `gh stack unstack [stack-number]` | Remove the stack from tracking and unstack on GitHub |

## Remote Operations

| Command | Purpose |
|---|---|
| `gh stack submit [flags]` | Push all branches and create/update PRs + the stack on GitHub |
| `gh stack push [flags]` | Push all branches in the stack (uses `--force-with-lease`) |
| `gh stack rebase [branch]` | Pull from remote and cascade-rebase across the stack (`--continue` / `--abort`) |
| `gh stack sync [flags]` | Fetch, reconcile remote↔local stack, fast-forward trunk, rebase remaining layers, push, sync PR state, offer to prune merged branches |
| `gh stack link [flags] <args...>` | Link existing PRs into a stack without local tracking |

## Navigation

| Command | Purpose |
|---|---|
| `gh stack switch` | Interactively switch to another branch in the stack |
| `gh stack up [n]` / `gh stack down [n]` | Move n layers toward the top / toward the trunk |
| `gh stack top` / `gh stack bottom` | Jump to the topmost / bottommost branch |
| `gh stack trunk` | Jump to the trunk branch |

## Utilities

| Command | Purpose |
|---|---|
| `gh stack alias [name]` | Create a command alias (default `gs`) |
| `gh stack feedback [title]` | File feedback as a GitHub Discussion |

## `gh stack modify` Operations

Interactive TUI (press `?` for keybindings, `Ctrl+S` to stage the plan, then `gh stack submit`):

- **Reorder** — move branches up/down with cascading rebases
- **Fold** — absorb a branch's commits into a neighbor (downward toward trunk or upward)
- **Drop** — remove a branch and its commits from the stack
- **Insert** — add a new empty branch at a chosen position
- **Rename** — rename a branch locally + in stack metadata
- Cannot **split** a branch into multiple branches

Preconditions: clean working tree, no active rebase or queued merge, linear history (`gh stack rebase` first if needed). Merged branches are locked. Conflicts: `gh stack modify --continue` / `--abort`.

## Merge Semantics

- Merging any PR merges it **and every unmerged PR below it** in one atomic operation (direct merge or merge queue).
- All PRs in the stack are evaluated against the **bottom PR's** merge requirements (rules + CI).
- After a merge, GitHub cascade-rebases the remaining layers; `gh stack sync` reconciles locally.
- Squash merges are handled safely by the cascade.

## Environment & Exit Codes

- `GH_STACK_THEME` = `auto` | `light` | `dark`

| Code | Meaning |
|---|---|
| 0 | Success |
| 1 | Generic error |
| 2 | Stack not found |
| 3 | Rebase conflict |
| 4 | GitHub API failure |
| 5 | Invalid arguments |
| 6 | Disambiguation needed |
| 7 | Rebase in progress |
| 8 | Stack locked |
| 9 | Feature not enabled |

## Gotchas (from the official FAQ/guides)

- **Signing**: CLI rebases preserve your commit-signing config; rebases triggered from the web UI produce unsigned commits.
- **Fix at the owning layer**: never work around a lower layer's bug from a higher branch — checkout down, fix, `gh stack rebase`.
- **Divergent stacks**: when local and remote disagree, `gh stack sync` prompts to use remote, delete remote, or cancel.
