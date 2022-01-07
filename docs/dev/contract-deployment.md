---
title: Contract Deployment
lang: en-US
---

# Deploy the Contracts

Contract deployment is relatively straightforward, however there are plenty of edge-cases and gotchas that can trip up an enterprising engineer. 

## TL;DR

You're probably anxious to get started! Here's a simplified list of steps that should get you up and running:

0. Clone the monorepo and take a look at [nomad-deploy](https://github.com/nomad-xyz/nomad-monorepo/tree/main/typescript/nomad-deploy). 

1. Populate `.env.example` with the required RPC endpoints and funded deployer keys -- place it at `typescript/nomad-deploy/.env`, [see the example](https://github.com/nomad-xyz/nomad-monorepo/blob/main/typescript/nomad-deploy/.env.example)

2. Prepare Local Dependencies

`nomad-deploy` is configured to use the local versions of the Nomad typechain interface and the Nomad SDK, as such the local Node modules must be initialized. 
```
# Install dependencies for typechain
$ cd typescript/typechain
$ npm i 

...

# Install dependencies for nomad-sdk
$ cd typescript/nomad-sdk
$ npm i
```

3. Install Dependencies

```
$ cd typescript/nomad-deploy
$ npm i 
# Links local modules to nomad-deploy
$ npm run relink-all
```

4. Execute a Deploy Script

Note: See below for more details about the available deployment scripts.

```
# Deploy core contracts first
$ npm run deploy-dev-core

# Then deploy bridge contracts
$ npm run deploy-dev-bridge
```

5. Commit Outputted Configs

If all goes according to plan, you will have a new folder at `rust/config/<timestamp>` containing JSON files that are used by the Off-Chain Agents. When committed to the monorepo, they are automatically bundled into the resultant Agent docker image in CI. 

Note: Deployment environments may be overridden by replacing the environment's config folder with the contents of your new timestamped configuration. 
