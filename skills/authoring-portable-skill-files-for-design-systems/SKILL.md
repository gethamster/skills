---
name: authoring-portable-skill-files-for-design-systems
description: "This skill teaches you to create framework-agnostic SKILL.md instruction files that encode your team's design tokens, component conventions, and aesthetic judgment so any AI coding agent produces on-brand UI without manual correction."
metadata:
  method: taste-skill-frontend-design-framework
---

# Authoring Portable SKILL.md Files for Design Systems

> This skill teaches you to create framework-agnostic SKILL.md instruction files that encode your team's design tokens, component conventions, and aesthetic judgment so any AI coding agent produces on-brand UI without manual correction.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 2-3 hours for a first complete file, 30-45 minutes per iteration cycle |
| Outcome | You produce a self-contained SKILL.md file that, when dropped into any supported AI coding agent, causes the agent to generate UI that consistently matches your design system's tokens, component patterns, and aesthetic standards without additional prompting. |
| Prerequisites | A working design system or at least documented design tokens (colors, spacing, typography scale), Familiarity with markdown syntax and file structure, Basic understanding of how AI coding agents consume context (system prompts, project files, rules files), Experience reviewing AI-generated frontend code for visual quality issues |
| Part of | [Taste Skill Frontend Design Framework](../../methods/taste-skill-frontend-design-framework/METHOD.md) |

## Overview

