import { createAction } from '@ngrx/store';
import { DndItems } from './model';

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
