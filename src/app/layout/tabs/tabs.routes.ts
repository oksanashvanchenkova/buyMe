import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
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
        loadComponent: () => import('../../features/products-list/products-list.component').then(m => m.ProductsListComponent)
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