A SKILL.md file is the core artifact of the [Taste Skill Frontend Design Framework](https://tryhamster.com/methods/taste-skill-frontend-design-framework). It is a plain-markdown document that encodes everything an AI coding agent needs to produce on-brand, design-system-compliant frontend code: your token values, your component rules, your aesthetic guardrails, and your anti-patterns. The file is portable by design. It carries no dependency on a specific agent, IDE, or framework. You write it once and install it in Cursor, Claude Code, Codex, Gemini CLI, v0, or any agent that reads markdown context. This portability is what makes it an ai frontend design framework rather than a vendor-specific plugin.

The specific problem this skill solves is the gap between having a design system and having an AI agent that respects it. Most teams already have tokens defined in Figma, a JSON file, or a Tailwind config. But when they prompt an agent to build a settings page, the agent reaches for arbitrary hex values, picks spacing by vibes, and generates components that look generically competent but aesthetically wrong. The SKILL.md file closes that gap by translating your design system into the instruction format AI agents actually consume: structured natural language with concrete values, explicit constraints, and ranked priorities.

When you finish authoring a SKILL.md file, you have a single artifact that is both human-readable documentation and machine-readable instruction. It should pass two tests. First, a new designer joining your team should be able to read it and understand your system's rules in under ten minutes. Second, an AI agent with no prior context should be able to read it and generate a component that a design reviewer would accept without redlines. The artifact itself is typically 300 to 800 lines of markdown, organized into sections for tokens, components, composition rules, anti-patterns, and quality thresholds. Shorter files miss important constraints. Longer files dilute priority signals and cause agents to lose focus on the rules that matter most.

This skill sits upstream of every other skill in the Taste Skill method. Before you can [install SKILL.md files in agents](https://tryhamster.com/skills/installing-skill-files-in-ai-coding-agents), [enforce typography standards](https://tryhamster.com/skills/enforcing-typography-and-spacing-standards), or [write anti-slop review rules](https://tryhamster.com/skills/writing-anti-slop-design-review-rules), you need a well-authored file to install, enforce, and review against. Getting the authoring right determines the quality ceiling for everything downstream.

## How It Works

The mental model behind a SKILL.md file is constraint-based instruction. AI coding agents are general-purpose text predictors. Without constraints, they predict the most statistically common frontend code, which is visually generic. Your SKILL.md file works by narrowing the prediction space. Instead of letting the agent choose from every possible shade of blue, you tell it there are exactly four blues and when each one applies. Instead of letting it guess at spacing, you give it a scale and the rule for which rung to use between section headings and body text.

This works because of how modern AI agents process context. When an agent reads your SKILL.md, it treats each rule as a soft constraint on its output. Rules that are concrete ("use 24px/32px for H2 headings") constrain more effectively than rules that are abstract ("headings should feel balanced"). Rules that include anti-patterns ("never use box-shadow with spread > 4px") constrain even more effectively because they give the agent a falsifiable check it can run against its own output. The combination of positive constraints ("do this") and negative constraints ("never do that") creates a corridor of acceptable output that matches your design system.

The file structure matters because AI agents process markdown hierarchically. An agent gives more weight to content under H1 and H2 headings than to deeply nested bullets. It treats the first paragraph of each section as a summary and may skim later paragraphs under context-window pressure. This is why the [Taste Skill Frontend Design Framework](https://tryhamster.com/methods/taste-skill-frontend-design-framework) recommends front-loading your most critical rules in each section and using headings that double as instruction labels ("## Color Tokens" rather than "## Our Brand Colors").

Portability comes from a discipline of self-containment. A portable SKILL.md never references an external file path, a Figma URL, or a Tailwind config key without also inlining the resolved value. If your spacing scale lives in `tailwind.config.js`, you still write out `space-1: 4px, space-2: 8px, space-3: 12px, space-4: 16px, space-6: 24px, space-8: 32px` directly in the file. This redundancy is intentional. An agent running in v0 has no access to your repo's Tailwind config. An agent running in Gemini CLI might not have file-system context at all. The SKILL.md must carry its own truth.

The key assumption that can break is context-window size. If your SKILL.md exceeds the agent's context window (or competes with a large codebase for context space), rules at the bottom of the file get deprioritized or dropped. This is why the file should be ordered by priority, with the most impactful rules (tokens, forbidden patterns) at the top and nice-to-have refinements (animation easing preferences, icon sizing) toward the bottom. If you find agents ignoring your later rules, the fix is usually to either shorten the file or split it into focused modules (one for tokens, one for components, one for motion) and load only the relevant module per task.

## Step-by-Step Guide

### Step 1: Step 1: Inventory your design system's canonical values

md, collect every concrete value your design system defines. Open your Figma tokens, your CSS custom properties, your Tailwind config, or wherever your source of truth lives. Extract: your full color palette with hex or HSL values and semantic names, your spacing scale as a numbered list of pixel values, your typography ramp (font families, sizes, line-heights, weights for each heading level and body text), your border-radius values, your shadow definitions, and your breakpoint widths. Write these into a scratch document exactly as resolved values, not as variable names.

If your system defines `--color-primary` as `#2563EB`, write `primary: #2563EB`. This step produces a flat list of 40-120 token entries. If you have fewer than 20, your system may be under-specified and you should define the missing values before proceeding.

> **Pro tip:** If your design system has tokens that differ between light and dark modes, list both sets explicitly and label them. Agents cannot resolve mode-switching logic from a single token name.

### Step 2: Step 2: Document component-level composition rules

For each major component in your system (buttons, cards, form inputs, navigation, modals, tables, alerts), write a short rule block that specifies: the allowed variants, the token values each variant uses, the required internal spacing, and any forbidden compositions. For example, a button rule block might state that primary buttons use `bg: #2563EB, text: #FFFFFF, padding: 10px 20px, border-radius: 8px, font-weight: 600, font-size: 14px` and that buttons must never appear inside other buttons or inside anchor tags. A card rule block might state that cards use `padding: 24px, border-radius: 12px, border: 1px solid #E5E7EB` and that cards must never nest more than one level deep. Each rule block should be 5-15 lines.

Focus on the components your team uses most frequently, aiming for 8-15 component blocks in a first pass. Skip components you rarely build, since they add context-window cost without proportional benefit.

> **Pro tip:** Write one forbidden-composition rule per component block. Agents are surprisingly good at avoiding explicitly named anti-patterns but will happily stumble into them if the anti-pattern is only implied.

### Step 3: Step 3: Define aesthetic guardrails and quality thresholds

This is where you encode taste. Aesthetic guardrails are rules that do not map directly to a single token but govern how tokens combine. , no more than 3 non-neutral colors on a single page). Write these as numbered rules with specific thresholds, not as vague guidance.

Each rule should be testable: a reviewer should be able to look at the output and determine in under 10 seconds whether the rule was followed. Aim for 8-15 guardrail rules. More than 20 dilutes their impact in the agent's context.

> **Pro tip:** Frame guardrails as numeric thresholds wherever possible. 'Generous whitespace' is unenforceable. 'Minimum 32px vertical gap between sections' is testable and the agent can verify it against its own output.

### Step 4: Step 4: Write the anti-pattern catalog

List the specific visual mistakes your team has already seen AI agents make. If you have been using AI coding tools, review the last 10-20 generated components and note every visual issue you had to fix manually. Common entries include: using raw Tailwind gray-500 instead of your system's neutral-500, adding decorative borders or shadows not in the token set, centering everything on the page, using inconsistent icon sizes within a single component, generating overly nested card-in-card layouts, defaulting to 100% width containers without max-width constraints, and using generic sans-serif fallback fonts. For each anti-pattern, write a short name, a one-sentence description of what it looks like, and a one-sentence instruction for what the agent should do instead.

This section should contain 6-12 entries. It serves as the agent's self-review checklist before presenting output.

> **Pro tip:** Pull anti-patterns from real agent output rather than inventing hypothetical ones. The patterns you have actually seen recur are the ones the agent is statistically most likely to reproduce.

### Step 5: Step 5: Structure the file with hierarchical headings

Organize your content into a clean markdown structure that AI agents can parse hierarchically. , `# [YourProduct] Design System Instructions`). Use H2 for major sections: `## Design Tokens`, `## Component Rules`, `## Aesthetic Guardrails`, `## Anti-Patterns`, `## Quality Checklist`. , `### Color Tokens`, `### Spacing Scale`, `### Typography`).

