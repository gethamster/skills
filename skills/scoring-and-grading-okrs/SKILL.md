---
name: scoring-and-grading-okrs
description: "This skill teaches you how to evaluate OKR progress using the 0.0-1.0 scoring scale, distinguish between committed and aspirational target expectations, and translate scores into organizational learning rather than performance judgment."
metadata:
  method: objectives-and-key-results-okrs
---

# OKR Scoring System: How to Score and Grade OKRs at End of Cycle

> This skill teaches you how to evaluate OKR progress using the 0.0-1.0 scoring scale, distinguish between committed and aspirational target expectations, and translate scores into organizational learning rather than performance judgment.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes per team's OKR set |
| Outcome | You produce a scored OKR scorecard with numerical grades, color-coded status, and a written interpretation for each objective that the team uses to calibrate future goal-setting and surface systemic execution issues. |
| Prerequisites | Familiarity with the OKR framework and the distinction between objectives and key results, Key results with quantifiable targets already defined at cycle start, Access to actual progress data or metrics for each key result, Understanding of the difference between committed and aspirational OKRs |
| Part of | [Objectives and Key Results (OKRs)](../../methods/objectives-and-key-results-okrs/METHOD.md) |

## Overview

Scoring and grading OKRs is the critical final step of every [OKR cycle](https://tryhamster.com/methods/objectives-and-key-results-okrs). Without a disciplined scoring process, the entire framework collapses into a wish list. Teams set ambitious goals at the start of the quarter, do the work, and then either forget to evaluate or gloss over results in a rushed all-hands. The scoring ritual is what closes the loop, turning aspirations into calibrated learning. It answers three questions simultaneously: Did we achieve what we set out to achieve? Were our goals the right level of ambitious? And what should we do differently next cycle?

The standard OKR scoring system uses a 0.0 to 1.0 numeric scale for each key result. This is not a performance review score. It is a measurement of progress against a pre-defined, quantifiable target. A key result that targeted 1,000 new signups and achieved 700 scores 0.7. The math is straightforward, but the interpretation is where skill matters. For aspirational OKRs (sometimes called "moonshots" or "stretch goals"), a 0.7 is actually the ideal outcome. It means you stretched far enough that you could not trivially complete the goal, but you still made substantial progress. For committed OKRs (targets you promised to deliver), anything below 1.0 signals a problem that needs root cause analysis. Conflating these two categories is the single most common scoring error teams make.

The concrete artifact you produce is a scored OKR scorecard. This is typically a table or spreadsheet showing each objective, its child key results, the numeric score for each key result, the averaged score for the objective, a color-coded status indicator (red, yellow, green), and a brief written interpretation explaining what the score means in context. This scorecard feeds directly into the next cycle's [OKR planning session](https://tryhamster.com/skills/running-okr-planning-sessions), informing whether goals need to be raised, lowered, carried over, or abandoned entirely. Teams that skip scoring or treat it as a formality tend to repeat the same planning mistakes quarter after quarter, setting goals that are either sandbagged (consistently hitting 1.0 on aspirational OKRs) or detached from reality (consistently scoring below 0.3).

Beyond the numbers, the scoring conversation matters as much as the scores themselves. A well-run scoring session surfaces execution blockers, resource constraints, shifting priorities, and misaligned dependencies. It creates a shared understanding of what happened and why, which is far more valuable than the numeric grade alone. The score is the starting point for the conversation, not the conclusion.

## How It Works

The OKR scoring system works because it imposes a universal, numeric language on goal evaluation. Without it, teams default to subjective assessments like "we made good progress" or "things went okay," which are impossible to compare across teams, track over time, or use as calibration inputs. The 0.0 to 1.0 scale forces precision. It requires you to define, at the moment of scoring, exactly how much of the target was achieved as a proportion of the full target. This proportion is the score.

The formula for most key results is simple: **Score = Actual Result / Target Result**. If your key result was "Increase monthly active users from 10,000 to 15,000" and you ended at 13,500, the calculation is (13,500 - 10,000) / (15,000 - 10,000) = 0.7. You are measuring progress from the baseline, not the raw number. This baseline-adjusted calculation is important because it correctly captures the delta of improvement rather than rewarding teams for starting from a high base.

The real nuance in the [OKR scoring system](https://tryhamster.com/methods/objectives-and-key-results-okrs) is the interpretation layer, which hinges on the committed vs. aspirational distinction. Committed OKRs are promises. They represent deliverables the team has agreed to complete, and the organization is making resource and planning decisions based on the assumption these will be hit. For committed OKRs, the expected score is 1.0. A score below 1.0 on a committed OKR requires a postmortem: Was the commitment unrealistic? Did priorities shift? Were there execution failures? Aspirational OKRs are stretch goals. They represent the best possible outcome if everything goes right and then some. The expected score for aspirational OKRs is 0.6 to 0.7. Consistently scoring 1.0 on aspirational OKRs means you are not stretching far enough, and your goal-setting is too conservative.

The objective-level score is typically the arithmetic average of its key result scores. If an objective has three key results scoring 0.8, 0.5, and 0.7, the objective score is 0.67. Some teams use weighted averages when key results have different levels of importance, but simple averaging works well for most organizations and avoids the complexity of debating weights at scoring time. The color coding convention is generally: Green (0.7-1.0), Yellow (0.4-0.6), Red (0.0-0.3). These thresholds apply to aspirational OKRs. For committed OKRs, any score below 1.0 is effectively yellow or red.

A critical assumption in the system is that the targets were well-defined at the start of the cycle. If a key result was vague ("improve customer satisfaction") rather than specific ("increase NPS from 32 to 45"), scoring becomes subjective and loses its calibrating power. This is why the quality of [key result definition](https://tryhamster.com/skills/defining-measurable-key-results) directly determines the quality of scoring. Garbage in, garbage out. The scoring process will expose weak key results, but by that point the cycle is already over. The best teams use scoring retrospectives to improve their key result writing for the next cycle, creating a feedback loop that tightens the system over time.

## Step-by-Step Guide

### Step 1: Step 1: Gather Actual Results Data Before the Scoring Session

Before the scoring meeting, collect the actual measured result for every key result. This means pulling the real numbers from your analytics platforms, CRM, financial systems, project trackers, or whatever source of truth was established when the key result was written. For each key result, you need three numbers: the baseline (where you started), the target (where you aimed), and the actual (where you ended). Document all three in a shared spreadsheet or OKR tool.

0. If the data is ambiguous or unavailable, flag it for discussion rather than guessing. Do this data collection at least 24 hours before the scoring session so team members have time to review and raise questions about data accuracy.

> **Pro tip:** Send the pre-populated scorecard to participants in advance with a note asking them to review the numbers and flag any they disagree with. This prevents the scoring session from turning into a data verification meeting.

### Step 2: Step 2: Calculate the Raw Score for Each Key Result

Apply the scoring formula to each key result. For continuous metrics, the formula is: Score = (Actual - Baseline) / (Target - Baseline). 0 even if the actual exceeds the target. 0 for incomplete.

75). If a key result used a declining metric (reduce churn from 8% to 4%), apply the same formula but note that the actual should be lower than baseline for a positive score. Record each score to one decimal place. Two decimal places adds false precision for a system designed to produce directional signals, not exact measurements.

> **Pro tip:** If a key result was abandoned mid-cycle due to a legitimate strategic pivot (not just poor execution), score it as N/A rather than 0.0. This prevents strategic agility from being penalized in the scoring data.

### Step 3: Step 3: Label Each OKR as Committed or Aspirational

Before interpreting any scores, confirm the classification of each OKR. This classification should have been established during the planning session at the start of the cycle, but if it was not, establish it now by consensus before looking at scores. Committed OKRs are goals the team promised to deliver. Aspirational OKRs are stretch goals representing ideal outcomes.

The interpretation of the same numeric score differs dramatically based on this classification. 6 on a committed OKR is a failure requiring root cause analysis. 6 on an aspirational OKR is a respectable result. If your team did not distinguish between committed and aspirational at planning time, default to treating all OKRs as aspirational for this cycle.

Then add the committed/aspirational label to your next cycle's planning process.

> **Pro tip:** A healthy ratio is roughly 60-70% committed OKRs and 30-40% aspirational. If every OKR is aspirational, the team lacks accountability. If every OKR is committed, the team lacks ambition.

### Step 4: Step 4: Calculate the Objective-Level Score

Average the key result scores to produce a single score for each objective. 7. If your team uses weighted key results (where some key results matter more than others), apply the weights now. 76.

Most teams should start with simple averaging and only introduce weights after several cycles, once the team has calibrated what "more important" actually means in practice. Record the objective-level score alongside the individual key result scores.

> **Pro tip:** If one key result massively underperformed (below 0.2) while others hit 0.7+, do not let the average mask the outlier. Flag it separately in your scorecard. The average tells you about the objective overall. The outlier tells you something specific went wrong that needs its own discussion.

### Step 5: Step 5: Apply Color-Coded Grading

Assign a visual grade to each objective and key result using a three-color system. 3 (minimal progress, requires root cause analysis). 7 (significant miss on a commitment). Update your OKR tracking tool or spreadsheet with these colors.

The color coding serves as a rapid visual scan for leadership and cross-functional stakeholders who need to understand performance at a glance without reading every number.

> **Pro tip:** Resist the urge to use more than three colors or add gradients. The purpose of color coding is fast pattern recognition, not precision. The numeric score already carries the precision.

### Step 6: Step 6: Write a Brief Interpretation for Each Objective

For each objective, write two to four sentences explaining what the score means in context. This interpretation should answer: Why did we score this way? Was the goal well-calibrated? What external factors influenced the result?

The interpretation is the most valuable part of the scorecard because it captures institutional knowledge that the number alone cannot convey. 5 on reducing churn, primarily because the pricing change we planned was delayed by legal review until week 10, leaving only 3 weeks of impact. 5 and assume the team underperformed, when the real story is a process bottleneck. Write the interpretation before the group discussion so it captures the OKR owner's honest assessment.

> **Pro tip:** Use a consistent format: one sentence on the score, one sentence on the primary driver, one sentence on the implication for next cycle. This structure makes interpretations scannable across many OKRs.

### Step 7: Step 7: Facilitate the Team Scoring Retrospective

Bring the team together for a 45 to 60 minute scoring session. Share the pre-populated scorecard with scores, colors, and interpretations visible to everyone. Walk through each objective in order, spending the most time on red and yellow items. For each objective, the OKR owner presents their interpretation, and the team discusses whether they agree, whether there are additional root causes, and what the implications are for next cycle.

Keep the tone diagnostic, not evaluative. " Document action items that emerge, such as carrying an OKR forward, adjusting a target, escalating a blocker, or changing an approach entirely. End the session by identifying the top two to three systemic patterns across all OKRs, such as consistently over-ambitious timelines, dependency bottlenecks, or measurement gaps.

> **Pro tip:** Timebox discussion per objective based on its color. Green items get 2-3 minutes of acknowledgment. Yellow items get 5-7 minutes. Red items get 10-12 minutes. Without timeboxing, teams spend equal time on everything or get stuck on the first red item.

### Step 8: Step 8: Archive the Scorecard and Feed Forward into Next Cycle

Store the completed scorecard in your team's shared repository. The scorecard should include: all key result scores, objective scores, color grades, written interpretations, and action items from the retrospective. This historical record is essential for calibration. 9+ (sandbagging)?

7 (overcommitting)? Are certain types of key results always underperforming (measurement problem)? Feed specific insights into the next cycle's [planning session](https://tryhamster.com/skills/running-okr-planning-sessions). 3 on a key result because the underlying project was deprioritized, that insight should inform whether to include a similar key result next quarter or whether to first secure the resource commitment.

> **Pro tip:** Create a simple "scoring trends" chart after your third cycle. Plot the average aspirational score and average committed score per quarter. Healthy teams converge toward 0.6-0.7 for aspirational and 0.9-1.0 for committed over time.

## Best Practices

- Score key results independently and in writing before any group discussion. When teams discuss scores verbally first, anchoring bias pulls everyone toward the first number stated, and social pressure compresses the range of scores toward the middle. Having each OKR owner submit their proposed scores before the meeting produces more honest assessments and surfaces genuine disagreements that need resolution.
- Never use OKR scores as the basis for individual performance reviews, compensation decisions, or promotion criteria. The moment scores are tied to rewards or punishment, teams will sandbag their targets to guarantee high scores. This destroys the entire purpose of aspirational goal-setting and turns OKRs into a compliance exercise. OKR scores measure organizational learning and goal calibration, not individual merit.
- Treat a consistent pattern of 1.0 scores on aspirational OKRs as a problem, not a success. If a team hits every aspirational target three cycles in a row, the goals were not aspirational. Coach the team to set targets that feel uncomfortable, where achieving 70% of the target would still represent meaningful progress. The discomfort is a feature, not a bug.
- Keep the scoring meeting separate from the planning meeting. Combining them causes teams to rush through scoring to get to the more exciting work of planning new goals. Scoring deserves its own dedicated time because the insights from scoring directly improve the quality of next cycle's goals. Schedule scoring at least two to three days before the planning session.
- Define the measurement methodology for each key result at the start of the cycle, not at scoring time. If the team debates how to measure a key result during scoring, the discussion will be influenced by the answer they want to see. The measurement approach, data source, and calculation method should be documented alongside the key result when it is written.
- Review scores at the team level before rolling up to organizational leadership. Team-level scoring conversations should happen in a psychologically safe environment where people can be honest about what went wrong. Once scores are shared upward, the dynamic changes. Let teams have their internal learning conversation first, then share the synthesized scorecard with interpretations attached.
- Track the percentage of key results scored as N/A each cycle. If more than 20% of key results are abandoned or marked not applicable, the planning process is broken. Either the team is overcommitting, or priorities are shifting so frequently that quarterly OKRs are not the right cadence. This metric is a signal to review your [OKR cadence](https://tryhamster.com/skills/setting-okr-cadence-and-cycles).
- Round scores to one decimal place and resist false precision. Reporting a score of 0.73 vs. 0.70 implies a level of measurement accuracy that OKRs are not designed to deliver. The system works on broad bands (red, yellow, green), and the numeric score is a directional indicator. One decimal place is sufficient for all practical purposes.

## Common Mistakes

- **Treating all OKRs the same regardless of committed vs. aspirational classification** — This is the most damaging scoring error because it leads to either false alarm or false comfort. 6 on a deliverable the organization was counting on. 5 on a stretch goal that still delivered meaningful progress. The fix is to establish the classification during the planning session and record it in the OKR tracker.

At scoring time, reference the classification before interpreting any number. If the classification was never established, default to aspirational and add the labeling step to next cycle's planning.
- **Scoring qualitative or vague key results by inventing a number that feels right** — 6 based on gut feel. This pollutes the scoring data with non-comparable numbers. The signal that you have this problem is disagreement during the scoring session about what score a key result deserves, where no one can point to a measurement to resolve the debate. The fix is not to invent a better number at scoring time.

Instead, score it as N/A, note that the key result was poorly defined, and rewrite it with a measurable target for the next cycle. Use the [defining measurable key results](https://tryhamster.com/skills/defining-measurable-key-results) skill to prevent this upstream.
- **Inflating scores to avoid difficult conversations or to make the team look good** — Score inflation happens gradually and is often invisible to the team doing it. 8, quarter after quarter, with little variation. Real performance has variance. If your scores are suspiciously uniform, someone is rounding up.

The root cause is usually that scores feel like performance judgments, so people protect themselves. Counter this by explicitly stating at the start of every scoring session that scores are learning tools, not evaluations. Model vulnerability by presenting your own low scores first and focusing on what you learned. If the culture does not support honest scoring, fix the culture before expecting the OKR system to work.
- **Averaging scores across teams or departments without context to create an organizational OKR score** — 65 this quarter") creates a meaningless number that hides all useful information. 4. The aggregate tells you nothing actionable. Instead, present team-level scores side by side with their interpretations.

, "three teams scored red on key results that depended on the platform migration timeline") rather than computing averages. The value of scoring is in the specifics, not the summary.
- **Skipping the retrospective conversation and just recording numbers** — Some teams treat scoring as a data entry exercise: fill in the numbers, update the spreadsheet, move on. This captures the what but misses the why, which is where all the learning lives. 4 score could mean the goal was wrong, the execution was poor, priorities shifted, or a dependency failed. Without the conversation, you do not know which one, and you will likely repeat the same mistake.

The fix is to schedule a dedicated 45-60 minute session, timebox each objective, and require written interpretations. If you cannot get the full team together, at minimum have each OKR owner record their interpretation in writing.
- **Carrying forward unfinished OKRs verbatim without adjusting the target or approach** — When an OKR scores red or yellow, teams often copy it into the next quarter unchanged, treating the new cycle as a second chance. This ignores the information the low score provided. 3 on a key result, something was wrong, and repeating the exact same goal with the exact same approach will likely produce the exact same result. Before carrying any OKR forward, require the team to answer: What specifically will we do differently?

Does the target need to be adjusted? Is the underlying objective still the right priority? Only carry forward if the answer to the first and third questions is substantive.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/objectives-and-key-results-okrs/METHOD.md) — Objectives and Key Results (OKRs)

## Related Skills

- [Running OKR Planning and Setting Sessions](../running-okr-planning-sessions/SKILL.md)
- [Setting OKR Cadence and Planning Cycles](../setting-okr-cadence-and-cycles/SKILL.md)
- [Avoiding Common OKR Mistakes and Anti-Patterns](../avoiding-common-okr-mistakes/SKILL.md)
- [Conducting OKR Check-Ins and Progress Reviews](../conducting-okr-check-ins-and-reviews/SKILL.md)
- [Writing Effective OKR Objectives](../writing-effective-objectives/SKILL.md)
- [Aligning OKRs Across Teams and Organization Levels](../aligning-okrs-across-teams/SKILL.md)
- [Defining Measurable Key Results](../defining-measurable-key-results/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
