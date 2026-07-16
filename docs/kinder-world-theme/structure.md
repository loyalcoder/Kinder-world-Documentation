---
sidebar_position: 2
---

# Structure

## Directory tree

```text
kinder-world/
├── functions.php
├── style.css                 # Theme header + base styles
├── header.php / footer.php
├── index.php / page.php / single.php / archive.php / search.php / 404.php
├── sidebar.php / comments.php
├── assets/
│   ├── css/style.css         # Compiled from SCSS + Tailwind
│   ├── js/
│   │   ├── main.js → main.bundle.js
│   │   ├── kinder-world.js → kinderworld.bundle.js
│   │   └── ...
│   └── images/logo.svg
├── classes/
│   ├── Assets.php
│   ├── KW_Nav_Walker.php
│   ├── KW_Nav_Walker_Mobile.php
│   ├── Svg_Icons.php
│   ├── Comments_list.php
│   └── autoload.php
├── inc/
│   ├── helper.php
│   ├── template-tags.php     # includes kinder_world_get_banner()
│   ├── template-functions.php
│   ├── breadcrumbs.php
│   ├── customizer.php
│   ├── custom-header.php
│   └── jetpack.php
├── scss/                     # Source styles
├── template-parts/           # Modular partials
├── webpack.config.js
├── tailwind.config.js
└── package.json
```

## Core classes

| Class | Responsibility |
|-------|----------------|
| `KinderWorld\Assets` | Register/enqueue theme CSS & JS |
| `KinderWorld\KW_Nav_Walker` | Desktop dropdown menu markup |
| `KinderWorld\KW_Nav_Walker_Mobile` | Mobile accordion/offcanvas menu |
| `KinderWorld\Svg_Icons` | SVG icon helper |
| `KinderWorld\Comments_list` | Comment list presentation |

## Included PHP modules (`inc/`)

| File | Purpose |
|------|---------|
| `helper.php` | Fonts URL, excerpt, KSES, menu fallback |
| `template-tags.php` | Entry meta, banner, tags after single |
| `template-functions.php` | Body classes, comment form, navigation |
| `breadcrumbs.php` | `kinder_world_breadcrumbs()` |
| `customizer.php` | Dark mode + selective refresh |
| `jetpack.php` | Jetpack compatibility |
