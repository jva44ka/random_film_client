import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ModalWindowComponent} from '../../shared/components/modal-window/modal-window.component';
import {IModalWindowOptions} from '../../shared/components/modal-window/modal-window-options';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';
import {FilmHttpService} from '../../services/api/http/film-http.service';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit, OnDestroy {

  filmModalsOptions: IModalWindowOptions = {
    width: "70%",
    height: "80%",
    title: "Выбор фильма",
    containsForm: true,
    isConfirmation: true,
    disableClose: false,
    crossMark: true,
  };

  specFilmModalOptions: IModalWindowOptions = {
    ...this.filmModalsOptions,
    title: "Подбор по предпочтениям"
  };

  randFilmModalOptions: IModalWindowOptions = {
    ...this.filmModalsOptions,
    title: "Рандомный подбор"
  };

  loggedIn: boolean = false;
  loginEventSub: Subscription;

  @ViewChild('randomFilmModal')
  randomFilmModal: ModalWindowComponent;

  @ViewChild('specFilmModal')
  specFilmModal: ModalWindowComponent;

  constructor(private authService: AuthService,
              public filmHttpService: FilmHttpService,
              private themeService: ThemeService) { }

  ngOnInit(): void {
    this.loggedIn = !!this.authService.getUserId();

    console.log(this);
    // Если в будущем будет логин в модалке на фоне MainPage,
    // то подписка будет актуальна. Сейчас это просто задел на будущее
    this.loginEventSub = this.authService.loginEvent$.subscribe(res => {
      this.loggedIn = res?.loggedIn || false;
    })
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this.loginEventSub.unsubscribe();
  }

  selectRandomFilm(): void {
    this.randomFilmModal?.openDialog();
  }

  selectSpecFilm(): void {
    this.specFilmModal?.openDialog();
  }
}
