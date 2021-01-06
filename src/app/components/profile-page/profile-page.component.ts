import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {UserHttpService} from '../../services/api/http/user-http.service';
import {AuthService} from '../../services/auth.service';
import {LoginResult} from '../../models/result-models/login-result';
import {Router} from '@angular/router';
import User from '../../models/user';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  public account: User;

  public get avatarUrl(): string {
    return this.account.avatarUrl ?
      `url(${this.account.avatarUrl})` :
      'url(assets/image_not_found.png)'
  }

  private subscriptions: Subscription[] = [];

  constructor(private userHttpService: UserHttpService,
              private authService: AuthService,
              private router: Router,
              private themeService: ThemeService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.authService.loginEvent$.subscribe((res: LoginResult) => {
        if (res == undefined) {
          this.router.navigate(['']);
        }
      })
    );

    this.isLoading = true;
    this.userHttpService.getSelfAccount().subscribe(
      (res: User) => {
        this.account = res;
        this.isLoading = false;
      },
      (err) => {
        console.error(err);
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy(): void {
    for (let sub of this.subscriptions) {
      sub?.unsubscribe();
    }
  }

  toLikedFilms(): void {
    this.router.navigate(['likes']);
  }
}
