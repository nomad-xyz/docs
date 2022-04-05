---
title: Building Cross-Chain Apps
lang: en-US
---

# Building Cross-Chain Apps (xApps)

### What is a xApp?

xApp (pronounced "zap") is short for cross-chain application. A xApp is an application that uses cross-chain messaging channels.

Nomad makes it radically easier to use cross-chain messaging channels to communicate between chains in the form of raw bytes, which can be used to execute actions on-chain. xApp developers

### What are some examples of a xApp?
- token bridge (most common example)
- on-chain treasury
- permissionless faucet

### How do I build a xApp?

To get started with building your own xApp, first you'll need to define the rules for sending and receiving messages for your xApps' use case. We call these rules the ***Router Contracts***. These Router contracts must:

- ***maintain a permissioned set*** of the contract(s) on remote chains from which it will accept messages via Nomad — this could be a single owner of the application on one chain; it could be a registry of other applications implementing the same rules on various chains

- ***encode messages in a standardized format***, so they can be decoded by the Router contract on the destination chain

- ***handle messages*** from remote Router contracts

- ***dispatch messages*** to remote Router contracts

By implementing these pieces of functionality within a Router contract and deploying it across multiple chains, we create a working xApp using a common language and set of rules.

## Example xApp Code

[The examples repo](https://github.com/nomad-xyz/examples) has several code examples for sample xApps.

### xApp Template

Start building your own xApp today! We've got you started with this simple [template](https://github.com/nomad-xyz/examples/tree/main/packages/xapp-example/contracts/xapp-template)

### Ping Pong xApp

See how messages are passed back and forth between 2 chains in our [Ping Pong example](https://github.com/nomad-xyz/examples/tree/main/packages/xapp-example/contracts/ping-pong)

### Token Bridge xApp

The Token Bridge xApp is our first fully fledged application and is maintained by the Nomad core team. Users can bridge tokens between any networks currently supported by Nomad.

 - [Code](https://github.com/nomad-xyz/monorepo/tree/main/packages/contracts-bridge)
 - [Bridge GUI](https://app.nomad.xyz/)

### Cross-Chain Governance xApp

Coming soon

## Additional Resources

- [How to Build xApps](https://www.youtube.com/watch?v=E_zhTRsxWtw)
- [Connext Network](https://docs.connext.network/)