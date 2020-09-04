import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SuperAdminsPagesComponent } from './superadminspages.component';

const routes: Routes = [{
  path: '',
  component: SuperAdminsPagesComponent,
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
