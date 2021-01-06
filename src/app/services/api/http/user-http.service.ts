import { Injectable } from '@angular/core';
import {BaseHttpService} from './base-http.service';
import {ConfigurationService} from '../../configuration.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginRequest} from '../../../models/request-models/login-request';
import {LoginResult} from '../../../models/result-models/login-result';
import {CreateAccountRequest} from '../../../models/request-models/create-account-request';
import {CreateAccountResult} from '../../../models/result-models/create-account-result';
import User from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService extends  BaseHttpService {

  private nameOfController: string = 'accounts';

  constructor(httpClient: HttpClient,
              configuration: ConfigurationService) {
    super(httpClient, configuration);
  }

  getSelfAccount(): Observable<User> {
    return this.getResource<User>(`${this.nameOfController}/self`);
  }

  loginRequest(loginRequest: LoginRequest): Observable<LoginResult> {
    return this.postResource<LoginResult>(`${this.nameOfController}/login`, loginRequest);
  }

  registerRequest(request: CreateAccountRequest): Observable<CreateAccountResult> {
    return this.postResource<CreateAccountResult>(`${this.nameOfController}`, request);
  }
}
