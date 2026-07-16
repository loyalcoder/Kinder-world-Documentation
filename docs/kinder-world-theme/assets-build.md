---
sidebar_position: 5
---

# Assets & Build

## Enqueued assets

`KinderWorld\Assets` registers and enqueues:

| Handle | File |
|--------|------|
| `kinder-main` | `assets/js/main.bundle.js` |
| `kinder-world` | `assets/js/kinderworld.bundle.js` |
| `kinder-world-style` | Root `style.css` |
| `kinder-world-default` | `assets/css/style.css` |
| `kinder-world-fonts` | Google Fonts URL from `kinder_world_fonts_url()` |

Comment reply script loads on singular posts when comments are open.

## Source JS

**`assets/js/main.js`**

- Imports Bootstrap `Offcanvas` and `Modal`
- Initializes offcanvas elements
- Adds/removes `scrolled` class on header

**`assets/js/kinder-world.js`**

- jQuery mobile submenu toggle (`.kw-child-menu-toggle`)

## Webpack

`webpack.config.js` entry points:

| Entry | Output |
|-------|--------|
| `scss/style.scss` | `assets/css/style.css` |
| `assets/js/main.js` | `assets/js/main.bundle.js` |
| `assets/js/kinder-world.js` | `assets/js/kinderworld.bundle.js` |

PostCSS pipeline includes **Tailwind** and **Autoprefixer**. jQuery is externalized (`externals: { jquery: 'jQuery' }`).

## Commands

```bash
cd wp-content/themes/kinder-world
npm install
npm run watch    # development
npm run build    # production
npm run bundle   # create zip distribution
```

## Tailwind config highlights

From `tailwind.config.js`:

**Colors**

- `primary`: `#EA4E1B`
- `primaryDark`: `#C23D15`
- `secondary`: `#2E2E2E`
- `bannerBg`: `#FEF9F0`
- `bannerColor`: `#03A678`

**Fonts**

- `font-balsamiq` → Balsamiq Sans
- `font-nunito` → Nunito
- `font-playfair` → Playfair Display

**Content scan paths** include theme PHP/JS **and** Manager Elementor widget paths, so utility classes used in the plugin are generated into theme CSS.

## SCSS layout

```text
scss/
├── style.scss
├── components/   # header, nav, mobile-nav
├── default/      # animation, constants, WP defaults
├── others/
└── tailwind/
```
