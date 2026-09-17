---
name: release-notes
description: "Generate user-facing release notes for Hamster Studio. Analyzes commits and code changes between versions to produce clear, technical release notes."
version: "1.1.0"
---

# Release Notes Generation

## Overview

Generate release notes that tell users exactly what changed and why they should care. Analyze the actual code changes, not just commit messages, to understand what shipped.

## When to Use

This skill is triggered by the CI workflow after a new version is tagged. It receives:

- The new version tag (e.g., `v0.29.0`)
- The previous version tag for comparison

## Process

### 1. Gather Context

```bash
# Get commits between versions
git log --format="- %s (%h)" $PREVIOUS_TAG..$NEW_TAG

# Get changed files
git diff --stat $PREVIOUS_TAG..$NEW_TAG

# Get detailed changes for key areas
git diff $PREVIOUS_TAG..$NEW_TAG -- apps/web/app apps/ai/src packages/
```

### 2. Analyze Changes

For each significant change:

1. Read the modified files to understand what actually changed
2. Identify user-facing impact (new feature, bug fix, behavior change)
3. Group related changes together

Focus areas:

- `apps/web/app/` - New pages, UI changes, user flows
- `apps/ai/src/` - API changes, new endpoints, AI features
- `packages/` - Shared functionality changes
- `apps/web/supabase/schemas/` - Data model changes

### 3. Write Release Notes

Follow the format in `references/writing-guidelines.md`. Key principles:

- **Summary**: 2-3 sentences stating what shipped. No hype.
- **Sections**: Group into 3-5 categories with clear headings
- **Technical audience**: They want specifics, not marketing language
- **User impact**: Explain what users can now do, not implementation details

### 4. Output

Output the release notes as markdown that will be set as the GitHub Release body.

## Output Format

```markdown
# Release X.Y.Z

## Summary

[2-3 sentences stating exactly what shipped]

## [Category 1]

[Description of changes]

## [Category 2]

[Description of changes]

## Bug Fixes

- [Fix 1]
- [Fix 2]
```

## Quality Checklist

Before finalizing:

- [ ] Summary captures the release's main value
- [ ] No marketing fluff or banned phrases
- [ ] Technical details are accurate (verified against code)
- [ ] User impact is clear for each change
- [ ] Internal refactors excluded unless they affect UX
- [ ] No PR links or commit hashes in output

## References

- `references/writing-guidelines.md` - Format rules and banned phrases
- `references/examples.md` - Example release notes from previous versions
