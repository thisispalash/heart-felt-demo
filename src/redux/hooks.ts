import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { RootState } from '@/redux/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>;