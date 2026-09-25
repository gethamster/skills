# Examples: Synthesizing Developer Advisory Insights into Themes

## Collapsing personas after the first round

**Scenario:**

Illustrative scenario: a startup building a feature-flag service started its TAB with five personas: frontend developers, backend developers, QA engineers, product managers, and engineering managers. The first round of calls is complete.

**Walkthrough:**

The team highlights pains, gains, and jobs in every transcript and clusters them within each persona. When they compare the ranked lists, frontend and backend developers share the same top pains: fear of breaking production during a release and flags nobody remembers to remove. They merge them into one "developer" persona.

QA engineers and product managers turn out to differ sharply. QA talks about reproducing a bug when flags vary by user, and product managers talk about knowing which customers see what. Engineering managers produced little that was distinctive, so the team keeps them on the list but flags the persona for another look after round two. They go into the second round with four personas instead of five.

## Weighing intensity against frequency

**Scenario:**

Illustrative scenario: in a TAB about test infrastructure, most developers mention slow test suites, while two members describe losing a full day hunting flaky tests before a release.

**Walkthrough:**

A simple count puts slow tests first. When the team rereads the transcripts, the slow-test mentions are brief and usually followed by "but we live with it." The flaky-test stories are long, specific, and include missed releases and weekend work.

The team ranks flaky tests first and slow tests second for the developer persona, and writes a sentence under each explaining why. In the second calls they show members this ranking and ask directly whether it matches their experience. Several members who had mentioned only slow tests say flaky tests are the bigger problem once asked, and one strongly disagrees. The team records both reactions.

## A validation call that changes the ranking

**Scenario:**

Illustrative scenario: a team building a code review tool presents its synthesis to a staff engineer in her second TAB call.

**Walkthrough:**

The founder shares one page for the reviewer persona: slow review turnaround first, unclear ownership of files second, noisy automated comments third. The engineer agrees with the first two and says the third is minor. She adds something missing: reviews of generated code, which her team now spends much of its review time on.

The founder notes the correction and checks the transcripts. Two other members had mentioned generated code in passing, but the team had clustered it under noisy comments. After several more second-round calls raise the same point, the team splits it into its own cluster and moves it into the top three.
