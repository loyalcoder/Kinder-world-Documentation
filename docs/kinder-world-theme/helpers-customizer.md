---
sidebar_position: 6
---

# Helpers & Customizer

## Helper functions (`inc/helper.php`)

### `kinder_world_fonts_url()`

Builds a Google Fonts CSS2 URL for default fonts (Balsamiq Sans, Nunito). Filterable via `kinder_world_google_fonts`.

### `kinder_world_excerpt( $words = 20, $more = 'button' )`

Prints a trimmed excerpt with an optional Read More button.

### `kinder_world_kses( $raw )` / `kinder_world_allowed_html()`

Allowlist-based HTML sanitization for theme output.

### `kinder_world_menu_fallback()`

Shows an “Add Menu” CTA when no primary menu is assigned.

## Template helpers

| Function | File | Role |
|----------|------|------|
| `kinder_world_get_banner()` | `template-tags.php` | Page banner + breadcrumbs |
| `kinder_world_breadcrumbs()` | `breadcrumbs.php` | Breadcrumb trail |
| `kinder_world_post_navigation()` | `template-functions.php` | Prev/next post UI |
| `kinder_world_get_icon_svg()` | `template-functions.php` | SVG icons via `Svg_Icons` |
| `blo_comment_style()` | `template-functions.php` | Custom comment markup |

Action for tags after single content:

```php
do_action( 'kinder_world_after_single_post' );
```

Hooked to `add_post_tags_after_content`.

## Theme Customizer (`inc/customizer.php`)

Panel: **Kinder World Settings**

| Setting | Type | Description |
|---------|------|-------------|
| `kinder_world_dark_mode_toggle` | checkbox | Enable Dark Mode (`postMessage`) |

Also enables selective refresh for site title and tagline.

## Google Fonts note

Fonts may be loaded from:

1. Hardcoded `<link>` tags in `header.php`
2. Enqueued `kinder-world-fonts` style handle

Prefer consolidating to one method in production to avoid duplicate requests.
