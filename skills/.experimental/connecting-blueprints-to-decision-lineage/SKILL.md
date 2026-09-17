---
name: connecting-blueprints-to-decision-lineage
description: "Make decision lineage explicit by linking product-state blueprints to decision records and marking which decisions shaped which parts of the product."
version: "1.0.0"
category: "Ops"
---

**Objective:** Make decision lineage explicit by linking product-state blueprints to decision records and marking which decisions shaped which parts of the product.

**Link patterns:**

1. **Direct decision links:** When a brief, initiative, or goal directly caused current state, link inline with context about what changed.

- `We chose Postgres ([brief: Database Selection](#ref:...)) because we needed transactional consistency.`

2. **Constraint inheritance links (parent→child):** Child blueprints reference parent blueprint decisions that constrained them.

- Parent: "Core Data Model" defines schema principles.
- Child: "User Entity" opens with: "The user entity follows the core data model ([blueprint: Core Data Model](#ref:...)), which requires all entities to include audit timestamps and soft-delete flags."

3. **Decision-log child blueprints:** For highly consequential decisions, create a child decision-log blueprint that links back to the state blueprint it informs.

- Child title: "Feature Flag Storage Architecture Decision Log"
- Link back: "This decision log supports [blueprint: Feature Flags](#ref:...) current-state decision to use Postgres."

4. **Reverse links from decision artifacts:** When marking a brief as "approved" or an initiative as "shipped," reference which blueprint(s) now reflect that decision.

- Brief "Passwordless Auth Strategy" → Tag or note: "Reflected in [blueprint: Authentication](#ref:...)"

**Validation:** Every state blueprint should link to ≥1 decision artifact. If a blueprint has no linked decisions, either:

- Link to the decisions that shaped it (if they exist in the graph), or
- Mark the blueprint as "architectural baseline" (captures established patterns with unclear origin) and flag for future decision documentation

**Example structure:**

```
## Authentication

We implemented JWT-based authentication ([brief: Stateless Auth Strategy](#ref:briefs?id=...), approved Q2 2024) 
to support distributed deployments without session replication.

Earlier approaches:
- Session cookies with Redis-backed storage ([brief: Initial Auth Implementation](#ref:...), 2022) 
  worked well for a single region but created replication bottlenecks during geo-expansion.
  
Current design trades off statelessness (simpler ops) for token refresh complexity 
(JWT tokens expire; we need refresh token rotation and revocation).
```
