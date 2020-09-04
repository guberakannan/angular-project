import { Component, OnInit } from '@angular/core';
import { SuperAdminsAuthService } from '../super-admins-auth.service';
import { Router } from '@angular/router';
import { User } from '../user/models/user';


@Component({
  selector: 'superadmins-login',
  templateUrl: './superadminslogin.component.html',
  styleUrls: ['./superadminslogin.component.css']
})
export class SuperAdminLoginComponent implements OnInit {

  user: User;
  invalidCreds: Boolean = false;
  constructor(private superAdminAuthService: SuperAdminsAuthService, private router: Router) { }

  ngOnInit() {
    this.user = new User({
      name: '',
      password: ''
    });
  }

  login() {
    this.invalidCreds = false;
    const credentials = {
      user: {
        name: this.user.name,
        password: this.user.password
      }
    };
    this.superAdminAuthService.validate(credentials).subscribe(data => {      
        if (data['success']) {        
          this.superAdminAuthService.setSuperAdminInfo(data['data']);
          this.router.navigate(['/super-admins/organizations']);
        } else {
          this.invalidCreds = true;
        }
    },
      error => {
        this.invalidCreds = true;
      }
    );
  }
}