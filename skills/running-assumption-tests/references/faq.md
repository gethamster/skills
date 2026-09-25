# FAQ: Running Assumption Tests

## How many assumption tests should a product team run per week?

The Continuous Discovery Habits framework recommends at least one assumption test per week as a sustainable cadence. Most experienced teams run 1-2 per week. If you're consistently running fewer than one per week, your experiments are probably over-scoped, simplify the test design. If you're running more than 3 per week, check that each test has a genuine success criterion and you're not just going through the motions.

The goal is sustainable learning velocity, not volume for its own sake.

## How do I set a success criterion when I have no baseline data?

When you lack baseline data, use one of three approaches. Industry benchmarks include email open rates, click-through rates on CTAs, and usability task completion rates. Second, team consensus: have each team member independently write down what they'd consider a "pass," then take the median. Third, the "would we actually build this?" test, ask the team: "If the result is X, would we commit a sprint to building this?"

The number where the answer flips from no to yes is your criterion. Any of these is better than no criterion at all.

## Should I run assumption tests before or after building an opportunity solution tree?

After. The [opportunity solution tree](https://tryhamster.com/skills/building-opportunity-solution-trees) gives you the structure that makes assumption testing meaningful. Without it, you're testing assumptions about random ideas rather than assumptions about solutions connected to validated customer opportunities. The sequence is: identify opportunities through [customer interviews](https://tryhamster.com/skills/conducting-weekly-customer-interviews), map them on the tree, generate solution ideas, then test the riskiest assumptions behind those ideas.

Assumption testing without an opportunity tree is like testing ingredients before deciding what meal to cook.

## What if my assumption test result is inconclusive?

An inconclusive result means the experiment didn't produce a clear signal, the data is ambiguous, the sample was flawed, or the method didn't actually test what you intended. Do not treat inconclusive as validated. First, diagnose why it was inconclusive: was the success criterion poorly defined? Was the sample too small or unrepresentative?

Did external factors contaminate the result? Then redesign the experiment to address the specific flaw. Change the method (switch from survey to behavioral test), tighten the success criterion, or increase the sample. If a redesigned test is still inconclusive, that itself is a signal, the assumption may not be testable at this stage, and you should flag it as a known risk rather than pretending it's resolved.

## How do I convince stakeholders that invalidated assumptions are valuable, not wasted time?

Frame invalidation in terms of time and money saved. Calculate the cost of a sprint (engineer salaries × sprint length) and compare it to the cost of the assumption test (usually under a day of work). Then say: "We spent 4 hours learning that this approach doesn't work. If we'd built it first, we'd have spent 3 weeks and $30K discovering the same thing from churn data." Over time, keep a running tally of ideas killed through testing and the estimated engineering time saved.

Most teams find they save 2-4 sprints per quarter through early invalidation. Share the assumption map in stakeholder reviews so they can see the evidence trail, it transforms the narrative from "the team keeps killing ideas" to "the team systematically de-risks before building."

## Can I test multiple assumptions with one experiment?

Generally, no, and attempting to is one of the most common ways experiments become inconclusive. When a multi-assumption experiment fails, you can't tell which assumption was wrong. However, there's one exception: if two assumptions are so tightly coupled that they can only be true or false together (like "users will notice the CTA" and "users will click the CTA"), a single behavioral test covers both. The heuristic is: if the assumptions could independently be true or false, test them separately.

If one logically depends on the other in sequence, a single experiment that measures the whole sequence can work, but measure each step in the sequence separately so you know where it breaks.

## Why does my team keep validating every assumption, is something wrong?

Yes, almost certainly. A validation rate above a certain threshold is a red flag indicating one or more of these problems: your success criteria are too lenient (you're setting the bar so low that anything passes), you're testing assumptions you're already confident about rather than genuinely risky ones, you're setting success criteria after seeing results (consciously or not), or your experiments are measuring stated preference rather than behavior. Audit your last 10 tests: check that each had a pre-set numeric criterion, that the tested assumption had a risk score above 12 (3×4 minimum), and that the experiment measured action rather than opinion. A healthy team invalidates 30-50% of assumptions, that's what it looks like when you're genuinely testing things you don't know.
