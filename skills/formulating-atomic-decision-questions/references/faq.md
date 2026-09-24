# FAQ: Formulating Atomic Decision Questions

## What makes a decision question "typed"?

The answer can only come from a fixed set defined in advance: two values, a list of options, or ordered levels. Code can switch on the result without parsing text. The typing guarantees the shape of the answer, not its correctness, which is why the rubric and test set still matter.

## How many options should a choice question have?

As many as there are distinct downstream actions, plus an escape option, and no more. If two options lead to the same code path, merge them. If the list grows long, check whether it is really two questions, such as a category followed by a sub-category.

## Should I use a score or a choice for severity?

Use an ordered score when levels are genuinely ranked and code will compare them against a cutoff. Use a choice when each level triggers an unrelated path. Scores keep the cutoff tunable later without rewriting the question.

## Why write the rubric before running the model?

Early outputs anchor your judgement, and it is easy to redefine categories to match what the model returned. A rubric written first gives a fixed target for labelling examples. Later changes should come from disagreements between human labellers, which points to genuine ambiguity in the wording.

## When do I need the choice-then-verify pattern?

Whenever more than one answer can be correct for the same input, such as picking several tools or skills for one task. A single choice can only return one option, and isolated yes/no questions lack the comparison between candidates. Ranking first and verifying the leaders combines both strengths.
