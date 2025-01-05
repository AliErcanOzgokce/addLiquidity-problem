import chalk from "chalk";
import { n } from "./Test";

export default async function Unit4(AddRemoveLiq: any, WETH: any, USDT: any) {
  const data = await AddRemoveLiq.read.getPair([WETH.address, USDT.address]);
  console.log(chalk.yellow("Pair address: "), chalk.gray(data));

  console.log(
    chalk.white(
      "\nGet Pair of WETH - USDT, unit test has finished Succesfully!"
    )
  );
  console.log(
    chalk.red(
      "--------------------------------------------------------------------------"
    ),
    chalk.white(`5 / ${n}`)
  );
}
