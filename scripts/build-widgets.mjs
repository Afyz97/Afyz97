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
  <title>Current focus: generated widget</title>
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
  <text class="mono" x="82" y="21" font-size="11.5" fill="#5C7183">focus · generated widget</text>
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


// ---- top languages -------------------------------------------------------
// Rendered here instead of github-readme-stats.vercel.app, which pauses often.
// Public repos only, forks excluded. Needs GITHUB_TOKEN in CI (60 req/hr without).

const LANGS_OUT = join(root, "assets", "generated", "langs.svg");
const USER = process.env.GH_USER || "Afyz97";
const LANG_COLORS = {
  JavaScript: "#F1E05A", TypeScript: "#3178C6", PHP: "#4F5D95", Blade: "#F7523F",
  HTML: "#E34C26", CSS: "#563D7C", SCSS: "#C6538C", Python: "#3572A5",
  Shell: "#89E051", Vue: "#41B883", Dart: "#00B4AB", Java: "#B07219",
  "C#": "#178600", Go: "#00ADD8", Rust: "#DEA584", Ruby: "#701516",
  Kotlin: "#A97BFF", Swift: "#F05138", Dockerfile: "#384D54", Other: "#5C7183",
};
const langColor = (name) =>
  LANG_COLORS[name] ||
  `hsl(${[...name].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7)} 60% 60%)`;

// Sums bytes across repos, keeps the top `max`, folds the tail into "Other".
export function topShares(perRepo, max = 6) {
  const totals = new Map();
  for (const repo of perRepo) {
    for (const [lang, bytes] of Object.entries(repo || {})) {
      if (Number(bytes) > 0) totals.set(lang, (totals.get(lang) || 0) + Number(bytes));
    }
  }
  const sum = [...totals.values()].reduce((a, b) => a + b, 0);
  if (!sum) return [];
  const ranked = [...totals].sort((a, b) => b[1] - a[1]);
  const head = ranked.slice(0, max).map(([name, bytes]) => ({ name, share: (bytes / sum) * 100 }));
  const tail = ranked.slice(max).reduce((a, [, b]) => a + b, 0);
  if (tail > 0) head.push({ name: "Other", share: (tail / sum) * 100 });
  return head;
}

function renderLangs(langs, stamp) {
  const W = 420, H = 165, BAR_X = 20, BAR_W = W - 40;
  let x = BAR_X;
  const bar = langs
    .map((l, i) => {
      const w = Math.max(2, (l.share / 100) * BAR_W);
      const seg = `<rect x="${x.toFixed(1)}" y="60" width="${w.toFixed(1)}" height="9" fill="${langColor(l.name)}" opacity="0">
      <animate attributeName="opacity" to="1" dur=".4s" begin="${(0.1 + i * 0.07).toFixed(2)}s" fill="freeze"/></rect>`;
      x += w;
      return seg;
    })
    .join("\n    ");

  const legend = langs
    .map((l, i) => {
      const lx = BAR_X + (i % 2) * 200;
      const ly = 96 + Math.floor(i / 2) * 22;
      return `<g opacity="0" style="animation: in .3s ease-out ${(0.2 + i * 0.06).toFixed(2)}s forwards">
      <circle cx="${lx + 4}" cy="${ly - 4}" r="4" fill="${langColor(l.name)}"/>
      <text class="mono" x="${lx + 16}" y="${ly}" font-size="11" fill="#E6EDF3">${esc(l.name)}</text>
      <text class="mono" x="${lx + 176}" y="${ly}" font-size="10.5" fill="#5C7183" text-anchor="end">${l.share.toFixed(1)}%</text>
    </g>`;
    })
    .join("\n    ");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Top languages across public repositories">
  <title>Top languages</title>
  <style>
    .mono { font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace; }
    @keyframes in { to { opacity: 1 } }
  </style>
  <rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="12" fill="#0B0F14" stroke="#1E2A36"/>
  <text class="mono" x="20" y="30" font-size="12.5" fill="#38BDF8" letter-spacing="1.5">TOP LANGUAGES</text>
  <text class="mono" x="${W - 20}" y="30" font-size="10" fill="#33465A" text-anchor="end">${esc(stamp)}</text>
  <text class="mono" x="20" y="48" font-size="10" fill="#3F5464">public repos · forks excluded</text>
  <clipPath id="barclip"><rect x="${BAR_X}" y="60" width="${BAR_W}" height="9" rx="4.5"/></clipPath>
  <g clip-path="url(#barclip)">
    <rect x="${BAR_X}" y="60" width="${BAR_W}" height="9" fill="#16202B"/>
    ${bar}
  </g>
  ${legend}
</svg>
`;
}

async function gh(path) {
  const headers = { Accept: "application/vnd.github+json", "User-Agent": "build-widgets" };
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (!res.ok) throw new Error(`GET ${path} -> ${res.status}`);
  return res.json();
}

async function buildLangs() {
  const repos = await gh(`/users/${USER}/repos?per_page=100&type=owner&sort=pushed`);
  const owned = repos.filter((r) => !r.fork && !r.private);
  const perRepo = await Promise.all(owned.map((r) => gh(`/repos/${r.full_name}/languages`)));
  const langs = topShares(perRepo, 5); // 5 + Other = 3 legend rows, fits 165px
  if (!langs.length) throw new Error("no language bytes returned");
  mkdirSync(dirname(LANGS_OUT), { recursive: true });
  writeFileSync(LANGS_OUT, renderLangs(langs, new Date().toISOString().slice(0, 10)), "utf8");
  console.log(`wrote ${LANGS_OUT}`);
}

function selftestLangs() {
  const s = topShares([{ PHP: 60 }, { PHP: 20, JS: 20 }]);
  assert.deepEqual(s.map((l) => l.name), ["PHP", "JS"], "languages rank by summed bytes");
  assert.equal(s[0].share, 80, "shares are percentages of the total");
  assert.deepEqual(topShares([]), [], "no repos means no card");
  assert.deepEqual(topShares([{ A: 0 }]), [], "zero-byte languages are dropped");
  const many = topShares([{ a: 10, b: 9, c: 8, d: 7, e: 6, f: 5, g: 4, h: 3 }], 6);
  assert.equal(many.length, 7, "the tail folds into one bucket");
  assert.equal(many[6].name, "Other", "and that bucket is called Other");
  assert.ok(Math.abs(many.reduce((t, l) => t + l.share, 0) - 100) < 1e-9, "shares still total 100%");
  const svg = renderLangs([{ name: "C<&>", share: 100 }], "2026-01-01");
  assert.ok(svg.includes("C&lt;&amp;&gt;") && !svg.includes("C<&>"), "language names reach the SVG escaped");
  assert.ok(langColor("Nim").startsWith("hsl("), "unknown languages get a derived colour");
}

if (process.argv.includes("--selftest")) {
  selftest();
  selftestLangs();
  console.log("langs selftest ok");
} else {
  build();
  await buildLangs();
}
