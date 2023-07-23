import { ethers } from 'ethers';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { setWallet, setDisplay, setIsGenerated } from '..';
import { AppThunk } from '@/redux/store';

export const setupListeners = createAsyncThunk(
  'web3/wallet/setup-listeners',
  async (dispatch: any) => {
    dispatch(setIsGenerated(false));
  }
);

export const getWallet = createAsyncThunk(
  'web3/wallet/get',
  async (dispatch: any) => {
    dispatch(setIsGenerated(false));
  }
);

export const generateWallet =
  (): AppThunk =>
    async (dispatch: any) => {
      dispatch(setIsGenerated(true));
      console.log('generating new wallet...');
      const wallet = ethers.Wallet.createRandom();
      dispatch(setWallet({ wallet }));
      const addr = await wallet.getAddress();
      dispatch(setDisplay(`${addr.slice(0,6)}...${addr.slice(-4)}`));
    };