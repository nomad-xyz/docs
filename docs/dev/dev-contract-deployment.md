---
title: Dev Contract Deployment
lang: en-US
---

# Deploying Dev Setup

This section goes through the steps of adding a new development network to `nomad-deploy` and deploying a new set of dev contracts. If you will not be adding a new network, please skip to [Deploying the Contracts to Dev](#deploying-the-contracts-to-dev). If you are looking to deploy a new network to the production setup, please refer to [Production Contract Deployment](docs.nomad.xyz/dev/prod-contract-deploy.html).

## Add a New Network Config

If you are looking to add a new network to your dev setup, you will need to create a new config file for that network in `typescript/nomad-deploy/config/testnets`.

1. Copy the contents of one of the existing network's files into a new file titled `<new_network_name>.ts`.
2. Rename the `process.env` variables (deployer key and RPC URL) such that they pull from the `.env` variables for your new network.
3. Set the `chainJson` fields appropriately. For dev, this usually just means updating the following fields: `name`, `domain`, `timelag`.
4. Set the `devConfig` and `stagingConfig` object fields appropriately. In practice, for dev, you leave `devConfig` the same and only update `stagingConfig.optimisticSeconds`.

## Writing a New Deploy Script

Now that you've added a new network config, you must write a new deploy script that includes your new network.

1. Duplicate the contents of an existing folder in `typescript/nomad-deploy/scripts` (`core.ts` and `bridge.ts`) and put them in a new folder for your new deploy script.
2. In `core.ts` and `bridge.ts` adjust any import paths to pull in your new network config from `typescript/nomad-deploy/config/testnets`.
3. Add or remove any other existing networks in `core.ts` and `bridge.ts` and ensure that the `CoreDeploy` objects for the desired networks are used in the `deployTwoChains` or `deployNChains` calls at the bottom of the files.
4. Add new npm scripts to `typescript/nomad-deploy/package.json` that execute your new `core.ts` and `bridge.ts` files. The scripts will look like the following:

```
"scripts": {
    ...
    "deploy-<script_folder_name>-core": npx ts-node scripts/<script_folder_name>/core.ts,
    "deploy-<script_folder_name>-bridge": npx ts-node scripts/<script_folder_name>/bridge.ts
    ...
}
```

## Deploying the Contracts to Dev

The following section walks through the steps for deploying a new set of contracts to dev.

1. Clone the monorepo and take a look at [nomad-deploy](https://github.com/nomad-xyz/nomad-monorepo/tree/main/typescript/nomad-deploy).

2. Populate `.env.example` with the required RPC endpoints and funded deployer keys -- place it at `typescript/nomad-deploy/.env`, [see the example](https://github.com/nomad-xyz/nomad-monorepo/blob/main/typescript/nomad-deploy/.env.example)

3. Prepare Local Dependencies

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
$ npm run deploy-<your_script_folder_name>-core

# Then deploy bridge contracts
$ npm run deploy-<your_script_folder_name>-bridge
```

5. Commit Outputted Configs

If all goes according to plan, you will have a new folder at `rust/config/<timestamp>` containing JSON files that are used by the Off-Chain Agents. Please rename this folder appropriately (`development` if this will become the new dev setup). When committed to the monorepo, the config files are automatically bundled into the resultant Agent docker image in CI.

Note: Deployment environments may be overridden by replacing the environment's config folder with the contents of your new timestamped configuration.
