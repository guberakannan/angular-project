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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; 
import { ThemeModule } from '../../@theme/theme.module';
import { UserDetailsComponent } from './usersdata.component';
import { NgSelectModule } from '@ng-select/ng-select';

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
    NgbModule,
    NbListModule,
    NbProgressBarModule,
    NgSelectModule
  ],
  declarations: [
    UserDetailsComponent
  ],
  providers: [
  ],
})
export class ECommerceModule { }
