# FAQ: Validating Impact Map Assumptions with Experiments

## What assumptions does an impact map contain?

Two on every branch, according to the impactmapping.org overview. The first is that a deliverable will support a change in an actor's behavior. The second is that once the behavior changes, the actor will contribute to the goal. Testing a branch means checking both links, since either can fail independently.

## Do we need to test every branch?

No. Focus on branches that are both important to the goal and uncertain. If a deliverable is cheap and the link to the goal is well supported, shipping it and measuring the result is the test. Expensive deliverables resting on uncertain assumptions are the ones to test before building.

## What kinds of tests work for impact maps?

It depends on how quickly you can reach users and how costly mistakes are. Gojko Adzic lists prototypes, low-fidelity interface testing, half-manual processes and skeleton apps as options when uncertainty is high. His InfoQ article with Ingrid Domingues and Johan Berndtsson describes online services validating ideas through staged deployments and A/B tests, and organizations that cannot release quickly relying on user research and prototypes.

## How do we know when a test has succeeded?

Set the threshold before the test, taken from the impact's target range, and write down what result would count as failure. Also agree what the team will do for each outcome. Without thresholds and decision rules set in advance, results tend to be reinterpreted to support whatever the team already wanted to do.

## How is this different from an Opportunity Solution Tree's assumption tests?

The idea is similar, but the placement differs. Adzic notes that an Opportunity Solution Tree lists assumptions and tests explicitly under each solution, while an impact map leaves them implicit in the links between levels. Writing the two assumptions out for each prioritized branch, as this skill does, brings that explicitness to an impact map.
