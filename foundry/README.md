# Blockscout contract verify sample project

This project demonstrates how to verify contract for blockscout using foundry

## Install dependences

```shell
forge install
```

## Deploy Counter contract

```shell
forge create --rpc-url https://op-demo.alt.technology --private-key 0xfed4030d3379f87b009e9011b83c9e89a9d16411b039e7ca718453c2bd0d3aac src/Counter.sol:Counter
```

```
https://op-demo-explorer.alt.technology/address/0x52B04768006c54D93885597e6B3189fD176A52F8
```

## Verify Counter contract

```shell
forge verify-contract --verifier blockscout --verifier-url https://op-demo-explorer.alt.technology/api --chain-id 20240219 0x52B04768006c54D93885597e6B3189fD176A52F8 src/Counter.sol:Counter
```

```
https://op-demo-explorer.alt.technology/address/0x97bd69a53262de92ff8dde50993f2a3a26772dd8?tab=contract
```

