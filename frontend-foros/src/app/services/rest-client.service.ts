import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class RestClientService {
  tipo = '';
  nombre = '';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const formHeaders = new HttpHeaders();
    formHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    const formParams = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post('http://localhost:8080/login', null, {
      headers: formHeaders,
      params: formParams,
      withCredentials: true,
    });
  }

  logout() {
    return this.http.post('http://localhost:8080/logout', '', {
      withCredentials: true,
    });
  }

  soyAdmin() {
    return this.http.get('http://localhost:8080/admin/soyAdmin', {
      withCredentials: true,
    });
  }

  soyUser() {
    return this.http.get('http://localhost:8080/user/soyUser', {
      withCredentials: true,
    });
  }
}
