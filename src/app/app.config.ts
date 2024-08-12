import { ApplicationConfig, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { reducers } from './stores/root-reducer';
import { provideEffects } from '@ngrx/effects';
import { DndItemEffects } from './stores/items/effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  provideStoreDevtools,
  StoreDevtoolsModule,
} from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideStore(reducers),
    provideEffects([DndItemEffects]),
    provideStoreDevtools({
      maxAge: 100,
      connectInZone: true,
    }),
  ],
};
