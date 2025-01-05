import hre from "hardhat";
import chalk from "chalk";

export default async function main(
  router_address: `0x${string}`,
  factory_address: `0x${string}`,
  weth_address: `0x${string}`,
  usdt_address: `0x${string}`
) {
  const AddRemoveLiq = await hre.viem.deployContract("AddRemoveLiq", [
    router_address,
    factory_address,
    weth_address,
    usdt_address,
  ]);

  console.log(
    chalk.yellow("AddRemoveLiq address: "),
    chalk.gray(AddRemoveLiq.address)
  );

  return [AddRemoveLiq];
}
