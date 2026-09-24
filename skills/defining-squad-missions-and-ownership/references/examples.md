# Examples: Defining Squad Missions and Product Ownership Areas

## Splitting a layered platform team by user outcome

**Scenario:**

Illustrative scenario: a streaming app has a frontend team, an API team and a data team, and every feature needs all three.

**Walkthrough:**

The product manager inventories user journeys and finds three clear outcomes: finding something to watch, playing it smoothly, and managing a subscription. She tests each for end-to-end ownership and sees that each needs a slice of frontend, API and data work. The teams are reformed into three squads, one per outcome, each with the skills to ship its slice. The discovery squad's mission becomes "help viewers find something they want to watch within their first minute in the app."

Its boundary lists the home screen, search and recommendations service as owned, the playback start event as a shared interface, and billing as out of scope. After the change, most features ship within one squad instead of crossing three.

## Resolving an overlap between two squads

**Scenario:**

Illustrative scenario: an onboarding squad and a growth squad both keep changing the signup form, and their experiments interfere.

**Walkthrough:**

The product manager publishes both boundaries side by side and the overlap is obvious: both list the signup form as owned. She compares the missions. The onboarding squad's mission is about getting new users to their first successful action, while the growth squad's is about bringing visitors to the point of signing up. The form sits at the handover, so she assigns it to onboarding and defines the landing page link into the form as the interface growth owns.

Growth now proposes form changes to onboarding through a short request, and onboarding decides. Interfering experiments stop, and each squad's results become readable again.

## Giving a new squad direct stakeholder contact

**Scenario:**

Illustrative scenario: a newly formed payments squad keeps receiving requirements secondhand from a central operations team.

**Walkthrough:**

The squad's product owner maps stakeholders and finds that finance, customer support and fraud review all have needs in the payments area. None of them knew the squad existed; they sent everything to central operations, which rewrote and forwarded it. The product owner names a contact in each group and sets up a fortnightly review with them plus a shared channel for urgent issues. Central operations keeps a read-only view of the squad's priorities instead of acting as a gate.

Within a couple of cycles, support starts reporting failed payment patterns directly, and the squad reprioritizes its list around the most frequent failure.
