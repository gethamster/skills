# Examples: Installing Taste Skill SKILL.md Files in AI Coding Agents

## A team using two agents

**Scenario:**

Illustrative scenario: half of a small frontend team uses Claude Code and the other half uses Cursor. They want both to follow the same Taste Skill rules without keeping two copies in sync.

**Walkthrough:**

They install `design-taste-frontend` with the skills CLI in project scope and check where the file landed. They choose `.agents/skills/` as the single source, since Cursor reads it, and add a symlink from `.claude/skills/` so Claude Code finds the same folder. In Claude Code, `/skills` lists it; in Cursor, typing a slash shows it. Both agents are given the same landing page prompt and both state a design read, which confirms the skill loaded. The team commits the folder and the symlink together.

## Installing the wrong name

**Scenario:**

Illustrative scenario: a developer runs the install command with `--skill "taste-skill"`, copying the folder name from the repository, and the CLI does not install the skill they expected.

**Walkthrough:**

They reread the README, which explains that `--skill` takes the install name from the frontmatter, not the folder name. The default skill's install name is `design-taste-frontend`. They rerun the command with that name, confirm the installed SKILL.md has the expected `name` field, and add a line to the team's contributing notes listing install names for the skills they use.

## Updating without losing local edits

**Scenario:**

Illustrative scenario: a team adapted its installed copy of the default skill months ago, replacing the font rules with their brand fonts and removing a serif ban. Upstream has since released changes they want.

**Walkthrough:**

They create a branch, rerun the install, and look at the diff. The update replaced their font rules with upstream text and brought in new sections. They restore their brand rules, keep the new sections that apply, and remove one new ban that conflicts with their design system. Before merging they run their standing test prompt and compare the output with the previous version. The merge commit lists what they kept, changed and dropped.
