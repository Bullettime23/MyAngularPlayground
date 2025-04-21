import { createReducer, on } from '@ngrx/store';
import { Book } from '../utils/book.model';
import { BookApiActions } from './book.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BookApiActions.retrieveBookList, (_state, { books }) => books)
);
