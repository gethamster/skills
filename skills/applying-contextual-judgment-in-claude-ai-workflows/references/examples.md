# Examples: Applying Contextual Judgment in Claude AI Workflows

## Example: Content strategy decision for a B2B SaaS startup (small team, high stakes)

**Scenario:**

A 5-person content team at an early-stage SaaS company needs to decide whether to publish a comparison article that names competitors directly. The CEO is nervous about legal risk. The head of marketing believes transparency drives trust. The product is newer and less feature-complete than the main competitor. Publishing cadence is weekly, and the team has bandwidth for one article this week.

**Walkthrough:**

The operator constructs a Situation-Stakes-Tension prompt. Situation: 'We are a Series A SaaS tool with 200 customers. Our main competitor has 5,000 customers and deeper feature coverage. ' Stakes: 'CEO is concerned about legal exposure from naming competitors.

Marketing lead believes comparison content is our highest-converting format. Our audience actively searches for [competitor] alternatives. ' Tension: 'Transparency builds trust but risks legal friction. Honest comparison will highlight our weaker areas.

' Ask: 'Before recommending an approach, outline how you would weigh these competing priorities. ' Claude's output first reasons through the tradeoffs: third-party comparison sites will fill the gap regardless, so silence does not eliminate risk. It recommends a "category comparison" format that compares feature categories without making direct claims about the competitor's capabilities, linking to the competitor's own documentation as the source. It flags that the biggest risk is not legal exposure from naming a competitor (which is generally legal) but from making inaccurate claims about competitor features.

The recommendation includes a pre-publish checklist: verify every competitor claim against their public documentation, use 'at the time of writing' qualifiers, and have the CEO review before publication. The team publishes the article and it becomes their second-highest converting page within 60 days.

## Example: Code review feedback for a junior developer on a distributed team

**Scenario:**

A senior engineer uses Claude to help draft code review comments for a pull request submitted by a junior developer who joined the team three weeks ago. The PR has architectural issues that need to change before merging, but the junior developer has already been visibly discouraged by previous review rounds. The team is remote-first across four time zones, so written feedback is the primary communication channel.

**Walkthrough:**

The operator structures the prompt with full context. Situation: 'Reviewing a PR from a developer who started 3 weeks ago. They refactored the authentication module using a pattern that works but will cause scaling issues past 1,000 concurrent users. ' Stakes: 'The developer was discouraged after their last two PRs received extensive revision requests.

Written feedback is our main channel since we are across four time zones. We need this module to handle 10,000 concurrent users by Q3. ' Tension: 'We need architectural changes that will require significant rework, but the developer is fragile and might interpret another round of revisions as failure. The code quality is actually good for someone at their experience level.

' Ask: 'Draft code review comments that accomplish the architectural correction while building this developer's confidence. ' Claude reasons that the core issue is informational (outdated docs led to the wrong pattern) rather than competence-related, so the feedback should frame the issue as a documentation failure, not a developer failure. The output opens by acknowledging what the developer did well (clean code, good test coverage, correct understanding of the old pattern), then explains that the architecture has evolved and the docs have not caught up, positions the rework as a learning opportunity about the new pattern, and ends with an offer to pair on the refactor asynchronously via recorded walkthrough. Claude also recommends the senior engineer file a ticket to update the internal documentation and tag the junior developer as a reviewer on that ticket, reinforcing that their experience exposed a real gap.

## Example: Customer communication during a service outage (B2C, large user base)

**Scenario:**

A consumer fintech app with 500,000 active users experienced a 4-hour outage affecting payment processing. The engineering team has identified the root cause (a database migration script that was not properly tested in staging). The CEO wants to send a post-incident communication to all affected users. The legal team wants to minimize liability language.

The support team is overwhelmed with tickets and needs the communication to reduce inbound volume.

**Walkthrough:**

The operator provides detailed context. Situation: 'Our payment processing was down for 4 hours yesterday evening between 6 PM and 10 PM EST. Approximately 12,000 transactions failed during this window. No funds were lost but some users saw temporary incorrect balances.

Root cause was a database migration script. ' Stakes: 'Users are angry on social media. Our support queue has 3,400 unresolved tickets. Legal wants to avoid language that could be interpreted as accepting liability for damages.

The CEO wants to be transparent because our brand differentiator is trustworthiness. ' Tension: 'Transparency versus legal caution. We want to reduce support tickets (which requires detailed information) but legal wants minimal specifics. The CEO's instinct for radical honesty conflicts with standard incident communication advice.

' Ask: 'Draft the user communication. ' Claude's reasoning identifies that vague incident communications actually increase support tickets because users fill in the gaps with worst-case assumptions. It recommends specific but carefully worded language: state exactly what happened and when, confirm no funds were lost, acknowledge that temporary balance discrepancies have been resolved, and provide a clear process for users who incurred external late fees (a form to submit receipts for reimbursement review). This last point addresses the legal concern by creating a structured process rather than a blanket admission.

The communication also addresses the pattern by stating 'We have implemented additional safeguards to our deployment process, including mandatory staging environment testing for all database changes,' which is specific enough to be credible without overpromising. The support team reports a 60% drop in new tickets within two hours of sending the communication.

## Example: Editorial judgment for a thought leadership piece with a controversial take

**Scenario:**

A marketing agency's founder wants to publish a LinkedIn article arguing that most companies waste money on content marketing because they prioritize quantity over quality. The founder's own agency sells content marketing services. The article risks alienating potential clients who are currently pursuing high-volume strategies, but the founder believes the contrarian take will attract better-fit clients who value quality.

**Walkthrough:**

The operator builds the prompt with the full tension. Situation: 'Our founder wants to publish a LinkedIn article titled "Most Content Marketing Is a Waste of Money" on their personal account (14,000 followers, mostly marketing directors and CMOs). Our agency does content marketing for B2B SaaS companies. ' Stakes: 'Current high-volume clients might feel attacked and question our commitment to their strategy.

Prospective clients who value quality will resonate strongly. The founder's personal brand is built on candor. ' Tension: 'Honest positioning versus client retention risk. Thought leadership requires a genuine perspective, but that perspective could undermine current client relationships.

Being safe with the take means the article adds no value and does not differentiate. ' Ask: 'Help me find the right editorial angle that is genuinely contrarian without being self-destructive. ' Claude reasons that the key distinction is between criticizing a strategy and criticizing the people who use it. The article can argue that the industry has a structural incentive to sell volume (agencies bill by deliverable, platforms reward frequency) without implying that companies pursuing volume are foolish.

' This shifts the critique from clients to industry incentives. The outline leads with the founder's own evolution (they used to run high-volume programs), presents specific data comparing performance of high-volume versus high-quality content programs (using anonymized client data with permission), and closes with a practical framework for evaluating whether your current approach is working. Claude flags that the founder should have a private conversation with the three high-volume clients before publishing, not to ask permission but to give them a heads-up and frame the article as the agency's evolving thinking rather than a surprise public contradiction of their current engagement.
