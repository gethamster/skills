# Examples: Evaluating Spotify Model Tradeoffs and Failure Modes

## A growing startup with a shared release pipeline

**Scenario:**

Illustrative scenario: a startup has five feature teams and one monolithic application released through a single pipeline. The CTO proposes adopting the whole Spotify model ahead of planned hiring.

**Walkthrough:**

The problem list shows two real issues: teams waiting on shared backend engineers, and inconsistent frontend practices. The element ratings show squads as high benefit but poor fit, because no team can release on its own; the architecture failure mode applies directly. Tribes rate low on benefit, since five teams can still coordinate by talking to each other.

The recommendation is to adopt guilds now for frontend practice, to start decoupling the release pipeline as a precondition for squads, and to skip tribes and chapters for now. The evaluation is scheduled for review once the first services can be released independently.

## A regulated company weighing partial adoption

**Scenario:**

Illustrative scenario: a financial services technology group has separate teams for backend, frontend, testing and operations. Production releases require documented approval, and leadership wants faster delivery.

**Walkthrough:**

Cross-functional squads rate high on benefit, because hand-offs between the discipline teams cause most of the delay. The compliance requirement adds risk to letting each squad choose its own process, so the recommendation keeps squad-level freedom for internal process while standardizing the release approval steps as an enabling constraint.

Chapters are adopted for craft, but line management stays with engineering managers, to avoid the delivery accountability gap critics describe. Tribes are deferred until squads have been running for a few quarters and real dependency data exists.

## Reviewing an adoption that went wrong

**Scenario:**

Illustrative scenario: a company renamed its teams as squads and tribes a year ago. Product owners complain that nobody owns engineering delivery, and squads block each other on shared components.

**Walkthrough:**

The team runs the evaluation backwards, checking which failure modes occurred. Two are clear: teams were renamed without changing who made decisions, and chapter leads became line managers without anyone owning each squad's delivery. The dependency survey shows most blocking dependencies sit on two shared components.

The recommendation keeps squads but gives each an accountable engineering lead, moves the two shared components into a platform team with a published interface, and adds a short set of shared collaboration practices. The company schedules squad health checks to see whether the changes help.
