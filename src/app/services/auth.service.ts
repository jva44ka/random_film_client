import { Injectable } from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {LoginResult} from '../models/result-models/login-result';
import {LoginRequest} from '../models/request-models/login-request';
import {UserHttpService} from './api/http/user-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private nameOfAccessToken: string = 'user_access_token';
  private nameOfUserName: string = 'user_name';
  private nameOfUserId: string = 'user_id';

  private accessToken: string;
  private userName: string;
  private userId: string;

  public loginEvent$: Subject<LoginResult> = new Subject<LoginResult>();

  constructor(private userHttpService: UserHttpService) {}

  getAccessToken(): string{
    if(!this.accessToken)
      this.accessToken = localStorage.getItem(this.nameOfAccessToken);
    return this.accessToken;
  }

  getUserName(): string{
    if(!this.userName)
      this.userName = localStorage.getItem(this.nameOfUserName);
    return this.userName;
  }

  getUserId(): string{
    if(!this.userId)
      this.userId = localStorage.getItem(this.nameOfUserId);
    return this.userId;
  }

  login(
    login: string,
    password: string
  ): Subscription {
    return this.userHttpService.loginRequest(new LoginRequest(login, password)).subscribe(
      (resp: LoginResult) => {
        if (resp.loggedIn) {
          localStorage.setItem(this.nameOfAccessToken, resp.accessToken);
          localStorage.setItem(this.nameOfUserName, login);
          localStorage.setItem(this.nameOfUserId, resp.userId);
        }
        this.loginEvent$.next(resp);
      },
      (e) => {
        this.loginEvent$.next();
      }
    );
  }

  logout(): void {
    localStorage.removeItem(this.nameOfAccessToken);
    localStorage.removeItem(this.nameOfUserName);
    localStorage.removeItem(this.nameOfUserId);
    this.loginEvent$.next();
  }
}
