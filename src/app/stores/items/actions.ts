import { createAction } from '@ngrx/store';
import { DndItem, DndItemCreateDTO, DndItemUpdateDTO } from './model';

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

//update item
export const updateItem = createAction(
  '[Items] Update Item',
  (item: DndItemUpdateDTO, id: string) => ({ item, id })
);
export const updateItemSuccess = createAction(
  '[Items] Update Item Success',
  (item: DndItem) => ({ item })
);
export const updateItemFailure = createAction(
  '[Items] Update Item Failure',
  (error: any) => ({ error })
);
