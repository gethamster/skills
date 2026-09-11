# FAQ: Running Betting Table Sessions

## How many shaped pitches should we bring to a shape up betting table session?

5 to 2 times the number of available team slots. If you have three teams, bring 5-6 pitches. Fewer than that and you lack real choice, which means the table is rubber-stamping rather than evaluating. More than 8-10 pitches overwhelms the session and leads to superficial evaluation of later items.

If you consistently have far more pitches than slots, it means your shaping process is not filtering enough, and you should add a pre-screening step before pitches reach the table.

## What happens if a bet fails and the team does not ship within the appetite?

The default outcome is that the work stops. The appetite was the maximum investment, and if the team could not ship within it, the project either had unresolved complexity (a shaping problem) or encountered genuinely unexpected obstacles. The project does not automatically get a second cycle. If stakeholders still believe the problem matters, someone brings a reshaped version to the next betting table with lessons from the first attempt incorporated.

Occasionally, for large strategic projects, the original betting table can explicitly pre-approve a second cycle, but this should be the exception, not the norm.

## Should the people who shaped the pitches attend the betting table?

Generally no, unless they are also senior stakeholders with allocation authority. The shaper's job is done once the pitch is written. If shapers attend, two problems emerge: they become defensive about their pitches, which makes honest evaluation harder, and they get pulled into tactical design discussions at the table, which wastes time. The pitch document should stand on its own.

If the table cannot evaluate a pitch without the shaper present to explain it, the pitch is not shaped well enough. One exception: if the shaper is the CTO or VP of Product who would attend anyway, they should present their pitches but explicitly invite pushback.

## How do we handle urgent customer requests that come in mid-cycle after the betting table has closed?

The standard answer is: bring it to the next betting table. If the request is truly urgent (a production outage, a security vulnerability, a contract-threatening issue for a top customer), it gets handled during the cool-down capacity or by pulling a team off a bet entirely. The key is that pulling a team off a bet is a big, visible decision made by the same people who sit at the betting table, not a quiet side-channel addition. If "urgent" requests are disrupting cycles frequently, the root cause is usually a lack of trust in the process.

Track how many mid-cycle interruptions happen per cycle and review at the retrospective.

## Should we use the betting table to decide which bugs to fix or only for new features?

The betting table is for shaped work, and shaped work can absolutely include bug fixes if the bug is significant enough to warrant shaping. A critical performance issue that affects 40% of users deserves a shaped pitch with a clear problem statement, proposed solution approach, and appetite. What does not belong at the betting table is a list of 50 minor bugs. Those are handled during cool-down periods or by on-call rotations.

The dividing line is effort and impact: if fixing the bug requires more than a few days of focused work and solves a meaningful user problem, shape it and bring it to the table.

## How long should the betting table take for a team that is new to Shape Up?

Expect your first few sessions to take 2-3 hours as participants learn the format and resist old habits (backlog thinking, scope expansion at the table, consensus-seeking). By the third or fourth cycle, sessions typically tighten to 60-90 minutes. If sessions are still running over 2 hours after several cycles, diagnose the bottleneck: too many pitches (pre-filter), too many attendees (reduce the table), insufficiently shaped pitches (improve shaping quality), or a facilitator who is not enforcing time boxes. The session length is a leading indicator of process health.

## Can we run a betting table for two-week cycles instead of six-week cycles?

You can, but the economics change significantly. With two-week cycles, you run a betting table every two weeks, which means more process overhead relative to building time. You also limit the size of problems you can tackle, because two weeks is not enough time for most meaningful product work. The [Shape Up](https://tryhamster.com/methods/shape-up) framework recommends six-week cycles specifically because they are long enough to build something substantial but short enough to maintain urgency.

If six weeks feels too long, the problem is usually insufficient shaping (teams are uncertain about what to build) rather than the cycle length itself. Try a few six-week cycles with well-shaped pitches before concluding you need shorter ones.
