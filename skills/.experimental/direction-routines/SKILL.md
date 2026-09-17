---
name: direction-routines
description: "Guide creating goal-linked routines that monitor health, nudge owners, and create briefs when goals drift. Enforces the closed loop: goals → routines monitor → nudges inform discovery → work informs direction. Routines nudge — they never decide. Use when creating or configuring a routine that monitors goal health or initiative status, or when a user asks to automate goal monitoring or set up alerts for drifting goals."
metadata:
  category: "Workflows"
---

# Direction Routines

Routines are the automated feedback loop that makes the Hamster Company Direction workflow self-correcting without meetings. They close the loop: **goals → routines monitor → nudges inform discovery → work informs direction.** Routines nudge — they never decide. The team decides.

This skill powers Phase 5 (Routines Monitor & Feedback) of the Direction workflow: Set Goals (OGSM) → Commit Work (Initiatives) → Run Discovery → Write Briefs → Routines Monitor & Feedback.

## When to use this skill

- When creating or configuring a routine that monitors goal health or initiative status.
- When a user asks to automate goal monitoring or set up alerts for drifting goals.
- When designing the feedback loop between goals, initiatives, and discovery.
- When a user asks "how do I know if my goals are drifting without checking manually?"

## Core guidance

1. **Always define a specific trigger condition.** Use the most specific event available — not `initiative.health_changed` but `initiative.health_changed.off_track`. Broad triggers fire noise; specific triggers fire signal.

2. **Never let a routine make decisions.** Routines nudge, humans decide. A routine may suggest "consider moving this to Discovery" — it must never auto-move the initiative. The team owns every state transition.

3. **Always include a stop condition.** Define when the routine should not fire. If the initiative is already back on track, or the owner has acknowledged the nudge in the last 24 hours, do not fire again. Routines that fire on resolved situations are spam.

4. **Always post actionable output to the relevant initiative thread.** Not just a notification — a nudge with a specific suggestion the owner can act on. "Initiative X is off track. Last brief was 5 days ago. Consider running a discovery cycle to validate the approach." is actionable. "Initiative X changed status" is not.

5. **Always link the nudge back to the goal.** Every routine output must reference the goal it serves and the gap between current trajectory and target. Without the goal link, a nudge is just a status update — it doesn't inform direction.

6. **Never create a routine that duplicates a manual process nobody follows.** If the team doesn't do weekly goal reviews, don't automate the review — replace it with a routine that does what the review was supposed to catch.

7. **Always choose scheduled routines for periodic health checks and event-triggered routines for state transitions.** A daily or weekly health scan is scheduled. An alert when an initiative goes off track is event-triggered. Do not use a schedule when an event trigger is more precise.

8. **Always define what the routine produces.** A routine must output one of: a nudge to the initiative owner, a brief draft when discovery is needed, or a goal health summary. If you can't name the output, the routine isn't ready.

## Concrete examples

### Example 1: Off-track initiative nudge

**Trigger:** `initiative.health_changed.off_track`
**Stop condition:** Initiative health returns to `on_track` or owner has posted in the initiative thread within the last 24 hours.
**Output:** Post to the initiative thread:

> ⚠️ Initiative "Ship onboarding v2" moved to **Off Track**.
> 
> **Goal link:** Reduce time-to-value to <2 min (Q3 OGSM). Current trajectory: 3.5 min. Gap: 1.5 min.
> 
> **Suggested action:** The last brief was 6 days ago. Consider running a discovery cycle to validate whether the onboarding flow is the bottleneck, or opening a new brief to explore alternatives.
> 
> **Owner:** @sarah — acknowledge or dismiss.

**What this routine does NOT do:** It does not move the initiative to Discovery. It does not create the brief. It does not reassign the owner. It nudges.

### Example 2: Weekly goal health scan

**Schedule:** Weekly (Mondays 9:00)
**Stop condition:** No initiatives are linked to any goal, or all linked initiatives are `shipped` or `on_track`.
**Output:** Post a summary to each goal's thread:

> **Weekly Goal Health: "Reduce time-to-value to <2 min"**
> 
> | Initiative | Health | Last Brief | Days Since Brief |
> | --- | --- | --- | --- |
> | Onboarding v2 | Off Track | 6 days ago | 6 |
> | Activation email | On Track | 2 days ago | 2 |
> 
> **Assessment:** 1 of 2 initiatives is off track. Goal trajectory is at risk. Consider prioritizing a discovery cycle for the off-track initiative this week.

