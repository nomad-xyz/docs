---
title: Nomad Network Topology
lang: en-US
---

Nomad provides cheap cross-chain communication channels, which are (documented
[here](./architecture.md)). From there we have to decide which
chains are worth connecting. The map of connections between chains is called
the network topology.

## Nomad's Topology

Generally, Nomad follows a **Hub and Spoke** network topology. That is to say,
one chain (Ethereum) is the logical hub of the Nomad network. We guarantee that
all other chains have active channels to Ethereum. While connections between
spokes may exist, we don't guarantee that they do.

Hub and Spoke topology has a number of advantages:

1. It guarantees a route from point A to point B exists.
1. It makes finding that route very simple.
1. It guarantees that the route is at most 2 hops.
1. It allows applications to assume direct communication with their own hub.
1. It minimizes the number of channels we must deploy and maintain
1. It allows us to directly connect spokes _if there is a compelling reason to
   do so_

### Other Options

IBC follows a **Mesh** topology, which does not guarantee that any specific
cross-chain channel exists. Instead, users must observe the available channels
and chart a route that hops across some number of channels to get to their
destination.

Some networks may follow a **Total Graph** topology, which guarantees that all
chains are connected to all other chains. This results in a very large number
of channels, but cuts out all route finding.

## For Developers

xApp developers may make the following assumptions:

- That a Nomad channel to Ethereum exists on any chain in the Nomad network.
- That a xApp contract deployed on Ethereum can communicate directly with xApp
  contracts on any chain in the Nomad network.
- That this will remain true as new chains are added to the Nomad network.
