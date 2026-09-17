---
name: reference-driven-graphics
description: "Build custom branded animated graphics (three.js/canvas/particle effects, hero animations, generative visuals) from visual references or Figma sketches — the reference → prompt → exact-geometry → screenshot-iterate → parameterize → embed workflow. Use when the user wants an animation \\\"like X's site\\\" (Stripe, Linear, etc.), wants to turn a Figma sketch or SVG into an animated graphic, needs to embed generated animation code into Webflow/React/Vue, or wants to scale one effect across many cards/sections."
version: "1.0.0"
metadata:
  category: "Marketing"
---

Turn visual references and hand-drawn sketches into production animated graphics through short, verifiable iterations. Based on relate_studio's workflow (Syntetika/Stripe case) plus lessons from the mermaider pipeline.

## When to use

- "I want an effect like [site]'s hero" — particles, morphing data-viz, generative motion
- A Figma sketch/SVG exists and must become the *exact* geometry of an animation
- Generated animation code needs embedding in Webflow, React, Vue, or plain HTML
- One effect must scale across many cards/sections with different content

## Core rules

1. **Always start from 1–2 concrete references.** Never design from adjectives. Get screenshots or a URL of the target effect. Identify the tech with Wappalyzer or by reading the page source (usually three.js, canvas 2D, or CSS). State the reference explicitly in the first prompt.
2. **First prompt is plain words, zero detail.** Describe what the effect *does*, not how to build it ("particles form illustration A, bloop into a transition state, reform as illustration B"). Take the first working iteration, then refine. Never front-load every requirement.
3. **Strip AI cruft immediately.** First-pass output always includes floating text, gradients, watermark-ish labels, extra UI. Remove them as the second prompt, before any refinement.
4. **One change per prompt.** Every refinement is its own short message. Never batch five adjustments — you can't tell which one broke it.
5. **Exact geometry comes from SVG, never from description.** When the shape matters, draw it (Figma pen tool → export SVG) and hand the file over: "rebuild the animation to match this geometry." Describing a shape in words is the anti-pattern; the SVG *is* the spec.
6. **Debug with screenshots, not adjectives.** When something looks wrong (gaps, overflow, jitter), screenshot it, circle/point at the problem, describe what bothers you. 2–3 screenshot rounds beat 10 text rounds.
7. **Name the animation stages to fix jerkiness.** Stalls and snapping mean the model has no state model. Spell it out: `static → transition → static`, ask for eased, overlapping transitions between named states. For loops: every animated property must be a pure function of loop phase t∈[0,1), state at t=0 equals t=1, no accumulation (`+=` in a tick function is a bug).
8. **Parameterize before shipping.** All tunables live in one config block at the top (particle count, durations, colors, parallax strength) — and colors come from the project's brand tokens, not the model's taste. Ask "what do I adjust and where" and make the answer be "the config block."
9. **Decouple content from canvas via attributes.** Text/labels never live inside the animation. Ask for a `data-*` attribute contract so markup (any framework) triggers/feeds the effect, and one shared script serves every instance. This is what makes the effect scale across cards.
10. **Embedding is a question, not a guess.** Ask "how do I get this onto [my stack]?" — for Webflow: an Embed block for markup + the engine in Project Settings before `</body>`. For React/Vue: a component wrapping the canvas with props mapped to the config block.

## Worked example (the Syntetika case)

1. Reference: Stripe's data-viz particle morph. Wappalyzer says three.js.
2. Prompt: *"I'm trying to figure out how this effect on Stripe's site is created — the data visualisation changes per selected feature and particles transition through a bloop state (screenshots attached). Looks like three.js."*
3. Strip the floating text it added by default.
4. The graph shape was wrong → drew it in Figma, exported SVG, sent it: Claude parsed the path and rebuilt particle targets to match.
5. Gaps and overflowing lines → screenshots + "lines spill past their boundary here" → fixed in two rounds.
6. *"Can I keep the text outside the animation and connect via attributes?"* → engine split from markup; text freely styled in Webflow.
7. Tuned config: 4000 particles instead of 2000, longer transition, parallax on.
8. Scaled: each card carries `data-*` attributes; one script in the body tag drives all of them.

## Anti-patterns

- **Describing geometry in prose** → model invents a different shape every round. Draw it, export SVG. (Failure mode: infinite "no, more curved" loops.)
- **Batched change requests** → regressions you can't bisect. One change per prompt.
- **Text baked into the canvas** → can't restyle, can't localize, breaks responsive layout. Attributes contract instead.
- **"Make it smoother"** without naming stages → the model reshuffles easings blindly. Name the state machine.
- **Accepting magic numbers scattered through the code** → next week nobody can tune it. Config block at top, brand colors injected.
- **Skipping the reference** → brand-less generic output ("AI slop gradients"). Reference first, always.

## Verification checklist before shipping

- Loops perfectly (record 2 cycles, frame 1 == last frame)
- No layout shift; canvas sized by container, devicePixelRatio handled
- Reduced-motion fallback (`prefers-reduced-motion` → static first frame)
- Config block documented; brand hexes only
- Works with the real markup/attribute contract, not just the demo page
