# Examples: Mapping Shape Up Scopes Instead of Tasks

## From role lists to scopes

**Scenario:**

Illustrative scenario: a designer and a programmer are adding appointment booking to a small clinic app. After the first week they have two lists, Design and Backend, with a dozen tasks checked off between them and nothing a user can try.

**Walkthrough:**

They stop and pick one core interaction to finish: choosing an open time slot. The designer builds a plain slot picker in the app's templates, and the programmer wires it to the calendar data. Two days later, anyone on the team can pick a slot on the staging server.

With that working, they regroup the remaining tasks into scopes named after the product: Pick Slot (now done), Confirm Booking, Reminders and Staff View. Each list holds both design and programming tasks. The next status conversation is short: Pick Slot is done, Confirm Booking is downhill, and Reminders still has an open question about text messages.

## An iceberg scope

**Scenario:**

Illustrative scenario: a team is building an export feature for an accounting tool. The UI is one button and a settings dialog, but the export has to produce files that match several tax formats.

**Walkthrough:**

At first the team treats Export as one scope, and its dot sits uphill for days while the button and dialog are long finished. They recognize an iceberg: most of the work is below the surface. They split it into Export UI, which they mark done, and one scope per format family, so each format can be finished and checked on its own.

Before accepting the complexity, they question it. The pitch only promised the two formats most customers use, so the others become nice-to-haves marked with a tilde. The iceberg shrinks to something the team can finish inside the cycle.

## A growing Chowder list

**Scenario:**

Illustrative scenario: halfway through a cycle on a team inbox feature, the team's Chowder list of loose tasks has grown to seven items.

**Walkthrough:**

Reading the list, the team notices that five of the items are about what happens when a conversation is assigned to someone who is away: an out-of-office flag, reassignment, a notice to the sender and two edge cases. That is a scope hiding in the chowder.

They create an Away Handling scope, move the five tasks into it, and mark two of them as nice-to-haves. The Chowder list drops back to two genuinely unrelated items, and the new scope gets its own dot on the hill chart.
