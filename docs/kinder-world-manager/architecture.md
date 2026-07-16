---
sidebar_position: 2
---

# Architecture

## Directory structure

```text
kinder-world-manager/
├── kinder-world-manager.php   # Bootstrap
├── composer.json
├── assets/
│   ├── css/                   # elementor.css, frontend.css, new-hero.css
│   ├── js/                    # elementor.js, frontend.js, new-hero.js, enquiry.js
│   └── vendor/                # slick, select2, wow, counter, parallax, animate
├── includes/
│   ├── Admin/                 # Menu, Settings, Handler, CMB2
│   ├── Customizer/            # Kirki + Customizer sections
│   ├── Elementor/             # Widget classes + layouts/
│   ├── Frontend/              # Shortcodes + views
│   ├── Library/               # CMB2 add-ons (Select2, Switch, Tags)
│   ├── Themebuilder/          # Header/footer replacement
│   ├── Traits/
│   ├── Ajax.php
│   ├── Assets.php
│   ├── Customizer.php
│   ├── Elementor.php          # LoadElementor class
│   ├── Frontend.php
│   ├── Generator.php
│   ├── Installer.php
│   └── functions.php          # Elementor CSS compatibility
└── vendor/                    # Composer packages
```

## Bootstrap flow

1. `kinder_world_manager()` → `KinderWorldManager::init()`
2. Define constants
3. Register activation hook → `Installer`
4. On `plugins_loaded`:
   - Load text domain
   - Init Assets, Ajax, Elementor, Generator, Customizer, ThemeBuilder
   - Admin: `Admin` + `Settings`
   - Frontend: `Frontend`

## Activation (`Installer`)

- Sets `kwm_installed` (timestamp) and `kwm_version`
- Creates table `{prefix}kwm_activities` via `dbDelta()`:

| Column | Type |
|--------|------|
| `id` | int, PK, auto increment |
| `title` | varchar(250) |
| `description` | text |
| `age_group` | varchar(50) |
| `duration` | int |
| `created_at` / `updated_at` | datetime |

## Elementor CSS compatibility

`includes/functions.php` registers filters to:

- Avoid printing builder CSS inline in body content
- Normalize color values that arrive as arrays
- Flatten malformed selector rules

This reduces PHP notices during Elementor CSS generation.
