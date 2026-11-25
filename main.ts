// The Absurd Clause Contest — entry program (Node 22).
// Writes one original English sentence, phrased as a clause buried
// deep inside a terms-of-service agreement, to /output/entry.txt.
//
// The clause is deadpan legal boilerplate that quietly turns absurd:
// a perpetual, irrevocable licence — not to content the user uploads,
// but to the user's dreams, recurring ones included, "for product
// improvement purposes". The joke is the escalation, delivered in the
// flat voice of a real ToS.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, 158 characters, a single line.
const CLAUSE =
  "Clause 9.4: The User grants the Company a perpetual, irrevocable licence to the User's dreams, including any recurring ones, for product improvement purposes.";

// The grader mounts the output directory and runs this program as an
// unprivileged user, so the directory itself is never removed — it is
// only created if it does not already exist.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, CLAUSE + "\n", "utf8");

// Read the file back and check it against the bounty gate before
// reporting success: exactly one line of UTF-8 text, 1-200 characters,
// not only whitespace, and no control characters hiding in it.
const written = readFileSync(outPath, "utf8");
const line = written.replace(/\n$/, "");
const chars = [...line].length;
if (line.trim().length === 0) throw new Error("entry is blank");
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, gate is 1-200`);
}
if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(line)) {
  throw new Error("entry contains control characters");
}
if (written !== CLAUSE + "\n") throw new Error("read-back mismatch");
console.log(`wrote entry.txt (${chars} characters, 1 line)`);
