# The Spotify Model: An Organizational Framework for Scaling Agile

> Created by **Spotify Engineering Team** — [https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)

## Overview

The Spotify Model emerged from a 2012 whitepaper by Henrik Kniberg and Anders Ivarsson, two agile coaches working inside Spotify's engineering organization. The paper, titled "Scaling Agile @ Spotify," was not a prescription. It was a snapshot. Kniberg and Ivarsson described how Spotify had organized its roughly 30 engineering teams at the time, explaining the logic behind four structural elements: squads, tribes, chapters, and guilds. The paper spread rapidly through the agile community, and within a few years the "Spotify Model" became one of the most referenced frameworks for scaling product development. Ironically, Spotify's own leaders have repeatedly said the snapshot was already outdated by the time it went viral, and that the company itself kept evolving away from the structures the paper described.

The core idea is that traditional organizational hierarchies slow teams down as companies grow. Functional departments create handoffs. Matrix structures create confusion about who decides what. The Spotify Model proposes an alternative: organize primarily around small, cross-functional teams (squads) that each own a specific mission or piece of the product end-to-end. These squads are the basic unit. They have the autonomy to choose their own tools, processes, and ways of working. They are expected to be loosely coupled (minimal dependencies on other squads) but tightly aligned (working toward shared company goals). The model then layers on three additional structures to handle the coordination and craft-development needs that autonomous squads alone cannot solve.

Tribes group related squads together, typically around a product area or business domain, capped at roughly 100 people following Dunbar's number logic. The tribe lead ensures squads within the tribe are aligned and not duplicating effort. Chapters are the discipline homes. All backend engineers across a tribe, for instance, belong to a backend chapter. The chapter lead (who is also an engineering manager) handles people management, career growth, and craft standards. This lets squads stay cross-functional for delivery while ensuring engineers still get mentorship from someone who understands their craft deeply. Guilds are the loosest structure: voluntary communities of interest that span the entire organization. A web technology guild, a testing guild, a leadership guild. They have no formal authority but serve as knowledge-sharing networks.

What makes the Spotify Model distinctive in the landscape of scaling frameworks is what it is not. It is not SAFe (Scaled Agile Framework), which prescribes ceremony-heavy coordination across teams with release trains and portfolio Kanbans. It is not LeSS (Large-Scale Scrum), which insists all teams run Scrum with shared backlogs. The Spotify Model is intentionally loose. It provides structural vocabulary but no mandated process. Squads can run Scrum, Kanban, or something entirely custom. There is no prescribed sprint cadence, no mandatory ceremonies, no formal release train. This flexibility is its greatest strength and its greatest risk. It works well in high-trust engineering cultures where teams are mature enough to self-organize. It can collapse into chaos in organizations that adopt the structure without the culture.

Since 2012, the model has been adopted (and adapted) by companies including ING Bank, Zalando, Bosch, and many mid-stage startups. ING's implementation, in particular, became a well-known case study of applying the framework outside pure tech companies. The model has also accumulated meaningful criticism. Jeremiah Lee, a former Spotify employee, published a widely cited critique in 2020 arguing that the model had not actually worked well inside Spotify itself, that matrix management through chapters created confusion, and that the framework's popularity outstripped its proven results. The honest take is that the Spotify Model provides a useful set of organizational primitives for thinking about team structure at scale. The mistake is treating it as a blueprint to copy rather than a set of ideas to adapt.

Teams using Hamster can model their squads, tribes, and guild structures within their workspace, leveraging AI agents to help coordinate across teams while preserving the autonomy that makes the model work. But the real value of studying the Spotify Model is not in copying its org chart. It is in understanding the tensions it tries to resolve: autonomy versus alignment, craft depth versus delivery speed, team independence versus organizational coherence. Those tensions exist in every growing company, regardless of which labels you put on the boxes.

## Core Principles

### Squad Autonomy as the Default

Each squad operates as a mini-startup with the authority to decide how it works, what tools it uses, and how it plans its delivery. The squad owns its mission, its code, and its outcomes. When organizations skip this and impose standardized processes on all squads, they get the overhead of the Spotify Model's structure without the speed benefit. The tradeoff is real: autonomy means inconsistency.

Different squads will solve similar problems differently. That is the cost of speed, and the model treats it as an acceptable one.

