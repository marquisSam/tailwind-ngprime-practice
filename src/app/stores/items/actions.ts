import { createAction } from '@ngrx/store';
import { DndItems } from './model';

export const getItems = createAction('[Items] Create Item');
export const getItemsSuccess = createAction(
  '[Items] Create Item sucess',
  (items: DndItems[]) => ({ items })
);
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
