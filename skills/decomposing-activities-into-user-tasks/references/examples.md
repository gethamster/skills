# Examples: Decomposing Activities into User Tasks and Stories

## Example: E-commerce Product Search (Small Team, B2C)

**Scenario:**

A 4-person startup is building an online marketplace for handmade goods. The backbone includes the activity 'Find a Product' with three steps: 'Enter search query,' 'Browse results,' and 'View product details.' The team has two personas: a casual browser and a repeat buyer. They need to ship an MVP in 6 weeks.

**Walkthrough:**

The team starts by writing walking skeleton stories for each step. ' These three stories form a complete, if basic, search experience. The team then generates a second row by varying by persona: the repeat buyer wants to see their previously viewed items and sort by newest listings. A third row adds sophistication: autocomplete suggestions, category filters, and price range sliders.

A fourth row adds delight: saved searches with email alerts and personalized recommendations. ' The team draws a release line after the second row, giving them 7 stories for the MVP that serve both personas at a basic level. The remaining 7 are explicitly deferred to the second release.

## Example: Enterprise User Onboarding (Large Team, B2B SaaS)

**Scenario:**

A 30-person product team at a B2B SaaS company is rebuilding their onboarding flow. The backbone has the activity 'Set Up Organization' with five steps: 'Create account,' 'Configure workspace,' 'Invite team members,' 'Set permissions,' and 'Connect integrations.' Personas include an IT admin, a team lead, and an individual contributor. They plan quarterly releases.

**Walkthrough:**

The team runs a 90-minute decomposition workshop using a large physical wall with sticky notes. ' Variations include SSO setup (IT admin persona, medium priority), social login (individual contributor, low priority), and bulk account provisioning via CSV upload (IT admin, high priority because enterprise customers require it). The CSV story initially seems like a lower-priority sophistication feature, but the sales team flags that three pending enterprise deals require it. The team moves it to the second row.

For 'Set permissions,' decomposition reveals 8 stories ranging from a basic two-role model (admin/member) to granular per-resource permissions with audit logging. The engineer on the team flags that the granular permission model requires a fundamentally different data architecture than the basic model, so they split it into two independent stories with a noted dependency. The final map for 'Set Up Organization' contains 34 stories across 4 rows. The walking skeleton (row 1, 5 stories) ships in Q1.

Row 2, including CSV provisioning and basic role management, ships in Q2. This decomposition directly informs the quarterly roadmap presentation to leadership.

## Example: Mobile Fitness App (Mid-size Team, B2C)

**Scenario:**

A 12-person team is building a fitness tracking app. The backbone activity 'Log a Workout' has four steps: 'Select workout type,' 'Record exercises,' 'Track sets and reps,' and 'Save and review workout.' Personas are a gym beginner, an intermediate lifter, and a personal trainer logging on behalf of a client. The team ships biweekly.

**Walkthrough:**

The product manager and lead designer start by writing walking skeleton stories, then bring in two engineers for validation. ' The second row adds a custom workout builder for intermediate lifters. The third row adds a trainer mode where the trainer selects a client first, then a workout type. For 'Track sets and reps,' the walking skeleton is manual entry of weight and reps.

Row two adds a rest timer and auto-incrementing set numbers. Row three adds plate calculator and previous workout comparison. The designer flags that the trainer persona needs to see a split view showing the programmed workout alongside actual performance, which is an entirely different UI pattern. This becomes a row-three story with a design spike story in row two.

The decomposition produces 22 stories. Given biweekly releases, the team draws lines after every 4-5 stories, creating 5 release increments. Each increment delivers a usable improvement to at least one persona. The walking skeleton, just 4 stories, becomes a beta test release for internal dogfooding within the first sprint.

## Example: Internal Tool for Customer Support (Small Team, Internal Product)

**Scenario:**

A 3-person internal tools team is building a ticket management system for their company's 50-person support team. The backbone activity 'Resolve a Ticket' has steps: 'View ticket queue,' 'Open ticket details,' 'Investigate issue,' 'Respond to customer,' and 'Close ticket.' The single persona is a support agent. The team has no fixed release cadence and deploys continuously.

**Walkthrough:**

With only one persona, the team varies stories primarily by scenario and sophistication. For 'View ticket queue,' the walking skeleton is a chronological list of open tickets with subject lines. Row two adds sorting by priority and age. Row three adds saved filters and queue assignment.

For 'Investigate issue,' the walking skeleton shows the customer's message and their account information. Row two adds linked previous tickets from the same customer. Row three adds internal notes and an AI-suggested response draft. Because this is an internal tool with a captive audience, the team makes a deliberate decision to skip row three entirely for the first two months and instead get the walking skeleton deployed immediately so support agents can start using it and providing feedback.

They find that continuous deployment changes their relationship with decomposition: instead of planning multiple rows ahead, they decompose the walking skeleton fully, ship it, and then decompose the next row based on real agent feedback about what is most painful. The initial map has 15 stories across 3 rows, but only 5 stories (the walking skeleton) are decomposed with full acceptance criteria. The rest are placeholders marked with question marks.
