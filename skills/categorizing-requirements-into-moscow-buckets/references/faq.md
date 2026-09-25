# FAQ: Categorizing Requirements into MoSCoW Categories

## What is the difference between a Must have and a Should have?

A Must have belongs to the Minimum Usable SubseT: without it there is no point delivering on the target date, or the result would be illegal, unsafe or not viable. A Should have is important but not vital, and the solution still works without it, perhaps with a workaround. If any workaround exists, even a manual one, DSDM says the requirement is not a Must. Ask what happens if the item is missing and let the answer decide.

## How do I decide between Should have and Could have?

DSDM separates them by how much pain the missing requirement causes, measured in business value or the number of people affected. Because that line is subjective, agree a concrete rule before categorizing, such as "affects every user weekly" for a Should. Comparing the cost of the workaround with the cost of building the item now also helps. Record the rule so later disputes refer to it.

## Does Won't have mean the requirement is rejected?

No. In DSDM it means "Won't have this time": the team has agreed not to deliver it in this timeframe. The item stays on the list to make the scope clear and to stop it being reintroduced informally. It becomes a candidate again when the next increment is planned.

## Can one requirement have different categories?

Yes. DSDM gives requirements priorities at three levels: the project, the Project Increment and the Timebox. An archive feature can be a Must before the project ends and a Could for the first increment. Record the level each category applies to so nobody reads a timebox priority as a project priority.

## What if almost everything ends up as a Must?

The DSDM handbook reads this as a sign that the requirements have not been broken down enough. Split the largest Musts into parts and run the consequence test on each part. Check each Must's dependencies too, since a Must cannot rely on a lower-priority item. If the Must effort is still above the level the team can guarantee, the timeframe or the objective needs to change.
