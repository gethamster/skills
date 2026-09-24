# FAQ: Designing Controlled GEO Experiments

## Why do I need a placebo if I already have a baseline?

Many GEO interventions add text, and extra length alone can change how much of an answer is attributed to a source. A placebo of comparable length lets you subtract that length effect. Without it, you cannot tell whether statistics or quotations helped or whether any added words would have. Report the intervention's effect relative to both baseline and placebo.

## Can I run a controlled GEO test on a live commercial AI search engine?

You can observe a commercial engine, but you cannot freeze its retrieval, model version or competitors, so results are associations rather than controlled effects. For a clean effect estimate, use document injection or a reproducible retrieval-and-generation pipeline. Commercial runs are still useful as a follow-up check that a lab effect shows up in the wild. Label them clearly so nobody mistakes them for an A/B test.

## How many queries and repetitions are enough?

There is no universal number in the sources, so size the test against the noise you observe. Run the baseline alone several times first and look at how much its scores vary across repetitions. If the expected effect is small compared with that spread, add queries, paraphrases or repetitions. More queries usually beat more repetitions of the same query, because they tell you whether the effect generalizes.

## Does a positive result mean the page will get more traffic?

Not by itself. A test of the conditional effect after injection shows how the page is represented once it is already in context, and the 2026 ([source](https://arxiv.org/abs/2607.14035)) critical review stresses that this establishes neither organic discoverability nor durable traffic effects. Traffic and conversions are separate estimands that need their own study design. Keep the two claims apart in reporting.

## Why use a judge from a different model family than the generator?

A judge from the same family may share the generator's preferences and rate its outputs favorably for reasons unrelated to the intervention. Separating families reduces that shared bias. It does not remove the need for blinding or for human validation on a stratified sample. Treat all three as parts of one judging setup.