### Loose Coupling, Tight Alignment

Squads should be able to develop, test, and release independently without waiting on other teams. At the same time, they need to be rowing in the same strategic direction. Loose coupling is an architecture concern as much as an organizational one. If the codebase is a monolith with shared state everywhere, no amount of squad labels will create real autonomy.

Tight alignment comes from clear product strategy, transparent goals, and regular tribe-level communication, not from top-down micromanagement.

### Cross-Functional by Default

A squad contains everyone needed to go from idea to production: designers, developers, QA, and whoever else the mission requires. This eliminates the handoff problem that plagues functional organizations, where a feature bounces from design to frontend to backend to QA with delays at every transition. The principle breaks down when squads become too small to staff every function, or when a single discipline (say, data engineering) is spread so thin that no squad gets meaningful investment. Sizing squads correctly is a prerequisite.

### Chapters Protect Craft Quality

Without chapters, autonomous squads can become islands where individual contributors lose connection to their discipline's best practices. A backend engineer alone in a squad of frontend developers has no peer to review their architecture decisions. Chapters provide that peer group. The chapter lead serves a dual role as people manager and craft steward, which is one of the model's most debated design choices.

When it works, it gives engineers a career path that does not require becoming a product manager. When it fails, it creates a matrix management headache where the squad and chapter pull a person in different directions.

### Tribes as the Coordination Boundary

Tribes exist to keep related squads aware of each other and to prevent duplicated work. The roughly 100-person cap is deliberate, rooted in the idea that social cohesion breaks down beyond that size. Tribe leads are not project managers assigning work to squads. They are facilitators ensuring alignment and resolving cross-squad dependencies.

When tribes grow too large or are drawn around the wrong boundaries (technology layers instead of product domains, for example), coordination overhead starts to resemble the traditional hierarchy the model was designed to replace.

### Guilds Enable Voluntary Knowledge Flow

Guilds are the lightest-weight structure in the model, and that is by design. They are opt-in communities where anyone with shared interest can participate, regardless of which squad or tribe they belong to. A testing guild might share automation patterns. A leadership guild might discuss management challenges.

Guilds work when they solve real problems people care about. They wither when they are mandated from above or when they become meeting-heavy bureaucracies. The best guilds operate more like internal open-source communities: shared artifacts, async communication, and occasional meetups.

### Culture Over Structure

The original whitepaper emphasized that Spotify's culture of trust, psychological safety, and tolerance for failure mattered more than the specific boxes on the org chart. The structural elements (squads, tribes, chapters, guilds) are only containers. They work when filled with a culture that values experimentation, open communication, and blameless retrospectives. Organizations that copy the structure without investing in the cultural substrate tend to get the worst of both worlds: the confusion of a novel org chart and the rigidity of their existing command-and-control habits.

## Steps

1. **Step 1: Map Your Product into Potential Squad Missions**
   Before creating any squads, decompose your product into distinct areas of ownership. Each potential squad mission should correspond to a user-facing capability, a platform concern, or a business domain that can be developed somewhat independently. " The test for a good mission is whether the squad could set goals, plan work, and ship improvements without needing another squad's permission for most of their work. If two proposed missions cannot be changed independently because they share the same data models, deployment pipelines, or user flows, they may need to be combined or the underlying architecture needs to be decoupled first.

A common mistake is defining squads around technical layers ("the API team," "the database team") rather than product domains. This recreates functional silos with new names.

2. **Step 2: Form Cross-Functional Squads Around Those Missions**
   Staff each squad with the mix of disciplines needed to deliver on its mission end-to-end. A typical squad includes 6-8 people: a product owner, a few engineers, a designer, and potentially a data analyst or QA specialist depending on the mission. The product owner sets priority and represents stakeholder needs. There is no designated squad "lead" in the original model.

The squad self-organizes around delivery. You know you have formed a good squad when it can take a user problem from understanding to shipped solution without filing tickets for other teams to do parts of the work. Watch out for squads that are too small (a 3-person squad cannot realistically be cross-functional) or too large (beyond 8-9 people, communication overhead increases and the team starts to fragment into sub-groups).

