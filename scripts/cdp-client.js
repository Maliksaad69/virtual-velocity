/* Browser-driven: find any element painting a white/opaque background inside each
   client SVG, neutralize it via inline style, serialize back, and visually verify
   ALL logos on a navy page (screenshot). Run with dev server on :3000 up. */
const http = require("http");
const { spawn } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const PORT = 9223;
const LOGO_DIR = path.join(__dirname, "..", "public", "All logo in SVG Format");

function httpGetJson(p) {
  return new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${PORT}${p}`, (res) => {
      let d = ""; res.on("data", (c) => (d += c));
      res.on("end", () => { try { resolve(JSON.parse(d)); } catch (e) { reject(e); } });
    }).on("error", reject);
  });
}
function wsConnect(wsUrl) {
  return new Promise((resolve, reject) => {
    const u = new URL(wsUrl);
    const key = Buffer.from(Math.random().toString(36).slice(2)).toString("base64");
    const req = http.get({ hostname: u.hostname, port: u.port || 80, path: u.pathname + u.search,
      headers: { Connection: "Upgrade", Upgrade: "websocket", "Sec-WebSocket-Key": key, "Sec-WebSocket-Version": "13" } });
    req.on("upgrade", (res, socket) => resolve(socket));
    req.on("error", reject);
  });
}
function encodeFrame(payload) {
  const data = Buffer.from(payload);
  const mask = Buffer.from([0x37, 0x21, 0x5a, 0x7e]);
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
      const len = buffer[1] & 0x7f; let off = 2, total = len;
      if (len === 126) { if (buffer.length < 4) return; total = buffer.readUInt16BE(2); off = 4; }
      else if (len === 127) { if (buffer.length < 10) return; total = Number(buffer.readBigUInt64BE(2)); off = 10; }
      if (buffer.length < off + total) return;
      onMessage(buffer.slice(off, off + total).toString("utf8"));
      buffer = buffer.slice(off + total);
    }
  };
}

module.exports = { httpGetJson, wsConnect, encodeFrame, makeFrameParser, LOGO_DIR };
