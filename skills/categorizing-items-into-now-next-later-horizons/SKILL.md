---
name: categorizing-items-into-now-next-later-horizons
description: "This skill teaches you how to evaluate product initiatives against certainty, urgency, and strategic alignment, then sort them into the three Now-Next-Later horizons so your roadmap reflects what your team should actually work on and in what sequence."
metadata:
  method: now-next-later-framework
---

# How to Use Now Next Later Framework: Categorizing Items into Horizons

> This skill teaches you how to evaluate product initiatives against certainty, urgency, and strategic alignment, then sort them into the three Now-Next-Later horizons so your roadmap reflects what your team should actually work on and in what sequence.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes for an initial backlog of 20-40 items |
| Outcome | A clearly categorized roadmap where every initiative sits in the right horizon, your team has immediate clarity on what to build first, and stakeholders can see the logical sequence of work without needing fixed delivery dates. |
| Prerequisites | A backlog of product initiatives, features, or projects to categorize, Understanding of your current product strategy and business objectives, Familiarity with the Now-Next-Later Framework concepts (three horizons, sequence over deadlines), Access to stakeholder input or customer research that informs priority decisions |
| Part of | [Now-Next-Later Framework](../../methods/now-next-later-framework/METHOD.md) |

## Overview

Categorizing items into Now, Next, and Later horizons is the core execution skill of the [Now-Next-Later Framework](https://tryhamster.com/methods/now-next-later-framework). While the framework itself provides the structure, the real challenge is making the judgment calls that place each initiative in the right bucket. This skill teaches you how to evaluate initiatives systematically so your categorization decisions are defensible, consistent, and useful to everyone reading the roadmap.

The specific problem this skill solves is the paralysis that teams face when staring at a flat backlog of 30, 50, or 100 items and trying to figure out what matters most. Traditional prioritization frameworks like RICE or MoSCoW produce ranked lists, but ranked lists do not communicate time horizons, discovery status, or sequencing logic. Categorizing into Now, Next, and Later adds a dimension that pure ranking misses: the readiness of the work. An initiative might be critically important but poorly understood. It does not belong in Now. It belongs in Next or Later, where it can mature until it is ready. This readiness dimension is what separates horizon categorization from simple priority scoring.

The concrete artifact you produce is a categorized backlog where each item has a horizon assignment (Now, Next, or Later) and a brief rationale capturing why it landed there. This artifact feeds directly into your roadmap template (see [Building Now-Next-Later Roadmap Templates](https://tryhamster.com/skills/building-now-next-later-roadmap-templates)) and becomes the foundation for stakeholder communication. When done well, the categorized backlog should feel obvious. Anyone reading it should nod and say, "Yes, that makes sense." When people disagree with the placement of an item, the rationale gives you a starting point for productive debate rather than circular arguments about what is "more important."

## How It Works

The mental model behind horizon categorization rests on three evaluation dimensions that interact with each other: certainty, urgency, and strategic alignment. Understanding how these three dimensions combine is more important than memorizing rules for each horizon.

**Certainty** measures how well you understand the problem, the solution, and the expected outcome. High certainty means the team could start executing tomorrow with minimal ambiguity. You know what to build, you know why users need it, and you have reasonable confidence the solution will work. Low certainty means the problem is still fuzzy, the solution is speculative, or you lack the data to predict outcomes. Certainty is the dimension most teams underweight. They place speculative bets in Now because the idea feels exciting, then burn cycles on discovery mid-sprint. The framework corrects for this by making certainty an explicit input.

**Urgency** captures time sensitivity. Some items have external deadlines (regulatory compliance, contractual commitments, competitive threats). Others are important but not time-bound. Urgency is the easiest dimension to assess but also the most prone to inflation. Stakeholders routinely describe everything as urgent. Your job is to separate genuine time pressure from preference intensity. A helpful test: "What happens if we ship this three months from now instead of this month?" If the answer involves measurable damage (lost revenue, contractual penalties, customer churn), urgency is real. If the answer is "it would be annoying," urgency is low.

**Strategic alignment** measures how directly the initiative supports your current product strategy and business objectives. A feature might be certain and urgent but strategically misaligned, such as a one-off customization for a single enterprise client that pulls you away from your platform direction. High strategic alignment means the initiative moves the whole product forward. Low alignment means it serves a narrow need.

The three dimensions combine into horizon placement through a simple heuristic. Now items score high on all three: you know what to build, it needs to happen soon, and it directly serves your strategy. Next items typically have high strategic alignment and moderate-to-high certainty, but lower urgency, or high urgency and alignment but lower certainty that requires a discovery phase first. Later items have low certainty, low urgency, or unclear strategic alignment. They are not rejected. They are parked for future evaluation when new information arrives.

This model works because it matches how real product work flows. High-certainty, high-urgency, strategically aligned work is what your team can actually execute on right now. Everything else needs either more time, more research, or a strategic shift before it becomes actionable. The [Now-Next-Later Framework](https://tryhamster.com/methods/now-next-later-framework) simply makes this natural flow visible and explicit.

One important nuance: the three dimensions are not equally weighted, and the right weighting depends on your context. Early-stage startups should weight strategic alignment heavily because every initiative needs to advance the core value proposition. Mature products in competitive markets might weight urgency more heavily because competitive response matters. There is no universal formula, and that is by design. The framework gives you the structure. You supply the judgment.

## Step-by-Step Guide

### Step 1: Step 1: Gather and Clean Your Backlog

Start by assembling every initiative, feature, project, and request that could appear on your roadmap into a single list. Pull from your issue tracker, feature request logs, stakeholder wish lists, customer feedback databases, and your own strategic plans. Do not filter at this stage. Include everything, even items you suspect are low priority or poorly defined.

Each item needs a short description (1-2 sentences) that someone outside your team could understand. Remove exact duplicates but keep near-duplicates for now, because they often represent different angles on the same problem and collapsing them too early hides important nuance. The output of this step is a flat list of 20-100 items, each with a clear, jargon-free description.

> **Pro tip:** If your backlog has more than 60 items, group them into rough themes first (e.g., onboarding, performance, billing, integrations). Categorizing theme by theme prevents decision fatigue and produces more consistent judgments than working through a random sequence.

### Step 2: Step 2: Define Your Current Strategic Context

Before evaluating any individual item, write down the strategic context that will anchor your decisions. This includes your top 2-3 business objectives for the current period, your product vision statement, any hard constraints (budget, team size, technical dependencies), and any external deadlines you already know about. Be specific. "Grow revenue" is not helpful.

"Increase annual contract value for mid-market accounts by 20% this year" is useful because it gives you a concrete yardstick for strategic alignment. If you are doing this exercise with a group, align on the strategic context before you start evaluating items. Disagreements about individual item placement often stem from unstated disagreements about strategy, and surfacing those early saves hours of circular debate.

> **Pro tip:** Write the strategic context on a shared document or whiteboard where it stays visible throughout the session. When debate arises about a specific item, point back to the context. This simple physical reference resolves more arguments than any scoring formula.

### Step 3: Step 3: Score Each Item on Certainty

Work through your backlog and assign each item a certainty score: High, Medium, or Low. High certainty means the problem is validated (you have data from user research, analytics, or customer conversations), the solution is understood (you have designs, technical scoping, or a proven pattern), and the expected outcome is predictable. Medium certainty means you understand the problem well but the solution needs refinement, or you have a strong hypothesis but limited validation. Low certainty means the problem itself is ambiguous, the solution is speculative, or you are working from assumptions rather than evidence.

Score each item independently before discussing with your team. " The rationale is more valuable than the score itself because it makes your reasoning auditable.

> **Pro tip:** Teams consistently overestimate certainty on items they are emotionally attached to. A useful corrective question: "Could an engineer start building this on Monday with the information we have right now?" If the answer is no, certainty is not High, regardless of how well you think you understand the problem.

### Step 4: Step 4: Score Each Item on Urgency

Assign each item an urgency score: High, Medium, or Low. High urgency means there is a concrete, external reason to act within the current planning cycle. This includes contractual deadlines, regulatory compliance dates, competitive launches that threaten your position, or a measurable cost of delay (such as a known rate of churn tied to the missing feature). Medium urgency means the initiative is important and the sooner the better, but there is no catastrophic consequence to a 2-3 month delay.

Low urgency means the initiative is valuable but not time-sensitive. It could ship next quarter or next year without meaningful negative impact. Be disciplined about separating urgency from importance. A strategically critical initiative can still have low urgency if there is no time pressure forcing action now.

Again, write a one-sentence rationale for each score.

> **Pro tip:** When a stakeholder insists something is urgent, ask for the cost of delay in specific terms: lost revenue, contractual penalty, competitive displacement. If they cannot quantify or describe the cost, the urgency is likely Medium or Low, even if the stakeholder feels strongly.

### Step 5: Step 5: Score Each Item on Strategic Alignment

Assign each item a strategic alignment score: High, Medium, or Low. Reference the strategic context you established in Step 2. High alignment means the initiative directly advances one of your top 2-3 business objectives. You can draw a straight line from the initiative to a measurable strategic outcome.

Medium alignment means the initiative supports your broader product direction but is not directly tied to a current objective. It might become highly aligned if strategy shifts. Low alignment means the initiative is tangential to your current strategy. It might serve a niche segment, address a one-off request, or solve a real problem that is simply not a priority right now.

" Again, write a rationale for each score.

> **Pro tip:** Watch for "strategy creep" where teams justify weak alignment by chaining multiple logical steps: "If we build this, then users will do X, which enables Y, which supports our goal Z." The longer the chain, the weaker the alignment. Direct support of a strategic goal requires one clear connection, not a Rube Goldberg machine of assumptions.

### Step 6: Step 6: Map Scores to Horizons

Now translate your three scores into horizon placement using this heuristic. Items with High certainty, High or Medium urgency, and High strategic alignment go into Now. These are the initiatives your team should be actively working on or about to start. Items with Medium or High certainty, any urgency level, and Medium or High strategic alignment go into Next.

These are candidates for the near-term once Now items clear, or once remaining discovery work completes. Everything else goes into Later, including items with Low certainty regardless of urgency or alignment, because they need more research before they are actionable. There will be edge cases where the scores are ambiguous (Medium on all three, for example). " If yes, it can be Now.

If no, it belongs in Next or Later.

> **Pro tip:** Resist the temptation to put too many items in Now. A healthy Now horizon contains 3-6 initiatives for a team of 5-10 people. If your Now has 15 items, you have not actually prioritized. You have just renamed your backlog.

### Step 7: Step 7: Validate the Shape of Each Horizon

Step back and look at the overall distribution across horizons. A healthy categorization typically has 3-6 items in Now, 5-10 items in Next, and the remainder in Later. If Now is overloaded, you need to be more selective, probably by raising the bar on certainty or urgency. If Later is empty, you are likely not capturing enough early-stage ideas and your pipeline will dry up.

" Also check for internal consistency. Are all the Now items genuinely more certain and urgent than all the Next items? If you spot an item in Next that feels more ready than something in Now, swap them and update the rationales. This validation step catches the drift that accumulates when you evaluate items one at a time.

> **Pro tip:** Read the Now column as if it were a sprint commitment. Ask: "Can we realistically deliver all of these in the current cycle?" If not, some items need to move to Next. The Now column must represent actual capacity, not wishful thinking.

### Step 8: Step 8: Write Horizon Rationales for Each Item

For every item, write a concise rationale (2-3 sentences) explaining why it sits in its assigned horizon. This is not optional. The rationale is what makes the categorization useful over time. Without it, items drift between horizons based on whoever argues loudest in the next meeting.

A good rationale references the three evaluation dimensions and connects to strategic context. " Store these rationales alongside the items in your roadmap tool or document.

> **Pro tip:** Rationales serve double duty. They explain the current placement, and they also capture the conditions that would trigger a move. A Later item with a rationale of "waiting on user research results" naturally graduates to Next once that research completes. This makes reprioritization (see [Reprioritizing and Moving Items Across Horizons](https://tryhamster.com/skills/reprioritizing-across-horizons)) much faster.

### Step 9: Step 9: Share and Pressure-Test with Stakeholders

Share the categorized backlog with key stakeholders for feedback before treating it as final. Present each horizon with its items and rationales. Invite challenges, but ground the conversation in the evaluation dimensions, not in personal preferences. When a stakeholder disagrees with a placement, ask which dimension they see differently: "Do you think certainty is higher than we assessed?

Do you see urgency we missed? " This frames disagreements as evidence-based discussions rather than opinion battles. Incorporate feedback that changes your assessment of the underlying dimensions, but do not move items just because someone pushes hard. Document any changes and the reasoning behind them.

The output of this step is a finalized, stakeholder-reviewed categorized roadmap ready for communication.

> **Pro tip:** If stakeholders push back on many placements, the problem is usually misalignment on strategic context (Step 2), not on individual item assessments. Revisit the strategic context first before re-evaluating individual items.

## Best Practices

- Score each dimension independently in writing before discussing with the group. When teams discuss items aloud before individual assessment, the first opinion anchors the conversation and compresses the range of scores. Silent individual scoring followed by comparison reveals genuine disagreement and produces more accurate assessments.
- Limit your Now horizon to what your team can realistically deliver in the current planning cycle. A Now column with 15 items signals that you have not actually made hard trade-offs. For most teams of 5-10 people, 3-6 Now items is the right range. Overloading Now undermines trust in the roadmap because stakeholders learn that "Now" does not actually mean "now."
- Use consistent, specific language in your rationales rather than vague qualifiers. "High certainty based on 200 user interviews and a validated prototype" is useful. "We feel pretty confident about this one" is not. Specific rationales make future re-evaluation faster because you can check whether the underlying evidence has changed.
- Revisit your categorization at a regular cadence, typically every 2-4 weeks for early-stage products or monthly for mature products. The world changes, new data arrives, and strategy evolves. A categorization that was perfect four weeks ago may have items in the wrong horizons today. Schedule the review rather than waiting for someone to notice drift.
- Separate the categorization session from the brainstorming session. If people are generating new ideas and evaluating existing ones at the same time, both activities suffer. New ideas get prematurely judged, and existing items get re-debated instead of evaluated. Collect ideas continuously, then batch the categorization exercise.
- Treat Later as a valued holding space, not a rejection pile. Teams that stigmatize Later lose ideas because contributors stop submitting them. Later items are the raw material of future innovation. Frame Later as "not yet, pending more information" rather than "not important." Periodically review Later to see if conditions have changed.
- When two items seem tied in priority, ask which one unblocks the other. Dependencies often break ties naturally. The item that enables other work to proceed has higher effective urgency even if its standalone urgency score is the same.

## Common Mistakes

- **Using Now, Next, and Later as priority tiers instead of time horizons** — " This misses the key insight of the framework. Now is not about importance. It is about readiness and sequencing. A Later item might be critically important to your long-term strategy, but if certainty is low, it belongs in Later until discovery work matures it.

You can catch this mistake by checking: are there items in Now with low certainty? If so, you are sorting by importance, not by horizon readiness. Move those items to Next or Later and put the discovery work into Now instead.
- **Letting urgency override certainty for Now placement** — Teams frequently place items in Now because a stakeholder declared them urgent, even when certainty is low. This leads to sprints derailed by mid-cycle discovery work, scope changes, and wasted effort. The signal to watch for is a Now item where the team cannot clearly articulate what they would build and how they would measure success. When you encounter high urgency but low certainty, put a time-boxed discovery or scoping task in Now and keep the actual build in Next.

This lets you respond to the urgency without committing to build something you do not yet understand.
- **Overloading the Now horizon with more items than the team can handle** — This happens because saying "not now" feels like saying "not important," and product managers want to show stakeholders that their requests are being addressed. The result is a Now column with 15-20 items that functions as a re-labeled backlog. Nobody trusts it, and the team cherry-picks what to actually work on, defeating the purpose of the framework. The fix is simple: establish a hard cap on Now items based on team capacity.

If you have 6 engineers and a 4-week cycle, you can realistically deliver 3-5 significant initiatives. Set that as the maximum and enforce it. Every item added to Now must displace another item to Next.
- **Skipping the rationale and relying on group memory** — Teams often assign horizons in a meeting, nod in agreement, and then forget why items were placed where they were within a week. When reprioritization happens, the conversation restarts from scratch because nobody remembers the original reasoning. This compounds over multiple cycles and makes the roadmap feel arbitrary. The fix is to require a 2-3 sentence written rationale for every item before the categorization is finalized.

This takes 15-20 extra minutes in the session but saves hours in future debates. If writing the rationale feels difficult, it usually means the evaluation was not rigorous enough. That difficulty is a useful signal.
- **Evaluating items in isolation without considering dependencies** — An initiative might score well on certainty, urgency, and alignment, but if it depends on infrastructure work that has not started, it cannot actually be in Now. Teams that evaluate items in isolation end up with a Now column full of initiatives that are blocked from day one. After your initial scoring, do a dependency check across all Now and Next items. For each Now item, ask: "What must be true or done before this can start?" If the dependency is not also in Now, either move the dependency into Now or move the dependent item into Next.
- **Treating the categorization as permanent instead of a living snapshot** — Some teams invest heavily in their initial categorization and then resist changing it, even when new information arrives. They treat the horizon assignment as a commitment rather than a current-best-judgment. This rigidity defeats the purpose of the Now-Next-Later Framework, which is designed for flexibility. Set an explicit review cadence (every 2-4 weeks) and normalize movement between horizons.

Items graduating from Later to Next is a sign of healthy discovery work, not a sign that the original categorization was wrong.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/now-next-later-framework/METHOD.md) — Now-Next-Later Framework

## Related Skills

- [Comparing Now-Next-Later to Quarterly and Timeline Roadmaps](../comparing-now-next-later-to-timeline-roadmaps/SKILL.md)
- [Defining Graduation Criteria Between Horizons](../defining-graduation-criteria-between-horizons/SKILL.md)
- [Building Now-Next-Later Roadmap Templates](../building-now-next-later-roadmap-templates/SKILL.md)
- [Reprioritizing and Moving Items Across Horizons](../reprioritizing-across-horizons/SKILL.md)
- [Applying Now-Next-Later Roadmaps to SaaS Products](../applying-now-next-later-to-saas-products/SKILL.md)
- [Communicating Now-Next-Later Roadmaps to Stakeholders](../communicating-roadmaps-to-stakeholders/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
