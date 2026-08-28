# Dynamic Content

Three workflows keep the profile alive. All of them use least-privilege permissions and
pin to major-version tags.

| Workflow | Trigger | Writes | Permission |
|---|---|---|---|
| [`update-widgets.yml`](../.github/workflows/update-widgets.yml) | push to `data/**`, weekly cron, manual | `assets/generated/focus.svg` | `contents: write` |
| [`contribution-snake.yml`](../.github/workflows/contribution-snake.yml) | 12-hourly cron, manual | `assets/generated/snake.svg` | `contents: write` |
| [`privacy-scan.yml`](../.github/workflows/privacy-scan.yml) | every push and PR | nothing | `contents: read` |

## update-widgets

Runs `scripts/build-widgets.mjs --selftest` first, then the build. The self-check asserts
share clamping and XML escaping, so a malformed `data/profile.json` fails the run instead
of committing a broken panel.

The commit step is conditional on `git status --porcelain assets/generated`, so the weekly
cron produces no commit unless the output actually changed.

**Zero dependencies.** No `package.json`, no `npm install`, no lockfile to keep patched.
Node's standard library covers the whole job.

## contribution-snake

Uses [`Platane/snk@v3`](https://github.com/Platane/snk) to render the public contribution
graph as an animated snake, coloured to match the profile palette. It reads
`github.repository_owner`, so nothing is hardcoded.

A placeholder `assets/generated/snake.svg` ships in the repo so the README never shows a
broken image before the first run. Trigger it manually via **Actions ▸ contribution-snake
▸ Run workflow** to replace it immediately.

## privacy-scan

The confidentiality gate. Fails the build on: email addresses, IP addresses, phone and
national-ID patterns, credential assignments, database connection strings, and any
external URL outside the allowlisted services. It warns (does not fail) when raster images
appear under `assets/`, because those need a human to confirm they aren't production
screenshots.

Run it locally before publishing:

```bash
bash scripts/privacy-scan.sh
```

It is a gate, not a guarantee. It catches shapes it knows about; it cannot recognise that
a description is *conceptually* identifying. The manual checklist in
[PRIVACY-REVIEW.md](PRIVACY-REVIEW.md) covers what pattern-matching cannot.

## Failure modes worth knowing

| Symptom | Cause | Fix |
|---|---|---|
| Widget stops updating | Actions disabled on the repo, or the cron paused after 60 days of no repo activity | Re-enable in Settings ▸ Actions; run manually once |
| Snake shows the placeholder | Workflow hasn't run yet | Actions ▸ contribution-snake ▸ Run workflow |
| Panel renders blank | Malformed XML in the SVG | Validate (see [CUSTOMIZATION.md](CUSTOMIZATION.md)) |
| Stat cards blank or slow | Third-party service rate-limited | Wait, or delete the block (see CUSTOMIZATION.md) |
| A stale panel keeps showing | GitHub's camo proxy cached the old image | Hard-refresh; camo revalidates within minutes |

## Deliberately not automated

- **The hand-authored panels.** They change rarely, and generating them from data would
  cost more to maintain than it saves.
- **Repository showcase.** Auto-listing repositories from the API is exactly the leak this
  profile is designed to avoid. Adding one is a manual edit to `profile.config.json`,
  on purpose.
