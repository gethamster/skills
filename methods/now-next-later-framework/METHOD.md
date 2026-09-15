# Now Next Later Framework: How to Build Roadmaps Without False Deadlines

> Created by **Janna Bastow** — [https://www.prodpad.com/blog/invented-now-next-later-roadmap/](https://www.prodpad.com/blog/invented-now-next-later-roadmap/)

## Overview

Product teams have a trust problem with roadmaps. Traditional timeline roadmaps promise delivery dates that sound precise but aren't. A feature slated for "Q3" becomes a commitment the moment a stakeholder sees it on a slide, even if the team scoped it on a napkin over lunch. When that date slips, credibility erodes. The Now Next Later framework was designed to solve exactly this pattern. Instead of plotting work on a calendar, it sorts initiatives into three columns based on how well understood they are and how soon the team intends to act on them.

Janna Bastow, co-founder of ProdPad, introduced the Now Next Later roadmap in 2012 after years of watching product managers struggle under the weight of date-driven commitments. Bastow's core observation was simple: most teams don't actually lack a sense of priority. They lack a format that lets them communicate priority without implying a deadline. The three-horizon model gave PMs a way to say "this is what matters most, this is what comes after, and this is where we're thinking long-term" without anyone pulling out a calendar. The framework gained traction quickly in the lean and agile product communities, partly because it required no new tooling and partly because it mapped naturally onto how product discovery actually works.

The mental model underneath the framework is a confidence gradient. Items in "Now" are high-confidence. The problem is validated, the solution is scoped, the team has capacity, and the work is underway or about to start. "Next" items sit in the middle of the gradient. The problem is real and probably validated, but the solution still needs discovery work, dependencies need to be resolved, or capacity isn't available yet. "Later" items are low-confidence by design. They represent strategic bets, customer requests worth tracking, or ideas the team believes in but hasn't validated. The further right on the board an item sits, the less detail it should have, and that's the point. Forcing detailed specs on a "Later" item is wasted effort because the world will change before the team gets there.

Compared to quarterly roadmaps, the Now Next Later framework avoids the fiction of precise scheduling while still offering directionality. Compared to kanban boards, it adds a strategic layer that goes beyond "to-do, doing, done" by explicitly including future thinking. It sits somewhere between the two, borrowing kanban's visual simplicity and the quarterly roadmap's forward-looking scope. Some teams layer it on top of frameworks like RICE or MoSCoW. RICE helps score individual items, and Now Next Later provides the container for sequencing them once scored.

The framework has evolved since its introduction. Early adopters used it as a literal three-column board. Over time, teams began adding sub-horizons, tagging items by theme or objective, and connecting horizons to OKRs or strategic pillars. Some organizations run separate Now Next Later boards per team or product area, then roll them up into a portfolio view. The format has also become a communication tool as much as a planning tool. PMs present it to executives to show strategic direction, to engineers to clarify what's coming, and to customers to set expectations without making promises.

The framework works best for teams that operate in environments where customer needs shift, technical constraints evolve, and business priorities change faster than a quarterly plan can absorb. SaaS product teams, early-stage startups iterating on product-market fit, and platform teams juggling competing stakeholder requests all tend to benefit. It's less suited for teams with hard regulatory deadlines or fixed-scope contract work, where dates genuinely matter and aren't arbitrary. The key question is whether your team's biggest roadmap problem is "we don't know what to build" or "we don't know when it'll ship." If it's the latter, and the dates are real, a timeline roadmap may serve you better. If it's the former, Now Next Later gives you a structure that matches your actual level of certainty.

## Core Principles

### Sequence over dates

The framework communicates the order in which work will happen, not when it will ship. This distinction matters because dates create implied commitments that cascade through organizations. A sales team sees "Q3" and tells a prospect. A marketing team plans a launch around it.

When teams skip this principle and attach dates to Now Next Later items, they recreate exactly the problem the framework was designed to solve. The tradeoff is real: some stakeholders genuinely need dates for coordinating dependencies. The answer isn't to ban dates entirely, but to reserve them for "Now" items where confidence justifies the precision.

### Detail decreases with distance

"Now" items should have clear acceptance criteria, assigned owners, and understood scope. "Next" items need a validated problem statement and rough solution direction but not a full spec. "Later" items might be a single sentence describing a customer problem or strategic bet. Teams that violate this principle by writing detailed requirements for "Later" items waste effort on work that will change before it's relevant.

They also create a false sense of readiness that makes stakeholders wonder why the team isn't already building it. The gradient of detail is what keeps the roadmap honest.

### Horizons reflect confidence, not importance

A common misconception is that "Later" means "less important." It doesn't. A major strategic initiative might sit in "Later" because the team hasn't done enough discovery to move it forward, while a small bug fix sits in "Now" because it's fully understood and ready. Confusing confidence with importance leads teams to push half-baked strategic items into "Now" prematurely, which clogs the pipeline and degrades execution quality. When this principle is clear, stakeholders stop lobbying to move their pet projects into "Now" and start asking what needs to happen for an item to graduate.

### Explicit graduation criteria

Items should not drift between horizons based on gut feel or stakeholder pressure. Each transition, from Later to Next and from Next to Now, should have clear criteria: what evidence is needed, what dependencies must be resolved, what capacity is required. Without graduation criteria, the board becomes a wish list where items move forward because someone asked loudly enough. This principle requires the most discipline to maintain because it demands that PMs articulate why something isn't ready to move, which can be a harder conversation than just saying yes.

### The roadmap is a living document

A Now Next Later board that gets updated once a quarter is just a timeline roadmap in disguise. The value of the framework comes from continuous reprioritization as new information arrives, whether from customer feedback, competitive shifts, technical discoveries, or business changes. Teams that treat the board as static lose the agility benefit entirely. The practical implication is that someone needs to own the cadence of review, whether that's weekly, biweekly, or tied to sprint boundaries.

A stale roadmap is worse than no roadmap because it gives false confidence.

### Communication is the primary function

The Now Next Later board is not primarily a project management tool. It's a communication device. Its job is to align different audiences, executives, engineers, designers, customers, around a shared understanding of direction without requiring everyone to agree on every detail. When teams use it purely as an internal planning artifact and never show it to stakeholders, they miss half the value.

The board should be presentable at any moment, not polished, but coherent enough that anyone looking at it can understand what the team is focused on and why.

### Limit work in "Now"

If everything is in "Now," nothing is prioritized. The "Now" column should contain only what the team is actively working on or will start within the current cycle. Overloading "Now" defeats the purpose because it recreates the overwhelm of an undifferentiated backlog. Most teams find that 3-5 initiatives in "Now" is the practical ceiling for a single product team.

This constraint forces the hard prioritization conversations that the framework is designed to enable, and it's often where teams feel the most discomfort when first adopting the approach.

## Steps

1. **Step 1: Audit your existing backlog and incoming requests**
   Before building the board, gather everything: feature requests, bug reports, strategic initiatives, tech debt items, customer feedback, internal stakeholder asks. Pull from whatever sources your team uses, whether that's a product management tool, a spreadsheet, a Slack channel full of requests, or a pile of sticky notes from the last offsite. The goal is a single, comprehensive list with no duplicates. Resist the urge to prioritize during this step.

You're collecting, not deciding. A common mistake is skipping this audit and only putting "the things we already planned" on the board, which defeats the purpose because it excludes the competing priorities that make the framework necessary in the first place.

2. **Step 2: Define what each horizon means for your team**
   "Now," "Next," and "Later" need concrete definitions that your specific team agrees on. For some teams, "Now" means "in the current sprint." For others, it means "actively being worked on this month." "Next" might mean "validated and ready to start when capacity opens" or "in active discovery." "Later" might mean "strategic direction for the next 6 months" or "interesting ideas we haven't validated." Write these definitions down and share them. Without shared definitions, two people looking at the same board will interpret it differently, and that misalignment will surface as conflict later. One variation: some teams add a fourth column, "Not Doing" or "Parked," for items they've explicitly decided against, which prevents those items from being re-raised every planning session.

3. **Step 3: Establish graduation criteria for each transition**
   Define what needs to be true for an item to move from Later to Next, and from Next to Now. ). Write these criteria as a checklist that anyone can reference. The criteria don't need to be rigid, they can include judgment calls, but they need to exist so that "moving something to Now" is a conscious decision with documented reasoning rather than a reaction to whoever asked most recently.

