import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config";

// Required env variables
const RPC_URL = process.env.RPC_URL!;
const CHAIN_ID = Number(process.env.CHAIN_ID || "0");

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: { 
      optimizer: { 
        enabled: true, 
        runs: 200 
      } 
    },
  },
  networks: {
    // Your team's DIDLab chain
    didlab: {
      url: RPC_URL,
      chainId: CHAIN_ID,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      type: "http",
    },
    // Local hardhat network
    hardhat: {
      initialBaseFeePerGas: 1_000_000_000, // 1 gwei for EIP-1559 fields
      type: "edr-simulated",
    },
  },
};

export default config;