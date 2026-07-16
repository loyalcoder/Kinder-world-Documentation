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
| **Magic Elements** | Extra Elementor widgets, templates, and Magic Builder layouts for richer page design |
| **Easy Build CF7 Lite** | Build and style Contact Form 7 forms visually inside Elementor |

### Magic Elements

**Magic Elements** is an Elementor extension (by LoyalCoder) that adds advanced widgets, templates, and builder tools on top of Elementor. Useful alongside Kinder World when you need more general-purpose design blocks beyond the Kinder World Manager widgets.

| Detail | Value |
|--------|--------|
| Folder | `wp-content/plugins/magic-elements/` |
| Version (bundled example) | 1.0.4 |
| Requires | WordPress 5.0+, PHP 7.0+, **Elementor** |
| Site | [magic-elements.loyalcoders.com](https://magic-elements.loyalcoders.com) |

**What it provides**

- Custom Elementor widgets (Heading, Button, Accordion, Tabs, Team, Pricing Table, Flip Card, Progress Bar, News Ticker, Nav Menu, Post List, Image Compare, Lightbox, and more)
- Magic Builder (`MBuilder`) for custom layout / CPT-based builder content
- Admin tools and frontend asset loading for widget styling

**When to use with Kinder World**

- Use **Kinder World Manager** widgets for kindergarten-specific sections (programs, routines, teachers, courses).
- Use **Magic Elements** for generic UI blocks (pricing, progress, tabs, feature lists) that are not covered by Manager.

Activate **Elementor** first, then activate Magic Elements.

### Easy Build CF7 Light (CF7-lite)

**Easy Build CF7 Light** (often called CF7-lite) connects **Contact Form 7** with **Elementor**. You design contact forms with Elementor drag-and-drop widgets; fields sync back to Contact Form 7.

| Detail | Value |
|--------|--------|
| Folder | `wp-content/plugins/easy-build-cf7-light/` |
| Plugin name | Easy Build CF7 Light |
| Version (bundled example) | 1.0.4 |
| Requires | WordPress 5.0+, PHP 7.4+, **Contact Form 7**, **Elementor** |
| Site | [easy-build-cf7-light.loyalcoders.com](https://easy-build-cf7-light.loyalcoders.com) |

**What it provides**

- Visual CF7 form building inside Elementor
- Elementor field widgets: Text, Email, URL, Tel, Number, Date, Textarea, Dropdown, Checkboxes, Radio, Acceptance, Quiz, File, Submit
- Contact Form wrapper widget and auto field sync to CF7 form content
- Pre-built form layouts / templates and responsive styling
- Admin menu **Easy Build CF7** to manage builder forms

**Setup order**

1. Install and activate **Contact Form 7**
2. Install and activate **Elementor**
3. Install and activate **Easy Build CF7 Light**
4. Open **Easy Build CF7** in admin (or edit a builder form with Elementor) and design your form
5. Place the form on Kinder World pages via Elementor / CF7 shortcode

**When to use with Kinder World**

- Enquiry / contact / admission interest forms on landing pages
- Styled forms that match Elementor layouts without writing CF7 shortcode markup by hand

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
