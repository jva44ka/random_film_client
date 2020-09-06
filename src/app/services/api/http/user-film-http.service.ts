import { Injectable } from '@angular/core';
import {BaseHttpService} from './base-http.service';
import {ConfigurationService} from '../../configuration.service';
import {HttpClient} from '@angular/common/http';
import {Guid} from 'guid-typescript';
import {Observable} from 'rxjs';
import UserFilm from '../../../models/user-film';
import {LikeOrDislikeRequest} from '../../../models/request-models/like-or-dislike-request';
import Film from '../../../models/film';

@Injectable({
  providedIn: 'root'
})
export class UserFilmHttpService extends  BaseHttpService{
  private nameOfController: string = 'likes';

  constructor(httpClient: HttpClient,
              configuration: ConfigurationService) {
    super(httpClient, configuration);
  }

  getSelfLikeByFilmId(id: Guid): Observable<UserFilm> {
    return this.getResource<UserFilm>(`${this.nameOfController}/ByFilm/${id}`);
  }

  postSelfLike(like: UserFilm): Observable<UserFilm> {
    return this.postResource<UserFilm>(`${this.nameOfController}`, like);
  }

  likeOrDislike(req: LikeOrDislikeRequest): Observable<boolean> {
    return this.putResource<boolean>(`${this.nameOfController}/${req.filmId}`, req);
  }

  deleteSelfLike(filmId: Guid): Observable<UserFilm> {
    return this.deleteResource<UserFilm>(`${this.nameOfController}/ByFilm/${filmId}`);
  }
}
