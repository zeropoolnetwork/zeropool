import { ZeroPoolNetwork } from 'zeropool-lib';
// @ts-ignore
import * as HDWalletProvider from 'truffle-hdwallet-provider';
import * as fs from 'fs';
import * as path from 'path';
import { Mnemonic, NetworkConfig } from './app.config';

const hdWallet = new HDWalletProvider(Mnemonic, NetworkConfig.rpc, 0, 1);

const transactionJsonPath = path.join(__dirname, './../circuitsCompiled/transaction.json');
const transactionJson = fs.readFileSync(transactionJsonPath);

const proverKeyPath = path.join(__dirname, './../circuitsCompiled/transaction_pk.bin');
// @ts-ignore
const proverKey = fs.readFileSync(proverKeyPath).buffer;

export default new ZeroPoolNetwork(
  NetworkConfig.contract,
  // @ts-ignore
  hdWallet,
  Mnemonic,
  transactionJson,
  proverKey,
);