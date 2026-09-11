# Examples: Facilitating Collaborative Story Mapping Workshops

## Example: Early-stage B2B SaaS team mapping onboarding for the first time

**Scenario:**

A 6-person startup (PM, 2 engineers, 1 designer, 1 support lead, and a co-founder) has never done story mapping before. They need to redesign their onboarding flow, which currently has a 40% drop-off rate after signup. The team has one defined persona ("Alex, a marketing manager at a 50-person company trying the product for the first time"). They have 3 hours blocked and are working on a physical wall in their office.

**Walkthrough:**

The PM facilitates (the team is too small to have a neutral facilitator, so the PM explicitly asks the designer to flag any bias). The first 15 minutes cover the persona, the scope statement ("Alex's journey from clicking 'Start Free Trial' through sending their first campaign"), and a quick 2-minute example map of ordering a pizza to show the format. The backbone phase takes 25 minutes and produces 6 activities: Sign Up, Set Up Account, Import Contacts, Create First Campaign, Send Campaign, Review Results. During task decomposition, the support lead catches a critical gap: there is no activity for connecting an email domain, which is the step that causes 70% of support tickets.

The team adds "Connect Email Domain" between Set Up Account and Import Contacts. Story generation takes 50 minutes, with silent writing producing 40+ stories across all activities. For slicing, the team draws the first release line to include only the simplest version of each activity, cutting features like A/B testing, advanced segmentation, and custom templates to release 2. The walking skeleton includes 12 stories.

The team photographs the wall, and the PM digitizes the map in Miro the next morning. The open questions list includes three items: whether to auto-detect DNS settings (needs engineering research), whether to allow skipping contact import (needs user research), and whether the onboarding should be linear or allow jumping between activities (needs design exploration).

## Example: Large enterprise team running a remote story mapping workshop

**Scenario:**

A cross-functional team of 8 people (PM, product designer, 3 engineers including a tech lead, QA lead, a business analyst, and a customer success manager) at a financial services company needs to map the expense reporting flow for a new mobile app. The team is distributed across three time zones. They use Miro as their digital board. The persona is "Jordan, a field sales rep who submits 15-20 expense reports per month from their phone." They have a 4-hour session with a 15-minute break in the middle.

**Walkthrough:**

A dedicated facilitator (the business analyst, who is not a decision-maker on this product) runs the session. The Miro board is pre-set with a backbone row, task row, story area, parking lot, and a persona card pinned to the top-left. The facilitator uses Miro's timer widget, visible to everyone. After a 10-minute framing phase, backbone building takes 30 minutes and produces 8 activities: Capture Receipt, Create Report, Add Line Items, Attach Receipts, Categorize Expenses, Submit for Approval, Track Status, Get Reimbursed.

The customer success manager immediately flags that real users almost never categorize manually; they expect auto-categorization. This triggers a red-dot disagreement because the tech lead says auto-categorization requires ML infrastructure the team does not have. The facilitator parks it. Task decomposition happens with Miro's voting feature to prioritize which tasks go under each activity.

The group generates stories using sticky notes on a 3-minute silent timer per activity column. At the 2-hour mark, they take a break. After the break, slicing takes 40 minutes. The first release includes a bare-bones flow: photo capture, manual entry of amount and category, submit to a single approver, and a simple status screen.

The second release adds OCR receipt scanning, multi-approver workflows, and integration with the company's ERP. The open question list includes the auto-categorization decision, which gets assigned to the tech lead for a spike in the next sprint. The facilitator sends the summary and Miro link within 2 hours of the session ending.

## Example: B2C product team mapping a consumer mobile app feature

**Scenario:**

A team of 5 (PM, 2 mobile developers, a UX researcher, and a growth marketer) at a fitness app company is mapping the social challenge feature. Users will be able to create fitness challenges, invite friends, track progress together, and celebrate completions. The persona is "Mia, a 28-year-old casual runner who uses the app 3 times a week and has 4 friends who also use the app." The team has 2.5 hours and is co-located, using a whiteboard wall with sticky notes.

**Walkthrough:**

The UX researcher facilitates because they have the most neutral perspective on feature scope. " This time-based scope is unusual and important because the feature has a lifecycle, not just a single-session flow. Backbone building produces 7 activities spread across the 30-day arc: Discover Challenges, Create a Challenge, Invite Friends, Log Daily Activity, Check Leaderboard, Encourage Friends, Complete Challenge. The growth marketer contributes two activities the engineers had not considered: Share Achievement (after completion) and Re-engage Lapsed Participant (when someone stops logging).

During story generation, the team realizes the "Encourage Friends" column has the most stories (12 variations from push notifications to in-app reactions to direct messages) and the least consensus. They mark it as a high-uncertainty area needing user research. The first release slice is deliberately minimal: create a challenge with a fixed 7-day duration, invite up to 5 friends via in-app link, log activity manually, view a simple leaderboard, and see a completion badge. No sharing, no re-engagement, no custom durations.

The growth marketer pushes back on excluding sharing from release 1 because it is the growth loop. The team votes 3-2 to keep it in release 2, with a compromise: they will add a single "share to Instagram story" button as the one social feature in release 1. The final map has 42 stories across 3 release slices.

## Example: Running a focused 90-minute story mapping session for a single feature

**Scenario:**

A small team of 4 (PM and 3 engineers) at a developer tools company needs to map the "API key management" feature. Users need to create, rotate, revoke, and monitor usage of API keys. The persona is "Dev Dana, a backend engineer integrating the API into a production application." The team does not need a full-day workshop because the feature scope is narrow. They have 90 minutes and are working remotely on FigJam.

**Walkthrough:**

The PM facilitates. Given the tight timebox, they skip the example map explanation (everyone has done story mapping before) and spend only 5 minutes on framing. Backbone building takes 15 minutes and produces 5 activities: Generate Key, Configure Permissions, Use Key in Application, Monitor Usage, Rotate or Revoke Key. The team moves fast through task decomposition because the domain is well-understood, spending only 15 minutes total.

Story generation is where the session gets interesting. Under "Configure Permissions," the engineers generate 9 stories ranging from simple all-or-nothing access to fine-grained per-endpoint permissions with rate limits. Under "Monitor Usage," there are 7 stories from basic request counts to real-time alerting with anomaly detection. The PM draws the first release line aggressively: generate a key, use it (no permission configuration at all, keys get full access), view a basic usage dashboard, and revoke a key.

No rotation, no permissions, no alerts. One engineer objects that shipping keys without permissions is a security risk. The team discusses for 5 minutes and decides the first release will include one permission story: the ability to set a key as read-only or read-write. The session ends at 85 minutes with 28 stories across 2 release slices and 3 open questions about rate limiting implementation.

The PM digitizes the FigJam board into their backlog refinement document the same afternoon.
