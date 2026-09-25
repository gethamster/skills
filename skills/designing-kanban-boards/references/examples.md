# Examples: Kanban Board Design

## A software team that hid its waiting time

**Scenario:**

Illustrative scenario: a product team uses a board with To Do, Doing and Done. Items stay in Doing for a long time, and nobody can say whether they are being coded, waiting for review or waiting for a release.

**Walkthrough:**

The team traces five recent features and finds each passed through design review, development, code review, testing and a release window. Most of the elapsed time was spent waiting between those stages. They redesign the board as Options, Ready, Development, Ready for Review, Review, Testing, Ready to Release and Released, with a commitment line between Options and Ready.

Cards now show the requester, the commitment date and a blocked marker. Within a week, the team sees a cluster of cards in Ready for Review and starts reviewing before pulling new work. At the first design review they merge Ready and Options, because nobody used Ready separately.

## A service desk with planned and unplanned work

**Scenario:**

Illustrative scenario: an internal IT team handles incident tickets, access requests and small improvement projects on one board. Incidents always win, and improvement work never finishes.

**Walkthrough:**

The team adds three swimlanes: Incidents, Requests and Improvements. Each lane shares the same columns, Triage, In Progress, Waiting on Requester and Resolved, but carries its own WIP limit. Incident cards are red so they stand out.

The Waiting on Requester column reveals that many access requests stall for days until someone replies. The team adds an entry policy to Triage requiring manager approval to be attached before a request is pulled. The Improvements lane keeps one item moving at all times, which the team had never managed before.

## A solo founder's board

**Scenario:**

Illustrative scenario: a founder working alone juggles product work, customer calls and admin tasks. A long to-do list keeps growing and nothing feels finished.

**Walkthrough:**

The founder draws a simple board with Options, This Week, Doing and Done, and two lanes, Product and Business. Doing is limited to two cards across both lanes. Each card lists the next concrete action.

After a couple of weeks, the founder notices that business tasks sit in This Week and rarely reach Doing. They set aside a fixed block each week for the Business lane and prune Options every Friday so the list stays short. The board stays small because there is only one person to coordinate.
