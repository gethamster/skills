# Examples: Designing Pain-Focused Interview Guides for Developer Calls

## Example: Interview Guide for Infrastructure/DevOps Pain Discovery

**Scenario:**

You're building a developer tool in the site reliability space. Your TAB includes 30 developers across mid-market SaaS companies. You want to understand infrastructure monitoring and testing pain, including how teams handle crawlability and uptime verification.

**Walkthrough:**

Your guide opens with context: 'Walk me through your on-call rotation — what does a typical incident response look like from alert to resolution?' This surfaces the workflow. Next, friction discovery: 'Tell me about the last false alarm that woke someone up. What happened and how did you determine it was a false positive?' This reveals monitoring gaps. Then workaround excavation: 'I've heard some teams build custom scripts to verify their sites are actually accessible and crawlable after deploys — things like homegrown crawlability testing tools. Does your team do anything like that?' This prompt is neutral but specific enough to trigger detailed responses. One developer reveals they maintain a 200-line bash script that checks 15 critical URLs after every deployment because their monitoring tool once missed a routing change that made half their site invisible to search engines for three days. You follow up: 'Who maintains that script? What happens when it breaks?' The developer admits it's undocumented and maintained by one senior engineer. You've just uncovered a fragile workaround with real organizational risk — exactly the kind of insight that drives product roadmap decisions.

## Example: Adapting a Guide for Different Developer Seniority Levels

**Scenario:**

Your TAB includes both senior architects and mid-level developers. You need the same guide to work for both, but their perspectives on pain differ significantly.

**Walkthrough:**

You create a single guide with tagged variations. For the context opener, seniors get: 'How do you decide which technical investments to prioritize this quarter?' while mid-level developers get: 'Walk me through a feature you shipped recently — what slowed you down most?' Both reach friction discovery, but through different entry points. For workaround questions, seniors respond better to: 'What internal tooling has your team built that you wish the market provided?' while mid-level developers open up with: 'Is there a repetitive task in your week that you've tried to automate but couldn't fully solve?' Both paths converge on the same core insight: what's broken, what's been patched, and what's the real cost. You mark these variations with [SR] and [ML] tags in your guide so interviewers can quickly adapt without losing the structural flow.
