import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminPagesComponent } from './adminpages.component';

const routes: Routes = [{
  path: '',
  component: AdminPagesComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
