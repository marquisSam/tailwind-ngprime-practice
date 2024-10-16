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

// Delete Bag
export const deleteBag = createAction(
  '[Bags] Delete Bag',
  (guid: string) => ({ guid })
);
export const deleteBagSuccess = createAction(
  '[Bags] Delete Bag Success',
  (data: Bag) => ({ data })
);
export const deleteBagFailure = createAction(
  '[Bags] Delete Bag Failure',
  (error: any) => ({ error })
);

// Update Bag
export const updateBag = createAction(
  '[Bags] Update Bag',
  (data: BagsUpdateDTO, id: string) => ({ data, id })
);
export const updateBagSuccess = createAction(
  '[Bags] Update Bag Success',
  (item: Bag) => ({ item })
);
export const updateBagFailure = createAction(
  '[Bags] Update Bag Failure',
  (error: any) => ({ error })
);
