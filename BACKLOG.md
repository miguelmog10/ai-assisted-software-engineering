<!--
From AI-Assisted Software Engineering templates v1.2.0 (CC0 1.0):
https://github.com/miguelmog10/ai-assisted-software-engineering/tree/v1.2.0/templates
-->

# Backlog

## Now (v1.3.0)

- **Knowledge Automata case study** in `case-studies/knowledge-automata.md`, built from an interview with Miguel and the project's own files (journal, `dev/principles-in-practice.md`, `dev/tool-feedback.md`, `dev/costs.md`). Sections: goal, setup, what worked, what failed, what it cost, and how it evolved. Raw lessons stay in Knowledge Automata; the case study links to them by commit until Knowledge Automata has a release tag, and records the handoff where it switched to the templates. (Moved from v1.2.0, so Kitchen Books could start on rule 11 without waiting.)
- **Kitchen Books** uses the v1.2.0 templates from handoff 001, built entirely in Claude Code. Lessons that hold on this second project are candidates to become playbook changes or principles.
- **A second LinkedIn post** once the case study is ready.

## Experiments for Kitchen Books

- **One instruction file for every tool.** Keep `AGENTS.md` as the only source of rules. Tool-specific files (`CLAUDE.md`, `.github/copilot-instructions.md`) only point to it and hold tool settings, never rules. Does every tool pick it up, and does anything drift? If it holds, it becomes a playbook rule and a line in the AGENTS.md template. See [field-notes/claude-code.md](field-notes/claude-code.md).
- **Copilot instructions.** Is `AGENTS.md` alone enough for Copilot, or does a short `.github/copilot-instructions.md` help? Does a saved kickoff prompt (`.github/prompts/handoff-kickoff.prompt.md`) cut the copy-paste between Claude and Copilot? Log the answers in Kitchen Books' `dev/tool-feedback.md`.
- **Rule 11 inside one tool.** Run the planner and the implementer as separate Claude Code sessions. Do they catch as much as Claude and Copilot did on Knowledge Automata? This tells whether the benefit comes from different tools or only from separate contexts.
- **Claude Code against rules 1, 4 and 8.** Does plan mode replace the plan step in the handoff (rule 1)? Is verifying written files still needed when the implementer edits the repo directly (rule 4)? What is a useful cost measure on a subscription with no per-pull-request credits (rule 8)?
- **Parallel handoffs.** When two implementers work at the same time, each on its own branch or worktree, does the handoff need to say which files and folders each one owns?
- **Human and Claude time.** Log the time spent per handoff next to the agent credits in `dev/costs.md`.

## Ideas not tried yet: an overseer role

Today Miguel plays this role himself, helped by the handoffs. Nothing here is tested.

- **A project overseer.** One session above the planner and implementer pairs. It checks that parallel threads stay consistent, and at the end of each handoff proposes roadmap and backlog items for the owner to approve or reject. It builds its picture from the repo (STATUS, backlog, ADRs, handoffs), not from a long chat, so it never becomes a new single point of memory (P8). It advises; the owner decides.
- **Review triggers.** The overseer suggests when the project needs something heavier: an architecture review, a big refactoring, a security pass. It also suggests which model fits, so the most capable and expensive models show up only when they're worth it.
- **Overseer handoffs.** When the overseer's session gets too long, it hands off to a fresh one: project state, open risks and roadmap thinking. This may need its own small template.

## Later

- **Filled-in examples** next to each template, taken from a real project and redacted where needed. Until then, the case study links to Knowledge Automata's real files.
- **Product and production evidence** for each playbook rule, from a project that runs at those levels.
- **Practices Knowledge Automata recommends but hasn't tried yet:** a trailer check in CI, a session-close checklist or skill, and a changelog generated from Conventional Commits.
- **Per-file license tags** ([REUSE](https://reuse.software/)) if the folder rule for `templates/` stops being enough.
- **Checks for this repo:** a link check and an em dash check in CI.
- **A logo or personal mark** (discussed, deferred).

## Carried over from v1.0

- Lessons from an earlier handoff: chat compaction, "AI is a second opinion, not an authority", naming roles by tool, and examples for each principle. (Running logs are now playbook rule 7.)
- Principle 14's anchor quote nearly duplicates Principle 7's.
- Credit Moravec for the water and landscape analogy, and Karpathy for "vibe coding".

## Open questions

- **Handoff size.** Is there a useful size limit? Knowledge Automata's handoff 006 reached 55 KB. Too soon to set a number; linking bulky inputs (playbook rule 3) comes first.