3. **Step 3: Group Related Squads into Tribes**
   Cluster squads that work on related parts of the product into a tribe. The tribe should correspond to a meaningful product area or business domain. Aim for 3-10 squads per tribe, staying under roughly 100 people total. Assign a tribe lead whose job is not to manage squads but to ensure alignment between them, remove cross-squad blockers, and represent the tribe's needs to the rest of the organization.

The tribe lead often works closely with a product director or area lead to set the strategic direction that squads align to. You will know the tribe boundaries are wrong if squads within the same tribe rarely need to coordinate, or if squads in different tribes are constantly blocked by each other. Redraw the boundaries based on actual dependency patterns, not theoretical org chart symmetry.

4. **Step 4: Establish Chapters Within Each Tribe**
   For each discipline that appears across multiple squads within a tribe, create a chapter. All iOS engineers in a tribe form the iOS chapter. All designers form the design chapter. Appoint a chapter lead who serves as both the people manager for chapter members and the steward of craft standards for that discipline within the tribe.

The chapter lead conducts one-on-ones, handles career development, participates in hiring, and facilitates regular chapter meetings where members share techniques, review each other's work, and agree on baseline standards. The dual allegiance (squad for delivery, chapter for growth) is the most complex aspect of the model. Be explicit about how conflicts are resolved. In most implementations, day-to-day priority comes from the squad and product owner, while the chapter lead focuses on long-term growth, quality standards, and ensuring people are not burning out.

5. **Step 5: Seed Guilds Based on Organic Interest**
   Identify topics that span multiple tribes and where practitioners want to share knowledge. Common starting guilds include web technology, testing practices, agile coaching, and leadership development. Guilds should be voluntary. Appoint a guild coordinator (not a guild manager) whose role is to organize regular sessions, maintain shared documentation, and keep the guild active.

A good guild cadence might be a monthly meetup plus an active chat channel. Resist the urge to create guilds for everything. Start with 2-3 where clear energy exists, and let others emerge organically. Guilds that are mandated from above tend to die quickly because nobody has genuine motivation to participate.

Guilds that solve real pain points (like inconsistent testing practices across tribes) sustain themselves.

6. **Step 6: Define Alignment Mechanisms Without Centralizing Control**
   Autonomy without alignment produces chaos. Establish lightweight mechanisms that keep squads pointed in the same direction without micromanaging their work. Common approaches include: quarterly company bets or OKRs that squads align their missions to, tribe-level showcases where squads demo recent work to each other, and cross-tribe architecture reviews for decisions that affect shared infrastructure. The original Spotify approach emphasized internal open source, where any squad could contribute to any codebase, reducing the need for formal coordination.

The key test is whether a squad can explain how its current work connects to a company-level goal. If it cannot, alignment has broken down. But if aligning requires attending five coordination meetings a week, the mechanism has become heavier than the problem it solves.

7. **Step 7: Iterate on the Structure Based on What You Learn**
   The Spotify Model is not a target state. It is a starting point. Run retrospectives on the organizational structure itself, not just on squad-level delivery. Every quarter, assess: Are squads actually autonomous, or are dependencies forcing constant coordination?

Are chapters providing genuine craft mentorship, or are they just another meeting? Are tribes sized correctly? Are guilds alive or zombie structures that exist on paper? Be willing to merge squads, split tribes, reassign missions, and shut down guilds that are not providing value.

The organizations that succeed with this model treat it as a living system that evolves with their product, their people, and their market. The ones that fail treat the initial design as sacred and refuse to adjust when reality contradicts the plan.

## When to Use

- When your engineering organization has grown past 40-50 people and traditional team structures are creating bottlenecks, handoffs between functional groups are slowing delivery, and nobody has a clear picture of who owns what part of the product.
- When you have a single large product (or tightly related product suite) that can be decomposed into relatively independent areas of ownership, where each area has enough scope to keep a squad busy and enough independence that squads can ship without coordinating every release.
- When your codebase architecture supports independent deployment, either through microservices, modular monoliths, or well-defined API boundaries, so that the organizational autonomy you are granting to squads is backed by technical autonomy rather than contradicted by a tangled shared codebase.
- When your leadership culture already leans toward trust and delegation rather than command and control, and you have engineering managers who are comfortable coaching rather than directing, because the Spotify Model amplifies whatever culture already exists rather than creating a new one.
- When you are scaling from a startup culture that already values autonomous teams and you want to preserve that energy while adding enough structure to coordinate across 5, 10, or 20 teams, rather than imposing a heavy top-down framework like SAFe that would feel alien to your existing culture.
- When knowledge silos are forming between teams because people in the same discipline (design, backend, data) are isolated in different squads and have stopped learning from each other, and you need a mechanism like chapters and guilds to reconnect craft communities without sacrificing cross-functional squad delivery.

