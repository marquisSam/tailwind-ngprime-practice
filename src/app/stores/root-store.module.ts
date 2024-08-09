import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Import your feature stores and effects here
// import { FeatureStoreModule } from './feature-store/feature-store.module';
// import { FeatureEffects } from './feature-store/feature.effects';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({}), EffectsModule.forRoot([])],
})
export class RootStoreModule {}
