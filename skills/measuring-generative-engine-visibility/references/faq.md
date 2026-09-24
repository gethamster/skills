# FAQ: Measuring Generative Engine Visibility

## Is PAWC the same as counting how often I am cited?

No. PAWC measures how many words of the answer are attributed to your source and discounts them by how late they appear. A single early, substantial citation can outscore several late one-line mentions. Track citation rate as well, because it answers the separate question of how often you show up at all.

## How many prompts do I need for a reliable baseline?

One practitioner guide suggests 50 ([source](https://wetheflywheel.com/en/ai-search/generative-engine-optimization)) queries for high-value pages, tracked weekly. Treat that as a starting point rather than a rule. What matters more is that each query class has enough prompts that a single answer changing does not swing the class average, and that the set stays fixed between runs.

## Can I run Subjective Impression without the original paper's exact prompt?

Yes, as long as you define your rubric, keep it fixed and validate it against human judgment on a sample. Your scores will not be directly comparable to published figures, so do not present them side by side. Use the metric to track your own trends and to catch cases where a source shapes an answer more or less than its word share suggests.

## Does higher PAWC mean more traffic?

Not necessarily. A 2026 ([source](https://arxiv.org/abs/2607.14035)) critical review found that the foundational paper's gains were conditional on a source already being in a fixed context and did not establish organic discoverability or durable traffic effects ([critical review of GEO](https://arxiv.org/abs/2607.14035)). Treat visibility metrics as measures of representation in answers and connect them to traffic or conversions with separate analytics.

## Answers change every time I run the same prompt. How do I handle that?

Run each prompt more than once per measurement window and report the average along with the spread. Keep conditions identical so the variation you see comes from the engine rather than your setup. If the spread within a run is as large as the change between runs, you do not yet have evidence that anything moved.
