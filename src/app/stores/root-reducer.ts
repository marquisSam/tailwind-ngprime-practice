/* eslint-disable no-console */
import { Action, ActionReducerMap } from '@ngrx/store';
import { DndItemsState } from './items/adapter';
import { dndItemReducer } from './items/reducer';

export interface RootState {
  dndItems: DndItemsState;
}

export const reducers: ActionReducerMap<RootState, Action> = {
  dndItems: dndItemReducer,
};
