---
name: conducting-sprint-reviews
description: "This skill teaches you how to run a scrum sprint review meeting that effectively demonstrates working increments to stakeholders and captures actionable feedback that shapes the product backlog."
metadata:
  method: scrum
---

# Conducting Sprint Reviews and Demos: The Scrum Sprint Review Guide

> This skill teaches you how to run a scrum sprint review meeting that effectively demonstrates working increments to stakeholders and captures actionable feedback that shapes the product backlog.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes per sprint review |
| Outcome | You will be able to facilitate sprint reviews that keep stakeholders engaged, surface meaningful feedback, and directly influence product direction through transparent inspection of the increment. |
| Prerequisites | Understanding of Scrum framework basics and sprint cycles, Familiarity with the Definition of Done, A completed sprint increment with demonstrable work, Basic facilitation skills |
| Part of | [Scrum](../../methods/scrum/METHOD.md) |

## Overview

The scrum sprint review is one of the five Scrum events and serves as the primary feedback loop between the development team and stakeholders. Held at the end of every sprint, it is where the team demonstrates the working increment—actual software, not slides—and collaborates with stakeholders to inspect what was built and adapt what comes next. Despite its importance, the sprint review is one of the most frequently misunderstood and poorly executed ceremonies in Scrum.

Many teams reduce the sprint review to a one-way status presentation where developers click through features while stakeholders passively watch. This misses the point entirely. The scrum sprint review is designed to be an interactive working session where the team and stakeholders co-create understanding about the product's trajectory. The output isn't applause—it's revised backlog items, new insights about user needs, and alignment on priorities for the next sprint.

Mastering this skill is critical because the sprint review is where organizational trust in Scrum is built or eroded. When reviews are engaging and transparent, stakeholders feel ownership over the product. When they're perfunctory or theatrical, stakeholders lose confidence and resort to backchannel requests. This guide walks you through running sprint reviews that genuinely drive product decisions, building on the broader [Scrum](https://tryhamster.com/methods/scrum) framework's emphasis on inspection and adaptation.

## How It Works

The scrum sprint review operates on the Scrum pillar of **inspection**—teams present the increment so that all participants can inspect the actual state of the product and make informed decisions about what to do next. This is distinct from a demo day or a release presentation; the sprint review is a **collaborative working session**, not a performance.

