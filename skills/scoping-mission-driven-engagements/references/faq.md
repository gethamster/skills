# FAQ: Scoping Mission-Driven FDE Engagements

## How long should a mission brief be?

One to two pages is the sweet spot. The brief needs to be short enough that all three parties will actually read it before the sign-off meeting, and long enough to cover the outcome statement, constraints, exit criteria, and handoff plan without ambiguity. If your brief exceeds three pages, you are likely including implementation details that belong in a technical design document, not in a scoping artifact.

## What if the customer cannot articulate a measurable outcome?

This is common, especially with customers who are used to buying consulting hours rather than outcomes. Guide them by asking: "If this engagement is wildly successful, what number changes and by how much?" If they still cannot name a metric, propose one based on your discovery interviews and let them react to it. Most customers can validate a proposed metric even when they cannot generate one from scratch. If after two discovery sessions the customer still cannot converge on a measurable outcome, that is a signal that the engagement is not ready to start.

## Should I scope the mission before or after I understand the customer's technical environment?

You need enough technical understanding to know whether the outcome is feasible, but you do not need a complete technical assessment. Spend one to two days on technical discovery before writing the brief. Focus on identifying hard constraints like infrastructure limitations, data access policies, and deployment processes rather than mapping the entire system. The mission brief scopes what you will achieve, not how you will achieve it.

The how emerges during execution as you [operate autonomously in the customer environment](https://tryhamster.com/skills/operating-autonomously-in-customer-environments).

## How do I handle a customer who insists on adding scope after the brief is signed?

Acknowledge the request, log it in the scope pressure appendix, and reference the brief. Say: "That is a valuable request and I have added it to our scope log. Based on our current mission brief, I want to make sure we ship the outcome we agreed on first. " If the customer's new request genuinely supersedes the original mission, trigger a formal brief revision through the three-way sign-off process.

Never absorb new scope silently.

## Can I run two missions in parallel with the same customer?

Only if you have separate FDEs assigned to each mission with separate briefs, separate stakeholders, and separate exit criteria. A single FDE should never carry two active mission briefs simultaneously because split attention leads to both missions underdelivering. If the customer needs two problems solved in the same timeframe, either assign two FDEs or sequence the missions with the higher-value outcome first.

## How do I know if my engagement timeline is too aggressive?

Work backward from the exit criteria. List every condition that must be true for the engagement to close, then estimate the minimum time required for each condition, including environment setup, development, testing, the burn-in period for verifying sustained results, and the handoff training. If the sum exceeds 80% of the timeline, the timeline is too aggressive because it leaves no buffer for the unexpected infrastructure surprises and stakeholder delays that always occur in customer environments. Either extend the timeline or reduce the scope of the outcome.

## What is the relationship between scoping missions and measuring FDE success by business outcomes?

Scoping is the input. Measurement is the output. The outcome statement in the mission brief defines what will be measured. If the brief says "reduce pipeline latency from 14 hours to under 2 hours," then [measuring success](https://tryhamster.com/skills/measuring-fde-success-by-business-outcomes) means tracking that latency metric during and after the engagement.

A poorly scoped mission with a vague outcome statement makes measurement impossible, which is why scoping is the first skill in the framework. You cannot measure what you have not defined.
