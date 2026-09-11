# Examples: Authoring Portable SKILL.md Files for Design Systems

## Example: Early-stage startup with a Tailwind-based design system

**Scenario:**

A 4-person startup uses Tailwind CSS with a customized config (12 brand colors, a 4-step spacing scale, Inter font). They have no Figma tokens file and no formal design system documentation. Two engineers use Cursor and one uses Claude Code. AI-generated UI looks different depending on which engineer prompts it.

**Walkthrough:**

The team's lead engineer opens the Tailwind config and extracts all customized values: 12 colors with hex codes, spacing values (4, 8, 16, 24, 32, 48, 64px), border-radius options (4, 8, 12px), and the single font family (Inter) with four weights (400, 500, 600, 700). md under `## Design Tokens` with subsections for each category. Under `## Component Rules`, she documents the five components they use most: button (primary, secondary, ghost variants with exact padding and colors), input (height: 40px, border: 1px solid neutral-300, focus ring: primary-500), card (padding: 24px, radius: 12px, border: 1px neutral-200), badge (padding: 2px 8px, radius: 9999px, font-size: 12px), and nav-item (padding: 8px 12px, font-weight: 500 active, 400 default). 05)`, more than 2 font weights per component, centering page-level content without a max-width container, and icons larger than 20px in inline contexts.

The file is 280 lines. ' Both outputs use the correct color palette, the correct spacing scale, and the correct button variant. One output uses an unlisted shadow on the avatar, which she adds to the anti-pattern list. The revised file is 295 lines and passes both agents cleanly.

## Example: Mid-size B2B SaaS with a mature Figma-based design system

**Scenario:**

A 30-person product team has a comprehensive design system in Figma with 200+ components, a JSON token file exported via Style Dictionary, and a Storybook library. They are adopting Cursor across the engineering team and want AI-generated code to match the existing system. The design system lead is concerned about maintaining consistency across 12 engineers.

**Walkthrough:**

md far exceeding the 800-line limit. md` (aesthetic rules, anti-patterns, quality checklist: ~150 lines). Each file is self-contained with its own H1, summary paragraph, and priority ranking. md`, inlining every resolved value even though the JSON file exists in the repo.

She uses the semantic-intent pattern: 'surface-primary: #FFFFFF (main content area background, card surfaces, modal backgrounds)' rather than just the hex value. md`, she focuses on the 15 components that appear in 80% of screens: Button, Input, Select, Card, Table, Modal, Badge, Avatar, Tooltip, Alert, Sidebar, Header, Breadcrumb, Tabs, and Empty State. Each gets 10-15 lines covering variants, token usage, and one forbidden composition. She tests the token file alone first, then token plus components, then all three together.

The combined context of all three files is 580 lines, well within budget. The 12 engineers adopt the files, and first-pass design-review approval rate increases from 45% to 78% over the first month.

## Example: Freelance developer building client sites with v0

**Scenario:**

A freelance frontend developer builds 3-4 client websites per month using v0 for rapid prototyping. Each client has different brand colors and typography, but the developer reuses the same structural patterns (hero sections, feature grids, pricing tables, footer). She wants a SKILL.md template she can customize per client in under 30 minutes.

**Walkthrough:**

md with placeholder sections: `## Brand Tokens` (5 color slots: primary, secondary, accent, neutral-light, neutral-dark, plus type ramp and spacing scale), `## Layout Rules` (max-width: 1200px, section padding: 80px vertical / 24px horizontal, grid gaps: 24px or 32px), `## Component Rules` (hero, feature-card, pricing-card, CTA-button, footer with fixed structural rules and token placeholders), and `## Anti-Patterns` (a stable list of 8 patterns she sees v0 produce repeatedly: overly rounded corners, gradient backgrounds not requested, centered text in long paragraphs, excessive shadow depth, icons without consistent sizing, mixing font families, too many breakpoint-specific overrides, and placeholder images instead of solid color blocks). The template is 220 lines. For a new client, she opens the template, replaces the 5 color hex values, updates the font family and type ramp, and adjusts any component rules that differ from her defaults. The customization takes 20-25 minutes.

She drops the file into v0's context, generates a homepage, and reviews it against the quality checklist. md approach.

## Example: Enterprise team standardizing across multiple AI agents

**Scenario:**

A 60-person engineering organization at a B2C fintech uses three different AI agents: Cursor for feature development, Claude Code for refactoring and migration, and Gemini CLI for documentation-to-code generation. Each agent produces visually different output because they are configured independently. The platform team wants a single source of truth that works across all three.

**Walkthrough:**

The platform team lead audits recent output from each agent by collecting screenshots of the last 20 components generated by each tool. She categorizes failures into three buckets: token violations (wrong colors, wrong spacing), composition violations (wrong component nesting, wrong layout patterns), and aesthetic violations (visual density too high, inconsistent alignment). Token violations account for 55% of issues, composition for 30%, and aesthetics for 15%. md with priority weighting that matches this distribution: tokens are priority 1-3, composition is priority 4-5, aesthetics is priority 6-7.

The token section is exhaustive: 48 colors organized by semantic role (brand, semantic, neutral), a 10-step spacing scale, a 7-level type ramp, 4 shadow levels, and 3 radius values, each with inline resolved values and usage notes. The composition section covers 20 components with strict nesting rules derived from the existing React component library. The aesthetic section includes 10 guardrails focused on the fintech context: minimum touch-target sizes (44px), required input labels (no placeholder-only inputs for accessibility), number formatting rules (always use locale-appropriate thousand separators), and data-table density constraints. The file is 720 lines.

She tests it across all three agents with four standardized prompts: a transaction history table, a payment form, an account settings page, and a dashboard with charts. All three agents produce output that passes 85%+ of checklist items on every prompt. She publishes the file to the internal platform documentation, sets up a quarterly review cycle, and creates a Slack channel for reporting new anti-patterns.
