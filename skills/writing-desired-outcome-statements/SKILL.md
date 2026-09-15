---
name: writing-desired-outcome-statements
description: "This skill teaches you how to craft precisely structured outcome statements that capture what customers want to achieve at each step of their job, using a repeatable four-part formula that keeps statements measurable, solution-free, and directly actionable for product prioritization."
metadata:
  method: jobs-to-be-done-jtbd-framework
---

# Writing Desired Outcome Statements for JTBD

> This skill teaches you how to craft precisely structured outcome statements that capture what customers want to achieve at each step of their job, using a repeatable four-part formula that keeps statements measurable, solution-free, and directly actionable for product prioritization.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 2-4 hours for a complete set of 50-100 outcomes |
| Outcome | You produce a validated set of 50-150 desired outcome statements, each following the direction + metric + object + context formula, covering every step of the customer's job map. These statements become the raw input for quantitative surveys that identify underserved and overserved outcomes, directly feeding product strategy and roadmap decisions. |
| Prerequisites | Familiarity with the Jobs-to-be-Done framework and its vocabulary (functional jobs, job steps, outcomes), A completed job map with defined job steps, see the creating-job-maps skill, Access to raw customer interview data or transcripts, see the conducting-jtbd-customer-interviews skill, Basic understanding of what makes a metric measurable versus subjective |
| Part of | [Jobs-to-be-Done (JTBD) Framework](../../methods/jobs-to-be-done-jtbd-framework/METHOD.md) |

## Overview

