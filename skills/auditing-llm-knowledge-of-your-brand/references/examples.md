# Examples: Auditing How LLMs Represent Your Brand

## A software company confused with a similarly named competitor

**Scenario:**

Illustrative scenario: a small analytics company shares most of its name with a larger, unrelated firm in a different market. Sales reps hear prospects repeat features the company does not have, and suspect AI assistants are mixing the two up.

**Walkthrough:**

Marketing writes a fact sheet covering the product, its category, pricing model, founders and headquarters, each linked to a page on the company's site. The prompt set includes direct questions, category questions and a few prompts that name both companies together.

The audit confirms the suspicion: several answers attribute the larger firm's founding story and headquarters to the smaller company. Tracing shows that a business directory profile merged the two companies, and that the company's own About page never states where it is based.

The team corrects the directory profile, adds a clear company description with location and founders to the About page, and adds Organization structured data with sameAs links to its official profiles. It reruns the audit each month and records which answers still confuse the two companies.

## Outdated pricing in AI answers

**Scenario:**

Illustrative scenario: a subscription business moved from per-seat pricing to usage-based pricing. AI assistants still describe the old per-seat plans, and prospects arrive expecting prices that no longer exist.

**Walkthrough:**

The audit runs the pricing questions with web search on and off. With search on, most answers cite an old comparison article on a review site and a forgotten help center page on the company's own domain. With search off, the model describes the old pricing with no source.

The company updates the help center page, redirects old pricing URLs to the current pricing page, and asks the review site to update its article. It notes that answers without search will likely keep the old pricing until newer models are released.

At the next run, most search-enabled answers describe the new pricing. The no-search answers still show the old plans, which the team logs and rechecks after each major model release.

## Missing from category recommendations

**Scenario:**

Illustrative scenario: a developer tools startup is accurately described when people ask about it by name, but it never appears when people ask assistants for tools in its category.

**Walkthrough:**

The audit scores the direct prompts as mostly correct and the category prompts as a consistent absence. The answers to category questions cite independent roundups and community threads, none of which mention the startup.

Tracing shows the startup has no independent coverage in the sources the answers rely on. Its own site describes the product in its own terms and never uses the category name buyers use.

The team adds the category name to its homepage and product pages in plain language and begins earning independent coverage through the topical authority and citation skills. It keeps the category prompts in the tracking set as the main measure of progress.
