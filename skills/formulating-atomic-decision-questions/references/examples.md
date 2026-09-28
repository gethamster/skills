# Examples: Formulating Atomic Decision Questions

## Gating a file-deletion tool call

**Scenario:**

Illustrative scenario: a coding agent sometimes proposes deleting files, and the team wants a model-side check before the permission layer runs.

**Walkthrough:**

The team names the fork: should this deletion proceed to the permission check or be sent to a person? Both outcomes trigger different actions, so a yes/no question fits. They write the question as "Is this deletion within the stated task scope?" with a rubric: yes if the file was created in this run or is named in the task, no otherwise, and no for any file outside the working directory. They label an invented set of 40 proposed deletions, including a few where the task wording is vague and a few with misleading file names.

Two labellers disagree on three cases, which leads them to add a line about generated build artifacts. Code still enforces permissions afterward; the question only decides whether to escalate.

## Routing support tickets to one of five queues

**Scenario:**

Illustrative scenario: a support agent must hand each incoming ticket to one queue, and the old keyword router misfiles tickets that mention several topics.

**Walkthrough:**

The team drafts five queue options and immediately finds that `billing` and `refunds` overlap. They merge them into `payments` and add `needs_human` for tickets that fit no queue. Each option gets inclusion and exclusion criteria, plus one borderline example, before any model call. The labelled set deliberately includes tickets that mention two topics, with the rubric stating that the queue for the action requested wins over topics merely mentioned.

Running the question on the set shows most errors clustering on one pair of queues, so they tighten those two rubric entries and bump the question version.

## Selecting skills for a multi-step task

**Scenario:**

Illustrative scenario: an agent with a dozen skills must pick every skill a task needs, and some tasks need two or three.

**Walkthrough:**

A single choice question keeps returning only one skill, missing the others. The team splits the decision in two. First, a choice question lets all skills compete for the task, and code keeps the top few candidates. Second, a verification question asks for each candidate whether the task actually requires it, with a rubric listing the signals that confirm each skill.

They label a small invented set of tasks with their full skill sets and measure whether the verified set matches, not just the top pick.
