import { Injectable } from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {LoginResult} from '../models/result-models/login-result';
import {AuthHttpService} from './api/http/auth-http.service';
import {LoginRequest} from '../models/request-models/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private nameOfAccessToken: string = 'user_access_token';
  private nameOfUserName: string = 'user_name';
  private nameOfUserId: string = 'user_id';

  public loginEvent$: Subject<LoginResult> = new Subject<LoginResult>();

  constructor(private authHttpService: AuthHttpService) {
  }

  getAccessToken(): string{
    return localStorage.getItem(this.nameOfAccessToken);
  }

  getUserName(): string{
    return localStorage.getItem(this.nameOfUserName);
  }

  getUserId(): string{
    return localStorage.getItem(this.nameOfUserId);
  }

  login(
    login: string,
    password: string
  ): Subscription {
    return this.authHttpService.loginRequest(new LoginRequest(login, password)).subscribe(
      (resp: LoginResult) => {
        if (resp.succeeded) {
          localStorage.setItem(this.nameOfAccessToken, resp.accessToken);
          localStorage.setItem(this.nameOfUserName, resp.userName);
          localStorage.setItem(this.nameOfUserId, resp.userId);
        }
        this.loginEvent$.next(resp);
      },
      (e) => {
        this.loginEvent$.next();
      }
    );
  }
}
