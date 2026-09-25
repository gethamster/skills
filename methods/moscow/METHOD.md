---
name: "moscow"
category: "Product"
description: "The MoSCoW method sorts requirements into Must, Should, Could and Won't have this time, so a fixed-deadline project knows what it guarantees."
metadata:
  datePublished: "2026-06-01"
  dateModified: "2026-09-24"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# MoSCoW Method: Must, Should, Could and Won't Have

> Created by **Dai Clegg** - [https://en.wikipedia.org/wiki/MoSCoW_method](https://en.wikipedia.org/wiki/MoSCoW_method)

## Overview

The MoSCoW method is a requirements prioritization technique that places every requirement for a fixed timeframe into one of four categories: Must have, Should have, Could have and Won't have this time. The capital letters name the categories, and the lowercase o's are there only to make the word pronounceable, as the [Wikipedia entry on the MoSCoW method](https://en.wikipedia.org/wiki/MoSCoW_method) notes. The DSDM Agile Project Framework, which holds the most complete definition, calls MoSCoW "a prioritisation technique for helping to understand and manage priorities" ([DSDM handbook: MoSCoW prioritisation](https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html)). Each label is a statement about delivery: Must haves are guaranteed, Should haves are expected, Could haves arrive if time allows, and Won't haves are agreed to be outside this timeframe.

Dai Clegg developed the method in 1994 for use in rapid application development, and it was first used extensively with the dynamic systems development method (DSDM) from 2002, according to [Wikipedia](https://en.wikipedia.org/wiki/MoSCoW_method). That account cites the book Clegg wrote with Richard Barker, CASE Method Fast-Track: A RAD Approach, which [Open Library](https://openlibrary.org/books/OL22635779M/CASE_method_fast-track) lists as an Addison-Wesley title from 1994. [ProductPlan](https://www.productplan.com/glossary/moscow-prioritization/) adds that Clegg created MoSCoW while working at Oracle. The Agile Business Consortium now publishes the [DSDM handbook](https://www.agilebusiness.org/wp-content/uploads/2026/05/DSDM-Agile-Project-Framework-Handbook.pdf), and its MoSCoW chapter is the reference most practitioners work from for MoSCoW in project management.

The handbook explains why four named categories work better than simpler schemes. A high, medium and low scale is weaker because the definitions are usually missing and because a single middle option "allows for indecision". A numbered sequence deals badly with items of similar importance and invites long arguments about whether an item belongs one place higher or lower. MoSCoW gives each category a meaning the business can hold the team to. A Must have belongs to the Minimum Usable SubseT (MUST): there is no point delivering on the target date without it, or the solution would be illegal, unsafe or not viable.

MoSCoW depends on a fixed deadline. DSDM fixes time, cost and quality and varies the features, so when a timebox runs short, lower-priority requirements are dropped with the business's agreement ([DSDM handbook](https://www.agilebusiness.org/wp-content/uploads/2026/05/DSDM-Agile-Project-Framework-Handbook.pdf)). Should haves and Could haves are therefore the plan's contingency. The handbook recommends typically no more than 60% of the effort on Must haves and a pool of Could haves of around 20% of the effort ([DSDM: MoSCoW prioritisation](https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html)). The Won't haves are excluded when that effort is calculated.

That guideline has been tested. Eduardo Miranda of Carnegie Mellon ran Monte Carlo simulations of the rules and concluded that a team "ought to be able to deliver all Must Have features for underestimations of up to 100% with very high probability" ([Moscow Rules: A Quantitative Exposé](https://pmworldjournal.com/article/moscow-rules)). In his analysis the 60, 20 and 20 split works as a reserve of 40% for the Must haves and 20% for the Should haves, provided the team does not start a lower category before finishing the higher ones.

The Won't have category does as much work as the Must have. DSDM records Won't haves in the Prioritised Requirements List, where they clarify the scope and keep requirements from being "informally reintroduced at a later date". The same requirement can carry different priorities at three levels (the project, the Project Increment and the Timebox), and at the Timebox level most requirements are Won't have for that Timebox. Turning those levels into a sequence of releases is covered in [MoSCoW phased delivery and release planning](../../skills/building-roadmaps-from-moscow-outputs/SKILL.md).

The method has known limits. The Wikipedia entry lists the main criticisms: it does not rank items within a category, it gives no transparent way to decide between Must and Should, and "Won't have" is ambiguous unless the team says whether it means this release or never. [ProductPlan](https://www.productplan.com/glossary/moscow-prioritization/) adds that results suffer when relevant stakeholders are left out or when the team is biased for or against an initiative. Teams that need an order inside a category often pair MoSCoW with a scoring framework such as RICE or WSJF, which the comparison below covers.

## Core Principles

### Must have means the Minimum Usable SubseT

A Must have is part of the smallest set of requirements the project guarantees to deliver. The [DSDM definition](https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html) gives four grounds: no point delivering on the target date without it, not legal without it, unsafe without it, or no viable solution without it. Importance alone does not qualify a requirement. If a workaround exists, even a manual and painful one, the requirement is a Should have or a Could have.

### Should have is important but survivable

A Should have is "important but not vital". Leaving it out may hurt, and the business may need a workaround such as managing expectations, accepting some inefficiency, or using an existing solution or paperwork. The solution is still viable without it. The handbook says the business can reasonably expect Should haves to be met along with the Musts, while Could haves are delivered in full only in a best case. The handbook separates the two by the degree of pain a missing requirement causes, measured in business value or the number of people affected.

### Could haves are the first contingency

Could haves are wanted or desirable but have less impact if left out than a Should have. The [DSDM handbook](https://www.agilebusiness.org/wp-content/uploads/2026/05/DSDM-Agile-Project-Framework-Handbook.pdf) calls them the main pool of contingency: when a deadline is at risk, one or more Could haves are the first choice to drop. A plan that contains no Could haves has no cheap place to absorb a bad estimate.

### Won't have this time is a recorded decision

Won't haves are requirements the team has agreed will not be delivered in this timeframe. They stay on the requirements list, where they clarify scope, stop the same request coming back informally, and tell stakeholders plainly that some things will not make it this time. Because the category is scoped to a timeframe, a Won't have can return as a higher priority in a later increment.

### Fix the deadline and flex the features

MoSCoW is built for a fixed timeframe. In a traditional project, the handbook notes, every requirement is treated as a Must have and the end date slips when problems appear. A fixed timebox forces the choice about what to drop, and the categories decide that choice in advance. Without a timebox there is nothing to trade against, and every item drifts toward Must.

### Keep the Must haves to what the team can guarantee

DSDM recommends that Must haves take no more than 60% of the effort, and says higher levels introduce a risk of failure unless estimates are accurate, the approach is well understood, the team is performing and the environment is low-risk ([DSDM handbook](https://www.agilebusiness.org/wp-content/uploads/2026/05/DSDM-Agile-Project-Framework-Handbook.pdf)). The exact split is for each team to agree. What cannot change is that some visible flexibility remains below the Must line.

### Decompose before you argue

When every requirement appears to be a Must have, the handbook reads it as a sign that the requirements have not been broken down far enough. A high-level requirement usually splits into parts with different priorities, and the less important parts can then be dropped to protect the deadline. Acceptance criteria can carry their own priorities as well, so a single requirement can have a Must threshold and a Should target.

## Steps

1. **Fix the timeframe and the objective**
   Confirm the deadline, the team and the budget for the project, increment or timebox you are prioritizing. Write down the business objective the delivery must serve, because DSDM advises tying each requirement to a project objective. A requirement linked to an objective that is not itself a Must is probably not a Must either. If the date or the team is still open, settle that first, since the categories only mean something against a fixed constraint.

2. **Agree the rules before capturing requirements**
   Share the DSDM definitions of the four categories and agree who explains a proposed Must, which DSDM assigns to the Business Visionary or an empowered Business Ambassador. The line between Should and Could is the subjective one, so agree objective criteria for it up front, for example the number of people affected or the value of benefits at stake. Agree an escalation path for disputes as well. The handbook suggests reaching this agreement before the requirements are captured, when nobody is yet defending a particular item.

3. **Start every requirement at Won't have**
   One of the handbook's tips is to begin with all requirements as Won't haves and make each one earn a higher category. Collect the candidates from the backlog, stakeholder requests, research findings and known technical work into one list at a size the team can estimate. Break large requirements into parts before prioritizing them. Keep the wording neutral so the item's owner cannot win by description alone.

4. **Test every proposed Must have**
   Ask the handbook's question for each candidate: what happens if this requirement is not met? If the answer is to cancel the project, it is a Must; otherwise it is a Should or Could. Ask the second test too: if the team said the night before deployment that it could not deliver this, would you stop the deployment? Check for a workaround and for dependencies, because a Must cannot depend on anything other than a Must.

5. **Check the effort balance**
   Estimate the effort for each category and compare the Must total with the capacity of the timeframe. The [DSDM guideline](https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html) is typically no more than 60% Must effort and around 20% Could effort. If the Must share is too high, decompose and re-test the Musts, or change the timeframe. Leave the Won't haves out of the calculation.

6. **Record the list, including the Won't haves**
   Publish the output of the MoSCoW analysis: every requirement, its category and the reasoning for any borderline call. Keep the Won't haves on it, since that is what makes the scope boundary visible. Where priorities differ between the project, the increment and the timebox, record each level separately rather than overwriting one with another. Share the list with everyone who will be asked to accept the result.

7. **Deliver Musts first and drop Coulds first**
   Work through the Must haves before starting lower categories. Miranda's analysis of the rules assumes exactly this order, and the reserve it measures disappears if the team spreads effort across all categories ([Moscow Rules](https://pmworldjournal.com/article/moscow-rules)). When estimates prove wrong, drop Could haves first and then Should haves, with the business's agreement. Track how many Shoulds and Coulds each timebox delivers, since that figure is the earliest warning that the plan is too full.

8. **Re-prioritize at each boundary**
   Review the priorities of unfinished requirements at least at the end of each timebox and each increment, as the handbook recommends. Re-prioritize everything not delivered against the needs of the next increment: a Could have may become a Won't have, and a Won't have may become a Must. When new work appears mid-timebox, classify it with the same rules and check that it does not push the Must share past the agreed level.

## When to Use

- A delivery date is fixed by a contract, a regulation or a launch event, and you need to agree in advance what will be dropped if the work runs long.
- Business and technical stakeholders must agree scope together, and plain-language categories will be understood faster than a scoring formula.
- You are setting the boundary of a first release, where the Must haves define the smallest version worth shipping.
- Requests keep returning after they were declined, and a recorded Won't have list would settle them.
- The requirements include legal, safety or contractual obligations that must be separated from improvements.

## When Not to Use

- There is no fixed timeframe or capacity. The categories have nothing to trade against and most items end up as Musts.
- You need a strict order within a long backlog. MoSCoW does not rank items inside a category, so a scoring method such as RICE or WSJF fits better.
- One person will decide regardless of the discussion. The method's value comes from shared, recorded agreement, and an overruled list loses its authority.
- The work is a stream of small experiments with no shared deadline, where a fast scoring model such as ICE is lighter to run.

## MoSCoW Compared with Scoring Frameworks

MoSCoW decides what is in or out of a timeframe. Scoring frameworks decide the order of items. The rows below summarize each approach from its own source.

| Approach | What it produces | How it decides |
|---|---|---|
| MoSCoW ([DSDM](https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html)) | Four categories for one timeframe | Agreed definitions and tests, with an effort balance |
| RICE ([Intercom](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)) | A ranked list of ideas | Reach times impact times confidence, divided by effort |
| ICE ([ProductPlan](https://www.productplan.com/glossary/ice-scoring-model)) | A quick score per idea | Impact, confidence and ease, each rated and multiplied |
| WSJF ([SAFe](https://framework.scaledagile.com/wsjf)) | A sequence of jobs | Relative cost of delay divided by relative job duration |
| High, medium, low ([DSDM handbook](https://www.agilebusiness.org/wp-content/uploads/2026/05/DSDM-Agile-Project-Framework-Handbook.pdf)) | Three loose tiers | Undefined labels, which the handbook says allow indecision |

The approaches combine well. One pattern is to use MoSCoW to draw the scope line with stakeholders and a scoring model to order work inside the Should and Could categories. [Intercom](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/) itself says RICE scores "shouldn't be used as a hard and fast rule", which leaves room for a category decision to override a score. The [RICE framework](https://tryhamster.com/methods/rice-framework) page covers that model in depth.

## Skills

This method includes the following skills:

- [Categorizing Requirements into MoSCoW Categories](../../skills/categorizing-requirements-into-moscow-buckets/SKILL.md): Apply the DSDM tests to place each requirement in the right category, including the Must have vs Should have line.
- [Applying MoSCoW to Project and Software Requirements](../../skills/applying-moscow-to-project-requirements/SKILL.md): Build MoSCoW into requirements work so every item carries a category from discovery to delivery.
- [Facilitating a MoSCoW Prioritization Workshop](../../skills/facilitating-moscow-prioritization-workshops/SKILL.md): Plan and run a neutral, timeboxed workshop that ends with an agreed priority list.
- [Resolving Stakeholder Priority Conflicts with MoSCoW](../../skills/resolving-stakeholder-disputes-with-moscow/SKILL.md): Settle Must have disputes with decomposition, dependency checks and an agreed escalation path.
- [Defining MVP Scope with MoSCoW](../../skills/defining-mvp-scope-with-moscow/SKILL.md): Use the Must haves to draw the boundary of a first release and defend it.
- [Building a MoSCoW Roadmap for Phased Delivery](../../skills/building-roadmaps-from-moscow-outputs/SKILL.md): Turn categories at project, increment and timebox level into a sequence of releases.
- [MoSCoW vs RICE, ICE and WSJF](../../skills/comparing-moscow-with-other-prioritization-frameworks/SKILL.md): Choose between categorical and scored prioritization, and combine them.

## FAQ

**What does MoSCoW stand for?**

MoSCoW stands for Must have, Should have, Could have and Won't have this time. The lowercase o's carry no meaning and only make the acronym pronounceable. DSDM also reads MUST as the Minimum Usable SubseT, the set of requirements the project guarantees to deliver ([DSDM: MoSCoW prioritisation](https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html)). Some teams read the W as "wish" or "would", and some add an X for items that are explicitly excluded ([Wikipedia](https://en.wikipedia.org/wiki/MoSCoW_method)).

**Who created the MoSCoW method?**

Dai Clegg developed it in 1994 for rapid application development, and DSDM adopted it widely from 2002, according to [Wikipedia](https://en.wikipedia.org/wiki/MoSCoW_method). [ProductPlan](https://www.productplan.com/glossary/moscow-prioritization/) states that Clegg created it while working at Oracle. The fullest current statement of the rules is the MoSCoW chapter of the DSDM Agile Project Framework handbook.

**How do I tell a Must have from a Should have?**

Ask what happens if the requirement is not met. If the honest answer is that the project should be cancelled, or that the solution would be illegal, unsafe or not viable, it is a Must have. If there is any workaround, even a manual and painful one, it is a Should have or a Could have. The handbook's second test asks whether the business would stop the deployment if told the night before that the item could not be delivered.

**What share of the work should be Must haves?**

DSDM recommends typically no more than 60% of the effort for Must haves and a pool of Could haves of around 20% ([DSDM: MoSCoW prioritisation](https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html)). The handbook treats this as a typical-project guideline and leaves the exact split to each team. It says going above that level introduces a risk of failure unless estimates, approach, team and environment are all well understood.

**Why keep a Won't have list at all?**

Recording what is out of scope stops those requests from being informally reintroduced and tells stakeholders plainly that some things will not make it this time. It also helps the team keep its focus on the Musts and Shoulds. Because the category means "this time", the list is also where the next increment's candidates start.

**How is MoSCoW different from RICE or WSJF?**

MoSCoW sorts requirements into four named categories for one timeframe through agreed definitions. RICE ranks ideas by reach, impact, confidence and effort ([Intercom](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)), and WSJF sequences jobs by cost of delay divided by job duration ([SAFe](https://framework.scaledagile.com/wsjf)). Many teams use MoSCoW for the scope decision and a scoring model to order work inside a category.

**Is the MoSCoW technique only for software development?**

No. MoSCoW for software development is the most common use, but the handbook applies prioritisation to tasks, products, acceptance criteria and tests as well as requirements, and suggests using MoSCoW for a to-do list. Any piece of work with a fixed deadline and more candidate work than capacity can use the four categories. The condition that matters is the fixed timeframe, since that is what gives the categories meaning.

**How often should MoSCoW priorities be revisited?**

The [DSDM handbook](https://www.agilebusiness.org/wp-content/uploads/2026/05/DSDM-Agile-Project-Framework-Handbook.pdf) says priorities should be kept under continual review and, as a minimum, reviewed at the end of each timebox and each project increment. At the end of an increment every unmet requirement is re-prioritized for the next one. New work that appears mid-timebox is classified with the same rules straight away.

## Sources

- [Agile Business Consortium: DSDM handbook, MoSCoW prioritisation](https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html)
- [DSDM Agile Project Framework handbook (PDF)](https://www.agilebusiness.org/wp-content/uploads/2026/05/DSDM-Agile-Project-Framework-Handbook.pdf)
- [Wikipedia: MoSCoW method](https://en.wikipedia.org/wiki/MoSCoW_method)
- [Open Library: CASE Method Fast-Track, a RAD approach](https://openlibrary.org/books/OL22635779M/CASE_method_fast-track)
- [ProductPlan: MoSCoW prioritization](https://www.productplan.com/glossary/moscow-prioritization/)
- [Eduardo Miranda: Moscow Rules, a quantitative exposé](https://pmworldjournal.com/article/moscow-rules)
- [Intercom: RICE, simple prioritization for product managers](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)
- [ProductPlan: ICE scoring model](https://www.productplan.com/glossary/ice-scoring-model)
- [Scaled Agile Framework: WSJF](https://framework.scaledagile.com/wsjf)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
