# Privacy Review

**Scope:** every file published in this profile repository.
**Last reviewed:** 2026-08-28
**Principle:** show what I can build, not who I built it for. When in doubt, exclude.

## Files in scope

```text
README.md
profile.config.json
docs/PRIVACY-REVIEW.md
```

## Automated scan

Run before every publish:

```bash
grep -rInoE "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}" --exclude-dir=.git .          # emails
grep -rInoE "https?://[^ )\"'>]+|\b[a-z0-9-]+\.(com|net|org|my|edu|gov|io|co)\b" --exclude-dir=.git .  # URLs / domains
grep -rInoE "\b([0-9]{1,3}\.){3}[0-9]{1,3}\b" --exclude-dir=.git .                          # IP addresses
grep -rInoiE "password|secret|api[_-]?key|token|credential" --exclude-dir=.git .            # secrets
grep -rInoE "\b(\+?6?01[0-9]-?[0-9]{7,8}|[0-9]{6}-[0-9]{2}-[0-9]{4})\b" --exclude-dir=.git . # phone / national ID
find . -path ./.git -prune -o -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.svg" -o -iname "*.pdf" \) -print  # image assets
```

**Result of last run:** no matches in any category. No image or PDF assets are present,
so no screenshot review was required.

## Manual checklist

| Checked for | Result |
|---|---|
| Real organisation / institution names | None — all systems labelled generically |
| Real client names | None |
| Internal project names or codenames | None |
| Production or internal domains, URLs | None |
| Private repository names | None — no repository list is published |
| Email addresses, phone numbers, national IDs | None |
| IP addresses, server or host names | None |
| Database names, schema or connection details | None — only "MySQL / MariaDB / Redis" as technologies |
| Credentials, tokens, secrets | None |
| Real user data | None — sample data only (`Alex Morgan`, `MEM-2026-001`, `RM 100.00`) |
| Actual membership numbering scheme | None — `MEM-2026-001` is an invented format |
| Actual fund / programme / committee names | None — `Community Fund`, `Leadership Workshop` are invented |
| Financial figures from production | None |
| Screenshots from production systems | None included |
| GitHub API auto-generated repo/activity sections | None included; gated by allowlist below |

## Repository disclosure policy

`profile.config.json` holds an explicit allowlist:

```json
{ "publicRepositories": [], "excludePrivateProjectReferences": true }
```

The allowlist is currently empty, so no repository may be surfaced by any generated
section. Adding a repository name requires a deliberate edit plus a re-run of this review.

## Rules for future edits

1. Describe systems by **type, architecture, capability and technology** — never by owner.
2. No screenshots from production. Recreate representative screens with invented sample data.
3. No badge, widget or card that resolves a private repository name, even indirectly.
4. Technology names are safe; deployment targets, hosts and domains are not.
5. Anything that could let a visitor identify the owning organisation is excluded, even
   when the individual detail seems harmless — combinations are identifying too.
6. Re-run the scan above and update the review date before every publish.
