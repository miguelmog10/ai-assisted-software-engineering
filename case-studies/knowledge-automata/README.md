# Knowledge Automata: my agents kept me closer to my own principles

## 1. Out of the oven

In my [first post](https://www.linkedin.com/posts/miguelmog10_ai-assisted-software-engineering-building-ugcPost-7520442679600599041-nY9s), I shared [16 principles](https://github.com/miguelmog10/ai-assisted-software-engineering/tree/v1.0.0) for AI-assisted software engineering, organized around four pillars. I said the first case study was in the oven. This is it.

Knowledge Automata is an open-source project I built in my personal time with a small team of AI agents, over two weekends and some late nights. It was the first real test of those principles. What I learned surprised me: my agents kept me closer to my own principles.

This is a story first, but the numbers are here too, each linked to the file it came from, along with what went wrong. Each lesson is tagged with the principle it tested (P1 to P16). Links point to Knowledge Automata [as it stood on November 2, 2026](https://github.com/miguelmog10/knowledge-automata/tree/0cb5d1d), so they won't change as the project grows.

## 2. Goal

### What Knowledge Automata is

Knowledge Automata is an automated institutional memory. AI agents turn the raw artifacts a group produces into curated, validated records, each traceable to its source. Today it keeps a PMI-style decision log for project teams. A risk register is next. The same idea fits any group building knowledge over time, of humans, AIs or both. It even fits one person working alone.

### Why it matters

Groups create knowledge constantly and lose it just as fast. Decisions sit in meeting notes, chats and documents, so people rediscover context and argue settled questions again. Formal records solve this, but curating them by hand, continuously, costs more than most teams can afford. So they get skipped. AI agents can lower that cost enough to make it practical.

The idea grew out of the conversation Andrej Karpathy started with his posts on LLM-powered "second brains". That conversation is really about memory: what agents, and the people working with them, can remember. Agent memory will keep improving, and the architectures will change. My point is that a written record still matters. A curated repository of knowledge, easy for everyone to reach, serves people, today's AI and whatever comes next.

> Even a perfect memory would still need a record.

A record is shared truth that everyone can see and agree on. It shows who owns each decision, keeps the history of how and why it changed, and outlives any single tool, chat or model.

### What it does today

It is working, not finished. Built today: the Sensor (intake) and the Artifact Ledger, the Governor (orchestrator), the Decision Registrar, the Comparator (reconciliation), and the Operator (human in the loop). Planned: the Risk Registrar, the Observer and the Oracle. Before v0.1.0 it still needs the Risk Registrar and an evaluation set.

It runs on Cohere, the Canadian AI company: Command for the language model, Embed and Rerank for search. They sit behind a [provider-neutral service layer](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/docs/decisions/0003-provider-agnostic-llm-service-layer.md), so in the future the provider can change, or several can be mixed, without a redesign.

### The real goal

The project had a second goal: to test the 16 principles on a real build. Not a vibe-coded product, but not a full-fledged product either. I set the scale on purpose at prototype level ([ADR-0008](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/docs/decisions/0008-light-engineering-standard-for-v0-1.md)), applying the principles at a level that fits it. That was a deliberate bend of P11: the full standard of evidence didn't fit a weekend build, so the deferred items are tracked instead of ignored.

## 3. Setup

### Pointing the agents at the principles

On Saturday, October 24, I opened an empty repository. I had the principles, as I published them, and nothing else: no playbook, no templates, no instruction files. Before working with my agents, I reflected on how to communicate the principles to them.

If you work with agents every day, this will look familiar. Over the past two years, I climbed the usual ladder: copying context manually into each chat, then carrying a notes file or a backlog from session to session, then writing agent instructions, then using instruction files like `AGENTS.md` that tools read on their own.

My plan was to research what I needed for the different platforms and pack the principles into each one. Then I changed my mind.

> Instead of extracting this information and repeating it to the agents, I'm just going to point them there!

So I pointed the agents at the principles and asked them what they needed. I hadn't planned what came next. It was so organic. We brainstormed together, and the agents suggested what worked best for them and for our collaboration: for instance, a project [`AGENTS.md`](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/AGENTS.md) that links to the principles and refers to them by number. We also kept what worked for humans and AIs alike: handoff files, architecture decision records (ADRs), a STATUS page, a backlog and two running logs. I didn't design that system up front. It grew from that one link, and section 7 shows what it grew into.

That one link was the whole method: pointing at a versioned repo of principles was one more step on the ladder. The principles live apart from any tool's files. Before each project, I can negotiate them with the agents, branch them and make them my own, and the agents write whatever files each tool needs. Tools will change; the way of working stays. That separation is the part I'd point to, and so far it is tested on one project.

### The team

Every handoff had a team of three. Two of them were agents, both running Claude Opus 5.5:

- **Me, the owner.** I set the direction, answer questions, approve every plan and merge every pull request.

- **Claude, in Claude Desktop: advisor, planner and reviewer.** Discovery, architecture, writing the handoffs, and code review.

- **GitHub Copilot, in VS Code: the implementer.**

Both agent roles start fresh for every handoff, in new sessions that read the repo, not old chats. Branch protection makes the roles real: a change reaches `main` only through a pull request that I merge (P5).

### The loop

Each handoff works like an epic:

1. **Design, by voice.** Claude and I talk it through, one question at a time. Decisions go into an ADR before any code (P1, P2).

2. **Handoff.** Claude writes it as a file in the repo: the goal, the decisions, the scope and the definition of done (P8).

3. **Plan.** A fresh Copilot session reads the handoff and the repo, and plans before writing code. Questions come back to me, and I answer them, often with Claude.

4. **Build.** Copilot implements, usually over several commits.

5. **Review.** Claude reviews the code in detail, and I check the high level. The tests pass, CI is green, and I merge (P5, P9).

6. **Reset.** STATUS and the backlog are updated in the same pull request, and the next handoff starts over in fresh sessions (P8).

### At a glance

| | |
|---|---|
| Started | Saturday, October 24, 2026, from an empty folder |
| Last merge | Handoff 007, Sunday, November 1, 2026 ([PR #15](https://github.com/miguelmog10/knowledge-automata/pull/15)) |
| Handoffs | 7, every pull request reviewed before I merged it |
| Tests | 951, all offline, with the network blocked |
| Decisions recorded | 18 [ADRs](https://github.com/miguelmog10/knowledge-automata/tree/0cb5d1d/docs/decisions) |
| Scale | Prototype, on purpose ([ADR-0008](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/docs/decisions/0008-light-engineering-standard-for-v0-1.md)) |

## 4. What worked

### The product, and the way we worked

Good teams improve two things: the product and the way they work. Of the four pillars, the one that helped me most was the second, Generate responsibly, through one principle in particular: treat AI artifacts as engineering artifacts (P7).

I applied it to the process as well as the product. The handoffs, the running logs, STATUS, the backlog and `AGENTS.md` were committed, reviewed and improved like code. Because they lived in the repo and not in chats (P8), every improvement stuck. And because they stuck, they compounded (P16). That is what turned an organic experiment into a cycle that keeps improving itself.

Every example below comes from the project's [principles in practice log](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/dev/principles-in-practice.md), a running record of each time a principle shaped the work.

### The four pillars

#### 1. Think before you generate

**The backlog became a contract.** The backlog says what is in scope and what comes later. Every so often I drifted and asked for something new, and the agents pushed back: this is out of scope according to the backlog. We can add it, but then we update the backlog. I never overruled them. Each time my reaction was the same: yes, I already said that, I just forgot.

> Reading is remembering.

At the start of any project, everyone agrees on good practices. Two months later, busy with the work, people forget. Attention is limited, and checking every action against the rules by hand would take forever. The agents reread the rules on every pass, in seconds, so following them stopped costing me attention. If I said it, I should do it (P3).

The principles weren't rigid, and they shouldn't be. When the process becomes the goal, teams forget they're there to deliver a product. When a principle didn't fit, the agents helped me bend it on purpose and write down why. That's the difference between adapting a rule and quietly forgetting it. And because every bend is recorded, anyone can see later what changed and why, which is the kind of trail regulated fields like aerospace depend on.

#### 2. Generate responsibly

**Review went every direction: AI reviewed AI, I reviewed the AI, and the AI reviewed me.** Before any code was written for handoff 002, Copilot reviewed Claude's plan and caught three problems, and I made the call on each one. Nobody's work was trusted just because of who, or what, produced it (P5).

#### 3. Prove it works

**Assumptions get labeled.** Some of my notes sounded like facts but were really assumptions nobody had tested. The agents kept me to marking them "not proven yet" until we tested them, and not building on them before that. This is the one they made me follow through on most (P11).

#### 4. Build for the future

**Core docs, written once, for humans and AIs alike.** AI lowered the cost of thorough documentation, so the project has a full README, dev docs and a decision record for every significant choice. Other versions are generated from those core docs on demand: the [visual guide](https://miguelmog10.github.io/knowledge-automata/guide/) is refreshed from them at the end of each pull request, and the same can work for an executive summary or a short deck (P13).

### Tools that stayed out of the way

**One strong model, start to finish.** Both agents ran Claude Opus 5.5 for the whole project, so I never had to switch models or juggle costs mid-task. That won't always be possible, and model choice still matters for cost, but here the tool friction was very low.

**A platform agents can read.** The Cohere stack was smooth to work with, and the best part was the open docs: my agents could read them directly, with no login in the way. Embed and Rerank answered in under 0.21 s in the real run.

### More examples, for the curious

- **Contracts before code.** The data formats were designed before any implementation and handed over as a contract (P2). [Handoff 002](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/dev/handoffs/002-register-schemas.md)

- **The model proposes, code checks.** The AI drafts each record, and plain code checks that every quote really appears in the source, so nothing gets invented (P10, P12). [ADR-0014](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/docs/decisions/0014-registrar-drafting-loop.md)

- **Prompts are versioned like code,** and each record notes which model, prompt and schema produced it (P7, P14). [Prompts](https://github.com/miguelmog10/knowledge-automata/tree/0cb5d1d/prompts)

- **Two corrections, both ways.** I stopped Claude from guessing that a reused file name meant a new revision, and Claude corrected my use of "atomic" (P5). [Handoff 005](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/dev/handoffs/005-sensor-and-ledger.md), [handoff 006](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/dev/handoffs/006-comparator.md)

- **The plan bent, the architecture held.** A handoff put some file writes inside an agent, but an existing rule, enforced by a test, says agents never touch storage. The rule won, and the change from the plan was recorded (P2). [ADR-0015](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/docs/decisions/0015-artifact-ledger-storage-and-sensor-checks.md)

- **"Why three?"** A starting value became a setting, measured and left to tune later, instead of a constant nobody questioned (P11). [Handoff 006](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/dev/handoffs/006-comparator.md)

- **Real output, committed as it came out,** weak fields and findings included, not rerun until it looked better (P11). [Sample project](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/examples/sample-project/README.md)

- **Tests that can't spend money.** All 951 run offline, and a test that reaches the network fails loudly (P10). [`tests/conftest.py`](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/tests/conftest.py)

- **The running logs became the playbook.** Two logs kept in the repo, one for how the principles showed up and one for how the tools behaved, became playbook rule 7 and templates any project can copy (P16). [Templates, v1.1.0](https://github.com/miguelmog10/ai-assisted-software-engineering/tree/v1.1.0/templates)

### How much engineering discipline can we afford?

In my first post I wrote that the quiet question was always: **how much engineering discipline can we afford?** Turns out, quite a lot! 

I'm a robotics engineer, not a traditional software developer, and in recent years I have spent more time managing than implementing, but I was able to build this alone with my agents, relatively quickly. Without them, I'd probably still be setting up the repo 😅.

## 5. What failed: where systems meet

A bug on its own isn't news. What I wanted to know was where the way of working fell short. The two failures that taught me the most both happened where things meet: between our system and a new API, and between tools. That didn't surprise me. In any system, the risk is highest at the boundaries. Neither failure was an agent's fault.

### Two failures

#### 1. Between our system and a new API

In the first real run, five of six first replies came back with the model's reasoning written in prose before the JSON, so they were rejected. I almost reported it as a provider problem. The cause was ours: Cohere's docs ask that a prompt in JSON mode also ask for JSON, and ours didn't. One line fixed it. Strict parsing caught it. The repro found it. The [write-up](https://github.com/miguelmog10/cohere-feedback) owns it.

The bug isn't the lesson. The speed is. Working alone with a new API, I would have read the docs slowly, and that slowness is often how a detail like "ask for JSON" sinks in. I'm not sure I would have caught it that way either. But at agent speed, we moved faster than I could absorb (P11).

#### 2. Between tools

Several of Claude's file writes reported success but saved an older version, and a revised handoff never reached Copilot. The file was open in more than one place, and the message said "written" anyway. A human could have made the same mistake. Rereading the files exposed it, and the missing work was recovered. Since then, every file delivered is read back, and the lesson became playbook rule 4, ["Verify what another tool wrote"](https://github.com/miguelmog10/ai-assisted-software-engineering/blob/v1.1.0/PLAYBOOK.md#4-verify-what-another-tool-wrote) (P11).

The general lesson: a handoff needs a light check. Reading the file back, comparing a hash, or committing to Git as a checkpoint takes seconds, and it also protects against crashes and other interruptions from outside. Handoff files are my lightweight version of tickets in Jira or GitHub Issues. At prototype scale I chose files on purpose. The lesson applies either way: an outdated ticket causes the same problem as an outdated file.

### A hypothesis: slow down at the critical areas

Problems cluster at the boundaries. That is classic systems thinking, and agents make it sharper: they move faster than people can absorb. So my hypothesis is to slow down on purpose at the critical areas: APIs, integrations, handoffs, and likely security. The collaboration contract could name those areas up front, and the agents could flag new ones as they appear: we're touching authentication now, let's take a step back and double-check.

This is untested. I'll try it on the next project, and it becomes a playbook rule only if it holds.

### A note on friction

Being thorough slows you down a little. Sometimes the process interrupted my flow when I wanted to keep building fast. That happens to anyone who wants to be thorough, in any project. But the cost of following the principles is now so low that I'll take it. They work as a collaboration contract, and they kept me from drifting into vibe coding when vibe coding wasn't what I wanted.

## 6. What it cost

As in section 3, two tools did the work, with me in the loop. So the project had three costs, and only one was measured.

1. **Copilot, the implementer:** about 9,100 credits on Copilot's entry-level plan, logged per pull request as its last commit before merging (P11). The table below has the details.

2. **Claude, the advisor, planner and reviewer:** covered by my subscription, so not measured. From what I saw of my usage, Claude Pro would most likely have been enough for this project, with room to spare, though I didn't record it. I moved to Max later, once I was running several projects at the same time and didn't want to watch the usage limits. (Once I saw this working, I got a little overexcited and started more projects than I'd like to admit. I'm sure I'm not the only one.)

3. **My own time:** two weekends, some late nights and a fair amount of coffee. Not measured either.

| Handoff | What it built | Pull requests | Copilot credits |
|---|---|---|---:|
| 001 | Repository scaffolding and CI | #1, #2 | 660.8 |
| 002 | Record schemas and validation | #3 | 501.3 |
| 003 | LLM service layer and Cohere adapter | #4 | 1,145.4 |
| 004 | First slice: one artifact to one decision record | #5 | 682.6 |
| 005 | Sensor (intake) and Artifact Ledger | #8 | 1,118.4 |
| 006 | Comparator (reconciliation) | #11 | 2,199.3 |
| 007 | Governor (orchestrator), in three parts | #15 | 2,801.6 |
| | **Total** | | **9,109.4** |

Source: [`dev/costs.md`](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/dev/costs.md).

**The largest single step.** Part B of handoff 007 cost 1,137.1 credits. Once the questions were answered, it was about 30 minutes of agent coding, and every test passed.

**The model calls.** The real run used 38 of the 50 Cohere calls I budgeted for it, on a trial key.

Measuring all three costs, not only the credits, is an open question for the next project.

## 7. How the way of working evolved

### The loop that improved itself

This was the biggest surprise. I hoped a self-improving process could work, and it worked better than I expected, with almost no overhead. One link to the principles was enough to start it. From there, whatever helped the collaboration was written down for the next session, and the improvements kept coming.

They didn't stay in Knowledge Automata. The handoffs, the running logs and the lessons became the [playbook](https://github.com/miguelmog10/ai-assisted-software-engineering/blob/v1.1.0/PLAYBOOK.md) and nine copyable templates in principles v1.1.0. The way Claude and Copilot reviewed each other became rule 11, "Review with a second pair of eyes", in [v1.2.0](https://github.com/miguelmog10/ai-assisted-software-engineering/blob/v1.2.0/CHANGELOG.md). The 16 principles themselves never changed; the practical layer on top of them grew. Each new project starts from that layer and can feed its own lessons back. That is a compounding cycle, and it is only one project old.

### What changed in me

#### As an engineer: technical anchors

I'm a robotics engineer, not a traditional software developer, and setting up a repository isn't something I do often. In a couple of conversations, the agents helped me set one up to industry standard: branch protection, pull-request-only changes, CI as a required check, secret scanning ([log entry](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/dev/principles-in-practice.md)). I could have done it alone, but it would have taken much longer, and I'd likely have missed a few settings along the way. I asked them to explain the why each time, so I learned as I went.

That was one example. I didn't have one advisor, but a bench of them, across software architecture, design, documentation and project management. They became my technical anchors. I still question their advice, but I'm never starting from zero.

#### As a manager: process anchors

The agents kept me accountable to things I had already said. That made me rethink something I knew but rarely saw done well: a shared collaboration contract matters more than we think, for people as much as for agents. Teams run retrospectives, but under delivery pressure the lessons don't always get applied. Setting the guidelines from the start, and having everyone actually follow them, is where the value is. Here, the contract was in the repo, and every session reread it.

#### A new habit

A new habit formed, and my agents helped me shape it: if something repeats, automate it, with a reason, version it and keep it in the repo. A small example: GitHub rulesets export as JSON, so mine can live in the repo with everything else.

### What comes next

The next project starts from the templates and runs the same team of three entirely on Claude, with Claude Code and Claude Desktop. It tests whether the second pair of eyes still works when both agents come from the same family of tools. Two ideas wait behind it, both untested: running independent handoffs in parallel, each with its own pair of agents, and slowing down on purpose at the critical areas from section 5.

With the implementation barrier this low, the ideas keep coming. One project has already started several others.

## 8. What it doesn't prove yet

This is one project, built by one person with two agents, at prototype scale. A lesson from one project is still just a lesson. It becomes a principle only if it holds up in a second one. Nothing here is tested yet at product or production scale, and the playbook says so rule by rule.

Knowledge Automata is working, not finished. Before v0.1.0 it still needs the Risk Registrar, an evaluation set to judge its output, and the prompt fix from section 5. Later come the planned agents, like the Observer and the Oracle, and potentially other registers.

The principles in practice log now goes into every new project. As more projects follow, I can compare five or ten of these logs side by side, and see which principles hold across projects, and which only held for this one.

## 9. Try it yourself

This was a very organic, low-effort experiment. If you're building something, whether you're cooking for guests or just vibe coding, try it: point your agents at the [principles repo](https://github.com/miguelmog10/ai-assisted-software-engineering) and see what comes out. Then tell me what you learned, in the comments, an issue or a pull request. The templates are free to copy.

More dishes in the kitchen. 👨🏾‍🍳

---

## References

- [Knowledge Automata](https://github.com/miguelmog10/knowledge-automata/tree/0cb5d1d) and its [visual guide](https://miguelmog10.github.io/knowledge-automata/guide/)

- Its running logs: [principles in practice](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/dev/principles-in-practice.md), [tool feedback](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/dev/tool-feedback.md) and [costs](https://github.com/miguelmog10/knowledge-automata/blob/0cb5d1d/dev/costs.md)

- The [handoffs](https://github.com/miguelmog10/knowledge-automata/tree/0cb5d1d/dev/handoffs) and the [decision records](https://github.com/miguelmog10/knowledge-automata/tree/0cb5d1d/docs/decisions)

- The JSON finding: [public write-up and reproduction](https://github.com/miguelmog10/cohere-feedback)

- The principles: [v1.0.0](https://github.com/miguelmog10/ai-assisted-software-engineering/blob/v1.0.0/PRINCIPLES.md), the [playbook](https://github.com/miguelmog10/ai-assisted-software-engineering/blob/main/PLAYBOOK.md) and the [templates](https://github.com/miguelmog10/ai-assisted-software-engineering/tree/main/templates)

- The [first post](https://www.linkedin.com/posts/miguelmog10_ai-assisted-software-engineering-building-ugcPost-7520442679600599041-nY9s), where this started