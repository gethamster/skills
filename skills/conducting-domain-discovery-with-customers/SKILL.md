---
name: "conducting-domain-discovery-with-customers"
description: "Learn a customer's operations, systems and people fast enough to build the right thing, starting from your first week embedded."
category: "Workflows"
metadata:
  homepage: https://tryhamster.com
  method: "forward-deployed-engineering-fde"
  datePublished: "2026-09-24"
  dateModified: "2026-09-24"
---

# How to Do Forward Deployed Engineer Domain Discovery

> Learn a customer's operations, systems and people fast enough to build the right thing, starting from your first week embedded.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | Suggested: the first one to two weeks of an engagement, then ongoing |
| Outcome | A shared, customer-validated map of the target workflow, its data flows, its sponsor and users, and the constraints that will shape the build. |
| Prerequisites | Working software engineering skills, including reading unfamiliar codebases and schemas, Comfort interviewing and observing non-technical operators, Agreed access to the customer site, team channels and a named point of contact, Basic familiarity with the product or platform you will deploy |
| Part of | [Forward Deployed Engineering \(FDE\)](../../methods/forward-deployed-engineering-fde/METHOD.md) |

## Overview

Domain discovery is the work an embedded engineer does before building anything substantial: learning how the customer's operation actually runs, which systems and data it depends on, and where it hurts. [PostHog's explainer on the role](https://posthog.com/blog/forward-deployed-engineer) describes a forward deployed engineer as someone embedded in a customer's team to fill the gap between what the product does and what the customer needs, and notes that being embedded is what lets the engineer get familiar with the customer's existing tech stack, pain points and implementation challenges. Discovery is how you find the exact shape of that gap. For background on the model itself, see the [Forward Deployed Engineering method page](https://tryhamster.com/methods/forward-deployed-engineering-fde).

The raw input is the customer's real operating environment, not a sales brief. [NovelVista's overview of forward deployment](https://novelvista.com/blogs/ai-and-ml/what-is-a-forward-deployed-engineer) frames the practice as placing technical talent close to the business unit or operational environment where a solution must create measurable value, and lists understanding business pain points ahead of configuring platforms, building integrations and adapting workflows. In practice that environment covers workflows, data flows, infrastructure, edge cases, integration requirements and the blockers that would otherwise stall a deployment months later.

The output is not a requirements document. It is a working picture you can build against: a map of the target workflow as people actually perform it, a trace of where its data originates and where it ends up, a named sponsor and a named group of daily users, and a log of constraints and open questions. Converting that picture into buildable requirements and success metrics is a separate skill, covered in [Translating Operational Problems into Technical Requirements](https://tryhamster.com/skills/translating-operational-problems-into-technical-requirements).

Some organisations split this work between two people. A [published practitioner account of FDE teams](https://forwarddeployedbook.com/chapter-3) describes Deployment Strategists who focus on understanding the problem space, working alongside Forward Deployed Engineers who focus on building in the solution space. Even with that split, the engineer needs first-hand exposure to the operation, because the details that break an integration (a field typed by hand, an export that runs only on Mondays, a spreadsheet nobody mentions) rarely survive a handoff summary.

You can tell discovery went wrong when building starts and every demo surfaces a workflow step, a data source or a stakeholder nobody knew about. Good discovery does not remove surprises. It moves most of them to the start of the engagement, when changing direction costs a conversation instead of a rebuild.

## How It Works

Discovery runs as a short, intense orientation followed by continuous learning for the rest of the engagement. The front-loaded part matters most because it sets the scope everyone will argue about later.

**Embedding first.** The engineer works inside the customer's context rather than visiting it. [Alephic's description of forward-deployed engineering](https://alephic.com/forward-deployed-engineering) puts it plainly: the engineer embeds with the customer organisation, gets access to its systems and builds in its environment, and the first week is given over to embedding and orienting. Being present in the customer's channels and meetings is what turns discovery from a set of interviews into observation. The relationship and trust side of that presence is covered in [Facilitating Technical Customer Collaboration](https://tryhamster.com/skills/facilitating-technical-customer-collaboration); this page focuses on what you are learning while you are there.

**Three maps, built in parallel.** During orientation the engineer builds three artefacts and keeps revising them.

- *Workflow map.* The target process as it is actually performed: who does each step, what triggers it, what tools they touch, where work waits, and where people improvise. Draw it from observation, then check it against what people say.
- *Data flow map.* For each step, where the data comes from, what system holds it, who owns it, how fresh it is and what format it arrives in. Discovery only needs to locate and characterise the data; the mechanics of connecting to it belong to [Integrating Heterogeneous Data Sources](https://tryhamster.com/skills/integrating-heterogeneous-data-sources).
- *People map.* Who sponsors the work, who does the work every day, who owns each system, and who can block a change. A [forward deployed engineering playbook](https://blockchain-council.org/ai/forward-deployed-engineering-playbook-best-practices-shipping-fast-enterprise) lists identifying the executive sponsor and the day-to-day users, confirming access to data and systems, and establishing security and governance constraints among the first things to settle.

**A running constraints log.** Alongside the maps, keep one list of everything that limits what you can build: security and governance rules, infrastructure limits, edge cases operators handle by hand, and blockers such as pending approvals. [NovelVista's overview](https://novelvista.com/blogs/ai-and-ml/what-is-a-forward-deployed-engineer) names resolving deployment blockers as part of the forward deployment job; logging them during discovery is how you see them coming.

**Playback and validation.** Discovery ends its first phase when you walk the customer through your maps and they correct them. Corrections are the point. A map nobody has disputed has usually not been read.

**Continuous discovery.** After orientation, discovery does not stop. Every prototype and demo exposes new facts about the operation, and the maps should absorb them. The difference is that later findings should refine the picture rather than overturn it. If they overturn it, the orientation phase was too shallow or too narrow.

The decision you are making throughout is where to focus. A broad tour of the whole organisation feels productive but produces shallow maps. Pick the workflow the sponsor cares about most, go deep on it, and note adjacent workflows only where they feed or consume its data.

## Step-by-Step Guide

### Step 1: Embed and orient

Spend the first days inside the customer team's daily rhythm rather than in a meeting room. Get onto their chat channels, recurring meetings and ticket queues, and request read access to the systems the target workflow touches. Read whatever documentation exists, but treat it as a hypothesis about how things work. Your goal for the first week is to be able to describe the team's day without looking at notes.

> **Pro tip:** Keep a dated discovery journal from the first hour. Early impressions you later discard are still useful when you explain to the product team why a requirement changed.

### Step 2: Shadow the work as performed

Sit with the people who run the target workflow and watch them do it on real cases. Ask them to narrate what they are doing and why, and note every tool switch, copy-paste, lookup and workaround. Pay particular attention to the moments where they pause, check something elsewhere or ask a colleague. Those moments usually mark missing data, unclear ownership or an edge case the formal process ignores.

> **Pro tip:** Ask to see the last case that went wrong. Failure cases reveal rules and exceptions that a smooth demonstration of the process will hide.

### Step 3: Map the target workflow

Turn your observations into a workflow map: steps, triggers, actors, tools, hand-offs and waiting points. Mark where the documented process and the observed process diverge, because the build has to serve the observed one. Keep the map to one workflow the sponsor cares about, and note adjacent processes only where they feed or consume it. Revise the map each time you learn something that contradicts it.

### Step 4: Trace the data flows

For each step in the workflow, record which system holds the data, who owns it, how it gets there, how fresh it is and what shape it is in. Include the unofficial sources: spreadsheets, email attachments, exports someone runs by hand. Flag every point where data is re-keyed, reconciled or corrected, since those are both pain points and integration risks. You are locating and characterising data here, not building connectors yet.

> **Pro tip:** Ask each operator which number they trust least and why. The answer often points straight at the data quality issue that will dominate the build.

### Step 5: Identify the sponsor and daily users

Name the executive sponsor who wants the outcome and can unblock resources, and name the specific people who will use what you build every day. Record what each group counts as success, because sponsors and operators often want different things from the same workflow. Also identify system owners and anyone with authority to block a change, such as security or compliance reviewers. A people map with only job titles on it is not finished.

> **Pro tip:** Confirm the sponsor's priority in their own words early. If you cannot get time with them in the first week, treat that as a risk to log, not a scheduling detail.

### Step 6: Log constraints, edge cases and blockers

Maintain one running list of everything that limits the build: security and governance rules, infrastructure limits, approval processes, regulatory requirements and edge cases operators handle manually. For each item, note who owns it and whether it is confirmed or assumed. Blockers such as pending access requests or architecture reviews go here with an owner and a date. This log becomes direct input to scoping and to the deployment plan.

### Step 7: Play back what you learned

Walk the sponsor, the daily users and the system owners through your workflow map, data flow map, people map and constraints log. Ask them to correct it, and expect them to. Record every correction and the reason behind it, then update the artefacts the same day. Close the session by agreeing which workflow you will focus on first and which open questions still need answers.

> **Pro tip:** Present the maps in the customer's vocabulary, not your product's. If operators have to translate your terms, they will skim past the errors you most need them to catch.

## Best Practices

- Observe before you interview. People describe the process they believe they follow, and observation shows the one they actually follow. Interviews are most useful for explaining what you saw.
- Go deep on one workflow rather than wide across the organisation. Shallow maps of many processes give you nothing buildable, while a thorough map of one high-priority workflow lets you prototype within days.
- Record unofficial tools and data sources with the same care as official systems. Spreadsheets and manual exports often carry the logic the build must replicate, and missing them is a common cause of late surprises.
- Separate what you confirmed from what you assumed. Mark each item on your maps and constraints log, so that everyone can see which parts of the picture are solid and which still need checking.
- Share your artefacts with the customer early and often. A map the customer has corrected is far more reliable than one you perfected alone, and the act of correcting it builds shared ownership of the scope.
- Keep discovery running after the first week. Treat each demo and prototype as a discovery session and fold new facts back into the maps, so the picture stays current as the build progresses.

## Common Mistakes

- **Treating the sales brief or the kickoff deck as the problem definition.** — Use those documents as starting hypotheses only. The real input is the operating environment itself, so validate every claim in the brief against what you observe on the floor.
- **Relying on managers' descriptions of the workflow without watching operators do it.** — Shadow the people who perform the work on real cases. Managers describe the intended process, and the gaps between intended and actual are usually where the value and the risk sit.
- **Leaving the sponsor or the daily users unnamed until the build is underway.** — Name both in the first week and record what each counts as success. Discovering late that the sponsor and the operators want different outcomes forces rework and damages trust.
- **Surveying the whole organisation instead of one workflow.** — Pick the workflow the sponsor cares about most and go deep. Note adjacent processes only where they touch its data, and save broader exploration for later engagements.
- **Letting discovery stop once building starts.** — Keep the maps as living artefacts and update them after every demo. If late findings keep overturning the picture rather than refining it, return to observation before building further.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/forward-deployed-engineering-fde/METHOD.md) — Forward Deployed Engineering \(FDE\)

## Related Skills

- [Generalizing Deployment Learnings into Platform Capabilities](../generalizing-deployment-learnings-into-platform-capabilities/SKILL.md)
- [Prototyping Solution Workflows with Users](../prototyping-solution-workflows-with-users/SKILL.md)
- [Integrating Heterogeneous Data Sources](../integrating-heterogeneous-data-sources/SKILL.md)
- [Facilitating Technical Customer Collaboration](../facilitating-technical-customer-collaboration/SKILL.md)
- [Owning Outcome-Oriented Delivery End to End](../owning-outcome-oriented-delivery-end-to-end/SKILL.md)
- [Translating Operational Problems into Technical Requirements](../translating-operational-problems-into-technical-requirements/SKILL.md)
- [Deploying and Operating Production Systems On-Site](../deploying-and-operating-production-systems-on-site/SKILL.md)

## Sources

- [Forward-Deployed Engineering](https://alephic.com/forward-deployed-engineering)
- [FDE \& Deployment Strategist in Action \(Free Chapter\)](https://forwarddeployedbook.com/chapter-3)
- [What Is Forward Deployment And Why Your Team Needs To](https://novelvista.com/blogs/ai-and-ml/what-is-a-forward-deployed-engineer)
- [WTF is a forward deployed engineer? \(and why everyone](https://posthog.com/blog/forward-deployed-engineer)
- [Forward Deployed Engineering Playbook for Enterprise](https://blockchain-council.org/ai/forward-deployed-engineering-playbook-best-practices-shipping-fast-enterprise)
