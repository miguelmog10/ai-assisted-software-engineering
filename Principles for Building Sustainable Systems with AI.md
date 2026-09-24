AI-Assisted Software Engineering

Principles for Building Sustainable Systems with AI

⸻

Introduction

I’m not a traditional software developer, but I’ve spent years working at the intersection of software engineering, robotics, product, architecture, quality, and engineering leadership.

Recently, I’ve started getting my hands dirty again.

The new generation of AI tools has changed the equation for me. They have made it possible for me to explore unfamiliar technologies, prototype ideas, and build personal applications and projects much more directly than I might have attempted before.

And it’s been an incredible learning experience.

But something interesting happened as I started building more.

The interesting part wasn’t just that AI could write code.

I started recognizing many of the same engineering problems I’ve spent years thinking about:

Architecture. Requirements. Quality. Testing. Context. Documentation. Technical debt. Trade-offs.

AI can lower the barrier to implementation without lowering the need for engineering. But it can also help us do the engineering.

That distinction is important.

The goal isn’t simply to generate code faster. It’s to use AI to accelerate the broader engineering process while maintaining ownership of the problem, the architecture, the quality, and the outcome.

I also found myself thinking about my AI tools in a surprisingly familiar way.

If I’m effectively working with a team of AI assistants, I don’t want to repeat the same expectations every session:

Write maintainable code.
Follow good engineering practices.
Don’t skip testing.
Remember why we’re building this.

I want those expectations to become part of the way I work.

That led me down a bit of a rabbit hole and eventually to the ideas in this document.

⸻

A note on “vibe coding”

I don’t think vibe coding is inherently bad.

There are situations where it makes a lot of sense.

It’s a powerful way to explore an idea, learn an unfamiliar technology, prototype something quickly, experiment with an API, or simply discover what might be possible.

A simplified version might look like:

I have an idea → AI generates code → I test it → I keep prompting until it works.

For exploration, that can be incredibly productive.

The question changes when the software becomes something we intend to depend on, maintain, operate, extend, or hand to someone else.

At that point, the goal is no longer simply to make something work.

The goal becomes building something understandable, testable, maintainable, secure, and sustainable.

That’s where I see a distinction between vibe coding and what I’m calling AI-Assisted Software Engineering.

The focus isn’t on generating code.

The focus is on generating sustainable solutions.

⸻

The Four Pillars

My approach can be summarized through four pillars:

I. Think Before You Generate

Understand the problem, requirements, architecture, constraints, and desired outcomes before implementation.

II. Generate Responsibly

Use AI aggressively within appropriate boundaries while maintaining human ownership and engineering discipline.

III. Prove It Works

Validate behaviour, quality, security, requirements, and outcomes with appropriate evidence.

IV. Build for the Future

Preserve knowledge, manage complexity, reduce technical debt, and build systems that can evolve.

These aren’t rigid phases.

They are activities that should happen continuously throughout development.

⸻

I. Think Before You Generate

1. Design Before Prompting

AI makes implementation incredibly easy to start.

That can also make it tempting to start implementing before we fully understand what we’re building.

Before asking an AI system to generate an implementation, establish the problem to be solved, objectives, requirements, constraints, assumptions, stakeholders, and what success looks like.

The appropriate level of design will vary with the problem. A small experiment doesn’t need the same design process as a safety-critical system.

The principle is simply to understand enough to make the next decision responsibly.

AI can help with this process too. It can help explore requirements, identify ambiguities, challenge assumptions, propose alternatives, and expose questions that may otherwise be missed.

But implementation should not become a substitute for understanding.

Anchor: Never ask for implementation before understanding what is being built.

⸻

2. Architecture Is a First-Class Deliverable

When implementation becomes cheap, architecture can become easier to overlook.

Architecture should remain intentional.

Define components, responsibilities, interfaces, boundaries, dependencies, data flows, and important failure modes before allowing implementation details to determine them accidentally.

AI can participate in architectural thinking. It can propose alternatives, identify trade-offs, explore patterns, and help reason about consequences.

But architecture should not simply emerge as the accidental result of thousands of generated lines of code.

Anchor: Build the map before building the roads.

⸻

3. Plan Continuously, Adapt Relentlessly

Planning is not a one-time activity that happens before development.

Problem framing, requirements, architecture, implementation planning, execution, validation, and continuous improvement are all thinking activities that should be revisited as understanding changes.

This doesn’t mean returning to the drawing board every time something changes.

It means continuously asking:

Do we have enough understanding to make the next decision responsibly?

Agile development already embraces this idea. AI simply makes the feedback loop much faster.

