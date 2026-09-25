# Examples: Setting WIP Limits in Kanban

## A product team with a clogged review column

**Scenario:**

Illustrative scenario: a team of five developers works from a board with the columns Ready, In Progress, Review, Testing and Done. Nothing has a limit. At the start there are eleven cards in progress and seven waiting for review, and the team says it is busy but nothing ships.

**Walkthrough:**

The team maps who works each stage. Every developer codes, two people usually review, and one person tests. They set a starting limit of five on In Progress, three on Review and two on Testing, and agree that when Review is full, whoever finishes coding next reviews before starting anything new.

In Progress stays above its limit for the first week while cards drain; nobody pulls new work during that time. Review hits its limit almost every day, and developers start pairing on reviews. After three weeks, the team sees that Testing is the column most often full. Instead of raising its limit, they add a pull policy that developers write the test notes before an item enters Testing. Waiting time in front of Testing drops, and the team lowers In Progress to four.

## A content team with mixed work types

**Scenario:**

Illustrative scenario: a four-person marketing team handles long articles, short social posts and urgent requests from sales. The board has one lane, and quick requests keep jumping ahead of articles, which never seem to finish.

**Walkthrough:**

The team splits the board into two lanes, Articles and Quick requests, and adds a separate expedite lane for true emergencies. Articles get a limit of three across drafting and editing combined, because the same people move between those stages. Quick requests get a limit of four. The expedite lane is capped at one item, and only the team lead may put a card there.

For the first two weeks, the expedite lane is used twice, both times for genuine launches. Articles begin to finish because nobody can start a fourth. At the review, the team notices quick requests often wait on approvals from sales, so they add an approval check to the lane's entry policy instead of changing its limit.

## A support engineering team resisting limits

**Scenario:**

Illustrative scenario: a support engineering team of six fixes customer escalations. Engineers each carry several tickets, and they worry that a limit will make customers wait longer.

**Walkthrough:**

The lead proposes a trial with a per-person limit of two active tickets and a team limit of ten, with a written rule that a severity-one escalation may exceed the limit by one. Before starting, the team agrees to compare time to resolution before and after the trial.

During the trial, engineers who reach their limit help teammates close tickets that are waiting on a second opinion. The exception rule is used a few times and always recorded. At the end of the trial, the team reviews how long tickets stayed open and how often the exception was needed, and votes to keep the per-person limit while dropping the team limit, which was never reached.
