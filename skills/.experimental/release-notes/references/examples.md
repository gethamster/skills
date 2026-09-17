# Release Notes Examples

These examples demonstrate the expected format and tone for Hamster Studio release notes.

---

## Example 1: v0.28.0

# Release 0.28.0

## Summary

Agents can now pause mid-workflow to ask you questions or get approval before making changes. When you finish onboarding, Hamster automatically creates an "About Us" blueprint from your company information. The routing system better understands complex requests that involve multiple tasks.

## Human-in-the-Loop Flows

Agents can now pause workflows to ask for clarification or confirmation. For example, when researching a topic, an agent might ask which sources you prefer before proceeding, or request approval before adding findings to a brief. The chain-of-thought UI shows when an agent is waiting for your input, so you know exactly what's needed.

This means you can guide agents through multi-step processes without losing context. If an agent needs to know your company's target market before writing a brief, it will ask rather than guessing.

## About Us Blueprint Auto-Generation

After you complete onboarding and upload company documents, Hamster automatically generates an "About Us" blueprint. The system detects whether you're a SaaS company, B2B service provider, product company, or other type, and tailors the blueprint accordingly. You get a starting point for your company documentation without having to write it from scratch.

## Task-Based Semantic Routing

The system now breaks down complex requests into individual tasks before routing them. If you ask to "extract info from this URL and update the brief," the system identifies both the URL extraction and document editing tasks, then routes to the appropriate agents. This results in more accurate handling of multi-part requests.

## Bug Fixes

- URLs in code blocks no longer show preview cards
- Alignment vote button refreshes correctly when clearing votes
- Team alignment ready vote comment is now optional
- Fixed auto-apply diffs on page refresh with empty editor
- Fixed mention notification navigation
- Fixed auto-execution of pending AI diffs after refresh
- Fixed various validation and parsing errors

---

## Example 2: v0.26.0

# Release 0.26.0

## Summary

Connect your Slack workspace so agents can reference team conversations when generating briefs. Share URLs in chat and agents can extract content from them. The diff viewer is clearer about what changes are being proposed. Agents retry failed operations automatically.

## Slack Airweave Connector

Connect your Slack workspace, and agents can search your team's conversations when generating briefs or blueprints. If your team discussed a feature in Slack, agents can reference those discussions without you having to copy-paste messages. The integration uses OAuth and only accesses conversations you authorize.

## URL Context Agent

Share a URL in chat, and agents can extract and analyze the content. Share your company website, and agents can pull in information about your products or services when generating documentation. This works with any publicly accessible URL, expanding the sources agents can reference beyond uploaded documents.

## Custom Apply-Diff View

The diff viewer now clearly shows what will change before you accept or reject edits. Empty documents display correctly, and the preview accurately represents how the final document will look. This makes it easier to review agent-proposed changes, especially when multiple edits are pending.

## Agentic Guardrails System

When an agent's tool call fails, it automatically retries instead of stopping. Pending document edits that can't be applied are automatically rejected, so you're not left with stuck edits. This makes agent workflows more reliable and reduces the need for manual intervention.

## Chat Improvements

- @mentions are highlighted in messages
- Chat messages are grouped more logically
- Chat threads automatically generate descriptive titles
- Tables and code blocks render better in messages
- Markdown pastes are handled more intelligently

## Bug Fixes

- Fixed notification bell visibility in collapsed sidebar
- Fixed team switching preserving your current page
- Fixed brief description generation
- Fixed various security vulnerabilities
- Fixed authentication issues with MFA
- Fixed team invite regressions

---

## Example 3: v0.23.0

# Release 0.23.0

## Summary

Chat threads automatically generate descriptive titles so you can find past conversations easily. The system only includes relevant context when answering questions, making responses more accurate. Email delivery is more reliable.

## Chat History & Thread Title Generation

Chat threads automatically generate titles based on the conversation content. Instead of scrolling through untitled threads, you can quickly identify which conversation you need. Threads maintain full history, so you can reference past discussions.

## Conditional Context & Airweave V2

When you ask a question, the system only includes relevant context. If you're asking about a specific product feature, it won't pull in unrelated company information. This makes agent responses more focused and accurate.

## Rate-Limited Email Service

Email delivery is more reliable. The system handles rate limits intelligently, so invitation emails and notifications are delivered even during high-volume periods.

## Waitlist Sign Up & Auth Improvements

The waitlist sign-up process is smoother with better form validation and clearer error messages. Authentication handles edge cases better, including MFA and various sign-in methods.

## UI Improvements

- Removed blue background from user messages for better readability
- Fixed text clipping issues on mobile
- Improved responsive design across devices

## Bug Fixes

- Fixed waitlist form validation
- Fixed authentication edge cases
- Fixed brief URL display issues
- Fixed mobile text truncation
- Fixed authentication expiration handling
- Fixed settings navigation issues