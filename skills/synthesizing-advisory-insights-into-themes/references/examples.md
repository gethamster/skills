# Examples: Synthesizing Advisory Call Insights into Actionable Themes

## Example: Synthesizing 25 Advisory Calls for a CI/CD DevTool Startup

**Scenario:**

A seed-stage devtools company building a CI/CD platform has completed 25 advisory calls over 6 weeks through their Technical Advisory Board. The founder has notes from each call in a shared Google Doc. The team needs to decide what to build for their v1 launch and how to position it in the market.

**Walkthrough:**

The founder and head of product spend a half-day on extraction, pulling 187 discrete observations from the 25 call transcripts. They apply open codes like `pipeline-debug-opacity`, `yaml-config-complexity`, `ci-flakiness-distrust`, `slow-feedback-loop`, `env-setup-onboarding`, and `vendor-lock-in-fear`.

During affinity mapping (done in Miro), they cluster codes into 8 candidate themes. After writing theme statements with evidence, they score each theme:

1. **Pipeline debugging is opaque and time-consuming** (Freq: 5, Severity: 5, Opportunity: 4 = 100) — 18 of 25 advisors described spending significant time debugging CI failures with inadequate tooling.
2. **YAML-based configuration creates maintenance burden at scale** (Freq: 4, Severity: 4, Opportunity: 3 = 48) — 14 advisors described configuration as a persistent pain point.
3. **CI flakiness erodes team trust in automated testing** (Freq: 4, Severity: 5, Opportunity: 3 = 60) — 12 advisors described skipping or ignoring CI results due to flakiness.

They validate against devtools technical SEO signals: "debug CI pipeline" gets 1,200 monthly searches with weak existing content; "YAML CI config" gets 800 monthly searches dominated by docs from existing vendors. This confirms both themes have organic search demand.

The team decides to focus v1 on pipeline debugging visibility (Theme #1) and positions their content strategy around the exact language advisors used — terms like "CI black box" and "pipeline forensics" that they discovered during coding.

## Example: Rolling Synthesis Revealing an Emerging Theme Over Three Batches

**Scenario:**

A developer tools company running an ongoing TAB process synthesizes insights in batches of 10 calls each month. During the first batch, a code about "AI-generated code review friction" appears only twice and doesn't make it into any theme. By the third batch, it's appeared in 8 of 30 total calls.

**Walkthrough:**

In Month 1, the team codes 10 calls and identifies 5 themes. Two advisors mention friction with AI-assisted code generation tools, but it doesn't cluster into a strong theme. The team notes it as a "weak signal" in their outliers section.

In Month 2, 4 of the next 10 advisors independently raise problems with reviewing AI-generated pull requests — code that technically works but is hard to understand, debug, or maintain. The team creates a new candidate theme: "AI-generated code creates downstream review and maintenance burden."

By Month 3, this theme has become the #2 priority across all 30 calls, with advisors using phrases like "AI code debt" and "review fatigue." The team checks search trends and finds "review AI generated code" is trending upward rapidly with almost no quality content addressing it.

This example shows why rolling synthesis beats one-time analysis: emerging problems surface gradually, and batch synthesis lets you catch them before they become obvious to everyone in the market. The team updates their devtools technical SEO strategy to target this emerging topic while competition is still low.
