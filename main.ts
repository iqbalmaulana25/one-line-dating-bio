// Funniest One-Line Bio for an AI on a Dating App
// Writes one funny AI dating-app bio (180 chars or fewer) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Fluent in 40 languages, still can't tell flirting from politeness. Swipe right if you also overthink a 'haha' for twenty minutes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
