# FAQ: Shipping Production Systems Inside Client Infrastructure

## Should I ever deploy in my own cloud instead of the customer's?

Sometimes a short prototype in your own environment is useful for exploring an idea, as long as it uses synthetic or approved data. Production should live where the customer will run it, under their controls and tools. If there is a real reason to host in your environment, such as a managed service your company operates, make that an explicit decision with the customer and log it. Hidden hosting arrangements create surprises at handover.

## What if the customer's tooling is weaker than ours?

Use theirs by default anyway, because their team will run the system after you leave. If a gap puts reliability or security at risk, raise it as a decision with the customer, propose the smallest addition that closes the gap, and make sure their team can operate it. Log the choice so the next engineer understands why it exists.

## How do I get through the customer's security review faster?

Bring the security team in during mapping instead of at the end. Share the data flows, access model and controls you plan to use, and ask which requirements apply. Build those into the thin slice. A review of a design the security team already shaped usually goes faster than one they see for the first time.

## What does a good handover include?

Documentation in the customer's systems, runbooks for the failure modes you saw, monitoring and alerts routed to their on-call people, and credentials and schedules owned by their accounts. It also includes a live exercise where their team deploys and handles an alert while you watch. List remaining risks and temporary workarounds with the condition for removing each.

## How is this different from normal product deployment?

The engineering practices are the same: tests, reviews, monitoring, staged releases. The difference is that someone else owns the environment, the tools and the approvals, and you are a guest in it. That shifts effort toward access, coordination and handover. It also means production incidents involve the customer's team, your product team and you at once.