Teams that skip this step find their "Now" column overflowing within weeks.

4. **Step 4: Sort your backlog into the three horizons**
   Take the comprehensive list from Step 1 and place each item into Now, Next, or Later based on the definitions and graduation criteria you established. Start with "Now" because it's the most constrained. Limit it to what the team is genuinely working on or will start within the current cycle, typically 3-5 initiatives for a single product team. Then populate "Next" with items that meet most but not all graduation criteria for "Now," usually 5-10 items.

Everything else goes into "Later" or gets discarded. This step should involve the cross-functional team, not just the PM, because engineers and designers often have context about technical readiness and design feasibility that changes where items land. " If your "Now" column has more than 5-7 items, you're not prioritizing, you're listing.

5. **Step 5: Add context and appropriate detail to each item**
   Apply the detail gradient. For "Now" items, ensure each has a clear problem statement, defined scope, an owner, and acceptance criteria or a definition of done. " For "Later" items, a brief problem statement or strategic hypothesis is sufficient, often just one or two sentences. Resist the urge to write detailed specs for "Later" items.

It feels productive but it's waste. If an item in "Later" has a three-page spec, either it belongs in "Next" or the spec will be outdated by the time the team gets to it. Some teams tag items by theme, objective, or customer segment at this stage, which helps with filtering and stakeholder presentations.

