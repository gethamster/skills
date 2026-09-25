# Examples: Measuring User Happiness Through Satisfaction Surveys

## Replacing a feedback button with a sampled survey

**Scenario:**

Illustrative scenario: a project management tool reports "happiness" from a feedback button in its help menu. The ratings are mostly low, and nobody trusts them.

**Walkthrough:**

The team keeps the button for bug reports but stops treating its ratings as a metric. It sets up a sampled survey instead: each week a random set of active users sees a small, non-blocking invitation at the bottom of the screen, and nobody is invited again for several months.

The questionnaire opens with overall satisfaction on a fully labeled 7-point scale, followed by two optional open-ended questions about frustrations and favorite parts. After a few weeks, satisfaction turns out to be much higher than the button suggested, and the most common frustration is slow loading on large projects. The engineering team takes that theme into its next planning cycle.

## Reading a dip after a redesign

**Scenario:**

Illustrative scenario: a note-taking app ships a new navigation layout. In the first week after launch, its tracked satisfaction score falls noticeably, and some stakeholders want to roll back.

**Walkthrough:**

The product manager points to the pattern described in the HEART paper, where iGoogle's satisfaction dipped after a redesign and then recovered as users adjusted. The team agrees to wait several survey periods before deciding.

Meanwhile it reads the open-ended answers. Early comments mention not finding favorite notebooks; later comments shift to praising faster search. Behavioral data shows task completion for opening a notebook recovering to its old level. After a few weeks satisfaction returns to its previous range, and the team keeps the layout while adding a pinned-notebooks shortcut.

## Satisfaction with specific tasks

**Scenario:**

Illustrative scenario: an accounting product has good overall satisfaction, but the team suspects that month-end reconciliation is painful. Overall scores do not show where the pain is.

**Walkthrough:**

The team adds a task section to the survey. Respondents first select which tasks they tried in the last month from a short list, and then rate satisfaction with a few of the tasks they selected on the same 7-point scale.

Reconciliation scores lowest among the tasks, and the open-ended frustration answers from respondents who tried it cluster around matching bank entries. The team pairs this with a task success measure for reconciliation and plans a redesign, using both the task satisfaction rating and completion rate to judge it.
