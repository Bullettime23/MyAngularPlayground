import { createReducer, on } from '@ngrx/store';
import { BookActions } from './book.actions';

const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(BookActions.removeBook, (state, { bookId }) =>
    state.filter((id) => id !== bookId)
  ),
  on(BookActions.addBook, (state, { bookId }) => {
    if (state.findIndex((id) => id === bookId) > -1) return state;

    return [...state, bookId];
  })
);
