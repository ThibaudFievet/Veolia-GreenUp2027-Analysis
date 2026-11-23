/* ==========================================================================
   Custom Responsive SVG Dataviz Engine: Complete 8-Section Interactive Suite
   Strict 3-Effect Palette: Perimeter (#C2410C) | Method (#3B5BDB) | Real (#0F766E)
   ========================================================================== */

const C = {
  base: "#334155",
  total: "#0F172A",
  perimeter: "#C2410C",
  method: "#3B5BDB",
  real: "#0F766E",
  veolia: "#E30613",
  adverse: "#B91C1C",
  grid: "#E2E8F0",
  axis: "#94A3B8",
  text: "#0F172A",
  muted: "#64748B",
  soil: "#D97706",
  peer: "#94A3B8"
};

let tipEl = null;
function tip() {
  if (!tipEl) {
    tipEl = document.createElement("div");
    tipEl.className = "svg-tooltip";
    document.body.appendChild(tipEl);
  }
  return tipEl;
}
function hover(el, html) {
  const t = tip();
  el.style.cursor = "pointer";
  el.addEventListener("mouseenter", (e) => { t.innerHTML = html; t.classList.add("visible"); moveTip(e); });
  el.addEventListener("mousemove", moveTip);
  el.addEventListener("mouseleave", () => t.classList.remove("visible"));
}
function moveTip(e) {
  const t = tip();
  const r = t.getBoundingClientRect();
  let x = e.clientX + 14;
  let y = e.clientY - 12;
  if (x + r.width > window.innerWidth - 10) x = e.clientX - r.width - 14;
  if (y + r.height > window.innerHeight - 10) y = window.innerHeight - r.height - 10;
  if (y < 10) y = 10;
  t.style.left = `${x}px`;
  t.style.top = `${y}px`;
}
function el(tag, attrs = {}, text = null) {
  const n = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, String(v));
  if (text !== null) n.textContent = text;
  return n;
}

