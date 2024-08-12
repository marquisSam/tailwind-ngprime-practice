import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as itemActions from './actions';
import { DndItems } from './model';

export const DndItemAdapter = createEntityAdapter<DndItems>({
  selectId: (item: DndItems) => item.id,
  sortComparer: (a: DndItems, b: DndItems): number => {
    return a.name.localeCompare(b.name);
  },
});

export interface DndItemsState extends EntityState<DndItems> {
  loaded: boolean;
}

const getAssetAllocationInitialState = () =>
  DndItemAdapter.getInitialState({
    loaded: false,
  });

export const dndItemReducer = createReducer(
  getAssetAllocationInitialState(),
  on(itemActions.getItemsSuccess, (state, { items }) => {
    console.log('reducer', items);
    return DndItemAdapter.setAll(items, state);
  }),
  on(itemActions.createItemSuccess, (state, { item }) =>
    DndItemAdapter.addOne(item, state)
  )
);
