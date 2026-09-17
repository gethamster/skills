---
name: adding-motion-and-interaction-taste-rules
description: "Teaches you how to specify animation timing, easing curves, hover states, and transition guidelines inside SKILL.md files so AI coding agents produce interfaces that feel polished and intentional rather than static or gratuitously animated."
metadata:
  homepage: https://tryhamster.com
  method: taste-skill-frontend-design-framework
---

# Adding Motion and Interaction Taste Rules for Premium Frontend UI

> Teaches you how to specify animation timing, easing curves, hover states, and transition guidelines inside SKILL.md files so AI coding agents produce interfaces that feel polished and intentional rather than static or gratuitously animated.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes |
| Outcome | Your SKILL.md file contains a complete, enforceable motion and interaction section that causes AI coding agents to generate interfaces with consistent, purposeful animations, correct easing curves, and well-defined interactive states instead of defaults or missing transitions. |
| Prerequisites | Basic understanding of CSS transitions and animations (properties, durations, easing functions), Familiarity with the SKILL.md file format and how AI coding agents consume instruction files, Working knowledge of interactive states in CSS (hover, focus, active, disabled), Experience with at least one AI coding agent such as Cursor, Claude Code, or v0 |
| Part of | [Taste Skill Frontend Design Framework](../../methods/taste-skill-frontend-design-framework/METHOD.md) |

## Overview

Motion is the layer of frontend design that separates polished products from prototypes. When an AI coding agent generates a button, it rarely adds a hover transition. When it builds a modal, it usually hard-cuts it into view with no entrance animation. When it creates a dropdown, the easing curve is either missing or set to the CSS default `ease`, which looks mushy and unintentional. This premium frontend UI skill teaches you to write explicit motion and interaction rules inside SKILL.md files so that every AI-generated component ships with purposeful, branded animation behavior.

