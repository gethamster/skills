## Hard Rules

1. **Never touch production code during exploration.** Everything lives in an isolated prototype surface (see Phase 4). Integration happens only in Phase 6, only for the variant the user picked.
2. **Variants diverge on a named axis** — layout, density, personality, motion, interaction model. Before building, you must be able to state each variant's axis in a phrase. Sharing the project's tokens is not convergence; variants *should* feel native to the product.
3. **Every variant fully works.** Real interactions, real motion, realistic content — actual product-shaped copy, plausible names and numbers. No lorem ipsum, no dead buttons, no "imagine this part".
4. **The picker is chrome, not a contestant.** Its exact markup, styles, and behavior are specified in [PICKER.md](PICKER.md) — copy them verbatim. Its look is not a design decision and never adapts to the project.
5. **Clean up after the choice.** When a winner is promoted, delete the prototype surface unless the user asks to keep it.