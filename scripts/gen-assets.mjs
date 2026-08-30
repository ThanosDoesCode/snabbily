// Generates raster brand assets (OG image + app icons) from inline SVG.
// Run with: node scripts/gen-assets.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const pub = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

const BONE = '#F4EFE7';
const INK = '#1C1815';
const CORAL = '#E4522C';
const SERIF = "Georgia, 'Times New Roman', 'DejaVu Serif', serif";
const SANS = "'Helvetica Neue', Arial, 'DejaVu Sans', sans-serif";

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${BONE}"/>
  <g font-family="${SANS}">
    <text x="80" y="110" font-size="34" font-weight="600" fill="${INK}" font-family="${SERIF}">Snabbily<tspan fill="${CORAL}">.</tspan></text>
    <text x="1120" y="110" font-size="20" letter-spacing="3" text-anchor="end" fill="#6E6459">WEBSITES FOR SERVICE BUSINESSES · GREECE</text>
  </g>
  <g font-family="${SERIF}" fill="${INK}">
    <text x="78" y="300" font-size="92" font-weight="500">Your website should</text>
    <text x="78" y="404" font-size="92" font-weight="500">bring you <tspan>business.</tspan></text>
  </g>
  <path d="M410 424 C 500 416, 640 414, 812 420" stroke="${CORAL}" stroke-width="8" fill="none" stroke-linecap="round"/>
  <line x1="80" y1="520" x2="1120" y2="520" stroke="#DDD4C5" stroke-width="1"/>
  <text x="80" y="565" font-size="26" font-family="${SANS}" fill="#4A423B">Design · Copy · SEO · Booking · Ongoing care</text>
</svg>`;

const icon = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${INK}"/>
  <text x="30" y="45" font-family="${SERIF}" font-size="40" font-weight="600" fill="${BONE}" text-anchor="middle">S</text>
  <circle cx="48" cy="42" r="4" fill="${CORAL}"/>
</svg>`;

async function run() {
  await sharp(Buffer.from(og)).png().toFile(join(pub, 'og-image.png'));
  await sharp(Buffer.from(icon(512))).resize(512, 512).png().toFile(join(pub, 'icon-512.png'));
  await sharp(Buffer.from(icon(180))).resize(180, 180).png().toFile(join(pub, 'apple-touch-icon.png'));
  console.log('Generated og-image.png, icon-512.png, apple-touch-icon.png');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
