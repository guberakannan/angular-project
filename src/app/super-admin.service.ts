import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  constructor(private http: HttpClient) { }

  returnsHeader() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    const token = JSON.parse(localStorage.getItem('superadminInfo')).token;
    headers = headers.set('authorization', 'Token ' + token);
    return headers;
  }

  multipartHeader() {
    let headers = new HttpHeaders();
    const token = JSON.parse(localStorage.getItem('superadminInfo')).token;
    headers = headers.set('authorization', 'Token ' + token);
    return headers;
  }

  changePassword(data) {
    return this.http.put(environment.apiUrl + '/api/super-admins/change-password', data, { headers: this.returnsHeader(), withCredentials: true });
  }

  getOrg(){
    return this.http.get(environment.apiUrl + '/api/super-admins/organizations', { headers: this.returnsHeader(), withCredentials: true });
  }

  createOrg(data){
    return this.http.put(environment.apiUrl + '/api/super-admins/change-password', data, { headers: this.returnsHeader(), withCredentials: true });
  }

  updateOrg(data){
    return this.http.put(environment.apiUrl + '/api/super-admins/change-password', data, { headers: this.returnsHeader(), withCredentials: true });
  }

  deleteOrg(data){
    return this.http.put(environment.apiUrl + '/api/super-admins/change-password', data, { headers: this.returnsHeader(), withCredentials: true });
  }
}