import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BookListComponent } from './components/book-list/book-list.component';
import { BookCollectionComponent } from './components/book-collection/book-collection.component';
import { GoogleBooksService } from './services/books.service';
import { selectBookCollection, selectBooks } from './state/book.selector';
import { BookActions, BookApiActions } from './state/book.actions';
import { Book } from './utils/book.model';

@Component({
  selector: 'app-ngrx',
  imports: [BookListComponent, BookCollectionComponent, CommonModule],
  templateUrl: './ngrx.component.html',
  styleUrl: './ngrx.component.scss',
})
export class NgrxComponent implements OnInit {
  private store = inject(Store);
  private booksApi = inject(GoogleBooksService);

  public books$ = this.store.select(selectBooks) as Observable<
    ReadonlyArray<Book>
  >;
  public bookCollection$ = this.store.select(
    selectBookCollection
  ) as Observable<ReadonlyArray<Book>>;

  ngOnInit(): void {
    this.booksApi.getBooks().subscribe({
      next: (books) =>
        this.store.dispatch(BookApiActions.retrieveBookList({ books })),
    });
  }

  onAdd(bookId: string) {
    this.store.dispatch(BookActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BookActions.removeBook({ bookId }));
  }
}
