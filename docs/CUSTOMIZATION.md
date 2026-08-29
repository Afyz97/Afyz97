# Customisation

## Change what you're working on

Edit [`data/profile.json`](../data/profile.json), push, done. The Action regenerates
`assets/generated/focus.svg` within a minute.

```jsonc
{
  "currentFocus": [
    {
      "label": "Enterprise platform architecture",  // shown large
      "detail": "modular monolith · multi-interface", // shown small underneath
      "state": "active",                            // "active" (accent) | "exploring" (amber)
      "share": 40                                   // 0–100, drives the bar width
    }
  ],
  "mode": "build"                                   // shown top-right of the panel
}
```

Up to four entries render; extras are ignored. To preview locally:

```bash
node scripts/build-widgets.mjs            # rebuild
node scripts/build-widgets.mjs --selftest # check the generator still behaves
```

## Add or change a system card

1. Add the entry to [`data/systems.json`](../data/systems.json), which is the
   canonical, reviewable list.
2. Add the matching `<details>` block under `## Systems` in `README.md`.
3. If it needs a tile in the launcher graphic, add it to `assets/apps.svg` (6 tiles fit
   the current 3×2 grid; a 7th needs the grid extended to 3 rows and the viewBox height
   raised by ~116).

**The naming rule holds absolutely**: generic labels only. `Organisation Management
System`, never the real product name.

## Change the palette

Colours are literal hex values inside each SVG (no build step to indirect them through).
To re-theme, find-and-replace across `assets/*.svg` and the `PALETTE` constant in
`scripts/build-widgets.mjs`. The token table in [ARCHITECTURE.md](ARCHITECTURE.md#colour-system)
lists every value and what it means.

Badge colours live in the `README.md` shields URLs (`labelColor=`, `logoColor=`).

## Edit a panel

Panels are plain SVG. Open them in any editor. Conventions worth keeping:

- Keep the 880-unit viewBox width so panels align with each other.
- Keep the title bar (three dots + label). It is what makes the OS metaphor read.
- Body text at 12px or larger in the viewBox; anything smaller disappears on mobile.
- Use only generic font families (`ui-monospace`, `-apple-system`, …). Web fonts cannot
  load through GitHub's image proxy.
- Never leave a bare `&`, `<` or `>` in text. SVG is XML and will fail to parse.

Validate before committing. SVG is XML, so a stray `&` breaks the whole panel:

```bash
xmllint --noout assets/*.svg assets/generated/*.svg   # if libxml2 is available
```

```powershell
Get-ChildItem assets -Recurse -Filter *.svg | ForEach-Object {
  try { [xml](Get-Content $_.FullName -Raw) > $null; "ok   $($_.Name)" }
  catch { "FAIL $($_.Name): $($_.Exception.Message)" }
}
```

Failing that, opening the file in a browser surfaces a parse error immediately.

## Add contact badges

The Connect section is deliberately sparse. To extend it, add shields badges:

```markdown
<a href="YOUR_LINKEDIN_URL"><img src="https://img.shields.io/badge/LinkedIn-0B0F14?style=for-the-badge&logo=linkedin&logoColor=0A66C2" alt="LinkedIn"></a>
```

Publishing an email address on a profile invites scraping; a contact form or a platform
DM link is usually the better trade. If you do add one, remember `scripts/privacy-scan.sh`
fails on email patterns by design; that check exists so the decision is deliberate rather
than accidental.

## The stat panels

`assets/generated/stats.svg` and `langs.svg` are built locally by
`scripts/build-widgets.mjs` from the public GitHub REST API: totals via
`/search`, language bytes summed across public non-fork repos. They replaced the
`github-readme-stats.vercel.app` cards, which kept returning `DEPLOYMENT_PAUSED`.
The `update-widgets` workflow refreshes them daily; `node scripts/build-widgets.mjs`
does the same locally. Delete that `<p align="center">` block to drop them.

## Show a public repository

Repository names are gated by [`profile.config.json`](../profile.config.json):

```json
{ "publicRepositories": ["example-public-project"], "excludePrivateProjectReferences": true }
```

Add the name there first, then reference it in the README. The allowlist is the record of
a deliberate decision. Never enumerate repositories just because the API returns them.
