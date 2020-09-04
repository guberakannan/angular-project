import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { SuperAdminLoginComponent } from './superadminslogin.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'; 

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbMenuModule,
    Ng2SmartTableModule
  ],
  declarations: [
    SuperAdminLoginComponent
  ],
})
export class PagesModule {
}
