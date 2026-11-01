# Playbook: Working with AI Agents

**How I work with AI agents, one rule at a time**\
*Version 1.2.0, November 2026.*

The principles are why I cook the way I do. This playbook is the kitchen routine: what happens, in what order, every time I work with AI agents on a project. It sits on top of [PRINCIPLES.md](PRINCIPLES.md) and comes with [templates](templates/) you can copy into your own repo.

Every rule here comes from a real project, and it names that project. Ideas I haven't tried yet live in [BACKLOG.md](BACKLOG.md), not here.

The rules stay tool-agnostic on purpose. How a specific tool behaves (which instruction files it reads, how its plan mode works) lives in [field-notes/](field-notes/): dated observations, not rules, which can go out of date.

## How to read this playbook

- **Each rule says what must be true, not how to do it.** Where it helps, an example shows one way to do it. Your tools and your team can find a better way.
- **Must** means the rule always holds at that scale level. **Should** means follow it unless you have a reason, and write the reason down.
- **Each rule names its source** (the project where it was used) and the principle it serves (P1 to P16).
- **Scale levels** come from "Scale Deliberately" in the principles: prototype, product and production. So far, every rule has been tested at prototype level only. Product and production say "not yet tested": I expect most rules to hold there, and some to get stricter, but I won't claim it until a project shows it. This repo now runs at product level, so it becomes the first product evidence, marked only for the rules it actually uses.

## Start here: declare your scale level

The first lines of every `AGENTS.md` say the project's scale level and link to the principles and this playbook by release tag. An agent then knows how much process to apply before it reads a single rule.

- Relaxing or tightening a rule is a decision, written down, never drift.
- Link by release tag (for example `.../blob/v1.2.0/PLAYBOOK.md`), never by `main`. Moving to a newer tag is its own pull request, recorded in STATUS or an ADR.

Source: Knowledge Automata, whose `AGENTS.md` has a "Deliberately relaxed for v0.1" section (ADR-0008) and pins the principles to a fixed commit. Principles: Scale Deliberately, P14.

**Below prototype: vibe cooking.** Vibe cooking isn't a fourth level. It's what you do before you declare one. A one-prompt throwaway needs nothing. But once you work with agents, even just to experiment, a minimal `AGENTS.md` with your non-negotiables pays for itself: a small investment that saves time during the experiment.

## The rules at a glance

| # | Rule | Prototype | Product | Production | Principle |
| --- | --- | --- | --- | --- | --- |
| 1 | Plan first | Must | Not yet tested | Not yet tested | P1, P5 |
| 2 | Write decisions down | Must | Not yet tested | Not yet tested | P4 |
| 3 | Commit handoffs to the repo | Must | Not yet tested | Not yet tested | P8 |
| 4 | Verify what another tool wrote | Must | Not yet tested | Not yet tested | P11 |
| 5 | Review the changes, not the summary | Must | Not yet tested | Not yet tested | P5 |
| 6 | Update STATUS and the backlog in the same pull request | Must | Not yet tested | Not yet tested | P8, P13 |
| 7 | Keep two running logs | Should | Not yet tested | Not yet tested | P8 |
| 8 | Track what the work costs | Should | Not yet tested | Not yet tested | P11 |
| 9 | Get the owner's go before a real run | Must | Not yet tested | Not yet tested | P5 |
| 10 | Commit real output as it came out | Should | Not yet tested | Not yet tested | P11 |
| 11 | Review with a second pair of eyes | Should | Not yet tested | Not yet tested | P5 |

## The rules

### 1. Plan first

**Must.** The implementing agent shares a plan and waits for the owner's approval before it writes any file.

A plan review is the cheapest place to catch a gap. Example: the implementer replies with the files it will create or change, anything in the handoff that doesn't fit the existing code, and its commit sequence, then waits.

Source: Knowledge Automata. Copilot's plan review caught three problems in handoff 002 and three more in handoff 006 (a lost escape sequence and two gaps), all before any code was written. Principles: P1, P5.

### 2. Write decisions down

**Must.** Decisions are recorded before implementation starts: in the handoff, and as a short ADR when they shape the design beyond this piece of work.

Choices an agent made on its own are marked as proposals until the owner confirms them, so nobody mistakes a suggestion for a decision.

Source: Knowledge Automata, 17 ADRs in `docs/decisions/`, and a "What we decided" section in every handoff since 005. Principle: P4.

### 3. Commit handoffs to the repo

**Must.** Each handoff is a file in the repo, committed before implementation starts.

**Should.** A handoff links to bulky inputs (sample files, prompts, long examples) instead of copying them in, so each fact has one source.

A handoff is roughly what many teams call an epic, or a well-written ticket: one scoped piece of work, planned and delivered as a unit. If your team uses a project management tool such as Jira or GitHub Issues, an epic or ticket can do the handoff's job, as long as agents can read it and it stays linked to the work. The principles allow this (P8), but no project here has tried it yet.

Source: Knowledge Automata, handoffs 001 to 006 in `dev/handoffs/`. Principle: P8.

### 4. Verify what another tool wrote

