import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Guid} from 'guid-typescript';
import {Subscription} from 'rxjs';
import {FilmHttpService} from '../../services/api/http/film-http.service';
import Film from '../../models/film';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss']
})
export class FilmPageComponent implements OnInit, OnDestroy {
  id: Guid;
  film: Film;
  private paramSub: Subscription;
  private filmSub: Subscription;

  constructor(private route: ActivatedRoute,
              private filmHttpService: FilmHttpService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.paramSub = this.route.params.subscribe(params => {
      this.id = Guid.parse(params['id']);
      console.log('Film id is: ' + this.id);

      this.filmSub = this.filmHttpService.getFilmById(this.id, this.authService.getUserId())
        .subscribe((resFilm: Film) => {
        this.film = resFilm;
        console.log(resFilm);
      });
    });
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
    this.filmSub.unsubscribe();
  }

}
