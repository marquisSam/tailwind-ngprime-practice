import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, finalize, map, of, switchMap, tap } from 'rxjs';
import { ItemActions } from '.';
import { DndItems } from './model';
import { itemsManagerService } from './service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingStateService } from '../loading-state.service';
import { MessageService } from 'primeng/api';
import { ApiResponse } from '../global-interfaces';

@Injectable()
export class DndItemEffects {
  constructor(
    // private messageService: MessageService,
    private actions$: Actions,
    private loadingStateService: LoadingStateService,
    private entityService: itemsManagerService
  ) {}

  getItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.getItems),
      switchMap(() => {
        this.loadingStateService.setLoading('getItems', true);
        return this.entityService.getAll().pipe(
          map(({data}: ApiResponse<DndItems[]>) => ItemActions.getItemsSuccess(data)),
          catchError((error: HttpErrorResponse) =>
            of(ItemActions.getItemsFailure({ error: error.message }))
          ),
          finalize(() => this.loadingStateService.setLoading('getItems', false))
        );
      })
    )
  );

  createItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.createItem),
      switchMap(({ item }: { item: DndItems }) => {
        this.loadingStateService.setLoading('createItem', true);
        return this.entityService.create(item).pipe(
          map(({data}: ApiResponse<DndItems>) => ItemActions.createItemSuccess(data)),
          catchError((error: HttpErrorResponse) =>
            of(ItemActions.createItemFailure({ error: error.message }))
          ),
          finalize(() => this.loadingStateService.setLoading('createItem', false))
        )
      })
    )
  );

  createItemSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.createItemSuccess),
      tap(({ item }: { item: DndItems }) => {
        // this.messageService.add({ severity: 'success', summary: 'Success', detail: `Item ${item.name} created successfully` });
      })
    ),
    { dispatch: false }
  );
}


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
