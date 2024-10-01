import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((x) => x.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (x) => x.ContactComponent
      ),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./pages/users/users.component').then((x) => x.default),
  },
  {
    path: 'user/:id',
    loadComponent: () =>
      import('./pages/user/user.component').then((x) => x.default),
  },
  {
    path: 'frameworks',
    loadComponent: () =>
      import('./pages/layout/layout.component').then((x) => x.default),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/framework-list/framework-list.component').then(
            (x) => x.FrameworkListComponent
          ),
      },
      {
        path: 'detalles',
        loadComponent: () =>
          import('./components/frameworks/frameworks.component').then(
            (x) => x.FrameworksComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
