# FAQ: Building a Realistic Prototype in One Day

## How do I build a sprint prototype if nobody on the team is a designer?

Use Keynote, Google Slides, or PowerPoint instead of Figma. These tools are familiar to everyone and produce prototypes that are easily good enough for user testing. Take screenshots of competitor products or similar apps for visual reference, use those as a baseline for layout, and swap in your own content. The prototype does not need to be beautiful.

It needs to be clear, clickable, and populated with realistic content.

## How long should the prototype take to build from start to finish?

Plan for 6-8 hours, which fills one full sprint day. Spend the first 30 minutes reviewing the storyboard and dividing work. Dedicate 3-4 hours to parallel screen building. Reserve 30 minutes for stitching screens together, 30 minutes for the internal trial, and 60-90 minutes for fixes.

If you finish early, use remaining time to test the prototype on the actual device rather than adding more screens.

## Should I build the prototype before or after writing the Day 5 test script?

Build the prototype first, then finalize the test script. The test script depends on knowing exactly what screens exist, what interactions are possible, and where the prototype's boundaries are. However, you should have a draft test scenario (the one-paragraph context the facilitator reads to users) ready before you start building, because it clarifies which parts of the flow are critical to prototype. See [conducting sprint user tests](https://tryhamster.com/skills/conducting-sprint-user-tests) for the full test script process.

## What level of visual fidelity is actually needed for the prototype?

Target the level of a polished slide presentation, not a production UI. Use a single font family, a limited color palette (2-3 colors), consistent button styles, and real content. Avoid custom illustrations, animated transitions, or complex micro-interactions. ' you have the right fidelity.

If their first reaction is 'This is really beautiful,' you have over-invested.

## Why does my prototype keep taking longer than one day to finish?

The three most common causes are scope creep, unclear storyboard, and solo execution. First, check whether you locked scope at the start of the day. If team members are adding screens not in the storyboard, cut them. Second, review your storyboard from [storyboarding sprint concepts](https://tryhamster.com/skills/storyboarding-sprint-concepts).

If panels are vague or ambiguous, builders spend time making decisions that should have been settled on Day 3. Third, verify that you are dividing work across the team rather than funneling everything through one designer.

## Can I reuse the sprint prototype as a design specification for engineering?

No, and attempting to do so is a common and costly mistake. The prototype was built for speed, not accuracy. It contains hardcoded content, inconsistent spacing, missing edge cases, and no consideration for responsive behavior or accessibility. Treat it as a communication tool that shows intent, not as a blueprint.

After the sprint, create proper design specifications informed by both the prototype and the Day 5 test results.

## How do I handle parts of the flow that require dynamic data or logic?

Fake it with static screens. If the flow includes a search feature, build one screen showing the search input and a second screen showing pre-populated results for a specific query that the facilitator will guide the user to enter. If the flow includes personalization, build the screens as if the user is one specific persona with fixed data. The facilitator can set context verbally: 'Imagine you searched for running shoes and this is what appeared.' This approach eliminates the need for any code or dynamic behavior.