## When Not to Use

- When your organization has fewer than 3-4 teams. The Spotify Model solves coordination problems that emerge at scale. With a small number of teams, the overhead of defining tribes, chapters, and guilds outweighs the benefit. Simple cross-functional teams with direct communication channels are faster and lighter. You do not need a coordination framework when everyone fits in one room.
- When your codebase is a tightly coupled monolith where every change requires coordination across multiple teams. The model assumes squads can work independently, and if your architecture contradicts that assumption, squads will have autonomy on paper but constant dependencies in practice. Fix the architecture first, then reorganize. Putting Spotify labels on teams that cannot actually ship independently creates frustration, not speed.
- When your leadership culture is fundamentally command-and-control. If managers expect to approve every decision, if there is no tolerance for squads choosing their own tools or processes, if failure is punished rather than analyzed, then the Spotify Model becomes theater. You will create squads that are autonomous in name but micromanaged in practice. The model requires genuine delegation, which is a cultural shift that takes years, not a reorg that takes weeks.
- When your company operates across many unrelated products or business units with little shared technology or customer overlap. The tribe structure assumes squads within a tribe are working on related parts of a shared product. If your teams are building entirely independent products, traditional business unit structures with their own dedicated teams may be simpler and more honest than forcing unrelated work into a tribe container.
- When regulatory or compliance requirements demand strict process standardization across all teams. Industries like healthcare, aviation, or financial services sometimes require documented, auditable processes that every team must follow identically. The Spotify Model's principle of letting squads choose their own ways of working can conflict with these requirements. You may be able to adapt the model by defining non-negotiable compliance guardrails, but the core philosophy of maximum squad autonomy may not fit.

## Skills

This method includes the following skills:

- [Organizing Squads into Tribes for Strategic Alignment](../../skills/organizing-tribes-for-alignment/SKILL.md) — How to group related squads into tribes, set tribe size limits, appoint tribe leads, and maintain alignment across squads without sacrificing autonomy.
- [Scaling Agile Practices Using Spotify Structures](../../skills/scaling-agile-with-spotify-structures/SKILL.md) — How to use the Spotify organizational model as a scaling framework, including when to split tribes, spawn new squads, and evolve governance as the company grows.
- [Evaluating Spotify Model Tradeoffs and Common Pitfalls](../../skills/evaluating-spotify-model-tradeoffs/SKILL.md) — How to assess the pros, cons, and known failure modes of the Spotify Model so you can make an informed adoption decision and avoid cargo-culting.
- [Building Guilds for Cross-Tribe Knowledge Sharing](../../skills/building-cross-cutting-guilds/SKILL.md) — How to create and sustain voluntary, company-wide guilds that share knowledge, tooling, and best practices across tribe boundaries.
- [Balancing Squad Autonomy with Organizational Alignment](../../skills/balancing-autonomy-and-alignment/SKILL.md) — Techniques for setting guardrails, defining loose coupling and tight alignment, and using OKRs or mission briefs so squads stay autonomous yet strategically coherent.
- [Forming Autonomous Squads with Clear Missions](../../skills/forming-autonomous-squads/SKILL.md) — How to define, staff, and launch cross-functional squads with well-scoped missions, product ownership, and end-to-end delivery responsibility.
- [Adapting the Spotify Model to Your Organization](../../skills/adapting-spotify-model-to-your-organization/SKILL.md) — A step-by-step approach for implementing and customizing the squad/tribe/chapter/guild structure to fit your company's size, culture, and existing processes.
- [Running Chapters to Build Discipline-Specific Excellence](../../skills/running-chapters-for-craft-excellence/SKILL.md) — How to establish and facilitate chapters—groups of specialists across squads within a tribe—to standardize practices, mentor members, and manage career growth.

## FAQ

**What is the Spotify Model in simple terms?**

