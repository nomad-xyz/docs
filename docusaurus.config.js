// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nomad Docs',
  tagline: 'The Future of Cross-Chain is Optimistic',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          routeBasePath: '/guides'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',

        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',

        indexName: 'YOUR_INDEX_NAME',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

      },
      navbar: {
        logo: {
          alt: 'Nomad Logo',
          src: 'img/logob.svg',
          srcDark: 'img/logow.svg'
        },
        items: [
          {
            label: 'Docs',
            to: '/intro',
          },
          {
            label: 'Guides',
            to: '/guides',
          },
          {
            href: 'https://app.nomad.xyz',
            label: '𓀠 Nomad Bridge',
            position: 'right',
          },
          {
            href: 'https://nomad.xyz',
            label: '𓀀 Nomad.xyz ',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: '/guides',
              },
              {
                label: 'Reference Documentation',
                to: '/docs/reference',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/nomadxyz',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nomadxyz_',
              },
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/nomad-xyz/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Illusory Systems, Inc. Built with Immaculate Vibes 𓀀𓀀`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
