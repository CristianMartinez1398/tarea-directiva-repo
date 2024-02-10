import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'Caso-uno',
    loadComponent: () => import('./caso-uno/caso-uno.component').then((m) => m.CasoUnoComponent),
  },
  {
    path: 'Caso-dos',
    loadComponent: () => import('./caso-dos/caso-dos.component').then((m) => m.CasoDosComponent),
  },
  {
    path: 'Caso-tres',
    loadComponent: () => import('./caso-tres/caso-tres.component').then((m) => m.CasoTresComponent),
  },
  {
    path: 'Caso-cuatro',
    loadComponent: () => import('./caso-cuatro/caso-cuatro.component').then((m) => m.CasoCuatroComponent),
  },
  {
    path: 'Caso-cinco',
    loadComponent: () => import('./caso-cinco/caso-cinco.component').then((m) => m.CasoCincoComponent),
  },
  {
    path: 'Caso-seis',
    loadComponent: () => import('./caso-seis/caso-seis.component').then((m) => m.CasoSeisComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
