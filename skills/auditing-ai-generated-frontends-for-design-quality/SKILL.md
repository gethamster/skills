---
name: auditing-ai-generated-frontends-for-design-quality
description: "This skill teaches a repeatable review workflow for evaluating AI-produced React and Next.js interfaces against Taste Skill criteria, so you can catch generic-looking UI before it ships and feed structured corrections back to the agent."
metadata:
  method: taste-skill-frontend-design-framework
---

# Auditing AI-Generated Frontends with a Taste Skill Design Review

> This skill teaches a repeatable review workflow for evaluating AI-produced React and Next.js interfaces against Taste Skill criteria, so you can catch generic-looking UI before it ships and feed structured corrections back to the agent.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes per review |
| Outcome | You produce a scored audit report with specific, element-level failure annotations and revision prompts that an AI coding agent can act on immediately, eliminating generic 'slop' UI before it reaches production. |
| Prerequisites | Basic understanding of visual hierarchy, typographic scale, and spacing systems in web design, Familiarity with React or Next.js component structure and how to inspect rendered output, Access to a running instance of the AI-generated frontend (local dev server or preview deployment), At least one SKILL.md file installed in your AI coding agent (see installing-skill-files-in-ai-coding-agents) |
| Part of | [Taste Skill Frontend Design Framework](../../methods/taste-skill-frontend-design-framework/METHOD.md) |

## Overview

AI coding agents can scaffold a full React or Next.js interface in minutes, but speed comes with a cost. The default output from most agents leans on safe, generic patterns: uniform font sizes, even spacing everywhere, low-contrast text, components that look the same regardless of importance, and layouts that feel flat. Without a structured review step, these outputs ship as-is and accumulate into interfaces that work functionally but look like every other AI-generated app. A taste skill design review is the checkpoint that catches these problems before they become technical debt.

