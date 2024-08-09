// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { select, Store } from '@ngrx/store';
// import {
//   catchError,
//   finalize,
//   map,
//   switchMap,
//   tap,
//   withLatestFrom,
// } from 'rxjs/operators';
// import { ItemActions } from '.';
// import { HttpErrorResponse } from '@angular/common/http';

// @Injectable()
// export class AssetAllocationEffects {
//   createItem$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ItemActions.createItem),
//       withLatestFrom(this.store.pipe(select(selectBuildingId))),
//       switchMap(([action, buildingId]) => {
//         return this.entityService.create(action.payload, buildingId).pipe(
//           map((response) => ItemActions.createItemSuccess({ item: response })),
//           catchError((res: HttpErrorResponse) =>
//             this.filterError(res, ItemActions.createItemFailure)
//           ),
//           finalize(() => {
//             // Add any finalization logic here
//           })
//         );
//       })
//     )
//   );

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
