---
name: estimating-work-with-story-points
description: "This skill teaches you how to use relative estimation techniques—story points and planning poker—to size work items, forecast sprint capacity, and improve your Scrum team's predictability over time."
metadata:
  homepage: https://tryhamster.com
  method: scrum
---

# Scrum Estimation: Estimating Work with Story Points and Planning Poker

> This skill teaches you how to use relative estimation techniques—story points and planning poker—to size work items, forecast sprint capacity, and improve your Scrum team's predictability over time.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes |
| Outcome | Your team will consistently size work using a shared estimation language, enabling accurate sprint planning and reliable delivery forecasts. |
| Prerequisites | Basic understanding of Scrum framework and sprints, Familiarity with user stories and acceptance criteria, A refined product backlog with well-defined backlog items |
| Part of | [Scrum](../../methods/scrum/METHOD.md) |

## Overview

Scrum estimation is one of the most debated yet essential practices in agile software development. Rather than guessing how many hours a task will take—a notoriously inaccurate approach—story points let teams express the relative effort, complexity, and uncertainty of work items on a standardized scale. When combined with planning poker, a structured consensus-building game, teams surface hidden assumptions, share knowledge, and arrive at estimates the entire group owns.

The real power of scrum estimation isn't in any single estimate's accuracy. It's in the pattern that emerges over sprints. As your team tracks velocity—the total story points completed per sprint—you gain an empirical baseline that turns abstract estimates into concrete delivery forecasts. Product owners can answer stakeholder questions like "When will this feature ship?" with data rather than hope.

