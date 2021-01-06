import { Component, OnInit } from '@angular/core';
import {ThemeService} from '../../services/theme.service';
import Film from '../../models/film';
import {FilmHttpService} from '../../services/api/http/film-http.service';

@Component({
  selector: 'app-liked-films-page',
  templateUrl: './liked-films-page.component.html',
  styleUrls: ['./liked-films-page.component.scss']
})
export class LikedFilmsPageComponent implements OnInit {
  public films: Film[];
  public isLoading: boolean = false;

  constructor(private themeService: ThemeService,
              private filmHttpService: FilmHttpService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.filmHttpService.getLikedFilms().subscribe(
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
