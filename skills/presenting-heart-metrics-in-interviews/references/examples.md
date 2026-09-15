# Examples: Presenting HEART Metrics in Product Manager Interviews

## Example: "How would you measure success for a new mobile checkout flow?"

**Scenario:**

You're in a PM interview at an e-commerce company. The interviewer asks how you'd define and measure success for a redesigned mobile checkout experience that aims to reduce cart abandonment.

**Walkthrough:**

**Opening**: "I'd use the HEART framework to ensure we're measuring the full user experience, not just the conversion funnel. For a checkout redesign, I'd prioritize three dimensions: Task Success, Happiness, and Retention."

**Task Success (primary)**: "The core goal is for users to complete their purchase without friction. The signal is users progressing through each checkout step without errors, drop-offs, or backward navigation. The metric I'd track is end-to-end checkout completion rate, measured as the percentage of users who enter checkout and successfully place an order, segmented by device type and payment method. I'd also measure time-to-completion as a secondary Task Success metric."

**Happiness**: "Our goal is that users feel confident during checkout—no confusion, no anxiety about payment security. The signal would be post-purchase satisfaction responses. The metric would be a 1-5 satisfaction rating triggered immediately after order confirmation, targeting a 4.2+ average within the first month."

**Retention (downstream)**: "If the checkout experience is genuinely better, we should see returning purchase behavior improve. The signal is repeat purchases. The metric is 30-day repeat purchase rate for users who experienced the new checkout versus a control group."

**Business bridge**: "Task Success directly impacts revenue per session. The Happiness metric serves as a leading indicator of NPS and word-of-mouth referrals. And the Retention metric directly maps to customer lifetime value."

**Deprioritization**: "I'd deprioritize Engagement and Adoption here. Checkout isn't a feature you want users to 'engage' with longer—the goal is efficiency. Adoption is less relevant since all users funnel through checkout; there's no opt-in behavior to measure."

## Example: "Our DAU dropped 15% this quarter. How would you investigate?"

**Scenario:**

A diagnostic interview question at a B2B SaaS company. The product is a project management tool, and the interviewer wants to see how you'd use metrics to identify the root cause of declining daily active users.

**Walkthrough:**

**Opening**: "A DAU drop is a compound problem—it could be driven by acquisition, activation, or retention issues. I'd use the HEART framework to systematically decompose the drop across user experience dimensions rather than guessing at a single cause."

**Adoption**: "First, I'd check if the drop is driven by fewer new users activating. Goal: new users should complete their first project within 48 hours of signup. Signal: first-project creation events. Metric: 48-hour activation rate by signup cohort. If this metric declined, the issue is upstream—possibly an onboarding change or a shift in acquisition channel quality."

**Retention**: "Next, I'd look at whether existing users are churning faster. Goal: established users should return daily for core workflows. Signal: login and task-completion events from users with 30+ days tenure. Metric: Day-7 and Day-30 retention rates by monthly cohort. If retention dropped for recent cohorts but not older ones, it might point to a product change that affected newer users differently."

**Engagement**: "Even among active users, engagement depth might have declined. Goal: users should use collaboration features, not just passive viewing. Signal: actions like assigning tasks, commenting, and updating statuses. Metric: average meaningful actions per DAU per day. A drop here suggests the product is becoming less sticky even for users who still show up."

**Diagnostic summary**: "By layering these three HEART dimensions—Adoption, Retention, and Engagement—I can isolate whether the DAU drop is a top-of-funnel problem, a churn problem, or a depth-of-usage problem. Each diagnosis leads to a different product intervention."

**Follow-up readiness**: "If the interviewer asks how I'd act on findings, I'd propose cohort-specific A/B tests targeting the weakest HEART dimension, with guardrail metrics from the other dimensions to ensure we don't solve one problem while creating another."

## Example: "What metrics would you use for a new AI-powered feature?"

**Scenario:**

You're interviewing for a PM role at a productivity app. They've just launched an AI writing assistant feature and want to know how you'd measure whether it's working.

**Walkthrough:**

**Opening**: "For a new AI feature, I need to measure both whether users adopt it and whether it actually improves their experience. I'd focus on three HEART dimensions: Adoption, Task Success, and Happiness—in that order of priority for a newly launched feature."

**Adoption**: "Goal: target users should discover and try the AI assistant within their first week. Signal: first invocation of the AI assistant per user. Metric: 7-day adoption rate—the percentage of eligible users who use the AI assistant at least once within 7 days of its availability to them. I'd segment by user persona (heavy writers vs. occasional writers) since adoption drivers differ."

**Task Success**: "Goal: the AI assistant should help users complete writing tasks faster without sacrificing quality. Signal: acceptance rate of AI suggestions and time spent on writing tasks. Metrics: suggestion acceptance rate (percentage of AI outputs the user keeps or edits rather than dismisses) and median time-to-completion for writing tasks, comparing AI-assisted versus unassisted sessions. A low acceptance rate would signal the AI output quality isn't meeting user expectations."

**Happiness**: "Goal: users should feel the AI is helpful, not intrusive. Signal: explicit feedback and continued voluntary use. Metric: thumbs-up/thumbs-down ratio on AI suggestions, plus a monthly in-app survey asking 'How helpful is the AI writing assistant?' on a 5-point scale."

**Counter-metric**: "I'd add a Retention guardrail: if Adoption is high but 30-day feature retention drops off, it means users try the AI but don't find sustained value—a novelty effect rather than genuine product-market fit for the feature."

**Business bridge**: "Adoption of AI features drives differentiation from competitors and supports premium tier upgrades. Task Success improvements translate to time savings that users cite in renewal decisions."
