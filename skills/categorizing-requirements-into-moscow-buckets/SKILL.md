---
name: categorizing-requirements-into-moscow-buckets
description: "This skill teaches you how to evaluate each requirement or feature against clear criteria and assign it to the correct MoSCoW category — must have, should have, could have, or won't have — so your team ships what matters most."
metadata:
  homepage: https://tryhamster.com
  method: moscow
---

# Categorizing Requirements into Must Have, Should Have, Could Have, and Won't Have

> This skill teaches you how to evaluate each requirement or feature against clear criteria and assign it to the correct MoSCoW category — must have, should have, could have, or won't have — so your team ships what matters most.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes |
| Outcome | You can confidently and consistently assign every requirement to the right MoSCoW bucket, producing a prioritized backlog that stakeholders trust and engineers can act on. |
| Prerequisites | A gathered list of requirements or features to prioritize, Basic understanding of the MoSCoW framework and its four categories, Access to stakeholders or subject matter experts who can validate business impact, Familiarity with your product's strategic goals and constraints |
| Part of | [MoSCoW](../../methods/moscow/METHOD.md) |

## Overview

Sorting requirements into must have, should have, could have, and won't have categories is the core activity of the MoSCoW prioritization method. Without clear, repeatable criteria for each bucket, teams default to gut feel or political influence — and the resulting prioritization crumbles the moment stakeholders push back. This skill gives you a structured evaluation process so every requirement lands in a defensible category.

The challenge isn't understanding what the four letters stand for. Most teams get that in five minutes. The real challenge is drawing sharp lines between categories when everything feels important. This skill teaches you to apply specific litmus tests — business criticality, workaround availability, regulatory obligation, and user impact — so the boundaries between must have and should have (or should have and could have) become concrete rather than subjective.

When you master this categorization process, you create alignment across product, engineering, design, and business stakeholders. The output feeds directly into MVP scoping, sprint planning, and roadmap construction. It's the foundation skill for every other activity in the [MoSCoW](https://tryhamster.com/methods/moscow) framework.

## How It Works

MoSCoW categorization works by running each requirement through a decision framework built on four evaluation dimensions: **business criticality** (does the product fail without it?), **user impact** (how many users are affected and how severely?), **workaround availability** (can users or the business achieve the goal another way?), and **regulatory or contractual obligation** (is there an external mandate?).

The key insight is that the categories are not a spectrum of importance — they represent qualitatively different relationships to the release. A **must have** isn't just 'very important'; it means the product literally cannot ship or function without it. A **should have** isn't just 'less important'; it means there's a viable workaround for this release, even though you need it soon. A **could have** is a genuine enhancement that improves satisfaction but whose absence doesn't degrade the core experience. A **won't have** is an explicit, transparent decision to defer — not a rejection, but a scoping boundary.

This qualitative distinction is what makes the framework powerful. Rather than arguing about whether something is a 7 or an 8 on a priority scale, you're asking binary questions: 'Can we launch without this? Yes or no.' 'Is there a workaround? Yes or no.' These binary gates make categorization faster and more defensible than numerical scoring systems.

## Step-by-Step Guide

### Step 1: Step 1: Prepare Your Requirements List and Context

Before categorizing anything, ensure your requirements list is clean and well-defined. Each item should be specific enough to evaluate — 'improve performance' is too vague, while 'reduce page load time to under 2 seconds on 3G connections' is evaluable. Remove duplicates and merge overlapping items.

Gather the context documents you'll need: the product vision or strategy statement, any regulatory or compliance requirements, contractual obligations, technical architecture constraints, and user research findings. Having these on hand prevents the categorization from becoming a memory test.

Finally, identify the **time horizon** for your MoSCoW exercise. Are you prioritizing for a single sprint, an MVP release, or a quarterly roadmap? The time horizon directly affects categorization — a feature might be a 'must have' for a Q4 release but a 'won't have' for the current sprint.

> **Pro tip:** Create a shared document with the requirements list, evaluation criteria definitions, and context links before the session starts. This prevents 30 minutes of setup eating into your prioritization time.

### Step 2: Step 2: Define Your Category Criteria Explicitly

Write down the specific criteria for each category before you start sorting. Generic definitions invite interpretation drift — by requirement #15, 'must have' has subtly expanded to include anything stakeholders feel strongly about.

Here are battle-tested criteria to start with:

