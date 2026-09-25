# Examples: Forming Autonomous Squads with Clear Missions

## Splitting one large product team into mission-based squads

**Scenario:**

Illustrative scenario: a consumer app has one product team of about twenty people working from a single backlog. Planning meetings take a whole afternoon, and nobody can say who owns onboarding or payments.

**Walkthrough:**

The team maps the product into four areas: onboarding, discovery, payments and the mobile release pipeline. Onboarding and discovery share a recommendation service, but it has a clean interface, so they can be separate missions. The release pipeline is a platform concern rather than a user outcome, so it becomes a small platform squad that serves the other three.

Each squad writes a one-sentence mission. The payments squad writes "Let every paying user upgrade, renew and change plans without contacting support." The dependency map shows onboarding and discovery both waiting on the same backend engineer, so one more backend engineer is moved from the platform group. Each squad gets its own product owner, and the charters go on the shared wiki before the first sprint.

## A squad that fails the autonomy test before launch

**Scenario:**

Illustrative scenario: an internal tools group wants a "reporting squad" that owns every dashboard in the company. The data it needs lives in schemas that three other teams change every week.

**Walkthrough:**

The dependency step shows that almost every change the reporting squad would make needs a schema change by another team first. Every one of those dependencies is blocking. The group decides the mission is drawn around a technical layer rather than an outcome.

Instead of launching the squad, they narrow the mission to "help finance close the month from one set of trusted numbers" and move one data engineer from each of the source teams into it. The squad now owns the finance data pipeline end to end. The remaining dashboards stay with the teams that own the underlying data.

## Launching a new squad inside an existing tribe

**Scenario:**

Illustrative scenario: a tribe of five squads is adding a sixth to own a new partner integrations area. Two engineers, a designer and a product owner volunteer, and one engineer is hired.

**Walkthrough:**

The new squad writes its mission, then lists its guardrails: it chooses its own process and tools, it must use the shared authentication library, and it must go through the tribe's security review before exposing any new public endpoint. It records one blocking dependency on the platform squad for API gateway configuration and agrees a way to request changes.

At the kickoff, the squad rewrites the mission in its own words, agrees to measure the number of partners live and the time from signed contract to first API call, and picks Kanban. Its first health check is booked for the end of the quarter.