The Spotify Model organizes a company's product teams into small, autonomous groups called squads, each responsible for a specific part of the product. Related squads are grouped into tribes. People who share the same skill (like all backend engineers) connect through chapters for mentorship and career growth. Guilds are open communities for anyone interested in a shared topic, like testing or security.

The goal is to keep the speed and ownership feeling of a small startup even as the company grows to hundreds of engineers.

**Spotify Model vs SAFe: which scaling framework should I use?**

SAFe (Scaled Agile Framework) is prescriptive. It defines specific roles, ceremonies, and cadences across teams, including release trains, program increments, and portfolio-level planning. It suits organizations that need standardized processes, often in regulated industries or large enterprises with many dependencies. The Spotify Model is descriptive and loose.

It gives you structural vocabulary (squads, tribes, chapters, guilds) but deliberately avoids mandating how squads should work. It suits high-trust engineering cultures that want coordination without ceremony. If your teams thrive with freedom and your architecture supports independent deployment, Spotify-style structures may fit better. If you need heavy cross-team synchronization and process compliance, SAFe provides more guardrails.

**Does the Spotify Model work for small teams or startups?**

Not really. The model solves problems that emerge when you have 5 or more teams and 40+ people in product development. At startup scale, the overhead of defining tribes, chapters, and guilds exceeds the coordination benefit. A startup with 10-15 engineers typically works best with 2-3 cross-functional teams, direct communication, and a shared backlog.

Start thinking about Spotify-style structures when you notice that teams are duplicating work, discipline-specific knowledge is getting siloed, or nobody can explain who owns what part of the product.

**Why does the Spotify Model fail in practice?**

The most common failure mode is adopting the structure without the culture. Organizations rename their teams to squads, draw new boxes on the org chart, and expect transformation. But if leadership still approves every decision, if the architecture forces teams into constant coordination, and if there is no tolerance for squads choosing different tools or processes, the model becomes cosmetic. Other failure patterns include: chapters creating matrix management confusion (who is my real boss?), tribes drawn around technology layers instead of product domains, guilds mandated from above that nobody actually attends, and squads so small they cannot be genuinely cross-functional.

**How does the Spotify Model work alongside OKRs?**

OKRs and the Spotify Model complement each other well. Company-level OKRs provide the "tight alignment" that keeps autonomous squads pointed in the same direction. Tribes can set tribe-level OKRs that translate company goals into their product domain. Individual squads then define their own OKRs or squad-level goals that connect to the tribe's objectives.

The chapter lead can use OKRs to set craft quality goals (like reducing build times or improving test coverage). The key is that OKRs define what success looks like, while the Spotify structure defines who works on what and how they coordinate.

**How do dependencies between squads get handled in the Spotify Model?**

The model's honest answer is: minimize them. The primary strategy is architectural. If squads own independent services with well-defined APIs, most dependencies dissolve. When dependencies do exist, they are handled through informal squad-to-squad communication, tribe-level coordination by the tribe lead, or temporary cross-squad working groups.

There is no formal dependency management ceremony like SAFe's program increment planning. This works well when dependencies are rare. It struggles when dependencies are frequent and systemic, which usually signals that squad boundaries or the underlying architecture need to be rethought.

**What is the difference between a chapter and a guild?**

Chapters are formal and bounded to a single tribe. ), and the chapter lead is their people manager. Chapters handle career growth, hiring, and craft standards within that tribe. Guilds are informal and span the entire organization.

Membership is voluntary. There is no manager, just a coordinator. Guilds exist for knowledge sharing and community, not for people management. Think of chapters as your department within your tribe, and guilds as company-wide interest groups.

**Did the Spotify Model actually work at Spotify?**

The results are mixed, and Spotify's own people have been candid about that. The 2012 whitepaper described an aspirational snapshot, not a proven end state. Jeremiah Lee, a former Spotify employee, published a detailed critique in 2020 noting that the matrix management through chapters created confusion, that squad autonomy sometimes led to fragmented user experiences, and that the company reorganized multiple times after the whitepaper was published. Spotify itself has said the model was a point-in-time description that continued to evolve.

The framework's value is in the ideas it surfaces (autonomy, cross-functional ownership, craft communities), not in its specific structural details.

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
