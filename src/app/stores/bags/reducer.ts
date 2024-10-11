import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { BagsActions } from '.';
import { Bag } from './model';

export const BagsAdapter = createEntityAdapter<Bag>({
  selectId: (item: Bag) => item.id,
  sortComparer: (a: Bag, b: Bag): number =>
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
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
  }),
  on(BagsActions.updateBagSuccess, (state, { item }) => {
    return BagsAdapter.updateOne({ id: item.id, changes: item }, state);
  })
);
