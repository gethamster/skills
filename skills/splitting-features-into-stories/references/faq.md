# FAQ: Splitting Features into User Stories and Enablers

## What is the difference between an epic, a feature and a story in SAFe?

An epic is a significant initiative that needs analysis, an MVP definition and financial approval before implementation. A feature is functionality that delivers business value and is sized for one ART within one PI. A story is a smaller slice a single team can finish within an iteration. The levels differ in both size and in who decides whether the work proceeds.

## How big should a SAFe feature be?

The rule is that one Agile Release Train must be able to deliver it within one Program Increment. You do not need precise estimates to apply it, only a rough comparison with the train's capacity. If a feature needs a second train or a second increment, split or resize it. Features well below the limit are fine and often easier to plan.

## What is an enabler and when should I create one?

An enabler captures work that users do not see directly but that a feature needs, such as infrastructure, architecture changes, compliance tasks or research spikes. Create one whenever a story estimate is inflated by technical work or an unknown blocks the team. Give it its own acceptance criteria and link it to the stories it unblocks. This keeps both the enabler and the user stories honest and visible.

## Which splitting pattern should I use first?

Start with the pattern that makes the first story smallest while still demonstrable. Workflow steps suit processes a user moves through, business rule variations suit logic-heavy features, and happy path first suits features with many edge cases. If none fits, the feature's acceptance criteria are probably too vague. Rewrite them before trying to split again.

## Can a story span more than one iteration?

It should not. Stories are the unit teams plan into iterations, so a story that spans two iterations cannot be completed and accepted on the cadence the team plans around. Split it using the same patterns you use on features. If it truly cannot be split, treat the unknown part as a time-boxed spike enabler first.
