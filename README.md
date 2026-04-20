# SiMAF — Design System

**Laboratorio de Simulaciones en Materiales, Astrofísica y Física**

Centro de investigación dedicado al desarrollo y aplicación de métodos computacionales avanzados para el estudio de fenómenos físicos mediante simulaciones de dinámica molecular, cálculos *ab initio* y algoritmos de alto rendimiento en arquitecturas paralelas.

---

## Brand positioning

SiMAF presents itself as a serious computational physics research laboratory. The visual register is that of a **scientific journal** — *Physical Review*, *Nature Physics*, *Journal of Computational Physics* — not a startup, not a consumer brand. Precision over warmth. Typography does the heavy lifting. Color is used with restraint, except where the full spectrum appears as a signature motif drawn from the logo.

## Audience & surfaces

Primary audiences:
- **Research peers** — other computational physics groups, collaborators on publications, potential PIs.
- **Students & postdocs** — prospective members of the lab.
- **Funding bodies & institutional partners** — agencies, university administration.
- **Scientific press / general public** — rarely, for outreach.

Expected surfaces:
- **Website** — institutional homepage, research lines, publications, people, news.
- **Publications & preprints** — cover pages, figure templates, poster templates.
- **Presentations** — conference talks, group meetings, seminars.
- **Reports & memos** — internal and external technical documents.

---

## Sources provided

- `uploads/logo-final.png` — the brand logo. A circular arrangement of dots sweeping through the full visible spectrum on a deep navy background. Read directly from the filesystem; exact colors sampled programmatically and captured in `colors_and_type.css`.

No codebase, Figma, or prior design system was provided. The system below is derived from:
1. The logo's palette and geometry.
2. The stated brief: *estética científica y seria como de una revista científica* (scientific, serious aesthetic, like a scientific journal).
3. Genre conventions of computational-physics publications.

> **⚠ Ask to iterate:** if the lab already has a parent institution (a university, a CONACYT center, etc.) with its own brand, please share those assets — institutional lockups, approved palettes, typographic pairings — so the system can defer to them where required.

---

## Index — what's in this folder

```
/
├── README.md                       this file
├── SKILL.md                        cross-compatible Agent Skill entry
├── colors_and_type.css             color & type tokens (CSS custom properties)
├── assets/
│   ├── logo-final.png              primary logo (rainbow wheel on navy)
│   ├── logo-mark.svg               simplified mark for small sizes
│   ├── logo-wordmark-dark.svg      full lockup for dark backgrounds
│   ├── logo-wordmark-light.svg     full lockup for light backgrounds
│   └── patterns/                   journal-style rules, grain, etc.
├── fonts/                          (loaded via Google Fonts — see Fonts below)
├── preview/                        cards rendered on the Design System tab
└── ui_kits/
    └── website/                    research-group website UI kit
        ├── README.md
        ├── index.html              interactive click-through
        └── *.jsx                   components
```

---

## Fonts — ⚠ substitutions flagged

No font files were provided. The following Google Fonts substitutions were made and should be reviewed:

| Role | Used | Intended for | If you have a preferred license, swap for |
|---|---|---|---|
| Serif (display, body, headings) | **EB Garamond** | Scientific-journal body & titles | Adobe Caslon Pro, Source Serif Pro, Times Ten, STIX Two Text |
| Sans (UI, labels, captions) | **Inter Tight** | Interface chrome, figure labels | Söhne, Neue Haas Grotesk, Basier Circle |
| Mono (code, equations, data) | **JetBrains Mono** | Code blocks, LaTeX-like inline math | IBM Plex Mono, Berkeley Mono |

**Please confirm** or provide replacement `.woff2` files and I'll swap `colors_and_type.css` to load them locally from `fonts/`.

---

## Content fundamentals

### Language
Primary: **Spanish (es-MX / neutral Latin American)**, given the lab's name. English should be used for publication titles, technical terms, and the English-language version of the site. Where a term has a stable Spanish equivalent, prefer it (*simulación de dinámica molecular*, not *molecular dynamics simulation*); keep anglicisms only when they are the standard in the field (*ab initio*, *machine learning potentials*, *post-processing*).

### Voice
- **Third person, impersonal, observational.** *"El grupo desarrolla…", "Se estudian…", "Los autores demuestran…"* — never *"nosotros"* unless signing a letter.
- **Precise, declarative, evidence-weighted.** Claims are scoped. *"Los resultados sugieren…"*, *"consistente con…"*, *"bajo las condiciones estudiadas…"*.
- **No marketing adjectives.** No *revolucionario, poderoso, innovador, único*. Replace with specifics: *"reduce el tiempo de cómputo en un factor de 4×"*.
- **Sentences are moderate-length.** Journal prose, not tweets. Semicolons welcome. Em-dashes welcome. Parenthetical asides welcome.

