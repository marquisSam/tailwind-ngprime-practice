import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { createItemSuccess } from './actions';
import { DndItems } from './model';

// Define the entity state interface
export interface DnDItemState extends EntityState<DndItems[]> {}

// Create the entity adapter
export const dndItemAdapter = createEntityAdapter<DndItems>();

// Define the initial state
export const DndItemAdapter = createEntityAdapter<DndItems>({
  selectId: (item: DndItems) => item.id,
  sortComparer: (a: DndItems, b: DndItems): number => {
    return a.name.localeCompare(b.name);
  },
});

export interface DndItemsState extends EntityState<DndItems>, Cache {
  loaded: boolean;
}

// Create the reducer using the entity adapter
const initialState: DndItemsState = {
  ids: [],
  entities: {},
  loaded: false,
  add: null,
  addAll: null,
  delete: null,
  keys: null,
  select: null,
  selectAll: null,
};

export const dndItemReducer = createReducer(
  initialState,
  on(createItemSuccess, (state, { item }) => dndItemAdapter.addOne(item, state))
);