/* ---------- 1. Scopes 1-2 Waterfall + Exclusion Simulator ---------- */
export function renderScopes12Waterfall(container, data, scenarioKey) {
  container.innerHTML = "";
  const sc = data.scenarios[scenarioKey];
  const W = 760, H = 295, m = { top: 32, right: 24, bottom: 58, left: 54 };
  const pw = W - m.left - m.right, ph = H - m.top - m.bottom;
  const yMin = 12.0, yMax = 20.5;
  const yS = (v) => m.top + ph - ((v - yMin) / (yMax - yMin)) * ph;

  const bars = [
    { label: ["Published 2024", "(2024 method)"], start: yMin, end: 14.5, txt: "−14.5%", col: C.base, tip: "<strong>Published 2024 (−14.5%)</strong>Reported Scopes 1–2 reduction under 2024 method.<br/>Source: S04, p.191" },
    { label: ["Method effect", "(restatement)"], start: 14.5, end: 16.6, txt: "−2.1 pt", col: C.method, tip: "<strong>Method Effect (−2.1 pts)</strong>Over half of the 4.1 pt apparent gain came from restating 2024 to −16.6% (20,250 kt vs 24,275 kt).<br/>Source: S04, p.217" },
    { label: ["Real progress", "(coal & methane)"], start: 16.6, end: 18.6, txt: "−2.0 pt", col: C.real, tip: "<strong>Real Progress (−2.0 pts / −0.5 Mt)</strong>Actual physical emissions cut (20,250 → 19,752 kt).<br/>Source: S04, pp.207, 217" },
    { label: ["Published 2025", "(2025 method)"], start: yMin, end: 18.6, txt: "−18.6%", col: C.total, tip: "<strong>Published 2025 (−18.6%)</strong>Exceeds −18% target by 154 kt margin (governs 10% of exec shares).<br/>Source: S04, pp.164–165" }
  ];

  if (scenarioKey !== "excluded") {
    const nm = Math.abs(sc.newPct);
    bars.push({
      label: ["Clean Earth", `(+${sc.addKt} kt)`], start: nm, end: 18.6, txt: `+${(18.6 - nm).toFixed(1)} pt`, col: C.perimeter,
      tip: `<strong>Clean Earth (+${sc.addKt} kt)</strong>Consumes <b>${sc.marginUsedPct}</b> of Veolia’s 154 kt safety margin.<br/>Source: W1 tab 2; S25, p.26`
    });
    bars.push({
      label: ["Pro-forma", "(if counted)"], start: yMin, end: nm, txt: `${sc.newPct.toFixed(1)}%`, col: nm < 18.0 ? C.adverse : C.total,
      tip: `<strong>Pro-Forma (${sc.newPct.toFixed(1)}%)</strong>${nm < 18.0 ? "Falls <b>below −18% target</b>." : "Margin sharply compressed."} Excluded by Veolia’s significant-acquisition rule (S04, p.12).`
    });
  }

  const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Scopes 1-2 waterfall" });
  [12, 14, 16, 18, 20].forEach((t) => {
    const y = yS(t);
    svg.appendChild(el("line", { x1: m.left, y1: y, x2: W - m.right, y2: y, stroke: C.grid }));
    svg.appendChild(el("text", { x: m.left - 8, y: y + 4, "text-anchor": "end", fill: C.muted, "font-size": 10.5 }, `−${t}%`));
  });

  const yT = yS(18.0);
  svg.appendChild(el("line", { x1: m.left, y1: yT, x2: W - m.right, y2: yT, stroke: C.veolia, "stroke-width": 1.6, "stroke-dasharray": "5 4" }));
  svg.appendChild(el("text", { x: m.left + 6, y: yT - 6, fill: C.veolia, stroke: "#fff", "stroke-width": 3, "paint-order": "stroke", "font-size": 10.5, "font-weight": 700 }, "2027 target: −18.0% (margin: 154 kt)"));

  const step = pw / bars.length, bw = Math.min(70, step * 0.54);
  bars.forEach((b, i) => {
    const cx = m.left + step * i + step / 2, x = cx - bw / 2;
    const yTop = yS(Math.max(b.start, b.end)), yBot = yS(Math.min(b.start, b.end)), bh = Math.max(4, yBot - yTop);
    if (i > 0 && i !== 4) {
      const prevCx = m.left + step * (i - 1) + step / 2;
      const cy = yS(i === 5 ? bars[4].start : bars[i - 1].end);
      svg.appendChild(el("line", { x1: prevCx + bw / 2, y1: cy, x2: x, y2: cy, stroke: C.axis, "stroke-dasharray": "2 2" }));
    } else if (i === 4) {
      svg.appendChild(el("line", { x1: m.left + step * 3 + step / 2 + bw / 2, y1: yS(18.6), x2: x, y2: yS(18.6), stroke: C.axis, "stroke-dasharray": "2 2" }));
    }
    const g = el("g");
    g.appendChild(el("rect", { class: "svg-bar-v", x, y: yTop, width: bw, height: bh, rx: 3, fill: b.col, style: `animation-delay:${i * 55}ms` }));
    g.appendChild(el("text", { x: cx, y: yTop - 6, "text-anchor": "middle", fill: b.col === C.adverse ? C.adverse : C.text, stroke: "#fff", "stroke-width": 3, "paint-order": "stroke", "font-size": 12, "font-weight": 700 }, b.txt));
    b.label.forEach((ln, li) => g.appendChild(el("text", { x: cx, y: H - m.bottom + 17 + li * 13, "text-anchor": "middle", fill: li ? C.muted : C.text, "font-size": li ? 10 : 11, "font-weight": li ? 400 : 600 }, ln)));
    hover(g, b.tip);
    svg.appendChild(g);
  });
  svg.appendChild(el("line", { x1: m.left, y1: H - m.bottom, x2: W - m.right, y2: H - m.bottom, stroke: C.axis }));
  container.appendChild(svg);
}

