# Jobs-to-be-Done (JTBD) Framework: A Product Manager's Complete Guide

> Created by **Tony Ulwick** — [https://strategyn.com/jobs-to-be-done/](https://strategyn.com/jobs-to-be-done/)

## Overview

Most product teams organize their work around features, personas, or competitor benchmarks. The Jobs-to-be-Done framework asks a different question entirely: what is the customer actually trying to accomplish, and how well are existing solutions helping them do it? That shift in framing, from "what should we build" to "what job is the customer hiring a product to do," is the core intellectual move behind JTBD. It sounds simple, but it restructures nearly every downstream decision a product manager makes, from roadmap prioritization to competitive analysis to market segmentation.

The framework's modern form traces primarily to Tony Ulwick, who began developing what he calls Outcome-Driven Innovation (ODI) in the early 1990s while consulting for companies like Cordis Corporation and Microsoft. Ulwick published his foundational ideas in a 2002 Harvard Business Review article titled "Turn Customer Input into Innovation," and later expanded them into the book "What Customers Want" (2005). Clayton Christensen, the Harvard Business School professor best known for disruption theory, popularized a complementary version of JTBD through his "milkshake marketing" example and the book "Competing Against Luck" (2016). The two schools share a core premise, customers "hire" products to get jobs done, but differ in emphasis. Ulwick's ODI tradition is quantitative and process-heavy, centered on desired outcome statements and opportunity scoring. Christensen's tradition is more narrative and qualitative, focused on the broader context of why customers switch between solutions. A working product manager benefits from understanding both lineages, because the quantitative and qualitative lenses complement each other in practice.

The mental model underneath JTBD is that jobs are stable even when products change rapidly. People have been "trying to pass time during a commute" for centuries. The horse, the newspaper, the Walkman, the smartphone, and the podcast all got hired for overlapping versions of that job. When a product manager anchors strategy to the job rather than the current product category, they gain two advantages. First, they see competitive threats that category-level thinking misses, because competition is defined by the job, not the shelf. Second, they can identify unmet needs with much greater precision, because the job can be decomposed into discrete steps, and each step can be evaluated against measurable outcomes the customer cares about.

JTBD sits in a broader landscape alongside frameworks like Design Thinking, Lean Startup, and Kano analysis. Design Thinking shares JTBD's empathy orientation but tends to be more divergent and less structured in how it captures needs. Lean Startup's build-measure-learn loop is a complementary execution method, but it assumes you already know the problem space well enough to form a hypothesis. Kano analysis classifies features by satisfaction impact, but it starts from features rather than from the customer's job. JTBD is distinguished by its insistence on decomposing the job into steps and outcomes before any solution ideation begins. This discipline prevents the premature convergence that plagues many product teams.

Since its introduction, JTBD has evolved significantly. Ulwick's ODI methodology has been applied across more than 1,000 innovation projects and refined into a detailed quantitative process, complete with opportunity algorithms and market segmentation by unmet need. Meanwhile, practitioners like Bob Moesta (Ulwick's former collaborator and co-architect of many early JTBD concepts) have developed "demand-side" JTBD interview techniques that focus on the switching moment, the push, pull, anxiety, and habit forces that cause a customer to hire or fire a product. The framework has also been adopted heavily in B2B SaaS, where product managers use job maps and outcome statements to structure discovery, align cross-functional teams, and defend roadmap decisions with evidence rather than opinion.

The product manager who benefits most from JTBD is one operating in a complex, multi-segment market where customer needs are poorly understood or where the team keeps shipping features that don't move adoption metrics. If your team regularly debates whether to build feature X or feature Y without a shared language for "what does the customer actually need," JTBD provides that language. It is especially powerful for teams at the growth stage, where the initial product-market fit is proven but the path to expanding into adjacent segments or deepening value in the core segment is unclear. Hamster is one workspace where teams can run JTBD-informed discovery alongside their AI agents, keeping job maps, outcome statements, and opportunity scores connected to the rest of their product workflow.

## Core Principles

### The Job Is the Unit of Analysis

Everything in JTBD orbits a single concept: the functional job the customer is trying to get done. Not the product, not the persona, not the feature request. The job is defined from the customer's perspective, in their language, independent of any solution. When teams skip this step and jump straight to "what should we build," they end up optimizing a solution for a problem they haven't properly defined.

The tradeoff is time. Defining the job rigorously requires research and cross-functional alignment before anyone touches a wireframe. Teams that invest here consistently report fewer wasted sprints later.

### Jobs Are Stable, Solutions Are Transient

