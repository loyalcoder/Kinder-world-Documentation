---
sidebar_position: 3
---

# Custom Post Types

Registered in `KinderWorldManager\Generator` using **Extended CPTs** (`register_extended_post_type` / `register_extended_taxonomy`).

Most types support REST (`show_in_rest`), feeds, and a custom admin “Published” column from `published_date` meta.

## Post types

| Label | Post type | Slug | Supports | Taxonomy |
|-------|-----------|------|----------|----------|
| Kinder Builder | `kinder_builder` | `kinder_builder` | title, editor, elementor | — |
| Routine | `kinder_routine` | `kinder_routine` | title, editor | `kinder_routine_taxonomy` |
| Program | `kinder_program` | `kinder_program` | title, editor, elementor, thumbnail | `kinder_program_taxonomy` |
| Subject And Class | `subject_and_class` | `subject_and_class` | title, editor | `subject_and_class_taxonomy` |
| Event | `kinder_events` | `kinder_events` | title, editor, thumbnail | `kinder_event_taxonomy` |
| Course | `kinder_course` | `kinder_course` | title, editor, thumbnail | `kinder_course_taxonomy` |
| Purpose Blog | `purpose_blog` | `purpose_blog` | title, editor, thumbnail | `purpose_blog_taxonomy` |

## Taxonomies

Each content taxonomy uses:

- Radio meta box on the edit screen
- Dashboard “At a Glance” support
- Admin column for `updated_date`

| Taxonomy | Attached to | Public slug |
|----------|-------------|-------------|
| `kinder_routine_taxonomy` | `kinder_routine` | `kroutine-catagory` |
| `kinder_program_taxonomy` | `kinder_program` | `kprogram-catagory` |
| `subject_and_class_taxonomy` | `subject_and_class` | `k_subject_and_class_category` |
| `kinder_event_taxonomy` | `kinder_events` | `kevent-catagory` |
| `kinder_course_taxonomy` | `kinder_course` | `kcourse-catagory` |
| `purpose_blog_taxonomy` | `purpose_blog` | `purpose-blog-category` |

## Kinder Builder

`kinder_builder` is used by the **Theme Builder** to store Elementor header, footer, and related layout templates. Create builder posts, design them in Elementor, then assign them in Theme Builder settings.

## Typical content workflow

1. Create categories under the matching taxonomy.
2. Add posts (Program, Event, Course, etc.).
3. Fill CMB2 meta fields on the edit screen.
4. Display content with the matching Elementor widget on a page.
