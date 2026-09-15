# Examples: Defining Goals, Signals, and Metrics with the HEART Framework

## Example: GSM Table for a Music Streaming App's Playlist Feature

**Scenario:**

Your team has just redesigned the playlist creation experience in a music streaming app. You want to measure whether the redesign actually improved the user experience using the HEART Framework. The team has decided to focus on Engagement, Task Success, and Happiness.

**Walkthrough:**

**Engagement**
- *Goal*: Users find playlists valuable enough to actively curate and listen to them regularly.
- *Signal*: Users create playlists, add songs to existing playlists, and return to listen to their playlists within the same week.
- *Metric*: Median number of playlist interactions (create, add, play) per active user per week.

**Task Success**
- *Goal*: Users can create and organize playlists quickly and without errors.
- *Signal*: Users complete the playlist creation flow without abandoning midway or encountering error states.
- *Metric*: Playlist creation completion rate (playlists saved / playlist creation flows started), segmented by new vs. returning users. Secondary metric: median time to create a playlist.

**Happiness**
- *Goal*: Users feel that the new playlist experience is intuitive and enjoyable.
- *Signal*: Users report satisfaction in in-app surveys and reduce playlist-related support tickets.
- *Metric*: Mean satisfaction score from the in-context survey triggered after third playlist creation (7-point scale). Secondary metric: weekly playlist-related support ticket volume.

This GSM table gives the team a clear picture: if playlist interactions rise, completion rates stay high, and satisfaction scores hold steady or improve, the redesign is working. If completion rates drop, the team can investigate usability issues regardless of what the other metrics show.

## Example: GSM for an Enterprise SaaS Onboarding Revamp

**Scenario:**

A B2B SaaS company redesigned its onboarding flow to reduce time-to-value. The PM wants to measure impact using HEART, focusing on Adoption, Task Success, and Retention.

**Walkthrough:**

**Adoption**
- *Goal*: New users quickly adopt core features during their first week.
- *Signal*: New users complete the onboarding checklist and activate at least two core features (e.g., creating a project and inviting a teammate) within 7 days of signup.
- *Metric*: 7-day activation rate (users who activated ≥2 core features / total new signups that week).

**Task Success**
- *Goal*: Users complete each onboarding step without confusion or needing to contact support.
- *Signal*: Users progress through onboarding steps sequentially without backtracking, dropping off, or opening help articles.
- *Metric*: Step-level completion rate for each of the 5 onboarding steps. Secondary: support ticket rate during first 48 hours post-signup.

**Retention**
- *Goal*: Users who complete onboarding continue using the product beyond the trial period.
- *Signal*: Onboarded users return and perform meaningful actions (not just logging in) in weeks 2, 3, and 4.
- *Metric*: Week-2 and Week-4 retention rate, defined as users with ≥1 core-feature interaction in that week / users who completed onboarding.

By tracing each metric back through its signal and goal, the PM can explain to stakeholders exactly why each number matters and what action to take if it underperforms.
