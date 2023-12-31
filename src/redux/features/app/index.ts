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
        case 'welcome': state.title = 'Heart Felt Productions Inc. (HFP)'; break;
        case 'home': state.title = 'Home | HFP'; break;
        case 'user': state.title = 'Dashboard | HFP'; break;
        default: state.title = '';
      }
    },
    setToast(state, action: PayloadAction<number>) {
      state.toast = action.payload;
    },
    clearToast(state) {
      state.toast = undefined;
    }
  },
});

export const {
  setPage,
  setToast, clearToast,
} = appSlice.actions;
export default appSlice.reducer;