Place your most critical rules in the first two H2 sections because agents weight early content more heavily. Use bullet lists for enumerated rules and fenced code blocks for any literal CSS or class-name examples. Do not use HTML inside the markdown. Do not use images, links to external assets, or relative file paths.

The entire file should be self-contained plain text. Target 300-800 lines total.

> **Pro tip:** Add a 2-3 sentence summary paragraph immediately after the H1 title that states the file's purpose and scope. This paragraph acts as a system-prompt-style instruction that anchors the agent's behavior for the entire file.

### Step 6: Step 6: Add a priority ranking to your rules

Not all rules are equally important. If an agent must choose between respecting your color tokens and respecting your preferred animation easing, you want it to choose colors every time. Add a priority section near the top of the file (right after the summary paragraph) that lists your rules in ranked order. A typical priority list looks like: 1) Color tokens must match exactly, 2) Typography scale must be followed, 3) Spacing scale must be followed, 4) Component composition rules must be respected, 5) Anti-patterns must be avoided, 6) Aesthetic guardrails should be followed, 7) Motion and animation preferences should be followed.

This ranking gives the agent a tiebreaker when context-window pressure forces it to drop lower-priority rules. It also helps human reviewers know which violations to flag as blocking versus advisory.

> **Pro tip:** Use the word 'must' for your top 3-4 priorities and 'should' for everything below. Agents trained on RFC-style language interpret 'must' as a hard constraint and 'should' as a soft preference.

### Step 7: Step 7: Write a quality checklist as a terminal section

Close the file with a numbered checklist that the agent should mentally run before presenting its output. Each item should be a yes/no question. For example: 1) Are all colors from the defined palette? 2) Does the typography use only the specified font sizes and weights?

