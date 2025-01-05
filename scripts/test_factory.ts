import { assert, expect } from "chai";
import hre from "hardhat";

import { address } from "../libs/address";
import chalk from "chalk";

export default async function main(
  tokenA_address: `0x${string}`,
  tokenB_address: `0x${string}`
) {
  const publicClient = await hre.viem.getPublicClient();
  const factory = await hre.viem.deployContract("Factory", [address]);

  console.log(chalk.yellow("Factory address: "), chalk.gray(factory.address));

  let tx_hash_pair = await factory.write.createPair([
    tokenA_address,
    tokenB_address,
  ]);
  console.log(
    chalk.green("Transaction hash of 'createPair' function: \n"),
    chalk.gray(tx_hash_pair)
  );

  await publicClient.waitForTransactionReceipt({ hash: tx_hash_pair });

  const pair_address = await factory.read.getPair([
    tokenA_address,
    tokenB_address,
  ]);

  console.log(
    chalk.yellow("Pair address of tokenA and tokenB: "),
    chalk.gray(pair_address)
  );

  return [factory];
}
