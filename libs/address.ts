import dotenv from "dotenv";
dotenv.config();

import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";

const private_key_prime = process.env.private_key;

export const account = privateKeyToAccount(private_key_prime);
export const address = account.address;

export const prime_wallet = createWalletClient({
  account: account,
  transport: http("http://localhost:8545"),
});
