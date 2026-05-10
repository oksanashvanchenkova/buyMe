import { Routes } from '@angular/router';
import { AddItemComponent } from '../../features/add-item/add-item.component';

export const ADD_ITEM_ROUTES: Routes = [
  {
    path: '',
    component: AddItemComponent,
    children: [
      { path: '', redirectTo: 'category-selection', pathMatch: 'full' },
      {
        path: 'category-selection',
        loadComponent: () =>
          import('../../features/add-item/components/category-selection/category-selection.component').then(
            (m) => m.CategorySelectionComponent,
          ),
      },
      {
        path: 'books',
        loadComponent: () =>
          import('../../features/add-item/components/book-form/book-form.component').then(
            (m) => m.BookFormComponent,
          ),
      },
      {
        path: 'books/:id',
        loadComponent: () =>
          import('../../features/add-item/components/book-form/book-form.component').then(
            (m) => m.BookFormComponent,
          ),
      },
    //   {
    //     path: 'category-selection',
    //     loadComponent: () =>
    //       import('../../features/add-item/components/category-selection/category-selection.component').then(
    //         (m) => m.CategorySelectionComponent,
    //       ),
    //   },
    ],
  },
];
