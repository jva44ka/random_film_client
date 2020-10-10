import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Error} from '../../models/error';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

  usernameOrEmail: string;
  password: string;

  errorMessage: string;
  errors: Error[];
  loginResultSub: Subscription;

  constructor(private authService: AuthService,
              private router: Router,
              private themeService: ThemeService) { }

  ngOnInit(): void {
    this.loginResultSub = this.authService.loginEvent$.subscribe(loginResult => {
      if(loginResult?.loggedIn)
        this.router.navigate(['/']);
      else
        this.errorMessage = "Неверный логин и/или пароль";
    });
  }

  ngOnDestroy(): void {
    this.loginResultSub?.unsubscribe();
  }

  onSubmit(): void {
    this.authService.login(this.usernameOrEmail, this.password);
  }
}
