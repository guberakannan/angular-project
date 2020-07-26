import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

const headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Headers', 'Content-Type');

const headerOptions = { headers: headers, withCredentials: true };

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  route: string;
  constructor(private http: HttpClient) {
  }

  isAuthenticated() {

    let adminData = localStorage.getItem('adminInfo')
    if (adminData && JSON.parse(adminData)) {
      return true;
    }
    return false;
  }

  setAdminInfo(admin) {
    localStorage.setItem('adminInfo', JSON.stringify(admin));
  }

  deleteAdminInfo() {
    localStorage.removeItem('adminInfo');
  }

  validate(credentials) {
    return this.http.post(environment.apiUrl + '/api/admins/login', credentials, headerOptions);
  }

  newuser(credentials) {
    return this.http.post(environment.apiUrl + '/api/admins/new-user', credentials);
  }
}
