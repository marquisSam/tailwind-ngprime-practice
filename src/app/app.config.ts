import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MessageService } from 'primeng/api';
import { routes } from './app.routes';
import { BagsEffects } from './stores/bags/effects';
import { DndItemEffects } from './stores/items/effects';
import { reducers } from './stores/root-reducer';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingStateService } from './stores/loading-state.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideStore(reducers),
    provideEffects([DndItemEffects, BagsEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      connectInZone: true,
    }),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })),
    MessageService,
  ],
};
