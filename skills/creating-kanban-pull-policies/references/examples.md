# Examples: Kanban Pull Policies

## A product team whose stories keep bouncing back

**Scenario:**

Illustrative scenario: a small product team moves stories through Ready, Development, Review, Testing and Done. Testers keep sending stories back because acceptance criteria are missing or the build is broken.

**Walkthrough:**

The team gathers the last ten stories that bounced and sorts the reasons. Most fall into two groups: unclear acceptance criteria and untested code reaching review. They write entry criteria for Development ("acceptance criteria agreed with the product manager, design attached if needed") and exit criteria for Development that double as entry criteria for Review ("tests written and passing, pull request opened"). Review's exit criteria become "one approval and merged to the main branch."

Each column header gets a one-line summary, and the full text sits beside the board. At the next review, the team finds bounces from Testing have mostly stopped, but items now wait longer in Ready because product managers write criteria late. They add a replenishment rule: only stories with agreed criteria may be selected.

## A content team with unclear approvals

**Scenario:**

Illustrative scenario: a content team moves articles through Brief, Draft, Edit, Legal Review and Scheduled. Legal review often returns articles for changes that editors could have caught.

**Walkthrough:**

The team meets with the legal reviewer and lists the checks legal always makes. Three of them, such as confirming claims have a source and removing customer names without permission, become exit criteria for Edit. Legal Review's entry criteria now require that checklist to be ticked.

They also write a selection rule: articles with a fixed publication date are pulled first, the rest oldest first. Returns from legal fall, and the reviewer's queue becomes predictable enough that the team sets a WIP limit on Legal Review.

## A platform team with automated gates

**Scenario:**

Illustrative scenario: a platform team deploys infrastructure changes through Planned, Implementing, Peer Review, Staging and Production. Their pipeline already runs automated checks, but people argue about when a change may go to production.

**Walkthrough:**

The team decides that automated checks are part of the policy. Staging's exit criteria read "pipeline green, change observed in staging for one working day, rollback steps written." Production's entry criteria add "change window open and on-call engineer informed."

They also write an expedite policy for security fixes: one at a time, may skip the staging wait, and must be reviewed afterward at the service delivery review. Disputes at the daily meeting drop, and the expedite lane is used only for genuine security work.
