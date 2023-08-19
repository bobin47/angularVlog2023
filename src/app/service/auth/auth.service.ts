import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public LoginApi(value: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/auth/login', value);
  }

  public RegisterApi(value: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/auth/register', value);
  }

  public RefresherTokenApi(refresh_token: string): Observable<any> {
    return this.httpClient.post(
      'http://localhost:3000/auth/refresh_token',
      refresh_token
    );
  }
}
