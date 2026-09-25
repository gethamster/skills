# Examples: Validating Impact Map Assumptions with Experiments

## Testing a deliverable with a manual version

**Scenario:**

Illustrative scenario: an accounting software company's map links the goal of reducing churn among small firms to the impact "firm owners reconcile their accounts every month". The proposed deliverable is an automated reconciliation assistant that would take a quarter to build.

**Walkthrough:**

The team writes both assumptions. The deliverable assumption is that owners given help with reconciliation will do it monthly. The impact assumption is that owners who reconcile monthly churn less. Existing data already shows that monthly reconcilers renew more often, so the team treats the impact assumption as reasonably supported and focuses on the deliverable.

Instead of building the assistant, support staff offer a short monthly reconciliation call to a small group of owners who have not reconciled recently. The agreed threshold is that at least half should reconcile in the following month. Fewer do, and the calls reveal that owners do not know which transactions need attention. The team drops the assistant as designed, and adds a simpler deliverable, a monthly list of unmatched transactions, to test next.

## Finding that a behavior change does not move the goal

**Scenario:**

Illustrative scenario: a news subscription service's map says that getting readers to follow topics will increase renewals. A topic-follow feature ships to a portion of readers, and many of them follow topics.

**Walkthrough:**

The deliverable assumption holds: the behavior changed well above the threshold. The team then checks the impact assumption by comparing renewal rates for readers who followed topics with similar readers who did not, over the renewal period agreed in advance.

Renewals are no different. Following the decision rule, the team marks the branch as refuted at the impact link, notes that following topics did not affect renewals for this audience, and moves effort to the next ranked impact, readers returning several times a week. The feature stays in the product, but it no longer counts as progress toward the renewal goal.

## Choosing a test when releases are slow

**Scenario:**

Illustrative scenario: a medical device maker wants clinicians to record patient readings in the device's companion app instead of on paper. Releases to hospitals take many months, so shipping and measuring is not a practical test.

**Walkthrough:**

The team uses the map to plan research instead. It builds a clickable prototype of the recording flow and tests it with a few clinicians in a simulated ward setting, measuring whether they complete recordings in the app without falling back to paper.

The first round shows clinicians abandoning the app when a reading has to be corrected. The team revises the prototype and tests again, and the second round meets the agreed threshold. Only then does the deliverable go on the release roadmap, with the research results attached to its branch on the map.
