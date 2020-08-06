import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DataUploadComponent } from './dataupload.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'; 

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule
  ],
  declarations: [
    DataUploadComponent
  ],
  providers: [
  ],
})
export class ECommerceModule { }