Within the [Taste Skill Frontend Design Framework](https://tryhamster.com/methods/taste-skill-frontend-design-framework), motion rules sit alongside typography, spacing, layout density, and anti-slop review constraints. They are the last mile of perceived quality. A user may not consciously notice that a tooltip fades in over 150ms with `ease-out`, but they will notice when it pops in with zero transition or lurches in over 800ms with linear easing. The goal of this skill is to make the "right" motion behavior the default output of your AI agent, not something you patch after generation.

The concrete artifact you produce is a motion and interaction section inside your SKILL.md file. This section typically covers four areas: duration ranges bucketed by interaction type, named easing curves mapped to motion categories, interactive state specifications for hover, focus, active, and disabled, and a transition property allowlist that prevents AI agents from animating properties that cause layout thrash (like `width`, `height`, or `top`). Once this section exists, every component the agent generates will reference these constraints, producing consistent motion across your entire interface. The section is portable: you can copy it between projects, share it with teammates, or publish it as part of an open-source design system SKILL.md file.

## How It Works

Motion taste rules work by replacing the AI agent's implicit defaults with explicit, bounded constraints. Without rules, an AI agent generating a CSS transition will pick from its training distribution, which is heavily biased toward tutorial-grade code: `transition: all 0.3s ease`. That single line contains three problems. First, `all` means every CSS property is animated, including layout properties that trigger expensive reflows. Second, `0.3s` is a generic middle-ground duration that is too slow for a color change and too fast for a page transition. Third, `ease` is a compromise curve that feels soft and directionless.

The mental model behind motion rules is constraint-based generation. You are not scripting every animation. You are defining the boundaries and categories so the agent can make correct local decisions. Think of it like a type system for motion: you define the valid types (micro, standard, macro), the valid values within each type (duration ranges, easing names), and the invalid patterns (animating layout properties, durations over 500ms for in-page interactions). The agent then operates freely within those bounds.

Easing curves deserve special attention because they carry emotional weight. `ease-out` (fast start, slow finish) feels responsive and confident, making it ideal for elements entering the viewport. `ease-in` (slow start, fast exit) feels like departure, making it right for elements leaving. `ease-in-out` works for elements that move from one position to another without entering or leaving. `linear` is almost never correct for UI motion because organic objects do not move at constant speed. Your SKILL.md should name these mappings explicitly so the agent does not guess.

Interactive states (hover, focus, active, disabled) are the other half of the motion equation. These are not animations in the keyframe sense, but they involve transitions, and they deeply affect perceived quality. A button with no hover state feels dead. A button with a hover state that changes `background-color` but does not transition feels jarring. A button whose focus ring appears with no transition feels mechanical. Your rules should specify which properties change per state and over what duration. Most hover transitions should complete in 100-200ms. Focus rings should appear instantly (0ms delay) for accessibility but can fade in over 100ms for visual smoothness.

This skill connects to other parts of the [Taste Skill Frontend Design Framework](https://tryhamster.com/methods/taste-skill-frontend-design-framework) at several points. Your [typography and spacing rules](https://tryhamster.com/skills/enforcing-typography-and-spacing-standards) determine the visual resting state that motion departs from and returns to. Your [layout density constraints](https://tryhamster.com/skills/configuring-layout-and-visual-density-constraints) determine how much space is available for motion to occupy. Your [anti-slop review rules](https://tryhamster.com/skills/writing-anti-slop-design-review-rules) should include motion checks as pass/fail criteria. Writing motion rules in isolation will produce technically correct but contextually disconnected animations.

## Step-by-Step Guide

### Step 1: Step 1: Audit your current AI-generated motion output

md if you are starting fresh). Good candidates include a button, a modal/dialog, a dropdown menu, a tooltip, a notification toast, a sidebar navigation, and a card with hover effects. For each generated component, document the motion behavior: does it have transitions? What are the durations and easing curves?

Which interactive states are handled? Record this in a simple table with columns for component, transition present (yes/no), duration, easing, and states handled. This baseline tells you exactly which gaps your motion rules need to fill. 3s ease` on everything.

> **Pro tip:** Run this audit twice with the same prompts. AI agents are non-deterministic, so if a component gets correct motion on one run and wrong motion on the next, that means the behavior is not constrained, just lucky. Only consistent behavior counts as covered.

### Step 2: Step 2: Define duration buckets by interaction category

Create three to four duration categories that cover the full range of UI motion. A proven starting structure is: micro (100-150ms) for color changes, opacity shifts, and icon state changes; standard (200-300ms) for component-level transitions like dropdowns opening, tooltips appearing, and accordion expansion; macro (300-500ms) for layout-level transitions like modals entering, sidebars sliding, and page transitions; and decorative (500-1000ms) for loading skeletons, progress indicators, and background ambient motion. Write each bucket as a named category in your SKILL.md with the allowed range, the types of interactions it applies to, and explicit examples. Include a hard ceiling rule: no UI transition should exceed 500ms unless it is decorative or page-level, and no decorative animation should exceed 1000ms.

> **Pro tip:** If you are unsure about a duration, lean shorter. Users perceive 200ms as instant and 400ms as deliberate. Anything above 500ms feels sluggish for interactive elements. Test by adding a `transition-duration` of your candidate value to a button hover and clicking it 20 times rapidly. If it feels like it is lagging behind your clicks, it is too slow.

### Step 3: Step 3: Map easing curves to motion intent

Define a named set of easing curves and specify when each one applies. At minimum, define three: an enter curve (elements appearing or expanding), an exit curve (elements disappearing or collapsing), and a move curve (elements repositioning without entering or leaving). 2, 1)` or the CSS keyword `ease-out`. 0, 1, 1)` or `ease-in`.

2, 1)` or `ease-in-out`. md so the agent uses variable names like `--ease-enter` instead of raw cubic-bezier values. Include a rule that `linear` is only valid for progress bars and continuous indicators, never for interactive element transitions. Explicitly ban `ease` (the CSS default keyword) because its curve is ambiguous and does not communicate intent.

> **Pro tip:** Material Design, Apple HIG, and Vercel's Geist all publish their easing curves. If your product already follows one of these systems, use their curves directly and cite them in your SKILL.md. This gives the AI agent training-data reinforcement because it has likely seen those curves in context before.

### Step 4: Step 4: Specify interactive state rules for common elements

md that covers the five core interactive states: default, hover, focus, active (pressed), and disabled. For each state, specify which CSS properties are allowed to change and what the transition duration should be. 5 with `pointer-events: none` and no transition. Repeat this pattern for links, cards, form inputs, and navigation items.

Be explicit about which properties are NOT allowed to change on hover. For example, elements should not change `font-size`, `padding`, or `width` on hover because those cause layout shifts.

> **Pro tip:** Focus states deserve extra care. Never remove the focus indicator. If you want a custom focus ring instead of the browser default, specify it as a `box-shadow` rather than an `outline` so it respects border-radius. Always ensure the focus state meets WCAG 2.1 contrast requirements (3:1 minimum against adjacent colors).

### Step 5: Step 5: Create a transition property allowlist

Write an explicit list of CSS properties that the AI agent is allowed to animate with transitions. This is a safeguard against the `transition: all` anti-pattern. The allowlist should include: `opacity`, `transform`, `background-color`, `color`, `border-color`, `box-shadow`, and `filter`. These properties are either compositor-friendly (opacity, transform) or paint-only (colors, shadows), meaning they do not trigger layout recalculation.

