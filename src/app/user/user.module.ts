import { UserRoutingModule } from './user-routing';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,

  ],
  declarations: [
    UserComponent,
    LoginComponent
  ],
  exports: [UserComponent],
  providers: []
})

export class UserModule { }
