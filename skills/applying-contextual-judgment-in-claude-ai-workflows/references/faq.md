# FAQ: Claude Constitutional Reasoning in AI Workflows

## What does "Claude constitutional reasoning" mean in practice?

It refers to how Claude is meant to decide what to do using the values and priorities in Anthropic's constitution, instead of following a fixed rule for every case. In practice it means Claude weighs what you asked for, why you asked, the unstated standards around the task and your right to decide. Your job in a workflow is to supply that context so the weighing has something to work with.

## Does contextual judgment make Claude less predictable?

Somewhat, and the constitution says so: judgment adapts to new situations at some cost to predictability and ease of evaluation. You recover predictability by stating goals, reasons and priorities clearly, and by testing a template across its full range of inputs. For outcomes that must never happen, use firm rules backed by controls outside the model.

## How much context should a prompt include?

Include what a capable new colleague would need to do the task well and leave out what would not change their decision. A useful test from Anthropic's prompting guide is to show the prompt to someone without background on the task; if they would be confused, Claude will be too. Remove sentences that do not affect the output when you test without them.

## When should I still use strict rules?

Use them where a mistake is costly enough that predictability matters more than flexibility, where you need a commitment that cannot be argued away, or where the task is mechanical. Keep those rules short, write the reason next to each one, and enforce the critical ones with tooling. Everything else is usually better served by context.

## Should Claude ask clarifying questions or just proceed?

It depends on whether a person is available. The constitution asks Claude to seek clarification in cases of genuine ambiguity and also lists over-checking on simple agentic tasks as a failure. Tell Claude which mode the workflow is in, and for unattended runs ask it to record its assumptions instead of asking.
