# Examples: Executing Actions with Implicit Guidance and Control

## Product team responding to a competitor launch

**Scenario:**

A product team sees a competitor ship a feature that overlaps with their roadmap and needs to respond without derailing current work.

**Walkthrough:**

Illustrative scenario: the team already keeps a small repertoire of competitive plays, such as a targeted message to affected customers, a pricing adjustment and an accelerated minor release. Because the situation matches a known pattern and every play is reversible, the product lead runs the customer message play implicitly the same day. She writes down the expectation that support tickets asking about the competitor will fall within two weeks, and puts the check on her calendar. The accelerated release is irreversible in effect on the roadmap, so it goes through an explicit decision at the next planning session.

When the tickets do not fall, the team treats that as evidence its orientation was off and interviews customers before choosing a further move.

## On-call engineer handling a familiar incident

**Scenario:**

An on-call engineer receives an alert for a failure mode the team has seen several times before.

**Walkthrough:**

Illustrative scenario: the team's runbook contains a named play for this alert, with its trigger, the rollback action and the metric that should recover. The engineer recognises the pattern and runs the rollback immediately, without waiting for a group discussion, because the play is rehearsed and reversible. She notes that error rates should return to normal within ten minutes. They do not, which tells her the situation only resembled the familiar one.

She switches to the explicit route, pulls in a second engineer and investigates. At the next review, the team adds a distinguishing check to the play's trigger so the implicit path fires only when it truly fits.

## Account manager in a contract renewal

**Scenario:**

An account manager negotiates renewals with a large customer whose procurement team has studied the vendor's past tactics.

**Walkthrough:**

Illustrative scenario: in previous years the account manager always opened with a discount offer in the final week, and procurement had learned to wait for it. This year she prepares three equivalent plays: a multi-year option, an added service tier and an early-commitment incentive. She opens early with the added service tier, which procurement has not seen before. Her stated test is whether the conversation moves to scope rather than price within the first meeting.

It does, so she stays on that play and holds the discount in reserve, recording what worked for the next cycle.
