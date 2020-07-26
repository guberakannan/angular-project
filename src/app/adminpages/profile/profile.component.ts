import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import _ from 'lodash'
import { environment } from '../../../environments/environment';
import { User } from '../../user/models/user';
import { MustMatch } from '../../Validations/validator';
import { AdminAuthService } from '../../admin-auth.service';
import { AdminService } from '../../admin.service';

import { Router } from '@angular/router';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})
export class AdminProfileComponent implements OnInit {

  passwordForm: FormGroup;
  user: User;
  submitted = false;
  invalidPassword = false;
  passwordUpdated = false;
  isDisabled = true;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private adminAuthService: AdminAuthService, private router: Router) {
  }

  ngOnInit() {
    let savedDetails = JSON.parse(localStorage.getItem('adminInfo'));

    this.user = new User({
      name: _.upperFirst(savedDetails.name),
      organization: savedDetails.organization,
      designation: savedDetails.designation,
      picture: environment.apiUrl + savedDetails.organization.logo
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

    this.adminService.changePassword(this.passwordForm.value).subscribe(data => {
      if (data['success']) {
        this.isDisabled = false;
        this.passwordUpdated = true;
        this.adminAuthService.deleteAdminInfo();
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
