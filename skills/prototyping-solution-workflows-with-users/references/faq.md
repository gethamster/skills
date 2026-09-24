# FAQ: Prototyping Solution Workflows with Users

## What does "gravel road first" mean in practice?

It means shipping a version that works end to end on real data for one workflow but is rough in every other respect. The interface is plain, some steps may be manual, and error handling is minimal. What it must do is let a real user complete their actual task. Quality comes through iteration once you know the workflow is right.

## How narrow should the first prototype be?

Narrow enough that one team, queue or process step can use it and you can observe the outcome metric. A useful test is whether you can name the users and describe what changes for them in one paragraph. If the scope needs several teams to change behavior before any value appears, split it. You can widen later once the slice reliably works.

## How is a working prototype different from a mockup or demo environment?

A mockup shows what the tool might look like; a working prototype runs on the customer's real data and systems and is used for real work. Mockups get opinions, while working software exposes data quirks, hidden steps and conflicting expectations. That is why forward deployed teams favor shipping into the live environment early, within the security constraints agreed up front.

## How often should live demos happen?

Often enough that feedback reaches the build while changes are still cheap, for example once per iteration cycle. Each demo should use a real case and include both the sponsor and frontline users. If demos keep slipping because there is nothing new to show, the iteration cycle is too long or the scope too wide.

## When should a customization request be accepted?

Accept it when it fixes a defect, closes a gap in your understanding of the workflow, or directly moves the agreed outcome metric. For anything else, ask whether other teams or customers would need it too. Reusable requests are worth building carefully and flagging for the platform team. Site-specific preferences that do not move the metric should be parked or declined with a clear reason.
