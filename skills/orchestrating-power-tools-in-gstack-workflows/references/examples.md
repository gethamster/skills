# Examples: Orchestrating gstack's 8 Power Tools in Complex Workflows

## Example: Feature buildout for a new user dashboard (small team, B2B SaaS)

**Scenario:**

A 3-person startup needs to add a usage analytics dashboard to their B2B SaaS product. The team has one full-time developer using Claude Code with gstack. Timeline is 2 weeks. The dashboard must show usage metrics, user activity, and export capabilities.

**Walkthrough:**

The developer starts by classifying this as a feature buildout, which uses the full power tool sequence. They write a problem statement: 'Add a usage analytics dashboard so customers can track their team's product usage. Must show daily active users, feature usage frequency, and CSV export. ' They invoke /decide, which activates CEO perspective and identifies that CSV export is lower priority than the visualization components.

The decision record scopes the first release to charts only, with export as a fast-follow. /design produces an architecture with three components: a data aggregation service, a REST API endpoint, and a React dashboard component. The developer runs /code three times, once per component, starting with the data service. After each /code pass, they run /review, which catches a missing index on the analytics table (blocker) and a timezone handling inconsistency (warning).

They fix the blocker immediately and log the warning. After all three components are built and reviewed, /docs generates API documentation and /test produces integration tests covering the main query paths. /ship produces deployment steps including a database migration. The full workflow trace shows 12 power tool invocations over 8 working days, with one loop-back from /review to /code for the missing index fix.

## Example: Codebase migration from REST to GraphQL (mid-size team, B2C app)

**Scenario:**

A team of 8 developers is migrating a B2C mobile app's backend from REST to GraphQL. The API has 40 endpoints serving 3 mobile clients. Migration needs to happen incrementally over 6 weeks without breaking existing clients. Each developer uses gstack individually for their assigned modules.

**Walkthrough:**

The tech lead runs /decide once at the project level, producing a decision record that scopes the migration to the 15 highest-traffic endpoints first, with remaining endpoints deferred. They run /design once for the overall migration strategy, producing an architecture artifact that defines the GraphQL schema, the adapter pattern for maintaining REST compatibility during transition, and the module-by-module migration order. Each developer then takes their assigned module (2-3 endpoints each) and runs /design for their specific module to map REST endpoints to GraphQL resolvers. They run /code per resolver, not per module, keeping each invocation small and focused.

/review runs after each resolver, checking both the GraphQL implementation and the REST adapter for backward compatibility. The QA perspective catches that two developers have defined conflicting type names in their resolvers, which would not surface until schema stitching. This triggers a loop-back to /design to establish a naming convention. After each module passes /review, /test generates integration tests that verify both the GraphQL and REST paths return equivalent responses.

The workflow trace for each developer shows 6-8 /code and /review cycles per module. The tech lead's trace shows the overarching /decide, /design, and final /ship invocations.

## Example: Emergency hotfix for a payment processing bug (solo developer, fintech)

**Scenario:**

A solo developer discovers that a rounding error in the payment processing service is causing $0.01 discrepancies in 3% of transactions. This needs to ship within 4 hours. The developer uses gstack with Claude Code.

**Walkthrough:**

The developer classifies this as a hotfix and selects only /code, /review, and /ship from the power tool lineup. They skip /decide (the decision is already made by the severity of the bug) and /design (the fix is localized to a known function). 01 discrepancies in 3% of transactions. ' They invoke /code with the problem statement and the specific file, producing a fix that replaces floating-point arithmetic with decimal arithmetic.

/review activates QA perspective and flags that the fix needs to handle currency conversion edge cases where the rounding behavior was intentionally different (a near-miss that would have caused a new bug). The developer loops back to /code with this constraint, producing a revised fix that preserves intentional rounding in currency conversion while fixing the error in domestic transactions. /review passes the revised fix. 5% in the first hour, auto-rollback.

5 hours, with the workflow trace documenting exactly what was changed and why.

## Example: Large refactor of authentication system (large team, enterprise)

**Scenario:**

An enterprise team of 20 developers needs to refactor their authentication system from a monolithic auth module to a microservice with OAuth2 support. The existing system handles 50,000 daily active users. The refactor has a 3-month timeline with a hard requirement of zero downtime during transition.

**Walkthrough:**

The project lead runs /decide with a comprehensive problem statement covering the business case (compliance requirements, partner integration needs), technical context (current module's tight coupling to 12 other services), and constraints (zero downtime, backward compatibility for 6 months). The decision record scopes Phase 1 to extracting the auth module into a standalone service with the existing auth protocol, deferring OAuth2 to Phase 2. /design produces an architecture artifact with a strangler fig pattern: new auth service runs alongside the old module, with a routing layer that gradually shifts traffic. The architecture identifies 5 extraction stages.

Each stage gets its own /design, /code, /review, /test cycle. The team lead assigns stages to sub-teams of 3-4 developers. Each sub-team runs their own power tool sequences for their stage, with the team lead running /review at stage boundaries to verify cross-stage consistency. After all 5 stages complete, /docs generates migration guides for the 12 dependent services, and /test produces a load testing plan that simulates the traffic shift.

/ship produces a 3-phase deployment plan with canary releases at 1%, 10%, and 100% of traffic, with automated rollback triggers at each phase. The total project trace spans 3 months and contains over 80 power tool invocations across the team, organized hierarchically under the original decision record.