6. **Step 6: Establish a review cadence**
   Set a regular rhythm for reviewing and updating the board. Weekly or biweekly reviews work for most teams. During each review, ask: Has anything in "Now" been completed or blocked? Has new information changed the priority of anything in "Next"?

Have any "Later" items been validated enough to graduate? Has anything been added that needs to be sorted? The review should involve the core product team and optionally key stakeholders. Keep it short, 15-30 minutes, and focused on changes rather than re-debating settled decisions.

A common failure mode is treating the review as a status meeting rather than a prioritization conversation. The goal isn't to report progress on "Now" items. That's what standups and sprint reviews are for. The goal is to keep the horizons accurately reflecting the team's current understanding.

7. **Step 7: Communicate the roadmap to different audiences**
   Present the board to stakeholders with framing appropriate to each audience. For executives, emphasize the strategic themes across horizons and how they connect to business objectives. For engineering teams, focus on what's in "Now" and what's coming in "Next" so they can anticipate upcoming work. For customers or external stakeholders, share a curated view that shows direction without overcommitting.

" Always pair the board with a brief explanation of what each horizon means, especially for audiences seeing this format for the first time. Stakeholders accustomed to date-based roadmaps will initially push back.

## When to Use

- When your team has 20 or more competing feature requests from customers, internal stakeholders, and strategic goals, and every conversation about roadmaps devolves into timeline debates rather than priority discussions. The framework gives you a shared vocabulary for "this matters but we're not ready to commit" that a timeline roadmap can't express.
- When you're building a SaaS product and your roadmap needs to serve multiple audiences, including an engineering team that wants clarity on what's next, executives who want strategic direction, and customers who want to know their request was heard. The three-horizon format lets you present the same board to each audience with different emphasis without maintaining three separate documents.
- When your product discovery process regularly invalidates assumptions, making date-based commitments unreliable. If your team runs experiments, prototypes, or beta tests before committing to full builds, the Now Next Later framework maps directly onto your discovery workflow: "Later" items are hypotheses, "Next" items are validated problems, and "Now" items are solutions ready for delivery.
- When you're an early-stage startup iterating toward product-market fit and your priorities shift every few weeks based on customer conversations, churn data, or competitive moves. Quarterly roadmaps break down in this context because the world changes faster than the planning cycle. The framework absorbs change without requiring a formal replan.
- When cross-functional teams need alignment without rigid scheduling. If design, engineering, data science, and marketing all have different cycle times and planning rhythms, the framework provides a shared view of priority without forcing everyone onto the same sprint cadence or quarterly calendar.

