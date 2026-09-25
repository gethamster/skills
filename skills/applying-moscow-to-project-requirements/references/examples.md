# Examples: Applying MoSCoW to Project and Software Requirements

## Setting up a requirements list for a system replacement

**Scenario:**

Illustrative scenario: a council is replacing its permit application system before the old vendor contract ends. The project has a fixed end date, two increments and a list of requirements gathered from staff and residents.

**Walkthrough:**

The analyst adds three fields to the backlog tool: project priority, increment priority and a link to the objective. Two objectives are recorded: residents can apply and pay online, and staff can process applications without the old system. Every requirement links to one of them.

"Online payment" is a project Must and an increment Must. "Staff reporting dashboard" is a project Should: staff can run the reports from exports for a while. "Archive of old applications" is a project Must, because the records must be kept, but a Could for the first increment, since nobody needs the archive until the old system is switched off. Keeping the two priority fields apart means the archive does not quietly fall out of the project.

## A change request mid-timebox

**Scenario:**

Illustrative scenario: a software team is halfway through a timebox when the sales director asks for a new export format that a prospective customer wants.

**Walkthrough:**

The product owner runs the request through the list before anyone starts it. The consequence test fails: the release is still worth shipping without the format, and the customer can use the existing export with a manual conversion step. The request becomes a Should for the next timebox and a Won't have for the current one.

The sales director asks for it now anyway. The product owner shows the timebox list and asks which current Must or Should would move down to make room. Nobody wants to drop anything already promised, and the decision is recorded on the list with the reason.

## Bringing technical work onto the list

**Scenario:**

Illustrative scenario: an engineering lead notices that library upgrades and test automation never make it into timeboxes, because the business sponsor categorizes only features.

**Walkthrough:**

The lead adds each technical item to the main list with an objective and a stated consequence. An upgrade to a library with a published security flaw is tested against the Must criteria: shipping with a known exploitable flaw would be unsafe, so it is a Must. A test automation item has a workaround in manual regression testing, so it is a Should, with the cost of the workaround written next to it.

With technical work on the same list, the sponsor can see the trade-offs. The Must effort check now includes the upgrade, and a lower feature moves to Could to keep the balance.