3) Is the spacing between elements a multiple from the spacing scale? 4) Are there more than 3 non-neutral colors visible simultaneously? 5) Does any component violate a listed anti-pattern? 6) Is the maximum container width respected?

7) Is the contrast ratio above threshold for all text? This checklist serves as a final catch-net. Agents that support chain-of-thought reasoning will sometimes explicitly walk through this checklist, catching errors they would otherwise ship. Aim for 7-12 checklist items.

Each should reference a rule defined earlier in the file so the agent can trace back.

> **Pro tip:** Phrase checklist items as questions the agent asks itself about its own output, not as instructions. 'Did I use only palette colors?' triggers self-review behavior more reliably than 'Use only palette colors.'

### Step 8: Step 8: Test portability across two different agents

md must produce acceptable output in at least two different AI coding agents. , Cursor and Claude Code, or v0 and Gemini CLI). Give each agent the same prompt: 'Build a settings page with a sidebar navigation, a form with text inputs and a toggle, and a save button. md and no other context.

Compare the two outputs against your quality checklist. If both outputs pass at least 80% of the checklist items, your file is portable. If one agent fails significantly, examine which rules it ignored and check whether those rules are too implicit, too deeply nested, or too vaguely worded. Revise and retest.

> **Pro tip:** Save the outputs from this test as your baseline. Future edits to the SKILL.md should be regression-tested against the same prompt to ensure you did not accidentally degrade quality.

### Step 9: Step 9: Version and iterate with your team

md to version control alongside your codebase. Treat it as a living document, not a write-once artifact. Establish a lightweight review process: when someone encounters a new anti-pattern in agent output, they add it to the anti-pattern section and open a pull request. md is updated in the same PR as the token source files.

Review the file quarterly for bloat. md) and load them selectively based on the task. Track a simple quality metric over time: the percentage of agent-generated components that pass design review without redlines on the first attempt. This metric should trend upward as the file matures.

> **Pro tip:** Add a changelog comment block at the top of the file with the last-modified date and a one-line summary of the most recent change. This helps team members understand the file's recency and context at a glance.

## Best Practices

- Inline every resolved value rather than referencing external files or variable names. A SKILL.md that says 'use --color-primary' is useless to an agent that cannot resolve CSS custom properties. Write 'primary: #2563EB (use for primary buttons, links, and active states)' instead. This redundancy is the price of portability, and skipping it is the most common reason a file works in one agent but fails in another.
- Front-load your highest-priority rules in the first 100 lines of the file. AI agents allocate attention unevenly across long contexts, giving more weight to content that appears early. If your color tokens are buried under 200 lines of component rules, the agent is more likely to default to generic colors under context-window pressure. Put tokens and the priority ranking at the very top.
- Write one explicit anti-pattern for every positive rule that agents commonly violate. Positive instructions ('use 8px border-radius') are necessary but not sufficient. Negative instructions ('never use border-radius values other than 4px, 8px, or 12px') create a falsifiable check the agent can run against its own output. Pairing positive and negative rules roughly doubles enforcement reliability.
- Keep the file between 300 and 800 lines. Below 300, you almost certainly lack enough constraint specificity for consistent output. Above 800, you risk context-window competition where later rules get dropped or deprioritized. If your system genuinely requires more than 800 lines of rules, split into modular files and load only the relevant module per task.
- Use plain markdown without HTML, images, or external links. Every AI coding agent can parse standard markdown headings, bullets, numbered lists, and fenced code blocks. Not every agent can parse HTML tables, embedded images, or resolve URLs. Stick to the format with the highest compatibility surface.
- Test every major revision with a standardized prompt across two agents before merging. The portability test described in Step 8 should be a recurring gate, not a one-time exercise. Regressions happen when well-intentioned edits inadvertently make a rule ambiguous or push a critical constraint below the context-window cutoff.
- Version-control the SKILL.md alongside your design token source files and update them in the same commit. If your tokens change but your SKILL.md does not, the file becomes a source of drift and agents will generate output that matches the old system. Treating them as coupled artifacts prevents this.
- Assign semantic intent to each token, not just a value. Writing 'neutral-100: #F3F4F6 (page background, card surface on dark mode)' gives the agent application context. Writing only '#F3F4F6' forces the agent to guess where the color belongs, and it will guess wrong often enough to matter.

