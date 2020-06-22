import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
const routes: Routes = [
  { path: '', redirectTo: 'user/dashboard', pathMatch: 'full'},
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: '**', component : LandingPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