/* ---------- 2. Hazardous Waste 2027 Counter (Strict/Broad × Raw/Constant) ---------- */
export function renderWasteWaterfall(container, wc, { reading, perimeter }) {
  container.innerHTML = "";
  const W = 760, H = 310, m = { top: 34, right: 24, bottom: 58, left: 64 };
  const pw = W - m.left - m.right, ph = H - m.top - m.bottom;
  const isBroad = reading === "broad", isConst = perimeter === "constant";
  const ceKt = isBroad ? wc.cleanEarthBroadKt : wc.cleanEarthStrictKt;
  const tuckKt = isConst ? 0 : wc.tuckInsKt;
  const ceEff = isConst ? 0 : ceKt;
  const tot = wc.actual2025Kt + wc.newPlantsKt + tuckKt + ceEff;
  const targetKt = isConst ? (isBroad ? wc.targetBroadKt : wc.constantTargetStrictKt) : (isBroad ? wc.targetBroadKt : wc.targetStrictKt);

  const yMin = 8500, yMax = isBroad && !isConst ? 13800 : 10400;
  const yS = (v) => m.top + ph - ((v - yMin) / (yMax - yMin)) * ph;

  const bars = [
    { label: ["Actual 2025", "(published)"], start: yMin, end: wc.actual2025Kt, txt: "9,181 kt", col: C.base, tip: "<strong>Actual 2025 (9,181 kt)</strong>Down 15 kt vs 2024 (RGS disposal); already above published 9,000 kt target.<br/>Source: S04, p.224" },
    { label: ["New plants", "(real capacity)"], start: wc.actual2025Kt, end: wc.actual2025Kt + wc.newPlantsKt, txt: "+285 kt", col: C.real, tip: "<strong>Real Progress (+285 kt)</strong>Verifiable new treatment capacity by 2027 (~35% of strict rise).<br/>Source: S16, slides 16, 31" },
    { label: ["2025 tuck-ins", "(perimeter)"], start: wc.actual2025Kt + wc.newPlantsKt, end: wc.actual2025Kt + wc.newPlantsKt + tuckKt, txt: isConst ? "0 kt (stripped)" : "+100 kt", col: C.perimeter, ghost: isConst, tip: isConst ? "<strong>Perimeter Stripped</strong>Excluded under constant scope." : "<strong>Tuck-Ins Bundle (+100 kt)</strong>H1 2025 5-deal bundle (incl. out-of-scope deals); perimeter transfer.<br/>Source: S39; S16" },
    { label: ["Clean Earth", isBroad ? "(broad: +soil)" : "(strict reading)"], start: wc.actual2025Kt + wc.newPlantsKt + tuckKt, end: tot, txt: isConst ? "0 kt (stripped)" : (isBroad ? "+3,600 kt" : "+439 kt"), col: C.perimeter, ghost: isConst, tip: isConst ? "<strong>Clean Earth Stripped</strong>Volumes already existed under Enviri." : isBroad ? "<strong>Clean Earth Broad (up to +3.6 Mt / +39%)</strong>Includes remediated soil (2.8–3.4 Mt); matches Veolia oral 3–4 Mt.<br/>Source: S25, p.5; S23" : "<strong>Clean Earth Strict (+439 kt / +4.8%)</strong>Hazardous waste recycled/reused only.<br/>Source: S25, p.5" },
    { label: [isConst ? "Constant 2027" : "Potential 2027", isConst ? "(real only)" : "(raw counter)"], start: yMin, end: tot, txt: `${tot.toLocaleString("en-US")} kt`, col: isConst ? C.real : C.total, tip: `<strong>2027 Total: ${tot.toLocaleString("en-US")} kt</strong>${isConst ? "Isolates physical capacity growth (+285 kt)." : isBroad ? "Soil definition shifts US result by >3 Mt." : "65% perimeter (+539 kt) vs 35% real (+285 kt)."}` }
  ];

  const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Hazardous waste waterfall" });
  const ticks = isBroad && !isConst ? [9000, 10000, 11000, 12000, 13000] : [8800, 9000, 9400, 9800, 10200];
  ticks.forEach((t) => {
    const y = yS(t);
    svg.appendChild(el("line", { x1: m.left, y1: y, x2: W - m.right, y2: y, stroke: C.grid }));
    svg.appendChild(el("text", { x: m.left - 8, y: y + 4, "text-anchor": "end", fill: C.muted, "font-size": 10.5 }, `${t.toLocaleString("en-US")} kt`));
  });

  const yT = yS(targetKt);
  svg.appendChild(el("line", { x1: m.left, y1: yT, x2: W - m.right, y2: yT, stroke: C.veolia, "stroke-width": 1.6, "stroke-dasharray": "5 4" }));
  const tLbl = isConst && !isBroad ? "Re-based constant-scope target: ~9,539 kt" : isBroad ? "Oral / launch target: 10,000 kt (incl. soils)" : "Published 2027 target: 9,000 kt (met in 2025)";
  const below = targetKt <= wc.actual2025Kt;
  svg.appendChild(el("text", { x: below ? m.left + pw * 0.5 : m.left + 8, y: below ? yT + 15 : yT - 6, "text-anchor": below ? "middle" : "start", fill: C.veolia, stroke: "#fff", "stroke-width": 3.5, "paint-order": "stroke", "font-size": 10.5, "font-weight": 700 }, tLbl));

  const step = pw / bars.length, bw = Math.min(76, step * 0.54);
  bars.forEach((b, i) => {
    const cx = m.left + step * i + step / 2, x = cx - bw / 2;
    const yTop = yS(Math.max(b.start, b.end)), yBot = yS(Math.min(b.start, b.end)), bh = b.ghost ? 6 : Math.max(5, yBot - yTop);
    if (i > 0) {
      const cy = yS(bars[i - 1].end);
      svg.appendChild(el("line", { x1: m.left + step * (i - 1) + step / 2 + bw / 2, y1: cy, x2: x, y2: cy, stroke: C.axis, "stroke-dasharray": "2 2" }));
    }
    const g = el("g");
    g.appendChild(el("rect", b.ghost ? { x, y: yTop - 3, width: bw, height: 6, rx: 2, fill: "#FFF7ED", stroke: C.perimeter, "stroke-width": 1.5, "stroke-dasharray": "3 2" } : { class: "svg-bar-v", x, y: yTop, width: bw, height: bh, rx: 3, fill: b.col, style: `animation-delay:${i * 55}ms` }));
    g.appendChild(el("text", { x: cx, y: b.ghost ? yTop - 9 : yTop - 6, "text-anchor": "middle", fill: b.ghost ? C.perimeter : C.text, stroke: "#fff", "stroke-width": 3, "paint-order": "stroke", "font-size": b.ghost ? 10.5 : 12, "font-weight": 700 }, b.txt));
    b.label.forEach((ln, li) => g.appendChild(el("text", { x: cx, y: H - m.bottom + 17 + li * 13, "text-anchor": "middle", fill: li ? C.muted : C.text, "font-size": li ? 10 : 11, "font-weight": li ? 400 : 600 }, ln)));
    hover(g, b.tip);
    svg.appendChild(g);
  });
  svg.appendChild(el("line", { x1: m.left, y1: H - m.bottom, x2: W - m.right, y2: H - m.bottom, stroke: C.axis }));
  container.appendChild(svg);
}

