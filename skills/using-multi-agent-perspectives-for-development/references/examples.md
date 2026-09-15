# Examples: Using Multi-Agent Perspectives (CEO, Engineer, QA) in Development

## Example: Solo developer adding payment webhook handling to a SaaS app

**Scenario:**

A solo developer building a B2B SaaS product needs to add Stripe webhook handling to process subscription changes. They are working alone, using Claude Code with gstack installed. The feature involves receiving webhooks, validating signatures, updating subscription state in the database, and sending notification emails. Timeline: needs to ship by end of day.

**Walkthrough:**

deleted events. Update subscriptions table. Send email to account owner on downgrade or cancellation. " They invoke the CEO perspective and present the brief.

The CEO perspective identifies that handling all webhook event types is unnecessary for today. deleted (cancellation) since that is the highest-impact event. It explicitly excludes: upgrade handling, retry logic for failed emails, and webhook event logging. The specification has 6 bullet points with testable acceptance criteria.

The developer approves and switches to the engineer perspective. The engineer proposes a single endpoint, signature validation using Stripe's library, a database update to mark the subscription as cancelled, and an async email send. It flags that retry logic for failed emails was excluded but notes the email send should at minimum log failures. The developer approves.

Code is produced: about 80 lines across two files. The developer then switches to the QA perspective, providing the CEO specification and the code. QA identifies three findings: (1) the signature validation does not handle the case where the webhook secret environment variable is missing, returning a 500 instead of a clear startup error; (2) there is no test for the database update; (3) the email send failure logging does not include the subscription ID, making debugging impossible. Finding 1 is classified as fix-now, findings 2 and 3 as fix-now given they are quick.

The developer returns to engineer for targeted fixes (15 minutes), re-verifies with QA, and ships. Total time: 2 hours. Without the CEO perspective, they estimate they would have spent 4-5 hours trying to handle all event types.

## Example: Small team refactoring authentication middleware in a Node.js API

**Scenario:**

A team of three developers needs to refactor their authentication middleware to support both JWT tokens and API keys. The current middleware only handles JWTs. Several enterprise customers have requested API key support. The team uses gstack with Claude Code for pair programming. The refactor touches a critical security path and affects every authenticated endpoint in the API (roughly 40 routes).

**Walkthrough:**

The tech lead writes the task brief and runs the CEO perspective during a team standup. The CEO perspective identifies two phases: first, refactor the middleware to accept both auth types without changing any route behavior; second (deferred), add API key management UI. For phase one, the specification lists 8 acceptance criteria including backward compatibility (all existing JWT flows unchanged), API key validation logic, rate limiting per API key, and audit logging of API key usage. Out of scope: key rotation, key scoping to specific endpoints, and the management UI.

The team agrees on the specification. One developer invokes the engineer perspective and proposes an auth strategy pattern: the middleware tries JWT validation first, falls back to API key lookup, and normalizes both into a standard user context object. Architecture decision: API keys are stored hashed in a dedicated table, not in the users table. The engineer produces the middleware refactor (about 200 lines), a database migration, and updates to the test suite.

The second developer invokes the QA perspective the next morning. QA compares the code against all 8 acceptance criteria and finds: (1) the fallback order means a request with both a JWT header and an API key header uses the JWT silently, which is ambiguous and could mask bugs; (2) the rate limiter is per-key but does not account for the same user having multiple keys; (3) two of the original JWT integration tests were accidentally deleted during the refactor. All three are classified as fix-now. The engineer perspective addresses each finding: adds explicit rejection of requests with both auth types, adjusts rate limiting to aggregate by user ID across keys, and restores the deleted tests.

QA re-verifies. The session summary becomes the PR description, and the team merges with confidence.

## Example: Startup evaluating whether to build a notification system or use a third-party service

**Scenario:**

A B2C mobile app startup with 50,000 users is deciding whether to build in-house push notification infrastructure or integrate a third-party service like OneSignal or Firebase Cloud Messaging. The CTO wants to use gstack's multi-agent perspectives to make and execute the decision. Budget is tight, and the team has two developers.

