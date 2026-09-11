# FAQ: Configuring Layout and Visual Density Constraints for AI Agents

## How do I configure layout density constraints for a project that uses both Tailwind and custom CSS?

Write all constraints in pixel values, never in framework-specific utility class names. State '48px' rather than 'py-12.' The agent will translate pixel values into the appropriate implementation for whatever styling system the project uses. If you need to reference the Tailwind config for consistency, add a note like 'this project's Tailwind config maps spacing-12 to 48px' as context, but keep the constraint itself in absolute units. This makes the SKILL.md portable and avoids breakage when the Tailwind config is customized.

## How long should it take to configure layout constraints from scratch?

The initial audit of agent defaults takes about 15-20 minutes if you generate three to five pages and take screenshots. Writing the first version of constraint rules takes 30-45 minutes for someone comfortable with CSS layout concepts. Testing and calibration, where you regenerate baseline pages and compare outputs, takes another 15-30 minutes. Expect the full first pass to take 60-90 minutes.

Subsequent refinements are much faster, typically 10-15 minutes per iteration, because you are adjusting specific values rather than building the structure.

## Should I configure layout constraints before or after writing typography rules?

Configure layout constraints first. Typography rules govern micro-level relationships (font sizes, line heights, heading hierarchies), but they operate within the container and grid structure that layout constraints define. If you write typography rules first and then change the container width, your type scale may need adjustment because line lengths change. Start with the macro layout: containers, grids, section spacing.

Then layer typography rules that fit within those containers. The sibling skill [enforcing typography and spacing standards](https://tryhamster.com/skills/enforcing-typography-and-spacing-standards) is designed to follow this skill in sequence.

## Why does my agent keep reverting to single-column layouts despite my multi-column constraints?

This typically happens for one of three reasons. First, your constraint may be phrased as a suggestion ('prefer multi-column') rather than a rule ('must use minimum 2 columns'). Rewrite as imperative. md file, such as a mobile-first rule that the agent is applying to all viewports.

' Third, the constraint may be positioned too far down in the file. Move layout constraints above other rule categories so they receive higher priority in the agent's attention.

## How do I handle pages where high density would hurt usability, like onboarding flows?

Add a 'Known Exceptions' subsection to your constraint block that lists page types exempt from standard density targets. Onboarding flows, empty states, single-action confirmation screens, and error pages are common exceptions. For each exception, specify the allowed density range, which is typically 25-40% for these cases, and the reason. The agent will check the page type against the exception list before applying constraints.

Without this list, the agent will attempt to densify pages that genuinely need open, focused layouts, creating confusing onboarding experiences or cramped error messages.

## Can I use the same density constraints across different AI coding agents like Cursor, Claude Code, and v0?

Yes. This is a core design principle of SKILL.md files within the Taste Skill framework. Because constraints are written in plain markdown with numeric values rather than agent-specific syntax, they work across any agent that reads markdown instruction files. The specific compliance rate may vary slightly between agents (some follow numeric rules more precisely than others), but the format is portable. Test your constraint file with each agent you use and note any agent-specific adjustments in a comment block, such as 'v0 tends to interpret gutter widths loosely, specify gap-[20px] explicitly if output gutters are inconsistent.'

## What content-to-whitespace ratio should I aim for if my brand identity emphasizes minimalism?

Minimalist design is not the same as empty design. Minimalist brands like Apple and Linear operate at 45-55% content density. They use whitespace intentionally to create focus and hierarchy, but every pixel of whitespace serves a purpose. The anti-pattern is not whitespace itself but accidental, uniform whitespace that has no relationship to content hierarchy.

Set your density target at 45-55%, keep your spacing scale constrained (40px/56px/72px for sections), and add a rule that whitespace between elements must vary based on semantic relationships rather than being uniform. Two related elements get smaller gaps. A shift to a new topic gets a larger gap. This produces intentional minimalism rather than the accidental emptiness of agent defaults.
