import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './root-reducer';
import { DndItemEffects } from './items/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // StoreModule.forRoot(reducers, {}),
    // EffectsModule.forRoot([DndItemEffects]),
  ],
})
export class RootStoreModule {}
