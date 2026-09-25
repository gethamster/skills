# Examples: Tracking Engagement and Retention Metrics

## A language learning app

**Scenario:**

Illustrative scenario: a language learning app wants people to practice most days. The team's current engagement number is total lessons completed per week, which keeps rising as marketing brings in more users.

**Walkthrough:**

The team replaces the total with a per-user measure: the share of weekly active learners who completed a lesson on four or more days that week. The threshold comes from the goal of building a near-daily habit. The measure rises more slowly than the total and is flat for the latest cohorts, which the old number had hidden.

For retention, the team builds weekly cohorts by signup week and uses a return window of one week, since the product is meant to be used often. Checking older cohorts, the team finds that learners above the four-day threshold in their first two weeks are much more likely to still be active two months later. The per-user measure becomes the early indicator the team watches after each release.

## An expense reporting tool

**Scenario:**

Illustrative scenario: employees at customer companies use an expense tool because their employer requires it. The product team is asked to "increase engagement."

**Walkthrough:**

The team questions the request. Employees submit expenses when they have them, often once or twice a month, and nobody would want them to spend more time in the tool. The team records Engagement as not meaningful at the product level.

Instead, it measures engagement on one optional feature, receipt scanning from a phone, as the share of submitters who use scanning rather than manual entry. For retention, it measures at the account level with monthly cohorts and a "return in that month or later" method, because occasional users who skip a month have not left. Most of the team's effort goes into task success on the submission flow, where the experience matters most.

## A recipe website after a redesign

**Scenario:**

Illustrative scenario: a recipe site redesigns its recipe pages. Visits per user go up in the weeks after launch, and the team is ready to call it a success.

**Walkthrough:**

Before celebrating, the team checks what the extra visits are. More page views per visit could mean people explore more recipes, or that the new layout makes them hunt for the ingredient list. The team adds a depth measure tied to the goal: the share of recipe page views where the user reaches the method section.

It also compares retention for cohorts who first visited before and after the redesign, using a monthly window. Retention is unchanged, and the depth measure has fallen. Session recordings confirm that people are scrolling back and forth to find ingredients. The team fixes the layout rather than claiming a win on visits.
