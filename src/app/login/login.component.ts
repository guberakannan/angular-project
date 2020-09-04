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
      name: '',
      password: ''
    });
  }

  login() {
    const credentials = {
      user: {
        name: this.user.name,
        password: this.user.password
      }
    };
    this.authService.validate(credentials).subscribe(data => {
      if (data['success']) {        
        if(data['data']['modules'].length){
          let landingPage = data['data']['modules'];
          this.authService.setUserInfo(data['data']);
          this.router.navigate([landingPage[0].link]);
        }else{
          this.router.navigate(['/user/login']);
        }

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