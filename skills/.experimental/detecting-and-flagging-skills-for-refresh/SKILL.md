---
name: detecting-and-flagging-skills-for-refresh
description: "Routine trigger that flags skills for review when conventions change or on a quarterly cadence."
version: "1.0.0"
metadata:
  category: "Ops"
---

# Detecting and Flagging Skills for Refresh

A routine that detects when documented skills may be stale and flags them for review — keeping behavioral guidance current with the codebase.

## What makes a strong refresh routine?

**Triggers** — Events that signal a skill may need refresh. Use the most specific trigger available:

- `blueprint.proposal_committed` — A blueprint update may change conventions that a skill enforces.
- `brief.approved` — An approved brief may establish new conventions a skill should capture.
- `schedule.fired` (quarterly) — Periodic audit to catch drift between the skill's examples and the current codebase.

**Review checklist** — The routine executes this checklist against each potentially affected skill:

1. Do the examples still match the current codebase? Flag any example that references code patterns that no longer exist.
2. Are the core guidance rules still correct? Update if conventions have shifted.
3. Are there new anti-patterns discovered since last refresh? Add them with explanations.
4. Are the trigger conditions still accurate? Update if the domain's scope has changed.
5. Is the skill still needed? If the domain it covers has been deprecated or merged, flag for archival.

**Action** — When the checklist surfaces stale content, update it. When uncertain, flag for human review and post a notification.

## How to write one

1. **Identify which skills are at risk:** Cross-reference the trigger event against existing skills. Which skills enforce conventions this event might change?
2. **Run the review checklist:** For each at-risk skill, walk through the five checklist items above.
3. **Update or flag:** If examples are clearly stale, update them. If uncertain whether a convention change applies, flag the skill for human review — don't guess.
4. **Notify:** Post a summary of what was reviewed, what was updated, and what was flagged for human attention.

## Common mistakes

- Flagging every skill on every trigger. Only flag skills whose conventions are plausibly affected by the triggering event.
- Updating examples without checking the current codebase. The routine should compare the skill against real code, not against assumptions.
- Auto-updating when uncertain. When the convention change is ambiguous, flag for human review rather than guessing.
- Skipping the quarterly audit. Trigger-based refresh catches event-driven drift; the quarterly schedule catches slow codebase evolution that produces no trigger.
- Keeping skills that are no longer needed. If the domain is deprecated, flag for archival instead of refreshing.

## Prompts to get unstuck

- "Which skills enforce conventions this event might change?"
- "Do these examples still match the current codebase?"
- "What new anti-patterns have appeared since the last refresh?"
- "Is this skill still needed, or should it be archived?"