## When Not to Use

- When you're working against hard external deadlines that cannot move, such as regulatory compliance dates, contractual delivery obligations, or coordinated launches with hardware partners. The framework's core assumption is that sequence matters more than dates, and that assumption breaks when missing a date has legal, financial, or partnership consequences. In these cases, a timeline or Gantt-based roadmap gives stakeholders the date-specific accountability they actually need.
- When your organization's culture demands date commitments and you don't have the political capital to change that expectation. Introducing Now Next Later into an organization that evaluates PM performance based on hitting quarterly delivery targets will create friction without solving the underlying cultural problem. The framework requires leadership buy-in that "we'll ship the right things in the right order" is more valuable than "we'll ship what we promised by the date we promised."
- When you're managing a small, well-understood backlog with fewer than 10 items and a single team. The overhead of maintaining three horizons doesn't add value when the team can simply look at a prioritized list and know what to do next. The framework solves a communication and prioritization problem at scale. For a two-person team with a clear mission, a simple ordered backlog is faster and clearer.
- When detailed project planning and resource allocation across multiple teams is the primary need. The framework intentionally avoids granularity around timelines and dependencies, which makes it a poor fit for program management scenarios where you need to coordinate handoffs between teams, manage shared resources, or sequence work across a critical path. Tools like Gantt charts or dependency-mapped project plans serve that need better.
- When the team's primary challenge is execution speed rather than prioritization. If you already know exactly what to build and the bottleneck is shipping velocity, adopting a new roadmap format won't help. The framework is a prioritization and communication tool, not a delivery acceleration tool.

## Skills

This method includes the following skills:

- [Comparing Now-Next-Later to Quarterly and Timeline Roadmaps](../../skills/comparing-now-next-later-to-timeline-roadmaps/SKILL.md) — When to choose a Now-Next-Later approach over traditional date-based or quarterly roadmaps, and how to transition between them.
- [Defining Graduation Criteria Between Horizons](../../skills/defining-graduation-criteria-between-horizons/SKILL.md) — How to establish clear criteria and confidence thresholds that determine when an initiative is ready to move from Later to Next, or from Next to Now.
- [Categorizing Items into Now, Next, and Later Horizons](../../skills/categorizing-items-into-now-next-later-horizons/SKILL.md) — How to evaluate and sort initiatives into the three time horizons based on certainty, urgency, and strategic alignment.
- [Building Now-Next-Later Roadmap Templates](../../skills/building-now-next-later-roadmap-templates/SKILL.md) — How to set up visual roadmap templates in tools like Miro, Notion, ProductBoard, or spreadsheets to represent the three horizons effectively.
- [Reprioritizing and Moving Items Across Horizons](../../skills/reprioritizing-across-horizons/SKILL.md) — How to run regular reviews that promote, demote, or remove items between Now, Next, and Later as new information and priorities emerge.
- [Applying Now-Next-Later Roadmaps to SaaS Products](../../skills/applying-now-next-later-to-saas-products/SKILL.md) — How to adapt the Now-Next-Later framework for SaaS environments, including continuous delivery cycles, feature requests, and customer-driven prioritization.
- [Communicating Now-Next-Later Roadmaps to Stakeholders](../../skills/communicating-roadmaps-to-stakeholders/SKILL.md) — How to present a timeline-free, horizon-based roadmap to executives, customers, and cross-functional teams without creating false deadline expectations.

