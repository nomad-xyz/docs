---
title: Nomad Bridge GUI
lang: en-US
---

# Nomad Bridge GUI

## Bridging Through Nomad

Bridging assets across chains using Nomad should be intuitive and easy with the Nomad GUI. In this tutorial, we will walk through the steps required to bridge your assets.

Please find our production bridge GUI at [app.nomad.xyz](https://app.nomad.xyz/).

If you would like to test our bridge using testnet funds before using real funds, please visit our development GUI at [development.app.nomad.xyz](https://development.app.nomad.xyz/).

<br>

Connect to Metamask:

![Connect to Metamask](../public/tutorials/bridge-gui/connect-metamask.png)

<br>

Select origin and destination networks:

![Select Origin and Destination Networks](../public/tutorials/bridge-gui/choose-networks.png)

<br>

(Optional) Change Destination address. This is set as your wallet address be default. ::: CAUTION Sending assets to an address you do not control can result in a permanent loss of funds! ::: Click "edit", click "change" inside input, then copy your address, click to paste, then Save.

![Change Destination](../public/tutorials/bridge-gui/change-dest-1.png)
![Paste Destination](../public/tutorials/bridge-gui/change-dest-2.png)

<br>

Select the asset you want to send using the asset dropdown menu and the amount you want to send using the input prompt:

![Select an Asset and Amount](../public/tutorials/bridge-gui/select-asset-amount.png)

<br>

Click `Bridge Tokens` and approve the transaction in Metamask:

![Approve Bridge Transaction](../public/tutorials/bridge-gui/approve-send-tx.png)

<br>

After approving the transaction, you will be taken to the transaction details page. Here, you will see the estimated time remaining for your transfer to complete. Please save your transaction hash for convenience. If you lose it, you can visit your wallet address on the block explorer of the origin network and find the transaction again.

![See Transaction Details](../public/tutorials/bridge-gui/tx-hash-page.png)

<br>

You can expand the time estimate tab to track your transaction status by clicking the down arrow in the blue box:

![See Expanded Transaction Details](../public/tutorials/bridge-gui/tx-hash-page-expanded.png)

<br>

(Optional) If you navigated away from the GUI at any point and want to find your transfer's progress page again, visit [https://app.nomad.xyz/tx](https://app.nomad.xyz/tx) and enter your transfer's transaction hash.

![Search Tx](../public/tutorials/bridge-gui/search-tx.png)

<br>

Once your transfer has completed, you should see the below display and your funds will be in the account of your destination address. If your transfer is taking longer than expected, please reach out to us on [Discord](https://discord.gg/RurtmJApqm) in the #support channel:

![Finished](../public/tutorials/bridge-gui/tx-finished.png)

<br>

(Ethereum Destination Only) If you are sending to Ethereum, there is one additional processing step due to the high cost of processing transactions on Ethereum. You will see the following display and should click "Complete Transfer" and complete the Metamask transaction. After this, your funds should be at your destination on Ethereum!

![Self Process](../public/tutorials/bridge-gui/self-process.png)

<br>

## Fast Transfers with Connext

Guide coming soon! [Connext](https://nxtp-docs.connext.network/) integration.
