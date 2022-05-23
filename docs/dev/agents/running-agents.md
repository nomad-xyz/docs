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
- Default RPC info:
  - `RPCS_DEFAULT_RPCSTYLE`: Default for any network that isn't explicitly configured
- Network-specific transaction signers:
  - Hex key:
    - `TRANSACTIONSIGNERS_{network}_KEY`
    - Raw 0x-prefixed hex key
  - AWS Key:
    - `TRANSACTIONSIGNERS_{network}_ID`
    - `TRANSACTIONSIGNERS_{network}_REGION`
    - AWS key id and region
- Default transaction signers:
  - Hex key:
    - `TRANSACTIONSIGNERS_DEFAULT_KEY`
    - Raw 0x-prefixed hex key
  - AWS Key:
    - `TRANSACTIONSIGNERS_DEFAULT_ID`
    - `TRANSACTIONSIGNERS_DEFAULT_REGION`
    - AWS key id and region
- Attestation signer:
  - Required _only_ for updater and watcher
  - Hex key:
    - `ATTESTATION_SIGNER_KEY`
    - Raw 0x-prefixed hex key
  - AWS Key:
    - `ATTESTATION_SIGNER_ID`
    - `ATTESTATION_SIGNER_REGION`
    - AWS key id and region

<br>

For more info on our different run environments and key configuration/provisioning, please refer to our [agents operations page](./agent-operations.md).

You can see an example .env file below:

```
# Only runs agent for Ethereum <> Moonbeam channel (production)

RUN_ENV=production
AGENT_HOME_NAME=ethereum
AGENT_REPLICA_0_NAME=moonbeam

RPCS_DEFAULT_RPCSTYLE=ethereum
RPCS_ETHEREUM_RPCSTYLE=ethereum
RPCS_MOONBEAM_RPCSTYLE=ethereum

RPCS_ETHEREUM_CONNECTION_URL=https://main-light.eth.linkpool.io/
RPCS_MOONBEAM_CONNECTION_URL=https://rpc.api.moonbeam.network

# can provide tx signer as hex key
TRANSACTIONSIGNERS_DEFAULT_KEY=0x1111111111111111111111111111111111111111111111111111111111111111
TRANSACTIONSIGNERS_ETHEREUM_KEY=0x1111111111111111111111111111111111111111111111111111111111111111

# can also provide tx signer as aws key config
TRANSACTIONSIGNERS_DEFAULT_ID=default_id
TRANSACTIONSIGNERS_MOONBEAM_ID=dummy_id

TRANSACTIONSIGNERS_DEFAULT_REGION=default_region
TRANSACTIONSIGNERS_MOONBEAM_REGION=dummy_region

# can provide attestation signer as aws or hex key
ATTESTATION_SIGNER_ID=dummy_id
ATTESTATION_SIGNER_REGION=dummy_region
```

If you would like to configure an agent to run against all connected networks (against all replicas the home is connected to), see [this example](https://github.com/nomad-xyz/rust/blob/main/fixtures/env.test). For more examples of .env files, see our [test fixtures folder](https://github.com/nomad-xyz/rust/tree/main/fixtures).

## Running Agent

Once you have populated a .env file, running an agent is as simple as running the following command:

`env $(cat .env | xargs) cargo run --bin <AGENT>`

This will build the codebase and run the specified `<AGENT>` binary (updater, relayer, processor, or watcher) using the provided environment variables.

## Production Builds

It is important when making changes to the Rust codebase, to ensure the Docker build used in production environments still works. You can check this automatically in CI as it is built on every PR ([see docker workflow here](https://github.com/nomad-xyz/rust/blob/main/.github/workflows/docker.yml)), however you can check it much faster usually by attempting to build it locally.

You can build the docker image by running the following script in the `rust` directory:

`./build.sh latest`

If that goes smoothly, you can rest assured it will most likely also work in CI.
