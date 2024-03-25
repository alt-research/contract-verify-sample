import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: false,
        runs: 1000,
      },
    },
  },
  networks: {
    opdemo: {
      url: 'https://op-demo.alt.technology',
      chainId: 20240219,
      // test account: 0x3d96d0e5932A20518E60f39ef3AbF81a37C6231E
      accounts: ["0xfed4030d3379f87b009e9011b83c9e89a9d16411b039e7ca718453c2bd0d3aac"],
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      opdemo: "abc",
    },
    customChains: [
      {
        network: "opdemo",
        chainId: 20240219,
        urls: {
          apiURL: "https://op-demo-explorer.alt.technology/api",
          browserURL: "https://op-demo-explorer.alt.technology"
        }
      },
    ]
  }
};

export default config;
