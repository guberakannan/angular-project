import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { AdminPagesComponent } from './adminpages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './adminpages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    PagesRoutingModule,
    ReactiveFormsModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule
  ],
  declarations: [
    AdminPagesComponent
  ],
})
export class PagesModule {
}
