/* One-time asset fix: strip baked-in white backgrounds from the client logo SVGs.
   Each "SVG" is a wrapper around one embedded base64 PNG raster whose pixels
   include an opaque white canvas. We decode the PNG, flood-fill white pixels
   connected to the image borders to transparent (tolerance-based), trim the
   empty margins, and rewrite the SVG around the cleaned PNG. */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const DIR = path.join(
  "/home/saad/Desktop/github data/virtualvelocity",
  "public/All logo in SVG Format"
);
const BACKUP = path.join(DIR, "_originals_backup");
const TOLERANCE = 18; // 0-255 per-channel distance from pure white
const MAX_DIM = 360; // downscale keeps repo/http payload sane; cards render <= ~110px

function collectWhiteFromEdges(data, w, h) {
  const visited = new Uint8Array(w * h);
  const stack = [];
  const isWhite = (idx) => {
    const o = idx * 4;
    const a = data[o + 3];
    if (a !== 0 && a < 255) return false; // already semi-transparent: stop here
    return (
      255 - data[o] <= TOLERANCE &&
      255 - data[o + 1] <= TOLERANCE &&
      255 - data[o + 2] <= TOLERANCE
    );
  };
  for (let x = 0; x < w; x++) {
    if (isWhite(x)) { stack.push(x); visited[x] = 1; }
    const b = (h - 1) * w + x;
    if (!visited[b] && isWhite(b)) { stack.push(b); visited[b] = 1; }
  }
  for (let y = 0; y < h; y++) {
    const l = y * w;
    if (!visited[l] && isWhite(l)) { stack.push(l); visited[l] = 1; }
    const r = y * w + (w - 1);
    if (!visited[r] && isWhite(r)) { stack.push(r); visited[r] = 1; }
  }
  while (stack.length) {
    const idx = stack.pop();
    data[idx * 4 + 3] = 0;
    const x = idx % w;
    const y = (idx - x) / w;
    const push = (nx, ny) => {
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) return;
      const n = ny * w + nx;
      if (!visited[n] && isWhite(n)) { visited[n] = 1; stack.push(n); }
    };
    push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1);
  }
  let cleared = 0;
  for (let i = 0; i < w * h; i++) if (visited[i]) cleared++;
  return cleared;
}

async function processFile(file) {
  const src = path.join(DIR, file);
  const svg = fs.readFileSync(src, "utf8");
  const m = svg.match(/data:image\/png;base64,([A-Za-z0-9+/=\s]+)"/);
  if (!m) return `${file}: SKIP (no embedded png)`;
  const pngBuf = Buffer.from(m[1], "base64");

  const { data, info } = await sharp(pngBuf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const cleared = collectWhiteFromEdges(data, info.width, info.height);

  let out = sharp(Buffer.from(data.buffer, 0, data.length), {
    raw: { width: info.width, height: info.height, channels: 4 },
  });
  const cleaned = await out.png().toBuffer();
  const meta = await sharp(cleaned).metadata();
  let finalBuf = cleaned;
  let vw = meta.width, vh = meta.height;
  // Trim fully-transparent borders, then downscale to <= MAX_DIM.
  const trimmed = await sharp(cleaned)
    .trim({ background: { r: 255, g: 255, b: 255, alpha: 0 }, threshold: 0 })
    .png()
    .toBuffer();
  const tmeta = await sharp(trimmed).metadata();
  if (tmeta.width && tmeta.height) {
    const scale = Math.min(1, MAX_DIM / Math.max(tmeta.width, tmeta.height));
    finalBuf = await sharp(trimmed)
      .resize(Math.round(tmeta.width * scale), Math.round(tmeta.height * scale), { fit: "inside" })
      .png({ compressionLevel: 9 })
      .toBuffer();
    const fmeta = await sharp(finalBuf).metadata();
    vw = fmeta.width; vh = fmeta.height;
  }

  const b64 = finalBuf.toString("base64");
  const newSvg =
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${vw}" height="${vh}" viewBox="0 0 ${vw} ${vh}">\n` +
    `  <image width="${vw}" height="${vh}" xlink:href="data:image/png;base64,${b64}"/>\n` +
    `</svg>\n`;
  fs.writeFileSync(src, newSvg);
  return `${file}: OK (${info.width}x${info.height}, cleared ${cleared}px, out ${vw}x${vh}, ${(b64.length / 1024).toFixed(0)}KB)`;
}

(async () => {
  const only = process.argv[2]; // optional: process a single file for testing
  if (!fs.existsSync(BACKUP)) fs.mkdirSync(BACKUP);
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".svg") && (!only || f === only));
  for (const f of files) {
    const backup = path.join(BACKUP, f);
    if (!fs.existsSync(backup)) fs.copyFileSync(path.join(DIR, f), backup);
    try {
      console.log(await processFile(f));
    } catch (e) {
      console.log(`${f}: ERROR ${e.message}`);
    }
  }
  console.log("DONE");
})();
