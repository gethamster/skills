---
name: "now-next-later-framework"
category: "Product"
description: "The Now Next Later framework from Janna Bastow sorts roadmap work by confidence instead of dates. How it works and how it compares to a quarterly roadmap."
metadata:
  datePublished: "2026-07-07"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Now Next Later Framework: A Product Roadmap Without Dates

> Created by **Janna Bastow** - [https://www.prodpad.com/blog/invented-now-next-later-roadmap/](https://www.prodpad.com/blog/invented-now-next-later-roadmap/)

## Overview

The Now Next Later framework is a product roadmap format that replaces the calendar with three columns. Now holds the work the team is confident about and is actively doing. Next holds the problems it expects to pick up once the current work wraps up. Later holds the larger, fuzzier problems the team wants to keep in view without committing to them. Janna Bastow, co-founder of ProdPad, describes the idea in her post [Why I Invented the Now-Next-Later Roadmap](https://www.prodpad.com/blog/invented-now-next-later-roadmap/), which opens by saying the format "exists because timeline roadmaps aren't effective, simple as that." The question this page answers most often, how a Now Next Later roadmap differs from a quarterly roadmap, has its own section below.

Bastow tells the origin story twice. In the recent version she writes that at her previous companies product planning ran out of Jira and a release planner, which nobody outside the team could read, and that she "needed something a stakeholder could understand in about ten seconds." So she "dropped the dates and drew three columns: Now, Next, and Later." Her longer account, [The Birth of the Modern Roadmap](https://www.prodpad.com/blog/the-birth-of-the-modern-roadmap/), adds the detail. She and fellow product manager Simon Cast were building the first version of ProdPad, which at the time had a timeline roadmap. Early users most wanted a way to shift many roadmap items at once, and asking why revealed that nobody was delivering to their timelines. At a cafe in Wandsworth, south London, "nearing the end of 2012," Cast sketched three columns on a napkin: Current, Near term and Future. Those were the first column names, and Now, Next and Later came later.

The model underneath the columns is a confidence gradient. In a [podcast interview with Userlist](https://userlist.com/podcast/now-next-later-roadmapping-with-janna-bastow/), Bastow says the three buckets "were sort of taken from the cone of uncertainty," the software estimation idea that estimates are least reliable at the start of a piece of work. Steve McConnell's description of [the Cone of Uncertainty](https://www.construx.com/books/the-cone-of-uncertainty/) puts the error at the initial concept stage at up to four times too high or too low, and says the cone narrows only as decisions remove variability. ProdPad's glossary therefore calls the columns [confidence horizons](https://www.prodpad.com/glossary/confidence-horizons/): Now is high confidence, Next is moderate and Later is low. Items move toward Now because the team has learned enough, and the passing of time on its own does not move them.

The format changes what goes on the roadmap as well as how it is laid out. Bastow's advice is to [prioritize problems rather than ideas](https://www.prodpad.com/blog/prioritize-problems-not-product-ideas/): agree on the main problems and objectives first, then choose which solutions or experiments to try within each problem. Each card on the roadmap is an initiative framed as a problem to solve, and each initiative should connect to a business objective. Bastow calls initiatives the forgotten "middle child" of OKRs, the game plan that links an objective to its key results. Detail follows confidence. Now items are specified and broken down, Next items are sketched, and Later items are, in her words, "big boulder blocks that you can see in the distance."

The format is not anti-date. The [ProdPad glossary](https://www.prodpad.com/glossary/now-next-later-roadmap/) says dates belong on the roadmap when they are real, externally driven or strategically important, such as an audit or a contractual commitment, and that overusing them turns the roadmap back into a timeline. Its rule of thumb is that "roadmaps communicate direction, while OKRs communicate commitment." Simon Cast makes the same split between a [roadmap and a release plan](https://www.prodpad.com/blog/difference-between-roadmaps-and-release-plans/): the roadmap shows direction, and the release plan puts finished work on a timeline so marketing, sales and support can coordinate the launch.

Practitioners outside ProdPad have adopted and credited the format. Scrum.org introduces Bastow as [the inventor of the Now/Next/Later roadmap](https://www.scrum.org/resources/blog/janna-bastow-lean-roadmapping-and-okrs), and a [Mind the Product event recap](https://www.mindtheproduct.com/giving-direction-in-product-mtp-engage-hamburg-2022/) refers to "the Now, Next, Later format she introduced." Teresa Torres writes that she is [a fan of Bastow's Now Next Later roadmaps](https://www.producttalk.org/roadmaps-with-timelines/) and uses the format for her own Product Talk roadmap. Marty Cagan's [alternative to roadmaps](https://www.svpg.com/the-alternative-to-roadmaps/) makes a compatible argument from a different starting point: roadmaps exist to focus teams on the most valuable work and to track the date commitments a business really needs, and any replacement has to serve both purposes.

The framework suits teams whose priorities change as they learn, which covers most software product teams doing continuous discovery. It works less well when most of the work is bound to fixed external dates or when the organization cannot yet accept a roadmap without dates. The skills listed below cover each part of the practice: sorting items into horizons, setting graduation criteria, building a template, running reprioritization reviews, adapting the format for SaaS, communicating it to stakeholders and choosing between it and a timeline roadmap.

## Core Principles

### Confidence Sets the Column

An item's column reflects how much the team knows about it. Importance and urgency are separate questions. ProdPad's glossary puts it plainly: "Now, Next and Later are confidence horizons, not time horizons" ([Confidence horizons](https://www.prodpad.com/glossary/confidence-horizons/)). A strategically important bet can sit in Later because the problem has not been validated, while a small, well-understood fix sits in Now. Keeping importance and confidence apart is what lets the roadmap stay honest when a stakeholder argues that their item matters too much to sit in Later.

### Problems on the Roadmap, Solutions Underneath

Each roadmap item names a problem or opportunity, and candidate solutions sit beneath it as ideas or experiments. Bastow's advice is to prioritize at the problem level first and only then choose which ideas or experiments to try within each problem ([Prioritize Problems, Not Ideas](https://www.prodpad.com/blog/prioritize-problems-not-product-ideas/)). A roadmap of named features locks in solutions before discovery has tested them. When the headings on your board are still feature names, the conversion is not finished.

### Detail Decreases With Distance

Now items are specified and broken into deliverable pieces, Next items are broken down less finely, and Later items stay broad. Bastow's reason is economy: "It doesn't make sense to go into detail about big, far-off ideas" ([Why I Invented It](https://www.prodpad.com/blog/invented-now-next-later-roadmap/)), just as it makes no sense to give them deadlines. Detailed specs for Later items go stale before the team reaches them, and they also signal a readiness the team does not have. If a Later item has a full spec, either it belongs further left or the spec was premature.

### Every Initiative Ties to an Objective

Bastow lists "ties back to objectives" as one of the format's main benefits, and ProdPad's conversion guide suggests questioning whether an initiative that cannot be linked to an objective belongs on the roadmap at all ([Convert a Timeline Roadmap](https://www.prodpad.com/blog/convert-timeline-roadmap-to-now-next-later/)). The link does two jobs. It explains why each item is there, and it gives leaders a way to check progress against outcomes rather than dates. If every initiative serving a year-end target sits in Later, the gap is visible without a status meeting.

### Dates Only Where They Are Real

The framework removes dates from work that is not certain enough to commit to and keeps them where a real obligation exists. Examples in ProdPad's guidance include a regulatory deadline, a contractual commitment and a launch tied to a market window ([Convert a Timeline Roadmap](https://www.prodpad.com/blog/convert-timeline-roadmap-to-now-next-later/)). Bastow's advice for dated work is to plan it properly, with buffer, and to clear other work out of its way if needed ([Mind the Product podcast](https://www.mindtheproduct.com/rerun-roadmaps-are-dead-long-live-roadmaps-janna-bastow-on-the-product-experience/)). Stripping every date, including genuine ones, is its own failure mode.

### Evidence Moves Work Forward

Items graduate from Later to Next to Now because discovery has raised the team's confidence. Seniority or persistence should not be what moves them. ProdPad's guidance is blunt: "If confidence hasn't increased, the Initiative shouldn't move left" ([Convert a Timeline Roadmap](https://www.prodpad.com/blog/convert-timeline-roadmap-to-now-next-later/)). The same logic applies in reverse, so an item whose evidence weakens moves back or leaves the roadmap. Writing down what would have to be true for each move is how teams keep this principle from depending on one person's judgment.

### The Roadmap Is a Communication Tool

Bastow calls a roadmap "a prototype for your strategy," something to put in front of people to gather feedback before code is written ([Mind the Product podcast](https://www.mindtheproduct.com/rerun-roadmaps-are-dead-long-live-roadmaps-janna-bastow-on-the-product-experience/)). That makes readability a requirement. The same board should work for executives, engineers, sales and, in a filtered version, customers. A roadmap that only the product team can interpret has lost most of its value.

## Steps

1. **Anchor on Vision and Objectives**
   Start from the product vision and a small set of current objectives or OKRs before touching the backlog. ProdPad's [conversion guide](https://www.prodpad.com/blog/convert-timeline-roadmap-to-now-next-later/) puts these first because every later placement decision refers back to them. If objectives are missing or vague, fix that first, since a Now Next Later roadmap without objectives has no basis for ordering. Keep the objectives visible throughout the session. Each one needs a label or color so initiatives can be tagged later.

2. **Turn Features Into Problems**
   Gather everything competing for the roadmap: the current plan, feature requests, strategic bets and technical work. Group the items by the customer or business problem each one addresses, an exercise the conversion guide runs as affinity mapping. Write each group as a short problem statement, often phrased as a question such as "How can we help our customers collaborate with other departments?" Keep the problem broader than any single solution, and move the specific features underneath as candidate ideas.

3. **Link Each Initiative to an Objective**
   Tag every initiative with the objective or objectives it serves. An initiative can serve more than one. Initiatives that fit no objective are candidates for removal, or evidence that an objective is missing. This tagging is what later lets you filter the roadmap by goal and answer "are we on track for this target?" without a separate report.

4. **Define the Horizons for Your Team**
   Write down what Now, Next and Later mean in your context before placing anything. ProdPad's [glossary](https://www.prodpad.com/glossary/now-next-later-roadmap/) describes Now as validated work in motion, Next as problems being validated with solution exploration under way, and Later as strategic bets still under consideration. You may rename the columns; the conversion guide lists alternatives such as Doing, Discovering and Dreaming. Define the columns by confidence, and agree whether any real dates will appear and where they attach.

5. **Place Initiatives by Confidence**
   Put each initiative in the column that matches the evidence behind it. A problem with a validated solution and understood effort goes in Now. A validated problem with open solutions goes in Next, and an unexplored bet goes in Later. Keep Now small: ProdPad's glossary calls a long Now column "a sign of weak prioritization" and says the whole roadmap should fit "in a scroll or two." Then order the items within each column.

6. **Scale Detail to the Horizon**
   Add scope, owner and success measures to Now items. Give Next items a clear problem statement and the open questions discovery must answer. Leave Later items as a sentence or two. Note dependencies as a short remark on the initiative rather than drawing them as a chart, as Bastow suggests on the [Mind the Product podcast](https://www.mindtheproduct.com/rerun-roadmaps-are-dead-long-live-roadmaps-janna-bastow-on-the-product-experience/).

7. **Review and Reprioritize Continuously**
   Review the roadmap every planning cycle and whenever new evidence shifts confidence in an item, which is ProdPad's own recommendation. In each review, check what finished, what is blocked, what gained or lost evidence and what new problems arrived. Move items in both directions and record why. The conversion guide warns that a roadmap which has not changed in a quarter usually means discovery has stalled.

8. **Share It With Every Audience**
   Present the board with a short explanation of what each column means, because readers used to timelines will read columns as dates. Tailor the view: leaders need the objective links, engineering needs Now and Next detail, and customers need a filtered, problem-level version. Separate the roadmap from the release plan so launch dates live where they belong. Expect the stakeholder transition to take longer than building the board.

## Now Next Later vs Quarterly Roadmap

A quarterly roadmap and a Now Next Later roadmap can look alike, since both have a few wide columns and no exact dates. Bastow calls the quarterly roadmap "the friendliest trap" because "a quarterly roadmap organizes work by when" while Now Next Later orders problems by confidence ([Why Time-Based Roadmaps Are Promises You Can't Keep](https://www.prodpad.com/blog/honesty-scales-better-than-certainty/)). The same post cites the [2026 State of B2B Product Management survey](https://www.prodpad.com/blog/honesty-scales-better-than-certainty/) as finding that 41% of teams use quarterly time-based roadmaps and that only 27% have moved to Now-Next-Later. The table compares the two formats with a feature timeline and an outcome-based roadmap.

| Question | Now Next Later | Quarterly roadmap | Outcome roadmap |
|---|---|---|---|
| What sets an item's column | Confidence and problem priority ([ProdPad glossary](https://www.prodpad.com/glossary/now-next-later-roadmap/)) | The quarter it is planned for ([ProdPad](https://www.prodpad.com/blog/honesty-scales-better-than-certainty/)) | Outcome goals for the coming months ([Roman Pichler](https://romanpichler.medium.com/how-to-get-started-with-outcome-based-product-roadmaps-68f30098175a)) |
| How readers treat a column | As a statement of confidence | As a ship date, in Bastow's account | As a goal to reach in that period |
| Where commitments live | On OKRs and genuinely dated items | On every item in the column | On the goals and their metrics |
| What happens when plans change | Items move between columns | Items slip into the next quarter | Features are chosen to serve a stable goal |
| Main risk | Columns quietly become quarters ([ProdPad](https://www.prodpad.com/blog/convert-timeline-roadmap-to-now-next-later/)) | Backlog gravity and padded estimates | Often still laid out on a timeline |

Many teams run both. Torres suggests not fighting "the ideological war" with leaders who want dates, and instead introducing outcomes gradually into the roadmap they already use ([Product Talk](https://www.producttalk.org/roadmaps-with-timelines/)). The GO Product Roadmap, another outcome-based format covered at [tryhamster.com/methods/go-product-roadmap](https://tryhamster.com/methods/go-product-roadmap), is a closer relative than the quarterly plan. The step-by-step choice between formats is covered in [Now Next Later vs Timeline Roadmap: Choosing a Format](../../skills/comparing-now-next-later-to-timeline-roadmaps/SKILL.md).

## When to Use

- When roadmap conversations keep turning into arguments about dates. The format moves the discussion to which problems matter and how much is known about each, which is where the product decision actually sits.
- When your team runs discovery and the evidence regularly changes what gets built. Columns defined by confidence absorb those changes without a formal replan, while a timeline has to be redrawn.
- When one roadmap must serve executives, engineers, sales and customers. The same board can be filtered by objective or by audience instead of maintaining separate decks that drift apart.
- When you want a public or customer-facing roadmap. ProdPad recommends a horizon format for public roadmaps because it communicates direction without promising dates or exact features ([The Public Roadmap](https://www.prodpad.com/blog/the-public-roadmap/)).
- When you already set OKRs and need a view of the initiatives behind them. The format places initiatives between objectives and delivery, which is the gap OKRs alone leave open.

## When Not to Use

- When most of the work is bound to fixed external dates, such as contract deliverables or a hardware launch with partners. A timeline or release plan gives those dates the planning attention they need; Now Next Later can still frame the discovery work around them.
- When the main need is coordinating dependencies and shared resources across many teams on a critical path. That is program management, and a dependency-mapped plan does it better than three columns.
- When leadership evaluates the team on hitting feature dates and there is no appetite to change that yet. Introducing the format without buy-in risks a Now Next Later board for the team and a separate timeline for executives, which doubles the work.
- When the backlog is small, the direction is clear and one team decides everything. An ordered list is quicker and says the same thing.

## Skills

This method includes the following skills:

- [Now Next Later vs Timeline Roadmap: Choosing a Format](../../skills/comparing-now-next-later-to-timeline-roadmaps/SKILL.md): Decide between a Now Next Later roadmap and a timeline or quarterly plan, and plan the switch.
- [Defining Graduation Criteria Between Roadmap Horizons](../../skills/defining-graduation-criteria-between-horizons/SKILL.md): Write the evidence an item needs before it moves from Later to Next or from Next to Now.
- [Now Next Later Categorization: Sorting Work Into Horizons](../../skills/categorizing-items-into-now-next-later-horizons/SKILL.md): Sort a backlog of initiatives into the three horizons by confidence and priority.
- [Now Next Later Roadmap Template: How to Build One](../../skills/building-now-next-later-roadmap-templates/SKILL.md): Build a reusable board or sheet that shows the three horizons at the right level of detail.
- [Reprioritizing Roadmap Items Across Now, Next and Later](../../skills/reprioritizing-across-horizons/SKILL.md): Run regular reviews that promote, demote or remove items as evidence changes.
- [Now Next Later Framework for SaaS Product Roadmaps](../../skills/applying-now-next-later-to-saas-products/SKILL.md): Adapt the roadmap to continuous delivery, customer feedback and SaaS release habits.
- [Communicating Now Next Later Roadmaps to Stakeholders](../../skills/communicating-roadmaps-to-stakeholders/SKILL.md): Present a horizon-based roadmap to executives, sales, customers and teams without implying dates.

## FAQ

**What is a Now Next Later roadmap in simple terms?**

It is a roadmap with three columns instead of a timeline. Now is what the team is confident about and working on, Next is what it expects to pick up once the current work wraps up, and Later is larger problems it wants to keep in view. The columns express how much the team knows, so detail and commitment shrink from left to right. Each item is a problem tied to an objective rather than a feature with a date.

**Who created the Now Next Later framework?**

Janna Bastow, co-founder of ProdPad and of Mind the Product, created it and writes that she [invented the format](https://www.prodpad.com/blog/invented-now-next-later-roadmap/). Her account of its origin credits Simon Cast, her ProdPad co-founder according to [Userlist's show notes](https://userlist.com/podcast/now-next-later-roadmapping-with-janna-bastow/), with sketching the first three columns, Current, Near term and Future, in late 2012 ([The Birth of the Modern Roadmap](https://www.prodpad.com/blog/the-birth-of-the-modern-roadmap/)). In a later post she describes the first version as the one "that Simon and I sketched out in 2012" ([Why I Invented It](https://www.prodpad.com/blog/invented-now-next-later-roadmap/)). Independent sources such as Scrum.org and Mind the Product credit Bastow.

**Is a Now Next Later roadmap the same as a quarterly roadmap with new labels?**

No. A quarterly roadmap sorts work by the period it is planned for, so every item in a column reads as due in that quarter. Now Next Later sorts work by confidence, so an item moves only when evidence changes. Relabeling Q1, Q2 and Q3 as Now, Next and Later is the most common migration mistake in ProdPad's [conversion guide](https://www.prodpad.com/blog/convert-timeline-roadmap-to-now-next-later/). If your columns map neatly to three fixed periods, you still have a timeline.

**Can a Now Next Later roadmap have dates?**

Yes, where the date is real. A regulatory deadline, a contractual commitment or a launch tied to an event can carry a date on the specific initiative or objective ([ProdPad glossary](https://www.prodpad.com/glossary/now-next-later-roadmap/)). What the format removes is the implied date on everything else. Bastow's advice is to separate a hard launch, which needs a date, from work that ships when it is ready.

**How does Now Next Later work with OKRs?**

OKRs state the outcomes and hold the time-bound commitment, and the roadmap shows the initiatives meant to move them, placed by confidence. Bastow calls initiatives the missing middle of OKRs. ProdPad's [OKR guide](https://www.prodpad.com/resources/guides/ditch-the-timeline-roadmap/okrs-and-lean-roadmapping/) notes that team OKRs are usually reviewed quarterly while the roadmap itself is not time-bound. Tagging each initiative with its objective lets leaders check progress against targets rather than feature dates.

**How often should a Now Next Later roadmap change?**

Continuously, in small moves. ProdPad recommends reviewing it every planning cycle and whenever new evidence shifts confidence in an item. Items move toward Now as they are validated, move back when evidence weakens, and leave when they no longer serve an objective. A board that has not changed for a whole quarter usually means discovery has stopped.

**Does Now Next Later work with Scrum, Kanban or waterfall delivery?**

Bastow writes that it works with almost any methodology, including Kanban, Scrum and waterfall, because it sits above delivery ([Why I Invented It](https://www.prodpad.com/blog/invented-now-next-later-roadmap/)). The roadmap holds problems and direction. Once an idea is validated and specified, it moves into the delivery backlog or sprint plan, where estimates and dates belong.

## Sources

- [Janna Bastow: Why I Invented the Now-Next-Later Roadmap](https://www.prodpad.com/blog/invented-now-next-later-roadmap/)
- [Janna Bastow: The Birth of the Modern Roadmap](https://www.prodpad.com/blog/the-birth-of-the-modern-roadmap/)
- [ProdPad Glossary: What Is a Now-Next-Later Roadmap?](https://www.prodpad.com/glossary/now-next-later-roadmap/)
- [ProdPad Glossary: What Are Confidence Horizons?](https://www.prodpad.com/glossary/confidence-horizons/)
- [ProdPad: Why Time-Based Roadmaps Are Promises You Can't Keep](https://www.prodpad.com/blog/honesty-scales-better-than-certainty/)
- [ProdPad: How to Convert a Timeline Roadmap to Now-Next-Later](https://www.prodpad.com/blog/convert-timeline-roadmap-to-now-next-later/)
- [ProdPad: The Public Roadmap](https://www.prodpad.com/blog/the-public-roadmap/)
- [Simon Cast: Product Roadmaps vs Release Plans](https://www.prodpad.com/blog/difference-between-roadmaps-and-release-plans/)
- [Janna Bastow: Prioritize Problems, Not Ideas](https://www.prodpad.com/blog/prioritize-problems-not-product-ideas/)
- [ProdPad: How OKRs and lean roadmapping work together](https://www.prodpad.com/resources/guides/ditch-the-timeline-roadmap/okrs-and-lean-roadmapping/)
- [Userlist podcast: Now/Next/Later Roadmapping with Janna Bastow](https://userlist.com/podcast/now-next-later-roadmapping-with-janna-bastow/)
- [Mind the Product podcast: Roadmaps are dead. Long live roadmaps](https://www.mindtheproduct.com/rerun-roadmaps-are-dead-long-live-roadmaps-janna-bastow-on-the-product-experience/)
- [Mind the Product: Giving direction in product](https://www.mindtheproduct.com/giving-direction-in-product-mtp-engage-hamburg-2022/)
- [Scrum.org: Janna Bastow, Lean Roadmapping and OKRs](https://www.scrum.org/resources/blog/janna-bastow-lean-roadmapping-and-okrs)
- [Teresa Torres: My Leaders Still Want Roadmaps with Timelines](https://www.producttalk.org/roadmaps-with-timelines/)
- [Marty Cagan: The Alternative to Roadmaps](https://www.svpg.com/the-alternative-to-roadmaps/)
- [Steve McConnell: The Cone of Uncertainty](https://www.construx.com/books/the-cone-of-uncertainty/)
- [Roman Pichler: How to Get Started with Outcome-Based Product Roadmaps](https://romanpichler.medium.com/how-to-get-started-with-outcome-based-product-roadmaps-68f30098175a)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
