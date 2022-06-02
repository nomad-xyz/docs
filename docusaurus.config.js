/** @type {import('@docusaurus/types').DocusaurusConfig} */

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Nomad Docs',
  tagline: 'The Future of Cross-Chain is Optimistic. Here you will find documentation, guides and reference material for not only using the Nomad Bridge, but also building on the Nomad Protocol',
  url: 'https://docs.nomad.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nomad-xyz',
  projectName: 'monorepo',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
    image: 'img/nomad-hero.png',
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
    },
    docs: {
      sidebar: {
        "hideable": true
      }
    },
    navbar: {
      title: 'Learn',
      logo: {
        alt: 'Nomad Logo',
        src: 'img/logob.svg',
        srcDark: 'img/logow.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/guides/',
          position: 'left',
          label: 'Guides',
        },
        {
          to: 'https://discord.gg/nomadxyz',
          position: 'left',
          label: 'Discord',
        },
        {
          href: 'https://github.com/nomad-xyz',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Nomad',
          items: [
            {
              label: 'Nomad.xyz',
              to: 'https://nomad.xyz',
            },
            {
              label: 'Nomad Token Bridge',
              to: 'https://app.nomad.xyz',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Learn',
              to: '/',
            },
            {
              label: 'Blog',
              to: 'https://https://blog.nomad.xyz/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              to: 'https://discord.gg/nomadxyz',
            },
            {
              label: 'Forums',
              to: 'https://forums.nomad.xyz',
            },
          ],
        },
      ],
      copyright: `Built with Immaculate Vibes. Copyright © ${new Date().getFullYear()} Illusory Systems, Inc.`,
    },
  },
  plugins: [
    'docusaurus-tailwindcss-loader',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        sidebarPath: require.resolve('./src/data/sidebar-guides.js'),
        path: './guides',
        routeBasePath: 'guides',
        include: ['**/*.md', '**/*.mdx'],
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
  stylesheets: [
  ],
  scripts: [
  ],
};

module.exports = config;
