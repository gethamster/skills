---
name: method-library-content-completeness
description: "For goal-based routines that keep the Hamster method/skill/routine content library complete. Verifies the tracking table in the Longform Skills, Methods & Routine Content blueprint is current, adds missing rows, and processes gaps."
version: "1.0.0"
metadata:
  category: "Workflows"
---

# Method Library Content Completeness

## When to use

Activate this skill when running a goal-based routine that serves the goal "Method library is full of as much skill and routine content as possible." This includes any routine loop that checks whether the team's method, skill, and routine library has corresponding content blueprints.

## The qualitative goal

For every method, skill, and routine in the Hamster library, there exists a blueprint with content for it.

## The tracking table

The single source of truth is the table in section 1 of the **Longform Skills, Methods & Routine Content** blueprint:
https://tux.tryhamster.com/home/hamster/blueprints/06f976da-c885-48c0-a229-e3a40a1482d5

The table has columns: `Skill/Routine/Method | Blueprint | Status | Review required?`

- `Skill/Routine/Method` — the name of the library item
- `Blueprint` — link to the content blueprint, or `—` if not yet created
- `Status` — `Not started`, `Draft`, `Published`, or `—`
- `Review required?` — `Y` if a teammate review is needed, `—` otherwise

## What to do on each loop

### 1. Verify the tracking table is current

Read the tracking table in the Longform Skills, Methods & Routine Content blueprint. Note every row and its current status.

### 2. Check for gaps

Compare the table against the methods, skills, and routines actually present in this team's library. Use the available skills list and methods list to enumerate what exists.

If you find a method, skill, or routine in the library that does NOT appear as a row in the tracking table, add a new row:

```
| <name> | — | Not started | — |
```

Follow the existing table format exactly. Place new rows at the end of the table.

### 3. Process gaps naturally

Once new rows are added — or if existing rows have `—` for Blueprint and `Not started` for Status — the routine can process them this loop or the next, following the Hamster Skills-based Content production pipeline:

1. `find-source-material` — locate the source skill/method/routine content
2. `create-routine-from-skill` — if automating the content production itself
3. `create-{type}-article` — produce the article (use `create-skill-article`, `create-method-article`, or `create-routine-article` as appropriate)
4. Shot list → capture → publish — follow the standard content production flow

Each article gets its own child blueprint under the method-level blueprint, per the templates in section 5 of the tracking blueprint.

### 4. Update the table as work progresses

- When a content blueprint is created for a row, update the `Blueprint` column with a link to it.
- When status changes (e.g., `Not started` → `Draft`), update the `Status` column.
- When a review is needed, set `Review required?` to `Y`.

## Rules

- **Always verify the table first.** Never assume the table is current — re-read it each loop.
- **Add rows for any missing library items.** If it's in the team's library but not on the table, add it.
- **Never remove rows.** Even if content is published, the row stays for tracking purposes.
- **One row per library item.** No duplicates. If a row already exists, don't add another.
- **Process in priority order.** If multiple gaps exist, process the one closest to the goal's current focus first.

## Anti-patterns

- **Skipping the table read.** Processing content without checking the table first leads to duplicate work and missed items. Always read the table.
- **Adding rows without checking the library.** Don't add rows for items that don't exist in the library — verify first.
- **Editing the table format.** The table must stay in its existing column structure. Don't add or remove columns.
- **Processing everything in one loop.** The routine should process one or a few items per loop, not batch-process everything. This keeps loops focused and reviewable.