Explicitly ban transitions on `width`, `height`, `top`, `left`, `right`, `bottom`, `margin`, `padding`, `font-size`, and `border-width`. These cause layout thrash and produce janky animations, especially on lower-powered devices. Write this as a hard rule with the reasoning included so the AI agent understands the constraint, not just the list.

> **Pro tip:** If a design requires animating size, instruct the agent to use `transform: scale()` instead of `width`/`height`. If it requires animating position, use `transform: translate()` instead of `top`/`left`. These compositor-friendly alternatives are visually identical but perform dramatically better.

### Step 6: Step 6: Write reduced-motion override rules

Accessibility requires that all motion respects the `prefers-reduced-motion` media query. md that instructs the AI agent to wrap all transitions and animations in a reduced-motion check. The rule should state: when `prefers-reduced-motion: reduce` is active, all transition durations must be set to 0ms or replaced with instant opacity fades (no transforms, no slides, no scaling). This is not optional.

Include specific code guidance: the agent should use `@media (prefers-reduced-motion: reduce)` to override motion, not remove transitions entirely, so that state changes still occur visually but without animation. Opacity crossfades at 0ms are acceptable because they communicate state change without motion.

> **Pro tip:** Test your reduced-motion rules by enabling the setting in your OS (macOS: System Settings > Accessibility > Display > Reduce motion; Windows: Settings > Ease of Access > Display > Show animations). Every interactive element should still visually communicate state changes, just without movement.

### Step 7: Step 7: Add motion examples as inline code blocks in your SKILL.md

AI agents perform better with concrete examples than with abstract rules alone. md showing the correct implementation. For example, include a button component showing the hover transition with the correct property list, duration, and easing variable. Include a modal showing the entrance animation with the correct keyframe and duration.

Include a tooltip showing the fade-in with the correct delay and easing. Label each example with the rule it demonstrates. Three to five inline code examples are sufficient. md becoming bloated.

> **Pro tip:** Place the code examples immediately after the rules they illustrate, not in a separate examples section at the bottom. AI agents process SKILL.md files sequentially, and proximity between rule and example increases the chance the agent will apply the pattern correctly.

### Step 8: Step 8: Validate by regenerating your audit components

Return to the 5-8 components you generated in Step 1. md loaded into your AI agent. Compare the output against your motion rules: does the button use the correct easing? Does the modal entrance animation fall within the macro duration range?

Does the tooltip use the property allowlist instead of `transition: all`? Does the dropdown respect reduced-motion? Score each component pass/fail against your rules. md for clarity.

The most common cause of agent non-compliance is ambiguous phrasing. " Run the regeneration twice to confirm consistency.

> **Pro tip:** If a component passes on the first generation but fails on the second, the rule is probably present but not strongly enough stated. Promote it from a recommendation to a hard requirement using imperative language: 'always,' 'never,' 'must,' rather than 'prefer,' 'try to,' 'should.'

## Best Practices

