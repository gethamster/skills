---
name: "rice-framework"
category: "Product"
description: "The RICE framework scores product ideas on Reach, Impact, Confidence and Effort, giving a team one comparable number to rank a roadmap backlog."
metadata:
  datePublished: "2026-04-18"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# RICE Framework: Reach, Impact, Confidence, Effort

> Created by **Sean McBride, Intercom** - [https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)

## Overview

The RICE framework is a scoring system for deciding which product ideas to work on first. Each idea gets four estimates: Reach, Impact, Confidence and Effort. The first three are multiplied together and the product is divided by Effort, which gives a single score a team can sort by. Sean McBride, whose Intercom author page lists him as a former product manager there, described it in [RICE: Simple prioritization for product managers](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/), a post on the Intercom blog. The current page is dated January 5, 2018, but a [Wayback Machine copy from March 2016](https://web.archive.org/web/20160317021349/https://blog.intercom.io/rice-simple-prioritization-for-product-managers/) shows the post was already live on the blog then. He writes that his team began developing the system "last August" and built it "from first principles" after struggling to find an existing scoring system that let them compare different ideas consistently.

McBride opens with four reasons prioritization goes wrong, and each RICE factor answers one of them. People like pet ideas they would use themselves, so Reach asks how many people a project will actually affect. People are drawn to clever ideas, so Impact asks how much the project moves the goal for each person. People get excited about new ideas, so Confidence discounts estimates that lack support. People discount the extra work one project needs over another, so Effort divides the whole score. The factors force each of those judgments into the open, where a team can argue about them one at a time.

Each factor has a defined unit. Reach is a count of people or events in a fixed time period, such as customers per quarter or transactions per month, taken from product metrics wherever possible. Impact uses a multiple-choice scale in [McBride's post](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/): 3 for "massive impact", 2 for "high", 1 for "medium", 0.5 for "low", and 0.25 for "minimal". Confidence is a percentage on [a second scale from the same post](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/): 100% is "high confidence", 80% is "medium", 50% is "low", and anything below that is "total moonshot". Effort is the number of person-months the project needs from product, design and engineering together.

The score is (Reach x Impact x Confidence) / Effort, and McBride describes what it measures as "total impact per time worked". Once every idea is scored, the list is sorted and then reviewed. If a score looks too high or too low, the team either revisits the estimates or accepts that its instinct may be wrong. McBride is explicit that the scores "shouldn't be used as a hard and fast rule": a project may have to come first because another depends on it, or because a feature is "table stakes" for selling to certain customers. The value of a scoring system, in his account, is that it makes those out-of-order choices visible as deliberate trade-offs.

RICE spread well beyond Intercom. [ProductPlan's glossary entry](https://www.productplan.com/glossary/rice-scoring-model/) retells the origin: Intercom's product team knew the common prioritization models but could not find one that handled its own mix of competing ideas, so it built one. Nielsen Norman Group includes it in [5 Prioritization Methods in UX Roadmapping](https://www.nngroup.com/articles/prioritization-methods/) and says it works well for more technical organizations, for example where stakeholders are comfortable with equations or spreadsheets, and when many items need prioritizing. [Atlassian's overview of prioritization frameworks](https://www.atlassian.com/agile/product-management/prioritization-framework) lists it first among common frameworks, and notes both its strength for justifying decisions to stakeholders and its main costs: it can be time-consuming and cumbersome to apply when many items need data from several sources, and the way each factor is judged can change, which makes scores subjective and inconsistent.

That last criticism points at the method's real weak spot, which is the quality of the estimates. The [planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy), first proposed by Daniel Kahneman and Amos Tversky, describes how people underestimate the time their own tasks will take. Itamar Gilad argues in [Why the Impact/Effort Prioritization Matrix Doesn't Work](https://itamargilad.com/why-impact-effort-prioritization-doesnt-work/) that teams are poor at predicting both effort and impact. RICE does not remove that problem. Its Confidence factor is the place where a team admits it, and the steps and skills below are mostly about keeping each estimate honest enough that the ranking means something.

## Core Principles

### Count People in a Fixed Window

Reach is a count of people or events within a defined period, and every idea in a scoring round uses the same period. McBride's team asked how many customers a project would affect in a single quarter ([Intercom](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)). A fixed window keeps a one-time change to existing customers comparable with a change that touches every new signup. It also blocks the pull toward features the team would use itself, because the count comes from product metrics rather than from taste.

### Score Impact per Person Against One Goal

Impact estimates the effect on an individual person who encounters the change, measured against the goal the team is pursuing. McBride's team framed it as how much a project would increase conversion rate when a customer meets it, and he notes other teams might use a goal like adoption or delight. The fixed multiple-choice scale exists because impact is hard to measure precisely, and a coarse scale is better than an unexamined gut feeling. Keeping Reach and Impact separate stops a small improvement for many people from being scored as a large one.

### Discount What You Cannot Support

Confidence is how much evidence stands behind the other three estimates. In the Intercom post, a project with quantitative reach data, user research for impact and an engineering effort estimate [gets 100%](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/), while one where reach, impact and effort are all in doubt [gets 50%](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/). The fixed steps are there to avoid decision paralysis over exact percentages. The principle is to be honest about support, which is the one input a team is most tempted to inflate.

### Charge the Whole Team's Time

Effort is the total time a project needs from everyone who works on it, expressed in person-months. McBride counts product, design and engineering, and Nielsen Norman Group's version adds up time across roles in the same way. Effort sits in the denominator because more work is a cost, so an idea that looks valuable but needs a long build falls down the list. Leaving a role out makes that idea look cheaper than it is.

### Keep Estimates Rough

RICE ranks ideas relative to each other, so the estimates only need to be good enough to order the list. McBride keeps effort to whole person-months, using [0.5 for anything well under a month](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/), and picks impact and confidence from short fixed menus. Rough, consistent inputs are quicker to produce and easier to challenge than precise-looking ones. Spending days refining a single estimate usually means the idea needs research before it needs a score.

### Treat the Ranking as Input to a Decision

The sorted list is where the conversation starts. Dependencies, commitments to customers and strategic bets can all justify working on a lower-scored project first, and McBride says that is fine. What the score adds is a record: when a team goes out of order, it knows it is doing so and can explain why. A ranking that nobody is allowed to override tends to get gamed through inflated inputs.

## Steps

1. **Set the goal and the Reach window**
   Decide which goal Impact will be measured against, such as activation, conversion or retention. Pick one time window for Reach, such as a quarter, and apply it to every idea in the round. Write both down at the top of the scoring sheet. If the team is pursuing several goals at once, score each goal's candidates in separate rounds, because impact scores against different goals do not compare. This step takes minutes and prevents most later arguments.

2. **List the candidates with a one-line scope**
   Gather the ideas to be compared and give each a sentence that says what will be built and for whom. Scope matters because Reach, Impact and Effort all depend on it, and two people scoring different versions of the same idea will disagree for the wrong reason. Merge duplicates and split ideas that are really several projects. Leave out work that is already committed, since scoring it only adds noise.

3. **Estimate Reach from data**
   For each idea, count the people or events it will touch in the window, using analytics, funnel data or customer counts. McBride's first example multiplies monthly funnel entrants by the share who choose an option and by the three months in a quarter ([Intercom](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)). Record where each number came from. When the only source is a proxy such as support tickets, note it, because it should lower Confidence later.

4. **Score Impact on the fixed scale**
   Choose an Impact value for each idea from the multiple-choice scale, judged per person against the goal from step one. Score a few clear cases first so the team agrees what a high rating looks like in its product. Ask for the reasoning behind each rating in a sentence. When the team splits between two adjacent values, record the disagreement, since it belongs in Confidence.

5. **Assign Confidence from the evidence**
   Look at what supports the Reach, Impact and Effort estimates and pick the matching Confidence level. Quantitative metrics, user research and an engineering estimate justify the top band. Data for some factors and a guess for others justifies the middle one. When most of the estimate is hope, the idea belongs in the lowest band or below it, which McBride calls a moonshot.

6. **Estimate Effort in person-months**
   Ask the people who will do the work for their share of it, in product, design, engineering and any other role the idea needs. Add the shares into one person-month total and keep it rough. Include the time for rollout and follow-up work the idea requires. If the estimate is very large, consider splitting the idea before comparing it with smaller ones.

7. **Calculate, sort and sanity-check**
   Compute (Reach x Impact x Confidence) / Effort for each idea and sort from highest to lowest. Read the list from top to bottom and flag any position that surprises the team. For each surprise, find which input drives it and either fix that estimate or accept the result. Do not change inputs only to move an idea to a preferred position.

8. **Decide and record the exceptions**
   Pick the work for the period from the top of the list. Where the team chooses a lower-ranked item, such as a dependency or a feature customers treat as table stakes, write down the reason next to it. Keep the sheet, because comparing estimates with actual results after launch is how the team gets better at estimating. Rescore when the window ends or when new evidence changes a major input.

## RICE Compared With Other Scoring Models

RICE is one of several models that weigh value against cost. The main differences are how many factors each uses and whether the inputs are absolute counts or relative ratings.

| Model | How the score is formed | Main difference from RICE |
|-------|------------------------|---------------------------|
| RICE ([Intercom](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)) | Reach x Impact x Confidence, divided by Effort in person-months | The reference point: a reach count per period and a fixed impact scale |
| ICE ([ProductPlan](https://www.productplan.com/glossary/ice-scoring-model/)) | Impact x Confidence x Ease, each rated 1 to 10 | No Reach factor, relative ratings, created by Sean Ellis for growth experiments |
| WSJF ([SAFe](https://framework.scaledagile.com/wsjf)) | Relative cost of delay divided by relative job duration | Adds time criticality and risk reduction, uses relative estimates |
| Impact/effort matrix ([Gilad](https://itamargilad.com/why-impact-effort-prioritization-doesnt-work/)) | Two ratings plotted into four quadrants | No single score and no confidence factor |

Choose RICE when the audience can be counted and differs a lot between ideas, because that is the factor the others lack. ICE is quicker when the ideas are small experiments. WSJF fits when the cost of waiting varies between items, and an impact/effort matrix is enough for a quick first pass over a short list.

## When to Use

- A backlog holds many candidate ideas that serve the same goal, and the team needs a consistent way to compare them. Nielsen Norman Group notes RICE works well when there are many items to prioritize.
- The ideas differ a lot in how many people they touch, for example a small fix for every user against a large feature for one segment. Reach is the factor that separates them.
- Stakeholders keep pushing favorite ideas, and the product manager needs to show the reasoning behind a ranking rather than only the ranking.
- The team has product analytics that can supply Reach counts, so at least one factor rests on measurement.
- Engineering, design and product can each give a rough estimate of their share of the work, which makes Effort meaningful.

## When Not to Use

- The work is mandatory, such as a legal or security obligation with a deadline. It will be done whatever it scores, so scoring it only distorts the rest of the list.
- The candidates serve different goals, such as revenue for one and retention for another. Impact is judged against one goal, so scores across goals are not comparable.
- Almost nothing about the ideas has been tested and every Confidence value would sit at the bottom. Research the leading ideas first and score them afterward.
- The backlog is only a handful of items that one conversation can rank. The overhead of estimating four factors for each is not worth it.

## Skills

This method includes the following skills:

- [Calculating RICE Scores for a Product Backlog](../../skills/calculating-rice-scores/SKILL.md): Run a full scoring round and turn the four estimates into a ranked, checked backlog.
- [Estimating Reach for RICE Prioritization](../../skills/estimating-reach/SKILL.md): Count the people or events an idea will touch in a fixed window, from data or declared proxies.
- [Calibrating Confidence in RICE Scores](../../skills/calibrating-confidence/SKILL.md): Tie each Confidence value to the written evidence behind the reach, impact and effort estimates.
- [Mapping Effort to Person-Months for RICE](../../skills/mapping-effort-to-person-months/SKILL.md): Convert role-by-role work estimates into a consistent person-month denominator.

## FAQ

**What does RICE stand for?**

RICE stands for Reach, Impact, Confidence and Effort. Reach is how many people an idea affects in a period, Impact is how much it affects each of them, Confidence is how much support the estimates have, and Effort is the person-months it takes. The acronym comes from [Sean McBride's Intercom post](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/), which calls them the four factors his team used to evaluate each project idea.

**How do you calculate a RICE score?**

Multiply Reach by Impact and by Confidence, then divide by Effort. Take the first example project in [the Intercom post](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/): a reach of 450 customers per quarter, impact 3, confidence 100% and effort of 2 person-months. That scores 450 x 3 x 1.0 / 2, which is 675. The [post's third project](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/), with reach 800, impact 2, confidence 50% and effort of 1 person-month, scores 800, so the smaller build ranks first.

**Who created the RICE framework?**

Sean McBride published it on the Intercom blog, and his author page lists him as a [former product manager at Intercom](https://www.intercom.com/blog/author/smcbride/). He writes that his team developed the scoring system itself after testing and iteration. Secondary sources such as ProductPlan and Nielsen Norman Group credit Intercom as the company where it was developed.

**What is the difference between RICE and ICE?**

ICE scores Impact, Confidence and Ease, each on a 1-10 scale, and multiplies them. [ProductPlan](https://www.productplan.com/glossary/ice-scoring-model/) credits it to Sean Ellis, who designed it for prioritizing growth experiments. RICE adds Reach as a separate count and replaces Ease with Effort in person-months as the divisor. The practical difference is that RICE rewards ideas that touch more people, while ICE folds that into the Impact rating.

**What if an idea's confidence falls below the scale?**

McBride's scale in [the Intercom post](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/) stops at 50% and calls anything below it a "total moonshot". ProductPlan's summary suggests treating such an idea as a moonshot and assuming priorities lie elsewhere. In practice, that usually means spending a small amount of effort on research or a test to raise confidence, then scoring the idea again.

**Should a team always build in RICE score order?**

No. McBride writes that there are many reasons to work on a lower-scoring project first, such as a dependency or a feature that is table stakes for some customers. The score makes those choices explicit instead of hiding them. Record the reason for each exception so the next scoring round can learn from it.

**Can Reach count events instead of people?**

Yes. The Intercom post defines Reach as people or events per time period and gives "transactions per month" as an example. Use events when the idea changes something that happens repeatedly, such as a checkout or an export. Keep the unit the same for every idea in a round, or the Reach values will not compare.

## Sources

- [Sean McBride, Intercom: RICE: Simple prioritization for product managers](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)
- [Intercom Blog: Sean McBride author page](https://www.intercom.com/blog/author/smcbride/)
- [Wayback Machine: the RICE post on blog.intercom.io, March 2016](https://web.archive.org/web/20160317021349/https://blog.intercom.io/rice-simple-prioritization-for-product-managers/)
- [ProductPlan: RICE Scoring Model](https://www.productplan.com/glossary/rice-scoring-model/)
- [ProductPlan: ICE Scoring Model](https://www.productplan.com/glossary/ice-scoring-model/)
- [Nielsen Norman Group: 5 Prioritization Methods in UX Roadmapping](https://www.nngroup.com/articles/prioritization-methods/)
- [Atlassian: Product prioritization frameworks](https://www.atlassian.com/agile/product-management/prioritization-framework)
- [Scaled Agile Framework: Weighted Shortest Job First](https://framework.scaledagile.com/wsjf)
- [Itamar Gilad: Why the Impact/Effort Prioritization Matrix Doesn't Work](https://itamargilad.com/why-impact-effort-prioritization-doesnt-work/)
- [Wikipedia: Planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
