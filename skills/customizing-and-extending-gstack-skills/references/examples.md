# Examples: Customizing and Extending gstack

## Solving three complaints without a fork

**Scenario:**

Illustrative scenario: after a month with gstack, a team lists three complaints. The planning skills keep asking whether to add analytics events, which the team always declines. An internal script that resets staging data has twice run by accident. Designers never touch this backend repository, yet the design pre-pass runs anyway.

**Walkthrough:**

The lead handles all three through configuration. `/plan-tune` marks the analytics question as never-ask. The name of the reset script goes into the per-project careful patterns file, so `/careful` now warns before it runs. `gstack-config set design_detector off` turns off the design pre-pass.

The lead writes the three settings into the project's CLAUDE.md so every teammate applies them, and nobody needs to fork anything.

## Adding a migration review skill beside gstack

**Scenario:**

Illustrative scenario: a team's database migrations follow house rules, such as backfilling in batches and never renaming a column in one step, that no gstack skill knows about.

**Walkthrough:**

The team writes a skill in the repository's `.claude/skills/` directory under a team prefix, so the name cannot collide with gstack's. Its description says to use it whenever a change adds or edits a migration file, and its instructions list the house rules with a short example of each.

The instructions tell it to run after `/plan-eng-review` and to read the engineering test plan. On the next migration, the skill flags a one-step column rename, and the team adjusts the plan before any code is written. The skill is reviewed and versioned like the rest of the code.

## Changing a gstack skill in a fork and upstreaming it

**Scenario:**

Illustrative scenario: a developer finds that a gstack skill's instructions assume a branch named main, while their repositories use a different default branch.

**Walkthrough:**

They fork gstack, clone it fully, run `bun install` and `bin/dev-setup`, and find the relevant `.tmpl` template. The CONTRIBUTING guide points them to the repository's template-writing guidance on dynamic branch detection, so they use that instead of a hard-coded name, then run `bun run gen:skill-docs` and `bun run skill:check`.

They symlink the fork into the project where the problem appeared, rerun setup and repeat the task, which now works. Because the fix helps anyone with a non-standard default branch, they open a pull request upstream instead of keeping a private fork.
