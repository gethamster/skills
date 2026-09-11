# Examples: Tracking Progress with Hill Charts

## Example: Small product team building a new onboarding flow

**Scenario:**

A three-person team (one designer, two engineers) has a six-week cycle to build a new user onboarding experience for a B2B SaaS product. They have defined five scopes: Welcome Survey, Account Setup Wizard, First Project Creation, Guided Tour, and Progress Indicators. This is their first time using hill charts.

**Walkthrough:**

At the start of the cycle, all five dots are placed at the far left of the uphill side. After the first week (two updates in), Welcome Survey and Progress Indicators have moved to mid-uphill because the team has sketched approaches but not validated them technically. Account Setup Wizard has barely moved because the designer is still exploring different multi-step form patterns. First Project Creation is near the summit because the team realized during shaping that this scope closely mirrors an existing feature.

Guided Tour has not moved at all. By day 10, the team notices Guided Tour has been stuck for three consecutive updates. They investigate and discover the engineer assigned to it cannot decide between a tooltip-based approach and a modal walkthrough, and both require different technical foundations. This is a classic uphill stall: unresolved approach.

The team holds a 15-minute conversation, decides on tooltips because they integrate with the existing component library, and the dot jumps from the far left to near-summit in the next update. By week 4, all dots are on the downhill side except Account Setup Wizard, which crossed the summit late but is now moving steadily. The team finishes the cycle with all five scopes shipped, and the hill chart history shows clearly that Guided Tour and Account Setup Wizard were the riskiest scopes, information they feed back to the person shaping the next cycle.

## Example: Large team with multiple hill charts across squads

**Scenario:**

A product organization has three squads each working on different projects in the same six-week cycle. The head of product wants to understand cycle health across all three squads without attending nine standups per week. Each squad has 4-6 scopes on their hill chart. The squads are building a payments integration (6 scopes), a reporting dashboard (4 scopes), and a notification system (5 scopes).

**Walkthrough:**

Each squad updates their hill chart every Monday and Thursday. The head of product checks all three charts on Thursday afternoons, spending about 5 minutes total. In week 3, the payments integration chart shows a concerning pattern: two scopes (Refund Processing and Webhook Handling) are stuck at mid-uphill while the other four have crossed the summit. The head of product messages the squad lead with a specific question: "Refund Processing and Webhook Handling haven't moved in four updates.

" The squad lead explains that both scopes depend on an external payment provider's sandbox environment, which has been unreliable. This surfaces a dependency risk that would not have been visible in a task list. The head of product escalates to the provider relationship, and the team gets a dedicated sandbox within two days. Both dots move past the summit by the end of week 4.

Meanwhile, the reporting dashboard chart shows all four scopes on the downhill side by week 2, which initially seems great but actually signals that the scopes might have been too small or too well-understood, suggesting the project could have been a three-week cycle instead of six. This is useful information for future betting table decisions. The notification system chart shows a healthy stagger: scopes crossing the summit at different times over weeks 2-4, with all scopes reaching the right edge by week 5.

## Example: B2C mobile app team with aggressive three-week cycle

**Scenario:**

A mobile app team of two developers is running a three-week cycle to add a social sharing feature. They have three scopes: Share Sheet Integration, Deep Link Generation, and Share Analytics. The short cycle means any uphill stall is immediately critical.

**Walkthrough:**

With a three-week cycle, the team updates the hill chart daily. On day 1, all three dots are at the far left. By day 3, Share Sheet Integration has moved to mid-uphill because the developers have a working prototype of the native share sheet but are still figuring out how to handle different content types (images, links, text). Deep Link Generation has jumped nearly to the summit because the team found an open-source library that handles the hard parts and they just need to configure it.

Share Analytics is at mid-uphill; they know what events to track but have not resolved which analytics platform to use. On day 5, Share Analytics stalls. The team cannot decide between their existing analytics tool (which has limited event support) and a new tool (which would require an additional SDK and app size increase). This is a classic uphill decision that could consume the rest of the cycle if left unresolved.

The team applies the Shape Up principle of cutting scope: they decide to use the existing analytics tool with limited events for this cycle and defer comprehensive analytics to a future cycle. The dot immediately jumps past the summit. By day 10, all three scopes are on the downhill side. The team ships on day 14, with day 15 reserved for final testing.

The hill chart history shows that the scope-cutting decision on day 5 was the pivotal moment that saved the cycle.

## Example: Non-software team using hill charts for a marketing campaign launch

**Scenario:**

A marketing team of four people is using Shape Up principles to plan a product launch campaign within a six-week cycle. Their scopes are: Launch Landing Page, Email Sequence, Press Outreach, Social Media Assets, and Launch Event Webinar. They have adopted hill charts even though their work is not code.

**Walkthrough:**

The team sets up their hill chart on a shared whiteboard in the office, using colored sticky notes for each scope. At the start of the cycle, Launch Landing Page is immediately at mid-uphill because the messaging framework is still being finalized with the product team. Email Sequence is near the summit because the team has written email sequences before and the content strategy is clear, they just need to write the copy. Press Outreach is at the far left because they have not identified target journalists or determined the angle.

Social Media Assets is at mid-uphill pending final brand guidelines. Launch Event Webinar is near the summit because the format and speakers are already confirmed. By week 2, Press Outreach has not moved. The team lead investigates and learns that the PR person is waiting for the product team to finalize pricing, which is blocking the press angle.

This cross-team dependency was invisible until the hill chart surfaced it. The team lead escalates to the product manager, who commits to finalizing pricing by end of week 2. Press Outreach jumps to the summit on day 15 once pricing is locked and the press angle crystallizes around a competitive pricing story. All scopes reach the downhill side by week 4, and the team uses weeks 5 and 6 for execution and polish.

The hill chart proved especially valuable for surfacing the cross-team dependency on pricing, which could have silently delayed the entire launch.
