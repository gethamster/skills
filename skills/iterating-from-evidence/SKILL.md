---
name: "iterating-from-evidence"
description: "Read test results, decide which design thinking mode to return to, and update the problem and solution until the evidence supports shipping."
category: "Experience"
metadata:
  homepage: https://tryhamster.com
  method: "design-thinking"
  datePublished: "2026-09-24"
  dateModified: "2026-09-24"
---

# Iterating from Evidence: Design Thinking Iteration Process

> Read test results, decide which design thinking mode to return to, and update the problem and solution until the evidence supports shipping.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | Half a day to a week per loop, depending on how deep the loop goes |
| Outcome | A documented loop-back decision after each test, with an updated problem statement or prototype and a clear path from session output to shipped work. |
| Prerequisites | A prototype that users can experience rather than just hear about, Access to real users for testing, A written point-of-view problem statement, Notes from at least one test session |
| Part of | [Design Thinking](../../methods/design-thinking/METHOD.md) |

## Overview

Iterating from evidence is the skill of deciding, after every test, where the work goes next. The [d.school's Test mode guidance](https://dschool.sfo3.digitaloceanspaces.com/documents/dschool_bootleg_deck_2018_final_sm2-6.pdf) frames testing as a way to refine both the proposed solution and the team's understanding of the problem. A test result is therefore never only a verdict on the prototype. It can also reveal that the user was misunderstood, that the point of view was wrong, or that the idea space was too narrow. This page covers how to make that call and act on it. For the definition and history of the method, see the [Design Thinking method page](https://tryhamster.com/methods/design-thinking).

The skill exists because the modes are easy to run as a straight line. The Stanford d.school notes that introductory workshops [usually rely on a basic, linear 5-step process worked through over a 90-minute period](https://dschool.stanford.edu/stories/lets-stop-talking-about-the-design-process), and it cautions against treating design thinking as one fixed process. IxDF describes the method as [a non-linear, iterative process teams use to understand users, challenge assumptions and redefine problems](https://ixdf.org/literature/topics/design-thinking). Redefining problems is the step linear teams skip. They test, tweak the prototype, and never revisit the framing that produced it.

The second reason is shipping. In a [2026 survey of 100 practitioners](https://designsprintx.com/articles/is-design-thinking-dead-in-2026), 85% said design thinking was still relevant, yet only 12% said their teams reliably ship what their design sessions produce. The survey reports practitioner perceptions, not audited outcomes. Still, the gap it describes is familiar: sessions end with sticky notes and energy, and nobody owns the next loop. Iterating from evidence treats the move from session output to production as one more decision driven by what tests showed, not a separate phase that starts after the workshop ends.

Practitioners who do this well produce a short, repeatable record after each test: what was observed, what the team now believes, which mode it is returning to, and what the next test must show. Over several loops, that record becomes the justification for committing engineering and business resources. It also shows stakeholders why the problem statement changed along the way, which heads off the common objection that the team keeps moving the goalposts.

## How It Works

The [d.school names five modes](https://dschool.stanford.edu/tools/design-thinking-bootleg): Empathize, Define, Ideate, Prototype and Test. Iterating from evidence treats Test as a router rather than an end point. Each result is read as a signal about one layer of the work, and the layer that failed determines which mode you return to.

Think of four layers, from surface to root:

- **Execution.** The idea is sound but the prototype got in the way. Users misread a label, the role-play skipped a step, or the materials confused them. Return to Prototype and fix the artifact.
- **Concept.** Users understood the prototype and it still did not help them. The idea itself is weak. Return to Ideate and pull a different candidate from the pool, or generate new ones.
- **Framing.** Several different concepts fail for the same reason, or users complete the task but say it is not what they care about. The point of view is wrong. Return to Define and rewrite it.
- **Understanding.** Users behave in ways the team cannot explain at all. The research base is thin. Return to Empathize before reframing.

The d.school's testing guidance says to [observe what users do, listen to their feedback, and use the results to refine both the prototype and your understanding of the user and your point of view](https://dschool.sfo3.digitaloceanspaces.com/documents/dschool_bootleg_deck_2018_final_sm2-6.pdf). That dual purpose is what makes the router work. Every test session must collect evidence that can speak to the deeper layers, not only to the usability of the artifact. If your test script only asks whether people liked the prototype, you can diagnose execution failures and nothing else.

The deeper the layer, the more expensive the loop, so teams drift toward calling everything an execution problem. The corrective is a simple rule: a surface fix is allowed only if the team can name the specific prototype flaw that caused the failure. If nobody can, the failure belongs to a deeper layer.

IxDF describes the method's purpose as helping teams [challenge assumptions and redefine problems](https://ixdf.org/literature/topics/design-thinking), and it describes the implementation stage as turning [the strongest ideas into a concrete, fully conceived action plan](https://ixdf.org/literature/topics/design-thinking). That end state gives iteration its exit condition. You stop looping when a test shows the concept works for the defined user, the framing has held across more than one round, and the remaining open questions are about delivery rather than about whether to build. At that point the loop output is a build plan with an owner, not another workshop.

Non-linear movement does not mean random movement. Each loop back is a decision with a stated reason, a named layer, and a next test designed to confirm or overturn it. A team that can show that trail can explain every change to its problem statement, which is what separates iteration from drift.

## Step-by-Step Guide

### Step 1: Write the test hypothesis first

Before a session, write one sentence stating what the test should show if the current direction is right. Add what result would send you back to Prototype, to Ideate, and to Define. This forces the team to decide in advance what counts as failure, so nobody reinterprets a weak result as a win afterward. Keep the hypothesis tied to the current point-of-view statement so the test can challenge the framing, not just the artifact.

> **Pro tip:** If the team cannot say what result would send it back to Define, the test is only checking usability. Add a question about whether the underlying need is real.

### Step 2: Capture observations apart from interpretations

During and right after the session, record what users did and said in one column and what the team thinks it means in another. Behavior and direct quotes are the evidence. Explanations are hypotheses that the next loop may overturn. Mixing them makes every later decision rest on guesses that look like facts.

> **Pro tip:** Have one person write only observations during the session and hold the interpretation discussion afterward.

### Step 3: Diagnose the failing layer

Go through each failure and ask which layer it belongs to: execution, concept, framing or understanding. Look for patterns across users and across concepts, because a problem that appears with every concept is rarely about any single prototype. Apply the naming rule: a failure counts as execution only if someone can point to the exact flaw in the artifact. Anything left over moves down a layer.

### Step 4: Choose where to loop back

Map the deepest confirmed failing layer to its mode: Prototype for execution, Ideate for concept, Define for framing, Empathize for understanding. Go to the deepest layer the evidence supports, since fixing a surface problem on top of a broken frame wastes the next round. Write the decision down with its reason in one or two sentences. That note is what keeps non-linear movement from looking like thrashing to stakeholders.

> **Pro tip:** When evidence is split between two layers, run a small test aimed only at telling them apart before committing to the expensive loop.

### Step 5: Update the problem when the framing fails

If the diagnosis points to framing, rewrite the point-of-view statement using what the test revealed about the user and the need. Keep the old version beside the new one and note which observations forced the change. Then check which concepts in the existing idea pool still fit the new frame before generating fresh ones. The rewrite is the main output of this loop, so treat it as a deliverable, not a side note.

> **Pro tip:** See [Framing Human-Centered Problems](https://tryhamster.com/skills/framing-human-centered-problems) for how to write the revised statement.

### Step 6: Design the next test around the open question

Each loop should end with a test that targets whatever the last one left unresolved. If you rebuilt the prototype, test whether the specific flaw is gone. If you reframed, test whether users recognize the new need as theirs. Narrow tests take less time and give clearer answers than rerunning the whole session.

### Step 7: Set the exit and assign a shipping owner

Agree on the conditions that end iteration, for example a concept that works for the defined user in two consecutive rounds with no new framing failures. When those conditions are met, convert the strongest direction into a build plan with one named owner and a first delivery milestone. The practitioner survey finding that only 12% of teams reliably ship design session output suggests this handoff is where work most often stalls. Treat the handoff as the last iteration decision, made on the same evidence as the others.

> **Pro tip:** Name the shipping owner before the final test, so they watch the evidence firsthand instead of inheriting a summary.

## Best Practices

- Plan for more than one loop from the start. The d.school's point that [introductory workshops run a linear process in a single short period](https://dschool.stanford.edu/stories/lets-stop-talking-about-the-design-process) describes a teaching format, not a delivery plan, so budget time for at least a second round.
- Keep a running decision log across loops. One line per test (observed, concluded, mode returned to, next test) is enough. It lets new team members and stakeholders see why the work changed direction.
- Write test scripts that can surface deeper failures. Include questions and tasks that probe whether the need is real, not only whether the prototype is easy to use, in line with the [d.school's guidance to refine your understanding of the user as well as the prototype](https://dschool.sfo3.digitaloceanspaces.com/documents/dschool_bootleg_deck_2018_final_sm2-6.pdf).
- Default to the deepest layer the evidence supports. A cheap prototype fix feels productive but does nothing if the frame is wrong. Going deeper early usually saves more rounds than it costs.
- Keep prototypes cheap enough to throw away. If a failed test would mean discarding weeks of work, the team will rationalize the result instead of looping back. Rough artifacts make honest diagnosis easier.
- Involve the people who will build and ship in the tests. Watching users directly makes the handoff smaller because the builders already hold the evidence. It also exposes delivery constraints before the final loop.

## Common Mistakes

- **Treating every failed test as a prototype problem.** — Apply the naming rule: only call it execution if someone can point to the exact flaw. If the same failure appears across different concepts, go back to Define instead of polishing the artifact again.
- **Running the five modes once and calling it done.** — The linear run is how the method is often taught, but [IxDF describes it as non-linear and iterative](https://ixdf.org/literature/topics/design-thinking). Plan the second loop before the first test so there is time to act on what it shows.
- **Rewriting the problem without recording why.** — Keep the previous point-of-view statement and list the observations that forced the change. Without that trail, reframing looks like goalpost moving and stakeholders lose trust in the process.
- **Looping indefinitely without an exit condition.** — Agree up front on what evidence ends iteration. Once the concept holds for the defined user across rounds and the open questions are about delivery, stop testing and write the build plan.
- **Ending with a workshop readout instead of an owner.** — A slide deck of findings rarely becomes shipped work. Assign one owner and a first milestone as part of the final iteration decision, so the evidence flows straight into delivery.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/design-thinking/METHOD.md) — Design Thinking

## Related Skills

- [Generating Divergent Ideas](../generating-divergent-ideas/SKILL.md)
- [Building Rapid Prototypes](../building-rapid-prototypes/SKILL.md)
- [Balancing Desirability, Feasibility, and Viability](../balancing-desirability-feasibility-and-viability/SKILL.md)
- [Synthesizing User Insights](../synthesizing-user-insights/SKILL.md)
- [Framing Human-Centered Problems](../framing-human-centered-problems/SKILL.md)

## Sources

- [Design Thinking Bootleg \| Stanford d.school](https://dschool.stanford.edu/tools/design-thinking-bootleg)
- [Let's Stop Talking about THE Design Process \| Stanford d.school](https://dschool.stanford.edu/stories/lets-stop-talking-about-the-design-process)
- [What is Design Thinking? — updated 2026 \| IxDF](https://ixdf.org/literature/topics/design-thinking)
- [dschool\_bootleg\_deck\_2018\_final\_sm2-6.pdf](https://dschool.sfo3.digitaloceanspaces.com/documents/dschool_bootleg_deck_2018_final_sm2-6.pdf)
- [Is design thinking dead in 2026? What 100 practitioners](https://designsprintx.com/articles/is-design-thinking-dead-in-2026)
