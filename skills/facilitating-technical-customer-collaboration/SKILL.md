---
name: "facilitating-technical-customer-collaboration"
description: "Build trust and working rhythms with customer teams so embedded engineers can validate what they build and keep every stakeholder aligned."
category: "Workflows"
metadata:
  homepage: https://tryhamster.com
  method: "forward-deployed-engineering-fde"
  datePublished: "2026-09-24"
  dateModified: "2026-09-24"
---

# Technical Collaboration with Customers Engineering Playbook

> Build trust and working rhythms with customer teams so embedded engineers can validate what they build and keep every stakeholder aligned.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | Ongoing across an engagement, with the heaviest effort in the first few weeks |
| Outcome | A customer team that trusts the deployed system's outputs, a stakeholder group that agrees on what success looks like, and a steady channel for feedback in both directions. |
| Prerequisites | Working knowledge of the product or platform being deployed, Basic understanding of the customer's industry and operations, Authority to commit to next steps on behalf of your team |
| Part of | [Forward Deployed Engineering \(FDE\)](../../methods/forward-deployed-engineering-fde/METHOD.md) |

## Overview

Facilitating technical collaboration is the part of forward deployed work that happens around the code: earning the customer team's trust, joining their working rhythm, and keeping everyone with a stake in the deployment agreed on what "working" means. For background on the model itself, see the [Forward Deployed Engineering method page](https://tryhamster.com/methods/forward-deployed-engineering-fde). This page is about doing the collaboration well.

