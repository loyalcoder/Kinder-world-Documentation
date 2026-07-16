---
sidebar_position: 7
---

# Assets, Ajax & Shortcodes

## Frontend assets

`KinderWorldManager\Assets` registers (does not always enqueue) scripts and styles on `wp_enqueue_scripts`.

### Scripts

| Handle | Source |
|--------|--------|
| `slick` | `assets/vendor/slick/slick.min.js` |
| `slick-animation` | `assets/vendor/slick/slick-animation.min.js` |
| `counter` | `assets/vendor/counter/counter.js` |
| `select2` | `assets/vendor/select2/select2.min.js` |
| `parallax-script` | `assets/vendor/parallax/parallax.min.js` |
| `wow` | `assets/vendor/wow/wow.min.js` |
| `kinder-world-script` | `assets/js/frontend.js` |
| `new-hero-script` | `assets/js/new-hero.js` |

### Styles

| Handle | Source |
|--------|--------|
| `kinder-world-style` | `assets/css/frontend.css` |
| `slick` / `slick-theme` | Slick CSS |
| `select2` | Select2 CSS |
| `animate` | Animate.css |
| `new-hero-style` | `assets/css/new-hero.css` |

Widgets and shortcodes enqueue the handles they need.

## Ajax

`KinderWorldManager\Ajax` registers:

- `wp_ajax_kinder_world_load_story`
- `wp_ajax_nopriv_kinder_world_load_story`

Flow:

1. Verify nonce `kinder_world_nonce`
2. Load post by `story_id`
3. Expect post type `story`
4. Return JSON with title and filtered content

Localized data (when story script is used): `kinder_world_data` with `ajax_url`, `nonce`, and error messages.

:::note
Ensure a `story` post type exists if you rely on this endpoint. It is not registered by the Manager Generator CPTs listed in Custom Post Types.
:::

## Shortcodes

`KinderWorldManager\Frontend\Shortcode`:

| Shortcode | Purpose |
|-----------|---------|
| `[kinder_world_story id="123"]` | Render a story block |
| `[kinder_world_character]` | Character-related output |

Example:

```php
[kinder_world_story id="42"]
```

## Frontend HTML helpers

`KinderWorldManager\Frontend` also:

- Removes trailing slashes from void HTML tags in script/style tags
- Normalizes malformed encoded `href` attributes in content
- Disables certain WordPress auto-sizes image attributes that can produce invalid CSS

These are compatibility fixes for Elementor + theme markup quality.
