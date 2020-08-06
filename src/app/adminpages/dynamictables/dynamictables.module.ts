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
import { DynamicTablesComponent } from './dynamictables.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    Ng2SmartTableModule
  ],
  declarations: [
    DynamicTablesComponent
  ],
  providers: [
  ],
})
export class ECommerceModule { }
