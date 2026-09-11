# Examples: Organizing Squads into Tribes for Strategic Alignment

## Example: B2B SaaS company with 12 squads and 95 engineers

**Scenario:**

A project management SaaS company has 12 squads covering features like task management, time tracking, resource planning, reporting, integrations, billing, and internal platform. The company has 95 engineers plus 25 product and design staff across all squads. Coordination problems are surfacing weekly, especially between squads working on reporting and the squads whose features generate the data being reported on.

**Walkthrough:**

The team maps dependencies and finds three natural clusters. Cluster one: task management, resource planning, and time tracking squads, which share a core data model and frequently need to coordinate on schema changes. Cluster two: reporting, dashboards, and analytics squads, which consume data from cluster one but coordinate heavily with each other on shared visualization components. Cluster three: integrations, billing, platform, and authentication squads, which share infrastructure concerns and rarely interact with the product-facing clusters.

They form three tribes: 'Work Management' (4 squads, ~45 people), 'Insights' (3 squads, ~35 people), and 'Platform & Growth' (5 squads, ~40 people). Each tribe gets a tribe lead appointed from the most senior product-oriented leader in each cluster. The critical cross-tribe interface, data flowing from Work Management squads to Insights squads, is documented with a clear data contract and a named point of contact on each side. Tribe gatherings are set to monthly, tribe lead syncs to biweekly.

After two months, the weekly cross-squad escalations drop from roughly 8 per week to 2, because most coordination now happens within-tribe through informal channels and tribe rituals.

## Example: E-commerce company splitting an oversized tribe

**Scenario:**

An e-commerce company's 'Buyer Experience' tribe has grown to 140 people across 14 squads as the company expanded its product line. Tribe gatherings have become 90-minute status readouts. The tribe lead cannot track dependencies across all 14 squads and has started missing conflicts that surface during sprint reviews. Cross-squad frustration is rising.

**Walkthrough:**

The tribe lead and VP of Engineering run the dependency mapping exercise and find a natural seam: squads working on search, browsing, and product discovery have tight internal dependencies but limited interaction with squads working on cart, checkout, and post-purchase experience. They split into two tribes: 'Discovery' (7 squads, ~70 people) covering search, browse, recommendations, and product pages, and 'Purchase' (7 squads, ~70 people) covering cart, checkout, payment, shipping, and returns. The primary cross-tribe interface is the 'add to cart' action, which sits at the boundary between discovering a product and purchasing it. They define a clear API contract and designate one squad in each tribe as the owner of their side of the interface.

Two new tribe leads are appointed, one promoted from within each cluster. The original tribe lead takes the Purchase tribe and mentors the new Discovery tribe lead for the first quarter. Within six weeks, tribe gathering attendance improves from 40% to 85% because the sessions are smaller, more relevant, and more interactive.

## Example: Startup forming its first tribes at 8 squads

**Scenario:**

A 60-person fintech startup has been running with 8 autonomous squads and no formal grouping structure. As the company grows, the CEO notices that the lending squads and the savings squads are making conflicting decisions about the shared customer identity system. The two groups also interpret the company's risk appetite differently, leading to inconsistent customer experiences.

**Walkthrough:**

The startup is small enough that a single tribe would technically work (60 people is well under 100), but the two product areas have genuinely different strategic priorities and customer segments. They form two tribes: 'Lending' (3 squads, ~25 people) and 'Savings & Investing' (3 squads, ~20 people). The remaining 2 squads, identity and platform, are kept in a lightweight 'Foundation' tribe (~15 people) with clear SLAs to the product tribes rather than a full tribe mission. Each product tribe gets a tribe lead who owns the strategic roadmap for their area.

The Foundation tribe lead focuses on internal service quality rather than external outcomes. The key cross-tribe interface, customer identity, is governed by a shared technical standard that all three tribes ratify, with changes requiring sign-off from at least two tribe leads. This is intentionally high-friction because identity changes affect every product. The startup also decides that tribe gatherings are overkill at this size and instead runs a single all-hands demo every two weeks, with tribe-level planning happening in lightweight biweekly syncs.

The approach scales naturally: as each product tribe grows, it can adopt fuller tribe rituals without changing the overall structure.

## Example: Distributed company designing tribes across time zones

**Scenario:**

A 200-person developer tools company has squads distributed across San Francisco, Berlin, and Singapore. They are forming tribes for the first time and wrestling with whether to organize by product area (which would create tribes spanning three time zones) or by geography (which would keep tribes co-located but break product area cohesion).

**Walkthrough:**

They map dependencies and find that most squads interact primarily with other squads working on the same product area, regardless of location. A Berlin-based squad working on the CLI tool coordinates daily with a San Francisco-based squad working on the CLI's plugin system, but rarely with the Berlin-based squad working on the web dashboard. They decide to organize tribes by product area, accepting the time zone challenge, because the alternative (geographic tribes) would force constant cross-tribe coordination on every product decision. To mitigate the time zone friction, each tribe establishes a 4-hour overlap window (8 AM-12 PM Pacific / 5 PM-9 PM Berlin) for synchronous tribe rituals.

Tribe gatherings rotate between two time slots each month, so no single time zone always takes the inconvenient slot. Async communication becomes a first-class ritual: each squad posts a weekly written update in a shared tribe channel, and the tribe lead publishes a biweekly written summary of priorities and decisions. The tribe lead role is assigned to someone in the time zone with the most squads in that tribe, but with an explicit deputy in another time zone who can handle escalations during off-hours. After one quarter, they survey squad members and find that 78% prefer the product-aligned structure over the geographic alternative, despite the time zone cost.
