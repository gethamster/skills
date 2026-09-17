---
name: share-dont-pair
description: "Search-first DRY and consistency for any code unit. Use when about to write something that resembles existing code, duplicate a component / function / type / schema / style / config / query / client, or make one place match another ('match it to X', 'same as Y', 'keep them consistent', 'looks inconsistent'). Enforces: find the existing definition before writing, and merge things that must change together into one source of truth instead of maintaining look-alike copies."
version: "1.0.0"
---

# Share, Don't Pair

**Pairing** is keeping two copies of one truth and maintaining them in parallel so they stay alike. It is the bug this skill kills: paired copies agree today and drift on the next edit, because nothing forces them to move together. The cure is a **single source of truth** — one definition every site reuses.

This is about *any* unit that can be duplicated: a component, a function, a type or schema, a style token, a constant or enum, a query, a client wrapper, an error path. If two places must agree, they should *be the same thing*, not two things a human keeps in sync. Syntax is the agent's problem; the discipline below is language- and framework-neutral.

Two ways drift ships, one fix for both:

- **Reinvention** — you write what already exists, because you didn't look.
- **Pairing** — you copy A and hand-tune B to match.

Fix: converge on one definition.

---

## Gate 1 — Search before you write

Assume the thing already exists; you lack the context to know it. Before authoring, search the shared/common modules and by the concept's name (and any shared token/constant for it).

**Done when** you have named the existing definition to reuse, or confirmed across the search that none exists. Never re-encode by hand a value or rule a shared definition already owns.

## Gate 2 — The co-change test

You are about to make B match A. Whether they are one thing is a judgment about *role*, not resemblance — and it cuts both ways. Ask the one question:

> **Would a change to one always have to apply to the other?**

- **Yes** — same truth. Separate copies are drift. Extract one definition; both use it; delete the copies.
- **No** — they merely resemble. Forcing them into one (mode flags, branches to serve both) is its *own* drift, an over-coupling that satisfies neither. Keep them apart; share only a genuinely-common primitive underneath, if any.

"Copy A and adjust" is the tell that you skipped this gate.

## Gate 3 — Extract at copy #2; fold, don't fork

A second site needing the thing: extract the shared definition *now*, before the second copy lands. When a site needs a capability the shared definition lacks, **extend it with a parameter** — never fork. A fork to gain one capability silently abandons everything else the shared definition carried (a state, a guard, an edge case), until the copy quietly drifts.

---

## Where pairing hides

Recognize the recurring shapes; each almost always has, or deserves, one home. Detection is the same move everywhere: search for the shared definition, and if a site hand-builds the behavior instead of calling it, that is drift.

- presentation / style tokens
- formatting & parsing
- validation & schemas
- domain derivation (labels, status, permission, money)
- data access & external clients
- config, constants, enums
- error / result handling
- repeated scaffolds & control-flow boilerplate

## Example

Two screens each render a table. Built separately, they look almost the same — but one has tighter row padding and a narrower column gap than the other, because each screen owns its own copy of the layout:

```
screen-a    table → padding: tight,  column gap: small
screen-b    table → padding: looser, column gap: wide     // drifted, because built apart
```

Co-change test: should a change to table padding always land on both? Yes — it is the same table on two screens. So the mismatch is drift, not design. Converge on one table that owns the padding and spacing:

```
shared      one table component holds the layout
a + b       both render that component
```

Now a spacing tweak is one edit and the two cannot diverge. (If `screen-b` were a genuinely different layout — a dense admin grid with its own rules — the role differs → keep them apart.)

## Sweep after a shared change

One definition feeds every caller, so a change touches all of them. Re-list the callers, check each surface, and gate any site that must differ behind a parameter. **Done when** every caller is accounted for, not when the first one looks right.

---

## Honest exits

Default is share. Take an exit only by naming which one applies:

- **Superficial resemblance, different role.** Same shape, unrelated meaning; merging couples two things that should move independently.
- **A capability that would warp the shared API.** One variant needs behavior the shared definition cannot express without a flag tangle. Try one parameter first; if it truly cannot stretch, fork deliberately and leave a one-line note saying why, so the next agent does not re-merge it.
- **One caller, no second in sight.** Share at the second use, not the first — no speculative shared layer.
