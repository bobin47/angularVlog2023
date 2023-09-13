import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseAuth, ResponseRegister } from 'src/app/types/auth.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public LoginApi(value: any): Observable<ResponseAuth> {
    return this.httpClient.post<ResponseAuth>(
      'http://localhost:3000/auth/login',
      value
    );
  }

  public RegisterApi(value: any): Observable<ResponseRegister> {
    return this.httpClient.post<ResponseRegister>(
      'http://localhost:3000/auth/register',
      value
    );
  }

  public RefresherTokenApi(refresh_token: string): Observable<any> {
    return this.httpClient.post(
      'http://localhost:3000/auth/refresh_token',
      refresh_token
    );
  }
}
