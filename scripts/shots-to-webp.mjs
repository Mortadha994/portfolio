// Convert public/shots/*.png to WebP and drop the PNGs.
// Screenshots are the page's only real weight; WebP cuts them by ~2/3.
//
//   node scripts/shots-to-webp.mjs
//
// Re-runnable: PNGs already converted are simply gone, so it no-ops.

import { readdir, stat, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const DIR = 'public/shots';
const MAX_WIDTH = 1600; // nothing renders wider than ~30rem on the page

const files = (await readdir(DIR)).filter((f) => f.endsWith('.png'));

if (files.length === 0) {
  console.log('No PNGs left to convert.');
  process.exit(0);
}

let before = 0;
let after = 0;

for (const file of files) {
  const src = join(DIR, file);
  const dest = src.replace(/\.png$/, '.webp');

  const { size: inSize } = await stat(src);
  await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(dest);
  const { size: outSize } = await stat(dest);

  await unlink(src);

  before += inSize;
  after += outSize;
  const pct = Math.round((1 - outSize / inSize) * 100);
  console.log(
    `${file.padEnd(24)} ${(inSize / 1024).toFixed(0).padStart(5)}K -> ${(outSize / 1024).toFixed(0).padStart(5)}K  (-${pct}%)`
  );
}

console.log(
  `\nTotal ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB ` +
    `(-${Math.round((1 - after / before) * 100)}%)`
);
console.log('Remember: references in src/data/site.ts must say .webp');
