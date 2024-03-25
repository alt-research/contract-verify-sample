# Blockscout contract verify sample project

This project demonstrates how to verify contract for blockscout using hardhat

## Install dependences

```shell
yarn
```

## Config network

```json
networks: {
    opdemo: {
      url: 'https://op-demo.alt.technology',
      chainId: 20240219,
      // test account: 0x3d96d0e5932A20518E60f39ef3AbF81a37C6231E
      accounts: ["0xfed4030d3379f87b009e9011b83c9e89a9d16411b039e7ca718453c2bd0d3aac"],
    }
},
```

## Config etherscan 

```json
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
```

## Deploy Counter contract

```shell
yarn hardhat run scripts/deploy.ts --network opdemo 
```

## Verify Counter contract

```shell
yarn hardhat verify --contract contracts/Counter.sol:Counter 0xf3C5b2fbFC3944c4134fA3553Ff2cf15CD86C1D7 --network opdemo
```