- Define motion as CSS custom properties (e.g., `--duration-micro: 150ms`, `--ease-enter: cubic-bezier(0.0, 0.0, 0.2, 1)`) in your SKILL.md rather than raw values. Custom properties give the AI agent semantic names to reference, which reduces errors and makes the generated code more maintainable. Without them, the agent will hardcode different cubic-bezier values across components, creating inconsistency that is painful to audit.
- Keep your transition property allowlist as a strict deny-by-default rule: only the listed properties may be transitioned. If you frame it as a suggestion ('prefer these properties'), the AI agent will treat it as optional and fall back to `transition: all` when uncertain. Frame it as a constraint ('only these properties are valid for transition') and the agent will comply more reliably.
- Test motion rules on mobile viewports and low-powered devices, not just desktop. A 300ms animation that feels smooth on a MacBook Pro may stutter on a budget Android phone. Include a rule in your SKILL.md that mobile viewports (below 768px) should use the shorter end of each duration range. This nudges the agent toward faster, lighter animations on smaller screens.
- Always pair motion rules with your anti-slop review criteria. Add specific motion checks to your [anti-slop review rules](https://tryhamster.com/skills/writing-anti-slop-design-review-rules): 'No component may use `transition: all`,' 'No interactive element may lack a hover state,' 'No modal may appear without an entrance transition.' This creates a feedback loop where the review rules catch motion violations the generation rules missed.
- Version your motion rules section with a date stamp at the top (e.g., `## Motion Rules (v2, 2025-06-15)`). When you update durations or easing curves, the date stamp lets you correlate agent output quality with specific rule versions. This is especially useful when debugging regressions after SKILL.md edits.
- Write motion rules in order of frequency: put the most commonly needed rules (button hover, modal enter, tooltip fade) at the top of the section and edge cases (page transitions, skeleton loaders) at the bottom. AI agents weight earlier content in instruction files more heavily, so front-loading high-frequency rules improves compliance on the components that matter most.
- Include a 'motion budget' constraint: no single page should have more than three simultaneous animations running at once. This prevents the AI agent from creating pages where everything bounces, slides, and fades simultaneously, which feels chaotic and degrades performance. State it as a hard rule, not a guideline.

## Common Mistakes

- **Using `transition: all` as the default transition declaration** — This is the most common AI-generated motion anti-pattern. It animates every CSS property, including layout-triggering properties like `width` and `padding`, causing janky reflows on every state change. Catch it by searching generated code for the string `transition: all`. Replace it with an explicit property list from your allowlist, e.g., `transition: background-color 150ms var(--ease-enter), box-shadow 150ms var(--ease-enter)`. If your SKILL.md says 'avoid `transition: all`,' upgrade the language to 'never use `transition: all`; always list properties explicitly.'
- **Applying the same duration to all transitions regardless of context** — AI agents default to uniform durations (typically 300ms or 200ms for everything) because most training data uses a single duration value. This makes micro-interactions feel sluggish and macro transitions feel abrupt. The diagnostic sign is that a color change on hover takes the same time as a modal entrance. Fix this by using your duration buckets explicitly in rules: 'hover color changes: 100-150ms; modal entrance: 300-400ms.' Name the buckets in the rule so the agent can match the context to the correct bucket.
- **Writing motion rules as vague preferences instead of enforceable constraints** — Rules like 'use smooth easing' or 'animations should feel natural' are interpreted differently on every generation. The agent has no fixed definition of 'smooth' or 'natural,' so it falls back to its training distribution, which is exactly the default behavior you are trying to override. Replace every vague adjective with a specific value: 'use `cubic-bezier(0.0, 0.0, 0.2, 1)` for enter transitions' leaves zero room for interpretation. If your validation step (Step 8) shows inconsistent output, search your SKILL.md for adjectives and replace them with numbers.
- **Forgetting to specify reduced-motion behavior** — Without explicit reduced-motion rules, the AI agent will generate animations that are inaccessible to users with vestibular disorders. This is both an accessibility violation and a legal risk. The diagnostic sign is the absence of any `prefers-reduced-motion` media query in generated CSS. Fix this by making the reduced-motion section mandatory in your SKILL.md, not optional. State it as a hard accessibility requirement with the specific override behavior: 'When `prefers-reduced-motion: reduce` is active, set all transition durations to 0ms and remove all keyframe animations except opacity fades.'
- **Animating entry without animating exit** — AI agents frequently add entrance animations to modals, dropdowns, and toasts but omit the exit animation, causing the element to disappear abruptly. This asymmetry feels broken to users. Catch it by testing the dismiss action of every component that has an entrance animation. Fix it by pairing every entrance rule with a corresponding exit rule in your SKILL.md: 'Modals must enter with a fade-up over 300ms using `--ease-enter` AND exit with a fade-down over 200ms using `--ease-exit`.' The exit should be slightly faster than the entrance so dismissal feels responsive.
- **Overloading the SKILL.md with too many motion rules, causing the agent to ignore later rules** — AI agents have finite context windows. If your motion section exceeds 800-1000 words, the agent may start dropping rules that appear later in the section. The symptom is that early rules (like duration buckets) are followed but later rules (like reduced-motion overrides) are ignored. Fix this by keeping the motion section under 600 words, using tables instead of prose for repetitive specifications, and placing the most critical rules (property allowlist, reduced-motion) in the first half of the section.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/taste-skill-frontend-design-framework/METHOD.md) — Taste Skill Frontend Design Framework

## Related Skills

- [Enforcing Typography and Spacing Standards in AI-Generated UI](../enforcing-typography-and-spacing-standards/SKILL.md)
- [Writing Anti-Slop Design Review Rules](../writing-anti-slop-design-review-rules/SKILL.md)
- [Configuring Layout and Visual Density Constraints for AI Agents](../configuring-layout-and-visual-density-constraints/SKILL.md)
- [Auditing AI-Generated Frontends for Design Quality](../auditing-ai-generated-frontends-for-design-quality/SKILL.md)
- [Installing SKILL.md Files in AI Coding Agents](../installing-skill-files-in-ai-coding-agents/SKILL.md)
- [Authoring Portable SKILL.md Files for Design Systems](../authoring-portable-skill-files-for-design-systems/SKILL.md)
