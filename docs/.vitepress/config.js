module.exports = {
  lang: 'en-US',
  title: 'Nomad',
  description: 'Documentation',

  themeConfig: {
    // repo: 'https://github.com/nomad-xyz/nomad-monorepo',
    docsDir: 'docs',

    nav: [
      { text: 'Home', link: '/', activeMatch: '^/$|^/home/' },
      { text: 'Bridge', link: '/bridge/index.html', activeMatch: '^/bridge' },
      {
        text: 'Developer Resources',
        link: '/dev/index.html',
        activeMatch: '^/dev/'
      }
    ],

    sidebar: {
      '/home/': getHomeSidebar(),
      '/bridge/': getBridgeSidebar(),
      '/dev': getIntegrationsSidebar(),
      '/': getHomeSidebar()
    }
  }
}

function getHomeSidebar() {
  return [
    { text: 'What is Nomad?', link: '/' },
    { text: 'Brand Kit', link: '/brand-kit.html' },
  ]
}

function getBridgeSidebar() {
  return [
    { text: 'Getting Started', link: '/bridge/index.html' },
    { text: 'FAQs', link: '/bridge/faq.html' },
    {
      text: 'Ways to Bridge Using Nomad',
      children: [
        { text: 'Nomad GUI', link: '/bridge/nomad-gui.html' },
        { text: 'Send Native Tokens Using Etherscan', link: '/bridge/etherscan-native.html'},
        { text: 'Send ERC-20 Tokens Using Etherscan', link: '/bridge/etherscan.html'}
      ]
    }
  ]
}

function getIntegrationsSidebar() {
  return [
    {
      text: 'Technical Docs',
      children: [
        { text: 'Nomad Architecture', link: '/dev/architecture.html'},
        { text: 'Token Bridge xApp', link: '/dev/token-bridge.html' },
        { text: 'Governance', link: '/dev/governance.html'},
        { text: 'Upgrade Setup', link: '/dev/upgrade-setup.html'},
        { text: 'Agent Operations', link: '/dev/agent-operations.html'},
        { text: 'Agent Development', link: '/dev/agent-development.html'}
      ]
    }, {
      text: 'Developer Resources',
      children: [
        { text: 'SDK', link: '/dev/sdk.html'},
        { text: 'Writing a xApp', link: '/dev/xapps.html' },
      ]
    }
  ]
}