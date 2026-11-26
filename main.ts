// The Meeting That Should Have Been an Email — entry writer.
// Builds the one-liner from its parts, checks the 200-character cap,
// and writes it to /output/entry.txt for the judge.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";
const MAX_CHARS = 200;

// The joke, assembled from its beats so each piece earns its place:
// setup (one-line email) -> scale (45 minutes, nine people) ->
// turn lands on the last words (a slide deck explaining the line).
const beats = [
  "The one-line email got a forty-five-minute meeting,",
  "nine people,",
  "and a slide deck explaining the line.",
];
const line = beats.join(" ");

if (line.length > MAX_CHARS) {
  throw new Error(`line is ${line.length} chars, over the ${MAX_CHARS} cap`);
}
if (!line.trim() || line.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, line, "utf8");

// Round-trip check: what the judge reads must be byte-for-byte the line.
const back = readFileSync(OUT, "utf8");
if (back !== line) {
  throw new Error("round-trip mismatch: file differs from the built line");
}
if (back.endsWith("\n")) {
  throw new Error("entry must not end with a newline");
}
console.log(`wrote ${line.length} chars to ${OUT}`);
console.log(line);
