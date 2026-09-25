# Examples: Adapting the Spotify Model to Your Organization

## A software company with a coupled codebase

**Scenario:**

Illustrative scenario: a business software company has about a hundred people in product and engineering, organized in functional teams around one large application. Leadership wants to implement the Spotify model to speed up delivery.

**Walkthrough:**

The audit shows that most delays come from hand-offs between the frontend, backend and testing teams, and that only the reporting module can be released on its own. The adaptation design adopts cross-functional squads, keeps line management with engineering managers, adds a frontend guild, and skips tribes until there are more squads.

The pilot forms two squads, one around reporting and one around billing, and funds the work to let billing release independently. Success measures are time from idea to release, the number of blocking dependencies, and squad health checks. At the decision point, the reporting squad shows clear gains and the billing squad is still blocked by the shared release, so the company extends squads only as each area becomes independently releasable.

## A smaller company that needs only part of the model

**Scenario:**

Illustrative scenario: a company with five product teams is growing and considering the full structure. Teams already work cross-functionally and ship independently.

**Walkthrough:**

The problem list shows one real issue: engineers in different teams solve the same infrastructure problems in different ways. Squads already exist in all but name, tribes would add a layer nobody needs, and chapters would complicate a simple management structure.

The company adopts only guilds, starting with infrastructure and testing, and keeps its existing team names. It agrees to revisit tribes if the number of teams roughly doubles. The pilot period is spent on the guilds alone, with a review of whether duplicated work has fallen.

## A services firm adapting squads to client work

**Scenario:**

Illustrative scenario: an agency builds software for several long-term clients. Staff move between client projects often, and quality varies by project.

**Walkthrough:**

The adaptation treats each long-term client relationship as a squad mission, with a stable core team and a product owner on the agency side. Because staff do move between clients, chapters are adopted with line management, so people keep the same manager when they change squads, which is the benefit the original design was meant to provide.

Guilds are formed for design and quality assurance to spread practice across client teams. The pilot runs with two client squads, and the review looks at client satisfaction, rework and staff feedback before the model is extended to other clients.
