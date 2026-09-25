---
name: "taste-skill-frontend-design-framework"
category: "Experience"
description: "How the Taste Skill frontend framework works: Leon Lin's open-source SKILL.md files that steer AI coding agents away from generic, templated UI."
metadata:
  datePublished: "2026-07-07"
  dateModified: "2026-09-24"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Taste Skill Frontend Framework: Design Rules for AI Agents

> Created by **Leon Lin (Leonxlnx)** - [https://github.com/leonxlnx](https://github.com/leonxlnx)

## Overview

The Taste Skill frontend framework is an open-source set of Agent Skills that gives AI coding agents explicit design judgment before they write interface code. Leon Lin, who publishes on GitHub as Leonxlnx, maintains it in the [Leonxlnx/taste-skill repository](https://github.com/Leonxlnx/taste-skill) under the MIT license, and the project's README calls it "The Anti-Slop Frontend Framework for AI Agents." Each skill is a SKILL.md file: YAML frontmatter with a name and a description, followed by Markdown instructions the agent reads when the task matches.

The problem it targets is familiar to anyone who has asked an agent for a landing page. The code runs, and the page looks like every other generated page: a centered hero over a gradient, three equal feature cards, Inter on slate, and a purple accent. Anthropic's frontend team describes the cause as distributional convergence, where a model drifts toward the safe choices that dominate its training data, and names Inter, purple gradients and minimal animation as the usual result ([Anthropic, Improving frontend design through Skills](https://www.claude.com/blog/improving-frontend-design-through-skills)). Taste Skill answers that with written rules the agent must apply and then check.

The default skill, install name `design-taste-frontend`, is the core of the repository. In its current v2 form (marked experimental) it starts with brief inference: before any code, the agent reads the page type, the vibe words in the request, any references, the audience and constraints such as accessibility or regulation, then states a one-line "design read." It then sets three dials that gate every later decision, DESIGN_VARIANCE, MOTION_INTENSITY and VISUAL_DENSITY, each on a scale of 1 to 10 ([taste-skill SKILL.md](https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md)). A trust-first public-sector brief gets low variance and low motion. An agency portfolio gets high values on both.

The rest of the default skill is concrete. It maps briefs to real design systems (Material, Fluent, Carbon, Polaris, GOV.UK, USWDS, shadcn/ui) and tells the agent to install the official package instead of imitating it. It sets typography, color and layout directives, lists "AI tells" to avoid, bans the em dash outright, requires reduced-motion handling, includes a redesign protocol that audits before touching anything, and ends with a pre-flight checklist the agent must pass before it hands work back. The [CHANGELOG](https://github.com/Leonxlnx/taste-skill/blob/main/CHANGELOG.md) records that v2 is a substantial rewrite and that the original is kept as `design-taste-frontend-v1` for projects that depend on its exact behavior.

Around the default skill sit variants that each do one job. `gpt-taste` is a stricter version aimed at GPT and Codex. `redesign-existing-projects` audits an existing codebase and fixes it in place. `high-end-visual-design`, `minimalist-ui` and `industrial-brutalist-ui` apply a chosen visual direction. `full-output-enforcement` stops an agent from truncating code with placeholders. `stitch-design-taste` targets Google Stitch, and three image-generation skills produce reference boards for web, mobile and brand kits. The README states plainly that you do not need all of them at once.

The scope is narrower than many summaries suggest. The default skill says it is built for landing pages, portfolios and redesigns, and its "Out of Scope" section lists dashboards, data tables, multi-step forms, code editors, native mobile and realtime collaboration UIs. For those it points to Fluent, Carbon, Atlassian or Polaris instead. A team that wants density rules for an admin console has to write them itself or reach for a design system.

Independent coverage frames the project the same way. A Developers Digest piece describes the repository as packaging "frontend design judgment into installable skills" and argues that such files work best as a review checklist, a style contract and a calibration artifact ([Developers Digest](https://www.developersdigest.tech/blog/taste-skills-ai-agents-design-review)). That reading shapes this method: install the skill, adapt it to your own brand, and make the agent prove it followed the rules.

## Core Principles

### Read the brief before choosing a look

The default skill makes the agent classify the request before it writes a line of markup: page kind, audience, vibe words, references and quiet constraints. The one-line design read makes that classification visible, so a reviewer can reject a wrong direction in seconds instead of after a full build. Skipping it is how a public-sector service ends up with glassmorphism. The skill also limits clarifying questions to one, and only when the read genuinely diverges.

### Name the defaults you reject

Positive guidance such as "use good typography" leaves the model free to fall back on its average. Taste Skill spends much of its length on specific bans: purple glow gradients, three equal feature cards, generic names like "John Doe", fake product screenshots built from styled divs, section-number eyebrows and the em dash ([taste-skill SKILL.md](https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md)). A named ban gives the agent a boundary it can check, and a reviewer a pattern they can search for. Each ban ships with an override path for briefs that genuinely call for the banned pattern.

### Tune with dials, not with rewrites

Variance, motion and density are set per project from the brief, with presets for common page types. Every layout and animation rule in the skill is conditioned on those values, so one file serves both a calm editorial site and a kinetic agency page. Overrides happen in conversation; the skill tells the agent not to ask users to edit the file for a one-off change. The result is fewer forks of the same rules.

### Use real systems when the brief calls for them

When a brief reads as Material, Fluent, Carbon, GOV.UK or another established system, the skill tells the agent to install the official package and keep to one system per project. When the brief is an aesthetic such as bento, brutalism or editorial, it tells the agent to build with web standards and label the result honestly. This stops the agent from recreating a design system's CSS by hand and drifting from it.

### Accessibility and performance are gates, not polish

The skill makes contrast checks on every button and form field mandatory, requires dark mode for consumer pages, restricts animation to `transform` and `opacity`, and requires `prefers-reduced-motion` handling for anything with a motion dial above 3. Those rules line up with published guidance: WCAG sets a 4.5:1 minimum contrast for body text ([W3C, Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)), and web.dev recommends keeping animation on the compositor ([web.dev animations guide](https://web.dev/articles/animations-guide)). A page that looks good and fails these checks is not finished.

### The agent verifies its own output

The default skill ends with a long pre-flight checklist, and it states that the output is not done if any box cannot be honestly ticked. That turns taste from a hope into a review step the agent performs before a human looks. Anthropic's authoring guidance recommends the same feedback-loop pattern of validating, fixing and repeating ([Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)). Human review still matters, but it starts from a cleaner draft.

### Rules are portable text

Every skill in the repository is plain Markdown in the open Agent Skills format, so the same file works in any agent that reads SKILL.md ([Agent Skills specification](https://agentskills.io/specification)). Switching from one coding agent to another does not mean rewriting the rules. Keeping them in version control next to the code also means changes get reviewed like code.

## What the Repository Contains

| Skill (install name) | Job |
|-------|-------|
| `design-taste-frontend` | Default: brief inference, three dials, design-system map, bans, redesign protocol, pre-flight check |
| `gpt-taste` | Stricter variant for GPT and Codex with stronger layout and motion enforcement |
| `redesign-existing-projects` | Scan, diagnose and fix an existing UI without a rewrite |
| `high-end-visual-design`, `minimalist-ui`, `industrial-brutalist-ui` | Apply a visual direction that is already chosen |
| `full-output-enforcement` | Stop truncated output and placeholder comments |
| `imagegen-frontend-web`, `imagegen-frontend-mobile`, `brandkit` | Generate reference images only, then hand them to a coding agent |

The list and install names come from the [repository README](https://github.com/Leonxlnx/taste-skill). The repository also keeps `design-taste-frontend-v1`, `image-to-code` and `stitch-design-taste`.

## Steps

1. **Collect a baseline**
   Before installing anything, ask your agent for the pages you actually ship, such as a landing page, a pricing section and a portfolio grid, with no design skill loaded. Save the output and screenshots. List the generic patterns you see: centered hero, equal cards, default fonts, missing hover and focus states, pure black, a stray purple accent. This list tells you which rules matter most for your product and gives you something to compare against later. Anthropic's authoring guidance recommends exactly this order: run the agent without the skill, record the failures, then write or adopt instructions ([Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)).

2. **Install the default skill in project scope**
   Run `npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"` from the repository root, which uses the [skills CLI](https://github.com/vercel-labs/skills) to copy the file into your agent's skills directory. Project scope keeps the rules in version control where the whole team gets them. Confirm the agent can see the skill, for example with `/skills` in Claude Code. Read the file end to end before trusting it: it is a long document and Anthropic advises auditing any third-party skill before use ([Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)).

3. **Check the scope against your surfaces**
   The default skill is for landing pages, portfolios and redesigns and says so in its "Out of Scope" section. If the work is a dashboard, a data table or a multi-step form, keep the skill for your marketing surfaces and use a real design system or your own rules for the product UI. Add `redesign-existing-projects` if you are improving a site that already exists. Add a style variant only when the visual direction is already decided. Loading every skill at once gives the agent conflicting instructions.

4. **Adapt the rules to your brand**
   Open the installed SKILL.md and change what does not fit: fonts you license, your accent color, your corner-radius scale, your motion library. The project docs describe the file as fully editable ([Taste Skill docs](https://www.tasteskill.dev/docs)). Keep the bans that match your baseline failures and remove ones that contradict your brand, such as a serif rule when your wordmark is a serif. Record each change in a commit message so the next person knows why it differs from upstream.

5. **Generate with an explicit design read and dials**
   Prompt the agent with a real brief and ask it to state its design read and dial values before coding. Correct the read if it is wrong; this is the cheapest point to change direction. Then let it build, and require it to run the pre-flight checklist and report any box it could not tick. Treat an unticked box as a bug, not a style preference.

6. **Review against the same rules**
   Compare the result with your baseline from step 1, pattern by pattern. Run Lighthouse for performance and accessibility ([Lighthouse overview](https://developer.chrome.com/docs/lighthouse/overview)), check both light and dark mode, and toggle reduced motion. Search the markup for the patterns the skill bans. When something slips through twice, write it into the skill as a named ban so the agent catches it next time.

7. **Track upstream and re-baseline**
   The v2 default is marked experimental, and the CHANGELOG says its sections may keep changing until a stable release ([CHANGELOG](https://github.com/Leonxlnx/taste-skill/blob/main/CHANGELOG.md)). Re-run the install to pull updates, then diff them against your local edits instead of overwriting them. If you depend on exact behavior, pin `design-taste-frontend-v1` or vendor your adapted copy. Repeat the baseline comparison after each update so you notice regressions.

## When to Use

- Your team builds marketing pages, landing pages or portfolios with an AI coding agent and the output keeps landing on the same generic look. This is the use case the default skill was written for.
- You are redesigning an existing site and want the agent to audit before it changes anything. The redesign protocol and the `redesign-existing-projects` skill both require an audit first and protect URLs, nav labels and form field names.
- You have no designer reviewing every pull request and need a written quality bar the agent applies on its own. The pre-flight checklist gives developers a concrete list to hold the agent to.
- Several people or several agents generate UI for the same product. One version-controlled skill keeps their defaults aligned instead of each prompt carrying its own taste.
- You want accessibility and performance rules enforced at generation time. Contrast, reduced motion and compositor-only animation are hard rules in the skill rather than review comments.

## When Not to Use

- The surface is a dashboard, admin panel, data table or multi-step form. The default skill lists these as out of scope and recommends established design systems for them.
- You already ship from a mature design system with enforced components. Taste Skill's aesthetic bans can fight your system; a short skill that points the agent at your own components is a better fit.
- You are building a throwaway prototype where appearance does not matter yet. The skill is long, and loading it adds instructions the agent has to weigh on every UI task.
- Nobody on the team will read and adapt the file. The default rules encode one maintainer's taste, and applying them unexamined can override brand decisions you have already made.

## Skills

This method includes the following skills:

- [Enforcing Typography and Spacing Standards in AI UI](../../skills/enforcing-typography-and-spacing-standards/SKILL.md): Write type scale, line length, weight and spacing rules an agent can apply and a reviewer can check.
- [Motion and Interaction Taste Rules for Premium Frontend UI](../../skills/adding-motion-and-interaction-taste-rules/SKILL.md): Specify duration, easing, interactive states and reduced-motion behavior so generated motion has a reason.
- [Writing Anti-Slop Design Review Rules for Taste Skill](../../skills/writing-anti-slop-design-review-rules/SKILL.md): Turn recurring generic patterns into named, searchable bans with override paths.
- [Layout and Visual Density Constraints for AI Agents](../../skills/configuring-layout-and-visual-density-constraints/SKILL.md): Set containers, grids, section variety and density levels, and decide where the default skill does not apply.
- [Taste Skill Design Review for AI-Generated Frontends](../../skills/auditing-ai-generated-frontends-for-design-quality/SKILL.md): Review generated pages against the skill's rules, standards and tools, and feed findings back into the file.
- [Installing Taste Skill SKILL.md Files in AI Coding Agents](../../skills/installing-skill-files-in-ai-coding-agents/SKILL.md): Install, verify and update the skills in Claude Code, Cursor, Codex and Gemini CLI.
- [Authoring Portable SKILL.md Files for Design Systems](../../skills/authoring-portable-skill-files-for-design-systems/SKILL.md): Write your own design-system skill in the open format so any compatible agent can use it.

## FAQ

**What is the Taste Skill frontend framework?**

It is a collection of Agent Skills, maintained by Leon Lin in the [Leonxlnx/taste-skill repository](https://github.com/Leonxlnx/taste-skill), that tells AI coding agents how to make design decisions for frontend work. The default skill reads the brief, sets three dials, applies typography, color, layout and motion rules, and runs a pre-flight check before returning code. Variants cover redesigns, specific visual styles, full-output enforcement and image generation. It contains no components or CSS; it changes what the agent writes.

**Who created Taste Skill?**

The repository is owned by the GitHub account Leonxlnx, whose profile name is Leon Lin, and the license names Leonxlnx as copyright holder. The project site credits Leon Lin as the builder ([Taste Skill docs](https://www.tasteskill.dev/docs)), and independent coverage does the same ([Abduzeedo](https://abduzeedo.com/stop-slop-taste-skill-better-ai-design)). Contributors have added smaller changes through pull requests. Several unrelated repositories also use "taste skill" in their names, so check the owner before installing.

**Which AI coding tools does it work with?**

Any agent that reads the open SKILL.md format can load it. Claude Code reads skills from `.claude/skills/` in a project ([Claude Code docs](https://code.claude.com/docs/en/skills)), Cursor reads `.cursor/skills/` and `.agents/skills/` ([Cursor docs](https://cursor.com/docs/context/skills)), and Codex and Gemini CLI both read `.agents/skills/`. The project site also lists v0 and Lovable. You can paste the file into a chat as plain instructions when a tool has no skills support.

**How is it different from a design system or Tailwind?**

A design system or Tailwind gives you tokens, utilities and components. Taste Skill gives the agent rules for choosing among them: which system fits a brief, how dense a page should be, when motion is justified, which patterns to avoid. The default skill even tells the agent to install official design-system packages rather than imitate them. The two work together.

**What are the three dials?**

DESIGN_VARIANCE controls how experimental the layout is, MOTION_INTENSITY controls how much animation the page carries, and VISUAL_DENSITY controls how much information sits in each viewport. Each runs from 1 to 10, with a baseline and presets for common page types in the [default skill](https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md). The agent infers values from the brief and states them before coding. Rules elsewhere in the file, such as the reduced-motion requirement, key off these values.

**Can it be used for dashboards and product UI?**

Not as written. The default skill's "Out of Scope" section excludes dashboards, data tables, multi-step forms, code editors, native mobile and realtime collaboration UIs, and points to systems like Fluent, Carbon, Atlassian and Polaris instead. You can still use it for the marketing surfaces of a product. For dense product screens, write your own layout and density rules or rely on your design system.

**Does it guarantee good design?**

No file guarantees taste. The skill removes the most common generic patterns and forces explicit decisions, which raises the floor of what an agent produces. The rules are one maintainer's opinions and some, such as the serif restrictions, will conflict with particular brands. Treat it as a starting point you adapt, and keep a human review step for anything customer-facing.

## Sources

- [Leonxlnx/taste-skill on GitHub](https://github.com/Leonxlnx/taste-skill)
- [taste-skill SKILL.md (design-taste-frontend)](https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md)
- [taste-skill CHANGELOG](https://github.com/Leonxlnx/taste-skill/blob/main/CHANGELOG.md)
- [Taste Skill docs](https://www.tasteskill.dev/docs)
- [Developers Digest: Taste Skills Are Turning Agent Review Into Infrastructure](https://www.developersdigest.tech/blog/taste-skills-ai-agents-design-review)
- [Abduzeedo: Stop the Slop with Taste Skill for Better AI Design](https://abduzeedo.com/stop-slop-taste-skill-better-ai-design)
- [Anthropic: Improving frontend design through Skills](https://www.claude.com/blog/improving-frontend-design-through-skills)
- [Anthropic docs: Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [Anthropic docs: Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)
- [Agent Skills specification](https://agentskills.io/specification)
- [vercel-labs/skills CLI](https://github.com/vercel-labs/skills)
- [W3C: Understanding Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [web.dev: High-performance CSS animations](https://web.dev/articles/animations-guide)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
