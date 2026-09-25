# Examples: Define MVP Scope with MoSCoW

## A marketplace testing whether sellers will list

**Scenario:**

Illustrative scenario: a two-person founding team is building a marketplace for secondhand camera gear. Their riskiest assumption is that sellers will list items if listing takes very little effort. They have a fixed date for a first release to a small group of invited sellers.

**Walkthrough:**

The learning filter picks out "create a listing from a phone photo" and "see how many buyers viewed your listing". The DSDM Must filter adds "sellers accept the terms of use" (not legal without it) and "sign in securely" (unsafe without it). Those four are the Musts.

Payments are the hard call. Buyers need to pay, but the team can arrange payment by bank transfer by hand for the invited group. Because a workaround exists, payments become a Should, and the team writes the manual process into the scope document. Search, reviews and saved searches are Coulds. A mobile app is Won't have this time.

## A B2B pilot with a contractual requirement

**Scenario:**

Illustrative scenario: a startup is preparing a pilot of its scheduling software for one hospital. The contract requires single sign-on with the hospital's identity provider from the first day.

**Walkthrough:**

Single sign-on teaches the team nothing about the product, but it passes the Must test because the pilot cannot start without it. The learning Musts are "nurses can swap shifts" and "managers can approve swaps", since the hypothesis is that swapping is the pain point.

The capacity check shows the Must effort is too high. The team splits "managers can approve swaps" into approving single swaps, which stays a Must, and bulk approvals, which becomes a Should. Reporting becomes a Could, with a weekly export sent by hand as the workaround.

## Holding the line during the build

**Scenario:**

Illustrative scenario: halfway through building a consumer budgeting app's first release, the design lead asks to add dark mode and the head of growth asks to add referral invites.

**Walkthrough:**

The product owner runs both through the tests. Neither passes the learning filter, since the hypothesis is about whether users keep categorizing spending after the first week. Neither passes the DSDM Must test. Both go on the Could list with a note that referrals are a likely first addition after launch.

The head of growth asks for referrals to be a Must anyway. The product owner asks which current Must should leave the line to make room. No one proposes one, and the scope document stays as agreed.
