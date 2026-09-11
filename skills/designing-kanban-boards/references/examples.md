# Examples: Designing Effective Kanban Boards

## Example: SaaS product team with design, engineering, and QA

**Scenario:**

A B2B SaaS product team of 8 people (2 designers, 4 engineers, 2 QA) ships features continuously. Work comes from a product backlog and moves through design, development, code review, QA, and release. The team previously used a three-column board (To Do, Doing, Done) and found that items sat in 'Doing' for weeks with no visibility into why.

**Walkthrough:**

The team traced five recent features and discovered six distinct states: Backlog, Ready for Design, In Design, Ready for Dev, In Development, In Code Review, In QA, and Done. They added a commitment point between Backlog and Ready for Design. They split the previous 'Doing' column into four active and waiting columns. For swimlanes, they created two: Features (standard flow) and Bugs (which skip the design columns and enter directly at Ready for Dev).

The card template shows title, assignee, work type color (blue for feature, red for bug), start date, and a blocker flag. " They split the column and set a WIP limit of 3 on "In Review" to prevent review queues from growing. The resulting board had 8 columns and 2 swimlanes, and the team reported within two weeks that blocked items were being spotted and resolved 2-3 days earlier than before.

## Example: Small marketing team managing content production

**Scenario:**

A 4-person content marketing team produces blog posts, case studies, and social media assets. They have no formal process and track work in a shared spreadsheet. The team lead wants to move to a kanban board to reduce the number of items that get stuck in the review/approval stage.

**Walkthrough:**

The team traced three recent blog posts and two social media campaigns. The natural flow was: Ideas, Briefed, Writing, Internal Review, Revision, Stakeholder Approval, Scheduled, Published. They noticed that 'Internal Review' and 'Stakeholder Approval' were two separate queues with different owners: internal review was the content lead, stakeholder approval was the VP of Marketing who reviewed items only on Tuesdays. They made both waiting states explicit columns.

No swimlanes were needed because all content types followed the same flow. The card template included title, content type tag (blog/case study/social), author, due date, and a blocker flag. They set the commitment point between Ideas and Briefed, meaning items to the left of Briefed were just candidates. Validation revealed that case studies had an extra step: customer interview scheduling.

Rather than adding a column, they handled this as a checklist item within the card at the Briefed stage. The board launched with 8 columns and zero swimlanes. Within three weeks, the VP's Tuesday approval bottleneck was visible to everyone, and the team started batching items to reduce the wait.

## Example: Enterprise IT operations team handling service requests

**Scenario:**

A 12-person IT operations team handles 40-60 service requests per week ranging from laptop setups to network infrastructure changes. Requests come through a ticketing system. The team wants a kanban board to replace their status meetings, which consume 5 hours per week and still leave people unsure about what is happening.

**Walkthrough:**

The team traced 10 recent requests across three complexity levels: simple (laptop setup), medium (access provisioning), and complex (network change). All three types followed a similar path but diverged at the approval step: simple requests needed no approval, medium needed manager approval, and complex needed change advisory board (CAB) approval. The board columns were: New Requests, Triaged, Awaiting Approval, Approved, In Progress, Verification, Done. They created three swimlanes: Simple, Standard, and Complex.

Simple items had no WIP in the Awaiting Approval column because they skipped it entirely. Complex items had a WIP limit of 2 in the In Progress column because they required senior engineers. Card design was critical because 40-60 items on the board meant density was high. Cards showed a short title, requestor name, priority dot (red/yellow/green), and age in current column.

The team dropped their daily status meeting entirely and replaced it with a 10-minute board walk three times per week, saving approximately 3 hours per week.

## Example: Solo founder managing product development and business tasks

**Scenario:**

A solo founder building a B2C mobile app needs to track development tasks, marketing activities, customer support issues, and business operations on a single board. They are the only person doing the work but find themselves context-switching constantly and losing track of priorities.

**Walkthrough:**

The founder traced a typical week and found that work fell into four categories but followed a similar lifecycle: To Do, Doing, Waiting (on external input like app store review, customer responses, or vendor replies), and Done. With only one person, the board needed to be extremely simple. They used 4 columns with 3 swimlanes: Product (development tasks), Growth (marketing and sales), and Ops (support and admin). The card template showed only the title and a type emoji.

The key design decision was the WIP limit: 1 item in Doing per swimlane, meaning the founder could work on at most 3 things simultaneously, one per category. The Waiting column had no WIP limit but each card showed the date it entered the column to make aging visible. The founder reported that the swimlane-per-category structure reduced context-switching because they could focus on one category at a time and use the board to decide when to switch rather than reacting to whatever felt urgent.
