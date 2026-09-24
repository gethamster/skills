# FAQ: Deploying and Operating Production Systems On-Site

## When should handover planning start?

Handover planning should start in the first week of the deployment, not near the end. Early choices about monitoring tools, secrets management and documentation location decide whether the customer can operate the system later. Name customer owners and a target exit milestone at the start, then revisit both as scope changes. Teams that defer this usually find their system depends on tools and knowledge that leave with them.

## How do you know live validation is finished?

Validation is finished when the people doing the operational work rely on the system's output on real cases without a parallel manual process. Agree on what a correct result looks like for each workflow before you start, so each case is a pass or fail check. Track discrepancies by cause and confirm each class of issue is fixed, not just individual cases. If users still keep their old spreadsheet running quietly, you are not done.

## Can a customer avoid vendor lock-in if the system runs on the vendor's platform?

Some dependence is usually unavoidable when the system is built on a vendor's platform, but it can be made visible and deliberate. Keep customer data in customer-owned stores, use standard interfaces at boundaries, and document every proprietary component with a note on what replacing it would take. The goal is that the customer chooses the dependency with open eyes rather than discovering it during a renewal or an outage.

## What belongs in a handover package?

A useful handover package includes the environment profile, the deployment preconditions checked into the repository, runbooks for every incident seen so far, a dependency map, and a list of known limitations. It should also record who on the customer side owns operations, releases and changes. The package is only proven when customer engineers have used it to perform a release and a rollback themselves.

## Should the forward deployed team stay on call after handover?

Generally no, because standing on-call from the outside team keeps the customer dependent and hides gaps in their readiness. Run joint operations before the exit milestone so customer engineers handle real incidents while help is close. After handover, route alerts to customer on-call and remove standing access. A scheduled check-in afterwards is a better safety net than a permanent pager.
