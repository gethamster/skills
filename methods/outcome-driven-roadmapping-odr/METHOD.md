---
name: "outcome-driven-roadmapping-odr"
category: "Product"
description: "Outcome-Driven Roadmapping builds an outcome-based roadmap from measurable changes in customer behavior, with initiatives treated as bets."
metadata:
  datePublished: "2026-06-01"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Outcome-Driven Roadmapping: Plan Around Results

> Created by **Product practitioners including Josh Seiden, Melissa Perri, C. Todd Lombardo and Bruce McCarthy (no single originator)** - [https://www.amazon.com/Product-Roadmaps-Relaunched-Direction-Uncertainty/dp/149197172X](https://www.amazon.com/Product-Roadmaps-Relaunched-Direction-Uncertainty/dp/149197172X)

## Overview

Outcome-Driven Roadmapping (ODR) is a way of building an outcome-driven roadmap: a plan whose top-level items are measurable changes in customer behavior or business results, with features and projects listed underneath as bets on how to cause them. A traditional roadmap answers "what will we ship, and when?" An outcome-based roadmap answers "what do we want to change, how will we know, and what are we trying first?" ProdPad describes the shift as moving from "What should we build?" to "What do we want to achieve?" in its [guide to outcome-based roadmaps](https://www.prodpad.com/blog/outcome-based-roadmaps/).

No single person is credited with inventing the approach, and none of the sources below claims to have done so. It grew out of several strands of product practice. Josh Seiden's book [Outcomes Over Output](https://openlibrary.org/works/OL28607044W) (2019) supplies a widely quoted definition, which Teresa Torres cites in [Outcomes vs. Outputs](https://www.producttalk.org/2021/05/outcomes-vs-outputs/): "An outcome is a change in human behavior that drives business results." C. Todd Lombardo, Bruce McCarthy, Evan Ryan and Michael Connors wrote [Product Roadmaps Relaunched](https://www.amazon.com/Product-Roadmaps-Relaunched-Direction-Uncertainty/dp/149197172X) (O'Reilly, 2017) about using the roadmap to align stakeholders and prioritize requests. Melissa Perri's [Escaping the Build Trap](https://www.amazon.com/Escaping-Build-Trap-Effective-Management/dp/149197379X) (2018) named the failure the approach answers: companies "cranking out features to meet their schedule rather than the customer's needs," in the words of her [book page](https://melissaperri.com/book).

Marty Cagan made the organizational case. In [The Alternative to Roadmaps](https://www.svpg.com/the-alternative-to-roadmaps/), published in 2015, he argues that typical roadmaps "tell the team what to do," and proposes replacing the feature list with a product vision plus prioritized business objectives for each team, with OKRs as his preferred system for managing them. Roman Pichler, who published his goal-oriented [GO product roadmap](https://www.romanpichler.com/blog/goal-oriented-agile-product-roadmap/) in 2013, wrote at the time that he did not invent the format: "It has been around for several years, and I honestly do not know who first suggested it." In a 2024 article he notes that outcome-based, goal-oriented roadmaps [have become more popular](https://www.romanpichler.com/blog/okrs-and-product-roadmaps/) over the last ten years.

The structure has three layers. At the top sit objectives from the business strategy. Under each objective sit one or a few outcomes, each with a metric, a baseline and a target. Under each outcome sit initiatives, which are hypotheses about what might move the metric, and under those sit the features that implement them. Torres draws a distinction that matters at the outcome layer: business outcomes such as revenue and retention are lagging indicators, while product outcomes measure customer behavior in the product and are "leading indicators within the team's control" ([Torres](https://www.producttalk.org/2021/05/outcomes-vs-outputs/)). ODR assigns teams product outcomes and connects them to the business outcomes above.

The change is harder in practice than on paper. Torres reports from her CDH Benchmark survey that only 20% of product teams claim to be outcome-focused, nearly half work in a mix of outcomes and outputs, and about 30% still work primarily with outputs ([Torres](https://www.producttalk.org/2021/05/outcomes-vs-outputs/)). Cagan adds that OKRs tend to fail in companies that still hand teams "a roadmap of features and projects with expected release dates" ([Team Objectives](https://www.svpg.com/team-objectives-overview/)). An outcome roadmap depends on a team being allowed to choose its solutions.

ODR does not remove dates or delivery plans. Cagan keeps a small number of date-based "high-integrity commitments" for work that must land on a date, and Pichler recommends dates or narrow timeframes on internal roadmaps and broad timeframes on external ones ([Should product roadmaps have dates?](https://www.romanpichler.com/blog/should-product-roadmaps-have-dates/)). Delivery still happens in sprints or on a kanban board, which record what the team ships. The roadmap records why that work is being done and which result it is expected to move.

Product managers use ODR at several scales: one team with one outcome, a product area with several squads, or a product manager's portfolio of bets across a quarter. The skills below cover each part of the practice, from writing the outcomes to reviewing them. If you keep the roadmap in Hamster, the objective, outcome and initiative links stay attached to the work items the team ships.

## Core Principles

### Outcomes Are Changes in Behavior

An outcome is a measurable change in what customers do, or in a business result those behaviors produce. Shipping a feature is an output. Torres puts the practical test this way: output-driven teams are done when the software ships, while outcome-driven teams are done when it ships and "has the expected impact" ([Torres](https://www.producttalk.org/2021/05/outcomes-vs-outputs/)). Writing outcomes as behaviors makes them observable, which is what lets a team tell whether its work mattered.

### Separate the Target From the Approach

The outcome stays stable for its planning period while the initiatives underneath it can change. Cagan's reason is that the initial approach to a problem often does not work, and a model built around objectives "embraces that likelihood" rather than pretending otherwise ([The Alternative to Roadmaps](https://www.svpg.com/the-alternative-to-roadmaps/)). When a team fuses the target and the approach, dropping a failed initiative looks like missing the goal. Keeping them apart makes switching approaches a normal part of the plan.

### Give Teams Outcomes They Can Influence

Business outcomes such as revenue are affected by pricing, sales, the market and many other teams. Hope Gurion's advice on [Product Talk](https://www.producttalk.org/2020/02/product-outcomes/) is to translate each business outcome into a product outcome inside the team's span of control, using Seiden's question "What are the customer behaviors that drive business results?" The team then owns a behavior it can change through the product, and leadership owns the bet that the behavior moves the business result.

### Measurability Comes Before Commitment

An outcome without a metric, a baseline and a way to observe it cannot be reviewed, so nobody can say whether an initiative worked. Pichler asks that roadmap outcomes be specific, measurable and feasible, and suggests that when that is too hard for the whole roadmap, the team should at least make the first outcome measurable ([Pichler](https://www.romanpichler.com/blog/get-the-outcomes-on-your-product-roadmap-right/)). Some goals, such as brand perception, are hard to measure well. Name a proxy and state what it misses.

### Certainty Falls With Distance

Near-term work can be specific, while work further out should be described as problems or outcomes. Janna Bastow's [Now-Next-Later format](https://www.prodpad.com/blog/invented-now-next-later-roadmap/) makes this explicit: the Now column is detailed, Next is less defined, and Later holds problems the team wants to keep in view without committing to solutions. A roadmap that fills every future quarter with named features forces the team to either break those promises or ignore new evidence.

### Leading Indicators Carry the Feedback Loop

Lagging metrics move slowly. Gurion notes that by the time a business outcome such as revenue shows up, "it's too late to do anything about" it ([Product Talk](https://www.producttalk.org/2020/02/product-outcomes/)). Each outcome therefore needs one or more leading indicators the team can check often enough to change course. Leading indicators can move while the lagging metric stays flat, which is a reason to re-examine the assumed cause and effect.

### Prioritize Problems, Then Solutions

Stakeholder debates on a feature roadmap turn into contests over whose feature gets a slot. An outcome roadmap moves the debate up a level, to which outcome matters most and what evidence suggests an initiative will move it. ProdPad describes this as prioritizing "at the problem level" and then choosing experiments, which may add, change or remove features ([ProdPad](https://www.prodpad.com/blog/outcome-based-roadmaps/)). The argument still happens, but it is about results and evidence.

## Steps

1. **Collect the strategic objectives**
   Start from the objectives the business has already set, usually in company OKRs, a strategy document or board priorities. The product manager's job here is translation, so align to existing objectives rather than inventing new ones. Pichler recommends deriving roadmap goals from the product strategy instead of letting stakeholders dictate roadmap content ([OKRs and Product Roadmaps](https://www.romanpichler.com/blog/okrs-and-product-roadmaps/)). If the company has no clear objectives, raise that with leadership before building the roadmap, because every later step depends on them. Keep the list short enough that everyone on the team can name the objectives from memory.

2. **Define measurable outcomes for each objective**
   For each objective, write one or a few outcomes, each with a metric, a current baseline, a target, a timeframe and an owner. Test each candidate by asking why it matters, which is Pichler's check for features in disguise ([Pichler](https://www.romanpichler.com/blog/get-the-outcomes-on-your-product-roadmap-right/)). "Launch the enterprise dashboard" is an output. A change in how many enterprise users complete a weekly task is an outcome. Prefer product outcomes the team can influence over business outcomes it cannot.

3. **Generate candidate initiatives as hypotheses**
   For each outcome, list several initiatives that might move the metric, and write each as a hypothesis: if we do this, this behavior will change, because of this reason. Generating more than one option matters because the first idea is often not the best one. Torres's [opportunity solution tree](https://www.producttalk.org/opportunity-solution-trees/) is one way to structure this, with the outcome at the root and customer needs between the outcome and the solutions. Keep this step short, since the next steps test the options.

4. **Choose and sequence the near-term bets**
   Pick the initiatives to pursue now and leave the rest as candidates. Compare options on expected impact, confidence and effort; Intercom's [RICE scoring](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/) is one common scale. Pichler's advice is to work on one product goal at a time where possible, because several goals at once dilute focus and make progress harder to track ([Pichler](https://www.romanpichler.com/blog/get-the-outcomes-on-your-product-roadmap-right/)). Record why the chosen initiative beat the alternatives, so the choice can be revisited when evidence arrives.

5. **Set leading indicators and instrument them**
   For every committed initiative, name the leading indicator that should move first and confirm the team can see it without waiting on a data request. The indicator should be a behavior that plausibly drives the lagging outcome. Itamar Gilad points out that outcomes often lag the launch because of deployment, sales and adoption timing, so the plan should allow for that delay ([Gilad](https://itamargilad.com/outcome-roadmaps/)). Decide in advance what reading would count as working, flat or failing.

6. **Build and present the outcome-based roadmap**
   Lay out objectives, outcomes and initiatives so the hierarchy is visible, with near-term items detailed and later items described as problems. Present it in that order: what matters to the business, how progress will be measured, then what the team is trying first. ProdPad's test is that someone new to the product should grasp the what, how and why within a couple of minutes ([ProdPad](https://www.prodpad.com/blog/outcome-based-roadmaps/)). Keep delivery detail on the team's board and link the two.

7. **Review outcomes on a cadence and adapt**
   Hold regular outcome reviews where the team reads the indicators and decides whether to continue, adjust or switch initiatives. Pichler suggests reviewing roadmap outcomes about once per quarter as a rule of thumb, alongside continuous monitoring of KPIs ([Pichler](https://www.romanpichler.com/blog/get-the-outcomes-on-your-product-roadmap-right/)). When a shipped initiative leaves the indicator flat, separate an execution problem (too few users saw the change) from a hypothesis problem (the change does not affect behavior). Update the roadmap after each review so it stays the current plan.

## Outcome-Based Roadmap Formats

Several published formats put outcomes at the center of the roadmap. They differ mainly in how they handle time and how much solution detail they show.

| Format | Who describes it | How it handles time and solutions |
|---|---|---|
| Now-Next-Later | Janna Bastow, ProdPad ([source](https://www.prodpad.com/blog/invented-now-next-later-roadmap/)) | Three horizons instead of dates; problems and initiatives, each tied to an objective |
| GO product roadmap | Roman Pichler ([source](https://www.romanpichler.com/blog/goal-oriented-agile-product-roadmap/)) | Date or timeframe per goal, with a few coarse features and a metric under each goal |
| Outcome roadmap on a timeline | Itamar Gilad ([source](https://itamargilad.com/outcome-roadmaps/)) | Goals with key results on a timeline, plus research, discovery, delivery and effect delay |
| OKR-based roadmap | Roman Pichler ([source](https://www.romanpichler.com/blog/okrs-and-product-roadmaps/)) | Roadmap goal treated as the objective, other elements as key results; often quarterly |
| Vision plus team objectives | Marty Cagan ([source](https://www.svpg.com/the-alternative-to-roadmaps/)) | Replaces the roadmap with prioritized objectives; dates only as high-integrity commitments |

Two of these have their own pages in this catalog: the [Now-Next-Later framework](https://tryhamster.com/methods/now-next-later-framework) and the [GO product roadmap](https://tryhamster.com/methods/go-product-roadmap). ODR is the practice that works with any of them: defining the outcomes, linking work to them and reviewing them.

## When to Use

- The team ships steadily but leadership asks why the numbers are not moving. Nobody linked the feature work to a metric, and an outcome roadmap makes that link the unit of planning.
- Planning cycles have become negotiations over which department's feature gets a slot. Moving the debate to shared outcomes and evidence gives the product manager a basis for saying no, which Pichler calls part of the job ([Product Roadmap Prioritisation](https://www.romanpichler.com/blog/product-roadmap-prioritisation/)).
- The company sets OKRs but the product roadmap is still a feature list in a separate document. ODR connects each roadmap item to a key result so the two plans stop drifting apart.
- A product area has several squads that need to coordinate without micromanagement. Each squad can own a different outcome and choose its own initiatives while the area lead tracks results.
- The organization is moving from project teams that receive requirements toward empowered product teams. An outcome roadmap gives those teams a format for showing what they are working toward.

## When Not to Use

- The work is fixed-scope with a contractual or regulatory deadline, such as a compliance change or a mandated migration. The solution is already decided, so a project plan serves better.
- The product has no instrumentation and building it would take months. Outcomes nobody can observe turn the roadmap back into a feature list with aspirational headings, so start with one measurable outcome or fix measurement first.
- Leadership evaluates the product team on features delivered and will not change that. Cagan's observation is that outcome techniques are a cultural mismatch with feature teams ([Team Objectives](https://www.svpg.com/team-objectives-overview/)), so the review model has to change first or in parallel.
- A very early product has no users and no baselines. Early work is about learning what to measure, and discovery methods such as the Lean Startup's build-measure-learn loop fit better until there is a baseline to improve.

## Skills

This method includes the following skills:

- [Defining Measurable Outcomes for Product Roadmaps](../../skills/defining-measurable-outcomes-for-roadmaps/SKILL.md): Turn business objectives into outcome statements with a metric, baseline, target and owner.
- [Setting Leading and Lagging Metrics for Roadmap Outcomes](../../skills/setting-leading-and-lagging-outcome-metrics/SKILL.md): Pair each lagging outcome with leading indicators the team can read early.
- [Mapping Product Initiatives to Business Outcomes](../../skills/mapping-initiatives-to-business-outcomes/SKILL.md): Link every initiative to the outcome it is meant to move, written as a testable hypothesis.
- [Prioritizing Outcomes Across Product Teams](../../skills/prioritizing-outcomes-across-product-teams/SKILL.md): Rank competing outcomes across teams with explicit criteria and capacity limits.
- [Building Outcome-Based Roadmap Presentations](../../skills/building-outcome-based-roadmap-presentations/SKILL.md): Present an outcome roadmap to executives, engineers and other stakeholders.
- [Running Outcome Review Ceremonies and Check-Ins](../../skills/running-outcome-review-ceremonies/SKILL.md): Run the recurring review where teams read the data and decide to continue, adjust or switch.
- [Transitioning from Feature to Outcome-Based Roadmaps](../../skills/transitioning-from-feature-to-outcome-roadmaps/SKILL.md): Convert an existing feature roadmap to outcomes without losing stakeholder trust.

## FAQ

**What is an outcome-driven roadmap in simple terms?**

It is a roadmap that lists the results a team is trying to achieve, such as a change in how often customers complete a key task, and treats features as bets on how to get there. If a bet does not move the result, the team tries another one while the target stays the same. ProdPad sums up the difference as asking "What do we want to achieve?" instead of "What should we build?" ([ProdPad](https://www.prodpad.com/blog/outcome-based-roadmaps/)). The roadmap still contains work items, but each one carries the outcome it is meant to move.

**Who created Outcome-Driven Roadmapping?**

No single creator is documented. The approach combines ideas from Josh Seiden's [Outcomes Over Output](https://openlibrary.org/works/OL28607044W), the roadmapping practice in [Product Roadmaps Relaunched](https://www.amazon.com/Product-Roadmaps-Relaunched-Direction-Uncertainty/dp/149197172X), Melissa Perri's work on the build trap, and Marty Cagan's writing on empowered teams. Roman Pichler, who designed the GO roadmap, wrote that the goal-oriented format had been around for years before him and that he did not know who first suggested it ([Pichler](https://www.romanpichler.com/blog/goal-oriented-agile-product-roadmap/)). The name ODR is a label for this combined practice.

**How is an outcome-based roadmap different from OKRs?**

OKRs are a goal format: a qualitative objective and a few quantitative key results. Andy Grove developed them at Intel, and John Doerr introduced them to Google's founders in 1999, according to [What Matters](https://www.whatmatters.com/stories/the-origin-story). Torres describes OKRs as one way of expressing an outcome, and notes that an OKR can represent either a business outcome or a product outcome ([OKRs vs. Outcomes](https://www.producttalk.org/2023/12/okrs-vs-outcomes/)). The roadmap adds the initiatives and their sequence under those goals. Pichler suggests treating each roadmap goal as the objective and its metrics as key results, so teams that use OKRs can run one plan instead of two ([Pichler](https://www.romanpichler.com/blog/okrs-and-product-roadmaps/)).

**Does an outcome roadmap still have dates?**

It can. Pichler recommends dates or narrow timeframes on internal roadmaps, where they help check that the plan is realistic, and broad timeframes such as "this year" on external ones ([Pichler](https://www.romanpichler.com/blog/should-product-roadmaps-have-dates/)). Cagan keeps date-based commitments for the cases that truly need them. What changes is that a date attaches to an outcome or a necessary deliverable, and most feature-level dates disappear.

**Why do outcome-driven roadmaps fail in practice?**

The most common failure is relabeling: the feature roadmap gets outcome headings, but nobody tracks the metrics or changes course when an initiative fails. A second is assigning outcomes the team cannot influence, such as company revenue, instead of a product outcome it can move. A third is performance pressure; Torres warns that when reviews are tied to hitting outcomes, teams sandbag targets and disguise outputs as outcomes, and she recommends starting with a learning goal before a performance goal ([Torres](https://www.producttalk.org/2021/05/outcomes-vs-outputs/)).

**How does ODR work with sprints and agile delivery?**

The two operate at different levels. The outcome roadmap says which result the team is pursuing and which initiative it is trying, while sprint planning or a kanban board pulls concrete work from that initiative. Outcome reviews happen less often than sprint reviews and ask a different question: did the work move the indicator? Keep the two artifacts linked so that a change of initiative at the outcome level shows up in the backlog.

**How do you get executive buy-in for an outcome roadmap?**

Start small. Pichler's approach is to set a single outcome-based goal for the next three months, use it to decide which features to build, then review with stakeholders before expanding to a six to twelve month outcome roadmap ([Pichler](https://www.romanpichler.com/blog/how-to-get-started-with-outcome-based-product-roadmaps/)). Cagan suggests teams grade the past year of roadmap items on how many actually met their business objectives ([Cagan](https://www.svpg.com/the-alternative-to-roadmaps/)). That review often shows executives why a feature list tells them little about impact.

## Sources

- [Josh Seiden: Outcomes Over Output (Open Library)](https://openlibrary.org/works/OL28607044W)
- [Lombardo, McCarthy, Ryan and Connors: Product Roadmaps Relaunched](https://www.amazon.com/Product-Roadmaps-Relaunched-Direction-Uncertainty/dp/149197172X)
- [Melissa Perri: Escaping the Build Trap](https://www.amazon.com/Escaping-Build-Trap-Effective-Management/dp/149197379X)
- [Melissa Perri: book page](https://melissaperri.com/book)
- [Teresa Torres: Outcomes vs. Outputs](https://www.producttalk.org/2021/05/outcomes-vs-outputs/)
- [Hope Gurion: Product Outcomes, Not Business Outcomes](https://www.producttalk.org/2020/02/product-outcomes/)
- [Teresa Torres: OKRs vs. Outcomes](https://www.producttalk.org/2023/12/okrs-vs-outcomes/)
- [Teresa Torres: Opportunity Solution Trees](https://www.producttalk.org/opportunity-solution-trees/)
- [Marty Cagan: The Alternative to Roadmaps](https://www.svpg.com/the-alternative-to-roadmaps/)
- [Marty Cagan: Team Objectives Overview](https://www.svpg.com/team-objectives-overview/)
- [ProdPad: Outcome-based roadmaps](https://www.prodpad.com/blog/outcome-based-roadmaps/)
- [Janna Bastow: Why I invented the Now-Next-Later roadmap](https://www.prodpad.com/blog/invented-now-next-later-roadmap/)
- [Roman Pichler: The GO Product Roadmap](https://www.romanpichler.com/blog/goal-oriented-agile-product-roadmap/)
- [Roman Pichler: Get the Outcomes on Your Product Roadmap Right](https://www.romanpichler.com/blog/get-the-outcomes-on-your-product-roadmap-right/)
- [Roman Pichler: How to Get Started with Outcome-Based Product Roadmaps](https://www.romanpichler.com/blog/how-to-get-started-with-outcome-based-product-roadmaps/)
- [Roman Pichler: OKRs and Product Roadmaps](https://www.romanpichler.com/blog/okrs-and-product-roadmaps/)
- [Roman Pichler: Should Product Roadmaps Have Dates?](https://www.romanpichler.com/blog/should-product-roadmaps-have-dates/)
- [Roman Pichler: Product Roadmap Prioritisation](https://www.romanpichler.com/blog/product-roadmap-prioritisation/)
- [Itamar Gilad: Planning With Outcome Roadmaps](https://itamargilad.com/outcome-roadmaps/)
- [What Matters: The origin story of OKRs](https://www.whatmatters.com/stories/the-origin-story)
- [Intercom: RICE prioritization](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
