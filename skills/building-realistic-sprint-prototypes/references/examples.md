# Examples: Building a Realistic Prototype in One Day

## Example: B2C mobile app for meal planning

**Scenario:**

A four-person startup team is running a design sprint to test whether busy parents would pay for a weekly meal planning app. The storyboard covers a single flow: user opens the app, sees a personalized meal plan for the week, taps on Monday's dinner, views the recipe, and adds ingredients to a shopping list. The team has one designer and three non-designers. They need to test on iPhones.

**Walkthrough:**

The team identifies 14 screens from the storyboard. The designer takes the four most complex screens: the weekly meal plan grid, the recipe detail page, the shopping list, and the onboarding screen. The three non-designers split the remaining 10 screens, which include a welcome screen, login, confirmation dialogs, and transitional loading states. They use Figma with a 390x844 mobile frame.

Real recipe names, actual ingredient lists from a cooking blog, and stock food photography replace all placeholders. By 1:00 PM, all screens are in the shared Figma file. The stitcher connects them with prototype links, and by 2:30 PM the team does a trial click-through on an iPhone using the Figma Mirror app. They discover that the 'Add to Shopping List' button is too small to tap reliably on the phone, and the recipe page requires scrolling that the prototype does not support well.

They enlarge the button and split the recipe into two linked screens to eliminate scrolling. The final prototype is ready by 4:00 PM. On Day 5, four out of five test users navigate the flow without confusion, and the team gets clear signal that the value proposition resonates but the shopping list needs a 'share with partner' feature they had not considered.

## Example: B2B SaaS dashboard for sales teams

**Scenario:**

A product team at a mid-size SaaS company (about 200 employees) is sprinting on a new analytics dashboard concept for sales managers. The storyboard covers: sales manager logs in, sees a team performance overview, drills into one rep's pipeline, identifies a stalled deal, and clicks through to a suggested action. The team includes two designers, a product manager, a data analyst, and an engineer. Testing will happen on laptops via screen share.

**Walkthrough:**

The team counts 18 screens. The two designers take the dashboard overview and the pipeline drill-down, which require charts and data tables. The data analyst builds the deal detail screens using realistic but anonymized data from the company's own CRM exports. The product manager builds the login screen, the suggested action screen, and two confirmation dialogs.

The engineer creates a simple 'error state' screen and a 'no data available' state in case the facilitator needs them during testing. They work in Figma with 1440x900 desktop frames. Real sales numbers, actual rep names (changed for privacy), and charts built from CSV data make the dashboard feel authentic. During the 2:30 PM trial, the team notices that the transition from the overview to the pipeline view is confusing because the navigation pattern changes.

They add a consistent sidebar navigation to both screens, which takes 20 minutes. The finished prototype has 18 linked screens. On Day 5, three of five test users correctly identify the stalled deal without prompting, validating the information hierarchy. Two users miss the 'suggested action' button, signaling a need to make it more prominent.

## Example: Internal tool for warehouse operations

**Scenario:**

A logistics company is sprinting on a tablet-based tool for warehouse workers to scan incoming shipments and flag discrepancies. The team is small: one designer, one warehouse operations lead, and one product owner. Users are warehouse workers who are not tech-savvy. The storyboard covers scanning a barcode, viewing shipment contents, marking items as received, and flagging a missing item.

Testing will happen on iPads in a conference room that simulates the warehouse environment.

**Walkthrough:**

The storyboard yields 12 screens. The designer builds the barcode scanner interface (a camera-like overlay with a scan button), the shipment detail list, and the discrepancy flagging screen. The operations lead, who knows warehouse terminology and workflows intimately, writes all on-screen labels and instructions in the language warehouse workers actually use. The product owner builds the confirmation screens and a 'shipment complete' summary in Google Slides, which are then imported as images into the Figma file.

Because the users are not tech-savvy, the team increases all font sizes to 18px minimum and makes all buttons at least 48x48 pixels. They use a bold green/red color scheme for received/missing status, matching the visual language already used on the warehouse floor. During the trial, they realize the 'flag missing item' flow requires typing a reason, which is slow on a tablet in a warehouse. They replace the text input with three preset reason buttons ('Not in box,' 'Damaged,' 'Wrong item').

On Day 5, all five test users complete the scan-and-receive flow in under 90 seconds, and four of five successfully flag a missing item without assistance. The team validates the concept and identifies that adding a photo-capture step for damaged items would improve the flagging workflow.

## Example: Keynote-based prototype for a nonprofit fundraising page

**Scenario:**

A two-person nonprofit team with no design experience is sprinting on a new online donation page. The storyboard shows a donor arriving from an email link, reading an impact story, choosing a donation amount, entering payment information, and seeing a thank-you confirmation. They have no Figma experience and are testing on a laptop in their office.

**Walkthrough:**

The team chooses Keynote because both members are comfortable with it. They create 10 slides, one per storyboard panel. They use a screenshot of their current website header as the top of every slide for visual continuity. The impact story slide uses a real photo of a beneficiary (with permission) and actual outcome statistics from their last annual report.

The donation amount slide shows four preset buttons ($25, $50, $100, Other) styled to look like web buttons using Keynote shapes. The payment form slide uses a screenshot of Stripe's hosted checkout page embedded as an image, since they plan to use Stripe in the real product. They link slides using Keynote's hyperlink feature on shapes, which creates a click-through experience in presentation mode. The trial click-through reveals that the transition between the impact story and the donation form feels abrupt.

' On Day 5, all five test donors complete the flow. Three donors comment positively on the impact story, confirming it is the right emotional hook. Two donors express confusion about whether the $50 amount is a one-time or recurring donation, revealing a missing label the team adds to their requirements for the real build.
