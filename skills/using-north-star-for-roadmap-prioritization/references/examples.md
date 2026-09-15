# Examples: Using the North Star Metric to Prioritize Your Product Roadmap

## Example: B2B SaaS Collaboration Tool Quarterly Roadmap

**Scenario:**

A project management SaaS has defined its North Star Metric as 'Weekly Active Teams' (teams where 3+ members complete at least one workflow per week). The input metrics are: new team activation rate (weight: 35), workflow completion rate (weight: 40), and team member invitation rate (weight: 25). The product manager has 8 candidate initiatives for Q3 and engineering capacity for roughly 3 medium-sized projects.

**Walkthrough:**

The PM scores all 8 initiatives independently, then reviews with engineering leads. 'Workflow templates library' scores highest on workflow completion (impact: 4, confidence: 75%) and moderate on activation (impact: 2, confidence: 60%). 'Slack integration for task updates' scores high on invitation rate (impact: 3, confidence: 70%) and moderate on workflow completion (impact: 2, confidence: 50%). 'Bulk import from spreadsheets' scores transformative on activation (impact: 5, confidence: 80%) but negligible on other inputs. After weighting: Bulk Import scores 140, Templates scores 155, Slack Integration scores 107. Factoring effort (Bulk Import is L, Templates is M, Slack is M), the efficiency ranking puts Templates first, Slack second, and Bulk Import third. However, the PM reserves one strategic slot for Bulk Import because the activation bottleneck is the biggest constraint—new team activation has been flat for two quarters. Final Q3 roadmap: Templates (reliable), Slack Integration (reliable), Bulk Import (strategic bet).

## Example: Consumer Education App Prioritizing Growth Experiments

**Scenario:**

A language learning app uses 'Weekly Active Learners who complete 3+ lessons' as its North Star. Input metrics are: new learner first-lesson completion (weight: 30), daily lesson streak retention (weight: 45), and content diversity engagement (weight: 25). The product manager has 12 experiments proposed by the growth and content teams, with capacity for 5 in the next sprint cycle.

**Walkthrough:**

The team runs independent scoring sessions. 'Push notification optimization' scores impact: 3 on streak retention (confidence: 85%) and impact: 1 on first-lesson completion (confidence: 60%)—weighted total: 136. 'Personalized difficulty adjustment' scores impact: 4 on streak retention (confidence: 40%) and impact: 2 on content diversity (confidence: 50%)—weighted total: 97. Despite a higher raw potential, personalized difficulty scores lower because confidence is weak. The PM selects push notifications (high confidence, high efficiency), two other validated experiments, and then allocates 2 of the 5 slots to run small-scale validation tests for personalized difficulty and one other low-confidence/high-potential idea. This split ensures the sprint delivers measurable North Star movement while also generating the data needed to score next sprint's initiatives with higher confidence.

## Example: E-Commerce Marketplace Handling Stakeholder Conflict

**Scenario:**

A marketplace platform's North Star is 'Weekly Successful Transactions.' Input metrics are: seller listing quality (weight: 25), buyer search-to-purchase conversion (weight: 45), and repeat purchase rate (weight: 30). The VP of Sales is pushing hard for a 'Seller CRM Dashboard' while the product manager's scoring model ranks it 6th out of 10 initiatives. This creates a product manager roadmap conflict that needs resolution.

**Walkthrough:**

The PM presents the scoring model transparently in the prioritization review. Seller CRM Dashboard scores impact: 2 on listing quality (confidence: 50%) and impact: 1 on repeat purchase (confidence: 30%)—weighted total: 34. The top-ranked initiative, 'AI-powered search relevance,' scores impact: 5 on buyer conversion (confidence: 70%) with a weighted total of 158. The VP of Sales argues the CRM will improve seller satisfaction and reduce churn. The PM asks: 'Which input metric weight or impact score would you change?' The VP suggests listing quality weight should be higher. The team reviews data and finds that seller churn is actually low (4% annually) while buyer conversion has dropped 12% quarter-over-quarter. The data confirms conversion is the binding constraint. The compromise: AI search takes the top slot, and the PM commits to a lightweight seller satisfaction survey to gather data that would increase the CRM's confidence scores for future quarters. The structured model turned a political debate into a data conversation.
