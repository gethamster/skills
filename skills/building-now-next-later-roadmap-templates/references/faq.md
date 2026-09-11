# FAQ: Building Now-Next-Later Roadmap Templates

## How do I build a now next later roadmap template in a tool that does not support columns or swim lanes?

If your tool only supports linear lists (like a basic Trello board or a flat document), use headings as section dividers. Create three headings, Now, Next, Later, and list items under each. Apply visual differentiation through formatting: bold for Now items, regular weight for Next, and italic or gray text for Later. Add the confidence indicator as a prefix emoji (🟢🟡🔴) on each line.

This is less elegant than a columnar layout but still communicates the gradient. If even headings are not available, use three separate documents or pages and link them from a master index page.

## How many items should each horizon contain?

A practical ceiling is 5-10 items in Now, 5-8 in Next, and 3-6 in Later, for a total under 25. Now should never exceed what your team can realistically execute in the current cycle. If Now has 15 items and your team ships 5 per cycle, 10 of those are not really Now. Next can be slightly larger because it is a staging area.

Later should be the smallest because it represents bets, not plans. If your Later column is the largest, you are using it as a backlog instead of a strategic horizon.

## Should I build one template per team or one template for the entire product organization?

Build one template per team for weekly operational reviews and one aggregated template for leadership or cross-team visibility. The team-level template is detailed and updated weekly. The aggregated template is simplified (fewer fields, higher-level items) and updated biweekly or monthly. Do not try to serve both audiences with a single template.

The detail level that helps engineers is noise for executives, and the summary that satisfies executives leaves engineers without actionable information.

## How often should I update the now next later roadmap template structure versus the content?

Content (items, confidence levels, status) should be updated every review cycle, typically weekly. Template structure (fields, layout, visual styling) should be iterated for the first three cycles and then locked. After the lock, structural changes should happen at most once per quarter, triggered by a clear gap rather than a preference. Frequent structural changes confuse the team and break muscle memory.

If you find yourself redesigning the template monthly, the root issue is likely unclear horizon definitions, not template design.

## Why does my roadmap template keep drifting into a timeline or Gantt chart?

This drift happens because stakeholders (and sometimes PMs) instinctively want dates, and the easiest way to add dates is to stretch horizons along a timeline axis. The fix is structural: remove any date fields from the template except the "Last reviewed" timestamp. ", redirect to confidence levels and graduation criteria. "This is in Next with medium confidence.

" If your tool defaults to a timeline view (like Jira's roadmap), switch to a board or kanban view explicitly. The template's layout must resist the gravitational pull toward dates.

## Should I build the now next later roadmap template before or after categorizing items into horizons?

Build the template first, then populate it. The template defines the information schema for each horizon, and that schema shapes how you categorize. ) or is wishfully placed there. Building the template with a handful of real items is part of the validation process described in Step 7.

See [categorizing items into horizons](https://tryhamster.com/skills/categorizing-items-into-now-next-later-horizons) for the categorization process itself.

## Can I use a now next later roadmap template for non-product work like marketing or engineering platform initiatives?

Yes, the template structure is domain-agnostic. The three-horizon confidence gradient applies to any work where you need to communicate what is committed, what is planned, and what is speculative. For marketing, Now might be campaigns in execution, Next might be campaigns in creative development, and Later might be channel experiments under consideration. For platform engineering, Now might be infrastructure migrations underway, Next might be approved RFCs awaiting scheduling, and Later might be architectural bets tied to future product needs.

, replace "Owner" with "Campaign Lead" or "Tech Lead") but keep the gradient structure intact.