Conceptually, the sprint review closes the feedback loop that began during [sprint planning](https://tryhamster.com/skills/planning-and-executing-sprints). The Product Owner presented the sprint goal, the team committed to backlog items, and now the results are inspected against the original goal and stakeholder expectations. The gap between what was expected and what was delivered is not a failure—it's data. That data feeds directly back into the [product backlog](https://tryhamster.com/skills/grooming-the-product-backlog) as refined items, reprioritized work, or entirely new ideas.

The meeting typically follows this flow: the Product Owner opens by reviewing the sprint goal and which items met the Definition of Done; the development team demos working software; stakeholders ask questions and provide feedback; the group discusses marketplace changes, timeline impacts, and budget considerations; and the session closes with a revised product backlog that reflects everything learned. The entire meeting is time-boxed to four hours for a one-month sprint, scaled proportionally for shorter sprints.

The key conceptual shift is thinking of the sprint review not as the team presenting *to* stakeholders, but as the team and stakeholders reasoning *together* about the product. This is why the Scrum Guide explicitly calls it a "working session" rather than a "presentation."

## Step-by-Step Guide

### Step 1: Step 1: Prepare the Increment and Confirm the Definition of Done

Before the sprint review, the development team should verify that every backlog item planned for demonstration meets the team's Definition of Done. Items that are partially complete should not be demoed as if they're finished—acknowledge them separately as work-in-progress. This protects the team's credibility and gives stakeholders an accurate picture.

Prepare the demo environment in advance. This means deploying to a staging or demo environment that mirrors production as closely as possible. Avoid demoing on a developer's local machine with test data—stakeholders need to see the product in a realistic context to give meaningful feedback.

Create a brief outline of what will be shown, ordered by the sprint goal and stakeholder interest rather than the order work was completed. This isn't a script—it's a roadmap for the conversation.

> **Pro tip:** Run a 15-minute dry run with the team the day before. This isn't about rehearsing a pitch—it's about catching broken demo environments, missing test data, and awkward transitions.

### Step 2: Step 2: Invite the Right Stakeholders and Set Expectations

The sprint review should include the Scrum team (Product Owner, Scrum Master, developers) and key stakeholders—product managers, business leaders, customer representatives, support leads, or anyone whose feedback will materially affect backlog decisions. Avoid inviting people purely for visibility; that creates a presentation dynamic.

Send the invitation with a clear agenda that includes: the sprint goal, a list of completed items, any items not completed and why, and specific questions the team wants stakeholder input on. This primes attendees to come prepared with relevant context rather than generic reactions.

Explicitly frame the meeting as interactive. A line like "We'll be demoing working features and asking for your input on direction" sets a different tone than "The team will present their sprint results."

> **Pro tip:** If key stakeholders consistently skip sprint reviews, ask them what format would be more useful. Sometimes a shorter, focused review with a single stakeholder group is more effective than a large all-hands session.

### Step 3: Step 3: Open with the Sprint Goal and Context

The Product Owner should open the scrum sprint review by restating the sprint goal—not the list of stories, but the overarching objective the team committed to. This grounds the demo in purpose rather than features. For example, "Our goal this sprint was to reduce the time it takes a new user to complete onboarding from 8 minutes to under 3 minutes."

Next, briefly summarize what was completed versus planned. Be honest: if 8 of 10 stories were completed, say so. If scope was adjusted mid-sprint due to a production incident, explain the trade-off. This transparency builds trust and gives stakeholders a realistic understanding of team velocity, which helps during [backlog refinement](https://tryhamster.com/skills/grooming-the-product-backlog).

> **Pro tip:** Avoid spending more than 5 minutes on this opening. The bulk of the meeting should be live demonstration and discussion.

### Step 4: Step 4: Demo Working Software, Not Slides

This is the core of the scrum sprint review. Developers (not just the Product Owner) should walk through the actual working increment. Show real user flows, click real buttons, and demonstrate real behavior. If something is slow or rough around the edges, that's fine—it's working software, not a marketing video.

Organize the demo around user scenarios rather than technical stories. Instead of "We implemented API endpoint X and updated the database schema," frame it as "A customer can now filter search results by date range—let me show you what that looks like." This keeps stakeholders engaged and their feedback grounded in user experience.

Pause after each major feature or flow for questions and reactions. Don't wait until the end to take Q&A—by then, stakeholders have forgotten their early questions and the conversation becomes diffuse. Encourage stakeholders to interact with the product themselves when possible.

> **Pro tip:** Designate one person to take notes on all stakeholder feedback during the demo. The person demoing can't also capture nuanced feedback accurately.

### Step 5: Step 5: Facilitate Stakeholder Discussion and Feedback

After the demo, open the floor for broader discussion. This is where the sprint review becomes a working session rather than a presentation. Prompt stakeholders with specific questions: "Given what you've seen, does the onboarding flow address the concerns you heard from the sales team?" or "We have two directions for the next feature—which aligns better with the Q3 roadmap?"

Capture feedback in real time using a shared document or your project management tool. Categorize feedback as: new backlog items, changes to existing items, questions requiring follow-up, or out-of-scope observations. This prevents feedback from evaporating after the meeting ends.

Allow space for stakeholders to share marketplace changes, competitive intelligence, or customer feedback that may affect priorities. The sprint review is one of the few moments where the entire product community is in one room—use it.

> **Pro tip:** If a feedback discussion goes deep on a single topic, timebox it to 5 minutes and schedule a follow-up. Don't let one topic consume the entire review.

### Step 6: Step 6: Review and Revise the Product Backlog

Before closing, the Product Owner should summarize how the feedback will affect the product backlog. This might mean reprioritizing existing items, adding new stories based on stakeholder input, or removing items that are no longer relevant given what was learned.

This doesn't need to be a full [backlog grooming session](https://tryhamster.com/skills/grooming-the-product-backlog)—it's a high-level alignment check. The goal is for everyone to leave the sprint review with a shared understanding of what's likely coming next and why. The Product Owner can refine the details in subsequent backlog refinement sessions.

End with a brief look ahead: what's the likely focus of the next sprint based on today's conversation? This gives stakeholders confidence that their feedback was heard and will influence upcoming work.

> **Pro tip:** Take a photo or screenshot of any whiteboard brainstorming that happened during the review. Physical artifacts get erased; digital ones become backlog fodder.

### Step 7: Step 7: Close and Capture Action Items

Formally close the sprint review by thanking stakeholders for their time and participation. Summarize the key decisions made, feedback captured, and any follow-up actions with owners and deadlines.

Distribute a brief written summary within 24 hours—not meeting minutes, but a focused document listing: what was demonstrated, key feedback received, backlog changes agreed upon, and open questions. This serves as a contract of understanding and prevents the "I thought we agreed to X" conversations that plague poorly documented reviews.

Finally, the Scrum Master should note any process observations for the upcoming [sprint retrospective](https://tryhamster.com/skills/facilitating-sprint-retrospectives). Was the review too long? Were the right people in the room? Did the team get useful feedback? These meta-observations help improve the review itself over time.

> **Pro tip:** Track a simple metric over time: what percentage of sprint review feedback actually results in backlog changes? If it's near zero, your reviews aren't generating actionable input.

## Best Practices

- Always demo working software in a realistic environment—never use slides as a substitute for showing the actual increment. Stakeholders can only give meaningful feedback on things they can see and interact with.
- Encourage developers to present their own work rather than having the Product Owner demo everything. This builds developer confidence, gives stakeholders direct access to technical context, and distributes the facilitation load.
- Send the sprint review agenda 24 hours in advance with specific questions you want stakeholder input on. Prepared stakeholders give dramatically better feedback than surprised ones.
- Time-box the entire meeting strictly—60 minutes for a two-week sprint is a good default. A concise, energetic review generates better engagement than a sprawling, exhaustive one.
- Capture every piece of stakeholder feedback visibly during the meeting, even if it seems minor. When stakeholders see their input being recorded, they contribute more freely and trust the process.
- Rotate who facilitates the sprint review. Having different team members lead builds shared ownership and prevents the ceremony from becoming one person's show.

## Common Mistakes

- **Turning the sprint review into a status report or slide presentation instead of a live demo of working software** — Show the actual product. If something isn't demo-ready, explain why honestly rather than substituting a screenshot or mockup. The sprint review's value comes from inspecting the real increment.
- **Demoing incomplete or 'almost done' items as if they meet the Definition of Done** — Only demonstrate items that fully meet the Definition of Done. Acknowledge incomplete work separately and explain the plan. Blurring this line erodes stakeholder trust and creates false progress signals.
- **Treating the sprint review as a one-way presentation with Q&A only at the end** — Pause after each feature demo for questions and reactions. The sprint review is a collaborative working session—stakeholders should be talking at least 30-40% of the time.
- **Not inviting the right stakeholders or consistently having empty seats from key decision-makers** — Identify who has the authority and context to give feedback that will actually change the backlog. Work with those people to find a format and cadence that respects their time. A 30-minute focused review beats a 90-minute review that nobody attends.
- **Failing to connect sprint review feedback back to the product backlog** — Every piece of feedback should have a clear disposition: added to the backlog, merged with an existing item, noted for future consideration, or explicitly deprioritized. Feedback without follow-through teaches stakeholders that the review doesn't matter.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/scrum/METHOD.md) — Scrum

## Related Skills

- [Defining Scrum Roles and Accountabilities](../defining-scrum-roles-and-accountabilities/SKILL.md)
- [Facilitating Sprint Retrospectives](../facilitating-sprint-retrospectives/SKILL.md)
- [Grooming and Refining the Product Backlog](../grooming-the-product-backlog/SKILL.md)
- [Planning and Executing Sprints](../planning-and-executing-sprints/SKILL.md)
- [Estimating Work with Story Points and Planning Poker](../estimating-work-with-story-points/SKILL.md)
- [Running Effective Daily Stand-Up Meetings](../running-daily-standups/SKILL.md)
- [Managing Scrum Boards in Jira](../managing-scrum-boards-in-jira/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
