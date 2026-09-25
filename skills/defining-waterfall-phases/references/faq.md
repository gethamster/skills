# FAQ: Defining Waterfall Phases with Entry and Exit Criteria

## What are the phases of the waterfall model?

There is no single official list. Common versions use requirements, design, implementation, verification or testing, and maintenance, often with deployment as a separate phase. Royce's original paper used system requirements, software requirements, analysis, program design, coding, testing and operations. Choose names that match the deliverables your project must produce.

## What is the difference between entry and exit criteria?

Entry criteria say what must be true before a phase starts, such as approved inputs and available people and environments. Exit criteria say what must be true for the phase to be finished, such as approved deliverables and passed reviews. In a waterfall project, the exit criteria of one phase and the entry criteria of the next usually describe the same handover from both sides.

## How many phases should a waterfall project have?

Enough that each phase produces a reviewable deliverable and has one accountable owner, and few enough that the gate overhead is worth it. A small internal project may combine design and implementation, while a regulated or contract project may need extra phases for certification or parallel running. Let the required deliverables drive the count.

## Can phases overlap?

In the strict model they do not, but many teams allow planned overlap between neighboring phases, and variants such as the sashimi model are built on it. If you allow overlap, say so in the phase definition, name the work that may start early and the risk it carries. Unplanned overlap hides the real status of the project.

## What happens when a later phase finds a problem in an earlier one?

The problem is raised as a change request against the specific approved deliverable. The change is assessed for its impact, approved or rejected, and if approved, only the affected item is reopened and re-baselined. Defining this route before the project starts avoids informal rework that nobody tracks.
