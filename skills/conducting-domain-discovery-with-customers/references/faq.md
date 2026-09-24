# FAQ: Conducting Domain Discovery with Customers

## How long should domain discovery take for a forward deployed engineer?

The intensive orientation phase is best kept short, for example the first one to two weeks, so it does not delay a working prototype. [Alephic's account](https://alephic.com/forward-deployed-engineering) dedicates the first week to embedding and orienting. After that, discovery continues at lower intensity through every demo and iteration. If you still cannot describe the target workflow after the orientation phase, narrow the scope rather than extending the timeline.

## Who should do discovery if we have Deployment Strategists?

Some teams split the problem space and solution space between roles. A [practitioner account of FDE teams](https://forwarddeployedbook.com/chapter-3) describes Deployment Strategists focusing on the problem space while Forward Deployed Engineers build in the solution space. Even then, the engineer should shadow the workflow and trace data personally. Technical details that decide whether a build works tend to get lost in summaries.

## How is this different from gathering requirements?

Requirements gathering asks people what they want built. Domain discovery observes how the operation actually works, where its data lives and who it serves, before anyone commits to a solution. The discovery maps are the raw material that requirements are later derived from. That translation is covered in its own skill page on turning operational problems into technical requirements.

## What if the customer will not give me system access during discovery?

Log it as a blocker with an owner and a target date, and raise it with the sponsor. Meanwhile, you can still shadow operators, map the workflow and characterise data from what you see on their screens. Lack of access often reveals governance constraints you would need to understand anyway. Do not start building against guessed schemas while access is pending.

## How do I know discovery is good enough to start building?

You are ready when the customer has reviewed and corrected your maps, the sponsor and daily users are named, and the constraints log has owners for its open items. Another signal is that you can predict how operators will handle a new case before watching them. Starting to build does not end discovery. It shifts discovery into demos and prototypes.
