---
name: "comparing-solutions-with-compare-and-contrast"
description: "Evaluate several candidate solutions side by side so your product trio surfaces trade-offs and avoids committing to the first idea."
category: "Product"
metadata:
  homepage: https://tryhamster.com
  method: "continuous-discovery-habits"
  datePublished: "2026-05-18"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Comparing Ideas: A Product Solution Comparison Framework

> Evaluate several candidate solutions side by side so your product trio surfaces trade-offs and avoids committing to the first idea.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 60-90 minutes per comparison cycle |
| Outcome | You produce a documented comparison table that makes the trade-offs between solutions explicit, gives your team a shared rationale for the chosen direction, and leaves a record you can revisit when new evidence arrives. |
| Prerequisites | A clearly defined target opportunity from an opportunity solution tree, At least three candidate solutions generated for that opportunity, Basic familiarity with assumption testing concepts, Access to customer interview insights or discovery data for the opportunity space |
| Part of | [Continuous Discovery Habits](../../methods/continuous-discovery-habits/METHOD.md) |

## Overview

Most product teams fall into the same trap: someone has an idea, the team gets excited, and everyone starts building before seriously considering alternatives. A product solution comparison framework is the antidote. Instead of evaluating solutions one at a time, where each idea only has to clear the bar of 'seems good enough,' you evaluate several side by side and force a genuine reckoning with trade-offs. Within [Continuous Discovery Habits](https://tryhamster.com/methods/continuous-discovery-habits), this skill sits after you generate candidate solutions on your [opportunity solution tree](https://tryhamster.com/skills/building-opportunity-solution-trees) and before you commit to [running assumption tests](https://tryhamster.com/skills/running-assumption-tests). Teresa Torres recommends focusing solution generation on one target opportunity and then [choosing three solutions to explore further](https://producttalk.org/opportunity-solution-trees), which is the set this skill compares.

The core artifact is a comparison table that lists your candidate solutions against your evaluation criteria. Criteria typically span desirability (do customers want this?), viability (can we sustain this as a business?), feasibility (can we build this with our current capabilities and constraints?), and usability (can customers actually use this?), the same [desirability, viability, feasibility and usability risk categories](https://getperspective.ai/blog/continuous-discovery-habits-in-2026-operationalizing-teresa-torres-s-framework-with-ai-conversations) practitioners use for assumptions. Each cell captures what you know, what you're assuming, and how confident you are. The goal isn't a single numerical winner. It is to make the shape of each solution's strengths and weaknesses visible so you can have an honest conversation about which trade-offs your team will accept.

The skill matters because the first idea that enters the conversation tends to win by default. Anchoring makes later ideas seem worse by comparison, and confirmation bias drives teams to seek evidence for the idea they've already emotionally committed to. Practitioner guidance names [choosing a single solution without exploring alternatives](https://github.com/phuryn/pm-skills/blob/main/pm-product-discovery/skills/opportunity-solution-tree/SKILL.md) as a common mistake, and the same guidance notes that product, design, and engineering each bring different solution perspectives. A structured comparison doesn't eliminate bias, but it disrupts the default by requiring you to explain why one solution is better across several dimensions, not just the one that feels most salient. It also replaces opinion with evidence: Torres treats [assumption tests, not stakeholder preference](https://producttalk.org/opportunity-solution-trees), as the way to evaluate solutions.

Success looks like this: before starting assumption tests, your team can say which solution you're pursuing, which solutions you considered, why you chose this one, and under what conditions you'd reconsider. That clarity accelerates everything downstream. You know what to test first, you can explain your reasoning to leadership, and you avoid the expensive late pivot that comes from never having seriously evaluated alternatives.

## How It Works

When you evaluate a single solution in isolation, you implicitly compare it against a vague benchmark of 'good enough.' When you place three solutions side by side, the contrast surfaces trade-offs that stay invisible in isolation. A solution that seemed feasible on its own reveals its engineering complexity next to a simpler alternative that achieves much of the same outcome.

The framework rests on three structural principles. First, you need several solutions, not two. Two create a false binary where the discussion collapses into 'which is better,' and the team usually picks whichever one the most senior person proposed. Torres suggests [choosing three solutions to explore further](https://producttalk.org/opportunity-solution-trees), which is enough to create a real decision space where hybrids and unexpected trade-offs can emerge. Second, the evaluation criteria must be set before scoring begins, which prevents the team from unconsciously choosing criteria that favor the solution it already prefers. Third, evidence must be separated from assumptions. For each cell you note whether you actually know something (from interviews, data, prior tests) or are assuming it. That separation connects the comparison directly to Torres's advice to [break each selected solution into its underlying assumptions](https://producttalk.org/opportunity-solution-trees): the cells marked 'assumption' become your testing backlog.

The scoring is about pattern recognition, not precision. You are not trying to calculate an exact score for each solution. You're looking for clusters: which solution is strong across most criteria with one manageable weakness, which is spectacular on desirability but has a fatal feasibility gap, and which is safe but uninspiring. A solution strong everywhere with one weakness is often the best bet if you can mitigate that weakness. A solution adequate everywhere and excellent nowhere is usually the weakest choice, because it won't differentiate you.

Illustrative scenario: a trio compares three made-up solutions for the opportunity 'I can't tell which invoices are overdue.'

| Solution | Fit to opportunity | Riskiest assumption | Effort |
|---|---|---|---|
| Overdue badge on invoice list | Strong | Users open the list daily | About 5 days |
| Weekly overdue email digest | Moderate | Users read the email | About 3 days |
| Automatic payment reminders to clients | Strong | Users trust auto-sent messages | About 20 days |

The comparison is a decision under uncertainty, and the framework makes that uncertainty visible instead of hiding it. Cells marked 'low confidence, assumption' are the honest output of a team that knows what it doesn't know. Rather than settling the question by opinion, you [evaluate solutions through assumption tests](https://producttalk.org/opportunity-solution-trees), and the comparison tells you which assumptions about the leading solution to test first.

## Step-by-Step Guide

### Step 1: Select the Target Opportunity and Gather Context

Before you compare solutions, you need one clearly defined opportunity to solve for, so pull up your opportunity solution tree and identify the specific node you're addressing. Torres advises [focusing solution generation on a selected target opportunity](https://producttalk.org/opportunity-solution-trees) rather than brainstorming across the whole tree. Review the interview evidence behind it: the exact pain points, unmet needs, and desires customers described. Write a one-paragraph opportunity statement in the customer's language.

This context anchors every evaluation that follows; without it, criteria drift toward abstract qualities like 'innovative' instead of concrete ones, for example 'cuts the time to finish a monthly report from an hour to ten minutes.'

> **Pro tip:** If your opportunity statement is longer than three sentences, it's probably scoped too broadly. Split it into sub-opportunities and compare solutions for the most important one first.

### Step 2: Generate Several Distinct Solutions

Gather the product trio of product manager, designer, and tech lead and generate several meaningfully different solutions; [practitioner guidance](https://github.com/phuryn/pm-skills/blob/main/pm-product-discovery/skills/opportunity-solution-tree/SKILL.md) recommends multiple candidates over the first idea and notes that each trio role brings a different perspective. Three variations of the same approach don't count: one might be a feature, another a process change, a third a new use of existing functionality. Use brainwriting, crazy eights, or 'how might we' prompts to push past the obvious first idea. Then narrow to the set you will compare, following Torres's suggestion to [choose three solutions to explore further](https://producttalk.org/opportunity-solution-trees).

Capture each with a name, a one-sentence description, and a quick sketch.

> **Pro tip:** If the team keeps generating variants of the same solution, introduce a constraint: 'What if we couldn't change the UI at all?' or 'What if this had to ship in one sprint?' Constraints force genuinely different approaches.

### Step 3: Define Evaluation Criteria Before Scoring

Before looking closely at any solution, agree on a short list of criteria, for example five to eight. Start with the four lenses of desirability, viability, feasibility, and usability, then add a few context-specific criteria such as regulatory compliance, data availability, or integration with existing systems. Write each criterion as a concrete question rather than a label, so 'Feasibility' becomes, for example, 'Can the current team build a testable version in four weeks?' This specificity stops criteria from meaning different things to different people.

Record the criteria in a shared table before anyone scores.

> **Pro tip:** Weight the criteria now if some matter more than others. A simple three-tier system of must-have, important, and nice-to-have is more useful than numeric weights, which create false precision.

### Step 4: Score Each Solution Independently

Have each trio member score every solution against every criterion before any group discussion, using a simple scale of strong, moderate, weak, or unknown. For each cell, write a one-sentence rationale and mark whether it rests on evidence (interviews, data, prior experiments) or assumption. Independence matters because the first person to speak anchors everyone else. A tech lead who says 'this would be really hard to build' before the designer has formed an opinion pulls the whole feasibility discussion toward that anchor.

Independent scoring preserves the diversity of perspective that makes the comparison valuable.

> **Pro tip:** Use a shared spreadsheet with hidden columns so team members can't see each other's scores until everyone has finished. Reveal simultaneously.

### Step 5: Reveal Scores and Discuss Disagreements

Reveal all scores at once and go straight to the cells where people disagree, since those carry more information than any cell where everyone agrees. For each disagreement, ask what evidence each person is drawing on, whether one is working from assumption, and whether they read the criterion differently. Update cells as you reach shared understanding, but don't force consensus. If real disagreement remains, mark the cell 'contested' and note the range.

Contested cells often point to the riskiest assumptions you'll need to test.

> **Pro tip:** Appoint a devil's advocate for the team's favorite solution. Their job is to steelman its weaknesses, which surfaces risks the rest of the team may be unconsciously minimizing.

### Step 6: Identify Patterns and Trade-Off Clusters

Step back from individual cells and look at the shape of the comparison instead of calculating totals. Name the patterns aloud: the safe bet that is solid everywhere and spectacular nowhere, the high-reward play with a serious feasibility question, the fast option that only partly solves the problem. Write these narrative summaries into the comparison document so the decision is legible to the team and to stakeholders. Eliminate any dominated solution, one that is worse than another on every criterion, which simplifies the final choice.

> **Pro tip:** If all the solutions cluster together with similar scores across the board, they aren't different enough. Go back and generate more divergent options.

### Step 7: Make the Decision and Document the Rationale

With the patterns visible, make an explicit decision; the product manager typically makes the final call after hearing the trio, and the comparison keeps that call informed rather than unilateral. State it plainly, for example: 'We are pursuing Solution B because it has the strongest desirability signal and its feasibility risk is testable within two weeks.' Document which solution you chose and why, which you rejected and what would change your mind, and which assumptions about the winner carry the most risk. Reversal conditions guard against escalating commitment if early signals turn negative.

Keep the write-up short enough for stakeholders to skim.

> **Pro tip:** If the team genuinely can't choose between two solutions, don't force a premature decision. Identify the one assumption that would differentiate them and design a fast test for it.

### Step 8: Build the Assumption Testing Backlog

Torres recommends [breaking each selected solution into its underlying assumptions](https://producttalk.org/opportunity-solution-trees) before deciding what to build, and the cells you marked 'assumption' or 'unknown' give you a head start. Prioritize them by how critical each is to the solution's success and how easy it is to test, and [test the riskiest assumptions first](https://getperspective.ai/blog/continuous-discovery-habits-in-2026-operationalizing-teresa-torres-s-framework-with-ai-conversations). An assumption like 'customers will understand this new navigation pattern' is high-risk and quick to check with a prototype test, while one about data pipeline capacity may need engineering investigation. List a handful of assumptions in priority order and hand them to your [assumption testing](https://tryhamster.com/skills/running-assumption-tests) process.

This step makes the comparison actionable rather than academic.

> **Pro tip:** Focus on desirability assumptions first. Feasibility problems can often be engineered around, but a solution nobody wants cannot be saved by better engineering.

## Best Practices

- Generate solutions before defining criteria, but define criteria before scoring. This sequence avoids generating solutions to fit predetermined criteria, which limits creativity, and defining criteria after seeing solutions, which quietly favors the team's current favorite. If you reverse the order, your comparison will tend to validate the first idea proposed.
- Score confidence separately from strength. A cell can be 'strong, high confidence' (interview data shows customers want this) or 'strong, low confidence' (we think so based on analogous products). Treating these the same leads to overinvestment in untested solutions, so low-confidence cells should map directly to your assumption testing backlog.
- Keep the comparison table visible throughout the cycle, not just during the decision meeting. Teams that bury the artifact soon forget why they rejected alternatives and can't answer the stakeholder who asks 'why didn't you just do X?'
- Time-box the comparison session, for example to 90 minutes. If you can't finish in that window, your solutions aren't defined crisply enough or you have too many criteria. Cut criteria to the ones that actually differentiate the options and simplify the solution descriptions.
- Involve the full product trio in every comparison. A product manager working alone tends to overweight desirability and underweight feasibility, and a comparison without a designer tends to miss usability trade-offs. No single role can assess all four lenses well.
- Update the comparison when new evidence arrives. When an assumption test returns surprising results, update the relevant cells and re-examine the patterns. Sometimes new evidence makes a previously rejected solution the clear winner.
- Document rejected solutions with their reversal conditions, not just the winner. 'We would reconsider Solution C if we learned our API could handle real-time sync' is far more useful than 'Solution C rejected.' Reversal conditions turn past decisions into future triggers and stop the team re-litigating without new information.

## Common Mistakes

- **Comparing two solutions instead of three or more.** — Two solutions create a false binary that collapses into a popularity contest, and the meeting feels like a debate rather than an exploration. Generate several meaningfully different solutions and compare at least three. If you struggle to produce a third, use a constraint such as 'What if we had to solve this without writing any new code?'
- **Scoring solutions as a group from the start, without independent assessment.** — Group scoring anchors everyone on the first speaker, and junior members self-censor disagreements, especially when the anchor comes from someone senior. The diagnostic signal is suspicious consensus on nearly every cell. Score independently first, reveal simultaneously, and focus discussion on the disagreements.
- **Using criteria that are too vague, like 'innovation' or 'strategic alignment.'** — Vague criteria produce scores that agree on paper but measure different things, which you'll notice when discussion reveals people read the criterion differently. Rewrite every criterion as a concrete question, for example 'Can the current team build a testable version in four weeks?' instead of 'Feasibility.'
- **Calculating a total score and using it as the decision.** — Summing scores implies every criterion is equally weighted and that strength in one area offsets weakness in another, which hides a fatal feasibility gap behind a high total. Totals also erase the pattern information that makes comparisons valuable. Name the pattern instead, for example 'Solution B is strongest overall but has a feasibility risk we need to test next.'
- **Treating the comparison as a one-time gate rather than a living artifact.** — When the table is never revisited, it turns into post-hoc justification, and the team hits a wall with its chosen solution without reconsidering alternatives it already evaluated. Revisit the comparison after each round of assumption tests, update cells with new evidence, and check whether the patterns have shifted.
- **Comparing solutions at different levels of fidelity.** — A detailed spec with wireframes will always look stronger than a one-sentence concept, usually because it has floated around the team for weeks. Give every solution the same detail: a name, a one-sentence description, and a sketch. If one is far more developed, deliberately spend a short session, for example 15 minutes, fleshing out the others before scoring.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/continuous-discovery-habits/METHOD.md) — Continuous Discovery Habits

## Related Skills

- [Building Opportunity Solution Trees](../building-opportunity-solution-trees/SKILL.md)
- [Conducting Weekly Customer Interviews](../conducting-weekly-customer-interviews/SKILL.md)
- [Defining Product Outcomes Over Outputs](../defining-product-outcomes-over-outputs/SKILL.md)
- [Mapping and Prioritizing Customer Opportunities](../mapping-customer-opportunities/SKILL.md)
- [Running Assumption Tests](../running-assumption-tests/SKILL.md)
- [Story Mapping Customer Experiences](../story-mapping-customer-experiences/SKILL.md)
- [Automating Continuous Research Recruitment](../automating-participant-recruitment/SKILL.md)

## Sources

- [Continuous Discovery Habits in 2026: Operationalizing Teresa](https://getperspective.ai/blog/continuous-discovery-habits-in-2026-operationalizing-teresa-torres-s-framework-with-ai-conversations)
- [Opportunity Solution Trees: Visualize Your Discovery to Stay](https://producttalk.org/opportunity-solution-trees)
- [Opportunity Solution Tree \(OST\) - pm-skills - GitHub](https://github.com/phuryn/pm-skills/blob/main/pm-product-discovery/skills/opportunity-solution-tree/SKILL.md)
