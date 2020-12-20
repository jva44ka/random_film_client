import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Film from '../../../models/film';
import {FilmHttpService} from '../../../services/api/http/film-http.service';
import {Router} from '@angular/router';
import {Guid} from 'guid-typescript';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'films-select-preview',
  templateUrl: './films-select-preview.component.html',
  styleUrls: ['./films-select-preview.component.scss']
})
export class FilmsSelectPreviewComponent implements OnInit {

  @Input() isSpecifityFilm: boolean = false;
  @Input() isRandomFilm: boolean = false;
  @Output() filmSelectedEvent: EventEmitter<void> = new EventEmitter<void>();

  films: Film[];
  isLodaing: boolean = false;

  prevFilmAvailable: boolean = false;
  nextFilmAvailable: boolean = false;
  currentFilmNum: number = 0;

  constructor(private filmsService: FilmHttpService,
              private authService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    /*this.isLodaing = true;
    if(this.isSpecifityFilm)
      this.filmsService.getSpecifityFilms().subscribe(res => {
        this.films = res;
        this.isLodaing = false;
        this.calculateButtonsAvailable();
      });
    else if(this.isRandomFilm)
      this.filmsService.getRandomFilms(this.authService.getUserId()).subscribe(res => {
        this.films = res;
        this.isLodaing = false;
        this.calculateButtonsAvailable();
      });
    else
      throw Error('Unknow selecting film function');*/
  }

  prevFilm(): void {
    /*this.currentFilmNum--;
    this.calculateButtonsAvailable();*/
  }

  nextFilm(): void {
    /*this.currentFilmNum++;
    this.calculateButtonsAvailable();*/
  }

  calculateButtonsAvailable(): void {
    //left
    /*this.prevFilmAvailable = this.films && this.films.length > 0 && this.currentFilmNum > 0; //if(this.films > 0 && this.currentFilmNum > 0)*/

    //right
    /*this.nextFilmAvailable = this.films && this.films.length > 0 && this.currentFilmNum < (this.films.length - 1);*/
  }

  selectFilm(filmId: Guid): void {
    /*this.router.navigate(['film', filmId]);
    this.filmSelectedEvent.emit();*/
  }
}
