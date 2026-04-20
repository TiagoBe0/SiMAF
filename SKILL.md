---
name: simaf-design
description: Use this skill to generate well-branded interfaces and assets for SiMAF (Laboratorio de Simulaciones en Materiales, Astrofísica y Física), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Brand register:** scientific journal (*Physical Review*, *Nature Physics*). Serious, precise, restrained. Never startup-y, never marketing.
- **Color:** paper `#fbf9f4` + ink `#0c0f1a` for light; navy `#00173c` for dark. 13-hue spectrum palette (`--spec-*`) sampled from the logo — reserved for data viz and category markers. Single hero accent `--accent: #0050f0`.
- **Type:** EB Garamond (serif, display+body), Inter Tight (sans, chrome only), JetBrains Mono (code, equations). Substitutions flagged; confirm with user.
- **Icons:** Lucide at 1.5px stroke. No emoji. Unicode scientific symbols (ℏ ∇ ∫ Å →) are preferred.
- **Motion:** minimal fades/translates, 120–320ms, standard ease. No bounces.
- **Radii:** sharp — 0, 2, 4, 6px. Pills only for chips/avatars.
- **Layout:** hairline rules (`1px solid var(--rule)`), double rules above section titles, generous whitespace, max-width ~72ch for prose.
- **Voice (ES):** third person, impersonal, no marketing adjectives, sentence-case titles, decimal comma in prose, SI units with thin space.

All tokens in `colors_and_type.css`. UI kit in `ui_kits/website/`. Logo PNG + SVG lockups in `assets/`.
