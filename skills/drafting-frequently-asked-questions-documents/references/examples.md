# Examples: Drafting the FAQ Section of a PR/FAQ Document

## Example: B2B SaaS analytics dashboard for mid-market sales teams

**Scenario:**

A product manager at a 200-person SaaS company is proposing a new analytics dashboard that helps sales managers identify at-risk deals. The press release promises real-time pipeline visibility, AI-powered risk scoring, and integration with Salesforce and HubSpot. The team is 4 engineers and 1 designer. Timeline pressure is high because a competitor launched a similar feature two months ago.

**Walkthrough:**

' (Answer: 'The score uses deal velocity, engagement recency, and historical win-rate patterns. In our beta test with 3 sales teams, it correctly flagged 72% of deals that eventually closed-lost. Assumption: this accuracy holds across different sales cycles. ' (Answer: 'Salesforce integration requires admin-level API access and takes 15-30 minutes.

HubSpot integration is OAuth-based and takes under 5 minutes. ' (Answer: 'Assumption: $2,400/month for streaming infrastructure at current projected scale. This triples if we exceed 500 concurrent dashboard users. ') The final FAQ contains 14 external and 16 internal questions.

During review, the engineering lead added three questions about data latency guarantees, and the finance partner challenged the $2,400/month infrastructure estimate, leading the PM to revise it upward to $3,800/month after deeper analysis.

## Example: Consumer mobile app for meal planning at a 10-person startup

**Scenario:**

A small startup is pitching a meal planning app that generates weekly grocery lists based on dietary preferences, budget, and local store inventory. The team consists of 2 developers, 1 designer, and the founder/PM. They plan to raise seed funding and need the PR/FAQ to serve double duty as an investor communication tool. Budget for external research is minimal.

**Walkthrough:**

The founder writes external questions from the perspective of a busy parent who currently uses pen-and-paper lists. ' (Answer: 'At launch, the app supports one primary store per week. We chose this constraint to keep the grocery list accurate, since prices and availability differ between stores. Multi-store support is planned for v2, estimated 3 months post-launch.

' (Answer: 'Free for up to 2 meal plans per week. 99/month for unlimited plans, dietary filters, and budget optimization. ') For internal FAQs, the founder writes questions an investor would ask. 99/month requires 167,000 free users.

Our user acquisition plan relies on SEO content targeting meal planning keywords and TikTok recipe content. We have no paid acquisition budget at launch. ' (Answer: 'ChatGPT generates one-off meal suggestions but does not track pantry inventory, store-specific pricing, or dietary history across weeks. Our value is the system, not the single suggestion.

') The final document has 12 external and 11 internal questions. The investor-oriented internal questions proved especially useful during pitch meetings, where investors asked nearly identical questions.

## Example: Internal platform tool at a large enterprise

**Scenario:**

A platform engineering PM at a 5,000-person financial services company is proposing an internal developer portal that standardizes service creation, monitoring, and documentation. The audience for the PR/FAQ is the CTO and VP of Engineering. There are no external customers. The development team would be 8 engineers over 12 months.

The company has attempted similar initiatives twice before, both of which stalled after 6 months.

**Walkthrough:**

Since there are no external customers, the PM adapts the external FAQ to represent 'internal customers,' which in this case are the 400 software developers who would use the portal. ' (Answer: 'No. The portal integrates with your existing Jenkins, GitHub Actions, or GitLab CI pipelines via a plugin model. Initial setup requires adding a 15-line YAML configuration to your repo.

' (Answer: 'Existing services can be imported into the portal via an automated discovery scan. The scan identifies services registered in our service mesh and creates portal entries with pre-populated metadata. ') For the true internal FAQ, the PM focuses heavily on why this attempt will succeed when two prior attempts failed. ' (Answer: 'Both prior attempts failed due to scope creep: the 2021 attempt tried to replace CI/CD tooling, and the 2023 attempt tried to enforce a single programming language.

This proposal explicitly excludes both. Our scope is limited to service cataloging, health dashboards, and documentation generation. ') The FAQ contains 11 internal-customer questions and 18 stakeholder questions, with 5 questions specifically addressing lessons from prior failures. The CTO approved the initiative largely because the FAQ demonstrated that the team had studied the failure modes of the previous two attempts.

## Example: Using FAQ skills to prepare for product manager interview questions

**Scenario:**

A senior PM preparing for interviews at a top-tier tech company practices the FAQ-drafting skill as a way to demonstrate structured thinking during case study rounds. The interviewer presents a hypothetical product concept and asks the candidate to identify the key risks and open questions.

**Walkthrough:**

The candidate receives a prompt: 'Imagine we are launching a feature that lets users schedule messages in our chat app. ' Rather than jumping to solutions, the candidate applies FAQ thinking by generating questions in two categories. For customer-facing questions, she asks: 'What happens if the recipient's time zone changes between scheduling and delivery? What if the sender wants to edit a scheduled message?

' For internal questions, she asks: 'What is the expected load on our message queue if 5% of daily messages are scheduled? Do we have regulatory obligations to store scheduled messages differently since they represent intent to communicate at a future time? ' The interviewer notes that these product manager interview questions demonstrate exactly the depth of thinking they want to see: the candidate identified customer experience gaps, technical infrastructure risks, and regulatory considerations without being prompted. The candidate explains that she developed this skill by drafting FAQ sections for PR/FAQ documents using the Working Backwards framework, which trained her to systematically decompose product proposals into assumption-testing questions.

This approach to framing product manager interview questions as FAQ-style interrogation stood out because it was structured, comprehensive, and demonstrated genuine product judgment rather than rehearsed frameworks.
