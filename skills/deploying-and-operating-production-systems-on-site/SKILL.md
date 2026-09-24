---
name: "deploying-and-operating-production-systems-on-site"
description: "Harden, validate and hand over a system running in the customer's environment so the customer can operate it after the engineers leave."
category: "Workflows"
metadata:
  homepage: https://tryhamster.com
  method: "forward-deployed-engineering-fde"
  datePublished: "2026-09-24"
  dateModified: "2026-09-24"
---

# Deploying Production Systems Customer Environment Skill

> Harden, validate and hand over a system running in the customer's environment so the customer can operate it after the engineers leave.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Advanced |
| Time to Learn | Several weeks per deployment, ending at an agreed handover milestone |
| Outcome | A production system that works in the customer's live environment and that the customer's own team can monitor, maintain and change without the forward deployed team. |
| Prerequisites | A working prototype validated with real users, Confirmed access to the customer's infrastructure, data and security reviewers, Named customer-side owners for operations and maintenance, Familiarity with monitoring, alerting and release tooling |
| Part of | [Forward Deployed Engineering \(FDE\)](../../methods/forward-deployed-engineering-fde/METHOD.md) |

## Overview

Deploying production systems in a customer environment is the stage of forward deployed work where a prototype becomes something the customer depends on every day. For background on the model itself, see the [Forward Deployed Engineering method page](https://tryhamster.com/methods/forward-deployed-engineering-fde). This page covers only the doing: getting a system live, keeping it live, and handing it over.

The standard is unforgiving. One comparison of adjacent roles describes the forward deployed engineer's deliverable as [a running production system, built in the customer's repositories, cloud and data, and judged on whether it works in production](https://lowtouch.ai/forward-deployed-engineering). A demo that works on your laptop does not count, and neither does a system that works only while you are sitting next to it.

The skill breaks into four jobs. First, hardening: practitioner guidance says that once a pattern is extracted, teams should [standardize integrations, harden security, observability and reliability, and create onboarding runbooks and implementation playbooks](https://blockchain-council.org/ai/forward-deployed-engineering-playbook-best-practices-shipping-fast-enterprise). Second, live validation: the forward deployed role includes [resolving deployment blockers and validating the solution in the customer's live environment](https://novelvista.com/blogs/ai-and-ml/what-is-a-forward-deployed-engineer), not in a staging copy that only approximates it. Third, maintenance transfer. Fourth, managing lock-in.

The last two are where deployments quietly fail. An Indian defence policy brief points out that forward deployed engineers [belong to a different parent organisation and will not stay on-site indefinitely](https://idsa.in/publisher/issuebrief/forward-deployed-engineering-and-ai-in-defence-operations), so the customer may inherit an AI or machine learning environment that needs skills it does not have. The same brief warns that because embedded engineers help shape requirements, they can become hard to replace, producing vendor dependence and technological lock-in. Planning the exit from the first week is part of the engineering, not an afterthought.

The output of this skill is concrete: a system that passes validation against real workflows, monitoring the customer's operators can read, runbooks for the failures you have already seen, named customer owners who have deployed and rolled back at least once, and a dated handover milestone. You can tell it went wrong when alerts still route to your team after the engagement ends, when only one outside engineer knows how to release, or when the customer cannot say which parts of the system depend on your company's platform.

## How It Works

Production deployment on customer infrastructure differs from shipping your own SaaS in one structural way: you do not control the environment, and you will not stay in it. Every practice below follows from those two facts.

**Make the environment's rules explicit.** Customer environments come with network boundaries, approved base images, change windows, identity systems and data residency rules. Palantir's Apollo team described building their deployment system so engineers could [encode the preconditions and expectations of their software next to the code itself](https://investors.palantir.com/files/Apollo%20Demo%20Day%20-%20Transcript%20EN.pdf), with the system then enforcing those embedded constraints. You do not need that product to borrow the idea. Write down what the software requires (versions, credentials, upstream services, data freshness) in a form that lives in the repository and can be checked before each release, rather than in one engineer's head.

**Harden in layers.** Security comes first because it gates everything: least-privilege service accounts, secrets in the customer's vault, audit logging the customer's security team has reviewed. Observability comes next, and it must be observability the customer's operators can use with their own tools, since your dashboards leave with you. Reliability closes the loop: retries, backpressure, graceful degradation when an upstream source is down, and a tested rollback. Practitioner guidance groups these as [security, observability and reliability hardening followed by runbooks and playbooks](https://blockchain-council.org/ai/forward-deployed-engineering-playbook-best-practices-shipping-fast-enterprise).

**Validate where the work happens.** A system is validated when the people doing the operational work use it on real cases and the results hold. The forward deployed remit explicitly includes [validating the solution in the customer's live environment](https://novelvista.com/blogs/ai-and-ml/what-is-a-forward-deployed-engineer), and the role exists to [fill the gap between what your product does and what the customer needs](https://posthog.com/blog/forward-deployed-engineer). Live validation surfaces the edge cases staging never had: malformed records, permission quirks, peak-hour load.

**Treat handover as a deliverable with a date.** The defence policy brief recommends that engagements be [time-bound around explicit milestones such as successful deployment](https://idsa.in/publisher/issuebrief/forward-deployed-engineering-and-ai-in-defence-operations) rather than left open-ended, because embedded engineering adds cost and the customer may otherwise inherit a system it cannot run. In practice the milestone bundles several checks: customer owners have performed a release and a rollback, runbooks cover every incident seen so far, alerts route to customer on-call, and a dependency map exists.

**Design against lock-in.** Lock-in is not always avoidable when the system runs on your platform, but it should be visible and chosen. Keep customer data in customer-owned stores, document every proprietary dependency and what replacing it would take, and prefer standard interfaces at the boundaries. Anything you built that other customers could use belongs in the platform, which is the subject of [generalizing deployment learnings into platform capabilities](https://tryhamster.com/skills/generalizing-deployment-learnings-into-platform-capabilities); one-off code left behind is what makes the customer dependent on you personally.

## Step-by-Step Guide

### Step 1: Inventory the target environment

Before writing deployment code, list every constraint the customer's environment imposes: network zones, approved images and runtimes, identity provider, change management process, data residency and retention rules. Meet the customer's infrastructure and security leads to confirm the list rather than inferring it from documentation. Record who approves changes and how long approval takes, because that sets your real release cadence. The output is a short environment profile stored in the repository.

> **Pro tip:** Ask to see a recent change request that was rejected; it tells you more about the real rules than the policy document does.

### Step 2: Encode deployment preconditions with the code

Turn the environment profile into checks that run before every release: required versions, reachable upstream services, valid credentials, schema expectations for incoming data. Palantir's Apollo engineers described letting teams [encode preconditions and expectations next to the code itself](https://investors.palantir.com/files/Apollo%20Demo%20Day%20-%20Transcript%20EN.pdf) so the deployment system could enforce them. Keeping these checks in the repository means the customer's team inherits them automatically. A failed precondition should block the release with a readable message, not a stack trace.

> **Pro tip:** Write each check's failure message for the customer operator who will see it after you leave, not for yourself.

### Step 3: Harden security, observability and reliability

Work through the three layers that practitioner guidance calls out after pattern extraction: [security, observability and reliability](https://blockchain-council.org/ai/forward-deployed-engineering-playbook-best-practices-shipping-fast-enterprise). Move secrets into the customer's vault, scope service accounts to least privilege, and have the customer's security team review audit logs. Emit metrics and logs into the monitoring stack the customer already runs. Add retries, timeouts and a rehearsed rollback, then break something on purpose to confirm alerts fire.

> **Pro tip:** If the customer's operators cannot answer 'is it healthy right now?' from their own dashboards, observability is not done.

### Step 4: Validate in the live environment

Run the system on real cases with the people who do the work, which is the point at which forward deployed engineers [resolve deployment blockers and validate the solution in the customer's live environment](https://novelvista.com/blogs/ai-and-ml/what-is-a-forward-deployed-engineer). Agree in advance what a correct result looks like for each workflow so validation is a check, not an opinion. Log every discrepancy, classify it as data, configuration, code or process, and fix the class rather than the instance. Validation ends when users rely on the output without a parallel manual process.

> **Pro tip:** Keep the old manual path available but measured during validation, so you can see when people stop using it.

### Step 5: Operate it alongside customer owners

For a period before handover, run operations jointly: customer engineers on the on-call rota, your team as second line. Each incident produces a runbook entry written by the customer engineer who handled it, reviewed by you. Have customer owners perform at least one release and one rollback themselves. This is where you find the knowledge that lives only in your team's heads.

> **Pro tip:** Rotate which customer engineer leads each incident so knowledge does not concentrate in one person.

### Step 6: Transfer maintenance and exit at the milestone

Close the engagement at an explicit milestone, as the defence policy brief recommends, rather than letting it drift, because the customer [may otherwise inherit an environment requiring skills it does not possess](https://idsa.in/publisher/issuebrief/forward-deployed-engineering-and-ai-in-defence-operations). The handover package includes runbooks, the environment profile, a dependency map naming every proprietary component and what replacing it would involve, and a list of known limitations. Route alerts to customer on-call and remove your team's standing access. Schedule a check-in a few weeks later to confirm nothing still depends on you.

## Best Practices

- Plan the handover in the first week. Naming customer owners and an exit milestone early shapes every later decision, from which monitoring tools you use to how you document configuration.
- Use the customer's tools, not yours. Monitoring, secrets management and ticketing should live in systems the customer already runs, because anything hosted in your tooling disappears when the engagement ends.
- Keep constraints in the repository. Preconditions, environment profiles and runbooks that sit next to the code travel with it; a wiki page on your company's intranet does not.
- Make lock-in visible. Maintain a dependency map that lists every proprietary component and the effort to replace it, so the customer can make an informed choice instead of discovering dependence later.
- Define correctness before validation starts. Agreeing on expected outputs for each workflow turns live validation into a pass or fail check and stops it from becoming an endless opinion round.
- Push reusable work back to the platform. Anything another customer could use should become a supported platform capability, since custom code left in one deployment is what only your team can maintain.

## Common Mistakes

- **Treating staging as proof. Teams declare a system ready because it passed in a test environment that lacks real data volumes, permission quirks and malformed records.** — Validate with real users on real cases in the live environment, and treat staging only as a gate before that step.
- **Keeping on-call with the forward deployed team until the last day. The customer's engineers never handle a real incident, so the first one after handover becomes a crisis.** — Run joint operations before the exit milestone, with customer engineers leading incidents and writing the runbook entries themselves.
- **Letting the engagement run open-ended. Without a defined end, cost accumulates and the customer grows dependent on specific outside engineers.** — Tie the engagement to an explicit milestone such as successful deployment plus a completed handover checklist, and remove standing access when it is met.
- **Building observability in your own dashboards. The system looks well monitored during the engagement and goes dark when your accounts are revoked.** — Send metrics, logs and alerts into the customer's existing monitoring stack and confirm their operators can diagnose a failure unaided.
- **Hiding platform dependencies. The customer learns only at renewal or during an outage how much of the system relies on proprietary components.** — Publish a dependency map with the handover package that names each proprietary component and what replacing it would take.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/forward-deployed-engineering-fde/METHOD.md) — Forward Deployed Engineering \(FDE\)

## Related Skills

- [Generalizing Deployment Learnings into Platform Capabilities](../generalizing-deployment-learnings-into-platform-capabilities/SKILL.md)
- [Prototyping Solution Workflows with Users](../prototyping-solution-workflows-with-users/SKILL.md)
- [Integrating Heterogeneous Data Sources](../integrating-heterogeneous-data-sources/SKILL.md)
- [Facilitating Technical Customer Collaboration](../facilitating-technical-customer-collaboration/SKILL.md)
- [Conducting Domain Discovery with Customers](../conducting-domain-discovery-with-customers/SKILL.md)
- [Owning Outcome-Oriented Delivery End to End](../owning-outcome-oriented-delivery-end-to-end/SKILL.md)
- [Translating Operational Problems into Technical Requirements](../translating-operational-problems-into-technical-requirements/SKILL.md)

## Sources

- [\[PDF\] April 27, 2022 --\> English Transcript - Palantir Investor Relations](https://investors.palantir.com/files/Apollo%20Demo%20Day%20-%20Transcript%20EN.pdf)
- [Forward-Deployed Engineering and AI in Defence Operations](https://idsa.in/publisher/issuebrief/forward-deployed-engineering-and-ai-in-defence-operations)
- [The $9 billion job nobody had two years ago](https://lowtouch.ai/forward-deployed-engineering)
- [What Is Forward Deployment And Why Your Team Needs To](https://novelvista.com/blogs/ai-and-ml/what-is-a-forward-deployed-engineer)
- [WTF is a forward deployed engineer? \(and why everyone](https://posthog.com/blog/forward-deployed-engineer)
- [Forward Deployed Engineering Playbook for Enterprise](https://blockchain-council.org/ai/forward-deployed-engineering-playbook-best-practices-shipping-fast-enterprise)
