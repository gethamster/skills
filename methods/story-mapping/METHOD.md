---
name: "story-mapping"
category: "Experience"
description: "User story mapping, from Jeff Patton, lays stories out along the user's journey so a team can see the whole product and slice releases that work."
metadata:
  datePublished: "2026-07-02"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# User Story Mapping: See the Whole Product Story

> Created by **Jeff Patton** - [https://jpattonassociates.com/jeff-pattons-book-released-user-story-mapping/](https://jpattonassociates.com/jeff-pattons-book-released-user-story-mapping/)

## Overview

User story mapping is a way to arrange user stories into a two-dimensional map that tells the story of someone using your product. Jeff Patton, who describes himself as "known for coining the term" in [the post announcing his book](https://jpattonassociates.com/jeff-pattons-book-released-user-story-mapping/), puts the idea plainly on his [story mapping page](https://jpattonassociates.com/story-mapping/): "User Story Mapping is a dead simple idea." You talk through the user's journey and build a simple model of it as you go. Across the top, from left to right, sit the big things people do with the product, in the order you would tell the story. Below each of them hang the smaller tasks, details and variations, with the most necessary ones placed highest.

Patton built the practice to fix a problem with flat backlogs. In [The New User Story Backlog is a Map](https://jpattonassociates.com/the-new-backlog/) he names three: a prioritized list does not explain what the system does, it gives no confidence that nothing is missing, and making an in-or-out call on each story, when there are often over a hundred, is tedious. He compares the flat backlog to pulling every leaf off a tree, bagging them and cutting the tree down, which leaves "a bag of context-free mulch." A story map keeps the tree. The same stories stay in place under the activity they belong to, so anyone can walk the map and see how a piece of work fits the whole.

The map has a small vocabulary. Patton calls the big things at the top user activities and the smaller things under them user tasks, and says in the same article that he borrowed both terms from UX practitioners such as Larry Constantine and Don Norman. The top row is the backbone, a term he took from Dan Rawsthorne. His [Story Mapping Quick Reference](https://jpattonassociates.com/wp-content/uploads/2015/03/story_mapping.pdf) adds users, described with lightweight persona sketches, a narrative flow that orders the map the way you would tell the story to someone else, and release slices drawn with tape across the map.

The release slice is where story mapping changes planning. Patton writes that he does not prioritize the backbone at all. He prioritizes the cards hanging below it, and the cards placed highest across every column describe the smallest system that works end to end, which he identifies with Alistair Cockburn's "walking skeleton" ([Patton, 2008](https://jpattonassociates.com/the-new-backlog/)). Building across the backbone a little at a time, in his words, means "we never release a car without brakes." A team that picks the highest-value features from a flat list can ship impressive parts that do not add up to a usable product, which is the failure his first article on the idea opens with.

Story mapping is a conversation tool first. The quick reference warns that "A story map will take lots of conversation to use effectively," and that a team needing the exactness of a flow chart, workflow model or UML diagram is better served by one of those. The Nielsen Norman Group, which credits Patton with popularizing the method, describes story maps in [Mapping User Stories in Agile](https://www.nngroup.com/articles/user-story-mapping/) as lightweight representations that replace lengthy requirements documents and keep an Agile team from losing sight of the product as a whole.

The map is also meant to last. Patton hangs it as an information radiator and uses it as the iteration planning board once the project is running, marking the stories for the next iteration directly on it ([The New User Story Backlog is a Map](https://jpattonassociates.com/the-new-backlog/)). NN/g likewise notes that teams maintain their map over time, adding to it and changing it to reflect the actual state of the product. A map that is built in a workshop and then abandoned for a flat list loses most of its value.

The method has spread well beyond Patton's own teams. Whiteboard vendors such as [Miro](https://help.miro.com/hc/en-us/articles/360020712554-User-story-mapping) and [Mural](https://www.mural.co/templates/user-story-map) ship story map templates that credit him, and [Atlassian's guide](https://www.atlassian.com/agile/product-management/story-mapping) notes that the technique also applies to service design, process improvement and physical products. Patton himself calls it a pattern he has seen many people arrive at independently, which is a good reason to adapt the details to your team.

## Where Story Mapping Came From

Story mapping grew over about a decade of Patton's writing and teaching. Each step below is documented in his own material.

| Milestone | What it added |
|-----------|---------------|
| [It's All in How You Slice It](https://www.jpattonassociates.com/wp-content/uploads/2015/01/how_you_slice_it.pdf), Better Software, January 2005 | Feature cards laid out by usage sequence and criticality, sliced into "system spans" |
| [The New User Story Backlog is a Map](https://jpattonassociates.com/the-new-backlog/), October 2008 | Activities, user tasks, the backbone, and the walking skeleton as the first release |
| [Story Mapping Quick Reference](https://jpattonassociates.com/wp-content/uploads/2015/03/story_mapping.pdf), copyright 2013 | A five-part process from framing to slicing out a development strategy |
| [User Story Mapping](https://books.google.com/books/about/User_Story_Mapping.html?id=4YZyBAAAQBAJ), O'Reilly, 2014 | The book, written with Peter Economy, covering mapping and how stories should work |

Patton's own [story mapping page](https://jpattonassociates.com/story-mapping/) calls How You Slice It "my very first article on the idea," written "even before it was called Story Mapping." That article did not yet use the word backbone. It asked a group to lay feature cards on a poster with a horizontal axis labelled usage sequence and a vertical axis labelled criticality, then draw a line under the top row to mark the first span. In his [2008 article](https://jpattonassociates.com/the-new-backlog/) Patton also says he had been using the practice for a couple of years before the 2005 piece, and that at ThoughtWorks he met Luke Barrett, who had been building almost the same model with users. He points to Indi Young's mental models and Todd Warfel's task analysis grid as related layouts.

## Core Principles

### Tell the Story Left to Right

The horizontal axis is a narrative. Patton's advice when people say users can do things in any order is to ask them to list the activities out loud, because "the order you'd explain the behavior of the system in is the correct order" ([The New User Story Backlog is a Map](https://jpattonassociates.com/the-new-backlog/)). The map exists to help you tell the story, so arrange it the way the story is easiest to tell. Variations in order are handled in conversation.

### The Backbone Is Not Prioritized

Activities on the backbone are capabilities the product must have, and Patton does not rank them against each other. His car example makes the point: asking whether the engine or the brakes matter more is a pointless question, because a car needs both. Prioritization happens below the backbone, in the choice between a basic and a richer version of each task.

### Height Means Necessity

Within each column, cards placed higher are more necessary and cards placed lower are less necessary. In the [2005 article](https://www.jpattonassociates.com/wp-content/uploads/2015/01/how_you_slice_it.pdf) the vertical axis ran from "always used" to "seldom used." A low card is often a richer version of something that already exists above it, so moving it down defers polish without removing the capability.

### Slice Across the Whole Journey

A release is a horizontal slice that touches every activity. Patton's 2005 article defines the first slice as "the smallest set of features necessary to be minimally useful in a business context" and notes that slicing from the top down rarely runs into unresolved dependencies ([How You Slice It](https://www.jpattonassociates.com/wp-content/uploads/2015/01/how_you_slice_it.pdf)). When an important task cannot fit, he asks whether a paper process or software workaround exists or whether the feature can be split into a crude first version and a more elaborate later one.

### Build the Map Together

The value comes from the conversation around the cards. Patton recommends a mix of people who know the users, people who know how the product will earn money, and a developer or two, and says "Four to eight people total is a good number" ([How You Slice It](https://www.jpattonassociates.com/wp-content/uploads/2015/01/how_you_slice_it.pdf)). NN/g adds that no single person or role should dominate the map ([NN/g](https://www.nngroup.com/articles/user-story-mapping/)).

### Frame With Users and Outcomes

A map tells the story of a type of person doing something to reach a goal, so the users belong on the map. The [quick reference](https://jpattonassociates.com/wp-content/uploads/2015/03/story_mapping.pdf) starts every map with a short brief naming what is being built, who it is for and why, and asks you to state target outcomes for each release slice. That keeps release debates about what users will be able to do.

### Keep the Map Alive

A map built once and then replaced by a flat list loses its context. Patton keeps the map on the wall as an information radiator and plans iterations on it, choosing stories left to right and top to bottom ([The New User Story Backlog is a Map](https://jpattonassociates.com/the-new-backlog/)). As the team learns, cards are added, split and moved, and the release lines shift.

## Steps

1. **Frame the problem**
   Write a short brief before mapping anything. Patton's [quick reference](https://jpattonassociates.com/wp-content/uploads/2015/03/story_mapping.pdf) splits it into what you are building, who will use it and who will choose to buy it, and why the organization benefits. Keep it to a page so everyone can read it at the start of a session. The brief also constrains the map, so name what is out of scope. A group that cannot agree on the brief is not ready to map.

2. **Map the big picture**
   Start with the user type most critical to the product's success and walk through a typical use of the product, writing each step as a short verb phrase on a card. The quick reference calls this thinking "mile-wide, inch deep": get the whole story before any detail. Place the cards left to right in the order you would tell the story. Group related tasks under user activities, which often become clear only after you see more of the story. The top row that results is the backbone.

3. **Explore the details**
   Under each high-level task, add sub-tasks, alternatives, exceptions and details. The quick reference suggests playing "wouldn't it be cool if..." for ideas, asking what could go wrong and how the user would recover, and adding other types of users when they enter the story. Do not argue about scope yet, because scope comes later. Tell the story to developers, who will point out risky or expensive areas.

4. **Arrange by necessity**
   Move cards up and down within each column so the most necessary version of each task sits highest. Patton's [2005 article](https://www.jpattonassociates.com/wp-content/uploads/2015/01/how_you_slice_it.pdf) suggests using conflicting card moves as prompts: when one person moves a card down and another moves it back up, ask each why. Leave the backbone itself unranked. When you finish, the top row across all columns should read as the thinnest possible version of the whole journey.

5. **Slice out viable releases**
   Run tape or a line across the map to mark the first release, then later ones. The smallest set of tasks that lets a target user reach their goal makes a viable release, according to the [quick reference](https://jpattonassociates.com/wp-content/uploads/2015/03/story_mapping.pdf). Write the target outcomes for each slice on a card to its left, along with the metric that would show the release worked. Check that every activity has something above the first line, or agree why the user can do without it.

6. **Slice a development strategy**
   Split the first release into delivery phases so the team learns early. Patton's quick reference borrows chess terms: the opening game builds a functional walking skeleton, the mid game completes and enriches the major functionality, and the end game refines the product for release. Vet the skeleton with users and stakeholders and start validating performance as soon as it works end to end.

7. **Plan and keep the map current**
   Pull stories from the current slice into your backlog, and workshop them with developers and testers to agree acceptance criteria before building. Keep the map where the team can see it and mark progress on it. Revisit it when you learn something from users or from a sprint review, and move the release lines when the evidence says so. Patton's [2008 article](https://jpattonassociates.com/the-new-backlog/) describes the map becoming the iteration planning board while a separate task wall tracks the work in progress.

## When to Use

- A new product or a large new feature area, where the team has ideas but no shared picture of the user's workflow or of what a minimal release would contain. Mapping the journey first makes the scope debate concrete.
- A backlog that has grown into a long flat list, and stakeholders keep asking what a release will let a user do. Rearranging the same stories under activities restores the context that Patton's [New Backlog article](https://jpattonassociates.com/the-new-backlog/) says flat lists lose.
- Releases that ship features users praise but cannot use end to end. Slicing across the backbone forces each release to cover the whole journey at a basic level.
- A cross-functional group that needs to agree quickly on what to build, including people new to the domain. Walking the map left to right is a fast way to share the big picture.
- Explaining the product or a release plan to someone who was not in the room. A walk along the top of the map covers the high points, and digging into a column covers the detail.

## When Not to Use

- Work with no user journey to tell, such as a database migration or an infrastructure change. Patton's 2005 article notes that features like "migrate to an Oracle database" do not work well in the model.
- Problems that need precise process logic. The quick reference says a story map is not your best choice if you need the precision of a workflow model, flow chart or UML model.
- A small, well-understood change to an existing product. Patton's workaround for adding a few features is to prioritize the features and then build a small map for each one, rather than mapping the whole product.
- A request for a dated project schedule with resourcing. A story map shows scope and sequence by user value, and it has to be turned into a roadmap or plan for that audience.

## Skills

This method includes the following skills:

- [Story Map Backbone: Identifying User Activities](../../skills/identifying-user-activities-and-backbone/SKILL.md): Find the user activities and arrange them into the backbone that structures the rest of the map.
- [Story Map Personas: Mapping Personas to User Journeys](../../skills/mapping-user-personas-to-journeys/SKILL.md): Anchor the map in specific users and their journeys so it reflects real goals.
- [Story Map Decomposition: Activities to User Tasks](../../skills/decomposing-activities-into-user-tasks/SKILL.md): Break activities into user tasks, details and stories that fill the body of the map.
- [Story Mapping Facilitation: How to Run a Workshop](../../skills/facilitating-story-mapping-workshops/SKILL.md): Plan and run a story mapping session with a cross-functional group.
- [Prioritizing and Slicing Releases on a Story Map](../../skills/prioritizing-and-slicing-releases/SKILL.md): Arrange by necessity and draw release slices that each work end to end.
- [User Story Mapping Template: Build One Your Team Reuses](../../skills/creating-story-mapping-templates/SKILL.md): Set up a reusable story map template on a wall, a whiteboard tool or a spreadsheet.
- [Refining a Story Map Across Sprints](../../skills/refining-story-maps-across-sprints/SKILL.md): Keep the map current as sprints finish and the team learns.

## FAQ

**What is user story mapping in simple terms?**

It is a way of laying out a product's user stories as a map of the user's journey. The big activities run left to right across the top in the order you would tell the story, and the tasks and details for each hang below, with the most necessary highest. A line across the map marks what goes in a release. Jeff Patton, who is known for coining the term, describes it on [his story mapping page](https://jpattonassociates.com/story-mapping/) as a way to keep users and what they are doing at the center of product decisions.

**How is a story map different from a product backlog?**

A backlog is a single ordered list, which tells you what comes next but hides how stories relate to each other. A story map keeps each story under the activity it supports, so you can see gaps and check whether a release covers the whole journey. Patton argues in [The New User Story Backlog is a Map](https://jpattonassociates.com/the-new-backlog/) that a flat backlog is a poor explanation of what a system does. The backlog does not go away: the map feeds it, and stories for the current slice move into it.

**How is user story mapping different from customer journey mapping?**

NN/g explains in [Mapping User Stories in Agile](https://www.nngroup.com/articles/user-story-mapping/) that a customer journey map takes the person's perspective, including thoughts, emotions and channels, while a story map takes the product's perspective and guides what to build. A journey map can grow into a story map when you add activities, steps and details. Atlassian's [comparison table](https://www.atlassian.com/agile/product-management/story-mapping) puts it the same way: journey maps find pain points, story maps turn them into product work, and roadmaps show what the team will pursue.

**Who should take part in a story mapping workshop?**

Patton's 2005 article recommends people who know the users and the functionality, stakeholders who understand how the product earns money, and one or two developers, with "Four to eight people total" as a good number ([How You Slice It](https://www.jpattonassociates.com/wp-content/uploads/2015/01/how_you_slice_it.pdf)). NN/g suggests representatives from product, UX, development and QA. Keep the group small enough that everyone moves cards. A map written by one person alone skips the conversations that make the method work.

**Can story mapping be done remotely?**

Yes. NN/g notes that remote teams can use video conferencing along with collaborative spreadsheets, slides or web-based whiteboard tools ([NN/g](https://www.nngroup.com/articles/user-story-mapping/)). Tools such as [Miro](https://miro.com/templates/user-story-map/) provide ready-made maps with rows for activities, tasks and stories and sections for releases. The facilitation matters more online, because people cannot see who is about to move a card, so name who is working on which column and walk the map aloud often.

**What is the walking skeleton on a story map?**

It is the thinnest version of the product that still works from start to finish. Patton explains that when every column is prioritized, the cards placed highest across the map describe the smallest system with end-to-end functionality, which is what Alistair Cockburn calls the walking skeleton ([Patton, 2008](https://jpattonassociates.com/the-new-backlog/)). In his quick reference, the opening game of development builds this skeleton so it can be vetted with users and tested for performance early.

**Is there one correct story mapping template?**

No single template is official. Patton's material uses sticky notes or cards on a wall, with a backbone row, columns of tasks, tape lines for releases, and outcome cards to the left of each slice ([Quick Reference](https://jpattonassociates.com/wp-content/uploads/2015/03/story_mapping.pdf)). Whiteboard templates from Miro and Mural reproduce that layout. A useful template keeps the narrative order, lets cards move freely, and has a place for users and release outcomes.

## Sources

- [Jeff Patton: Story Mapping](https://jpattonassociates.com/story-mapping/)
- [Jeff Patton: The New User Story Backlog is a Map](https://jpattonassociates.com/the-new-backlog/)
- [Jeff Patton: It's All in How You Slice It, Better Software, January 2005](https://www.jpattonassociates.com/wp-content/uploads/2015/01/how_you_slice_it.pdf)
- [Jeff Patton: Story Mapping Quick Reference](https://jpattonassociates.com/wp-content/uploads/2015/03/story_mapping.pdf)
- [Jeff Patton: User Story Mapping book announcement](https://jpattonassociates.com/jeff-pattons-book-released-user-story-mapping/)
- [Google Books: User Story Mapping, Jeff Patton with Peter Economy](https://books.google.com/books/about/User_Story_Mapping.html?id=4YZyBAAAQBAJ)
- [Nielsen Norman Group: Mapping User Stories in Agile](https://www.nngroup.com/articles/user-story-mapping/)
- [Atlassian: User story mapping](https://www.atlassian.com/agile/product-management/story-mapping)
- [Miro Help Center: User story mapping](https://help.miro.com/hc/en-us/articles/360020712554-User-story-mapping)
- [Miro: User story map template](https://miro.com/templates/user-story-map/)
- [Mural: User story map template](https://www.mural.co/templates/user-story-map)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
