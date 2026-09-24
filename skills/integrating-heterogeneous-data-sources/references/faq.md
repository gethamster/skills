# FAQ: Integrating Heterogeneous Data Sources

## How is this different from a standard data engineering project?

The techniques overlap, but the context differs. A forward deployed engineer integrates data inside the customer's environment, for one workflow, while also learning the domain and owning whether the result works for users. Scope is set by the target workflow rather than by a data platform roadmap, and the customer's people are part of the validation loop.

## Should I build a full data warehouse before starting the workflow?

Usually not. Integrate the sources the target workflow needs, validate with users, and extend only when a new workflow requires more data. A broad warehouse built up front delays the point at which users see value and often includes data nobody ends up using.

## What do I do when the customer cannot grant access to a key source?

Record it as a blocker with an owner and escalate it through the sponsor. Meanwhile, look for alternatives: processing data where it lives, using an approved export, or working with derived or masked fields. If none is acceptable, reconsider whether the workflow is the right first target.

## How detailed should the mapping document be?

Detailed enough that another engineer could rebuild the transformations from it and a domain expert could spot a wrong rule. Each entry should give the source field, target field, transformation, conflict rule and who confirmed it. If people routinely need to read the code to understand the data, the document is too thin.

## When should a connector become a reusable product component?

When the same integration or mapping pattern shows up in more than one deployment, it is a candidate for generalization. That decision and the process for it belong to the platform side of the work. See the skill on generalizing deployment learnings into platform capabilities for how teams make that call.
