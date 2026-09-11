# FAQ: Designing Effective Kanban Boards

## How many columns should my kanban board have?

Most teams land between 5 and 9 columns. Fewer than 5 usually means you are hiding intermediate states where work queues up invisibly. More than 9 usually means you are modeling sub-steps that would work better as checklist items within a card. The right number is determined by your actual workflow: each column should represent a state with a distinct owner, distinct WIP behavior, or a distinct pull policy.

If two adjacent columns always have the same person responsible and items flow between them instantly with no queue, merge them.

## When should I add swimlanes to my kanban board?

Add swimlanes when you have work categories that need different treatment in the same workflow. The most common triggers are: you need an expedite lane for urgent items with a WIP limit of 1, you handle distinct work types (bugs vs. features) that need separate WIP limits, or you manage multiple products on one board and need visual separation. If all your work flows the same way with the same policies, skip swimlanes.

They add visual complexity, and every unnecessary swimlane makes the board harder to scan.

## Should I design my kanban board before or after setting WIP limits?

Design the board first, then set WIP limits. You need to know what your columns represent before you can set meaningful limits on them. A WIP limit on a column called "In Progress" is almost useless because you do not know what kind of work accumulation it is capping. Once you have split your workflow into honest columns with clear definitions, you can observe where work queues up and set limits accordingly.

See [setting WIP limits](https://tryhamster.com/skills/setting-wip-limits) for the detailed process.

## How do I handle work that skips columns or follows a different path?

You have three options depending on how frequently it happens. If rare (less than 10% of items), document a bypass policy in the column's entry criteria and let items skip the column. If frequent but predictable by work type, create a swimlane for that work type and define which columns it uses. If frequent and unpredictable, your columns may be modeling an idealized process rather than the real one.

Go back and retrace recent items to see if the column structure matches reality. Never force items through columns they do not need just to keep the board tidy.

## How often should I redesign my kanban board?

Do a lightweight board design review every 2-4 weeks for the first two months, then quarterly after that. Look for three signals: columns that are perpetually empty (remove or merge them), columns that are perpetually overloaded (consider splitting them to expose a hidden queue), and recurring team confusion about which column an item belongs in (rewrite the column definition or split it). Major redesigns should happen when the team's process fundamentally changes, such as adding a new role, a new approval step, or a new work type.

## What is the difference between a physical board and a digital kanban board for design purposes?

The design principles are identical. Columns represent states, swimlanes represent categories, and cards carry the minimum information needed for pull decisions. The practical differences are: physical boards have a fixed wall size that naturally constrains the number of columns, while digital boards let you add columns without friction, which leads to over-engineering. Physical boards make aging and blockers more visible because everyone walks past them.

Digital boards support distributed teams and integrate with other tools. If your team is co-located, start with a physical board for the first month to build intuition, then move digital if needed.

## Why does my kanban board keep drifting from reality after a few weeks?

Board drift happens for three reasons. First, the initial design modeled an aspirational process instead of the real one, so people work around columns that do not fit. Second, the team's process changed (new approval step, new team member, new tool) but the board was not updated. Third, column definitions are ambiguous, so different team members interpret them differently and the board becomes inconsistent.

Fix drift by revisiting the board specification document, walking a few recent items through the board with the team, and adjusting columns and definitions. Schedule regular design reviews as described in Step 9 to prevent drift from compounding.
