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

- `@nomad-xyz/configuration`
  - Configuration data for all Nomad domains (includes network data, core contract addresses, bridge contract addresses, etc)
  - [Link to NPM](https://www.npmjs.com/package/@nomad-xyz/configuration)
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

## A note about Nomad Representation Tokens

The Nomad bridge is a burn/lock/mint model. When a user bridges an asset *from* it's native chain, that amount is locked and the Nomad representation is minted by the bridge contracts. When bridging *back* to the native chain, the representation tokens are burned and the native token is unlocked. This lock/mint model is common among many bridges. However, as a result, this means that Nomad representations are differnt from other bridges' representations.

Why? Think of this arcade scenario (where arcades are bridges, USD is the native token and arcade coins are representations on other chains). You pay money and receive coins that you can use to play games. These coins would not be accepted at another arcade (You didn't pay that arcade for your tokens!). Likewise, coins from other arcades would not be accepted here. At the end of the night, some coins will have been spent and other coins can be turned in for the equivalent amount in cash.

See the [token list](../bridge/domains.md) for a complete documentation of all Nomad tokens on each chain.

## Integrading the Nomad Bridge

### Getting started

```ts
import { BridgeContext } from '@nomad-xyz/configuration'
const nomad = new BridgeContext('production')
nomad.registerRpcProvider('ethereum', 'https://some-rpc-url')
nomad.registerRpcProvider('moonbeam', 'https://some-rpc-url')
nomad.registerSigner('ethereum', someSigner)
nomad.registerSigner('moonbeam', someSigner)
```

### Sending tokens using the sdk-bridge

**`sendNative`**:
The Nomad bridge can only send ERC-20 tokens. This function is available for native assets, such as ETH, that need to be wrapped prior to bridging.
```ts
const transferMessage = await nomad.sendNative(
  originDomain, // 'ethereum' or 6648936
  destDomain, // 'moonbeam' or 1650811245
  amnt: ethers.utils.parseUnits(amnt, 18), // amount as a big number, format by token decimals (ETH has 18)
  destinationAddr, // user's address
)
```

**`send`**:
This function is for sending any ERC-20 token. Each token has a corresponding `tokenIdentifier` which includes the name or domain of it's native chain and its address on that native chain.
```ts
// USDC has 6 decimals. Format amount accordingly
const decimals = 6
const amountBN = ethers.utils.parseUnits(amnt, 6)
// Token Identifier for USDC
const USDCTokenIdentifier = {
  domain: 'ethereum',
  id: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
}
const transferMessage = await nomad.send(
  originDomain, // 'ethereum' or 6648936
  destDomain, // 'moonbeam' or 1650811245
  USDCTokenIdentifier,
  amnt, // amount as a big number, format by token decimals
  destinationAddr, // user's address
)
```

### Useful Helper Functions

**`resolveDomain`**: Takes a domain name *or* number and returns the domain number
**`resolveDomainName`**: Takes a domain name *or* number and returns the domain name
**`resolveRepresentation`**: Takes a domain and Token Identifier and returns the token representation on that chain.
