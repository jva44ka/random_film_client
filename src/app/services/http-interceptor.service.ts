import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  private get headers(): {
    [name: string]: string | string[];
  } {
    if (this.authService.getAccessToken())
      return { Authorization: `Bearer ${this.authService.getAccessToken()}` };
    return {};
  }

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.injectToken(req));
  }

  injectToken(request: HttpRequest<object>): HttpRequest<object> {
    return request.clone({
      setHeaders: this.headers
    });
  }
}
