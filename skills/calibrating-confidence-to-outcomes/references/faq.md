# FAQ: Calibrating Confidence to Outcomes

## How many decisions do I need before the mapping means anything?

There is no universal number; the [practitioner guide](https://systemonemodels.org/guides/rlcd-explained) does not fix one, and small buckets are simply noisy. Show counts next to every bucket and treat thin ones as not yet measurable. A practical rule you might adopt, for example, is to wait until each bucket you plan to automate on holds at least a few hundred resolved decisions before relying on it.

## Is a highly accurate model automatically well calibrated?

No. Calibration asks whether stated confidence matches observed frequency, so a model reporting 85% should be [right about 85% of the time across similar cases](https://blockchain-council.org/ai/jev-calibrated-decisions-explained). A model can be right most of the time and still claim more certainty than it earns in some bands, which is exactly what breaks confidence-based automation.

## What if outcomes take weeks or months to arrive?

Keep logging at decision time and join outcomes whenever they resolve, excluding unresolved rows from the calculation. Track how many decisions are still pending per task, because early results describe only the fast-resolving cases. Where possible, find an earlier proxy outcome that reliably predicts the final one, and calibrate on that while noting the substitution.

## Do I need to calibrate each task separately even if they use the same model?

Yes. The [practitioner guide](https://systemonemodels.org/guides/rlcd-explained) notes that calibration varies by question type, so the same model can be trustworthy on one task and overconfident on another. Pooling hides this and leads to automation thresholds that fit neither task well.

## Which confidence number should I log if the model returns more than one?

Log the number your software actually acts on, and log the others too if they are available. TypeSafe says Jev returns [a probability distribution over outcomes and a confidence value describing how concentrated it is](https://jevtypesafeai.com/jev/rlcd), and those can behave differently. Calibrate the one that drives decisions first, then check the others if you plan to use them.
