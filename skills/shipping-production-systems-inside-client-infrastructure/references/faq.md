# FAQ: Shipping Production Systems Inside Client Infrastructure

## How do I handle a customer environment where there is no CI/CD pipeline or infrastructure-as-code?

This happens more often than you would expect, especially with smaller customers or legacy enterprises. Establish a minimal viable deployment pipeline before building your application. Set up a simple CI pipeline that builds, tests, and packages your code, and a basic infrastructure-as-code setup for the components you need. Keep it simple enough that the customer can maintain it.

Frame this work as part of the engagement scope during [mission scoping](https://tryhamster.com/skills/scoping-mission-driven-engagements), not as a surprise addition.

## How long should the infrastructure discovery sprint take?

Two to three days for a typical engagement. If the customer has a complex environment with multiple security zones, legacy systems, or multi-cloud infrastructure, budget up to five days. The discovery sprint should never exceed one week because diminishing returns set in quickly. You will discover additional constraints during integration work regardless of how thorough your discovery was.

The goal is to catch the big blockers early, not to document every detail.

## Should I ship the production system before or after completing the handoff runbook?

Start the runbook during development and complete it before the production deployment. Writing the runbook after deployment is a common mistake because you are under pressure to move on to the next engagement and details get lost. The deployment procedure itself should be documented in the runbook before you execute it, which forces you to make the process explicit and repeatable. You will update the runbook based on the actual deployment experience and the post-deployment support window.

## How do I manage conflicting priorities between moving fast on features and passing the customer's security review?

Submit your architecture for security review during the first week and continue building features in parallel. Structure your work so that security-sensitive components, such as authentication, data storage, and network configuration, are built first and can be reviewed independently. If the security team requests changes, you want those changes to affect foundational components before you have built features on top of them. Treat security requirements as design constraints, not post-build patches.

## What do I do when the customer's existing systems have undocumented behavior that breaks my integration?

This is normal and expected. Build integration adapters with extensive logging at the debug level so you can capture actual request and response payloads during development. When you discover undocumented behavior, document it in your adapter code with comments, add specific test cases for it, and share your findings with the customer's team. Often you will be the first person to formally document how their own systems actually behave.

This documentation becomes part of your handoff artifacts and is one of the most valued contributions a forward deployed engineer makes.

## How do I balance using the customer's tools versus introducing better alternatives?

Default to the customer's tools unless they create a genuine technical blocker for your deployment. 'Better' is subjective and often reflects your familiarity rather than objective superiority. If you must introduce a new tool, choose one the customer has already evaluated or that has strong community adoption in their ecosystem. Propose it with a clear rationale tied to their goals, not yours.

Get buy-in from the team members who will maintain it after you leave. If they are not enthusiastic, find a way to use their existing tools instead.

## Why does my deployment keep failing in the customer's environment when it works in staging?

The most common causes are environment-specific configuration differences that staging does not replicate: different network policies, different resource limits, different secret values, different DNS resolution, or different versions of shared dependencies. Audit the differences between staging and production systematically. Create a checklist of every environment-specific parameter and verify each one matches production requirements. Also check whether staging has the same traffic load, data volume, and concurrent connections as production, since many failures only manifest under realistic conditions.
