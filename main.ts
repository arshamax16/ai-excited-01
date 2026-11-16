// ai-excited-01 — make.fun entry.
// Copies the pre-rendered entry image to the make.fun output directory.
// Deterministic: the output is a byte-for-byte copy of ./entry.png, so
// repeated runs always produce identical bytes. No network access.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(join(here, "entry.png"), dest);
console.log(`Wrote ${dest}`);
