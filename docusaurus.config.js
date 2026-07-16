// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kinder World',
  tagline: 'WordPress Theme & Kinder World Manager Plugin Documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://loyalcoder.github.io',
  baseUrl: '/Kinder-world-Documentation/',
  organizationName: 'loyalcoder',
  projectName: 'Kinder-world-Documentation',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/loyalcoder/Kinder-world-Documentation/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Kinder World',
        logo: {
          alt: 'Kinder World Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/loyalcoder/Kinder-world-Documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/installation',
              },
              {
                label: 'Kinder World Manager',
                to: '/docs/kinder-world-manager/overview',
              },
              {
                label: 'Kinder World Theme',
                to: '/docs/kinder-world-theme/overview',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Kinder World Theme',
                href: 'https://kinderworldtheme.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/loyalcoder/Kinder-world-Documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kinder World Theme Team. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php', 'bash', 'scss'],
      },
    }),
};

export default config;
