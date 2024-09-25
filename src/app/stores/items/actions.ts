import { createAction } from '@ngrx/store';
import { DndItems } from './model';

// Get Items
export const getItems = createAction('[Items] Get Items');
export const getItemsSuccess = createAction(
  '[Items] Get Items Success',
  (items: DndItems[]) => ({ items })
);
export const getItemsFailure = createAction(
  '[Items] Get Items Failure',
  (error: any) => ({ error })
);

// Create Item
export const createItem = createAction(
  '[Items] Create Item',
  (item: DndItems) => ({ item })
);
export const createItemSuccess = createAction(
  '[Items] Create Item Success',
  (item: DndItems) => ({ item })
);
export const createItemFailure = createAction(
  '[Items] Create Item Failure',
  (error: any) => ({ error })
);
