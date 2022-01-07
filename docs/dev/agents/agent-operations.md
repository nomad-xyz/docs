---
title: Agent Operations
lang: en-US
---

# Agent Operations

## Deployment Environments

There will exist several logical deployments of Nomad to enable us to test new code/logic before releasing it to Mainnet. Each environment encompasses the various Home/Replica contracts deployed to many blockchains, as well as the agent deployments and their associated account secrets.

The environments have various purposes and can be described as follows:

### Development

Purpose: Allows us to test changes to contracts and agents. *Bugs should be found here.*

- Deployed against testnets
- Agent Accounts: HexKeys stored in a secret manager for ease of rotation/access
- Agent Infrastructure: Nomad core team will operate agent infrastructure for this.
- Node Infrastructure: Forno/Infura
- Agent Deployments: Automatic, continuous deployment
- Contract Deployments: Automatic, with human intervention required for updating the **upgradeBeacon**.

**Current Dev Contract Deployment:**

[development](https://github.com/nomad-xyz/nomad-monorepo/rust/config/development/)

### Staging

Purpose: Allows us to test the full-stack integration, specifically surrounding the KMS access control and federated secret management. *Issues with process should be found here.*

- Deployed against testnets, mirrors Mainnet deployment.
- Agent Accounts: KMS-provisioned keys
- Agent Infrastructure: Agent operations will be decentralized
- Node Infrastructure: Node infrastructure will be decentralized
- Agent Deployments: Determined by whoever is running the agents
- Contract Deployments: Automatic, with human intervention required for updating the **upgradeBeacon**.

**Current Staging Contract Deployment:**

[staging](https://github.com/nomad-xyz/nomad-monorepo/rust/config/staging/)

### Production

Purpose: Where the magic happens, **things should not break here.** 

- Deployed against Mainnets
- Agent Accounts: KMS-provisioned keys
- Agent Infrastructure: Agent operations will be decentralized
- Node Infrastructure: Node infrastructure will be decentralized
- Agent Deployments: Determined by whoever is running the agents
- Contract Deployments: ***Manual*** - Existing tooling can be used, but deploys will be gated and require approval as contract deployments are expensive on Mainnet.

**Current Production Contract Deployment:**

[mainnet](https://github.com/nomad-xyz/nomad-monorepo/rust/config/mainnet/)

## Key Material

Keys for Staging and Production environments will be stored in AWS KMS, which is a highly flexible solution in terms of granting access. It guarantees nobody will ever have access to the key material itself, while still allowing granular permissions over access to remote signing. 

At the outset, the Nomad team will have full control over agent keys, and any contracted party will simply be granted access through existing IAM tooling/roles.

### Provision KMS Keys

There exists a script in the monorepo [(`rust/provision_kms_keys.py`)](https://github.com/nomad-xyz/nomad-monorepo/blob/main/rust/provision_kms_keys.py) that facilitates KMS key provisioning for agent roles.

The script will produce a single set of keys per "environment." Where an __environment__ is a logical set of smart contract deployments, as documented [here](#deployment-environments). By default there are two environments configured, `staging` and `production`.

#### Keys Explained

**Transaction Signers**

One signer key should be provisioned for each agent per-network. These keys are used to sign transactions on the respective networks Nomad is deployed to.

**Attestation Signers**

One additional key is provisioned for both the Watcher and Updater Agents. The Updater uses its key to sign updates to its assigned Home contract, while the Watcher uses its key to sign fraud proofs when it observes the Updater commiting fraud. 

Note: Attestation signer addresses are used as input to the contract deployment process. They can be configured in the `nomad-deploy` package [like so](https://github.com/nomad-xyz/nomad-monorepo/blob/main/typescript/nomad-deploy/config/testnets/kovan.ts#L28-L30). 

You may configure the script to generate arbitrary signer keys on a per-environment basis. 
```python
# Agent Keys
agent_keys = {
    "staging": [
        "watcher-signer",
        "watcher-attestation",
        "updater-signer",
        "updater-attestation",
        "processor-signer",
        "relayer-signer",
        "kathy-signer"
    ],
    "production": [
        "watcher-signer",
        "watcher-attestation",
        "updater-signer",
        "updater-attestation",
        "processor-signer",
        "relayer-signer",
    ]
}
```

Additionally, the supported networks for each environment are configured below. 
```
networks = {
    "production": [
        "ethereum",
        "moonbeam",
        "evmos"
    ],
    "staging": [
        "moonbasealpha",
        "kovan"    
    ]
}
```


#### Run the Key Provisioning Script

```bash
AWS_ACCESS_KEY_ID=accesskey AWS_SECRET_ACCESS_KEY=secretkey python3 provision_kms_keys.py  
```

If the required keys are not present, the script will generate them. If they keys _are_ present, their information will be fetched and displayed non-destructively. 

Upon successful operation, the script will output a table of the required keys, their ARNs, ETH addresses (for funding the accounts), and their regions. 

#### Provision IAM Policies and Users

This is an opinionated setup that works for most general agent operations use-cases. The same permissions boundaries can be achieved through different means, like using only [Key Policies](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html)

Background Reading/Documentation:

- [KMS Policy Conditions](https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.htm)
- [KMS Policy Examples](https://docs.aws.amazon.com/kms/latest/developerguide/customer-managed-policies.html)
- [CMK Alias Authorization](https://docs.aws.amazon.com/kms/latest/developerguide/alias-authorization.html)

The following sequence describes how to set up IAM policies staging and production deployments.

- Create two users
  - nomad-signer-staging
  - nomad-signer-production
  - kms-admin
  - Save IAM credential CSV
- Create staging signer policies
  - staging-processor-signer
  - staging-relayer-signer
  - staging-updater-signer
  - staging-watcher-signer
  - With the following policy, modified appropriately:

  ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "NomadStagingPolicy",
          "Effect": "Allow",
          "Action": [
            "kms:GetPublicKey",
            "kms:Sign"
          ],
          "Resource": "arn:aws:kms:*:11111111111:key/*",
          "Condition": {
            "ForAnyValue:StringLike": {
              "kms:ResourceAliases": "alias/staging-processor*"
            }
          }
        }
      ]
    }
  ```

  - production-processor-signer
  - production-relayer-signer
  - production-updater-signer
  - production-watcher-signer
  - With the following policy, modified appropriately:

  ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "NomadProductionPolicy",
          "Effect": "Allow",
          "Action": [
            "kms:GetPublicKey",
            "kms:Sign"
          ],
          "Resource": "arn:aws:kms:*:11111111111:key/*",
          "Condition": {
            "ForAnyValue:StringLike": {
              "kms:ResourceAliases": "alias/production-processor*"
            }
          }
        }
      ]
    }
    ```

- Create kms-admin policy

  ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "KMSAdminPolicy",
          "Effect": "Allow",
          "Action": [
            "kms:DescribeCustomKeyStores",
            "kms:ListKeys",
            "kms:DeleteCustomKeyStore",
            "kms:GenerateRandom",
            "kms:UpdateCustomKeyStore",
            "kms:ListAliases",
            "kms:DisconnectCustomKeyStore",
            "kms:CreateKey",
            "kms:ConnectCustomKeyStore",
            "kms:CreateCustomKeyStore"
          ],
          "Resource": "*"
        },
        {
          "Sid": "VisualEditor1",
          "Effect": "Allow",
          "Action": "kms:*",
          "Resource": [
            "arn:aws:kms:*:756467427867:alias/*",
            "arn:aws:kms:*:756467427867:key/*"
          ]
        }
      ]
    }
  ```

  - Create IAM groups
    - staging-signer
    - production-signer
    - kms-admin
  - Add previously created users to the corresponding groups
    - nomad-signer-staging -> staging-signer
    - nomad-signer-production -> production-signer
    - kms-admin -> kms-admin

## Funding Addresses

Each agent should be configured with a unique wallet to be used to signing transactions and paying gas. In order to automate the process of monitoring and topping up agent wallets, the Nomad core team built a CLI tool called [The Keymaster](the-keymaster.md). 

The Keymaster, upon configuration, enables the manual one-off topping up of agent wallets on an arbitrary number of netorks. Additionally, it is capable of running this functionality as a service, topping up accounts on an interval and exposing prometheus metrics about the addresses it is monitoring for use in dashboards. 

## Self-Service Proofs in S3

In order to facilitate users processing their own proofs in the GUI, agents (specifically the Processor), have the functionality to upload raw proofs to an AWS S3 bucket. In the default configuration, the bucket is publicly accessible and allows end-users to fetch them via the GUI and submit them in a transaction to the apropriate blockchain. 

### Pre-Requisites 
- AWS Account 
- Agent Infrastructure

### Bucket Setup 

Setup is simple, create a bucket in your desired region via the AWS UI, ensuring to uncheck "Block Public Access" as the desired outcome is for the contents of this bucket to be publicly accessible on the internet.

Use the following bucket policy to enable public access to `s3:getObject` in your newly created bucket: 

```
{
    "Version": "2012-10-17",
    "Id": "S3PublicRead",
    "Statement": [
        {
            "Sid": "IPAllow",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:getObject",
            "Resource": "arn:aws:s3:::<BUCKET-NAME>/*"
        }
    ]
}
```

### AWS IAM Permissions

NOTE: Currently, Agents only support a single AWS key for both KMS Signing and S3 Upload. This enforces a non-functional requirement that the S3 bucket proofs are uploaded to and the KMS keys used to sign transactions are in the same logical AWS account. 

Create an IAM policy that allows a user to write to the S3 bucket you created in the previous step: 

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "ListObjectsInBucket",
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::<BUCKET-NAME>"
            ]
        },
        {
            "Sid": "AllObjectActions",
            "Effect": "Allow",
            "Action": "s3:*Object*",
            "Resource": [
                "arn:aws:s3:::<BUCKET-NAME>/*"
            ]
        }
    ]
}
```

Attach this policy to an IAM user and provision/download AWS keys.

### Configuring the Agent

The Processor agent has special config for S3 proof indexing, located in the code [here](https://github.com/nomad-xyz/nomad-monorepo-archive/blob/main/rust/agents/processor/src/settings.rs#L9-L24). 

Buckets can be configured at agent runtime via the following environment variables: 

`OPT_PROCESSOR_S3_BUCKET` -> Name of the bucket. Ex. `nomadxyz-development-proofs`
`OPT_PROCESSOR_S3_REGION` -> AWS region the bucket lives in. Ex. `us-west-1`

If you are using the helm chart, these values can be passed via [`values.yaml`](https://github.com/nomad-xyz/nomad-monorepo/blob/main/rust/helm/nomad-agent/values.yaml#L147-L149) like so: 

```
processor: 
...
  s3Proofs: 
    bucket: nomadxyz-development-proofs
    region: us-west-1
```