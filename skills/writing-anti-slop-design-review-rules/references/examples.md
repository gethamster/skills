# Examples: Writing Anti-Slop Design Review Rules

## Example: Solo Developer Building a SaaS Dashboard

**Scenario:**

A solo developer uses Cursor to generate a SaaS analytics dashboard. They have no design system and no design tokens. The AI-generated output uses p-8 (32px) uniformly on all cards, a single gray palette with blue-500 as the only accent, border-radius-lg (8px) on every element, and two font sizes (14px and 16px) throughout the entire interface.

**Walkthrough:**

md constraints and screenshots them. They annotate 14 anti-patterns across the three views, grouped into Spacing (5), Color (4), Typography (3), and Shape (2). For Spacing, they write: "[BLOCKER] Card components must not use uniform padding. Threshold: all four padding values are identical AND any value exceeds 24px.

" For Color, they write: "[BLOCKER] Page must use at least 2 hue families beyond gray. Threshold: all non-gray colors are variants of a single hue. " They test the 10-rule checklist against the same prompts. Cursor now generates cards with px-4 py-5, introduces an amber accent for warning states, and uses 3 font sizes.

Compliance hits 90% on the first generation. md.

## Example: Design Team at a B2B Startup with an Existing Design System

**Scenario:**

A 4-person product team uses Claude Code to scaffold new feature pages. They have a Tailwind-based design system with tokens for spacing, color, and typography. The AI output mostly follows their Tailwind config but defaults to the safest values: always space-4 or space-8, never space-3 or space-5, and ignores their secondary and tertiary brand colors entirely.

**Walkthrough:**

The design lead generates 5 feature pages and catalogs 18 anti-patterns. Because they have tokens, their rules reference config values directly. Example Spacing rule: "[WARNING] Components should use the full spacing scale. Threshold: a page uses fewer than 4 distinct spacing tokens from the project's Tailwind config.

Fix: Introduce at least space-3, space-5, or space-6 in addition to space-4 and space-8. " Example Color rule: "[BLOCKER] Feature pages must use at least one instance of the secondary brand color (brand-secondary-500 through brand-secondary-700). Threshold: zero instances of any secondary brand token on a page with more than 3 sections. " They assemble 15 rules, test across 5 component types, find 2 rules that conflict with their modal component's intentionally uniform padding, add exceptions, and ship the checklist.

After two sprints, the team observes that Claude Code's output requires 40% fewer design revision comments in pull requests.

## Example: Agency Producing Marketing Sites for Multiple Clients

**Scenario:**

A digital agency uses v0 to prototype marketing landing pages for clients. Each client has a different brand, so the anti-slop checklist needs to be portable across projects. The agency notices that v0 output converges on the same hero layout: centered text, large padding, rounded button, stock gradient background.

**Walkthrough:**

The agency's lead developer creates a base anti-slop checklist with 12 rules that are brand-agnostic. They avoid pixel values entirely and use relative constraints. Example Layout rule: "[BLOCKER] Hero sections must not center-align all text elements. Threshold: hero heading, subheading, and CTA are all text-center with no left-aligned or asymmetric element.

" Example Shape rule: "[WARNING] Button border-radius must vary by hierarchy level. Threshold: primary, secondary, and tertiary buttons all share the same border-radius value. -- customize: -->` comment where project-specific values can be inserted. When onboarding a new client, the developer copies the base checklist, fills in the customize comments with the client's brand tokens, and tests against 2 sample pages.

The base checklist catches 75% of slop patterns out of the box, and client-specific customizations bring coverage to ~90%. The agency reduces design iteration cycles from 4 rounds to 2 on average.

## Example: Open-Source Maintainer Publishing a Community SKILL.md

**Scenario:**

An open-source maintainer wants to publish a general-purpose anti-slop checklist that any developer can drop into their AI coding agent. The checklist must work without any design system, any specific Tailwind config, or any project context beyond "this is a web UI."

**Walkthrough:**

The maintainer collects anti-pattern screenshots from 20 different AI-generated pages shared in community forums and Discord servers. They identify the 8 most universal anti-patterns that appear in 75%+ of samples: uniform padding above 32px, single border-radius value across all elements, fewer than 3 font sizes, fewer than 2 font weights, monochrome palette (gray only), identical button styling for all hierarchy levels, no hover state differentiation, and centered-everything layouts. They write 8 blocker rules and 5 warning rules using only pixel thresholds and plain CSS property names (no framework-specific classes). -- if-using-tailwind: -->` annotation showing the Tailwind equivalent.

They test the checklist across Cursor, Claude Code, and Gemini CLI by generating a blog homepage, a pricing page, and a settings form with each agent. Rules that fail on one agent but pass on others are reworded for clarity. The final 13-rule checklist is published to GitHub with a CC0 license. Within a month, 200+ developers have forked the file and 15 have submitted pull requests adding framework-specific annotations for Chakra UI and Shadcn.
