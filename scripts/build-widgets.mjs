#!/usr/bin/env node
// Regenerates assets/generated/focus.svg from data/profile.json.
// No dependencies on purpose: `node scripts/build-widgets.mjs` is the whole build.
// Self-check: `node scripts/build-widgets.mjs --selftest`

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(root, "assets", "generated", "focus.svg");
const BAR_MAX = 300;
const PALETTE = ["#38BDF8", "#A78BFA", "#34D399", "#818CF8"];
const EXPLORING = "#FBBF24";

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const barWidth = (share) => Math.round((Math.max(0, Math.min(100, Number(share) || 0)) / 100) * BAR_MAX);

function render(profile, stamp) {
  const focus = (profile.currentFocus || []).slice(0, 4);
  const rowH = 40;
  const top = 96;
  const height = top + focus.length * rowH + 40;

  const rows = focus
    .map((f, i) => {
      const y = top + i * rowH;
      const accent = f.state === "exploring" ? EXPLORING : PALETTE[i % PALETTE.length];
      const state = String(f.state || "active").toUpperCase();
      return `    <g opacity="0" style="animation: in .3s ease-out ${0.1 + i * 0.12}s forwards">
      <circle cx="34" cy="${y - 4}" r="4" fill="${accent}"/>
      <text class="mono" x="52" y="${y}" font-size="12.5" fill="#E6EDF3">${esc(f.label)}</text>
      <text class="mono" x="52" y="${y + 16}" font-size="10.5" fill="#5C7183">${esc(f.detail || "")}</text>
      <rect x="500" y="${y - 11}" width="${BAR_MAX}" height="7" rx="3.5" fill="#16202B"/>
      <rect x="500" y="${y - 11}" width="0" height="7" rx="3.5" fill="${accent}">
        <animate attributeName="width" from="0" to="${barWidth(f.share)}" dur="1s" begin="${0.2 + i * 0.12}s" fill="freeze"/>
      </rect>
      <text class="mono" x="856" y="${y}" font-size="10.5" fill="${accent}" text-anchor="end" letter-spacing="1.2">${esc(state)}</text>
    </g>`;
    })
    .join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 ${height}" width="880" height="${height}" role="img" aria-label="Current focus, generated from data/profile.json">
  <title>Current focus — generated widget</title>
  <defs>
    <linearGradient id="cg" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#A78BFA" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <style>
    .mono { font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace; }
    @keyframes in { to { opacity: 1 } }
  </style>
  <rect x="1" y="1" width="878" height="${height - 2}" rx="12" fill="#0B0F14" stroke="#1E2A36"/>
  <rect x="1" y="1" width="878" height="32" fill="#0E141B"/>
  <line x1="1" y1="33" x2="879" y2="33" stroke="#1E2A36"/>
  <circle cx="22" cy="17" r="5" fill="#FF5F57"/>
  <circle cx="40" cy="17" r="5" fill="#FEBC2E"/>
  <circle cx="58" cy="17" r="5" fill="#28C840"/>
  <text class="mono" x="82" y="21" font-size="11.5" fill="#5C7183">focus — generated widget</text>
  <text class="mono" x="856" y="21" font-size="10.5" fill="#33465A" text-anchor="end">mode: ${esc(profile.mode || "build")}</text>

  <text class="mono" x="24" y="58" font-size="11" fill="#4E6376" letter-spacing="3">CURRENT FOCUS</text>
  <rect x="152" y="53" width="704" height="1" fill="url(#cg)"/>
  <text class="mono" x="24" y="80" font-size="10.5" fill="#3F5464">generated from data/profile.json · last sync ${esc(stamp)}</text>

${rows}
</svg>
`;
}

function build() {
  const profile = JSON.parse(readFileSync(join(root, "data", "profile.json"), "utf8"));
  const stamp = new Date().toISOString().slice(0, 10);
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, render(profile, stamp), "utf8");
  console.log(`wrote ${OUT}`);
}

function selftest() {
  assert.equal(barWidth(100), BAR_MAX, "full share fills the bar");
  assert.equal(barWidth(0), 0, "zero share draws nothing");
  assert.equal(barWidth(50), BAR_MAX / 2, "half share is half a bar");
  assert.equal(barWidth(999), BAR_MAX, "share is clamped high");
  assert.equal(barWidth(-5), 0, "share is clamped low");
  assert.equal(esc(`a & b < c > "d"`), "a &amp; b &lt; c &gt; &quot;d&quot;", "text is XML-escaped");

  const svg = render(
    { mode: "build", currentFocus: [{ label: "A & B", detail: "<x>", state: "exploring", share: 25 }] },
    "2026-01-01"
  );
  assert.ok(svg.includes("&amp;") && !svg.includes("A & B"), "labels reach the SVG escaped");
  assert.ok(svg.includes(EXPLORING), "exploring items use the amber accent");
  assert.ok(!/<text[^>]*>[^<]*<x>/.test(svg), "raw markup never lands inside a text node");
  console.log("selftest ok");
}

process.argv.includes("--selftest") ? selftest() : build();
