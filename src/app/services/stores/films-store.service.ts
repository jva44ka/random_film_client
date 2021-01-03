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
  public knnFilms: Film[];
  public popularFilms: Film[];

  public isLoading$: Subject<boolean> = new Subject<boolean>();
  public liked$: Subject<void> = new Subject<void>();

  constructor(httpClient: HttpClient,
              configuration: ConfigurationService,
              private authService: AuthService) {
    super(httpClient, configuration);

    this.requestSelections();
    this.authService.loginEvent$.subscribe((res: LoginResult) => {
        if (res.loggedIn) {
          this.requestSelections();
        }
      }
    );
    this.liked$.subscribe(() => {
      this.requestSelections();
    });
  }

  private requestSelections(): void {
    this.isLoading$.next(true);
    super.getSelections().subscribe((res: GetSelectionsResult) => {
      this.randomFilms = res.randomFilms;
      this.sameUserFilms = res.sameUserFilms;
      this.popularFilms = res.popularFilms;
      this.knnFilms = res.knnFilms;

      console.log(res);
      this.isLoading$.next(false);
    });
  }
}
