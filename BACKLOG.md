<!--
From AI-Assisted Software Engineering templates v1.1.0 (CC0 1.0):
https://github.com/miguelmog10/ai-assisted-software-engineering/tree/v1.1.0/templates
-->

# Backlog

## Now (v1.2.0)

- **Knowledge Automata case study** in `case-studies/knowledge-automata.md`, built from an interview with Miguel and the project's own files (journal, `dev/principles-in-practice.md`, `dev/tool-feedback.md`, `dev/costs.md`). Sections: goal, setup, what worked, what failed, what it cost, and how it evolved. Raw lessons stay in Knowledge Automata; the case study links to them by commit until Knowledge Automata has a release tag, and records the handoff where it switched to the templates.
- **Kitchen Books** uses the v1.1.0 templates from handoff 001. Lessons that hold on this second project are candidates to become playbook changes or principles.
- **A second LinkedIn post** once the case study is ready.

## Experiments for Kitchen Books

- **Copilot instructions.** Is `AGENTS.md` alone enough for Copilot, or does a short `.github/copilot-instructions.md` help? Does a saved kickoff prompt (`.github/prompts/handoff-kickoff.prompt.md`) cut the copy-paste between Claude and Copilot? Log the answers in Kitchen Books' `dev/tool-feedback.md`.
- **Human and Claude time.** Log the time spent per handoff next to the agent credits in `dev/costs.md`.

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
