---
name: market-signal-intake
description: "Turn market signals (competitive moves, customer churn, support patterns, search console data, product analytics) into structured direction inputs. Enforces signal-noise separation, confidence levels, and routing through discovery — not delivery. Produces a ranked signal log that feeds Phase 3 (Run Discovery) of the Hamster Direction workflow."
version: "1.0.0"
category: "Product"
---

# Market Signal Intake

Turn market signals into structured direction inputs. Enforce separation of signal from noise. Produce a ranked signal log that feeds discovery — never delivery.

This skill powers Phase 3 (Run Discovery) of the Hamster Company Direction workflow. The workflow says "priorities can change with the market" — this skill operationalizes sensing the market. Discovery skills (Hamster Discovery Interviews, Hamster Discovery Synthesis, idea-refine, interview-me) cover user-level discovery. This skill covers market-level signals. Signals feed discovery, not delivery — a signal triggers a discovery investigation, not a brief.

## When to use

- When analyzing competitive moves or market shifts
- When reviewing customer churn patterns or support volume trends
- When a user asks what's happening in the market or should we change direction based on X
- When reviewing Google Search Console or PostHog data for directional signals
- When a competitor ships a feature, raises funding, or changes pricing
- When churn clusters around a specific reason or segment
- When support ticket volume spikes on a specific topic
- When search console impressions or CTR shift meaningfully for a query cluster

## Core guidance

**Always structure every signal with:** source, observation, confidence level (low / medium / high), and potential direction impact. A signal without all four fields is not a signal — it's a note.

**Never act on a single data point.** One data point is noted, not acted on. Two is a pattern. Three is a trend. A single churned customer, a single competitor blog post, a single week of search console data — note it, log it, do not build from it.

**Always route signals through discovery, not delivery.** A signal triggers a discovery investigation, not a brief. The output of this skill is a ranked signal log that feeds Hamster Discovery Interviews and Hamster Discovery Synthesis — not a feature spec or a delivery plan.

**Always separate signal from noise.** A competitor shipping a feature is a signal. A competitor tweeting is noise — unless the tweet indicates a strategic shift (pricing change, market entry, partnership). A single support ticket is noise. Three tickets on the same topic in a week is a signal. A single search query losing impressions is noise. A cluster of queries losing impressions over 4+ weeks is a signal.

**Always rank signals by confidence and potential impact.** Do not treat all signals equally. A high-confidence signal with high potential direction impact ranks above a medium-confidence signal with low impact. Rank order forces prioritization — you cannot investigate everything at once.

**Always note the discovery action each signal should trigger.** A signal without a next step is a log entry, not a direction input. The discovery action is specific: "run 3 interviews with churned customers in segment X," "test hypothesis Y with a PostHog funnel," "monitor competitor Z's pricing page weekly for 4 weeks."

**Never create a brief directly from a market signal.** A signal says "something is happening." Discovery says "here's why and what to do about it." Skip discovery and you build on assumption, not evidence.

## Signal structure

Every signal must contain:

```
Source: [where the signal came from — competitor, customer, support, search console, PostHog]
Observation: [what you observed — factual, not interpretive]
Confidence: [low / medium / high — based on data points and source reliability]
Potential direction impact: [what this could mean for product direction if confirmed]
Discovery action: [what investigation this signal should trigger]
```

### Confidence levels

- **Low:** Single data point or unverified source. Note and monitor. Do not investigate yet.
- **Medium:** Two data points or one data point from a highly reliable source. Worth a lightweight discovery investigation.
- **High:** Three or more data points, or a confirmed pattern across sources. Triggers a full discovery investigation.

## Examples

### Example 1: Competitor feature launch

```
Source: Competitor (Linear) — product changelog, Q3 release notes
Observation: Linear shipped AI-powered triage that auto-assigns issues based on historical patterns. Three of our top-20 accounts requested similar functionality in the past 60 days.
Observation 2: Two of those accounts mentioned Linear's triage by name in their most recent support interaction.
Confidence: Medium — two data points (customer requests + competitor shipped), but no churn yet
Potential direction impact: If AI triage becomes table-stakes, our manual assignment flow becomes a competitive disadvantage. Could affect retention for accounts that value workflow automation.
Discovery action: Run 3 interviews with accounts that requested this. Ask: what workflow problem does auto-triage solve? Is this a nice-to-have or a switching trigger? Do NOT brief an AI triage feature yet.
```

### Example 2: Search Console query decline

