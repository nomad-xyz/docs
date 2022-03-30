---
title: Bridge from Ethereum to Milkomeda
lang: en-US
---

# Bridging To Milkomeda

Bridging assets from Ethereum to Milkomeda using the Nomad GUI should be intuitive and easy. In this tutorial, we will walk through the steps required to bridge your assets.

Please find our production bridge GUI at [app.nomad.xyz](https://app.nomad.xyz/).

If you would like to test our bridge using testnet funds before using real funds, please visit our development GUI at [development.app.nomad.xyz](https://development.app.nomad.xyz/).

## Nomad vs Connext, which should I use?

There are two options available to send funds through the GUI, Nomad and Connext. These are two distinct protocols that are complimentary to one another. We have partnered with Connext to provide an optimal experience for users!

Nomad is a secure gas efficient cross-chain protocol that allows users to bridge funds between networks. This takes, on average, 35-60 minutes. There are no fees associated with Nomad, just pay gas! Connext provides liquidity pools for Nomad assets, meaning users can receive funds on the destination chain much faster (less than 10 minutes) for an additional fee. Nomad is advised for large transfers.

Connext is not available for every asset and may not be available for larger sums. If it is available, we provide this option by default. If you would like to use Nomad instead, you can temporarily switch by clicking "Use Nomad" or you can toggle off "Enable Connext" in settings.

![Switch to Nomad](./assets/use-nomad.png)
![Enables/Disable Connext](./assets/toggle-connext.png)

## Bridge using Nomad

Connect to Metamask.

![Connect to Metamask](./assets/connect-metamask.png)

<br>

Select Ethereum as the origin network and Milkomeda C1 as the destination.

![Select Milkomeda as Destination](./assets/select-milkomeda.png)
![Select Origin and Destination Networks](./assets/select-networks.png)

<br>

(Optional) Change Destination address. This is set as your wallet address by default. Click "edit". A modal will pop up, click "change" inside the input. Then copy your address, click to paste, and save.
::: warning CAUTION
Sending assets to an address you do not control can result in a permanent loss of funds!
:::

![Change Destination](./assets/edit-destination-address.png)
![Paste Destination](./assets/paste-destination-address.png)

<br>

Select the asset you want to send using the asset dropdown menu and the amount you want to send using the input prompt.

![Select an Asset](./assets/select-asset.png)
![Enter Amount](./assets/bridge-with-nomad.png)

<br>

Click `Bridge Tokens` and approve the transaction in Metamask.

![Approve Bridge Transaction](./assets/sending.png)

<br>

After approving the transaction, you will be taken to the transaction details page. Here, you will see the estimated time remaining for your transfer to complete. Please save your transaction hash for convenience. If you lose it, you can visit your wallet address on the block explorer of the origin network and find the transaction again.

::: info
Processing fees are subsidized for Milkomeda, so your funds will be deposited directly to your address without any further action!

If you bridge **back** to Ethereum, you will need to wait 30-65 minutes and then revisit the Transaction page to complete your transfer and receive your funds on Ethereum.
:::

![See Transaction Details](./assets/pending.png)

<br>

You can expand the time estimate tab to track your transaction status by clicking the down arrow in the blue box.

![See Expanded Transaction Details](./assets/expand-status.png)

<br>

(Optional) If you navigated away from the GUI at any point and want to find your transfer's progress page again, visit [https://app.nomad.xyz/tx](https://app.nomad.xyz/tx) and enter the origin network and your transfer's transaction hash.

![Search Tx](./assets/search-tx.png)

<br>

Once your transfer has completed, you should see the below display and your funds will be in the account of your destination address.

![Finished](./assets/transfer-complete.png)

<br>

You may need to import the token address into your wallet in order to see your funds. The addresses of Nomad assets on Milkomeda can be found [here](https://docs.nomad.xyz/bridge/domains.html#milkomeda-c1).

If need help with your transfer or have any questions, please reach out to the Nomad team on [Discord](https://discord.gg/RurtmJApqm) in the #support channel.

## Fast Transfers with Connext

Fill out transfer details: connect wallet, select token, enter amount, select origin/destination networks and (optional) set destination address.

Once the input is filled out and valid, the app will check if there is available liquidity via Connext.

![Checking availability](./assets/checking-connext.png)

If there is, your screen will look like this. You may proceed with Connext or click "Use Nomad" to switch.

![Connext available](./assets/connext-available.png)

Click "Preview Send" to see the estimated fees and receive amount. It will take approximately 6-8 seconds for the results to appear.

![Calculating fee](./assets/calculating-fees.png)

Click `Send Tokens` and approve the transaction in Metamask!

In a few minutes, you will see your transfer appear in a table below. Click "Claim" to submit a transaction to receive your funds on the destination chain.

Click "View" to go to your transaction in the ConnextScan block explorer. Or you can visit `https://connextscan.io/tx/<yourtransactionhash>`.

![Claim Connext funds](./assets/connext-claim.png)
