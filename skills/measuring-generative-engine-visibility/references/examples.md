# Examples: Measuring Generative Engine Visibility

## Hand-computing PAWC for two equally cited sources

**Scenario:**

Illustrative scenario: an analyst saves a 10-sentence, 200-word answer. Their source is cited in sentences one and two, a competitor in sentences nine and ten, and every cited sentence is 20 words long.

**Walkthrough:**

Word Count share is identical: each source has 40 of 200 words, or 0.20. For PAWC, with positions starting at 1, the analyst's sentences get weights e^(-0.1) and e^(-0.2), roughly 0.905 and 0.819, giving about 34.5 weighted words and a PAWC near 0.17. The competitor's sentences get e^(-0.9) and e^(-1.0), roughly 0.407 and 0.368, giving about 15.5 weighted words and a PAWC near 0.08. The report shows equal word share but a PAWC roughly twice as high for the analyst's source.

That gap is the signal: the engine leans on the analyst's page to open its answer and on the competitor only to close it.

## Splitting share of model by query class

**Scenario:**

Illustrative scenario: a software company reports a steady 40% share of model across 120 prompts for three straight months, and leadership assumes visibility is healthy.

**Walkthrough:**

The analyst re-cuts the same archive into three classes: category education, vendor comparison and implementation questions. Share of model turns out to be 70% on education prompts, 35% on implementation and 15% on comparison prompts. Month over month, comparison share fell while education rose, so the blended number hid a decline. Generative Position on comparison prompts also shows the brand usually listed fourth or fifth.

The team now reports per class, and the comparison class becomes the one content changes are measured against.

## Catching a judge drift in Subjective Impression

**Scenario:**

Illustrative scenario: impression scores for a health publisher jump from an average of 6 to 8 out of 10 between two monthly runs, while PAWC barely moves.

**Walkthrough:**

The analyst checks the run log and finds the judge model was switched to a newer version between runs. They rerun the new judge on last month's archived answers and get an average near 8 as well, so the jump came from the judge, not the content. They hand-score 20 answers from each month and find their own ratings unchanged. The team pins the judge version, rescores the full history under it, and adds judge version to the report header.

Without archived answers, the false improvement would have gone into the quarterly review.
