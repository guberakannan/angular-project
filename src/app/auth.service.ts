import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router , NavigationEnd, NavigationStart} from '@angular/router';
import { Location } from "@angular/common";

const headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Headers', 'Content-Type');
// headers.append('Authorization', this.adminToken);
const headerOptions = { headers: headers, withCredentials: true };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  route: string;
  constructor(private http : HttpClient, private router: Router, private location: Location) {

    // router.events.subscribe(val => {
    //   if(val instanceof NavigationEnd){
    //     if(val.url != "/user/login" && val.url != "/user/profile"){
    //       let permitted = JSON.parse(localStorage.getItem('userInfo')).modules;
    //       if(permitted.indexOf(val.url) > -1){
    //         //
    //       }else{
    //        this.router.navigate(['/dashboard']);
    //       }
    //     }
    //   }
    // });
   }

   isAuthenticated() {

    let userData = localStorage.getItem('userInfo')
    if(userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }

   setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  deleteUserInfo(){
    localStorage.removeItem('userInfo');
  }

   validate(credentials) {
    return this.http.post(environment.apiUrl + '/api/users/login', credentials, headerOptions);
  }

  newuser(credentials){
    return this.http.post(environment.apiUrl + '/api/users/new-user', credentials);
  }
}
