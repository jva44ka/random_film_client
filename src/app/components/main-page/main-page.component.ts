import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ModalWindowComponent} from '../../shared/components/modal-window/modal-window.component';
import {IModalWindowOptions} from '../../shared/components/modal-window/modal-window-options';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';
import {FilmHttpService} from '../../services/api/http/film-http.service';
import {ThemeService} from '../../services/theme.service';
import {FilmsStoreService} from '../../services/stores/films-store.service';
import Film from '../../models/film';
import {DragScrollComponent} from 'ngx-drag-scroll';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  public loggedIn: boolean = false;
  public isLoading: boolean = false;

  public randomFilms: Film[];
  public sameUsersFilms: Film[];

  constructor(private authService: AuthService,
              private themeService: ThemeService,
              private filmsStore: FilmsStoreService) { }

  ngOnInit(): void {
    this.loggedIn = !!this.authService.getUserId();

    // Если в будущем будет логин в модалке на фоне MainPage,
    // то подписка будет актуальна. Сейчас это просто задел на будущее
    this.subscriptions.push(
      this.authService.loginEvent$.subscribe(res => {
        this.loggedIn = res?.loggedIn || false;
      })
    );

    this.subscriptions.push(
      this.filmsStore.isLoading$.subscribe((res: boolean) => {
        this.randomFilms = this.filmsStore.randomFilms;
        this.sameUsersFilms = this.filmsStore.sameUserFilms;
        this.isLoading = res;

        console.log(this.randomFilms);
        console.log(this.sameUsersFilms);
      })
    );

    this.randomFilms = this.filmsStore.randomFilms;
    this.sameUsersFilms = this.filmsStore.sameUserFilms;
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    for(let sub of this.subscriptions) {
      sub?.unsubscribe();
    }
  }

  filmCardClick(filmName: string): void {
    console.log(filmName);
  }
}
