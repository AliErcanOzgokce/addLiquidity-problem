import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-viem";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  networks: {
    local: {
      url: "http://localhost:8545",
      accounts: [process.env.private_key],
    },
    sepolia: {
      url: "https://sepolia.drpc.org",
      accounts: [process.env.private_key],
      chainId: 11155111,
    },
    holesky: {
      url: "https://1rpc.io/holesky",
      accounts: [process.env.private_key],
      chainId: 17000,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 800,
          },
        },
      },
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 800,
          },
        },
      },

      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 800,
          },
        },
      },
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 800,
          },
        },
      },

      {
        version: "0.8.26",
        settings: {
          optimizer: {
            enabled: true,
            runs: 800,
          },
        },
      },
    ],
  },
};

export default config;
