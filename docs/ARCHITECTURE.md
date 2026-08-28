# Profile Architecture

How this profile is put together, and why each piece is the way it is.

## Layout

```text
README.md                     the profile: panels, not paragraphs
assets/*.svg                  hand-authored panels (chrome)
assets/generated/*.svg        machine-authored panels (never edit by hand)
data/*.json                   the content source of truth for generated panels
scripts/build-widgets.mjs     data/ → assets/generated/
scripts/privacy-scan.sh       confidentiality gate
.github/workflows/            regeneration + gate automation
docs/                         this documentation
profile.config.json           repository disclosure allowlist
```

## The core rule: SVG is chrome, Markdown is content

Text inside an SVG does not reflow. On a 375px phone the README column is roughly
340px wide, so an 880px-wide panel renders its 12px type at about 4.6px, which is unreadable.

So every visual panel is paired with a real Markdown equivalent directly beneath it:

| Panel | Readable counterpart |
|---|---|
| `dashboard.svg` | The subsystem status table |
| `apps.svg` | The `<details>` system cards |
| `stack.svg` | The grouped badge rows |
| `ai-lab.svg` | The Mermaid pipeline + layer table |
| `activity.svg` | The stat panels below it |

If the images fail to load, or a screen reader is used, or someone views the raw file,
the profile still reads completely. The panels add polish; they never carry information
alone. Every `<img>` also carries a descriptive `alt`.

## Why no `<picture>` theme pairs

Each panel carries its own dark background and border, so it reads as a deliberate
terminal window on both GitHub themes. The alternative, a light and a dark variant of
every asset behind `<picture media="(prefers-color-scheme: dark)">`, doubles the number
of files to keep in sync for a marginal gain. One asset, both themes.

If you ever want a true light variant, the pattern is:

```html
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/header.svg">
  <img src="assets/header-light.svg" width="100%" alt="…">
</picture>
```

## Animation technique

GitHub serves README images through its camo proxy. JavaScript inside an SVG is stripped
and external references are blocked, but **SMIL and CSS animation both run**, because the
browser renders the SVG.

| Animating | Technique | Why |
|---|---|---|
| Opacity fades, staggered reveals | CSS `@keyframes` + `animation-delay` | Compact, no transform-origin dependency |
| Horizontal sweeps | CSS `transform: translateX()` | Needs no transform-box support |
| Bar fills (`width`), pulses (`r`) | SMIL `<animate>` | CSS geometry-property animation is less consistently supported |
| Flowing connectors | CSS `stroke-dashoffset` | Widely supported, cheap |

Rules kept throughout: nothing flashes faster than ~1s, nothing loops that would distract
while reading, and no animation conveys information that isn't also in static text.

## Colour system

| Token | Value | Used for |
|---|---|---|
| Base | `#0B0F14` | Window background |
| Surface | `#0E151D` | Panels, tiles |
| Chrome | `#0E141B` | Title bars |
| Border | `#1E2A36` / `#1B2733` | Window and tile edges |
| Text | `#E6EDF3` | Primary |
| Muted | `#8FA5B8` / `#5C7183` | Secondary, labels |
| Cyan | `#38BDF8` | Primary accent: backend, infrastructure |
| Violet | `#A78BFA` | Secondary accent: AI, frontend |
| Indigo | `#818CF8` | Tertiary: automation |
| Green | `#34D399` | Active status, data |
| Amber | `#FBBF24` | Exploring status, governance |

Accents are assigned by *domain*, not by decoration: a violet bar always means AI, an
amber dot always means governance or a non-active state.

## Data flow

```text
data/profile.json ──► scripts/build-widgets.mjs ──► assets/generated/focus.svg ──► README.md
                              ▲
                    update-widgets.yml (push to data/**, weekly cron, manual)
```

Hand-authored panels are static by design: they change rarely and are easier to art-direct
directly. Only genuinely changing content (current focus) is generated.
