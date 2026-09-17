---
name: eighty-twenty
description: "Get most of the value for a small fraction of the time, deliberately and with the blind spot named. Use before any expensive repeated activity — slow validation or build cycles, broad searches, large agent fan-outs, exhaustive captures, big sampling runs, reading a whole codebase — or whenever someone says this is too slow, speed it up, we need to go faster, or just give me the gist.c"
version: "1.0.0"
metadata:
  category: "Experience"
---

# eighty-twenty

Most of the value in an activity usually sits in a small part of it, and most of the cost usually
sits somewhere else. When those two facts are true at once, you can buy most of the outcome for a
fraction of the effort. When they are not, forcing it makes you fast and wrong.

This skill is the discipline for telling those cases apart, and for making the shortcut **safe by**
**naming what it stops seeing.**

*Project-agnostic. Copy this directory into any project's skills folder; it assumes no particular*
*language, tool, runner or repo layout.*

## Why it matters beyond speed

A slow cycle does not just cost time — it changes behaviour. At seven minutes a cycle you batch
five changes together, and when it fails you no longer know which one did it. At forty seconds you
check each one. **Cycle time is a correctness tool**, and that is the real argument for compressing
it, not impatience.

## Quickstart — applying this to a loop you have never seen

1. Name the **unit of value** this activity produces (assertions, findings, frames, decisions).
2. Get **per-item cost** — a `--json`/`--verbose` report, `time` around each step, or a timestamped log.
3. Sort by cost, print **cumulative %**, and add a **value-per-cost** column.
4. Cut items that are expensive **and** low-yield. Keep expensive-but-unique ones.
5. Apply the three levers below to what remains.
6. Make the fast path **print what it skipped**, and prove it can still fail.

## The move, in four steps

### 1. Define value before you rank anything

"80% of the value" is meaningless until you say what value *is* here: assertions, bugs found,
coverage, frames, decisions unblocked, words the reader will act on. Write it down first. Ranking
against the wrong value is how people optimise a loop into uselessness.

### 2. Measure the distribution — never estimate it

Intuition about where cost and value sit is reliably wrong. Get real per-item numbers, sort, and
print the **cumulative percentage**. You are looking for a small head carrying most of the total.

If you cannot measure it cheaply, that is itself information: a distribution you cannot see is one
you should not cut blind.

### 3. Rank by value-per-cost, not by cost

This is where most attempts go wrong. Expensive is not the same as wasteful. Cut what is
**expensive AND low-yield**; an expensive step that is the only thing proving something important
stays.

> **Worked example** — one project's validation suite, 540 s per run. Value unit: assertions.
> 
> ```
> 135.3s   25% cum   step A    31 assertions     0.23 /sec
>     76.7s   39% cum   step B    (whole-tree parse)
>     73.8s   53% cum   step C    10 assertions     0.14 /sec
>     68.4s   66% cum   step D    (perf measurement only)
>     62.5s   77% cum   step E    15 assertions     0.24 /sec
>     ...
>      2.9s   97% cum   step R   177 assertions    61.0  /sec
> ```
> 
> Five steps were 77% of the clock and 56 assertions between them; one 2.9 s step carried 177.
> A **400× spread in yield per second** — and it was invisible until the ratio column existed.
> Sorting by total cost alone would have suggested optimising step A; the ratio says *delete*
> step C and keep step R untouched. Result: **540 s → 47 s (91% cut), keeping 91% of assertions.**

### 4. Name the blind spot in the output itself

Every shortcut creates one. An unnamed shortcut becomes a false claim the moment someone quotes the
result as proof of something it never checked. Put the disclosure where the **result** is read, not
in documentation nobody opens:

```
<PASS BANNER>  (FAST PATH — <what was skipped> not run;
                run <full command> before <the gate this cannot clear>)
```

That sentence is the safety mechanism, not decoration. In the worked example the skipped steps were
the only ones exercising behaviour over time — so the fast path could prove a *rule* was intact and
could not prove the *experience* was.

## The three levers, in order of payoff

1. **Do less work** — process only what changed. Parsing 88 files when 3 changed is 96% waste; that
  single change took 77 s → ~0 s. Applies to linting, type-checking, compiling, capturing,
  re-indexing. *Every incremental scheme has a soundness hole* — a changed interface breaks a file
  that did not change. Accept it deliberately, state it, and keep the full pass honest.
2. **Do it concurrently** — independent subprocesses are usually IO-bound from the driver's view, so
  a small worker pool helps. 16 jobs went 117 s serial → 41 s wall at 3 workers. Only parallelise
  things that genuinely do not interact: a shared **read-only** cache is fine, a writable one is
  not. Stay conservative on shared or underpowered machines.
3. **Do it later** — push slow-but-valuable work onto a gate that already exists (pre-merge, CI,
  release, review) instead of paying it every iteration.

## Two lanes, never one blurred one

Keep the thorough version intact and add the fast one beside it. **Both must apply identical**
**rules** — same failure classification, thresholds, minimums — or they will disagree and you will
learn to distrust both. Share the code that decides pass/fail rather than reimplementing it.

Then verify, both directions:

- the two lanes **agree on a clean tree**, and
- the fast lane **goes red when you break something on purpose**.

A fast lane that cannot fail is worse than none, because it is trusted.

## Where this applies beyond test suites

- **Searching / reading:** read the 3 files that define the contract, not the 30 that use it.
- **Agent fan-out:** 4 well-scoped agents usually beat 12 overlapping ones; the marginal agent
  mostly re-finds what the others found.
- **Capture / screenshots / recordings:** shoot the 2 moments that would show the defect, not 15
  for symmetry.
- **Simulation and sampling:** 4 seeds show a trend; 40 refine a number you are not ready to defend.
- **Balance, tuning, and any parameter search:** change one dial, measure, repeat — a fast loop
  beats a clever first guess.
- **Builds and deploys:** stage the artifact that changed, not the world around it.
- **Writing:** the reader acts on a few sentences; the rest is context they already have.

## What 80/20 must NOT touch

This section is the reason the skill is safe. Compress the loop **around** the work, never the
evidence the work turns on.

- **The thing you are actually trying to learn.** If the question is "did this change how it
  feels/performs/reads", the long run *is* the deliverable. Sampling it answers a different
  question quickly.
- **The tail, when the tail is the point.** Bugs, security holes and edge cases live in the tail by
  definition. A 20% sample of edge cases finds 20% of edge-case bugs — that is not 80/20, it is
  just less testing.
- **Correctness gates and irreversible actions.** Merging, releasing, deleting, publishing,
  migrating — anything with a blast radius. Speed is for the iteration, not for the commit.
- **Verification of a claim you are about to make.** If you will assert it, check it properly.
- **The last mile of a deliverable.** 80% of a shipped thing is not 80% shipped.

## Knowing when to stop

Optimising has its own diminishing return. Stop when the loop is no longer the thing slowing you
down — if the cycle is 47 s and you spend 10 minutes thinking between runs, further speed buys
nothing. Spend the win on more iterations, not on more optimisation.

## Exit

- What "value" meant here, stated.
- Before/after numbers recorded — not impressions.
- The fast path applies the same rules as the thorough one.
- Its blind spot is named where the result is read.
- Verified both ways: agrees when clean, fails when genuinely broken.
- The thorough path still exists and is still what closes work.
