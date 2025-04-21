import { createActionGroup, props } from '@ngrx/store';
import { Book } from '../utils/book.model';

export const BookActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});


export const BookApiActions = createActionGroup({
    source: "Book API",
    events: {
        "Retrieve Book List": props<{books: ReadonlyArray<Book>}>(),
    }
})
