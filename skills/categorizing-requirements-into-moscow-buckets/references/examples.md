# Examples: Categorizing Requirements into MoSCoW Categories

## A booking app's first release

**Scenario:**

Illustrative scenario: a small team is building an appointment booking app for a chain of clinics, with a fixed launch date. Twelve requirements are on the list, and the clinic operations lead has proposed eight of them as Must haves.

**Walkthrough:**

The product owner starts all twelve at Won't have and asks for the case for each. "Patients can book an available slot" passes the consequence test: without it there is nothing to launch. "Store patient data in line with the health privacy rules" passes as not legal without it. "Automatic reminder texts" fails the workaround question, because front-desk staff already phone patients the day before, so it becomes a Should.

"Clinic staff can see the day's bookings" is proposed as a Must. It passes, but it depends on "export to the clinic's scheduling system", which had been marked Could. The team either promotes the export or replaces it with a simple on-screen list for launch. They choose the list, and the export stays a Could. Five Musts remain, each with a written reason.

## Separating Should from Could with an agreed rule

**Scenario:**

Illustrative scenario: an internal finance tool has a list of improvements after its Musts are settled. The team agreed at the start that a missing item is a Should if it affects every finance user each week, and a Could if it affects one role or happens rarely.

**Walkthrough:**

"Bulk approve invoices" is used by every approver weekly, so it is a Should. "Custom colour themes" affects no one's work, so it is a Could. "Year-end archive export" is used by one person once a year, so it is a Could for this increment, with a note that it becomes a Must before the year-end close.

Two members disagree about "saved report filters". The rule settles it: only the controller uses them, so it is a Could. The discussion takes minutes because the rule was agreed before anyone had a favourite.

## Splitting a disputed Must

**Scenario:**

Illustrative scenario: a customer portal team is told that "full search" is a Must. The estimate for full search alone would take most of the timebox.

**Walkthrough:**

The team splits the requirement into search by order number, search by product name, filters and fuzzy matching. Only search by order number passes the consequence test, since support staff cannot help customers without it. Product name search becomes a Should, filters a Could, and fuzzy matching a Won't have this time.

The sponsor accepts the split because the Must that remains is the part she needed on launch day. The acceptance criterion for search speed is also split: a Should target and a looser Must limit, which gives the team room if performance work runs long.
