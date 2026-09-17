---
name: break-down-objectives
description: "Decompose a compressed goal, one-liner strategy, or multi-clause mandate into a goal-framework-agnostic hierarchy: goals with measurement stories, strategies as bets, measures with leading/lagging tags, and initiatives/briefs born on a need-to-make basis. Produces testable success criteria, option matrices, a chosen solve path, sequencing, and hard constraints — without implementing unless asked."
version: "1.0.0"
category: "Workflows"
---

---

## name: break-down-objectives

description: Decompose a compressed goal, one-liner strategy, or multi-clause mandate into a goal-framework-agnostic hierarchy: goals with measurement stories, strategies as bets, measures with leading/lagging tags, and initiatives/briefs born on a need-to-make basis. Produces testable success criteria, option matrices, a chosen solve path, sequencing, and hard constraints — without implementing unless asked.

# Break down objectives

Turn a **dense statement** (one sentence, a triage list, a “build X then Y”) into a **decision-ready decomposition**: testable success, options, pick, order, and what not to do.

The decomposition naturally produces a **goal hierarchy**: goals with measurement
stories, strategies as bets on how to move each goal, measures with leading/lagging
tags, and — when the work actually requires them — initiatives (commitments to move
a specific goal) and briefs (shippable units inside an initiative). **Do not force
all artifacts to exist.** Decompose only as far as is useful. If a goal is clear and
measurable on its own, leave it. If a strategy doesn't need a measure, don't force
one. Initiatives and briefs emerge when the work demands them — not as a checklist.

**Default: analysis only.** Do not implement code or large doc rewrites unless the user explicitly asks after the breakdown.

## When to use

- “Break that down” / “how do we solve each part”
- Strategy one-liners that hide several jobs
- Ranked backlogs that need **objective** acceptance, not taste
- Aligning agents on *what done means* before anyone codes
- Decomposing a goal into measurable strategies when multiple distinct approaches could move it

## Inputs

Accept any of:

1. A single multi-clause sentence
2. A short ordered list (“first A, then B, don’t C”)
3. A disagreement (“you ranked X first; I’d rank Y”)

If the goal is vague, ask **one** clarifying question, then proceed with stated
assumptions labeled as such.

## Process

### 1. Split into claims

Parse the mandate into **atomic clauses**. Prefer:

- **Do** (positive work)
- **Order** (A before B)
- **Don’t** (constraints / anti-goals)

Number them. Quote the source phrase for each so nothing is invented.

Each claim becomes a **goal** in the decomposition — a measurable outcome the
organization is trying to move. If a claim is already clear and measurable on
its own, it stays a single goal. If multiple distinct approaches could move it,
the goal gets **strategies** (each a bet on a path) and **measures** (leading
and lagging indicators). This split is driven by the work, not by a template.

### 2. For each clause, run the card

Use this structure **every time** (same headings, same order):

#### N. “«quoted clause»”

**What this means**
1–3 sentences. Strip metaphor; name the real problem this goal is trying to solve.

**Measurement story**
1–2 sentences: what we're trying to move, how we'll know, and what period rolls up.
If the goal is clear and measurable on its own, state the measurement story and move
on — don't force further decomposition.

**“Solved when” tests → measures**
A table of tests. Each row: id · test · pass if · leading/lagging.
Rules for good tests (these are the qualities of a good measure):

- Observable (metric, event, artifact, behavior, doc signature)
- Binary or clearly graded — not “feels better”
- Prefer external behavior and outcomes over internal elegance
- Tag each test **leading** (early signal) or **lagging** (outcome itself)
- Include **negative** tests when relevant (“does *not* add second system”)

Minimum **3** tests per substantive clause; **2** OK for pure constraints.

**Strategies** (only if the goal is broad enough that multiple distinct approaches
could move it)
List each strategy as a named bet: “We bet that X will move this goal because Y.”
If the goal has one obvious path, skip this section — don't manufacture fake
alternatives.

