# FAQ: Organizing Squads into Tribes for Strategic Alignment

## How many squads should a single tribe contain?

Most effective tribes contain between 4 and 12 squads, which typically translates to 40 to 100 people. Below 4 squads, the overhead of a dedicated tribe lead and tribe rituals is hard to justify. The squads would coordinate fine on their own. Above 12, the tribe lead cannot maintain meaningful relationships with all squad leads, and tribe gatherings become unwieldy.

The exact number depends on how tightly coupled the squads' work is: highly coupled squads justify a smaller tribe because coordination intensity is high.

## Should I organize tribes before or after forming squads?

Form squads first, then organize them into tribes. Squads are the atomic unit of the [Spotify Squad Model](https://tryhamster.com/methods/spotify-squad-model), and their missions should be defined based on product needs, not predetermined tribal groupings. Once you have squads with clear missions, the dependency patterns between them reveal the natural tribe boundaries. If you design tribes first, you risk forcing squads into groupings that look clean on paper but do not match actual coordination needs.

See [forming autonomous squads](https://tryhamster.com/skills/forming-autonomous-squads) for the prerequisite skill.

## What does a tribe lead actually do day-to-day?

A tribe lead spends roughly 30% of their time on strategic planning (translating company objectives into tribe-level priorities, maintaining the tribe roadmap), 30% on facilitation (running tribe rituals, mediating cross-squad trade-offs, removing systemic blockers), 20% on stakeholder management (representing the tribe in company planning, communicating tribe progress and needs upward), and 20% on coaching and culture (mentoring squad leads, reinforcing tribe values, onboarding new members). They do not write code, attend squad standups, or approve individual squad decisions. The role is closer to a chief of staff than a traditional manager.

## How do chapters and guilds interact with tribes?

, all backend engineers in the Payments tribe). The chapter lead is the line manager for those individuals, handling career development and craft standards. , all frontend engineers across all tribes). Tribes handle strategic alignment, chapters handle people management and craft excellence within a tribe, and guilds handle knowledge sharing across tribes.

See [running chapters](https://tryhamster.com/skills/running-chapters-for-craft-excellence) and [building guilds](https://tryhamster.com/skills/building-cross-cutting-guilds) for detailed guidance on each.

## When should I split a tribe into two?

Split when you observe two or more of these signals: the tribe exceeds 100 people, tribe gatherings have become passive status updates with low engagement, the tribe lead cannot articulate how more than two or three squads' work connects, squads within the tribe have clearly divergent strategic priorities, or cross-squad coordination within the tribe has decreased because subgroups have naturally formed. The best time to split is proactively, when you see these signals emerging, not reactively after a coordination failure. Start planning the split at around 80 people so you have time to identify the right seam and prepare the organization.

## How do I handle squads that could logically belong to two different tribes?

This is common, especially for squads that own shared capabilities like search, notifications, or identity. You have three options. First, assign the squad to the tribe where it has the most dependencies, and define clear interfaces with the other tribe. Second, split the squad's responsibilities into two squads, one per tribe, if the workload justifies it.

Third, keep the squad in a 'platform' or 'foundation' tribe with explicit SLAs to the product tribes. The worst option is letting the squad float between tribes or report to two tribe leads, which creates confusion and accountability gaps. Pick one home and make the cross-tribe interface explicit.

## Why does my tribe structure keep generating cross-tribe escalations?

Persistent cross-tribe escalations usually mean one of three things. First, your tribe boundaries cut through a high-dependency area, so squads that need to coordinate daily are in separate tribes. The fix is to redraw the boundary to bring those squads together. Second, your cross-tribe interfaces are poorly defined, so squads do not know how to coordinate directly and escalate to tribe leads by default.

The fix is to document interfaces with clear owners and communication protocols. Third, your tribe leads are not empowered or not meeting regularly enough to resolve boundary issues between themselves. A weekly or biweekly tribe lead sync where leads proactively surface upcoming cross-tribe work can prevent most escalations from reaching senior leadership.
