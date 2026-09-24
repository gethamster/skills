---
name: "balancing-autonomy-and-alignment"
description: "Set the shared direction, guardrails and decision rights squads need to stay aligned, without approval gates that quietly remove their autonomy."
category: "Product"
metadata:
  homepage: https://tryhamster.com
  method: "spotify-squads"
  datePublished: "2026-05-18"
  dateModified: "2026-09-24"
---

# Autonomy vs Alignment Agile: Aligning Without Approvals

> Set the shared direction, guardrails and decision rights squads need to stay aligned, without approval gates that quietly remove their autonomy.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Advanced |
| Time to Learn | Two to four weeks to set up, then a recurring review each quarter |
| Outcome | A decision rights map, a short set of guardrails and a small number of alignment forums that keep squads pointed in the same direction while they decide how to deliver on their own. |
| Prerequisites | Squads with defined product areas and missions, Access to tribe or product leadership who can set shared priorities, A list of the approval steps squads currently go through, Familiarity with squads, tribes, chapters and guilds |
| Part of | [Spotify Squads](../../methods/spotify-squads/METHOD.md) |

## Overview

The tension between autonomy and alignment is built into the model. [One definition of the Spotify Model](https://mooncamp.com/glossary/spotify-model) describes it as grouping work into autonomous squads coordinated through tribes, chapters and guilds, with the explicit goal of balancing team autonomy against company-wide alignment. For background on where the model came from and how it compares with other scaling approaches, see the [Spotify Squads method page](https://tryhamster.com/methods/spotify-squads). This page covers the practical job: deciding what squads decide alone, what they align on, and how to stop the second from swallowing the first.

Autonomy has a concrete meaning here. In the [2012 Scaling Agile @ Spotify report](https://storage.ghost.io/c/73/a9/73a90ce4-1663-4169-a7cb-efdf906b6b25/content/files/2022/12/Scaling-Agile-@-Spotify-with-Tribes--Squads--Chapters---Guilds-Henrik-Kniberg---Anders-Ivarsson-Oct-2012.pdf), a squad is a cross-functional, self-organizing team with end-to-end responsibility for a product area, free to use Scrum, Kanban or a mix of the two. Research on Spotify's squads notes they were initially set up to feel like mini start-ups, able to prototype, test, code, deploy, operate and A/B test features independently of each other. That independence is what lets a squad ship and learn without waiting in someone else's queue. Alignment is what keeps many independent squads from building a product that makes no sense as a whole.

The difficulty is that the source material says far more about autonomy than about alignment. A [study of Spotify tailoring in cross-functional squads](https://link.springer.com/chapter/10.1007/978-3-030-30126-2_3) observed that, because of the lack of scientific research on the model, there were no guidelines about how to build and maintain alignment between squads. Leaders fill that gap themselves, and the default is usually the tool they already know: approvals. A design review here, a release sign-off there, and within a few quarters the squad is autonomous in name only.

The skill is choosing alignment mechanisms that shape what squads aim for and which limits they respect, while leaving how they get there to the squad. Your inputs are company or tribe strategy, the current squad missions, the approval steps squads go through today and the decisions that genuinely affect more than one squad. Your outputs are a decision rights map, a short list of guardrails, a few alignment forums with a stated purpose, and a recurring audit that removes approvals that no longer earn their place.

You can tell the balance has tipped when squads wait days for permission on routine work, when leads describe their job as getting things approved, or, in the other direction, when squads ship features that contradict each other and nobody noticed until customers did.

## How It Works

Alignment can be produced in two very different ways. The first is direction and constraint: leadership states the outcomes that matter and the limits nobody may cross, and squads make every other call themselves. The second is permission: someone above the squad reviews individual decisions before they happen. Both produce consistency, but permission does it by moving the decision out of the squad, which is exactly what autonomy was meant to prevent. The [2012 report](https://storage.ghost.io/c/73/a9/73a90ce4-1663-4169-a7cb-efdf906b6b25/content/files/2022/12/Scaling-Agile-@-Spotify-with-Tribes--Squads--Chapters---Guilds-Henrik-Kniberg---Anders-Ivarsson-Oct-2012.pdf) frames the goal as squads with direct contact to their stakeholders and as few blocking dependencies as possible, and a team that must seek approval or hand off ordinary product, technical, release or operational decisions is not autonomous regardless of what the org chart says.

The model's structures each carry a different slice of alignment, and none of them needs to be an approval gate:

- **Tribes** group related squads while preserving squad-level delivery autonomy, per the [original scaling material](https://storage.ghost.io/c/73/a9/73a90ce4-1663-4169-a7cb-efdf906b6b25/content/files/2022/12/Scaling-Agile-@-Spotify-with-Tribes--Squads--Chapters---Guilds-Henrik-Kniberg---Anders-Ivarsson-Oct-2012.pdf). The tribe is the natural level to set shared priorities and outcomes.
- **Chapters** let people with the same expertise share experiences and coordinate technologies, tools, processes and methods, as [one practitioner review](https://usu.com/en/blog/the-spotify-model-magic-bullet-or-overrated) describes. They supply technical alignment and capability development, while the squad keeps day-to-day product delivery.
- **Guilds** are informal, voluntary communities of interest spanning the organization, intended for knowledge sharing, according to an account of the 2012 ([source](https://storage.ghost.io/c/73/a9/73a90ce4-1663-4169-a7cb-efdf906b6b25/content/files/2022/12/Scaling-Agile-@-Spotify-with-Tribes--Squads--Chapters---Guilds-Henrik-Kniberg---Anders-Ivarsson-Oct-2012.pdf)) whitepaper. They spread good practice by attraction rather than mandate.

A practical way to apply this is to sort every recurring decision into one of four categories. Some decisions the squad makes alone. Some it makes alone but announces, so others can adapt. Some need a conversation with affected squads first because they change a shared interface or customer journey. A very small set needs escalation because it touches a guardrail such as security, legal exposure or core architecture. The categories are a recommendation, not something the original material prescribes, and the exact boundaries depend on your product and risk profile.

Approval creep is the slow drift of decisions from the first two categories into the last two. It rarely happens by design. An incident leads to a new review step, a leader wants visibility and asks to sign off, a chapter lead starts approving designs instead of coaching. Each addition looks reasonable, but together they recreate the hierarchy the model was meant to replace. Added process is a documented risk: a [2023 study of a large-scale agile transformation](https://journals.sagepub.com/doi/full/10.1177/02683962231164428) reported additional bureaucracy and time spent in agile ceremonies among the problems it observed.

The counterweight is a recurring audit. Each cycle you list the approvals in force, check whether a guardrail or a shared outcome already covers the risk, and remove or downgrade any gate that does not justify its cost in waiting time. Alignment is working when squads can explain how their current work serves a tribe priority without being told, and when leaders learn about decisions from announcements rather than approval requests.

## Step-by-Step Guide

### Step 1: Inventory decisions and approval gates

List every recurring decision a squad makes: what to build next, technical design, releases, operational changes, tooling and hiring input. For each one, record who must approve it today, how long approval usually takes and what risk the gate is supposed to control. The [2012 report](https://storage.ghost.io/c/73/a9/73a90ce4-1663-4169-a7cb-efdf906b6b25/content/files/2022/12/Scaling-Agile-@-Spotify-with-Tribes--Squads--Chapters---Guilds-Henrik-Kniberg---Anders-Ivarsson-Oct-2012.pdf) describes squads that can design, develop, test and release on their own, so every gate on ordinary work is a gap between that intent and your reality. The output is a single list of decisions, current approvers and stated reasons.

Gates with no stated reason are your first candidates for removal.

> **Pro tip:** Collect the list from squad members rather than managers. People doing the work know which approvals actually slow them, while managers tend to remember the ones they intended to create.

### Step 2: Set shared direction above the squad

Agree a short set of outcomes at tribe or product-area level that every squad in that area should serve. State each outcome with the reason it matters, so squads can make trade-offs without asking. Keep the list short enough that it can guide daily choices; a long list forces squads back to asking which item wins. Publish the outcomes where every squad can see them and revisit them on a fixed rhythm rather than whenever a leader changes their mind.

> **Pro tip:** Test the direction by asking a few squad members to name the tribe priorities from memory. If they cannot, there are too many or they are written too abstractly to guide decisions.

### Step 3: Connect each squad mission to that direction

Check that every squad mission names the problem or outcome the squad owns and maps clearly to at least one shared outcome. Look for missions that map to nothing, which signals work nobody asked for, and for two squads claiming the same outcome, which signals overlap that will later need coordination. Fix these at the mission level rather than by adding reviews of individual features. The detailed craft of writing missions and drawing ownership boundaries is covered in [Defining Squad Missions and Product Ownership Areas](https://tryhamster.com/skills/defining-squad-missions-and-ownership).

### Step 4: Draw guardrails and decision rights

Sort the decisions from your inventory into categories: decide alone, decide and announce, align with affected squads first, and escalate. Write guardrails for the few things that are genuinely non-negotiable, such as security requirements, data handling rules or core architectural principles. Everything not covered by a guardrail defaults to the squad. The output is a one-page decision rights map that a new squad member could read and act on without asking a manager.

> **Pro tip:** Write each guardrail as a testable constraint, for example a specific data classification that may never leave a given system, not a vague value like being secure. A squad can check itself against a testable rule without asking permission.

### Step 5: Route technical alignment through chapters and guilds

Use chapters to converge on shared tools, practices and standards within a discipline, and guilds to spread knowledge across the organization. [One practitioner review](https://usu.com/en/blog/the-spotify-model-magic-bullet-or-overrated) describes chapters as the place where specialists coordinate technologies, tools, processes and methods. Keep the chapter's output in the form of agreed standards and coaching, not sign-off on individual squad decisions. If a chapter lead starts approving designs before squads can proceed, the chapter has turned into a gate.

### Step 6: Reduce dependencies before coordinating them

Many alignment problems are really dependency problems: two squads must agree because one cannot move without the other. The [2012 report](https://storage.ghost.io/c/73/a9/73a90ce4-1663-4169-a7cb-efdf906b6b25/content/files/2022/12/Scaling-Agile-@-Spotify-with-Tribes--Squads--Chapters---Guilds-Henrik-Kniberg---Anders-Ivarsson-Oct-2012.pdf) favours avoiding blocking dependencies wherever possible, while the [Crisp-hosted version](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf) notes that dependencies are not necessarily bad because squads sometimes need to work together. Before adding a coordination forum, ask whether a boundary change, an API or moving a capability into the squad would remove the need. The full inventory and triage process is in [Managing Dependencies Across Squads and Tribes](https://tryhamster.com/skills/managing-dependencies-across-squads).

> **Pro tip:** When a recurring cross-squad meeting appears, ask what change would make it unnecessary. If the answer is a boundary change, schedule that work instead of the meeting.

### Step 7: Audit for approval creep

On a fixed cadence, for example once a quarter, rerun the approval inventory and compare it with the last one. For each new gate, check whether an existing guardrail or shared outcome already covers the risk, and remove or downgrade it to announce-only if so. Track the time squads spend waiting for approvals as a rough health signal. Rising wait time with no matching drop in incidents means alignment is being bought with autonomy at a poor rate.

## Best Practices

- Align on outcomes and constraints, not on individual decisions. Outcomes let squads choose their own route, while decision-level review moves the choice out of the squad and slows every piece of work that passes through it.
- Make the decision rights map explicit and public. Unwritten rules push squads to ask permission defensively, which looks like alignment but is really uncertainty about where autonomy ends.
- Give every approval gate an owner and an expiry. A gate added after an incident should be reviewed once the underlying fix is in place, otherwise temporary caution becomes permanent process.
- Keep chapter leads in a coaching and standards role rather than an approving role. Chapters exist to build capability and consistency across squads, and they lose that value once squads start routing delivery decisions through them.
- Prefer announce-only over approval for decisions that affect others but carry little risk. Announcements give neighbouring squads the information they need to adapt without making anyone wait.
- Treat recurring coordination as a design smell. If the same squads keep needing to align, the boundary between them is probably wrong, and fixing it removes the alignment cost permanently.
- Measure waiting, not just output. Delivery metrics can look healthy while squads spend growing amounts of time waiting for sign-off, and that hidden cost is the earliest sign of approval creep.

## Common Mistakes

- **Declaring squads autonomous while keeping every existing approval step in place.** — The [2012 report](https://storage.ghost.io/c/73/a9/73a90ce4-1663-4169-a7cb-efdf906b6b25/content/files/2022/12/Scaling-Agile-@-Spotify-with-Tribes--Squads--Chapters---Guilds-Henrik-Kniberg---Anders-Ivarsson-Oct-2012.pdf) treats approvals or handoffs for ordinary product, technical, release or operational decisions as incompatible with autonomy. Inventory the gates first and remove those that cover routine work before announcing the new structure.
- **Filling the alignment gap with more meetings and reviews because the model gives no alignment recipe.** — The lack of guidance on building alignment between squads is documented in a [study of Spotify tailoring](https://link.springer.com/chapter/10.1007/978-3-030-30126-2_3), but reviews are the most expensive answer. Start with shared outcomes and testable guardrails, and add a forum only when a specific recurring problem needs one.
- **Letting chapters become an approval layer over squad work.** — Chapters should supply standards, coaching and technical alignment while the squad keeps day-to-day delivery. If squads wait for chapter sign-off before shipping, move the standard into a written guardrail and return the decision to the squad.
- **Swinging to total independence and dropping shared direction altogether.** — Autonomy without alignment produces squads optimizing locally and shipping conflicting experiences. Keep a small set of tribe-level outcomes that every mission maps to, so independence stays pointed at the same goals.
- **Adding a new approval after every incident and never removing it.** — Give each post-incident gate an expiry date and review it once the root cause is fixed. If the fix makes the risk unlikely, downgrade the gate to announce-only or remove it.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/spotify-squads/METHOD.md) — Spotify Squads

## Related Skills

- [Running Chapters for Discipline-Based Management](../running-chapters-for-discipline-excellence/SKILL.md)
- [Defining Squad Missions and Product Ownership Areas](../defining-squad-missions-and-ownership/SKILL.md)
- [Forming Autonomous Cross-Functional Squads](../forming-autonomous-squads/SKILL.md)
- [Managing Dependencies Across Squads and Tribes](../managing-dependencies-across-squads/SKILL.md)
- [Organizing Squads into Tribes](../organizing-squads-into-tribes/SKILL.md)
- [Building Guilds as Cross-Cutting Communities of Practice](../building-guilds-as-communities-of-practice/SKILL.md)
- [Adapting the Spotify Model to Your Organization](../adapting-spotify-model-to-your-organization/SKILL.md)

## Sources

- [\[PDF\] Scaling Agile @ Spotify - Ghost](https://storage.ghost.io/c/73/a9/73a90ce4-1663-4169-a7cb-efdf906b6b25/content/files/2022/12/Scaling-Agile-@-Spotify-with-Tribes--Squads--Chapters---Guilds-Henrik-Kniberg---Anders-Ivarsson-Oct-2012.pdf)
- [What is the Spotify Model?](https://mooncamp.com/glossary/spotify-model)
- [From transformation to normalisation: An exploratory study of a large-scale agile transformation - Noel Carroll, Kieran Conboy, Xiaofeng Wang, 2023](https://journals.sagepub.com/doi/full/10.1177/02683962231164428)
- [Spotify Tailoring for Promoting Effectiveness in Cross-Functional Autonomous Squads](https://link.springer.com/chapter/10.1007/978-3-030-30126-2_3)
- [The Spotify Model: Magic Bullet or Overrated?](https://usu.com/en/blog/the-spotify-model-magic-bullet-or-overrated)
- [Scaling Agile @ Spotify - Crisp's Blog](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)
