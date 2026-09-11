---
name: identifying-actors-and-stakeholders
description: "This skill teaches you how to systematically discover, categorize, and prioritize the users, customers, and internal stakeholders whose behavior changes will drive your business goal within an impact map."
metadata:
  method: impact-mapping
---

# Identifying Actors and Stakeholders: Core Product Manager Roles and Responsibilities

> This skill teaches you how to systematically discover, categorize, and prioritize the users, customers, and internal stakeholders whose behavior changes will drive your business goal within an impact map.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes |
| Outcome | You can produce a prioritized, comprehensive list of actors for any impact map, ensuring your team invests in deliverables that influence the people who matter most to your business goal. |
| Prerequisites | A clearly defined measurable business goal (see Defining Measurable Business Goals for Impact Maps), Basic understanding of Impact Mapping structure (goal → actors → impacts → deliverables), Access to organizational context: org charts, customer segments, analytics data |
| Part of | [Impact Mapping](../../methods/impact-mapping/METHOD.md) |

## Overview

In [Impact Mapping](https://tryhamster.com/methods/impact-mapping), the second level of the map — actors — is where strategy becomes tangible. Actors are the people, user segments, or systems whose behavior you need to change to reach your goal. Identifying them incorrectly means the rest of your map is built on a flawed foundation: you'll design features for the wrong audience, measure the wrong behavior, and ship work that doesn't move the needle.

Among the most critical **product manager roles and responsibilities** is ensuring the team works on what matters. Actor identification is the mechanism for that. It forces you to answer: *who* can help us reach the goal, *who* can block us, and *who* are we accidentally ignoring? This goes beyond simple persona work — it includes internal stakeholders like sales teams whose adoption behavior affects revenue, compliance officers whose approval gates affect speed, and even automated systems whose performance thresholds affect user experience.

This skill gives you a repeatable process for surfacing, categorizing, and ranking actors so your impact map reflects reality, not assumptions. When done well, it becomes the foundation for every downstream decision about [desired behavior impacts](https://tryhamster.com/skills/mapping-desired-behavior-impacts) and [deliverables](https://tryhamster.com/skills/generating-deliverables-from-impacts).

## How It Works

Actor identification works by casting a deliberately wide net and then systematically narrowing it. The core principle is **diverge then converge**: first, you brainstorm every entity that could possibly influence or be influenced by your business goal. Then, you apply structured criteria — proximity to the goal, degree of influence, feasibility of behavior change — to prioritize.

The technique relies on multiple perspectives to overcome blind spots. No single person in an organization sees all the actors. Engineers know about upstream and downstream systems. Sales knows about buyer personas versus end users. Support knows about the frustrated segments that churn. Customer success knows about the power users who evangelize. The product manager's role is to orchestrate these perspectives into a unified, prioritized actor map.

Conceptually, actors fall into four categories: **primary users** (who interact with your product directly), **secondary users** (who benefit indirectly or consume outputs), **internal stakeholders** (whose operational behavior affects goal achievement), and **external influencers** (regulators, partners, competitors whose actions constrain or enable your strategy). Each category requires different discovery techniques and yields different types of impacts on your map.

The output is not just a list — it's a ranked list with explicit rationale. This ranking directly shapes where you invest in [mapping desired behavior impacts](https://tryhamster.com/skills/mapping-desired-behavior-impacts) and prevents the common trap of trying to serve everyone equally.

## Step-by-Step Guide

### Step 1: Step 1: Anchor on Your Measurable Business Goal

Before identifying anyone, write your business goal at the top of a whiteboard or shared document. This goal — which you should have already defined using [Defining Measurable Business Goals](https://tryhamster.com/skills/defining-measurable-business-goals) — is the filter through which every actor is evaluated.

For example, if your goal is 'Increase trial-to-paid conversion from 8% to 15% in Q3,' every actor you identify must plausibly influence that metric. This prevents the common failure mode of listing every stakeholder in the organization regardless of relevance.

> **Pro tip:** Read the goal aloud to the group before brainstorming. If anyone can't explain the goal in their own words, pause and clarify. Misaligned understanding of the goal produces wildly different actor lists.

### Step 2: Step 2: Diverge — Brainstorm All Possible Actors

Set a timer for 10-15 minutes and have each participant silently write one actor per sticky note (physical or digital). Encourage people to think across four categories:

- **Primary users**: Who directly uses the product? Are there sub-segments (new users, power users, mobile-only users)?
- **Secondary users**: Who consumes reports, dashboards, or outputs without logging in?
- **Internal stakeholders**: Which teams' behavior (sales, support, engineering, leadership) affects the goal?
- **External influencers**: Partners, regulators, competitors, media, or community members whose actions shape the landscape?

Also consider 'negative actors' — people who could actively hinder the goal (e.g., detractors, competitors, internal skeptics). These are often the most valuable to identify because they represent risks you can mitigate.

After silent brainstorming, have each person place their notes on the board and briefly explain any that aren't self-evident. Expect 15-40 actors from a cross-functional group.

> **Pro tip:** Prompt the group with 'Who else?' at least three times after they think they're done. The most important actors are often surfaced in the final round — they're the ones nobody thought of initially.

### Step 3: Step 3: Cluster and De-duplicate

Group related actors together. You'll likely find overlaps: 'enterprise buyer' and 'procurement lead' might be the same actor in a different context, or they might be meaningfully different. The key question is: *does this actor have a distinct behavior change that would affect the goal differently from the other actors in the cluster?*

If two actors would have the same desired impacts on the map, merge them. If their behavior changes would be different (e.g., a CTO evaluates technical fit while a CFO evaluates cost), keep them separate even if they're in the same buying committee.

Label each cluster with a clear, specific name. Avoid vague labels like 'users' — use 'free-trial users in their first 7 days' or 'account managers handling enterprise renewals.'

> **Pro tip:** Specificity is your friend. 'Mobile users in emerging markets on low-bandwidth connections' is a far more actionable actor than 'mobile users.' The more specific the actor, the more specific your impacts and deliverables will be.

### Step 4: Step 4: Score Actors on Influence and Feasibility

Create a simple 2×2 matrix or scoring table with two dimensions:

1. **Influence on the goal**: If this actor changed their behavior, how much would it move the metric? Score High/Medium/Low.
2. **Feasibility of behavior change**: How realistic is it that we can change this actor's behavior with our resources and timeframe? Score High/Medium/Low.

Actors that are high-influence and high-feasibility are your top tier. These go on the impact map first. High-influence but low-feasibility actors (e.g., regulators, competitors) might still appear on the map as risks or constraints, but you won't build features targeting them. Low-influence actors are typically dropped unless they represent a large aggregate volume.

Have the group discuss and score collaboratively. Disagreements here are valuable — they reveal different mental models about how the business works.

> **Pro tip:** If your group can't agree on an actor's influence, that's a signal you need data. Flag it as an assumption to validate with experiments — see [Validating Impact Map Assumptions](https://tryhamster.com/skills/validating-assumptions-with-experiments).

### Step 5: Step 5: Select Your Top 3-5 Actors for the Impact Map

An impact map with 15 actors is unusable. Select the 3-5 actors with the highest combined influence and feasibility scores. These become the second-level branches of your map.

For each selected actor, write a one-sentence description of *why* they matter: 'Free-trial users in their first 48 hours — they represent 60% of all trial starts and their activation rate is currently only 22%.'

Document the actors you didn't select and why. This 'parking lot' prevents repeated debates in future sessions and gives you a ready list to revisit if your initial assumptions prove wrong.

> **Pro tip:** Among the most underrated product manager roles and responsibilities is saying 'not now' to valid ideas. Your parking lot of deprioritized actors is just as valuable as your selected list — it shows you've been rigorous.

### Step 6: Step 6: Validate with Data and Absent Voices

Before finalizing, pressure-test your actor list against quantitative data and qualitative signals:

- **Analytics**: Do your user segments match what the data shows? Are there large cohorts you missed?
- **Support tickets**: Which actor segments generate the most friction? Are they on your list?
- **Sales pipeline**: Which buyer personas are in your pipeline but not on the map?
- **Absent voices**: Were there perspectives missing from the workshop? If no one from customer success attended, their actors may be missing.

Adjust your list based on what you find. This step often surfaces 1-2 critical actors that the workshop missed — particularly internal stakeholders whose processes affect the goal indirectly.

> **Pro tip:** Send the draft actor list to 2-3 people who weren't in the workshop and ask 'Who's missing?' Fresh eyes catch blind spots that insiders can't see.

## Best Practices

- Always include at least one internal stakeholder on your impact map — internal behavior changes (e.g., sales team adopting a new demo flow) often have outsized impact on business goals and are frequently overlooked.
- Use specific, behavior-oriented actor names rather than generic personas. 'Enterprise IT admin evaluating security compliance' is actionable; 'Enterprise User' is not.
- Revisit your actor list every quarter or when the business goal changes. Actors that were low-priority may become critical as your product and market evolve.
- Cross-reference your actor list with your product analytics segmentation to ensure your impact map reflects real usage patterns, not hypothetical ones.
- Capture the reasoning behind each actor's priority ranking in writing. This institutional knowledge prevents re-litigating decisions when team members rotate.
- Limit your impact map to 3-5 actors maximum. Beyond that, the map becomes unwieldy and teams try to serve everyone, which means they serve no one well.

## Common Mistakes

- **Listing only end users and ignoring internal stakeholders, partners, or negative actors** — Explicitly brainstorm across all four actor categories (primary users, secondary users, internal stakeholders, external influencers) and include a 'negative actors' prompt. Internal stakeholders like sales, support, and leadership often have the highest-leverage behavior changes.
- **Defining actors too broadly (e.g., 'users' or 'customers') so that impacts become vague and deliverables become unfocused** — Break broad categories into specific behavioral segments. Instead of 'customers,' use 'customers in their first 30 days who haven't completed onboarding.' Test specificity by asking: could I interview 5 of these people next week? If not, the definition is too vague.
- **Including every possible actor on the impact map without prioritizing, resulting in an unusable map with 15+ branches** — Score actors on influence and feasibility, then ruthlessly select only the top 3-5. Document deprioritized actors in a parking lot for future reference. An impact map is a prioritization tool — if everything is on it, nothing is prioritized.
- **Treating actor identification as a one-time exercise that never gets revisited** — Schedule a quarterly review of your actor list alongside your roadmap review. Market conditions shift, product usage changes, and new stakeholders emerge. Your actor list should be a living document tied to your ongoing [impact map integration with roadmaps](https://tryhamster.com/skills/integrating-impact-maps-with-roadmaps).
- **Running actor identification with only product managers in the room** — Include cross-functional participants — engineering, design, sales, support, and customer success each see different actors. The PM's role is facilitation, not solo generation. See [Facilitating Collaborative Impact Mapping Workshops](https://tryhamster.com/skills/facilitating-impact-mapping-workshops) for techniques.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/impact-mapping/METHOD.md) — Impact Mapping

## Related Skills

- [Integrating Impact Maps with Product Roadmaps](../integrating-impact-maps-with-roadmaps/SKILL.md)
- [Defining Measurable Business Goals for Impact Maps](../defining-measurable-business-goals/SKILL.md)
- [Validating Impact Map Assumptions with Experiments](../validating-assumptions-with-experiments/SKILL.md)
- [Facilitating Collaborative Impact Mapping Workshops](../facilitating-impact-mapping-workshops/SKILL.md)
- [Generating and Prioritizing Deliverables from Impacts](../generating-deliverables-from-impacts/SKILL.md)
- [Mapping Desired Behavior Impacts on Actors](../mapping-desired-behavior-impacts/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
