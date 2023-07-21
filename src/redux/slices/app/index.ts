import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import * as types from './types';

export const initialState: any = {} // todo define types

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<string>) {
      state.page = action.payload;
      switch (action.payload) {
        case 'home': state.title = 'Home'; break;
        case 'user': state.title = 'Dashboard'; break;
        default: state.title = '';
      }
    }
  },
});

export const {
  setPage,
} = appSlice.actions;
export default appSlice.reducer;