---
title: Bridge from Ethereum to Evmos
lang: en-US
---

# Bridging To Evmos

Bridging assets from Ethereum to Evmos using the Nomad GUI should be intuitive and easy. In this tutorial, we will walk through the steps required to bridge your assets.

Please find our production bridge GUI at [app.nomad.xyz](https://app.nomad.xyz/).

If you would like to test our bridge using testnet funds before using real funds, please visit our development GUI at [development.app.nomad.xyz](https://development.app.nomad.xyz/).

## Nomad vs Connext, which should I use?

There are two options available to send funds through the GUI, Nomad and Connext. These are two distinct protocols that are complimentary to one another. We have partnered with Connext to provide an optimal experience for users!

Nomad is a secure gas efficient cross-chain protocol that allows users to bridge funds between networks. This takes, on average, 35-60 minutes. There are no fees associated with Nomad, just pay gas! Connext provides liquidity pools for Nomad assets, meaning users can receive funds on the destination chain much faster (less than 10 minutes) for an additional fee. Nomad is advised for large transfers.

Connext is not available for every asset and may not be available for larger sums. If it is available, we provide this option by default. If you would like to use Nomad instead, you can temporarily switch by clicking "Use Nomad" or you can toggle off "Enable Connext" in settings.

![Switch to Nomad](../public/partner-assets/ethereum-to-evmos/use-nomad.png)
![Enables/Disable Connext](../public/partner-assets/ethereum-to-evmos/toggle-connext.png)

## Bridge using Nomad

Connect to Metamask.

![Connect to Metamask](../public/partner-assets/ethereum-to-evmos/connect-metamask.png)

<br>

Select Ethereum as the origin network and Evmos C1 as the destination.

![Select Evmos as Destination](../public/partner-assets/ethereum-to-evmos/select-evmos.png)
![Select Origin and Destination Networks](../public/partner-assets/ethereum-to-evmos/select-networks.png)

<br>

(Optional) Change Destination address. This is set as your wallet address by default. Click "edit". A modal will pop up, click "change" inside the input. Then copy your address, click to paste, and save.
::: warning CAUTION
Sending assets to an address you do not control can result in a permanent loss of funds!
:::

![Change Destination](../public/partner-assets/ethereum-to-evmos/edit-destination-address.png)
![Paste Destination](../public/partner-assets/ethereum-to-evmos/paste-destination-address.png)

<br>

Select the asset you want to send using the asset dropdown menu and the amount you want to send using the input prompt.

![Select an Asset](../public/partner-assets/ethereum-to-evmos/select-asset.png)
![Enter Amount](../public/partner-assets/ethereum-to-evmos/bridge-with-nomad.png)

<br>

Click `Bridge Tokens` and approve the transaction in Metamask.

![Approve Bridge Transaction](../public/partner-assets/ethereum-to-evmos/sending.png)

<br>

After approving the transaction, you will be taken to the transaction details page. Here, you will see the estimated time remaining for your transfer to complete. Please save your transaction hash for convenience. If you lose it, you can visit your wallet address on the block explorer of the origin network and find the transaction again.

::: info
Processing fees are subsidized for Evmos, so your funds will be deposited directly to your address without any further action!

If you bridge **back** to Ethereum, you will need to wait 30-65 minutes and then revisit the Transaction page to complete your transfer and receive your funds on Ethereum.
:::

![See Transaction Details](../public/partner-assets/ethereum-to-evmos/pending.png)

<br>

You can expand the time estimate tab to track your transaction status by clicking the down arrow in the blue box.

![See Expanded Transaction Details](../public/partner-assets/ethereum-to-evmos/expand-status.png)

<br>

(Optional) If you navigated away from the GUI at any point and want to find your transfer's progress page again, visit [https://app.nomad.xyz/tx](https://app.nomad.xyz/tx) and enter the origin network and your transfer's transaction hash.

![Search Tx](../public/partner-assets/ethereum-to-evmos/search-tx.png)

<br>

Once your transfer has completed, you should see the below display and your funds will be in the account of your destination address.

![Finished](../public/partner-assets/ethereum-to-evmos/transfer-complete.png)

<br>

You may need to import the token address into your wallet in order to see your funds. The addresses of Nomad assets on Evmos can be found [here](https://docs.nomad.xyz/bridge/domains.html#evmos).

If need help with your transfer or have any questions, please reach out to the Nomad team on [Discord](https://discord.gg/RurtmJApqm) in the #support channel.

## Fast Transfers with Connext

Fill out transfer details: connect wallet, select token, enter amount, select origin/destination networks and (optional) set destination address.

Once the input is filled out and valid, the app will check if there is available liquidity via Connext.

![Checking availability](../public/partner-assets/ethereum-to-evmos/checking-connext.png)

If there is, your screen will look like this. You may proceed with Connext or click "Use Nomad" to switch.

![Connext available](../public/partner-assets/ethereum-to-evmos/connext-available.png)

Click "Preview Send" to see the estimated fees and receive amount. It will take approximately 6-8 seconds for the results to appear.

![Calculating fee](../public/partner-assets/ethereum-to-evmos/calculating-fees.png)

Click `Send Tokens` and approve the transaction in Metamask!

In a few minutes, you will see your transfer appear in a table below. Click "Claim" to submit a transaction to receive your funds on the destination chain.

Click "View" to go to your transaction in the ConnextScan block explorer. Or you can visit `https://connextscan.io/tx/<yourtransactionhash>`.

![Claim Connext funds](../public/partner-assets/ethereum-to-evmos/connext-claim.png)
