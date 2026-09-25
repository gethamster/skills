# Examples: Modeling Token Cost Pass-Through and Markup

## Summarization Feature in a B2B Product

**Scenario:**

Illustrative scenario: a B2B knowledge product adds meeting summaries and wants to sell them as an add-on priced per summary. The team knows its model bill but has never tied it to a price.

**Walkthrough:**

The team takes cost per summary from its unit economics table and sets a target margin with finance. Dividing cost by one minus the target margin gives a raw price, which it rounds to a simple per-summary figure. The scenario engine then shows that a vendor price cut would lift margin well above target, while a planned change to include action items would lengthen outputs and push margin toward the floor. The team writes two triggers: raise the included summaries per plan if margin stays above target for a quarter, and test a smaller model for short meetings if margin approaches the floor.

## Credit-Based Writing API

**Scenario:**

Illustrative scenario: a writing API sells credits to developers. Different endpoints use different models, and some cost several times more than others per call.

**Walkthrough:**

The team fixes one credit price and builds a conversion table that sets how many credits each endpoint consumes, based on its cost per call and the target margin. Expensive endpoints cost more credits, so the markup lives in the credit price and the table absorbs cost differences. When a vendor cuts prices on one model, the team lowers that endpoint's credit cost rather than the credit price, which passes the saving to the users of that endpoint without touching the rest of the catalog.

## Pre-Revenue Tutoring App

**Scenario:**

Illustrative scenario: a pre-revenue tutoring app needs a pricing slide for investors. It has pilot data from a small group of students but no paying customers.

**Walkthrough:**

The team builds the cost calculator from pilot sessions and labels every input as provisional. It prices a monthly plan with an included number of tutoring sessions at a target margin, then runs scenarios for heavier students, longer sessions and lower vendor prices. The slide shows the price, the margin at typical and heavy use, and the break-even number of sessions per student. The team notes that the pilot group may not represent paying families and commits to re-running the model after the first months of paid use.
