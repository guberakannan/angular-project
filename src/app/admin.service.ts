import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  returnsHeader() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    const token = JSON.parse(localStorage.getItem('adminInfo')).token;
    headers = headers.set('authorization', 'Token ' + token);
    return headers;
  }

  multipartHeader() {
    let headers = new HttpHeaders();
    const token = JSON.parse(localStorage.getItem('adminInfo')).token;
    headers = headers.set('authorization', 'Token ' + token);
    return headers;
  }

  changePassword(data) {
    return this.http.put(environment.apiUrl + '/api/admins/change-password', data, { headers: this.returnsHeader(), withCredentials: true });
  }

  modulePermission(data) {
    return this.http.post(environment.apiUrl + '/api/admins/module-permission', { module: data }, { headers: this.returnsHeader(), withCredentials: true });
  }

  getModules() {
    return this.http.get(environment.apiUrl + '/api/admins/modules', { headers: this.returnsHeader(), withCredentials: true });
  }

  createUser(data) {
    return this.http.post(environment.apiUrl + '/api/users', {user : data}, { headers: this.returnsHeader(), withCredentials: true });
  }

  updateUser(data) {
    return this.http.put(environment.apiUrl + '/api/users', data, { headers: this.returnsHeader(), withCredentials: true });
  }

  deleteUser(data) {
    return this.http.delete(environment.apiUrl + '/api/users/' + data.id, { headers: this.returnsHeader(), withCredentials: true });
  }

  createModule(data){
    return this.http.post(environment.apiUrl + '/api/admins/modules', data, { headers: this.returnsHeader(), withCredentials: true });
  }

  updateModule(data) {
    return this.http.put(environment.apiUrl + '/api/admins/modules', data, { headers: this.returnsHeader(), withCredentials: true });
  }

  deleteModule(data) {
    return this.http.delete(environment.apiUrl + '/api/admins/modules/' + data.id, { headers: this.returnsHeader(), withCredentials: true });
  }

  users(data) {
    switch (data.type) {
      case 'GET':
        return this.http.get(environment.apiUrl + '/api/users', { headers: this.returnsHeader(), withCredentials: true });
        break;
    }
  }

  dynamicSchema(data) {
    switch (data.type) {
      case 'CREATE':
        return this.http.post(environment.apiUrl + '/api/admins/schema', data.data, { headers: this.returnsHeader(), withCredentials: true });
        break;

      case 'GET':
        return this.http.get(environment.apiUrl + '/api/admins/schema', { headers: this.returnsHeader(), withCredentials: true });
        break;

      case 'GETACTIVE':
        return this.http.get(environment.apiUrl + '/api/admins/schema/active', { headers: this.returnsHeader(), withCredentials: true });
        break;

      case 'DELETE':
        return this.http.delete(environment.apiUrl + '/api/admins/schema/' + data.data.schemaIdentifier, { headers: this.returnsHeader(), withCredentials: true });
        break;

    }
  }

  dataSheet(data: string, datasheet: File) {
    const token = JSON.parse(localStorage.getItem('adminInfo')).token;
    let headers = new HttpHeaders();
    headers = headers.set('authorization', 'Token ' + token);
    headers = headers.set('name', data);
    let formData: FormData = new FormData();
    formData.append('name', data);
    formData.append('file', datasheet);
    return this.http.post(environment.apiUrl + '/api/admins/table-data', formData, { headers: headers, withCredentials: true });
  }

  dynamicSchemaUpdate(data) {
    return this.http.put(environment.apiUrl + '/api/admins/schema', data.data, { headers: this.returnsHeader(), withCredentials: true });
  }

}