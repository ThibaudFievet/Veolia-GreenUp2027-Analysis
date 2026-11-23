/* ==========================================================================
   Unified Independent Audio Briefings Engine (Parts 2 to 5)
   Syncs Hero Audio Panel + Per-Section Audio Strips + Persistent Bottom Dock.
   Audio is an independent listening alternative (never hijacks reading scroll).
   ========================================================================== */

import { AUDIO_BRIEFS } from "./data.js";

const SPEEDS = [1, 1.25, 1.5];

export function initAudioSystem() {
  const audio = new Audio();
  audio.preload = "metadata";

  const playBtn = document.getElementById("dock-play-btn");
  const titleEl = document.getElementById("dock-track-title");
  const subEl = document.getElementById("dock-track-sub");
  const timeEl = document.getElementById("dock-time");
  const scrubber = document.getElementById("dock-scrubber");
  const tracksWrap = document.getElementById("dock-tracks");
  const speedBtn = document.getElementById("dock-speed-btn");
  const transcriptBtn = document.getElementById("dock-transcript-btn");
  const drawer = document.getElementById("dock-drawer");
  const drawerText = document.getElementById("dock-drawer-text");

  let speedIdx = 0;
  let currentIdx = AUDIO_BRIEFS.findIndex((b) => b.status === "available");
  if (currentIdx < 0) currentIdx = 0;

  const playSvg = `<svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2.5v11l9.5-5.5L4 2.5z"/></svg>`;
  const pauseSvg = `<svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><rect x="3" y="2" width="3.5" height="12" rx="1"/><rect x="9.5" y="2" width="3.5" height="12" rx="1"/></svg>`;

  function fmt(sec) {
    if (!Number.isFinite(sec) || sec < 0) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  }

  /* Render Hero Audio Spotlight Panel (Above the Fold!) */
  function renderHeroAudioPanel() {
    const list = document.getElementById("hero-audio-list");
    if (!list) return;
    list.innerHTML = AUDIO_BRIEFS.map((b, idx) => {
      const isLive = b.status === "available";
      const isPlaying = isLive && idx === currentIdx && !audio.paused && !!audio.src;
      return `
        <button type="button" class="hero-track-btn${isLive ? "" : " pending"}${isPlaying ? " playing" : ""}" data-audio-trigger="${idx}">
          <span class="hero-track-left">
            <span class="hero-track-play">${isPlaying ? "❚❚" : isLive ? "▶" : "◷"}</span>
            <span>
              <span class="hero-track-name">${b.title}</span>
              <span class="hero-track-meta">${b.speaker} · ${isLive ? "Click to listen" : "Audio coming soon: read overview"}</span>
            </span>
          </span>
          <span class="hero-track-dur">${b.duration}</span>
        </button>
      `;
    }).join("");
  }

  /* Render Per-Section Audio Strips (Sections 03, 04, 05, 06) */
  function renderSectionStrips() {
    AUDIO_BRIEFS.forEach((b, idx) => {
      const slot = document.getElementById(`audio-slot-${b.id}`);
      if (!slot) return;
      const isLive = b.status === "available";
      const isPlaying = isLive && idx === currentIdx && !audio.paused && !!audio.src;
      slot.innerHTML = `
        <div class="audio-strip${isLive ? "" : " pending"}">
          <div class="audio-strip-top">
            <div class="audio-strip-left">
              <button type="button" class="audio-play-circle" data-audio-trigger="${idx}" ${isLive ? "" : "disabled"} aria-label="${isPlaying ? "Pause" : "Play"} ${b.title}">
                ${isPlaying ? pauseSvg : playSvg}
              </button>
              <div>
                <div class="audio-strip-title">${b.title}</div>
                <div class="audio-strip-sub">${b.speaker} · ${isLive ? `MP3 audio brief (${b.duration}), plays independently while you browse` : "Audio coming soon: upload audio/part2-impact.mp3 to activate"}</div>
              </div>
            </div>
            <span class="ev-badge ${isLive ? "established" : "estimated"}">${isLive ? (isPlaying ? "Playing" : `Audio Ready · ${b.duration}`) : "Audio Coming Soon"}</span>
          </div>
          <details class="transcript-details">
            <summary>${isLive ? "Read full transcript" : "Read planned audio overview"}</summary>
            <div class="transcript-body">${b.transcript}</div>
          </details>
        </div>
      `;
    });
  }

  function renderDockPills() {
    tracksWrap.innerHTML = AUDIO_BRIEFS.map((b, idx) => `
      <button type="button" class="dock-track-pill${idx === currentIdx ? " active" : ""}${b.status !== "available" ? " pending" : ""}" data-audio-trigger="${idx}">
        ${idx + 1}. ${b.shortLabel}${b.status !== "available" ? " (Soon)" : ""}
      </button>
    `).join("");
  }

  function syncUI() {
    const playing = !audio.paused && !!audio.src;
    playBtn.innerHTML = playing ? pauseSvg : playSvg;
    playBtn.setAttribute("aria-label", playing ? "Pause audio brief" : "Play audio brief");
    renderHeroAudioPanel();
    renderSectionStrips();
    renderDockPills();
  }

  function selectTrack(idx, toggleIfSame = false) {
    const b = AUDIO_BRIEFS[idx];
    if (toggleIfSame && idx === currentIdx && b.status === "available" && audio.src && audio.src.endsWith(b.src)) {
      if (audio.paused) audio.play().catch(() => {});
      else audio.pause();
      syncUI();
      return;
    }

    currentIdx = idx;
    titleEl.textContent = b.title;
    subEl.textContent = b.status === "available"
      ? `${b.speaker} · Independent audio briefing (${b.duration})`
      : `${b.speaker} · Audio coming soon: summary open below`;
    drawerText.innerHTML = `<p style="margin:0 0 5px;font-weight:700;color:#fff">${b.title} · ${b.speaker}</p><p style="margin:0">${b.transcript}</p>`;

    if (b.status !== "available") {
      audio.pause();
      audio.removeAttribute("src");
      scrubber.value = 0;
      scrubber.disabled = true;
      timeEl.textContent = "Soon";
      drawer.classList.add("open");
      syncUI();
      return;
    }

    scrubber.disabled = false;
    if (!audio.src || !audio.src.endsWith(b.src)) {
      audio.src = b.src;
      audio.playbackRate = SPEEDS[speedIdx];
    }
    if (toggleIfSame) {
      audio.play().catch(() => {});
    } else {
      timeEl.textContent = `0:00 / ${b.duration}`;
    }
    syncUI();
  }

  document.addEventListener("click", (e) => {
    const trg = e.target.closest("[data-audio-trigger]");
    if (!trg || trg.disabled) return;
    const idx = parseInt(trg.dataset.audioTrigger, 10);
    selectTrack(idx, true);
  });

  playBtn.addEventListener("click", () => {
    const b = AUDIO_BRIEFS[currentIdx];
    if (b.status !== "available") {
      const nextLive = AUDIO_BRIEFS.findIndex((x) => x.status === "available");
      if (nextLive >= 0) selectTrack(nextLive, true);
      return;
    }
    if (!audio.src) { selectTrack(currentIdx, true); return; }
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
    syncUI();
  });

  ["hero-listen-all", "topbar-listen-all"].forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener("click", () => {
      const firstLive = AUDIO_BRIEFS.findIndex((b) => b.status === "available");
      if (firstLive >= 0) selectTrack(firstLive, true);
    });
  });

  audio.addEventListener("play", syncUI);
  audio.addEventListener("pause", syncUI);
  audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;
    scrubber.value = (audio.currentTime / audio.duration) * 100;
    timeEl.textContent = `${fmt(audio.currentTime)} / ${fmt(audio.duration)}`;
  });
  audio.addEventListener("loadedmetadata", () => {
    timeEl.textContent = `${fmt(audio.currentTime)} / ${fmt(audio.duration)}`;
  });
  audio.addEventListener("ended", () => {
    for (let i = currentIdx + 1; i < AUDIO_BRIEFS.length; i++) {
      if (AUDIO_BRIEFS[i].status === "available") {
        selectTrack(i, true);
        return;
      }
    }
    syncUI();
  });

  scrubber.addEventListener("input", () => {
    if (audio.duration) audio.currentTime = (scrubber.value / 100) * audio.duration;
  });
  speedBtn.addEventListener("click", () => {
    speedIdx = (speedIdx + 1) % SPEEDS.length;
    audio.playbackRate = SPEEDS[speedIdx];
    speedBtn.textContent = `${SPEEDS[speedIdx]}x`;
  });
  transcriptBtn.addEventListener("click", () => drawer.classList.toggle("open"));

  selectTrack(currentIdx, false);
}
