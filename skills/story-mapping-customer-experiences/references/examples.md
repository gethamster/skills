# Examples: Story Mapping Customer Experiences

## Example: B2B SaaS Onboarding Journey for a Project Management Tool

**Scenario:**

Illustrative scenario: A 6-person product team at a B2B project management tool is trying to improve their product outcome: "Increase the percentage of new teams who complete their first project within 14 days from 20% to 40%." They've conducted 12 interviews with recently onboarded team leads over the past 3 weeks. Their customers are mid-market operations managers switching from spreadsheet-based project tracking.

**Walkthrough:**

The team extracted 90 story fragments from their 12 interviews and identified 6 journey phases: "Realizes spreadsheets are failing" → "Gets buy-in from manager" → "Evaluates tools" → "Signs up and configures" → "Migrates existing projects" → "Gets team to actually use it." They created 5 swim lanes: Actions, Thoughts, Emotions, Tools, and Workarounds. During the population session, a striking pattern emerged: the "Gets team to actually use it" phase had the densest cluster of red pain-point markers. Eight of 12 customers described spending weeks begging colleagues to stop using the old spreadsheet, with emotions ranging from "embarrassed" to "defeated."

The "Migrates existing projects" phase also showed high friction, with customers describing hours of manually recreating spreadsheet data because the import tool didn't match their spreadsheet structures. The team synthesized 11 opportunities, with the top 3 being: (1) "Team leads have no way to demonstrate the tool's value to reluctant teammates during adoption" (frequency: 8/12, severity: high); (2) "Migrating from spreadsheets requires hours of manual data entry because import expects rigid column formats" (frequency: 9/12, severity: medium-high); (3) "Team leads don't know which features to configure first and configure too many, overwhelming their team" (frequency: 6/12, severity: medium). These three opportunities were added to their opportunity solution tree under the "first project in 14 days" outcome, giving the team a clear, evidence-backed focus for their next solution exploration cycle.

## Example: Consumer Fitness App, Habit Formation Journey

**Scenario:**

Illustrative scenario: A 3-person startup team building a fitness habit app wants to improve retention: "Increase the percentage of users who log workouts at least 3 times per week for 8 consecutive weeks from 10% to 15%." They have 8 interview transcripts from users who signed up in the last 60 days, a mix of people who are still active and people who dropped off. Their users are busy professionals who want to exercise regularly but struggle with consistency.

**Walkthrough:**

The team identified 5 journey phases from their data: "Decides to get fit (again)" → "Searches for help" → "Sets up the app and first plan" → "Follows the plan (weeks 1-2)" → "Hits the consistency wall (weeks 3-4)." They used 4 swim lanes: Actions, Emotions, Competing Priorities, and Workarounds. The map revealed that the emotional curve took a sharp dive during "Hits the consistency wall", where users described guilt, shame, and a sense of failure after missing a few workouts. Critically, the map showed that the "Follows the plan" phase had a hidden gap: 6 of 8 users described situations where their plan didn't fit a particular day (traveling, sick kid, only a few minutes available) and the app offered no adaptation; it just showed the missed workout the next day.

Users who dropped off described a cascading pattern: one missed workout → guilt → second missed workout → "I'll start fresh Monday" → never comes back. The team named 9 opportunities. The top opportunity was: "Users who miss one workout have no way to adapt their plan to their current reality, causing a guilt spiral that leads to abandonment." This was supported by 6 of 8 interviews and connected directly to the retention outcome.

The team placed it on their opportunity solution tree and began exploring solutions like adaptive micro-workouts and "recovery plans" that acknowledge the miss and offer a modified path forward.

## Example: Enterprise Healthcare Platform, Clinician Workflow

**Scenario:**

Illustrative scenario: A product team at a healthcare technology company is mapping the journey for hospital clinicians using their platform to review patient lab results. The outcome is: "Reduce the average time from lab result availability to clinician acknowledgment from 4 hours to 2 hours." They have 7 interviews with nurses and physicians across 3 hospital systems, plus 4 hours of shadowing observation notes. The platform operates in a heavily regulated environment with strict workflow requirements.

**Walkthrough:**

The team's journey phases reflected the clinical workflow: "Starts shift and reviews patient list" → "Receives notification of new results" → "Navigates to results in system" → "Interprets results in clinical context" → "Takes action (orders, notes, escalation)" → "Documents and communicates." They added a swim lane beyond the standard four: "Compliance/Regulatory Constraints," which captured moments where clinicians had to follow mandated procedures that added friction. The population session revealed that the longest delays weren't in the platform itself but in the "Receives notification" phase. Clinicians described being buried in alerts (one nurse counted 50 alerts in a single shift) and using a personal workaround: a paper checklist taped to the monitor with the few patients they were most worried about, so they could visually scan for those names in the alert stream.

The emotion lane showed resignation and alert fatigue: "I just stop reading them after a while." The team identified that the gap wasn't a missing feature but a signal-to-noise problem that existed before users even engaged with the lab results screen. They named the opportunity: "Clinicians receive a flood of alerts per shift with no prioritization, causing them to develop paper-based workarounds that delay recognition of critical results." This reframed the product problem from "make the results screen faster" to "reduce noise so critical results get seen sooner", a fundamentally different opportunity that the team would have missed without mapping the full journey context around the platform.

## Example: Small Team Quick Map, Developer Tool API Documentation

**Scenario:**

Illustrative scenario: A solo product manager and one developer at a small API-first developer tool need to improve their outcome: "Increase the percentage of developers who make their first successful API call within 30 minutes of signing up from 30% to 50%." They have 6 short interview transcripts with developers who recently signed up. Budget and time are extremely limited, so they need to complete the map in one 90-minute session.

**Walkthrough:**

Given time constraints, the PM extracted story fragments the night before the session, producing 40 notes in a simple spreadsheet with columns for quote, phase guess, and lane. They used only 4 phases for speed: "Discovers the API" → "Reads docs and tries to understand" → "Sets up auth and environment" → "Makes first call." Three swim lanes kept it lean: Actions, Blockers, and Emotions. The session took 80 minutes.

The most revealing pattern appeared in the "Sets up auth and environment" phase, where 5 of 6 developers described a detour trying to figure out the difference between a test API key and a production API key. Four developers used the word "confused" or "wasn't sure" about which key to use where. Two developers accidentally used the production key in their test environment and then panicked about whether they'd been charged. The team identified just 4 opportunities and picked the top one: "Developers can't distinguish between test and production API keys during setup, causing a detour and anxiety about unintended charges."

This small, focused map (40 notes, 4 phases, 3 lanes) took under 2 hours including prep and produced a specific, actionable opportunity that the developer could start addressing immediately. The lesson: story mapping scales down. A quick map with real data beats a beautiful map with assumptions.