### Casing
- **Títulos:** "Capitalización tipo oración" — solo la primera letra y nombres propios. *"Dinámica molecular de materiales desordenados"* — not *"Dinámica Molecular De Materiales Desordenados"*.
- **English titles** may follow title case when citing.
- Section eyebrows use **ALL CAPS** with wide tracking (0.14em), sans-serif. *"LÍNEA DE INVESTIGACIÓN 03"*.

### Specific examples

**Homepage hero (good):**
> *Métodos computacionales para el estudio de fenómenos físicos en materiales, astrofísica y física fundamental.*

**Bad — too marketing:**
> ~~Transformamos la investigación científica con simulaciones de vanguardia que están revolucionando el campo.~~

**Research line summary (good):**
> *Se estudian las propiedades estructurales y dinámicas de aleaciones metálicas amorfas mediante simulaciones de dinámica molecular con potenciales de enlace fuerte. El trabajo reciente se centra en la relación entre topología local y transporte electrónico.*

**Publication listing (good):**
> **[2026]** *Structural relaxation in amorphous Cu₆₄Zr₃₆ under isothermal annealing.* **J. Chem. Phys.** 164, 024501. arXiv:2601.xxxxx

### Emoji & symbols
- **No emoji.** Ever. They break the register.
- **Unicode scientific symbols** are welcome and encouraged: ℏ, ∇, ∫, Å, °, ×, →, ≈, ≤, ≥, ±, ∞, α β γ δ, subscripts (H₂O, Cu₆₄Zr₃₆).
- **Math inline** uses italic serif (*E = mc²*) or real LaTeX rendering where available.
- **Figure references** use the journal convention: *Fig. 3(a)*, *Ec. 12*, *Tabla II*.

### Numbers, units, citations
- **SI units**, thin space before unit: *298 K*, *10 ns*, *2.4 eV*.
- **Decimal comma** acceptable in Spanish prose (*3,14*); **decimal point** in code, data, and English. Pick one per document and stay consistent.
- **Citations:** journal-style — *Autor et al.*, *Phys. Rev. B* **105**, 184201 (2022).

---

## Visual foundations

### The core motif: the spectral wheel
The logo's rotational sweep of color is the brand's single most distinctive signature. It reads as:
- a **radial distribution function** (materials science),
- a **phase diagram** or **dispersion plot** (solid-state physics),
- a **Hertzsprung–Russell-adjacent color index** (astrophysics),
- a **molecular dynamics cluster** (simulation).

Use it:
- as the logo itself, protected on navy #00173c;
- as a **categorical color scale** for up to 13 data series (see `--spec-*` tokens);
- sparingly, as an accent motif on covers and dividers — never as decoration without meaning.

Do **not**:
- rotate, recolor, or re-space the dots in the logo;
- place the full rainbow across UI chrome (buttons, headers) — that reduces it to noise;
- use it as a gradient fill.

### Color

Colors live in `colors_and_type.css`.

- **Surfaces:** the default theme is **paper** — warm off-white `#fbf9f4` with dark ink — the journal reading experience. A **dark theme** uses the logo's navy `#00173c` and is preferred for presentations, data-heavy dashboards, and anything that ships alongside the logo.
- **Primary accent:** spectrum blue `#0050f0` (one of the logo hues, picked as the single hero hue because it reads most clearly as a link/action on paper).
- **Spectrum palette:** 13 saturated hues sampled directly from the logo. Use in fixed ordinal order for plot series. Never mix with off-brand hues.
- **Status:** a tight semantic set (ok / warn / err / info). Does **not** reuse spectrum hues — semantic meaning must stay legible.

### Type

- **Serif (EB Garamond)** leads. It owns display, body, and most headings. This is what makes it feel like a journal rather than an app.
- **Sans (Inter Tight)** is chrome-only: buttons, labels, captions, eyebrows, figure numbering, navigation.
- **Mono (JetBrains Mono)** is for code, equations, filenames, metadata (DOIs, arXiv IDs).
- **Italic serif** carries emphasis and is used for Latin phrases (*ab initio*, *et al.*, *in silico*) and variable names in prose.
- **Small-caps & wide tracking** are used for eyebrows and figure labels — an old-journal affectation used deliberately.
- **Scale:** modular 1.250. The hero display is 68px/4.25rem; body is 18px/1.125rem at 1.65 line-height for prose comfort.

### Layout & grid

- **12-column grid**, 72px outer margin on desktop, 24px gutter. Wider inner content columns on article pages (max-width ~72ch for prose).
- **Fixed hairline rules** above and below mastheads — the single most "journal" move. `1px solid var(--rule)` on top, often doubled `3px` above section titles.
- **Generous whitespace.** Sections breathe. Don't fill every pixel.
- **Figure-caption blocks** are a first-class layout unit: the figure, a hairline rule, a sans-serif `Fig. N —` label, then serif caption.

