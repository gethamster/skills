# FAQ: Enforcing Typography and Spacing Standards in AI-Generated UI

## How do I choose between a 1.2, 1.25, and 1.333 type scale ratio for my SKILL.md?

Match the ratio to your content density and purpose. 2 for data-dense interfaces like dashboards and admin panels where you need many distinct sizes within a small range. 25 for general-purpose applications and marketing sites where you want clear hierarchy without dramatic size jumps. 333 for editorial, portfolio, or storytelling sites where dramatic size contrast between headings and body creates visual impact.

2. It is the most versatile ratio and works well for most projects. You can always adjust after testing.

## Should I enforce typography rules before or after configuring layout and visual density constraints?

Typography first, then layout. Type decisions cascade into layout because font sizes, line heights, and spacing values determine how much content fits in a given area. , 'maximum 3 columns'), the AI agent may choose type sizes that technically fit but feel cramped or lost in the available space. When typography rules are established first, your layout constraints can reference the typographic rhythm.

For example, column gutters should be a multiple of your spacing base unit, and section heights should accommodate your heading-to-body spacing rules. Refer to the [configuring layout and visual density constraints](https://tryhamster.com/skills/configuring-layout-and-visual-density-constraints) skill after completing this one.

## How long should it take to write a complete typography and spacing SKILL.md section?

Plan for 45-90 minutes for the first version, including the baseline audit, rule writing, and initial testing. The audit takes 15-20 minutes if you generate three pages and inspect them systematically. Writing the rules takes 20-30 minutes once you have decided on your scale, line heights, and spacing values. Testing and iterating takes another 15-30 minutes.

Subsequent revisions, after model updates or project changes, take 15-20 minutes because you are tweaking existing rules rather than writing from scratch.

## Why does my AI agent keep ignoring my line-height rules for headings?

This usually happens for one of three reasons. First, your rule may be ambiguous about which elements it applies to. ' Second, a framework-level style may be overriding your rule. Tailwind's prose plugin and CSS resets apply their own line heights, and the agent may be generating code that applies your value AND the framework value, with the framework winning the cascade.

md file. Move critical line-height rules to the top of the file, within the first 50 lines.

## Can I use the same typography SKILL.md across multiple projects with different fonts?

Yes, with one important caveat: different typefaces have different optical properties that affect ideal line height and letter spacing. md written for Inter (a geometric sans-serif with tall x-height) will specify slightly different values than one optimized for Georgia (a serif with moderate x-height). The type scale ratios and vertical spacing rules are portable across fonts. The line heights and letter spacing values may need adjustment.

A practical approach is to write your portable rules for scale, spacing, and density, then add a 'Font-Specific Adjustments' section at the bottom that you swap per project. Keep 80% of the file stable and customize the 20% that is font-dependent.

## How do I handle typography rules for components that mix multiple text sizes, like a card with a title, description, and metadata?

Define component-level typography patterns in addition to your global rules. A card pattern might specify: 'Card title uses text-lg (23px) with line-height 1.25 and font-weight 600. Card description uses text-base (16px) with line-height 1.55 and a maximum of 3 lines with text truncation. Card metadata (date, author, category) uses text-sm (14px) with line-height 1.4 and a muted color.' Include the internal spacing: '8px between title and description, 12px between description and metadata, 16px padding on all sides of the card.' These component patterns teach the agent the relationship between text elements within a container, which is harder for agents to derive from global rules alone.

## What is the most impactful single rule I can add to immediately improve ai generated frontend aesthetics?

Constrain body text line length to a maximum of 70 characters (approximately 640-680px at 16px). This single rule eliminates the most common readability failure in AI-generated layouts: text that stretches edge-to-edge across wide viewports. Every AI coding agent, when unconstrained, will allow body text to fill the available container width, which on a 1440px monitor produces lines of 120+ characters that are physically painful to read. Adding 'max-width: 680px on body text containers' in your SKILL.md takes 10 seconds to write and immediately makes every generated page more readable and more visually polished.
