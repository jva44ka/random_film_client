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

  private _loaded: boolean = false;
  public get loaded(): boolean {
    return this._loaded;
  }

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
  }

  public requestSelections(): void {
    this.isLoading$.next(true);
    super.getSelections().subscribe((res: GetSelectionsResult) => {
      this.randomFilms = res.randomFilms;
      this.sameUserFilms = res.sameUserFilms;
      this.popularFilms = res.popularFilms;
      this.knnFilms = res.knnFilms;

      console.log(res);
      this._loaded = true;
      this.isLoading$.next(false);
    });
  }

  public clearSelections(): void {
    this.randomFilms = [];
    this.sameUserFilms = [];
    this.popularFilms = [];
    this.knnFilms = [];
    this._loaded = false;
  }
}
