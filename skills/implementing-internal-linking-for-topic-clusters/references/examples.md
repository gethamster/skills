# Examples: Implementing Internal Linking Structures Across Topic Clusters

## Rewiring a blog into clusters

**Scenario:**

Illustrative scenario: a software company has 120 blog posts linked only by date archives and tags, grouped on paper into 8 clusters but not connected as such.

**Walkthrough:**

The team exports all 120 URLs into a sheet with cluster and role columns. A crawl shows 30 posts receive no body links at all. For each of the 8 clusters they pick a hub, rewriting 2 thin candidates into proper overview pages. They add hub-to-spoke and spoke-to-hub links, then 2 or 3 contextual sibling links per post based on the likely next question.

A follow-up crawl shows zero orphans and every hub linking to all of its spokes. The team then records the pattern as an editorial rule for all new posts.

## Linking templated location pages

**Scenario:**

Illustrative scenario: a services marketplace generates 500 city pages from one template, grouped under 10 regional hubs.

**Walkthrough:**

The team adds three slots to the template: a breadcrumb to the regional hub, a block of 5 nearby-city links from the same region, and an optional slot for one approved link to a service guide in another cluster. Each regional hub lists and links all its city pages with a one-line description each. Anchors use the city and service name rather than a generic phrase. Before rollout they test the template on 20 pages and crawl them to confirm the links render.

After launch, crawls confirm every city page is reachable from its hub. Because long-tail city queries are sampled in Search Console, the team tracks indexed page counts alongside clicks.

## Adding a cross-cluster journey

**Scenario:**

Illustrative scenario: a project tool site has a cluster on sprint planning and a separate cluster on estimation, each with about 15 pages.

**Walkthrough:**

Readers of the sprint planning how-to repeatedly ask how to size the work, which the estimation cluster answers. The team approves one cross-cluster link from the sprint planning how-to to the estimation hub, recording the reason in the link plan. They reject 6 other proposed links that only shared the word "backlog". The anchor names the destination topic, estimating backlog items, inside the paragraph where sizing first comes up.

The estimation hub gets a reciprocal contextual link back to sprint planning. Both clusters keep their own hubs and internal structure intact.
