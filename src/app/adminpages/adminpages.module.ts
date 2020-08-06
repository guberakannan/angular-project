import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { AdminPagesComponent } from './adminpages.component';
import { ECommerceModule } from './dataupload/dataupload.module';
import { PagesRoutingModule } from './adminpages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  imports: [
    PagesRoutingModule,
    ReactiveFormsModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    Ng2SmartTableModule
  ],
  declarations: [
    AdminPagesComponent
  ],
})
export class PagesModule {
}