The job of "getting from point A to point B quickly and reliably" has existed for millennia. Solutions, horses, trains, cars, ride-sharing apps, come and go. A product manager who anchors strategy to the job gains a durable competitive lens, because they can see disruption coming from outside their category. When teams forget this principle and define their market by the current solution category, they get blindsided by competitors who don't look like competitors at all.

The tradeoff is that job-level thinking requires more abstraction and can feel uncomfortably broad at first.

### Desired Outcomes Must Be Measurable

An outcome statement in JTBD follows a specific structure: direction of improvement + metric + context. For example, "minimize the time it takes to verify the accuracy of the data." This precision matters because vague needs like "make it easier" give product teams no basis for prioritization. When outcome statements are measurable, teams can survey customers, quantify importance and satisfaction, and calculate opportunity scores. Teams that write sloppy outcome statements end up with the same ambiguity they had before adopting JTBD, just wrapped in new vocabulary.

### Competition Is Defined by the Job, Not the Category

If a customer hires a spreadsheet, a whiteboard, and a conversation with a colleague to accomplish the same job, all three are competitors. JTBD forces a product manager to widen the competitive frame beyond the obvious product category. This reveals threats and opportunities that traditional competitive analysis misses entirely. The tradeoff is complexity.

Analyzing a broader competitive set requires more research effort and can make positioning decisions harder, because you're no longer just comparing feature checklists.

### Segment by Unmet Need, Not Demographics

Traditional market segmentation groups people by age, industry, company size, or role title. JTBD segments by the pattern of unmet needs. Two enterprise CTOs might have completely different unmet outcomes, while a CTO and a freelance developer might cluster together because they share the same underserved job steps. When teams segment by demographics, they build features for averages that satisfy nobody well.

Segmenting by unmet need reveals distinct groups with coherent, actionable requirements. The cost is that need-based segmentation requires quantitative outcome data, which means upfront research investment.

### Separate the Job from the Emotional and Social Dimensions

Every job has functional, emotional, and social layers. A product manager writing a board presentation has a functional job (communicate strategic priorities clearly), an emotional job (feel confident that the narrative holds together), and a social job (be perceived as credible by the board). JTBD acknowledges all three but insists on keeping them analytically separate, because they require different types of solutions. Teams that conflate functional and emotional jobs end up with muddled prioritization, addressing anxiety when the actual bottleneck is a functional gap, or vice versa.

### Innovation Opportunity Lives in Importance-Satisfaction Gaps

The highest-value opportunities exist where a desired outcome is highly important to the customer but poorly satisfied by current solutions. Ulwick's opportunity algorithm (importance + max(importance - satisfaction, 0)) quantifies this gap. When product managers skip this calculation and rely on intuition or loudest-customer requests, they systematically over-invest in outcomes that are already well-served and under-invest in the painful gaps nobody is talking about. The tradeoff is that calculating opportunity scores requires survey data, not just interviews, which adds a quantitative research step many teams aren't accustomed to.

## Steps

1. **Step 1: Define the Core Functional Job**
   Start by articulating the core functional job the customer is trying to accomplish, written from the customer's perspective and stripped of any solution language. A well-defined job statement follows the format: verb + object + contextual clarifier. " The job should be neither so broad that it becomes meaningless ("live a good life") nor so narrow that it describes a step within a larger job ("enter a transaction into a ledger"). A good test is stability: would this job have existed 20 years ago and will it exist 20 years from now?

If yes, you're at the right level of abstraction. A common mistake is embedding a solution in the job statement. "Create a spreadsheet to track expenses" is a solution, not a job. " Getting this definition right is foundational because every subsequent step depends on it.

