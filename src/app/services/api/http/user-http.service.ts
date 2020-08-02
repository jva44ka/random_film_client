import { Injectable } from '@angular/core';
import {BaseHttpService} from './base-http.service';
import {ConfigurationService} from '../../configuration.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginRequest} from '../../../models/request-models/login-request';
import {LoginResult} from '../../../models/result-models/login-result';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService extends  BaseHttpService {

  private nameOfController: string = 'accounts';

  constructor(httpClient: HttpClient,
              configuration: ConfigurationService) {
    super(httpClient, configuration);
  }

  loginRequest(loginRequest: LoginRequest): Observable<LoginResult> {
    return this.postResource<LoginResult>(`${this.nameOfController}/token`, loginRequest);
  }
}
