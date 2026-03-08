// src/index.ts
import { join } from "node:path";
import { fileURLToPath } from "node:url";
var __dirname2 = fileURLToPath(new URL(".", import.meta.url));
var skillDir = join(__dirname2, "..", "cachelyze-analyze");
var skillMdPath = join(skillDir, "SKILL.md");
var SKILL_NAME = "cachelyze-analyze";
var SKILL_DESCRIPTION = "Use cachelyze to get an instant, cached analysis of the current codebase instead of " + "exploring the repository from scratch.";
export {
  skillMdPath,
  skillDir,
  SKILL_NAME,
  SKILL_DESCRIPTION
};
