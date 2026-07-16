---
sidebar_position: 4
---

# Header & Navigation

## Default header

`header.php` loads:

```php
get_template_part('template-parts/header/site', 'nav', $args);
```

### `site-nav.php` features

- Fixed header (`fixed z-[99]`) with white background and menu shadow
- Desktop (lg+): logo + primary menu with `KW_Nav_Walker`
- Mobile: hamburger opens Bootstrap **offcanvas** menu with `KW_Nav_Walker_Mobile`
- Logo: `assets/images/logo.svg`

## Menu location

Register a menu and assign it to **Primary** (`primary`) under **Appearance → Menus**.

Fallback when no menu exists: `kinder_world_menu_fallback()` shows an “Add Menu” button linking to the Menus screen.

## Desktop walker (`KW_Nav_Walker`)

- Top-level items with Balsamiq font styling
- Nested `<ul class="kw-dropdown ...">` for submenus
- Absolute positioned dropdowns with Tailwind classes
- SVG arrow for items with children

## Mobile walker (`KW_Nav_Walker_Mobile`)

- Offcanvas panel (Bootstrap)
- Toggle class `kw-child-menu-toggle` for nested menus
- JS in `kinder-world.js` slides child menus open/closed

## Scroll behavior

`main.js` adds class `scrolled` to `.site-header` when `window.scrollY > 0`.

## Theme Builder override

When Kinder World Manager assigns an Elementor header builder, the plugin intercepts `get_header` and the theme’s default `site-nav` may not appear. Use Elementor **Logo**, **Menu**, and **Offcanvas** widgets inside the builder instead.
