# Examples: Detecting and Correcting Cognitive Biases in Orientation

## Churn spike blamed on pricing

**Scenario:**

Illustrative scenario: A subscription product team sees cancellations rise after a price change. The product lead is convinced pricing caused it, and the first dashboard anyone opened showed cancellations clustered right after the change.

**Walkthrough:**

The team writes the favored explanation, pricing drove churn, and notes that the first dashboard is their likely anchor. They list assumptions: the timing is causal, the affected customers saw the new price, and no other change shipped that week. For a disconfirmer, they agree that churn concentrated among customers still on legacy pricing would contradict the pricing story. An analyst who doubted the pricing theory runs the search and finds a large share of cancellations came from legacy-plan customers who never saw the new price.

Setting the first dashboard aside, the team re-reads support tickets and finds complaints about an onboarding change released the same week. The handoff to Decide names two live explanations, onboarding and pricing, and a signal that would separate them.

## Incident response anchored on the first alert

**Scenario:**

Illustrative scenario: An operations team is paged when a database latency alert fires, and within minutes everyone is treating it as a database problem. Later alerts about a network component are read as side effects of the database issue.

**Walkthrough:**

The incident lead pauses and asks each responder to write their current explanation privately. Most say database, but one names the network component. The lead applies the anchoring control: review the later alerts as if the first had never fired. Seen on their own, the network alerts started slightly earlier and cover services that do not touch the database.

The team defines a disconfirmer for the database theory, which is healthy database metrics on a replica serving the affected services, and finds exactly that. The revised interpretation points at the network, with the database kept as a secondary suspect.

## Leadership reading a competitor's move

**Scenario:**

Illustrative scenario: A leadership group learns a competitor has launched a cheaper tier and quickly agrees it is a desperate move by a struggling rival. The meeting reaches consensus without anyone voicing doubt.

**Walkthrough:**

A facilitator notices the speed of agreement and calls for a premortem: assume that in a year this launch has hurt the company badly, and explain how. People write answers individually before sharing. Several describe the cheaper tier pulling in a segment the company has ignored, which contradicts the desperation story. The group assigns a red-team member to build the strongest case that the move is deliberate and well funded.

Stress-testing the assumption that the rival is struggling reveals it rests on old news nobody had rechecked. The interpretation handed to Decide treats the launch as a possible segment play and lists the signals that would confirm or rule it out.
