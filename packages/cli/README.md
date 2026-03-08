# @research-agent/cli

> **Alpha — work in progress.** CLI interface may change without notice.

Command-line interface for research — cached codebase analysis for AI coding agents.

This package provides the CLI for research. For programmatic SDK access, use [`@research-agent/core`](https://www.npmjs.com/package/@research-agent/core). For the full package with both CLI and SDK, see [`research`](https://www.npmjs.com/package/research).

**Website:** [research](https://research)  
**Repository:** [github.com/mateffy/research.actor](https://github.com/mateffy/research.actor)

---

## Installation

### Global (recommended)

```sh
npm install -g @research-agent/cli
# or
bun add -g @research-agent/cli
```

### Local

```sh
npm install @research-agent/cli
# or
bun add @research-agent/cli
```

---

## Quick Start

```sh
# Basic — auto-detects installed harness, uses persistent cache
research

# Targeted question about current working diff (never cached)
research --prompt "what auth changes are in progress?"

# Customize the analysis focus — stored as separate cache entry
research --system-prompt "focus on the API layer and data models"
```

---

## Usage

### Commands

```sh
# Analyze (default)
research
research analyze

# Clear all cached analyses for current repository
research clear
```

### Flags

| Flag | Short | Description |
|------|-------|-------------|
| `--harness <name>` | `-H` | Harness: `opencode`, `claude`, `codex`, `aider`, `gemini` (auto-detected if omitted) |
| `--model <name>` | `-m` | Model to pass to harness |
| `--system-prompt <text>` | `-s` | Appended to base analysis prompt |
| `--prompt <text>` | `-p` | Passed to working-changes agent (never cached) |
| `--force` | `-f` | Bypass cache and re-run full analysis |
| `--max-age <duration>` | `-a` | Max cache age: `30m`, `2h`, `7d` |
| `--json` | `-j` | Emit JSON output |
| `--list-harnesses` | `-l` | Print detected harnesses |

### Examples

```sh
# Specify harness and model
research --harness claude --model claude-opus-4-5

# Force fresh analysis
research --force

# Only use cache if younger than 2 hours
research --max-age 2h

# JSON output for scripting
research --json

# List available harnesses
research --list-harnesses

# Clear cache for this project
research clear
```

---

## Supported Harnesses

| Name | Binary |
|------|--------|
| OpenCode | `opencode` |
| Claude Code | `claude` |
| OpenAI Codex | `codex` |
| Aider | `aider` |
| Gemini CLI | `gemini` |

---

## Cache Location

Cache files are stored in `~/.cache/research/<project-key>/` — outside the repository so agents don't accidentally read them. Respects `XDG_CACHE_HOME`.

---

## Full Documentation

For SDK usage, programmatic API, and advanced examples, see the [main README](https://github.com/mateffy/research.actor#readme).

---

## Package Structure

| Package | Description |
|---------|-------------|
| `research` | Full package — SDK + CLI |
| `@research-agent/core` | SDK only |
| `@research-agent/cli` | **CLI only** (this package) |
| `@research-agent/skill` | Agent skill for teaching agents to use research |

---

## License

MIT
