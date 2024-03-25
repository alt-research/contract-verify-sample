import { ethers } from "hardhat";

async function main() {

  const lock = await ethers.deployContract("Counter");
  await lock.waitForDeployment();
  const addr = await lock.getAddress()
  console.log(addr)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});