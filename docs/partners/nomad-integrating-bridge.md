---
title: Integrating with Nomad Bridge
lang: en-US
---

# Integrating with Nomad Bridge

You: *“Ahhhhhhhh I’m Integratinggg!!”*

There are several target audiences for this section: 
- dApps deployed to a Nomad-supported Domain
- Wallets or DeFi portals looking to natively embed a bridge in the app
- Anyone who would like to write software that reacts to or ingests state from Nomad

## The Nomad SDKs

Nomad has a suite of SDKs that are used to interact with Nomad Protocol. The functionality of each package is split logically between the various components of Nomad: 

- `@nomad-xyz/multi-provider` 
  - A useful library for interacting with many blockchains at once via Ethers.js, underpins the entirety of the Nomad SDK stack.
  - [Link to NPM](https://www.npmjs.com/package/@nomad-xyz/multi-provider)
- `@nomad-xyz/sdk` 
  - The Core SDK, encapsulating the core contracts and providing primitives which are used by higher layers
  - [Link to NPM](https://www.npmjs.com/package/@nomad-xyz/sdk)
  - [API Documentation](https://docs.nomad.xyz/sdk/)
- `@nomad-xyz/sdk-bridge` 
  - The Bridge SDK, encapsulating the bridge contracts, providing primitives and convenience methods for interacting with the Nomad Bridge xApp. 
  - [Link to NPM](https://www.npmjs.com/package/@nomad-xyz/sdk-bridge)
  - [API Documentation](https://docs.nomad.xyz/sdk-bridge/)

## Examples Repository 

Nomad has a wonderful [Examples Repo](https://github.com/nomad-xyz/examples) which you may use as a reference when planning your integration. 

If you're: 
- Building a Bridge UI, check out the [Example UI](https://github.com/nomad-xyz/examples/tree/main/packages/sdk-bridge-integration)
- Interested in writing scripts that query or interact with Nomad, check out the [SDK Quickstart](https://github.com/nomad-xyz/examples/tree/main/packages/sdk-quickstart)

## Using Nomad Tokens

// Link to token list in docs
// 
