---
name: authoring-routines-from-scratch
description: "Guides users through writing a strong routine: triggers, schedules, instructions, and action steps."
version: "1.0.0"
metadata:
  category: "Ops"
---

# Authoring Routines from Scratch

A routine is an automated or semi-automated workflow that fires on triggers or schedules. Routines keep knowledge current without manual intervention — they are the maintenance layer of Hamster Knowledge.

## What makes a strong routine?

**Triggers** — What events fire the routine, selected from the trigger enum. Good: `brief.approved`, `initiative.state_changed.shipped`. Bad: "When something changes" (too broad — fires on every change).

**Schedules** — Optional cadence for time-based routines. Good: `schedule.fired` with quarterly cadence. Bad: No schedule when the routine should run periodically, or a schedule when a trigger is more appropriate.

**Instructions** — Markdown body describing what the routine does when it fires. Clear enough for the harness to execute without ambiguity. Good: "Review each method against current practice. Update steps that no longer match reality." Bad: "Check if things are up to date."

**Actions** — What the routine does: review, update, notify, or create. A routine that describes a problem but doesn't fix it is incomplete. Good: "Flag the method for human review and post a notification in the knowledge channel." Bad: "Identify outdated methods" with no action taken.

## How to write one

1. **Identify what should happen automatically:** What task currently requires someone to remember to do it? That's a routine candidate.
2. **Choose triggers from the enum:** Available triggers include `brief.approved`, `initiative.state_changed.shipped`, `blueprint.proposal_committed`, `schedule.fired`. Pick the most specific trigger that fires at the right moment.
3. **Write instructions as clear markdown:** Describe what the routine does when it fires. Be specific enough that the harness can execute the steps without guessing.
4. **If scheduled, set the cadence:** Daily, weekly, monthly, or quarterly. Choose the longest interval that still catches problems before they matter.
5. **Test the routine on a real trigger:** Fire the trigger manually and observe the output. Does the routine do what you intended?

## Common mistakes

- Triggers too broad. Firing on every `brief.approved` when only briefs that change a specific workflow matter. Use the most specific trigger available.
- Instructions too vague for the harness to execute. "Review and update as needed" is not executable. "Review each method's steps against the approved brief's workflow. Update any step that no longer matches."
- No schedule when one is needed. A quarterly audit routine needs `schedule.fired` with quarterly cadence — it won't fire on its own.
- Routine that duplicates a manual process nobody follows. If the manual process is dead, the routine should replace it, not automate a corpse.
- Missing the actual action. Describes a problem ("methods may be stale") but doesn't fix it ("update steps that no longer match reality and flag for human review if uncertain").

## Prompts to get unstuck

- "What should happen without someone doing it manually?"
- "What event triggers this?"
- "What exactly should the routine do when it fires?"
- "How often should this run if not trigger-based?"