/* ---------- 3. Clean Earth Audited US Revenue Mix & Earnings Divergence ---------- */
export function renderCleanEarthRevenueMix(container, fin) {
  container.innerHTML = "";
  const W = 720, H = 265, m = { top: 32, right: 58, bottom: 44, left: 54 };
  const pw = W - m.left - m.right, ph = H - m.top - m.bottom;
  const yR = (v) => m.top + ph - (v / 1100) * ph;
  const yI = (v) => m.top + ph - (v / 200) * ph;
  const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Clean Earth US revenue mix" });

  [0, 250, 500, 750, 1000].forEach((t) => {
    const y = yR(t);
    svg.appendChild(el("line", { x1: m.left, y1: y, x2: W - m.right, y2: y, stroke: C.grid }));
    svg.appendChild(el("text", { x: m.left - 8, y: y + 4, "text-anchor": "end", fill: C.muted, "font-size": 10 }, `$${t}m`));
  });
  [0, 50, 100, 150, 200].forEach((t) => svg.appendChild(el("text", { x: W - m.right + 8, y: yI(t) + 4, fill: C.muted, "font-size": 10 }, `$${t}m`)));
  svg.appendChild(el("text", { x: m.left, y: 15, fill: C.text, "font-size": 10.5, "font-weight": 700 }, "Audited Revenue ($m, left)"));
  svg.appendChild(el("text", { x: W - m.right, y: 15, "text-anchor": "end", fill: C.veolia, "font-size": 10.5, "font-weight": 700 }, "Adj. EBITDA vs Op. Income ($m, right)"));

  const step = pw / fin.years.length, bw = 62;
  fin.years.forEach((d, i) => {
    const cx = m.left + step * i + step / 2, x = cx - bw / 2;
    const g = el("g");
    if (d.exactMix || d.approxMix) {
      const yHw = yR(d.hwRev), hHw = m.top + ph - yHw, yTot = yR(d.revenue), hSoil = yHw - yTot;
      g.appendChild(el("rect", { class: "svg-bar-v", x, y: yHw, width: bw, height: hHw, fill: C.real, opacity: d.exactMix ? 1 : 0.72, rx: 2 }));
      g.appendChild(el("rect", { class: "svg-bar-v", x, y: yTot, width: bw, height: hSoil, fill: C.soil, opacity: d.exactMix ? 1 : 0.72, rx: 2 }));
      g.appendChild(el("text", { x: cx, y: yHw + hHw / 2 + 4, "text-anchor": "middle", fill: "#fff", "font-size": 10, "font-weight": 700 }, d.exactMix ? "84.6% HW" : "~83% HW"));
      if (d.exactMix) g.appendChild(el("text", { x: cx, y: yTot + hSoil / 2 + 3, "text-anchor": "middle", fill: "#fff", "font-size": 9.5, "font-weight": 700 }, "15.4%"));
      hover(g, d.exactMix ? "<strong>FY2025 Revenue ($973.85m)</strong>Hazardous waste: <b>$824.24m (84.6%)</b><br/>Soil & dredged: <b>$149.61m (15.4%)</b><br/>Source: S14, p.171 PDF" : "<strong>FY2023 Revenue ($928.3m)</strong>Hazardous waste ~83% (up from 76% in 2020).<br/>Source: S18; S34");
    } else {
      const yTot = yR(d.revenue);
      g.appendChild(el("rect", { class: "svg-bar-v", x, y: yTot, width: bw, height: m.top + ph - yTot, fill: "#CBD5E1", rx: 2 }));
      hover(g, `<strong>FY${d.year} Revenue ($${d.revenue}m)</strong>${d.revNote || "Audited Enviri segment revenue."}<br/>Source: S19; S14; S32`);
    }
    g.appendChild(el("text", { x: cx, y: yR(d.revenue) - 6, "text-anchor": "middle", fill: C.text, "font-size": 11, "font-weight": 700 }, `$${d.revenue.toFixed(1)}m`));
    g.appendChild(el("text", { x: cx, y: H - m.bottom + 17, "text-anchor": "middle", fill: C.text, "font-size": 11.5, "font-weight": 600 }, d.year));
    svg.appendChild(g);
  });

  const opPts = fin.years.map((d, i) => d.opInc !== null ? { x: m.left + step * i + step / 2, y: yI(d.opInc), v: d.opInc, yr: d.year } : null).filter(Boolean);
  svg.appendChild(el("polyline", { points: opPts.map((p) => `${p.x},${p.y}`).join(" "), fill: "none", stroke: C.veolia, "stroke-width": 2.3 }));
  opPts.forEach((p) => {
    const c = el("circle", { cx: p.x, cy: p.y, r: 4.5, fill: "#fff", stroke: C.veolia, "stroke-width": 2.3 });
    hover(c, `<strong>Operating Income ${p.yr}: $${p.v.toFixed(1)}m</strong>Fell from $77.0m (2023) to $59.6m (2025).<br/>Source: S19; S14`);
    svg.appendChild(c);
    svg.appendChild(el("text", { x: p.x, y: p.y + 16, "text-anchor": "middle", fill: C.veolia, stroke: "#fff", "stroke-width": 3.5, "paint-order": "stroke", "font-size": 10, "font-weight": 700 }, `OpInc $${p.v.toFixed(1)}m`));
  });

  const ebPts = fin.years.map((d, i) => d.adjEbitda !== null ? { x: m.left + step * i + step / 2, y: yI(d.adjEbitda), v: d.adjEbitda, yr: d.year } : null).filter(Boolean);
  svg.appendChild(el("polyline", { points: ebPts.map((p) => `${p.x},${p.y}`).join(" "), fill: "none", stroke: C.method, "stroke-width": 2.3 }));
  ebPts.forEach((p) => {
    const c = el("circle", { cx: p.x, cy: p.y, r: 4.5, fill: "#fff", stroke: C.method, "stroke-width": 2.3 });
    hover(c, `<strong>Adjusted EBITDA ${p.yr}: $${p.v.toFixed(1)}m</strong>Rose while operating income fell.<br/>Source: S32`);
    svg.appendChild(c);
    svg.appendChild(el("text", { x: p.x, y: p.y - 9, "text-anchor": "middle", fill: C.method, stroke: "#fff", "stroke-width": 3.5, "paint-order": "stroke", "font-size": 10, "font-weight": 700 }, `EBITDA $${p.v.toFixed(1)}m`));
  });
  svg.appendChild(el("line", { x1: m.left, y1: H - m.bottom, x2: W - m.right, y2: H - m.bottom, stroke: C.axis }));
  container.appendChild(svg);
}

