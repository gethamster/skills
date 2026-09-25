---
name: "shape-up"
category: "Workflows"
description: "Shape Up is Basecamp's product development method: shape work to a fixed-time appetite, bet on it at a betting table, and build it in six-week cycles."
metadata:
  datePublished: "2026-07-07"
  dateModified: "2026-09-24"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Shape Up: Fixed Time, Variable Scope Product Development

> Created by **Ryan Singer** - [https://basecamp.com/shapeup](https://basecamp.com/shapeup)

## Overview

Shape Up is the product development method Ryan Singer wrote down from his work at Basecamp. It rests on one idea: fix the time, vary the scope. Before a team starts, a small senior group shapes a problem into a rough but solved concept with a fixed time budget, called the appetite. Decision makers then bet a cycle of team time on the best shaped pitches at a betting table. A small team of a designer and one or two programmers builds the work in a six-week cycle, and a cool-down period follows before the next cycle starts. The whole book, [Shape Up: Stop Running in Circles and Ship Work that Matters](https://basecamp.com/shapeup), is free to read online.

The book came out in 2019. The [REWORK episode on the print edition](https://37signals.com/podcast/shape-up-print-edition/) says Basecamp released it that year as a digital book by its head of product strategy, and that Singer later added sections in response to reader feedback and published a print edition. In the [foreword](https://basecamp.com/shapeup/0.1-foreword), Jason Fried describes the approach as developed over nearly 15 years of trial and error, and lists what Basecamp does not do: no daily stand ups, no backlogs, no Kanban and no velocity tracking. Singer himself [writes](https://www.ryansinger.co/) that he wrote the book in 2019 to formalize how the company did product development over his 17 years at 37signals, the company behind Basecamp.

The method grew out of specific pressures. In [Chapter 1](https://basecamp.com/shapeup/0.3-chapter-01), Singer says he prototyped breadboarding and scope mapping on a 2009 project to bundle Basecamp's products into one suite. By 2015, [the same chapter](https://basecamp.com/shapeup/0.3-chapter-01) continues, the product team had quadrupled and worked remotely, and the company switched from ad-hoc project lengths to repeating cycles, formalized pitching and betting, and Singer began using the word "shaping" for the up-front design work that sets boundaries and reduces risk before a project goes to a team.

Shape Up works in three phases that the book treats as its three parts. Shaping happens on a separate track from building, in private, and turns a raw idea into a pitch with a problem, an appetite, a sketched solution, rabbit holes and no-gos. Betting happens at the betting table during cool-down, where a handful of senior people choose what to build next from a few shaped pitches. There is no central backlog. Building belongs to the team: they get the whole project instead of a list of tasks, discover the real work, split it into scopes, report progress on a hill chart, and hammer scope until the work fits the time.

The book is explicit about which risk it targets. [Chapter 1](https://basecamp.com/shapeup/0.3-chapter-01) says every step addresses the risk of not shipping on time, and that the book is not about the risk of building the wrong thing. Shaping removes open questions before a project is committed. Capping each bet at six weeks, with no extension by default, stops a project from consuming several times its appetite. Integrating design and programming early inside the cycle surfaces unknowns while there is still time to act on them.

Compared with Scrum, Shape Up uses longer time boxes, puts shaping on its own track before the build, and replaces the ordered backlog with a small set of pitches that are either bet on or let go. The comparison table below lays out the differences using the Scrum Guide's own definitions. Shape Up still shares Scrum's reliance on time boxes and on teams that decide how to do the work.

The method has also moved on since the book. Singer now consults with other companies, and in a [case study talk](https://www.ryansinger.co/end-to-end-with-shape-up-a-real-world-case-study/) he notes that Basecamp was unusual: everyone was technical, designers wrote code, and the founders were hands-on. In his [Shaping in Real Life series](https://www.ryansinger.co/pitfalls-when-adopting-shape-up/) he separates framing (agreeing the problem and outcome) from shaping (working out the technical solution), recommends shaping with senior engineers in the room, and names undershaped work as the number one failure mode when teams adopt the method. Read the book for the mechanics and his later articles for how teams that are unlike Basecamp adapt them.

## Core Principles

### Fixed time, variable scope

The appetite fixes how long the team will spend, and the solution changes to fit it. [Chapter 3](https://basecamp.com/shapeup/1.2-chapter-03) puts it this way: estimates start with a design and end with a number, while appetites start with a number and end with a design. The fixed deadline forces the trade-offs that open-ended projects postpone. Variable scope gives the team permission to make them. When the principle is missing, a team either overruns the date or ships everything half-finished.

### Shape work at the right level of abstraction

Shaped work sits between a wireframe and a one-line request. [Chapter 2](https://basecamp.com/shapeup/1.1-chapter-02) calls wireframes too concrete because they leave designers no room and hide complexity, and calls words too abstract because the team cannot tell what to include or leave out. Good shaped work has three properties: it is rough, it is solved at the macro level, and it is bounded by an appetite and explicit exclusions. If the team has to invent the concept during the cycle, the work was not shaped.

### Bets instead of backlogs

A pitch that is not chosen at the betting table is let go, and nothing is kept in a central queue. [Chapter 7](https://basecamp.com/shapeup/2.1-chapter-07) argues that backlogs grow into a weight that makes everyone feel behind and wastes time on grooming. People can still keep their own lists of requests, bugs and ideas, and lobby for them again later. Important ideas come back on their own, carried by someone with a reason to raise them now.

### Honor the bet with uninterrupted time

A bet commits the whole cycle to one project. [Chapter 8](https://basecamp.com/shapeup/2.2-chapter-08) says Basecamp does not let a team be pulled away during a cycle, because losing a day also costs the momentum built before it. Only a real crisis breaks the commitment, and the book says true crises are rare. Anything else waits for the next betting table, which is at most one cycle away.

### Cap the downside with a circuit breaker

If a project does not ship by the end of its cycle, it does not get an extension by default. The circuit breaker described in [Chapter 8](https://basecamp.com/shapeup/2.2-chapter-08) limits the loss to the appetite, treats a miss as a sign that the shaping was wrong, and sends the problem back to the shaping track instead of feeding more time into a bad approach. It also gives the team a reason to make hard scope calls throughout the cycle. [Chapter 14](https://basecamp.com/shapeup/3.5-chapter-14) allows a short extension only in rare cases where the remaining work is all must-haves and all downhill.

### Give the whole project to a small team

Teams receive the whole project instead of a set of tickets. [Chapter 10](https://basecamp.com/shapeup/3.1-chapter-10) compares splitting a pitch into tasks up front to putting it through a paper shredder. The team defines its own tasks, discovers the work that no one could predict, and organizes it into scopes. The shaping sets the boundaries, and the team fills in the outline with real design and implementation decisions.

### Make unknowns visible

Counting tasks hides risk because task lists grow as the team learns. Shape Up tracks each scope on a hill: uphill while the approach is still being figured out, downhill once only execution remains ([Chapter 13](https://basecamp.com/shapeup/3.4-chapter-13)). The team pushes the riskiest, least familiar scopes uphill first, so a late surprise cannot sink the cycle. A dot that stops moving is treated as a raised hand.

## Steps

1. **Set the appetite and narrow the problem**
   Start with a raw idea and decide how much time it deserves before discussing solutions. The book uses two sizes: a small batch that a designer and one or two programmers can build in one or two weeks, and a big batch that takes the same team the full six weeks ([Chapter 3](https://basecamp.com/shapeup/1.2-chapter-03)). Narrow the request by asking when and why the customer needs it, which often turns a large feature into a specific pain point. Reject grab-bag projects such as "redesign the Files section" until someone can name the problem driving them.

2. **Rough out the elements of a solution**
   Working alone or with one trusted partner, sketch the solution at a level of detail that moves fast. Use breadboards for flows and fat marker sketches for visual layouts, and stop once you have a short list of concrete elements that solve the problem inside the appetite. The details are covered in the [breadboards and fat marker sketches](../../skills/using-breadboards-and-fat-marker-sketches/SKILL.md) skill. Keep this work private, because unshaped work is easy to drop and should not create expectations.

3. **Remove risks and rabbit holes**
   Walk through the use case slowly and question each part: is there new technical work, an assumption about how parts fit, or a design problem nobody has solved? Patch each hole with a decision, declare tempting extensions out of bounds, and cut nice-to-haves from the core. Then check the concept with technical experts, asking whether it is possible within the appetite, which is a different question from whether it is possible at all ([Chapter 5](https://basecamp.com/shapeup/1.4-chapter-05)). The result should be thin-tailed: a slight chance of running a week over and little chance of worse.

4. **Write the pitch**
   Package the shaped concept in a pitch with five ingredients: problem, appetite, solution, rabbit holes and no-gos ([Chapter 6](https://basecamp.com/shapeup/1.5-chapter-06)). Present the problem as one specific story that shows why the status quo fails, so the solution can be judged against it. Add enough sketching for someone without context to see the idea, without drawing wireframes that box in the designers. Post the pitch where the people at the betting table can read it in advance, as described in [shaping product pitches](../../skills/shaping-product-pitches/SKILL.md).

5. **Bet at the betting table**
   During cool-down, the people with authority over the product meet to choose the next cycle's work from a few shaped pitches. At Basecamp that meant the CEO, the CTO, a senior programmer and the product strategist, and the call rarely went past an hour or two ([Chapter 8](https://basecamp.com/shapeup/2.2-chapter-08)). They weigh whether the problem matters, whether the appetite is right, whether the solution is attractive, whether the timing fits and whether the right people are free. The output is a cycle plan with named teams, which the [betting table skill](../../skills/running-betting-tables/SKILL.md) covers step by step.

6. **Hand over the project and build in scopes**
   Kick off by walking the team through the pitch, then leave them to get oriented; the first days may look quiet, and [Chapter 10](https://basecamp.com/shapeup/3.1-chapter-10) suggests stepping in only if the silence lasts past three days. The team integrates one small, core, novel slice early, then maps the rest of the work into scopes that can be finished independently. They track each scope on a hill chart and sequence the riskiest scopes first. See [mapping scopes](../../skills/mapping-scopes-for-building/SKILL.md) and the [Shape Up hill chart](../../skills/tracking-progress-with-hill-charts/SKILL.md) skills.

7. **Hammer scope and ship, or let the circuit breaker trip**
   As the end nears, compare the work to the customer's current baseline instead of an ideal version, and cut anything that is not a must-have. Mark nice-to-haves with a tilde so they are easy to drop. Done means deployed within the cycle. If the work cannot ship, the project does not continue by default; it goes back to shaping, and a new pitch competes at a later betting table. The cycle mechanics are in [managing six-week cycles](../../skills/managing-six-week-cycles/SKILL.md) and the cutting tactics in [setting appetites and managing scope](../../skills/setting-appetites-and-managing-scope/SKILL.md).

8. **Cool down, then move on**
   After each six-week cycle comes a cool-down with no scheduled work. Programmers and designers fix bugs, explore ideas and try technical possibilities, while the betting table meets to plan the next cycle. Treat feedback on what just shipped as raw ideas: say a gentle no, let the first wave pass, and shape anything important before betting on it ([Chapter 15](https://basecamp.com/shapeup/3.6-chapter-15)). The [cool-down skill](../../skills/planning-cooldown-periods/SKILL.md) covers how to use this time.

## Shape Up Compared with Scrum

Shape Up and Scrum both use time boxes and small teams that decide how to do their work, but they organize the time differently. The rows below use the book and the [Scrum Guide](https://scrumguides.org/scrum-guide.html).

| Topic | Shape Up | Scrum |
|-------|----------|-------|
| Time box | Six-week cycles, then a two-week cool-down ([Chapter 8](https://basecamp.com/shapeup/2.2-chapter-08)) | Sprints of one month or less, each starting right after the last ([Scrum Guide](https://scrumguides.org/scrum-guide.html)) |
| Source of work | A few shaped pitches, and no central backlog ([Chapter 7](https://basecamp.com/shapeup/2.1-chapter-07)) | An emergent, ordered Product Backlog managed by the Product Owner ([Scrum Guide](https://scrumguides.org/scrum-guide.html)) |
| Daily coordination | No daily meetings; progress shown on a hill chart ([Chapter 1](https://basecamp.com/shapeup/0.3-chapter-01)) | A 15-minute Daily Scrum every working day ([Scrum Guide](https://scrumguides.org/scrum-guide.html)) |
| Unfinished work | No extension by default; the idea returns to shaping ([Chapter 8](https://basecamp.com/shapeup/2.2-chapter-08)) | Items not meeting the Definition of Done return to the Product Backlog ([Scrum Guide](https://scrumguides.org/scrum-guide.html)) |
| Up-front design | A separate shaping track defines the solution before the bet ([Chapter 2](https://basecamp.com/shapeup/1.1-chapter-02)) | Backlog items are refined as needed, and scope can be renegotiated during the Sprint ([Scrum Guide](https://scrumguides.org/scrum-guide.html)) |

## When to Use

- A product team has grown past the point where founders can direct every project, and work keeps dragging past its expected finish. Chapter 1 of the book describes exactly this growing pain, and the method's structure is aimed at restoring the ability to ship.
- An existing product needs new features that can be defined in advance. The book's standard process assumes the surrounding product already sets the space a feature fits into, which makes shaping to a fixed appetite realistic.
- The team has senior, product-minded engineers and designers who can own a whole project. Handing over a project instead of tasks only works when the builders can make sound design and implementation calls on their own.
- Scope creep is the recurring failure. A fixed appetite and a circuit breaker force the trade-offs that open-ended estimates let a team avoid.
- Leadership wants control over direction without running the daily work. The betting table gives senior people one short, decisive meeting per cycle instead of constant reprioritization.

## When Not to Use

- The work is mostly reactive, such as incidents, support escalations or on-call. Singer's [pitfalls article](https://www.ryansinger.co/pitfalls-when-adopting-shape-up/) recommends separate capacity for reactive work, and says project work waiting on third parties suits a kanban better than a cycle.
- A brand-new product has no settled architecture yet. The book says well-shaped bets are not possible in this phase and describes an R&D mode where senior people spike ideas and do not expect to ship; the standard process only applies once the foundation exists.
- Leadership cannot commit to uninterrupted cycles. If the team will be pulled onto other work mid-cycle, the bet means nothing, and the method's main protection against runaway projects is gone.
- The team is two or three people. The book's appendix on size says a tiny team can drop cycles, cool-down, formal pitches and the betting table, and simply alternate between shaping and building.
- Regulation or contract requires a fixed specification signed off before work starts. Variable scope and deliberately rough pitches conflict with that kind of commitment.

## Skills

This method includes the following skills:

- [Managing Shape Up Six-Week Build Cycles](../../skills/managing-six-week-cycles/SKILL.md): Run a six-week build cycle from kick-off to ship, protect the team's time, and use the circuit breaker when work will not fit.
- [Planning the Shape Up Cooldown Period](../../skills/planning-cooldown-periods/SKILL.md): Use the two weeks between cycles for bugs, exploration, shaping and the betting table.
- [Setting Appetites and Managing Scope in Shape Up](../../skills/setting-appetites-and-managing-scope/SKILL.md): Set a fixed time appetite, then hammer scope so the work ships inside it.
- [Shaping Product Pitches with a Shape Up Pitch Template](../../skills/shaping-product-pitches/SKILL.md): Turn a raw idea into a pitch with a problem, appetite, solution, rabbit holes and no-gos.
- [Shape Up Hill Charts: Tracking Progress Uphill and Downhill](../../skills/tracking-progress-with-hill-charts/SKILL.md): Show each scope as uphill or downhill so anyone can see progress without a status meeting.
- [Running a Shape Up Betting Table Session](../../skills/running-betting-tables/SKILL.md): Choose which shaped pitches get a team in the next cycle.
- [Mapping Shape Up Scopes Instead of Tasks](../../skills/mapping-scopes-for-building/SKILL.md): Organize the building phase into integrated slices that can be finished independently.
- [Breadboarding Product Design with Fat Marker Sketches](../../skills/using-breadboards-and-fat-marker-sketches/SKILL.md): Sketch flows and layouts at the right level of abstraction while shaping.

## FAQ

**What is Shape Up in simple terms?**

Shape Up is a way to run product development in fixed time boxes. Senior people shape a problem into a rough but solved concept with a set appetite, leaders bet a cycle of team time on the best of those concepts, and a small team builds it with full responsibility for the details. Basecamp's cycles last six weeks, with cool-down between them. If the work does not ship in time, it goes back to shaping instead of getting more time.

**Who created Shape Up?**

Ryan Singer, who led product strategy at Basecamp, wrote the book, and both [his own site](https://www.ryansinger.co/) and [Lenny's Podcast](https://www.lennysnewsletter.com/p/shape-up-ryan-singer) describe him as the creator of Shape Up. The [REWORK podcast](https://37signals.com/podcast/shape-up-print-edition/) describes the book as released by Basecamp in 2019 and written by its head of product strategy. The [introduction](https://basecamp.com/shapeup/0.3-chapter-01) traces the practices back to how Singer, Jason Fried and David Heinemeier Hansson built the first version of Basecamp under tight time constraints.

**How is Shape Up different from Scrum?**

Scrum runs back-to-back Sprints of one month or less from an ordered Product Backlog, with a daily 15-minute Daily Scrum, according to the [Scrum Guide](https://scrumguides.org/scrum-guide.html). Shape Up runs longer cycles with a break in between, picks work from a few shaped pitches instead of a backlog, and has no daily meeting. It also puts the solution design on a separate shaping track before the team is committed. The comparison table above sets the two side by side.

**Do you have to use six-week cycles?**

No. The [appendix on adjusting to your size](https://basecamp.com/shapeup/4.1-appendix-02) says six weeks might not be the exact time frame for every team, while the need to cap the downside of each bet holds everywhere. In his [case study](https://www.ryansinger.co/end-to-end-with-shape-up-a-real-world-case-study/), Singer refers to teams running six weeks or four weeks. What matters is a cycle long enough to finish something meaningful and short enough that the deadline feels close from the start.

**What happens to bugs in Shape Up?**

Real crises, such as lost data or an app grinding to a halt, get fixed right away. The book suggests three routes for everything else: fix bugs during cool-down, pitch a large bug at the betting table like any other project, or dedicate a cycle once a year to a bug smash ([Chapter 8](https://basecamp.com/shapeup/2.2-chapter-08)). Singer's later advice for other companies is to give reactive work its own capacity so it does not leak into cycle projects.

**Why do Shape Up adoptions fail?**

Singer names undershaped work as the number one failure mode: pitches shaped without technical depth leave unanswered questions that blow up during the build ([Common Pitfalls](https://www.ryansinger.co/pitfalls-when-adopting-shape-up/)). The same article lists blurred framing, where the team never agreed on the problem, and mixing reactive work into cycle projects. The book adds a mechanical failure: if people keep interrupting the team, the bet and the circuit breaker stop meaning anything.

**What does a product manager do in Shape Up?**

Most of the product manager's effort moves upstream into framing and shaping: narrowing problems, setting appetites, working out solutions with technical partners and writing pitches. During the cycle the team owns the tasks, so the product manager answers questions, watches the hill chart for stuck scopes and shapes the next round of work. The summary of Singer's interview on [Lenny's Podcast](https://www.lennysnewsletter.com/p/shape-up-ryan-singer) lists this upstream shift of the PM role as one of its topics.

## Sources

- [Shape Up: Stop Running in Circles and Ship Work that Matters](https://basecamp.com/shapeup)
- [Shape Up, Foreword by Jason Fried](https://basecamp.com/shapeup/0.1-foreword)
- [Shape Up, Chapter 1: Introduction](https://basecamp.com/shapeup/0.3-chapter-01)
- [Shape Up, Chapter 2: Principles of Shaping](https://basecamp.com/shapeup/1.1-chapter-02)
- [Shape Up, Chapter 3: Set Boundaries](https://basecamp.com/shapeup/1.2-chapter-03)
- [Shape Up, Chapter 5: Risks and Rabbit Holes](https://basecamp.com/shapeup/1.4-chapter-05)
- [Shape Up, Chapter 6: Write the Pitch](https://basecamp.com/shapeup/1.5-chapter-06)
- [Shape Up, Chapter 7: Bets, Not Backlogs](https://basecamp.com/shapeup/2.1-chapter-07)
- [Shape Up, Chapter 8: The Betting Table](https://basecamp.com/shapeup/2.2-chapter-08)
- [Shape Up, Chapter 10: Hand Over Responsibility](https://basecamp.com/shapeup/3.1-chapter-10)
- [Shape Up, Chapter 13: Show Progress](https://basecamp.com/shapeup/3.4-chapter-13)
- [Shape Up, Chapter 14: Decide When to Stop](https://basecamp.com/shapeup/3.5-chapter-14)
- [Shape Up, Chapter 15: Move On](https://basecamp.com/shapeup/3.6-chapter-15)
- [Shape Up, Appendix: Adjust to Your Size](https://basecamp.com/shapeup/4.1-appendix-02)
- [REWORK: Shape Up, The Print Edition](https://37signals.com/podcast/shape-up-print-edition/)
- [Ryan Singer](https://www.ryansinger.co/)
- [Ryan Singer: Common Pitfalls When Adopting Shape Up](https://www.ryansinger.co/pitfalls-when-adopting-shape-up/)
- [Ryan Singer: End-To-End with Shape Up, a Real-World Case Study](https://www.ryansinger.co/end-to-end-with-shape-up-a-real-world-case-study/)
- [Lenny's Podcast: Ryan Singer on Shape Up](https://www.lennysnewsletter.com/p/shape-up-ryan-singer)
- [The Scrum Guide](https://scrumguides.org/scrum-guide.html)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
