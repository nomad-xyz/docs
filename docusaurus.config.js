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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'Nomad Docs',
        logo: {
          alt: 'Nomad Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guides',
          },
          {
            href: 'https://github.com/nomad-xyz',
            label: '𓂀 GitHub',
            position: 'right',
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
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: '/docs/guides',
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
                href: 'discord.gg/nomadxyz',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nomadxyz_',
              },
            ],
          },
          {
            title: 'Other',
            items:[
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
