import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../../features/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'catalog/:category',
        loadComponent: () => import('../../features/catalog/catalog.component').then(m => m.CatalogComponent)
      },
      {
        path: 'products-list/:category/:type',
        loadComponent: () => import('../../shared/products-list/products-list.component').then(m => m.ProductsListComponent)
      },
      {
        path: 'category',
        loadComponent: () =>
          import('../../features/categories/categories.component').then((m) => m.CategoriesComponent),
      },
      {
        path: 'add',
        loadComponent: () =>
          import('../../features/add-item/add-item.component').then((m) => m.AddItemComponent),
      },
      {
        path: 'favorite',
        loadComponent: () =>
          import('../../features/favorite/favorite.component').then((m) => m.FavoriteComponent),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('../../features/cart/cart.component').then((m) => m.CartComponent),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
