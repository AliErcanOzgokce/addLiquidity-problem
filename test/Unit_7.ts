import hre from "hardhat";

import chalk from "chalk";
import { n } from "./Test";

export default async function Unit7({
  WETH,
  USDT,
  AddRemoveLiq,
  allowance_WETH,
  allowance_USDT,
}: {
  WETH: any;
  USDT: any;
  AddRemoveLiq: any;
  allowance_WETH: any;
  allowance_USDT: any;
}) {
  const publicClient = await hre.viem.getPublicClient();

  const tx_add_liq = await AddRemoveLiq.write.addLiquidity([
    WETH.address,
    USDT.address,
    allowance_WETH,
    allowance_USDT,
  ]);

  console.log(
    chalk.green("Transaction hash of 'addLiquidity' function: "),
    chalk.gray(tx_add_liq)
  );

  await publicClient.waitForTransactionReceipt({ hash: tx_add_liq });

  console.log(
    chalk.white("Add liquidity function unit test has finished Succesfully!")
  );
  console.log(
    chalk.blue(
      "--------------------------------------------------------------------------"
    ),
    chalk.white(`${n} / ${n} Finished!`)
  );
}
