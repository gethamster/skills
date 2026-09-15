# FAQ: Building a Journey Portfolio Inventory

## How many journeys should a typical customer journey inventory contain?

The number varies significantly by organization size and complexity. A startup typically catalogs 20 to 40 journeys. A mid-size company with multiple products usually has 50 to 120 journeys. Large enterprises with multiple business lines may have 150 to 300 or more.

If your inventory has fewer than 15 entries, you almost certainly have collection gaps. If it exceeds 300, consider whether you have gone too granular at the L3 level and should roll some entries up to L2.

## Should I build the customer journey inventory before or after creating individual journey maps?

Build the inventory first. The inventory tells you which journeys exist across the organization and helps you prioritize which ones to map in detail. Mapping individual journeys before building the inventory is like writing chapters of a book before creating the table of contents. You will produce useful artifacts, but you will miss gaps, duplications, and dependencies that only the portfolio view reveals.

Existing maps feed into the inventory as inputs, but the inventory itself should come before any new mapping effort.

## How do I handle journeys that span multiple departments or lifecycle stages?

This is common and expected. Assign each journey a primary lifecycle stage and a primary owner, then use a secondary stage field and a notes column to capture the cross-cutting nature. For example, an 'enterprise renewal' journey primarily belongs to the retention stage and is owned by customer success, but it involves finance (invoicing), legal (contract terms), and sales (upsell opportunity). Document all involved teams in the entry.

These cross-cutting journeys are often the most valuable to optimize because their friction comes from handoff failures between teams.

## What tool should I use to store the customer journey inventory?

Start with the simplest tool your team will actually use. A shared Google Sheet or Airtable base works well for inventories under 100 entries. For larger portfolios or organizations that need role-based access, filtering, and visualization, dedicated journey management platforms like TheyDo, Milkymap, or Custellence are purpose-built for this. The critical requirement is that the tool supports filtering by any attribute, shared access for all stakeholders, and easy editing.

A static document like a PDF or slide deck will fail because it cannot be queried or collaboratively maintained.

## How long should building a customer journey inventory take?

The initial build typically takes 4 to 8 hours of focused work for a small organization (under 50 employees) and 2 to 4 weeks of elapsed time for a large enterprise where you need to coordinate workshops across many teams and wait for review feedback. The document audit takes 2 to 4 hours. Each stakeholder workshop takes 60 to 90 minutes. Deduplication and normalization take 2 to 6 hours depending on how many raw entries you collected.

Cross-functional review adds 1 to 2 weeks of elapsed time. Do not let the timeline expand beyond a month for the initial build, or momentum dies.

## How do I keep the inventory from becoming stale after the initial build?

Assign a single owner who is accountable for the inventory's accuracy. Set a quarterly review cycle tied to an existing organizational meeting like a QBR or planning session. Create a lightweight intake mechanism, such as a Slack channel or a simple form, where anyone can submit new journeys for addition. Tag every entry with a 'last reviewed' date and flag entries older than 6 months for re-review.

The quarterly maintenance pass should take 2 to 4 hours for a portfolio of 50 to 100 journeys. Treat the inventory like a product backlog, something that is continuously groomed, not a report that is published and archived.

## Why does my customer journey inventory keep growing uncontrollably?

Uncontrolled growth usually means you are cataloging at too fine a granularity, mixing L3 micro-variants with L2 journeys. Check whether your entries represent genuinely distinct experiences or just minor variations of the same journey. If 'signup via Google SSO' and 'signup via email' have the same touchpoints, owner, and pain points, they are L3 variants of the same L2 journey and should be consolidated. Apply the rule: if two entries would have the same journey map structure with only minor channel or input differences, they belong as variants under a single L2 entry, not as separate inventory rows.

Periodically review your inventory and roll up entries that have drifted into excessive detail.
