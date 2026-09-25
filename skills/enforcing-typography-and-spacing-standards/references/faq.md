# FAQ: Enforcing Typography and Spacing Standards in AI UI

## How many font sizes should the rules allow?

Enough to cover each role on your pages and no more. Most marketing pages need a display size, a section heading, a subheading, body and a small size for labels and captions. Every size beyond that is another choice the agent can misuse. If a new role appears, add a size deliberately rather than letting the agent invent one.

## Should I ban Inter because the Taste Skill default discourages it?

Only if Inter is not your brand choice. The default skill discourages it as a default because agents reach for it automatically, and it allows Inter when a brief asks for a neutral or standard feel. If your design system uses Inter, keep it and remove the ban from your copy of the skill. Either way, the font should be a decision the team made on purpose.

## Where do the numbers for measure and line height come from?

Use a published source and cite it in the skill. Practical Typography recommends an average line length in characters, and the WCAG text-spacing criterion states the line height content must tolerate. Citing sources keeps teammates from relitigating the rule and gives the agent a reason to follow it.

## How do I stop the agent from using arbitrary spacing values?

Give it a named scale and forbid anything outside it. Tie each step to a role, such as padding inside a component or space between sections. Then check generated code for values that are not on the scale; each one is either a missing role or a wording gap to fix.

## Do these rules belong in the same SKILL.md as layout and motion?

They can, as one section of a larger design skill, which is how the Taste Skill default is organized. Split them into a separate file only when the section grows long enough that the agent would load material it rarely needs. The open Agent Skills format supports reference files that the main SKILL.md links to for this purpose.
