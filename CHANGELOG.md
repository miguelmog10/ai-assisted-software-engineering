# Changelog

How the thinking in this framework evolves, recorded as it happens.

## [1.2.0] - 2026-11-01

**A second pair of eyes, and field notes.** The principles are unchanged.

- `PLAYBOOK.md`: rule 11, "Review with a second pair of eyes" (should, P5). Someone other than the author reviews the plan and the changes: another agent, a fresh session or a human. Source: the Claude and Copilot pairs on Knowledge Automata.
- `field-notes/`: dated, tool-specific notes kept apart from the rules, because they go out of date. First note: how Claude Code reads `AGENTS.md` and `CLAUDE.md`.
- `BACKLOG.md`: new Kitchen Books experiments (one instruction file for every tool, rule 11 inside one tool, Claude Code against rules 1, 4 and 8, parallel handoffs) and untested ideas for a project overseer role. The Knowledge Automata case study moves to v1.3.0.
- Templates: version lines and links point to v1.2.0. The pull request template adds a checkbox for rule 11.
- `AGENTS.md`: the commit trailer is spelled `Co-authored-by:`, matching the templates. `field-notes/` added to "Where things live". README lists the new folder.

## [1.1.0] - 2026-10-31

**Playbook and templates for working with AI agents.** The principles are unchanged; this release adds a practical layer on top of them, drawn from Knowledge Automata.

- `PLAYBOOK.md`: ten rules with *must* or *should*, each naming its source and the principle it serves. Every rule is tested at prototype level; product and production are marked "not yet tested". Rules say what must be true, not how to do it.
- `templates/`: nine templates to copy (AGENTS.md, handoff, ADR, STATUS, backlog, pull request template, principles in practice, tool feedback, costs). Each starts with the version it came from. The folder is CC0 1.0; the rest of the repo stays CC BY 4.0.
- `AGENTS.md` and `BACKLOG.md` for this repo, built from the templates.
- README lists the new files and the license split.
- Markdown now counts in GitHub's language stats (`.gitattributes`, committed after v1.0.0).

## [1.0.0] - 2026-10-25

**Version 1.0 frozen.** The full document as it will be published:

- Introduction built around the cooking analogy (vibe cooking vs cooking for others), on top of the reframed thesis.
- 16 principles across four pillars, including the "Scale Deliberately" section (prototype, product, production) and refinements from the first real-world use: AI reviewing AI outputs (P5), small increments tied to version control and pull requests (P6), handoffs as files in the repo, with tickets and knowledge-base pages as their equivalents (P8), cost as evidence (P11), documentation priorities and uneven standards (P13), and the water-level analogy for rising AI capabilities (closing).
- American spelling throughout; formatting cleaned up for GitHub Markdown, with a jump link to the four pillars.
- Launch carousel added under `posts/carousel/`, versioned with its source.
- First living proof: a light version of these principles is already in use on a real project. First case study is in the oven. More soon.

## [0.4.0] - 2026-10-22

- New introduction built around the cooking analogy (vibe cooking vs cooking for others) on top of the reframed thesis.
- Condensed LinkedIn launch post finalized.
- Repository restructured: README, CHANGELOG, CC BY 4.0 LICENSE.

## [0.3.0] - 2026-09-27

**Thesis reframed.** The document is no longer framed as "principles for using AI to write software." It is now about what AI changes in the economics and accessibility of engineering itself:

- AI lowers the barrier between engineering judgment and hands-on implementation.
- If AI makes implementation and many engineering activities dramatically cheaper, engineering discipline itself becomes dramatically more scalable.
- Mirror image: AI amplifies good engineering and bad engineering alike, so the principles are guide rails, not restrictions.

New introduction written around the reframed thesis.

## [0.2.0] - 2026-09-24

Framework converged from 14 to **16 principles** (worked through with Gemini and ChatGPT):

- **Externalize Memory** added (Pillar II, #8): shared context needs a durable source of truth. "If it isn't recorded in the system, it doesn't exist."
- **Distrust the Happy Path** added (Pillar III, #10): security and robustness as deliberate practice, with concrete controls.
- **Delete ruthlessly merged into #16, "Reuse What Compounds, Delete What Doesn't"** (Pillar IV): reuse and deletion as two halves of one principle. Experiment disposability also folded into #6 (Small Increments), whose anchor became "Experiment more. Accumulate less."

Author's note on the document added: developed with the help of AI tools; the experiences, observations, decisions, and perspective are the author's own.

## [0.1.0] - 2026-09-22

Initial draft: 14 principles organized under four pillars (Think Before You Generate, Generate Responsibly, Prove It Works, Build for the Future), written after hands-on experimentation with AI coding tools.
