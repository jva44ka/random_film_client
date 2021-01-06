import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {UserHttpService} from '../../services/api/http/user-http.service';
import {AuthService} from '../../services/auth.service';
import {LoginResult} from '../../models/result-models/login-result';
import {Router} from '@angular/router';
import User from '../../models/user';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  public isLoading: boolean = false;
  public account: User;

  private subscriptions: Subscription[] = [];

  constructor(private userHttpService: UserHttpService,
              private authService: AuthService,
              private router: Router) { }

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

}
