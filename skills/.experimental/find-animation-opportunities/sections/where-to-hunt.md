## Where to Hunt

Sweep for these seams — each is a known class of genuine opportunity:

**Feedback gaps**

- Pressable elements with no `:active` state → `transform: scale(0.97)` with `transition: transform 160ms ease-out` (subtle: 0.95–0.98)
- Destructive actions confirmed with a plain click where a hold-to-confirm fill would prevent slips → `clip-path: inset(0 100% 0 0)` overlay, 2s linear on press, 200ms ease-out snap-back on release

**Teleporting state**

- Content that swaps, appears, or vanishes instantly (conditional renders, route content, expanding sections) → fade/scale entrances from `scale(0.95–0.97)` + `opacity: 0`, `ease-out`, never `scale(0)`; `@starting-style` for entry without JS
- Accordions/collapses that snap open → height + opacity transition
- List items added/removed with no bridge (and the list isn't high-frequency) → enter/exit transitions; CSS transitions, not keyframes, so rapid triggers retarget smoothly

**Missing spatial story**

- Panels, popovers, menus that appear with no connection to their trigger → scale in with `transform-origin` at the trigger (Base UI: `var(--transform-origin)`); modals are exempt — they stay centered
- Dismissable surfaces (toasts, sheets) that exit a different way than they entered → symmetric paths; `translateY(100%)` percentages, not hardcoded pixels

**Group entrances**

- A grid or list that pops in all at once on a page users see occasionally → 30–80ms stagger; decorative, must never block interaction

**Gesture seams**

- Draggable/swipeable elements that snap with no physics → springs (`{ type: "spring", duration: 0.5, bounce: 0.2 }`, bounce 0.1–0.3), velocity-based dismissal (`Math.abs(distance)/elapsedMs > ~0.11`), rubber-banding at boundaries instead of hard stops

**The delight budget**

- Rare, high-emotion moments rendered flat — first-run, empty states, success/completion, celebration. These are the only places bounce, stagger generosity, or a longer beat are welcome.

Useful sweeps: grep for conditional renders with no transition (`{isOpen &&`, `display: none` toggles), `onClick` handlers on elements with no `:active`/transition styles, `details`/accordion markup, drag handlers, `.map(` renders of entering lists, empty-state and success components.