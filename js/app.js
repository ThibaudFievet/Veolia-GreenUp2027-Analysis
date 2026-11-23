/* ==========================================================================
   Main Interactive Application Controller: Full 8-Section Advisory Report
   ========================================================================== */

import {
  SOURCES, HERO_DATA, SECTION_01, SECTION_02, SECTION_03,
  SECTION_04, SECTION_05, SECTION_06, SECTION_07
} from "./data.js";
import {
  renderScopes12Waterfall, renderWasteWaterfall, renderCleanEarthRevenueMix,
  renderMultipleCompression, renderComparablesLadder, renderBreakEvenChart,
  renderCsrdAsymmetry
} from "./charts.js";
import { initAudioSystem } from "./audio.js";

const state = {
  mandateId: "rq1",
  eqTerm: "perimeter",
  scorecardStatus: "all",
  scorecardDim: "all",
  scopesScenario: "excluded",
  wasteReading: "strict",
  wastePerimeter: "raw",
  sec03Tab: "synergies",
  phasing: "moodys",
  bofaCase: "moodys",
  wtsCase: "base",
  splitSegId: "residual",
  scope4BaseId: "p10",
  sourceFilter: "all",
  sourceQuery: "",
  lastScrollY: null
};

function evBadge(level) {
  const map = { established: "Established", estimated: "Estimated", not_established: "Not established" };
  return `<span class="ev-badge ${level}">${map[level] || level}</span>`;
}

function cite(code, loc = "") {
  const s = SOURCES[code];
  const isOral = s && s.tier === "oral";
  return `<button type="button" class="cite${isOral ? " oral" : ""}" data-cite="${code}" data-loc="${loc}">${loc ? `${code}, ${loc}` : code}</button>`;
}

/* ---------- 00 · Hero Interactive Mandate Pills & Equation Widget ---------- */
function updateHeroWidgets() {
  const pillWrap = document.getElementById("mandate-pills");
  pillWrap.innerHTML = HERO_DATA.mandatePillars.map((p) => `
    <button type="button" class="mandate-pill${p.id === state.mandateId ? " active" : ""}" data-mandate="${p.id}">
      <span class="dot"></span>${p.label}
    </button>
  `).join("");
  const curM = HERO_DATA.mandatePillars.find((p) => p.id === state.mandateId);
  document.getElementById("mandate-summary").innerHTML = `<strong>${curM.label}:</strong> ${curM.summary} ${cite(curM.cite.code, curM.cite.loc)}`;

  document.querySelectorAll("[data-eq-term]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.eqTerm === state.eqTerm);
  });
  const ex = HERO_DATA.equationExamples[state.eqTerm];
  const spot = document.getElementById("eq-spotlight");
  spot.className = `eq-spotlight ${ex.style}`;
  spot.innerHTML = `<span>${ex.text}</span><span>${cite(ex.cite.code, ex.cite.loc)}</span>`;
}

/* ---------- 01 · Executive Answer (8 Balanced KPIs + 7 Findings) ---------- */
function renderSection01() {
  document.getElementById("kpi-8-grid").innerHTML = SECTION_01.headlineKpis.map((k, idx) => `
    <article class="kpi-tile ${k.tone} reveal reveal-delay-${idx % 4}" data-jump="${k.jump}">
      <div class="kpi-tile-head">
        <span class="kpi-part">${k.part}</span>
        ${evBadge(k.evidence)}
      </div>
      <div class="kpi-big">${k.value}</div>
      <div class="kpi-title">${k.title}</div>
      <p class="kpi-desc">${k.desc}</p>
      <div class="kpi-foot">
        ${cite(k.cite.code, k.cite.loc)}
        <span style="font-size:11px;font-weight:600;color:var(--ink-muted)">Explore →</span>
      </div>
    </article>
  `).join("");

  document.getElementById("findings-7-grid").innerHTML = SECTION_01.sevenFindings.map((f) => `
    <article class="finding-card ${f.tone}${f.wide ? " wide" : ""} reveal">
      <div class="finding-top">
        <span class="finding-num">FINDING ${f.num}</span>
        ${evBadge(f.evidence)}
      </div>
      <h4 class="finding-title">${f.title}</h4>
      <p class="finding-body">${f.body} ${cite(f.cite.code, f.cite.loc)}</p>
      <a class="finding-jump" href="${f.jump}">Inspect proof →</a>
    </article>
  `).join("");
}

