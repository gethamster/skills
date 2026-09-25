# Examples: Building a MoSCoW Roadmap for Phased Delivery

## A records system replaced in three increments

**Scenario:**

Illustrative scenario: a charity is replacing its donor records system before its current licence ends. The project has a fixed end date and a categorized list with nine project Musts.

**Walkthrough:**

The team marks each Must with the date it is first needed. Recording donations and producing tax receipts are needed on the first day of use, so they are Musts for the first increment. Migrating historic records is a project Must but is needed only before the old system is switched off, so it is a Could for the first increment and a Must for the third. Bulk mailing tools are needed before the year-end appeal and land in the second.

Each increment gets its own objective and its own Coulds as contingency. The roadmap for trustees shows the first increment in detail, the second and third as objectives, and the Won't haves (a volunteer portal and event ticketing) as out of scope for this project.

## A dependency that reordered the roadmap

**Scenario:**

Illustrative scenario: a product team plans a customer analytics feature for its second increment. Mapping dependencies shows it needs an event tracking layer that was placed as a Could for the first increment.

**Walkthrough:**

Because a Must cannot depend on anything below a Must, the team has two choices: make event tracking a Must in the first increment, or move the analytics feature later. Promoting tracking would push the first increment's Must effort above the agreed level.

The team moves a lower-value first-increment Must, an admin theme editor, back to Should after confirming it has a workaround. Event tracking becomes a first-increment Must, and the analytics feature stays in the second increment. The roadmap now shows the foundation arriving before the feature that needs it.

## Re-planning at an increment boundary

**Scenario:**

Illustrative scenario: at the end of an increment for a field service app, two Shoulds and three Coulds were not delivered. Early users have also asked for offline mode.

**Walkthrough:**

The team re-prioritizes every unmet item against the next increment's objective. One Could, a colour theme option, becomes a Won't have for the next increment because it adds little. One Should, photo upload on jobs, becomes a Must, because the next increment's objective is to replace paper job sheets.

Offline mode is tested like any new requirement. It passes the consequence test for the next increment, since engineers work in areas with no signal. To keep the Must effort in balance, a reporting feature moves to the increment after. The updated roadmap goes out with a short note on what moved and why.
