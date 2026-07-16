---
sidebar_position: 4
---

# Elementor Widgets

Widgets are registered by `KinderWorldManager\LoadElementor` in the category **Kinder World Widgets** (`kinder-world-widgets`).

Widget PHP classes live in `includes/Elementor/`. Markup templates live in `includes/Elementor/layouts/`.

## Registered widgets

| Widget | Class | Typical use |
|--------|-------|-------------|
| Hero | `HeroWidget` | Classic hero section |
| New Hero | `New_Hero` | Updated hero with icon list & animations |
| Animated Image | `AnimatedImage` | Decorative / animated images |
| Logo | `Logo` | Site logo |
| Menu | `Menu` | Navigation menu |
| Offcanvas | `Offcanvas` | Mobile / slide-out menu |
| Icon Box | `Icon_Box` | Feature boxes |
| Counter | `Counter` | Animated counters |
| Team | `Team` | Team members |
| Testimonial | `Testimonial` | Static testimonials |
| Testimonial Slider | `Testimonial_Slider` | Sliding testimonials |
| Student Slider | `Student_Slider` | Student carousel |
| Teacher Slider | `Teacher_Slider` | Teacher carousel |
| New Teacher Slider | `New_Teacher_Slider` | Updated teacher slider |
| Activities Slider | `Activities_Slider` | Activities carousel |
| Photo Gallery Slider | `Photo_Gallery_Slider` | Image gallery slider |
| Newsletter | `Newsletter` | Newsletter signup block |
| Kinder Accordion | `Kinder_Accordion` | Accordion content |
| Footer Accordion | `Footer_Accordion` | Footer FAQ / accordion |
| Program Post Type | `Program_Post_Type` | Lists `kinder_program` |
| Routine Post Type | `Routine_Post_Type` | Lists `kinder_routine` |
| Subject And Class | `Subject_And_Class` | Lists `subject_and_class` |
| Popular Course | `Popular_Course` | Lists `kinder_course` |
| More Event | `More_event` | Lists `kinder_events` |
| Purpose Blog | `Purpose_Blog` | Lists `purpose_blog` |
| News Block Post | `News_Block_Post` | News / blog block |
| Post With Pagination | `Post_With_Pagination` | Posts with pagination |
| Rotate Image | `Rotate_Image` | Decorative rotate image |

## Assets

- Style: `assets/css/elementor.css` (handle related to Elementor styles)
- Script: `assets/js/elementor.js` (depends on `jquery`, `elementor-frontend`)
- Localized object: `kwm_object` with `ajax_url` and `nonce`

Some widgets declare their own style/script dependencies (for example **New Hero** uses `new-hero-style` / `new-hero-script`).

## Using widgets in Elementor

1. Edit a page with Elementor.
2. Open the widget panel and find **Kinder World Widgets**.
3. Drag a widget onto the canvas and configure controls.
4. For CPT widgets, create matching posts first so the widget has content to query.

## Layout templates

Example layout paths:

```text
includes/Elementor/layouts/
├── new-hero.php
├── popular-course.php
├── Slider/
│   ├── activities-slider.php
│   ├── student-slider.php
│   └── ...
├── accordion/
│   ├── accordion.php
│   └── footer-accordion.php
└── ...
```

Developers can override appearance by editing these layout files or extending the widget classes carefully.
