import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, finalize, map, of, switchMap, tap } from 'rxjs';
import { ItemActions } from '.';
import { DndItem, DndItemCreateDTO } from './model';
import { itemsManagerService } from './service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingStateService } from '../loading-state.service';
import { MessageService } from 'primeng/api';
import { ApiResponse } from '../global-interfaces';

@Injectable()
export class DndItemEffects {
  constructor(
    private messageService: MessageService,
    private actions$: Actions,
    private loadingStateService: LoadingStateService,
    private entityService: itemsManagerService
  ) { }

  getItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.getItems),
      switchMap(() => {
        this.loadingStateService.itemIsGetting.set(true);
        return this.entityService.getAll().pipe(
          map(({ data }: ApiResponse<DndItem[]>) => ItemActions.getItemsSuccess(data)),
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
      switchMap(({ item }: { item: DndItemCreateDTO }) => {
        this.loadingStateService.itemIsCreating.set(true);
        return this.entityService.create(item).pipe(
          delay(1000),
          map(({ data }: ApiResponse<DndItem>) => ItemActions.createItemSuccess(data)),
          catchError((error: HttpErrorResponse) =>
            of(ItemActions.createItemFailure({ error: error.message }))
          ),
          finalize(() => this.loadingStateService.itemIsCreating.set(false))
        )
      })
    )
  );

  deleteItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.deleteItem),
      switchMap(({ id }: { id: string }) => {
        this.loadingStateService.itemIsDeleting.set(true);
        return this.entityService.delete(id).pipe(
          delay(1000),
          map(({ data }: ApiResponse<DndItem>) => ItemActions.deleteItemSuccess(data)),
          catchError((error: HttpErrorResponse) =>
            of(ItemActions.deleteItemFailure({ error: error.message }))
          ),
          finalize(() => this.loadingStateService.itemIsDeleting.set(false))
        )
      })
    )
  );


  createItemSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.createItemSuccess),
      tap(({ item }: { item: DndItem }) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `Item ${item.name} created successfully` });
      })
    ),
    { dispatch: false }
  );

  deleteItemSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.deleteItemSuccess),
      tap(({ item }: { item: DndItem }) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `Item ${item.name} deleted successfully` });
      })
    ),
    { dispatch: false }
  );
}
