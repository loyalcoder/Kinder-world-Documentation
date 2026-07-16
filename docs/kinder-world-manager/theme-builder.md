---
sidebar_position: 5
---

# Theme Builder

`KinderWorldManager\ThemeBuilder` replaces the theme’s default header and footer with Elementor content from **Kinder Builder** (`kinder_builder`) posts.

## How it works

Hooks:

- `get_header` → `replace_header()`
- `get_footer` → `replace_footer()`
- `builder_content_header` / `builder_content_footer` → print Elementor HTML
- `elementor/editor/after_save` → clear cache
- Extra Elementor controls (e.g. sticky) on builder elements

When a header or footer builder ID is found for the current page:

1. Plugin includes its own `Themebuilder/templates/header.php` or `footer.php`
2. Theme’s normal `header.php` / `footer.php` output is suppressed
3. Elementor renders the assigned builder post via `get_builder_content_for_display()`

## Setup steps

1. Create a new **Kinder Builder** post.
2. Edit it with Elementor (header layout, logo, menu widgets, etc.).
3. Create another builder post for the footer if needed.
4. Assign header/footer in Theme Builder / Settings meta (see `includes/Themebuilder/Settings.php`).
5. View the frontend — theme header/nav should be replaced when an ID is assigned.

## Related files

```text
includes/Themebuilder/
├── Themebuilder.php
├── Settings.php
├── functions.php
└── templates/
    ├── header.php
    ├── footer.php
    └── meta-fields.php
```

## Notes

- If no builder ID is assigned, the theme’s default `header.php` / `footer.php` remain in use.
- Sticky header controls can be added to Elementor sections/columns used in builder templates.
- Clearing Elementor CSS cache after builder changes is recommended if styles look stale.
