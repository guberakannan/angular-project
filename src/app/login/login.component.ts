import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  invalidCreds: Boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = new User({
      email: '',
      password: ''
    });
  }

  login() {
    const credentials = {
      user: {
        email: this.user.name,
        password: this.user.password
      }
    };
    this.authService.validate(credentials).subscribe(data => {
      if (data['success']) {
        this.authService.setUserInfo(data['data'].token);
        this.router.navigate(['/user/dashboard']);
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