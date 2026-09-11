# FAQ: Running Continuous Learning Loops from Field Deployments

## How long should it take to log a single field observation?

Target 3-5 minutes per entry. If you consistently spend more than 5 minutes, your registry template has too many required fields. Strip it back to the essentials: date, customer, category, severity, title, description, and time cost. You can always add enrichment fields later as optional columns, but every required field adds friction that compounds across dozens of entries per month.

The test is whether an engineer in the middle of a stressful deployment day will still log the observation. If the template feels like a burden, they will not.

## How do I run continuous learning loops when I am the only forward deployed engineer?

Solo FDEs face a unique challenge: there is no cross-engineer pattern detection because you are the only observer. Compensate by being more disciplined about cross-customer comparison during your weekly scans. After 4-6 weeks, you will have enough entries to spot patterns across your own accounts. Also consider pulling in adjacent signal sources, support tickets, customer success notes, sales call transcripts, as supplementary entries in your registry.

Tag these with a different source label so you can distinguish direct observations from secondhand reports. The biweekly sync with product is even more important for solo FDEs because it is your only mechanism for validating whether your observations match what the product team expects.

## Should I run the learning loop before or after transitioning field learnings into product features?

The learning loop is the upstream process that feeds the transition. You run the loop continuously from your first day of deployment. The transition skill, covered in [transitioning field learnings into product features](https://tryhamster.com/skills/transitioning-field-learnings-into-product-features), kicks in when a pattern has been confirmed, scored, and briefed. Think of the learning loop as the sensing and synthesis layer, and the transition as the advocacy and execution layer.

Without the loop, you have nothing structured to transition. Without the transition skill, your loop produces a well-organized registry that nobody acts on.

## How do I prevent my field insight registry from becoming stale?

Staleness has two forms: entries that describe problems already fixed, and a registry that stopped receiving new entries. For the first, mark entries as resolved during your weekly scan whenever a product fix ships, and archive resolved entries quarterly. For the second, track weekly entry volume as a leading indicator. If volume drops below 3 entries per engineer per week for two consecutive weeks, investigate.

Common causes are capture fatigue (simplify the template), perceived futility (share wins from the biweekly sync more visibly), or a genuinely quiet deployment period (rare, but possible). The quarterly audit is your structural safeguard against both forms of staleness.

## What tools work best for the field insight registry?

Use whatever your team already uses for structured collaboration. Notion databases, Airtable bases, Linear projects, and even Google Sheets all work. The tool matters far less than the habit of daily capture and weekly review. Avoid building a custom application unless you have more than 20 FDEs generating hundreds of entries per month, at which point searchability and automated pattern detection become genuine requirements.

For teams of 3-10 engineers, a well-structured spreadsheet or database view with filter and sort capabilities is sufficient. The single non-negotiable technical requirement is that every field engineer must have write access and every product stakeholder must have read access without requesting permissions.

## How do I handle sensitive customer information in the registry?

Separate customer-identifying details from the technical observation. Your registry entry should describe the problem in terms of product behavior, environment characteristics (cloud provider, data volume, integration type), and impact. It should not include customer proprietary data, credentials, or business-sensitive metrics. Use the customer's name for internal routing and pattern aggregation, but ensure the registry has appropriate access controls matching your company's data classification policy.

When preparing briefings for audiences beyond the FDE and product team (such as leadership or sales), anonymize to customer tier or industry segment unless the customer has explicitly approved being named.

## Why does my pattern priority score keep changing between reviews?

Priority scores should change as new data arrives. Frequency increases when another customer encounters the pattern. Revenue weight shifts when a high-ARR customer is added to or removed from the affected list. Time cost estimates improve as you accumulate more data points on actual resolution hours.

This drift is healthy and expected. If scores are volatile because different reviewers apply the 1-5 scales inconsistently, write explicit anchor definitions for each score level (for example, frequency 1 = single customer, frequency 3 = 3-5 customers, frequency 5 = more than 8 customers) and include these anchors in the registry template as a reference.
