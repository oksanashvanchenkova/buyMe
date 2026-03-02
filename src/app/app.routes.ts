import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./layout/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'registration',
    loadComponent: () => import('./layout/registration/registration.component').then((c) => c.RegistrationComponent),
  },
  {
    path: '',
    loadChildren: () => import('./layout/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
