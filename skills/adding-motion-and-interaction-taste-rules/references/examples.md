# Examples: Motion and Interaction Taste Rules for Premium Frontend UI

## Calming an over-animated landing page

**Scenario:**

Illustrative scenario: an agent builds a landing page where every section fades up on scroll, each feature card floats in a loop, and the hero headline types itself out letter by letter. The page feels busy and the main call to action appears late.

**Walkthrough:**

The team adds a purpose test to their skill: each animation must name feedback, state change, hierarchy or sequence. They regenerate and ask the agent to list every animation with its purpose. The floating cards and the typing headline have no purpose beyond decoration and are removed. The scroll reveal stays on two sections where the order of content tells a story. Hover and press feedback on buttons stays. The page now moves in three places instead of a dozen, and the call to action is visible on load.

## Adding states to a generated settings form

**Scenario:**

Illustrative scenario: a generated account settings form looks finished in screenshots, but it has no focus styles, the save button gives no feedback when pressed, and there is no loading, error or success state.

**Walkthrough:**

The team writes a state list for form components: focus-visible ring on every input, pressed state on buttons, a disabled state while saving, an inline error under the field that failed, and a short confirmation after success. They add the rule that the agent generates all states in the same pass as the component. On the next run the form includes each state, and the reviewer checks them by tabbing through the form and simulating a failed request.

## Making a scroll-linked hero respect reduced motion

**Scenario:**

Illustrative scenario: a portfolio hero uses a pinned, scroll-linked image sequence. It looks good on a laptop, but a teammate with reduced motion enabled finds the page disorienting, and the animation still runs.

**Walkthrough:**

The team adds a reduced-motion rule for each pattern in their skill: pinned sequences become a single static image, entry animations become instant, and loops stop. They also move the scroll logic from a scroll listener to the animation library's scroll hook, which the Taste Skill default requires. After regeneration they toggle the system setting and confirm the hero renders as a still image with the headline visible immediately.
