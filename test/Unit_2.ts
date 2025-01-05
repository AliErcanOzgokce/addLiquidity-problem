import UniswapFactory from "../scripts/test_factory";

import chalk from "chalk";
import { n } from "./Test";

export default async function Unit2(tokenA: any, tokenB: any) {
  const [factory] = await UniswapFactory(tokenA.address, tokenB.address);

  console.log(
    chalk.white("\nUniswap Factory unit test has finished Succesfully!")
  );
  console.log(
    chalk.red(
      "--------------------------------------------------------------------------"
    ),
    chalk.white(`2 / ${n}`)
  );

  return [factory];
}
