---
title: Nomad Protocol - Overview
lang: en-US
---

# Nomad and Connext - An Overview 

Nomad and Connext are available on `<Insert Chain Name Here>`! 

- Bridge Today: [app.nomad.xyz](https://app.nomad.xyz)
- Read the Docs: [docs.nomad.xyz](https://docs.nomad.xyz)
- Join the Nomad Discord: [Become a MadLad](https://discord.gg/nomadxyz)
- Follow [Nomad](https://twitter.com/nomadxyz_) and [Connext](https://twitter.com/ConnextNetwork) on Twitter!

## What is Nomad Protocol? 

Nomad is a new design for radically cheaper cross-chain communication without header verification, taking inspiration from optimistic systems (a la Optimistic Roll-ups). Nomad features many of the properties we prize in an optimistic mechanism, like public verification, low gas fees, broad participation, but has a slightly different security model.

Nomad provides the base layer of a cross-chain communication network that provides fast, cheap communication for all smart contract chains and rollups. It relies only on widely-available cryptographic primitives (unlike header relays) and measures message latency in minutes (rather than an ORU’s one-week latency).

## What is Connext? 

Connext, using the **N**oncustodial **X**domain **T**ransfer **P**rotocol or **NXTP**, is a lightweight protocol that enables cross-chain/rollup transactions that retain the security properties of the underlying execution environment. It facilitates cross-chain value transfers via a network of liquidity providers (called Routers) which allows for near-instant settlement of cross-chain token transfers, assuming an existing liquidity environment on the receiving blockchain.

Connext does not rely on any external validator set in order to operate -- a trust model that is highly complimentary with that of Nomad. 


## Nomad Architecture 

Nomad works something like a notary service.

<img width="1172" alt="nomad-notary" src="https://user-images.githubusercontent.com/2653576/115466701-4a3c9880-a1e5-11eb-87e3-ae1cbab49b0b.png"/>

The sending (or “home”) chain produces a series of documents ("messages") that needs notarization. A notary (called the “updater”) is contracted to sign it. The notary can produce a fraudulent copy, but they will be punished by having their bond and license publicly revoked. When this happens, everyone relying on the notary learns that the notary is malicious. All the notary's customers can immediately block the notary and prevent any malicious access to their accounts.

Nomad's Core system is split between on-chain and off-chain components. The protocol is implemented in Smart Contracts, with the bulk of the protocol interactions being automated by a series of off-chain "Agents". 

![Nomad Components](/Nomad-Architecture.png)

For a detailed deep dive on the protocol, check out the complete [Nomad Documentation](https://docs.nomad.xyz/)

## Connext Architecture

### How it works

This iteration of Connext's network utilizes NXTP, a lightweight protocol for generalized crosschain transfers.

Nxtp is made up of a simple contract that uses a locking pattern to prepare and fulfill transactions, a network of offchain routers that participate in pricing auctions and pass calldata between chains, and a user-side sdk that finds routes and prompts onchain transactions.

### Transaction Lifecycle

![Connext High Level Flow](/partner-assets/overview/connext-highlevel-flow.png)

Transactions go through three phases:

1. **Route Auction**: User broadcasts to our network signalling their desired route. Routers respond with sealed bids containing commitments to fulfilling the transaction within a certain time and price range.
2. **Prepare**: Once the auction is completed, the transaction can be prepared. The user submits a transaction to TransactionManager contract on sender-side chain containing router's signed bid. This transaction locks up the users funds on the sending chiain. Upon detecting an event containing their signed bid from the chain, router submits the same transaction to TransactionManager on the receiver-side chain, and locks up a corresponding amount of liquidity. The amount locked on the receiving chain is sending amount - auction fee so the router is incentivized to complete the transaction.
3. **Fulfill**: Upon detecting the TransactionPrepared event on the receiver-side chain, the user signs a message and sends it to a relayer, who will earn a fee for submission. The relayer (which is typically another router) then submits the message to the TransactionManager to complete the user's transaction on receiver-side chain and claim the funds locked by the router. A relayer is used here to allow users to submit transactions with arbitrary calldata on the receiving chain without needing gas to do so. The router then submits the same signed message and completes transaction on sender-side, unlocking the original amount.

If a transaction is not fulfilled within a fixed expiry, it reverts and can be reclaimed by the party that called prepare on each chain (initiator).

Additionally, transactions can be cancelled unilaterally by the person owed funds on that chain (router for sending chain, user for receiving chain) prior to expiry.

It is important to note that neither participant should require a store to complete these transactions. All information to `prepare`, `fulfill`, or `cancel` transactions should be retrievable through contract events.

### Architecture

![Connext Architecture](/partner-assets/overview/connext-architecture.png)

The system contains the following pieces:

 - Contracts - hold funds for all network participants, and lock/unlock based on data submitted by users and routers
 - Subgraph - enables scalable querying/responding by caching onchain data and events.
 - TxService - resiliently attempts to send transactions to chain (with retries, etc.)
 - Messaging - prepares, sends, and listens for message data over nats
 - Router - listens for events from messaging service and subgraph, and then dispatches transactions to txService
 - SDK - creates auctions, listens for events and creates transactions on the user side.

## Nomad x Connext vs XYZ Bridge

| Approach            | Mechanism                                            | Examples                                               | Trust Minimized | Generalized | Cheap/Fast to Implement |
| ------------------- | ---------------------------------------------------- | ------------------------------------------------------ | --------------- | ----------- | ----------------------- |
| Natively Verified   | Chain's own validator set verifies xchain data.      | IBC, Near Rainbowbridge, BTC Relay, rollup entry/exit  | ✅              | ✅          | ❌                      |
| Externally Verified | 3rd party validator set verifies data across chains. | Thorchain, Anyswap, Synapse, Hyphen, many many others. | ❌              | ✅          | ✅                      |
| Locally Verified    | N-party system is reduced to 1:1 interaction         | Connext, Hop, Nomad, simple atomic swaps.                     | ✅              | ❌          | ✅                      |

### The Nomad x Connext Approach to Bridging

Nomad's core protocol facilitates generalized cross-chain message passing via an Optimistic Mechaism. While not 100% locally verified, it enables broad protocol participation via the inclusion of fraud proofs, enabling anyone with a computer to participate in securing the protocol. The main trade-off that results in the desirable trust model, also introduces a period of latency for each message. Many users will opt to leverage the highly secure Nomad Messaging channels, despite the increased latency!

This is where the properties of Connext become highly desirable, as it provides comparatively quick settlement of cross-chain transfers without sacrificing on trust model, assuming there's enough liquidity to complete the transfer.

## Try It For Yourself

You can bridge today via the [Nomad Bridge App](https://app.nomad.xyz)!