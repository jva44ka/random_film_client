import { Injectable } from '@angular/core';
import {BaseHttpService} from './base-http.service';
import {ConfigurationService} from '../../configuration.service';
import {HttpClient} from '@angular/common/http';
import Film from '../../../models/film';
import {Observable} from 'rxjs';
import {Guid} from 'guid-typescript';
import {LikeOrDislikeRequest} from '../../../models/request-models/like-or-dislike-request';

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

  getFilmById(id: Guid): Observable<Film> {
    return this.getResource<Film>(`${this.nameOfController}/${id}`);
  }

  getFilmByIdForUser(id: Guid): Observable<Film> {
    return this.getResource<Film>(`${this.nameOfController}/${id}/forUser`);
  }

  getRandomFilms(): Observable<Film> {
    return this.getResource<Film>(`${this.nameOfController}/Random`);
  }

  getSpecifityFilms(): Observable<Film> {
    return this.getResource<Film>(`${this.nameOfController}/Specificity`);
  }
}
