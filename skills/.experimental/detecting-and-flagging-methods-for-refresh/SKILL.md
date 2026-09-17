---
name: detecting-and-flagging-methods-for-refresh
description: "Routine trigger that flags methods for review when workflows change or on a quarterly cadence."
metadata:
  category: "Ops"
---

# Detecting and Flagging Methods for Refresh

A routine that detects when documented methods may be stale and flags them for review — keeping process knowledge current without manual auditing.

## What makes a strong refresh routine?

**Triggers** — Events that signal a method may need refresh. Use the most specific trigger available:

- `brief.approved` — An approved brief may change a workflow that has a documented method.
- `initiative.state_changed.shipped` — A shipped initiative may change how work gets done, making existing method steps obsolete.
- `schedule.fired` (quarterly) — Periodic audit to catch drift that doesn't produce a trigger event.

**Review checklist** — The routine executes this checklist against each potentially affected method:

1. Does each step still match current practice? Flag any step that no longer reflects reality.
2. Has the workflow expanded? Add new steps for new stages.
3. Has the workflow contracted? Remove steps that are no longer part of the process.
4. Are prerequisites still accurate? Update if access, connections, or prior steps have changed.
5. Is validation still correct? Update success conditions if the definition of done has shifted.

**Action** — When the checklist surfaces stale steps, update them. When uncertain, flag for human review and post a notification.

## How to write one

1. **Identify which methods are at risk:** Cross-reference the trigger event (e.g., the approved brief) against existing methods. Which methods document workflows this event might change?
2. **Run the review checklist:** For each at-risk method, walk through the five checklist items above.
3. **Update or flag:** If steps are clearly stale, update them. If uncertain whether a change applies, flag the method for human review — don't guess.
4. **Notify:** Post a summary of what was reviewed, what was updated, and what was flagged for human attention.

## Common mistakes

- Flagging every method on every trigger. Only flag methods whose workflow is plausibly affected by the triggering event.
- Updating steps without checking current practice. The routine should compare the method against reality, not against assumptions.
- Auto-updating when uncertain. When the change is ambiguous, flag for human review rather than guessing.
- Skipping the quarterly audit. Trigger-based refresh catches event-driven drift; the quarterly schedule catches slow drift that produces no trigger.

## Prompts to get unstuck

- "Which methods document workflows this event might change?"
- "Does this step still match what actually happens?"
- "Has the workflow gained or lost steps since this method was written?"
- "What's uncertain enough to flag for human review?"
