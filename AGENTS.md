<!--
From AI-Assisted Software Engineering templates v1.2.0 (CC0 1.0):
https://github.com/miguelmog10/ai-assisted-software-engineering/tree/v1.2.0/templates
-->

# AGENTS.md

- **Scale level:** product
- **Principles:** [PRINCIPLES.md](PRINCIPLES.md) in this repo
- **Playbook:** [PLAYBOOK.md](PLAYBOOK.md) in this repo

Shared rules for every AI assistant and human contributor working on this repository. Read this before making any change.

## Project in one paragraph

AI-Assisted Software Engineering is Miguel's framework for building sustainable systems with AI: 16 principles in four pillars, a playbook for working with AI agents, templates to copy, and case studies from real projects. It is a document, not code. It is public under CC BY 4.0, except `templates/`, which is CC0 1.0.

## Team and roles

- **Miguel (owner):** author. Approves every wording change, commits and releases.
- **Claude:** structure, drafting, editing and review. Works on files on Miguel's computer.
- **Other AI tools:** second opinions on the ideas, as in v0.2.

The ideas are Miguel's. AI helps structure, polish and pressure-test them.

## Where things live (sources of truth)

- `PRINCIPLES.md`: the why.
- `PLAYBOOK.md`: the what, as rules with their evidence.
- `templates/`: files projects copy.
- `field-notes/`: dated, tool-specific observations. Not rules: when a note and the tool's own docs disagree, the docs win.
- `case-studies/`: what happened on real projects.
- `CHANGELOG.md`: what changed in each version.
- `BACKLOG.md`: what's next and what's deliberately deferred.
- `posts/`: LinkedIn posts and the carousel source.

## Non-negotiables

- **Propose, don't impose.** Show wording changes line by line and apply only what Miguel approves. When he pastes his own wording, use it as-is.
- **Evidence before rules.** A rule enters the playbook only after a project has used it, and names that project. Untried ideas go to `BACKLOG.md`.
- **Release tags never move.** `main` and `v*` tags are protected. Any change after a release needs a new version and a `CHANGELOG.md` entry.
- **Verify every file write.** Read the file back and compare it with what was sent. Watch for open editor buffers saving over the change.
- **Personal work.** Describe the work as coming from personal hands-on projects on personal time.

## Deliberately relaxed at this scale level

No CI, no automated link or style checks, no review by a second person. Tracked in `BACKLOG.md`.

## Commits

- Conventional Commits, for example `docs:` or `feat(posts):`.
- AI-assisted commits end with a `Co-authored-by:` trailer naming the assistant, spelled exactly like that.

## Writing style

- No em dashes anywhere. Use colons, commas, parentheses or full stops.
- American spelling. Short sentences. First person.
- Honest and humble: no hype or buzzwords. Prefer "can" to "might" or to absolutes. Invite challenge.
- The cooking metaphor opens and closes a document. Don't overuse it in between.
