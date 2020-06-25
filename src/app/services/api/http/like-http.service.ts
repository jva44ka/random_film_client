import { Injectable } from '@angular/core';
import {BaseHttpService} from './base-http.service';
import {ConfigurationService} from '../../configuration.service';
import {HttpClient} from '@angular/common/http';
import {Guid} from 'guid-typescript';
import {Observable} from 'rxjs';
import {Like} from '../../../models/like';

@Injectable({
  providedIn: 'root'
})
export class LikeHttpService extends  BaseHttpService{
  private nameOfController: string = 'likes';

  constructor(private httpClient: HttpClient,
              protected configuration: ConfigurationService) {
    super(httpClient, configuration);
  }

  getSelfLikeByFilmId(id: Guid): Observable<Like> {
    return this.getResource<Like>(`this.nameOfController/ByFilm/${id}`);
  }

  postSelfLike(like: Like): Observable<Like> {
    return this.postResource<Like>(`${this.nameOfController}`, like);
  }

  deleteSelfLike(filmId: Guid): Observable<Like> {
    return this.deleteResource<Like>(`${this.nameOfController}/ByFilm/${filmId}`);
  }
}
