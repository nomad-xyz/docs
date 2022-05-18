---
title: Running Agents
lang: en-US
---

# Running Agents

## Overview

Agents read settings from a mix of our public [JSON configuration files](https://github.com/nomad-xyz/rust/tree/main/configuration/configs) and private environment variables.

Our hosted JSON configs provide public network info such as contract addresses and chain finality settings. Environment variables specify what networks you want to run the agent against as well as secrets such as signer keys or private RPC endpoints.

## Configuring an Agent

To configure an agent, you must populate the proper environment variables. The key fields one must specify are:

- Run environment:
  - `RUN_ENV`: Development, staging, or production
- Agent home:
  - `AGENT_HOME_NAME`: What home the agent is running against
- Agent replicas:
  - `AGENT_REPLICA_0_NAME`, `AGENT_REPLICA_1_NAME`, `AGENT_REPLICA_2_NAME`, etc...
  - What replica(s) the agent will run against
- Network-specific RPC info:
  - `RPCS_{network}_RPCSTYLE`: What RPC style `network` is; "ethereum" for all EVM chains
  - `RPCS_{network}_CONNECTION_URL`: RPC endpoint url
- Network-specific transaction signers:
  - Hexkey:
    - `TRANSACTIONSIGNERS_{network}_KEY`
    - Raw 0x-prefixed hexkey
  - AWS Key:
    - `TRANSACTIONSIGNERS_{network}_ID`
    - `TRANSACTIONSIGNERS_{network}_REGION`
    - AWS key id and region
- Attestation signer:
  - Required _only_ for updater and watcher
  - Hexkey:
    - `ATTESTATION_SIGNER_KEY`
    - Raw 0x-prefixed hexkey
  - AWS Key:
    - `ATTESTATION_SIGNER_ID`
    - `ATTESTATION_SIGNER_REGION`
    - AWS key id and region

<br>

You can see an example .env file below:

```
# Only runs agent for Ethereum <> Moonbeam channel (production)

RUN_ENV=production
AGENT_HOME_NAME=ethereum
AGENT_REPLICA_0_NAME=moonbeam

RPCS_ETHEREUM_RPCSTYLE=ethereum
RPCS_MOONBEAM_RPCSTYLE=ethereum

RPCS_ETHEREUM_CONNECTION_URL=https://main-light.eth.linkpool.io/
RPCS_MOONBEAM_CONNECTION_URL=https://rpc.api.moonbeam.network

# can provide tx signer as hexkey
TRANSACTIONSIGNERS_ETHEREUM_KEY=0x1111111111111111111111111111111111111111111111111111111111111111

# can also provide tx signer as aws key config
TRANSACTIONSIGNERS_MOONBEAM_ID=dummy_id
TRANSACTIONSIGNERS_MOONBEAM_REGION=dummy_region

# can provide attestation signer as aws or hexkey
ATTESTATION_SIGNER_ID=dummy_id
ATTESTATION_SIGNER_REGION=dummy_region
```

If you would like to configure an agent to run against all connected networks (against all replicas the home is connected to), see [this example](https://github.com/nomad-xyz/rust/blob/main/fixtures/env.test). For more examples of .env files, see our [test fixtures folder](https://github.com/nomad-xyz/rust/tree/main/fixtures).

## Running Agent

Once you have populated a .env file, running an agent is as simple as running the following command:

`env $(cat .env | xargs) cargo run --bin <AGENT>`

This will build the codebase and run the specified `<AGENT>` binary (updater, relayer, processor, or watcher) using the provided environment variables.
