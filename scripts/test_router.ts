import { assert, expect } from "chai";
import hre, { viem } from "hardhat";

import chalk from "chalk";

export default async function main(
  factory_address: `0x${string}`,
  WETH_address: `0x${string}`
) {
  const router = await hre.viem.deployContract("Router02", [
    factory_address,
    WETH_address,
  ]);

  console.log(chalk.yellow("Router address: "), chalk.gray(router.address));

  const test_fac_address = (await router.read.factory()).toLowerCase();
  assert(factory_address == test_fac_address, "Factory address is wrong!");

  return [router];
}
