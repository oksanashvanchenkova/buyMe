import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'registration',
    loadComponent: () => import('./layout/registration/registration.component').then((c) => c.RegistrationComponent),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./layout/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
