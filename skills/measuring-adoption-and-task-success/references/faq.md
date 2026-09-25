# FAQ: Measuring Adoption and Task Success with HEART

## What is the difference between adoption and activation?

Adoption, in HEART, is the category for new users starting to use a product or feature. Activation is a common name for the specific action you choose to mark that start. Choosing a good activation event is how you make an adoption metric meaningful. The HEART paper notes that for some products a visit is enough, while for others a person counts as adopted only after completing a key task.

## Should adoption be a count or a rate?

Usually a rate. A raw count of new adopters rises whenever traffic rises, so it says little about the feature. Divide by the population that could adopt, such as weekly active users or new signups in the same period. Keep the count visible too, since a high rate on a tiny population may not matter.

## How do I measure task success when I cannot tell what the user was trying to do?

Use a study where tasks are assigned. The HEART paper suggests remote usability or benchmarking studies for measuring task success at scale, because logs alone often do not reveal intent. For flows with a clear start and end, such as checkout or sign-up, logs work well. For open-ended screens, assigned tasks give cleaner data.

## Is time on task always better when it is shorter?

Not always. For a checkout or a form, shorter is usually better. For reading, browsing or creative work, a longer time can mean people are getting value. Decide which direction is good before looking at the data, and pair time with completion so a faster but failing flow does not look like progress.

## What targets should I set for completion rates?

Set them from your own baseline. Compute the rate on the current design, see how much it varies from week to week, and pick a target that would be a meaningful improvement. Rates vary so much by task complexity that a borrowed number from another product is rarely a useful goal.