/* ---------- 02 · Deals & 15-KPI Scorecard ---------- */
function renderSection02() {
  document.getElementById("deals-grid").innerHTML = SECTION_02.deals.map((d, i) => `
    <article class="widget-card ${d.tone} reveal reveal-delay-${i}">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:6px">
        <span class="stat-kicker">${d.type}</span>
        ${evBadge(d.evidence)}
      </div>
      <h3 style="font-size:17px;margin:2px 0 0">${d.name}</h3>
      <ul class="deal-meta-list">
        <li><span>Closed</span><span>${d.closed}</span></li>
        <li><span>Price</span><span class="num">${d.price}</span></li>
        <li><span>Multiple</span><span class="num">${d.multiple}</span></li>
        <li><span>Synergies</span><span>${d.synergies}</span></li>
        <li><span>ESG Rule</span><span>${d.esgRule}</span></li>
      </ul>
      <div style="margin-top:auto;padding-top:6px;display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:11px;color:var(--ink-muted)">${d.method}</span>
        ${cite(d.cite.code, d.cite.loc)}
      </div>
    </article>
  `).join("");

  document.getElementById("out-of-scope-list").innerHTML = SECTION_02.outOfScope.map((t) => `<li style="margin-bottom:4px">${t}</li>`).join("");

  document.getElementById("target-9-10-grid").innerHTML = SECTION_02.target9vs10.map((t) => `
    <div class="widget-card" style="padding:12px 14px">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:6px">
        <span class="stat-kicker">${t.src}</span>
        ${cite(t.cite.code, t.cite.loc)}
      </div>
      <div style="font-size:13px;font-weight:600;color:var(--ink-primary)">${t.text}</div>
    </div>
  `).join("");

  updateScorecardTable();
}

function updateScorecardTable() {
  const rows = SECTION_02.scorecard15.filter((r) => {
    if (state.scorecardStatus !== "all" && r.status !== state.scorecardStatus) return false;
    if (state.scorecardDim !== "all" && r.dim !== state.scorecardDim) return false;
    return true;
  });
  const badge = (st) => st === "met"
    ? `<span class="effect-tag real">Met / On track</span>`
    : st === "nearly"
      ? `<span class="effect-tag perimeter">Nearly met</span>`
      : `<span class="effect-tag veolia">Not met</span>`;

  document.getElementById("scorecard-tbody").innerHTML = rows.map((r) => `
    <tr>
      <td><span class="tier-chip">${r.dim}</span></td>
      <td class="strong">${r.kpi}</td>
      <td class="num">${r.actual}</td>
      <td class="num">${r.target}</td>
      <td>${badge(r.status)}</td>
      <td>${r.rule} ${cite(r.cite.code, r.cite.loc)}</td>
    </tr>
  `).join("");

  document.querySelectorAll("[data-sc-status]").forEach((b) => b.classList.toggle("active", b.dataset.scStatus === state.scorecardStatus));
  document.querySelectorAll("[data-sc-dim]").forEach((b) => b.classList.toggle("active", b.dataset.scDim === state.scorecardDim));
}

/* ---------- 03 · ESG Impact & Attribution Lab ---------- */
function updateScopesLab() {
  renderScopes12Waterfall(document.getElementById("chart-scopes12"), SECTION_03.scopes12, state.scopesScenario);
  const sc = SECTION_03.scopes12.scenarios[state.scopesScenario];
  const box = document.getElementById("scopes12-callout");
  box.className = `chart-callout ${sc.verdictType}`;
  box.innerHTML = `<strong>${sc.label}:</strong> ${sc.note} ${cite("S04", "pp.12, 217")} ${cite("S23", "oral")} ${cite("W1", "tab 2")}`;
  document.querySelectorAll("[data-scopes-scenario]").forEach((b) => {
    const a = b.dataset.scopesScenario === state.scopesScenario;
    b.classList.toggle("active", a);
    b.classList.toggle("active-method", a && state.scopesScenario === "excluded");
    b.classList.toggle("active-perimeter", a && state.scopesScenario !== "excluded");
  });
}