The appropriate level of planning should scale with complexity, uncertainty, and risk.

Anchor: Plan continuously, adapt relentlessly.

⸻

4. Maintain Traceability

When software can be generated quickly, it’s easy to lose track of why something exists.

Important implementation decisions should remain connected to the problems, requirements, assumptions, and outcomes that motivated them.

Traceability doesn’t mean documenting every line of code.

It means preserving the reasoning behind decisions that matter.

Why does this component exist?

Which requirement does it satisfy?

What assumption does it depend on?

What trade-off led us here?

As systems evolve, this context becomes increasingly valuable to both humans and AI systems working on the codebase.

Anchor: Future teams should understand important decisions without needing the original author.

⸻

II. Generate Responsibly

5. AI Generates. Humans Own.

AI-generated code should be treated like a contribution from another developer.

It can be useful. It can be impressive. It can also be wrong.

The responsibility for what enters the system remains human.

That doesn’t necessarily mean reviewing every generated line manually. As AI becomes more capable, human oversight can move toward higher-value questions:

* Does the implementation satisfy the requirements?
* Does the architecture make sense?
* Are the assumptions valid?
* Have important failure modes been considered?
* Is the system secure?
* Are the risks acceptable?
* Does the result achieve the intended outcome?

The level of human review should reflect the risk and importance of the system.

Anchor: No production system should exist without clear human ownership of its requirements, architecture, quality, and outcomes.

⸻

6. Small Increments Beat Big Bang Development

AI makes it tempting to describe an entire application and ask for everything at once.

Sometimes that works.

But smaller increments generally make engineering decisions easier to reason about and failures cheaper to correct.

Break work into meaningful capabilities, modules, milestones, experiments, or validation steps.

AI performs within a context. Smaller, well-defined scopes make it easier to provide that context, evaluate the result, and identify problems before they spread.

AI also changes the economics of experimentation.

When experimentation becomes cheap, we should be able to experiment more.

Explore alternatives. Test assumptions. Prototype different approaches. Learn before committing.

But cheap experimentation should not mean permanent accumulation.

Prototypes, experiments, and generated alternatives should remain disposable unless they earn their way into the system.

Anchor: Experiment more. Accumulate less.

⸻

7. Treat AI Artifacts as Engineering Artifacts

Software systems increasingly depend on more than source code.

AI artifacts can include:

* prompts
* system instructions
* skills
* agent instructions
* tool definitions
* retrieval strategies
* evaluation criteria
* workflows
* reusable templates
* configurations
* other engineered inputs that materially influence AI behaviour

When these artifacts materially affect system behaviour, they should be treated with the same intentionality we apply to other engineering assets.

They may need to be documented, versioned, reviewed, tested, and continuously improved.

The specific level of discipline should depend on how much the artifact matters to the system.

Anchor: If it materially influences system behaviour, engineer it intentionally.

⸻

8. Externalize Memory: Shared Context Needs a Durable Source of Truth

AI systems can carry significant context during a conversation or workflow.

Humans do the same.

Neither should be relied upon as the only place where important project knowledge exists.

Ground rules, architectural decisions, constraints, conventions, assumptions, and important project context should exist outside any single agent’s or human’s internal state.

A durable source of truth gives the people and AI systems working on a project a common reference point.

This doesn’t mean every piece of information needs to live in one document or one tool.

It means important knowledge should exist somewhere durable, accessible, and understandable.

Anchor: If it isn’t recorded in the system, it doesn’t exist.

⸻

III. Prove It Works

9. Testing Is Mandatory

Software that works once is not necessarily software that works.

Testing remains fundamental regardless of whether the implementation was written by a human, generated by AI, or produced through a combination of both.

Depending on the system, this may include:

* unit testing
* integration testing
* system testing
* acceptance testing
* regression testing
* performance testing
* security testing
* AI-specific evaluation

AI can help generate tests, test data, edge cases, and testing strategies.

But generated tests also need to be evaluated.

A test that simply confirms the implementation behaves the way it was generated to behave is not necessarily meaningful validation.

Anchor: Every meaningful capability should arrive with evidence that it works.

⸻

10. Distrust the Happy Path

A successful demonstration is not proof that a system is robust.

AI-generated implementations can be very good at producing a functional result quickly. That doesn’t necessarily mean that security, failure modes, authorization boundaries, input validation, or non-functional requirements have been adequately considered.

Security in particular should be deliberate rather than assumed to emerge automatically from functional correctness.

For security-sensitive systems, appropriate practices may include:

* threat modelling
* explicit security requirements
* input validation
* authorization boundaries
* secret management
* dependency scanning
* static analysis
* CI/CD security checks
* focused human review of security-critical logic

