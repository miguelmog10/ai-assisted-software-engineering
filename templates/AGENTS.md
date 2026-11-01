<!--
From AI-Assisted Software Engineering templates v1.2.0 (CC0 1.0):
https://github.com/miguelmog10/ai-assisted-software-engineering/tree/v1.2.0/templates
Keep the two lines above. Delete the rest of this comment once you have adapted the file.

Use it: at the root of the repo. Every agent and contributor reads it before making a change.
Filled in by: the owner, often with an AI assistant drafting. Rarely changed after that.
Serves: Scale Deliberately and P8 (Externalize Memory). Playbook: "Start here".
Replace everything in [brackets]. Keep it to the rules that apply to every change.
-->

# AGENTS.md

- **Scale level:** [prototype | product | production]
- **Principles:** [AI-Assisted Software Engineering v1.2.0](https://github.com/miguelmog10/ai-assisted-software-engineering/blob/v1.2.0/PRINCIPLES.md)
- **Playbook:** [Working with AI Agents v1.2.0](https://github.com/miguelmog10/ai-assisted-software-engineering/blob/v1.2.0/PLAYBOOK.md)

Shared rules for every AI assistant and human contributor working on this repository. Read this before making any change.

## Project in one paragraph

[What the project is, who it is for, and what it is not.]

## Team and roles

- **[Owner name] (owner):** approves plans, decisions and merges.
- **[Assistant] ([where it runs]):** [for example discovery, design, review].
- **[Implementer] ([where it runs]):** [for example planning and implementation].

AI generates and proposes. The owner approves plans and merges.

## Where things live (sources of truth)

- `AGENTS.md`: how we work.
- `dev/STATUS.md`: where we are now. Read it first at the start of every session; update it at the end.
- `dev/backlog.md`: what's next, what's later, open questions, technical debt.
- `dev/handoffs/`: every handoff, committed before implementation starts.
- `docs/decisions/`: why it is built this way (ADRs).
- `dev/principles-in-practice.md` and `dev/tool-feedback.md`: running logs.
- `dev/costs.md`: what each pull request cost.

Nothing important should exist only in a chat session.

## Non-negotiables

- Plan first: the implementer shares a plan and waits for the owner's approval before writing files.
- Write decisions down: in the handoff, and as a short ADR when they shape the design.
- Verify files one tool writes for another before committing them.
- Real runs (paid APIs, external systems) need the owner's go.
- No secrets, keys or personal data in the repo, ever.
- [Project-specific rules: architecture boundaries, validation, testing.]

## Deliberately relaxed at this scale level

[What this project does not do yet, and where it is tracked (for example `dev/backlog.md`, *Later*). A relaxed rule is a decision, not drift.]

## Definition of done (per change)

[Tests pass, checks pass, docs updated in the same change, `dev/STATUS.md` and `dev/backlog.md` updated, new decisions captured as ADRs.]

## Commits, branches and pull requests

- Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `chore:`, `ci:`). Messages explain *why*, not only *what*.
- AI-assisted commits end with a `Co-authored-by:` trailer. Copy it from this block so it stays intact:

  ```
  Co-authored-by: [Assistant name] <[address]>
  ```
- Never commit directly to `main`. One short-lived branch per piece of work, for example `feat/short-name`.
- Fill in `.github/pull_request_template.md`.

## Running logs (everyone contributes)

- `dev/principles-in-practice.md`: when a principle shaped a decision, helped the team or had to bend.
- `dev/tool-feedback.md`: when a tool, SDK or doc was confusing, missing something or surprisingly good.

## Writing style

[Plain, concise English, plus any project terms and rules.]
