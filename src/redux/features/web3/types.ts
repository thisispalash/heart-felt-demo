import { type HDNodeWallet } from 'ethers';

export type GeneratedWallet = {
  wallet: HDNodeWallet;
  display: string;
}

export type ConnectedWallet = any; // TODO: Define ConnectedWallet type

export type Web3State = {
  isGenerated: boolean;
} & (GeneratedWallet | ConnectedWallet);