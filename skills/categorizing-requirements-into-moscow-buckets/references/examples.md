# Examples: Categorizing Requirements into Must, Should, Could, and Won't Have

## Example: E-Commerce MVP Launch

**Scenario:**

A startup is building an online marketplace for handmade goods. They have 30 requirements and need to launch in 8 weeks with a small engineering team. Stakeholders disagree on what's essential — the CEO wants social sharing, the CTO wants a recommendation engine, and the compliance officer needs GDPR consent flows.

**Walkthrough:**

The team applies the must have, should have, could have, and won't have framework systematically.

**Must haves** (launch fails without these): User registration and authentication, product listing and search, shopping cart and checkout, payment processing integration, GDPR consent and data handling (legal obligation), basic seller dashboard for order management. These represent about 55% of estimated effort.

**Should haves** (important, workaround exists): Email order notifications (workaround: sellers check dashboard manually), product reviews and ratings (workaround: launch without social proof initially), basic analytics dashboard for sellers, mobile-responsive design for top 3 screen sizes.

**Could haves** (nice enhancements): Social media sharing buttons, wishlist functionality, advanced search filters (by material, color, price range), seller promotional tools.

**Won't haves (this time)**: AI-powered recommendation engine (requires significant data first), native mobile app, multi-currency support (launching in one country only), seller subscription tiers.

The CEO's social sharing request lands in could have — users can still share URLs manually. The CTO's recommendation engine is a won't have because it needs purchase data that doesn't exist yet. The compliance officer's GDPR requirement is a clear must have. Each decision is documented with rationale and shared with all stakeholders.

## Example: Internal HR Platform Quarterly Release

**Scenario:**

A mid-size company's HR team is planning the next quarterly release of their internal employee management platform. They've collected 18 feature requests from HR managers, employees, and the legal department. The development team has capacity for approximately 12 weeks of work.

**Walkthrough:**

The product owner facilitates categorization using the must have, should have, could have, and won't have criteria with HR leadership.

**Must haves**: Updated tax withholding calculations (legal deadline in 6 weeks — regulatory must have), single sign-on integration with new corporate identity provider (current auth system being decommissioned — technical must have), annual review form builder for upcoming review cycle (process fails without it). Estimated effort: ~7 weeks (58% of capacity).

**Should haves**: Improved PTO request workflow (current process works but generates 40+ support tickets/month — high pain, workaround exists), manager dashboard showing team capacity, bulk employee import for upcoming acquisition integration.

**Could haves**: Employee self-service profile photo upload, org chart visualization, Slack integration for approval notifications.

**Won't haves (this time)**: AI-assisted job description generator, 360-degree feedback module (planned for Q3 after vendor evaluation), employee sentiment survey tool.

The tax calculation update, while unglamorous, is a clear must have due to legal obligation. The PTO workflow improvement is the most-requested feature but gets categorized as should have because the current workflow functions — it's just painful. The team commits to delivering it immediately after must haves.
