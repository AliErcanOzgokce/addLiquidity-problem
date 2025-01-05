import UniswapRouter from "../scripts/test_router";

import chalk from "chalk";
import { n } from "./Test";

export default async function Unit3(factory: any, WETH: any) {
  const [router] = await UniswapRouter(factory.address, WETH.address);

  console.log(
    chalk.white("\nUniswap Router unit test has finished Succesfully!")
  );
  console.log(
    chalk.red(
      "--------------------------------------------------------------------------"
    ),
    chalk.white(`3 / ${n}`)
  );

  return [router];
}
