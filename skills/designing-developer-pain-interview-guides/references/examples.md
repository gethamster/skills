# Examples: Designing Pain-Focused Interview Guides for Developers

## Scoping the problem statement for a database migration tool

**Scenario:**

Illustrative scenario: a startup is building a tool for schema migrations. The founders' first draft of the problem statement is "making databases easier."

**Walkthrough:**

They test the statement on two engineers outside the company. One talks about query performance, the other about hosting costs. The statement is too broad, so the answers wander. The founders try "migration error messages" next and realize it is so narrow that a member could answer in one sentence.

They settle on "safe schema changes." In the pilot calls, the magic wand question scoped to safe schema changes gets people describing rollbacks, locking, and review processes, all within territory the startup could address. The founders freeze the statement and write the other questions around it.

## Removing leading wording from a draft guide

**Scenario:**

Illustrative scenario: a founder's first draft guide for an observability product includes the question "How frustrating is it that your logs and traces live in different tools?"

**Walkthrough:**

A teammate reviews the draft and points out that the question assumes the person is frustrated and assumes logs and traces are separated. The founder rewrites it as "Tell me about the last time you investigated a production incident. What did you look at, and in what order?"

The teammate finds two more issues: a question that names a planned feature, and a follow-up that rephrases the member's words as "so it's slow." The founder removes the feature question and replaces the follow-up with "What happened next?" The final guide has seven questions: the three core questions and four about recent incidents.

## Versioning the guide for the second round

**Scenario:**

Illustrative scenario: a team has finished first calls with its members and synthesized the top pains per persona. The second calls will ask members to react to that ranking.

**Walkthrough:**

The team writes a second version of the guide. It opens by showing the ranked pains for the member's persona and asks whether the ranking matches their experience, what is missing, and which pain they would fix first. It ends with the magic wand question again, scoped to the top-ranked pain, to see whether a narrower frame surfaces anything new.

They label the documents as the first-round and second-round guides and add a field to their call log recording which version each call used. When they later compare answers, they only compare calls that used the same version.
