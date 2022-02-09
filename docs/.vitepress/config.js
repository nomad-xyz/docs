module.exports = {
  lang: "en-US",
  title: "Nomad",
  description: "Documentation",

  head: [["link", { rel: "icon", href: `/favicon.png` }]],

  themeConfig: {
    // repo: 'https://github.com/nomad-xyz/nomad-monorepo',
    docsDir: "docs",

    nav: [
      { text: "Home", link: "/", activeMatch: "^/$|^/home/" },
      { text: "Bridge", link: "/bridge/", activeMatch: "^/bridge" },
      {
        text: "Developer Resources",
        link: "/dev/",
        activeMatch: "^/dev/",
      },
    ],

    sidebar: {
      "/home/": getHomeSidebar(),
      "/bridge/": getBridgeSidebar(),
      "/dev": getIntegrationsSidebar(),
      "/": getHomeSidebar(),
    },
  },
};

function getHomeSidebar() {
  return [
    { text: "What is Nomad?", link: "/" },
    { text: "Brand Kit", link: "/brand-kit" },
  ];
}

function getBridgeSidebar() {
  return [
    { text: "Getting Started", link: "/bridge/" },
    {
      text: "Resources",
      children: [
        { text: "Deployed Tokens", link: "/bridge/deployed-tokens" },
      ],
    },
    { text: "FAQs", link: "/bridge/" },
    {
      text: "Ways to Bridge Using Nomad",
      children: [
        { text: "Nomad GUI", link: "/bridge/" },
        {
          text: "Send Native Tokens Using Etherscan",
          link: "/bridge/etherscan-native",
        },
        {
          text: "Send ERC-20 Tokens Using Etherscan",
          link: "/bridge/etherscan",
        },
      ],
    },
  ];
}

function getIntegrationsSidebar() {
  return [
    {
      text: "Technical Docs",
      children: [
        { text: "Nomad Architecture", link: "/dev/architecture" },
        { text: "Token Bridge xApp", link: "/dev/token-bridge" },
        { text: "Governance", link: "/dev/governance" },
        { text: "Upgrade Setup", link: "/dev/upgrade-setup" },
        {
          text: "Deploy Contracts to Dev",
          link: "/dev/dev-contract-deployment",
        },
        {
          text: "Deploy Contracts to Prod",
          link: "/dev/prod-contract-deployment",
        },
        { text: "Off-Chain Agents", link: "/dev/agents/" },
      ],
    },
    {
      text: "Developer Resources",
      children: [
        { text: "SDK", link: "/dev/sdk" },
        { text: "Writing a xApp", link: "/dev/xapps" },
      ],
    },
  ];
}
