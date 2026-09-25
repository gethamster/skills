# Examples: Authoring Portable SKILL.md Files for Design Systems

## A product team with its own component library

**Scenario:**

Illustrative scenario: a team maintains an internal React component library with tokens for color, spacing and radius. Agents building new screens keep writing raw buttons and cards with hardcoded colors instead of using the library.

**Walkthrough:**

The team records baseline failures on three prompts: a settings page, a signup form and a card list. Every output recreates components that exist in the library. They write a skill whose description names the library and says to use it for any page or component work in the repository. The body maps common needs to library components with import paths, lists tokens by role, bans raw color values, and ends with a checklist. On the same prompts the agent now imports library components, and the remaining misses are two tokens the skill described vaguely, which they rename to match the token files exactly.

## Adapting Taste Skill instead of starting from scratch

**Scenario:**

Illustrative scenario: a marketing team likes the Taste Skill default's structure but uses its own brand fonts, one accent color and a serif display face, which the default discourages.

**Walkthrough:**

They copy the default skill into their repository and change the name and description so it does not collide with the upstream install. They replace the typography and color sections with their brand rules, keep the brief inference, dials, motion rules and pre-flight checklist, and remove bans that conflict with the brand. They add a line to the top of the file naming the upstream version they started from. Their regression prompts show the agent using the serif display face and the single accent while keeping the upstream layout and motion discipline.

## A description that did not trigger

**Scenario:**

Illustrative scenario: a newly written design-system skill works when invoked by name but is ignored when a developer simply asks the agent to "add a pricing section."

**Walkthrough:**

The description reads "Design guidelines for our app." The team rewrites it in third person with the design system's name and the tasks it covers: pages, sections, components and styling changes. They test with several requests that should trigger it and a few that should not, such as a database migration. The rewritten description triggers on the pricing request and stays quiet on the migration.
