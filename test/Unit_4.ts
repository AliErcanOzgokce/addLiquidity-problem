import addRemoveLiq from "../scripts/test_AddRemove";

import chalk from "chalk";
import { n } from "./Test";

export default async function Unit4(
  router: any,
  factory: any,
  WETH: any,
  USDT: any
) {
  const [AddRemoveLiq] = await addRemoveLiq(
    router.address,
    factory.address,
    WETH.address,
    USDT.address
  );

  console.log(
    chalk.white("\nAdd Remove Contract unit test has finished Succesfully!")
  );
  console.log(
    chalk.red(
      "--------------------------------------------------------------------------"
    ),
    chalk.white(`4 / ${n}`)
  );

  return [AddRemoveLiq];
}
