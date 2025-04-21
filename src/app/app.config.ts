import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { collectionReducer } from './pages/ngrx/state/collection.reducer';
import { booksReducer } from './pages/ngrx/state/book.reducer';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideStore({
      books: booksReducer,
      collection: collectionReducer,
    }),
    provideHttpClient(),
  ],
};
