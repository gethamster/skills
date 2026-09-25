# Examples: Forward Deployed Engineer Interview Prep

## Practicing a decomposition prompt

**Scenario:**

Illustrative scenario: a candidate practices with the prompt "A regional hospital wants to reduce missed appointments. You have a few weeks. Where do you start?" This is a practice prompt and is not taken from any company's interview.

**Walkthrough:**

The candidate resists proposing a model straight away. They ask who owns scheduling, what data exists on past appointments and reminders, how patients are contacted today, and what counts as success for the hospital. They sketch the workflow from booking to visit, identify two points where a no-show could be predicted or prevented, and propose a small first deliverable: a daily list of high-risk appointments for the scheduling team, built from existing data. Their partner then says reminder data is unavailable, and the candidate adjusts the plan out loud.

## Customer-context system design with a changing constraint

**Scenario:**

Illustrative scenario: a candidate and a partner practice designing a system that ingests sensor data from a manufacturer's plants and flags likely equipment failures.

**Walkthrough:**

The candidate starts with questions: where the data lives, how often it arrives, what network rules apply, which tools the plant's IT team already runs, and who maintains the system afterward. They propose an architecture that runs inside the customer's environment using their existing scheduler. Midway, the partner announces that data may not leave each plant. The candidate reworks the design to process data locally at each plant and send only alerts centrally, and explains the tradeoffs this creates for model updates.

## Turning past work into evidence stories

**Scenario:**

Illustrative scenario: a backend engineer applying for a forward deployed software engineer role has never had "FDE" in a title and worries they lack relevant experience.

**Walkthrough:**

Mapping the posting against their history, they find three stories: sitting with the support team to understand why a feature was unused and then fixing it, learning an unfamiliar legacy billing system in their first weeks on a project, and explaining a delayed release to a sales director. They write each as situation, action, result and lesson, keeping their own decisions at the center. In practice runs they cut each to a couple of minutes and prepare a follow-up detail for each in case the interviewer probes.
