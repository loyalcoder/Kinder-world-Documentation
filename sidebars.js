// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/requirements',
        'getting-started/installation',
      ],
    },
    {
      type: 'category',
      label: 'Kinder World Manager',
      collapsed: false,
      items: [
        'kinder-world-manager/overview',
        'kinder-world-manager/architecture',
        'kinder-world-manager/custom-post-types',
        'kinder-world-manager/elementor-widgets',
        'kinder-world-manager/theme-builder',
        'kinder-world-manager/admin-cmb2',
        'kinder-world-manager/assets-ajax-shortcodes',
        'kinder-world-manager/customizer',
      ],
    },
    {
      type: 'category',
      label: 'Kinder World Theme',
      collapsed: false,
      items: [
        'kinder-world-theme/overview',
        'kinder-world-theme/structure',
        'kinder-world-theme/templates',
        'kinder-world-theme/header-navigation',
        'kinder-world-theme/assets-build',
        'kinder-world-theme/helpers-customizer',
        'kinder-world-theme/theme-plugin-integration',
      ],
    },
  ],
};

export default sidebars;
