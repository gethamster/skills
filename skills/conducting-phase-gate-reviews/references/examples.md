# Examples: Conducting Phase Gate Reviews in a Waterfall Project

## Requirements gate with a conditional go

**Scenario:**

Illustrative scenario: a team replacing an internal billing system reaches the end of its requirements phase. The exit criteria say every requirement must have an identifier, a source stakeholder and an acceptance test reference, and the finance and support leads must sign off.

**Walkthrough:**

The gate package shows all criteria met except one: a handful of reporting requirements still lack acceptance test references because the finance team has not agreed the report formats. Reviewers logged their findings a week earlier, and the team has answered each one.

The sponsor gives a conditional go. Design may start on everything except reporting, and the finance lead owns agreeing the report formats by a set date. The condition goes on the tracked list, and the design gate will check it first.

## Design gate that recycles part of the work

**Scenario:**

Illustrative scenario: a vendor is building a scheduling system for a hospital department under a fixed-price contract. The design review is a contract milestone.

**Walkthrough:**

The technical reviewers find that the design for integration with the hospital's patient records system is based on an interface version that the records team plans to retire. Everything else meets its criteria.

The board recycles the integration design only. The vendor gets a short, fixed window to revise it against the current interface and present that part again. The rest of the design is baselined, and detailed work on unaffected modules continues. The recycle is recorded with its scope and re-review date, so there is no dispute later about what was approved.

## Test readiness gate that holds

**Scenario:**

Illustrative scenario: an internal team is about to start system testing for a new inventory application. The entry criteria for testing include a stable build, an approved test plan and a test environment with realistic data.

**Walkthrough:**

The review shows that the build and plan are ready but the test environment still has placeholder data, because the data masking work slipped. Testing on that data would miss the defects the team most needs to find.

The decision-maker puts the gate on hold. The data work gets an owner and a date, and the gate is rescheduled for that date rather than opened now with a condition. The project manager updates the schedule to show the slip openly.
