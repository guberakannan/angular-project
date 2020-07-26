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

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { AdminProfileComponent } from './profile.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule
  ],
  declarations: [
    AdminProfileComponent,
  ],
  providers: [
  ],
})
export class AdminProfileModule { }
