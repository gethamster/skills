# FAQ: Writing Waterfall Requirements Specification Documents

## What is a software requirements specification?

It is a document that describes the software to be built: its purpose, its users and environment, and its functional and non-functional requirements. In a waterfall project it is approved and baselined before design starts, and all later work traces back to it. The ISO/IEC/IEEE 29148 standard, which replaced IEEE 830, describes its usual content.

## What makes a requirement testable?

A testable requirement states a specific behavior or quality under specific conditions, so a tester can design a test with a clear pass or fail result. Vague words like fast, easy or robust make a requirement untestable until they are replaced with measurable criteria. A useful check is to ask how you would prove the requirement is met.

## Should the specification describe how the system works?

It should describe what the system must do and under what constraints, and leave how to the design phase. Stating a solution, such as a particular screen layout or technology, removes options the designers may need. Include a design constraint only when it is a real requirement, for example an interface the system must use.

## How detailed should a waterfall requirements document be?

Detailed enough that designers can design from it and testers can write tests from it without guessing. Because changes after the baseline go through change control, gaps found later are costly. At the same time, avoid padding: each statement should be necessary and traceable to a real source.

## What happens to the document after it is baselined?

It becomes the reference for design, testing and acceptance, and it is changed only through approved change requests. Each approved change produces a new version with a record of what changed and why. The traceability matrix is updated so the change can be followed through design and tests.
