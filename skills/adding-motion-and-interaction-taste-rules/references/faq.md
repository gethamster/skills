# FAQ: Adding Motion and Interaction Taste Rules

## How do I choose between CSS transitions and CSS keyframe animations in my motion rules?

Use CSS transitions for state changes between two known states (hover on/off, visible/hidden, expanded/collapsed). Use CSS keyframe animations for multi-step sequences, looping animations, or entrance animations where the starting state is not already rendered in the DOM. In your SKILL.md, specify which components use which approach. Most interactive states (buttons, links, dropdowns) should use transitions. Modals, toasts, and skeleton loaders typically need keyframe animations because their initial state is 'not present.'

## How long should it take to write a complete motion rules section for a SKILL.md file?

For a typical project, 45-90 minutes on the first pass. This includes auditing current output (15 min), writing duration buckets and easing mappings (15 min), specifying interactive states (15 min), writing the allowlist and reduced-motion rules (10 min), and adding inline code examples (10 min). Subsequent updates to an existing motion section usually take 15-20 minutes. The time investment pays off immediately because you stop manually fixing motion issues in every generated component.

## Should I add motion rules before or after writing typography and spacing rules in my SKILL.md?

Write typography and spacing rules first. Motion operates on top of the visual resting state that typography and spacing define. If your spacing is wrong, your animations will move elements to incorrect positions. If your typography is unsettled, text transitions will feel off because the text itself looks wrong.

The recommended order is: typography, spacing, layout density, then motion. See [enforcing typography and spacing standards](https://tryhamster.com/skills/enforcing-typography-and-spacing-standards) for the foundational layer.

## Why does my AI agent keep ignoring the easing curves I specified in my SKILL.md?

Three common causes. 2, 1)`). Second, the curves are too far down in the motion section and the agent's context window is deprioritizing them. Move easing rules to the top of the motion section.

Third, you did not include a code example showing the curve in use. AI agents follow concrete examples more reliably than abstract rules. Add a 5-line CSS snippet showing the curve applied to a real component.

## How do I handle motion rules for components that have both CSS transitions and JavaScript-driven animations?

Specify in your SKILL.md which components are CSS-only and which require JavaScript animation (e.g., drag-and-drop, gesture tracking, physics-based spring animations). For JS-animated components, define the same duration and easing constraints but reference them as JavaScript constants rather than CSS custom properties. Include a rule that JS animations must still respect `prefers-reduced-motion` by checking `window.matchMedia('(prefers-reduced-motion: reduce)')`. The key principle is that the constraint is the same regardless of implementation method.

## Can I have different motion rules for different sections of my application?

Yes, but use a layered approach rather than separate rule sets. Define a base motion section that applies globally (duration buckets, easing curves, allowlist, reduced-motion). Then add context-specific overrides for sections that need different behavior, like a marketing landing page that uses slightly more dramatic animations than the core app. Keep overrides minimal, no more than 5-10 lines each.

md files](https://tryhamster.com/skills/authoring-portable-skill-files-for-design-systems).

## How do I prevent the AI agent from adding gratuitous animations to elements that should be static?

Add an explicit 'no animation' list to your motion section. Specify components and elements that must never be animated: body text, navigation links in the header (hover color change is fine, but no bouncing or scaling), form labels, table data cells, breadcrumbs. Frame it as a constraint: 'The following elements must have no transition or animation properties: [list].' This is as important as specifying what should animate because AI agents, when given motion instruction, sometimes over-apply it to everything on the page.
