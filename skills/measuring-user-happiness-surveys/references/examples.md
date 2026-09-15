# Examples: Measuring User Happiness Through Surveys and Satisfaction Scores

## Example: Measuring Satisfaction After Onboarding Redesign

**Scenario:**

A B2B SaaS product team redesigned their onboarding flow and wants to measure whether the new experience makes users happier. They have about 500 new signups per week.

**Walkthrough:**

The team defines their happiness goal: 'New users feel confident and successful after completing onboarding.' They deploy a 2-question CSAT survey triggered when a user completes the final onboarding step. Question 1: 'How satisfied are you with the setup experience?' (1-5 scale). Question 2: 'What could we improve?' (open text).

They sample 30% of completing users (to reach ~100 responses/week) with a display delay of 5 seconds post-completion. After 4 weeks with the old flow (baseline: CSAT 3.4, n=412), they launch the redesign and collect another 4 weeks (new: CSAT 4.1, n=389).

Thematic coding of the open-ended responses reveals that the old flow's top complaint ('too many steps') dropped from 38% of responses to 8%. The new top complaint is 'wanted more customization options during setup' at 22%—a useful signal for the next iteration.

They present these results in their product review using the [HEART dashboard](https://tryhamster.com/skills/building-heart-dashboards), showing happiness improvement alongside adoption rates for onboarding completion. The combined data makes a compelling case that the redesign succeeded and identifies the next area to improve.

## Example: Quarterly NPS Program for a Consumer Mobile App

**Scenario:**

A consumer mobile app with 2 million MAU wants to implement a recurring NPS program to track overall user sentiment and identify emerging issues.

**Walkthrough:**

The team sets up an in-app NPS survey that appears to a random 2% of active users each quarter, with a 90-day cooldown per user. This yields roughly 40,000 eligible users per quarter, with an expected 15% response rate (6,000 responses)—more than enough for reliable segmentation.

The survey appears when the user opens the app (not during a task) after they've been active for at least 5 seconds. It shows the standard NPS question followed by 'What's the biggest reason for your score?'

After Q1 (NPS: +32), Q2 shows a drop to +24. Segmentation reveals that the drop is concentrated in Android users (NPS dropped from +28 to +12) while iOS held steady. Sentiment analysis of Android Detractor responses shows 67% mention 'crashes' or 'freezing' after a recent app update.

The team flags this to engineering, who identify a memory leak in the Android build. After the fix ships mid-Q3, they run a supplementary CSAT micro-survey targeting Android users: CSAT rises from 2.9 to 4.0. Q3 NPS recovers to +30. The incident becomes a case study in how happiness data catches problems that aggregate engagement metrics (which barely moved) would have missed.