function updateWasteLab() {
  const wc = SECTION_03.wasteCounter;
  renderWasteWaterfall(document.getElementById("chart-waste"), wc, { reading: state.wasteReading, perimeter: state.wastePerimeter });
  const isBroad = state.wasteReading === "broad";
  const isConst = state.wastePerimeter === "constant";

  const gCard = document.getElementById("zoom-group-card");
  const uCard = document.getElementById("zoom-us-card");

  if (isConst) {
    gCard.className = "widget-card top-real";
    uCard.className = "widget-card top-real";
    gCard.innerHTML = `<span class="stat-kicker">Veolia Worldwide · Constant Scope ${evBadge("estimated")}</span><div class="stat-big" style="color:var(--effect-real)">0 kt on entry</div><div style="font-size:12.5px">Only <strong>+285 kt</strong> new plants = real progress; 9 Mt target re-bases to <strong>~9.5 Mt (9,539 kt)</strong> ${cite("S16", "slides 16, 31")}.</div>`;
    uCard.innerHTML = `<span class="stat-kicker">Veolia US · Constant Scope ${evBadge("not_established")}</span><div class="stat-big" style="color:var(--effect-real)">0 kt on entry</div><div style="font-size:12.5px">Real US lift depends on tonnes routed to Veolia’s 6 US incinerators, currently <strong>unpublished</strong> ${cite("S23", "oral")}.</div>`;
  } else if (isBroad) {
    gCard.className = "widget-card top-perimeter";
    uCard.className = "widget-card top-red";
    gCard.innerHTML = `<span class="stat-kicker">Veolia Worldwide · Broad (+Soil) ${evBadge("estimated")}</span><div class="stat-big" style="color:var(--effect-perimeter)">~+39% <span style="font-size:15px">(up to +3.6 Mt)</span></div><div style="font-size:12.5px">Base: 9,181 kt. Matches Veolia’s oral <strong>3–4 Mt/yr</strong> inside the 10 Mt definition ${cite("S25", "p.5")} ${cite("S23", "oral")}.</div>`;
    uCard.innerHTML = `<span class="stat-kicker">Veolia United States · Broad (+Soil) ${evBadge("estimated")}</span><div class="stat-big" style="color:var(--veolia-red)">&gt;+3 Mt shift</div><div style="font-size:12.5px">Exceeds Veolia’s <strong>&gt;2 Mt US 2027 target on closing day</strong> solely via definition &amp; perimeter ${cite("S15", "slide 24")}.</div>`;
  } else {
    gCard.className = "widget-card";
    uCard.className = "widget-card top-perimeter";
    gCard.innerHTML = `<span class="stat-kicker">Veolia Worldwide · Strict Reading ${evBadge("estimated")}</span><div class="stat-big">+4.8% <span style="font-size:15px;color:var(--ink-muted)">(+439 kt)</span></div><div style="font-size:12.5px">Base: 9,181 kt (2025). Published 9 Mt target already met before Clean Earth ${cite("S04", "p.224")} ${cite("S25", "p.5")}.</div>`;
    uCard.innerHTML = `<span class="stat-kicker">Veolia United States · Strict Reading ${evBadge("estimated")}</span><div class="stat-big" style="color:var(--effect-perimeter)">+52% <span style="font-size:15px;color:var(--ink-muted)">(on &gt;850 kt)</span></div><div style="font-size:12.5px">Scale changes the conclusion: same asset = +4.8% Group vs <strong>+52% US</strong> (64% of &gt;2 Mt target) ${cite("S15", "slides 15, 24")}.</div>`;
  }

  document.getElementById("ce-indicator-tbody").innerHTML = SECTION_03.cleanEarthByIndicator.map((r) => `
    <tr>
      <td class="strong">${r.indicator}</td>
      <td class="num">${r.actual2025}</td>
      <td class="num">${r.target2027}</td>
      <td class="${isConst ? "mono" : "strong"}">${isConst ? "0 (stripped)" : (isBroad ? r.perimeterBroad : r.perimeterStrict)}</td>
      <td>${r.realChange}</td>
      <td><span class="effect-tag ${r.nature}">${r.natureLabel}</span></td>
      <td>${evBadge(r.evidence)} ${cite(r.cite.code, r.cite.loc)}</td>
    </tr>
  `).join("");

  document.querySelectorAll("[data-waste-reading]").forEach((b) => {
    const a = b.dataset.wasteReading === state.wasteReading;
    b.classList.toggle("active", a);
    b.classList.toggle("active-perimeter", a && isBroad);
  });
  document.querySelectorAll("[data-waste-perimeter]").forEach((b) => {
    const a = b.dataset.wastePerimeter === state.wastePerimeter;
    b.classList.toggle("active", a);
    b.classList.toggle("active-real", a && isConst);
  });
}

