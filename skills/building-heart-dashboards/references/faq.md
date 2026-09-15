# FAQ: Building HEART Metric Dashboards for Product Teams

## What tools can I use to build a HEART metric dashboard?

Common choices include Looker Studio (free, integrates well with BigQuery), Tableau (powerful but requires a license), Amplitude or Mixpanel built-in dashboards (great for behavioral metrics), and Google Sheets with data connectors for smaller teams. Choose the tool your team already uses for other dashboards to maximize adoption.

## How does a HEART dashboard improve my product manager roadmap?

A HEART dashboard surfaces real-time UX data across five dimensions, replacing gut-feel prioritization with evidence. When Retention is red and Task Success is green, you know to focus your product manager roadmap on re-engagement rather than flow optimization. It gives roadmap conversations a shared, objective foundation.

## How often should I review the HEART dashboard with my team?

Most teams benefit from a weekly summary review (5 minutes in standup using the KPI summary row), a monthly deep-dive into dimension details, and a quarterly recalibration of thresholds and metrics. Automate a weekly Slack or email snapshot to build the habit.

## Can I build a HEART dashboard without a data warehouse?

Yes, but with limitations. You can connect Looker Studio directly to Google Analytics and Google Sheets, or use Amplitude's native dashboards. For a complete HEART dashboard with survey data (Happiness), you'll likely need at least a lightweight integration layer like Zapier or a scheduled CSV import.

## What's the difference between a HEART dashboard and a regular product analytics dashboard?

A regular analytics dashboard tracks business or usage metrics without a unifying UX framework. A HEART dashboard is structured around five specific user-experience dimensions with explicit goals and thresholds, making it purpose-built for UX-informed product manager roadmap decisions rather than ad-hoc metric monitoring.

## How do I handle missing data for one of the five HEART dimensions?

Show the dimension on the dashboard with a 'data not yet available' placeholder rather than omitting it. This creates visible accountability and motivates the team to close the gap. Prioritize setting up the missing data source in your next sprint—an incomplete HEART dashboard still has blind spots that can mislead roadmap decisions.