## Common Mistakes

- **Writing rules as vague aesthetic preferences instead of concrete constraints** — Rules like 'use generous whitespace' or 'keep the layout clean' are effectively invisible to AI agents because they cannot be falsified. The agent has no way to measure 'generous' or 'clean.' Replace every vague preference with a numeric threshold or enumerated set: 'minimum 32px gap between sections,' 'maximum 3 font sizes per screen,' 'only use border-radius values of 4px, 8px, or 12px.' If you cannot write a rule as a testable constraint, it is not ready for the SKILL.md. Park it in a design-philosophy document instead.
- **Referencing external files or tools instead of inlining values** — A SKILL.md that says 'refer to tokens.json for the spacing scale' or 'follow the Figma component library' breaks portability immediately. The agent running in v0 or Gemini CLI has no access to your repo's token file or your Figma account. This mistake usually happens when authors copy rules from internal documentation without resolving the references. Catch it by searching your file for any path-like string (/, .json, .ts, .css, figma.com) and replacing each with the literal resolved values.
- **Making the file too long by including every edge case and rare component** — Authors who are thorough by nature tend to document every component variant, every responsive breakpoint behavior, and every icon sizing rule. The result is a 1,500-line file where the agent loses track of the high-priority rules. Watch for the signal that agent output passes your typography and color rules but fails your component composition rules. That usually means composition rules are too deep in the file.

Fix it by cutting edge cases and rare components, or splitting into focused module files loaded per task.
- **Omitting the anti-pattern section entirely** — Many authors write only positive instructions and assume the agent will infer what not to do. Agents do not infer negation reliably. Without explicit anti-patterns, you will see the same visual mistakes (arbitrary shadows, nested cards, centered-everything layouts) recur across every generation. If your agent output keeps showing the same issue after you have added a positive rule that should prevent it, the fix is almost always to add the corresponding negative rule: 'Never apply box-shadow unless it matches one of these three defined shadow values.'
- **Testing only in one agent and declaring the file complete** — A SKILL.md that works perfectly in Cursor may fail in Claude Code because the two agents parse context differently, allocate attention differently, and handle instruction priority differently. Single-agent testing creates a false sense of completeness. The portability test requires two agents from different vendors. If you skip it, you will discover the portability gap only when a teammate using a different tool produces off-brand output and blames the file.
- **Treating the SKILL.md as a static document that never changes** — Design systems evolve. Tokens change during rebrands, new components get added, and agents develop new failure modes as their models update. md written six months ago and never revised will drift out of sync with both the design system and the agent's behavior. The diagnostic signal is a gradual decline in first-pass design-review approval rates.

md updates to design-token changes in version control and reviewing the anti-pattern catalog quarterly for new entries.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/taste-skill-frontend-design-framework/METHOD.md) — Taste Skill Frontend Design Framework

## Related Skills

- [Enforcing Typography and Spacing Standards in AI-Generated UI](../enforcing-typography-and-spacing-standards/SKILL.md)
- [Adding Motion and Interaction Taste Rules](../adding-motion-and-interaction-taste-rules/SKILL.md)
- [Writing Anti-Slop Design Review Rules](../writing-anti-slop-design-review-rules/SKILL.md)
- [Configuring Layout and Visual Density Constraints for AI Agents](../configuring-layout-and-visual-density-constraints/SKILL.md)
- [Auditing AI-Generated Frontends for Design Quality](../auditing-ai-generated-frontends-for-design-quality/SKILL.md)
- [Installing SKILL.md Files in AI Coding Agents](../installing-skill-files-in-ai-coding-agents/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