function renderSection03Tabs() {
  document.getElementById("synergies-grid").innerHTML = SECTION_03.synergies.map((s) => `
    <article class="widget-card top-real">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:6px">
        <span class="effect-tag real">Physical lever</span>
        ${evBadge(s.evidence)}
      </div>
      <h4 style="font-family:var(--font-serif);font-size:16.5px;margin:2px 0">${s.title}</h4>
      <p style="margin:0;font-size:12.5px">${s.mechanism} ${s.cites.map((c) => cite(c.code, c.loc)).join(" ")}</p>
      <div style="margin-top:auto;padding-top:8px;border-top:1px solid var(--border-hairline);font-size:11.5px;color:var(--ink-muted)">
        KPI to publish: <strong style="color:var(--ink-primary);display:block">${s.kpi}</strong>
        <em>${s.statusNote}</em>
      </div>
    </article>
  `).join("");

  document.getElementById("formula-audit-tbody").innerHTML = SECTION_03.formulaAudit.map((r) => `
    <tr>
      <td class="strong">${r.indicator}</td>
      <td class="mono">${r.formula}</td>
      <td class="num">${r.y2024}</td>
      <td class="num">${r.y2025}</td>
      <td><span class="effect-tag ${r.statusKey === "reproduced" ? "real" : r.statusKey === "caveat" ? "method" : "neutral"}">${r.status}</span></td>
      <td>${evBadge(r.evidence)} ${cite(r.cite.code, r.cite.loc)}</td>
    </tr>
  `).join("");

  renderCleanEarthRevenueMix(document.getElementById("chart-ce-revenue"), SECTION_03.cleanEarthFinancials);

  document.getElementById("ce-esg-baseline-tbody").innerHTML = SECTION_03.cleanEarthEsgBaseline.map((r) => `
    <tr>
      <td class="strong">${r.item}</td>
      <td class="num">${r.y2023}</td>
      <td class="num">${r.y2024}</td>
      <td>${evBadge(r.evidence)} ${cite(r.cite.code, r.cite.loc)}</td>
    </tr>
  `).join("");

  document.getElementById("wts-audit-tbody").innerHTML = SECTION_03.wtsAudit.map((r) => `
    <tr>
      <td class="strong">${r.question}</td>
      <td>${r.answer}</td>
      <td>${evBadge(r.evidence)} ${cite(r.cite.code, r.cite.loc)}</td>
    </tr>
  `).join("");

  document.getElementById("robustness-tbody").innerHTML = SECTION_03.robustness.map((r) => `
    <tr>
      <td>${evBadge("established")} ${r.solid}</td>
      <td>${evBadge("estimated")} ${r.assumption}</td>
    </tr>
  `).join("");
}

