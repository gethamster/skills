# FAQ: Managing Change Requests in Waterfall Projects

## How does change control differ in the waterfall model versus agile?

In the waterfall model, change control is formal and gate-based because changes to completed phases trigger expensive rework across downstream phases. Agile absorbs changes continuously through backlog reprioritization each sprint. Waterfall's approach is better suited for projects with regulatory requirements, fixed contracts, or environments where baseline stability is critical.

## How many people should be on a Change Control Board?

Aim for 3-5 core members: typically the project manager, technical lead, business sponsor, and a QA representative. Larger boards slow decisions and create scheduling conflicts. Invite subject matter experts as non-voting advisors when specific change requests require their domain expertise.

## What happens if a change request is submitted after that waterfall phase is complete?

Late-phase changes in the waterfall model require rework on already-completed deliverables, making them significantly more expensive. The impact analysis must account for rework in every completed phase the change touches. The CCB should apply a higher approval threshold for late-phase changes, requiring stronger business justification relative to the increased cost.

## Can you have too much change control in a waterfall project?

Yes. If trivial clarifications and minor defect fixes must go through full CCB review, the process becomes a bottleneck that frustrates teams and slows delivery. Set clear thresholds: define what constitutes a 'change' versus a 'clarification' or 'defect fix,' and only route true scope changes through the CCB.

## How do I handle urgent change requests that can't wait for the next CCB meeting?

Establish an expedited approval path in your CCB charter for genuinely urgent changes, such as production-blocking defects or regulatory mandates. Typically, the project sponsor and project manager can jointly approve emergency changes, with the full CCB ratifying the decision at their next scheduled meeting.

## What tools are best for tracking waterfall model change requests?

Any tool that provides a structured log with status tracking works: Jira with a dedicated change request issue type, a SharePoint list, or even a well-maintained Excel spreadsheet. The tool matters less than the discipline of logging every request, attaching impact analyses, and recording CCB decisions with rationale.
