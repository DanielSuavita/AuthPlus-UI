import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: async () =>
      (await import('./auth/auth.module')).AuthPageModule,
  },
  {
    path: 'home',
    loadChildren: async () =>
      (await import('./home/home.module')).HomePageModule,
  },
  {
    path: 'users',
    loadChildren: async () =>
      (await import('./users/users.module')).UsersPageModule,
  },
  {
    path: 'register',
    loadChildren: async () =>
      (await import('./register/register.module')).RegisterPageModule,
  },
  {
    path: 'logs/:username',
    loadChildren: async () =>
      (await import('./logs/logs.module')).LogsPageModule,
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
