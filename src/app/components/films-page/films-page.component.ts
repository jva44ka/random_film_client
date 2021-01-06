import { Component, OnInit } from '@angular/core';
import Film from '../../models/film';
import {FilmHttpService} from '../../services/api/http/film-http.service';
import {AuthService} from '../../services/auth.service';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.scss']
})
export class FilmsPageComponent implements OnInit {
  films: Film[];
  isLoading: boolean = false;

  constructor(private filmHttpService: FilmHttpService,
              private authService: AuthService,
              private themeService: ThemeService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.filmHttpService.getAllFilms(this.authService.getUserId()).subscribe(
      films => {
        this.films = films;
        this.isLoading = false;
      },
      (err) => {
        console.error(err);
        this.isLoading = false;
      }
    );
  }
}
