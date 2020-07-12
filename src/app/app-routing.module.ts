import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ECommerceComponent } from './pages/e-commerce/e-commerce.component';
import { DummyComponent } from './pages/dummy/dummy.component';
import { ValidationComponent } from './moduleValidation/validate.component';
import { UserProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: ValidationComponent,
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
      },
      {
        path: 'new-page',
        component: DummyComponent,
        canActivate: [AuthGuardService]
      },
    ]
  },
  
  {
    path: 'user/login',
        component: LoginComponent
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
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
