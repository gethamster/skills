# Examples: Scaling Agile with Spotify Squads and Tribes

## Growing from one tribe to three

**Scenario:**

Illustrative scenario: a company's single tribe has grown from four squads to eleven over a year of hiring. Its gathering is crowded, and the dependency survey shows cross-squad blocking rising each quarter.

**Walkthrough:**

The team checks its published thresholds: the tribe is past its size cap, and blocking dependencies have crossed the level that triggers a boundary review. The dependency data shows three clusters: consumer apps, merchant tools and payments infrastructure. Payments is used by both others, so it becomes its own tribe with a published interface.

Each new tribe writes a mission and gets a lead. The backend chapter, which had grown too large for one lead, splits into three, one per tribe. After two cycles, the dependency survey shows fewer blocking dependencies, and health checks on speed improve in the consumer and merchant tribes.

## A shared component that blocks everyone

**Scenario:**

Illustrative scenario: squads in several tribes all depend on a notification service that no squad owns. Changes to it queue up for weeks.

**Walkthrough:**

Instead of adding a coordination meeting, the organization forms a small platform squad that owns the notification service and offers it through a documented interface with a request process. The squad's mission is to let other squads send notifications without waiting on it.

The next dependency survey shows the notification service has dropped from the most common blocker to a minor one. The organization adds the pattern to its scaling plan: a component that blocks several squads becomes a candidate for its own platform squad.

## Guilds strained by a second office

**Scenario:**

Illustrative scenario: a company opens a second office in another time zone. Guild meetings that worked well in one office now exclude half the members.

**Walkthrough:**

The company follows the approach recommended by research on Spotify's guilds: each large guild forms regional sessions with a local coordinator, while keeping one shared channel and a yearly cross-site event. Guild coordinators get agreed time, since recognition of guild work becomes harder to keep as the company grows.

Engagement recovers in the second office within a few months. The scaling plan now includes a guild review whenever the company adds a location.
