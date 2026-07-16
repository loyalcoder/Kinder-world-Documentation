---
sidebar_position: 1
---

# Overview

**Kinder World** is a WordPress theme for kids and education sites. Version **1.0.0**. Text domain: `kinder-world`.

It is based on the **Underscores (_s)** starter and customized with:

- **Tailwind CSS** (JIT)
- **Bootstrap 5** (Offcanvas / Modal)
- **Webpack** + **Sass** build pipeline
- Custom navigation walkers and blog templates

## What the theme provides

- Base HTML shell (`header.php`, `footer.php`)
- Blog, page, single, archive, search, 404 templates
- Fixed header with desktop menu + mobile offcanvas
- Page banner with breadcrumbs (`kinder_world_get_banner()`)
- Design tokens (primary orange `#EA4E1B`, fonts, container width)
- Helper functions for excerpts, KSES, Google Fonts

## Constants

Defined in `functions.php`:

| Constant | Meaning |
|----------|---------|
| `KINDER_WORLD_VERSION` | Theme version |
| `KINDER_WORLD_THEMEROOT` | Theme URI |
| `KINDER_WORLD_THEMEROOT_DIR` | Theme absolute path |
| `KINDER_WORLD_IMAGES` | Images URI |
| `KINDER_WORLD_CSS` | CSS URI |
| `KINDER_WORLD_JS` | JS URI |
| `KINDER_WORLD_VEND` | Vendors URI |

## Namespace

```text
KinderWorld\
```

Classes autoload from `classes/` via `classes/autoload.php`.

## Theme supports

- Title tag, post thumbnails (750×465 hard crop)
- Custom logo, custom background
- HTML5 markup
- Selective refresh widgets
- Post formats: gallery, image, link, quote, video, audio, status, aside
- Nav menu location: `primary`
- Sidebar: `sidebar-1` (Blog)
