---
name: "jobs-to-be-done-jtbd-framework"
category: "Product"
description: "The Jobs-to-be-Done (JTBD) Framework: define the job customers hire a product for, map it, score unmet outcomes, and build strategy on them."
metadata:
  datePublished: "2026-06-01"
  dateModified: "2026-09-24"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Jobs-to-be-Done (JTBD) Framework: A Guide for Product Teams

> Created by **Tony Ulwick** - [https://strategyn.com/jobs-to-be-done/](https://strategyn.com/jobs-to-be-done/)

## Overview

The Jobs-to-be-Done (JTBD) Framework treats the customer's goal as the thing to study, and the product as one of several ways to reach it. People "hire" a product to get a job done, and they fire it when something else does that job better. A product team that understands the job can see why customers buy, why they leave, and which competitors matter, including ones outside its category. The framework replaces "what should we build next" with a narrower and more answerable question: what is the customer trying to get done, and where do today's solutions fall short?

Two lineages carry the name. The first is Tony Ulwick's Outcome-Driven Innovation (ODI). Ulwick began applying Six Sigma thinking to the innovation process in 1990 and named the method ODI in 1999, according to [Strategyn's JTBD page](https://strategyn.com/jobs-to-be-done/). He founded Strategyn in 1991 after starting his innovation work at IBM, according to [his Wikipedia biography](https://en.wikipedia.org/wiki/Anthony_Ulwick). His January 2002 Harvard Business Review article, [Turn Customer Input into Innovation](https://hbr.org/2002/01/turn-customer-input-into-innovation), argued that the solutions customers ask for are a poor guide to what they need, and that the outcomes they use to judge a job are the right input.

The second lineage runs through Clayton Christensen. By Ulwick's account, he introduced ODI to Christensen in late 1999, and Christensen's book The Innovator's Solution (2003) discussed jobs and cited Ulwick, as summarized on [the Outcome-Driven Innovation Wikipedia page](https://en.wikipedia.org/wiki/Outcome-Driven_Innovation). Christensen made the idea famous. In the story HBS Working Knowledge retold in 2011, a researcher found that about 40 percent of a fast-food chain's milkshakes were bought in the morning by commuters, who hired the shake to fill a dull drive and hold off hunger until midmorning ([Clay Christensen's Milkshake Marketing](https://www.library.hbs.edu/working-knowledge/clay-christensens-milkshake-marketing)). In September 2016, Christensen, Taddy Hall, Karen Dillon and David Duncan set out the theory for managers in [Know Your Customers' Jobs to Be Done](https://hbr.org/2016/09/know-your-customers-jobs-to-be-done). Bob Moesta and Chris Spiek built the interviewing practice that goes with this school: the switch interview, the purchase timeline and the four forces of progress ([jobstobedone.org](https://jobstobedone.org/the-four-forces/)).

The schools agree that the job, not the product or the customer's demographics, is the unit of analysis. They disagree about what a job is and how to study it. Ulwick treats the core functional job as a process that can be broken into steps, each with measurable desired outcomes that customers rate in a survey. The Christensen and Moesta school defines a job as the progress a person seeks in a particular circumstance, with functional, social and emotional dimensions ([Christensen Institute](https://www.christenseninstitute.org/theory/jobs-to-be-done/)), and studies it through the story of a real purchase. The [GoPractice comparison of the schools](https://gopractice.io/product/jobs-to-be-done-the-theory-and-the-frameworks/) warns that practitioners use the same terms with different definitions, so a team should say which one it means.

This method follows Ulwick's process because it produces the artifacts a product team can prioritize with: a job statement, a job map, a set of desired outcome statements, opportunity scores and needs-based segments. It uses Moesta-style switch interviews for the qualitative work, because they are the most reliable way to hear how customers describe the job and what made them change solutions. The two fit together. Interviews tell you what the job and its outcomes are. The survey tells you which outcomes are important and poorly served, and for which group of customers.

The framework has costs. A full ODI study needs a survey with enough respondents to score and cluster dozens of outcome statements, which a young product with few customers cannot field. The opportunity score itself has critics: Braden Buchanan's [critique of the quantification process](https://bradenbuchanan.substack.com/p/outcome-driven-innovation-a-critique) argues that the score mostly reproduces the importance ranking and that asking respondents to rate a long list on two scales strains the data. Read the scores as evidence to weigh, not as a verdict.

JTBD earns its cost when a team keeps shipping requested features that do not change adoption, when it is choosing between segments or adjacent markets, or when it needs a shared definition of the customer that engineering, design, marketing and sales will all accept. Teams that keep their job maps and outcome statements in Hamster can point agents and new teammates at the same definitions instead of re-deriving them each quarter.

## Two Schools of JTBD

| Question | Ulwick: Outcome-Driven Innovation | Christensen and Moesta: jobs theory |
|----------|-----------------------------------|-------------------------------------|
| What is a job? | A functional process with steps and measurable outcomes ([Strategyn template](https://strategyn.com/jobs-to-be-done-template/)) | Progress a person seeks in a circumstance ([Christensen Institute](https://www.christenseninstitute.org/theory/jobs-to-be-done/)) |
| Main research tool | Outcome survey scored for importance and satisfaction ([Strategyn](https://strategyn.com/outcome-driven-innovation/market-opportunity/)) | Switch interview along a purchase timeline ([jobstobedone.org](https://jobstobedone.org/the-timeline/)) |
| What drives the decision? | Unmet desired outcomes | Push and pull against anxiety and habit ([four forces](https://jobstobedone.org/the-four-forces/)) |
| Typical output | Job map, outcome list, opportunity landscape, segments | Timelines, forces diagrams, switching triggers |
| Best suited to | Prioritizing a roadmap across many needs | Positioning, marketing and understanding churn |

## Core Principles

### The Job Is the Unit of Analysis

The job the customer is trying to get done is what you study, before the product, the persona or the feature request. Define it in the customer's terms and keep solutions out of it. Strategyn's [needs framework](https://strategyn.com/customer-needs-through-a-jobs-to-be-done-lens/) requires needs to be "stable over time and devoid of solutions" for the same reason. A team that skips this and starts from features ends up optimizing a solution for a problem nobody has written down.

### Jobs Outlast Solutions

People have been getting from one place to another, storing food and keeping records for far longer than any current product has existed. Solutions come and go while the job stays put. Anchoring strategy to the job lets a team see competitors that do not look like competitors: in the milkshake case, the Christensen Institute notes that the morning shake competed with bananas and bagels, not with other shakes ([Christensen Institute](https://www.christenseninstitute.org/theory/jobs-to-be-done/)). The cost is abstraction, since a job-level view feels broad until it is decomposed.

### Needs Are Measurable Outcomes

In ODI a need is a metric the customer uses to judge how well a job step gets done, written as direction of improvement, metric, object of control and contextual clarifier. Strategyn's example is "minimize the time it takes to identify the correct drill bit size for the material being drilled" ([JTBD template](https://strategyn.com/jobs-to-be-done-template/)). The strict syntax exists because wording differences between statements change how customers rate them ([ODI whitepaper](https://innovationroundtable.com/summit/wp-content/uploads/2014/05/Strategyn_what_is_Outcome_Driven_Innovation.pdf)). A vague need such as "make it easier" cannot be rated, so it cannot be prioritized.

### Competition Is Set by the Job

Anything a customer hires to get the job done is a competitor: a spreadsheet, a consultant, a colleague down the hall or doing nothing. Mapping that set shows threats a category analysis misses and gaps no current product fills. It also makes positioning harder, because the comparison is no longer a feature checklist against the usual rivals. Moesta's forces model adds that the status quo competes through habit and through the customer's anxiety about switching ([four forces](https://jobstobedone.org/the-four-forces/)).

### Segment by Unmet Need

Two customers with the same title can struggle with different parts of a job, and two customers with nothing in common demographically can struggle with the same part. Strategyn argues that demographic, psychographic and behavioral data "will nearly always fail to explain why customers have different unmet needs," and segments on the outcome ratings instead ([outcome-based segmentation](https://strategyn.com/outcome-based-segmentation/)). Needs-based segments give each group a coherent set of problems to solve. The price is a quantitative survey large enough to cluster.

### Keep Functional, Emotional and Social Jobs Apart

Every job has a functional side and an emotional and social side ([Christensen Institute](https://www.christenseninstitute.org/theory/jobs-to-be-done/)). A product manager preparing a board update has to communicate priorities clearly, wants to feel confident in the story and wants to be seen as credible. These call for different kinds of solutions: a feature fixes a functional gap, while reassurance, proof and social cues address the others. Keep them in separate lists so a team does not answer a functional gap with messaging, or an anxiety with a feature.

### Opportunity Lives Where Importance Exceeds Satisfaction

An outcome that customers rate as important and poorly satisfied is an opportunity. Ulwick's algorithm is importance + max(importance - satisfaction, 0), which he first published in the January 2002 HBR article ([ODI whitepaper](https://innovationroundtable.com/summit/wp-content/uploads/2014/05/Strategyn_what_is_Outcome_Driven_Innovation.pdf)). Scoring counters the pull of the loudest customer and the habit of polishing features that already work. It needs survey data, not interviews alone.

## Steps

1. **Define the core functional job**
   Write the job the customer is trying to get done as verb, object and contextual clarifier, the format Strategyn illustrates with "listen to music while commuting to work" ([JTBD template](https://strategyn.com/jobs-to-be-done-template/)). Choose the job executor first, since the person doing the job may differ from the buyer. Strip out every product and technology word, because a job statement that names a solution cannot reveal a better one. Test the altitude: a job so broad it covers most of life gives no guidance, and one so narrow it is a single step of a larger job hides the rest of the process. The output is one agreed job statement with its executor. See [Defining the Customer's Core Functional Job](../../skills/defining-core-functional-jobs/SKILL.md).

2. **Map the job**
   Break the job into the steps the executor goes through to get it done. Ulwick's universal job map has eight stages: define, locate, prepare, confirm, execute, monitor, modify and conclude ([HBR job map article](https://hbr.org/2008/05/the-customer-centered-innovation-map)). Use them as a checklist rather than a template, since not every job uses every stage. Describe what the executor is trying to accomplish at each step, not the actions they take in today's tools, because a job map is a needs view rather than a process map ([ODI whitepaper](https://innovationroundtable.com/summit/wp-content/uploads/2014/05/Strategyn_what_is_Outcome_Driven_Innovation.pdf)). See [Creating Job Maps](../../skills/creating-job-maps/SKILL.md).

3. **Interview customers who recently got the job done or switched**
   Talk to people who recently hired or fired a solution for this job, and reconstruct what happened from the first thought of changing to the first use of the new solution ([the JTBD timeline](https://jobstobedone.org/the-timeline/)). Ask about specific moments and actions rather than opinions, since stated preferences drift away from what people did. Listen for the push, pull, anxiety and habit behind the change and for the words customers use to describe success at each step of the map. Update the job statement and the map where the interviews contradict them. See [Conducting JTBD Customer Interviews](../../skills/conducting-jtbd-customer-interviews/SKILL.md).

4. **Write desired outcome statements for each step**
   Turn what you heard into outcome statements: direction of improvement, metric, object of control and contextual clarifier. Strategyn's guidance is to capture 5 to 10 outcomes per job step and 100 or more in total, with more from related, emotional and consumption jobs ([needs framework](https://strategyn.com/customer-needs-through-a-jobs-to-be-done-lens/)). Keep each statement to one metric, solution-free and in words a customer would recognize. Remove duplicates across steps before anything goes into a survey. See [Writing Desired Outcome Statements](../../skills/writing-desired-outcome-statements/SKILL.md).

5. **Survey and score the outcomes**
   Ask a representative sample of job executors to rate each outcome for importance and for satisfaction with their current solution. In the common ODI convention, each score is the share of respondents answering 4 or 5 on a 1-to-5 scale, expressed on a scale of ten ([Product Compass masterclass with Ulwick](https://www.productcompass.pm/p/jobs-to-be-done-masterclass-with)). Apply the opportunity algorithm and plot importance against satisfaction to see which outcomes are underserved and which are overserved. Pair the numbers with interview evidence before acting on them. See [Identifying Underserved Outcome Opportunities](../../skills/identifying-underserved-outcome-opportunities/SKILL.md).

6. **Segment by unmet need**
   Cluster respondents by their pattern of outcome ratings, then profile each cluster with the demographic and firmographic questions you added to the survey. Strategyn describes factor analysis followed by cluster analysis for this step ([outcome-based segmentation](https://strategyn.com/outcome-based-segmentation/)). Name each segment after the outcomes it struggles with, not after a job title. Check that each segment is large enough to matter and that its members can be reached. See [Segmenting Customers by Unmet Needs](../../skills/segmenting-customers-by-unmet-needs/SKILL.md).

7. **Turn the findings into strategy and roadmap decisions**
   Pick a target segment and the underserved outcomes you will address for it, then decide how you will compete. Ulwick's growth strategy matrix names five options, from a differentiated offer that does the job better at a higher price to a disruptive one that does it adequately for less ([Strategyn growth strategies](https://strategyn.com/5-business-growth-strategies-jobs-to-be-done/)). Group related outcomes into themes, generate concepts that address several at once and sequence them on the roadmap. Carry the outcome statements into the success metrics, so each release is judged on whether the outcome it targeted moved. See [Applying JTBD Insights to Product Strategy](../../skills/applying-jtbd-to-product-strategy/SKILL.md).

## When to Use

- A backlog of requests from different customer types with no shared way to compare them. Outcome statements put every request on the same footing: which outcome it serves and how underserved that outcome is.
- Growth has stalled after early product-market fit and the team suspects it is improving things customers already find good enough. Opportunity scoring shows whether the roadmap targets underserved or overserved outcomes.
- Entering an adjacent market or planning a new product. A job map and outcome survey describe what customers are trying to get done there before anyone copies a competitor's feature list.
- Churn or stalled adoption among customers who asked for the features that shipped. Switch interviews explain what pushed customers away and what kept prospects from switching.
- Engineering, design, marketing and sales each describe the customer differently. A written job statement and outcome list give every function the same definition to argue from.
- Competitors keep appearing from outside the category. Defining competition by the job surfaces the alternatives customers actually weigh.

## When Not to Use

- A product with a handful of customers still searching for a repeatable use. There are not enough job executors to survey, so rapid experiments and informal interviews teach more per week.
- A job fully specified by an outside authority, such as a regulatory filing whose steps and pass criteria are set by the rule. Discovery adds little when the outcomes are already written down.
- Work where the need is known and the question is execution quality, such as performance, reliability or interface polish. Usability testing and engineering metrics answer those questions more directly.
- A decision due in days on a need that earlier research already established. Rerunning discovery delays the build without changing the answer.

## Skills

This method includes the following skills:

- [Defining the Customer's Core Functional Job](../../skills/defining-core-functional-jobs/SKILL.md): Write one solution-free job statement, at the right altitude, for a named job executor.
- [Creating Job Maps](../../skills/creating-job-maps/SKILL.md): Break the core job into the steps the executor goes through, using the universal job map as a checklist.
- [Conducting JTBD Customer Interviews](../../skills/conducting-jtbd-customer-interviews/SKILL.md): Run switch interviews that reconstruct a real purchase and surface the forces behind it.
- [Writing Desired Outcome Statements](../../skills/writing-desired-outcome-statements/SKILL.md): Turn interview evidence into measurable, solution-free outcome statements for each job step.
- [Identifying Underserved Outcome Opportunities](../../skills/identifying-underserved-outcome-opportunities/SKILL.md): Survey importance and satisfaction, compute opportunity scores and read the opportunity landscape.
- [Segmenting Customers by Unmet Needs](../../skills/segmenting-customers-by-unmet-needs/SKILL.md): Cluster respondents by their unmet outcomes and profile the segments that result.
- [Applying JTBD Insights to Product Strategy](../../skills/applying-jtbd-to-product-strategy/SKILL.md): Choose a segment, a growth strategy and a roadmap from the outcome evidence.

## FAQ

**What is the Jobs-to-be-Done framework in plain terms?**

It is a way to study customers through the job they are trying to get done rather than through the product they use or the group they belong to. The premise is that people hire products to make progress and switch when something else does the job better. Ulwick's version breaks the job into steps and measurable outcomes, surveys customers on them and ranks the gaps. The result is a list of unmet needs ranked by opportunity that a team can plan against.

**How do Ulwick's ODI and Christensen's jobs theory differ?**

ODI treats the job as a functional process and measures it: job map, desired outcome statements, an importance and satisfaction survey and the opportunity algorithm ([Strategyn](https://strategyn.com/jobs-to-be-done/)). Christensen's school defines a job as progress in a particular circumstance, with emotional and social dimensions alongside the functional one ([Christensen Institute](https://www.christenseninstitute.org/theory/jobs-to-be-done/)). Its research tool is the switch interview Moesta and Spiek developed, which reconstructs a real purchase and the forces behind it. Many teams use switch interviews to learn the job and ODI surveys to rank its outcomes, which is the combination this method follows.

**Is the milkshake story evidence that JTBD works?**

It is a teaching story, told by Christensen and retold by HBS Working Knowledge in 2011 ([Milkshake Marketing](https://www.library.hbs.edu/working-knowledge/clay-christensens-milkshake-marketing)). It shows how one product can be hired for two jobs, a morning commute and an afternoon treat for a child, with different competitors for each. The article reports the observation and the company's response, but not a measured sales result. Use it to explain the idea, not to promise an outcome.

**How many interviews and survey responses does a JTBD study need?**

Interviews stop when new conversations stop changing the job map and outcome list, which a team can see in its notes. The survey has to support the analysis: Strategyn calls for "a statistically valid sample" of job executors before clustering ([outcome-based segmentation](https://strategyn.com/outcome-based-segmentation/)). A sample too small to split into segments can still rank outcomes for the market as a whole. Decide which analysis you need first, and size the survey for it.

**Are opportunity scores reliable?**

They are a structured way to combine importance and satisfaction, and their weaknesses are documented. Buchanan's [critique](https://bradenbuchanan.substack.com/p/outcome-driven-innovation-a-critique) argues that the score tracks the importance ranking closely, ignores satisfaction whenever it exceeds importance and asks a lot of respondents who rate a long list twice. Treat a high score as a reason to look closer, and confirm the top outcomes against interview evidence and usage data before committing a roadmap to them.

**How does JTBD fit with OKRs, roadmaps and sprints?**

JTBD sits upstream of them. An underserved outcome becomes a key result, for example reducing the time it takes a customer to reconcile two data sources, and roadmap items are the concepts meant to move it. Sprints then deliver those items. The outcome statement gives each level the same definition of success, which keeps the roadmap tied to the customer's job rather than to the feature list.

**Does JTBD work for internal tools and platform teams?**

Yes. Internal users have jobs too: a platform team's executors are the engineers who build on the platform, and their core job might be to release a change to production safely. The same steps apply, with colleagues in place of customers. Recruiting is easier, but a small population limits the survey, so internal studies often lean more on interviews and on usage data.

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
