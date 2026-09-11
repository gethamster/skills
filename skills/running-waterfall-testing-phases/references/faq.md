# FAQ: Running Structured Testing and Verification Phases

## How long should the testing phase take in a waterfall model project?

Testing typically consumes 25-40% of total project duration in a waterfall model project. The exact length depends on system complexity, the number of requirements, and regulatory requirements. A system with 200 requirements might need 4-8 weeks of dedicated testing across all four levels.

## What happens if critical defects are found late in the waterfall model testing phase?

Critical defects must be fixed and retested before exit criteria can be met. If the fix requires significant rework, the project may need to return to the development phase, and affected testing levels must be re-executed. This is why early defect detection through thorough unit and integration testing is crucial — defects found later are exponentially more expensive.

## Can you automate testing in a waterfall model project?

Yes, and you should where practical. Automated unit tests and integration tests dramatically speed up regression testing after defect fixes. However, system testing and acceptance testing often require manual execution, especially for usability, exploratory scenarios, and stakeholder validation that requires human judgment.

## What is the difference between verification and validation in waterfall testing?

Verification asks 'did we build the product right?' — it checks that the system conforms to its specifications through unit, integration, and system testing. Validation asks 'did we build the right product?' — it confirms the system meets actual user needs, primarily through acceptance testing. The waterfall model's testing phase covers both.

## Who is responsible for acceptance testing in a waterfall model?

Business stakeholders, end users, or their designated representatives own acceptance testing. The testing team facilitates by preparing the environment, test scenarios, and test data, but the actual pass/fail judgment comes from the people who will use the system or who commissioned it.

## How does the waterfall model testing phase differ from agile testing?

In the waterfall model, testing is a dedicated phase that occurs after development is complete, covering the entire system at once. In agile, testing is continuous and happens within each sprint alongside development. The waterfall approach provides comprehensive, documented verification but discovers defects later, while agile finds defects earlier but may lack the systematic traceability that regulated industries require.
