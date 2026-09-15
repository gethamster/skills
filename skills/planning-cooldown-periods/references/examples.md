# Examples: Planning Cool-Down Periods

## Example: Small SaaS team after a six-week cycle

**Scenario:**

A five-person team (two engineers, one designer, one product manager, one founder) just finished a six-week cycle building a new onboarding flow. They have a two-week cool-down before the next cycle. Three bugs were reported by beta users. The codebase has a known issue with slow database queries on the reporting page.

The founder wants to explore adding AI-powered suggestions. Two pitches need shaping for the next betting table.

**Walkthrough:**

On day one, the product manager runs a 30-minute retrospective. The team identifies the three beta bugs plus two UI polish items they noticed during the cycle. One bug is critical (new users cannot complete step 3 of onboarding on Safari). The PM assigns that bug to one engineer and puts the other items on the self-select menu.

The founder writes up the cool-down plan document: critical Safari bug (assigned), two other bugs and two polish items (self-select), the slow-query database issue (tech debt lane), an open invitation to explore the AI suggestion idea (exploration lane), and a note that two pitches need shaping by day 8 of the cool-down. Over the first week, the assigned engineer fixes the Safari bug by day 2, then voluntarily picks up the slow-query optimization because it has been bugging her for months. The other engineer spends three days prototyping an AI suggestion feature using a public API, then switches to fixing the remaining two bugs. The designer spends the first week polishing the onboarding flow's micro-interactions.

During the second week, the founder and PM finalize two shaped pitches, circulate them on day 8, and run the betting table on day 10. The team picks a six-week project from the two pitches and starts the next cycle feeling rested and prepared.

## Example: Larger product team with three-week cycles

**Scenario:**

A twelve-person product organization running three-week cycles with one-week cool-downs. They have three teams of four people each. Each team shipped a different project. The company has a quarterly OKR review meeting scheduled during the cool-down week. Technical debt has been accumulating because the one-week cool-downs have been consistently consumed by bug fixes.

**Walkthrough:**

The engineering manager recognizes the pattern: five consecutive cool-downs spent almost entirely on bugs, with no time for debt reduction or exploration. She raises this at the cycle retrospective and proposes a structural change. For this cool-down, each team designates one person as the 'bug duty' rotation, responsible for triaging and fixing any critical bugs. The other three team members are explicitly freed to spend at least 60% of the week on tech debt or exploration.

She creates a shared tech debt backlog with 23 items accumulated over the past five cycles, ranked by impact. Teams pick items from the backlog. The OKR review meeting is scheduled for Wednesday afternoon, taking 90 minutes. The engineering manager negotiates with leadership to keep it to that single meeting, protecting the rest of the week.

Shapers (two senior PMs) work on pitches Monday through Thursday, circulating three pitches by Thursday evening. The betting table runs Friday morning. By the end of the week, teams have resolved four critical bugs through the rotation system, knocked out seven tech debt items from the backlog, run two exploration projects (one of which surfaces a performance improvement worth shaping), and prepared three strong pitches for the betting table. The engineering manager archives the outcomes and notes that the tech debt backlog dropped from 23 to 16 items for the first time in months.

## Example: B2C mobile app team new to Shape Up

**Scenario:**

A seven-person mobile app team transitioning from two-week sprints to Shape Up. They just completed their first six-week cycle and are entering their first-ever cool-down. The team is unfamiliar with unstructured time and keeps asking 'what are we supposed to do?' The product lead has not yet developed a shaping practice, so there are no pitches ready for the next cycle.

**Walkthrough:**

The product lead anticipates the discomfort and prepares a more guided cool-down for this first iteration. On day one, she runs the retrospective and identifies eight bugs, two of which are critical (app crashes on Android 12 during checkout, push notifications not firing for one segment). She creates the cool-down plan document but adds more detail than usual: specific examples of what 'exploration' could look like (prototype a dark mode, investigate why session duration dropped 15% last month, try a new animation library), and a list of five technical debt items suggested by the senior developer. She holds a brief kickoff meeting explaining the four lanes and emphasizing that there are no standups, no tickets, and no status reports during cool-down.

The team is skeptical but curious. By mid-first-week, the critical bugs are fixed and most of the team has gravitated toward bug fixes and tech debt, which feels safe and familiar. Only one developer has started an exploration project. The product lead does not push.

She spends the first week learning the shaping process herself, writing two rough pitches. During the second week, she asks one engineer and the designer to review her draft pitches. Their feedback reveals a major technical rabbit hole in one pitch, which she revises. She circulates both pitches on day 9 and runs the betting table on day 10 with a small group (herself, the engineering lead, and the company CTO).

They bet on one pitch. The team enters the second cycle with a clearer understanding of how cool-down works, and the product lead notes in her archive that next cool-down she will encourage more exploration by sharing the outcomes of the one developer's prototype, which uncovered that a third-party SDK was responsible for the session duration drop.

## Example: Enterprise B2B team managing stakeholder expectations

**Scenario:**

A product team at a mid-size B2B company runs six-week cycles with two-week cool-downs. The VP of Sales frequently requests urgent feature work during cool-down, claiming customer deals depend on specific features being built immediately. The team has started dreading cool-downs because they feel like an extension of the cycle with extra pressure from stakeholders.

**Walkthrough:**

The product director addresses this by making the cool-down structure visible to leadership. She creates a one-page 'Cool-Down Charter' that explains the four lanes, why each exists, and what happens to product quality when cool-downs are co-opted. 3x more critical bugs than cycles preceded by protected cool-downs. She establishes a rule: stakeholder requests during cool-down go into the shaping pipeline for the next betting table, not into the current cool-down.

Truly urgent production issues (outages, security vulnerabilities) are the only exception. For the next cool-down, she shares the plan document with the VP of Sales proactively, showing what the team will accomplish and when the next betting table will evaluate new feature requests. She includes the VP in the betting table session so he can advocate for his customers' needs in the right forum. The result: the team has their first genuinely protected cool-down in four cycles.

Two engineers tackle a database migration they have been deferring for six months. The designer explores a new dashboard concept that a customer mentioned during a call. Two shaped pitches are prepared, one of which addresses the VP's most urgent customer request. At the betting table, the VP sees his request evaluated fairly and bet on for the next cycle.

He stops making ad hoc requests during cool-down because he now trusts the process.