**What this routine does NOT do:** It does not prioritize work. It does not assign the discovery cycle. It surfaces the gap so the team can decide.

### Example 3: Brief needed when goal edits accepted

**Trigger:** `goal.edits_accepted`
**Stop condition:** A brief was created for this goal within the last 7 days, or no initiatives are linked to the goal.
**Output:** Post to the goal's thread:

> 📝 Goal "Reduce time-to-value to <2 min" was updated. The target metric changed from 2 min to 1.5 min.
> 
> **Suggested action:** The linked initiatives may need updated briefs to reflect the new target. Consider creating a brief for each initiative to validate whether the current approach still applies.
> 
> **Linked initiatives:** Onboarding v2, Activation email

**What this routine does NOT do:** It does not create the briefs. It does not invalidate existing briefs. It surfaces the gap between the updated goal and the current work.

## Anti-patterns

### Anti-pattern 1: Notification without action

**What:** A routine that sends a Slack message: "Initiative X changed status to Off Track."

**Why it fails:** The message tells the owner something happened but gives no suggestion for what to do next. The owner has to investigate, decide, and act — all manually. The routine has added a notification without reducing the work. **Fix:** Always include a specific suggested action and link to the goal. The nudge should reduce the owner's decision cost, not just add awareness.

### Anti-pattern 2: Fires on every health change

**What:** A routine triggered by `initiative.health_changed` (the broad event) instead of `initiative.health_changed.off_track` (the specific event).

**Why it fails:** It fires when health goes from on_track to at_risk, from at_risk to off_track, from off_track back to at_risk — every transition. The owner gets 4-5 nudges for a single drift cycle. Most are noise. **Fix:** Use the most specific trigger. If you only care about off-track, trigger on `off_track` only.

### Anti-pattern 3: Auto-moves initiatives

**What:** A routine that, when an initiative goes off track, automatically moves it to the Discovery focus column.

**Why it fails:** The routine has made a decision the team should make. Maybe the initiative is off track because of a dependency, not because the approach is wrong — Discovery isn't the right response. Auto-moving creates false signal and erodes trust in the system. **Fix:** The routine suggests Discovery as an option. The owner decides. Routines nudge; humans decide.

### Anti-pattern 4: No stop condition

**What:** A routine that fires every time an initiative is off track, even if the owner already acknowledged the nudge and is actively working on it.

**Why it fails:** The owner gets daily reminders for a situation they're already handling. The routine becomes spam and gets muted. **Fix:** Define a stop condition: "Do not fire if the owner has posted in the initiative thread within the last 24 hours" or "Do not fire if health has returned to on_track."

### Anti-pattern 5: Goal-agnostic nudge

**What:** A routine that says "Initiative X is off track" without referencing the goal, the target, or the gap.

**Why it fails:** Without the goal link, the owner can't assess whether the drift matters. An off-track initiative on a low-priority goal may be fine. An off-track initiative on the company's #1 goal is urgent. **Fix:** Every nudge must include the goal name, the target, the current trajectory, and the gap.

## Validation criteria

A direction routine is complete when:

1. **Trigger is specific** — Uses the most specific event or a clear schedule, not a broad catch-all.
2. **Stop condition is defined** — The routine will not fire when the situation is already resolved or acknowledged.
3. **Output is actionable** — Posts to the initiative or goal thread with a specific suggested action, not just a status notification.
4. **Goal is linked** — Every nudge references the goal, the target, and the gap.
5. **Routine nudges, does not decide** — The routine suggests actions; it never auto-transitions initiative state, creates briefs without human review, or reassigns owners.
6. **Output is posted to the right thread** — Initiative health nudges go to the initiative thread. Goal-level summaries go to the goal thread. Never to a generic channel.

## Available triggers for direction routines

**Event triggers:**

- `brief.status_changed` — fires when a brief's status changes (e.g., approved, rejected, completed)
- `initiative.health_changed.at_risk` — fires when an initiative moves to at-risk
- `initiative.health_changed.off_track` — fires when an initiative moves to off-track
- `initiative.focus_changed` — fires when an initiative moves between focus columns
- `goal.edits_accepted` — fires when goal edits are accepted

**Scheduled triggers:**

- `schedule.fired` with cadence: hourly, daily, weekly — for periodic health scans and goal trajectory checks
