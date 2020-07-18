import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ECommerceComponent } from './pages/e-commerce/e-commerce.component';
import { UserProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: '**',
        component: ECommerceComponent,
        canActivate: [AuthGuardService]
      }
    ]
  },
  {
    path: 'user',
    component: PagesComponent,
    children: [
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [AuthGuardService]
      }
    ]
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
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
