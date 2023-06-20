import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from './interface/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<LoginResponse> {
    const loginUrl = `${this.apiUrl}/user/api/login`;

    return this.http.post<LoginResponse>(loginUrl, { username, password });
  }
}