/* ---------- 4. Clean Earth Multiple Compression (2026-2030) ---------- */
export function renderMultipleCompression(container, rows, phasing) {
  container.innerHTML = "";
  const W = 720, H = 265, m = { top: 30, right: 24, bottom: 48, left: 48 };
  const pw = W - m.left - m.right, ph = H - m.top - m.bottom;
  const yS = (v) => m.top + ph - ((v - 6) / 11) * ph; // 6x to 17x
  const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Clean Earth EV/EBITDA compression 2026 to 2030" });

  [8, 10, 12, 14, 16].forEach((t) => {
    const y = yS(t);
    svg.appendChild(el("line", { x1: m.left, y1: y, x2: W - m.right, y2: y, stroke: C.grid }));
    svg.appendChild(el("text", { x: m.left - 8, y: y + 4, "text-anchor": "end", fill: C.muted, "font-size": 10.5 }, `${t}x`));
  });

  // Published 9.8x dashed line
  const yPub = yS(9.8);
  svg.appendChild(el("line", { x1: m.left, y1: yPub, x2: W - m.right, y2: yPub, stroke: C.veolia, "stroke-width": 1.6, "stroke-dasharray": "5 4" }));
  svg.appendChild(el("text", { x: W - m.right - 4, y: yPub - 6, "text-anchor": "end", fill: C.veolia, stroke: "#fff", "stroke-width": 3, "paint-order": "stroke", "font-size": 10.5, "font-weight": 700 }, "Veolia published headline: ~9.8x (implies ~$106m synergies)"));

  const step = pw / rows.length, bw = 64;
  rows.forEach((r, i) => {
    const mult = phasing === "moodys" ? r.moodysMult : r.oralMult;
    const syn = phasing === "moodys" ? r.moodysSyn : r.oralSyn;
    const cx = m.left + step * i + step / 2, x = cx - bw / 2;
    const yTop = yS(mult), bh = (m.top + ph) - yTop;
    const col = i === 0 ? C.perimeter : i === rows.length - 1 ? C.real : C.method;
    const g = el("g");
    g.appendChild(el("rect", { class: "svg-bar-v", x, y: yTop, width: bw, height: bh, rx: 3, fill: col, style: `animation-delay:${i * 55}ms` }));
    g.appendChild(el("text", { x: cx, y: yTop - 6, "text-anchor": "middle", fill: C.text, stroke: "#fff", "stroke-width": 3, "paint-order": "stroke", "font-size": 12, "font-weight": 700 }, `${mult.toFixed(1)}x`));
    g.appendChild(el("text", { x: cx, y: H - m.bottom + 16, "text-anchor": "middle", fill: C.text, "font-size": 11.5, "font-weight": 700 }, r.year));
    g.appendChild(el("text", { x: cx, y: H - m.bottom + 30, "text-anchor": "middle", fill: C.muted, "font-size": 10 }, syn ? `+$${syn}m syn.` : "No syn."));
    hover(g, `<strong>${r.year}: ${mult.toFixed(1)}x EV/EBITDA</strong>EV $3.0bn / ($200m 2026E EBITDA + $${syn}m synergies).<br/>On $3.04bn cash, add 0.1–0.2x.<br/>Source: W2; ${phasing === "moodys" ? "S26 (Moody’s)" : "S23 (Veolia oral)"}`);
    svg.appendChild(g);
  });
  svg.appendChild(el("line", { x1: m.left, y1: H - m.bottom, x2: W - m.right, y2: H - m.bottom, stroke: C.axis }));
  container.appendChild(svg);
}

