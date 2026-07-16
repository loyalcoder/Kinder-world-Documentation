---
sidebar_position: 3
---

# Templates

## Template hierarchy (used files)

| Template | Behavior |
|----------|----------|
| `header.php` | Doctype, Google Fonts link, skip link, loads `site-nav` |
| `footer.php` | Closing site wrapper + default site-info credits |
| `index.php` | Blog list: banner + 2/3 content + 1/3 sidebar |
| `page.php` | Pages: banner + content + sidebar |
| `single.php` | Single post: banner, content, post nav, comments, sidebar |
| `archive.php` | Archives |
| `search.php` | Search results |
| `404.php` | Not found |
| `sidebar.php` | Blog sidebar widgets |
| `comments.php` | Comments template |

## Layout pattern

Most content templates use Tailwind utilities:

```html
<div class="container mx-auto max-w-kinder-width py-20 flex flex-col md:flex-row gap-12">
  <div class="left-content w-full md:w-2/3">...</div>
  <div class="right-content w-full md:w-1/3">...</div>
</div>
```

`max-w-kinder-width` is **1278px** (see `tailwind.config.js`).

## Template parts

```text
template-parts/
├── content/          # content.php, content-single.php, content-page.php, ...
├── excerpt/          # Post format excerpts
├── header/           # site-nav.php, site-branding.php, entry-header.php, ...
├── footer/           # footer-widgets.php
├── pagination/       # pagination.php
└── post/             # author-bio.php
```

### Banner

`kinder_world_get_banner()` (in `inc/template-tags.php`) outputs:

- Cream background (`#FEF9F0`) with animated star SVG pattern
- Breadcrumbs via `kinder_world_breadcrumbs()`
- Top margin to clear the fixed header

Called from `index.php`, `page.php`, `single.php`, and similar templates.

### Content display mode

On the blog index, content partials honor the theme mod:

```php
get_theme_mod( 'display_excerpt_or_full_post', 'excerpt' )
```

## Elementor pages

Pages built entirely in Elementor still load the theme header unless Theme Builder replaces it. Elementor full-width canvas templates may hide the theme header depending on Elementor page settings.
