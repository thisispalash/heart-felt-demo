import { AnyAction, ThunkAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit';

import web3Reducer from './slices/web3Slice';
import appReducer from './slices/appSlice';

import { useDispatch, useSelector } from 'react-redux';
// import { createWrapper } from 'next-redux-wrapper';


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
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
export const useAppDispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>;
// export const wrappedStore = createWrapper<typeof store>(store);