/* ---------- 5. EV/EBITDA Comparables Ladder (Figure 3.1) ---------- */
export function renderComparablesLadder(container, items) {
  container.innerHTML = "";
  const W = 740, rowH = 29, m = { top: 14, right: 56, bottom: 28, left: 268 };
  const H = m.top + m.bottom + items.length * rowH;
  const pw = W - m.left - m.right;
  const xS = (v) => m.left + (v / 21) * pw;
  const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "EV/EBITDA comparables ladder" });

  [0, 5, 10, 15, 20].forEach((t) => {
    const x = xS(t);
    svg.appendChild(el("line", { x1: x, y1: m.top, x2: x, y2: H - m.bottom, stroke: C.grid }));
    svg.appendChild(el("text", { x, y: H - 8, "text-anchor": "middle", fill: C.muted, "font-size": 10 }, `${t}x`));
  });

  items.forEach((d, i) => {
    const y = m.top + i * rowH + 4;
    const col = d.highlight === "real" ? C.real : d.highlight === "veolia" ? C.veolia : d.highlight === "perimeter" ? C.perimeter : C.peer;
    const g = el("g");
    g.appendChild(el("text", { x: m.left - 10, y: y + 14, "text-anchor": "end", fill: d.highlight ? C.text : C.muted, "font-size": 11, "font-weight": d.highlight ? 700 : 500 }, d.label));
    g.appendChild(el("rect", { class: "svg-bar-h", x: m.left, y, width: Math.max(4, xS(d.mult) - m.left), height: 19, rx: 3, fill: col, style: `animation-delay:${i * 35}ms` }));
    g.appendChild(el("text", { x: xS(d.mult) + 6, y: y + 14, fill: d.highlight ? C.text : C.muted, "font-size": 11, "font-weight": 700 }, `${d.mult.toFixed(1)}x`));
    hover(g, `<strong>${d.label}: ${d.mult.toFixed(1)}x</strong>Source: ${d.cite}; W2`);
    svg.appendChild(g);
  });
  container.appendChild(svg);
}

