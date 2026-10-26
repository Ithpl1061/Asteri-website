// Fails if the source refers to a file under public/ that does not exist.
// Catches the review's C1/C2 problem (assets missing from the repo) before it reaches a deploy.
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SOURCE_DIRS = ["src"];
const PUBLIC_DIR = join(ROOT, "public");
const ASSET_PATH =
  /["'`(](\/[^"'`()\s?#]+?\.(?:png|jpe?g|webp|gif|svg|ico|mp4|otf|woff2?|ttf))["'`)]/g;

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, files);
    else if (/\.(tsx?|jsx?|css)$/.test(name)) files.push(path);
  }
  return files;
}

const missing = [];
let checked = 0;
for (const dir of SOURCE_DIRS) {
  for (const file of walk(join(ROOT, dir))) {
    const text = readFileSync(file, "utf8");
    for (const match of text.matchAll(ASSET_PATH)) {
      const assetPath = decodeURIComponent(match[1]);
      checked++;
      if (!existsSync(join(PUBLIC_DIR, assetPath))) {
        missing.push(`${relative(ROOT, file)}: ${match[1]}`);
      }
    }
  }
}

if (missing.length > 0) {
  console.error(`Missing public assets (${missing.length}):\n  ${missing.join("\n  ")}`);
  process.exit(1);
}
console.log(`All ${checked} asset references exist in public/.`);
