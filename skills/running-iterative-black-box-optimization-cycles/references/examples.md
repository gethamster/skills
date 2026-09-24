# Examples: Running Iterative Black-Box Optimization Cycles

## Moving the answer up on a comparison page

**Scenario:**

Illustrative scenario: a project software company tracks 40 fixed prompts about tool comparisons across two engines. Baseline citation rate for its comparison page sits between 20% and 30% across five repeated runs.

**Walkthrough:**

The team hypothesizes that moving the direct comparison summary from the bottom of the page to the first paragraph will raise citation rate on the comparison prompt group. They make only that edit and wait a week for the engines to pick it up. They re-run all 40 prompts five times on both engines with the same settings. Citation rate on comparison prompts now ranges from 34% to 41%, clearly above the baseline band, while untargeted prompts stay flat.

They keep the change and record the new range as the next baseline.

## Reverting a quote-heavy rewrite

**Scenario:**

Illustrative scenario: a health publisher adds several expert quotations to a guide, hoping to be quoted more often. Its baseline showed the guide cited on roughly half of 30 symptom prompts.

**Walkthrough:**

After the edit, the guide appears in slightly more quoted sentences when it is cited. But across repeated runs, it is now cited on only about a third of the prompts, which falls below the baseline band. Checking saved answers shows the engines now cite a competitor's plainer page for several core symptom questions. The team concludes the rewrite traded retrieval for prominence.

They revert, log the result, and plan a smaller test that adds one quotation without restructuring the opening section.

## Separating a competitor surge from a failed edit

**Scenario:**

Illustrative scenario: a B2B security vendor tightens the topical focus of its product overview and sees its citation rate unchanged after the re-run.

**Walkthrough:**

Before reverting, the analyst checks the competitor columns in the snapshot. A rival published a new report during the gap and now appears first on most targeted prompts, displacing two other vendors. The vendor's own position held steady while those two dropped out. The team marks the result as inconclusive rather than failed, extends the test by one more cycle, and adds the rival's report topics to the next hypothesis list.
