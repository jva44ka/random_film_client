import { Injectable } from '@angular/core';
import Film from '../../models/film';
import {FilmHttpService} from '../api/http/film-http.service';
import {GetSelectionsResult} from '../../models/result-models/get-selections-result';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from '../configuration.service';
import {Subject} from 'rxjs';
import {AuthService} from '../auth.service';
import {LoginResult} from '../../models/result-models/login-result';

@Injectable({
  providedIn: 'root'
})
export class FilmsStoreService extends FilmHttpService {
  public randomFilms: Film[];
  public sameUserFilms: Film[];
  public popularFilms: Film[];

  public isLoading$: Subject<boolean> = new Subject<boolean>();

  constructor(httpClient: HttpClient,
              configuration: ConfigurationService,
              private authService: AuthService) {
    super(httpClient, configuration);

    this.requestFilms();
    this.authService.loginEvent$.subscribe((res: LoginResult) =>
      this.requestFilms()
    );
  }

  requestFilms(): void {
    this.isLoading$.next(true);
    super.getSelections().subscribe((res: GetSelectionsResult) => {
      this.randomFilms = res.randomFilms;
      this.sameUserFilms = res.sameUserFilms;
      this.popularFilms = res.popularFilms;
      console.log(res);
      this.isLoading$.next(false);
    });
  }
}
