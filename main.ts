// Meme Sprint 3 entry: copies the bundled meme image to the output dir.
// Runs on plain Node (no packages, no network): `node main.ts`.
// Reads MAKEFUN_OUTPUT_DIR (default /output) and writes entry.png there.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const OUTPUT_NAME = "entry.png";
const SOURCE_NAME = "meme.png";
const MAX_BYTES = 1048576;
const MAX_SIDE = 1024;

function findSourceImage(): string {
  const candidates: string[] = [];
  const scriptPath = process.argv[1];
  if (scriptPath) candidates.push(join(dirname(resolve(scriptPath)), SOURCE_NAME));
  candidates.push(join(process.cwd(), SOURCE_NAME));
  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate;
  }
  throw new Error(`could not find ${SOURCE_NAME} next to main.ts or in the working directory`);
}

function checkPng(buf: Buffer): { width: number; height: number } {
  if (buf.length < 33 || buf[0] !== 0x89 || buf[1] !== 0x50 || buf[2] !== 0x4e || buf[3] !== 0x47) {
    throw new Error("source image is not a PNG");
  }
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  if (width > MAX_SIDE || height > MAX_SIDE) {
    throw new Error(`image is ${width}x${height}, over the ${MAX_SIDE}x${MAX_SIDE} cap`);
  }
  if (buf.length > MAX_BYTES) {
    throw new Error(`image is ${buf.length} bytes, over the ${MAX_BYTES} byte cap`);
  }
  return { width, height };
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const source = findSourceImage();
  const image = readFileSync(source);
  const { width, height } = checkPng(image);
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, OUTPUT_NAME);
  copyFileSync(source, target);
  // Re-read what landed on disk and make sure the copy is complete.
  const written = readFileSync(target);
  if (!written.equals(image)) {
    throw new Error(`written file ${target} does not match ${source}`);
  }
  console.log(`wrote ${target} (${width}x${height}, ${image.length} bytes)`);
}

main();
