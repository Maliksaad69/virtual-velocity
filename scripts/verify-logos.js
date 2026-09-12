/* Visual verification: screenshot original-vs-processed logos via CDP, then
   pixel-sample the shot with sharp to prove transparency works. */
const http = require("http");
const { spawn } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");
const sharp = require("sharp");

const PORT = 9224;
const TEST_PORT = 8901;
const HOST = "127.0.0.1";

function httpGetJson(p) {
  return new Promise((resolve, reject) => {
    http.get(`http://${HOST}:${PORT}${p}`, (res) => {
      let d = "";
      res.on("data", (c) => (d += c));
      res.on("end", () => { try { resolve(JSON.parse(d)); } catch (e) { reject(e); } });
    }).on("error", reject);
  });
}

function wsConnect(wsUrl) {
  return new Promise((resolve, reject) => {
    const u = new URL(wsUrl);
    const key = Buffer.from(Math.random().toString(36).slice(2)).toString("base64");
    const req = http.get({
      hostname: u.hostname,
      port: u.port || 80,
      path: u.pathname + u.search,
      headers: { Connection: "Upgrade", Upgrade: "websocket", "Sec-WebSocket-Key": key, "Sec-WebSocket-Version": "13" },
    });
    req.on("upgrade", (res, socket) => resolve(socket));
    req.on("error", reject);
  });
}

function encodeFrame(payload) {
  const data = Buffer.from(payload);
  const mask = Buffer.from([0x33, 0x4d, 0x61, 0x11]);
  let header;
  if (data.length < 126) header = Buffer.from([0x81, 0x80 | data.length]);
  else if (data.length < 65536) { header = Buffer.alloc(4); header[0] = 0x81; header[1] = 0x80 | 126; header.writeUInt16BE(data.length, 2); }
  else { header = Buffer.alloc(10); header[0] = 0x81; header[1] = 0x80 | 127; header.writeBigUInt64BE(BigInt(data.length), 2); }
  const masked = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i++) masked[i] = data[i] ^ mask[i % 4];
  return Buffer.concat([header, mask, masked]);
}

function makeFrameParser() {
  let buffer = Buffer.alloc(0);
  return function (chunk, onMessage) {
    buffer = Buffer.concat([buffer, chunk]);
    for (;;) {
      if (buffer.length < 2) return;
      const len = buffer[1] & 0x7f;
      let off = 2, total = len;
      if (len === 126) { if (buffer.length < 4) return; total = buffer.readUInt16BE(2); off = 4; }
      else if (len === 127) { if (buffer.length < 10) return; total = Number(buffer.readBigUInt64BE(2)); off = 10; }
      if (buffer.length < off + total) return;
      onMessage(buffer.slice(off, off + total).toString("utf8"));
      buffer = buffer.slice(off + total);
    }
  };
}

async function main() {
  const dir = "/home/saad/Desktop/github data/virtualvelocity/public/All logo in SVG Format";
  const backup = path.join(dir, "_originals_backup");
  const files = ["Anta logo.svg", "andaz.svg", "pizza hut.svg", "TSL.svg"];

  const tile = (src, label) =>
    `<figure style="margin:0"><img src="${src}" style="width:240px;display:block"/><figcaption style="color:#9ab;font:11px sans-serif">${label}</figcaption></figure>`;
  const rows = files
    .map((f) => {
      const origSvg = fs.readFileSync(path.join(backup, f)).toString("base64");
      const newSvg = fs.readFileSync(path.join(dir, f)).toString("base64");
      return (
        `<div style="display:flex;gap:24px;align-items:center;margin-bottom:8px">` +
        tile(`data:image/svg+xml;base64,${origSvg}`, f + " ORIGINAL") +
        tile(`data:image/svg+xml;base64,${newSvg}`, f + " PROCESSED") +
        `</div>`
      );
    })
    .join("");
  const html = `<!doctype html><body style="margin:0;background:#1a3a5c;padding:24px">${rows}</body>`;

  const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  });
  await new Promise((r) => server.listen(TEST_PORT, HOST, r));

  const profile = fs.mkdtempSync(path.join(os.tmpdir(), "cdpv-"));
  const chrome = spawn("/usr/bin/chromium", [
    "--headless=new", "--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage",
    `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, "about:blank",
  ], { stdio: "ignore" });

  let up = false;
  for (let i = 0; i < 30; i++) {
    try { await httpGetJson("/json/version"); up = true; break; } catch { await new Promise((r) => setTimeout(r, 500)); }
  }
  if (!up) { console.log("CHROME_NEVER_STARTED"); chrome.kill("SIGKILL"); process.exit(1); }

  try {
    const targets = await httpGetJson("/json/list");
    const page = targets.find((t) => t.type === "page");
    const socket = await wsConnect(page.webSocketDebuggerUrl);
    let msgId = 0;
    const pending = new Map();
    const parse = makeFrameParser();
    socket.on("data", (chunk) =>
      parse(chunk, (raw) => {
        const msg = JSON.parse(raw);
        if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
      })
    );
    const send = (method, params = {}) => new Promise((resolve) => {
      const id = ++msgId;
      pending.set(id, resolve);
      socket.write(encodeFrame(JSON.stringify({ id, method, params })));
    });
    await send("Page.enable");
    await send("Runtime.enable");
    await send("Emulation.setDeviceMetricsOverride", { width: 1200, height: 1300, deviceScaleFactor: 1, mobile: false });
    await send("Page.navigate", { url: `http://${HOST}:${TEST_PORT}/` });
    await new Promise((r) => setTimeout(r, 2500));
    const shot = await send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(
      "/home/saad/Desktop/github data/virtualvelocity/.logo-verify.png",
      Buffer.from(shot.result.data, "base64")
    );
    console.log("screenshot saved");
  } finally {
    chrome.kill("SIGKILL");
    server.close();
    try { fs.rmSync(profile, { recursive: true, force: true }); } catch {}
  }

  // Pixel analysis: processed-tile corners must show the page background
  // (#1a3a5c → transparency works); original-tile corners must be white (the bug).
  const { data, info } = await sharp("/home/saad/Desktop/github data/virtualvelocity/.logo-verify.png")
    .raw()
    .toBuffer({ resolveWithObject: true });
  const px = (x, y) => {
    const o = (y * info.width + x) * info.channels;
    return [data[o], data[o + 1], data[o + 2]];
  };
  const near = (a, b, tol = 12) => a.every((v, i) => Math.abs(v - b[i]) <= tol);
  const BG = [26, 58, 92];
  const WHITE = [255, 255, 255];
  const tileW = 240, gap = 24, pad = 24;
  const y = pad + 6;
  let procBg = 0, procTot = 0, origWhite = 0, origTot = 0;
  for (let dx = 6; dx <= tileW - 6; dx += 12) {
    if (near(px(pad + tileW + gap + dx, y), BG)) procBg++;
    procTot++;
    if (near(px(pad + dx, y), WHITE, 20)) origWhite++;
    origTot++;
  }
  console.log(`PROCESSED tiles: ${procBg}/${procTot} top-edge samples match page bg (expect ALL)`);
  console.log(`ORIGINAL tiles: ${origWhite}/${origTot} top-edge samples are white (bug evidence)`);
}
main().catch((e) => { console.error("VERIFY_ERROR", e.message); process.exit(1); });