**How to solve (options)**
Table: approach · pros · cons · objective pick (or Reject).
At least two real options when the space is non-trivial; “do nothing” is valid.
If strategies were listed above, options should address which strategy (or
combination) to commit to.

**Solve path**
One short recommended path: what to build/write/decide first, scope caps, dependencies. Still no implementation unless asked.

**Initiative / Brief** (born on a need-to-make basis — only when the work requires
a commitment layer or a shippable unit)
If the solve path requires a team commitment to move this goal, name it as an
**initiative** (what goal it moves, weight if partial). If the initiative needs a
discoverable shippable unit, name it as a **brief** (what we're building, why, what
success looks like). If neither is needed yet, skip this section entirely.

**Falsify**
If data shows X, then change Y. 1–3 rows. Prevents sticky plans.

### 3. Constraints as first-class cards

Every “don’t” gets the same card type (solved when = constraint still holds;
options = how to meet the need *without* the forbidden thing).

### 4. Reassemble sequence

After all cards, output **one pipeline** (ascii or numbered) that:

- Respects order clauses
- Parks constrained items
- Names handoffs (e.g. “measure before initiative”, “initiative before brief”,
  “brief before delivery”)
- Only includes initiatives and briefs that were actually born in the cards —
  no orphan artifacts
- If a goal needs no initiative or brief, the pipeline shows the goal and its
  measures directly

The pipeline is **dependency-bound, not time-bound.** Reset when the market moves,
when a dependency unblocks, or when a measure says off track.

### 5. Bottom-line table

| Clause | Goal | Strategy | Measure | Initiative/Brief |
| --- | --- | --- | --- | --- |
| … | one line | one line or — | one line or — | one line or — |

Keep this scannable for handoff to another agent. Use — when an artifact
wasn't needed (need-to-make basis).

## Quality bar

- **No vibes-only success.** “Better” → replace with a test.
- **No hidden scope.** If an option is a multi-week pillar, say so in Cost/Cons.
- **No dual systems by accident.** When two layers could compete (map vs doors, three meters on one dial), force an **authority** line: who owns the decision.
- **Thesis filters optional.** If the project has a stated filter (e.g. “what becomes true about a named person next load”), apply it in **What this means **or a one-line **Filter** note — pass / fail / ship-anyway-because-substrate.
- **Skill ≠ volume** when the domain is combat: prefer position, timing, reading, discipline, sequencing, planning over “more simultaneous threats.”
- **Confidence.** Mark speculative picks **(assumption)** once; don’t hedge every line.

## Output shape (required)

```markdown
# Breaking down: «short title»

**Source:** «full quote or summary»

## Claims
1. …
2. …

## Cards
### 1. "…"
**What this means:** …
**Measurement story:** …
**Solved when (measures):** …
**Strategies (if needed):** …
**How to solve (options):** …
**Solve path:** …
**Initiative/Brief (if needed):** …
**Falsify:** …

## Pipeline
…

## Bottom line
| Clause | Goal | Strategy | Measure | Initiative/Brief |
```

Use — for any artifact that wasn't needed. The hierarchy is:
**goal → strategy → measure**, with **initiatives** and **briefs** emerging when
the work demands them.

## Anti-patterns

- Jumping to implementation mid-breakdown
- One giant essay with no tests
- Options that are only “good” vs “bad” with no pick rule
- Success criteria only the author could judge (“elegant”, “clean”)
- Merging two claims so a constraint gets lost
- Re-ranking a backlog without stating the **objective** criterion for the new order
- Breaking down further than is useful — forcing strategies, measures, or briefs
  that the work doesn't actually need
- Creating an initiative or brief that doesn't trace to a goal (orphan artifact)
- Mixing leading and lagging measures without tagging which is which
- Naming a goal with no measurement story — if you can't say how you'll know, the
  goal isn't ready to decompose

## After the breakdown

Stop unless the user asks to: implement, score ideas into a backlog, write a design doc, or update rankings. Offer **one** next step (e.g. “lock card 2 as a
brief”, “prototype the top solve path”, or “turn card 3 into an initiative”) —
do not auto-start it.
