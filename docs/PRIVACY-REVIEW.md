# Privacy Review

**Scope:** every file published in this profile repository.
**Last reviewed:** 2026-08-28
**Principle:** show what I can build, not who I built it for. When in doubt, exclude.

## Files in scope

```text
README.md
profile.config.json
assets/*.svg                 header, boot, whoami, dashboard, apps, stack, ai-lab, activity, footer
assets/generated/*.svg       focus, snake
data/*.json                  profile, systems, stack
scripts/*                    build-widgets.mjs, privacy-scan.sh
docs/*.md                    architecture, customisation, dynamic content, this file
.github/workflows/*.yml      update-widgets, contribution-snake, privacy-scan
```

## Automated scan

`scripts/privacy-scan.sh` is the gate, run by CI on every push and PR:

```bash
bash scripts/privacy-scan.sh
```

| Check | Result |
|---|---|
| Email addresses | ok, none |
| IP addresses | ok, none |
| Phone / national ID patterns | ok, none |
| Credential and secret assignments | ok, none |
| Database connection strings | ok, none |
| External URLs outside the allowlist | ok, none |
| Raster images (possible screenshots) | ok, none present; all imagery is authored SVG |

Allowlisted external hosts, and why each is there:

| Host | Purpose | Data it sees |
|---|---|---|
| `img.shields.io` | Static badges | Nothing; no query carries profile data |
| `github-readme-stats.vercel.app` | Public stat panels | Public GitHub username only |
| `github.com` | Profile link | n/a |
| `w3.org` | SVG XML namespace | Not fetched |

## Manual checklist

Pattern-matching cannot judge whether a *description* identifies someone. This part is
reviewed by reading.

| Checked for | Result |
|---|---|
| Real organisation / institution names | None; all systems carry generic portfolio labels |
| Real client names | None |
| Internal project names or codenames | None |
| Production, staging or internal domains | None |
| Private repository names | None; no repository list is published |
| Email addresses, phone numbers, national IDs | None |
| IP addresses, server or host names | None |
| Database names, schemas, connection details | None; only "MySQL / MariaDB / Redis" as technologies |
| Credentials, tokens, secrets | None |
| Real user data | None; sample values only (`Alex Morgan`, `MEM-2026-001`, `RM 100.00`) |
| Actual membership numbering scheme | None; `MEM-2026-001` is an invented format |
| Actual fund / programme / committee names | None; `Community Fund`, `Leadership Workshop` are invented |
| Production financial figures | None |
| Screenshots from production systems | None; every image is an authored SVG mockup |
| Identifying detail inside SVG panels | Reviewed line by line; panels contain only generic capability labels |
| Combination-identifying detail | Reviewed; no pairing of sector, size, location and module set that would narrow to one organisation |
| GitHub API auto-generated repo/activity sections | None; gated by the allowlist below |
| Workflow files leaking context | None; `github.repository_owner` is used instead of hardcoded names |

### Specific judgements made

- **"RM 100.00"**. The currency indicates a region, not an organisation. Kept, as a
  region is not identifying on a profile that already carries a name.
- **Module lists** (membership, funds, donations, committees, meetings) describe a
  *category* of organisation, which thousands share. Kept.
- **Focus percentages** in `activity.svg` are self-declared, labelled as such on the panel
  itself so they are not read as telemetry from a private system.
- **`assets/generated/snake.svg`**. Renders public contribution counts only; it exposes
  no repository names.
- **Third-party stat panels**. Read the public GitHub profile only. `count_private` is
  not enabled, so private repository activity is never surfaced.

## Repository disclosure policy

`profile.config.json` holds an explicit allowlist:

```json
{ "publicRepositories": [], "excludePrivateProjectReferences": true }
```

The allowlist is empty, so no repository may be surfaced by any generated section. Adding
a name requires a deliberate edit plus a re-run of this review.

## Rules for future edits

1. Describe systems by **type, architecture, capability and technology**, never by owner.
2. No screenshots from production. Recreate representative screens with invented data.
3. No badge, widget or card that resolves a private repository name, even indirectly.
4. Technology names are safe; deployment targets, hosts and domains are not.
5. Exclude anything that could let a visitor identify the owning organisation, even when
   the individual detail seems harmless; combinations identify too.
6. New external services get added to the scan allowlist only after deciding what data the
   request URL exposes to them.
7. Re-run the scan and update the review date before every publish.
