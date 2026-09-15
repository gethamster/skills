# FAQ: Identifying Minimum Requirements by Working Backwards from Launch

## How do I handle stakeholders who insist a feature is critical but it does not trace to any press release promise?

Ask the stakeholder which customer promise the feature enables. If they cannot point to one, offer two paths: either add a new promise to the press release and take it through a review cycle, or classify the feature as post-launch. This reframes the conversation from 'I want this feature' to 'should we expand our launch promises?' Most stakeholders will defer the feature when they see the implication for timeline and scope. Document the request and the decision so it does not resurface without context.

## Should I identify minimum requirements before or after the FAQ section of the PR/FAQ is complete?

After. The [FAQ section](https://tryhamster.com/skills/drafting-frequently-asked-questions-documents) pressure-tests feasibility, cost, and customer concerns. Requirements identified before the FAQ is done often need rework because the FAQ surfaces constraints, objections, or technical realities that change what is viable. Complete the FAQ, run at least one [review session](https://tryhamster.com/skills/running-pr-faq-review-meetings), and then begin requirements decomposition with a stable narrative.

## How long should the requirements identification process take for a typical product launch?

Plan for 2-4 hours for the initial decomposition session with your engineering partner, then 1-2 hours for classification scoring with the broader team. Allow another 1-2 hours for the feasibility validation step. In total, expect 4-8 hours of focused work spread over 2-3 days. Rushing it into a single marathon session produces lower-quality classifications because fatigue degrades judgment on the later requirements.

## How do I identify minimum requirements when the product is a platform with multiple user types?

Write separate customer promises for each user type in your press release. Then decompose requirements per user type before consolidating. This prevents a common failure mode where requirements for one user type are assumed to satisfy another. A marketplace, for example, needs distinct promises for buyers and sellers.

After decomposing separately, you will often find shared infrastructure, like authentication and notifications, that serves both. Consolidate those, but keep user-type-specific capabilities separate.

## Why does my requirements list keep growing even after I complete the matrix?

Scope growth after matrix completion usually has one of three causes. First, your press release promises are vague enough that new requirements can be justified under broad wording. Tighten the promises. Second, you are not enforcing the traceability test on new additions.

Every proposed requirement must map to a promise before it can be classified. Third, the team is adding 'improves but not essential' items to the must-have column without re-running the classification step. Schedule a brief weekly review to catch drift and re-anchor to the matrix.

## Can I use this process for incremental feature releases, not just new product launches?

Yes. Write a mini press release, even a single paragraph, describing the customer experience after the feature ships. Then follow the same decomposition steps. For smaller features, you may have only 1-2 promises and 5-10 requirements, but the discipline of tracing each requirement to a promise and applying the simplest-version test still prevents scope creep.

Teams that adopt this for quarterly releases report 20-30% less scope change during sprints.

## How does this skill fit into building a product manager roadmap?

The requirements traceability matrix is the foundation of your product manager roadmap. Must-have items define your launch milestone. 'Improves but not essential' items populate the next 1-2 quarters. Post-launch items become candidates for future planning cycles, each requiring its own mini press release and decomposition before being committed.

This gives your roadmap a clear rationale: every item traces to a customer promise rather than an internal request or competitive reaction.
