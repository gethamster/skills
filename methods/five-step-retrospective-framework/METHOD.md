---
name: "five-step-retrospective-framework"
category: "Workflows"
description: "The five-step retrospective framework from Derby and Larsen: set the stage, gather data, generate insights, decide what to do, and close the retro."
metadata:
  datePublished: "2026-07-02"
  dateModified: "2026-09-24"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Five-Step Retrospective Framework for Agile Retrospectives

> Created by **Esther Derby and Diana Larsen** - [https://pragprog.com/titles/dlret/agile-retrospectives/](https://pragprog.com/titles/dlret/agile-retrospectives/)

## Overview

The five-step retrospective framework is the meeting structure Esther Derby and Diana Larsen set out in their book [Agile Retrospectives: Making Good Teams Great](https://pragprog.com/titles/dlret/agile-retrospectives/), published in July 2006 with a foreword by Ken Schwaber. The book's premise is that a team should learn from its experience throughout a project instead of waiting for a review at the end. It divides an agile retrospective into five phases that run in a fixed order: set the stage, gather data, generate insights, decide what to do, and close the retrospective. The phases are named in the same words on the publisher's page for the [second edition](https://pragprog.com/titles/dlret2/agile-retrospectives-second-edition/), which Derby and Larsen wrote with David Horowitz. Most teams use it for the sprint retrospective at the end of each iteration, but the structure works for any team looking back on a stretch of shared work.

Each phase has one job, and the sequence is the method's main idea. Setting the stage gets people ready to talk and reminds them of the goal. Gathering data builds a shared picture of what happened before anyone explains it. Generating insights asks why things happened the way they did. Deciding what to do turns a few of those insights into concrete actions, and closing confirms the follow-up and ends the meeting cleanly. Retromat's summary of the phases describes the same arc, from giving people time to arrive, through creating "a shared pool of information", to picking "a few issues to work on" ([Retromat](https://retromat.org/blog/what-is-a-retrospective/)).

The order guards against the two most common ways a retrospective fails. A team that jumps straight to solutions argues about causes it has not agreed on, because each person remembers a different sprint. A team that talks about the sprint without narrowing down leaves with a list of complaints and no change. Derby presents the structure as a five part framework and explains "what happens when you omit one of the stages" ([Esther Derby](https://estherderby.com/videos/agile-retrospectives-the-heart-of-team-improvement/)). The same page names the symptom the structure is meant to prevent: teams that "fall into a rut, or fail to act on their retrospective resolves."

The phases stay fixed, and the activities inside them change. A timeline, a Mad Sad Glad board or a check-in question are interchangeable tools for a phase. Retromat, a public library of retrospective activities, builds random plans by picking one activity "for each of the 5 phases" and warns that a random plan rarely fits together until someone adjusts it ([Retromat](https://retromat.org/en/about)). That separation is what lets a facilitator keep retrospectives fresh without losing the logic of the meeting. The [activities and exercises skill](../../skills/choosing-retrospective-activities-and-exercises/SKILL.md) covers how to choose them.

The framework sits inside Scrum without conflict. The Scrum Guide says the purpose of the Sprint Retrospective is "to plan ways to increase quality and effectiveness", and that the most helpful improvements "may even be added to the Sprint Backlog for the next Sprint" ([Scrum Guide](https://scrumguides.org/scrum-guide.html)). The Scrum Guide says what the event is for. Derby and Larsen's phases give a facilitator an order for running it. Independent practitioner guides follow the same outline: GitLab's engineering handbook recommends an agenda of introduction, gather data, generate insights, decide what to do and close ([GitLab Handbook](https://handbook.gitlab.com/handbook/engineering/management/group-retrospectives/)), and Atlassian's retrospective play uses five timed steps with the same shape ([Atlassian](https://www.atlassian.com/team-playbook/plays/retrospective)).

This page covers the whole meeting: where the structure came from, the principles behind it, and how to run a sprint retrospective phase by phase. The skills linked below go deeper on each phase, on reusable templates, and on tracking action items between sprints, which is where many retrospectives lose their value. Derby summed up the purpose in an interview about the second edition: "The art of a retrospective lies in thinking, learning, and deciding together" ([Collaboration Superpowers](https://www.collaborationsuperpowers.com/284-agile-retrospectives-2-0-with-esther-derby-diana-larsen-david-horowitz/)).

## Where the Five Steps Came From

Regular team reflection was part of agile practice before the five steps had names. The Agile Alliance's history of the practice treats Derby and Larsen's book as the point where it was codified ([Agile Alliance](https://www.agilealliance.org/glossary/heartbeat-retrospective/)).

| Year | Milestone | Source |
|------|-----------|--------|
| 1997 | Alistair Cockburn describes projects that reflect after each increment, without naming the practice | [Agile Alliance](https://www.agilealliance.org/glossary/heartbeat-retrospective/) |
| 2001 | The Agile Manifesto principles call for the team to reflect at regular intervals and adjust | [Agile Manifesto](https://agilemanifesto.org/principles.html) |
| 2001 | Norm Kerth's book Project Retrospectives introduces the term; the XP community endorses retrospectives | [Agile Alliance](https://www.agilealliance.org/glossary/heartbeat-retrospective/) |
| 2006 | Derby and Larsen publish Agile Retrospectives with the five-step structure | [MindTools](https://www.mindtools.com/ao5tslk/sprint-retrospectives-in-agile-project-management/) |
| 2012 | Retromat, an activity library that builds plans with one activity per phase, goes live | [Retromat history](https://retromat.org/blog/history-of-retromat/), [About](https://retromat.org/en/about) |
| 2024 | Second edition, with David Horowitz, adds guidance for remote and hybrid teams | [Pragmatic Bookshelf](https://pragprog.com/titles/dlret2/agile-retrospectives-second-edition/) |

The Prime Directive that many teams read at the start of a retrospective comes from Norm Kerth's book, not from Derby and Larsen ([Retrospective Wiki](https://www.retrospectivewiki.org/index.php?title=The_Prime_Directive)). It pairs well with the set-the-stage phase, and the FAQ below quotes it.

## Core Principles

### Get people ready before asking them to talk

People arrive at a retrospective with their heads still in the sprint. The first phase gives them a moment to arrive, restates the goal and invites everyone to speak early. It also sets expectations about blame. GitLab's handbook lists a safe environment for feedback as the first requirement of an efficient retrospective, because without one "issues may go unmentioned" ([GitLab Handbook](https://handbook.gitlab.com/handbook/engineering/management/group-retrospectives/)).

### Agree on what happened before explaining it

The gather-data phase builds one shared account of the sprint. Each person remembers different events, and arguing about causes before the facts are on the wall turns the meeting into a contest of memories. Data includes events and metrics as well as how people felt, since frustration and energy are facts about the sprint too. [Matthies and Dobrigkeit](https://arxiv.org/abs/2101.01528) argue that most retrospective activities rely on team members' experiences and "neglect to take existing project data into account", so bringing a few numbers to the meeting is worth the preparation.

### Look for causes and patterns behind the first explanation

Generating insights means asking why things happened and looking across the data for patterns. The first explanation offered is usually the most visible one, and it is often a symptom. Techniques like the 5 Whys push past it; the Lean Enterprise Institute notes that "the specific number five is not the point", and that the aim is to keep asking until the root cause is found ([Lean Enterprise Institute](https://www.lean.org/lexicon-terms/5-whys/)). An insight should explain several observations at once.

### Commit to a few actions the team can carry out

The decide phase narrows many possible improvements to a small number the team will actually do. The Agile Alliance's description of the practice warns against both too few and too many actions and says "one or two improvement ideas per iteration retrospective may well be enough" ([Agile Alliance](https://www.agilealliance.org/glossary/heartbeat-retrospective/)). Each action needs an owner and a clear finish. Actions the team controls directly are the most likely to happen, a point Diana Larsen makes with her [Circles and Soup](https://www.dianalarsen.com/blog/2010/07/26/circles-and-soup/) exercise.

### End deliberately and improve the retrospective itself

Closing confirms who does what next, thanks people for their contributions and asks how the retrospective could be better. Retromat's summary lists the close as "Clarify follow-up; Appreciations; Clear end; How could the retrospectives improve?" ([Retromat](https://retromat.org/blog/what-is-a-retrospective/)). The last item matters most over time. A team that reviews its own retrospective every few sprints keeps the meeting useful instead of letting it harden into habit.

### Keep the structure, vary the activities

Running the same exercise every sprint produces the same answers. Because each phase can be filled with a different activity, the facilitator can change the conversation while keeping the logic intact. Choosing an activity for a phase is a design decision: a timeline suits a long or eventful sprint, while a quick feelings board suits a short one. Libraries such as [Retromat](https://retromat.org/en/about) exist to make that rotation easy.

### Follow up, or the next retrospective repeats this one

A retrospective is one cycle in an ongoing loop. Actions that are not reviewed tend to disappear, and the same problems return the following sprint. Ben Linders usually starts a retrospective by checking the actions from the previous one, and he names actions that "kept coming back" as a reason teams give up on retrospectives ([Ben Linders](https://www.benlinders.com/2015/getting-retrospective-actions-done/)). Recurring issues without measurable improvement are a sign the practice has become an empty ritual ([Agile Alliance](https://www.agilealliance.org/glossary/heartbeat-retrospective/)).

## Steps

1. **Set the stage**
   Welcome the team, state the goal of this retrospective and the time available, and walk through the agenda so people know what comes next. Review or agree the working agreements for the session, such as speaking from your own experience and keeping the focus on the process. Many teams read Norm Kerth's Prime Directive here. Then run a short check-in that gets every voice into the room, such as a one-word description of the sprint, or ESVP, an anonymous poll of whether people feel like explorers, shoppers, vacationers or prisoners ([FunRetrospectives](https://www.funretrospectives.com/esvp/)). If the check-in shows low trust or low energy, adjust the plan before moving on.

2. **Gather data**
   Build a shared picture of the sprint before anyone explains it. Bring hard data prepared in advance, such as delivery metrics, incidents and the status of last sprint's actions, and collect soft data such as feelings and energy. A timeline of key events or a Mad Sad Glad board are common activities; GitLab's handbook suggests "constructing a timeline" or asking what made people mad, sad or glad ([GitLab Handbook](https://handbook.gitlab.com/handbook/engineering/management/group-retrospectives/)). Give people quiet time to write before discussing, so the loudest person does not set the story. Check that every part of the sprint and every person is represented before moving on.

3. **Generate insights**
   Ask why things happened the way they did. Group the data into themes, look for patterns that repeat across the sprint, and dig into the themes that matter most with techniques such as the 5 Whys or a fishbone diagram. Keep the discussion on causes; when someone proposes a fix, write it down for the next phase and return to the question of why. A useful insight explains several observations and points to something the team could change. Leave this phase with a short list of insights the whole group agrees on.

4. **Decide what to do**
   Turn a few insights into actions. List candidate improvements, then narrow them with dot voting or an impact and effort discussion, and choose the one or two the team will actually carry out in the next sprint. Write each action so that anyone could tell when it is done, name an owner, and agree when progress will be checked. Sorting ideas into what the team controls, what it can influence and what it can only respond to helps keep actions realistic ([Diana Larsen](https://www.dianalarsen.com/blog/2010/07/26/circles-and-soup/)). Add the actions to the sprint backlog or team board, as the [Scrum Guide](https://scrumguides.org/scrum-guide.html) allows, so they compete for time with other work.

5. **Close the retrospective**
   Read back each action, its owner and when it will be reviewed, and confirm where it is recorded. Thank people for specific contributions. Then ask for quick feedback on the retrospective itself, such as a return on time invested vote or two questions about what to keep and change. Note what you will adjust in the next retrospective, and end on time. Retromat sums up the close as clarifying follow-up, appreciations and a clear end ([Retromat](https://retromat.org/blog/what-is-a-retrospective/)).

## When to Use

- At the end of every sprint or iteration, as the structure for the Scrum Sprint Retrospective. The phases give the event a repeatable order, so the team spends its time on the sprint rather than on how to run the meeting.
- When a team is new to retrospectives, or a new facilitator is taking over. Five named phases are easier to learn and hand over than an open discussion, and each phase has a clear goal to check against.
- After a release, incident or missed commitment that the team wants to learn from calmly. Separating data from interpretation keeps the discussion on what happened before anyone assigns causes.
- When retrospectives have gone stale and produce the same few comments each time. Changing the activities inside each phase changes the conversation without abandoning the structure.
- When a team has changed membership or ways of working and needs to reset its norms. The set-the-stage phase is a natural place to revisit working agreements.

## When Not to Use

- During a live incident or crisis that needs action now. Reflection comes after the situation is stable; a separate post-incident review can use the same phases later.
- When the time available is too short for a real discussion. Rushing five phases into a few minutes skips the insight phase, which is the part that produces useful actions. A quick pulse check or a shorter format fits better.
- When the team cannot act on anything it decides. Retrospectives that produce actions nobody is allowed to carry out breed cynicism; fix the mandate first, or focus the session on what the team does control.
- For a strategy or portfolio review across many teams. The phases are designed for one team reflecting on its own recent work, and larger reviews need different preparation and decision rights.

## Skills

This method includes the following skills:

- [Setting the Stage for Retrospectives](../../skills/setting-the-stage-for-retrospectives/SKILL.md): Open a retrospective with a clear goal, working agreements and a check-in that gets every voice into the room.
- [Gathering Data in Retrospectives](../../skills/gathering-data-in-retrospectives/SKILL.md): Collect facts, metrics and feelings about the sprint so the team shares one picture before explaining it.
- [Generating Insights from Retrospective Data](../../skills/generating-insights-from-retrospective-data/SKILL.md): Move from what happened to why, using clustering and root cause techniques such as the 5 Whys.
- [Deciding What to Do in a Retrospective](../../skills/deciding-what-to-do-in-retrospectives/SKILL.md): Narrow the team's ideas to one or two owned, testable improvements for the next sprint.
- [Closing a Retrospective](../../skills/closing-retrospectives-effectively/SKILL.md): End the meeting with confirmed actions, appreciation and feedback on the retrospective itself.
- [Choosing Retrospective Activities](../../skills/choosing-retrospective-activities-and-exercises/SKILL.md): Pick and combine activities for each phase to suit the sprint, the team and the time available.
- [Building a Reusable Retrospective Template](../../skills/building-sprint-retrospective-templates/SKILL.md): Design templates that map activities and timings to the five phases so any facilitator can run them.
- [Tracking Retrospective Action Items](../../skills/tracking-retrospective-action-items-across-sprints/SKILL.md): Keep retrospective actions visible, reviewed and finished from one sprint to the next.

## FAQ

**How do you run a sprint retrospective with the five steps?**

Plan the session before the meeting: choose one activity per phase, gather any data you want the team to see, and set a timebox. In the meeting, set the stage, gather data, generate insights, decide on one or two actions, and close with follow-up and feedback. Keep each phase to its job, and park solutions offered too early until the decide phase. Afterward, record the actions where the team plans its work and review them at the start of the next retrospective.

**How long should each phase take?**

There is no fixed split, and the right one depends on the sprint and the activities. Retrium's sample 60-minute plan gives 10 minutes to set the stage, 10 to gather data, 20 to generate insights, 15 to decide and 5 to close ([Retrium](https://www.retrium.com/ultimate-guide-to-agile-retrospectives/five-phases-of-a-successful-retrospective)). Atlassian's 60-minute play is similar, with 15 minutes for gathering feedback and 20 for insights ([Atlassian](https://www.atlassian.com/team-playbook/plays/retrospective)). The Scrum Guide caps the whole event at a maximum of three hours for a one-month Sprint and notes it is usually shorter for shorter Sprints ([Scrum Guide](https://scrumguides.org/scrum-guide.html)).

**What is the retrospective Prime Directive?**

It is a statement written by Norm Kerth in Project Retrospectives, often read aloud at the start of a retrospective: "Regardless of what we discover, we understand and truly believe that everyone did the best job they could, given what they knew at the time, their skills and abilities, the resources available, and the situation at hand." ([Retrospective Wiki](https://www.retrospectivewiki.org/index.php?title=The_Prime_Directive)). It is not part of Derby and Larsen's five steps, but it fits the set-the-stage phase because it frames the meeting as learning rather than blame. Thoughtworks describes it as a tool for building psychologically safe environments ([Thoughtworks](https://www.thoughtworks.com/insights/blog/applying-prime-directive-beyond-retrospective)).

**Can we skip a phase when time is short?**

Shorten phases instead of dropping them. Each phase does something the others depend on: without data the insights are guesses, and without a close the actions are easily forgotten. Derby's own talk on the framework addresses "what happens when you omit one of the stages" ([Esther Derby](https://estherderby.com/videos/agile-retrospectives-the-heart-of-team-improvement/)). If time is very tight, run a smaller activity in every phase and limit the decision to a single action.

**What are some sprint retrospective best practices?**

Prepare data in advance, give people quiet time to write before discussing, and keep the facilitator neutral; GitLab's handbook calls for "an impartial moderator" ([GitLab Handbook](https://handbook.gitlab.com/handbook/engineering/management/group-retrospectives/)). Limit actions to what the team will really do, give each one an owner, and put it where the team plans its work. Start every retrospective by reviewing the previous actions, and vary the activities so the conversation does not repeat itself.

**Does the framework work for remote teams?**

Yes. The second edition of the book adds guidance for remote and hybrid teams ([Pragmatic Bookshelf](https://pragprog.com/titles/dlret2/agile-retrospectives-second-edition/)), and co-author David Horowitz has said that "what makes a good remote retrospective is largely the same as what makes an effective in-person retrospective" ([Collaboration Superpowers](https://www.collaborationsuperpowers.com/284-agile-retrospectives-2-0-with-esther-derby-diana-larsen-david-horowitz/)). Use a shared digital board, collect some data asynchronously before the call, and take extra care in the set-the-stage phase to get everyone speaking. GitLab collects feedback in an issue first and holds a video meeting when an iteration was particularly difficult ([GitLab Handbook](https://handbook.gitlab.com/handbook/engineering/management/group-retrospectives/)).

**How does this compare with formats like the 4Ls or Start Stop Continue?**

Those formats are activities, and the five steps are the structure around them. A 4Ls board works well in the gather-data phase, and Retrium lists Start Stop Continue as a decide-what-to-do activity ([Retrium](https://www.retrium.com/ultimate-guide-to-agile-retrospectives/five-phases-of-a-successful-retrospective)). Using a format on its own often skips the insight and decision phases, which is why many teams wrap it in the five steps. See the [4Ls retrospective](https://tryhamster.com/methods/4ls-retrospective) method for that format in detail.

## Sources

- [Pragmatic Bookshelf: Agile Retrospectives: Making Good Teams Great](https://pragprog.com/titles/dlret/agile-retrospectives/)
- [Pragmatic Bookshelf: Agile Retrospectives, Second Edition](https://pragprog.com/titles/dlret2/agile-retrospectives-second-edition/)
- [Esther Derby: Agile Retrospectives, the Heart of Team Improvement](https://estherderby.com/videos/agile-retrospectives-the-heart-of-team-improvement/)
- [Collaboration Superpowers: Agile Retrospectives 2.0 with Derby, Larsen and Horowitz](https://www.collaborationsuperpowers.com/284-agile-retrospectives-2-0-with-esther-derby-diana-larsen-david-horowitz/)
- [Agile Alliance Glossary: Heartbeat Retrospective](https://www.agilealliance.org/glossary/heartbeat-retrospective/)
- [Principles behind the Agile Manifesto](https://agilemanifesto.org/principles.html)
- [MindTools: Sprint Retrospectives in Agile Project Management](https://www.mindtools.com/ao5tslk/sprint-retrospectives-in-agile-project-management/)
- [The Scrum Guide](https://scrumguides.org/scrum-guide.html)
- [Retrospective Wiki: The Prime Directive](https://www.retrospectivewiki.org/index.php?title=The_Prime_Directive)
- [Thoughtworks: Applying the Prime Directive beyond the retrospective](https://www.thoughtworks.com/insights/blog/applying-prime-directive-beyond-retrospective)
- [GitLab Handbook: Group Retrospectives](https://handbook.gitlab.com/handbook/engineering/management/group-retrospectives/)
- [Atlassian Team Playbook: Sprint Retrospective](https://www.atlassian.com/team-playbook/plays/retrospective)
- [Retrium: The Five Phases of a Successful Retrospective](https://www.retrium.com/ultimate-guide-to-agile-retrospectives/five-phases-of-a-successful-retrospective)
- [Retromat: What is a retrospective](https://retromat.org/blog/what-is-a-retrospective/)
- [Retromat: About](https://retromat.org/en/about)
- [Retromat: History of Retromat](https://retromat.org/blog/history-of-retromat/)
- [FunRetrospectives: ESVP](https://www.funretrospectives.com/esvp/)
- [Diana Larsen: Circles and Soup](https://www.dianalarsen.com/blog/2010/07/26/circles-and-soup/)
- [Lean Enterprise Institute: 5 Whys](https://www.lean.org/lexicon-terms/5-whys/)
- [Ben Linders: Getting Retrospective Actions Done](https://www.benlinders.com/2015/getting-retrospective-actions-done/)
- [Matthies and Dobrigkeit: Experience vs Data](https://arxiv.org/abs/2101.01528)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