**Walkthrough:**

The CTO writes a task brief framing the decision: "We need reliable push notifications for 50K users with expected growth to 200K in 6 months. Options: build custom with APNs/FCM directly, or integrate OneSignal/FCM managed service. " The CEO perspective evaluates both options against the constraints. It determines that building custom notification infrastructure is a 3-4 week project for one developer when accounting for device token management, delivery tracking, retry logic, and platform differences between iOS and Android.

This exceeds the one-week constraint. The CEO scopes the work as: integrate Firebase Cloud Messaging via their SDK, support topic-based notifications only (no per-user targeting in v1), and add a simple admin endpoint to trigger notifications. Explicitly excluded: notification preferences UI, rich media notifications, analytics dashboard, and A/B testing of notification content. The engineer perspective takes this 7-point specification and produces an integration plan: Firebase SDK initialization, a topics subscription hook in the onboarding flow, a protected admin API endpoint that sends to a topic, and a simple database table logging sent notifications.

Implementation takes about 3 hours of code, 1 hour of Firebase console setup. The QA perspective then reviews and catches: (1) the onboarding hook subscribes users to the default topic but there is no mechanism to unsubscribe, which may violate app store requirements; (2) the admin endpoint has no rate limiting, so a bug or malicious actor could spam all 50K users; (3) the notification payload does not include a deep link, so tapping the notification just opens the app's home screen rather than relevant content. Finding 1 is fix-now (add unsubscribe endpoint), finding 2 is fix-now (add rate limit), finding 3 is deferred (CEO confirms deep linking is a v2 feature). Total elapsed time for the entire decision-plus-implementation: one day.

## Example: Large team implementing a data export feature with compliance requirements

**Scenario:**

A B2B SaaS company with 25 engineers needs to add GDPR-compliant data export functionality. Users must be able to request a full export of their data in a portable format. The feature has legal requirements, performance implications (some accounts have gigabytes of data), and a hard deadline of 6 weeks due to a regulatory audit.

**Walkthrough:**

The product manager and engineering lead co-author a detailed task brief covering the legal requirements, data scope (which tables contain user data), size constraints, and the deadline. They run the CEO perspective with the full legal team's requirements document attached. The CEO perspective makes several scoping decisions: the export format will be JSON (not CSV, which loses relational structure), exports will be asynchronous (queued and emailed) rather than synchronous (download immediately), and the initial version will cover the 6 core data tables that legal identified as mandatory, deferring 4 optional tables to a follow-up. The CEO also sets a performance constraint: exports must complete within 1 hour for accounts up to 5GB.

The specification has 12 acceptance criteria. The engineer perspective, invoked by the tech lead, proposes a job queue architecture: the user clicks "Export My Data," a job is enqueued, a background worker assembles the JSON from each table, compresses it, uploads to a temporary S3 location, and emails the user a time-limited download link. Key architectural decisions: the worker processes one table at a time to limit memory usage, the S3 link expires after 48 hours, and the job includes a progress indicator. Implementation spans two developers over one week, producing roughly 600 lines of application code plus the worker infrastructure.

The QA perspective is then run by a third developer who was not involved in implementation. QA cross-references each of the 12 acceptance criteria and flags: (1) the S3 link is not encrypted at rest, which may violate the company's own data handling policy; (2) there is no mechanism to cancel an in-progress export, which could waste resources if a user requests and then immediately re-requests; (3) the 1-hour performance target was not tested with a 5GB account, only with a 500MB test account; (4) the email containing the download link does not authenticate the recipient, meaning a forwarded email gives full access. Findings 1 and 4 are fix-now due to compliance requirements. Finding 2 is fix-later (ticket created).

Finding 3 requires the engineer to generate a 5GB test dataset and run a performance test before merge. The cycle adds three days but catches two compliance issues that would have been flagged in the regulatory audit.
