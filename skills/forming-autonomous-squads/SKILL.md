---
name: "forming-autonomous-squads"
description: "Assemble a long-lived, cross-functional squad that owns a product area end to end and ships without handing work to other teams."
category: "Product"
metadata:
  homepage: https://tryhamster.com
  method: "spotify-squads"
  datePublished: "2026-05-18"
  dateModified: "2026-09-24"
---

# Forming Autonomous Squads with the Spotify Squad Model

> Assemble a long-lived, cross-functional squad that owns a product area end to end and ships without handing work to other teams.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 2-4 weeks to design and staff one squad |
| Outcome | A named, long-lived squad with a clear scope, a roster covering every competency its scope needs, collaborating support roles and a self-chosen delivery process. |
| Prerequisites | A product area, service or user problem that can be owned end to end, A view of available people and which specialist skills are scarce, Leadership agreement to remove routine approvals for the squad's scope |
| Part of | [Spotify Squads](../../methods/spotify-squads/METHOD.md) |

## Overview

A squad is the basic delivery unit of the model described on the [Spotify Squads method page](https://tryhamster.com/methods/spotify-squads). This page covers the practical work of forming one: deciding what it owns, who belongs in it, how big it should be, who supports it and how it chooses to work. The goal is a team that can take an idea from design to production and learn from the result without waiting on anyone else.

The original report framed a squad as similar to a Scrum team but designed to feel like a mini-startup, with the skills and tools to design, develop, test and release to production ([Kniberg and Ivarsson, Scaling Agile @ Spotify](https://storage.ghost.io/c/73/a9/73a90ce4-1663-4169-a7cb-efdf906b6b25/content/files/2022/12/Scaling-Agile-@-Spotify-with-Tribes--Squads--Chapters---Guilds-Henrik-Kniberg---Anders-Ivarsson-Oct-2012.pdf)). Practitioner guides add that squads are meant to be long-lived product teams rather than temporary project teams assembled for one delivery (si-labs practitioner guide, [Mooncamp glossary](https://mooncamp.com/glossary/spotify-model)). That distinction drives most formation decisions. A project team is staffed for a deliverable and then disbanded. A squad is staffed for a product area it will keep owning, so its skill mix has to cover ongoing operation, not just the first release.

Forming a squad is a design exercise with three inputs. First, a clearly defined product area, feature, service or user problem that can be owned end to end ([Atlassian's Spotify model overview](https://atlassian.com/agile/agile-at-scale/spotify)). Second, an honest map of the competencies needed to deliver and run that scope. Third, the people actually available, including which specialists are scarce and would be spread too thin across several squads. The output is a named squad with a scope, a roster, a small set of support roles and a working agreement about process.

The skill matters because autonomy is structural. You cannot declare a team autonomous in a kickoff and expect it to behave that way if it still needs another team to deploy, test or approve its work. Kniberg notes that handoffs to another squad add cost and interrupt the learning loop ([Kniberg's Crisp post](https://blog.crisp.se/2012/11/14/henrikkniberg/scaling-agile-at-spotify)). Every missing capability becomes a queue outside the squad's control.

Treat everything here as adaptable. Spotify's own presentations warned against copying the structure, noting that it changed over time and that there was no single way software was developed there ([InfoQ, Don't Copy the Spotify Model](https://infoq.com/news/2016/10/no-spotify-model)). Size figures, role names and process choices vary by source, and the right answer depends on your product architecture and talent pool.

You will know formation went well when the squad ships to production on its own, talks directly with its stakeholders, and escalates only decisions that genuinely cut across squads.

## How It Works

Four decisions shape a squad: scope, composition, size and support roles. A fifth, process, belongs to the squad itself.

**Scope comes first.** Composition follows from what the squad owns. A squad scoped to search needs different skills than one scoped to payments reliability. Writing the mission and drawing ownership boundaries is covered in [Defining Squad Missions and Product Ownership Areas](https://tryhamster.com/skills/defining-squad-missions-and-ownership); here, scope is the input you staff against.

**Composition.** Staff the squad with the competencies required to deliver and operate its scope without routine handoffs; practitioner descriptions commonly name developers, designers, testers and product ownership (si-labs guide). The original report describes a squad with the skills and tools to design, develop, test and release to production ([Scaling Agile @ Spotify](https://storage.ghost.io/c/73/a9/73a90ce4-1663-4169-a7cb-efdf906b6b25/content/files/2022/12/Scaling-Agile-@-Spotify-with-Tribes--Squads--Chapters---Guilds-Henrik-Kniberg---Anders-Ivarsson-Oct-2012.pdf)). A practical test: walk a typical change from idea to production and into on-call, and mark every point where someone outside the squad must act. Each mark is either a skill to add or a dependency to accept knowingly.

**Size.** Sources disagree, so treat numbers as ranges to reason with, not rules.

| Source                                                                                  | Reported squad size     | Type of source     |
| --------------------------------------------------------------------------------------- | ----------------------- | ------------------ |
| si-labs review                                                                          | Fewer than eight people | Practitioner guide |
| [Atlassian overview](https://atlassian.com/agile/agile-at-scale/spotify)                | Typically 6-12 people   | Practitioner guide |
| [Rework guide](https://resources.rework.com/libraries/project-management/spotify-model) | Typically 6-12 people   | Practitioner guide |

The variation itself is the lesson: no single figure should be read as a universal Spotify rule (si-labs guide). Size pressure comes from two directions. Covering every competency pushes the team larger, while keeping communication cheap pushes it smaller. When the two collide, the scope is usually too wide and should be split, rather than the squad grown.

**Support roles.** A product owner guides what gets built and represents product priorities ([Atlassian overview](https://atlassian.com/agile/agile-at-scale/spotify)). One description identifies a product owner, a technical or chapter lead and an agile coach as three collaborating leadership roles ([InfoQ](https://infoq.com/news/2016/10/no-spotify-model)). The operative word is collaborating: these roles support the squad without forming a command chain above it. The chapter lead's people-management remit is covered in [Running Chapters for Discipline-Based Management](https://tryhamster.com/skills/running-chapters-for-discipline-excellence).

**Process choice.** The squad picks its own framework. The original report let squads use Scrum, Kanban or a mixture of the two ([Scaling Agile @ Spotify](https://storage.ghost.io/c/73/a9/73a90ce4-1663-4169-a7cb-efdf906b6b25/content/files/2022/12/Scaling-Agile-@-Spotify-with-Tribes--Squads--Chapters---Guilds-Henrik-Kniberg---Anders-Ivarsson-Oct-2012.pdf)), and Atlassian lists Scrumban as a further option ([Atlassian overview](https://atlassian.com/agile/agile-at-scale/spotify)). The organization sets outcomes and shared constraints; the squad decides how to work within them.

**Handoffs.** Design them out, because handoffs to another squad add cost and interrupt the learning loop ([Kniberg's Crisp post](https://blog.crisp.se/2012/11/14/henrikkniberg/scaling-agile-at-spotify)). The report also asks that squads have direct contact with their stakeholders and avoid blocking dependencies wherever possible ([Scaling Agile @ Spotify](https://storage.ghost.io/c/73/a9/73a90ce4-1663-4169-a7cb-efdf906b6b25/content/files/2022/12/Scaling-Agile-@-Spotify-with-Tribes--Squads--Chapters---Guilds-Henrik-Kniberg---Anders-Ivarsson-Oct-2012.pdf)). Dependencies you cannot design out are handled in [Managing Dependencies Across Squads and Tribes](https://tryhamster.com/skills/managing-dependencies-across-squads).

## Step-by-Step Guide

### Step 1: Pick an ownable scope

Start from a product area, feature, service or user problem that one team can own from idea to operation, as [Atlassian's overview](https://atlassian.com/agile/agile-at-scale/spotify) describes. Test the candidate scope by listing the systems it touches and who currently changes them. If most changes require editing code or configuration owned elsewhere, the scope is not yet ownable. Either redraw it around a cohesive slice of the product or plan the architectural work that would make it ownable.

The output is a one-paragraph scope statement the squad will staff against.

> **Pro tip:** Prefer a scope defined by a user problem over one defined by a technical layer, because layer-based scopes almost always create handoffs.

### Step 2: Map competencies from idea to operation

Walk a realistic change through discovery, design, build, test, release and on-call support. At each stage, write down the skill required, such as product ownership, interaction design, backend development, testing or data analysis. Practitioner descriptions commonly include developers, designers, testers and product ownership (si-labs guide), but your map should reflect your scope, not a generic list. Mark any stage where a person outside the squad must act.

That marked list is your handoff inventory.

> **Pro tip:** Include operating the service, not only building it; skipping on-call and release is the most common reason a new squad still depends on an ops team.

### Step 3: Size the squad against the scope

Compare the competency map with the size guidance, remembering that sources range from fewer than eight people to 6-12 (si-labs guide). Count how many people you need to cover every competency with some redundancy for leave and turnover. If that count climbs well past what the team can coordinate in one short daily conversation, split the scope rather than grow the team. If the count is very small, check whether the scope is too narrow to justify a long-lived team.

Record the reasoning so future changes to the roster can be evaluated against it.

### Step 4: Assign collaborating support roles

Name a product owner who guides what gets built and represents product priorities. Arrange technical guidance, for example through a chapter lead, and agile coaching, which one description frames as three collaborating leadership roles ([InfoQ](https://infoq.com/news/2016/10/no-spotify-model)). Write down what each role decides and what the squad decides together, so nobody quietly becomes an approver. Keep these roles close to the work rather than stacked above it.

The output is a short responsibilities note agreed with the squad.

> **Pro tip:** Ask each role holder which decisions they expect to make alone; any answer covering routine releases or technical choices is approval creep in disguise.

### Step 5: Let the squad choose its process

Hand the squad the choice of delivery framework, such as Scrum, Kanban or a mix, which the original report explicitly allowed ([Scaling Agile @ Spotify](https://storage.ghost.io/c/73/a9/73a90ce4-1663-4169-a7cb-efdf906b6b25/content/files/2022/12/Scaling-Agile-@-Spotify-with-Tribes--Squads--Chapters---Guilds-Henrik-Kniberg---Anders-Ivarsson-Oct-2012.pdf)). State the shared constraints up front, for example security review rules or a common definition of release readiness. Let the squad run its first few iterations and then revisit the choice in a retrospective. Resist mandating one process across squads just to make reporting easier.

The output is a lightweight working agreement the squad owns.

> **Pro tip:** Agree on what the organization needs to see, such as progress toward outcomes, rather than on which ceremonies the squad runs.

### Step 6: Remove handoffs and approvals

Take the handoff inventory from the competency map and resolve each item. Add the missing skill to the squad, move ownership of a system into the squad, or explicitly accept the dependency and route it to dependency management. Kniberg's rationale is that handoffs add cost and interrupt the learning loop ([Kniberg's Crisp post](https://blog.crisp.se/2012/11/14/henrikkniberg/scaling-agile-at-spotify)). Also give the squad direct access to its stakeholders instead of routing requests through intermediaries.

You are done when a typical change can reach production without anyone outside the squad acting.

> **Pro tip:** Re-run the idea-to-production walk after the squad's first month; new handoffs often appear once real work starts.

### Step 7: Commit to a long-lived roster

Announce the squad as a standing product team, not a project that ends at a delivery date, consistent with practitioner descriptions of squads as long-lived ([Mooncamp glossary](https://mooncamp.com/glossary/spotify-model)). Protect the roster from being raided for urgent projects elsewhere. Plan how the squad will absorb new members and lose old ones without losing context. Review scope and composition periodically, because a product area can outgrow its original staffing.

Stability lets the squad build the domain knowledge that makes autonomy safe.

## Best Practices

- Staff for operation as well as delivery. A squad that builds a service but cannot release or support it will keep a permanent dependency on another team, which undercuts the autonomy you are trying to create.
- Treat size figures as a reasoning aid, not a quota. Sources range from fewer than eight people to 6-12 (si-labs guide), so let scope and coordination cost set the number.
- Split scope before you grow a squad. When covering all competencies makes the team too large to coordinate cheaply, a narrower scope usually restores both autonomy and speed.
- Write down who decides what. A short responsibilities note for the product owner, technical lead and coach prevents support roles from turning into approval gates.
- Let squads own their process within shared constraints. The original report allowed Scrum, Kanban or a mix ([Scaling Agile @ Spotify](https://storage.ghost.io/c/73/a9/73a90ce4-1663-4169-a7cb-efdf906b6b25/content/files/2022/12/Scaling-Agile-@-Spotify-with-Tribes--Squads--Chapters---Guilds-Henrik-Kniberg---Anders-Ivarsson-Oct-2012.pdf)), and forcing uniformity trades squad fit for reporting convenience.
- Keep rosters stable. Long-lived membership builds the domain knowledge squads need to make good decisions without escalation.

## Common Mistakes

- **Copying the visible Spotify structure mechanically, renaming teams as squads without changing scope, skills or decision rights.** — Adapt the ideas to your context, as independent coverage warns against treating the arrangement as a universal model ([InfoQ](https://infoq.com/news/2016/10/no-spotify-model)). Start from your product architecture and talent pool, not from the org chart diagram.
- **Labelling a team autonomous while it still needs approvals or handoffs for ordinary product, technical, release or operational decisions.** — List the decisions the squad makes every week and remove external sign-off for each one that does not genuinely affect other squads. Autonomy exists only where decision rights actually sit with the team.
- **Leaving essential capabilities outside the squad, such as testing, design or deployment, so it depends on other teams to finish work.** — Add the capability to the squad or move system ownership into it. Handoffs add cost and interrupt the learning loop ([Kniberg's Crisp post](https://blog.crisp.se/2012/11/14/henrikkniberg/scaling-agile-at-spotify)), so every missing skill slows both delivery and learning.
- **Treating squad size as a fixed formula taken from one article.** — Recognise that published figures differ, from fewer than eight people to 6-12 (si-labs guide). Size from the competency map and coordination cost instead.
- **Forming squads as temporary project teams that disband after a launch.** — Set squads up as long-lived owners of a product area ([Mooncamp glossary](https://mooncamp.com/glossary/spotify-model)). Project teams lose context at each reshuffle, which forces decisions back up the hierarchy.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/spotify-squads/METHOD.md) — Spotify Squads

## Related Skills

- [Running Chapters for Discipline-Based Management](../running-chapters-for-discipline-excellence/SKILL.md)
- [Defining Squad Missions and Product Ownership Areas](../defining-squad-missions-and-ownership/SKILL.md)
- [Managing Dependencies Across Squads and Tribes](../managing-dependencies-across-squads/SKILL.md)
- [Organizing Squads into Tribes](../organizing-squads-into-tribes/SKILL.md)
- [Building Guilds as Cross-Cutting Communities of Practice](../building-guilds-as-communities-of-practice/SKILL.md)
- [Balancing Squad Autonomy with Organizational Alignment](../balancing-autonomy-and-alignment/SKILL.md)
- [Adapting the Spotify Model to Your Organization](../adapting-spotify-model-to-your-organization/SKILL.md)

## Sources

- [\[PDF\] Scaling Agile @ Spotify - Ghost](https://storage.ghost.io/c/73/a9/73a90ce4-1663-4169-a7cb-efdf906b6b25/content/files/2022/12/Scaling-Agile-@-Spotify-with-Tribes--Squads--Chapters---Guilds-Henrik-Kniberg---Anders-Ivarsson-Oct-2012.pdf)
- [Scaling Agile @ Spotify with Tribes, Squads, Chapters \& Guilds](https://blog.crisp.se/2012/11/14/henrikkniberg/scaling-agile-at-spotify)
- [Discover the Spotify model](https://atlassian.com/agile/agile-at-scale/spotify)
- [What is the Spotify Model?](https://mooncamp.com/glossary/spotify-model)
- [Spotify Model: Squads, Tribes, Chapters, and Guilds Explained](https://resources.rework.com/libraries/project-management/spotify-model)
- [Don't Copy the Spotify Model](https://infoq.com/news/2016/10/no-spotify-model)
