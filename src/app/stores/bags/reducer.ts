import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as itemActions from './actions';
import { Bag } from './model';
import { BagsActions } from '.';

export const BagsAdapter = createEntityAdapter<Bag>({
  selectId: (item: Bag) => item.id,
  sortComparer: (a: Bag, b: Bag): number => {
    return a.name.localeCompare(b.name);
  },
});

export interface BagsState extends EntityState<Bag> {
  loaded: boolean;
}

const getBagsInitialState = () =>
  BagsAdapter.getInitialState({
    loaded: false,
  });

export const bagsReducer = createReducer(
  getBagsInitialState(),
  on(BagsActions.getBagsSuccess, (state, { items }) => {
    return BagsAdapter.setAll(items, state);
  }),
  on(BagsActions.createBagSuccess, (state, { item }) => {
    return BagsAdapter.addOne(item, state);
  }),
  on(BagsActions.deleteBagSuccess, (state, { data }) => {
    return BagsAdapter.removeOne(data.id, state);
  })
);
