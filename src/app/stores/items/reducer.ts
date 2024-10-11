import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as itemActions from './actions';
import { DndItem } from './model';

export const DndItemAdapter = createEntityAdapter<DndItem>({
  selectId: (item: DndItem) => item.id,
  sortComparer: (a: DndItem, b: DndItem): number =>
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
});

export interface DndItemsState extends EntityState<DndItem> {
  loaded: boolean;
}

const getAssetAllocationInitialState = () =>
  DndItemAdapter.getInitialState({
    loaded: false,
  });

export const dndItemReducer = createReducer(
  getAssetAllocationInitialState(),
  on(itemActions.getItemsSuccess, (state, { items }) => {
    return DndItemAdapter.setAll(items, state);
  }),
  on(itemActions.createItemSuccess, (state, { item }) =>
    DndItemAdapter.addOne(item, state)
  ),
  on(itemActions.deleteItemSuccess, (state, { item }) =>
    DndItemAdapter.removeOne(item.id, state)
  ),
  on(itemActions.updateItemSuccess, (state, { item }) =>
    DndItemAdapter.updateOne({ id: item.id, changes: item }, state)
  ),
);
