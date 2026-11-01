<!--
From AI-Assisted Software Engineering templates v1.2.0 (CC0 1.0):
https://github.com/miguelmog10/ai-assisted-software-engineering/tree/v1.2.0/templates
Keep the two lines above. Delete the rest of this comment once you have adapted the file.

Use it: for one scoped piece of work handed from one team member to another, for example
from the agent that designed it to the agent that implements it. Save it as
dev/handoffs/NNN-short-name.md and commit it before implementation starts.
A handoff is roughly what many teams call an epic, or a well-written ticket. If your team
tracks work in a tool such as Jira or GitHub Issues, an epic or ticket can do this job
instead, as long as agents can read it (playbook rule 3).
Filled in by: the designer (human or AI), approved by the owner.
Serves: P8 (Externalize Memory), P4 (Maintain Traceability), P1 (Design Before Prompting).
Playbook: rules 1, 2 and 3.
Link bulky inputs (sample files, prompts, long examples) instead of pasting them in.
Delete sections that don't apply.
-->

# Handoff NNN: [short name]

- **From:** [designer and role]
- **To:** [implementer and role]
- **Owner and approver:** [owner]
- **Date:** YYYY-MM-DD
- **Branch:** `[type/short-name]`
- **Scope:** [one or two sentences: what this handoff covers, and the closest things it does not]

---

## 1. Context

[Where the work stands and why this piece comes next.]

What already exists and must be reused, not rebuilt:

- [module, file or decision, and why it matters here]

Read `AGENTS.md`, `dev/STATUS.md` and [ADRs, docs] before planning.

**What [owner] and [designer] decided (YYYY-MM-DD):**

1. **[Decision]:** [what was decided and why].

**[Designer]'s proposals (the owner confirms them when approving the plan):**

- [proposal and reason]

**Already committed on this branch:** [files, for example this handoff]. Do not modify them. If you find a problem in this handoff, raise it in your plan.

## 2. How to work on this task

1. **Plan first.** Read this whole document, then reply with a short plan: files to create or change, anything here that does not fit the existing code, and the commit sequence. **Wait for the owner's approval** before writing files.
2. Implement in small commits, with tests in the same commit as the code they cover.
3. Real runs (paid APIs, external systems) happen only after review and the owner's go.
4. If anything here is ambiguous or seems wrong, ask instead of guessing.
5. Finish by updating `dev/STATUS.md` and `dev/backlog.md`, and report what you did.

## 3. Agreed design

[The design, decided before this file was written. Diagrams and worked examples help.]

## 4. Target structure

```
[files and folders to create or change]
```

## 5. Examples

[Inputs and expected outputs, or links to sample files.]

## 6. Requirements

[Per module or per area: what must be true when it's done.]

## 7. Real runs

[If the work calls a real service: what runs, the budget, who approves, and where the output is committed. Otherwise: "No real run needed."]

## 8. Documentation changes

- New ADRs (full text) and amendments.
- `dev/backlog.md`: [exact edits].
- `dev/principles-in-practice.md` and `dev/tool-feedback.md`: entries as they come up.
- `dev/STATUS.md`: updated at the end.

## 9. Suggested commit sequence

1. `[type: message]`

Suggested pull request title: `[type: title (handoff NNN)]`.

## 10. Tests

[What is tested and how. Note anything tests must never do, such as calling the network.]

## 11. Done when

- [checks pass, docs updated, STATUS updated, report delivered]

## 12. Out of scope

[What this handoff deliberately leaves for later.]
