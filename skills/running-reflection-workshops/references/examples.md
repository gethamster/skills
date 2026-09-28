# Examples: Running Reflective Improvement Workshops in Crystal

## Integration pain after a delivery cycle

**Scenario:**

Illustrative scenario: a five-person team finishes a six-week delivery cycle in which the final week was spent untangling merge conflicts. The team lead schedules the reflection workshop two days after delivery.

**Walkthrough:**

The facilitator opens with the three changes agreed last month; two were used, one (a shared test data set) was never built, and the team agrees to drop it for now. In the what-worked round, people name the weekly session with the expert user as the reason fewer features were reworked. In the problems round, late integration dominates, with four of five people marking it as the costliest issue. The team selects two changes: merge to the main line at least twice a week, and a short end-of-day check that the build is green, owned by two different developers.

Both go onto the team board and into the written conventions. At the next workshop, the owners report the twice-weekly merge held and the end-of-day check slipped, so the team adjusts it to a morning check instead.

## A retrospective that had stopped working

**Scenario:**

Illustrative scenario: a team has held monthly retrospectives for a year, but they produce long lists of sticky notes and people describe them as pointless. A new product manager suggests switching to a Crystal-style reflection workshop.

**Walkthrough:**

The first change is structural: the session opens by reviewing last month's actions, which reveals that none of the previous eight action items were ever tried. That finding becomes the main topic, and the team agrees the problem is not ideas but follow-through. They cap output at three changes per workshop and require each to have a named owner. They also move actions out of the meeting notes and into the team's working conventions document.

Three months later, the facilitator counts how many agreed changes were kept or adjusted versus dropped, and the kept column is now the majority. People start bringing incidents to the workshop because they expect something to change.

## Quiet voices in a mixed team

**Scenario:**

Illustrative scenario: a team of six includes two junior developers who never raise problems in reflection workshops, while senior members dominate the problems round. The lead suspects the junior developers are hitting issues they do not mention.

**Walkthrough:**

The facilitator changes the format so each person writes one worked item and one problem privately before anything is shared. The first time this runs, both junior developers write about unclear acceptance criteria from the expert user, something no senior person had raised. The team reframes it as a process gap rather than anyone's fault. They agree a change: every story gets a short conversation with the expert user before work starts, owned by a junior developer.

The lead also has a separate conversation about why the issue had not surfaced earlier, treating it as a safety question. Over the following workshops, contributions become more evenly spread.
