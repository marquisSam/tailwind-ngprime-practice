/* eslint-disable no-console */
import { Action, ActionReducerMap } from '@ngrx/store';
import { dndItemReducer, DndItemsState } from './items/reducer';

export interface RootState {
  dndItems: DndItemsState;
}

export const reducers: ActionReducerMap<RootState, Action> = {
  dndItems: dndItemReducer,
};
