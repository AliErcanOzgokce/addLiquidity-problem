import hre from "hardhat";
import chalk from "chalk";

import { address } from "../libs/address";
import { n } from "./Test";

export default async function Unit6({
  AddRemoveLiq,
  WETH,
  amount,
  USDT,
}: {
  AddRemoveLiq: any;
  WETH: any;
  amount: BigInt;
  USDT: any;
}) {
  const publicClient = await hre.viem.getPublicClient();

  const tx_tokenWETH = await WETH.write.approve([AddRemoveLiq.address, amount]);
  await publicClient.waitForTransactionReceipt({ hash: tx_tokenWETH });

  const allowance_WETH = await WETH.read.allowance([
    address,
    AddRemoveLiq.address,
  ]);

  console.log(
    chalk.yellow("Allowance of WETH: "),
    chalk.gray(allowance_WETH),
    chalk.white("to"),
    chalk.gray(AddRemoveLiq.address)
  );

  console.log(
    chalk.green("Transaction hash of 'approve' function: "),
    chalk.gray(tx_tokenWETH)
  );

  const tx_tokenUSDT = await USDT.write.approve([AddRemoveLiq.address, amount]);
  await publicClient.waitForTransactionReceipt({ hash: tx_tokenUSDT });

  const allowance_USDT = await USDT.read.allowance([
    address,
    AddRemoveLiq.address,
  ]);

  console.log(
    chalk.yellow("Allowance of USDT: "),
    chalk.gray(allowance_USDT),
    chalk.white("to"),
    chalk.gray(AddRemoveLiq.address)
  );

  console.log(
    chalk.green("Transaction hash of 'approve' function: "),
    chalk.gray(tx_tokenUSDT)
  );

  console.log(
    chalk.white(
      "\nApproval of WETH & USDT tokens, this unit test has finished Succesfully!"
    )
  );
  console.log(
    chalk.red(
      "--------------------------------------------------------------------------"
    ),
    chalk.white(`6 / ${n}`)
  );

  return [allowance_WETH, allowance_USDT];
}
