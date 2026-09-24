# Examples: Designing Controlled GEO Experiments

## Testing statistics addition on a pricing guide

**Scenario:**

A SaaS content team wants to know whether adding sourced statistics to its pricing guide makes the page more prominent in generated answers once it is retrieved.

**Walkthrough:**

Illustrative scenario: the team picks the conditional effect after injection as its estimand. It writes 40 queries about pricing models, adds three paraphrases each, and fixes a candidate pool of five competitor pages plus its own guide in a local pipeline. It creates three versions: the original, a version with eight added statistics, and a placebo adding a similar word count of neutral explanation. Each cell runs four times in shuffled order, and a judge from a different model family scores blinded answers.

The statistics variant beats baseline on most queries, but the placebo captures about a third of that gain, so the team reports only the difference over placebo as the statistics effect.

## Catching a confounded comparison

**Scenario:**

A marketer reports that a rewritten help article doubled its citations in a commercial AI search tool and wants to roll the rewrite out site wide.

**Walkthrough:**

Illustrative scenario: an analyst reviews the claim and finds the before snapshot came from one month and the after snapshot from the next, with a different query list and no record of competing sources. The rewrite also changed headings, added quotations and updated product facts in one pass. The analyst labels the finding an observational association with several confounds. She then designs a proper test: fixed queries and paraphrases, a frozen candidate pool, one variant per change, and a placebo.

Only the quotation variant shows a consistent effect, so the team rolls out that change alone.

## Validating an automated impression judge

**Scenario:**

A research group wants to score hundreds of answers for how meaningfully a source contributes, using an LLM judge rather than word counts alone.

**Walkthrough:**

Illustrative scenario: the group generates answers with one model family and assigns the judge to a different family. Before scoring the full set, it draws a stratified sample of 120 answers across conditions and query types and has two people score them on the same rubric. Agreement is good on relevance but poor on uniqueness, where the judge overrates long answers. The group tightens the uniqueness rubric, reruns the validation sample, and only then scores the full set blinded.

The final report notes which dimensions were validated and which were dropped.