This skill is foundational to the broader [Scrum](https://tryhamster.com/methods/scrum) framework. It directly feeds into [planning and executing sprints](https://tryhamster.com/skills/planning-and-executing-sprints) and depends on having a well-maintained backlog through [grooming and refining the product backlog](https://tryhamster.com/skills/grooming-the-product-backlog). Master it, and every other Scrum ceremony becomes more effective.

## How It Works

Story points are a unit of relative measure. Instead of asking "How many hours will this take?", you ask "How big is this compared to something we've already done?" A team establishes a reference story—a small, well-understood piece of work rated at, say, 3 points—and sizes everything else relative to it.

The Fibonacci sequence (1, 2, 3, 5, 8, 13, 21) is the most popular scale because the increasing gaps between numbers force teams to acknowledge growing uncertainty. You can confidently distinguish a 2-point story from a 3-point story, but at higher magnitudes, the difference between 19 and 21 units of effort is meaningless—so the scale doesn't offer that false precision.

Planning poker is the mechanism that prevents anchoring bias and groupthink during estimation. Each team member holds a deck of Fibonacci-numbered cards. After a story is presented and discussed, everyone simultaneously reveals their card. If estimates diverge significantly (e.g., one person plays a 3 while another plays a 13), the outliers explain their reasoning. This surfaces risks, misunderstandings, and hidden complexity that the team would otherwise miss. After discussion, the team re-votes until estimates converge.

Over time, the team's velocity—the rolling average of story points completed per sprint—becomes a powerful planning tool. If your average velocity is 34 points and the remaining backlog totals 170 points, you can forecast roughly five sprints to completion, accounting for variance.

## Step-by-Step Guide

### Step 1: Step 1: Select and calibrate a reference story

Before your first planning poker session, the team needs a shared baseline. Pull a recently completed user story that the whole team worked on and understands well. It should be small but not trivial—something that involved a bit of development, testing, and review. Assign it a baseline value, typically 3 or 5 points.

Walk the team through why this story earns its point value: the development effort involved, the complexity of the logic, any uncertainty about requirements, and the testing burden. This calibration conversation is crucial because it aligns everyone's mental model of what a "3" or "5" actually means on your team.

> **Pro tip:** Choose a reference story from the same domain your team typically works in. A backend API story makes a poor baseline if 80% of your backlog is frontend work.

### Step 2: Step 2: Prepare the backlog items for estimation

Ensure each story coming into the estimation session has a clear title, description, and acceptance criteria. Stories that are vague or too large (epics masquerading as stories) will produce wildly divergent estimates and waste time.

Work with the product owner to pre-filter the backlog. Only bring stories that are likely to be pulled into the next 1-2 sprints. This keeps sessions focused. If a story triggers too many questions during estimation, flag it for further [backlog refinement](https://tryhamster.com/skills/grooming-the-product-backlog) rather than burning the room's energy trying to estimate something undefined.

> **Pro tip:** A good rule of thumb: if the product owner can't answer two clarifying questions about a story on the spot, it's not ready for estimation.

### Step 3: Step 3: Run the planning poker session

Gather the development team (everyone who will do the work). The product owner reads the story aloud and answers clarifying questions. Set a time box of 2-3 minutes for discussion before the first vote.

Once discussion ends, everyone simultaneously reveals their card. If all estimates are within one step on the Fibonacci scale (e.g., all 5s and 8s), take the higher number or the majority and move on. Speed matters—you'll refine your instincts over time.

If estimates diverge by more than one step, ask the highest and lowest estimators to explain their reasoning. Often the high estimator has spotted a risk others missed, or the low estimator has a simpler implementation approach the team hadn't considered. After this discussion, vote again. Most stories converge within two rounds.

> **Pro tip:** Use a physical or digital timer. Without one, discussions on a single story can easily consume 15 minutes. Aim for 2-5 minutes per story including voting.

### Step 4: Step 4: Handle outliers and edge cases

Sometimes a story consistently gets extreme estimates—some team members play a 2 while others play a 21. This is a signal, not a problem. It typically means the story is poorly defined, team members have vastly different assumptions about scope, or there's hidden technical debt.

When this happens, don't force consensus. Instead, document the disagreement, move the story back to refinement, and ask the product owner to clarify scope or break it into smaller stories. Artificially averaging divergent estimates destroys the very signal that makes planning poker valuable.

> **Pro tip:** If someone plays the '?' card (or the infinity card in some decks), treat it as a hard stop—that person doesn't have enough information to estimate, and the story needs more definition.

### Step 5: Step 5: Record estimates and calculate initial velocity

Log every estimate in your project management tool—whether that's [Jira](https://tryhamster.com/skills/managing-scrum-boards-in-jira), Linear, or a simple spreadsheet. At the end of each sprint, record how many story points the team actually completed (not started, completed).

For new teams, it takes 3-4 sprints to establish a reliable velocity baseline. During this calibration period, resist the urge to over-commit. Use the lowest sprint's completed points as your capacity estimate for the next sprint until you have enough data for a rolling average.

> **Pro tip:** Track velocity as a 3-sprint rolling average rather than a single-sprint snapshot. This smooths out anomalies from holidays, sick days, or unusually complex work.

### Step 6: Step 6: Use velocity for sprint planning and forecasting

Once you have a stable velocity, sprint planning becomes much more predictable. During [sprint planning](https://tryhamster.com/skills/planning-and-executing-sprints), pull stories from the top of the backlog until you hit your velocity ceiling. If your rolling average is 34 points, plan for 30-34 points of work.

For longer-range forecasting, divide the total remaining backlog points by your average velocity to estimate the number of sprints needed. Present this as a range (optimistic velocity vs. pessimistic velocity) rather than a single number to communicate uncertainty honestly to stakeholders.

> **Pro tip:** Never inflate velocity by counting incomplete stories. This creates a false signal that compounds over time and erodes trust in your forecasts.

### Step 7: Step 7: Recalibrate periodically

Every 6-8 sprints, or when team composition changes significantly, revisit your reference story and recalibrate. Teams naturally improve over time—what was once a 5-point story may now feel like a 3 because the team has built expertise in that area.

Recalibration doesn't mean retroactively changing old estimates. It means acknowledging that your scale may have drifted and consciously resetting. Some teams do this as part of a [retrospective](https://tryhamster.com/skills/facilitating-sprint-retrospectives), reviewing a handful of recently completed stories and asking: "Does our estimate for this still feel right compared to our baseline?"

## Best Practices

- Estimate as a whole team—never let one person (especially a lead or manager) dictate story point values. The collective intelligence of the group surfaces risks that individuals miss.
- Keep estimation sessions under 60 minutes. After that, decision fatigue sets in and estimate quality degrades. If you have more stories, schedule a second session.
- Compare stories to each other, not to clock time. Ask "Is this bigger or smaller than our reference story?" rather than "How many days will this take?"
- Use the '13' and '21' point values as warning flags. Stories this large should almost always be broken down into smaller pieces before entering a sprint.
- Revisit and discuss estimation accuracy during retrospectives. Track which stories were significantly over- or under-estimated and discuss what signals the team missed.
- Let the people doing the work do the estimating. Product owners and Scrum Masters facilitate but should not hold estimation cards.

## Common Mistakes

- **Converting story points to hours or using them as a productivity metric** — Story points measure relative complexity, not time. Using them to compare developer productivity or convert to billable hours destroys psychological safety and incentivizes gaming the system. If management needs time-based estimates, derive them from velocity data, not individual point assignments.
- **Allowing the first person to speak to anchor the entire team's estimate** — This is the exact problem planning poker solves—but only if you enforce simultaneous reveal. If team members show cards one at a time or verbally announce estimates, anchoring bias takes over. Use a digital tool or strict simultaneous card flip every time.
- **Estimating stories that are vague or lack acceptance criteria** — Garbage in, garbage out. If a story doesn't have clear acceptance criteria, send it back to backlog refinement instead of guessing. The team's time is better spent estimating well-defined work than debating ambiguous requirements.
- **Treating velocity as a target to increase sprint over sprint** — Velocity is a diagnostic metric, not a performance target. Pressuring teams to increase velocity leads to point inflation—stories get rated higher to make the number look good, but actual output doesn't change. Focus on consistency, not growth.
- **Spending 10+ minutes debating whether a story is a 5 or an 8** — At adjacent Fibonacci values, the difference is noise. If two rounds of voting don't resolve it, take the higher number and move on. The precision you're chasing doesn't exist—your time is better spent estimating the next story.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/scrum/METHOD.md) — Scrum

## Related Skills

- [Defining Scrum Roles and Accountabilities](../defining-scrum-roles-and-accountabilities/SKILL.md)
- [Facilitating Sprint Retrospectives](../facilitating-sprint-retrospectives/SKILL.md)
- [Grooming and Refining the Product Backlog](../grooming-the-product-backlog/SKILL.md)
- [Planning and Executing Sprints](../planning-and-executing-sprints/SKILL.md)
- [Running Effective Daily Stand-Up Meetings](../running-daily-standups/SKILL.md)
- [Conducting Sprint Reviews and Demos](../conducting-sprint-reviews/SKILL.md)
- [Managing Scrum Boards in Jira](../managing-scrum-boards-in-jira/SKILL.md)
