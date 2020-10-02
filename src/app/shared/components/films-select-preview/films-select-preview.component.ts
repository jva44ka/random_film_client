import {Component, Input, OnInit} from '@angular/core';
import Film from '../../../models/film';
import {FilmHttpService} from '../../../services/api/http/film-http.service';
import {Router} from '@angular/router';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'films-select-preview',
  templateUrl: './films-select-preview.component.html',
  styleUrls: ['./films-select-preview.component.scss']
})
export class FilmsSelectPreviewComponent implements OnInit {

  @Input() isSpecifityFilm: boolean = false;
  @Input() isRandomFilm: boolean = false;

  films: Film[];
  isLodaing: boolean = false;

  previewHeight: number = 500;

  get images(): string[] {
    return this.films.map((film: Film) => film.preview);
  }

  constructor(private filmsService: FilmHttpService,
              private router: Router) { }

  ngOnInit(): void {
    this.isLodaing = true;
    if(this.isSpecifityFilm)
      this.filmsService.getSpecifityFilms().subscribe(res => {
        this.films = res;
        this.isLodaing = false;
      });
    else if(this.isRandomFilm)
      this.filmsService.getRandomFilms().subscribe(res => {
        this.films = res;
        this.isLodaing = false;
      });
    else
      throw Error('Unknow selecting film function');
  }

  selectFilm(filmId: Guid): void {
    this.router.navigate(['film', filmId]);
  }
}
