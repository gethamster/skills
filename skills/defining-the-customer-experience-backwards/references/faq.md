# FAQ: Defining the Customer Experience Before Building

## Where does this step come from?

Amazon CTO Werner Vogels described it in a 2006 post as the third of four documents in the Working Backwards product definition process, after the press release and the FAQ and before the user manual. He described writing the customer experience in precise detail, with mock-ups for products with a user interface and use cases with code snippets for web services.

## Should I do this before or after the PR/FAQ is approved?

Usually after the press release is stable, since the experience depends on the customer and promise it names. For a large or uncertain product, a rough version of the first-use story can help while the PR/FAQ is still in review, because it shows whether the promise is plausible. Keep it rough until the PR/FAQ settles.

## How detailed should the stories be?

Detailed enough that someone outside the team can follow each step and that each step implies clear capabilities. That usually means naming what the customer sees and does at every step, including errors. Visual polish is not needed.

## What if stakeholders want a feature list instead?

Give them the capability list derived from the stories, since it is a feature list with a reason attached to every item. Showing which step of which story needs each capability often settles arguments about scope faster than debating the features directly.

## Do internal tools need this step?

Yes, if the tool has real users with real tasks. Internal customers get stuck, wait and make mistakes like anyone else, and writing their stories shows where. Keep the documents short for small tools.
