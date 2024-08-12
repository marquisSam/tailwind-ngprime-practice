import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, finalize, map, switchMap } from 'rxjs';
import { ItemActions } from '.';
import { DndItems } from './model';
import { itemsManagerService } from './service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class DndItemEffects {
  constructor(
    private actions$: Actions,
    private entityService: itemsManagerService
  ) {}
  getItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.getItems),
      switchMap(() => {
        console.log('getItems$ effect');
        return this.entityService
          .getAll()
          .pipe(map((items: DndItems[]) => ItemActions.getItemsSuccess(items)));
      })
    )
  );
}

//   createItemSuccess$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ItemActions.createItemSuccess),
//       tap((action) => {
//         // Add any success logic here
//       })
//     )
//   );

//   createItemFailure$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ItemActions.createItemFailure),
//       tap((action) => {
//         // Add any failure logic here
//       })
//     )
//   );

//   constructor(private actions$: Actions, store: Store) {
//     super(store);
//   }
// }
