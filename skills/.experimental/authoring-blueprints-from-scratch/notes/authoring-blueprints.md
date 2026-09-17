# Authoring Blueprints (Reference)

Blueprints are the organization-wide source of truth for product state, from an intent perspective. They answer two questions: **what is the product** (features, systems, conventions, patterns as they exist today) and **why is it that way** (the decisions that shaped it, their constraints, their consequences).

Primary consumer is the harness (roughly 90% of the value): when the harness takes action, it reconstructs the intent and constraints behind current state from blueprint narrative. Secondary consumer is the human reader (10%): tracing continuity and decision rationale without digging through individual briefs.

## What a blueprint is, and is not

A blueprint describes current state and the continuous history of how the product became what it is. It is not a tutorial (how to use X), not a specification (how to build X), not a plan (what to build next).

The style emphasizes:

- **Clear causality.** "We chose X because of constraint Y, which ruled out alternative Z."
- **Decision context.** When a decision was made, what problem it solved, what trade-offs it encoded.
- **Current state.** What actually shipped, how it works, what conventions it set.
- **Consequence.** How the decision affects adjacent systems or future choices.

## Decision lineage

Trace why the product is the way it is, drawing from the context graph.

**Link decisions to current state.** When describing a system, reference the brief, initiative, or goal that led to its current form.

> User authentication uses JWT tokens (brief: Auth Strategy Refresh, approved Q2 2024) because we needed stateless, distributed verification as we scaled to multi-region deployment.

**Surface the constraints a decision encoded.** Every decision eliminates alternatives. Name what was rejected and why, so future maintainers understand the boundaries.

> We do not support passwordless email links because the sync queue had limited throughput at decision time. That constraint is now resolved, making this a candidate for revisit (initiative: Passwordless Onboarding).

**Preserve superseded reasoning.** When a decision is replaced, do not erase the old one. Keep it as historical context and note what replaced it.

> Originally we stored feature flags in Redis (brief: Feature Flag Storage, Q1 2024). In Q3 2024 we migrated to Postgres (initiative: Feature Flag Query Performance) because read-heavy traffic exceeded Redis cluster capacity.

## State narrative vs specification

Structure sections around product systems or concepts, and within each, trace why it is shaped that way.

**Good (state narrative):**

> Feature flags control feature rollout. We adopted a flag-per-feature model (circa Q1 2023) to enable gradual rollouts without deployment coordination. Flags live in Postgres with a 5-minute cache to balance freshness against query load. Naming follows `feature_<name>_<variant>` to simplify log parsing.

**Poor (drifts into specification):**

> Feature flags must be stored in Postgres. Flags are cached with a 5-minute TTL. Implement flag naming as `feature_<name>_<variant>`. Rollouts happen incrementally.

The difference: the good version records what is true and why; the poor version issues build instructions.

## How much history to keep

Keep a past decision if it strongly constrains current or near-future choices. Summarize or trim it if it is purely historical.

**Keep:**

> We moved user session storage from Postgres to Redis (2022), then back to Postgres (2023), because Redis cache misses during peak traffic caused session loss.

**Trim:**

> In v1 (2021) we used MongoDB. We switched to Postgres in 2022. We have been using Postgres since.

Unless the trimmed version carries a lesson for a current decision, it is noise.

## Scope: single blueprint vs decomposition

Scope one system or conceptual domain per blueprint, tightly enough that a reader understands both what exists and why.

**Keep as one** when the system is core but self-contained, its lineage is short and causally connected, and current state is stable.

> "Event Taxonomy": event categories, their properties, and why the taxonomy is structured that way.

**Decompose into parent + children** when the system is large, touches multiple lineages, and has subsystems with independent scope.

> Parent: "Core Data Model" (why this schema approach, key entities, design principles). Child: "User Entity" (current table structure, migrations, why fields are shaped that way, constraints inherited from the core model).

**Decomposition trigger:** a single blueprint exceeds ~2,000 to 3,000 words and covers multiple independent subsystems. Split into a parent plus 2 to 3 children.

**Linkage rule:** a child must reference the parent decisions that constrain it. If a child could stand alone with no inherited constraints, it is a sibling, not a child, and needs no parent. If a child exists in isolation without linking to parent intent, merge it back.

## Conventions: inline vs dedicated

Conventions are product standards multiple systems depend on (flag naming, event taxonomy, API versioning, error codes).

