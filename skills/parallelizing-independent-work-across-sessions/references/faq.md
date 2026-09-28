# FAQ: Parallelizing Independent Work Across Sessions

## Which tasks are safest to run in parallel in an Agent Team?

Read-heavy tasks with distinct scopes are the safest, such as reviewing separate modules or auditing tests. Anthropic describes agent teams as best for independent, read-heavy work, including codebase reviews. Writing tasks are also safe when each one owns a separate directory or module and none waits on an undecided shared choice.

## Can two teammates edit the same file at once?

They can, but you should avoid it. Teammates share a working tree rather than isolated copies, so concurrent edits to one file can conflict and overwrite each other. Either give that file to a single owner or sequence the tasks that touch it.

## How do interface stubs make dependent tasks parallel?

A dependent task waits on a decision, such as a function signature or response schema. If you make that decision up front and commit it as a stub, both sides can build against it, with the consumer using a mock until the real implementation exists. The dependency becomes a fixed contract, and integration happens in a later phase.

## Do Agent Teams cost more than a single session?

Yes, generally. Each teammate has its own context window and consumes tokens independently, and Anthropic says costs scale linearly with team size. One community benchmark report found teams considerably more expensive than sequential runs with no quality gain, although that is practitioner evidence rather than an official evaluation.

## When should I skip parallelizing entirely?

Skip it when most tasks overlap on the same files, when a shared decision is still open and cannot be stubbed, or when only one or two small independent streams exist. In those cases, coordination overhead and extra token cost outweigh the time saved. A single session or a sequential plan is usually the better choice.
