---
name: initiative-shaping
description: "Guides linking initiatives to goals (many-to-many with weights), assigning owners at creation, setting focus (now/next/later), enforcing 1-2 week scoping, and running discovery against a goal to spawn initiatives. Ensures every initiative has at least one linked goal — no unanchored work."
version: "1.0.0"
category: "Workflows"
---

# Initiative Shaping

Guides the creation and editing of initiatives in the Hamster Company Direction workflow. An initiative is a unit of committed work that links to one or more goals, has an owner, carries a focus designation (now/next/later), and is scoped to 1-2 weeks so it is meaningfully closable.

This skill powers Phase 2 (Commit Work) of the direction workflow: Set Goals (OGSM) → **Commit Work (Initiatives)** → Run Discovery → Write Briefs → Routines Monitor & Feedback.

## Trigger Conditions

- When creating or editing an initiative
- When linking an initiative to a goal
- When a user asks to commit work or scope a delivery effort
- When running discovery against a goal to spawn candidate initiatives
- When a user asks "what should we work on next" or "let's commit to work for this goal"
- When reviewing an initiative for readiness before it enters the active work stream

## Core Guidance

**Always link an initiative to at least one goal before saving.** Unanchored work is a signal that alignment is missing. If you cannot identify which goal this initiative advances, the initiative is not ready — go back to the goal first.

**Always assign an owner at creation.** Initiatives without owners drift. The owner is the person accountable for moving the initiative to done — not necessarily the person doing all the work, but the person who owns the outcome.

**Always set focus (now/next/later) at creation.** Focus is a third dimension, independent of state (draft/refining/shipping/done/blocked/archived) and health (not started/on track/at risk/off track). An initiative can be state=shipping, health=on track, and focus=later — meaning it's progressing but not the current priority.

**Never create an initiative without a clear sense of done.** If you cannot define done in one or two sentences, the initiative isn't ready to commit. "Done" means the outcome is verifiable — a shipped feature, a completed migration, a validated hypothesis — not a list of tasks.

**Scope initiatives to 1-2 weeks.** If an initiative is longer than 2 weeks, split it into smaller closable chunks. An initiative that takes a month is really a theme — break it into 2-3 initiatives that each close in 1-2 weeks.

**Use weights (0-1) on goal links when contribution is partial.** An initiative rarely contributes equally to all its linked goals. A weight of 0.8 on Goal A and 0.3 on Goal B says this initiative primarily advances A and partially advances B. Don't leave partial contribution unqualified — default to 1.0 only when the initiative fully advances that goal.

**When an outcome is too large for a single brief, it becomes an initiative with child briefs.** Briefs link to initiatives. If you are writing a brief and the scope keeps growing, promote it to an initiative and write child briefs underneath.

**When running discovery against a goal, spawn candidate initiatives — not briefs.** Discovery surfaces what needs to happen to advance a goal. Each candidate becomes a draft initiative linked to that goal with a proposed owner and focus. Briefs come later, after the initiative is committed.

**Keep the "now" lane small.** If more than 3-4 initiatives are focus=now for a team, the team is not focused — it's context-switching. Move some to next. "Now" means work that is actively in progress this week.

## Concrete Examples

### Example 1: Single-goal initiative with full contribution

Goal: "Reduce activation friction for new signups"

Initiative:

- **Title:** Simplify onboarding flow to 3 steps
- **Owner:** Maya (Product Engineer)
- **Focus:** now
- **Goal link:** Reduce activation friction — weight: 1.0
- **Done:** Onboarding flow is reduced from 7 steps to 3, and activation rate improves by at least 15% measured via PostHog funnel.
- **Scope:** 1.5 weeks (5 working days for implementation + 2 days for measurement)

This initiative is fully anchored to one goal, has a clear owner, is in the now lane, and has a verifiable definition of done.

### Example 2: Multi-goal initiative with weighted links

Goal A: "Ship self-serve onboarding"
Goal B: "Improve trial-to-paid conversion"

Initiative:

- **Title:** Add interactive product tour for trial users
- **Owner:** Jordan (Full-stack)
- **Focus:** next
- **Goal links:**
- Ship self-serve onboarding — weight: 0.7
- Improve trial-to-paid conversion — weight: 0.5
- **Done:** Interactive tour launches behind a feature flag, tour completion is tracked in PostHog, and at least 40% of trial users complete the tour.
- **Scope:** 2 weeks (tour build + analytics instrumentation + flag rollout)

