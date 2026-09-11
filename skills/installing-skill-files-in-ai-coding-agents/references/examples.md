# Examples: Installing SKILL.md Files in AI Coding Agents

## Example: Solo developer installing taste skill claude files in Cursor for a Next.js SaaS dashboard

**Scenario:**

A solo developer is building a SaaS analytics dashboard in Next.js. They use Cursor as their primary coding agent. The dashboard has about 15 page-level components, and the AI-generated UI looks flat and generic with inconsistent spacing. They have 20 minutes to install taste rules and want to see immediate improvement.

**Walkthrough:**

cursor/rules/` in the project root. md files from the Taste Skill repository: typography, spacing, and layout-density. cursor/rules/`. " They remove the spacing-related line from that file to avoid conflict.

" Cursor responds with a summary of the three taste files. " The output uses a clear type scale (24px heading, 14px labels, 32px metric values), 12px internal padding instead of the usual 24px, and a tight 8px gap between the metric items. The card looks noticeably denser and more intentional than previous output.

## Example: Engineering team installing taste rules in Claude Code for a B2B component library

**Scenario:**

A four-person frontend team maintains a shared React component library used across three B2B products. They use Claude Code for rapid component scaffolding. The team lead wants all developers to produce components with consistent design quality when using the agent. The existing design system has custom spacing tokens defined in a CSS custom properties file.

**Walkthrough:**

claude/` directory in the component library repository root. md files but customize the spacing file before installing. The original file specifies a 4px base unit, but the team's design system uses a 6px base unit with tokens named `--space-1` through `--space-10`. css.

--space-2 (12px) for tight component padding. --space-3 (18px) for standard component padding. md`. md` at the project root that says: "This is a shared component library.

claude/ before generating any component code. " They open Claude Code, run a verification prompt, and Claude accurately summarizes all five rule files plus the token reference. They generate a test DataTable component. The output uses the team's spacing tokens, applies a type scale consistent with the existing components, and omits entrance animations on table rows (per the motion rules).

They commit everything, open a PR, and add installation verification to the team's onboarding checklist.

## Example: Designer-developer hybrid using v0 for rapid prototyping with taste constraints

**Scenario:**

A product designer who writes frontend code uses v0 by Vercel to quickly prototype landing page sections. They want v0's output to match their portfolio's visual standard, which emphasizes tight spacing, a 1.2 type scale, and no decorative shadows. v0 does not have a file system, so installation requires a different approach.

**Walkthrough:**

The designer opens their v0 project and navigates to the project-level instructions panel (not the per-prompt chat). md files, typography and spacing, directly into this panel, separated by markdown headings. They add a third custom section: "Do not use box-shadow for decorative purposes. Use border (1px solid) for card boundaries.

" They save the project instructions. " The output uses a clear type hierarchy (48px headline, 20px subhead, 16px bullets), tight vertical spacing (16px between headline and subhead, 24px before the bullets), and no shadow on the button. The feature bullets use 8px gap between icon and text. The designer compares this to a v0 generation from a project without instructions: that version used 64px of vertical padding, a drop shadow on the button, and identical font sizes for subhead and bullets.

The taste-constrained version looks significantly more polished. Because v0 does not support file-based instructions across sessions, the designer saves the instruction text in a local markdown file for easy re-pasting when starting new v0 projects.

## Example: Open-source maintainer configuring Codex and Gemini CLI on the same monorepo

**Scenario:**

An open-source maintainer runs a design system monorepo with packages for React, Vue, and Svelte components. Contributors use a mix of Codex and Gemini CLI. The maintainer wants taste rules to apply regardless of which agent a contributor uses. The monorepo uses pnpm workspaces with packages in a `packages/` directory.

**Walkthrough:**

md` file at the root for Gemini CLI users. md files (typography, spacing, layout-density) under clearly marked markdown headings. md` inside `packages/react/` that adds React-specific rules: "Use CSS custom properties for all spacing and typography values. Do not use inline style objects for spacing.

md` files with framework-specific rules. The maintainer tests both agents. " The output uses the global taste rules for spacing and typography plus the React-specific token rules. " The output follows the global taste rules (tight padding, type scale, no decorative shadows).
