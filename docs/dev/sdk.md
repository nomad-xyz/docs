---
title: Nomad SDK
lang: en-US
---

# Nomad SDK

## Contract Updates

When new contracts are deployed for a particular Nomad deployment environment, the SDK must be updated to reflect the fresh contract addresses. Each environment has a configuration located in [`typescript/nomad-sdk/src/nomad/domains/`](https://github.com/nomad-xyz/nomad-monorepo/blob/main/typescript/nomad-sdk/src/nomad/domains)

When updating the SDK, take care to use the *correct contract addresses*, as it can be confusing and any misconfiguration results in complete failure downstream. Also keep in mind that we're always referencing the address of the *proxy contract*, as opposed to the implementation or beacon contracts.

### Understand the SDK Config 

The `NomadDomain` type takes the following important contract addresses as input: 
- bridgeRouter: The address of the deployed `BridgeRouter` xApp
- ethHelper: The address of the deployed `EthHelper` contract. This has to be deployed exactly once for a particular network as the EthHelper is deploy-agnostic, if it has been deployed already there is no need to change this value. 
- home: The address of the deployed `Home` contract. 
- replicas: **This is where people get tripped up.** - The address(es) of any deployed replicas corresponding to remote homes deployed to the Domain being configured.

### Sanity Check!

Once you have completed the configuration, it is helpful to test your changes locally against a tool like `nomad-monitor`. 

### Release It 

After you are finished, commit your changes and cut a release of the SDK: 

```
$ npm version (major|minor|patch)

$ npm run publish-npm
```