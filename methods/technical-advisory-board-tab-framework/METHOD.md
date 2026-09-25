---
name: "technical-advisory-board-tab-framework"
category: "Marketing"
description: "Adam Frankl's Technical Advisory Board (TAB) Framework: recurring one-on-one, no-pitch calls with developers to find the problems worth solving."
metadata:
  datePublished: "2026-07-07"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Technical Advisory Board (TAB) Framework for Devtools

> Created by **Adam Frankl** - [https://www.amazon.com/Developer-Facing-Startup-market-developer-facing/dp/B0D4KGHQML](https://www.amazon.com/Developer-Facing-Startup-market-developer-facing/dp/B0D4KGHQML)

## Overview

The Technical Advisory Board (TAB) Framework is Adam Frankl's method for founders of developer-facing startups to learn what problems their users actually have. A founder recruits developers and the other people who influence adoption, then holds a short one-on-one call with each of them every month for six months, asking the same questions of everyone and never pitching. In his post [The #1 most important process](https://medium.com/@graphmaven/the-1-most-important-process-64c037d9b0c2), Frankl calls creating a technical advisory board "the single best action you can take as a dev startup founder." As a technical advisory board framework, it gives a small team a repeatable developer discovery framework that feeds both the product and the story told about it.

Frankl himself calls the name misleading. In a [Scaling DevTools interview](https://www.youtube.com/watch?v=gdqqovc3REs) he says a TAB is not technical, does not give advice, and is not a board. Members are potential users and customers. Frankl separates them from the senior technical people a founder might ask for advice: those advisors are valuable and lend early credibility, he writes, "but they are not sufficient." A developer advisory board in his sense is a set of repeated interviews, and the members never meet as a group.

Frankl's written guidance is specific about the shape of the program. Joining a TAB means a thirty-minute call every month for six months, and his post says to compensate members "with stickers, mugs, or t-shirts" ([Frankl](https://medium.com/@graphmaven/the-1-most-important-process-64c037d9b0c2)). In a [Scaling DevTools interview](https://www.youtube.com/watch?v=gdqqovc3REs) he adds that it is not a paid position: "appreciation not compensation." The board needs several members from each persona the product touches, which for developer tools can include developers, dev leaders, CTOs, VPs of engineering, and where relevant SREs, QA, and security. On size he writes: "I have never seen more than 50. But two is not enough." In the later interview he recommends aiming for 50 people when starting, because roughly half of the conversations will not produce anything useful ([Scaling DevTools](https://www.youtube.com/watch?v=gdqqovc3REs)).

The calls follow a fixed script. Frankl suggests about seven questions, asked identically of everyone, and a hard stop at thirty minutes because in his experience the second half of hour-long calls never produced anything valuable ([What goes on in a TAB call?](https://medium.com/@graphmaven/what-goes-on-in-a-tab-call-3e155c5e1f59)). His favorite opener is the "magic wand" question, which he credits to Cindy Alvarez, author of [Lean Customer Development](https://www.cindyalvarez.com/). Two follow-ups come from Andy Raskin: how the change would affect the person's life, and what is different about the world now that makes it more valuable than before. Raskin's own writing explains why that last question matters: a story that opens with an [undeniable shift in the world](https://medium.com/the-mission/the-greatest-sales-deck-ive-ever-seen-4f4ef3391ba0) creates stakes and urgency without putting the listener on the defensive.

After the first round of calls comes analysis. Frankl uses Alexander Osterwalder's Value Proposition Design and lists pains, gains, and jobs to be done for each persona, drops outliers, and merges personas that turn out to share the same problems ([After the first set of TAB calls](https://medium.com/@graphmaven/after-the-first-set-of-tab-calls-4f5bf63818ef)). He writes that going from a theoretical 12 personas down to 3 is not unusual. The team then takes the top pains back to members to check them. In a 2026 follow-up interview, Frankl lays out the arc of the early calls: the first is discovery, the second prioritizes the problems people named, and the third tests how much of a problem the product would need to solve to be worth adopting ([Scaling DevTools](https://www.youtube.com/watch?v=O7Dj4zriBeY)).

Frankl draws on his own career for the method. The author page for [The Developer Facing Startup](https://www.amazon.com/Developer-Facing-Startup-market-developer-facing/dp/B0D4KGHQML), published May 17, 2024, says he cofounded or was an early executive at 12 VC-backed developer-facing startups, including JFrog, Neo4j, and Sourcegraph, and chairs the developer-facing track at Alchemist Accelerator. In a [Scaling DevTools episode](https://www.youtube.com/watch?v=_J_A4DAhGqM) he describes the TAB as pieces he put together over decades of trying to get useful feedback, and credits Steve Blank for the idea underneath it: a startup is an organization [searching for a repeatable and scalable business model](https://steveblank.com/2010/01/25/whats-a-startup-first-principles/), so its founders have to go and find out what customers need. The framework is built for developer-facing products, but the discipline of repeated, structured, no-pitch interviews carries over to any technical buyer.

## Core Principles

### Talk About the Problem, Never the Product

A TAB call is an interview about the member's problems. Frankl's rule is blunt: "These are not sales calls. Avoid mentioning your product. Do not do demos" ([What goes on in a TAB call?](https://medium.com/@graphmaven/what-goes-on-in-a-tab-call-3e155c5e1f59)). If a member asks about the product, schedule a separate call for that. Frankl says in a [Scaling DevTools interview](https://www.youtube.com/watch?v=gdqqovc3REs) that a product demo is read as a sales call, and that people in a sales situation stop sharing information. Teresa Torres draws the same line in her [guide to customer interviews](https://www.producttalk.org/2021/06/customer-interviews/), where sales conversations do not count as interviews at all.

### One Person at a Time

Every TAB call is one on one. Frankl's reason is practical: in a group, the quicker person answers and the other nods along, so half the ideas are lost ([Frankl](https://medium.com/@graphmaven/what-goes-on-in-a-tab-call-3e155c5e1f59)). In a [Scaling DevTools clip](https://www.youtube.com/watch?v=6-zY1JRxjV4) he describes running a TAB as being in the idea harvesting business. Most ideas will be ordinary, and you only find the good ones by hearing all of them.

### Ask Everyone the Same Questions

Frankl asks identical questions of every member, whatever their seniority. Asking the exact same questions of 50 people, he writes, makes you "a connoisseur of the answers," able to compare how different personas respond and spot outliers ([What goes on in a TAB call?](https://medium.com/@graphmaven/what-goes-on-in-a-tab-call-3e155c5e1f59)). Consistency is what turns a stack of conversations into data you can compare.

### Cover Every Role That Can Block Adoption

In a [Scaling DevTools clip](https://www.youtube.com/watch?v=6-zY1JRxjV4), Frankl compares adoption inside a company to picking a lock: every cylinder has to be set, and one closed cylinder keeps the lock shut. A developer who loves the tool is one cylinder. The person with the budget, the security lead, and the platform owner are others, and each needs a value proposition built from their own problems. That is why the board needs several members from every persona rather than many from one.

### A Relationship With a Fixed End

The ask is small and bounded: thirty minutes a month for six months, stated up front, after which the arrangement ends ([Scaling DevTools](https://www.youtube.com/watch?v=gdqqovc3REs)). The fixed end makes it easy to say yes, and the repeated calls let members get past polite first answers. Frankl also treats willingness to give that time as a test. If nobody will spare thirty minutes a month to talk about the problem, the problem probably is not important to them.

### Appreciation, Not Compensation

Frankl does not pay TAB members or give them equity. He thanks them with swag, so they can tell peers they sit on a startup's technical advisory board, and he argues that cash makes the relationship feel like a bribe ([Scaling DevTools](https://www.youtube.com/watch?v=gdqqovc3REs)). The implicit bargain is that the member's time will help solve their own problems. In the [follow-up interview](https://www.youtube.com/watch?v=O7Dj4zriBeY) he warns that members stop giving time once they stop believing that, so honesty about progress is part of the deal.

### Validate Before You Believe

Frankl treats founder assumptions as hypotheses that have to be tested with members before anyone acts on them. After the first round of calls he takes the synthesized top pains back to members and asks whether they agree, and expects the answers to force revisions ([After the first set of TAB calls](https://medium.com/@graphmaven/after-the-first-set-of-tab-calls-4f5bf63818ef)). Strategyzer makes the same point about the Value Proposition Canvas: fit is [a claim until customers confirm it](https://www.strategyzer.com/library/the-value-proposition-canvas).

## Steps

1. **Name the problem and the personas**
   Write down the problem area you want to learn about, stated at a breadth people can answer. Frankl says stating it too narrowly or too broadly both make the answers worthless, and that the best statements boil down to two or three words, like "universal code search" at Sourcegraph ([Scaling DevTools](https://www.youtube.com/watch?v=O7Dj4zriBeY)). Then list every role you think influences adoption: users, their managers, the budget holder, and any security or operations gatekeeper. Treat both the problem statement and the persona list as hypotheses. The output is a one-page brief that the recruiting and the question list refer back to.

2. **Recruit members one message at a time**
   Find candidates through people you know and through LinkedIn, and send short, individual invitations that praise something specific the person wrote or did. Frankl's formula is "Thank, praise, and then beg," and he warns against batch-and-blast outreach ([How to recruit TAB members](https://medium.com/@graphmaven/how-to-recruit-tab-members-a35d44904b24)). Expect most people to ignore you: he plans for 50 outreach messages per member recruited. Ask for thirty minutes a month for six months and offer swag and gratitude in return. The recruiting skill covers the targeting and message in detail.

3. **Write one question list for everyone**
   Before the first call, settle on about seven questions ([Frankl](https://medium.com/@graphmaven/what-goes-on-in-a-tab-call-3e155c5e1f59)). Open with the magic wand question within the problem area, follow with how the change would affect the person's life, and ask what is different now that makes it more valuable than before. Check each question for wording that suggests an answer; the Nielsen Norman Group's guide on [leading questions](https://www.nngroup.com/articles/leading-questions/) is a good checklist. Keep the list fixed across members so answers can be compared.

4. **Run the discovery calls**
   Hold each call one on one, keep it to thirty minutes, and ask permission to record. Frankl says nearly everyone agrees, and recommends keeping transcripts confidential inside the company while sharing them among the founders ([Scaling DevTools](https://www.youtube.com/watch?v=gdqqovc3REs)). Ask the questions, then listen; he writes that developers who are wary of strangers "will talk your ear off" about their own problems. Do not mention the product. If the member asks about it, book a separate conversation.

5. **Synthesize pains, gains, and jobs by persona**
   After the first set of calls, go through every transcript and mark pains, gains, and jobs to be done, plus the answers to the "what is different now" question. Group them by persona, throw out outliers, and merge personas that share the same problems ([After the first set of TAB calls](https://medium.com/@graphmaven/after-the-first-set-of-tab-calls-4f5bf63818ef)). Rank the top few pains for each persona that remains. Save the document; it is the agenda for the next call.

6. **Take the synthesis back to members**
   In the second call, show members the ranked pains and ask whether they match their experience. Frankl's suggested framing is that you have talked to a few dozen of their peers and these seem to be the top pains in their field, and he warns that the discussion will change your plans ([Frankl](https://medium.com/@graphmaven/after-the-first-set-of-tab-calls-4f5bf63818ef)). Record disagreements as carefully as agreement. Update the ranking after every few calls rather than waiting for the whole board.

7. **Test how much of the problem must be solved**
   In the third call, find out how large an improvement would change how the member works. Frankl's approach is to describe a result, either one an early user achieved or a clearly hypothetical one, and ask whether duplicating it would be compelling and why ([Scaling DevTools](https://www.youtube.com/watch?v=O7Dj4zriBeY)). He is firm that you never claim results you have not achieved. The answers tell you the minimum a first release has to deliver and give you the raw material for the product story.

8. **Keep recruiting and keep publishing**
   When members finish their six months, thank them and let them go, and keep recruiting new ones so there are always calls on the calendar. Asked whether the TAB is a one-off six-month project, Frankl answered that in his experience the most successful startups are the ones that talk to the most users and potential users early on ([Scaling DevTools](https://www.youtube.com/watch?v=O7Dj4zriBeY)). He also recommends publishing on the topics you learn about and reaching out to people who engage, which feeds the next round of recruiting. He says a surprising number of former members want to pick the conversation up again when you come back with something new.

## How a TAB Differs from Related Practices

A TAB borrows from several customer discovery traditions. The table shows where it matches them and where it departs, using each practice's own sources.

| Practice | Who takes part | Cadence | Main output |
|---|---|---|---|
| TAB ([Frankl](https://medium.com/@graphmaven/the-1-most-important-process-64c037d9b0c2)) | Potential users and customers, several per persona | Monthly half-hour call, six months | Ranked pains per persona and a product story |
| Senior advisors ([Frankl](https://medium.com/@graphmaven/the-single-most-important-thing-5e7fa3b795cb)) | Senior technical people | As needed | Advice and early credibility |
| Continuous interviewing ([Torres](https://www.producttalk.org/2021/06/customer-interviews/)) | Mostly different customers each time | At least one interview a week | Opportunities for a product team |
| User interview study ([NN/g](https://www.nngroup.com/articles/user-interviews/)) | Participants recruited for a study | Usually one-on-one sessions per study | Findings against research goals |

Frankl's model differs from continuous interviewing on who does the talking. Torres prefers the product trio to interview together and warns against relying on one interviewer, while Frankl, in his [follow-up interview](https://www.youtube.com/watch?v=O7Dj4zriBeY), prefers one person running all the calls for consistency and treats the work as a founder-level responsibility. He has also seen co-founders split the calls successfully ([Scaling DevTools](https://www.youtube.com/watch?v=gdqqovc3REs)).

## When to Use

- You are founding or running an early developer-facing startup and cannot yet say, in the users' own words, what problem you solve. The TAB is designed for exactly this search, before the product or the positioning is fixed.
- Adoption stalls after good meetings with enthusiastic developers. Frankl's lock metaphor suggests another role, such as the budget holder or security lead, is blocking you, and a TAB with members from every persona will find it.
- You need a story for marketing and sales that developers find credible. The "what is different now" answers and the members' own language are the raw material for that story.
- You are entering a category where developers already have tools, and you need to find which pain those tools leave unsolved before choosing what to build.
- You have a few early users and want structure around talking to them, so that what you learn can be compared across people and does not stay in one founder's memory.

## When Not to Use

- You need a statistically reliable answer to a narrow question, such as which of two onboarding flows converts better. A few dozen interviews will not give you that; run an experiment instead.
- Nobody on the team can commit to a monthly rhythm of calls and analysis. The value comes from repeated calls and from comparing answers, and a program that stops after a few calls leaves you with anecdotes.
- The buyers and users are not technical and do not share developer culture. The method will still work as structured interviewing, but Frankl's developer-specific advice on recruiting, swag, and skepticism toward vendors may not transfer.
- You want expert advice on how to build the product. That is the job of senior technical advisors, which Frankl keeps separate from the TAB.

## Skills

This method includes the following skills:

- [Recruiting Developer Advisory Board Members](../../skills/recruiting-developer-advisory-members/SKILL.md): Find, invite, and sign up developers and other adoption influencers for a six-month TAB commitment.
- [Designing Pain-Focused Interview Guides for Developers](../../skills/designing-developer-pain-interview-guides/SKILL.md): Write the short, fixed question list every TAB call uses, starting from the magic wand question.
- [Conducting Non-Pitch Discovery Calls with Developers](../../skills/conducting-non-pitch-discovery-calls/SKILL.md): Run a thirty-minute, one-on-one call that stays on the member's problems and never becomes a pitch.
- [Synthesizing Developer Advisory Insights into Themes](../../skills/synthesizing-advisory-insights-into-themes/SKILL.md): Turn transcripts into ranked pains, gains, and jobs per persona and check them with members.
- [Tracking Developer Sentiment Across Advisory Sessions](../../skills/tracking-developer-sentiment-across-sessions/SKILL.md): Keep a record that shows how each member's problems and priorities change from call to call.
- [Translating TAB Findings into Product Roadmap Decisions](../../skills/translating-tab-findings-to-product-roadmap/SKILL.md): Link roadmap choices to validated pains and to how much of each problem must be solved.
- [Rotating and Managing Advisory Board Membership](../../skills/rotating-and-managing-board-membership/SKILL.md): Run fixed six-month terms, keep new members coming, and keep the relationship honest.

## FAQ

**What is a technical advisory board in Adam Frankl's framework?**

It is a set of potential users and customers who each agree to a thirty-minute one-on-one call with a founder every month for six months. Frankl says in a [Scaling DevTools interview](https://www.youtube.com/watch?v=gdqqovc3REs) that despite the name it is not technical, does not give advice, and is not a board. The calls are structured interviews about the member's problems. Members are thanked with swag, not paid.

**How many members should a TAB have?**

Frankl's written guidance is several members from each persona the product touches; he has "never seen more than 50" and says two is not enough ([Frankl](https://medium.com/@graphmaven/the-1-most-important-process-64c037d9b0c2)). In a later interview he recommends aiming for 50 when you start, because about half the conversations will not yield anything useful. Scaling DevTools host Jack, who ran his own TAB, suggests a smaller start of around ten people from your network if that is what you can manage ([The Best Action for a Devtools Founder](https://www.youtube.com/watch?v=_J_A4DAhGqM)). That is his adaptation, not Frankl's recommendation.

**What questions should a TAB call ask?**

Frankl's core sequence is the magic wand question ("If you could wave a magic wand and be able to do anything that you can't do today, what would it be?"), then how that would change the person's life, then what is different about the world now that makes it more valuable than before ([What goes on in a TAB call?](https://medium.com/@graphmaven/what-goes-on-in-a-tab-call-3e155c5e1f59)). He credits the first to Cindy Alvarez and the other two to Andy Raskin. He suggests about seven questions in total and asks the same ones of everyone.

**Can I show my product during TAB calls?**

Not in the discovery calls. Frankl says to avoid mentioning the product and not to demo, and to book a separate call if a member shows interest ([Frankl](https://medium.com/@graphmaven/what-goes-on-in-a-tab-call-3e155c5e1f59)). Later calls change character: the third call tests how much of a problem must be solved, using real or clearly hypothetical results, and he insists you never claim results you have not achieved ([Scaling DevTools](https://www.youtube.com/watch?v=O7Dj4zriBeY)).

**Should TAB members be paid?**

Frankl's principle is "appreciation, not compensation." He gives stickers, mugs, and t-shirts, and argues that cash payments make the relationship feel like a bribe ([Scaling DevTools](https://www.youtube.com/watch?v=gdqqovc3REs)). He notes one exception in the same interview: business people on a customer advisory board sometimes insist on payment, and sales VPs asked to join one will want to be compensated. For developers, the value to them is attention to their problems and the credit of being on the board.

**Do TAB members ever meet as a group?**

No. Frankl runs every call one on one, because in a group the quicker person answers while the other nods along and their ideas are lost ([Frankl](https://medium.com/@graphmaven/what-goes-on-in-a-tab-call-3e155c5e1f59)). Members are also not limited to existing customers: he describes them as potential users and customers. Teresa Torres lists a customer advisory board as one way to [recruit interview participants](https://www.producttalk.org/2021/06/customer-interviews/), and a TAB can serve the same recruiting role once the first six months are over.

**Who should run the calls?**

Frankl treats talking to developers as a founder-level responsibility. He prefers one person doing all the calls for consistency and skill, and says founders who cannot do it should hire someone who can rather than skip it ([Scaling DevTools](https://www.youtube.com/watch?v=O7Dj4zriBeY)). Whoever runs them, the recordings and transcripts should be shared so the whole team hears what members said.

## Sources

- [Adam Frankl: The #1 most important process](https://medium.com/@graphmaven/the-1-most-important-process-64c037d9b0c2)
- [Adam Frankl: The single most important thing](https://medium.com/@graphmaven/the-single-most-important-thing-5e7fa3b795cb)
- [Adam Frankl: What goes on in a TAB call?](https://medium.com/@graphmaven/what-goes-on-in-a-tab-call-3e155c5e1f59)
- [Adam Frankl: How to recruit TAB members](https://medium.com/@graphmaven/how-to-recruit-tab-members-a35d44904b24)
- [Adam Frankl: After the first set of TAB calls](https://medium.com/@graphmaven/after-the-first-set-of-tab-calls-4f5bf63818ef)
- [Scaling DevTools: How to build a developer tool, with Adam Frankl](https://www.youtube.com/watch?v=gdqqovc3REs)
- [Scaling DevTools: Adam Frankl answers my Technical Advisory Board questions](https://www.youtube.com/watch?v=O7Dj4zriBeY)
- [Scaling DevTools: Adam Frankl on Technical Advisory Boards](https://www.youtube.com/watch?v=6-zY1JRxjV4)
- [Scaling DevTools: The Best Action for a Devtools Founder](https://www.youtube.com/watch?v=_J_A4DAhGqM)
- [The Developer Facing Startup by Adam Frankl](https://www.amazon.com/Developer-Facing-Startup-market-developer-facing/dp/B0D4KGHQML)
- [Cindy Alvarez: Lean Customer Development](https://www.cindyalvarez.com/)
- [Andy Raskin: The Greatest Sales Deck I've Ever Seen](https://medium.com/the-mission/the-greatest-sales-deck-ive-ever-seen-4f4ef3391ba0)
- [Steve Blank: What's A Startup? First Principles](https://steveblank.com/2010/01/25/whats-a-startup-first-principles/)
- [Strategyzer: The Value Proposition Canvas](https://www.strategyzer.com/library/the-value-proposition-canvas)
- [Teresa Torres: Customer Interviews](https://www.producttalk.org/2021/06/customer-interviews/)
- [Nielsen Norman Group: User Interviews 101](https://www.nngroup.com/articles/user-interviews/)
- [Nielsen Norman Group: Avoid Leading Questions](https://www.nngroup.com/articles/leading-questions/)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
