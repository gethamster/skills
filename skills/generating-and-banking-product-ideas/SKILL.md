---
name: generating-and-banking-product-ideas
description: "This skill teaches you how to create, populate, and maintain an always-open idea bank that continuously captures hypothetical solutions mapped to strategic goals, so your team never runs out of validated candidates when planning step-project experiments."
metadata:
  method: gist-planning-framework
---

# Building and Managing an Idea Bank for Product Development

> This skill teaches you how to create, populate, and maintain an always-open idea bank that continuously captures hypothetical solutions mapped to strategic goals, so your team never runs out of validated candidates when planning step-project experiments.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Beginner |
| Time to Learn | 60-90 minutes for initial setup, then 15 minutes per week ongoing |
| Outcome | You maintain a living repository of 30+ scored and goal-linked product ideas that the team can pull from at any planning cycle, eliminating brainstorming bottlenecks and ensuring every experiment traces back to a strategic objective. |
| Prerequisites | Familiarity with the GIST Planning Framework's four layers (Goals, Ideas, Step-projects, Tasks), At least one defined strategic goal with a measurable metric, Basic understanding of ICE scoring (Impact, Confidence, Ease) for rough prioritization, Access to a collaborative document or lightweight database tool (spreadsheet, Notion, Airtable, or similar) |
| Part of | [GIST Planning Framework](../../methods/gist-planning-framework/METHOD.md) |

## Overview

Most product teams treat ideation as an event. They schedule a brainstorming session, generate a burst of sticky notes, pick a few winners, and discard the rest. This approach has two structural problems. First, it creates a feast-or-famine dynamic where the team has too many ideas right after the session and zero new ones two weeks later. Second, it decouples ideas from strategic context because the brainstorm happens in isolation from the goals the team is actually pursuing. The idea bank solves both problems by turning ideation from a periodic event into a continuous, structured process. If you are learning how to become a product manager, mastering the idea bank is one of the first tangible systems you can build to demonstrate strategic thinking and organizational discipline.

