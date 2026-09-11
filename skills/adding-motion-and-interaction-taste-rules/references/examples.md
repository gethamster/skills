# Examples: Adding Motion and Interaction Taste Rules

## Example: SaaS dashboard with sidebar navigation and modals

**Scenario:**

A two-person startup is building a B2B analytics dashboard using Cursor with Claude as the AI agent. The interface has a collapsible sidebar, data cards with hover states, and confirmation modals. The team noticed that Cursor generates static components with no transitions, and when transitions are present, they use `transition: all 0.3s ease`. The team has 45 minutes to add motion rules to their existing SKILL.md.

**Walkthrough:**

The team starts by generating their sidebar, a data card, and a modal without motion rules and confirms the baseline: no hover transitions on cards, no sidebar slide animation, and the modal hard-cuts into view. md defining three duration buckets: micro (100-150ms) for card hover color changes, standard (250ms) for sidebar collapse/expand, and macro (350ms) for modal entrance. 4, 0, 1, 1)` for sidebar collapse and modal dismissal. They add an allowlist restricting transitions to `opacity`, `transform`, `background-color`, `color`, and `box-shadow`.

They include a reduced-motion override block. They add two inline code examples: one showing the card hover pattern and one showing the modal entrance keyframe. After regenerating all three components, the sidebar slides with correct easing, cards have a subtle hover background transition at 150ms, and the modal fades up over 350ms. The reduced-motion test confirms all motion collapses to instant state changes.

## Example: E-commerce product page for a solo developer

**Scenario:**

A solo developer is building a direct-to-consumer product page using v0. The page has a product image gallery with thumbnails, an add-to-cart button, a size selector dropdown, and a notification toast that confirms the item was added. The developer wants the page to feel premium but is worried about over-animating. They have no existing SKILL.md and are starting from scratch.

**Walkthrough:**

md and writes the motion section first because motion is their primary quality concern. They define only two duration buckets to keep things simple: micro (120ms) for button hovers and thumbnail selections, and standard (250ms) for the dropdown open/close and toast appearance. 25, 1)`, which is close to `ease` but slightly snappier on entry. 97)` on active.

For the toast, they specify: enter from bottom with `transform: translateY(100%)` to `translateY(0)` over 250ms, auto-dismiss after 3 seconds with a fade-out over 200ms. The dropdown gets `max-height` animation replaced with `transform: scaleY` to avoid layout thrash. They add a motion budget rule: no more than two simultaneous animations. After generation, the product page feels responsive without being distracting.

The toast slides in cleanly, the button press feels tactile, and the dropdown opens without jank.

## Example: Design system SKILL.md for a 15-person frontend team

**Scenario:**

A mid-size company with 15 frontend developers uses Claude Code across multiple repositories. Each repo has its own SKILL.md, and motion behavior is inconsistent: the marketing site has 400ms transitions everywhere, the app uses 200ms, and the docs site has no transitions at all. The design systems team needs to create a shared motion section that can be copied into every repo's SKILL.md. They have 90 minutes and need to handle both simple components and complex page transitions.

**Walkthrough:**

The design systems team audits three repos and catalogs 12 distinct motion patterns in use, ranging from button hovers to page route transitions. They consolidate these into four duration buckets: micro (100-150ms), standard (200-300ms), macro (300-500ms), and page (400-600ms). They define four easing custom properties and document when each applies. They build a comprehensive state specification table covering buttons, links, cards, inputs, toggles, and navigation items across default, hover, focus, active, and disabled states.

Each row specifies the exact properties that change and the exact duration. They write the transition property allowlist with detailed reasoning for each banned property. They add a reduced-motion section with fallback behaviors for each duration bucket. They include six inline code examples covering the most common components.

The total motion section is 550 words, under their 600-word target. md to three repos and regenerating a standard component set in each. Cross-repo consistency improves from roughly 30% motion behavior match to over 90%. The remaining 10% gaps are edge cases they add to a follow-up iteration.

## Example: Mobile-first web app with gesture-like interactions

**Scenario:**

A B2C team is building a mobile-first task management app using Gemini CLI. The app relies on swipe-to-dismiss, pull-to-refresh, and bottom-sheet modals. Standard motion rules feel too desktop-centric. The team needs mobile-specific motion rules that account for touch interaction patterns and smaller screens.

**Walkthrough:**

The team starts with a standard motion section but adds a mobile-specific subsection. They define touch-optimized duration buckets: micro stays at 100-150ms, but standard drops to 180-250ms on viewports below 768px because mobile interactions feel laggier at 300ms. 72, 0, 1)`, which mimics iOS sheet behavior and feels natural on touch devices. For swipe-to-dismiss, they write a rule that the dismissal animation should match the gesture velocity, with a minimum of 150ms and maximum of 300ms, using `--ease-exit`.

Pull-to-refresh gets a dedicated rule: the loading indicator should use a continuous rotation at constant speed (`linear` easing, one of the few valid uses), with the pull gesture itself using spring easing for the overscroll bounce. They add a rule that no mobile interactive element should have a hover state, only focus and active states, because hover is unreliable on touch. After regeneration, the bottom sheet slides up with natural spring physics, swipe dismiss feels responsive, and the pull-to-refresh bounce matches platform conventions. The absence of hover states on mobile eliminates the sticky-hover bug that plagued their earlier builds.