/* ---------- 04 · Financial Justification & Synergies ---------- */
function updateSection04() {
  renderMultipleCompression(document.getElementById("chart-mult-comp"), SECTION_04.multipleByYear, state.phasing);
  document.querySelectorAll("[data-phasing]").forEach((b) => {
    const a = b.dataset.phasing === state.phasing;
    b.classList.toggle("active", a);
    b.classList.toggle("active-method", a);
  });

  const c = SECTION_04.bofaCases[state.bofaCase];
  renderBreakEvenChart(document.getElementById("chart-breakeven"), c);
  document.getElementById("breakeven-callout").innerHTML = `<strong>${c.label}:</strong> PV = <strong>$${c.pv}m</strong> → covers <strong>${c.vsTrans}%</strong> (precedent) to <strong>${c.vsTrading}%</strong> (trading) premium. ${c.note} ${cite("S14", "pp.58–60")} ${cite("W2", "model")}`;
  document.querySelectorAll("[data-bofa-case]").forEach((b) => {
    const a = b.dataset.bofaCase === state.bofaCase;
    b.classList.toggle("active", a);
    b.classList.toggle("active-veolia", a && state.bofaCase === "delayed");
    b.classList.toggle("active-real", a && state.bofaCase !== "delayed");
  });

  const w = SECTION_04.wtsScenarios[state.wtsCase];
  document.getElementById("wts-mult-val").textContent = w.mult;
  document.getElementById("wts-mult-note").innerHTML = `${w.note} ${cite("S37", "PR")} ${cite("W2", "model")}`;
  document.querySelectorAll("[data-wts-case]").forEach((b) => b.classList.toggle("active", b.dataset.wtsCase === state.wtsCase));
}

function renderSection04Static() {
  renderComparablesLadder(document.getElementById("chart-peers"), SECTION_04.comparablesLadder);
  document.getElementById("enviri-forecast-tbody").innerHTML = SECTION_04.enviriForecasts.map((f) => `
    <tr>
      <td class="strong">${f.yr}</td>
      <td class="num">$${f.rev.toLocaleString("en-US")}m</td>
      <td class="num strong">$${f.ebitda}m</td>
      <td class="num">${f.margin}</td>
      <td class="num">$${f.capex}m</td>
      <td class="num">$${f.ufcf}m</td>
    </tr>
  `).join("");
  document.getElementById("price-measures-list").innerHTML = SECTION_04.priceMeasures.map((p) => `
    <li><span>${p.measure}</span><span>${p.value} ${cite(p.cite.code, p.cite.loc)}</span></li>
  `).join("");
}

/* ---------- 05 · Stakeholder Value Distribution ---------- */
function updateSplitWidget() {
  const bar = document.getElementById("split-bar-track");
  bar.innerHTML = SECTION_05.splitSegments.map((s) => `
    <button type="button" class="split-seg${s.id === state.splitSegId ? " active" : ""}" style="width:${s.pct}%;background:${s.color}" data-split-seg="${s.id}" title="${s.label}: ${s.pctText} (${s.eur})">
      <span>${s.pct >= 7 ? s.pctText : ""}</span>
    </button>
  `).join("");

  const cur = SECTION_05.splitSegments.find((s) => s.id === state.splitSegId);
  const box = document.getElementById("split-inspector");
  box.className = `chart-callout ${cur.id === "residual" ? "warn" : cur.id === "depreciation" ? "method" : ""}`;
  box.innerHTML = `<strong>${cur.label}: ${cur.pctText} (${cur.eur} theoretical on €44.7bn FY24 revenue):</strong> ${cur.issue} ${cite("Brief", "slide 24")} ${cite("S06", "p.1")}`;
}

function renderSection05Static() {
  document.getElementById("stakeholder-matrix-tbody").innerHTML = SECTION_05.stakeholderMatrix.map((r) => `
    <tr>
      <td class="strong">${r.group}</td>
      <td>${r.wts}</td>
      <td>${r.ce}</td>
      <td>${evBadge("not_established")} ${cite(r.cite.code, r.cite.loc)}</td>
    </tr>
  `).join("");
}