## FAQ

**What is the Now Next Later framework in simple terms?**

It's a way to organize your product roadmap into three buckets based on how soon and how confidently you plan to work on something. "Now" is what you're actively building. "Next" is what you've validated but haven't started yet. "Later" is where you track strategic ideas and customer requests you haven't fully explored.

Instead of promising dates, you communicate sequence and confidence level, which is usually more honest about what your team actually knows.

**Now Next Later framework vs quarterly roadmap: which should I use?**

It depends on whether your biggest problem is false precision or genuine scheduling. Quarterly roadmaps work when you have stable requirements, predictable capacity, and stakeholders who need date-specific commitments for coordination. The Now Next Later framework works when priorities shift frequently, discovery regularly changes your plans, or you've lost stakeholder trust because of repeated missed deadlines. Many teams use both: Now Next Later for strategic communication and quarterly plans for execution-level scheduling within the "Now" horizon.

**Does the Now Next Later framework work for small teams of 3-5 people?**

It can, but it's often more structure than a small team needs. If your team has a short, clear backlog and everyone already knows the priorities, a simple ordered list is faster and easier. The framework adds the most value when there are competing stakeholders, multiple sources of requests, or ambiguity about what should come first. If your 5-person team is juggling input from customers, investors, and internal stakeholders, the framework helps.

If it's a small team with a clear mission and a single decision-maker, keep it simple.

**How does the Now Next Later framework work alongside OKRs?**

OKRs define what outcomes you're trying to achieve. Now Next Later organizes the work that delivers those outcomes. The connection works best when each item on the roadmap is tagged to an objective, so stakeholders can see how current work maps to strategic goals. "Now" items should map directly to current-quarter OKRs.

"Next" items often connect to the same OKRs or the next quarter's. "Later" items may connect to annual or aspirational objectives. This pairing gives you both the "why" (OKRs) and the "what and when-ish" (roadmap).

**Why does the Now Next Later framework fail in practice?**

The most common failure is overloading the "Now" column. When everything is "Now," nothing is prioritized, and the framework becomes an undifferentiated backlog with a new label. The second failure is treating it as a one-time exercise instead of a living document. Teams create the board in a workshop, then never update it, which makes it stale and ignored within weeks.

The third failure is organizational: stakeholders who are used to date-based roadmaps refuse to accept the format, so the PM maintains a Now Next Later board for the team and a secret timeline roadmap for executives, which doubles the work and defeats the purpose.

**How do I decide when to move an item from Later to Next?**

Define graduation criteria before you need them. Common triggers for the Later-to-Next transition include: the problem has been validated through customer research, the initiative aligns with a current strategic objective, initial discovery has been completed, and no critical blockers remain. " If yes, it graduates. If not, it stays in Later until more evidence accumulates.

Avoid moving items based on stakeholder pressure alone. If someone is lobbying hard for a Later item, ask what new evidence supports the move.

**Can I use the Now Next Later framework for non-product work like marketing or operations?**

Yes, and teams regularly do. Marketing teams use it to sequence campaigns, content initiatives, and channel experiments. Operations teams use it for process improvements and tooling investments. The underlying mental model, organizing work by confidence and readiness rather than arbitrary dates, applies anywhere that priorities shift and planning precision decreases over time.

The only adaptation needed is redefining what each horizon means for your domain.

**How many items should be in each horizon?**

There's no universal number, but practical constraints exist. "Now" should be limited to what your team can realistically execute in the current cycle, typically 3-7 initiatives depending on team size. "Next" usually holds 5-15 items that are validated and waiting for capacity. "Later" can be larger, 10-30 items, because it functions partly as a strategic holding area.

If "Later" grows beyond 30 items, it becomes unmanageable and starts to look like an ungroomed backlog. Periodically prune "Later" by archiving items that have been there for months without anyone championing them.

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
