# Examples: Operating Autonomously in Customer Environments

## Choosing the customer's scheduler instead of your own

**Scenario:**

Illustrative scenario: an FDE is building a nightly data sync for a manufacturer. Your company's standard is its own job scheduler, but the customer's operations team already runs every job through their own scheduler and will maintain the sync after handoff.

**Walkthrough:**

The FDE checks the decision boundary. Adopting a customer tool is in the decide-and-report group. The FDE uses the customer's scheduler, writes a log entry with the context (the customer's team will own the job), the decision, and the consequences (your monitoring templates will not cover it, so alerts are wired into the customer's system instead), and mentions it in the weekly update. Nobody at home needs to approve it, and the product team learns that customers in this segment tend to keep their own schedulers.

## Bringing a platform change home first

**Scenario:**

Illustrative scenario: two weeks into an engagement, an FDE finds that the platform's export API cannot filter by a field the customer needs. The FDE could patch the platform code in the customer's deployment in an afternoon.

**Walkthrough:**

A change to shared platform code is in the discuss-first group, and the reversibility test agrees: a patched fork would diverge from every future release. The FDE writes a short note to the product team with the use case, a proposed API change and a workaround that keeps the mission moving. The workaround, a filter applied after export, is logged as temporary. The product team accepts the API change for a later release, and the log records when the workaround can be removed.

## Declining a request to skip a security review

**Scenario:**

Illustrative scenario: a customer director asks the FDE to deploy a new dashboard before the customer's own security review finishes, because an executive wants to see it at a meeting later that week.

**Walkthrough:**

Skipping a security control is discuss-first under the boundary and conflicts with the engineering standards in the intent statement. The FDE explains the risk in the director's terms: a deployment that later fails review would have to be pulled in front of the same executive. The FDE offers an alternative, a walkthrough using a staging copy with synthetic data, and logs both the request and the answer. The director accepts, and the production deployment follows the review.
