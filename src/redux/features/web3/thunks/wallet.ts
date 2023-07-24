import { ethers } from 'ethers';
import { AppThunk } from '@/redux/store';

import { setWallet, setDisplay, setIsGenerated } from '..';

export const connectWallet =
  (): AppThunk =>
    async (dispatch: any) => {
      dispatch(setIsGenerated(false));
      // TODO
    };

export const setupListeners =
  (): AppThunk =>
    async (dispatch: any) => {
      dispatch(setIsGenerated(false));
      // TODO
    };

export const generateWallet =
  (): AppThunk =>
    async (dispatch: any) => {
      dispatch(setIsGenerated(true));
      
      console.log('generating new wallet...');
      const wallet = ethers.Wallet.createRandom(); // creates a new wallet from mnemonic
      
      const addr = await wallet.getAddress();
      const display = addr.slice(0,6) + '...' + addr.slice(-4);
      const mnemonic = wallet.mnemonic!.phrase;
      const privateKey = wallet.privateKey;
      
      dispatch(setWallet({ wallet }));
      dispatch(setDisplay(display));
    };