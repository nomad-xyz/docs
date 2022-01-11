---
title: Nomad Bridge GUI
lang: en-US
---

# Nomad Bridge GUI

----------------

[Nomad](../index.md) is a secure protocol for cross-chain communication. The Nomad token bridge provides a secure gas-efficient model for bridging between any EVM compatible chains. Currently, Nomad supports Ethereum and Moonbeam.

### Bridge using the official [Nomad GUI](https://app.nomad.xyz)

![Nomad GUI](/GUI/Bridge-with-Nomad.png)

#### 1. Enter Data

 - Connect Wallet
 - Select token
    - If you wish to view your balance, connect to a supported network.
 - Enter amount
 - Select Origin Network (if not present already)
    - Accept the suggested network change in Metamask.
 - (Optional) Change Destination address. This is set as your wallet address be default.
    ::: warning CAUTION
    Sending assets to an address you do not control can result in a permanent loss of funds!
    :::
    - Click "edit"
    - Click "change" inside input
    - Copy your address, click to paste
    - Save
<div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-between;">
  <img src="/GUI/Change-Destination.png" style="width: 45%; min-width: 400px; margin: 10px;"/>
  <img src="/GUI/Paste-Destination.png" style="width: 45%; min-width: 400px; margin: 10px;"/>
</div>


#### 2. Send

You're ready to bridge! You will see the estimated processing time for your transaction. Note that this is an approximation and may take longer. Nomad's model includes a fraud proof period to make sure that your transaction is secure and keeps gas cost at a minimum!

Click "Bridge Tokens".

![Approve Transaction](/GUI/Approve.png)

Continue to Metamask where you will approve your transaction. Once your transaction has been dispatched, you will be directed to the Transaction Page where you can follow the status of your bridge.

::: info
You must return to the Transaction Page after bridging has concluded to pay for gas and complete your transfer. Nomad may cover the processing and gas fees for some chains.
:::

#### 3. Complete your transfer

Navigate to the Transaction Page. If you need to find it again, search your transaction [here](https://app.nomad.xyz/tx). Select `Nomad`, then input the origin network (the chain you bridged FROM) and the transaction hash.

<img src="/GUI/Transaction-Search.png" style="width: 100%; max-width: 400px; margin: 10px;"/>

If your transaction is ready, the page header will look like this:
 - Click "Complete Transfer"
 - Complete in Metamask
 - Wait for funds to arrive at destination
![Process](/GUI/Process-Transaction.png)

Congratulations, your bridge was a success!

::: info
The Nomad token bridge uses a representational token model. If you cannot locate your assets after bridging, check your wallet for ERC-20 tokens. A complete list of token addresses will be available soon.
:::

![Success](/GUI/Nomad-Success.png)
