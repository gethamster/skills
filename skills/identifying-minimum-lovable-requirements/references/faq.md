# FAQ: Identifying Minimum Lovable Requirements from a PR/FAQ

## What does minimum lovable mean here?

It means the smallest launch that still delivers the press release's headline benefit well enough that the target customer would care. The phrase is not an Amazon term. Amazon CTO Werner Vogels described working backwards to the minimum set of technology requirements, and lovable adds the reminder that the customer benefit sets a floor on how far the scope can shrink.

## Should I do this before or after the PR/FAQ is approved?

Mostly after, because the promises need to be stable before requirements can be traced to them. A rough pass during review can help answer internal FAQ questions about cost and timeline. If the rough pass shows the minimum is still too expensive, that is useful input for the go or no-go decision.

## What do I do when a stakeholder insists on a feature that traces to no promise?

Ask which customer outcome the feature serves. If there is one, add it to the PR/FAQ openly and get it reviewed like any other promise. If there is not, put it on the cut list with the reason and what evidence would bring it back.

## How do I handle products with several kinds of user?

List promises separately for each kind of user, since the press release or FAQ may promise different things to each. Some capabilities will serve several users and belong on the list once. Check that the cuts do not leave one kind of user with a broken experience.

## Does this apply to small feature releases?

Yes, in a lighter form. Even a small feature has a promise, and listing the capabilities it needs often reveals a hidden dependency or an item nobody needs. For very small changes, the trace can be a single line per requirement.
