# Examples: Building Opportunity Solution Trees

## Example: B2B SaaS startup improving trial-to-paid conversion

**Scenario:**

A 15-person B2B project management SaaS company has a 14-day free trial. Their trial-to-paid conversion rate is 8%, and the product team has been tasked with increasing it to 14%. The team of one PM, two engineers, and one designer has been conducting weekly customer interviews for about six weeks and has roughly 30 opportunity statements from churned trial users and recent converters.

**Walkthrough:**

The team sets 'increase trial-to-paid conversion from 8% to 14%' as the desired outcome at the top of a Miro board. They transcribe their 30 opportunity statements onto digital stickies and spend 45 minutes clustering them. Five parent opportunities emerge: 'unclear on how the tool differs from spreadsheets' (8 mentions across interviews), 'can't get team members to adopt during trial' (7 mentions), 'hit a complexity wall when setting up real projects' (6 mentions), 'worried about data migration from current tool' (5 mentions), and 'pricing feels risky without proven value' (4 mentions). They nest the specific child opportunities under each parent.

The team uses dot voting weighted by interview frequency and strategic fit, selecting 'can't get team members to adopt during trial' as their primary focus, reasoning that individual tools become indispensable only when the team is using them. For this opportunity, they generate four solutions: a guided team onboarding wizard that invites and assigns roles to teammates, a 'team starter project' template pre-populated with example tasks, a shared workspace that works even for non-signed-up teammates via guest links, and a 'value dashboard' showing the trial user what the team accomplished together that week. They map assumptions for each, the riskiest being 'trial users will invite teammates within the first 3 days if prompted', and design a simple experiment: an in-app prompt on day 1 asking users to invite one teammate, measured by invite rate. The tree is posted on their team Miro board and updated every Tuesday after their weekly interview synthesis.

## Example: Enterprise product team optimizing onboarding for a new module

**Scenario:**

A large enterprise analytics platform (200-person engineering org) has launched a new forecasting module. The module is included in existing enterprise contracts, but adoption within customer organizations is low, only 12% of eligible users have activated the module within the first 90 days. A cross-functional squad of PM, 3 engineers, designer, and data analyst has been given the outcome of increasing 90-day module activation to 35%.

**Walkthrough:**

The PM and designer have conducted 14 interviews with both activated and non-activated users across six enterprise accounts. They build the tree on a physical wall in their team room using large sticky notes. The outcome is '90-day forecasting module activation from 12% to 35%.' Their opportunity hierarchy includes three parent branches: 'don't understand what the forecasting module does differently from Excel models they already use' (mentioned in 10 of 14 interviews), 'intimidated by the statistical concepts in the interface' (8 mentions), and 'can't connect the module to their specific data pipelines without IT help' (6 mentions).

They prioritize the first branch because it's a gating issue, if users don't see the value, no amount of usability improvement matters. Under this opportunity, child nodes include 'can't visualize how forecasts would have outperformed their manual predictions' and 'don't have a use case in mind that justifies switching workflows.' The team generates three solutions: a 'hindsight mode' that runs the forecasting model on historical data and compares it to what actually happened, a library of industry-specific forecast templates with annotated case studies, and a 'forecast challenge' feature where users bet on a prediction and the module scores accuracy after a week. The riskiest assumption, 'seeing retrospective accuracy data will convince users the module outperforms their manual process', leads to a prototype test where they show five users mock hindsight reports in their next interview sessions.

The tree is updated weekly and shared with the VP of Product monthly as the narrative backbone of their progress report.

## Example: B2C mobile app reducing churn in first 30 days

**Scenario:**

A consumer fitness app with 500K monthly active users has a 60% 30-day churn rate for new users. A small product team (PM, 2 mobile developers, designer) needs to reduce this to under 45%. They have Mixpanel behavioral data showing drop-off points and have conducted 20 interviews with users who churned and users who retained past 30 days.

**Walkthrough:**

The team uses FigJam to build their tree. Outcome: 'reduce 30-day new user churn from 60% to below 45%.' They identify four parent opportunities from interview synthesis: 'don't see results fast enough to justify daily use' (12 of 20 interviews), 'feel judged or discouraged by the content tone' (8 mentions, predominantly among fitness beginners), 'can't figure out which workouts match their fitness level' (7 mentions), and 'forget the app exists after the first few days' (6 mentions, correlating with Mixpanel data showing 40% of churned users opened the app fewer than 3 times). The team debates between the first and third opportunities and selects 'don't see results fast enough' because both behavioral data and interview depth support it as the primary churn driver.

Child opportunities include 'expected visible body changes within a week,' 'didn't realize the app tracks non-visual progress like endurance and recovery,' and 'no social proof that the program works for people like me.' They brainstorm solutions: a 'micro-wins' dashboard that surfaces non-obvious progress metrics daily (resting heart rate improvement, workout duration increase, consistency streaks), a before-and-after community gallery filtered by similar starting profiles, a personalized weekly progress email comparing the user's first week to the typical trajectory of retained users, and gamified milestone celebrations at days 3, 7, and 14. The critical assumption, 'users will find non-visual progress metrics motivating enough to continue', is tested via a painted-door test: they add a 'Your Progress So Far' card to the home screen linking to a prototype dashboard, measuring tap-through rate and subsequent 7-day retention. Within two weeks, the tree has already evolved: the 'feel judged' branch gained urgency after two more interviews surfaced the same theme, and one solution was crossed out after its core assumption failed.

## Example: Internal platform team improving developer experience

**Scenario:**

An internal platform team at a 2,000-person tech company owns the CI/CD pipeline used by 150 engineering teams. Developer satisfaction survey scores have dropped from 4.1 to 3.4 out of 5 over two quarters. The platform team (PM, 4 engineers, SRE lead) has been tasked with recovering the satisfaction score to 4.0 or above. They've conducted 12 interviews with developers from teams of varying sizes and tech stacks.

**Walkthrough:**

The team builds a physical tree on a whiteboard in their team area. Outcome: 'increase CI/CD developer satisfaction from 3.4 to 4.0+.' Their opportunity hierarchy: 'builds are too slow for my iteration speed' (mentioned in 11 of 12 interviews, the dominant pain point), 'debugging failed builds requires reading raw logs with no guidance' (9 mentions), 'configuration is copy-pasted tribal knowledge with no documentation' (7 mentions), and 'can't test pipeline changes without deploying to shared staging' (5 mentions). They focus on build speed because it's nearly universal and the satisfaction survey free-text responses confirm it as the top complaint.

Child opportunities: 'my build takes over 15 minutes even for a one-line change,' 'I don't know which step is slow or why,' and 'I restart builds hoping the flaky step passes, wasting more time.' Solutions generated: intelligent build caching that detects unchanged modules and skips them, a build timeline visualization showing per-step duration with anomaly highlighting, a 'fast feedback' mode that runs only tests affected by the changed files, and a flaky test quarantine system that auto-retries known flaky tests separately. The riskiest assumption for the caching solution, 'our build graph dependencies are deterministic enough for reliable cache invalidation', requires a technical spike rather than a customer-facing test. The team runs a one-week spike, discovers that 70% of builds have deterministic graphs but 30% use dynamic code generation that breaks caching.

This learning reshapes the tree: they add a new child opportunity ('dynamic build steps prevent optimization') and a new solution ('standardize build contracts to enable caching for dynamic modules'). The tree is reviewed in their weekly team sync and shared in the quarterly platform review with engineering leadership.
