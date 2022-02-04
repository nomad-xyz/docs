---
title: Nomad Bridge GUI
lang: en-US
---

# Nomad Bridge GUI

## Nomad vs Connext, which should I use?

There are two options available to send funds through the GUI, Nomad and Connext. These are two distinct protocols that are complimentary to one another. We have partnered with Connext to provide an optimal experience for users!

Nomad is a secure gas efficient cross-chain protocol that allows users to bridge funds between networks. This takes, on average, 35-60 minutes. There are no fees associated with Nomad, just pay gas! Connext provides liquidity pools for Nomad assets, meaning users can receive funds on the destination chain much faster (less than 10 minutes) for an additional fee. Nomad is advised for large transfers.

Connext is not available for every asset and may not be available for larger sums. If it is available, we provide this option by default. If you would like to use Nomad instead, you can temporarily switch by clicking "Use Nomad" or you can toggle off "Enable Connext" in settings.

![Switch to Nomad](../public/tutorials/bridge-gui/use-nomad.png)
![Enables/Disable Connext](../public/tutorials/bridge-gui/enable-connext.png)

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

::: info
You must return to the Transaction Page after bridging has concluded to pay for gas and complete your transfer. Nomad may cover the processing and gas fees for some chains.
:::

![See Transaction Details](../public/tutorials/bridge-gui/tx-hash-page.png)

<br>

You can expand the time estimate tab to track your transaction status by clicking the down arrow in the blue box:

![See Expanded Transaction Details](../public/tutorials/bridge-gui/tx-hash-page-expanded.png)

<br>

(Optional) If you navigated away from the GUI at any point and want to find your transfer's progress page again, visit [https://app.nomad.xyz/tx](https://app.nomad.xyz/tx) and enter the origin network and your transfer's transaction hash.

![Search Tx](../public/tutorials/bridge-gui/search-tx.png)

<br>

Once your transfer has completed, you should see the below display and your funds will be in the account of your destination address. If your transfer is taking longer than expected, please reach out to us on [Discord](https://discord.gg/RurtmJApqm) in the #support channel:

![Finished](../public/tutorials/bridge-gui/tx-finished.png)

<br>

## Completing a Transfer (Ethereum Destination Only)

If you are sending to Ethereum, there is one additional processing step due to the high cost of processing transactions on Ethereum. You will see the following display and should click "Complete Transfer" and complete the Metamask transaction. After this, your funds should be at your destination on Ethereum!

![Self Process](../public/tutorials/bridge-gui/self-process.png)

<br>

## Fast Transfers with Connext

Fill out transfer details: connect wallet, select token, enter amount, select origin/destination networks and (optional) set destination address.

Once the input is filled out and valid, the app will check if there is available liquidity via Connext.

![Checking availability](../public/tutorials/bridge-gui/checking-connext.png)

If there is, your screen will look like this. You may proceed with Connext or click "Use Nomad" to switch.

![Connext available](../public/tutorials/bridge-gui/connext-available.png)

Click "Preview Send" to see the estimated fees and receive amount. It will take approximately 6-8 seconds for the results to appear.

![Calculating fee](../public/tutorials/bridge-gui/calculating-fees.png)

Click `Send Tokens` and approve the transaction in Metamask!

In a few minutes, you will see your transfer appear in a table below. Click "Claim" to submit a transaction to receive your funds on the destination chain.

Click "View" to go to your transaction in the ConnextScan block explorer. Or you can visit `https://connextscan.io/tx/<yourtransactionhash>`.

![Claim Connext funds](../public/tutorials/bridge-gui/connext-claim.png)
