# FAQ: Identifying Cross-Journey Insights and Patterns

## How many journeys do I need before cross-journey analysis is worthwhile?

You need at least 4-5 journeys mapped at L2 detail for patterns to emerge reliably. With fewer than 4, most "patterns" are actually just two observations, which is too small a sample to distinguish signal from coincidence. That said, even 4 journeys can yield high-value insights if they share touchpoints or infrastructure. A portfolio of 8-12 journeys is the sweet spot where patterns become clear without the comparison matrix becoming unwieldy.

## How long should the full cross-journey analysis take?

For a first-time analysis with 8-10 journeys, expect 3-5 hours of focused work spread across two sessions. The first session (2-3 hours) covers tagging and matrix building. The second session (1-2 hours) covers cluster validation, scoring, and register documentation. Subsequent quarterly refreshes take 1-2 hours because the tag vocabulary, matrix structure, and scoring criteria are already established.

Teams that try to compress the entire analysis into a single marathon session produce lower-quality root cause validation because fatigue degrades judgment.

## Should I run cross-journey analysis before or after prioritizing individual journeys for optimization?

Run cross-journey analysis first. The insight register it produces is a critical input to the prioritization process. Without it, you will prioritize journeys based only on their individual metrics and miss the systemic issues that affect multiple journeys simultaneously. A journey that looks moderate in isolation might become the top priority once you realize fixing its core pain point also resolves issues in four other journeys.

See [Prioritizing Journeys for Optimization](https://tryhamster.com/skills/prioritizing-journeys-for-optimization) for how the register feeds into prioritization scoring.

## How do I handle journeys owned by teams that won't participate in the analysis?

This is common in large organizations. Start with the journeys whose owners are willing to participate, run the analysis, and produce a register that demonstrates clear, quantifiable value. When non-participating teams see that the register surfaced a $200K cost reduction opportunity that touches their journey, they typically become willing participants in the next cycle. Do not wait for full organizational buy-in before starting.

A partial analysis that delivers results builds more credibility than a comprehensive proposal that never gets executed.

## Why does my insight register keep producing the same top issues quarter after quarter?

This happens for one of two reasons. First, the top issues are genuinely hard to fix and require multi-quarter investment. If that is the case, your register should reflect progress: the severity score should decrease as partial fixes ship, and the recommended action should update from "replace the API" to "monitor performance of new API, address remaining edge cases." Second, the organization is not acting on the register at all. If top insights persist unchanged with no progress notes, the register has become a documentation exercise rather than a decision-making tool. Escalate by presenting the cumulative cost of inaction: "This insight has been our #1 issue for three quarters, affecting 7 journeys and an estimated $340K in annual friction cost."

## Can I use AI tools to speed up the tagging and pattern identification steps?

Yes, with important guardrails. AI tools can accelerate the initial tagging pass by processing journey map descriptions and suggesting tag classifications. They can also scan the comparison matrix for keyword clusters faster than a human. However, do not delegate root cause validation to AI.

Confirming that two tag instances share a genuine root cause requires contextual knowledge about your systems, your teams, and your organizational history that AI tools do not have. Use AI for speed on mechanical steps (tagging, sorting, initial clustering) and reserve human judgment for the analytical steps (validation, scoring, action recommendations).

## What is the difference between cross-journey insights and touchpoint interconnection mapping?

Touchpoint interconnection mapping (see [Mapping Touchpoint Interconnections Across Journeys](https://tryhamster.com/skills/mapping-touchpoint-interconnections)) documents the structural connections between journeys: shared systems, data flows, channel handoffs, and team boundaries. It answers "where do these journeys connect?" Cross-journey insight identification uses those connections as a starting point, then layers on pain point analysis, redundancy detection, and pattern scoring to answer "what systemic issues exist at and around those connections?" Interconnection mapping is the anatomy. Cross-journey insight identification is the diagnosis.
