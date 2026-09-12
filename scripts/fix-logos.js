/* Fix pass: detect + neutralize white backgrounds inside each client SVG,
   serialize changed files back to disk. Run with dev server on :3000 up. */
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const { httpGetJson, wsConnect, encodeFrame, makeFrameParser, LOGO_DIR } = require("./cdp-client");

async function main() {
  const files = fs.readdirSync(LOGO_DIR).filter((f) => f.toLowerCase().endsWith(".svg")).sort();
  const profile = fs.mkdtempSync(require("os").tmpdir() + "/cdp-");
  const chrome = spawn("/usr/bin/chromium", ["--headless=new", "--no-sandbox", "--disable-gpu",
    "--disable-dev-shm-usage", "--remote-debugging-port=9223", `--user-data-dir=${profile}`, "about:blank"], { stdio: "ignore" });
  let up = false;
  for (let i = 0; i < 30; i++) { try { await httpGetJson("/json/version"); up = true; break; } catch { await new Promise((r) => setTimeout(r, 500)); } }
  if (!up) { console.log("CHROME_NEVER_STARTED"); chrome.kill("SIGKILL"); process.exit(1); }

  try {
    const targets = await httpGetJson("/json/list");
    const page = targets.find((t) => t.type === "page");
    const socket = await wsConnect(page.webSocketDebuggerUrl);
    let msgId = 0; const pending = new Map();
    const parse = makeFrameParser();
    socket.on("data", (chunk) => parse(chunk, (raw) => {
      const msg = JSON.parse(raw);
      if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
    }));
    const send = (method, params = {}) => new Promise((resolve) => {
      const id = ++msgId; pending.set(id, resolve);
      socket.write(encodeFrame(JSON.stringify({ id, method, params })));
    });
    const evalJs = async (expr) => {
      const res = await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true });
      if (res.result?.exceptionDetails) throw new Error("EVAL: " + JSON.stringify(res.result.exceptionDetails).slice(0, 300));
      return res.result?.result?.value;
    };

    await send("Page.enable");
    await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
    await send("Page.navigate", { url: "http://localhost:3000/" });
    await new Promise((r) => setTimeout(r, 3000));

    const fixes = await evalJs(`(async () => {
      const files = ${JSON.stringify(files)};
      const out = {};
      for (const f of files) {
        const url = '/All%20logo%20in%20SVG%20Format/' + encodeURIComponent(f);
        const text = await fetch(url).then((r) => r.text());
        const host = document.createElement('div');
        host.style.cssText = 'position:fixed;left:-9999px;top:0;width:300px;height:300px;';
        host.innerHTML = text;
        const svg = host.querySelector('svg');
        if (!svg) { out[f] = { error: 'no svg' }; continue; }
        document.body.appendChild(host);
        try {
          const vb = svg.viewBox.baseVal;
          const hasVB = vb && vb.width > 0;
          const W = hasVB ? vb.width : (svg.clientWidth || 300);
          const H = hasVB ? vb.height : (svg.clientHeight || 300);
          const isWhiteish = (c) => {
            if (!c || c === 'none' || c === 'transparent') return false;
            const m = c.match(/rgba?\\(([\\d.]+),\\s*([\\d.]+),\\s*([\\d.]+)(?:,\\s*([\\d.]+))?\\)/);
            if (!m) return false;
            const a = m[4] === undefined ? 1 : parseFloat(m[4]);
            if (a < 0.15) return false;
            return +m[1] > 225 && +m[2] > 225 && +m[3] > 225;
          };
          const changed = [];
          const svgCS = getComputedStyle(svg);
          if (isWhiteish(svgCS.backgroundColor) || svgCS.backgroundImage !== 'none') {
            svg.style.setProperty('background', 'transparent', 'important');
            changed.push('root-bg');
          }
          svg.querySelectorAll('rect,circle,ellipse,path,polygon,polyline,line,g,image,use').forEach((el) => {
            let bb; try { bb = el.getBBox(); } catch { return; }
            if (!bb || bb.width <= 0 || bb.height <= 0) return;
            const covW = bb.width / W, covH = bb.height / H;
            if (covW < 0.92 || covH < 0.92) return;
            let cs; try { cs = getComputedStyle(el); } catch { return; }
            const fillW = isWhiteish(cs.fill);
            const strokeW = isWhiteish(cs.stroke);
            if (fillW || strokeW) {
              if (fillW) el.style.setProperty('fill', 'none', 'important');
              if (strokeW) el.style.setProperty('stroke', 'none', 'important');
              changed.push(el.tagName + '@' + Math.round(covW * 100) + 'x' + Math.round(covH * 100) + (fillW ? 'f' : 's'));
            }
          });
          out[f] = changed.length
            ? { changed, xml: new XMLSerializer().serializeToString(svg) }
            : { changed: [] };
          host.remove();
        } catch (e) { host.remove(); out[f] = { error: String(e).slice(0, 120) }; }
      }
      return out;
    })()`);

    let fixedCount = 0;
    for (const [f, info] of Object.entries(fixes || {})) {
      if (info && info.xml) {
        fs.writeFileSync(path.join(LOGO_DIR, f), info.xml + "\n");
        fixedCount++;
        console.log(`FIXED ${f}: ${(info.changed || []).join(", ")}`);
      } else if (info && info.error) {
        console.log(`ERR ${f}: ${info.error}`);
      }
    }
    console.log(`TOTAL_FIXED: ${fixedCount}/${files.length}`);
  } finally {
    chrome.kill("SIGKILL");
    try { fs.rmSync(profile, { recursive: true, force: true }); } catch {}
  }
}
main().catch((e) => { console.error("FIX_ERROR", e.message); process.exit(1); });
