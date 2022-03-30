---
title: Nomad - Appendix
lang: en-US
---

# Apendix

 - **Nomad**: A security-first cross-chain messaging protocol. Nomad is radically cheaper compared to a traditional header relay. Additionally, it is designed for high reusability, meaning it can be quickly deployed to any EVM chain without the need for any custom logic.
 - **Nomad Token Bridge**: A xApp (cross-chain application) that leverages the Nomad messaging channels to enable sending ERC-20 tokens between supported chains.
 - **Connext**: An interoperability protocol that allows users to swap/transact existing liquidity across chains. Connext is closely partnered with Nomad and is a complementary piece for a seamless end-user experience. Nomad includes a thirty minute dispute window as part of its security model. However, Connext routers are able to bridge funds in advance and pre-fill liquidity for a faster bridging experience.
 - **Message**: Bytes transferred via Nomad that encode some application-specific instructions via a standardized set of rules.
 - **Messaging Channel**: The infrustructure laid by the core Nomad protocol that allows for the passing of arbitrary bytes between chains.
 - **Origin vs Destination**: Most often refers to the direction of a message, where `origin` is the sending chain and `destination` is the receiving chain.
 - **Local vs Remote**: In the context of discussing a particular contract, it is deployed on a particular chain. Contracts and assets on that chain are `local`. Contracts and assets on another chain are `remote`.
 - **Native Assets**: Any asset that resides on it's original chain (e.g. `ETH`, `DAI` and `USDC` are native to the Ethereum chain)
 - **Representations**: When an asset is sent cross-chain, the Token Bridge mints a representation of that token on the destination chain.
 - **Core**: Reference to the core Nomad protocol, or the messaging channels implemented by the core protocol.
 - **xApps**: Pronounced `zapp`. A cross-chain application that utilizes the infrastructure of the core Nomad protocol. xApps define the rules for encoding and decoding messages sent via Nomad.
 - **Routers**: A xApp contract that implements a cross-chain application by specifying the message format, as well as rules for dispatching and handling messages.
 - **Domain**: The Nomad-specific id associated with a chain.
 - **Home**: The on-chain contract that is responsible for managing production of the message tree and holding custody of the updater bond.
 - **Replica**: The on-chain contract that is responsible for managing optimistic replication and dispatching messages to end recipients. There is a Replica responsible for each remote chain.
 - **Updater**: The off-chain agent responsible for signing attestations of new roots.
 - **Watcher**: The off-chain agent responsible for reporting faulty attestations. Note that Nomad needs only *one* honest watcher to maintain security of the entire system, rather that relying on custodians or external validators. This allows Nomad to be decentralized and *highly* secure.
 - **Relayer**: The off-chain agent which forwards updates from the home to one or more replicas.
 - **Processor**: The off-chain agent which proves the validity of pending messages and sends them to end recipients.
 - **Governor**: A multi-sig with the power to perform permissioned actions across chains. [Learn more](/dev/governance.md)
 - **Dispute Window**: The time period during which fraud (if any) would be reported. Currently 30 minutes for each chain.
 - **Merkle (or Message) Tree**: A data structure that encodes data efficiently and securely. Used to verify message authenticity by the Home, Updater and Watcher.
 - **Processing or Claiming**: The final step of dispatching a message to the recipient. Processing gas fees are subsidized on most chains. However, when sending to Ethereum (due to the high gas fees), users are required to submit an additional transaction to process messages or token transfers.