/* ---------- 06 · CSRD Double Materiality Lens ---------- */
function updateScope4BaseWidget() {
  const cur = SECTION_06.scope4Baselines.find((b) => b.id === state.scope4BaseId);
  document.querySelectorAll("[data-s4-base]").forEach((b) => {
    const a = b.dataset.s4Base === state.scope4BaseId;
    b.classList.toggle("active", a);
    b.classList.toggle("active-veolia", a && state.scope4BaseId === "p517");
  });
  document.getElementById("s4-base-display").textContent = cur.growthLabel;
  document.getElementById("s4-base-bar").style.width = `${Math.min(100, (cur.pctBar / 30) * 100)}%`;
  document.getElementById("s4-base-bar").style.background = state.scope4BaseId === "p517" ? "var(--veolia-red)" : "var(--effect-method)";
  document.getElementById("s4-base-note").innerHTML = `${cur.note} ${cite("S04", "pp.10, 162, 517")}`;
}

function renderSection06Static() {
  renderCsrdAsymmetry(document.getElementById("chart-csrd-asym"), SECTION_06.impactAsymmetry);
  document.getElementById("esrs-gaps-grid").innerHTML = SECTION_06.esrsGaps.map((g) => `
    <article class="widget-card top-method">
      <span class="stat-kicker">${g.esrsStatus}</span>
      <h4 style="font-family:var(--font-serif);font-size:17px;margin:2px 0">${g.kpi}</h4>
      <div class="stat-big" style="font-size:22px">${g.val2025}</div>
      <p style="margin:4px 0 0;font-size:12.5px"><strong>What ESRS asks first:</strong> ${g.standardAsks} ${cite(g.cite.code, g.cite.loc)}</p>
    </article>
  `).join("");
  document.getElementById("peers-csrd-tbody").innerHTML = SECTION_06.peers.map((p) => `
    <tr style="${p.highlight ? "background:var(--veolia-red-tint)" : ""}">
      <td class="strong">${p.company}</td>
      <td class="num strong" style="${p.highlight ? "color:var(--veolia-red-dark)" : ""}">${p.generated}</td>
      <td>${p.fate}</td>
      <td>${p.esrsStyle} ${cite(p.cite.code, p.cite.loc)}</td>
    </tr>
  `).join("");
}

/* ---------- 07 · Verdict, 24-Month Bridge, Limits & Contradictions ---------- */
function renderSection07() {
  document.getElementById("bridge-6-grid").innerHTML = SECTION_07.bridge6.map((b) => `
    <article class="bridge-item reveal">
      <div class="bridge-n">ACTION ${b.n}</div>
      <h4>${b.title}</h4>
      <p>${b.body} ${cite(b.cite.code, b.cite.loc)}</p>
    </article>
  `).join("");

  document.getElementById("limits-grid").innerHTML = SECTION_07.notEstablished.map((txt) => `
    <div class="limit-row"><span class="limit-icon">○</span><span>${txt}</span></div>
  `).join("");

  document.getElementById("dashboard-64-tbody").innerHTML = SECTION_07.dashboard.map((r) => `
    <tr>
      <td class="strong">${r.dim}</td>
      <td>${r.wts}</td>
      <td>${r.ce}</td>
      <td class="mono">${r.horizon}</td>
    </tr>
  `).join("");

  document.getElementById("contradictions-tbody").innerHTML = SECTION_07.contradictions.map((c) => `
    <tr>
      <td class="strong">${c.issue}</td>
      <td>${c.resolution}</td>
    </tr>
  `).join("");
}

