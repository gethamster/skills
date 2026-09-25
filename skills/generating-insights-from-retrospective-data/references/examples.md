# Examples: Generating Insights from Retrospective Data

## The 5 Whys on repeated deploy delays

**Scenario:**

Illustrative scenario: a team of six has a cluster of notes about deploys that were delayed three times in the sprint. The first explanation offered is "the pipeline is slow."

**Walkthrough:**

The facilitator writes the theme at the top of the board and asks why the deploys were delayed. The team answers that each one waited for a manual database step. Why? Because that step is not automated. Why? Because only one person knows how to run it safely, and that person has never had time to write it down. Why? Because operational work is never planned into the sprint.

The team checks each answer against the notes on the board and finds support for all of them. The pipeline speed turns out to be a minor factor. The insight they write down is: "Deploys wait on a manual step that only one person can run, because operational work is never planned." A proposal to automate the step goes on the side list for the decide phase.

## A fishbone for a missed sprint goal

**Scenario:**

Illustrative scenario: a team of eight missed its sprint goal. The notes on the board point in many directions: unclear stories, a sick colleague, a slow test environment and a late design.

**Walkthrough:**

The facilitator draws a fishbone with the missed goal at the head and four bones: people, process, tools and environment. The team places each note on a bone and adds causes that come up in discussion.

The process bone fills up fastest. Several notes trace back to stories that entered the sprint without agreed acceptance criteria. The team sees that the late design and the unclear stories share that cause. They write one insight about the missing readiness check and note the sick colleague as a one-off that needs no action.

## Finding a shared cause across two themes

**Scenario:**

Illustrative scenario: a team of five has two clusters on its board, "code reviews take too long" and "we keep starting new work before finishing", and plans to analyze them separately.

**Walkthrough:**

The facilitator asks the team to run a quick 5 Whys on each theme. Both chains end in the same place: each developer has three or four pieces of work open at once, so reviews wait while people switch between tasks.

The team writes one insight instead of two: "Too much work in progress slows reviews and delays finishing." The facilitator points out that the team also noted a week earlier in the sprint when reviews were fast, and it was the week when two people paired on one story. That observation goes into the decide phase as evidence for a possible action.
