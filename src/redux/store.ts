import { AnyAction, ThunkAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import web3Reducer from './features/web3';
import appReducer from './features/app';


export const store = configureStore({
  reducer: {
    app: appReducer,
    web3: web3Reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['web3/wallet/generate'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.wallet'],
        // Ignore these paths in the state
        ignoredPaths: ['web3.wallet'],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>