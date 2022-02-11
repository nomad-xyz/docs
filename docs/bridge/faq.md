---
title: FAQs
lang: en-US
---

# FAQs

## Nomad Bridge Features

### What assets are available to bridge? (updated 01/13/2022)

The Nomad app at https://app.nomad.xyz supports the following assets. For a complete list of tokens and their addresses see the [Deployed Tokens List](./deployed-tokens.md).

* WETH
* ETH
* USDT
* USDC
* DAI
* GLMR
* WGLMR
* WBTC
* FRAX
* FXS

We are actively adding more assets. If you would like an asset listed, make your voice heard in the Nomad [Discord](https://discord.gg/RurtmJApqm)!!

### Do you have `<blank>` feature?

We deployed on Jan 11, 2022 🚀 and are adding new features and making updates on a daily basis. Some things we have in the works:

* Transaction History View
* WalletConnect Support
* Better error messages
* UI improvements

## Bridging 101

### I bridged over my assets with `someOtherBridgeNotNomad`, why can’t I see them?

Each bridge deploys their own token contracts, so assets bridged using one Bridge A are not compatible with assets bridged using Bridge B, even though they started out with the same original asset.

If you want to bridge over with Nomad but you've already used another bridge, you'll need to bridge _back_ to the origin chain, and then bridge again with Nomad. This will get you back on track.

### How long does it take to bridge?

Bridging using Nomad usually takes around 35 mins, but can be up to +60 mins depending on on- and off- chain activity (see our [docs on the Nomad architecture](../index.md) for more information).

However, we've partnered with Connext to give users an option to have a faster cross-chain experience! For a small fee, you can use Connext to enable faster transfers--around 7-15 mins!

### It's been longer than the estimated time--where are my tokens?

Ocassionally there are times where it takes longer to process a transaction. This could be due to on-chain activity, or a delay in agent processing.

This could also be due to missing a step in the process, such as when sending assets back to Ethereum. You'll need to manually process the transaction. See [this answer](#why-is-gas-estimate-so-high-to-get-my-funds-on-ethereum).

### Do I get WETH or ETH?

You can bridge over WETH or ETH from Ethereum, but you will always receive WETH on the destination. If you bridge over ETH, the contract will automatically call a helper function to wrap your ETH for you.

If you use Connext to bridge your WETH back to Ethereum, you will receive ETH automatically through the Connext process.

If you use Nomad to bridge your WETH back to Ethereum, you will receive WETH and will need to unwrap it manually if you want ETH again.

## Connext + Nomad
----
### What is your relationship with Connext?

Nomad and Connext are complementary pieces that work together to provide a better cross-chain experience for users. Connext is an interoperability protocol that allows users to swap/transact over liquidity that already exists on the chain. Nomad is at its core protocol for passing generalized data between arbitrary chains, and the Nomad Bridge is an application built to pass specific kinds of messages that allow you to bridge tokens.

Connext routers set up cross-chain liquidity pools for Nomad assets. For a small fee, these liquidity pools allow users to make faster swaps, since the assets have already been bridged over.

### I bridged using Connext, where are my tokens?

When you bridge with Connext, you'll need to manually claim your tokens after the transaction has processed. You can claim your transaction using the [Nomad bridge](https://app.nomad.xyz), or you can also use the Connext UI at `https://connextscan.io/tx/<txId>`

## Bridging to Ethereum
------

### I'm trying to bridge my assets back to Ethereum and it's taking a long time.

When you bridge back to Ethereum, you'll need to process the transaction manually to disperse your funds at the end. You can do this by going to:
`https://app.nomad.xyz/tx/nomad/<origin-chain>/<tx-id>`

### Why is gas estimate so high to get my funds on Ethereum?

You need to submit a higher buffer for gas because the function that needs to be called to disperse funds, `proveAndProcess`, is permissionless. If there was no gas buffer, anyone could cancel your transaction by processing it with too-low gas. So the protocol specifies a gas buffer in order to submit the transaction, but in this case, the majority of the gas is not actually used.

**In actuality, only about 1/5 of the estimated gas is used.**

Here are a few transactions you can look at to see what the actual cost of the transaction was:
* [Transaction 1](https://etherscan.io/tx/0x60e20861d22a6931d9731e0c00dcd6984857140c86cf83f94be888e7af5bab91)
* [Transaction 2](https://etherscan.io/tx/0x73bae115015885371b295daad8225493571b6963f550cd1d7b009c00921b9b91)

You can also look through the [contract](https://etherscan.io/address/0x049b51e531fd8f90da6d92ea83dc4125002f20ef) for the transactions that called the `Prove And Process` method for further verification.

## General

### What is Nomad's security model? How does it compare to other well-known models, such as header verification?

Every cross-chain message passing system is going to have tradeoffs, and we've carefully considered how security is affected with design choices. Nomad adopts an optimistic mechanism inspired by optimistic roll-ups like Optimism and Arbitrum, which is a different approach than block header verification. You can read a little bit more about the benefits and tradeoffs of this kind of architecture in our [docs](https://docs.nomad.xyz/#benefits-and-trade-offs-of-the-nomad-architecture).

### Wen token?

Nomad does not have a token at this time. If you hear any references to a Nomad token, they are definitely scams.

### What is madWETH?

These are the same assets! Often times applications will prefix assets depending on the bridge that was used. Nomad assets are listed with either no prefix (WETH), or the mad- prefix (madWETH). We prefer to use no prefix or the mad- prefix and will kindly ask applications to change this for us, but sometimes there may be a delay in this change.

### Why does my recently-bridged token have a funny name like `0006648936.eb48`?

In order to avoid sending redundant data like the token name and symbol with every message, the first time a bridged ERC-20 Token representation is deployed, metadata is pulled from the originating chain after initial deployment.  This involves a round-trip between the replica and originating chain wherein data about name/symbol/decimals is synced. 

This is expected behavior, and the explorer will update after a day or two. 

### Why is the ERC-20 token placeholder name like that?

`0006648936.eb48` is the Nomad domain ID for Ethereum and the last 4 letters of the token address on Ethereum

`6648936 == 0x657468` -- the utf8 encoding of 'eth'

USDC's address is `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`

Note the `eb48` at the end.
