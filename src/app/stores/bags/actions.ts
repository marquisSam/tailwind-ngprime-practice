import { createAction } from '@ngrx/store';
import { Bag, BagsCreateDTO, BagsUpdateDTO } from './model';

// Get Items
export const getBags = createAction('[Bags] Get Bags');
export const getBagsSuccess = createAction(
  '[Bags] Get Bags Success',
  (items: Bag[]) => ({ items })
);
export const getBagsFailure = createAction(
  '[Bags] Get Bags Failure',
  (error: any) => ({ error })
);

// Create Item
export const createBag = createAction(
  '[Bags] Create Bag',
  (data: BagsCreateDTO) => ({ data })
);
export const createBagSuccess = createAction(
  '[Bags] Create Bag Success',
  (item: Bag) => ({ item })
);
export const createBagFailure = createAction(
  '[Bags] Create Bag Failure',
  (error: any) => ({ error })
);
