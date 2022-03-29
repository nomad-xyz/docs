---
title: Building Cross-Chain Apps
lang: en-US
---

# Building Cross-Chain Apps (xApps)

### What is a xApp?

xApp (pronounced "zapp") is short for cross-chain application. A xApp is an application that uses cross-chain messaging channels.

Nomad makes it radically easier to use cross-chain messaging channels to communicate between chains in the form of raw bytes, which can be used to execute actions on-chain. xApp developers

### What are some examples of a xApp?
- token bridge (most common example)
- on-chain treasury
- permissionless faucet

TODO: link to example code below

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
TODO - link to https://github.com/nomad-xyz/examples/tree/main/xapps/contracts/ping-pong

### Ping Pong xApp
TODO - link to https://github.com/nomad-xyz/examples/tree/main/xapps/contracts/xapp-template

### Token Bridge xApp
TODO

### Cross-Chain Governance xApp
TODO


## Additional Resources

TODO
- link to Anna's talk (https://www.youtube.com/watch?v=E_zhTRsxWtw)
- link to any other app partner's public repo that would be useful
- link to Connext