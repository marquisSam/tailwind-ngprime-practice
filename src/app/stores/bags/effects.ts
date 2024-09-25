import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, finalize, map, of, switchMap, tap } from 'rxjs';
import { BagsActions } from '.';
import { ApiResponse } from '../global-interfaces';
import { LoadingStateService } from '../loading-state.service';
import { Bag, BagsCreateDTO } from './model';
import { BagsService } from './service';
import { MessageService } from 'primeng/api';

@Injectable()
export class BagsEffects {
  constructor(
    private messageService: MessageService,
    private actions$: Actions,
    private loadingStateService: LoadingStateService,
    private bagsService: BagsService
  ) {}

  getBags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BagsActions.getBags),
      switchMap(() => {
        this.loadingStateService.setLoading('getItems', true);
        return this.bagsService.getAll().pipe(
          map(({data}: ApiResponse<Bag[]>) => {
            console.log('effect', data);
            return BagsActions.getBagsSuccess(data);
          }),
          catchError((error: HttpErrorResponse) =>
            of(BagsActions.getBagsFailure({ error: error.message }))
          ),
          finalize(() => this.loadingStateService.setLoading('getItems', false))
        );
      })
    )
  );

  createBag$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BagsActions.createBag),
      switchMap(({ item }: { item: BagsCreateDTO }) => {
        this.loadingStateService.setLoading('createItem', true);
        return this.bagsService.create(item).pipe(
          map(({data}: ApiResponse<Bag>) => BagsActions.createBagSuccess(data)),
          catchError((error: HttpErrorResponse) =>
            of(BagsActions.createBagFailure({ error: error.message }))
          ),
          finalize(() => this.loadingStateService.setLoading('createItem', false))
        )
      })
    )
  );

  createBagSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BagsActions.createBagSuccess),
      tap(({ item }: { item: Bag }) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `Bag created successfully : ${item.name}` });
      })
    ),
    { dispatch: false }
  );
}
