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

  createOrg(data: string, logo: File){
    const token = JSON.parse(localStorage.getItem('superadminInfo')).token;
    let headers = new HttpHeaders();
    headers = headers.set('authorization', 'Token ' + token);
    headers = headers.set('name', data);
    let formData: FormData = new FormData();
    formData.append('name', data);
    formData.append('file', logo);
    return this.http.post(environment.apiUrl + '/api/super-admins/organizations', formData, { headers:headers, withCredentials: true });
  }

  updateOrg(data, logo: File){
    const token = JSON.parse(localStorage.getItem('superadminInfo')).token;
    let headers = new HttpHeaders();
    headers = headers.set('authorization', 'Token ' + token);
    headers = headers.set('name', data.name);
    headers = headers.set('id', data.id);
    let formData: FormData = new FormData();
    formData.append('file', logo);
    formData.append('_id', data.id);
    formData.append('name', data.name);
    return this.http.put(environment.apiUrl + '/api/super-admins/organizations', formData, { headers: headers, withCredentials: true });
  }

  deleteOrg(data){
    return this.http.delete(environment.apiUrl + '/api/super-admins/organizations/'+data.id, { headers: this.returnsHeader(), withCredentials: true });
  }

  createAdmin(data) {
    return this.http.post(environment.apiUrl + '/api/admins', {user : data}, { headers: this.returnsHeader(), withCredentials: true });
  }

  updateAdmin(data) {
    return this.http.put(environment.apiUrl + '/api/admins', data, { headers: this.returnsHeader(), withCredentials: true });
  }

  deleteAdmin(data) {
    return this.http.delete(environment.apiUrl + '/api/admins/' + data.id, { headers: this.returnsHeader(), withCredentials: true });
  }

  admins() {  
    return this.http.get(environment.apiUrl + '/api/admins', { headers: this.returnsHeader(), withCredentials: true });
  }
}