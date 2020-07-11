import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
const headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Headers', 'Content-Type');
// headers.append('Authorization', this.adminToken);
const headerOptions = { headers: headers, withCredentials: true };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

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
