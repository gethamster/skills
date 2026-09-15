# Examples: Defining Graduation Criteria Between Horizons

## Example: B2B SaaS team with 15 engineers and a growing roadmap

**Scenario:**

A B2B SaaS company sells project management software. The product team has 40 items on their now next later roadmap: 6 in Now, 12 in Next, and 22 in Later. Sprint planning meetings regularly stall because stakeholders disagree about which Next items are "ready" for Now. The team has three engineering squads, each with capacity for roughly two medium-sized initiatives per quarter.

**Walkthrough:**

The PM starts by interviewing each squad lead and the head of product about how they currently decide readiness. Three implicit criteria emerge: stakeholder urgency, engineering interest, and rough customer demand. The PM selects four dimensions: desirability (customer evidence), feasibility (technical assessment), viability (revenue impact estimate), and resource readiness (squad capacity). For the Later to Next gate, the PM sets thresholds: problem statement documented with at least three customer interview quotes or support ticket references, a brief technical note confirming no architectural blockers, and confirmation that the initiative maps to one of the company's three annual strategic themes.

For the Next to Now gate, thresholds increase: prototype or mockup tested with five or more users, technical design document with effort estimate in squad-weeks, projected impact on a key metric quantified with assumptions stated, and a named squad with capacity in the upcoming quarter. The PM tests this matrix against the last six promotions. Two items that stalled after reaching Now would have failed the resource readiness criterion. One item that was successful would have failed the viability threshold, so the PM adjusts the viability criterion to accept qualitative strategic value for initiatives below two squad-weeks of effort.

The refined matrix is introduced at the next planning meeting, and the team uses it to evaluate three pending promotion requests in under 20 minutes, compared to the 45 minutes the same discussions used to take.

## Example: Early-stage startup with a small team and limited discovery data

**Scenario:**

A seed-stage startup with two engineers and one PM/designer has 8 items on their roadmap. They have limited access to users and no formal discovery process. The founder tends to pull items into Now based on investor feedback or competitive pressure.

**Walkthrough:**

The PM recognizes that requiring prototype tests with 10 users is unrealistic for a team with a handful of beta users. She selects three dimensions instead of four: desirability, feasibility, and strategic alignment. For the Later to Next gate, desirability requires at least one concrete user signal, such as a beta user request, a churned user's exit interview mention, or an observable behavior in analytics. Feasibility requires the engineer to confirm the work is possible within the current architecture.

Strategic alignment requires the founder to confirm the initiative supports the next fundraising milestone. For the Next to Now gate, desirability requires the PM to have spoken to at least two users who confirm the problem. Feasibility requires a rough estimate of under two weeks of effort, since the team cannot afford longer bets at this stage. Strategic alignment requires the founder's explicit agreement that this is the highest-leverage use of the next sprint.

The PM tests this against recent decisions and finds that two items were pulled into Now based solely on investor feedback, skipping user evidence entirely. Both items shipped but saw minimal adoption. The matrix would have caught this gap. The team adopts the lightweight matrix and commits to reviewing it monthly rather than quarterly, given the pace of change at the seed stage.

## Example: B2C mobile app team balancing feature requests with platform stability

**Scenario:**

A consumer mobile app team has a now next later roadmap split between user-facing features and platform stability work (performance improvements, tech debt reduction, infrastructure upgrades). The team struggles because stability work never meets the same "customer evidence" bar as feature requests, so it perpetually sits in Later while the app grows slower and buggier.

**Walkthrough:**

The PM identifies the root problem: the graduation criteria implicitly favor desirability evidence that comes from user requests, which stability work rarely generates. She creates two criteria tracks: one for user-facing features and one for platform/stability initiatives. Both tracks share feasibility and resource readiness dimensions, but the evidence types differ. For stability work, desirability is replaced with "impact evidence," which requires data showing degradation, such as p95 latency exceeding a threshold, crash rate above a target, or developer velocity declining by a measurable percentage.

For the Later to Next gate on stability work, the threshold is a documented metric showing a specific KPI crossing a defined warning level. For Next to Now, it requires an engineering proposal with estimated improvement and a rollback plan. The PM tests this against the last quarter. Three stability items were stuck in Later despite p95 latency doubling.

Under the new criteria, two of those three would have graduated to Next immediately. The team adopts the dual-track matrix, and in the next planning cycle, one stability initiative graduates to Now alongside two feature initiatives, balancing the portfolio for the first time in months.

## Example: Enterprise product team with multiple stakeholder groups

**Scenario:**

An enterprise software company has product, sales, customer success, and executive stakeholders who each lobby for different items. The Now column is overloaded with 14 items because every stakeholder group has pushed their priority through without a shared bar for readiness. Engineering throughput supports 4-5 Now items at a time.

**Walkthrough:**

The PM conducts a retrospective on the 14 Now items and finds that only 5 have complete technical designs, 3 have validated customer evidence, and 6 were added based on a single executive request. She defines graduation criteria with five dimensions: desirability (customer evidence from three or more accounts for B2B), feasibility (technical design reviewed by engineering lead), viability (impact estimate with finance review for items above a revenue threshold), strategic alignment (maps to published quarterly OKRs), and resource readiness (assigned to a squad with sprint capacity). She sets the Next to Now gate as requiring all five checkpoints to pass. The PM applies the criteria retroactively to all 14 Now items.

Nine items fail at least one criterion and are moved back to Next with clear action items for each. The executive sponsor of two moved items pushes back, and the PM uses the matrix to show exactly which evidence gaps remain, converting a political argument into a factual discussion about missing technical designs. Over the next quarter, the Now column stabilizes at 4-6 items, sprint completion rates improve from 60% to 85%, and stakeholders learn to prepare evidence before proposing promotions.
