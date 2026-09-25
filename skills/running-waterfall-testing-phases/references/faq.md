# FAQ: Running Waterfall Testing Phases from Unit to Acceptance

## What are the testing levels in the waterfall model?

The usual levels are unit, integration, system and acceptance testing. Unit tests check individual modules, integration tests check how modules work together, system tests check the whole system against the requirements, and acceptance tests check that the system meets the customer's acceptance criteria. Each level has its own entry and exit criteria.

## What is a requirements traceability matrix?

It is a table that links each requirement to the design elements and test cases that address it, with the latest test results. It shows which requirements are covered and verified and which are not. It is the main evidence at the test gate and speeds up impact analysis when a requirement changes.

## How does the V-model relate to waterfall testing?

The V-model keeps the waterfall sequence but draws the test levels as the rising side of a V, each opposite the design phase it verifies. Requirements pair with acceptance testing, system design with system testing, architecture with integration testing and module design with unit testing. Its practical lesson is to plan each level of testing while writing the matching design document.

## Is testing only at the end a weakness of waterfall?

It is the main risk Royce pointed out in his original paper, because testing is the first time the whole system is exercised. Unit testing and code review during implementation reduce that risk, as do early test planning and a pilot build. Where that is not enough, teams use incremental or iterative approaches instead.

## When is the testing phase finished?

When the exit criteria in the test plan are met, which usually means all planned tests have run, every requirement is covered, no open defects of the agreed severity remain, and the customer has signed acceptance. The decision is made at the gate review using the test summary report and the traceability matrix. If the criteria are not met, the gate can hold, recycle or approve with conditions.
