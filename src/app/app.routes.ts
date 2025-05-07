import { Routes } from '@angular/router';
import DashboardPageComponent from './gifs/pages/dashboard-page/dashboard-page.component';

export const routes: Routes = [
  {
    path:'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component'),
  },
  {
    path:'trending',
    loadComponent: () =>
      import('./gifs/pages/trending-page/trending-page.component'),
  },
  {
    path:'search',
    loadComponent: () =>
      import('./gifs/pages/search-page/search-page.component'),
  },
  {
    path:'**',
    redirectTo: 'dashboard',
  },
  //NO SE PUEDE DEJAR { } vacias porque sino no carga las rutas
];
