# Examples: Using Breadboards and Fat-Marker Sketches

## Example: Breadboarding an invoice approval workflow for a small B2B SaaS team

**Scenario:**

A 4-person product team at a B2B invoicing startup needs to add an approval step to their invoice workflow. The appetite is 3 weeks. The shaper has talked to customers and discovered that invoices over a threshold need a manager's sign-off before sending. The core of the solution is a flow change, not a visual redesign.

**Walkthrough:**

The shaper starts by listing places: Invoice List, Invoice Detail, Approval Request Form, Pending Approval View, and Approval Confirmation. ' Submit connects to Pending Approval View, which shows the invoice status. Under Pending Approval View, the shaper adds 'Approve button' and 'Reject button,' each connecting to Approval Confirmation with different messaging. ' The shaper also notes a rabbit hole: email notifications for the approver.

' The completed breadboard fits on one sheet of paper, took 25 minutes to create, and shows the full flow without specifying any screen layout. The shaper narrates it in the pitch: 'When a user creates an invoice above the configurable threshold, a Request Approval button appears. Clicking it opens a form where they select a manager and submit. ' The betting table can now evaluate the scope, spot the intentional boundaries, and decide whether to bet.

## Example: Fat-marker sketching a dashboard for a real estate analytics startup

**Scenario:**

A 12-person product company wants to add a market overview dashboard for real estate agents. The appetite is 6 weeks. The problem is that agents currently have to visit 4 different screens to see listings, price trends, days-on-market stats, and their pipeline. The solution requires putting these views together on one screen, so spatial arrangement is the core design challenge.

**Walkthrough:**

The shaper grabs a thick dry-erase marker and a whiteboard. They draw a large rectangle for the screen. ' The entire sketch takes 60 seconds. The shaper photographs it and adds it to the pitch with this narrative: 'The dashboard is a single screen with a filterable map occupying most of the space.

To the right, three summary widgets show price trends, days on market, and the agent's pipeline count. The map and price trend chart are connected: selecting a map pin filters the chart. ' The fat-marker constraint prevented the shaper from designing the chart style, pin icons, or filter UI. Those decisions belong to the designer and developer during the 6-week cycle.

## Example: Combining both tools for a B2C onboarding redesign

**Scenario:**

A consumer fitness app with a 30-person engineering team wants to redesign their onboarding to collect user goals and recommend a personalized plan. The appetite is 6 weeks. The solution involves both a multi-step flow (collecting data) and a visual concept (the recommendation screen).

**Walkthrough:**

The shaper breadboards the onboarding flow first. Places: Welcome Screen, Goal Picker, Experience Level, Schedule Preferences, Plan Recommendation, and Confirmation. ' Each Next button connects to the subsequent place. The breadboard takes 20 minutes.

The shaper then switches to a fat-marker sketch for the Plan Recommendation screen only, because this is the one screen where spatial arrangement matters: the user needs to see their selected goals, a generated plan summary, and a 'Start Plan' action in a way that feels like a payoff, not just another form. ' An annotation reads: 'Schedule Preview shows a simplified week grid, not a full calendar. ' The pitch includes both artifacts. The breadboard proves the flow is simple enough for a 6-week cycle.

The fat-marker sketch communicates the one visual concept that matters without designing it. The betting table approves the bet with confidence that the scope is bounded.

## Example: Breadboarding an internal tool for a large enterprise ops team

**Scenario:**

A 50-person operations team at a logistics company needs a tool for dispatchers to reassign delivery routes when a driver calls in sick. Currently, dispatchers use spreadsheets and phone calls. The appetite is 3 weeks. The shaper is a product manager who sits with the dispatch team and observes the manual process.

**Walkthrough:**

The shaper identifies the flow from observation: find the absent driver's routes, see which nearby drivers have capacity, reassign stops, and notify the affected drivers. The breadboard lists five places: Driver Status Board, Absent Driver's Routes, Available Drivers List, Reassignment Confirmation, and Driver Notification Log. ' Toggling a driver to 'absent' connects to Absent Driver's Routes, which lists all stops assigned to that driver. ' The Reassign Selected button connects to Available Drivers List, which shows drivers with capacity.

Under Available Drivers List, the affordance is 'Assign to [Driver Name] button,' which connects to Reassignment Confirmation. Confirm connects to Driver Notification Log. The shaper circles 'Available Drivers List' and annotates: 'Capacity calculated from existing route data. No real-time GPS.

' A second rabbit hole is identified: 'Driver Notification Log shows in-app record only. ' The breadboard reveals a clean 5-step flow with two explicit scope cuts, giving the betting table confidence the team can ship in 3 weeks. The narrative in the pitch walks through a concrete scenario: 'Dispatcher Maria marks Driver Tom as absent. She sees Tom's 8 remaining stops, selects 5 of them, and assigns them to Driver Lisa who has capacity.
