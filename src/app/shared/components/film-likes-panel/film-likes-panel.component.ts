import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Subscription} from 'rxjs';
import {LikeOrDislikeRequest} from '../../../models/request-models/like-or-dislike-request';
import {UserFilmHttpService} from '../../../services/api/http/user-film-http.service';

@Component({
  selector: 'film-likes-panel',
  templateUrl: './film-likes-panel.component.html',
  styleUrls: ['./film-likes-panel.component.scss']
})
export class FilmLikesPanelComponent implements OnInit, OnDestroy {

  loggedIn: boolean;
  loginResultSub: Subscription;

  likeBlocked: boolean = false;
  dislikeBlocked: boolean = false;

  @Input() film;

  constructor(public authService: AuthService,
              public userFilmHttpService: UserFilmHttpService) { }

  ngOnInit(): void {
    this.loggedIn = !!this.authService.getAccessToken();
    this.loginResultSub = this.authService.loginEvent$.subscribe(res => {
      if(res)
        this.loggedIn = res.loggedIn;
      else
        this.loggedIn = false;
    });
  }

  like(): void {
    let req: LikeOrDislikeRequest = new LikeOrDislikeRequest();
    req.userId = this.authService.getUserId();
    req.filmId = this.film.id;

    this.likeBlocked = true;

    switch (this.film.isLiked){
      case (true): {
        req.likeOrDislike = null;
        this.userFilmHttpService.likeOrDislike(req).subscribe(res => {
          this.film.isLiked = null;
          this.likeBlocked = false;
        });
        break;
      }
      case (false): {
        req.likeOrDislike = true;
        this.userFilmHttpService.likeOrDislike(req).subscribe(res => {
          this.film.isLiked = true;
          this.likeBlocked = false;
        });
        break;
      }
      case (null): {
        req.likeOrDislike = true;
        this.userFilmHttpService.likeOrDislike(req).subscribe(res => {
          this.film.isLiked = true;
          this.likeBlocked = false;
        });
        break;
      }
    }
  }

  dislike(): void {
    let req: LikeOrDislikeRequest = new LikeOrDislikeRequest();
    req.userId = this.authService.getUserId();
    req.filmId = this.film.id;

    this.dislikeBlocked = true;

    switch (this.film.isLiked){
      case (true): {
        req.likeOrDislike = false;
        this.userFilmHttpService.likeOrDislike(req).subscribe(res => {
          this.film.isLiked = false;
          this.dislikeBlocked = false;
        });
        break;
      }
      case (false): {
        req.likeOrDislike = null;
        this.userFilmHttpService.likeOrDislike(req).subscribe(res => {
          this.film.isLiked = null;
          this.dislikeBlocked = false;
        });
        break;
      }
      case (null): {
        req.likeOrDislike = false;
        this.userFilmHttpService.likeOrDislike(req).subscribe(
        res => {
          this.film.isLiked = false;
          this.dislikeBlocked = false;
        });
        break;
      }
    }
  }

  ngOnDestroy(): void {
    this.loginResultSub.unsubscribe();
  }

}
