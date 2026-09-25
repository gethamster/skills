# FAQ: Evaluating Probabilistic Calibration

## What is the difference between accuracy and calibration?

Accuracy is the overall share of correct decisions. Calibration asks whether each confidence level matches its observed success rate, so predictions stated at 0.2 should be correct about 20% of the time across many cases, as [public descriptions of RLCD put it](https://aiwithmike.substack.com/p/jev-three-days-in-what-is-known-what). A model can be accurate and still badly calibrated if its numbers are too high or too low.

## How many bins should I use?

The [practitioner guide](https://systemonemodels.org/guides/rlcd-explained) uses ten bins as an example, but there is no universal count. Choose based on how many predictions you have and where they cluster. Rerun with a coarser and finer count, and trust only conclusions that survive both.

## What does a good expected calibration error look like?

The available material sets no universal acceptable ECE. Judge the score relative to your use: the confidence range where you plan to automate matters more than the overall number. Track ECE over time per task type and always read it next to the reliability plot.

## Can I evaluate calibration without ground-truth outcomes?

No. A stated probability can only be checked against what actually happened, so you need outcomes recorded after the fact. If outcomes arrive slowly, evaluate on the subset that has resolved and note the delay in your report.

## Has anyone published calibration results for Jev?

Independent reviewers reported none. One guide found [no paper, no reliability curve and no expected-calibration-error number](https://agentpedia.codes/blog/jev-system-one-models), and another noted that [no calibration curves have been published](https://aiwithmike.substack.com/p/jev-three-days-in-what-is-known-what). That is why measuring on your own data is essential.
