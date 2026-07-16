---
sidebar_position: 1
---

# Overview

**Kinder World Manager** is the companion WordPress plugin for the Kinder World theme. Version **1.0.0**. Text domain: `kinder-world-manager`.

## What it does

- Registers custom post types and taxonomies for kindergarten/education content
- Provides **28+ Elementor widgets** under the **Kinder World Widgets** category
- Replaces theme header/footer with Elementor-built templates (**Theme Builder**)
- Adds CMB2 meta boxes for Programs, Routines, Events, Courses, and more
- Registers frontend assets (Slick, Select2, WOW, Parallax, etc.)
- Adds an admin dashboard under **Kinder World**
- Integrates with Kirki Customizer when Kirki is available

## Main file

Entry point: `kinder-world-manager.php`

Singleton class `KinderWorldManager` boots on `plugins_loaded` and loads:

| Component | Class | Role |
|-----------|-------|------|
| Assets | `KinderWorldManager\Assets` | Register scripts/styles |
| Ajax | `KinderWorldManager\Ajax` | Story AJAX handler |
| Elementor | `KinderWorldManager\LoadElementor` | Widgets & category |
| Generator | `KinderWorldManager\Generator` | CPTs & taxonomies |
| Customizer | `KinderWorldManager\Customizer` | Theme Customizer / Kirki |
| Theme Builder | `KinderWorldManager\ThemeBuilder` | Header/footer replacement |
| Admin | `KinderWorldManager\Admin` | Menus, CMB2, settings (admin only) |
| Frontend | `KinderWorldManager\Frontend` | Shortcodes & HTML fixes (frontend only) |

## Constants

| Constant | Value |
|----------|--------|
| `KWM_VERSION` | Plugin version |
| `KWM_FILE` | Main plugin file path |
| `KWM_PATH` | Plugin directory |
| `KWM_URL` | Plugin URL |
| `KWM_ASSETS` | Assets URL |
| `KWM_ELEMENTOR` | Elementor widgets path |

## Dependencies

Composer (`composer.json`):

- `cmb2/cmb2`
- `johnbillion/extended-cpts`

Hard dependency at runtime: **Elementor**.

## Namespace

```text
KinderWorldManager\
```

Autoload: Composer PSR-4 + classmap for `includes/`.
