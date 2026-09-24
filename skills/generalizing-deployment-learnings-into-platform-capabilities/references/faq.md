# FAQ: Generalizing Deployment Learnings into Platform Capabilities

## Who decides what gets productized, the FDE or the platform team?

The FDE captures and does the first-pass classification because they understand the context. The platform or product lead makes the final call, since they own roadmap trade-offs and long-term maintenance. The decision works best when the FDE brings the log entries and validation notes as evidence. Neither side should decide alone.

## How do I tell customer-specific work from reusable work?

Ask whether another customer in the same segment would need the same thing with only parameters changed. If yes, it is a candidate. Split mixed deliverables: customer constants such as field names or credentials are specific, while structure and logic are often reusable. When in doubt, label it a candidate and let the recurrence check settle it.

## What if a pattern never appears in a second deployment?

Then it stays in the original deployment and should eventually be sunset from the shared backlog. That is not a failure of the process; it is the process filtering out one-off needs. Keep the log entry and the reason, because a later customer may revive it with new evidence.

## Does generalizing slow down the customer deployment?

The capture and classification steps are light and fit into a short weekly session. The heavier extraction and hardening work happens only after a pattern recurs, often by a platform engineer rather than the field team. The customer deployment keeps shipping while candidates wait in the log. Over time, reusable parts shorten later deployments.

## What should I capture besides code?

Capture data mappings, evaluation setups, workflow adaptations and deployment blockers along with integrations. Repeated blockers such as security approvals often become implementation playbooks rather than software. Record what varied between customers, because variation shows where configuration belongs. Non-code patterns are frequently the most valuable ones to generalize.
