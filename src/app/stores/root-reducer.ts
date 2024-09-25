/* eslint-disable no-console */
import { Action, ActionReducerMap } from '@ngrx/store';
import { dndItemReducer, DndItemsState } from './items/reducer';
import { bagsReducer, BagsState } from './bags/reducer';

export interface RootState {
  dndItems: DndItemsState;
  bags: BagsState;
}

export const reducers: ActionReducerMap<RootState, Action> = {
  dndItems: dndItemReducer,
  bags: bagsReducer,
};