```
Source: Google Search Console — 8-week comparison
Observation: Impressions for "project management for startups" declined 42% over 8 weeks. CTR stable. Position dropped from 4.2 to 6.8. Three related queries ("startup project management tool", "agile for small teams", "startup task tracker") show the same decline pattern. One query ("startup kanban board") increased 15%.
Observation 2: PostHog shows a 12% drop in signup conversion from organic search traffic in the same period.
Confidence: High — 4 queries trending the same direction over 8 weeks, corroborated by conversion data
Potential direction impact: Search demand is shifting away from "project management" framing toward more specific tool categories. Our SEO strategy and landing page messaging may need to adapt. The rising query suggests "kanban" is gaining mindshare.
Discovery action: Run discovery interviews with recent organic-search signups — how did they describe what they were looking for? Test whether "kanban" or workflow-specific messaging resonates more than generic "project management." Pull 4 weeks of PostHog data on organic search conversion by landing page.
```

### Example 3: Churn cluster

```
Source: Customer churn — cancellation survey + exit interviews, past 30 days
Observation: 4 of 7 churned customers in the past 30 days cited "too complex for our team size." All 4 were teams of 3-5 people. Exit interviews show they evaluated 2 competitors with simpler onboarding flows.
Observation 2: PostHog shows that teams of 3-5 have 2.3x higher activation drop-off at the workspace setup step compared to teams of 10+.
Confidence: High — 4 churned customers with the same reason + product analytics confirming the friction point
Potential direction impact: Small teams are a segment we're losing. Simplifying onboarding for teams under 10 could reduce churn. But this could also mean small teams are not our ICP — discovery must determine whether to serve them better or stop targeting them.
Discovery action: Run 5 interviews with active small-team accounts (not just churned ones) — what made onboarding work for them? Run 3 interviews with churned small-team accounts — what was the breaking point? Do NOT brief a simplified onboarding flow until discovery confirms whether small teams are worth the investment.
```

## Anti-patterns

### Acting on a single data point as a trend

**What:** A single customer churns citing missing integrations. You brief an integrations sprint.
**Why it fails:** One churn is a data point, not a trend. The customer may have had other motivations. Without 2-3 corroborating signals, you're building on anecdote.
**Do instead:** Log the signal with low confidence. Monitor for 30 days. If 2-3 more churn signals cite integrations, upgrade to medium confidence and run discovery.

### Creating a brief directly from a market signal

**What:** A competitor launches a feature. You write a brief to build the same feature.
**Why it fails:** You skipped discovery. You don't know if your customers want this, if the competitor's feature is working, or if this is a strategic move or a defensive one. You're reacting, not learning.
**Do instead:** Log the signal. Route it to discovery. Let Hamster Discovery Interviews and Synthesis determine whether this is worth investigating before any brief is written.

### Treating every competitor announcement as urgent

**What:** A competitor posts on X about a new AI feature. You drop current discovery work to investigate.
**Why it fails:** Most competitor announcements are noise — marketing, not strategic shifts. Reacting to every announcement means you're building their roadmap, not yours.
**Do instead:** Ask: does this indicate a strategic shift (pricing, market entry, partnership, platform change)? If yes, log as a signal. If no, note it and move on.

### Recording a signal without confidence or impact

**What:** You log "competitor X launched feature Y" with no confidence level or direction impact.
**Why it fails:** Without confidence and impact, you can't rank signals. Everything looks equal. You can't prioritize what to investigate first.
**Do instead:** Always include all four fields. If you can't assess confidence or impact, the signal isn't ready — gather more data before logging.

## Validation criteria

Before finalizing a signal log entry, verify:

1. **All four fields present:** Source, observation, confidence, potential direction impact. No field is empty or vague.
2. **Discovery action is specific:** It names what to investigate, not what to build. "Interview 3 customers who churned citing X" is valid. "Build feature X" is not.
3. **Confidence matches data points:** Low = 1 data point. Medium = 2 data points or 1 from highly reliable source. High = 3+ data points or confirmed cross-source pattern.
4. **Signal is separated from noise:** The observation is factual and specific, not interpretive. "4 of 7 churned customers cited complexity" is a signal. "Customers think we're too complex" is noise.
5. **No brief or delivery artifact is produced:** The output is a ranked signal log. Discovery is the next step, not delivery.
6. **Ranking is defensible:** Higher-confidence, higher-impact signals rank above lower-confidence, lower-impact ones. The ranking order should survive scrutiny — if you can't explain why signal A ranks above signal B, re-evaluate.
