# Examples: Translating TAB Findings into Product Roadmap Decisions

## Turning a requested feature into an opportunity

**Scenario:**

Illustrative scenario: several TAB members of a startup building an API testing tool say they want "a button to export tests to our CI."

**Walkthrough:**

The team applies the solution-in-disguise test and asks whether there is more than one way to address this. There is only one, so it is a solution. They go back to the transcripts and look at why members wanted it. The underlying need is that API tests written by developers never run before merges, so breaking changes reach staging.

Restated as an opportunity, "breaking API changes reach staging unnoticed" has several possible solutions: a CI export, a hosted runner triggered by pull requests, or a check that compares API schemas. The team takes all three into the threshold step instead of building the button first.

## Using third-call answers to size a first release

**Scenario:**

Illustrative scenario: a startup working on build caching has validated that slow CI builds are the top pain for its developer persona. In the third calls, the founder describes a hypothetical result and asks whether it would be compelling.

**Walkthrough:**

The founder asks members whether cutting their typical build time by a small amount would change how they work. Most say no: a small saving disappears into the rest of their day. When asked about builds short enough to wait for without switching tasks, several say that would change their workflow, because they would stop context-switching during builds.

The team records the threshold as "short enough that developers wait instead of switching tasks," with the range members described. They drop a candidate solution that could only deliver a modest saving and commit to one aimed at the threshold, noting the evidence next to the roadmap item.

## Adding what the gatekeeper needs

**Scenario:**

Illustrative scenario: a startup's top roadmap candidate, an AI assistant that edits infrastructure code, is popular with developer members. Security engineers on the TAB describe a different top pain: nobody can tell who changed what in production.

**Walkthrough:**

The team runs the persona check and sees the conflict. The assistant would add another source of changes, making the security persona's top pain worse, and security engineers are the role that approves new tooling.

They adjust the commitment: every change the assistant makes is attributed and logged in a form the security team can review. In later calls, the story they test with members names the shift toward AI-written infrastructure changes, describes a future where teams move faster without losing track of who changed what, and presents both the assistant and the audit trail as part of getting there. Security members say the audit trail is what would let them approve it.
