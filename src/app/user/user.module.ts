import { UserRoutingModule } from './user-routing';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { SidebarModule } from 'ng-sidebar';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SidebarModule.forRoot()

  ],
  declarations: [
    UserComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent
  ],
  exports: [UserComponent],
  providers: []
})

export class UserModule { }
