---
name: setting-appetites-and-managing-scope
description: "This skill teaches you how to declare a fixed time appetite for a project and then deliberately cut scope by separating must-haves from nice-to-haves, so your team ships meaningful work every cycle without schedule overruns."
metadata:
  method: shape-up
---

# Setting Appetites and Cutting Scope with Fixed Time Variable Scope

> This skill teaches you how to declare a fixed time appetite for a project and then deliberately cut scope by separating must-haves from nice-to-haves, so your team ships meaningful work every cycle without schedule overruns.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes per project |
| Outcome | You produce a scoped pitch with a declared time appetite and a clean separation of must-haves and nice-to-haves, giving your team a firm boundary that prevents scope creep and guarantees the project ships or gets killed at the end of the cycle. |
| Prerequisites | Familiarity with Shape Up's shaping phase and the concept of a pitch, Understanding of the difference between estimates and appetites, Access to a shaped problem with at least a rough solution sketch (breadboard or fat-marker sketch), Ability to evaluate which user-facing behaviors are essential to solving the core problem |
| Part of | [Shape Up](../../methods/shape-up/METHOD.md) |

## Overview

Every product team has experienced the slow, painful death of a project that kept growing. What started as a two-week improvement quietly becomes a two-month odyssey because nobody drew a line between "we need this" and "it would be cool to have this." Setting appetites and cutting scope is the discipline that prevents that drift. It is the single most consequential skill in the [Shape Up](https://tryhamster.com/methods/shape-up) framework because it establishes the constraint that every other activity depends on. Without a declared appetite, shaping is just brainstorming, betting is just wishful thinking, and building becomes an open-ended march.

The fixed time variable scope principle works by inverting the conventional relationship between time and scope. Instead of estimating how long a feature will take and then negotiating a deadline, you start by asking: "How much time is this problem worth to us?" That number, the appetite, becomes the non-negotiable constraint. The scope of the solution then flexes to fit inside it. This is not the same as cutting corners. It is a deliberate design act where you identify the core value the project must deliver, protect that core, and ruthlessly simplify or remove everything else. The artifact you produce is a refined pitch that includes a clear appetite, a list of must-haves that define "done," and an explicit list of nice-to-haves that the team has permission to drop if time gets tight.

This skill sits between [shaping product pitches](https://tryhamster.com/skills/shaping-product-pitches) and [running betting table sessions](https://tryhamster.com/skills/running-betting-tables) in the Shape Up workflow. You shape the raw idea, then apply appetite-setting and scope-cutting to turn a promising concept into a bet-ready pitch with a known time boundary. The betting table cannot function without this step because decision-makers need to know not just what they are buying but what it will cost in team-weeks. When done well, appetite-setting gives your team clarity, permission to say no to bloat, and the confidence that they can actually finish what they start within the cycle.

## How It Works

The mental model behind fixed time variable scope rests on a simple observation: time is the most honest constraint a product team has. Money can be found, people can be reassigned, but calendar weeks are consumed at a fixed rate and never come back. When you fix time and let scope vary, you force every design decision through a filter of priority. The question stops being "what should this feature include?" and becomes "what must this feature include to be worth building at all?"

An appetite is not an estimate. Estimates answer the question "how long will this take?" Appetites answer the question "how long are we willing to spend?" The difference is strategic. An estimate is a prediction about complexity. An appetite is a judgment about value. A login system might take four weeks to build properly, but if you are a small team with twelve other priorities, the appetite might be two weeks, and you design a simpler login flow that fits. The appetite forces creative compression. It is a design constraint, not a scheduling constraint.

The scope-cutting process works by separating elements into two buckets: must-haves and nice-to-haves. Must-haves are the behaviors without which the project fails to solve the core problem. If you are building an invoicing feature and the user cannot generate a PDF of the invoice, the project is worthless. That is a must-have. But customizable invoice templates? Line-item discount calculations? Those may be nice-to-haves, depending on the appetite. The key insight is that must-have status is always relative to the problem statement, not to some ideal product vision. A feature that is a must-have in a six-week appetite might become a nice-to-have when the same problem is given a two-week appetite, because a simpler version of the solution still solves the core problem.

This approach works because it aligns three things that are usually in tension: strategic prioritization (is this worth our time?), design ambition (what should the solution look like?), and execution reality (can the team actually finish?). By fixing time first, you remove the most common source of project failure, which is unbounded scope. The [Shape Up](https://tryhamster.com/methods/shape-up) framework treats this as a prerequisite for the betting table: no pitch is bet-ready until it has a declared appetite and a scope that has been deliberately cut to fit.

One subtlety worth understanding: appetite-setting is not a one-time event. It happens during shaping, gets validated at the betting table, and gets pressure-tested during the build when the team discovers unexpected complexity. The initial scope cut sets the boundaries, but the team retains the right to cut further during execution. This is why the nice-to-have list matters so much. It gives the building team a pre-approved list of things they can drop without needing to renegotiate with stakeholders.

## Step-by-Step Guide

### Step 1: Step 1: Articulate the core problem in one sentence

Before you can set an appetite, you need absolute clarity on the problem you are solving. Write a single sentence that captures the user's pain point and the context in which it occurs. This is not a feature request ("add batch editing") but a problem statement ("users with 50+ items waste 20 minutes editing them one by one"). Review the shaped pitch if one exists, and distill it down.

If you cannot state the problem in one sentence, the idea is not shaped enough for appetite-setting. Return to the shaping phase and do more narrowing. The problem statement becomes your north star for every scope decision that follows, because you will test each element by asking whether removing it would prevent the problem from being solved.

> **Pro tip:** Read the problem statement to someone unfamiliar with the project. If they ask more than one clarifying question, the statement is too vague or too compound. Split it or sharpen it.

### Step 2: Step 2: Assess the strategic value of solving this problem

Gather the evidence that tells you how important this problem is relative to everything else your team could work on. Consider factors like the number of users affected, the frequency of the pain, the impact on revenue or retention, and whether solving it unlocks a new market segment. Talk to sales and support to understand how often this problem surfaces and how much friction it creates. You are not estimating effort yet.

You are answering the question: if we could snap our fingers and solve this, how valuable would it be? Rate the value qualitatively as small, medium, or large. A small problem might be worth one to two weeks of a team's time. A medium problem might be worth three to four weeks.

A large problem might justify a full six-week cycle. This value assessment is the raw input for your appetite.

> **Pro tip:** Avoid anchoring on the solution's complexity when assessing value. A technically trivial fix to a problem that affects every paying customer is strategically more valuable than a complex feature that serves a niche.

### Step 3: Step 3: Declare the appetite

Based on the strategic value, declare a time appetite. In Shape Up, the standard options are a small batch (one to two weeks, often grouped with other small batches in a cycle) or a big batch (a full six-week cycle). Some teams use a three-week midpoint. State the appetite as a firm number, not a range.

Write it down in the pitch document next to the problem statement. The appetite is not negotiable once declared. If the team later discovers the work cannot fit, they cut scope rather than extend time. Be honest with yourself at this step.

If you catch yourself saying "well, maybe we could stretch to eight weeks," you are doing estimation, not appetite-setting. The appetite should feel slightly uncomfortable. That productive tension is what forces creative scope-cutting.

> **Pro tip:** If you genuinely cannot decide between two appetites (say, two weeks vs. six weeks), you probably have two different versions of the solution in mind. Make them explicit, pick one, and set the appetite for that version.

### Step 4: Step 4: List every element of the proposed solution

Take the shaped solution, whether it is a breadboard, a fat-marker sketch, or a written description, and break it into discrete elements. An element is a user-visible behavior, a screen, a workflow, or a data object that the solution includes. Be thorough but stay at the level of user-facing functionality, not implementation tasks. For example, "user can filter invoices by date range" is an element.

"Write SQL query for date filtering" is a task that sits inside that element. You should end up with a list of 8 to 25 elements, depending on the project's complexity. Write each element on its own line or card so you can physically sort them in the next step. If the list exceeds 25 elements, the solution may be too large for a single cycle and you should consider splitting it into separate projects.

> **Pro tip:** If you shaped the solution using breadboards or fat-marker sketches, walk through the sketches screen by screen and extract every distinct interaction or piece of content the user would encounter. This prevents you from forgetting quiet elements like confirmation dialogs, empty states, and error handling.

### Step 5: Step 5: Classify each element as must-have or nice-to-have

Go through the list element by element. " If the answer is no, it is a must-have. If the answer is yes, or even "mostly yes," it is a nice-to-have. Be ruthless.

The default classification should be nice-to-have. You are looking for the minimum set of elements that makes the solution viable, not comfortable. It helps to imagine a customer using the stripped-down version. If they would say "this solves my problem," the remaining elements are nice-to-haves.

If they would say "this is useless," you have cut too deep. Write the classification next to each element. You should aim for roughly 40-60% of elements classified as must-have. If everything is a must-have, you are not cutting hard enough.

> **Pro tip:** Do this classification alone or in a pair first, then review with the broader shaping group. Starting with group discussion leads to logrolling where everyone protects their favorite feature by agreeing to protect everyone else's.

### Step 6: Step 6: Pressure-test the must-haves against the appetite

Look at your must-have list and ask: can a small team (one designer and one or two programmers, the standard Shape Up team) deliver these elements within the declared appetite? You are not doing a detailed estimate. You are doing a gut check, informed by experience, about whether the must-haves are feasible. If the must-haves alone feel like they would consume the entire appetite with no margin, you have two options.

First, you can simplify individual must-haves by finding a cheaper way to deliver the same core behavior. For example, instead of building a rich text editor for invoice notes, allow plain text only. Second, you can redefine the problem more narrowly so that fewer elements qualify as must-have. What you cannot do is extend the appetite.

If neither simplification nor problem-narrowing works, the project is not ready to bet on and should return to shaping.

> **Pro tip:** Leave about 20% of the appetite as a buffer for unexpected complexity. If your must-haves feel like they fill 100% of the available time, you are already over-scoped because real projects always reveal surprises.

### Step 7: Step 7: Document the nice-to-have list explicitly

The nice-to-have list is not a parking lot for forgotten features. It is a strategic tool for the building team. Write each nice-to-have down in the pitch document with a one-sentence explanation of what it would add if time permits. Order the list by value, with the most impactful nice-to-haves at the top.

During the build cycle, if the team finds itself ahead of schedule, they can pull from the top of this list. If they fall behind, they can point to this list as pre-approved scope to cut. This explicit documentation prevents two failure modes: the team gold-plating nice-to-haves because nobody told them it was optional, and stakeholders being surprised when something they assumed was included does not ship.

> **Pro tip:** Frame nice-to-haves as "if we have time" items, not "we will get to these later" items. Calling them future work creates an implicit commitment. Calling them stretch goals sets the right expectation.

### Step 8: Step 8: Write the appetite and scope into the pitch

Update the project pitch with three clearly marked sections: the appetite (the fixed time boundary), the must-haves (the non-negotiable scope), and the nice-to-haves (the flexible scope). Include the one-sentence problem statement at the top. This completed pitch is what goes to the betting table. Decision-makers can now evaluate the bet with full transparency: they know the time cost, they know what they are guaranteed to get, and they know what might also ship if conditions are favorable.

Without this structure, the betting table devolves into a negotiation about scope, which defeats the purpose of fixing time. The pitch should be concise, typically one to two pages. If it is longer, you are over-specifying the solution and removing the building team's autonomy.

> **Pro tip:** Read the pitch from the perspective of a developer who has never heard of this project. If they cannot understand what they are being asked to build and what they are allowed to cut, revise until they can.

### Step 9: Step 9: Communicate the appetite and scope boundaries to the building team

After the betting table approves the project, hand the pitch to the building team with an explicit conversation about the appetite and scope boundaries. Walk through the must-haves and nice-to-haves together. Make sure the team understands that the appetite is a hard boundary, that must-haves define the minimum shippable version, and that they have full authority to cut nice-to-haves without seeking permission. Answer questions about the intent behind each must-have so the team can make smart tradeoffs during the build.

This handoff conversation is also where the team might flag concerns about the must-have list. If they see a must-have that they believe is infeasible within the appetite, that is valuable information that should trigger immediate scope renegotiation, not a silent plan to work overtime.

> **Pro tip:** Ask the team to identify the single scariest must-have, the one they are least sure about. If they cannot name one, they may not have read the list carefully enough. If they name one and it sounds truly risky, consider moving it to a nice-to-have or simplifying it before the build begins.

## Best Practices

- Set the appetite before looking at the solution in detail. If you review the shaped solution first, you will unconsciously anchor to its complexity and set an appetite that accommodates it rather than constraining it. Declare the appetite based on problem value alone, then force the solution to fit. Teams that skip this order consistently set appetites 30-50% higher than they would otherwise.
- Use the problem statement as the tiebreaker for every must-have vs. nice-to-have decision. When two people disagree about whether an element is essential, read the problem statement aloud and ask whether removing the element would leave the problem unsolved. This grounds the conversation in user outcomes instead of personal preferences.

Without this anchor, classification discussions become political.
- Keep the must-have list to 5-8 elements for a six-week project. If your must-have list has 15 items, each item is probably too granular (a task, not a user-facing behavior) or you have not cut aggressively enough. Fewer must-haves give the building team more room to find creative implementations. More must-haves create a rigid specification that leaves no room for the unexpected.
- Revisit the nice-to-have list at the midpoint of the build cycle. Check in with the building team around week three of a six-week cycle. If they are ahead, highlight which nice-to-haves to pull in. If they are behind, confirm which nice-to-haves are officially dropped.

This midpoint check prevents the last-week panic of trying to cram in extras or the surprise of shipping without features someone expected.
- Never extend the appetite after it is set. This is the single most important discipline. If the work does not fit, the scope must shrink. Extending the appetite by even one week trains the organization to treat appetites as soft guidelines, which destroys the entire benefit of fixed time variable scope.

If a project genuinely needs more time, kill it, cool down, and re-pitch it for the next cycle with a larger appetite and a reshaped scope.
- Document the rationale for each must-have classification, not just the classification itself. A one-sentence explanation ("must-have because without date filtering, users cannot find invoices for tax filing, which is the core use case") prevents future arguments and helps the building team make good tradeoff decisions when they encounter ambiguity during implementation.
- Practice appetite-setting on small bets first. If your team is new to Shape Up, start with one-to-two-week small batch projects where the cost of miscalibration is low. After three or four cycles of small-batch appetite-setting, the team will have built intuition for how much scope fits in a timebox, and they can move to six-week big batch projects with more confidence.

## Common Mistakes

- **Treating the appetite as a deadline imposed on an estimate** — " That is not appetite-setting. That is deadline pressure dressed up in new vocabulary. The tell is that the scope stays the same while only the time shrinks. True appetite-setting starts with the problem's value and deliberately designs a smaller solution to fit.

If you hear the team say "we'll just work harder to fit it in," you are doing deadlines, not appetites. Go back to step 5 and cut scope.
- **Classifying everything as a must-have because it was in the original pitch** — This is the most common mistake, and it stems from confusing the shaped solution with a specification. The shaped solution is a sketch of one possible approach. It includes more elements than strictly necessary to solve the problem because the shaper was exploring, not constraining. When you bring the full list to the classification step and label 90% as must-have, you have not actually done scope-cutting.

Watch for this by counting: if more than 60% of your elements are must-haves, challenge each one against the problem statement. Usually, several will fall to nice-to-have once pressure-tested.
- **Setting appetites in hours instead of weeks** — Some teams try to set appetites like "40 hours" or "80 hours" because it feels more precise. But hours are estimation units, not appetite units. They invite the team to track hours and compare actual vs. budgeted, which is exactly the estimation mindset appetite-setting is designed to replace.

Hours also fragment poorly across a cycle because no team gets uninterrupted focus. Stick to whole weeks (one, two, three, or six) and treat the week as an indivisible unit. If a project does not feel worth a full week, it might be a task to handle during cool-down, not a shaped project.
- **Skipping the explicit nice-to-have list** — Teams that classify elements as must-have or nice-to-have in their heads but do not write the nice-to-have list down lose its value as a communication tool. " and the team does not know if that was a nice-to-have or was never considered. The ambiguity creates friction and ad hoc scope negotiations. Always write the nice-to-have list in the pitch document.

Even if the list has only two items, making it explicit prevents misaligned expectations and gives the team a pre-approved set of things they can drop.
- **Cutting scope during shaping but never communicating the cuts to the building team** — Sometimes the shaper does excellent scope-cutting work during the pitch preparation, but the handoff to the building team only covers the must-haves without mentioning what was cut and why. The building team then independently discovers the cut elements, assumes they were forgotten, and adds them back, inflating the scope past the appetite. Prevent this by sharing the full pitch, including the nice-to-have list, with the building team at kickoff. Explain that the nice-to-haves were deliberately deprioritized, not overlooked.
- **Letting the appetite vary based on who is available** — " This sounds pragmatic but it breaks the model. The appetite is a statement about the problem's value, not about staffing capacity. Adding people changes the team's capacity but does not change how much the problem is worth. " If yes, the appetite is six weeks.

If no, cut scope to fit a smaller appetite and staff normally.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/shape-up/METHOD.md) — Shape Up

## Related Skills

- [Managing Six-Week Build Cycles](../managing-six-week-cycles/SKILL.md)
- [Planning Cool-Down Periods](../planning-cooldown-periods/SKILL.md)
- [Shaping Product Pitches](../shaping-product-pitches/SKILL.md)
- [Tracking Progress with Hill Charts](../tracking-progress-with-hill-charts/SKILL.md)
- [Running Betting Table Sessions](../running-betting-tables/SKILL.md)
- [Mapping Scopes Instead of Tasks](../mapping-scopes-for-building/SKILL.md)
- [Using Breadboards and Fat-Marker Sketches](../using-breadboards-and-fat-marker-sketches/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
