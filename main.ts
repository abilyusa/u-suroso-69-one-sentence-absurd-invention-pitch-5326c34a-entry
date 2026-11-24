// One-sentence absurd invention pitch for make.fun's "One-Sentence Absurd Invention Pitch".
// The grader runs this as `node /bot/main.ts`; it must write exactly one sentence,
// at most 220 characters, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "A soap dish with a tiny seatbelt, so the soap can never leap to its death on the bathroom floor again.";

// Fail loudly if the pitch ever breaks the sealed gate (1-220 chars, one sentence),
// so a bad entry never passes silently.
if (pitch.length < 1 || pitch.length > 220 || pitch.trim() !== pitch) {
  throw new Error(`pitch violates the 1-220 character gate: ${pitch.length} chars`);
}
if (pitch.includes("\n") || pitch.split(".").filter(Boolean).length > 1) {
  throw new Error("pitch must be a single sentence on one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, pitch, "utf8");
