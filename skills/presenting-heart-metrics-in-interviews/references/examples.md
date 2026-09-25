# Examples: HEART Framework Interview Answers for PM Metrics Questions

## A success question for a music app's playlist feature

**Scenario:**

Illustrative scenario: an interviewer asks, "You launched collaborative playlists in a music streaming app. How would you measure success?"

**Walkthrough:**

The candidate asks one clarifying question: is the goal more listening, or more social use of the app? The interviewer says both matter but social use is the bet. The candidate names HEART in a sentence and picks three categories: Adoption, Engagement and Retention. Happiness is set aside for the first weeks, with a note that a survey would follow once there are enough users, and Task success is covered briefly because creating a playlist is already a mature flow.

For Adoption, the goal is listeners discovering that they can build playlists with friends. The signal is inviting a collaborator, and the metric is the share of weekly active listeners who create their first collaborative playlist each week. For Engagement, the goal is collaborators actually contributing, measured as the share of collaborative playlists with additions from at least two people in a week. For Retention, the candidate tracks whether collaborators return to the playlist in later weeks.

The candidate closes with a guardrail: overall listening time per user should not fall, in case collaborative playlists pull attention from personal listening. When the interviewer asks which metric is primary, the candidate chooses the multi-contributor share, since it best reflects the social goal.

## A diagnosis question about a drop

**Scenario:**

Illustrative scenario: an interviewer says, "Weekly active users of our note-taking app fell this month. How would you investigate?"

**Walkthrough:**

The candidate starts with data quality: a tracking or logging change, an outage, or a change in how "active" is defined. Then the candidate uses HEART to split the drop. Adoption: are fewer new users arriving? Retention: are existing cohorts returning less? Engagement: are returning users doing less per visit?

The candidate suggests segmenting by platform, country and signup cohort, and checking the release log for the month. If retention fell for one platform after a release, Task success on core flows in that version is the next place to look. The candidate says they would check support tickets and any survey themes to understand the cause before proposing a fix.

## A broad question about an enterprise product

**Scenario:**

Illustrative scenario: an interviewer asks, "What metrics would you track as the PM for an internal HR tool that employees use for time-off requests?"

**Walkthrough:**

The candidate points out that people use the tool because they have to, so Engagement is not a sign of a good experience here, which matches the enterprise example in the original HEART paper. The candidate focuses on Task success and Happiness instead.

For Task success, the goal is submitting a request quickly and correctly. Metrics are completion rate for started requests, the share of requests corrected after submission, and median time to submit. For Happiness, a short sampled satisfaction survey after submission. The candidate adds a manager-side task: approving requests without delay. The interviewer follows up on targets, and the candidate says they would set them after measuring the current baseline.