/* ---------- 6. BofA Premium vs Synergy PV Break-Even ---------- */
export function renderBreakEvenChart(container, c) {
  container.innerHTML = "";
  const W = 720, H = 190, m = { top: 22, right: 64, bottom: 26, left: 210 };
  const pw = W - m.left - m.right;
  const xS = (v) => m.left + (v / 850) * pw;
  const bars = [
    { label: "PV of Net Synergies (100%)", val: c.pv, col: C.real, tag: `$${c.pv}m`, tip: `<strong>Present Value of Synergies: $${c.pv}m</strong>$120m run-rate, taxed 25.4%, net of c.$90m costs, WACC 9.25%.` },
    { label: "Premium vs Trading Comps", val: c.tradingPrem, col: C.perimeter, tag: `$${c.tradingPrem}m (${c.vsTrading}% needed)`, tip: `<strong>Trading Comps Premium: $${c.tradingPrem}m</strong>$3,040m cash minus $2,510m BofA midpoint → needs <b>${c.vsTrading}%</b> of synergies.` },
    { label: "Premium vs Precedent Deals", val: c.transPrem, col: C.method, tag: `$${c.transPrem}m (${c.vsTrans}% needed)`, tip: `<strong>Precedent Deals Premium: $${c.transPrem}m</strong>$3,040m cash minus $2,618m BofA midpoint → needs <b>${c.vsTrans}%</b> of synergies.` }
  ];
  const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "BofA premium vs present value of synergies" });
  [0, 200, 400, 600, 800].forEach((t) => {
    const x = xS(t);
    svg.appendChild(el("line", { x1: x, y1: m.top, x2: x, y2: H - m.bottom, stroke: C.grid }));
    svg.appendChild(el("text", { x, y: H - 6, "text-anchor": "middle", fill: C.muted, "font-size": 10 }, `$${t}m`));
  });
  bars.forEach((b, i) => {
    const y = m.top + i * 44 + 8;
    const g = el("g");
    g.appendChild(el("text", { x: m.left - 10, y: y + 17, "text-anchor": "end", fill: C.text, "font-size": 11.5, "font-weight": 600 }, b.label));
    g.appendChild(el("rect", { class: "svg-bar-h", x: m.left, y, width: xS(b.val) - m.left, height: 24, rx: 3, fill: b.col, style: `animation-delay:${i * 70}ms` }));
    g.appendChild(el("text", { x: xS(b.val) + 8, y: y + 16, fill: C.text, "font-size": 11.5, "font-weight": 700 }, b.tag));
    hover(g, b.tip);
    svg.appendChild(g);
  });
  container.appendChild(svg);
}

