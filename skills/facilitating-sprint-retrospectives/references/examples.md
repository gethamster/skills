# Examples: Facilitating Sprint Retrospectives

## Example: Using the Sailboat Format After a Rocky Sprint

**Scenario:**

A six-person Scrum team just finished a two-week sprint where they missed their sprint goal by 30%. Morale is low, and there's visible tension between frontend and backend developers over integration issues. The Scrum Master decides to use the Sailboat format for this scrum retrospective.

**Walkthrough:**

The Scrum Master draws a sailboat on the whiteboard with four zones: Wind (what propelled us), Anchor (what held us back), Rocks (risks ahead), and Island (our goal). After reading the Prime Directive, she gives 7 minutes of silent writing time.

During grouping, the Anchor zone dominates. Three developers independently wrote variations of 'API contracts changed mid-sprint without warning.' Two wrote about 'unclear acceptance criteria in stories.' The team dot-votes and the API contract issue wins decisively.

Using 5 Whys, the team discovers the root cause: the backend team finalizes API specs during the sprint rather than during refinement, so frontend developers build against assumptions. The action item becomes: 'Starting next sprint, no story enters the sprint backlog without an approved API contract document. Jake (backend lead) will own creating a lightweight contract template by Wednesday. The team will trial this during next sprint's refinement session.'

The Scrum Master adds this as a task in the next sprint on their Jira board and schedules a 15-minute mid-sprint check to see if the experiment is working.

## Example: Reviving a Stale Retrospective with a Timeline Format

**Scenario:**

A mature Scrum team of eight has been running retrospectives for over a year. Attendance has dropped—two developers regularly skip. The remaining attendees give generic, recycled feedback. The Scrum Master recognizes retrospective fatigue and decides to shake things up.

**Walkthrough:**

Instead of the usual Start/Stop/Continue, the Scrum Master announces a Timeline retrospective. She draws the two-week sprint as a horizontal timeline on a shared Miro board, marking key events: Sprint Planning, the mid-sprint deploy, the production incident on day 7, and the Sprint Review.

She asks each team member to add sticky notes at specific points on the timeline: green for positive moments, red for painful ones, yellow for surprising ones. The visual format sparks memory and specificity—instead of 'communication was bad,' someone writes 'On day 7 at 3pm, three of us were debugging the same issue independently because nobody posted in Slack.'

The discussion naturally gravitates to the production incident cluster. The team discovers that their incident response process is ad-hoc, with no clear on-call rotation or communication protocol. The action item: 'Maria will draft a one-page incident response runbook by Thursday. The team will review it during Friday's standup and adopt it as a working agreement for the next sprint.'

Both previously-absent developers attended this retro and later told the Scrum Master the timeline format 'actually felt useful.' The Scrum Master adds Timeline to her regular rotation.
