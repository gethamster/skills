# Examples: Measuring Kanban Flow Metrics

## Example: Small startup product team (5 people, B2C mobile app)

**Scenario:**

A five-person startup team builds a consumer mobile app. They adopted a kanban board three months ago but have never tracked metrics. The CEO keeps asking when features will ship, and the team keeps missing informal estimates. The board has four columns: Backlog, In Dev, In Review, and Released. They deliver roughly 4-10 items per week with high variability.

**Walkthrough:**

The team enables column-change timestamps in their tool and waits two weeks to collect clean data. They export 35 completed items and compute cycle time for each. The scatter plot reveals a bimodal distribution: 60% of items finish in 1-3 days, but 40% take 8-15 days. The 85th percentile cycle time is 12 days.

Drilling into the slow items, they find that 90% of them spent 5+ days in the 'In Review' column because the single senior engineer was the bottleneck reviewer. The CFD confirms a steadily widening 'In Review' band. The team responds by cross-training a second reviewer and lowering the In Review WIP limit from 5 to 2, which forces items to be reviewed before new ones can enter. Four weeks later, the 85th percentile cycle time drops to 6 days and throughput stabilizes at 7-9 items per week.

## Example: Enterprise platform team (12 people, B2B SaaS)

**Scenario:**

A 12-person platform engineering team at a B2B SaaS company delivers infrastructure changes that other product teams depend on. Their board has six columns: Requested, Triaged, In Progress, Code Review, Staging, and Deployed. Lead time is a major pain point because internal customers submit requests and wait weeks with no visibility. The team delivers 3-6 items per week.

**Walkthrough:**

The team sets their measurement boundaries: lead time runs from Requested to Deployed, cycle time from Triaged (commitment point) to Deployed. They pull eight weeks of historical data, computing both metrics for 38 completed items. Average lead time is 18 days, but average cycle time is only 7 days. The 11-day gap is pure wait time in the Requested column before triage.

The CFD shows the Requested band growing steadily, confirming that requests arrive faster than the team triages them. Throughput is stable at about 5 items per week. The team implements a weekly replenishment cadence where they triage and commit to new items every Monday, pulling the top-priority items into Triaged up to their WIP limit. They also publish a simple dashboard to internal customers showing current lead time percentiles.

After six weeks, lead time drops to 11 days (the 85th percentile) because the triage wait shrinks from 11 days to 4. Cycle time stays at 7 days. ' messages.

## Example: Marketing content team (4 people, agency)

**Scenario:**

A four-person content marketing team at an agency manages client deliverables on a kanban board. Columns are: Brief Received, Writing, Editing, Client Review, and Published. The team juggles 6-8 clients and struggles with unpredictable delivery. Some articles take 3 days, others take 3 weeks, and neither the team nor clients understand why.

**Walkthrough:**

The team starts logging timestamps per column transition in a shared spreadsheet. After three weeks, they have data on 22 completed articles. The cycle time scatter plot shows a clear pattern: articles where the client review stage exceeds 5 days account for nearly all of the outliers above the 85th percentile (14 days). The CFD confirms that Client Review is the widening band.

Throughput is 4-7 articles per week when client reviews come back quickly, but drops to 2-3 when reviews stall. The team cannot control client response time, but they can make it visible. They add a policy: if client review exceeds 3 business days, the item is flagged as blocked and the account manager follows up. They also set a WIP limit of 3 items in Client Review per client.

' Clients who care about speed start prioritizing their reviews.

## Example: Large cross-functional product squad (8 people, fintech)

**Scenario:**

An eight-person product squad at a fintech company includes engineers, a designer, and a product manager. They use kanban methodology with a board that has columns for Discovery, Design, Development, QA, and Release. The squad has been running kanban for six months and already tracks basic throughput, but they have never built a CFD or analyzed percentiles. Stakeholders want more predictable quarterly roadmap commitments.

**Walkthrough:**

The squad exports six months of completed item data from their tool, yielding 142 items. They compute cycle time percentiles: 50th at 4 days, 85th at 11 days, 95th at 23 days. The gap between 85th and 95th is alarming, so they investigate the 95th-percentile items. All but two involved a handoff stall between Design and Development, where items sat in a 'Ready for Dev' queue.

Building the CFD confirms this: the Design-to-Development transition band has been slowly widening for months. The squad responds by eliminating the 'Ready for Dev' queue entirely and moving to a pairing model where a developer joins the last day of design to prepare for handoff. They also use throughput data (averaging 6 items per week with a range of 4-8) to forecast quarterly commitments probabilistically. ' After one quarter with the new handoff model, the 95th percentile cycle time drops from 23 to 14 days, and the throughput range tightens to 5-8 items per week.
