import hre from "hardhat";
import chalk from "chalk";

import Unit1 from "./Unit_1";
import Unit2 from "./Unit_2";
import Unit3 from "./Unit_3";
import Unit4 from "./Unit_4";
import Unit5 from "./Unit_5";
import Unit6 from "./Unit_6";
import Unit7 from "./Unit_7";

export const n = 7;

async function test() {
  const publicClient = await hre.viem.getPublicClient();

  // Unit 1
  const [tokenA, tokenB, WETH, USDT] = await Unit1();

  // Unit 2
  const [factory] = await Unit2(tokenA, tokenB);

  // Unit 3
  const [router] = await Unit3(factory, WETH);

  // Unit 4

  const [AddRemoveLiq] = await Unit4(router, factory, WETH, USDT);

  // Unit 5

  await Unit5(AddRemoveLiq, WETH, USDT);

  // Unit 6

  const [allowance_WETH, allowance_USDT] = await Unit6({
    AddRemoveLiq,
    WETH,
    amount: 10_000n,
    USDT,
  });

  // Unit 7 - Final

  await Unit7({
    WETH,
    USDT,
    AddRemoveLiq,
    allowance_WETH,
    allowance_USDT,
  });
}

test()
  .then(() => {
    process.exit(0);
  })
  .catch(console.error);
