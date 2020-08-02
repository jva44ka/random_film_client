import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from '../../configuration.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseHttpService {
  constructor(
    protected httpClient: HttpClient,
    protected configuration: ConfigurationService
  ) {}

  protected getResource<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(`${this.configuration.webApiUrl}/${url}`);
  }

  protected postResource<T>(url: string, body: object): Observable<T> {
    return this.httpClient.post<T>(`${this.configuration.webApiUrl}/${url}`, body);
  }

  protected putResource<T>(url: string, object: object): Observable<T> {
    return this.httpClient.put<T>(`${this.configuration.webApiUrl}/${url}`, object);
  }

  protected deleteResource<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(`${this.configuration.webApiUrl}/${url}`);
  }
}