This skill sits at the quality gate stage of the [Taste Skill Frontend Design Framework](https://tryhamster.com/methods/taste-skill-frontend-design-framework). After you have installed SKILL.md files and the agent has generated or revised components, you run this audit to verify the output actually meets the design standards encoded in those files. The review is not a subjective "does this look good" pass. It is a structured, dimension-by-dimension evaluation covering visual hierarchy, typographic contrast, spacing rhythm, alignment grid compliance, color contrast ratios, and component consistency. Each dimension gets a score, and each failing element gets a specific annotation describing what is wrong and which SKILL.md rule it violates.

The concrete artifact you produce is an audit report: a document (or structured JSON/Markdown block) listing every dimension score, every flagged element with its location in the component tree, the specific failure, and a revision instruction the agent can execute. This report can be fed directly back into Cursor, Claude Code, Codex, or any agent that accepts follow-up prompts. The loop closes when the agent revises, you re-audit, and every dimension passes. Teams that adopt this workflow report catching 60-80% of visual quality issues before the first human design review, which means designers spend time on creative direction instead of cleaning up spacing and font-size problems.

The skill applies whether you are a solo developer checking your own agent output or a design lead reviewing pull requests that include AI-generated UI. The checklist scales from a single component audit (15 minutes) to a full-page or multi-page review (60-90 minutes). The key is consistency: running the same checklist every time, scoring the same dimensions, and writing revision instructions in the same format so the agent learns your standards over successive iterations.

## How It Works

The review workflow is built on the principle that design quality is not one thing but several independent dimensions, and each dimension can be evaluated with specific, observable criteria. When you look at a screen and feel something is "off," that feeling usually decomposes into one or more measurable failures: the heading is only 2px larger than the body text (hierarchy failure), the card padding is 16px everywhere regardless of content density (spacing failure), or a secondary button uses the same visual weight as the primary action (contrast failure). The audit makes these decompositions explicit.

The [Taste Skill Frontend Design Framework](https://tryhamster.com/methods/taste-skill-frontend-design-framework) defines the dimensions. This skill defines how to evaluate them systematically. The mental model is borrowed from code review: you do not just read the code and decide if it "feels right." You check it against a set of known rules, flag violations with line numbers, and request specific changes. A taste skill design review does the same thing, except the "code" is the rendered visual output and the "rules" are the SKILL.md criteria for hierarchy, typography, spacing, contrast, alignment, and component consistency.

Each dimension works as a pass/fail gate with a severity level. Hierarchy failures are almost always high severity because they affect every user's ability to parse the page. Spacing inconsistencies are medium severity when they create visual noise but do not block comprehension. Alignment drift is high severity in data-dense layouts and lower severity in marketing pages with intentional asymmetry. The scoring system forces you to make these trade-offs explicit rather than leaving them to gut feel.

The reason this works better than a free-form design critique is precision of feedback. Telling an AI agent "this looks generic" gives it almost nothing to work with. Telling it "the h2 on the pricing card is 18px/600 weight, which is only 1.125x the 16px body text; increase to 24px/700 weight to create a minimum 1.5x scale ratio per SKILL.md typography rules" gives it an exact action. The audit report format is designed to produce instructions at this level of specificity.

The assumption that can break is context sensitivity. The checklist evaluates dimensions independently, but some design decisions are intentional trade-offs: a dense data table might deliberately use smaller type and tighter spacing. The auditor needs enough design judgment to distinguish a violation from an intentional departure. This is why the skill is rated Intermediate, not Beginner. You need to understand the rules well enough to know when breaking them is the right call, and to annotate those cases as "intentional exception" rather than flagging them as failures.

## Step-by-Step Guide

### Step 1: Step 1: Render the interface at three viewport widths

Open the AI-generated frontend in a browser at 1440px (desktop), 768px (tablet), and 375px (mobile). Use your browser's responsive design mode or resize the window manually. Take a full-page screenshot at each width. These screenshots become your reference artifacts for the rest of the review.

, empty state, loaded state, error state), capture those too. You want to audit what users actually see, not what the JSX looks like in your editor.

> **Pro tip:** Use a browser extension like Full Page Screen Capture or the built-in Firefox screenshot tool. Avoid relying on your memory of what you saw; screenshots let you annotate specific elements and compare before/after revisions.

### Step 2: Step 2: Evaluate visual hierarchy with a squint test

Blur your eyes or step back from the screen and look at each screenshot. The most important element on the page (primary heading, main CTA, key data point) should be the most visually prominent even when blurred. If two or more elements compete for attention at the same level, that is a hierarchy failure. Open the browser DevTools and inspect the font size, font weight, and color of the top three most prominent elements.

Record the actual values. 5x the body font size, and the secondary heading should sit clearly between. 25x at any step, flag it as a hierarchy compression failure.

> **Pro tip:** The most common AI-agent output problem is 'democracy of elements,' where everything is roughly the same size and weight. If your squint test shows an even gray wash with no clear focal point, that is the strongest signal to flag.

### Step 3: Step 3: Audit typographic scale and font pairing

List every distinct font-size/weight/line-height combination used on the page. , 14, 16, 20, 24, 32, 40). AI agents often generate 8-12 slightly different sizes that do not follow a scale. Check that each type style maps to a clear semantic role: body, caption, label, subheading, heading, display.

Flag any font-size value that does not fit the scale or any two elements that share a type style but play different semantic roles. 3x.

> **Pro tip:** Paste all the computed font-size values into a list and sort them. If you see values like 13px, 14px, 15px, 16px within the same page, the agent is making ad-hoc sizing decisions instead of using a scale. Consolidate to the nearest scale value.

### Step 4: Step 4: Check spacing rhythm and consistency

Inspect the padding and margin values on key containers: cards, sections, form groups, navigation items. , 4, 8, 12, 16, 24, 32, 48, 64). Check that spacing values are drawn from this scale, not arbitrary. Pay special attention to the relationship between spacing and content hierarchy: more space above a section heading than above a list item, for example.

Measure the gap between cards in a grid. Measure the internal padding of those cards. If the internal padding equals or exceeds the gap between cards, the visual grouping breaks down. Flag any spacing value that does not belong to the scale and any relationship where spacing contradicts hierarchy.

> **Pro tip:** The fastest way to check spacing consistency is to use the browser DevTools box model overlay. Hover over adjacent elements and compare. If you see margin: 17px or padding: 22px, these are almost certainly agent defaults that missed the spacing scale.

### Step 5: Step 5: Verify color contrast and accessibility

5:1 for normal text, 3:1 for large text (18px+ regular or 14px+ bold). Use a contrast checker tool or the browser DevTools accessibility panel. Beyond accessibility compliance, check for contrast as a design hierarchy tool: primary actions should be the highest-contrast interactive element, secondary actions should have lower visual prominence, and disabled states should be clearly muted. 5:1.

Flag each failing combination with its actual ratio and the minimum required.

