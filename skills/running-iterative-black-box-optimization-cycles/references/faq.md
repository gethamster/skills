# FAQ: Running Iterative Black-Box Optimization Cycles

## How many prompts should the fixed set contain?

Enough to cover each important page and intent group with several prompts, so group-level rates are not driven by one question. One practitioner playbook suggests [selecting 50 queries for high-value pages](https://wetheflywheel.com/en/ai-search/generative-engine-optimization). Smaller teams can start lower and grow the set in versioned batches. What matters most is that the set stays frozen once cycles begin.

## How often should a cycle run?

Often enough to keep learning, but slowly enough for engines to see the change and for you to collect repeated runs. A weekly rhythm, which one guide uses for [tracking citation rate across relevant engines](https://wetheflywheel.com/en/ai-search/generative-engine-optimization), is a reasonable default. Slow the cadence down if results are noisy or if edits take time to be picked up.

## Why is it called black box optimization?

Because you cannot inspect how a commercial engine retrieves and weights sources; you can only change your inputs and observe its outputs. Every decision therefore rests on before-and-after comparisons rather than on knowledge of the engine's internals. That is why fixed prompts, repeated runs and single changes carry so much weight in this skill.

## What should I do when results swing wildly between runs?

Widen the sample before drawing conclusions: add repeated runs per prompt or more prompts per group. Wide swings are expected, given reported [substantial run-to-run variability and low source overlap](https://arxiv.org/abs/2607.14035) in commercial audits. If the noise band stays too wide to detect realistic effects, test larger, better-motivated changes rather than tiny tweaks.

## Will a change that works on one engine work on others?

Not reliably. The reviewed research found that [generic optimization heuristics transfer poorly across settings](https://arxiv.org/abs/2607.14035). Run each cycle on every engine that matters to your audience and record results per engine, then keep a change only where it actually helped.
