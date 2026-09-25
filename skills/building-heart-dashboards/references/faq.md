# FAQ: Building HEART Metric Dashboards for Product Teams

## How many metrics should a HEART dashboard show?

As few as the goals require. Kerry Rodden's guidance is to prioritize the most important metrics and consider moving secondary ones to a separate dashboard, and the Interaction Design Foundation says juggling five goals and more than a dozen metrics at once is not practical. One primary metric per chosen category is a reasonable starting point.

## Should all five HEART categories appear?

Only the ones the team chose for this product or feature. The HEART paper says it is not always appropriate to use every category. Note the excluded categories and the reasons on the dashboard so readers know the omission was deliberate.

## Where do PULSE metrics like uptime and traffic go?

Keep them on their existing operational or business dashboards, or in a separate section. They matter for product health, but the HEART paper describes them as indirect measures of user experience. Mixing them into the HEART view makes it harder to see whether the experience itself changed.

## How often should the dashboard be reviewed?

Match the review to how fast each metric can move. Behavioral metrics built from logs can often be reviewed weekly. Survey metrics usually need longer periods to collect enough responses for a stable reading, so show them monthly or with confidence intervals.

## What should happen when a metric moves sharply?

First check the data: tracking changes and outages cause many sudden moves. If the data is sound, look at release annotations and segment breakdowns, then bring in qualitative research to understand why. Record the explanation on the chart so the next reader does not repeat the investigation.
