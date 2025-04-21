import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../utils/book.model';

@Injectable({
  providedIn: 'root',
})
export class GoogleBooksService {
  private http = inject(HttpClient);

  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
  }
}
