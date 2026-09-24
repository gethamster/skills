# Examples: Conducting Domain Discovery with Customers

## Claims operations at an insurer

**Scenario:**

Illustrative scenario: an engineer embeds with a claims team that wants faster triage of incoming claims, and the kickoff deck describes a clean three-step intake process.

**Walkthrough:**

In the first week the engineer joins the team's channel and daily meetings and requests read access to the claims system. Shadowing two adjusters, they notice both paste policy numbers into a separate lookup tool and keep a personal spreadsheet of repeat claimants. The workflow map ends up with seven steps, not three, and the spreadsheet becomes a flagged data source with no owner. The people map shows the sponsor wants lower handling time while adjusters mainly want fewer re-keyed fields.

At playback, the team corrects two steps and confirms that triage of one claim category is the first focus.

## Maintenance scheduling at a manufacturing plant

**Scenario:**

Illustrative scenario: a plant manager asks for better maintenance scheduling, and the engineer has access to the maintenance system from day one.

**Walkthrough:**

Instead of starting with the system data, the engineer spends shifts with the maintenance planners. They find that planners override the system's schedule each morning based on a whiteboard updated by floor supervisors. The data flow map records the whiteboard as the real source of truth for machine availability, updated by hand and never digitised. The constraints log captures a safety rule that certain machines cannot be serviced during specific production runs, which appears nowhere in the system.

Playback with supervisors adds one more exception, and the team agrees the build must start from supervisor input, not system records.

## Recovering from shallow discovery

**Scenario:**

Illustrative scenario: an engineer skipped observation, built a prototype from interviews with a department head, and every demo is surfacing new requirements.

**Walkthrough:**

After the third demo reveals a previously unknown approval step, the engineer pauses feature work. They spend several days shadowing the analysts who would use the tool and rebuild the workflow map from what they see. The new map shows that approvals route through a second team that was never on the people map. The engineer adds that team's lead as a stakeholder, logs their compliance constraint and replays the corrected maps to everyone.

Subsequent demos refine details instead of introducing new steps, which signals the picture is now stable enough to build on.
