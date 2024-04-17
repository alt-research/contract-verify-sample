# Blockscout contract verify sample project

## Using Hardhat

[hardhat](hardhat/)

## Using Foundry

[foundry](foundry/)

# Etherscan contract verify command (op contract as references)

OptimismPortal

```
ETHERSCAN_API_KEY=your_key forge verify-contract 0xdaaB4F3d042DB56F9CD22440d4716944f16b47E4 src/L1/OptimismPortal.sol:OptimismPortal  --constructor-args $(cast abi-encode "constructor(address,address)" 0x1578f91C21E63cf71537dC77675091ae8389d3b4 0x6bFfB1c989C11FA31AFCcA013241bd9089733197) --watch --chain-id 56

https://bscscan.com/address/0xdaab4f3d042db56f9cd22440d4716944f16b47e4#code
```

L1CrossDomainMessenger

```
ETHERSCAN_API_KEY=your_key forge verify-contract 0x3990DC107847d4440527f871773f71D95504521B src/L1/L1CrossDomainMessenger.sol:L1CrossDomainMessenger  --constructor-args $(cast abi-encode "constructor(address)" 0x3A4965738e1d642cC1eda3Bc9284F66Ec972294d) --watch --chain-id 56

https://bscscan.com/address/0x3990DC107847d4440527f871773f71D95504521B#code
```

L1ERC721Bridge

```
ETHERSCAN_API_KEY=your_key forge verify-contract 0x1452E612ff5D7eCEa8F7C24428eb4F7874d1dDF3 src/L1/L1ERC721Bridge.sol:L1ERC721Bridge  --constructor-args $(cast abi-encode "constructor(address)" 0x79f0C3A18694FBDE6Af9305fE129D711fcEDbB8C) --watch --chain-id 56

https://bscscan.com/address/0x1452e612ff5d7ecea8f7c24428eb4f7874d1ddf3#code
```
