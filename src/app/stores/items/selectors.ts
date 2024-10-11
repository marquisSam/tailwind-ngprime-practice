import { DndItemAdapter, DndItemsState } from './reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectDndItemsState =
  createFeatureSelector<DndItemsState>('dndItems');

export const { selectAll: selectDndItems } =
  DndItemAdapter.getSelectors(selectDndItemsState);

export const selectItemById = (id: string) => createSelector(selectDndItems, (items) => items.find((item) => item.id === id));
