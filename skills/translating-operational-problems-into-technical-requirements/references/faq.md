# FAQ: Translating Operational Problems into Technical Requirements

## Who should own requirement translation on a forward deployed team?

It depends on team size. Some teams split the work between a problem-space role and a solution-space role, such as the Deployment Strategists and Forward Deployed Engineers in [one practitioner account](https://forwarddeployedbook.com/chapter-3). On smaller teams the embedded engineer does both. Either way, one named person should own the written outcome and requirements so changes have a single home.

## How is this different from domain discovery?

Discovery gathers the raw material: workflows, data flows, stakeholders and pain points. Translation turns that material into a decision about what to build and how success is judged. See [Conducting Domain Discovery with Customers](https://tryhamster.com/skills/conducting-domain-discovery-with-customers) for the first half. In practice the two overlap, and translation often sends you back to discovery to fill a gap.

## Why only one outcome when the customer has many problems?

A single outcome gives every requirement one test for inclusion and makes progress measurable. Pursuing several at once lets scope grow without anything finishing. The other problems are not dropped; they go into a visible backlog and become the next outcome once the first one moves.

## What if the customer cannot agree on a success metric?

Usually the disagreement is about the outcome, not the metric, so go back and confirm which outcome the sponsor wants first. Then offer metrics the customer already tracks, since those are easiest to trust. If no suitable data exists, the first requirement may be to start measuring. Do not start building the main solution until the metric and its calculation are agreed.

## How detailed should requirements be before building starts?

Detailed enough that someone outside discovery could build and verify each item without a follow-up question, and no more. Each requirement should name the user, trigger, expected behaviour and check. Deeper design choices belong to the build and to [prototyping with users](https://tryhamster.com/skills/prototyping-solution-workflows-with-users), where they can be tested against real work.
