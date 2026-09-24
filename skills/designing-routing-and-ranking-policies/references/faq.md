# FAQ: Designing Routing and Ranking Policies

## Why use a decision model for routing instead of asking an LLM to choose?

An LLM asked to choose returns text that must be parsed and may name an option that does not exist. A decision model returns one of the listed options with a probability for each, which code can threshold directly. A LangChain comparison summarised on awesome-jev also found Jev cheaper and more consistent as a judge than LLM judges. Consistency is what makes a misroute reproducible and fixable.

## How many candidates should one routing question have?

Keep the list short enough that every option is clearly distinct from the others, plus an escalation option. If options start to overlap, split the fork into two questions, such as first choosing a domain and then a worker within it. Watch the logs: a fork where probability is often spread across several options usually has too many or too similar candidates.

## Should ranking weights and tie-breaks live in the question?

No. Ask the decision model for relevance or trust scores and do the sorting, weighting and cutoffs in code. Practitioner overviews describe arithmetic and counting as a poor fit for Jev, and code-side ranking is easier to test and tune.

## What happens when no candidate fits the situation?

Include an explicit escalate or none option so the model has somewhere to put low-fit cases. Code should also treat a low top probability as a signal to fall back to a default route, a stronger model or a human. Log these cases, because repeated escalations for the same kind of input usually mean a candidate is missing from the list.

## Can the router decide whether a tool call is safe to run?

The router can propose a tool and even score risk, but it should not be the last check. Permission and argument validation belong in code that runs before the tool executes, regardless of how confident the route was. Treat the decision as input to that gate, not a replacement for it.
