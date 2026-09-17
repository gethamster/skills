## Required Output Format

### Part 1 — Opportunities table

One row per surviving suggestion, ordered by leverage:

| # | Location | Today | Purpose | Frequency | Suggested motion |
| --- | --- | --- | --- | --- | --- |
| 1 | `Toast.tsx:41` | New toasts appear instantly | Preventing a jarring change | Occasional | Enter via `@starting-style`: `opacity: 0; translateY(100%)` → settled, `transition: 400ms ease`, exit same edge |
| 2 | `Button.tsx:18` | No press feedback | Feedback | Tens/day | `:active { transform: scale(0.97) }`, `transition: transform 160ms ease-out` — subtle enough for the frequency tier |

Every "Suggested motion" cell carries exact values — the curve, the duration, the properties — pulled from this repo's shared vocabulary (`--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`, `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)`, `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1)`), never approximated. Animate `transform` and `opacity` only; include reduced-motion handling (gentler, not zero) and `@media (hover: hover) and (pointer: fine)` gating when the suggestion involves hover.

### Part 2 — Rejected candidates (REQUIRED)

List 2–5 places you considered and deliberately did **not** suggest, each with the gate question that killed it:

- `CommandMenu.tsx:12` — command palette open/close. **Rejected: keyboard-initiated, 100+/day. Never animate.**
- `Chart.tsx:88` — animated line drawing on the analytics graph. **Rejected: functional data the user is reading; decoration hinders.**

This section is what separates this skill from an animation wishlist.

### Part 3 — Verdict

One short paragraph: how much motion this interface actually needs, whether it's already close to right, and which single suggestion has the highest leverage. Close by pointing at the handoff: `improve-animations plan <suggestion>` to turn any row into a self-contained implementation plan.