> **Pro tip:** Chrome DevTools has a built-in contrast ratio display in the color picker. Click on any color value in Styles, and the tooltip shows the contrast ratio with a pass/fail indicator. This is faster than copying hex values into an external tool.

### Step 6: Step 6: Test alignment grid adherence

Enable a column grid overlay in your design tool or use a browser extension to display a 12-column or 8-column grid. Check that content containers, cards, images, and form fields align to the grid edges. Check that text baselines align across columns in multi-column layouts. AI agents often produce layouts where elements are centered within their containers but the containers themselves are not aligned to each other, creating a subtle visual drift.

Flag any element whose left or right edge does not align with either a grid column or another element's edge. Also check vertical alignment: headings at the same hierarchical level across columns should share the same vertical position.

> **Pro tip:** For Next.js apps using Tailwind, check that the agent is not mixing arbitrary width values (w-[327px]) with grid utilities (col-span-4). Arbitrary values break alignment when the viewport changes.

### Step 7: Step 7: Evaluate component consistency and design-system compliance

Identify every instance of repeated UI patterns: buttons, cards, form inputs, badges, navigation items. Check that all instances of the same pattern use identical styling. AI agents sometimes generate slightly different button styles in different sections because each section was generated in a separate prompt. List every button variant found on the page (size, color, border-radius, padding, font properties).

If you find more than 3-4 intentional variants (primary, secondary, ghost, destructive), the agent is over-generating styles. Check that the component props match a shared component definition; if the same visual pattern is implemented as inline styles in one place and a component in another, flag the inconsistency for refactoring.

> **Pro tip:** Search the codebase for className strings that contain button-like styles (bg-blue, rounded, px-). If the same button concept appears with different Tailwind classes in different files, the agent created duplicate implementations instead of reusing a component.

### Step 8: Step 8: Score each dimension and compile the audit report

For each of the six dimensions (hierarchy, typography, spacing, contrast, alignment, component consistency), assign a score from 1-5 where 1 means most instances fail and 5 means all instances pass with strong design quality. Below each score, list the specific elements that failed, their location (component file and approximate screen position), the measured value, the expected value per your SKILL.md rules, and a one-sentence revision instruction. Format this as a Markdown document or a JSON array, whichever your agent accepts more reliably. The report should be self-contained: someone who has not seen the interface should be able to understand every finding by reading the report alone.

> **Pro tip:** Structure revision instructions as imperative commands the agent can execute: 'Change the h2 font-size in PricingCard from 18px to 24px and font-weight from 600 to 700.' Vague instructions like 'make the heading more prominent' produce inconsistent agent responses.

### Step 9: Step 9: Feed the report back to the agent and re-audit

Paste the audit report into your AI coding agent as a follow-up prompt. Prefix it with context: 'The following is a design audit of the current UI. ' After the agent makes revisions, re-render the interface and repeat Steps 1-8, focusing on the flagged elements. Mark each finding as resolved or still failing.

Most agents resolve 70-90% of findings on the first revision pass. md files). Continue the audit-revise loop until all dimensions score 4 or above.

> **Pro tip:** Keep a running log of which findings persist across multiple revision passes. These are your highest-value candidates for new SKILL.md rules, because they represent patterns the agent cannot self-correct without explicit instruction.

## Best Practices

- Run the audit on rendered output, not source code. The browser is the source of truth for visual quality. An element might have correct Tailwind classes but still render poorly due to container queries, viewport-dependent styles, or inherited overrides. Always audit what users see.
- Audit one dimension at a time in a fixed order. Switching between typography, spacing, and color in a single pass leads to missed issues because your attention fragments. Completing all typography checks before moving to spacing ensures systematic coverage and produces a report that is organized by dimension rather than by screen location.
- Write revision instructions at the specificity of a code diff. 'Change padding-y on .card from 16px to 24px' is actionable; 'add more breathing room to the cards' is not. Specific instructions reduce revision loops from 3-4 passes to 1-2 because the agent does not have to interpret your intent.
- Keep a canonical reference screenshot of the desired quality level. Before starting the audit, collect 2-3 screenshots of interfaces that meet your quality bar (from Dribbble, your design system documentation, or a previous project). Use these as anchors when making scoring judgments. Without a reference, scores drift toward leniency over time.
- Score hierarchy and typography before spacing and alignment. Hierarchy failures cascade: if the type scale is wrong, spacing relationships built around that scale will also be wrong. Fixing hierarchy first prevents you from tuning spacing values that will change again after the type scale is corrected.
- Distinguish intentional departures from violations. Not every deviation from the checklist is a bug. A dense data table might intentionally use 12px type. A marketing hero section might intentionally break the grid for dramatic effect.