Writing desired outcome statements is the connective tissue between qualitative customer research and quantitative opportunity analysis in the [Jobs-to-be-Done (JTBD) Framework](https://tryhamster.com/methods/jobs-to-be-done-jtbd-framework). After you have mapped the customer's core functional job into discrete steps, you need a way to capture what 'success' looks like at each step, in language that is precise enough to survey hundreds of customers and comparable enough to score and rank. Desired outcome statements serve that purpose. Each statement follows a rigid four-part structure: a direction of improvement (minimize, increase, reduce), a unit of measurement (time, likelihood, number, degree), the object the customer is trying to control, and a contextual qualifier that anchors the statement to a specific situation. The result is a statement like 'Minimize the likelihood that relevant data sources are overlooked when assembling the initial dataset.' That statement is solution-free (it does not mention any tool or feature), measurable (you can ask a customer how important it is and how satisfied they are), and unambiguous (two readers will interpret it the same way).

The artifact you produce is a structured list of 50-150 outcome statements organized by job step. A typical job map has 8-15 steps, and each step yields 5-15 outcomes. This list becomes the backbone of your opportunity landscape: you survey customers on importance and satisfaction for every outcome, calculate opportunity scores, and surface the underserved needs that should drive your roadmap. Without well-written outcomes, the entire downstream analysis collapses. Vague statements like 'make it easier' cannot be reliably scored. Solution-laden statements like 'have a drag-and-drop interface' measure preference for an existing idea rather than an unmet need. Overly broad statements like 'save time' fail to differentiate between job steps, so you cannot pinpoint where to innovate.

This skill sits between [creating job maps](https://tryhamster.com/skills/creating-job-maps) (which gives you the step structure) and [identifying underserved outcome opportunities](https://tryhamster.com/skills/identifying-underserved-outcome-opportunities) (which scores the outcomes you write). It also draws heavily on data gathered during [JTBD customer interviews](https://tryhamster.com/skills/conducting-jtbd-customer-interviews). Mastering this skill is one of the most valuable product manager skills you can develop, because it forces you to articulate customer needs with surgical precision, a discipline that improves every other aspect of product thinking, from writing user stories to evaluating feature requests.

Success looks like this: every statement on your list can be read aloud to a customer, and that customer can immediately rate both how important the outcome is and how well their current solution delivers it. If a customer furrows their brow and asks 'what do you mean by that?', the statement needs revision. The gold standard is clarity so high that the statement works identically across different customer segments, geographies, and product contexts.

## How It Works

The four-part formula works because it systematically removes the sources of ambiguity that plague traditional requirements gathering. Each component addresses a specific failure mode.

**Direction of improvement** locks in what 'better' means. In everyday language, people say 'I want it to be good' or 'I need this to work well.' Those phrases are useless for measurement because they have no polarity. By forcing a direction, you clarify whether the customer wants more of something (increase, maximize) or less of something (minimize, reduce). In practice, the vast majority of desired outcomes use 'minimize' because most performance metrics describe friction: time spent, errors encountered, likelihood of failure. Tony Ulwick's research across thousands of JTBD studies shows that roughly 70-80% of outcome statements begin with 'minimize.' If you find yourself writing mostly 'maximize' statements, pause and check whether you are accidentally describing solutions or features rather than friction points.

**Performance metric** is what makes the statement measurable without requiring an actual number. You are not asking 'how many minutes does this take?' You are identifying the dimension along which the customer evaluates success. Common metrics include time, likelihood, number, frequency, degree, and amount. The metric must be something the customer intuitively understands and can rate on a scale. 'Minimize the likelihood' is intuitive. 'Minimize the cognitive load' is not, because most customers do not think in terms of cognitive load. A good litmus test: could a non-expert customer read the metric phrase and immediately know what you are asking about?

**Object of control** specifies exactly what the customer is trying to influence. This is where most beginners struggle, because it requires you to identify the thing in the customer's world that the outcome acts on, not the thing in your product. 'Minimize the time it takes to identify defective components' has a clear object: defective components. If you wrote 'minimize the time it takes to use the inspection tool,' you have embedded a solution (the inspection tool) into the object. The object of control must exist independent of any particular product.

**Contextual clarifier** pins the outcome to a specific situation or condition. Without context, outcomes become too broad to be useful. 'Minimize the time it takes to identify defective components' is decent, but 'Minimize the time it takes to identify defective components when inspecting a batch after a supplier change' is significantly more actionable because it tells you which scenario matters most. The clarifier also prevents duplication: the same metric and object might apply in multiple contexts, and each context deserves its own statement because the importance and satisfaction scores will differ.

The formula works within the [Jobs-to-be-Done (JTBD) Framework](https://tryhamster.com/methods/jobs-to-be-done-jtbd-framework) because it converts messy qualitative interview data into a standardized format that supports quantitative analysis. Each statement becomes a row in a survey instrument. You ask two questions per statement: 'How important is this outcome to you?' and 'How satisfied are you with your current ability to achieve this outcome?' The gap between importance and satisfaction is the opportunity score. Because every statement uses the same structure, the scores are directly comparable across outcomes, job steps, and customer segments. This comparability is what makes the downstream skills, like [identifying underserved outcome opportunities](https://tryhamster.com/skills/identifying-underserved-outcome-opportunities) and [segmenting customers by unmet needs](https://tryhamster.com/skills/segmenting-customers-by-unmet-needs), possible.

One important mental model: outcome statements describe the customer's definition of success, not the customer's behavior. 'The customer clicks the submit button' is a behavior. 'Minimize the likelihood that required information is missing when submitting the request' is a success criterion. Behaviors change when products change. Success criteria persist across product generations, which is exactly why they are useful for innovation.

## Step-by-Step Guide

### Step 1: Step 1: Assemble Your Source Materials

Gather the completed job map and all raw interview transcripts, notes, or recordings from your JTBD customer interviews. You need the job map because you will write outcomes step by step, and you need the raw data because the customer's own words contain the metrics and objects you will formalize. Print or display the job map where you can see all steps at once. Open the transcripts in a format that lets you search and highlight.

Create a working document (spreadsheet or structured doc) with one section per job step, leaving room for 5-20 outcome statements under each. Label columns for the four components: direction, metric, object, context. This prep step prevents you from writing outcomes in a vacuum and ensures every statement traces back to real customer language.

> **Pro tip:** Color-code your transcript highlights by job step before you start writing. This pre-sorting saves significant time because you will not have to re-read entire transcripts when working on each step.

### Step 2: Step 2: Select a Job Step and Extract Raw Customer Language

Start with the first step of the job map. Read through all transcript passages tagged to that step and pull out every phrase where the customer describes what they are trying to achieve, what frustrates them, what takes too long, what goes wrong, or what success looks like. Write each phrase down verbatim, do not paraphrase yet. You are building a raw list of 'proto-outcomes' in the customer's natural language.

A single interview passage like 'I spend forever trying to figure out which parts are actually broken versus just worn' contains at least two proto-outcomes: one about time spent identifying broken parts and one about distinguishing broken from worn. Pull apart compound statements into their atomic needs. Aim for 10-30 raw phrases per job step before you start formalizing.

> **Pro tip:** Pay special attention to language around failure, rework, and workarounds. Customers rarely articulate positive outcomes directly, but they are very specific about what goes wrong. Every complaint contains an implied outcome: flip the complaint into a 'minimize the...' statement.

### Step 3: Step 3: Draft the Direction and Metric

For each raw phrase, determine the direction of improvement. Ask yourself: does the customer want more of something or less of something? ' Write the direction and metric as the opening of your formal statement. Use precise metric words: time, likelihood, number, frequency, degree, amount.

Avoid vague metric substitutes like 'difficulty,' 'effort,' or 'ease,' because these are composites that blend multiple measurable dimensions. 'Difficulty' might mean time, cognitive steps, physical force, or error rate, and a survey respondent cannot score a composite reliably. If a customer describes something as 'difficult,' decompose it: is it time-consuming (time), error-prone (likelihood of errors), or physically demanding (degree of physical effort)?

> **Pro tip:** When in doubt between 'minimize the time' and 'minimize the likelihood,' ask: is the customer describing duration or probability? 'I spend a long time' is time. 'I sometimes miss things' is likelihood. Getting this wrong will confuse survey respondents.

### Step 4: Step 4: Identify the Object of Control

The object of control is the thing in the customer's world that the outcome acts on. Return to the raw phrase and identify the noun or noun phrase that the customer is trying to influence. 'I spend forever trying to figure out which parts are actually broken' has 'parts that are actually broken' as the object. ' The object must be solution-free: it should exist whether the customer uses your product, a competitor's product, or no product at all.

' If the answer is no, you have embedded a solution. Common solution leaks include tool names ('the dashboard'), feature names ('the filter'), and UI elements ('the dropdown'). Replace these with the underlying real-world object the tool is manipulating.

> **Pro tip:** Read the object of control out loud and ask: 'Could a customer who has never heard of our product understand this phrase?' If the answer is no, the object contains solution-specific language that needs to be generalized.

### Step 5: Step 5: Add the Contextual Clarifier

Append a situational qualifier that tells the reader when, where, or under what conditions this outcome matters. Look at the interview transcript for the context surrounding the customer's statement. Were they describing a specific scenario, a particular stage of work, a type of input, or a constraint? ' The clarifier serves two purposes: it prevents the outcome from being so broad that it is meaningless, and it enables you to write multiple distinct outcomes for the same metric + object combination under different contexts.

' Keep it to one clause. If you need two clauses, you probably have two separate outcomes.

> **Pro tip:** If you cannot find a specific context in the transcript, go back and re-read the surrounding conversation. The context is almost always present in the customer's story but was not highlighted because it seemed like background detail rather than a key qualifier.

### Step 6: Step 6: Assemble and Grammar-Check the Full Statement

' Read the complete statement aloud. It should flow as a natural English sentence, not feel like four fragments stapled together. Check for grammatical consistency: the direction word should be a verb (minimize, reduce, increase), the metric should be a noun (time, likelihood, number), and the contextual clarifier should be a prepositional or subordinate clause. Fix any awkwardness.

Then apply three quality tests. First, the solution-free test: does the statement mention any product, feature, or technology? If yes, rewrite. ' and have them answer without asking for clarification?

If no, rewrite. Third, the uniqueness test: is this statement meaningfully different from every other statement in your list? If it overlaps by more than 80% with another statement, merge or differentiate.

> **Pro tip:** Read each statement as if you are a survey respondent seeing it for the first time with no context about the job or the product. If you need the surrounding statements to understand what this one means, it fails the self-containment test and needs revision.

### Step 7: Step 7: Repeat for All Remaining Job Steps

Move to the next job step on your map and repeat steps 2 through 6. As you progress through the map, you will develop pattern recognition for common outcome structures, and your speed will increase. A typical first-pass produces 5-15 outcomes per step across 8-15 steps, yielding 50-150 total outcomes. Track your count per step.

If a step has fewer than 3 outcomes, you probably under-explored it in interviews or are combining outcomes that should be split. If a step has more than 20, you may be writing at too granular a level or splitting outcomes that belong together. Keep a 'parking lot' list for outcomes that do not clearly fit any step. These are often indicators of a missing step in your job map or an outcome that belongs to a different job entirely.

> **Pro tip:** Do not try to write all outcomes in a single sitting. Quality degrades sharply after about 90 minutes. Break the work across 2-3 sessions, covering 4-6 job steps per session.

### Step 8: Step 8: Review for Cross-Step Consistency and Deduplication

Once all job steps are covered, review the complete list as a whole. Look for duplicates or near-duplicates across steps. Two outcomes can share a metric and object but must differ in context. If they do not, merge them and assign them to the most relevant step.

Check that your direction words are consistent: if you use 'minimize' for time-related outcomes in step 3, do not switch to 'reduce' in step 7 without a reason. Standardize your vocabulary so the survey instrument reads coherently. Also check for coverage balance. If your job map has 12 steps and 80% of your outcomes cluster under 3 steps, you have a coverage imbalance.

Return to the under-represented steps, re-read the transcripts, and look for implicit outcomes you missed. , S3-O7 for Step 3, Outcome 7) so you can reference them throughout the rest of your JTBD project.

> **Pro tip:** Create a simple frequency table: how many outcomes per step. Visually scan for outliers. Steps with very few outcomes are the most common source of blind spots in downstream opportunity analysis.

### Step 9: Step 9: Validate with Customers or Subject Matter Experts

Before using your outcomes in a quantitative survey, test a sample of 15-20 statements with 3-5 customers or internal subject matter experts who know the job well. ' Collect feedback statement by statement. If a reviewer asks for clarification on any statement, that statement needs revision. If multiple reviewers flag the same statement, it likely has an ambiguous metric or an unclear object.

Also listen for outcomes the reviewers volunteer that are not on your list. These are often outcomes that were implicit in interview data but were not articulated directly. Add any validated new outcomes. This validation step typically results in revising 20-30% of statements and adding 5-10% new ones.

> **Pro tip:** Do not explain the statement to the reviewer. If you have to explain it, the statement is not clear enough. The whole point of the formula is that the statement should be self-explanatory to anyone who performs the job.

## Best Practices

- Use 'minimize' as your default direction unless the customer explicitly wants more of something. Research across thousands of JTBD studies shows that 70-80% of outcome statements begin with 'minimize' because most outcomes describe friction reduction. If you find your list skewed toward 'maximize' or 'increase,' revisit each statement and check whether you are describing a desired state (solution thinking) rather than a pain to reduce (outcome thinking).
- Keep each statement to a single outcome. A statement like 'minimize the time and likelihood of errors when processing returns' bundles two measurable outcomes into one sentence. Split it into 'minimize the time it takes to process a return' and 'minimize the likelihood that errors occur when processing a return.' Bundled statements produce unreliable survey data because a respondent might rate time as highly important but errors as less important, and they have no way to express that distinction.
- Write 50-150 outcomes per job, distributed across all steps. Fewer than 50 typically means you are writing at too high a level of abstraction, and downstream opportunity analysis will lack resolution. More than 150 means you are likely splitting hairs or writing at a granularity that will fatigue survey respondents. Aim for 8-12 outcomes per step as a working target and adjust based on the complexity of each step.
- Avoid emotional or subjective language in the metric position. Words like 'frustration,' 'confidence,' 'satisfaction,' and 'comfort' are not directly measurable in the way time, likelihood, and number are. They are meta-states that result from measurable conditions. 'Minimize frustration' should become 'minimize the number of rework cycles required' or 'minimize the time spent waiting for a response.' Dig one layer deeper to find the measurable driver.
- Standardize vocabulary within and across job steps. If you refer to the same real-world concept as 'components' in step 2 and 'parts' in step 7, survey respondents will not know if you mean the same thing. Create a glossary of key objects before you start writing and use it consistently. This also simplifies data analysis after the survey.
- Always include the contextual clarifier. Bare statements without context (e.g., 'Minimize the time it takes to identify errors') are too vague to score reliably because the respondent fills in their own context, and different respondents will imagine different situations. The context ensures everyone is rating the same scenario.
- Write from the customer's perspective, not your company's. The subject of every statement is implicitly the person performing the job. 'Minimize the time the customer spends waiting' is written from an observer's perspective. 'Minimize the time spent waiting for confirmation after submitting a request' is written from the performer's perspective.

The performer's perspective produces more accurate survey responses because respondents recognize their own experience.
- Date and version your outcome list. Outcome statements evolve as you learn more about the job. Maintaining version history lets you trace changes, understand why statements were revised, and compare survey results across versions if you re-run the study. A simple version number (v1.0, v1.1) with a date and changelog entry is sufficient.

## Common Mistakes

- **Embedding solutions in the outcome statement** — This is the single most common error. ' The word 'dashboard' is a solution. The customer wants to find anomalies regardless of the tool. ' You can catch this mistake by applying the solution-free test to every statement: remove your product from the equation and see if the statement still makes sense.

If it breaks, the statement is solution-contaminated.
- **Writing outcomes that are too abstract to score reliably** — Statements like 'Minimize difficulty when managing the project' fail because 'difficulty' is not a measurable metric and 'managing the project' is not a specific action, it is the entire job. This happens when writers skip the decomposition step and try to capture an entire job step in one outcome. The fix is to break the step into its atomic actions and write one outcome per action with a concrete metric. 'Minimize the number of task dependencies that are overlooked when sequencing project activities' is specific enough to score.

' These always need decomposition.
- **Confusing job steps with outcomes** — A job step describes what the customer does: 'Verify component integrity.' An outcome describes how the customer measures success at that step: 'Minimize the likelihood that a defective component passes inspection during the verification process.' Beginners sometimes write 'Verify that all components are intact' as an outcome. That is a restated step, not a measurable success criterion. The diagnostic signal is the absence of a performance metric. If the statement does not contain a word like time, likelihood, number, frequency, or degree, it is probably a step masquerading as an outcome.
- **Writing too few outcomes per step and losing analytical resolution** — Teams sometimes write 1-2 outcomes per step, producing a total list of 15-25 statements. This feels efficient but destroys the value of downstream opportunity analysis because the scores are too aggregated to guide product decisions. If a step scores as 'underserved' with only one outcome, you do not know which dimension of underperformance to address. Was it speed, accuracy, completeness, or something else?

You need 5-15 outcomes per step to get actionable resolution. If you are consistently writing fewer than 5, return to your interview transcripts and look for sub-actions within the step that have their own success criteria.
- **Using inconsistent or ambiguous metric language** — Mixing metric terms like 'reduce the chance' and 'minimize the likelihood' and 'lower the probability' across different statements introduces unnecessary variability. Survey respondents may interpret these as different scales of severity. Pick one term per metric dimension and use it everywhere: 'minimize the likelihood' for probability, 'minimize the time' for duration, 'minimize the number' for count. Create a short glossary of your standard metric phrases and refer to it while writing.

Inconsistency is easiest to catch during the cross-step review in Step 8, but it is cheaper to prevent from the start.
- **Omitting the contextual clarifier and getting duplicate-looking outcomes** — Without context, statements that apply to different situations look identical, and teams either merge them (losing important distinctions) or leave them as apparent duplicates (confusing survey respondents). 'Minimize the time it takes to locate relevant information' could apply to initial research, mid-project troubleshooting, or post-project review, and the importance and satisfaction scores will be very different across those contexts. Always add the 'when' clause. If you find yourself unable to write a context, the outcome may be too generic and needs to be tied to a specific job step scenario.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/jobs-to-be-done-jtbd-framework/METHOD.md) — Jobs-to-be-Done (JTBD) Framework

## Related Skills

- [Conducting JTBD Customer Interviews](../conducting-jtbd-customer-interviews/SKILL.md)
- [Identifying Underserved Outcome Opportunities](../identifying-underserved-outcome-opportunities/SKILL.md)
- [Applying JTBD Insights to Product Strategy and Roadmaps](../applying-jtbd-to-product-strategy/SKILL.md)
- [Defining the Customer's Core Functional Job](../defining-core-functional-jobs/SKILL.md)
- [Creating Job Maps to Visualize Customer Processes](../creating-job-maps/SKILL.md)
- [Segmenting Customers by Unmet Needs](../segmenting-customers-by-unmet-needs/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
