/* ==========================================================================
   Single Verified Source of Truth — Veolia × EDHEC Capstone (V1.3 Complete)
   Zero invented figures. Every number linked to Annex A (Brief, S01–S46, W1–W4).
   ========================================================================== */

export const SOURCES = {
  Brief: { code: "Brief", doc: "Innovations in Finance — Capstone project, Subject 1 brief (course slides)", issuer: "EDHEC", date: "Sep 2026", tier: "t3", tierLabel: "Course Brief" },
  S01: { code: "S01", doc: "GreenUp Strategy Day presentation", issuer: "Veolia", date: "Feb 2024", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S02: { code: "S02", doc: "Multifaceted Performance & Value Creation presentation", issuer: "Veolia", date: "2026", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S03: { code: "S03", doc: "Multifaceted performance 2024 press release", issuer: "Veolia", date: "2025", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S04: { code: "S04", doc: "Universal Registration Document 2025 (incl. sustainability statement)", issuer: "Veolia", date: "27 Mar 2026", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S05: { code: "S05", doc: "Universal Registration Document 2024", issuer: "Veolia", date: "Mar 2025", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S06: { code: "S06", doc: "FY2025 results press release", issuer: "Veolia", date: "26 Feb 2026", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S07: { code: "S07", doc: "FY2025 results presentation", issuer: "Veolia", date: "26 Feb 2026", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S08: { code: "S08", doc: "Acquisition of Clean Earth — investor presentation", issuer: "Veolia", date: "21 Nov 2025", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S09: { code: "S09", doc: "“Veolia completes Clean Earth deal” press release", issuer: "Veolia", date: "1 Jun 2026", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S10: { code: "S10", doc: "H1 2026 results press release", issuer: "Veolia", date: "30 Jul 2026", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S11: { code: "S11", doc: "H1 2026 results presentation", issuer: "Veolia", date: "30 Jul 2026", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S12: { code: "S12", doc: "Climate Report 2024; Integrated Annual Report 2025", issuer: "Veolia", date: "2024–2025", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S13: { code: "S13", doc: "Form 8-K (Clean Earth sale agreement) and press release “sale of Clean Earth to Veolia for $3.04 billion”", issuer: "Enviri / SEC", date: "20–21 Nov 2025", tier: "t2", tierLabel: "Tier 2 · Enviri SEC" },
  S14: { code: "S14", doc: "Definitive proxy statement (DEFM14A)", issuer: "Enviri / SEC", date: "3 Apr 2026", tier: "t2", tierLabel: "Tier 2 · Enviri SEC" },
  S15: { code: "S15", doc: "Deep Dive Veolia USA", issuer: "Veolia", date: "2024–2025", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S16: { code: "S16", doc: "Deep Dive Waste to Value", issuer: "Veolia", date: "2025", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S17: { code: "S17", doc: "Deep Dive Water Technologies", issuer: "Veolia", date: "2025", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S18: { code: "S18", doc: "Form 10-K FY2023", issuer: "Enviri / SEC", date: "29 Feb 2024", tier: "t2", tierLabel: "Tier 2 · Enviri SEC" },
  S19: { code: "S19", doc: "Form 10-K FY2024", issuer: "Enviri / SEC", date: "Feb 2025", tier: "t2", tierLabel: "Tier 2 · Enviri SEC" },
  S20: { code: "S20", doc: "IG 1 — Materiality assessment implementation guidance", issuer: "EFRAG", date: "May 2024", tier: "t3", tierLabel: "Tier 3 · External Standard" },
  S21: { code: "S21", doc: "IG 2 — Value chain; IG 3 — List of ESRS data points", issuer: "EFRAG", date: "May 2024", tier: "t3", tierLabel: "Tier 3 · External Standard" },
  S22: { code: "S22", doc: "ESMA fact-finding report; EU Omnibus directive", issuer: "ESMA / EU", date: "2025", tier: "t3", tierLabel: "Tier 3 · External Standard" },
  S23: { code: "S23", doc: "Veolia working session of 16 Oct 2026: group notes and Q&A transcript (oral, not audited)", issuer: "Veolia / Group", date: "16 Oct 2026", tier: "oral", tierLabel: "Flagged · Oral (Not Audited)" },
  S24: { code: "S24", doc: "Peer CSRD reports: SUEZ, Séché Environnement, Befesa", issuer: "Peers", date: "2025–2026", tier: "t3", tierLabel: "Tier 3 · Peer Benchmark" },
  S25: { code: "S25", doc: "ESG Report 2024", issuer: "Enviri", date: "2025", tier: "t2", tierLabel: "Tier 2 · Seller Report" },
  S26: { code: "S26", doc: "Credit Opinion — Veolia Environnement", issuer: "Moody’s", date: "2 Dec 2025", tier: "t3", tierLabel: "Tier 3 · Rating Agency" },
  S27: { code: "S27", doc: "HEPACO acquisition announcement (SEC filing)", issuer: "Clean Harbors", date: "Feb 2024", tier: "t3", tierLabel: "Tier 3 · Peer Deal" },
  S28: { code: "S28", doc: "“Republic Services to acquire US Ecology”", issuer: "Republic Services", date: "9 Feb 2022", tier: "t3", tierLabel: "Tier 3 · Peer Deal" },
  S29: { code: "S29", doc: "“WM to acquire Stericycle for $7.2 billion”", issuer: "WM", date: "Jun 2024", tier: "t3", tierLabel: "Tier 3 · Peer Deal" },
  S30: { code: "S30", doc: "EV/EBITDA multiples by industry", issuer: "A. Damodaran, NYU Stern", date: "Jan 2026", tier: "t3", tierLabel: "Tier 3 · Benchmark" },
  S31: { code: "S31", doc: "National Capacity Assessment Report (CERCLA 104(c)(9))", issuer: "US EPA", date: "24 Jan 2025", tier: "t3", tierLabel: "Tier 3 · Regulator" },
  S32: { code: "S32", doc: "FY2025 results and financial statements", issuer: "Enviri / SEC", date: "24 Feb 2026", tier: "t2", tierLabel: "Tier 2 · Enviri SEC" },
  S33: { code: "S33", doc: "“New Enviri launches as standalone public company; sale of Clean Earth completed”", issuer: "Enviri", date: "1 Jun 2026", tier: "t2", tierLabel: "Tier 2 · Seller Release" },
  S34: { code: "S34", doc: "Form 10-K FY2020", issuer: "Harsco (now Enviri)", date: "2021", tier: "t2", tierLabel: "Tier 2 · Enviri SEC" },
  S35: { code: "S35", doc: "“GreenUp: Veolia launches its new strategic plan” press release", issuer: "Veolia", date: "29 Feb 2024", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S36: { code: "S36", doc: "Consolidated financial statements 2025 (highlights)", issuer: "Veolia", date: "Mar 2026", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S37: { code: "S37", doc: "Acquisition of CDPQ’s 30% stake in WTS — press release (PDF and web)", issuer: "Veolia", date: "7 May 2025", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S38: { code: "S38", doc: "FY2024 results press release", issuer: "Veolia", date: "Feb 2025", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S39: { code: "S39", doc: "Hazardous waste tuck-ins press releases (Veolia, 25 Jun 2025; Veolia North America, 26 Jun 2025)", issuer: "Veolia", date: "Jun 2025", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S40: { code: "S40", doc: "Out-of-scope context: Chameleon release (24 Jul 2025), Hungary plant release, Q1 2025 key figures, EC case M.11032, incineration web page", issuer: "Veolia / EC", date: "2023–2025", tier: "t1", tierLabel: "Tier 1 · Context" },
  S41: { code: "S41", doc: "Operating and financial review 2024", issuer: "Veolia", date: "Feb 2025", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S42: { code: "S42", doc: "“Veolia to build a major hazardous waste US player with the acquisition of Clean Earth”", issuer: "Veolia", date: "21 Nov 2025", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S43: { code: "S43", doc: "Earnings-call transcripts (Q2 2025, FY2025, H1 2026) — secondary, never used as figures", issuer: "Investing.com", date: "2025–2026", tier: "oral", tierLabel: "Flagged · Secondary Context" },
  S44: { code: "S44", doc: "GRI 201-1 — Economic performance", issuer: "GRI", date: "2016", tier: "t3", tierLabel: "Tier 3 · External Standard" },
  S45: { code: "S45", doc: "ESG Report 2024 and socio-economic footprint publications", issuer: "Veolia", date: "2024–2025", tier: "t1", tierLabel: "Tier 1 · Veolia Primary" },
  S46: { code: "S46", doc: "Statista sheets on US hazardous waste and PFAS markets — context only", issuer: "Statista", date: "2025–2026", tier: "oral", tierLabel: "Flagged · Context Only" },
  W1: { code: "W1", doc: "Veolia_Role2_Calculs.xlsx (Role 2 calculations workbook)", issuer: "EDHEC Group", date: "2026", tier: "wb", tierLabel: "Group Workbook" },
  W2: { code: "W2", doc: "Role3_Calculations.xlsx (Role 3 financial model)", issuer: "EDHEC Group", date: "2026", tier: "wb", tierLabel: "Group Workbook" },
  W3: { code: "W3", doc: "Veolia_Role5_working_file.xlsx (Role 5 CSRD mapping)", issuer: "EDHEC Group", date: "2026", tier: "wb", tierLabel: "Group Workbook" },
  W4: { code: "W4", doc: "Veolia_ESG_indicateurs_finance.xlsx (Group GreenUp workbook)", issuer: "EDHEC Group", date: "2026", tier: "wb", tierLabel: "Group Workbook" }
};

/* ==========================================================================
   4 Independent Audio Briefings (Parts 2 to 5; Part 6 intentionally excluded)
   To add Part 2 later: upload audio/part2-impact.mp3 & set status: "available"
   ========================================================================== */
export const AUDIO_BRIEFS = [
  {
    id: "part2",
    shortLabel: "ESG Impact",
    sectionId: "sec-03",
    title: "Brief 1 · ESG Impact & Attribution",
    speaker: "Thalia Ghali",
    status: "coming_soon",
    src: "",
    duration: "Coming soon",
    transcript:
      "Audio capsule pending upload. Key takeaways: (1) Indicators move via perimeter, method, or real change — only the third is progress. (2) WTS adds zero to ESG counters (already 100% consolidated). (3) Clean Earth lifts hazardous waste by +4.8% strict (+439 kt; +52% US) up to ~+39% (+3.6 Mt) if soil counts, with zero extra tonnes treated on entry. (4) Half of Veolia’s 2025 Scopes 1–2 gain (2.1 of 4.1 pts) came from a method restatement, while the exclusion rule shields Clean Earth’s emissions. (5) Verifiable real progress comes from +285 kt of new plants by 2027 plus three currently unmeasured physical synergies."
  },
  {
    id: "part3",
    shortLabel: "Financials",
    sectionId: "sec-04",
    title: "Brief 2 · Financial Justification & Synergies",
    speaker: "Tom Uzan & Loris Ventimiglia",
    status: "available",
    src: "audio/part3-financial.mp3",
    duration: "1:17",
    transcript:
      "In this part, we looked at the finance side of Veolia’s strategy. Veolia spent billions buying companies in water and hazardous waste. A good strategy isn’t enough, though: if you overpay, you destroy value for shareholders. So the real question is: did Veolia pay the right price? Let’s start with the biggest deal, Clean Earth—a US hazardous waste business bought for about $3 billion. Veolia says it paid 9.8x its EBITDA. That sounds reasonable, but there is a catch: you only get to that post-synergy multiple if every promised synergy is delivered, and that won’t happen before 2030. Without synergies, Veolia actually paid around 15x; for comparison, a similar deal in the same sector went for about 7x post-synergies. So yes, Veolia paid a premium. Is it justified? Our analysis says yes, as long as Veolia delivers at least half of its synergies—and its track record is reassuring: on Suez, it beat its own target. The second deal, Water Technologies, is harder to judge: Veolia never published the debt figure we need to verify its ~11x multiple, so we can only estimate it. The bottom line is that Veolia paid a high price for a rare asset: the bet pays off if, and only if, the synergies come through."
  },
  {
    id: "part4",
    shortLabel: "Value Split",
    sectionId: "sec-05",
    title: "Brief 3 · Stakeholder Value Distribution",
    speaker: "Thais",
    status: "available",
    src: "audio/part4-value.mp3",
    duration: "0:59",
    transcript:
      "Veolia’s two deals change who benefits in different ways. With WTS, Veolia gains a larger share of future profits. With Clean Earth, it brings an entire business into the Group. The first table shows where the money goes through wages, supplier payments, and taxes. The second table uses Veolia’s 2024 revenue (€44.7bn) to estimate that split: 2% to 3% remains unexplained. The third table shows what changes: Veolia buys CDPQ’s stake in WTS, while Clean Earth adds around 2,600 employees. We need more detailed accounts to measure exactly who gains or loses from each deal."
  },
  {
    id: "part5",
    shortLabel: "CSRD Lens",
    sectionId: "sec-06",
    title: "Brief 4 · CSRD & Double Materiality",
    speaker: "Nitani",
    status: "available",
    src: "audio/part5-csrd.mp3",
    duration: "1:48",
    transcript:
      "Now let’s look at the deals from a different angle: the CSRD, the European rules for sustainability reporting. Its key idea is double materiality, which means a company must report what it actually does to people and the environment. So I checked Veolia’s impact figures against that standard. First, none of Veolia’s three impact indicators is required by the standard, and in Veolia’s own documents two of them are filed on the business side—as commercial or financial items—rather than as environmental impact metrics. Second, on the acquisitions: I rated the impacts of each acquired company on Veolia’s own scale, and eight of the nine significant ones already existed before the purchase. Veolia now reports them, but it did not create them. And of the five negative impacts, none shows up in the GreenUp scorecard, while all five will appear in the CSRD report—so only the good news reaches the scorecard. We recommend three things: first, label each indicator on the scorecard as either required by CSRD or chosen by Veolia; second, write down the key definitions—one starting baseline for avoided emissions where the report currently gives three, the exact scope of the waste target, and the exact moment an acquired company starts to count; and third, split the waste indicator between existing sites and acquisitions so real progress becomes visible. Veolia already leaves acquisitions out of its emissions target, so it clearly knows how to do it. In short, the figures are accurate, but what the acquisitions add to them is mostly a change in what Veolia owns, not in what it does."
  }
];

/* ==========================================================================
   00 · Hero Interactive Equation & Mandate Pillars
   ========================================================================== */
export const HERO_DATA = {
  mandatePillars: [
    {
      id: "rq1",
      label: "RQ1 · ESG Contribution",
      summary: "Do WTS, Clean Earth & 3 US tuck-ins move Scope 4, water saved, hazardous waste treated & HR/social KPIs beyond consolidation?",
      cite: { code: "Brief", loc: "slide 24" }
    },
    {
      id: "rq2",
      label: "RQ2 · Multi-Stakeholder Split",
      summary: "How do the deals shift Veolia’s €44.7bn revenue split (25% employees, 64% suppliers & levies, 7% depreciation, 1–2% shareholders)?",
      cite: { code: "Brief", loc: "slide 24" }
    },
    {
      id: "rq3",
      label: "RQ3 · Synergies & Capital",
      summary: "Do ~11x (WTS) and ~9.8x (Clean Earth) hold up against €90m / $120m cost synergies — and which physical synergies change reality?",
      cite: { code: "Brief", loc: "slides 21, 24" }
    }
  ],
  equationExamples: {
    observed: {
      style: "",
      text: "Headline movement in Veolia’s 15-KPI GreenUp scorecard — which drives variable pay for 25,000 employees (10% of executives’ performance shares on Scopes 1–2).",
      cite: { code: "S02", loc: "slides 29, 31" }
    },
    perimeter: {
      style: "perimeter",
      text: "Proof at Veolia: Clean Earth lifts hazardous waste +4.8% to ~+39% on entry (+52% US) without one additional tonne treated; Tashkent district heating drove ~30% of 2025’s Scope 4 rise.",
      cite: { code: "S04", loc: "pp.211, 224" }
    },
    method: {
      style: "method",
      text: "Proof at Veolia: 2.1 of 4.1 apparent points of Scopes 1–2 reduction in 2025 came from a calculation restatement (−14.5% → −16.6%), while the exclusion rule shields Clean Earth’s emissions.",
      cite: { code: "S04", loc: "pp.12, 217" }
    },
    real: {
      style: "real",
      text: "Proof at Veolia: −0.5 Mt of Scopes 1–2 from coal exit & methane capture in 2025, plus +285 kt of new hazardous waste treatment plants by 2027 (~35% of the expected strict rise).",
      cite: { code: "S04", loc: "p.207; S16, slides 16, 31" }
    }
  }
};

/* ==========================================================================
   01 · Executive Answer — 8 Balanced Headline KPIs (2 per Part 2–5) & 7 Findings
   ========================================================================== */
export const SECTION_01 = {
  headlineKpis: [
    {
      part: "ESG Impact · 1/2",
      value: "2.1 / 4.1 pts",
      count: 2.1, decimals: 1, suffix: " / 4.1 pts",
      title: "Scopes 1–2 gain from method shift",
      desc: "Over half of Veolia’s apparent 2024→2025 reduction came from restating 2024 (−14.5% → −16.6%).",
      tone: "method", evidence: "established", jump: "#sec-03",
      cite: { code: "S04", loc: "p.217" }
    },
    {
      part: "ESG Impact · 2/2",
      value: "+4.8% to +39%",
      title: "Clean Earth waste entry lift (+52% US)",
      desc: "+439 kt strict, up to +3.6 Mt if soil counts — with 0 new tonnes treated; 9 Mt already met (9,181 kt).",
      tone: "perimeter", evidence: "estimated", jump: "#sec-03",
      cite: { code: "S25", loc: "p.5; S15, slide 15" }
    },
    {
      part: "Financial · 1/2",
      value: "15.0x → 9.4x",
      title: "Clean Earth multiple (pub. ~9.8x)",
      desc: "Full price pre-synergies (19.0x FY25 actual); reaches 9.4x only in 2030 at full $120m run-rate.",
      tone: "veolia", evidence: "estimated", jump: "#sec-04",
      cite: { code: "S08", loc: "S14; S26; W2" }
    },
    {
      part: "Financial · 2/2",
      value: "55%–70%",
      title: "Synergies needed to cover premium",
      desc: "Covers $423–530m BofA premium at ≥$60m/yr by 2028. WTS ~11x cannot be verified (implied debt ~€1.2bn).",
      tone: "veolia", evidence: "estimated", jump: "#sec-04",
      cite: { code: "S14", loc: "pp.58–60; S37" }
    },
    {
      part: "Value Split · 1/2",
      value: "2%–3%",
      title: "Unexplained residual (€0.89–1.34bn)",
      desc: "Brief’s €44.7bn split uses FY24 revenue, sums to 97–98%, and mixes non-cash depreciation (7%).",
      tone: "method", evidence: "established", jump: "#sec-05",
      cite: { code: "Brief", loc: "slide 24; S06, p.1" }
    },
    {
      part: "Value Split · 2/2",
      value: "~2,600 vs 0",
      title: "Asymmetric stakeholder footprint",
      desc: "Clean Earth adds ~2,600 staff & new flows (external disposal loses volumes); WTS transfers profit rights.",
      tone: "perimeter", evidence: "established", jump: "#sec-05",
      cite: { code: "S08", loc: "S09; S37" }
    },
    {
      part: "CSRD Lens · 1/2",
      value: "0 / 3 KPIs",
      title: "GreenUp KPIs matching ESRS (37/40 omitted)",
      desc: "All three headline impact KPIs are entity-specific; 37 of 40 ESRS data points never appear on scorecard.",
      tone: "method", evidence: "established", jump: "#sec-06",
      cite: { code: "S21", loc: "S04, pp.217, 233, 247" }
    },
    {
      part: "CSRD Lens · 2/2",
      value: "0 / 5 vs 5 / 5",
      title: "Negative impacts: GreenUp vs CSRD",
      desc: "Zero of 5 negative impacts moves a GreenUp KPI, while all 5 appear in CSRD (8/9 pre-dated closing).",
      tone: "veolia", evidence: "estimated", jump: "#sec-06",
      cite: { code: "S20", loc: "W3" }
    }
  ],

  sevenFindings: [
    {
      num: "01", tone: "real", jump: "#sec-02",
      title: "Most 2027 targets were already met in 2025 — before Clean Earth closed",
      body: "Veolia confirms the deals serve three roles: protecting achieved results, helping lagging KPIs, and preparing the post-2027 cycle.",
      evidence: "established", cite: { code: "S02", loc: "slide 31; S23" }
    },
    {
      num: "02", tone: "perimeter", jump: "#sec-03",
      title: "WTS adds nothing to ESG indicators — and its ~11x multiple cannot be verified",
      body: "Already 100% consolidated since 2022. Value is purely financial and organisational; standalone WTS net debt is unpublished.",
      evidence: "established", cite: { code: "S04", loc: "pp.183, 334; S37" }
    },
    {
      num: "03", tone: "perimeter", jump: "#sec-03",
      title: "Clean Earth lifts hazardous waste on entry without one extra tonne treated",
      body: "+4.8% strict (+439 kt; +52% US), up to ~+39% (+3.6 Mt) if soil counts. Whether the target is 9 Mt or 10 Mt decides the reading.",
      evidence: "estimated", cite: { code: "S25", loc: "p.5; S04, p.224" }
    },
    {
      num: "04", tone: "method", jump: "#sec-03",
      title: "The climate rule protects the target, not the climate",
      body: "Counted without restatement, Clean Earth uses 31%–51% of the 154 kt margin to −18% (ceiling pushes to −17.8%). Excluded as a significant acquisition: its tonnes count, its emissions do not.",
      evidence: "established", cite: { code: "S04", loc: "p.12; S23" }
    },
    {
      num: "05", tone: "method", jump: "#sec-06",
      title: "CSRD double materiality confirms it: only favourable impacts reach the scorecard",
      body: "None of the three GreenUp impact KPIs is an ESRS data point, and none of the five negative impacts of acquired assets moves a GreenUp KPI.",
      evidence: "established", cite: { code: "S21", loc: "W3" }
    },
    {
      num: "06", tone: "veolia", jump: "#sec-04",
      title: "Clean Earth was bought at a full price — justified if 55%–70% of synergies land",
      body: "15.0x pre-synergies (9.4x in 2030 at full $120m run-rate). Premium ($423–530m over BofA standalone) breaks even above ~$60m/yr by 2028.",
      evidence: "estimated", cite: { code: "S14", loc: "pp.58–62; W2" }
    },
    {
      num: "07", tone: "method", jump: "#sec-05", wide: true,
      title: "The brief’s €44.7bn value split cannot be validated as it stands",
      body: "Its denominator is FY2024 revenue (€44,692m), shares add up to only 97%–98% (2%–3% unexplained residual), and non-cash depreciation (7%) is mixed with cash payments.",
      evidence: "established", cite: { code: "Brief", loc: "slide 24; S06, p.1" }
    }
  ]
};

/* ==========================================================================
   02 · Closed Perimeter (5 Deals) & Full 15-KPI GreenUp Scorecard
   ========================================================================== */
export const SECTION_02 = {
  deals: [
    {
      name: "Water Technologies & Solutions (WTS)",
      type: "30% Minority Buyout (CDPQ → 100%)",
      closed: "30 June 2025",
      price: "USD 1.75bn (~EUR 1.5bn)",
      multiple: "~11x 2025e EBITDA post-syn. (unverifiable)",
      synergies: "~EUR 90m run-rate by 2027",
      method: "Method A · Retrospective (18m ownership)",
      esgRule: "Already 100% consolidated; 0 ESG lift",
      tone: "top-method", evidence: "established",
      cite: { code: "S37", loc: "S04, pp.334, 348" }
    },
    {
      name: "Clean Earth (ex-Enviri Corp., NYSE)",
      type: "100% Acquisition · US Hazardous Waste",
      closed: "1 June 2026",
      price: "EV USD 3.0bn (c. €2.6bn) / Cash $3.04bn",
      multiple: "~9.8x 2026E post-syn. (15.0x pre / 9.4x 2030)",
      synergies: "USD 120m by Year 4 (c. $90m costs)",
      method: "Method B · Ex-Ante SEC Baseline",
      esgRule: "Enters ESG KPIs after 1 full reporting year",
      tone: "top-red", evidence: "established",
      cite: { code: "S08", loc: "S09; S13; S14; S23" }
    },
    {
      name: "Three US Hazardous Waste Tuck-Ins",
      type: "100% · NEDT (€67m), Bio-Med (€33m), Ingenium (€90m)",
      closed: "May–June 2025",
      price: "EUR 190m total (published in URD p.348)",
      multiple: "Not established (no EBITDA disclosed)",
      synergies: "Not published standalone",
      method: "Scoped strictly (excludes 5-deal bundle)",
      esgRule: "Social data deferred to 1 Jan 2026",
      tone: "top-perimeter", evidence: "established",
      cite: { code: "S04", loc: "pp.256, 348" }
    }
  ],
  outOfScope: [
    "Chameleon Industries (US, €57m) — excluded from €247m 4-deal US total (S04, pp.334, 348)",
    "Zeeklite (Japan, €85m) & Alagoas Ambiental (Brazil) — H1 2025 5-tuck-in bundle (€300m EV, +100 kt) never attributed to in-scope deals (S39; S16)",
    "Danubius (Hungary, €271m), Hofmann (Germany, €315m), 2024–25 disposals (context only), and future M&A (Subject 2)"
  ],
  scorecard15: [
    { dim: "Commercial", kpi: "Extended NPS", base: "n/a", actual: "57 (84% rev.)", target: "≥ 30 (80% rev.)", status: "met", rule: "Met", cite: { code: "S02", loc: "slide 31" } },
    { dim: "Commercial", kpi: "Erased emissions (Scope 4)", base: "13.45 Mt (2023)", actual: "+23.6% (16.6 Mt)", target: "+30% vs 2023", status: "not_met", rule: "Not met; 3 different 2023 baselines in URD", cite: { code: "S04", loc: "pp.10, 162, 517" } },
    { dim: "Commercial", kpi: "Growth boosters revenue", base: "€12.032bn (2023)", actual: "+8.6% CAGR", target: "CAGR ≥ 5%", status: "met", rule: "Met; reported “including tuck-ins” (acquisitions lift it)", cite: { code: "S02", loc: "slide 6" } },
    { dim: "Environmental", kpi: "Scopes 1–2 reduction", base: "24.3 Mt (2021)", actual: "−18.6%", target: "−18% vs 2021", status: "met", rule: "Met; excludes significant acquisitions (Clean Earth)", cite: { code: "S04", loc: "pp.12, 217" } },
    { dim: "Environmental", kpi: "Decarbonisation capex", base: "n/a", actual: "€141m (€274.5m cum.)", target: "€600m cumulative", status: "not_met", rule: "Not met (46% cumulative 2024–25)", cite: { code: "S04", loc: "pp.191, 202" } },
    { dim: "Environmental", kpi: "Fresh water saved", base: "1.40bn m³", actual: "1.574bn m³", target: "≥ 1.5bn m³", status: "met", rule: "Met (driven by leak reduction; reuse fell)", cite: { code: "S04", loc: "pp.191, 518" } },
    { dim: "Environmental", kpi: "Biodiversity sensitive sites", base: "59% (2023)", actual: "80%", target: "≥ 85%", status: "not_met", rule: "Not met; site list frozen to 2027", cite: { code: "S04", loc: "p.240" } },
    { dim: "Environmental", kpi: "Hazardous waste treated", base: "n/a (2024: 9,196 kt)", actual: "9,181 kt", target: "9 Mt pub. / 10 Mt oral", status: "met", rule: "Met before Clean Earth; no constant-perimeter rule", cite: { code: "S04", loc: "p.224; S02" } },
    { dim: "HR", kpi: "Lost-time injury rate", base: "4.95", actual: "4.11", target: "≤ 4.1", status: "nearly", rule: "Nearly met; 2025 acquisitions excluded until 2026", cite: { code: "S04", loc: "p.256" } },
    { dim: "HR", kpi: "Employee engagement", base: "89%", actual: "88%", target: "≥ 85%", status: "met", rule: "Met; Clean Earth enters after 1 full year", cite: { code: "S23", loc: "oral" } },
    { dim: "HR", kpi: "Women in Group Mgmt. Comm.", base: "25.6%", actual: "37.1%", target: "≥ 30%", status: "met", rule: "Met", cite: { code: "S02", loc: "slide 31" } },
    { dim: "Social", kpi: "Ethics & compliance", base: "88%", actual: "88%", target: "≥ 83%", status: "met", rule: "Met", cite: { code: "S02", loc: "slide 31" } },
    { dim: "Social", kpi: "Inclusive access to services", base: "7.8m people", actual: "9.2m people", target: "8.4m (const. scope)", status: "met", rule: "Met", cite: { code: "S02", loc: "slide 31" } },
    { dim: "Economic", kpi: "Current net income (Group)", base: "€1,335m (2023)", actual: "€1,643m", target: "CAGR ~10%", status: "met", rule: "On track (+9.1% constant FX in 2025)", cite: { code: "S06", loc: "p.1" } },
    { dim: "Economic", kpi: "FCF before disc. growth capex", base: "€1,683m (2023)", actual: "€1,782m", target: "Annual target", status: "met", rule: "Keep separate from Net FCF (€1,178m)", cite: { code: "S02", loc: "slide 31; S06" } },
    { dim: "Economic", kpi: "Post-tax ROCE", base: "8.3% (2023)", actual: "9.4%", target: "Annual target", status: "met", rule: "Reached 2 years early; Clean Earth dips pre-syn.", cite: { code: "S02", loc: "slide 4" } }
  ],
  target9vs10: [
    { src: "GreenUp Strategy Day (Feb 2024)", text: "10 Mt at launch of the plan", cite: { code: "S01", loc: "p.9" } },
    { src: "URD 2025", text: "Lowered to 9 Mt after 2024 RGS disposal", cite: { code: "S04", loc: "pp.23, 224" } },
    { src: "2026 Multifaceted Presentation", text: "“9.2 Mt of hazardous waste & pollutants treated in 2025 // 9 Mt targeted in 2027”", cite: { code: "S02", loc: "slides 5, 21" } },
    { src: "Veolia Oral Answer (16 Oct)", text: "Official target 10 Mt (incl. contaminated soils); 9 Mt = regulated waste only; Clean Earth treats 3–4 Mt/yr inside 10 Mt", cite: { code: "S23", loc: "oral" } }
  ]
};

/* ==========================================================================
   03 · ESG Impact & Attribution Lab (Verified V1.3 Data)
   ========================================================================== */
export const SECTION_03 = {
  scopes12: {
    base2021Kt: 24275, actual2024RestatedKt: 20250, actual2025Kt: 19752,
    published2024Pct: -14.5, methodEffectPt: -2.1, realProgressPt: -2.0, published2025Pct: -18.6,
    target2027Pct: -18.0, marginKt: 154,
    scenarios: {
      excluded: { label: "Veolia Rule (Excluded)", addKt: 0, newPct: -18.6, marginUsedPct: "0%", verdictType: "method", note: "Veolia excludes “significant acquisitions” from the −18% target (S04, p.12; oral S23). Clean Earth’s tonnes lift the waste KPI while its emissions stay outside the pay-linked climate target (10% of executives’ performance shares)." },
      central: { label: "Central (+47 kt)", addKt: 47, newPct: -18.4, marginUsedPct: "31%", verdictType: "warn", note: "Without restatement, central estimate (+47 kt: 40% Enviri revenue × 0.6 relative intensity, W1) eats 31% of Veolia’s 154 kt safety margin (−18.6% → −18.4%)." },
      proportional: { label: "Proportional (+79 kt)", addKt: 79, newPct: -18.3, marginUsedPct: "51%", verdictType: "warn", note: "Straight revenue-proportional allocation (+79 kt, W1) consumes 51% of Veolia’s 154 kt safety margin (−18.6% → −18.3%)." },
      ceiling: { label: "Enviri Ceiling (+196 kt)", addKt: 196, newPct: -17.8, marginUsedPct: "127% (Target Missed)", verdictType: "veolia", note: "Whole-Enviri ceiling (196 kt CO₂e, S25 p.26) pushes Veolia back to −17.8% — breaching the −18% target governing executive variable pay." }
    }
  },
  wasteCounter: {
    actual2024Kt: 9196, actual2025Kt: 9181, newPlantsKt: 285, tuckInsKt: 100,
    cleanEarthStrictKt: 439, cleanEarthBroadKt: 3600,
    targetStrictKt: 9000, targetBroadKt: 10000, constantTargetStrictKt: 9539,
    usBase2023Kt: 850, usTarget2027Kt: 2000
  },
  cleanEarthEsgBaseline: [
    { item: "Hazardous waste recycled or reused", y2023: "437 kt", y2024: "439 kt", evidence: "established", cite: { code: "S25", loc: "p.5" } },
    { item: "Soil reused", y2023: "3.4 Mt", y2024: "2.8 Mt", evidence: "established", cite: { code: "S25", loc: "p.5" } },
    { item: "Share of processed materials recycled/reused", y2023: "91%", y2024: "91%", evidence: "established", cite: { code: "S25", loc: "p.5" } },
    { item: "Permitted facilities (TSDF) & permits", y2023: "18 / ~600", y2024: "19 / ~700", evidence: "established", cite: { code: "S18", loc: "Item 1; S19" } },
    { item: "Scopes 1–2 (whole Enviri group, not assured)", y2023: "Not pub.", y2024: "196 kt CO₂e", evidence: "established", cite: { code: "S25", loc: "p.26" } },
    { item: "Clean Earth standalone emissions & total treated", y2023: "Not pub.", y2024: "Not pub.", evidence: "not_established", cite: { code: "S25", loc: "Enviri" } }
  ],
  cleanEarthFinancials: {
    years: [
      { year: "2022", revenue: 827.8, hwRev: null, soilRev: null, adjEbitda: null, opInc: null, capex: 22.0 },
      { year: "2023", revenue: 928.3, hwRev: 770.5, soilRev: 157.8, approxMix: true, adjEbitda: null, opInc: 77.0, capex: 32.1 },
      { year: "2024", revenue: 940.3, hwRev: null, soilRev: null, revNote: "$939.8m (10-K) / $940.3m (combined)", adjEbitda: 150.5, opInc: 71.2, capex: 32.8 },
      { year: "2025", revenue: 973.9, hwRev: 824.244, soilRev: 149.609, exactMix: true, adjEbitda: 158.1, opInc: 59.6, capex: null }
    ]
  },
  cleanEarthByIndicator: [
    { indicator: "Hazardous waste", actual2025: "9,181 kt", target2027: "9,000 kt", perimeterStrict: "+439 kt (+4.8% Grp / +52% US)", perimeterBroad: "Up to +3.6 Mt (+39% / >3 Mt US)", realChange: "0 on entry; later disposal in Veolia plants", nature: "perimeter", natureLabel: "Perimeter", evidence: "estimated", cite: { code: "W1", loc: "tab 2; S25" } },
    { indicator: "Scope 4 erased", actual2025: "16.6 Mt", target2027: "+30% vs 2023", perimeterStrict: "Up to ~0.5 Mt (456 kt × 1.08 t/t)", perimeterBroad: "Up to ~0.5 Mt (soil factor unestablished)", realChange: "0: already recycled under Enviri", nature: "perimeter", natureLabel: "Perimeter", evidence: "estimated", cite: { code: "W1", loc: "tab 2; S12" } },
    { indicator: "Scopes 1–2", actual2025: "−18.6%", target2027: "−18%", perimeterStrict: "+47–79 kt (ceil. 196 kt) — excluded", perimeterBroad: "31%–51% of margin if counted", realChange: "Adverse short term; improves if transport falls", nature: "method", natureLabel: "Shielded", evidence: "estimated", cite: { code: "S04", loc: "p.12; S23" } },
    { indicator: "Fresh water saved", actual2025: "1,574 Mm³", target2027: "≥ 1,500 Mm³", perimeterStrict: "+0.3 Mm³ (0.02% of KPI)", perimeterBroad: "+0.3 Mm³ (negligible)", realChange: "Nothing published", nature: "neutral", natureLabel: "Negligible", evidence: "estimated", cite: { code: "W1", loc: "tab 2" } },
    { indicator: "Decarb. capex", actual2025: "€141m", target2027: "€600m cum.", perimeterStrict: "0", perimeterBroad: "0", realChange: "0", nature: "neutral", natureLabel: "Neutral", evidence: "established", cite: { code: "S04", loc: "p.191" } },
    { indicator: "Biodiversity", actual2025: "80%", target2027: "≥ 85%", perimeterStrict: "0% to 2027 (site list frozen)", perimeterBroad: "0% to 2027 (site list frozen)", realChange: "Post-2027 risk: 10 sites w/o plan → 75%", nature: "method", natureLabel: "Frozen → 2028", evidence: "established", cite: { code: "S04", loc: "p.240; W1" } }
  ],
  formulaAudit: [
    { indicator: "Scope 4 (Mt CO₂e)", formula: "13.45 × (1 + growth vs 2023)", y2024: "15.20 / 15.2", y2025: "16.62 / 16.6", status: "Reproduced", statusKey: "reproduced", evidence: "established", cite: { code: "S04", loc: "pp.191, 211" } },
    { indicator: "Scopes 1–2 (vs 2021)", formula: "(E₂₀₂₁ − Eₜ) / E₂₀₂₁", y2024: "−14.5% / −14.5%", y2025: "−18.6% / −18.6%", status: "Reproduced, 2 methods", statusKey: "caveat", evidence: "established", cite: { code: "S04", loc: "p.217; S12" } },
    { indicator: "Fresh water (Mm³)", formula: "Reuse + desalination + leaks avoided", y2024: "n/a / 1,454", y2025: "n/a / 1,574", status: "1 of 3 components pub.", statusKey: "partial", evidence: "not_established", cite: { code: "S04", loc: "p.518; S23" } },
    { indicator: "Decarb. capex (€m)", formula: "Coal + methane, cumulated from 2024", y2024: "n/a / 133.5", y2025: "130+11 / 141", status: "Reproduced", statusKey: "reproduced", evidence: "established", cite: { code: "S04", loc: "pp.191, 207" } },
    { indicator: "Biodiversity (%)", formula: "Avg(completed / required) per site", y2024: "n/a / 73%", y2025: "n/a / 80%", status: "Not reproducible", statusKey: "partial", evidence: "not_established", cite: { code: "S04", loc: "pp.239–240" } },
    { indicator: "Hazardous waste (kt)", formula: "Published tonnage, no formula", y2024: "n/a / 9,196", y2025: "n/a / 9,181", status: "Two definitions coexist", statusKey: "caveat", evidence: "established", cite: { code: "S04", loc: "p.224; S23" } }
  ],
  synergies: [
    { title: "1. Internalised Disposal", mechanism: "Clean Earth has 0 incinerators/landfills; Veolia operates 6 US incinerators and plans to fill them with Clean Earth volumes.", kpi: "% of Clean Earth tonnes treated in Veolia plants", statusNote: "Tracked internally (oral); not published", evidence: "not_established", cites: [{ code: "S19", loc: "Item 1A" }, { code: "S09", loc: "PR" }, { code: "S23", loc: "oral" }] },
    { title: "2. Transport Optimisation", mechanism: "Combined US footprint across 39 states, >150 sites, and ~800 Clean Earth vehicles — the main lever to cut fleet emissions.", kpi: "Kilometres travelled per tonne collected", statusNote: "No ESG target attached to $120m cost synergies", evidence: "not_established", cites: [{ code: "S08", loc: "slides 8, 13" }, { code: "S19", loc: "Item 1" }] },
    { title: "3. PFAS Destruction", mechanism: "Clean Earth collects PFAS-bearing leachate & soil; Veolia destroys PFAS at Port Arthur at up to 99.9999% efficiency.", kpi: "Tonnes of PFAS streams destroyed", statusNote: "No capacity, volume, or timeline disclosed", evidence: "not_established", cites: [{ code: "S19", loc: "Item 1" }, { code: "S02", loc: "slide 21" }] }
  ],
  wtsAudit: [
    { question: "Effect of 30% buyout on ESG KPIs?", answer: "Zero — already 100% consolidated since 2022; only shareholder profit share changes.", evidence: "established", cite: { code: "S04", loc: "p.183" } },
    { question: "WT business weight in fresh water saved?", answer: "Sits inside 1,574 Mm³ via reuse & desalination plants, but standalone share is unpublished.", evidence: "not_established", cite: { code: "S23", loc: "oral" } },
    { question: "Does Water Tech contribute to Scope 4?", answer: "Contradictory: no water line in published breakdown, yet Veolia calls it “particularly significant” orally.", evidence: "not_established", cite: { code: "S23", loc: "oral" } }
  ],
  robustness: [
    { solid: "Scope 4 & Scopes 1–2 formulas reproduced on 2024 & 2025", assumption: "Clean Earth share of Enviri emissions (40% rev., 0.6 intensity)" },
    { solid: "2.1 pt method effect on Scopes 1–2 (2024 → 2025)", assumption: "Scope 4 eligibility of Clean Earth tonnes at 1.08 t/t average factor" },
    { solid: "Strict perimeter lift +439 kt (+4.8% Grp; +52% US)", assumption: "Comparing “recycled/reused” tonnes vs Veolia “treated” tonnes" },
    { solid: "Hard 196 kt CO₂e ceiling & 0 incinerators at Clean Earth", assumption: "Clean Earth KPI entry in 2027 (oral rule S23; social precedent S04)" }
  ]
};

/* ==========================================================================
   04 · Financial Justification & Synergies (Report Section 3, pp. 20–27)
   ========================================================================== */
export const SECTION_04 = {
  multipleByYear: [
    { year: "2026", moodysSyn: 0, oralSyn: 0, moodysMult: 15.0, oralMult: 15.0 },
    { year: "2027", moodysSyn: 50, oralSyn: 24, moodysMult: 12.0, oralMult: 13.4 },
    { year: "2028", moodysSyn: 75, oralSyn: 84, moodysMult: 10.9, oralMult: 10.6 },
    { year: "2029", moodysSyn: 100, oralSyn: 108, moodysMult: 10.0, oralMult: 9.7 },
    { year: "2030", moodysSyn: 120, oralSyn: 120, moodysMult: 9.4, oralMult: 9.4 }
  ],
  comparablesLadder: [
    { label: "HEPACO, post-synergy (peer deal)", mult: 7.1, highlight: false, cite: "S27" },
    { label: "Clean Earth, rebuilt 2030 (full $120m syn.)", mult: 9.4, highlight: "real", cite: "W2" },
    { label: "Clean Earth, Veolia published (2026E + syn.)", mult: 9.8, highlight: "veolia", cite: "S08" },
    { label: "Clean Harbors, trading (2026E)", mult: 11.1, highlight: false, cite: "S14" },
    { label: "HEPACO, pre-synergy (LTM)", mult: 11.1, highlight: false, cite: "S27" },
    { label: "Republic / US Ecology, post-synergy", mult: 11.2, highlight: false, cite: "S28" },
    { label: "Clean Earth, 2026E pre-syn. (Enviri $201m)", mult: 14.9, highlight: "perimeter", cite: "S14" },
    { label: "Solid-waste peers trading median (2026E)", mult: 14.9, highlight: false, cite: "S14" },
    { label: "WM / Stericycle (LTM, BofA)", mult: 17.0, highlight: false, cite: "S14" },
    { label: "Clean Earth, FY2025 actual Adj. EBITDA ($158.1m)", mult: 19.0, highlight: "veolia", cite: "S32" }
  ],
  bofaCases: {
    moodys: { label: "Case A · Moody’s Phasing", pv: 762, vsTrading: 70, vsTrans: 55, tradingPrem: 530, transPrem: 423, note: "Moody’s phasing ($50/75/100/120m), taxed at Veolia’s 25.4% rate, net of c.$90m implementation costs, discounted at 9.25% WACC." },
    oral: { label: "Case B · Veolia Oral Phasing", pv: 755, vsTrading: 70, vsTrans: 56, tradingPrem: 530, transPrem: 423, note: "Veolia’s “usual” 20/50/20/10% phasing ($24/84/108/120m cumulative). Phasing barely alters the PV; run-rate & WACC drive the answer." },
    delayed: { label: "Case C · One-Year Delay", pv: 691, vsTrading: 77, vsTrans: 61, tradingPrem: 530, transPrem: 423, note: "A 1-year execution slip reduces synergy PV to $691m, pushing required delivery up to 61%–77% — still viable only above ~$60m/yr by 2028." }
  },
  wtsScenarios: {
    base: { label: "Implied Base (~11.0x)", mult: "11.0x", debt: "~€1.2bn implied", note: "Solving backwards from 11x × (€472m EBITDA + €90m synergies) = €6,182m EV minus €5,000m implied equity (30% = €1.5bn). Standalone WTS net debt is unpublished." },
    vvt30: { label: "If 30% Synergies in VVT", mult: "11.6x", debt: "~€1.2bn implied", note: "Part of the €90m synergies may arise in legacy Veolia Water Technologies (VVT) rather than WTS (“cousins that hardly talk”, S23), flattering the WTS multiple." },
    nosyn: { label: "Pre-Synergies (0% Syn.)", mult: "13.1x", debt: "~€1.2bn implied", note: "Without the €90m cost synergies, the implied EV/EBITDA multiple rises to 13.1x — confirming synergies carry the entire financial case." }
  },
  enviriForecasts: [
    { yr: "2026E", rev: 1054, ebitda: 201, margin: "19.1%", capex: 69, ufcf: 95 },
    { yr: "2027E", rev: 1145, ebitda: 230, margin: "20.1%", capex: 67, ufcf: 119 },
    { yr: "2028E", rev: 1223, ebitda: 260, margin: "21.3%", capex: 55, ufcf: 157 },
    { yr: "2029E", rev: 1322, ebitda: 294, margin: "22.2%", capex: 60, ufcf: 178 },
    { yr: "2030E", rev: 1422, ebitda: 331, margin: "23.3%", capex: 62, ufcf: 204 }
  ],
  priceMeasures: [
    { measure: "Enterprise Value", value: "USD 3.0bn (c. €2.6bn)", cite: { code: "S08", loc: "slide 6" } },
    { measure: "Cash consideration paid to Enviri", value: "USD 3.04bn", cite: { code: "S13", loc: "S14" } },
    { measure: "Estimated net proceeds (BofA)", value: "USD 2.975bn", cite: { code: "S14", loc: "p.48" } },
    { measure: "H1 2026 cash outflow (Veolia)", value: "c. EUR 2,778m", cite: { code: "S10", loc: "H1 2026" } }
  ]
};

/* ==========================================================================
   05 · Stakeholder Value Distribution (Report Section 4, pp. 28–31)
   ========================================================================== */
export const SECTION_05 = {
  splitSegments: [
    { id: "suppliers", label: "Suppliers & Levies", pct: 64, pctText: "64%", eur: "€28.608bn", color: "#334155", issue: "Blends private suppliers and public taxes/levies into one bucket — hiding who receives what under GRI 201-1." },
    { id: "employees", label: "Employees", pct: 25, pctText: "25%", eur: "€11.175bn", color: "#0F766E", issue: "Total wage share shifts structurally when buying labour-intensive businesses (~2,600 Clean Earth staff), without changing pay per employee." },
    { id: "depreciation", label: "Depreciation & Amort.", pct: 7, pctText: "7%", eur: "€3.129bn", color: "#3B5BDB", issue: "Non-cash accounting charge — NOT a payment distributed to any stakeholder. Shows uses of revenue, not cash flows." },
    { id: "shareholders", label: "Shareholders", pct: 1.5, pctText: "1–2%", eur: "€0.447–0.894bn", color: "#E30613", issue: "Dividends vs net income must be kept separate; WTS transfers CDPQ’s 30% profit rights to Veolia shareholders." },
    { id: "residual", label: "Unexplained Residual", pct: 2.5, pctText: "2–3%", eur: "€0.894–1.341bn", color: "#C2410C", issue: "Brief shares sum only to 97%–98%! Likely omits lenders’ interest (~1.5%) and minority interests (~0.8%) — accounting reconciliation still required." }
  ],
  stakeholderMatrix: [
    { group: "Employees", wts: "Same wage bill; possible support-function rationalisation", ce: "Wage bill rises (~2,600 staff enter surveys after 1 full year)", tone: "perimeter", cite: { code: "S23", loc: "oral" } },
    { group: "Suppliers & Levies", wts: "Margin pressure from purchasing synergies", ce: "New local purchases & taxes, BUT external disposal sites lose volumes to Veolia’s 6 incinerators", tone: "veolia", cite: { code: "S23", loc: "oral" } },
    { group: "Depreciation", wts: "No change", ce: "New depreciation + PPA amortisation (excluded from headline current net income)", tone: "method", cite: { code: "S10", loc: "H1 2026" } },
    { group: "Lenders", wts: "Higher interest if debt-funded (€1.5bn outflow)", ce: "Higher interest: net debt jumped +€2,778m for Clean Earth in H1 2026", tone: "method", cite: { code: "S10", loc: "H1 2026" } },
    { group: "Shareholders", wts: "Recover CDPQ’s 30% of WTS profits immediately", ce: "Slight dilution in 2026; EPS accretive from 2027 before PPA", tone: "real", cite: { code: "S06", loc: "S09" } },
    { group: "Customers & Society", wts: "Integrated water technology & PFAS offer (non-monetary)", ce: "Integrated US hazardous waste network & PFAS destruction (non-monetary)", tone: "real", cite: { code: "S06", loc: "S08" } }
  ]
};

/* ==========================================================================
   06 · CSRD / Double Materiality Lens (Report Section 5, pp. 32–35)
   ========================================================================== */
export const SECTION_06 = {
  scope4Baselines: [
    { id: "p10", label: "URD p.10 (Headline Base)", base2023: 13.45, growthLabel: "+23.6%", pctBar: 23.6, note: "Published headline baseline (13.45 Mt): makes 2025’s 16.6 Mt look nearly on track toward +30%." },
    { id: "p162", label: "URD p.162 (Alt. Base)", base2023: 13.8, growthLabel: "13.8 Mt cited", pctBar: 20.4, note: "Second 2023 baseline printed inside the exact same URD 2025 (p.162) without a reconciliation table." },
    { id: "p517", label: "URD p.517 (Highest Base)", base2023: 15.5, growthLabel: "~+7%", pctBar: 7.1, note: "Against 15.5 Mt (URD p.517), the exact same 16.6 Mt 2025 output shows only about +7% growth — less than a quarter of the +30% target." }
  ],
  esrsGaps: [
    { kpi: "Erased emissions (Scope 4)", val2025: "16.6 MtCO₂e (+23.6%)", esrsStatus: "Entity-specific (not in GHG Protocol)", standardAsks: "Gross Scopes 1–3: 48.5 MtCO₂e (printed 200 pages later; erased ≈ 34% of gross). No named external validator.", cite: { code: "S04", loc: "pp.211–217" } },
    { kpi: "Fresh water saved", val2025: "1,574 Mm³", esrsStatus: "Entity-specific (no ESRS data point)", standardAsks: "Water consumption: 24.2 Mm³; withdrawals: 9,050 Mm³ (no target). Water intensity misprinted as 0.0005 instead of 545 m³/€M.", cite: { code: "S04", loc: "p.233" } },
    { kpi: "Hazardous waste treated", val2025: "9,181 kt vs 9,000 kt", esrsStatus: "Entity-specific · Financial opportunity", standardAsks: "Waste generated (E5-5): total hazardous & radioactive waste generated NOT FOUND in URD 2025; 25.1% non-recycled unlinked to KPI.", cite: { code: "S04", loc: "pp.224, 247" } }
  ],
  impactAsymmetry: {
    negative: { total: 5, greenup: 0, csrd: 5 },
    positive: { total: 4, greenup: 2, csrd: 4 }
  },
  peers: [
    { company: "SUEZ", generated: "328 kt", fate: "Not detailed (quantifies ~1 Mt CO₂ perimeter effect; pro-rata Italian entry)", esrsStyle: "Quantifies perimeter effects", cite: { code: "S24", loc: "pp.52, 80" } },
    { company: "Séché Environnement", generated: "237.1 kt", fate: "Split between disposal & recovery; excludes in-year acquisitions", esrsStyle: "Prints ESRS code on every line", cite: { code: "S24", loc: "p.27" } },
    { company: "Befesa", generated: "149,797 t", fate: "83% of customers’ residues recycled", esrsStyle: "Clear circularity outcome", cite: { code: "S24", loc: "W3" } },
    { company: "Veolia", generated: "Not found in URD 2025", fate: "Not linked to GreenUp KPI (25.1% non-recycled sits separately)", esrsStyle: "ESRS index at end only (p.322)", highlight: true, cite: { code: "S04", loc: "pp.247, 322" } }
  ]
};

/* ==========================================================================
   07 · Verdict, 24-Month Bridge, Falsifiability, Limits & Contradictions
   ========================================================================== */
export const SECTION_07 = {
  dashboard: [
    { dim: "Economic & Financial", wts: "Positive: immediate net income lift; ~€40m of €90m synergies; ~11x unverifiable", ce: "Negative in 2026 (dilution, ROCE dip, leverage ≥3x); positive from 2027 if synergies land", horizon: "WTS now · CE 2027–30" },
    { dim: "Commercial", wts: "Positive, unmeasured: cross-selling & customer reach (oral)", ce: "Positive by perimeter: growth boosters KPI includes acquisitions", horizon: "2026–2027" },
    { dim: "Environmental", wts: "Neutral: already 100% consolidated", ce: "Waste counter up by perimeter (+4.8% to ~+39%); Scopes 1–2 adverse but excluded; real change only via 3 synergies", horizon: "From 2027" },
    { dim: "Human Resources", wts: "Neutral", ce: "~2,600 staff enter after 1 year; waste recycling is accident-prone — watch injury rate (4.11 vs ≤4.1)", horizon: "From 2027" },
    { dim: "Social & Societal", wts: "Neutral", ce: "No published effect", horizon: "n/a" },
    { dim: "Stakeholder Value", wts: "Profit rights transfer CDPQ → Veolia shareholders", ce: "New wage/tax/purchase flows; external disposal sites lose volumes", horizon: "From 2026" }
  ],
  bridge6: [
    { n: "01", title: "Raw vs. Constant-Perimeter KPIs", body: "Publish raw and constant-scope values side-by-side for hazardous waste, erased emissions, and fresh water.", cite: { code: "S04", loc: "p.12" } },
    { n: "02", title: "Frozen Clean Earth Baseline", body: "Lock in the seller’s pre-deal SEC baseline (Tables 2.2 & 6.1) and disclose the 24-month operational gap.", cite: { code: "Brief", loc: "slide 26" } },
    { n: "03", title: "3 Synergies in Physical Units", body: "Report tonnes routed to Veolia incinerators, km per tonne collected, and tonnes of PFAS destroyed.", cite: { code: "S08", loc: "slide 13" } },
    { n: "04", title: "Written Definitions & Rules", body: "Settle 9 vs 10 Mt, pick 1 of 3 Scope 4 baselines, state Scopes 1–2 threshold & acquisition entry rule.", cite: { code: "S04", loc: "p.224; S23" } },
    { n: "05", title: "Deal-Level Financial Tracking", body: "Publish cumulative WaterTech synergies, Clean Earth synergies net of ~$90m costs, and PPA amortisation.", cite: { code: "S10", loc: "S37" } },
    { n: "06", title: "Reconciled Split & ESRS Column", body: "Reconcile the €44.7bn stakeholder table to accounts and add an ESRS code column on the scorecard (as Séché does).", cite: { code: "S04", loc: "p.322; S24" } }
  ],
  notEstablished: [
    "WTS standalone net debt and enterprise value — the ~11x multiple cannot be verified (only bounded at ~€1.2bn implied debt).",
    "Clean Earth’s total hazardous waste tonnage and audited Scopes 1–2 emissions on Veolia’s definitions — plus written 9 vs 10 Mt scope.",
    "The three US tuck-ins’ standalone revenue, EBITDA, and treated volumes (only €190m net investments are disclosed).",
    "The build of Clean Earth’s ~9.8x multiple, exact PPA amortisation amount, integration cost phasing, and Veolia’s WACC.",
    "The full accounting reconciliation of the brief’s 25/64/7/1–2% stakeholder value split (€44.7bn FY24 denominator).",
    "Physical size of the 3 industrial synergies (tonnes, km, PFAS) and Clean Earth’s FY2026 results (published Feb 2027), plus the brief’s “€2.8bn / 79%” context figure."
  ],
  contradictions: [
    { issue: "Clean Earth $1,030m revenue: 2024 actual or 2026E?", resolution: "2026E forecast (matches Enviri’s $1,054m in S14, p.62)." },
    { issue: "Tuck-in prices: unpublished (Brief p.21) or €190m?", resolution: "Disclosed in URD 2025 p.348: NEDT €67m, Bio-Med €33m, Ingenium €90m." },
    { issue: "Hazardous waste target: 9 Mt or 10 Mt?", resolution: "9 Mt published actual/target as reference; 10 Mt oral shown as alternative." },
    { issue: "Clean Earth tonnage: 439 kt or 3–4 Mt?", resolution: "Range from strict (+439 kt) to broad (+3.6 Mt incl. soil)." },
    { issue: "Does Clean Earth threaten Scopes 1–2 target?", resolution: "Exclusion rule shields it; we quantify the 31%–51% (or 127%) hidden impact." },
    { issue: "When does Clean Earth enter ESG KPIs?", resolution: "After 1 full reporting year (oral S23); SUEZ-style 7m pro-rata (~9,580 kt) shown as alt." },
    { issue: "Clean Earth EV $3.0bn vs Cash $3.04bn?", resolution: "Distinct definitions (EV $3.0bn; cash $3.04bn; net proceeds $2.975bn; H1 outflow €2,778m)." },
    { issue: "WaterTech margin rise (12.3% → 13.5%) as proof?", resolution: "Context only — segment includes legacy VVT, not standalone WTS." },
    { issue: "Inclusive access target (8.4m vs 8.6m) & employee shareholding (9.5% vs 9.35%)?", resolution: "Anchored strictly to scorecard S02: 8.4m target and 9.35% shareholding." }
  ]
};
