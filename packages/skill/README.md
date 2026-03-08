# @research-agent/skill

> **Alpha — work in progress.**

Agent skill for research — teaches AI agents how to use research effectively.

This package provides a [Agent Skill](https://agentskills.io) that helps AI coding agents understand and use research. It includes best practices, usage patterns, and integration guides.

**Website:** [research](https://research)  
**Repository:** [github.com/mateffy/research](https://github.com/mateffy/research)

---

## Installation

```sh
npm install @research-agent/skill
# or
bun add @research-agent/skill
```

---

## What's a Skill?

A "skill" is a teaching resource for AI agents. It provides:

- Usage patterns and best practices
- Integration examples  
- Common pitfalls and how to avoid them
- Configuration recommendations

When an AI agent has access to this skill, it can more effectively use research to analyze codebases.

---

## Usage

### For AI Agents

Once this package is installed in your project, AI agents can reference the skill:

```
Use the research skill to analyze this codebase.
```

The skill will guide the agent on:
- When to run research
- How to interpret results
- Best practices for cached analysis
- Integration with different harnesses (Claude, OpenCode, Codex, etc.)

### For Developers

Install this skill package alongside research:

```sh
npm install research @research-agent/skill
```

The skill is automatically available to compatible agents.

---

## Skill Contents

The skill includes:

- **Usage patterns** — When and how to use research effectively
- **CLI reference** — Quick reference for common commands
- **SDK patterns** — How to use the SDK programmatically
- **Integration guides** — Working with different AI harnesses
- **Troubleshooting** — Common issues and solutions

---

## Full Documentation

For complete documentation, see the [main README](https://github.com/mateffy/research#readme).

---

## Package Structure

| Package | Description |
|---------|-------------|
| `research` | Full package — SDK + CLI |
| `@research-agent/core` | SDK only |
| `@research-agent/cli` | CLI only |
| `@research-agent/skill` | **Agent skill** (this package) |

---

## License

MIT
