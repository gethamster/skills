# Converting Estimates to Person-Months

In RICE, Effort is the total time a project needs from everyone who works on it, measured in person-months: the work one team member can do in a month ([Intercom](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)). This reference collects the conversion rules and checks used in the skill.

## Conversion Rules

| Input | How it converts |
|-------|-----------------|
| One person, full focus, for N months | N person-months |
| One person, half their time, for N months | Half of N person-months |
| Several people in parallel | Add each person's share |
| Work in weeks | Divide the weeks by the weeks in a month, then round |
| Story points | Convert through the team's own history of points completed per person per month |
| Anything well under a month | 0.5, following the Intercom post |

Nielsen Norman Group's worked example: three months of a designer's time plus one month each from three developers is six person-months ([NN/g](https://www.nngroup.com/articles/prioritization-methods/)).

## What to Count

- Every role the idea needs to ship: product, design, engineering and testing are the usual set ([ProductPlan](https://www.productplan.com/glossary/rice-scoring-model/)).
- Rollout work, such as migrations, documentation or enablement, when the idea requires it.
- Discovery that is specific to this idea and has to happen before building.

## What to Leave Out

- Ongoing work that happens whatever gets prioritized.
- Time that is already spent, since it does not change which option is better now.
- General team overhead that applies equally to every idea. Include it everywhere or nowhere.

Whatever the team decides, apply it to every idea in the round.

## Worked Estimates

Illustrative scenario: three ideas estimated by the people who would build them.

| Idea | Role breakdown | Total | Rounded |
|------|----------------|-------|---------|
| Saved filters | Designer 1 week, engineer 3 weeks | About 1 month | 1 |
| Usage-based billing | PM half-time 2 months, 2 engineers 2 months each, QA 2 weeks | About 5.5 months | 6 |
| Tooltip copy update | PM and designer a few days | Well under a month | 0.5 |

The billing idea is rounded up because its estimate carries integration work the team has not done before. That uncertainty is also passed to Confidence. Its size relative to the others suggests checking whether a smaller first release could be scored separately.

## Checks Before Scoring

- **Is every role counted?** An estimate with no design or testing time is usually missing something.
- **Did the builders estimate it?** If not, ask them before the round.
- **Is uncertainty in the right place?** Doubt goes into Confidence, and the Effort figure stays unpadded.
- **Is the precision honest?** Whole months and halves are enough.
- **Does it match history?** Compare with how long similar past work actually took. The [planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy) describes the tendency to underestimate one's own tasks, and reference class forecasting, predicting from actual outcomes of similar projects, is one of the remedies it lists.

## A Note on Adding People

A person-month total measures capacity used. Brooks's law, from [The Mythical Man-Month](https://en.wikipedia.org/wiki/The_Mythical_Man-Month), holds that adding people to a late software project makes it later, because new people need time to learn and communication overhead grows. Do not read a total of six person-months as "six people can finish it in a month".
