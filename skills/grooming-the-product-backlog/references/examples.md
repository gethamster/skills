# Examples: Grooming and Refining the Product Backlog

## Example: Refining an E-Commerce Search Epic into Sprint-Ready Stories

**Scenario:**

A Product Owner has a high-priority epic: 'As a shopper, I want to search for products so I can quickly find what I need.' The epic is too large for a single sprint and lacks specific requirements. The team needs to break it down during scrum backlog refinement.

**Walkthrough:**

In the refinement session, the Product Owner shares customer research showing that 60% of users search by product name and 30% use category filters. The team decomposes the epic into four stories: (1) Basic keyword search with results list, (2) Search results with category filter, (3) Search autocomplete suggestions, and (4) 'No results' state with recommended products.

For the first story — basic keyword search — the team writes acceptance criteria: 'Given a user types a search term and presses Enter, when matching products exist, then results display with product image, name, price, and rating, sorted by relevance. Given no products match, then a friendly empty state message appears.' The team estimates it at 5 story points, comparing it to a previously completed product listing feature.

The autocomplete story surfaces an open question: should suggestions come from the existing product catalog or also include search history? The Product Owner commits to answering this by Wednesday, and the team marks the story as not yet meeting the Definition of Ready. Stories 1 and 2 are marked sprint-ready; stories 3 and 4 remain in refinement for the next session.

## Example: Re-Prioritizing During Refinement Based on Technical Discovery

**Scenario:**

During a scrum backlog refinement session for a SaaS platform, the team is reviewing a story to 'Add CSV export to the reporting dashboard,' estimated at 3 points and ranked fifth in the backlog. A developer mentions that the current reporting query is unoptimized and will time out for customers with more than 10,000 records.

**Walkthrough:**

This discovery changes the conversation. The team realizes that the CSV export story depends on a performance fix that isn't in the backlog. They create a new technical story: 'Optimize reporting query to handle datasets up to 100,000 records within 5 seconds.' They estimate this at 8 points and write acceptance criteria including specific performance benchmarks.

The Product Owner re-orders the backlog: the performance optimization moves to position 3 (ahead of the CSV export), and the CSV export moves to position 6 with an explicit dependency link. The team also flags two other upcoming stories that rely on the same reporting query, noting they'll benefit from the optimization. This is refinement at its best — surfacing risks and dependencies before they disrupt a sprint, and giving the Product Owner data to make informed priority trade-offs.
