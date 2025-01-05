import { assert, expect } from "chai";
import chalk from "chalk";
import hre from "hardhat";

import { address } from "../libs/address";

export default async function main() {
  // Token A

  const TOKEN_NAME_A = "tokenA";
  const TOKEN_SYMBOL_A = "A";

  const tokenA = await hre.viem.deployContract("ERC20TEST", [
    TOKEN_NAME_A,
    TOKEN_SYMBOL_A,
    10n ** 18n,
  ]);

  assert(TOKEN_NAME_A == (await tokenA.read.name()), "Token A name is wrong");
  const balance_A = await tokenA.read.balanceOf([address]);
  console.log(chalk.yellow("Token A address: "), chalk.gray(tokenA.address));
  console.log(chalk.yellow("Token A balance: "), chalk.gray(balance_A));
  assert(
    TOKEN_SYMBOL_A == (await tokenA.read.symbol()),
    "Token A symbol is wrong"
  );

  // Token B
  const TOKEN_NAME_B = "tokenB";
  const TOKEN_SYMBOL_B = "B";

  const tokenB = await hre.viem.deployContract("ERC20TEST", [
    TOKEN_NAME_B,
    TOKEN_SYMBOL_B,
    10n ** 18n,
  ]);

  const balance_B = await tokenB.read.balanceOf([address]);
  assert(TOKEN_NAME_B == (await tokenB.read.name()), "Token B name is wrong");

  console.log(chalk.yellow("Token B address: "), chalk.gray(tokenB.address));
  console.log(chalk.yellow("Token B balance: "), chalk.gray(balance_B));
  assert(
    TOKEN_SYMBOL_B == (await tokenB.read.symbol()),
    "Token B symbol is wrong"
  );

  // USDT

  // uint _initialSupply, string _name, string _symbol, uint _decimals

  const USDT = await hre.viem.deployContract("TetherToken", [
    10n ** 18n,
    "Tether",
    "USDT",
    6n,
  ]);

  console.log(chalk.yellow("USDT address: "), chalk.gray(USDT.address));

  assert("Tether" == (await USDT.read.name()), "Token USDT name is wrong");
  assert("USDT" == (await USDT.read.symbol()), "Token USDT symbol is wrong");

  // WETH

  const WETH = await hre.viem.deployContract("WETH9");

  console.log(chalk.yellow("WETH address: "), chalk.gray(WETH.address));

  assert(
    "Wrapped Ether" == (await WETH.read.name()),
    "Token WETH name is wrong"
  );
  assert("WETH" == (await WETH.read.symbol()), "Token WETH symbol is wrong");

  return [tokenA, tokenB, WETH, USDT];
}
