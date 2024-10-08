import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, finalize, map, of, switchMap, tap } from 'rxjs';
import { ItemActions } from '.';
import { DndItem } from './model';
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
        this.loadingStateService.itemIsGetting.set(true);
        return this.entityService.getAll().pipe(
          map(({data}: ApiResponse<DndItem[]>) => ItemActions.getItemsSuccess(data)),
          catchError((error: HttpErrorResponse) =>
            of(ItemActions.getItemsFailure({ error: error.message }))
          ),
          finalize(() => this.loadingStateService.itemIsGetting.set(false))
        );
      })
    )
  );

  createItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.createItem),
      switchMap(({ item }: { item: DndItem }) => {
        this.loadingStateService.itemIsCreating.set(true);
        return this.entityService.create(item).pipe(
          map(({data}: ApiResponse<DndItem>) => ItemActions.createItemSuccess(data)),
          catchError((error: HttpErrorResponse) =>
            of(ItemActions.createItemFailure({ error: error.message }))
          ),
          finalize(() => this.loadingStateService.itemIsCreating.set(false))
        )
      })
    )
  );

  createItemSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.createItemSuccess),
      tap(({ item }: { item: DndItem }) => {
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
