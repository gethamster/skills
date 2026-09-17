---
name: git-branch-safety
description: "Create and publish safe feature branches and pull requests, including Hamster brief-aware branch names and PR links. Use for branch creation, any git commit/push, PR creation, workflow dispatch, or CI debugging."
---

# Git Branch and Pull Request Safety

## Goal

Keep work isolated from shared branches, make feature branches traceable to
Hamster briefs, and carry that context into pull requests.

## Trigger Conditions

Apply this skill whenever a task includes any of:

- Creating or naming a branch with `git switch -c` or `git checkout -b`
- `git commit`, `git push`, `git revert`, `git cherry-pick`, `git merge`, or `git rebase`
- Creating or updating a pull request
- `gh workflow run`, `gh run watch`, or CI debugging that might involve pushes
- Requests to "just push this quickly" or "test directly on dev"

## Hard Rules

1. **Never push feature, debug, or refactor work directly to `dev` or `main`.**
  A user request to push directly does not override the repository's branch
  policy. Release hotfixes must follow the explicit release workflow.
2. **Create a feature branch before the first commit or push.**
3. **Verify branch context before every push**:

- `git branch --show-current`
- `git status -sb`

4. **Use an explicit push destination**:

- `git push origin HEAD:<feature-branch>`

5. **Dispatch workflows against the feature branch**:

- `gh workflow run <workflow> --ref <feature-branch>`

## Name the Branch

Use a conventional work-type prefix and a short kebab-case topic:

```text
<type>/<topic>
```

Choose the narrowest accurate type, such as `fix`, `feat`, `refactor`, `chore`,
`docs`, or `test`.

### Hamster brief suffix

Before creating the branch, check the conversation for a Hamster brief URL. A
brief adds traceability but is never a gate. If no link is present and the work
may benefit from a brief:

1. Ask once for the optional brief link. In the same question, offer to create
  a brief through the available Hamster MCP or Hamster CLI, so the user does
  not need to create one first.
2. If the user declines, says to proceed without a brief, or no brief is
  available, drop the brief path and continue. Do not ask again, block the
  branch or pull request, add a suffix, or insert a brief placeholder.

When a brief URL is provided:

1. Preserve the exact supplied URL for the pull request.
2. Parse its URL pathname, ignore the query and fragment, and discard trailing
  slashes.
3. Require a `/briefs/<uuid>` route whose final non-empty pathname segment is a
  valid UUID. If validation fails, ask for the Hamster brief URL instead of
  using the value as a branch suffix.
4. Append the UUID's final hyphen-delimited segment to the branch topic.

```text
Brief:  https://tux.tryhamster.com/home/hamster/briefs/f8294d1b-d72e-4d61-aa2d-9b034c3ad9e7
Branch: fix/chat-code-theme-leak-9b034c3ad9e7
```

Do not fabricate a brief ID or infer one from an unrelated blueprint,
initiative, task, or document URL. If the branch already contains the exact
brief suffix, do not append it again.

If the brief arrives after creating an unpushed branch, rename the branch
before the first push. Do not rewrite a published branch solely to add the
suffix unless the user explicitly requests the disruption.

## Link the Brief in the Pull Request

When a brief URL was provided, add it to the pull request body:

```markdown
## Hamster brief

- [Brief title](https://tux.tryhamster.com/home/hamster/briefs/<brief-id>)
```

Use the real title when it is available from the supplied context or tools;
otherwise use `Hamster brief`. Preserve the exact supplied URL. If no brief URL
was provided, omit this section rather than inserting a placeholder.

Before opening a pull request:

1. Load and apply `hamster-pre-pr-review`.
2. Make the base and head branches explicit.
3. Apply requested assignees and reviewers, resolving GitHub identities safely.
4. Verify the created pull request has the intended base, brief link,
  assignees, and review requests.

## Push Gate Checklist

- [ ] Current branch is neither `dev` nor `main`
- [ ] Branch name uses an accurate type and concise topic
- [ ] Provided Hamster brief is represented by the final UUID segment
- [ ] Branch tracks the intended remote feature branch
- [ ] Push command uses `HEAD:<feature-branch>`
- [ ] Workflow runs use `--ref <feature-branch>`
- [ ] Pull request body includes the provided Hamster brief URL

## If an Accidental Push Happens

1. Stop immediately.
2. Report what happened: branch, commits, and side effects.
3. Do not apply cleanup writes to shared branches without explicit user
  approval.
4. Preserve the work on a feature branch and await the rollback decision.

## Recommended Flow

```bash
# 1) Confirm context
git branch --show-current
git status -sb

# 2) Create a brief-aware feature branch when a brief was provided
git switch -c fix/chat-code-theme-leak-9b034c3ad9e7 origin/dev

# 3) Push explicitly to the matching remote branch
git push -u origin HEAD:fix/chat-code-theme-leak-9b034c3ad9e7

# 4) Run CI only on that branch
gh workflow run 22-build-local-containers.yml \
  --ref fix/chat-code-theme-leak-9b034c3ad9e7
```
