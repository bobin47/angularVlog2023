import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { getAccessTokenFormLC } from 'src/app/utils/auth.utils';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  access_token = getAccessTokenFormLC()
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let requestClone = request;
    if (this.access_token) {
      console.log(this.access_token)
      requestClone = request.clone({
        headers: request.headers.append(
          'Authorization',
          `Bearer ${this.access_token}`
        ),
      });
    }
    return next.handle(requestClone);
  }
}