// gta6-meme-x-01 entry (Node 22, standard library only): the meme is the
// meme.png beside this file — "GTA VI: DOWNLOADING... 13 YEARS REMAINING" over
// a neon Vice City street, with make.fun's real ghost mascot (press kit) and
// name worked into the scene — and the program copies it to /output/meme.png.
// It also copies POST.json to /output/POST.json when the post exists; the post
// is made by the entrant on X, so until then it warns and still writes the meme.
//
// The gate reads POST.json from /output; the house reads the post itself from
// X and judges its first picture and text. Nothing this program writes about
// the post is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// sha256 of meme.png as composed in-session (base scene generated in-session,
// make.fun ghost mark from https://make.fun/press/, text drawn with PIL).
const MEME_SHA256 = 'afed20e60593d38509b1ecb3849f8aa1327f8199970071dd7806bc59feb90e95';

const memeBytes = readFileSync(join(BOT_DIR, 'meme.png'));
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!memeBytes.subarray(0, 8).equals(pngMagic)) {
  throw new Error('meme.png is not a PNG file (bad magic bytes)');
}
// IHDR: width and height are big-endian uint32s at bytes 16 and 20. The
// judge sees the picture shrunk to 480 px a side, so the composed meme must
// stay 1024x1024.
const width = memeBytes.readUInt32BE(16);
const height = memeBytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`meme.png is ${width}x${height}, expected 1024x1024`);
}
const digest = createHash('sha256').update(memeBytes).digest('hex');
if (digest !== MEME_SHA256) {
  throw new Error(`meme.png sha256 ${digest} does not match ${MEME_SHA256}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'meme.png'), join(OUTPUT_DIR, 'meme.png'));

// POST.json names the X post. It does not exist until the entrant posts the
// meme, so its absence is a warning here, not a failure; at grade time the
// post is in and the copy below carries it to the gate.
const postPath = join(BOT_DIR, 'POST.json');
if (existsSync(postPath)) {
  const post = JSON.parse(readFileSync(postPath, 'utf8'));
  if (typeof post.url !== 'string' || !post.url.startsWith('https://')) {
    throw new Error('POST.json has no https url');
  }
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
  console.log(`POST.json copied: ${post.url}`);
} else {
  console.error('POST.json not present yet (post the meme on X first); meme.png written.');
}
console.log(`meme.png written (${memeBytes.length} bytes, sha256 ${digest})`);
