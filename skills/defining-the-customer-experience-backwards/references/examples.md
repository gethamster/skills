# Examples: Defining the Desired Customer Experience Before Building

## Example: B2B SaaS Onboarding for a Small Marketing Team

**Scenario:**

A five-person startup is building a social media scheduling tool. Their target customer is a marketing manager at a 20-person company who currently uses spreadsheets and manual posting. The team has conducted eight customer interviews and has a clear picture of the pain but has not yet decided which features to build first. They have three engineers and a designer, with a 10-week runway to first release.

**Walkthrough:**

The product manager writes a narrative about "Priya," a marketing manager who discovers the tool through a colleague's recommendation, signs up during her lunch break, and within 15 minutes has her first week of posts scheduled across three platforms. " The next morning, Priya opens the app while commuting and sees that two posts went out as planned, with engagement numbers already visible. The decomposition yields 18 experience moments. The most critical are: account creation in under 60 seconds (requiring social login and minimal form fields), platform connection in one step per platform (requiring OAuth integrations with three social networks), and calendar view with drag-and-drop (requiring a performant mobile web interface).

The feasibility assessment flags the OAuth integrations as Buildable but time-intensive, at roughly two weeks per platform. This leads the team to launch with one platform first (Instagram, based on customer interview frequency) and phase the other two. The narrative's specificity about Priya seeing engagement numbers "the next morning" produces a requirement for basic analytics within 12 hours of posting, which the team initially had on a v2 backlog but now promotes to v1 because the narrative revealed it as essential to the "aha" moment.

## Example: Enterprise Compliance Platform for Financial Services

**Scenario:**

A 40-person company is building a compliance monitoring tool for mid-size banks. Their target customer is a Chief Compliance Officer who manages a team of 12 analysts. The product involves sensitive regulatory data, complex integrations with banking systems, and a long sales cycle. The team has interviewed six compliance officers and has a 16-week development timeline before a pilot with two banks.

**Walkthrough:**

The product manager writes a narrative about "David," a CCO who arrives at work on Monday morning to a dashboard showing that his team's compliance coverage increased from 72% to 89% over the past month. The narrative walks through David reviewing three flagged transactions that the system identified over the weekend, assigning two to analysts directly from the dashboard, and dismissing one after the system shows its reasoning. On Wednesday, David uses the tool to generate a board-ready compliance report in four clicks, replacing a process that currently takes his team two full days each quarter. The decomposition produces 24 experience moments.

The critical path includes: automated transaction scanning against regulatory rules (requiring integration with the bank's core banking system), explainable flagging (requiring a reasoning engine that can cite specific regulations), analyst assignment workflow (requiring role-based access and notification), and one-click report generation (requiring a template engine with real-time data pull). Feasibility assessment marks the core banking integration as Unknown because each bank uses a different system. The team decides to build a standardized adapter layer and commits to supporting only the two pilot banks' specific systems for v1. The narrative's detail about David dismissing a flag "after the system shows its reasoning" elevates explainability from a nice-to-have to a requirement, because without it, the CCO cannot trust the system and the entire value proposition collapses.

## Example: Consumer Mobile App for Fitness Beginners

**Scenario:**

A two-person founding team is building a fitness app for people who have never exercised regularly. They have surveyed 200 potential users and conducted 15 interviews. Their insight is that beginners quit not because workouts are hard but because they feel lost about what to do each day. They have eight weeks to build a testable MVP with one iOS developer and one designer-founder.

**Walkthrough:**

The designer-founder writes a narrative about "James," a 34-year-old accountant who downloads the app on a Sunday evening after a conversation with his doctor about being more active. " On Monday at 6:45 AM, James receives a notification that says "Time for your walk, James. " He taps, walks for 12 minutes while the app plays a gentle audio guide, and when he stops, the app shows "Day 1 complete. " The decomposition yields 14 experience moments.

The critical ones are: the onboarding questionnaire generating a personalized daily plan (requiring a simple rule engine mapping answers to plan templates), the contextual notification (requiring iOS push notification integration with time-zone awareness), and the motivational completion screen with a social comparison stat (requiring a pre-researched library of motivational statistics). Feasibility assessment shows everything is Buildable within eight weeks except the audio guide, which requires content production. The team decides to launch without audio and instead shows on-screen text prompts during the walk. The narrative's emphasis on James receiving his plan "immediately" produces a hard requirement that the onboarding flow must end with a visible plan, not a "we'll email you" promise.

This decision shapes the entire technical architecture: the plan generation must be synchronous and fast, not queued.

## Example: Internal Tool for a Large E-Commerce Operations Team

**Scenario:**

A product manager at a 500-person e-commerce company is tasked with improving the internal returns processing tool used by a 30-person operations team. Currently, each return takes an average of 8 minutes to process. Leadership wants that reduced to under 3 minutes. The product manager has shadowed the operations team for two days and has detailed notes on the current workflow.

**Walkthrough:**

The product manager writes a narrative about "Lin," a returns processor who starts her shift at 8 AM, logs in, and sees a prioritized queue of 45 returns sorted by value and urgency. She clicks the top return and sees the customer's order, the return reason, product photos the customer submitted, and a system recommendation (refund, replace, or reject) with confidence level. For a straightforward return with high confidence, Lin confirms the recommendation with one click and moves to the next item in under 90 seconds. For a borderline case with low confidence, Lin sees the three most similar past decisions by her teammates, makes her judgment, and adds a one-line note.

The decomposition produces 22 experience moments. The critical path includes: automated return classification and recommendation (requiring a rules engine trained on two years of historical decisions), one-click confirmation for high-confidence cases (requiring workflow redesign to eliminate five current form fields that are auto-fillable), and similar-case retrieval for low-confidence cases (requiring a search index over historical decisions with similarity scoring). Feasibility assessment flags the similar-case retrieval as Unknown because the historical decision data is unstructured. The team assigns a data engineer to assess whether the data can be normalized in two weeks.

The narrative's specificity about "under 90 seconds" for high-confidence cases creates a testable performance benchmark that the team tracks from the first sprint. After the first build, they measure 110 seconds and identify that the product photo loading is the bottleneck, leading to an image optimization sprint they would not have prioritized without the narrative's time constraint.
