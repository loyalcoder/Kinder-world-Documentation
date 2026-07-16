---
sidebar_position: 6
---

# Admin & CMB2 Fields

## Admin menu

Registered by `KinderWorldManager\Admin\Menu`:

| Menu | Slug | Capability |
|------|------|------------|
| Kinder World (Dashboard / Settings) | `kinder-world-dashboard` | `manage_options` |
| Report | `kinder-world-report` | `manage_options` |

Views:

- `includes/Admin/views/settings.php`
- `includes/Admin/views/report.php`

Admin assets (when available): `assets/css/admin.css`, `assets/js/admin.js`.

## CMB2 configuration

`KinderWorldManager\Admin\CMB2_Config` hooks into `cmb2_admin_init` and registers metaboxes for:

| Method | Object type |
|--------|-------------|
| `cmb2_program_metaboxes` | `kinder_program` |
| `cmb2_routine_metabox` | `kinder_routine` |
| `cmb2_news_block_metabox` | News block related |
| `cmb2_subject_and_class_metabox` | `subject_and_class` |
| `cmb2_events_metabox` | `kinder_events` |
| `cmb2_courses_metabox` | `kinder_course` |
| `cmb2_purpose_blog_metabox` | `purpose_blog` |
| `cmb2_purpose_blog_taxonomy_metabox` | Purpose blog taxonomy |

### Example: Routine fields

Box ID: `kinder_routine_metabox_settings`

Typical fields:

- Description (`textarea`)
- Background color (`colorpicker`)
- Additional visual / content settings used by the Routine Elementor widget

Other CPTs follow the same pattern: title/editor in core, plus CMB2 fields for colors, icons, links, schedules, and display options consumed by widgets.

## CMB2 libraries bundled

Under `includes/Library/`:

- **cmb-field-select2** — Select2 field type
- **CMB2-Switch-Button** — on/off switch
- **CMB2_Tags** — tags field type

## Admin Handler

`Admin\Handler` processes admin form submissions and related actions for settings/reports.
