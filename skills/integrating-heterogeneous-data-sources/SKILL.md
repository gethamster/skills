---
name: "integrating-heterogeneous-data-sources"
description: "Connect a customer's scattered systems and data into one working deployment by confirming access, mapping fields and building connectors."
category: "Workflows"
metadata:
  homepage: https://tryhamster.com
  method: "forward-deployed-engineering-fde"
  datePublished: "2026-09-24"
  dateModified: "2026-09-24"
---

# Integrating Heterogeneous Data Sources Engineering in FDE

> Connect a customer's scattered systems and data into one working deployment by confirming access, mapping fields and building connectors.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Advanced |
| Time to Learn | Several weeks per deployment, with ongoing upkeep |
| Outcome | A validated set of connectors and documented data mappings that feed one high-value customer workflow with live, trustworthy data. |
| Prerequisites | Working knowledge of databases, APIs and file-based data exchange, Familiarity with the customer's target workflow from domain discovery, Ability to write and operate integration code in an unfamiliar environment, Basic understanding of security and data governance controls |
| Part of | [Forward Deployed Engineering \(FDE\)](../../methods/forward-deployed-engineering-fde/METHOD.md) |

## Overview

Every forward deployed engagement eventually runs into the same wall: the product works on clean demo data, and the customer's real data lives in five systems that were never designed to talk to each other. Integrating heterogeneous data sources is the skill of closing that gap. It covers confirming you can actually reach the data, understanding what each source means, mapping it onto a shared model, and building the connectors that keep a deployment fed. For background on the operating model itself, see the [Forward Deployed Engineering method page](https://tryhamster.com/methods/forward-deployed-engineering-fde).

