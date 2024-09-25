import { createAction } from '@ngrx/store';
import { DndItem } from './model';

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
  (item: DndItem) => ({ item })
);
export const createItemSuccess = createAction(
  '[Items] Create Item Success',
  (item: DndItem) => ({ item })
);
export const createItemFailure = createAction(
  '[Items] Create Item Failure',
  (error: any) => ({ error })
);
