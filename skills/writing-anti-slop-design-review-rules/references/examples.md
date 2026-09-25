# Examples: Writing Anti-Slop Design Review Rules for Taste Skill

## Turning a review comment into a rule

**Scenario:**

Illustrative scenario: a reviewer keeps leaving the same comment on generated marketing pages: "every section has a tiny uppercase label above the heading, and it makes the page look templated." The comment has appeared on four pull requests.

**Walkthrough:**

The team writes a rule with the three parts. Pattern: a small uppercase, wide-tracked label above a section heading. Instead: let the heading stand alone, or use one label on the hero only. Override: documentation pages may label sections by product area. They add a checklist line that asks the agent to count these labels and report the count. The next generated page has one label on the hero, and the agent's report shows the count, so the reviewer no longer has to find them by eye.

## Banning placeholder content

**Scenario:**

Illustrative scenario: generated pages for a fintech client include testimonials from "John Doe", a company logo row that reads "Acme, Nexus, Cloudly" in plain text, and stat blocks with round, made-up percentages.

**Walkthrough:**

The team writes three content rules. Testimonials use real quotes supplied in the brief or are left as clearly marked placeholders with name, role and company fields. Logo rows use real SVG logos provided by the client or are omitted. Numbers on the page come from the brief or are marked as sample data. They add each to the pre-flight checklist. The next draft ships with marked placeholders, which the client fills in, instead of invented social proof that could have reached production.

## Pruning a rule list that grew too long

**Scenario:**

Illustrative scenario: after a few months, a team's anti-slop section has grown to several dozen bans, some copied from another project. The agent now misses rules that used to work, and reviewers find the list hard to scan.

**Walkthrough:**

The team regenerates their standard test pages and records which rules would have fired. Rules for patterns that never appear move to a reference file the skill links to. Rules copied from elsewhere that conflict with their brand, such as a ban on serif display type, are removed. The main list drops to the patterns their agent actually produces, ordered by frequency. On the next runs, the high-frequency tells stop appearing again.