**Must.** When one tool writes a file for another, the writer checks that the file on disk matches the agreed version before anyone commits it.

Example: read the file back and compare SHA-256 hashes with what was sent.

Source: Knowledge Automata. A file link between tools delivered earlier versions of files three times, once costing a whole implementation of an outdated handoff 003. Reading back and comparing hashes caught the later ones (`dev/tool-feedback.md`). Principle: P11.

### 5. Review the changes, not the summary

**Must.** The reviewer reads the actual changes (the diff and the commits, including commit messages) rather than the agent's report of them.

An agent's summary is the agent describing its own work. It can be optimistic or leave things out. A human reviewer wouldn't approve a pull request from its description alone, and an AI reviewer shouldn't either.

Source: Knowledge Automata, where Claude reviews each handoff's code in the repo before it merges. Principle: P5.

### 6. Update STATUS and the backlog in the same pull request

**Must.** Each pull request updates STATUS and the backlog alongside the change.

STATUS is how anyone, human or agent, picks the work back up after a pause. If it drifts, the next session starts from the wrong place.

Source: Knowledge Automata, where `dev/STATUS.md` is read first in every session and needed corrections after pull requests that skipped it. Principles: P8, P13.

### 7. Keep two running logs

**Should.** Keep two short logs as you go: where a principle shaped the work, helped the team or had to bend, and where a tool caused friction or surprised you.

They turn friction into material you can reuse: upstream feedback, lessons, posts and case studies.

Source: Knowledge Automata, `dev/principles-in-practice.md` and `dev/tool-feedback.md`. Principle: P8.

### 8. Track what the work costs

**Should.** Track what the work costs where you can: money, credits or time. Start with what is easy to capture.

Example: record each pull request's agent credits as the last commit before merging.

Source: Knowledge Automata, `dev/costs.md`: 4,108.5 Copilot credits over six pull requests. Claude usage and human time were not measured yet. Principle: P11.

### 9. Get the owner's go before a real run

**Must.** When the work calls a real service (a paid API, an external system), the owner approves the run first.

A real run can cost money or credits and can have side effects, so a human stays in the loop.

Source: Knowledge Automata, where every smoke check and sample run waited for Miguel's go. Principle: P5.

### 10. Commit real output as it came out

**Should.** Commit the output of a real run as it came out, not tidied up. If you have to remove something (a secret, private data, a huge file), say what and why.

Real output shows what the system actually produces, weak spots included.

Source: Knowledge Automata, `examples/sample-project/`: the first real record was committed with its two weak fields, and the weaknesses went to the backlog. Principle: P11.

### 11. Review with a second pair of eyes

**Should.** Someone other than the author reviews the plan and the changes: another agent, a fresh session or a human.

An agent that checks its own work tends to agree with its own reasoning. A reviewer with its own context brings questions the author never asked, the way a colleague does, or the same person on a different day. Separate contexts also keep each session small.

Example: a pair of agents per handoff. One plans with the owner and reviews. The other implements. The implementer reviews the plan before writing code, the planner reviews the changes and the report, then writes the next handoff.

Source: Knowledge Automata, where Claude planned and reviewed each handoff and Copilot implemented it. Each side caught things the other missed: Copilot's plan reviews alone found six problems in Claude's handoffs before any code was written (rule 1). Whether the benefit comes from different tools or only from separate contexts is not known yet; Kitchen Books tests it with both agents in one tool. Principle: P5.

## Templates

The [templates/](templates/) folder holds nine files to copy into your repo. They are CC0 1.0, so you can copy them without attribution.

**Templates are a starting point** (should). Adapt them to your project, and keep the version line at the top so you can compare when a new version comes out. When your change works well, that's evidence worth bringing back here.

Source: Knowledge Automata's own files carry project-specific rules that these templates leave out. Principle: P16.

| Template | Copy it to | Serves |
| --- | --- | --- |
| [AGENTS.md](templates/AGENTS.md) | `AGENTS.md` | Start here, P8 |
| [handoff.md](templates/handoff.md) | `dev/handoffs/NNN-short-name.md` | Rules 1, 2, 3 |
| [adr.md](templates/adr.md) | `docs/decisions/NNNN-short-title.md` | Rule 2 |
| [STATUS.md](templates/STATUS.md) | `dev/STATUS.md` | Rule 6 |
| [backlog.md](templates/backlog.md) | `dev/backlog.md` | Rule 6 |
| [pull_request_template.md](templates/pull_request_template.md) | `.github/pull_request_template.md` | Rules 5, 6, 8, 11 |
| [principles-in-practice.md](templates/principles-in-practice.md) | `dev/principles-in-practice.md` | Rule 7 |
| [tool-feedback.md](templates/tool-feedback.md) | `dev/tool-feedback.md` | Rule 7 |
| [costs.md](templates/costs.md) | `dev/costs.md` | Rule 8 |

The paths are the ones Knowledge Automata uses. Any layout works if `AGENTS.md` says where things live.

## What comes next

A recipe earns its place in the book once someone else has cooked it. The next project to use these templates from day one will show which rules hold, which need to change, and which lessons are ready to become principles. Until then, this playbook stays small and honest about where its evidence comes from.