Annotate these as 'intentional exception: [reason]' rather than flagging them, so the audit report remains trustworthy and the agent does not 'fix' things that were done on purpose.
- Re-audit after every agent revision pass, even if the agent claims it addressed all findings. AI agents sometimes partially apply changes (updating font-size but not font-weight) or introduce new issues while fixing old ones (fixing spacing in one section but breaking it in an adjacent component). Verification is the only reliable signal.

## Common Mistakes

- **Auditing from the JSX source instead of the rendered browser output** — Source code can be misleading. Tailwind utility classes like text-lg resolve to different pixel values depending on the base font-size configuration. CSS inheritance, media queries, and container queries all modify the final rendered values. Always inspect computed styles in DevTools.

If you audit only the source, you will miss rendering-layer issues like text overflow, unexpected wrapping, and collapsed flex containers that only appear at specific viewport widths.
- **Writing vague revision instructions like 'improve the visual hierarchy'** — Vague instructions cause the agent to make large, unpredictable changes. Instead of improving hierarchy, it might change colors, rearrange layout, and resize everything at once, creating new issues. The root cause is skipping the measurement step: when you have not recorded the actual font-size and weight values, you cannot write a specific instruction. Always measure first, then write the instruction as a concrete change: 'Increase .section-title from 20px/500 to 28px/700.' Watch for this mistake when your revision pass creates more new issues than it resolves.
- **Auditing only the desktop viewport** — AI agents optimize for the viewport they are shown during development, which is usually desktop. Mobile and tablet layouts frequently have worse hierarchy compression because the agent reduces all sizes proportionally rather than maintaining minimum readable sizes and adequate touch targets. If you only audit at 1440px, you will miss issues that affect the majority of users on most consumer-facing products. Check at least 375px and 768px.

The signal to watch for: if the mobile layout looks like a miniaturized desktop layout rather than a restructured one, the agent did not adapt the design.
- **Treating all six dimensions as equally important for every page type** — A data-dense dashboard page has different quality priorities than a marketing landing page. On a dashboard, alignment and spacing consistency are critical because users scan dense grids of information. On a landing page, hierarchy and contrast dominate because the goal is directing attention to a single CTA. If you weight all dimensions equally, you spend time perfecting spacing on a page where the real problem is that the CTA is invisible.

Calibrate your severity levels per page type before starting the audit.
- **Running one audit and considering the work done** — A single audit pass catches the initial failures, but the agent's revisions often introduce secondary issues. A common pattern: the agent fixes heading sizes but does not update the spacing around those headings, so the new larger text crowds the element above it. The audit-revise loop should run for at least two full passes. If you are still finding new issues on the third pass, the underlying SKILL.md rules are likely incomplete, and you should invest time in authoring better rules rather than running more audit cycles.
- **Flagging every deviation without checking for intentional design rationale** — Over-flagging erodes trust in the audit report. When the agent sees a report with 40 findings and 10 of them are false positives (intentional design decisions), it starts treating all findings with lower confidence. Before flagging a deviation, ask: could this be intentional? Check for comments in the code, design tokens that suggest the value was deliberate, or contextual reasons (a compact sidebar might intentionally use tighter spacing).

Mark genuine exceptions as 'noted, intentional' so the report stays credible.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/taste-skill-frontend-design-framework/METHOD.md) — Taste Skill Frontend Design Framework

## Related Skills

- [Enforcing Typography and Spacing Standards in AI-Generated UI](../enforcing-typography-and-spacing-standards/SKILL.md)
- [Adding Motion and Interaction Taste Rules](../adding-motion-and-interaction-taste-rules/SKILL.md)
- [Writing Anti-Slop Design Review Rules](../writing-anti-slop-design-review-rules/SKILL.md)
- [Configuring Layout and Visual Density Constraints for AI Agents](../configuring-layout-and-visual-density-constraints/SKILL.md)
- [Installing SKILL.md Files in AI Coding Agents](../installing-skill-files-in-ai-coding-agents/SKILL.md)
- [Authoring Portable SKILL.md Files for Design Systems](../authoring-portable-skill-files-for-design-systems/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