/* ---------- 08 · Complete 51-Source Internal Index ---------- */
function renderSourcesIndex() {
  const list = Object.values(SOURCES).filter((s) => {
    if (state.sourceFilter !== "all" && s.tier !== state.sourceFilter) return false;
    if (state.sourceQuery) {
      const q = state.sourceQuery.toLowerCase();
      return s.code.toLowerCase().includes(q) || s.doc.toLowerCase().includes(q) || s.issuer.toLowerCase().includes(q);
    }
    return true;
  });
  document.getElementById("sources-index-tbody").innerHTML = list.map((s) => `
    <tr id="source-${s.code}">
      <td class="mono strong">${s.code}</td>
      <td class="strong">${s.doc}</td>
      <td>${s.issuer}</td>
      <td class="num">${s.date}</td>
      <td><span class="tier-chip ${s.tier}">${s.tierLabel}</span></td>
    </tr>
  `).join("");
  document.getElementById("sources-count").textContent = `${list.length} / ${Object.keys(SOURCES).length} sources`;
}

/* ---------- Citation Popover + Jump + Return Pill ---------- */
function initCitations() {
  const pop = document.getElementById("citation-popover");
  const returnPill = document.getElementById("return-pill");
  let activeCode = null;
  const close = () => { pop.classList.remove("open"); activeCode = null; };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".cite");
    if (btn) {
      e.stopPropagation();
      const code = btn.dataset.cite;
      const loc = btn.dataset.loc || "";
      const src = SOURCES[code];
      if (!src) return;
      activeCode = code;
      document.getElementById("pop-code").textContent = src.code;
      const tier = document.getElementById("pop-tier");
      tier.className = `tier-chip ${src.tier}`;
      tier.textContent = src.tierLabel;
      document.getElementById("pop-doc").textContent = src.doc;
      document.getElementById("pop-meta").textContent = `${src.issuer} · ${src.date}`;
      const pg = document.getElementById("pop-page");
      pg.style.display = loc ? "block" : "none";
      pg.textContent = `Cited location: ${loc}`;

      pop.classList.add("open");
      const r = btn.getBoundingClientRect(), pr = pop.getBoundingClientRect();
      let left = Math.min(Math.max(12, r.left), window.innerWidth - pr.width - 12);
      let top = r.bottom + 8;
      if (top + pr.height > window.innerHeight - 12) top = Math.max(66, r.top - pr.height - 8);
      pop.style.left = `${left}px`;
      pop.style.top = `${top}px`;
      return;
    }
    if (!e.target.closest("#citation-popover")) close();
  });

  document.getElementById("pop-close").addEventListener("click", close);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  document.getElementById("pop-jump").addEventListener("click", () => {
    if (!activeCode) return;
    state.lastScrollY = window.scrollY;
    state.sourceFilter = "all";
    state.sourceQuery = "";
    document.getElementById("sources-search").value = "";
    document.querySelectorAll("[data-source-tier]").forEach((b) => b.classList.toggle("active", b.dataset.sourceTier === "all"));
    renderSourcesIndex();
    const row = document.getElementById(`source-${activeCode}`);
    close();
    if (row) {
      row.scrollIntoView({ behavior: "smooth", block: "center" });
      row.classList.remove("source-row-highlight");
      void row.offsetWidth;
      row.classList.add("source-row-highlight");
      returnPill.classList.add("visible");
    }
  });

  returnPill.addEventListener("click", () => {
    if (state.lastScrollY !== null) {
      window.scrollTo({ top: state.lastScrollY, behavior: "smooth" });
      returnPill.classList.remove("visible");
    }
  });
}

