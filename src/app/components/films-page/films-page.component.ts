import { Component, OnInit } from '@angular/core';
import Film from '../../models/film';
import {FilmHttpService} from '../../services/api/http/film-http.service';

@Component({
  selector: 'films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.scss']
})
export class FilmsPageComponent implements OnInit {

  films: Film[];

  constructor(private filmHttpService: FilmHttpService) { }

  ngOnInit(): void {
    this.filmHttpService.getAllFilms().subscribe(films => {
      this.films = films;
    });
  }

}
