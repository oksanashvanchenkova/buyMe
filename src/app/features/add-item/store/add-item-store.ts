import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

import { inject } from '@angular/core';
import { ProductItemsHttp } from 'src/app/core/api/product-items-http';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { initialAddItemSlice } from './add-item.slice';
import { BooksHttp } from 'src/app/core/api/books-http';
import { addBookFormBuilder } from './add-item-form.builders';

export const AddItemStore = signalStore(
  { providedIn: 'root' },
  withState(initialAddItemSlice),
  withProps((_) => {
    const productItemsHttpService = inject(ProductItemsHttp);
    const booksHttpService = inject(BooksHttp);
    return {
      _productService: productItemsHttpService,
      _booksService: booksHttpService,
    };
  }),
  withMethods((store) => ({
    selectCategory: (categoryId: number) => {
      let newForm: any;
      switch (categoryId) {
        case 1:
          newForm = addBookFormBuilder();
          break;
        // Тут додавайте інші кейси:
        // case 2:
        //   newForm = addClothesFormBuilder();
        //   break;
        default:
          newForm = null;
          break;
      }

      // Оновлюємо стан
      patchState(store, (state) => ({
        selectedCategory: categoryId,
        bookForm: {
          ...state.bookForm,
          id: categoryId,
          form: newForm,
        },
      }));
    },

    // Метод для очищення форми (якщо потрібно)
    resetForm: () => {
      const currentForm = store.bookForm.form();
      if (currentForm) {
        currentForm.reset();
      }
    },
  })),
);