### Backgrounds

- Default: flat paper or flat navy. **No gradients** (except the logo itself).
- Occasional: a subtle **paper grain** texture (5–8% opacity noise) on heroes — optional, opt-in.
- Full-bleed imagery: allowed on *covers*, never on UI chrome. When used, photos should be cool or cool-neutral in tone, never warm or amber-filtered.
- Never: bluish-purple marketing gradients, frosted-glass cards, emoji stickers.

### Borders, rules, dividers

- Journal-style **hairline rules** (`1px solid var(--rule)`) do most of the structural work. Avoid boxes around everything.
- **Double rules** (`border-top: 3px double; border-bottom: 1px solid`) above major sections, as in print journals.
- Internal card borders are 1px `var(--border)` (ink-200 on paper / navy-700 on dark) — not shadows.

### Shadows, elevation, cards

- **Very flat.** Cards are defined by borders and whitespace, not shadows.
- Three shadow tiers exist (`--shadow-1/2/3`) but `--shadow-1` is the default and `--shadow-3` is reserved for modals and floating menus.
- **No inner shadows** except for pressed-button state.

### Radii

- **Sharp by default.** `--r-0` (0) and `--r-1` (2px) cover most surfaces. Buttons and inputs use `--r-2` (4px). Avatars and pills use `--r-pill`.
- Never use radii ≥8px — it breaks the register.

### Animation & motion

- **Minimal.** Transitions are 120–320ms, `cubic-bezier(0.2, 0, 0, 1)` for standard, `cubic-bezier(0.16, 1, 0.3, 1)` for entrance easing.
- **Fades and short translates only.** No bounces, no elastic, no spring-y micro-interactions.
- **Scroll-linked** reveals on the homepage research lines are acceptable — opacity + 12px rise.
- **Data-visualization** is the one place liveliness is welcome: plots may animate in and scrub.

### Interaction states

- **Hover (links):** underline appears (serif prose always under-line on hover); color shifts to `--link-hover`.
- **Hover (buttons):** background darkens one step (`--accent` → `--accent-hover`). No scale.
- **Press:** background darkens two steps; translates 1px down; `shadow-1` removes.
- **Focus:** 2px solid `var(--accent)` outline, 2px offset. **Always visible.** This is a research site and accessibility is not optional.
- **Disabled:** 40% opacity, `cursor: not-allowed`.

### Transparency & blur

- **Rare.** A frosted sticky header (`backdrop-filter: blur(12px)`, `background: color-mix(in srgb, var(--bg) 85%, transparent)`) is permitted and is the only sanctioned use of blur.
- No glassmorphism cards. No blurry overlays over photos.

### Iconography
See the ICONOGRAPHY section below.

---

## Iconography

**Approach:** utilitarian, thin-stroke, monochrome. Icons are **never** the focus — they are hints. They mirror the restraint of journal typography.

**System used:** **Lucide** (https://lucide.dev) — loaded from CDN. Lucide's 1.5px stroke, rounded joins, and geometric consistency match the register of scientific publications without feeling startup-y.

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="atom"></i>
```

Rules:
- **Stroke weight:** 1.5px at 16–24px sizes; 2px at ≥32px.
- **Color:** inherit from text (`currentColor`). Icons do not carry their own color except in status chips.
- **Sizing:** always paired with a text label unless the affordance is universally known (✕, ←, →, ⋯, search).
- **Spacing:** 8px between icon and label.
- **Never:** emoji, flat-color "sticker" icons, isometric illustrations, 3D renders, gradients on icons.
- **Unicode scientific symbols** (∇ ∫ ℏ → α β ⟨ ⟩) are preferred over custom SVG for mathematical/scientific use.

Custom logo assets live in `assets/` as copied and re-rendered SVG wordmarks. No hand-drawn illustrations.

---

## UI kits

| Kit | Path | Surface |
|---|---|---|
| Website | `ui_kits/website/` | Institutional research-group website — homepage, research lines, publications, people |

Each kit contains a README, `index.html` entry-point (interactive click-through), and `.jsx` component files.

---

## Iteration asks

Before calling this finished, please help with:

1. **Parent institution brand** — is SiMAF under a university or national center? If so, share their brand guidelines so lockups can defer to them.
2. **Font licensing** — confirm EB Garamond / Inter Tight / JetBrains Mono are acceptable, or point me at your preferred licensed fonts.
3. **Scope of products** — right now there's one UI kit (website). Do you also need a publications/poster template? A deck template? A figure-template LaTeX class?
4. **Spanish vs English** — should the primary site be bilingual? Default to Spanish, English as secondary?
5. **Specific research lines** — the current placeholders are generic (*materiales amorfos, astrofísica estelar, algoritmos paralelos*). Share real research-line names and 1-paragraph summaries to replace them.