For a detailed walkthrough, see [Defining the Customer's Core Functional Job](https://tryhamster.com/skills/defining-core-functional-jobs).

2. **Step 2: Map the Job into Steps**
   Decompose the core functional job into a sequence of discrete process steps. Ulwick's canonical job map uses a universal structure: define, locate, prepare, confirm, execute, monitor, modify, and conclude. Not every job includes all eight steps, but this structure provides a scaffold for ensuring completeness. Each step should describe what the customer is doing, not what the product is doing.

" The goal is to produce a comprehensive map of the entire job before any consideration of solutions. " Watch out for merging distinct steps into one, which hides important outcome distinctions. Also watch for including steps that belong to an adjacent job rather than the core job you defined. For more on this step, see [Creating Job Maps to Visualize Customer Processes](https://tryhamster.com/skills/creating-job-maps).

3. **Step 3: Write Desired Outcome Statements for Each Step**
   For each step in the job map, write 5 to 15 desired outcome statements that describe the metrics the customer uses to judge success. Each statement follows a precise format: direction of improvement (minimize, increase) + unit of measurement (time, likelihood, number) + object of control (what's being measured) + contextual clarifier (when or where). " Precision is the point. Vague outcomes like "make it easier to find ingredients" give your team no actionable information.

A well-written set of outcomes for a single job typically produces 80 to 150 statements across all steps. This volume feels excessive at first but is critical for the quantitative analysis that follows. Common mistakes include writing outcome statements that describe solutions ("have a checklist feature"), mixing multiple outcomes into one statement, or using subjective language that can't be measured. See [Writing Desired Outcome Statements](https://tryhamster.com/skills/writing-desired-outcome-statements) for templates and common patterns.

4. **Step 4: Conduct Customer Research to Validate and Score Outcomes**
   With your draft job map and outcome statements in hand, conduct structured interviews with 15 to 30 customers to validate the job steps and refine the outcome language. ). Both scales typically use a 1-to-5 or 1-to-10 range. You need a statistically meaningful sample, usually 180 or more respondents for B2B and larger for B2C.

The qualitative interviews reveal whether your job map is complete and whether your outcome statements use the customer's language. The quantitative survey produces the data you need for opportunity scoring. A frequent mistake is skipping the quantitative step and relying solely on interviews. Interviews reveal the landscape but cannot tell you reliably which outcomes are most underserved at scale.

For interview techniques and guide templates, see [Conducting JTBD Customer Interviews](https://tryhamster.com/skills/conducting-jtbd-customer-interviews).

5. **Step 5: Calculate Opportunity Scores and Identify Underserved Outcomes**
   Apply the opportunity algorithm to each outcome: opportunity score = importance + max(importance - satisfaction, 0). Outcomes with scores above 10 (on a 10-point scale) represent underserved needs, the areas where customers care deeply but current solutions fall short. Outcomes with low importance, regardless of satisfaction, are table stakes or irrelevant. Sort all outcomes by opportunity score.

The top 10 to 15 represent your highest-leverage innovation targets. Visualize the results on an opportunity landscape (importance on one axis, satisfaction on the other) to see clusters. Watch for outcomes that score high on both importance and satisfaction. These are "appropriately served" and adding more value here yields diminishing returns, a trap many product teams fall into by over-investing in their strongest features.

For detailed scoring techniques, see [Identifying Underserved Outcome Opportunities](https://tryhamster.com/skills/identifying-underserved-outcome-opportunities).

6. **Step 6: Segment Customers by Patterns of Unmet Need**
   Run cluster analysis on the survey data to identify groups of customers who share similar patterns of underserved outcomes. You'll typically find 3 to 6 meaningful segments. Unlike demographic segments, these need-based segments often cut across traditional categories. You might discover that mid-market marketing directors and enterprise operations managers share nearly identical unmet outcomes on a particular job step, while two marketing directors at similar companies have completely different need profiles.

Label each segment descriptively based on its dominant unmet needs. This segmentation directly informs product strategy: you can now decide which segment to target first, knowing exactly which outcomes to address and how large each opportunity is. The mistake to avoid is forcing the data into your existing persona framework. Let the clusters emerge from the data.

For clustering techniques, see [Segmenting Customers by Unmet Needs](https://tryhamster.com/skills/segmenting-customers-by-unmet-needs).

7. **Step 7: Translate JTBD Insights into Product Strategy and Roadmap**
   With underserved outcomes identified and segments defined, translate findings into concrete product strategy decisions. For each high-opportunity outcome, brainstorm solution concepts that could address it. Evaluate each concept against the full set of underserved outcomes to find solutions with the broadest impact. A single feature that addresses three high-scoring outcomes is almost always more valuable than three features that each address one.

Feed these priorities into your roadmap, using the opportunity scores as evidence in stakeholder conversations. This is where JTBD pays its biggest dividend: roadmap debates shift from opinion-based to evidence-based. Instead of arguing whether to build feature A or feature B, the team can reference quantified customer needs. A common failure mode is completing the JTBD research but then reverting to old prioritization habits because the organization's planning process doesn't accommodate outcome-driven input.

Embedding JTBD artifacts into your existing planning cadence is essential. For integration patterns, see [Applying JTBD Insights to Product Strategy and Roadmaps](https://tryhamster.com/skills/applying-jtbd-to-product-strategy).

## When to Use

- When your team has 20 or more competing feature requests from different customer segments and no shared vocabulary for comparing them. JTBD gives you a common unit of analysis, the desired outcome, that lets you evaluate requests on equal footing rather than defaulting to the loudest stakeholder or the largest account.
- When you've achieved initial product-market fit but growth has stalled and you suspect you're building for the wrong needs. JTBD's quantitative opportunity scoring reveals whether your roadmap aligns with the outcomes customers actually care about, or whether you've been optimizing dimensions that are already good enough.
- When entering an adjacent market or launching a new product line and you need to understand what jobs potential customers are hiring current solutions to do. Rather than guessing based on competitor feature sets, JTBD maps the entire job and identifies where current solutions create the most friction.
- When your team is trapped in a cycle of building features that customers requested but that don't move retention or satisfaction metrics after launch. This pattern usually means you're hearing requests at the solution level rather than understanding the underlying outcome. JTBD reframes the conversation around what the customer is actually trying to achieve.
- When you need to align a cross-functional team, engineering, design, marketing, sales, around a shared understanding of the customer. Job maps and desired outcome statements create a concrete, externalized artifact that prevents each function from optimizing for its own interpretation of the customer's need.
- When competitive threats are emerging from outside your traditional product category and you need a broader lens. JTBD's job-level competitive analysis surfaces non-obvious competitors that feature-by-feature benchmarking would miss entirely.

## When Not to Use

- When you're a very early stage startup still searching for any repeatable value proposition and you have fewer than 20 customers. JTBD's full methodology, particularly quantitative outcome surveys, requires a large enough customer base to produce statistically meaningful results. At this stage, lightweight qualitative discovery and rapid experimentation will teach you more per unit of effort. You risk over-engineering your research process when you don't yet have the data density to support it.
- When the problem you're solving is a known, well-documented process with a clear regulatory or compliance-driven specification. If the "job" is "file a tax return correctly according to IRS rules," the steps and outcomes are essentially defined by the regulation, not by customer discovery. JTBD adds overhead without revealing non-obvious insights in domains where the job is already exhaustively specified by an external authority.
- When your product operates in a fast-moving, trend-driven market where customer behavior shifts faster than a JTBD study can complete. For example, viral social features or meme-driven consumer apps often succeed based on timing and cultural resonance, not on systematically underserved functional outcomes. JTBD's assumption of stable, enduring jobs doesn't hold well when the "job" is itself ephemeral.
- When the team needs a solution shipped within days or weeks and the job has already been validated through prior research. Running a full JTBD study when you have strong existing evidence of the unmet need is a form of analysis paralysis. JTBD is a discovery framework, not an execution framework. If discovery is done, move to building.
- When you're optimizing an existing, mature feature where the job and outcomes are well understood and the work is primarily about UX polish, performance, or technical debt. JTBD is most valuable when there's genuine uncertainty about what the customer needs. If the need is clear and the challenge is implementation quality, usability testing and engineering metrics are more directly useful.

## Skills

This method includes the following skills:

- [Conducting JTBD Customer Interviews](../../skills/conducting-jtbd-customer-interviews/SKILL.md) — How to run switch interviews and timeline interviews that uncover the real jobs, hiring criteria, and switching triggers behind customer decisions.
- [Identifying Underserved Outcome Opportunities](../../skills/identifying-underserved-outcome-opportunities/SKILL.md) — How to use opportunity scoring (importance vs. satisfaction) to quantify which desired outcomes are most underserved and represent the best innovation targets.
- [Applying JTBD Insights to Product Strategy and Roadmaps](../../skills/applying-jtbd-to-product-strategy/SKILL.md) — How to translate job maps, outcome scores, and opportunity landscapes into actionable product roadmaps, feature priorities, and go-to-market positioning.
- [Defining the Customer's Core Functional Job](../../skills/defining-core-functional-jobs/SKILL.md) — How to identify and articulate the fundamental job a customer is trying to accomplish, using proper job statement syntax and structure.
- [Writing Desired Outcome Statements](../../skills/writing-desired-outcome-statements/SKILL.md) — How to craft properly structured outcome statements (direction + metric + object of control + context) that capture measurable customer success criteria at each job step.
- [Creating Job Maps to Visualize Customer Processes](../../skills/creating-job-maps/SKILL.md) — How to break down a core functional job into its universal process steps (define, locate, prepare, confirm, execute, monitor, modify, conclude) to map the full customer journey.
- [Segmenting Customers by Unmet Needs](../../skills/segmenting-customers-by-unmet-needs/SKILL.md) — How to create outcome-based customer segments that group people by shared underserved outcomes rather than demographics, enabling more targeted product strategies.

## FAQ

**What is the Jobs-to-be-Done framework in simple terms?**

JTBD is a way of understanding what customers actually need by focusing on the task they're trying to accomplish rather than the product they're currently using. Think of it as asking "what job is this person hiring my product to do?" instead of "what features does my product need?" A customer buying a drill doesn't want a drill. They want a hole in the wall, or more precisely, they want to securely mount a shelf. JTBD systematically uncovers that chain of underlying needs so a product manager can build something that addresses the real goal.

**What's the difference between Ulwick's ODI approach and Christensen's JTBD approach?**

Ulwick's Outcome-Driven Innovation (ODI) is quantitative and process-oriented. It produces measurable desired outcome statements, scores them with surveys, and uses an opportunity algorithm to prioritize. Christensen's version, sometimes called "demand-side JTBD," is more qualitative and narrative-focused. It emphasizes the switching moment, the forces that push a customer away from their current solution and pull them toward a new one.

In practice, most experienced product managers blend both. They use Christensen-style interviews to understand context and switching behavior, then apply Ulwick-style outcome scoring to quantify and prioritize. The two approaches are complementary, not contradictory.

**Does JTBD work for small teams or early-stage startups?**

The full quantitative ODI methodology requires survey sample sizes of 180+ respondents, which is difficult for a startup with a small customer base. However, the thinking framework scales down well. A three-person startup can define the core functional job, draft a job map, write outcome statements, and validate them through 10 to 15 interviews. You won't get statistically significant opportunity scores, but you'll have a structured understanding of customer needs that's far more actionable than ad hoc conversations.

As you grow, you can layer in the quantitative components. The key is to adopt the mindset, jobs and outcomes, even before you have the data density for the full methodology.

**How does JTBD work alongside OKRs, roadmaps, and sprint planning?**

JTBD operates at the discovery and strategy layer, upstream of OKRs and sprint planning. The underserved outcomes identified through JTBD become inputs to your OKR-setting process. " The roadmap items that support that OKR are solution concepts designed to address the specific underserved outcomes. Sprint planning then breaks those roadmap items into implementable work.

JTBD doesn't replace any of these mechanisms. It sharpens them by ensuring the objectives and roadmap items are grounded in validated customer needs rather than internal assumptions.

**Why does JTBD fail in practice?**

The most common failure is treating JTBD as a research project rather than an operating system. A team runs interviews, produces a beautiful job map, and then files it away while continuing to make roadmap decisions based on sales pressure and gut feel. The second most common failure is sloppy outcome statements. If outcomes aren't written precisely enough to score, the quantitative layer of JTBD collapses and you're left with generic themes no more useful than affinity-mapped sticky notes.

Third, some teams define the job too narrowly, essentially describing the product's current workflow rather than the customer's broader task, which defeats the purpose of the framework. JTBD succeeds when the artifacts are actively used in prioritization meetings, not just in research readouts.

**JTBD vs. Design Thinking: which should a product manager use?**

They solve different problems and combine well. Design Thinking is a divergent process that excels at generating creative solutions and building empathy through methods like observation, brainstorming, and prototyping. JTBD is a convergent analytical framework that excels at precisely defining the problem space and quantifying which problems matter most. A product manager can use JTBD to identify the highest-opportunity unmet outcomes, then use Design Thinking to ideate solutions for those specific outcomes.

Without JTBD, Design Thinking risks generating brilliant solutions to low-priority problems. Without Design Thinking, JTBD can produce well-prioritized needs but uninspired solutions.

**How long does a JTBD study typically take to complete?**

A full ODI-style JTBD study, from defining the job through quantitative survey analysis, typically takes 8 to 12 weeks. The qualitative phase (defining the job, building the job map, writing outcome statements, conducting 15-30 interviews) usually takes 4 to 6 weeks. The quantitative phase (designing the survey, fielding it to 180+ respondents, analyzing results, calculating opportunity scores, running segmentation) takes another 4 to 6 weeks. Lighter-weight approaches that skip the quantitative survey can be done in 3 to 4 weeks but sacrifice the precision of opportunity scoring.

The investment pays off most when the findings inform multiple quarters of roadmap decisions, not just one feature launch.

**Can JTBD be applied to internal tools and platform teams, not just customer-facing products?**

Absolutely. Internal users have jobs to be done just like external customers. A platform engineering team's "customers" are the product engineers who build on their platform. " Running JTBD on these internal jobs reveals which steps are most painful and which outcomes are most underserved, enabling the platform team to prioritize investments with the same rigor a product manager applies to external users.

The methodology is identical. The only difference is that your research population is colleagues rather than customers, which often makes recruiting for interviews easier.

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
