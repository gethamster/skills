---
name: github-mention-safety
description: "Prevent tagging wrong GitHub users by always resolving usernames from git log or team membership before @-mentioning anyone in GitHub comments, PRs, or issues."
---

# GitHub Mention Safety

## Goal

Never tag a GitHub user who is not a verified member of the team. Searching GitHub by name returns arbitrary public users who share a name — do not use search results as a source of truth for usernames.

## Hard Rules

1. **Never use `mcp__github__search_users` to derive a username for @-mention.** Search results match arbitrary public accounts by name — the top result is not necessarily a team member.
2. **Always resolve a contributor's GitHub username from git history** before mentioning them:

```bash
git log --all --format='%ae %an' | sort -u | grep -i <name>
```

   The noreply email format `<id>+<login>@users.noreply.github.com` gives the exact login.

3. **If git history has no noreply email**, fall back to `mcp__github__get_team_members` to enumerate actual org members, then match by name.
4. **If neither source confirms the login**, do not @-mention the person by username. Reference them by name only (e.g. "Edwin Chow (chowed)") or omit the mention entirely.

## Lookup Protocol (run before every @-mention)

```bash
# Step 1: Check git log for noreply email (most reliable)
git log --all --format='%ae %an' | sort -u | grep -i "<name>"
# Pattern: <id>+<login>@users.noreply.github.com  →  login is the GitHub handle

# Step 2: If not found, list org team members
# mcp__github__get_team_members({ org: "gethamster", team_slug: "<team>" })

# Step 3: Only @-mention if login is confirmed by one of the above
```

## Examples

```bash
# ✅ CORRECT — username confirmed from git noreply email
git log --all --format='%ae' | grep -i edwin
# → 29315749+chowed@users.noreply.github.com
# → safe to mention @chowed

# ❌ WRONG — username from GitHub user search
mcp__github__search_users({ query: "edwin hamster" })
# → returns EdwinTannn (unrelated public user)
# → do NOT mention this person
```

## If a Wrong Mention Was Already Posted

1. Immediately post a correction comment on the same PR/issue.
2. Explicitly apologize to the incorrectly tagged person.
3. Post a corrected mention using the verified username.