Within the [GIST Planning Framework](https://tryhamster.com/methods/gist-planning-framework), the idea bank occupies the second layer. Goals define what the team wants to achieve. Ideas are the hypothetical solutions that might move those goals. Step-projects are the small experiments that test whether an idea actually works. Tasks are the daily actions inside each step-project. The idea bank sits between goal-setting and experiment design, serving as the pipeline that connects ambition to action. Without a healthy bank, the team either defaults to the loudest voice in the room or reruns the same stale ideas every quarter. With a well-managed bank, every planning cycle starts with a curated set of candidates already linked to measurable goals and rough-scored for priority.

The concrete artifact you produce is a shared, structured list. Each entry contains the idea's working title, a two-to-three sentence description of the proposed solution, the goal it maps to, an initial ICE score (Impact, Confidence, Ease on a 1-10 scale), the submitter's name, the submission date, and a status field (new, under review, selected for experiment, parked, or retired). The bank is never closed. Anyone can add an idea at any time. The only governance is a lightweight quarterly review where the team scores, re-scores, and selects top candidates for step-project design. Over time, a healthy bank grows to 50-100+ entries, with new ideas flowing in and old ones naturally aging out as goals shift.

## How It Works

The idea bank works because it separates the act of generating ideas from the act of evaluating them, and it separates both from the act of executing them. This three-way separation matters. When generation and evaluation happen simultaneously, as they do in most brainstorms, two biases dominate. Anchoring bias causes the group to cluster around the first idea voiced. Social desirability bias causes people to suppress ideas that feel risky or unconventional. By making the bank always open and asynchronous, you remove both pressures. A junior engineer can submit an idea at 11 PM on a Tuesday without worrying about the room's reaction.

The goal-linking requirement is the structural innovation that prevents the bank from becoming a junk drawer. Every idea must reference at least one active strategic goal. This forces the submitter to think about why the idea matters, not just what it is. It also makes the bank self-pruning: when goals change at the annual or quarterly review cycle, ideas linked to retired goals become visibly orphaned. You do not delete them, but they naturally sink in priority because they no longer connect to anything the team is pursuing. This is fundamentally different from a backlog, which tends to accumulate items with no mechanism for natural deprecation.

The ICE scoring layer gives you a rough, fast sorting mechanism without requiring deep analysis. The submitter provides an initial score, which is explicitly labeled as a guess. During the quarterly review, the team re-scores the top candidates with slightly more rigor. The scores are not meant to be precise. They exist to create a rank order that the team can then debate. This is important to understand: ICE scores in the idea bank are conversation starters, not decision-makers. The real decision happens when the team selects ideas for [step-project experiments](https://tryhamster.com/skills/designing-step-projects-as-experiments), which is where you invest the effort to define success metrics, experiment duration, and resource allocation.

The always-open nature of the bank also creates a valuable feedback loop with customer research, support tickets, and competitive intelligence. When a support agent notices a recurring complaint, they can drop an idea into the bank immediately, tagged to the relevant goal. When a competitor launches a feature, anyone can log a response idea. Over weeks and months, patterns emerge. You will notice clusters of ideas around the same goal, which signals either a rich opportunity space or a poorly defined goal that needs splitting. Both signals are useful.

For anyone studying how to become a product manager, the idea bank is a powerful portfolio artifact. It demonstrates that you think in systems, not just features. It shows you can connect execution to strategy. And it proves you understand that product management is not about having the best idea yourself. It is about building a system that surfaces the best ideas from everywhere in the organization. The [GIST Planning Framework](https://tryhamster.com/methods/gist-planning-framework) treats ideas as cheap, disposable hypotheses. The bank embodies that philosophy by making it easy to generate many ideas, score them lightly, and invest deeply only in the ones that survive scrutiny.

## Step-by-Step Guide

### Step 1: Step 1: Define the Bank's Structure and Fields

Create a shared, editable document or lightweight database with the following columns: Idea Title (short, descriptive name), Description (two to three sentences explaining the proposed solution and how it works), Linked Goal (which strategic goal this idea serves, referenced by name or ID), ICE Score fields (Impact 1-10, Confidence 1-10, Ease 1-10, and a computed average), Submitter (who proposed it), Date Submitted, and Status (New, Under Review, Selected, Parked, Retired). Add a free-text Notes column for context, links to customer feedback, or competitive references. The structure should be rigid enough to enforce completeness but simple enough that adding an idea takes under five minutes. If your tool supports it, make the Linked Goal field a dropdown or relation that pulls from your active goals list so people cannot submit ideas without connecting them to a goal.

> **Pro tip:** Resist adding more fields at setup. Every additional field increases submission friction. You can always add columns later when the team has a habit of submitting. Start minimal and expand based on what people actually ask for.

### Step 2: Step 2: Seed the Bank with 10-15 Existing Ideas

Before announcing the bank to the team, populate it yourself with 10 to 15 ideas the team has already discussed. Pull from recent meeting notes, Slack threads, support ticket themes, and your own product intuition. Write each entry in the full format so the team can see what a good submission looks like. Score each one with your best ICE guess and mark the status as New.

This seeding step is critical because an empty bank signals that the tool is not yet real. A bank with a dozen entries signals that it is alive and that contributing is a normal activity, not a special effort. Include a range of idea quality intentionally. Some should be strong candidates, some should be wild long shots.

This demonstrates that the bar for entry is low.

> **Pro tip:** Include at least two ideas that came from non-PM sources (engineering, support, sales). When you announce the bank, credit those sources explicitly. This signals that ideas from any function are welcome and valued.

### Step 3: Step 3: Link Every Idea to at Least One Active Goal

Review each seeded idea and verify that the Linked Goal field points to a currently active strategic goal from your [goal-setting process](https://tryhamster.com/skills/defining-measurable-product-goals). If an idea does not map to any active goal, either find a connection you missed or park the idea with a note explaining why it is unlinked. This step enforces the fundamental principle that ideas exist to serve goals, not the other way around. If you find yourself unable to link more than half of your seeded ideas, it may indicate your goals are too narrow or your ideas are drifting toward feature requests disconnected from strategy.

Use the linking exercise as a diagnostic. It should feel natural for most ideas and reveal misalignment for a few.

> **Pro tip:** If an idea maps to multiple goals, link it to all of them. Multi-goal ideas often score higher on Impact because they address several strategic objectives simultaneously. Flag these as high-potential candidates for early review.

### Step 4: Step 4: Assign Initial ICE Scores

For each idea, estimate Impact (how much will this move the linked goal's metric if it works, on a 1-10 scale), Confidence (how sure are you it will actually work, 1-10), and Ease (how quickly and cheaply can you test this with a step-project, 1-10). Compute the average of the three as the composite ICE score. Be explicit that these initial scores are guesses, not analysis. Write your reasoning in the Notes field so future reviewers can understand your assumptions.

Impact should reference the goal's metric directly: 'Could increase activation rate by 5-8 points' is a good note. 'This would be really impactful' is not. ' Ease should consider team capacity and technical complexity, not just calendar time.

> **Pro tip:** Score Confidence before Impact. Most people anchor Confidence to their Impact score (thinking: 'this would be amazing, so I'm pretty confident'). Scoring Confidence first forces you to evaluate evidence independently of enthusiasm.

### Step 5: Step 5: Announce the Bank and Set Submission Norms

Share the bank with the full product team, including engineering, design, support, and sales if appropriate. Explain the purpose in two sentences: this is where we capture solution ideas so we never lose them, and every idea gets a fair hearing during quarterly review. Set three norms explicitly. First, anyone can submit an idea at any time with no approval needed.

Second, every idea must link to a goal and include a brief description. Third, submitting an idea does not mean committing to build it. These norms matter because most teams have an implicit hierarchy around who is allowed to suggest product direction. The bank deliberately flattens that hierarchy.

Send a brief written guide or record a three-minute video walkthrough showing how to add an entry. Pin the bank's link in your team's primary communication channel.

> **Pro tip:** In the first two weeks, publicly thank every new submission by name in your team channel. This positive reinforcement establishes the habit faster than any process documentation.

### Step 6: Step 6: Maintain a Weekly Intake Routine

Set a 15-minute weekly recurring block to review new submissions. Your job is not to evaluate ideas for quality but to ensure completeness and clarity. Check that each new entry has a linked goal, a description that a teammate unfamiliar with the context could understand, and an initial ICE score. ' or 'Can you estimate Confidence?

' Do not rewrite other people's ideas. Ask clarifying questions and let the submitter refine. Also scan for duplicate or near-duplicate ideas. If two entries describe the same solution, merge them with credit to both submitters and combine the best elements of each description.

> **Pro tip:** Track submission volume over time. A healthy bank receives 3-5 new ideas per week from a team of 8-12 people. If submissions drop below one per week for two consecutive weeks, the bank is losing relevance. Investigate whether people forgot about it, find it too cumbersome, or feel their ideas are being ignored.

### Step 7: Step 7: Run a Quarterly Idea Review Session

Every quarter, aligned with your goal-setting cadence, hold a 60-minute review session. Before the session, sort the bank by ICE score descending and filter to ideas linked to the upcoming quarter's goals. In the session, walk through the top 10-15 candidates. For each, the submitter gives a 60-second pitch, then the group re-scores ICE collaboratively.

Write the new scores alongside the originals so you can see how perception changed. After re-scoring, the team selects 3-5 ideas to advance to the [step-project design phase](https://tryhamster.com/skills/designing-step-projects-as-experiments). ' Do not delete anything. The historical record has value for pattern recognition and for onboarding new team members who want to understand how the team thinks about product direction.

> **Pro tip:** Have each person write their ICE re-scores silently before discussing. This prevents anchoring to the first opinion voiced. Compare the written scores, discuss any items where scores diverge by more than 3 points, and use the divergence itself as a signal that the idea needs more research before selection.

### Step 8: Step 8: Archive and Reflect on Idea Patterns

After each quarterly review, spend 15 minutes looking at the bank as a whole. Count ideas per goal. Identify goals with many ideas (rich opportunity space) versus goals with few ideas (possible blind spot or a goal that needs rethinking). Note which sources generated the most submissions: was it customer research, competitive analysis, internal engineering insight, or support ticket patterns?

These meta-patterns inform how you invest in future ideation. If most ideas come from one source, deliberately diversify. If one goal has 20 ideas and another has 2, investigate whether the sparse goal is poorly defined or genuinely constrained. Write a brief quarterly summary, three to five sentences, capturing these observations and share it with the team to close the feedback loop.

> **Pro tip:** Create a simple tag system after the first quarter (e.g., source:customer-research, source:competitive, source:internal, source:support). Do not over-engineer tagging at the start. Let the natural categories emerge from the data before formalizing them.

## Best Practices

- Keep the submission bar deliberately low. The bank is not a business case document. A title, two sentences of description, a goal link, and a rough ICE score should take under five minutes. If it takes longer, you have added too much process. High submission friction kills idea flow, and dead banks cannot feed planning cycles.
- Never delete ideas from the bank. Mark them as Retired or Parked with a note explaining why, but preserve the record. Deleted ideas lose institutional memory. Retired ideas sometimes become relevant again when goals shift, and the historical record helps new team members understand the team's thinking patterns over time.
- Separate idea generation from idea evaluation in time and space. Submissions happen asynchronously, at any moment. Evaluation happens synchronously, in the quarterly review. Mixing them creates social pressure that suppresses unconventional ideas. When someone submits an idea, your response is 'Thank you, it's in the bank' not 'I'm not sure that would work.'
- Re-score ICE collaboratively but start with individual silent scores. When teams discuss Impact before scoring, the most senior or most confident voice anchors everyone else's number. Silent-first scoring surfaces genuine disagreement, which is the most valuable signal in a review session. Score divergence of more than 3 points on any dimension indicates the team lacks shared understanding of the idea, the goal, or both.
- Link every idea to a measurable goal metric, not just a goal name. 'Linked to: Improve activation' is weak. 'Linked to: Increase Day-7 activation rate from 23% to 30%' is strong. The metric link forces the submitter to think about what success looks like and makes ICE Impact scoring more grounded. Ideas linked to vague goals produce vague scores.
- Review the bank's health metrics monthly. Track total ideas, ideas per goal, submission rate per week, and the ratio of new ideas to retired ideas. A healthy bank grows at 3-5 net new ideas per week for a team of 8-12 people. If growth stalls, the bank is becoming invisible.

If it accelerates past 10 per week, some submissions may be feature requests rather than strategic ideas, and you need to reinforce the goal-linking discipline.
- Use the bank as an onboarding tool. When a new team member joins, have them read the bank end-to-end before their first planning session. It teaches them the team's strategic priorities, current thinking about solutions, and the quality bar for submissions faster than any onboarding document. Ask them to submit their first idea within the first week.

## Common Mistakes

- **Treating the idea bank as a feature backlog** — A feature backlog contains committed work items with specifications. An idea bank contains hypothetical solutions that have not been validated. The distinction matters because backlog items carry an implicit promise of delivery, while idea bank entries carry no commitment at all. If stakeholders start asking 'When will you build idea #47?' your bank has become a backlog. Fix this by renaming the bank to emphasize its exploratory nature, adding explicit 'This is a hypothesis, not a commitment' language to the header, and reinforcing in review sessions that selection means 'experiment next' not 'build next.'
- **Allowing ideas without goal links** — Unlinked ideas are the fastest path to a junk drawer. They accumulate without context, cannot be prioritized against the strategic direction, and clutter the quarterly review with tangential discussions. The symptom is a review session where half the time is spent debating ideas that do not connect to current objectives. Enforce linking at submission by making the goal field required, not optional.

If someone has an idea that does not fit any current goal, that is a signal either to refine the idea until it connects or to question whether the goal set is complete.
- **Scoring ICE only once and never re-scoring** — Initial ICE scores are guesses made with minimal information. As the team learns more from customer research, competitive moves, and technical exploration, those guesses should change. Teams that score once and sort by that score forever end up prioritizing ideas based on stale assumptions. The quarterly review exists specifically to re-score.

Watch for the pattern where the same ideas sit at the top of the bank for multiple quarters without being selected or re-evaluated. That stagnation means the scoring is decorative rather than functional.
- **Making the bank PM-only territory** — When only product managers submit ideas, you lose the engineering team's insight into technical opportunities, the support team's pattern recognition on customer pain, and the sales team's understanding of competitive gaps. The symptom is a bank full of product-shaped ideas with no technical innovations or customer-reported workarounds. Fix this by actively soliciting submissions from non-PM functions, crediting contributors publicly, and ensuring the submission format does not require product jargon. If your bank has fewer than 30% of ideas from non-PM sources after six months, you have an inclusion problem.
- **Running idea review sessions without time-boxing** — Without time constraints, quarterly reviews expand to fill all available time, with the group spending 20 minutes debating a single idea's merits. This exhausts the team and causes them to rubber-stamp the remaining ideas without real evaluation. Allocate 3-4 minutes per idea: 60 seconds for the pitch, 60 seconds for silent scoring, and 60-120 seconds for discussion of score divergences only. For a top-15 review, this fits comfortably in 60 minutes.

If you cannot finish, your bank has too many unfiltered candidates, and you need a pre-review cull of ideas linked to retired goals.
- **Purging the bank to 'keep it clean'** — Teams sometimes delete old, low-scoring, or rejected ideas to make the bank feel manageable. This destroys institutional memory and removes the data you need to spot patterns. The feeling that the bank is cluttered usually means you lack filtering, not that you have too many ideas. Add status filters and goal filters instead of deleting entries.

A bank with 200 entries and good filters is more valuable than a bank with 20 entries and no history.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/gist-planning-framework/METHOD.md) — GIST Planning Framework

## Related Skills

- [Designing Step-Projects to Validate Product Ideas](../designing-step-projects-as-experiments/SKILL.md)
- [Defining Measurable Product Goals in GIST](../defining-measurable-product-goals/SKILL.md)
- [Breaking Step-Projects into Actionable Daily Tasks](../breaking-step-projects-into-daily-tasks/SKILL.md)
- [Presenting GIST Plans in Stakeholder and Interview Settings](../presenting-gist-plans-to-stakeholders/SKILL.md)
- [Replacing Traditional Product Roadmaps with GIST Planning](../replacing-traditional-roadmaps-with-gist/SKILL.md)
- [Prioritizing Product Ideas Using ICE Confidence Scoring](../prioritizing-ideas-with-ice-scoring/SKILL.md)
- [Managing Different Planning Cadences Across GIST Layers](../managing-multi-cadence-planning-cycles/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
