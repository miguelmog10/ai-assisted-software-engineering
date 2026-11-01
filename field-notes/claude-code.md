# Claude Code

- **Last checked:** 2026-11-01, against the [Claude Code docs on project instructions](https://code.claude.com/docs/en/claude-md).
- **Used on:** none yet. Kitchen Books is the first project.

## Instruction files: AGENTS.md and CLAUDE.md

The playbook asks every project to keep its rules in `AGENTS.md`. Here is how Claude Code finds it.

- **Claude Code reads `AGENTS.md` on its own**, from version 2.1.277, when the repo has no `CLAUDE.md`. No import, symlink or setting needed.
- **Any `CLAUDE.md` turns that off by default.** That includes `.claude/CLAUDE.md` and a personal, uncommitted `CLAUDE.local.md`, in the working folder or any folder above it. One contributor's local file can silently stop Claude from reading the team's `AGENTS.md`.
- **Some sessions can't read `AGENTS.md` directly**, for example older versions or some cloud providers.
- **The robust option is a committed `CLAUDE.md` that imports `AGENTS.md`:**

  ```
  @AGENTS.md
  ```

  The import works in every session, never loads `AGENTS.md` twice, and survives a contributor's `CLAUDE.local.md`. Claude-specific settings can go below the import. Rules stay in `AGENTS.md`.
- **Don't write "read AGENTS.md" in words.** Claude sees the file only if it decides to open it. Use the `@` import instead.

## To try on Kitchen Books

Open questions, not findings yet. Results go to Kitchen Books' `dev/tool-feedback.md` first, and back here once they hold.

- **Plan mode and rule 1.** Does plan mode replace the "reply with a plan and wait" step in the handoff?
- **Rule 4 inside one tool.** When the implementer edits the repo directly, is verifying written files still needed?
- **Rule 8 on a subscription.** With no per-pull-request credits, what is a useful cost measure?
- **Rule 11 inside one tool.** Does a planner session and an implementer session, both in Claude Code, catch as much as Claude plus Copilot did?
