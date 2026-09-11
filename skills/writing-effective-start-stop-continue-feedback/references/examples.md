# Examples: Writing Effective Start Stop Continue Feedback

## Example: Engineering Team Sprint Retrospective

**Scenario:**

A software engineering team of six is wrapping up a two-week sprint. The sprint had a rocky deployment, some communication gaps, and one practice that went particularly well. A team member is preparing their start stop continue feedback items for the retro.

**Walkthrough:**

**Raw observations:** Deployment failed on Wednesday because nobody checked staging. Daily standups ran 30+ minutes several times. The new practice of pairing on complex PRs caught two critical bugs.

**Refined feedback items:**

- **Start:** Start running a smoke test on staging and posting results in #deploys at least 2 hours before any production deployment. This gives us a safety net and time to fix issues before they hit production.
- **Stop:** Stop allowing standup discussions to go beyond 2 minutes per person. If a topic needs more time, post it in a parking lot and schedule a 15-minute follow-up with only the relevant people.
- **Continue:** Continue pairing on pull requests that touch more than 3 files or modify shared utilities. This sprint, pairing caught two bugs that would have reached production—one of which affected billing calculations.

Each item names a specific behavior, includes context for why it matters, and is actionable enough that the team could implement it starting next sprint.

## Example: Manager Writing Feedback for a Direct Report's 1-on-1

**Scenario:**

A marketing manager is preparing start stop continue feedback for a quarterly 1-on-1 with a content strategist. The strategist produces great work but struggles with deadline communication and has recently adopted a useful new practice.

**Walkthrough:**

**Refined feedback items:**

- **Start:** Start sending a brief status update in Slack every Friday by 4 PM listing which deliverables are on track and which might slip. This helps me adjust priorities before the weekend and avoid Monday surprises.
- **Stop:** Stop agreeing to deadline commitments in meetings without checking your current workload first. Instead, say 'Let me check my calendar and confirm by end of day.' This will reduce the number of missed deadlines, which have averaged two per month this quarter.
- **Continue:** Continue including competitive analysis sections in your content briefs. The sales team has specifically called out these sections as useful in three different deal reviews this quarter—they're using your research in prospect conversations.

Notice that each item is addressed to the individual, framed around behavior (not character), includes supporting evidence, and passes the Monday morning test. The stop item even includes replacement language the strategist can use.

## Example: Transforming Weak Feedback into Strong Feedback

**Scenario:**

A team member has drafted start stop continue feedback items but they're vague and blame-laden. This example shows the before-and-after of applying the writing principles.

**Walkthrough:**

**Before (weak):**
- Start: Be more organized.
- Stop: Wasting time in meetings.
- Continue: Keep up the good work.

**After (strong):**
- Start: Start creating a shared agenda document at least 24 hours before each team meeting, and pin it in the meeting's Slack channel so attendees can add topics in advance.
- Stop: Stop scheduling 60-minute meetings as the default. Use 25 minutes for discussions and 50 minutes for workshops—this forces tighter facilitation and frees up buffer time between calls.
- Continue: Continue sharing customer interview recordings in the #research channel within 24 hours of each call. Three team members have told me they watch every one, and it's visibly improving how we talk about user needs in planning.

The weak versions are vague, judgmental, and unactionable. The strong versions name specific behaviors, include context, and tell the reader exactly what to do.
