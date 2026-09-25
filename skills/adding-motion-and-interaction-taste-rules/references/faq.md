# FAQ: Motion and Interaction Taste Rules for Premium Frontend UI

## What durations should the rules use?

Use ranges from a published source and put them in named buckets. Nielsen Norman Group's guidance on UI animation duration is a common reference: short for direct feedback, longer for larger changes such as a modal, and slightly shorter for exits than for entrances. Ask the agent to pick a bucket by name so values stay consistent across components. Adjust the ranges to your brand after testing.

## Why only animate transform and opacity?

Those properties can be handled by the browser's compositor without recalculating layout or repainting, so animations stay smooth. web.dev recommends this restriction, and the Taste Skill default makes it a hard rule. Animating width, height or position properties causes layout work on every frame and tends to stutter on slower devices.

## Is reduced-motion support required?

It is required by the Taste Skill default once the motion dial is above a low level, and it is good practice everywhere. The prefers-reduced-motion media feature tells you when a user has asked to minimize motion. WCAG's AAA criterion on animation from interactions asks that such motion can be turned off unless essential. Write the fallback for each pattern rather than relying on a single global rule.

## Should the rules name a specific animation library?

Yes. Naming one library and its import path stops the agent from mixing approaches in the same codebase. The Taste Skill default standardizes on Motion imported from motion/react and uses GSAP only for pinning and scrubbing effects. Use whatever your project already depends on, and say so explicitly.

## How do I know if the motion rules are working?

Regenerate the same components before and after adding the rules and list every animation with its purpose, duration bucket and animated properties. Then enable reduced motion and check each fallback. If the agent still adds unexplained animation, move the purpose test higher in the section and phrase it as a requirement.
