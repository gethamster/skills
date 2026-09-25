# Examples: Kanban Flow Metrics

## A mobile app team sets its first SLE

**Scenario:**

Illustrative scenario: a five-person team building a mobile app has used a kanban board for two months without measuring anything. Stakeholders keep asking when features will be ready.

**Walkthrough:**

The team agrees that an item starts when it is pulled from Ready and finishes when it is released. Their tool already records these dates, so they export the last forty finished items. Cycle times range from one day to twenty-two days, with most finishing within nine.

They plot a scatterplot, draw a line where roughly four in five items fall below it, and adopt that as a first SLE: most items finish within nine days. At the daily meeting they now show each item's age, and anything older than seven days gets discussed first. Stakeholders get a forecast with a stated probability instead of a guess.

## A platform team reads its cumulative flow diagram

**Scenario:**

Illustrative scenario: a platform team feels busier than ever, but finished work seems to have slowed. Nobody agrees on why.

**Walkthrough:**

The team builds a cumulative flow diagram from its board history. The Done band has flattened for three weeks, while the Code Review band has widened steadily. Arrivals into the board have not changed.

The pattern points at review as the bottleneck. The team lowers the WIP limit on In Progress, so developers finishing work review before starting more, and adds a policy that reviews of items older than five days come first. Over the next few weeks the Code Review band narrows and the Done line starts rising again.

## A content team compares work types

**Scenario:**

Illustrative scenario: a small agency content team produces blog posts and client reports on one board. Clients complain that reports are slow, but the team's average cycle time looks fine.

**Walkthrough:**

The team splits the cycle time data by work type. Blog posts finish quickly and consistently, while reports have a long tail driven by waiting for client data. The single average was hiding the problem.

They add a "Waiting on client" column so the delay shows on the board, and start the clock for reports only once client data has arrived, recording the waiting time separately as customer lead time. The two numbers let them show clients how much of the delay sits on the client's side.