The specific controls should reflect the system’s risks.

Anchor: AI can optimize for the happy path. Attackers don’t use it.

⸻

11. Build Evidence, Not Just Confidence

“It seems to work” is a feeling.

Evidence is something else.

Depending on the system, useful evidence might include:

* automated test results
* evaluation results
* validation reports
* benchmarks
* logs
* code reviews
* acceptance criteria
* reproducible workflows
* operational metrics

The objective isn’t to eliminate judgement.

It’s to give judgement something concrete to work with.

The appropriate evidence will vary by context. A small prototype doesn’t need the same validation strategy as a production system.

But important decisions should increasingly be supported by evidence rather than intuition alone.

Anchor: Confidence should be earned through verification.

⸻

12. Optimise for Outcomes, Not Code

AI changes the economics of implementation.

If generating code becomes significantly cheaper, measuring engineering value primarily through the amount of code produced becomes increasingly questionable.

More code is not necessarily more value.

Depending on the context, more meaningful indicators might include:

* cycle time
* defect escape rate
* mean time to recovery
* reliability and availability
* user or customer outcomes
* relevant business KPIs
* operational performance

The goal of engineering isn’t to maximize code production.

It’s to solve problems and create sustainable systems that deliver value.

Anchor: Optimise for outcomes, not code.

⸻

IV. Build for the Future

13. Documentation Is Part of Development

Documentation is often treated as something that happens after development.

It shouldn’t be.

Architecture, design rationale, onboarding information, operating instructions, testing approaches, troubleshooting guidance, and important AI workflows can all be part of the system’s knowledge.

AI makes producing and maintaining documentation easier.

That removes one of the traditional excuses for not documenting important knowledge.

Good documentation creates organizational memory.

It helps future humans understand the system, and it gives future AI systems better context with which to work.

Anchor: If it matters and cannot be understood by someone else, it isn’t finished.

⸻

14. Version Everything That Matters

Source code is not the only thing that can change system behaviour.

AI artifacts, evaluation criteria, configurations, workflows, datasets, schemas, and other inputs may materially influence how a system behaves.

When changing something can meaningfully change system behaviour, consider whether it should be versioned, reviewed, and traceable.

Versioning is not simply about being able to go backwards.

It helps us understand what changed, why it changed, and what effect that change had.

Anchor: If changing it can change system behaviour, treat it as an engineering artifact.

⸻

15. Reduce Technical Debt as You Go

AI can generate software faster than teams can maintain it.

That creates a new risk: the rate at which complexity accumulates can exceed the rate at which teams understand and manage it.

Technical debt should therefore be addressed continuously.

Refactor.

Simplify.

Remove dead code.

Improve readability.

Consolidate unnecessary complexity.

Strengthen architecture where needed.

“AI can fix it later” is not a reason to leave unnecessary complexity in the system today.

The easier it becomes to generate code, the more important it becomes to maintain a system that people can still understand.

Anchor: Fast code creation must not outpace maintainability.

⸻

16. Reuse What Compounds, Delete What Doesn’t

AI makes creating another implementation incredibly cheap.

That can be both a superpower and a trap.

Reusable libraries, frameworks, workflows, evaluation systems, AI artifacts, templates, and pipelines can create significant leverage when they genuinely solve recurring problems.

Reuse what creates value.

But don’t confuse reuse with hoarding.

Prototypes, spikes, failed experiments, obsolete implementations, and unnecessary abstractions should be removed when they no longer serve a purpose.

When generation costs almost nothing, accumulating code can become a maintenance liability.

What should survive is the learning, the decisions, and the architectural rationale.

The unnecessary code can go.

Anchor: Reuse what compounds. Delete what doesn’t.

⸻

Closing Thought

AI is changing the economics of software development.

As implementation becomes faster and cheaper, some of the scarcest resources may increasingly become understanding the problem, making good decisions, designing appropriate architecture, managing complexity, validating outcomes, preserving knowledge, and earning trust.

But AI can help with many of those things too.

That is what makes this moment so interesting to me.

The opportunity isn’t simply to remove engineering from software development.

It’s to use AI to amplify the parts of engineering that create the most value while preserving judgement, accountability, quality, and long-term sustainability.

The goal isn’t simply more software.

Better systems, built faster.

⸻

A note on this document

This document was developed with the help of AI tools.

I used them to brainstorm, explore alternatives, challenge assumptions, structure ideas, and refine the writing. The experiences, observations, decisions, and perspective behind the document are my own.

In that sense, the document is also an experiment in the approach it describes.

⸻
