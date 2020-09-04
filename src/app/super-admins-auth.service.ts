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
export class SuperAdminsAuthService {

  route: string;
  constructor(private http: HttpClient) {
  }

  isAuthenticated() {

    let adminData = localStorage.getItem('superadminInfo')
    if (adminData && JSON.parse(adminData)) {
      return true;
    }
    return false;
  }

  setSuperAdminInfo(admin) {
    localStorage.setItem('superadminInfo', JSON.stringify(admin));
  }

  deleteSuperAdminInfo() {
    localStorage.removeItem('superadminInfo');
  }

  validate(credentials) {
    return this.http.post(environment.apiUrl + '/api/super-admins/login', credentials, headerOptions);
  }
}
