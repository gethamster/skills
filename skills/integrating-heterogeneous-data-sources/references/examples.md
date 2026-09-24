# Examples: Integrating Heterogeneous Data Sources

## Maintenance scheduling across three systems

**Scenario:**

Illustrative scenario: an engineer is embedded with a regional utility to build a maintenance scheduling tool that needs asset records, work orders and crew rosters from three separate systems.

**Walkthrough:**

On day one the engineer lists the three systems and requests read-only access to each, learning that crew rosters sit in a spreadsheet owned by one dispatcher. Profiling shows asset IDs are numeric in the asset system but prefixed with a region code in the work order system. The engineer writes a mapping rule that strips the prefix, and the operations manager confirms the asset system is authoritative for asset location. Connectors pull work orders hourly and the roster file nightly, logging any unmatched asset IDs.

During validation a planner spots that retired assets are appearing, which traces back to an undocumented status value added to the mapping. The blocker log records the spreadsheet dependency as a risk for the sponsor to address.

## Claims triage with a restricted data source

**Scenario:**

Illustrative scenario: an insurance customer wants AI-assisted claims triage, but the claims history database sits behind a network the vendor's cloud cannot reach.

**Walkthrough:**

The governance review in the first week surfaces the restriction before any code exists. Rather than fight it, the engineer proposes running the extraction and transformation inside the customer's network and sending only derived, masked features outward. The security team approves that design with named fields excluded. The mapping document lists each excluded field and why, so later requests to add them go through review.

Connectors are built against the policy system's official API instead of its tables, since an upgrade is scheduled. Validation with two senior adjusters reconciles triage inputs against case files they pick at random.

## Warehouse inventory with conflicting counts

**Scenario:**

Illustrative scenario: a distributor's inventory lives in an ERP and a separate warehouse management system, and the two regularly disagree on stock levels.

**Walkthrough:**

The engineer profiles both sources and finds the ERP updates in nightly batches while the warehouse system updates on every scan. Instead of choosing a winner alone, the engineer brings examples to the operations director, who decides the warehouse system is authoritative for on-hand counts and the ERP for cost. Those rules go into the mapping document with the director's name and date. Connectors apply them in one transformation module and flag items where the two sources differ beyond a tolerance the team picks, for example five units.

Warehouse leads review the flagged list during validation and confirm the tool matches their physical counts. The flag rule is logged as a candidate pattern for other distribution customers.
