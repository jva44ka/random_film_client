import { Injectable } from '@angular/core';
import {BaseHttpService} from './base-http.service';
import {ConfigurationService} from '../../configuration.service';
import {HttpClient} from '@angular/common/http';
import Film from '../../../models/film';
import {Observable} from 'rxjs';
import {Guid} from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class FilmHttpService extends  BaseHttpService {
  private nameOfController: string = 'films';

  constructor(httpClient: HttpClient,
              configuration: ConfigurationService) {
    super(httpClient, configuration);
  }

  getAllFilms(forUser: string = ''): Observable<Film[]> {
    let params: string = '';
    if(forUser)
      params += `?forUserId=${forUser}`;
    return this.getResource<Film[]>(this.nameOfController + params);
  }

  getFilmById(id: Guid, forUserId: string = ''): Observable<Film> {
    let params: string = '';
    if(forUserId)
      params += `?forUserId=${forUserId}`;
    return this.getResource<Film>(`${this.nameOfController}/${id}${params}`);
  }

  getRandomFilms(): Observable<Film> {
    return this.getResource<Film>(`${this.nameOfController}/Random`);
  }

  getSpecifityFilms(): Observable<Film> {
    return this.getResource<Film>(`${this.nameOfController}/Specificity`);
  }
}
