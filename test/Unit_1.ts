import chalk from "chalk";
import CreateToken from "../scripts/test_token";

import { n } from "./Test";

export default async function Unit1() {
  const [tokenA, tokenB, WETH, USDT] = await CreateToken();

  console.log(chalk.white("\nToken unit test has finished Succesfully!"));
  console.log(
    chalk.red(
      "--------------------------------------------------------------------------"
    ),
    chalk.white(`1 / ${n}`)
  );

  return [tokenA, tokenB, WETH, USDT];
}
