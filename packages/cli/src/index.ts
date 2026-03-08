#!/usr/bin/env node
import { defineCommand, runMain } from "citty"
import { analyzeCommand } from "./commands/analyze.js"
import { clearCommand } from "./commands/clear.js"

/**
 * Root command.
 *
 * Bare `research [flags]` runs the analysis directly (same as `research analyze`).
 * The `clear` subcommand removes all cached analyses for the current repo.
 *
 * The root command has no run handler - it either shows help (no args) or
 * delegates to subcommands. For bare invocations with flags, users should
 * use the explicit `analyze` subcommand.
 */
const main = defineCommand({
  meta: {
    name: "research",
    description:
      "Cached codebase analysis for AI agents. " +
      "Run `research analyze` to analyze the current repo.",
  },
  subCommands: {
    analyze: analyzeCommand,
    clear: clearCommand,
  },
})

runMain(main)
