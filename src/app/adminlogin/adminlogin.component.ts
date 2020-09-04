import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../admin-auth.service';
import { Router } from '@angular/router';
import { User } from '../user/models/user';


@Component({
  selector: 'admin-login',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminLoginComponent implements OnInit {

  user: User;
  invalidCreds: Boolean = false;
  constructor(private adminAuthService: AdminAuthService, private router: Router) { }

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
    this.adminAuthService.validate(credentials).subscribe(data => {      
        if (data['success']) {        
          this.adminAuthService.setAdminInfo(data['data']);
          this.router.navigate(['/admins/users-data']);
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