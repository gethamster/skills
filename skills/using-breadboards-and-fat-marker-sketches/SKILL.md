---
name: using-breadboards-and-fat-marker-sketches
description: "Teaches you how to use breadboard notation for flow-based solutions and fat-marker sketches for visual concepts, so you define solutions at the right level of abstraction during shaping without accidentally handing builders a pixel-perfect spec or a vague wish."
metadata:
  method: shape-up
---

# Using Breadboards and Fat-Marker Sketches for Breadboarding Product Design

> Teaches you how to use breadboard notation for flow-based solutions and fat-marker sketches for visual concepts, so you define solutions at the right level of abstraction during shaping without accidentally handing builders a pixel-perfect spec or a vague wish.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Beginner |
| Time to Learn | 30-60 minutes per shaped concept |
| Outcome | You produce solution concepts that are concrete enough to evaluate risk and bet on, yet abstract enough that builders retain creative freedom during the build cycle. |
| Prerequisites | Understanding of the Shape Up shaping phase and what a pitch contains, A defined problem or raw idea that needs a solution concept, Familiarity with the appetite concept (how much time you're willing to spend) |
| Part of | [Shape Up](../../methods/shape-up/METHOD.md) |

## Overview

Breadboarding product design and fat-marker sketching are the two core visualization tools in the [Shape Up](https://tryhamster.com/methods/shape-up) shaping phase. They sit between the moment you identify a problem worth solving and the moment you write a formal pitch for the betting table. Their purpose is precise: make your proposed solution concrete enough that stakeholders can evaluate it, spot risks, and make a confident bet, without making it so detailed that you accidentally remove the builder's room to maneuver during the cycle.

Breadboarding borrows its name from electrical engineering, where a breadboard is a bare platform for wiring components together to test a circuit before committing to a finished board. In product shaping, a breadboard is a text-and-arrow notation that captures three elements: places (screens, dialogs, menus), affordances (buttons, fields, labels the user can interact with at each place), and connection lines (the flow from one affordance to the next place). The result looks nothing like a UI. That is the point. It forces you to think about what the user can do and where they go, not what the interface looks like. This is the right tool when the core of the solution is a workflow, a sequence of steps, or a set of interactions whose visual arrangement is secondary.

Fat-marker sketching is the counterpart for situations where visual arrangement is the solution. Some problems cannot be resolved without deciding that a certain element appears above another, or that a map sits beside a list. A fat-marker sketch uses the thickest Sharpie, the largest brush tool, or the blurriest pen in your drawing app so that you literally cannot draw fine detail. You sketch blobs, regions, and rough labels. The artifact communicates spatial relationships and element hierarchy without specifying typography, spacing, colors, or exact copy. Together, breadboards and fat-marker sketches give you a complete toolkit for shaping: one for flow, one for layout, and both calibrated to the same level of abstraction.

The artifact you produce is not a deliverable for engineering. It is a thinking tool that becomes part of the pitch. When you attach a breadboard or fat-marker sketch to your pitch, you are showing the betting table exactly what you mean by the solution, the boundaries you drew around it, and the rabbit holes you intentionally avoided. That clarity is what makes a pitch bettable.

## How It Works

Both tools work by constraining the fidelity of your output so you can only express the decisions that matter at the shaping stage. Shaping in [Shape Up](https://tryhamster.com/methods/shape-up) occupies a specific altitude: above the level of tasks and UI details, but below the level of vague feature requests. The challenge is that most people default to either extreme. Engineers and designers instinctively reach for wireframes, mockups, or code, which locks in too many decisions too early. Executives and product managers often stay at the level of a one-sentence feature request, which leaves too much ambiguity for the build team to start without weeks of discovery.

Breadboarding solves this by decomposing any interaction into its three atomic parts. Places are the distinct contexts a user occupies. An invoice screen, a confirmation dialog, and a settings page are all places. Affordances are the interactive elements available at each place: a "Send" button, a text field labeled "Recipient," a toggle for notifications. Connection lines show that activating a specific affordance moves the user to a specific place. By limiting yourself to these three elements, you express the entire flow without ever deciding whether the affordances appear in a sidebar, a modal, or an inline form. Those decisions belong to the builders.

Fat-marker sketching works on a different axis. Instead of decomposing interactions, it constrains visual resolution. When you force yourself to use a tool that physically prevents you from drawing small elements, you can only communicate the big structural choices: this region is a list, this region is a preview, the action button goes here. You cannot accidentally specify padding, icon style, or font weight. The sketch is blurry by design, and that blurriness is the abstraction boundary. Anyone looking at the sketch understands the spatial concept without mistaking it for a finished design.

The reason these two tools complement each other is that solutions have two independent dimensions of complexity. Flow complexity asks: how many steps does the user take, and what branching exists? Visual complexity asks: how must elements be arranged on screen to make the concept work? Most solutions lean heavily toward one dimension. A multi-step invoice approval workflow is flow-heavy and calls for a breadboard. A dashboard redesign that reorganizes existing data into a new layout is visual-heavy and calls for a fat-marker sketch. Some solutions involve both, and you use whichever tool fits each part of the concept.

The underlying principle is that premature convergence on details creates two failures. First, it burns shaping time on decisions the builder would make better with full context. Second, it misleads the betting table into thinking the solution is more fully designed than it actually is, which creates false confidence about scope and risk. Both breadboards and fat-marker sketches prevent premature convergence by making detail physically impossible to express.

## Step-by-Step Guide

### Step 1: Step 1: Identify whether the solution is flow-driven or visual-driven

Before you pick up any tool, examine the problem you shaped and the solution direction you have in mind. Ask yourself: does the core of this solution depend on a sequence of user actions and transitions between screens, or does it depend on how information is spatially arranged on a single screen or a small set of screens? If the answer is "the user needs to go through steps A, B, and C," you need a breadboard. If the answer is "the user needs to see X next to Y with Z available as an action," you need a fat-marker sketch.

Write down a one-sentence answer to this question before proceeding, because choosing the wrong tool will either bury critical layout decisions in a flow diagram or force a simple workflow into an unnecessary visual exercise.

> **Pro tip:** If you are unsure, default to a breadboard. You can always add a fat-marker sketch for one specific screen later, but starting with a sketch when the problem is really about flow often leads you to draw too much UI too early.

### Step 2: Step 2: List the places in the flow

For a breadboard, start by listing every distinct place the user will visit during this interaction. A place is any context where the user stops and does something: a screen, a dialog, a page section that behaves independently. Write each place as a short noun phrase. Do not think about what the place looks like.

Do not think about navigation chrome, headers, or sidebars. Just name the places. " Keep the list as short as possible. If you find yourself listing more than 6-8 places, you may be shaping a solution that exceeds your appetite, and you should revisit scope.

> **Pro tip:** Name places after what the user is doing there, not after UI patterns. 'Choose Recipient' is better than 'Modal' because it communicates intent regardless of how the builder implements it.

### Step 3: Step 3: Add affordances to each place

Under each place name, list the affordances the user has available. Affordances are interactive elements: buttons, input fields, links, toggles, dropdown menus. Write them as short labels that describe what the user sees or does. " Be specific about what affordances exist, because this is the core of your design decision.

Omitting an affordance means you are intentionally deciding the user cannot do that thing. Including one means you are committing to providing it. This is where shaping happens: you are making real product decisions about capability without making UI decisions about appearance.

> **Pro tip:** If you catch yourself writing affordances like 'a nice way to see the data' or 'some kind of filter,' you have not actually shaped the solution yet. Go back to the problem and make a concrete decision about what the user needs.

### Step 4: Step 4: Draw connection lines between affordances and places

Now connect the breadboard. Draw an arrow from each affordance that triggers navigation to the place it leads to. " Not every affordance creates a connection. The "Recipient field" does not navigate anywhere.

Only draw lines for affordances that change the user's place. When you finish, you should be able to trace the user's entire journey from start to finish. " If the flow makes sense when narrated, the breadboard is working.

> **Pro tip:** Watch for dead ends. If a place has no outbound connections, either the flow ends there (which is fine for a final confirmation) or you forgot to add an affordance for the user to navigate away. Dead ends in the middle of a flow are a shaping gap.

### Step 5: Step 5: Switch to fat-marker sketching for visual concepts

If your solution, or part of your solution, depends on spatial arrangement, put down the breadboard and pick up the thickest drawing tool you have. On paper, use a wide Sharpie or a dry-erase marker. In a digital tool, use the largest brush size or a low-resolution canvas. Sketch the rough regions of the screen.

Draw rectangles or blobs for content areas and label them. A dashboard sketch might show a large rectangle labeled "Map" on the left, a narrow rectangle labeled "Event List" on the right, and a small rectangle labeled "Filters" above the list. Do not draw individual list items, icons, buttons, or text. If your marker lets you draw a button, your marker is too thin.

The entire sketch should take 30-90 seconds to draw. If it takes longer, you are adding too much detail.

> **Pro tip:** Try sketching on a small sticky note or index card. The physical constraint of a small surface reinforces the fat-marker principle and prevents you from adding detail simply because you have space.

### Step 6: Step 6: Annotate the sketch with key decisions

A fat-marker sketch alone can be ambiguous. Add short written annotations that clarify the decisions embedded in the sketch. " These annotations are not implementation specs. They are boundary markers that tell the builder what must be true about the final design.

Without annotations, a builder might reasonably interpret the "Map" region as decorative rather than interactive, or might not realize the list and map are connected. Each annotation should express a design decision, not a design detail.

> **Pro tip:** Frame annotations as outcomes or behaviors, not as visual specifications. Write 'selecting an event highlights it on the map' rather than 'clicking a row changes its background color to blue and zooms the map to the pin.'

### Step 7: Step 7: Test the concept against known rabbit holes

Before you consider the breadboard or sketch finished, walk through the concept looking for rabbit holes: areas of complexity that could swallow the entire cycle if left unaddressed. For each place on a breadboard, ask: could this place become an entire project by itself? For each region on a fat-marker sketch, ask: does this require a technology or integration we have never built before? Write down every rabbit hole you identify.

For each one, make an explicit decision: either solve it now by adding constraints to the breadboard or sketch, or call it out of scope in the pitch. A common rabbit hole in a "New Invoice Form" breadboard is currency conversion. " This is a scope decision, and the breadboard is where you make it visible.

> **Pro tip:** Pay special attention to any place or region that interacts with external systems (email, payments, third-party APIs). These are the most common sources of scope explosion during the build cycle.

### Step 8: Step 8: Integrate the artifacts into your pitch

The breadboard or fat-marker sketch is not a standalone document. It is a section of your pitch. Place it after the problem statement and before the rabbit holes section. Write a short narrative that walks the reader through the artifact.

For a breadboard, narrate the primary flow: "The user starts at the Invoice List, clicks Create New, and arrives at a form where they choose a recipient and add line items. After clicking Send, they see a confirmation dialog. " For a fat-marker sketch, describe the spatial concept: "The main screen is divided into a map on the left showing event locations and a scrollable list on the right. " The narrative ensures the betting table understands the artifact even if they are unfamiliar with the notation.

> **Pro tip:** Photograph hand-drawn breadboards and sketches rather than redrawing them digitally. A polished digital version invites scrutiny of visual details and undermines the deliberate roughness of the format.

### Step 9: Step 9: Validate abstraction level with a team member

Share the breadboard or sketch with one other person, ideally someone who will be building or someone who sits at the betting table. Ask them two questions. " If they do not, the artifact is too abstract or too poorly annotated. " If they say yes, the abstraction level is correct, because builders have room to make implementation choices.

If they say no, the artifact is too detailed and is functioning as a wireframe. Adjust based on the feedback. This quick validation usually takes 5-10 minutes and catches problems that would otherwise surface during the betting table discussion, when it is harder to revise.

> **Pro tip:** If the person you show it to immediately starts suggesting UI details ('maybe this should be a dropdown'), that is a signal the artifact is inviting the wrong conversation. Redirect by asking 'does the flow make sense?' rather than engaging on implementation.

## Best Practices

- Always choose the tool that matches the dominant dimension of your solution. Use breadboards for flow-heavy problems and fat-marker sketches for layout-heavy problems. Mixing the two into a single artifact creates a hybrid that is too detailed in some areas and too vague in others, confusing both the betting table and the build team.
- Keep breadboard place names as verbs or user goals ('Choose Recipient,' 'Review Invoice') rather than UI element names ('Modal,' 'Sidebar'). Goal-based names communicate intent and give builders freedom to choose the best UI pattern. UI-based names lock in implementation decisions you are not qualified to make during shaping.
- Use the physical constraint of fat markers literally. If you are sketching digitally, zoom out until the canvas is small or increase your brush size until fine detail is impossible. The moment you can draw a recognizable button or icon, you have lost the abstraction benefit and will start making design decisions that belong to the build team.
- Annotate every fat-marker sketch with at least 3-5 written notes explaining the key behaviors and relationships between regions. Without annotations, a fat-marker sketch is an ambiguous blob that different people will interpret differently. Annotations lock in the decisions that matter without locking in the details that do not.
- Explicitly mark rabbit holes on your breadboard or sketch. Circle the affordance or region that could explode in scope and write 'out of scope' or 'simplified to X.' This practice forces you to confront complexity during shaping rather than discovering it two weeks into the build cycle when the team is stuck.
- Never use these artifacts as hand-off specs. They are thinking tools and pitch components, not implementation documents. If you find yourself adding detail so the build team 'knows exactly what to build,' stop. That detail belongs in the build cycle, where the team has full context and can make better decisions than you can at shaping time.
- Time-box your breadboarding and sketching to 30-60 minutes per concept. If you spend more than an hour on a single breadboard, you are either shaping a solution that is too large for one cycle or you are adding detail that does not belong at this stage. Both situations require you to step back and revisit your appetite.
- Create multiple breadboards or sketches when you have competing solution ideas. Comparing two breadboards side by side during shaping reveals which approach has fewer rabbit holes and fits the appetite better. This comparison is much cheaper than discovering the wrong choice during the build cycle.

## Common Mistakes

- **Drawing wireframes and calling them fat-marker sketches** — This happens when people use a thin pen, a small brush, or a high-resolution digital canvas. The result looks like a rough wireframe with recognizable buttons, form fields, and navigation elements. The problem is that anyone reviewing this artifact will react to the layout and element placement as if they are design decisions, which creates scope creep and removes builder autonomy. Catch it by asking: could a five-year-old with a crayon have drawn this?

If the answer is no, you have too much fidelity. Switch to a larger marker or zoom out your canvas until individual UI elements are impossible to render.
- **Skipping the breadboard and jumping straight to visual sketches for a flow-heavy problem** — This usually happens because sketching feels more natural than the places-affordances-connections notation. When you sketch a multi-step flow, you end up drawing multiple screens and arranging them in sequence, which forces you to make visual decisions about each screen before you have even validated the flow. The flow gets buried in visual noise. Watch for this when you find yourself drawing more than two screens in a sketch.

Switch to a breadboard, validate the flow with words and arrows, and then sketch only the one or two screens where spatial arrangement is the actual design challenge.
- **Making the breadboard too granular by listing every possible affordance** — Shapers who are former engineers or designers tend to list every conceivable field, button, and link at each place. A breadboard with 15 affordances per place has crossed the line from shaping into specifying. This creates the illusion of completeness and makes the pitch feel like a requirements document, which discourages the build team from exercising judgment. Catch it by counting: if any single place has more than 5-7 affordances, ask which ones are truly essential to the concept.

The rest can be left to the builder's discretion.
- **Not connecting breadboards back to the problem statement** — Some shapers create breadboards that describe a new workflow but never reference the original problem the solution is meant to address. This disconnect means the betting table cannot evaluate whether the proposed flow actually solves the problem. It also makes rabbit hole identification harder, because you cannot ask 'does this complexity serve the core problem?' without a clear link between the two. Always narrate the breadboard by starting from the problem: 'The user currently has to do X manually. In this breadboard, they start at Place A where they can do Y instead.'
- **Using breadboards and fat-marker sketches for problems that have not been shaped yet** — These tools are for expressing a solution concept, not for discovering one. If you sit down to breadboard and find yourself unsure what places to list, the problem is not that you are bad at breadboarding. The problem is that you have not finished the earlier shaping work of understanding the problem, studying the current workflow, and forming a solution direction. Go back to the problem definition step.

Talk to the people experiencing the problem. Look at the existing product. Return to the breadboard only when you can describe the solution in a sentence.
- **Presenting the breadboard or sketch without a narrative walkthrough** — Dropping a breadboard into a pitch document without accompanying prose forces the reader to decode an unfamiliar notation on their own. Most people at the betting table are not fluent in breadboard notation, and even those who are will interpret unlabeled connections differently. Write a 3-5 sentence narrative that walks through the primary flow or describes the spatial arrangement. This narrative is not redundant with the artifact.

It is the interpretive layer that ensures everyone reads the artifact the same way.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/shape-up/METHOD.md) — Shape Up

## Related Skills

- [Managing Six-Week Build Cycles](../managing-six-week-cycles/SKILL.md)
- [Planning Cool-Down Periods](../planning-cooldown-periods/SKILL.md)
- [Setting Appetites and Cutting Scope](../setting-appetites-and-managing-scope/SKILL.md)
- [Shaping Product Pitches](../shaping-product-pitches/SKILL.md)
- [Tracking Progress with Hill Charts](../tracking-progress-with-hill-charts/SKILL.md)
- [Running Betting Table Sessions](../running-betting-tables/SKILL.md)
- [Mapping Scopes Instead of Tasks](../mapping-scopes-for-building/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
