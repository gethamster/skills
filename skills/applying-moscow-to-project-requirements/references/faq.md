# FAQ: Applying MoSCoW to Project and Software Requirements

## Where should MoSCoW categories live?

On the same list that holds the requirements, whether that is a backlog tool, a spreadsheet or DSDM's Prioritised Requirements List. The handbook describes the PRL as the equivalent of a product backlog. Store a category per level (project, increment, timebox), a short rationale and a link to the objective. A separate priority document drifts out of date quickly.

## When in the project should requirements be categorized?

DSDM sets most priorities during Foundations, before development starts, and then reviews them continually. Categorize for the project first, again when each increment is planned, and again at the start of each timebox. Review unfinished requirements at least at the end of each timebox and increment.

## How do non-functional requirements fit into MoSCoW?

The same tests apply. A security or legal requirement that would make the solution unsafe or illegal to ship is a Must under the DSDM definition. Performance and availability requirements often split well, with a Must threshold and a stricter Should target on the acceptance criteria. Put them on the same list as features so they compete under the same rules.

## How do I handle a new requirement that arrives mid-project?

Categorize it with the Must tests before work starts. If it is a Must, show which existing items move down so the Must effort stays within the agreed level. DSDM warns specifically against letting new requirements push the Must share up. Record the decision on the list.

## Should priorities be set on epics or on stories?

On the smallest items that can be estimated and tested on their own. A large requirement usually contains parts of different priority, and DSDM treats an everything-is-Must list as a sign of too little breakdown. Categorizing an epic as a single item hides parts that could be deferred.
