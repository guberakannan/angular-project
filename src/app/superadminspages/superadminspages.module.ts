import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { SuperAdminsPagesComponent } from './superadminspages.component';
import { PagesRoutingModule } from './superadminspages-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'; 

@NgModule({
  imports: [
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbMenuModule,
    Ng2SmartTableModule
  ],
  declarations: [
    SuperAdminsPagesComponent
  ],
})
export class PagesModule {
}
