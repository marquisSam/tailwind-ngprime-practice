import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, finalize, map, of, switchMap, tap, timeInterval } from 'rxjs';
import { BagsActions } from '.';
import { ApiResponse } from '../global-interfaces';
import { LoadingStateService } from '../loading-state.service';
import { Bag, BagsCreateDTO, BagsUpdateDTO } from './model';
import { BagsService } from './service';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class BagsEffects {
  constructor(
    private messageService: MessageService,
    private actions$: Actions,
    private loadingStateService: LoadingStateService,
    private bagsService: BagsService,
    private spinner: NgxSpinnerService
  ) {}

  getBags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BagsActions.getBags),
      switchMap(() => {
        this.loadingStateService.bagIsGetting.set(true);
        return this.bagsService.getAll().pipe(
          delay(1000),
          map(({data}: ApiResponse<Bag[]>) => {
            return BagsActions.getBagsSuccess(data);
          }),
          catchError((error: HttpErrorResponse) =>
            of(BagsActions.getBagsFailure({ error: error.message }))
          ),
          finalize(() => this.loadingStateService.bagIsGetting.set(false))
        );
      })
    )
  );

  createBag$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BagsActions.createBag),
      switchMap(({ data }: { data: BagsCreateDTO }) => {
        this.loadingStateService.bagIsCreating.set(true);
        return this.bagsService.create(data).pipe(
          delay(1000),
          map(({data}: ApiResponse<Bag>) => BagsActions.createBagSuccess(data)),
          catchError((error: HttpErrorResponse) =>
            of(BagsActions.createBagFailure({ error: error.message }))
          ),
          finalize(() => this.loadingStateService.bagIsCreating.set(false))
        )
      })
    )
  );

  deleteBag$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BagsActions.deleteBag),
      switchMap(({ guid }: { guid: string }) => {
        this.loadingStateService.bagIsDeleting.set(true);
        this.spinner.show(guid);
        return this.bagsService.delete(guid).pipe(
          delay(1000),
          map(({data}: ApiResponse<Bag>) => BagsActions.deleteBagSuccess(data)),
          catchError((error: HttpErrorResponse) =>
            of(BagsActions.deleteBagFailure({ error: error.message }))
          ),
          finalize(() => this.spinner.hide(guid))
        )
      })
    )
  );

  updateBag$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BagsActions.updateBag),
      switchMap(({ data, id }: { data: BagsUpdateDTO, id: string }) => {
        this.loadingStateService.bagIsUpdating.set(true);
        return this.bagsService.update(data, id).pipe(
          delay(1000),
          map(({data}: ApiResponse<Bag>) => BagsActions.updateBagSuccess(data)),
          catchError((error: HttpErrorResponse) =>
            of(BagsActions.updateBagFailure({ error: error.message }))
          ),
          finalize(() => this.loadingStateService.bagIsUpdating.set(false))
        )
      })
    )
  );

  deleteBagSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BagsActions.deleteBagSuccess),
      tap(({ data }: { data: Bag }) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `Bag deleted successfully : ${data.name}` });
      })
    ),
    { dispatch: false }
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
