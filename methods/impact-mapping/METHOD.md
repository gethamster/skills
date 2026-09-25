---
name: "impact-mapping"
category: "Product"
description: "Impact mapping, from Gojko Adzic, links deliverables to a business goal through the actors and behavior changes they must cause. How to run it."
metadata:
  datePublished: "2026-06-01"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Impact Mapping: Goal-Driven Strategic Planning

> Created by **Gojko Adzic (building on InUse effect mapping)** - [https://gojko.net/](https://gojko.net/)

## Overview

Impact mapping is a strategic planning technique that connects what a team builds to why it is building it. The community site that Gojko Adzic's consultancy runs describes it as "a lightweight, collaborative planning technique for teams that want to make a big impact with software products" ([impactmapping.org](https://www.impactmapping.org/)). Adzic set the method out in his book [Impact Mapping: Making a big impact with software products and projects](https://www.impactmapping.org/book.html), published on 1 October 2012. An impact map is a mind map with four levels: a business goal at the center, the actors who can affect that goal, the impacts, meaning the changes in those actors' behavior that would move the goal, and the deliverables that could support those changes.

Each level answers one question. In the book, an impact map is "a mind-map grown during a discussion facilitated by answering the following four questions: WHY? WHO? HOW? WHAT?" ([Impact Mapping book sample](https://www.impactmapping.org/assets/impact_mapping_20121001_sample.pdf)). The site's [Drawing impact maps](https://www.impactmapping.org/drawing.html) page spells each one out. The goal answers "Why are we doing this?" The actors answer "Who can produce the desired effect? Who can obstruct it? Who are the consumers or users of our product? Who will be impacted by it?" The impacts answer "How should our actors' behaviour change? How can they help us to achieve the goal? How can they obstruct or prevent us from succeeding?" The deliverables answer "What can we do, as an organisation or a delivery team, to support the required impacts?"

Adzic is open that the ideas are not all his. In the book's credits section he calls impact mapping "a variant of the InUse effect mapping method, introduced by Mijo Balic and Ingrid Domingues (Ottersten)", combined with Robert O. Brinkerhoff's impact maps for training organisations, Chris Matts's feature injection, and Tom Gilb's ideas on measurability and iterative delivery ([Giving credit where credit is due](https://www.impactmapping.org/book_credit.html)). He first called his version "effect mapping", then renamed it after attendees at his conference talks in Sweden complained that he was presenting effect mapping wrongly. Craig Larman suggested the name "impact maps". Adzic's own [method summary on Votito](https://www.votito.com/methods/impact-mapping/) traces the Swedish line back to "Goal Cards" described in 2002, which evolved into "Effect Maps" in 2006.

The map's main job is to make assumptions visible. According to the [impactmapping.org overview](https://www.impactmapping.org/about.html), an impact map communicates assumptions on two levels: that a deliverable will change an actor's behavior, and that the changed behavior will contribute to the overall objective. Tom Poppendieck's foreword to the book puts it more bluntly: an impact map "is a map of assumptions connecting causes and effects" ([Foreword](https://www.impactmapping.org/book_foreword.html)). Once a deliverable ships, the team can measure whether the behavior actually changed and whether the goal moved, then decide whether to keep working on that branch or move to another.

That framing changes how scope is treated. Adzic's guidance in the [book sample](https://www.impactmapping.org/assets/impact_mapping_20121001_sample.pdf) is to "Treat deliverables as options" and he calls the deliverables "the least important level of an impact map". Because every feature sits under an impact and a goal, a proposed feature with no impact above it has no justification on the map, which is how the technique pushes back on scope creep and pet features. The [Drawing impact maps](https://www.impactmapping.org/drawing.html) page describes plans without that mapping as "shopping lists of features, without any context why such things are important."

The intended users are product managers, business sponsors and senior technical leaders working with iterative delivery ([impactmapping.org](https://www.impactmapping.org/)). The site's [facilitation guide](https://www.impactmapping.org/facilitation.html) describes three uses: setting a vision for a new milestone, focusing delivery when many stakeholders have competing priorities, and reframing a problem when objectives are unclear. Each use calls for different participants and a different level of detail, which is why the skills below treat goal setting, actor discovery, impact definition, deliverables, facilitation, roadmapping and experiments as separate practices.

## Core Principles

### Start from the goal

The center of the map is the reason for the work, and everything else hangs from it. Adzic writes that the purpose of a goal definition "is to allow the delivery organisation and business sponsors to re-evaluate the plan as new information becomes available" ([book sample](https://www.impactmapping.org/assets/impact_mapping_20121001_sample.pdf)). He also says goals "should present the problem to be solved, not the solution." A goal that names a product or a feature has skipped the question the map exists to answer.

### Name specific actors

Actors are the people whose behavior can help or block the goal, including people who never touch the product. Adzic advises avoiding generic terms such as "users" and defining actors, in order of preference, as a specific individual, a user persona, a role or job title, or a group or department ([book sample](https://www.impactmapping.org/assets/impact_mapping_20121001_sample.pdf)). He cites Alistair Cockburn's three types: primary actors whose goals are fulfilled, secondary actors who provide services, and off-stage actors such as regulators. Naming a specific group makes it possible to ask how that group's behavior should change.

### Describe impacts as changes in behavior

An impact is a change in what an actor does, stated so that someone could observe it. The book's guidance is that "Impacts are not product features" and that an impact should "show a change in actor behaviour, not just the behaviour", with the example of "selling tickets five times faster" instead of "selling tickets" ([book sample](https://www.impactmapping.org/assets/impact_mapping_20121001_sample.pdf)). Adzic's later [Votito summary](https://www.votito.com/methods/impact-mapping/) adds that impacts should ideally be objective, externally observable and measurable quickly after the work is delivered. Hindering impacts belong on the map too.

### Treat deliverables as options

The deliverable level lists things the team could do, and the team may deliver only some of them. Adzic tells teams not to make this level complete at the start and to refine it iteratively during delivery ([book sample](https://www.impactmapping.org/assets/impact_mapping_20121001_sample.pdf)). He also points out that some impacts can be supported without building software at all. Keeping deliverables provisional lets the team drop work as soon as an impact is achieved or proves to be the wrong bet.

### Make assumptions testable

Each path from deliverable to goal is a pair of assumptions that can be checked ([impactmapping.org overview](https://www.impactmapping.org/about.html)). Writing impacts as measurable behavior changes is what makes them checkable, because the team can look for the change after release. The overview page says the role of testing becomes "proving that deliverables support desired actor behaviours", and that a deliverable which does not support an impact is a failure even if it works technically. A map whose impacts cannot be observed cannot be tested, and the team loses the method's main feedback loop.

### Build the map together

An impact map is created "collaboratively by senior technical and business people" ([Drawing impact maps](https://www.impactmapping.org/drawing.html)). The overview page credits the method's origin in an interaction design agency for making it good at engaging people from different backgrounds, including delivery experts and business users. A map drawn by one person records that person's assumptions. A map drawn in the room exposes the places where people's assumptions differ, which is the conversation the team most needs to have.

## Steps

1. **Discover the real goal**
   Find out why the initiative exists before anyone talks about features. Adzic observes in the [book sample](https://www.impactmapping.org/assets/impact_mapping_20121001_sample.pdf) that business goals often exist "only at the back of senior stakeholders' minds" and are defined vaguely when they are written down. For vision work, the [facilitation guide](https://www.impactmapping.org/facilitation.html) suggests the facilitator bring a draft goal that stakeholders can refine and challenge. If the goal names a solution, ask what that solution would achieve until you reach a business problem. For commercial products, Adzic suggests goals with an obvious link to money.

2. **Define how the goal will be measured**
   Agree how everyone will know the goal has moved and by roughly how much. Adzic's book lists SMART as "Specific, Measurable, Action-oriented, Realistic and Timely" and tells readers not to worry about nailing the goal to a single number ([book sample](https://www.impactmapping.org/assets/impact_mapping_20121001_sample.pdf)). Ranges work well: his [Votito summary](https://www.votito.com/methods/impact-mapping/) suggests stating an expected level of value such as a band of cost reduction when comparing several goals. How much measurement to insist on depends on the purpose; the facilitation guide says detailed goal metrics are necessary when reframing a problem but optional when setting a vision.

3. **Scope one milestone**
   Aim the map at the next milestone. The site's [examples](https://www.impactmapping.org/example.html) each cover a single milestone with one main business goal, such as increasing mobile advertising revenue for a music site. If stakeholders bring several goals, Adzic's [Votito summary](https://www.votito.com/methods/impact-mapping/) recommends a separate map for each. A single milestone keeps the map small enough to prioritize and to measure within a planning horizon people care about.

4. **Map actors and impacts**
   Branch from the goal to the actors, then from each actor to the behavior changes that would help or hinder the goal. Use the four actor questions and three impact questions from the [Drawing impact maps](https://www.impactmapping.org/drawing.html) page as prompts, and push for specific actors. When the purpose is setting a vision, the [facilitation guide](https://www.impactmapping.org/facilitation.html) advises focusing the discussion on actor impacts and avoiding deliverables in the first workshop. When participants propose features, ask which behavior the feature is meant to change and record the behavior.

5. **Find alternatives**
   For the most important impacts, look for several different ways to cause the behavior change before settling on any one. Include options that are not software, such as process changes or campaigns, since the [book sample](https://www.impactmapping.org/assets/impact_mapping_20121001_sample.pdf) notes it is sometimes cheaper to support an activity without building anything. Adzic's summary also describes slicing: a deliverable that achieves a small part of the impact for a subgroup of actors can still show the direction is right ([Votito](https://www.votito.com/methods/impact-mapping/)). Keep deliverables high level; detail belongs later, in user stories or other lower-level items.

6. **Pick priorities from the goal down**
   Choose the actors and impacts that matter most first, and only then the deliverables beneath them. The [impactmapping.org home page](https://www.impactmapping.org/) says to "Prioritise from the goals down to impacts." In the site's music example, the team lists impacts for the most promising actor first, and if those impacts achieve the goal it does not need to deliver anything for the other actors ([example maps](https://www.impactmapping.org/example.html)). Attach a target to each chosen impact so the team will know when that branch is done.

7. **Deliver, measure and re-plan**
   Ship the smallest deliverable that could produce the chosen impact, then measure the actor's behavior and the goal. The [impactmapping.org overview](https://www.impactmapping.org/about.html) describes re-evaluating the strategy once a deliverable ships: continue on the same part of the map or move on. Adzic's [Votito summary](https://www.votito.com/methods/impact-mapping/) adds that once an impact's target metric is achieved, the team can move to another part of the map. Revisit the map at each milestone, remove branches that were disproved, and start a new map when the goal changes.

## When to Use

- A delivery team receives a shopping list of features from a client or sponsor with no stated objective. The [facilitation guide](https://www.impactmapping.org/facilitation.html) names this as a typical case for using a map to set a vision before scope is agreed.
- An ongoing initiative has a full backlog of epics that are hard to prioritize, or the team finds it hard to stop work that did not pay off. Linking each epic to an impact gives a reason to rank it and a signal for when to stop.
- Several stakeholders with competing priorities share one team. A map built with all of them in the room shows which impacts each person cares about and forces an explicit choice among them.
- A project has stalled or its objectives are unclear, and one person holds most of the business knowledge. The facilitation guide describes collecting that knowledge in small meetings and presenting it back as maps so stakeholders can decide.
- For a product manager planning a new milestone where the behavior of users, partners or internal teams is uncertain, the map turns those uncertainties into named assumptions the team can test during delivery.

## When Not to Use

- Day-to-day work tracking and backlog management. Adzic's [Votito summary](https://www.votito.com/methods/impact-mapping/) says impact maps intentionally carry little detail about deliverables and are not useful for that job; pair them with a story map or another backlog tool.
- Work whose outcome is fixed and whose solution is fully mandated, such as a compliance change with a prescribed implementation. With no choice among deliverables, the map has little to decide.
- Small, well-understood fixes where the link from change to goal is obvious to everyone. The time spent building a map would exceed the value of the conversation.
- Situations where leadership will not name any goal for the work. The map needs a stated reason at its center; if no one can agree on even a draft goal, the next step is the goal conversation itself, which the facilitation guide treats as a separate problem-reframing exercise.

## Impact Maps and Related Tools

Impact maps sit in a family of goal-to-solution visualizations. The table compares it with its predecessor and two tools product teams often weigh against it.

| Tool | Origin | Levels | Main purpose |
|------|--------|--------|--------------|
| Impact map | Gojko Adzic, [book published 2012](https://www.impactmapping.org/book.html) | Goal, actors, impacts, deliverables | Roadmaps and milestone plans that expose assumptions |
| Effect map | Mijo Balic and Ingrid Domingues at InUse, [named Effect Maps in 2006](https://www.votito.com/methods/impact-mapping/) | A structure Adzic says [closely resembles](https://www.impactmapping.org/book_credit.html) the impact map | Innovative product design and user experience design |
| Opportunity Solution Tree | Teresa Torres, [introduced in 2016](https://www.votito.com/methods/opportunity-solution-tree/) | Outcome, opportunities, solutions, assumption tests | Continuous product discovery ([Product Talk](https://www.producttalk.org/opportunity-solution-trees/)) |
| GIST | Itamar Gilad ([GIST board](https://itamargilad.com/the-gist-board/)) | Goals, ideas, steps, tasks | Planning and executing ideas with step-by-step validation |

Adzic's own comparison says impact maps and Opportunity Solution Trees overlap significantly, but impact maps "require strict impact descriptions that are ideally measurable through behaviour changes", which makes them more directly useful for measuring progress, while a tree is more flexible for breaking complex opportunities into sub-opportunities ([Votito](https://www.votito.com/methods/opportunity-solution-tree/)). The same page notes that an Opportunity Solution Tree lists assumptions and their tests explicitly, where in an impact map they are implicit in the links between levels.

## Skills

This method includes the following skills:

- [Defining Measurable Business Goals for Impact Maps](../../skills/defining-measurable-business-goals/SKILL.md): Write the goal at the center of an impact map as a business problem with a measure and a range.
- [Identifying Actors and Stakeholders for an Impact Map](../../skills/identifying-actors-and-stakeholders/SKILL.md): Find the specific people who can produce, obstruct or be affected by the goal, and choose which to focus on.
- [Mapping Desired Behavior Impacts on Actors](../../skills/mapping-desired-behavior-impacts/SKILL.md): State each impact as an observable change in an actor's behavior, including hindering changes.
- [Generating and Prioritizing Deliverables from Impacts](../../skills/generating-deliverables-from-impacts/SKILL.md): Generate alternative deliverables per impact, treat them as options and pick the smallest slice worth shipping.
- [Facilitating Impact Mapping Workshops](../../skills/facilitating-impact-mapping-workshops/SKILL.md): Choose participants, preparation and format to match whether you are setting a vision, focusing delivery or reframing a problem.
- [Integrating Impact Maps with Product Roadmaps](../../skills/integrating-impact-maps-with-roadmaps/SKILL.md): Turn a prioritized map into a roadmap sequenced by outcomes and keep the two in step.
- [Validating Impact Map Assumptions with Experiments](../../skills/validating-assumptions-with-experiments/SKILL.md): Test the two assumptions on each branch by measuring behavior change and goal movement, then prune or extend the map.

## FAQ

**What are the four levels of an impact map?**

Goal, actors, impacts and deliverables, which answer why, who, how and what. The goal answers "Why are we doing this?" and the actors are the people who can produce the desired effect, obstruct it, use the product or be impacted by it ([Drawing impact maps](https://www.impactmapping.org/drawing.html)). Impacts describe how those actors' behavior should change, and deliverables are what the organization or team can do to support those changes. The levels are read from the center outward, and each item should link to one item on the level above.

**Who created impact mapping?**

Gojko Adzic named and popularized the method, most fully in his 2012 book ([impactmapping.org](https://www.impactmapping.org/book.html)). He describes it as a variant of the InUse effect mapping method introduced by Mijo Balic and Ingrid Domingues (Ottersten), combined with ideas from Robert O. Brinkerhoff, Chris Matts and Tom Gilb ([credits](https://www.impactmapping.org/book_credit.html)). Craig Larman suggested the name "impact maps". Domingues and Johan Berndtsson of InUse later wrote with Adzic about how to use the method in different contexts.

**How is an impact map different from a product roadmap?**

A roadmap lists what will be delivered and roughly when. An impact map records why each item is there by linking it through an impact and an actor to a goal, and it shows the alternatives that were not chosen. The [impactmapping.org overview](https://www.impactmapping.org/about.html) presents impact maps as a roadmap management tool because they record scope, goals, priorities and assumptions together. In practice, teams derive the roadmap from the prioritized branches of the map and review the map when results come in.

**How long does it take to build an impact map?**

It depends on the purpose and how much measurement you want. In [Opensource.com](https://opensource.com/open-organization/17/6/experiment-impact-mapping), Justin Holmes writes that reverse engineering a map without metrics from a current project takes "about 30 minutes at the whiteboard", and that with "approximately four hours" a prepared facilitator can lead stakeholders to a map with basic metrics. The [facilitation guide](https://www.impactmapping.org/facilitation.html) describes some formats that span more than one session, such as agreeing the goal in a separate half-day session before the mapping workshop.

**Does every goal and impact need a number?**

Not at the start. For vision setting, the [facilitation guide](https://www.impactmapping.org/facilitation.html) says capturing metrics for the goal and impacts "would be useful, but don't insist on it", and numbers can be researched later. For focusing delivery, it says to capture metrics for key impacts so they can be used to judge whether deliverables are working. Adzic also suggests ranges rather than single values, asking for the minimum change that would be valuable and the level that would be more than enough ([gojko.net](https://gojko.net/2014/02/12/user-stories-should-be-about-behaviour-changes/)).

**How should our organization use impact maps?**

Adzic, Ingrid Domingues and Johan Berndtsson describe four contexts based on two factors: how serious the consequences of a wrong product decision are, and how easily the organization can make investments ([InfoQ](https://www.infoq.com/articles/most-impact-mapping/)). With small consequences and good ability to invest, they recommend Iterate: small maps and frequent re-planning. With small consequences but poor ability to decide on investments, Align: larger maps used for stakeholder alignment. With serious consequences, they recommend Experiment when budgets are available and Discover when they are not, using maps to drive user research before committing to delivery.

**How is impact mapping related to user stories?**

Deliverables on an impact map are high-level. Adzic suggests breaking them down later into lower-level items such as user stories, which can become further branches of the map ([book sample](https://www.impactmapping.org/assets/impact_mapping_20121001_sample.pdf)). He also argues that user stories themselves should describe a change in behavior, which lets a team judge a story by whether the change happened ([gojko.net](https://gojko.net/2014/02/12/user-stories-should-be-about-behaviour-changes/)). The map keeps each story traceable to the impact and goal it serves.

## Sources

- [Impact Mapping community site](https://www.impactmapping.org/)
- [Impact Mapping: Drawing impact maps](https://www.impactmapping.org/drawing.html)
- [Impact Mapping: Why use impact mapping?](https://www.impactmapping.org/about.html)
- [Impact Mapping: the book](https://www.impactmapping.org/book.html)
- [Impact Mapping book sample (PDF)](https://www.impactmapping.org/assets/impact_mapping_20121001_sample.pdf)
- [Impact Mapping: Giving credit where credit is due](https://www.impactmapping.org/book_credit.html)
- [Impact Mapping: Foreword by Tom Poppendieck](https://www.impactmapping.org/book_foreword.html)
- [Impact Mapping: Facilitating impact mapping](https://www.impactmapping.org/facilitation.html)
- [Impact Mapping: Example impact maps](https://www.impactmapping.org/example.html)
- [Votito: Impact Mapping, by Gojko Adzic](https://www.votito.com/methods/impact-mapping/)
- [Votito: Opportunity Solution Tree, by Gojko Adzic](https://www.votito.com/methods/opportunity-solution-tree/)
- [InfoQ: Getting the most out of impact mapping](https://www.infoq.com/articles/most-impact-mapping/)
- [Gojko Adzic: User stories should be about behaviour changes](https://gojko.net/2014/02/12/user-stories-should-be-about-behaviour-changes/)
- [Opensource.com: Using impact mapping to help your team experiment](https://opensource.com/open-organization/17/6/experiment-impact-mapping)
- [Product Talk: Opportunity Solution Trees](https://www.producttalk.org/opportunity-solution-trees/)
- [Itamar Gilad: The GIST Board](https://itamargilad.com/the-gist-board/)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
