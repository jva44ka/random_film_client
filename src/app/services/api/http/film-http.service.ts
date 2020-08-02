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

  getAllFilms(): Observable<Film[]> {
    return this.getResource<Film[]>(this.nameOfController);
  }

  getFilmById(id: Guid): Observable<Film> {
    return this.getResource<Film>(`${this.nameOfController}/${id}`);
  }

  getRandomFilms(): Observable<Film> {
    return this.getResource<Film>(`${this.nameOfController}/Random`);
  }

  getSpecifityFilms(): Observable<Film> {
    return this.getResource<Film>(`${this.nameOfController}/Specificity`);
  }
}
