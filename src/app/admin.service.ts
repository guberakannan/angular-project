import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  returnsHeader() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    const token = JSON.parse(localStorage.getItem('adminInfo')).token;
    headers = headers.set('authorization', 'Token ' + token);
    return headers;
  }

  changePassword(data){
    return this.http.put(environment.apiUrl + '/api/admins/change-password', data, { headers: this.returnsHeader(), withCredentials: true });
  }

  modulePermission(data){
    return this.http.post(environment.apiUrl + '/api/admins/module-permission', {module : data}, { headers: this.returnsHeader(), withCredentials: true });
  }

}