- **Must have**: The product cannot launch, is unusable, is unsafe, or violates a contract/regulation without this. There is no acceptable workaround. Removing this makes the release pointless.
- **Should have**: This is important and painful to leave out, but the product still works without it. There exists a workaround (even if it's manual, ugly, or temporary). Plan to deliver it soon after must haves.
- **Could have**: This is desirable and would improve user satisfaction or efficiency, but its absence doesn't cause pain. Include it only if time and budget permit after must and should haves are complete.
- **Won't have (this time)**: This is acknowledged as a valid requirement but is explicitly out of scope for this release. It may be revisited in future iterations.

Post these definitions where everyone can see them throughout the exercise. Refer back to them whenever a categorization debate stalls.

> **Pro tip:** Add 1-2 real examples from your domain to each category definition. Seeing 'GDPR consent flow = Must Have' and 'Dark mode = Could Have' makes the abstract criteria tangible.

### Step 3: Step 3: Apply the 'Launch Failure' Test for Must Haves

Go through your requirements list and identify the must haves first. For each requirement, ask: **'If we launch without this, does the product fail to deliver its core promise, violate a law, or break a contract?'**

Be ruthless. The most common mistake in MoSCoW is overstuffing the must have bucket. A good rule of thumb from Dai Clegg's original framework is that must haves should represent roughly **60% or less of your total effort budget**. If your must haves exceed this, you either have too many must haves or your scope is too large for the timeline.

For each candidate must have, apply these secondary checks:
- Is there truly no workaround? (Even a manual, temporary one?)
- Would a significant percentage of users be blocked entirely?
- Is there a legal, safety, or contractual mandate?

If the answer to all three is 'no,' the requirement probably belongs in should have, even if it feels very important.

> **Pro tip:** Ask the question in reverse: 'What happens if we ship without this?' If the answer is 'users will be annoyed but can still accomplish their core task,' it's not a must have.

### Step 4: Step 4: Separate Should Haves from Could Haves

With must haves identified, take the remaining requirements and split them into should have and could have. This is where most teams struggle because the boundary is less dramatic than the must have line.

The key differentiator is **pain and frequency**. A should have causes noticeable pain or friction when absent — users will complain, support tickets will increase, or key workflows become significantly slower. A could have, when absent, simply means the experience isn't as polished or delightful.

Apply these questions to each remaining item:
- **How many users are affected?** High-frequency, broad-impact items lean toward should have.
- **How severe is the impact?** Significant friction or efficiency loss = should have. Minor inconvenience = could have.
- **Is there a reasonable workaround?** If the workaround is painful but functional, it's a should have (the pain justifies prioritizing it soon). If the workaround is trivial, it's a could have.

Should haves typically represent about **20% of your effort budget**, and could haves another **20%**. This gives you a natural buffer — if must haves take longer than expected, could haves get cut first, then should haves if necessary.

> **Pro tip:** When stuck between should and could, ask: 'Will we get negative reviews or lost customers if this is missing at launch?' If yes, it's a should have.

### Step 5: Step 5: Explicitly Designate Won't Haves

Don't just ignore the remaining items — actively categorize them as won't haves for this release. This step is critical because it transforms an ambiguous backlog into a clear scope boundary.

For each won't have, document **why** it's deferred and **when** it might be revisited. 'Won't have this time' is not 'never.' Stakeholders who see their request acknowledged and scheduled for future consideration are far more likely to accept the deferral than those who feel their input was dismissed.

Won't haves often include:
- Features that serve a future market segment you haven't entered yet
- Nice-to-have integrations with low current demand
- Speculative features without validated user need
- Items that depend on infrastructure not yet in place
- Requests from a single stakeholder that don't align with broader strategy

> **Pro tip:** Create a 'Won't Have (This Time)' section in your roadmap or backlog tool. Revisit it at the start of each planning cycle. This builds stakeholder trust and prevents won't haves from becoming forgotten ideas.

### Step 6: Step 6: Validate the Distribution and Stress-Test Edge Cases

Step back and look at the overall distribution across your four buckets. A healthy MoSCoW split typically follows a ratio close to 60/20/20 for effort across must/should/could haves (with won't haves excluded from the effort calculation since they're deferred).

If your must haves consume more than 60% of available effort, you have a problem. Either you've been too generous with the must have label, or the project scope exceeds your capacity. Go back through the must haves and re-apply the launch failure test more strictly.

Next, stress-test your categorization with edge cases:
- Pick 2-3 items on the boundary between must and should. Present the 'launch without it' scenario to stakeholders. If they accept the workaround, downgrade to should.
- Pick 2-3 should haves and ask: 'If we run out of time, can we live without this for 4-6 weeks post-launch?' If yes, confirm should have. If the delay would cause serious damage, reconsider as must have.
- Verify that no won't haves are actually must haves in disguise — especially compliance or security items that were categorized based on perceived complexity rather than actual necessity.

> **Pro tip:** Present the categorized list to someone who wasn't in the session — a fresh pair of eyes will quickly spot items that seem miscategorized.

### Step 7: Step 7: Document and Communicate the Categorized Output

The final step is documenting the categorized requirements in a format that's actionable for the team and transparent for stakeholders. For each requirement, record:
- The MoSCoW category
- A 1-sentence rationale for the categorization
- Any dependencies on other requirements
- The estimated effort (if available)

Share this document broadly. The power of must have, should have, could have, and won't have categories is that they're immediately understandable by anyone — executives, engineers, designers, and customers. Use this accessibility to build alignment.

This categorized output directly feeds into [defining your MVP scope](https://tryhamster.com/skills/defining-mvp-scope-with-moscow) and [building your prioritized roadmap](https://tryhamster.com/skills/building-roadmaps-from-moscow-outputs).

## Best Practices

- Always define your MoSCoW categories with specific, written criteria before starting categorization — never rely on the team's intuitive understanding of 'must' vs. 'should.'
- Cap must haves at roughly 60% of your available effort budget. If you exceed this, you're either miscategorizing or your scope needs to shrink.
- Categorize must haves first by applying the binary 'launch failure' test, then sort the remainder into should, could, and won't have — working from highest to lowest stakes reduces ambiguity.
- Document a brief rationale for each categorization decision. This prevents re-litigation in future meetings and helps onboard new team members to the reasoning.
- Treat 'won't have' as 'won't have this time' — always communicate that deferred items will be revisited, and actually follow through by reviewing them each planning cycle.
- Re-run the categorization whenever a significant constraint changes (timeline cut, budget change, new regulation). MoSCoW categories are tied to a specific release context, not permanent labels.

## Common Mistakes

- **Putting everything in must have because stakeholders insist their features are critical** — Apply the binary 'launch failure' test strictly: if the product can still function and deliver core value without it, it's not a must have regardless of who requested it. Facilitate this by asking stakeholders to describe what happens if the feature ships 6 weeks later — if they can articulate a viable interim state, it's a should have.
- **Using must have, should have, could have, and won't have as a simple importance ranking (1-4 scale) rather than qualitatively different categories** — Reinforce that the categories represent different relationships to the release, not degrees of importance. A could have might be incredibly valuable — it's just not essential for this specific release to succeed. Train the team on the qualitative definitions before every session.
- **Leaving the 'won't have' bucket empty because it feels negative or confrontational** — Explicitly populating won't have is one of the most valuable parts of MoSCoW — it creates a transparent scope boundary. Frame it as 'won't have this time' and pair each item with a tentative future date. This turns a potential conflict into a planning conversation.
- **Categorizing based on effort or feasibility instead of value and necessity** — MoSCoW categorization should reflect how critical the requirement is to the release, not how hard it is to build. A technically complex feature that's required by law is still a must have. Separate the 'what bucket does it belong in?' discussion from the 'can we actually deliver it?' discussion — the latter is a resourcing problem, not a prioritization one.
- **Doing MoSCoW categorization once and treating the results as permanent** — Requirements shift categories as context changes. A could have might become a must have when a competitor launches that feature, or a must have might become a won't have if the timeline is cut in half. Schedule periodic re-categorization reviews, especially after major scope or constraint changes.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/moscow/METHOD.md) — MoSCoW

## Related Skills

- [Building Prioritized Roadmaps from MoSCoW Outputs](../building-roadmaps-from-moscow-outputs/SKILL.md)
- [Applying MoSCoW to Project and Software Requirements](../applying-moscow-to-project-requirements/SKILL.md)
- [Resolving Stakeholder Priority Disputes Using MoSCoW](../resolving-stakeholder-disputes-with-moscow/SKILL.md)
- [Facilitating MoSCoW Prioritization Workshops with Stakeholders](../facilitating-moscow-prioritization-workshops/SKILL.md)
- [Defining MVP Scope Using MoSCoW Categories](../defining-mvp-scope-with-moscow/SKILL.md)
- [Comparing MoSCoW with RICE, ICE, WSJF, and Other Frameworks](../comparing-moscow-with-other-prioritization-frameworks/SKILL.md)
