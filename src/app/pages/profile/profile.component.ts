import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import _ from 'lodash'
import {environment} from '../../../environments/environment';
import { User } from '../../user/models/user';
import { MustMatch } from '../../Validations/validator';
import { AuthService } from '../../auth.service';
import { UserService } from '../../user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})
export class UserProfileComponent implements OnInit {
 
  passwordForm: FormGroup;
  user:User;
  submitted = false;
  invalidPassword = false;
  passwordUpdated = false;
  isDisabled = true;

  constructor(private formBuilder: FormBuilder, private userService : UserService, private authService: AuthService, private router : Router) {
   }

  ngOnInit() {
    let savedDetails = JSON.parse(localStorage.getItem('userInfo'));

    this.user = new User({
      name : _.upperFirst(savedDetails.name),
      organization : savedDetails.organization,
      designation: savedDetails.designation,
      picture : environment.apiUrl + savedDetails.organization.logo
    });

    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      currentPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });

  }

  get f() { return this.passwordForm.controls; }


  changePassword() {
    
    this.submitted = true;
    this.invalidPassword = false;
    if (this.passwordForm.invalid) {
      return;
  }
  
    this.userService.changePassword(this.passwordForm.value).subscribe(data => {
      if (data['success']) {
        this.isDisabled = false;
          this.passwordUpdated = true;
        this.authService.deleteUserInfo();
        setTimeout(() => {
          this.router.navigate(['/user/login']);
        }, 3000)
      } else {
        this.invalidPassword = true;
      }
    },
      error => {
        this.invalidPassword = true;
      }
    );
  }
}
