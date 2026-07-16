---
sidebar_position: 8
---

# Customizer

`KinderWorldManager\Customizer` extends the WordPress Customizer and optionally loads Kirki panels.

## Kirki integration

If the **Kirki** plugin is active, Manager loads:

| Class | Role |
|-------|------|
| `Customizer\Init_Customizer` | Bootstrap Kirki config |
| `Customizer\General_Settings` | General options |
| `Customizer\Header_Settings` | Header options |
| `Customizer\Footer_Settings` | Footer options |

Without Kirki, these panels are skipped.

## Native Customizer hooks

On `customize_register`, the plugin also prepares sections for:

- Color scheme
- Typography

(Implementations may be stubs or extended in your project branch.)

## Theme Customizer note

The **Kinder World theme** has its own Customizer panel (`Kinder World Settings` with Dark Mode). Plugin and theme Customizer features can coexist; use Theme Builder / Elementor for most layout control on Elementor-built pages.
