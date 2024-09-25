import { createFeatureSelector } from '@ngrx/store';
import { BagsAdapter, BagsState } from './reducer';

export const selectBagsState =
  createFeatureSelector<BagsState>('bags');

export const { selectAll: selectBags } =
  BagsAdapter.getSelectors(selectBagsState);
