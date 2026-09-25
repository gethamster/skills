# FAQ: Operating Autonomously in Customer Environments

## How much autonomy should a new FDE get?

Start with a tighter boundary and widen it as trust builds. A new FDE can decide implementation details inside the mission and should report tool and dependency choices quickly. Changes to shared code, security exceptions and customer commitments should go to the discuss-first group at the start. After a few weeks of clean decision logs and regular updates, the lead can move more categories into decide-alone.

## What goes in a decision log entry?

Use the architecture decision record structure: the context and the forces at play, the decision itself, its status, and its consequences, good and bad. Keep each entry short enough to write on the day. Link to any code, ticket or conversation that matters. The log is for the next person who asks why the system looks the way it does.

## How is this different from just asking for forgiveness later?

Asking for forgiveness assumes nobody agreed the limits in advance. Here the limits are written down before the engagement, the FDE records reasoning as decisions are made, and the home team reviews the log on a rhythm. The FDE still moves quickly, but every decision can be traced and discussed. That is what makes it safe for a lead to grant more room.

## What if my company requires central approval for everything?

Then the FDE model will struggle, and the method page lists this as a reason not to use it. Try to agree at least a small decide-alone category for implementation details, backed by the decision log, and show your leadership that nothing went wrong. If even that is not possible, set expectations with the customer that responses will be slower.

## How do I keep the customer from treating me as on-call support?

Tie every request back to the mission brief. Answer in-scope requests quickly, log out-of-scope ones, and explain where they went. Agree with the sponsor how urgent issues outside the mission will be handled, such as through your company's normal support channel. Your availability is part of the scope, so write it down.
