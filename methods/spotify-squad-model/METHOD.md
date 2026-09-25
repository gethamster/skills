---
name: "spotify-squad-model"
category: "Ops"
description: "The Spotify model groups autonomous squads into tribes, with chapters and guilds for craft. Its history, pros and cons, and how to adapt it."
metadata:
  datePublished: "2026-06-01"
  dateModified: "2026-09-24"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# The Spotify Model: Squads, Tribes, Chapters and Guilds

> Created by **Spotify Engineering Team** - [https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)

## Overview

The Spotify model is a way of organizing product development around small, autonomous teams called squads, grouped into tribes, with chapters and guilds connecting people who share a craft. It is the name the agile community gave to the way Spotify described its own work in a scaling article and an engineering culture video ([Kniberg](https://blog.crisp.se/2015/06/07/henrikkniberg/no-i-didnt-invent-the-spotify-model)), and it remains a common reference point for Spotify scaling agile. Implementing the Spotify model well means understanding what it was, what Spotify itself later said about it, and its pros and cons, before copying any of the vocabulary.

The source is a paper, [Scaling Agile @ Spotify with Tribes, Squads, Chapters & Guilds](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf), written by Henrik Kniberg and Anders Ivarsson and dated October 2012. It describes a company that had kept an agile mindset while growing to over 30 teams across 3 cities. The authors open with a disclaimer: "We didn't invent this model." They call the paper "only a snapshot of our current way of working" and warn that by the time you read it, things have already changed. The same [paper](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf) says the structure was introduced gradually over the previous year, while the tech organization grew from 30 to 250 people over 3 years.

The paper defines four structures. A squad is similar to a Scrum team and is designed to feel like a mini-startup: it has the skills to design, develop, test and release, a long-term mission, a product owner who prioritizes the work, and no formally appointed squad leader. Each squad chooses its own way of working, whether Scrum, Kanban or a mix. A tribe is a collection of squads working in related areas, with a tribe lead who provides the best possible habitat for them. Tribes were sized with the Dunbar number in mind and designed to be smaller than 100 people or so ([Kniberg and Ivarsson](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)). A chapter groups people with similar skills inside one tribe, and its chapter lead is their line manager while also working in a squad. A guild is a looser community of interest that cuts across the whole organization, run by a guild coordinator.

Two animated videos by Kniberg followed. [Part 1 of Spotify engineering culture](https://engineering.atspotify.com/2014/03/spotify-engineering-culture-part-1) appeared on Spotify's engineering blog on March 27, 2014, and [part 2](https://engineering.atspotify.com/2014/09/spotify-engineering-culture-part-2) followed on September 20, 2014. Kniberg described the first as "a journey in progress, not a journey completed", and the second as somewhere between how things were and how Spotify wanted them to be. Kniberg also drew an aligned autonomy picture to explain Spotify's engineering culture: a two-dimensional matrix with autonomy on one axis and alignment on the other, which treats the two as separate dimensions that leaders can raise together ([Org Topologies](https://www.orgtopologies.com/post/aligned-autonomy-at-scale)).

The label "Spotify model" came from readers. In June 2015 [Kniberg wrote](https://blog.crisp.se/2015/06/07/henrikkniberg/no-i-didnt-invent-the-spotify-model) that his scaling article and culture video had come to be known as the Spotify Model in the agile world, although they were not intended as a generic framework, only an example of how one company works, and that he was "just the messenger" for ideas many colleagues had developed. Spotify people repeated the point. Marcin Floryan, a chapter lead, gave a 2016 talk called "There is no Spotify model", arguing that the model is a simplified description that changes all the time and should not be copied ([InfoQ](https://www.infoq.com/news/2016/10/no-spotify-model/)).

Later accounts went further. In an April 2020 essay, [Spotify's Failed #SquadGoals](https://www.jeremiahlee.com/posts/failed-squad-goals/), Jeremiah Lee, who joined Spotify after interviewing for a product role in 2017, wrote that the squad model was "only ever aspirational and never fully implemented". He quotes former agile coach Joakim Sundén: "Even at the time we wrote it, we weren't doing it." He also quotes co-author Anders Ivarsson worrying when people treat it as "a framework they can just copy and implement". Lee's main complaints are that chapter-based line management left no single engineering manager accountable for a squad's delivery, and that Spotify never defined a common way for squads to collaborate.

Other companies adopted the vocabulary anyway. ING Netherlands began its agile transformation in the summer of 2015 with a model inspired by Google, Netflix and Spotify, organized as about 350 nine-person squads in 13 tribes ([McKinsey Quarterly](https://www.mckinsey.com/industries/financial-services/our-insights/ings-agile-transformation)). The useful reading of the Spotify organizational model is as a set of named structures plus the tensions they try to balance: autonomy against alignment, craft depth against delivery speed, and team independence against company coherence. Those tensions exist in any growing product organization, whatever the boxes are called.

## Core Principles

### Squads as Long-Lived Mini-Startups

The squad is the basic unit of development. In the [2012 paper](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf) each squad has a long-term mission, such as the Android client or payment solutions, and stays with it long enough to become expert in that area. The product owner decides what the squad works on and stays out of how the squad does the work. Stable membership and a stable mission are what make the mini-startup framing credible, because a team reshuffled every quarter never builds that depth.

### Autonomy Needs Alignment

The paper's ideal is a squad that is fully autonomous, in direct contact with its stakeholders and free of blocking dependencies, while admitting Spotify had not got there. Floryan's later summary is blunter: "Autonomy is futile without alignment" ([InfoQ](https://www.infoq.com/news/2016/10/no-spotify-model/)). A 2023 study of Spotify found that scaled autonomy there "does not mean anarchy": squads are expected to coordinate and align with others and to comply with a few enabling constraints ([Smite et al.](https://www.sintef.no/en/publications/publication/2136903/)). Leaders set the direction and the constraints. Squads decide how to get there.

### A Matrix Weighted Towards Delivery

The paper admits the structure is a matrix, "Well, sort of". The vertical dimension, the squad, is primary: it is where people sit and spend most of their time, and it decides what to build. The horizontal dimension, the chapter, is for sharing knowledge, tools and code, and it covers how to build well ([Kniberg and Ivarsson](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)). The paper frames the product owner and the chapter lead as the "entrepreneur" and the "professor", and treats the tension between speed and quality as healthy. This is also the part of the model that drew the sharpest criticism later.

### Tribes Sized for Social Cohesion

Tribes exist so that squads in related areas stay aware of each other and share a habitat. The paper sizes them with the Dunbar number, keeping each tribe smaller than 100 people or so, because larger groups tend to produce rules, politics and extra management layers ([Kniberg and Ivarsson](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)). Tribe gatherings, where squads demo what they have built, give that shared context a regular rhythm. The size cap is a heuristic from one company, and it is the reason to split a tribe before it becomes a department.

### Guilds as Voluntary Communities of Interest

Guilds are the model's answer to the loss of economies of scale that full autonomy causes: the tester in one squad may be stuck on a problem another tester solved last week. Anyone can join any guild, and each has a coordinator rather than a manager. A study of Spotify guilds found that membership is open and voluntary, that only 20% of members regularly engage, and that low meeting attendance is not necessarily a sign of failure ([Communications of the ACM](https://cacm.acm.org/research/spotify-guilds/)). Guilds last when people get something from them.

### Architecture That Lets Squads Release Alone

Organizational autonomy only works if the system allows it. The [paper](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf) describes over 100 distinct systems that can each be maintained and deployed separately, system owners who look after each system's integrity, and an operations team whose job is to give squads the infrastructure to release code themselves. [Conway's law](https://www.melconway.com/Home/Conways_Law.html) explains why this matters: a system's structure tends to copy the communication structure of the organization that builds it. Squad boundaries and service boundaries have to match.

### A Snapshot That Keeps Changing

Everything Spotify published about the model was framed as a description of the moment. Kniberg later described the history as "a continuous stream of small iterative improvements to our organization and process" ([InfoQ](https://www.infoq.com/news/2016/10/no-spotify-model/)). Spotify built tools for that improvement loop, such as the [squad health check](https://engineering.atspotify.com/2014/09/squad-health-check-model), and replaced its alignment process more than once. A team adopting the model should expect to change its version too.

## Steps

1. **Decide Whether the Model Fits**
   Start with the problem. List what is actually slowing delivery: handoffs between functional teams, unclear ownership, duplicated work, or specialists who have lost touch with their discipline. Check each against what the model's structures address and against the [Spotify model failure modes](../../skills/evaluating-spotify-model-tradeoffs/SKILL.md) other companies ran into. Also check the preconditions: an architecture that lets teams release on their own and leaders who are prepared to delegate. If the main problem is somewhere else, adopt only the parts that help.

2. **Map the Product into Long-Term Missions**
   Break the product into areas a team could own for a long time: a user-facing capability, a platform concern, or a business domain. The [2012 paper](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf) gives missions such as the Android client, the radio experience, backend scaling and payments. Test each candidate mission by asking whether a squad could set goals and ship changes in it without another squad's permission. Where two missions share data models or release pipelines so tightly that neither can change alone, merge them or plan the technical decoupling first. Avoid missions drawn around technical layers, which recreate functional silos under new names.

3. **Form Cross-Functional Squads**
   Staff each squad with the skills its mission needs to go from idea to production, and give it a dedicated product owner. Let the squad choose its own way of working, as the paper describes squads choosing Scrum, Kanban or a mix. Keep squads small enough to self-organize; published descriptions vary, with Atlassian citing squads of typically 6-12 people ([Atlassian](https://www.atlassian.com/agile/agile-at-scale/spotify)) and ING using nine-person squads. Give each squad access to an agile coach or equivalent support for improving its process. A squad is formed well when it can take a user problem to a shipped change without filing work for other teams.

4. **Group Related Squads into Tribes**
   Cluster squads whose missions touch the same product area into a tribe, and appoint a tribe lead whose job is the squads' habitat and alignment; the tribe lead does not assign squads their work. Keep each tribe under the size where people can still know each other; the paper's guideline is smaller than 100 people or so ([Kniberg and Ivarsson](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)). Draw boundaries from real dependency patterns, so that squads which coordinate often share a tribe. Hold regular tribe gatherings where squads show what they shipped. If squads in different tribes block each other constantly, the boundaries are wrong.

5. **Add Chapters for Craft and Line Management**
   Inside each tribe, group people with the same skill into a chapter, such as backend, web or testing. Decide explicitly what the chapter lead owns. In the paper the chapter lead is the line manager, handling people development and salaries, and also works in a squad. Lee's critique is that this left no single engineering manager accountable for a squad's delivery, so write down who resolves a conflict between a squad's priorities and a person's growth before the first one happens. Atlassian's summary says the chapter lead may also be the manager ([Atlassian](https://www.atlassian.com/agile/agile-at-scale/spotify)), so keeping chapters for craft and leaving line management elsewhere is a legitimate variant.

6. **Let Guilds Form Around Shared Interests**
   Guilds are organization-wide and voluntary, so seed only a few where there is visible demand, such as web technology, testing or agile coaching. Give each a coordinator, a chat channel and a place to keep shared artifacts. Spotify's guilds use meetings, lunch-and-learn seminars, yearly unconferences, chat support channels and written requests for comments to make technical decisions asynchronously ([Communications of the ACM](https://cacm.acm.org/research/spotify-guilds/)). Recognize guild work as real work, because the same study found that lack of dedicated time and recognition were major barriers. Close guilds that no longer help anyone.

7. **Build Alignment Mechanisms**
   Decide how company direction reaches squads without turning into central control. Spotify tried OKRs and a model called Priorities & Achievements before settling, by 2016, on stack-ranked company bets shown on shared boards ([Kniberg, Spotify Rhythm](https://blog.crisp.se/2016/06/08/henrikkniberg/spotify-rhythm)). ING asks every squad to write down its purpose and how it measures client impact, and runs a quarterly business review per tribe. Whatever mechanism you choose, each squad should be able to explain how its current work connects to a company goal. If alignment needs many standing meetings a week, it has become heavier than the problem it solves.

8. **Inspect and Adapt the Structure**
   Treat the organization design as something you improve, as Spotify did. Run regular health checks where squads rate areas such as ease of releasing, mission clarity and support; Spotify's guidance suggests quarterly as a starting point and warns against using the results to judge teams ([Spotify Engineering](https://engineering.atspotify.com/2014/09/squad-health-check-model)). Survey squads about which other squads block them, as the 2012 paper describes. Merge squads, redraw tribes and retire guilds when the evidence says so. The structure you launch is a first version.

## When to Use

- When a product organization has grown to several teams and delivery is slowed by handoffs between functional groups, because cross-functional squads with their own missions remove most of those handoffs.
- When one product, or a closely related product suite, can be divided into areas a team can own for years, since the model depends on stable, long-term squad missions.
- When the architecture already lets teams build, test and release their part independently, or the company is willing to invest in getting there, because squad autonomy without deployment autonomy is only a label.
- When leadership is willing to set direction and constraints and then delegate the how, since every Spotify account ties the model to a culture of trust.
- When specialists spread across cross-functional teams have stopped learning from each other, and chapters or guilds would reconnect them without breaking up the delivery teams.

## When Not to Use

- When there are only a few teams that can coordinate by talking to each other, because tribes, chapters and guilds add structure without solving a problem you have yet.
- When the codebase is tightly coupled and every change needs several teams, since squads will be autonomous on paper and blocked in practice until the architecture changes.
- When managers expect to approve decisions squads are supposed to own, because renaming teams without changing behavior gives you the vocabulary and none of the benefit.
- When regulation or safety requires identical, auditable processes in every team, since the model's default of letting squads choose their own way of working conflicts with that. A more prescriptive framework, or explicit non-negotiable guardrails, fits better.
- When the teams build unrelated products with little shared technology or customers, because tribes assume squads in related areas; plain business units are simpler and more honest.

## Spotify Model Pros and Cons

The pros and cons below come from the original paper, from people who worked at Spotify, and from independent research. Each row pairs a benefit with the cost that comes with it.

| Element | Pro | Con |
|-------|-------|-------|
| Squads | Long-lived missions build deep expertise, and squads choose their own process ([paper](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)) | Every team working differently makes cross-team collaboration harder ([Lee](https://www.jeremiahlee.com/posts/failed-squad-goals/)) |
| Autonomy | Squads decide how to work within a few enabling constraints ([Smite et al.](https://www.sintef.no/en/publications/publication/2136903/)) | Without regular alignment, squads drift apart ([McKinsey on ING](https://www.mckinsey.com/industries/financial-services/our-insights/ings-agile-transformation)) |
| Chapters | Engineers get a manager who knows their craft ([paper](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)) | No single engineering manager is accountable for a squad's delivery ([Lee](https://www.jeremiahlee.com/posts/failed-squad-goals/)) |
| Guilds | Faster onboarding and peers for isolated specialists ([CACM](https://cacm.acm.org/research/spotify-guilds/)) | Engagement is hard to sustain as the company grows ([CACM](https://cacm.acm.org/research/spotify-guilds/)) |
| The whole model | Light on mandated process and ceremonies ([Atlassian](https://www.atlassian.com/agile/agile-at-scale/spotify)) | People who worked at Spotify say it was never fully implemented ([Lee](https://www.jeremiahlee.com/posts/failed-squad-goals/)) |

## Skills

This method includes the following skills:

- [Forming Autonomous Squads with Clear Missions](../../skills/forming-autonomous-squads/SKILL.md): Define, staff and launch cross-functional squads that own a long-term mission end to end.
- [Organizing Squads into Tribes for Alignment](../../skills/organizing-tribes-for-alignment/SKILL.md): Group related squads into tribes with sensible boundaries, size limits and tribe leadership.
- [Running Chapters for Craft Excellence](../../skills/running-chapters-for-craft-excellence/SKILL.md): Set up chapters that keep specialists in different squads learning from each other and growing.
- [Building Guilds for Cross-Tribe Knowledge Sharing](../../skills/building-cross-cutting-guilds/SKILL.md): Start and sustain voluntary, company-wide guilds that share knowledge and tools.
- [Balancing Squad Autonomy with Organizational Alignment](../../skills/balancing-autonomy-and-alignment/SKILL.md): Set direction, constraints and review loops so autonomous squads stay pointed the same way.
- [Evaluating Spotify Model Tradeoffs and Failure Modes](../../skills/evaluating-spotify-model-tradeoffs/SKILL.md): Weigh each element against your context before adopting it, and avoid known pitfalls.
- [Adapting the Spotify Model to Your Organization](../../skills/adapting-spotify-model-to-your-organization/SKILL.md): Pilot and customize the structure for your size, culture and architecture.
- [Scaling Agile with Spotify Squads and Tribes](../../skills/scaling-agile-with-spotify-structures/SKILL.md): Decide when to add squads, split tribes and change governance as the organization grows.

## FAQ

**What is the Spotify model in simple terms?**

It is a way to organize product teams so a growing company keeps the speed of a small one. Small cross-functional squads each own a long-term part of the product. Related squads form a tribe, people with the same skill in a tribe form a chapter, and anyone can join a company-wide guild on a topic they care about. It describes structure and culture rather than prescribing meetings or a process.

**Did Spotify actually use the Spotify model?**

Partly, and only for a while. The 2012 paper already called itself a snapshot of a journey in progress ([Kniberg and Ivarsson](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)). Spotify's own Marcin Floryan said in 2016 that there is no Spotify model and that the way of working changes all the time ([InfoQ](https://www.infoq.com/news/2016/10/no-spotify-model/)). Jeremiah Lee reported in 2020 that it was never fully implemented and quoted a former coach saying "we weren't doing it" even when the paper was written ([Lee](https://www.jeremiahlee.com/posts/failed-squad-goals/)).

**How does the Spotify model compare with SAFe and LeSS?**

The Spotify model names structures and leaves process to each squad. SAFe prescribes roles and cadence: an Agile Release Train is a long-lived team of agile teams of generally 50-125 people, synchronized through Planning Intervals ([SAFe](https://framework.scaledagile.com/agile-release-train)). LeSS scales single-team Scrum onto one product, with up to eight teams of eight people in basic LeSS ([LeSS](https://less.works/less/framework/index)). Choose SAFe or LeSS when you need a shared cadence and explicit coordination rules; the Spotify vocabulary fits organizations that already coordinate well without them.

**How big should squads and tribes be?**

The 2012 paper gives no squad size and says tribes were designed to be smaller than 100 people or so, based on the Dunbar number ([Kniberg and Ivarsson](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)). Later summaries give ranges, such as squads of typically 6-12 people and tribes of typically 40-150 people ([Atlassian](https://www.atlassian.com/agile/agile-at-scale/spotify)). Treat these as guidelines. A squad needs every skill its mission requires and should still be small enough to self-organize.

**What is the difference between a chapter and a guild?**

A chapter is local to one tribe and groups people with the same skill, and in the original paper its lead is their line manager. A guild spans the whole organization, is open to anyone interested, and has a coordinator instead of a manager ([Kniberg and Ivarsson](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)). Chapters carry formal responsibilities such as people development. Guilds exist for sharing knowledge, tools and practices.

**Why do Spotify model adoptions go wrong?**

The pattern most often described is renaming teams without changing how decisions are made; Atlassian calls renaming teams to squads without cultural change "lipstick on a pig" ([Atlassian](https://www.atlassian.com/agile/agile-at-scale/spotify)). Others include chapter lines of management that nobody is accountable through, and autonomy with no shared way to collaborate. ING's executives warn that keeping the old structure and governance while adopting the new way of working "defeats the whole purpose" ([McKinsey](https://www.mckinsey.com/industries/financial-services/our-insights/ings-agile-transformation)). The [evaluation skill](../../skills/evaluating-spotify-model-tradeoffs/SKILL.md) covers these risks element by element.

**How did Spotify keep autonomous squads aligned?**

It changed its approach several times. [Kniberg's 2016 talk on Spotify Rhythm](https://blog.crisp.se/2016/06/08/henrikkniberg/spotify-rhythm) describes trying OKRs and Priorities & Achievements before moving to company bets defined with the Data-Insight-Belief-Bet framework, stack-ranked and shown on linked boards at each level. The principle stayed the same: leaders make priorities visible and squads decide how to contribute. Any adopter will need to design its own version.

## Sources

- [Henrik Kniberg and Anders Ivarsson: Scaling Agile @ Spotify (2012)](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)
- [Spotify Engineering: Spotify engineering culture, part 1](https://engineering.atspotify.com/2014/03/spotify-engineering-culture-part-1)
- [Spotify Engineering: Spotify engineering culture, part 2](https://engineering.atspotify.com/2014/09/spotify-engineering-culture-part-2)
- [Henrik Kniberg: No, I didn't invent the Spotify model](https://blog.crisp.se/2015/06/07/henrikkniberg/no-i-didnt-invent-the-spotify-model)
- [InfoQ: Don't Copy the Spotify Model](https://www.infoq.com/news/2016/10/no-spotify-model/)
- [Jeremiah Lee: Spotify's Failed #SquadGoals](https://www.jeremiahlee.com/posts/failed-squad-goals/)
- [Henrik Kniberg: Spotify Rhythm](https://blog.crisp.se/2016/06/08/henrikkniberg/spotify-rhythm)
- [Spotify Engineering: Squad Health Check model](https://engineering.atspotify.com/2014/09/squad-health-check-model)
- [Smite et al.: Spotify Guilds, Communications of the ACM](https://cacm.acm.org/research/spotify-guilds/)
- [Smite et al.: Decentralized decision-making and scaled autonomy at Spotify](https://www.sintef.no/en/publications/publication/2136903/)
- [McKinsey Quarterly: ING's agile transformation](https://www.mckinsey.com/industries/financial-services/our-insights/ings-agile-transformation)
- [Atlassian: Discover the Spotify model](https://www.atlassian.com/agile/agile-at-scale/spotify)
- [Org Topologies: Aligned Autonomy at Scale](https://www.orgtopologies.com/post/aligned-autonomy-at-scale)
- [Scaled Agile Framework: Agile Release Train](https://framework.scaledagile.com/agile-release-train)
- [LeSS Framework](https://less.works/less/framework/index)
- [Mel Conway: Conway's Law](https://www.melconway.com/Home/Conways_Law.html)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
