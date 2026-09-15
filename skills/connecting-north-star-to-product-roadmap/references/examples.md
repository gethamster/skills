# Examples: Connecting Your North Star Metric to Product Roadmap Decisions

## Example: B2B SaaS Collaboration Tool Quarterly Planning

**Scenario:**

A product team at a B2B SaaS company has defined their North Star Metric as 'Weekly Active Collaborators' — the number of users who collaborate with at least one teammate per week. Their input metrics are: (1) Team activation rate (% of new teams that complete their first shared project within 14 days), (2) Weekly collaboration frequency (average collaborative sessions per active team), and (3) Team expansion rate (% of teams that add a new member per month). Team activation rate has been declining from 45% to 38% over two quarters. They have 15 candidate initiatives for next quarter.

**Walkthrough:**

The PM maps each initiative to its primary input metric. Three initiatives target team activation (redesign onboarding, add templates for first project, implement invite reminders), five target collaboration frequency (real-time co-editing, notification improvements, mobile app improvements, comment threading, activity feed), and four target team expansion (referral program, admin dashboard, seat-based pricing change, SSO integration). Three items are foundational (API performance, database migration, accessibility audit).

Scoring reveals the onboarding redesign has the highest composite score: high impact on the most constrained metric (activation), medium-high confidence based on user research data, and moderate effort. The real-time co-editing feature scores high on impact for collaboration frequency but low on confidence (no prototype tested yet) and high effort.

The PM proposes: commit to the onboarding redesign and invite reminders (two activation bets), run a 2-week prototype sprint for co-editing to buy confidence before committing to full build, ship notification improvements (a quick win for collaboration frequency), and allocate 20% capacity to the API performance work. The referral program is deferred — team expansion is healthy and not the current bottleneck.

Stakeholders from sales push for SSO integration, arguing it's blocking enterprise deals. The PM acknowledges this but shows it maps to team expansion, which is currently green. They agree to revisit SSO next quarter if expansion rate declines, or if the sales team can quantify its activation impact (teams that can't use SSO may not activate).

## Example: Consumer Mobile App Resolving Conflicting Priorities

**Scenario:**

A fitness app's North Star Metric is 'Weekly Active Exercisers' (users who log at least one workout per week). Input metrics are: new user Day-1 retention (currently 28%, target 35%), workout completion rate (currently 61%, stable), and social engagement rate (users who interact with at least one friend's activity per week, currently 15%, growing). The CEO wants to double down on social features. The head of growth wants to fix onboarding. Engineering wants to rebuild the workout tracking core.

**Walkthrough:**

The PM organizes a scoring session with all three stakeholders present. They list seven candidate initiatives across the three input metrics. When scored transparently, two onboarding improvements (personalized first-workout recommendation and reduced sign-up friction) score highest due to Day-1 retention being the biggest bottleneck — at 28%, nearly three-quarters of new users never return, making downstream improvements irrelevant.

The social feed redesign the CEO championed scores well on social engagement impact but moderate overall because that input metric is already trending positively. The PM reframes: 'Social is working — let's not risk disrupting momentum there. Activation is where we're leaking the most value.'

The workout tracking rebuild maps to workout completion rate, which is stable at 61%. It's categorized as foundational/enabling work and given a 20% capacity allocation rather than competing on input metric impact. The final product roadmap commits to onboarding improvements as the primary bet, continues lightweight social iteration, and begins scoped workout tracking improvements. All three stakeholders see their priorities represented, with a clear rationale for the emphasis.
