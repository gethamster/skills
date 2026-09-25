# Examples: PostHog Experiment Cohort Filters for New Users

## A signup property instead of a behavioral cohort

**Scenario:**

Illustrative scenario: a team wants to test a new onboarding checklist on new users only. Their first idea is a dynamic cohort of people who performed the signup event in the last week, attached to the experiment flag.

**Walkthrough:**

When they try to use the cohort as a release condition, they learn that dynamic cohorts with behavioral criteria cannot target feature flags. Instead, the backend now sets an `onboarding_version` person property when an account is created, and the signup handler passes the same property to `identify()` in the browser so the flag can use it at once.

The release condition matches users whose `onboarding_version` is the new version. In code, the checklist component checks that onboarding is incomplete before reading the flag. A fresh test account gets a variant and an exposure; an old account records nothing, which is what they wanted.

## Invited teammates handled separately

**Scenario:**

Illustrative scenario: in a collaboration tool, a large share of new accounts come from teammate invitations. Invited users skip workspace creation and see a shorter onboarding.

**Walkthrough:**

The team is testing a change to the workspace creation step, which invited users never see. Including them would enroll people who cannot be affected. They add an `invited` person property at signup and add a condition that excludes invited users from the flag.

They also add the same check in code, so an invited user who somehow matches the release condition still does not read the flag. After launch, exposures track self-serve signups closely, and the team notes in the description that the result says nothing about invited users.

## Exposures above signups

**Scenario:**

Illustrative scenario: two days after launching an onboarding experiment, a team sees more exposures than new signups over the same days.

**Walkthrough:**

A breakdown of exposures by signup date shows many exposed users who signed up months ago. The onboarding page can be reopened from the help menu, and the code reads the flag whenever the page loads, before checking whether onboarding is complete.

The fix is to move the completion check before the flag read and to add a release condition on the signup date property. Because existing users are already in the data, the team resets the analysis and relaunches, and exposures then line up with signups.
