# FAQ: Building a North Star Metric Dashboard

## Should the North Star dashboard be real-time?

Usually not. The North Star and its inputs are meant to show trends, and most teams make decisions about them weekly. Daily data is useful for owners who want to catch problems early, but real-time charts on the main view tend to create noise and false alarms. Real-time monitoring belongs to operational dashboards for incidents.

## Who should own the dashboard?

One person, often in analytics or product operations, should own the dashboard as a product: its layout, definitions and data quality. Each metric on it has its own owner who explains its movements. Splitting these roles keeps the dashboard consistent while keeping accountability for each number with the team that can move it.

## How often should each level review it?

Owning teams look at their inputs weekly. Leadership reviews the North Star with its inputs on a regular cadence, weekly at Amplitude according to its playbook. The whole company sees progress less often, such as quarterly at an all-hands meeting. The exact cadence matters less than keeping it fixed.

## What belongs on the dashboard besides the North Star and inputs?

A few health metrics that guard against damage the North Star does not see, such as revenue, margin, support volume or reliability. Add context that helps interpret the numbers: targets, comparisons with a year ago, cohort splits and event annotations. Leave everything else in team drill-downs.

## How do we handle a change in a metric's definition?

Record the change on the chart with the date and the reason. Where possible, compute the old and new definitions side by side for a period so people can see the gap. Update the definition shown next to the chart and tell the owners before the next review, so nobody mistakes a definition change for a real movement.