/* ---------- 7. CSRD Impact Asymmetry (Table 5.3) ---------- */
export function renderCsrdAsymmetry(container, asym) {
  container.innerHTML = "";
  const W = 680, H = 165, m = { top: 24, right: 32, bottom: 26, left: 175 };
  const pw = W - m.left - m.right;
  const xS = (v) => m.left + (v / 5.5) * pw;
  const rows = [
    { label: "Negative Impacts (5 total)", gu: asym.negative.greenup, csrd: asym.negative.csrd, guCol: C.veolia, csrdCol: "#0F172A" },
    { label: "Positive Impacts (4 total)", gu: asym.positive.greenup, csrd: asym.positive.csrd, guCol: C.real, csrdCol: "#334155" }
  ];
  const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "CSRD vs GreenUp impact recording asymmetry" });
  rows.forEach((r, i) => {
    const y = m.top + i * 62;
    svg.appendChild(el("text", { x: m.left - 10, y: y + 23, "text-anchor": "end", fill: C.text, "font-size": 11.5, "font-weight": 700 }, r.label));
    // GreenUp bar
    const g1 = el("g");
    g1.appendChild(el("rect", { class: "svg-bar-h", x: m.left, y, width: Math.max(6, xS(r.gu) - m.left), height: 18, rx: 3, fill: r.gu === 0 ? "#FCA5A5" : r.guCol }));
    g1.appendChild(el("text", { x: Math.max(m.left + 12, xS(r.gu) + 8), y: y + 13, fill: r.gu === 0 ? C.veolia : C.text, "font-size": 11, "font-weight": 700 }, `GreenUp scorecard: ${r.gu} / ${r.csrd}`));
    hover(g1, `<strong>GreenUp Scorecard</strong>Captures <b>${r.gu} of ${r.csrd}</b> ${i === 0 ? "negative" : "positive"} impacts.<br/>Source: W3, Impact test tab`);
    svg.appendChild(g1);
    // CSRD bar
    const g2 = el("g");
    g2.appendChild(el("rect", { class: "svg-bar-h", x: m.left, y: y + 22, width: xS(r.csrd) - m.left, height: 18, rx: 3, fill: r.csrdCol }));
    g2.appendChild(el("text", { x: xS(r.csrd) + 8, y: y + 35, fill: C.muted, "font-size": 11, "font-weight": 600 }, `CSRD reporting: ${r.csrd} / ${r.csrd}`));
    hover(g2, `<strong>CSRD Reporting</strong>Records all <b>${r.csrd} of ${r.csrd}</b> impacts under double materiality.<br/>Source: S20; W3`);
    svg.appendChild(g2);
  });
  container.appendChild(svg);
}
