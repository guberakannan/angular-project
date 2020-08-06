import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { AdminGuardService } from './admin-guard.service';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './adminlogin/adminlogin.component';
import { PagesComponent } from './pages/pages.component';
import { AdminPagesComponent } from './adminpages/adminpages.component';
import { ECommerceComponent } from './pages/e-commerce/e-commerce.component';
import { DataUploadComponent } from './adminpages/dataupload/dataupload.component';
import { DynamicTablesComponent } from './adminpages/dynamictables/dynamictables.component';
import { UserProfileComponent } from './pages/profile/profile.component';
import { AdminProfileComponent } from './adminpages/profile/profile.component';

export const routes: Routes = [
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'admins/login',
    component: AdminLoginComponent
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
    path: 'admins',
    component: AdminPagesComponent,
    children: [
      {
        path: 'profile',
        component: AdminProfileComponent,
        canActivate: [AdminGuardService]
      },
      {
        path: 'dynamic-tables',
        component: DynamicTablesComponent,
        canActivate: [AdminGuardService]
      },
      {
        path: 'upload',
        component: DataUploadComponent,
        canActivate: [AdminGuardService]
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
