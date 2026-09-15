# Examples: Segmenting New User Cohorts for Onboarding Experiments

## Example: SaaS product testing a new welcome wizard for self-serve sign-ups

**Scenario:**

A B2B SaaS tool with 200 sign-ups per day wants to test whether a three-step welcome wizard (variant) converts more users to first project creation than the current single-page setup (control). The team needs to exclude 15,000 existing users, internal team accounts using @company.com emails, and partner demo accounts.

**Walkthrough:**

com. js backend during the registration handler. They create a dynamic cohort in PostHog called 'New Users - Welcome Wizard Test - Jun 2024' with all four filters combined using AND logic. The initial cohort count shows 0 users, which is correct since the experiment has not started.

They attach the cohort to their `welcome-wizard-experiment` feature flag as the sole release condition with 100% rollout within the cohort. After launching, they verify by creating a test account and confirming variant assignment, then checking that a pre-existing account receives the default flag value. After three days, the cohort count is 587, which aligns with their 200/day sign-up rate minus a small percentage filtered by the internal and demo account exclusions. The experiment runs for two weeks and captures 2,400 clean new-user profiles, with no contamination from existing users.

## Example: Mobile app testing simplified sign-up for organic installs

**Scenario:**

A consumer fitness app receives 5,000 installs per week from organic App Store and Play Store traffic. The product team wants to test a simplified three-field sign-up screen against the existing five-field version. They need to exclude users who previously installed the app and deleted it, as well as users on the team's internal TestFlight or Firebase distribution.

**Walkthrough:**

The team defines 'new user' as a user whose `first_app_open_at` timestamp is after July 1, 2024, whose `install_source` is 'organic' (not 'internal_test'), and who has not previously had a `registration_completed` event. identify()`. For reinstall detection, they check whether a user ID already exists in their backend database and set `is_reinstall: true` if so. The PostHog cohort 'New Organic Users - Signup Field Test - Jul 2024' uses four filters: `first_app_open_at` after July 1, `install_source` equals 'organic', `is_reinstall` is not true, and `is_internal_tester` is not true.

After one week, the cohort contains 4,120 users. The team notices 880 fewer than expected and investigates. They discover that 600 were reinstalls and 280 were internal testers, confirming the filters are working correctly. The experiment produces clean data showing the three-field sign-up form improves registration completion by 12%.

## Example: E-commerce platform testing onboarding email sequence for new sellers

**Scenario:**

A two-sided marketplace has 50 new seller sign-ups per day. The growth team wants to test whether a five-email onboarding drip (variant) produces more first listings within 14 days than the current two-email sequence (control). The challenge is that some sellers also have buyer accounts, and the team needs to target only users who are new to the seller side.

**Walkthrough:**

The team defines 'new seller' as a user with `seller_account_created_at` after August 1, 2024, `user_type` containing 'seller', and `has_listed_first_product` equal to false. They choose `seller_account_created_at` rather than general `created_at` because many sellers had existing buyer accounts. The person properties are set in their Django backend when a user completes seller registration. The PostHog cohort 'New Sellers - Email Drip Test - Aug 2024' filters on all three properties using AND logic.

They attach this cohort to a feature flag called `seller-onboarding-email-variant`. io) checks this feature flag via PostHog's API when deciding which email sequence to trigger. Testing reveals a subtle issue: some users convert from buyer to seller and their `user_type` changes, but `seller_account_created_at` correctly captures when the seller account was created. After four weeks, 1,400 new sellers enter the experiment, split evenly between control and variant.

The team excludes 12 users manually via the exclusion cohort because they were test accounts created by the partnerships team. The final analysis shows the five-email sequence increases first-listing rate by 18% with 95% confidence.

## Example: Developer tool testing interactive tutorial for new API users

**Scenario:**

An API-first developer tool gets 80 new API key registrations per day. The developer experience team wants to test whether an interactive tutorial (variant) increases the percentage of users who make their first successful API call within 48 hours compared to the current documentation link (control). The complication is that many developers create multiple API keys across different projects.

**Walkthrough:**

' They deduplicate by user account rather than API key, setting person properties on the account-level distinct ID. The PostHog cohort 'New API Users - Tutorial Test - Sep 2024' uses three person property filters with AND logic. They attach the cohort to the `api-onboarding-tutorial` feature flag. The flag is evaluated server-side when the dashboard renders the post-registration page, ensuring anonymous pre-registration visits never receive a variant.

After two weeks, the cohort contains 1,050 users. The team spots that 30 users who entered the experiment had prior API call events from a beta period before the property was instrumented. They add these users to the static exclusion cohort and note in their specification document that `api_call_success` event history should be checked for users with accounts predating the property instrumentation date. The experiment ultimately shows the interactive tutorial increases first-successful-call rate from 34% to 51%.
