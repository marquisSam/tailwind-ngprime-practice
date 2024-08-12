import { DndItemAdapter, DndItemsState } from './reducer';
import { createFeatureSelector } from '@ngrx/store';

export const selectDndItemsState =
  createFeatureSelector<DndItemsState>('dndItems');

export const { selectAll: selectDndItems } =
  DndItemAdapter.getSelectors(selectDndItemsState);
