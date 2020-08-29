import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

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
  loginResultSub: Subscription;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginResultSub = this.authService.loginEvent$.subscribe(loginResult => {
      if(loginResult.succeeded)
        this.router.navigate(['/']);
      else
        this.errorMessage = loginResult.errorMessage;
    });
  }

  ngOnDestroy(): void {
    this.loginResultSub?.unsubscribe();
  }

  onSubmit(): void {
    this.authService.login(this.usernameOrEmail, this.password);
  }
}