The reason this sits with the embedded engineer rather than a central integrations team is proximity. Being embedded on customer teams is what lets engineers [get familiar with customers' existing tech stack, pain points, and implementation challenges](https://posthog.com/blog/forward-deployed-engineer), and data integration is where those three collide. Practitioner descriptions of forward deployment list the inputs explicitly: [business workflows, data flows, infrastructure, edge cases, integration requirements and deployment blockers](https://novelvista.com/blogs/ai-and-ml/what-is-a-forward-deployed-engineer). None of that is visible from a spec sheet. You learn that the ERP exports dates in two formats, or that the plant floor tracks assets by a code nobody in finance uses, only by sitting with the people who run those systems.

The work also starts earlier than most engineers expect. A practitioner playbook puts [confirming access to data and systems and establishing security and governance constraints](https://blockchain-council.org/ai/forward-deployed-engineering-playbook-best-practices-shipping-fast-enterprise) alongside defining the target outcome, before building begins. Access is rarely a technical problem. It is a question of who owns a system, who can approve a service account, and which data is allowed to leave which network. Engineers who treat it as an afterthought lose weeks waiting on approvals after the code is ready.

Done well, this skill produces three things: connectors that reliably move the right data for one workflow, a written mapping that explains how each source field becomes a field in the deployment's model, and a blocker log that shows what stood in the way and how it was resolved. Done badly, it produces a tangle of one-off scripts that only the original engineer understands and that break silently when a source system changes.

This page covers the doing: access confirmation, source inventory, data mapping, connector building and blocker handling. Turning repeated connectors into platform capabilities is covered in the skill on [generalizing deployment learnings into platform capabilities](https://tryhamster.com/skills/generalizing-deployment-learnings-into-platform-capabilities), and hardening and handover live in [deploying and operating production systems on-site](https://tryhamster.com/skills/deploying-and-operating-production-systems-on-site).

## How It Works

Heterogeneous integration works as a sequence of layers, each of which must be settled before the next one is worth building. Skipping a layer does not save time; it moves the failure later, where it is more expensive.

The first layer is access. Before writing a line of connector code, the engineer establishes which systems hold the data, who owns each one, what credentials or network paths are needed, and which governance rules apply. A practitioner playbook groups [confirming data and system access with security and governance constraints](https://blockchain-council.org/ai/forward-deployed-engineering-playbook-best-practices-shipping-fast-enterprise) into the setup work that precedes building. The output is an access register: each source, its owner, the access method, its approval status and any restrictions on where data may be copied or stored.

The second layer is understanding. Each source is profiled for structure, volume, freshness and quality. This is where the engineer discovers that a customer identifier is a number in one system and a padded string in another, that a status field has undocumented values, or that a nightly export sometimes arrives empty. Forward deployment guidance names [edge cases, integration requirements and deployment blockers](https://novelvista.com/blogs/ai-and-ml/what-is-a-forward-deployed-engineer) as core inputs, and profiling is how you surface them deliberately rather than by accident.

The third layer is mapping. The engineer defines a shared model for the target workflow, usually a small set of entities and relationships the users actually reason about, and writes down how every relevant source field transforms into it. The mapping document records the source, the target, the transformation rule, how conflicts between sources are resolved and who confirmed the rule is correct. Mapping is a decision layer, not a mechanical one: choosing which system is authoritative for a given field is a business choice that the customer must sign off.

The fourth layer is connectors. Only now does the engineer build the pipelines, API clients, file watchers or database extracts that move data into the model. The scope should match the workflow, not the whole data estate. Descriptions of the role frame it as [building integrations or automation and resolving deployment blockers](https://novelvista.com/blogs/ai-and-ml/what-is-a-forward-deployed-engineer) in service of filling [the gap between what your product does and what the customer needs](https://posthog.com/blog/forward-deployed-engineer), which argues for building exactly the connectors that gap requires.

The fifth layer is validation. The integrated data is checked against the live environment with the people who know what correct looks like: a planner confirms the schedule matches reality, an analyst reconciles totals against the report they already trust. Discrepancies go back to the mapping layer, not into ad hoc patches in connector code.

Running across all five layers is the blocker log. Every missing credential, undocumented field, rate limit or approval delay is recorded with an owner and a status. The same playbook recommends [capturing common integrations, data mappings and evaluation setups weekly](https://blockchain-council.org/ai/forward-deployed-engineering-playbook-best-practices-shipping-fast-enterprise), and that capture is far easier when the mapping document and blocker log already exist. Later, the playbook's advice to [standardize integrations and harden security, observability and reliability](https://blockchain-council.org/ai/forward-deployed-engineering-playbook-best-practices-shipping-fast-enterprise) builds directly on this record.

## Step-by-Step Guide

### Step 1: Confirm access and governance

List every system the target workflow depends on and, for each, identify the owner, the access method and the approval path. Ask the security or data governance team which data may be copied, where it may be stored and whether any fields must be masked. Request credentials and network access for all sources at once rather than one at a time as you discover them. Record everything in an access register with status and owner.

Do not start building connectors against a source whose access is still unapproved.

> **Pro tip:** Ask for read-only service accounts first. They are usually approved faster and are enough for profiling and mapping.

### Step 2: Inventory sources and their owners

For each system, record what it holds, how data leaves it (API, database, export file, message queue), how often it updates and who can answer questions about it. Talk to the people who enter the data, not only the administrators, because they know which fields are trusted and which are ignored. Note any source that is manual, such as a spreadsheet maintained by one person. Manual sources are often the most important and the most fragile.

The inventory becomes the map everyone refers to when something breaks.

> **Pro tip:** Name a human contact for every source. An integration with no one to ask is a blocker waiting to happen.

### Step 3: Profile the data

Pull a representative sample from each source and examine structure, null rates, value distributions, date formats and identifier formats. Look specifically for the fields that will join sources together, since mismatched keys are the most common cause of silent integration errors. Check freshness: when did each source last update, and does that match what users assume? Write down every anomaly with an example value.

This step turns vague unease about data quality into a concrete list of rules you need to handle.

> **Pro tip:** Profile the join keys across sources before anything else. If identifiers do not line up, the mapping plan changes.

### Step 4: Map fields to a shared model

Define the small set of entities the target workflow needs, then map each relevant source field to them with an explicit transformation rule. Where two sources disagree about the same fact, decide which one is authoritative and get the customer to confirm that choice. Document unit conversions, code translations and how missing values are handled. Keep the mapping in a shared document the customer can read and correct.

Treat this document as the specification for the connectors, not as after-the-fact documentation.

### Step 5: Build connectors for one workflow

Implement only the connectors the target workflow needs, in the order the workflow consumes data. Put transformation logic in one place that mirrors the mapping document, so a changed rule means one change in code. Make each connector idempotent and log what it read, what it wrote and what it rejected. Prefer the source's official interface over scraping or direct table access where one exists, because it is less likely to break on upgrade.

Resist extending a connector to cover data no current user needs.

> **Pro tip:** Log rejected records with the reason. A rising rejection count is often the first sign a source system changed.

### Step 6: Validate against live data with users

Run the connectors against production sources and put the result in front of the people who know what correct looks like. Reconcile totals, counts or key records against a report or screen they already trust. When something is wrong, trace it to the mapping rule or source anomaly and fix it there. Repeat until the users accept the data as reliable enough to act on.

Record their sign-off along with the date and the scope of what was validated.

### Step 7: Log and clear integration blockers

Keep a single blocker log across the whole integration, with each item's description, owner, date raised and status. Review it with the customer sponsor on a fixed cadence so stalled approvals get escalated before they delay go-live. Separate blockers you can engineer around from those that need a customer decision. When a blocker is resolved, note how, because the same problem tends to recur in the next source or the next deployment.

Feed recurring patterns into your regular pattern capture.

> **Pro tip:** Review the blocker log weekly with the sponsor, for example as a standing ten-minute item, so approvals never go quiet.

## Best Practices

- Settle access before code. Approvals and credentials often take longer than building a connector, so requesting them on day one keeps them off the critical path.
- Scope integration to one workflow. Connecting every system the customer owns multiplies failure points without adding value users can see, while a narrow scope gets real data in front of users sooner.
- Make the customer own authority decisions. Which system wins when two disagree is a business rule, and if the engineer decides it silently, the first discrepancy users find will erode trust in the whole deployment.
- Keep transformation logic in one place that mirrors the mapping document. When rules are scattered across scripts, a source change requires hunting through code, and fixes drift from what the customer agreed.
- Validate with the people who use the data, against something they already trust. Technical checks catch broken pipelines, but only users catch data that is well formed and wrong.
- Record resolved blockers and repeated mappings as you go. That record is the raw material for turning one deployment's connectors into something the next deployment can reuse.

## Common Mistakes

- **Building connectors before access is approved, then discovering the data cannot legally or technically leave its network.** — Complete the access register and governance review first. If a source is restricted, redesign the approach, for example processing in place, before investing in code.
- **Assuming identifiers match across systems because they share a field name.** — Profile join keys in every source before mapping. Normalize formats explicitly and log records that fail to join instead of dropping them silently.
- **Treating the mapping as an engineering detail and never showing it to the customer.** — Keep the mapping in a readable shared document and get domain owners to confirm each authority and transformation rule. It is the specification users will judge the data against.
- **Patching data errors inside connector code as they are found during validation.** — Trace every discrepancy back to a mapping rule or source anomaly and fix it there. Scattered patches make the integration impossible to maintain or hand over.
- **Letting blockers live in chat threads and individual inboxes.** — Maintain one blocker log with owners and statuses and review it with the sponsor on a fixed cadence. Blockers that nobody tracks quietly become go-live delays.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/forward-deployed-engineering-fde/METHOD.md) — Forward Deployed Engineering \(FDE\)

## Related Skills

- [Generalizing Deployment Learnings into Platform Capabilities](../generalizing-deployment-learnings-into-platform-capabilities/SKILL.md)
- [Prototyping Solution Workflows with Users](../prototyping-solution-workflows-with-users/SKILL.md)
- [Facilitating Technical Customer Collaboration](../facilitating-technical-customer-collaboration/SKILL.md)
- [Conducting Domain Discovery with Customers](../conducting-domain-discovery-with-customers/SKILL.md)
- [Owning Outcome-Oriented Delivery End to End](../owning-outcome-oriented-delivery-end-to-end/SKILL.md)
- [Translating Operational Problems into Technical Requirements](../translating-operational-problems-into-technical-requirements/SKILL.md)
- [Deploying and Operating Production Systems On-Site](../deploying-and-operating-production-systems-on-site/SKILL.md)

## Sources

- [What Is Forward Deployment And Why Your Team Needs To](https://novelvista.com/blogs/ai-and-ml/what-is-a-forward-deployed-engineer)
- [WTF is a forward deployed engineer? \(and why everyone](https://posthog.com/blog/forward-deployed-engineer)
- [Forward Deployed Engineering Playbook for Enterprise](https://blockchain-council.org/ai/forward-deployed-engineering-playbook-best-practices-shipping-fast-enterprise)