This initiative contributes partially to two goals. The weights make the contribution structure explicit — it primarily advances self-serve onboarding and secondarily improves conversion.

### Example 3: Discovery spawning initiatives

Goal: "Make Hamster the default workspace for product teams"

Discovery findings:

1. Users drop off after their first brief — they don't see the value of the workflow.
2. Users want templates but the template library is empty.
3. Users don't know about goal-linking because it's buried in settings.

Spawned initiatives:

| Initiative | Owner | Focus | Goal weight | Done | Scope |
| --- | --- | --- | --- | --- | --- |
| Add first-run brief template gallery | Sam (Design) | now | 1.0 | Gallery ships with 5 templates, 60% of new users pick one | 1 week |
| Surface goal-linking at brief creation | Priya (Frontend) | now | 0.8 | Goal picker appears inline during brief creation, 50% of new briefs have a linked goal | 1.5 weeks |
| Add onboarding checklist to dashboard | Sam (Design) | next | 0.5 | Checklist renders for first 7 days, 40% completion rate | 1 week |

Discovery surfaces what needs to happen. Each finding becomes a draft initiative linked to the goal with a proposed owner, focus, and scoping — ready for the team to commit.

## Anti-Patterns

**Creating an initiative with no linked goal.**
*Failure mode:* The initiative floats free of strategy. Nobody can answer "why are we doing this?" when priorities shift. It becomes orphan work that survives because nobody questions it, not because it matters.

**Assigning an owner after the initiative is already in flight.**
*Failure mode:* The initiative starts as "team-owned" or "unassigned" and accumulates work nobody is accountable for. By the time someone is assigned, the initiative has already drifted from its original intent. Owner at creation, every time.

**Setting focus to "now" for 15 initiatives.**
*Failure mode:* "Now" becomes meaningless. If everything is now, nothing is. The team context-switches across 15 initiatives and finishes none of them in the expected 1-2 week window. Now must be small enough to actually focus on — 3-4 initiatives max per team.

**Creating a 6-week initiative.**
*Failure mode:* A 6-week initiative is a theme masquerading as a unit of work. It will never close cleanly because the definition of done keeps moving. Split it into 3 initiatives of ~2 weeks each. Each one should be independently closable and independently valuable.

**Leaving all goal weights at 1.0 by default.**
*Failure mode:* When every link is weighted 1.0, the team can't tell which goal an initiative primarily advances. During reprioritization, all goals look equally served by all initiatives, which makes tradeoff decisions impossible. Set weights honestly — partial contribution is the norm, not the exception.

**Creating an initiative without a definition of done.**
*Failure mode:* The initiative enters the work stream with a title but no finish line. It stays in "shipping" for months because nobody can agree on when it's complete. If you can't write done in 1-2 sentences, the initiative isn't ready to commit.

**Spawning briefs directly from discovery instead of initiatives.**
*Failure mode:* Discovery findings become briefs, which become tasks, which accumulate without any link to goals. The team loses the line from goal → initiative → brief → work. Always spawn initiatives from discovery; briefs come after the initiative is committed.

**Confusing focus with state.**
*Failure mode:* An initiative is set to focus=now because it's state=shipping. But focus and state are independent — an initiative can be actively shipping (state=shipping, health=on track) but deprioritized (focus=later) because a more urgent initiative took the now lane. Setting focus based on state destroys the ability to reprioritize without changing state.

## Validation Criteria

Before saving an initiative, verify:

1. **Goal link exists:** At least one goal is linked. No unanchored work.
2. **Owner is assigned:** A specific person owns the initiative. Not "team," not "unassigned."
3. **Focus is set:** now, next, or later — not blank, not defaulted.
4. **Done is defined:** One or two sentences describing a verifiable outcome.
5. **Scope is 1-2 weeks:** If longer, split it. If you can't estimate scope, the initiative needs more discovery before committing.
6. **Weights are set on multi-goal links:** If an initiative links to more than one goal, each link has a weight reflecting relative contribution. Don't leave all at 1.0 unless contribution is genuinely equal.
7. **Now lane is small:** Total initiatives with focus=now for a team does not exceed 3-4. If it does, move some to next.
8. **Briefs link to initiatives, not directly to goals:** If briefs exist, they link to an initiative, which links to a goal. No direct brief-to-goal links.
