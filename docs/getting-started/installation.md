---
sidebar_position: 2
---

# Installation

Follow these steps to install the **Kinder World** theme and **Kinder World Manager** plugin.

## 1. Install Elementor

1. Go to **Plugins → Add New**.
2. Search for **Elementor**.
3. Install and **Activate**.

Kinder World Manager requires Elementor. If Elementor is not active, an admin notice appears with an install button.

---

## 2. Install Kinder World Manager

### Upload the plugin

1. Copy the `kinder-world-manager` folder to `wp-content/plugins/`.
2. Or zip the folder and upload via **Plugins → Add New → Upload Plugin**.

### Install Composer dependencies

From the plugin directory:

```bash
cd wp-content/plugins/kinder-world-manager
composer install
```

Required packages:

- `cmb2/cmb2` — meta boxes
- `johnbillion/extended-cpts` — custom post types & taxonomies

### Activate

1. Go to **Plugins**.
2. Activate **Kinder World Manager**.

On activation the plugin:

- Stores version options (`kwm_installed`, `kwm_version`)
- Creates the `wp_kwm_activities` custom table

You should see a **Kinder World** menu in the admin sidebar.

---

## 3. Install Kinder World Theme

1. Copy the `kinder-world` folder to `wp-content/themes/`.
2. Go to **Appearance → Themes**.
3. Activate **kinder-world**.

### Build frontend assets (developers)

If you are working from source:

```bash
cd wp-content/themes/kinder-world
npm install
npm run build
```

For development with watch mode:

```bash
npm run watch
```

Pre-built CSS/JS usually live in `assets/css/` and `assets/js/`.

---

## 4. Basic setup checklist

- [ ] Elementor active
- [ ] Kinder World Manager active (`composer install` done)
- [ ] Kinder World theme active
- [ ] Create a **Primary** menu under **Appearance → Menus**
- [ ] Assign header/footer via Manager **Theme Builder** (optional)
- [ ] Build Elementor pages using **Kinder World Widgets**

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Elementor required notice | Install/activate Elementor |
| White screen / class not found | Run `composer install` in the Manager plugin |
| Styles missing / broken layout | Run `npm run build` in the theme; clear Elementor CSS cache |
| Header/footer not replaced | Assign a `kinder_builder` template in Theme Builder settings |
| Tailwind classes missing in widgets | Rebuild theme assets (`npm run build`) so Tailwind rescans plugin files |
