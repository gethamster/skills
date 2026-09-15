# Examples: Validating Impact Map Assumptions with Experiments

## Example: SaaS Onboarding Improvement via Impact Map Validation

**Scenario:**

A B2B SaaS company has an impact map with the goal 'Increase trial-to-paid conversion from 8% to 15%.' One branch identifies 'technical evaluators' as a key actor, with the impact 'complete a successful integration within the first 3 days,' and the deliverable 'interactive API sandbox.' The team wants to validate before building the sandbox.

**Walkthrough:**

First, the team inventories assumptions: (A1) technical evaluators are the primary blockers in conversion, (A2) integration speed is the behavior change that matters, (A3) an interactive sandbox will accelerate integration. They prioritize A1 as highest risk because if evaluators aren't the bottleneck, the entire branch is moot.

For A1, they hypothesize: 'We believe that technical evaluators who fail to integrate within 3 days are the primary reason trials don't convert. We'll know this is true when churn analysis shows ≥60% of unconverted trials had zero API calls after day 3.' They pull existing analytics — it takes 2 hours, not 2 weeks. Result: 72% of churned trials had zero integration activity. A1 is reinforced.

For A2, they run 10 customer interviews with recently churned evaluators, asking what blocked them. They hypothesize ≥7 of 10 will cite integration complexity. Result: 8 of 10 cite it. A2 is reinforced.

For A3, instead of building the full sandbox, they create a Wizard-of-Oz test: a 'Request Sandbox Access' button that, when clicked, triggers a manual concierge call from a solutions engineer who walks the evaluator through integration. They hypothesize that ≥50% of evaluators who receive this help will convert. After 2 weeks and 20 participants, 65% convert. A3 is reinforced with a note: 'Guided experience matters; pure self-service may not be enough.' The team updates the deliverable from 'interactive API sandbox' to 'guided interactive sandbox with contextual help,' and proceeds to build with high confidence.

## Example: Pruning a Branch After a Failed Experiment

**Scenario:**

A mobile fitness app's impact map has 'personal trainers' as an actor, with the impact 'recommend the app to 5+ clients per month,' and the deliverable 'trainer referral dashboard.' The goal is to increase monthly active users by 30%.

**Walkthrough:**

The team suspects this branch is risky — they've never validated that personal trainers would actually refer clients. They design a concierge experiment: they personally reach out to 30 personal trainers, offer them early access and a referral link with tracking, and hypothesize that ≥30% will refer at least 1 client within 2 weeks.

After 2 weeks, only 2 of 30 trainers (7%) referred anyone. In follow-up calls, trainers explain they see the app as competition, not a complement. The hypothesis clearly fails.

The team prunes the entire 'personal trainers' branch from the impact map. They redirect attention to a different actor branch — 'gym-goers who work out with friends' — which has a higher-confidence impact assumption. The pruning saves an estimated 6 weeks of engineering time that would have gone into the referral dashboard. This learning is documented in the experiment log and informs future actor identification sessions.
