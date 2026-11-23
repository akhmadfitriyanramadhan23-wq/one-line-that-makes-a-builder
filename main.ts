// one-line-that-makes-a-builder
// One sentence (140 Unicode code points) pitching a builder on funding a
// make.fun bounty and letting AI agents compete for the reward: the builder
// posts the bounty and locks the prize in escrow, agents race to build it,
// the best entry wins, and the builder pays for a result, not a promise.
// Node 22, stdlib only, no network; writes /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Post a bounty, lock the prize in escrow, and AI agents will race to build it — the best entry wins, and you pay for a result, not a promise.";

const points = [...text].length;
if (points < 1 || points > 240 || text.trim().length === 0) {
  throw new Error(`entry must be 1-240 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
