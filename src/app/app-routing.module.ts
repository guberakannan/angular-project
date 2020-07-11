import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ECommerceComponent } from './pages/e-commerce/e-commerce.component';
import { UserProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  // {
  //   path: 'pages',
  //   canActivate: [AuthGuardService],
  //   loadChildren: () => import('./pages/pages.module')
  //     .then(m => m.PagesModule),
  // },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: ECommerceComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'dashboard',
        component: ECommerceComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [AuthGuardService]
      }
    ]
  },
  
  {
    path: 'user/login',
        component: LoginComponent
  },
  { path: '', redirectTo: 'pages/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/dashboard' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