/* ---------- Scroll Choreography, Active Sidebar & Event Delegation ---------- */
function initScrollAndEvents() {
  const bar = document.getElementById("reading-progress");
  const sidebar = document.getElementById("sidebar");
  const sectionIds = ["sec-00", "sec-01", "sec-02", "sec-03", "sec-04", "sec-05", "sec-06", "sec-07", "sec-08"];

  window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0}%`;
    let cur = "sec-00";
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 165) cur = id;
    }
    document.querySelectorAll(".nav-item a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${cur}`));
  }, { passive: true });

  document.getElementById("mobile-menu-btn").addEventListener("click", () => sidebar.classList.toggle("open"));
  sidebar.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => sidebar.classList.remove("open")));

  // Scroll-reveal observer
  const revObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        revObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
  document.querySelectorAll(".reveal").forEach((el) => revObserver.observe(el));

  // Event delegation for all interactive controls
  document.addEventListener("click", (e) => {
    const m = e.target.closest("[data-mandate]");
    if (m) { state.mandateId = m.dataset.mandate; updateHeroWidgets(); return; }

    const eq = e.target.closest("[data-eq-term]");
    if (eq) { state.eqTerm = eq.dataset.eqTerm; updateHeroWidgets(); return; }

    const jumpTile = e.target.closest("[data-jump]");
    if (jumpTile && !e.target.closest(".cite")) {
      const target = document.querySelector(jumpTile.dataset.jump);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const scSt = e.target.closest("[data-sc-status]");
    if (scSt) { state.scorecardStatus = scSt.dataset.scStatus; updateScorecardTable(); return; }
    const scDm = e.target.closest("[data-sc-dim]");
    if (scDm) { state.scorecardDim = scDm.dataset.scDim; updateScorecardTable(); return; }

    const s12 = e.target.closest("[data-scopes-scenario]");
    if (s12) { state.scopesScenario = s12.dataset.scopesScenario; updateScopesLab(); return; }
    const wr = e.target.closest("[data-waste-reading]");
    if (wr) { state.wasteReading = wr.dataset.wasteReading; updateWasteLab(); return; }
    const wp = e.target.closest("[data-waste-perimeter]");
    if (wp) { state.wastePerimeter = wp.dataset.wastePerimeter; updateWasteLab(); return; }

    const t3 = e.target.closest("[data-sec03-tab]");
    if (t3) {
      state.sec03Tab = t3.dataset.sec03Tab;
      document.querySelectorAll("[data-sec03-tab]").forEach((b) => b.classList.toggle("active", b === t3));
      document.querySelectorAll("[data-sec03-panel]").forEach((p) => p.classList.toggle("active", p.dataset.sec03Panel === state.sec03Tab));
      return;
    }

    const ph = e.target.closest("[data-phasing]");
    if (ph) { state.phasing = ph.dataset.phasing; updateSection04(); return; }
    const bc = e.target.closest("[data-bofa-case]");
    if (bc) { state.bofaCase = bc.dataset.bofaCase; updateSection04(); return; }
    const wc = e.target.closest("[data-wts-case]");
    if (wc) { state.wtsCase = wc.dataset.wtsCase; updateSection04(); return; }

    const seg = e.target.closest("[data-split-seg]");
    if (seg) { state.splitSegId = seg.dataset.splitSeg; updateSplitWidget(); return; }

    const s4b = e.target.closest("[data-s4-base]");
    if (s4b) { state.scope4BaseId = s4b.dataset.s4Base; updateScope4BaseWidget(); return; }

    const st = e.target.closest("[data-source-tier]");
    if (st) {
      state.sourceFilter = st.dataset.sourceTier;
      document.querySelectorAll("[data-source-tier]").forEach((b) => b.classList.toggle("active", b === st));
      renderSourcesIndex();
    }
  });

  // Also allow hover preview on Equation terms & Split segments for fluid dynamic feel
  document.addEventListener("mouseover", (e) => {
    const eq = e.target.closest("[data-eq-term]");
    if (eq && eq.dataset.eqTerm !== state.eqTerm) { state.eqTerm = eq.dataset.eqTerm; updateHeroWidgets(); }
    const seg = e.target.closest("[data-split-seg]");
    if (seg && seg.dataset.splitSeg !== state.splitSegId) { state.splitSegId = seg.dataset.splitSeg; updateSplitWidget(); }
  });

  document.getElementById("sources-search").addEventListener("input", (e) => {
    state.sourceQuery = e.target.value.trim();
    renderSourcesIndex();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateHeroWidgets();
  renderSection01();
  renderSection02();
  updateScopesLab();
  updateWasteLab();
  renderSection03Tabs();
  renderSection04Static();
  updateSection04();
  renderSection05Static();
  updateSplitWidget();
  renderSection06Static();
  updateScope4BaseWidget();
  renderSection07();
  renderSourcesIndex();
  initCitations();
  initAudioSystem();
  initScrollAndEvents();
});
