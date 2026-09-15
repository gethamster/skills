# FAQ: Managing and Refining a Product Backlog

## How many items should a healthy product backlog contain?

For a single team, aim for 40-80 items total. This is enough to provide several sprints of runway without becoming overwhelming. If your backlog exceeds 150 items, schedule a pruning session. Items that have sat untouched for 6+ months are almost certainly not important enough to maintain.

A bloated backlog creates cognitive overhead, makes prioritization harder, and gives the false impression that every idea is being tracked and will eventually be built.

## How often should backlog refinement happen?

Most teams benefit from one or two refinement sessions per week, totaling 60-90 minutes. The goal is to keep 1.5-2 sprints worth of items fully refined at all times. If your sprint planning sessions frequently devolve into scope discussions and story-writing, you are not refining enough. If your team is spending more than 10% of their sprint capacity on refinement, you may be over-refining or refining items too far down in the backlog.

## Should I manage the backlog before or after sprint planning?

Refinement should happen continuously between sprint planning sessions, not during them. Sprint planning assumes the top of the backlog is already refined and estimated. The planning session is for selecting which refined items to commit to and discussing implementation approach, not for writing stories or debating acceptance criteria. If you find yourself doing refinement work during planning, shift that work to dedicated refinement sessions earlier in the sprint.

See [running sprint planning](https://tryhamster.com/skills/running-sprint-planning-and-execution) for how these ceremonies connect.

## How do I handle conflicting priorities from multiple stakeholders?

Use a transparent scoring model like WSJF (Weighted Shortest Job First) that evaluates each item on objective dimensions: business value, time criticality, risk reduction, and effort. Publish the scores and the resulting order so stakeholders can see the reasoning behind priority decisions. When a stakeholder disagrees with an item's position, the conversation shifts from 'my feature is more important' to 'I believe the business value score should be higher because of these specific reasons.' This does not eliminate conflict, but it moves it from political lobbying to evidence-based discussion.

## Why does my backlog keep growing faster than the team can deliver?

This is almost always an intake problem, not a delivery problem. Every stakeholder, customer, and team member can add items, but only the development team can remove them through completion. Implement intake discipline: require every new item to include a user story, a rough value assessment, and a requesting source before it enters the backlog. Hold a weekly triage where the product owner reviews new additions and either accepts them into the ordered backlog or parks them in an icebox for quarterly review.

Also verify that you are pruning regularly. Closing stale items is not admitting defeat. It is maintaining a usable planning tool.

## How do I split a user story that feels too big but I cannot see how to break it down?

Apply one of these splitting patterns: split by workflow step (registration vs. login vs. password reset), split by data type or input method (manual entry vs. CSV upload vs.

API sync), split by user role (admin view vs. end-user view), split by business rule (basic pricing vs. discount pricing vs. bulk pricing), or split by happy path vs.

edge cases (build the core flow first, handle errors in a follow-up story). The test for a good split is that each resulting story delivers independently demonstrable value and can be shipped without the other stories being done.

## Should I use story points, t-shirt sizes, or something else for estimation?

Both story points and t-shirt sizes work well because they enforce relative sizing rather than absolute time predictions. Story points (Fibonacci: 1, 2, 3, 5, 8, 13) provide more granularity and make velocity calculation straightforward. T-shirt sizes (XS, S, M, L, XL) are simpler for teams new to estimation and reduce arguments about the difference between a 3 and a 5. The method matters less than consistency.

Pick one approach, use it for at least 5 sprints to establish a baseline velocity, and do not switch unless you have a clear reason. The worst approach is estimating in hours, because it creates a false sense of precision and invites micromanagement.
