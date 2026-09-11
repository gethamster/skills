# Examples: Setting Measurable Success Criteria for V2MOM

## Example: B2B SaaS Startup, 15-Person Team

**Scenario:**

A Series A startup building project management software has a V2MOM Vision of "Become the default tool for remote engineering teams under 50 people." Their Methods include launching a free tier, building Slack and GitHub integrations, and publishing a content hub targeting engineering managers. The team has one data analyst and uses Mixpanel for product analytics, HubSpot for marketing, and Stripe for billing. The V2MOM cycle is six months.

**Walkthrough:**

The team starts by listing three methods and their intended outcomes. For the free tier, the intended outcome is that engineering teams adopt the product without a sales conversation. For integrations, the outcome is that daily active usage increases because the product fits into existing workflows. For the content hub, the outcome is that engineering managers discover the product organically.

They brainstorm candidate metrics and select: free tier signups per month (leading), free-to-paid conversion rate (lagging), and daily active users of integrations (leading) for the first two methods. For content, they pick organic traffic from engineering manager keywords (leading) and demo requests attributed to blog content (lagging). Baselines are pulled from Mixpanel and HubSpot: current free signups are 120 per month, conversion rate is 4%, integration DAU is zero (launching new), organic traffic is 2,000 visits per month, and content-attributed demos are 3 per month. Targets are set at 400 free signups, 7% conversion, 200 integration DAU, 8,000 organic visits, and 15 content-attributed demos, all by the end of the six-month cycle.

0%. The team validates against their Vision and notices that no measure captures whether users are specifically from remote engineering teams, so they add a guardrail: percentage of new signups matching the ICP profile (remote, engineering, under 50 people), with a target of 60% or above. The total measures table has 7 rows and fits on a single page of their V2MOM worksheet.

## Example: Enterprise Division, 200-Person Organization

**Scenario:**

The enterprise sales division of a large software company has a V2MOM Vision of "Win 40% market share in the healthcare vertical within two years." The current cycle is annual. Methods include hiring a dedicated healthcare sales team, building HIPAA compliance features, and partnering with three healthcare-specific system integrators. The organization uses Salesforce for CRM, Tableau for reporting, and has a dedicated analytics team. The V2MOM will cascade from the VP level to directors and individual account executives.

**Walkthrough:**

The VP-level measures table starts broad. For the hiring method, the measures are: healthcare-specialized AEs hired (target: 12 by Q2, leading), quota attainment of healthcare AEs in their first two quarters (lagging), and time-to-first-deal for new hires (leading, target under 90 days). For HIPAA features, measures include: feature completion against the compliance roadmap (leading, measured as percentage of planned features shipped), number of deals where HIPAA compliance was listed as a buying factor in Salesforce (lagging), and security audit pass rate (guardrail, target 100%). For partnerships, measures are: signed partner agreements (leading, target 3 by Q3), partner-sourced pipeline value (lagging, target $5M by year end), and joint customer wins (lagging, target 8).

Baselines come from Salesforce: current healthcare revenue is $12M, current pipeline is $18M, current partner-sourced pipeline is zero. The VP sets thresholds and then cascades. Each director inherits 2-3 measures from the VP table and adds 1-2 measures specific to their team. Individual AEs carry one revenue target and one activity measure (healthcare-specific meetings per week).

The total VP-level table has 9 measures. Directors carry 3-4 each. Individual contributors carry 2. The cascade ensures that if every individual hits green, the director hits green, and if every director hits green, the VP-level measures are on track.

## Example: Non-Profit Organization, Annual Planning Cycle

**Scenario:**

A non-profit focused on adult literacy has a V2MOM Vision of "Enable 5,000 adults in the metro area to reach functional literacy within three years." The current annual cycle Methods include recruiting 200 volunteer tutors, launching an evening program at 10 community centers, and securing $1.2M in grant funding. Data infrastructure is limited: they use Google Sheets for tracking and a basic donor management tool. The team has 8 full-time staff members.

**Walkthrough:**

The executive director and program manager sit down with the Methods list and draft intended outcomes. Recruiting tutors should result in enough capacity to serve new learners. The evening program should reach adults who cannot attend daytime sessions. Grant funding should cover operations for the next 18 months.

They select measures carefully, knowing that data collection is manual. For tutors: tutors recruited (leading, target 200 by month 8), tutor retention rate after 6 months (lagging, target 70%), and tutors completing certification training (leading, target 180). For the evening program: community centers with active programs (leading, target 10 by month 6), evening program enrollment (lagging, target 800 learners by year end), and learner attendance rate (guardrail, target above 65% because low attendance signals the schedule does not work). 2M), and average grant size (informational, not a formal target).

Baselines are drawn from the previous year's Google Sheets: 140 tutors recruited, 55% retention, 5 community centers active, 300 evening learners, $800K in grants. Thresholds are set with wide yellow bands because the small team cannot respond to every fluctuation. Green for tutor recruitment is 175 or above, yellow is 140-174, red is below 140. The final table has 9 measures.

Data sources and owners are documented in a shared Google Sheet with a tab for each month, and the program manager sets a calendar reminder to update every last Friday of the month.

## Example: Individual Contributor V2MOM, Product Designer

**Scenario:**

A senior product designer at a mid-stage SaaS company is writing her individual V2MOM, cascaded from her design director's team V2MOM. Her Vision is "Make our onboarding flow the highest-converting experience in our product category." Her Methods include redesigning the first-run experience, conducting 20 user research sessions, and establishing a design system component library for onboarding patterns. She tracks her work in Figma and Linear, and the product team uses Amplitude for analytics.

**Walkthrough:**

She reviews each method and identifies what success looks like at her level, focusing on measures she can personally influence. For the redesign, she selects: design iterations shipped to staging (leading, target 3 complete design iterations by Q2), task completion rate in usability testing (leading, target 85% of participants completing onboarding tasks unassisted), and onboarding completion rate in production (lagging, target improvement from 62% to 75% within 8 weeks of launch). For user research, she measures: sessions completed (leading, target 20 by end of Q2) and actionable insights documented and shared with PM (leading, target 15 insight briefs). For the design system, she tracks: onboarding components added to the shared library (leading, target 12 components) and adoption rate of those components by other designers (lagging, target 3 other designers using at least 5 components).

Baselines come from Amplitude (62% onboarding completion rate), her Linear board (zero iterations shipped so far), and Figma analytics (zero shared components). She keeps the total to 7 measures. Thresholds are defined for the three highest-priority metrics. She shares the draft with her director to confirm alignment with the team-level V2MOM, specifically verifying that her onboarding completion rate target supports the team's broader activation rate target.

The director suggests adding a guardrail: time-on-task for the redesigned flow should not increase by more than 15% compared to the current flow, because a longer but higher-completion flow might indicate the team added friction that only looks like progress.
