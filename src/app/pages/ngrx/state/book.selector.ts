import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "../utils/book.model";

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
    selectBooks,
    selectCollectionState,
    (books, collection) => {
        return collection.map((id)=>books.find((book)=> book.id == id));
    }
)