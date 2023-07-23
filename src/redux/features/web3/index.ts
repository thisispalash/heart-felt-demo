import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as types from './types';

export const initialState: types.Web3State = {
  isGenerated: false,
}

const web3Slice = createSlice({
  name: 'web3',
  initialState,
  reducers: {
    toggleIsGenerated(state) {
      state.isGenerated = !state.isGenerated;
    },
    setIsGenerated(state, action: PayloadAction<boolean>) {
      state.isGenerated = action.payload;
    },
    setWallet(state, action: PayloadAction<{ wallet:types.GeneratedWallet['wallet'] }>) {
      state.wallet = action.payload.wallet;
    },
    setDisplay(state, action: PayloadAction<string>) {
      state.display = action.payload;
    },
  },

});

export default web3Slice.reducer;
export const {
  setWallet,
  setDisplay,
  setIsGenerated,
  toggleIsGenerated,
} = web3Slice.actions;

export * as wallet from './thunks/wallet';