**Dedicated convention blueprint** when 3 or more subsystems follow it, it is stable, and you want one source of truth.

> "Feature Flag Naming Conventions": format, examples, rationale, how to find existing flags by pattern.

**Inline** when the convention is coupled to a single system, is a minor part of a larger blueprint, or is still evolving.

> A "Naming Convention" section inside the "Feature Flags" blueprint.

## Decision logs: integrated vs dedicated

Default: state blueprints are primary, decision logs are optional secondary artifacts.

Integrate decision lineage into the state blueprint in most cases. It keeps narrative flow intact and gives one place to update when a decision shifts. About 90% of reads benefit from seeing causality alongside state.

Create a **dedicated decision-log child** only when the record is long, contains formal trade-off analysis, or needs preservation for future reconsideration. Criteria: the record runs beyond ~500 words with formal trade-off analysis, multiple stakeholders need the detailed reasoning (not just the outcome), or the decision is genuinely revisable and the reasoning must survive. A decision log always links back to the state blueprint it informs.

> Create "Feature Flag Storage Architecture Decision Log" only if a multi-page Postgres vs Redis vs DynamoDB analysis with benchmarks and cost projections exists. If the rationale fits in two or three sentences, keep it inline.

**Anti-pattern:** maintaining both an integrated narrative and a separate decision log for the same decision. Choose one.

## Product surface vs internal architecture

**Include:** user-facing features (onboarding, auth options, goal frameworks, notification preferences); architectural decisions that enable or constrain features (schema, API versioning, feature flag system, event taxonomy); product conventions (naming, rollout policy, error taxonomy, soft deletes, audit logging).

**Exclude or keep minimal:** implementation details internal to a subsystem (which cache engine is architectural; the exact hash function for cache keys is not); operational tooling (monitoring, logging, CI/CD) unless it affects product behavior or user data; short-lived experiments unless they reveal a constraint on the permanent architecture.

**Boundary test:** if a decision affects what users experience or constrains a future product decision, it belongs in a blueprint. If it is purely internal and could change without affecting users or architecture, it likely does not.

- Include: "Feature flags enable gradual rollouts because early adopter feedback shapes design; named `feature_<name>` to simplify filtering (blueprint: Feature Flag Naming)."
- Exclude: "Feature flag table has columns id (UUID), key (text), value (json), created_at, updated_at." That is schema detail, not state narrative.

## Cross-blueprint navigation

Link related blueprints explicitly, with a brief note on the relationship.

> User authentication (blueprint: Authentication) applies the core data model's audit pattern (blueprint: Core Data Model), so every auth token carries `created_at` and `last_used_at` for compliance audits.

Capture parent-child and sibling relationships in a separate Blueprint Graph reference so new team members can navigate without reading everything. Avoid circular references: if A points to B and B points to A, either merge them or make the parent-child direction explicit.

## Reference and link patterns

Syntax: `[descriptive anchor](#ref:...)`.

**Link when** the brief or initiative directly caused the current state, the decision created a constraint that shaped design, or the decision is recent enough that reversing it is realistic.

**Do not link when** the decision is purely historical with no bearing on current or near-future choices, or when linking would overload the narrative.

**Anchor text explains why the link matters.**

- Good: "We adopted JWT tokens for API auth (brief: Stateless Auth Strategy) to support distributed deployments."
- Avoid: "See this brief for auth details."

## Anti-patterns

1. **Blueprint as specification.**
  - No: "Build a feature flag system with Postgres storage, 5-minute cache, and this schema."
  - Yes: "Feature flags live in Postgres because we need transactional consistency and audit trails; cached at a 5-minute TTL to balance freshness against query load under peak traffic."
2. **Omitting reasoning.**
  - No: "We use JWT tokens for auth."
  - Yes: "We chose JWT tokens (brief: Stateless Auth) because we needed authentication that did not require session replication across regions."
3. **Stale state.**
  - No: blueprint says "we use Redis for caching" after migrating to Memcached last quarter.
  - Yes: "We used Redis (2023), migrated to Memcached in Q4 2024 (initiative: Cache Layer Performance) for sub-millisecond latency at scale."
4. **References without reality.** Heavy focus on why a system was built, unclear on what actually shipped. Pair every decision reference with what was decided and how it manifests today.
5. **Over-decomposition without linkage.** Several subsystem blueprints with no parent connecting them or explaining shared principles. Let the parent establish principles and constraints; let each child show how it applies them.