The reason this skill gets its own page is that it absorbs most of the effort. One practitioner quoted in [a buyer's field guide to the forward-deployed engineering model](https://magmainc.ca/guides/forward-deployed-engineering-model) estimates that seventy-five percent or more of an engagement is spent closing the trust and validation gap rather than the code gap. Treat that as one experienced person's estimate, not a measurement. It still matches the shape of the work: a customer will not change how they operate until they believe the system understands their problem and produces correct results.

The working posture is close proximity. [Alephic's description of forward-deployed engineering](https://alephic.com/forward-deployed-engineering) has the engineer embed with the customer's team, attend their standups, get access to their systems and build in their environment, removing the layers of intermediaries that usually sit between engineers and customers. [Perspective AI's summary of Palantir's playbook](https://getperspective.ai/blog/palantir-forward-deployed-engineering-playbook-anthropic-openai-copying) calls the people who do this well engineer-diplomats, and lists embedding at the customer and routing product feedback through the FDE among its recurring lessons.

How much of that time is physically spent with the customer varies by company, so set it deliberately rather than assuming a standard:

| Company | Expected customer-facing time | Source |
|---|---|---|
| Palantir | Around 25% of an FDE's time, historically | [IIT on the FDE role](https://iit.edu/blog/forward-deployed-engineer) |
| Commure | Up to 50%, by its estimate | [IIT on the FDE role](https://iit.edu/blog/forward-deployed-engineer) |

The skill breaks into four habits: mapping who has a stake and what they need to believe, joining the customer's own cadence instead of imposing yours, agreeing up front how outputs will be validated, and running short alignment loops so that disagreements surface while they are cheap. The rest of this page covers each one, how to tell when collaboration is failing, and what to do about it.

## How It Works

Collaboration on a forward deployed engagement runs on three things the customer has to believe, and each one needs a different kind of evidence.

First, they have to believe you understand their operation. That comes from presence, not presentations. When you sit in their standups and work inside their systems, as [Alephic's account of embedded engineering](https://alephic.com/forward-deployed-engineering) describes, you pick up vocabulary, informal workarounds and the real priority order of problems. The signal that this is working is when customer staff start bringing you problems unprompted instead of waiting for a scheduled meeting.

Second, they have to believe the system's outputs are correct. This is the validation half of what [the forward-deployed buyer's field guide](https://magmainc.ca/guides/forward-deployed-engineering-model) calls the trust and validation gap. Customer experts already have a mental model of what right answers look like. Your job is to make their judgment part of the test: agree on a set of known cases, run the system against them together, and treat every disagreement as either a bug or a gap in your understanding. Validation that happens only on your side, however rigorous, does not build their confidence.

Third, they have to believe the people with authority agree. A deployment usually touches an executive sponsor who cares about the business result, day-to-day users who care about their workload, IT or security staff who care about risk, and your own core product team who care about what generalizes. These groups rarely want identical things. Alignment means making the trade-offs visible early, in writing, and getting an explicit decision rather than letting each group assume its preference won.

The mechanics that support all three are a set of recurring rhythms:

- **Daily presence**: joining the customer team's standup or equivalent, listening more than reporting.
- **Working sessions**: pairing with users on real tasks, where misunderstandings show up fastest.
- **Frequent demos of working software**: [Perspective AI's summary of Palantir's approach](https://getperspective.ai/blog/palantir-forward-deployed-engineering-playbook-anthropic-openai-copying) lists shipping on day one and treating customer discovery as engineering work, which means showing something real instead of describing it.
- **Stakeholder check-ins**: short, regular reviews with the sponsor and affected leads to confirm priorities and resolve conflicts.
- **A feedback route home**: the same source lists routing product feedback through the FDE, so what you learn reaches the core product team instead of staying in your notes.

The amount of on-site time these rhythms need is a design choice. [IIT's overview of the role](https://iit.edu/blog/forward-deployed-engineer) reports Palantir historically expecting around 25 percent of an FDE's time with customers and Commure estimating up to 50 percent ([source](https://iit.edu/blog/forward-deployed-engineer)), which tells you there is no fixed norm. Heavier presence usually pays off early, when trust is lowest and the problem is least understood.

You can tell collaboration is failing by a few symptoms: users route requests through their manager instead of to you, demos draw polite nods but no corrections, the sponsor learns about problems from someone other than you, or validation disputes keep reopening the same cases. Each points to a specific habit that has lapsed.

## Step-by-Step Guide

### Step 1: Map the stakeholders and what each must believe

List everyone the deployment affects: the executive sponsor, day-to-day users, IT and security owners, and your own core product contact. For each, write down what they need to see before they will support the system, such as a business metric for the sponsor or less manual rework for users. Note who can block the deployment and who can only slow it. Keep this map short enough to fit on one page and revisit it as you learn.

Its output is a clear view of whose trust you need and what evidence earns it.

> **Pro tip:** Ask each person who else you should talk to. The names that come up repeatedly but were missing from your list are often the real decision makers.

### Step 2: Join the customer's working rhythm

Attend the customer team's standups, planning sessions and incident reviews rather than setting up a parallel meeting schedule of your own. Get access to the systems they actually use so you can see problems firsthand. In early standups, listen for recurring complaints and informal workarounds instead of reporting your own progress at length. Being inside their cadence shortens the loop between a problem appearing and you hearing about it.

It also signals that you are part of the team, not an outside reviewer.

> **Pro tip:** In the first week, aim to speak less than you listen in every customer meeting. Your updates matter less than their vocabulary and priorities.

### Step 3: Agree on how outputs will be validated

Before building much, sit down with the customer's domain experts and agree on what a correct result looks like. Collect a set of known cases where they already know the right answer and use them as a shared test set. Decide together who signs off that the system is behaving correctly and on what basis. When the system and an expert disagree, investigate jointly and record whether it was a defect or a gap in your understanding.

This turns validation from something you assert into something the customer owns.

> **Pro tip:** Include a few awkward edge cases the experts argue about among themselves. Resolving those early prevents the same dispute from reopening later.

### Step 4: Show working software early and often

Put something real in front of users as soon as it runs, even if it is rough. Watch them use it on their own tasks rather than walking them through a scripted demo. Corrections from users are the most valuable output of these sessions, so ask what is wrong before asking what they like. Schedule these showings at a predictable cadence so users expect them and prepare feedback.

Silence or uniform praise usually means users are not engaging, not that the work is finished.

### Step 5: Run short stakeholder alignment check-ins

Hold a brief, regular review with the sponsor and the leads of affected teams. Bring the current state, the open trade-offs and a specific decision you need from them. Write down each decision and who made it, then share the note so no group can later assume its preference won by default. Raise conflicts between groups as soon as you spot them rather than trying to satisfy everyone quietly.

The output is a written record of agreed priorities that everyone has seen.

> **Pro tip:** End every check-in by reading back the decisions made. Misunderstandings surface in that thirty seconds far more often than in the meeting itself.

### Step 6: Plan on-site and customer-facing time deliberately

Decide how much time you will spend with the customer instead of drifting into whatever the calendar allows. Front-load presence in the first weeks, when trust is lowest and the problem is least understood. As validation stabilizes and working rhythms settle, shift some time back to building and to your core product team. Make the plan explicit with your own manager and with the customer sponsor so neither is surprised.

Revisit it whenever trust signals weaken.

> **Pro tip:** Tie time changes to trust signals, for example stepping back only after users bring issues to you directly and validation disputes have stopped recurring.

### Step 7: Route what you learn back to the product team

Keep a running log of the problems, requests and workarounds you encounter, and separate customer-specific items from ones that look broadly useful. Share the broadly useful items with your core product team on a regular schedule, with enough context that they can act without a meeting. Tell the customer which of their requests have gone upstream and what happened to them. Closing that loop shows the customer their input changes the product.

It also keeps you from quietly becoming a custom integrator for one account.

## Best Practices

- Be present in the customer's own meetings before asking for their time in yours. Embedding in existing rhythms, as [Alephic describes](https://alephic.com/forward-deployed-engineering), gets you real problems faster than scheduled interviews and signals you are part of the team.
- Make customer experts co-owners of validation. Trust in outputs grows when their judgment is built into the test set, which is the core of closing what [the buyer's field guide](https://magmainc.ca/guides/forward-deployed-engineering-model) calls the trust and validation gap.
- Prefer showing to telling. A running prototype on real data draws specific corrections, while slides draw agreement that means little. Treat user corrections as the main output of every demo.
- Write down stakeholder decisions and circulate them the same day. Unrecorded agreements drift, and groups with competing interests will each remember the version that suits them.
- Set on-site time explicitly per engagement. Norms differ widely between companies, per [IIT's overview](https://iit.edu/blog/forward-deployed-engineer), so agree the expectation with your manager and the customer rather than assuming one.
- Tell the customer what happened to their feedback. Routing product feedback through the FDE, as [Perspective AI's playbook summary](https://getperspective.ai/blog/palantir-forward-deployed-engineering-playbook-anthropic-openai-copying) recommends, only builds trust when customers see requests either land or get a clear reason why not.

## Common Mistakes

- **Treating the engagement as mainly a coding problem and scheduling almost no time for trust-building.** — Budget for validation and relationship work from the start. One practitioner estimate in [the buyer's field guide](https://magmainc.ca/guides/forward-deployed-engineering-model) puts that gap at most of the engagement, so plan working sessions and joint validation as core tasks, not extras.
- **Validating the system only against your own test data and presenting results as settled.** — Build a shared test set with the customer's experts and run it together. Disagreements you resolve jointly build confidence, while results you assert tend to be doubted at the first surprising output.
- **Staying in a vendor posture: separate meetings, status reports and requests routed through account managers.** — Join the customer's standups and work in their systems directly. [Alephic's account](https://alephic.com/forward-deployed-engineering) frames removing intermediaries between engineers and customers as the point of embedding.
- **Trying to satisfy every stakeholder group quietly when their priorities conflict.** — Surface the conflict in a check-in, lay out the trade-off and ask the sponsor for a decision. Record it in writing so the losing preference does not resurface as a surprise later.
- **Absorbing every customer request as custom work with no link back to the product.** — Separate customer-specific requests from broadly useful ones and send the latter to your core team. [Perspective AI's summary](https://getperspective.ai/blog/palantir-forward-deployed-engineering-playbook-anthropic-openai-copying) lists refusing the systems-integrator role among Palantir's recurring lessons.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/forward-deployed-engineering-fde/METHOD.md) — Forward Deployed Engineering \(FDE\)

## Related Skills

- [Generalizing Deployment Learnings into Platform Capabilities](../generalizing-deployment-learnings-into-platform-capabilities/SKILL.md)
- [Prototyping Solution Workflows with Users](../prototyping-solution-workflows-with-users/SKILL.md)
- [Integrating Heterogeneous Data Sources](../integrating-heterogeneous-data-sources/SKILL.md)
- [Conducting Domain Discovery with Customers](../conducting-domain-discovery-with-customers/SKILL.md)
- [Owning Outcome-Oriented Delivery End to End](../owning-outcome-oriented-delivery-end-to-end/SKILL.md)
- [Translating Operational Problems into Technical Requirements](../translating-operational-problems-into-technical-requirements/SKILL.md)
- [Deploying and Operating Production Systems On-Site](../deploying-and-operating-production-systems-on-site/SKILL.md)

## Sources

- [Forward-Deployed Engineering](https://alephic.com/forward-deployed-engineering)
- [What Is a Forward Deployed Engineer? Inside Tech's Hottest New](https://iit.edu/blog/forward-deployed-engineer)
- [The Forward-Deployed Engineering Model: A Buyer's Field Guide](https://magmainc.ca/guides/forward-deployed-engineering-model)
- [Palantir's Forward-Deployed Engineering Playbook - Perspective AI](https://getperspective.ai/blog/palantir-forward-deployed-engineering-playbook-anthropic-openai-copying)
