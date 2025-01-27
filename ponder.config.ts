import { createConfig } from "ponder";
import { http, multicall3Abi } from "viem";
import { base } from "viem/chains";

export default createConfig({
  networks: {
    base: {
      chainId: 8453,
      transport: http(process.env.PONDER_RPC_URL_8453),
      maxRequestsPerSecond: 200,
    },
  },
  contracts: {
    multicall3: {
      network: "base",
      abi: multicall3Abi,
      address: base.contracts.multicall3.address,
      startBlock: 24_000_000,
      endBlock: 24_050_000,
      includeCallTraces: true,
    },
  },
});
