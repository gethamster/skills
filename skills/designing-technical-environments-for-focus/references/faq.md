# FAQ: Designing Technical Environments That Support Team Focus

## Does Crystal require specific tools for the technical environment?

No. [The cited Crystal material specifies capabilities such as automated tests, configuration management and frequent integration rather than particular vendors or languages](https://developerdotstar.com/mag/bookreviews/cockburn_crystal_clear.html). Any toolchain that delivers those capabilities qualifies. Starting from what the team already uses usually costs less focus than a migration.

## How often should a Crystal team integrate its code?

[The Crystal checklist asks whether code is integrated at least twice a week](https://scribd.com/document/95144672/Agile-2007). Treat that as a floor rather than a target. Teams with fast, trusted automated tests often integrate daily or on every change, which keeps each merge small and easy to reason about.

## What does protected focus time actually look like?

[The focus question asks whether each person knows their top two priority items and has at least two consecutive days and two uninterrupted hours per day to work on them](https://scribd.com/document/95144672/Agile-2007). In practice that means agreed priorities, shared quiet blocks on calendars, and a defined route for urgent requests. If blocks are regularly broken, the agreement needs renegotiating.

## Should we build a full test suite before integrating more often?

No, but do not increase integration frequency with no tests at all, because breakages will simply spread faster. Automate tests around the code that changes most first, then raise the integration rhythm as confidence grows. Adding a test with every change lets both improve together.

## How does this skill relate to frequent delivery?

A traceable history, automated tests and frequent integration are what make it practical to put tested, usable software in front of users regularly. Without them, each delivery requires a manual verification effort that competes with development time. The cadence and cycle itself are covered in [implementing frequent delivery cycles](https://tryhamster.com/skills/implementing-frequent-delivery-cycles).
