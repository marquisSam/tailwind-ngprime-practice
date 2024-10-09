import { createAction } from '@ngrx/store';
import { DndItem, DndItemCreateDTO } from './model';

// Get Items
export const getItems = createAction('[Items] Get Items');
export const getItemsSuccess = createAction(
  '[Items] Get Items Success',
  (items: DndItem[]) => ({ items })
);
export const getItemsFailure = createAction(
  '[Items] Get Items Failure',
  (error: any) => ({ error })
);

// Create Item
export const createItem = createAction(
  '[Items] Create Item',
  (item: DndItemCreateDTO) => ({ item })
);
export const createItemSuccess = createAction(
  '[Items] Create Item Success',
  (item: DndItem) => ({ item })
);
export const createItemFailure = createAction(
  '[Items] Create Item Failure',
  (error: any) => ({ error })
);

// Delete Item
export const deleteItem = createAction(
  '[Items] Delete Item',
  (id: string) => ({ id })
);
export const deleteItemSuccess = createAction(
  '[Items] Delete Item Success',
  (item: DndItem) => ({ item })
);
export const deleteItemFailure = createAction(
  '[Items] Delete Item Failure',
  (error: any) => ({ error })
);

