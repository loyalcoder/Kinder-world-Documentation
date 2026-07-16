---
sidebar_position: 1
---

# Requirements

Before installing Kinder World Theme and Kinder World Manager, make sure your environment meets these requirements.

## WordPress & PHP

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| WordPress | 5.4+ | Latest stable |
| PHP | 7.4+ | 8.0+ |
| MySQL / MariaDB | 5.6+ | 8.0+ / 10.4+ |

## Required plugins

| Plugin | Required for | Notes |
|--------|--------------|-------|
| **Elementor** | Kinder World Manager | Manager shows an admin notice and install link if Elementor is missing |
| **Kinder World Manager** | Full Elementor widget set & Theme Builder | Activate after Elementor |

## Optional plugins

| Plugin | Used for |
|--------|----------|
| **Kirki** | Extra Customizer panels in the Manager plugin (`General`, `Header`, `Footer` settings) |
| **Jetpack** | Theme loads Jetpack compatibility when Jetpack is active |

## Local development tools

| Tool | Purpose |
|------|---------|
| **Composer** | Manager plugin dependencies (`cmb2`, `extended-cpts`) |
| **Node.js 18+** / **npm** or **Yarn** | Theme Webpack + Tailwind build |
| **Laragon / Local / similar** | Local WordPress environment |

## Server recommendations

- Pretty permalinks enabled
- `mod_rewrite` (Apache) or equivalent URL rewriting
- Enough memory for Elementor editor (256MB+ PHP memory recommended)

## Folder locations (typical)

```text
wp-content/
├── themes/
│   └── kinder-world/
└── plugins/
    ├── elementor/
    └── kinder-world-manager/
```
